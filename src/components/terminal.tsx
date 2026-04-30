"use client";

import { useEffect, useRef, useState } from "react";

import {
  ContactTxt,
  EducationTxt,
  ExperienceTxt,
  FILES,
  Help,
  Ls,
  ProjectsTxt,
  ResumePdf,
  SkillsTxt,
  WhoAmI,
  type FileName,
} from "./file-views";

type Entry = {
  id: number;
  input: string;
  output: React.ReactNode;
};

const FILE_RENDERERS: Record<FileName, () => React.ReactNode> = {
  "contact.txt": () => <ContactTxt />,
  "experience.txt": () => <ExperienceTxt />,
  "projects.txt": () => <ProjectsTxt />,
  "skills.txt": () => <SkillsTxt />,
  "education.txt": () => <EducationTxt />,
  "resume.pdf": () => <ResumePdf />,
};

function runCommand(raw: string): React.ReactNode {
  const trimmed = raw.trim();
  if (!trimmed) return null;
  const [cmd, ...rest] = trimmed.split(/\s+/);

  switch (cmd) {
    case "help":
      return <Help />;
    case "whoami":
      return <WhoAmI />;
    case "ls":
      return <Ls />;
    case "clear":
      return "__clear__";
    case "theme": {
      const arg = rest[0];
      if (arg === "light" || arg === "dark") {
        document.documentElement.setAttribute("data-theme", arg);
        try {
          localStorage.setItem("theme", arg);
        } catch {}
        return <span style={{ color: "var(--dim)" }}>theme set to {arg}</span>;
      }
      if (arg === "auto" || !arg) {
        document.documentElement.removeAttribute("data-theme");
        try {
          localStorage.removeItem("theme");
        } catch {}
        return <span style={{ color: "var(--dim)" }}>theme set to auto (system)</span>;
      }
      return (
        <span style={{ color: "var(--muted)" }}>
          theme: usage: theme [light|dark|auto]
        </span>
      );
    }
    case "cat": {
      const target = rest[0];
      if (!target) {
        return (
          <span style={{ color: "var(--muted)" }}>
            cat: missing file operand. try <span style={{ color: "var(--accent)" }}>ls</span>.
          </span>
        );
      }
      const candidates = [target, `${target}.txt`, `${target}.pdf`];
      const match = candidates.find((c) => (FILES as readonly string[]).includes(c));
      if (match) {
        return FILE_RENDERERS[match as FileName]();
      }
      return (
        <span style={{ color: "var(--muted)" }}>
          cat: {target}: No such file or directory
        </span>
      );
    }
    default:
      return (
        <span style={{ color: "var(--muted)" }}>
          {cmd}: command not found. type <span style={{ color: "var(--accent)" }}>help</span>.
        </span>
      );
  }
}

const PROMPT = (
  <span style={{ color: "var(--accent)", userSelect: "none" }}>$&nbsp;</span>
);

export function Terminal() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const idRef = useRef(0);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    scrollerRef.current?.scrollTo({ top: scrollerRef.current.scrollHeight, behavior: "smooth" });
  }, [entries]);

  function submit() {
    const raw = input;
    const out = runCommand(raw);

    if (out === "__clear__") {
      setEntries([]);
    } else {
      setEntries((prev) => [...prev, { id: idRef.current++, input: raw, output: out }]);
    }

    if (raw.trim()) {
      setHistory((prev) => [...prev, raw]);
    }
    setInput("");
    setHistoryIdx(null);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      submit();
      return;
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      const next = historyIdx === null ? history.length - 1 : Math.max(0, historyIdx - 1);
      setHistoryIdx(next);
      setInput(history[next]);
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIdx === null) return;
      const next = historyIdx + 1;
      if (next >= history.length) {
        setHistoryIdx(null);
        setInput("");
      } else {
        setHistoryIdx(next);
        setInput(history[next]);
      }
      return;
    }
    if (e.key === "l" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      setEntries([]);
    }
  }

  const showHint = input.length === 0;

  return (
    <div
      ref={scrollerRef}
      onClick={() => inputRef.current?.focus()}
      className="terminal-scroller"
      style={{
        minHeight: "100vh",
        cursor: "text",
        overflowY: "auto",
      }}
    >
      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        <div style={{ color: "var(--muted)", fontSize: 12, marginBottom: 18 }}>
          # charles-frank/terminal · v1.0.0 · {new Date().getFullYear()}
        </div>

        {entries.map((entry) => (
          <div key={entry.id} style={{ marginBottom: 18 }}>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {PROMPT}
              <span>{entry.input}</span>
            </div>
            {entry.output && <div style={{ marginTop: 8 }}>{entry.output}</div>}
          </div>
        ))}

        <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
          {PROMPT}
          <span style={{ position: "relative", display: "inline-flex", alignItems: "center", flex: 1, minWidth: 0 }}>
            <span style={{ whiteSpace: "pre" }}>{input}</span>
            {showHint ? (
              <span
                aria-hidden
                style={{
                  color: "var(--muted)",
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              >
                <span className="cursor-char">h</span>elp
              </span>
            ) : (
              <span className="cursor" aria-hidden />
            )}
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setHistoryIdx(null);
              }}
              onKeyDown={onKeyDown}
              spellCheck={false}
              autoCapitalize="off"
              autoCorrect="off"
              autoComplete="off"
              aria-label="terminal input"
              style={{
                position: "absolute",
                inset: 0,
                opacity: 0,
                border: "none",
                outline: "none",
                background: "transparent",
                width: "100%",
                font: "inherit",
                color: "transparent",
                caretColor: "transparent",
              }}
            />
          </span>
        </div>
      </div>
    </div>
  );
}
