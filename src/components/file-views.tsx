import { resume } from "@/data/resume";
import { ResumeBrutalist } from "./resume-brutalist";

const accent = "var(--accent)";
const muted = "var(--muted)";
const dim = "var(--dim)";
const rule = "var(--rule)";

const Comment = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: muted }}>{children}</span>
);

const SectionHeader = ({ id, title }: { id: string; title: string }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
    <span style={{ color: accent, fontWeight: 700 }}>##</span>
    <span style={{ fontWeight: 700, letterSpacing: "0.02em", fontSize: 13 }}>{title}</span>
    <span style={{ flex: 1, borderTop: `1px dashed ${rule}`, marginTop: 1 }} />
    <span style={{ color: muted, fontSize: 11 }}>§{id}</span>
  </div>
);

export function WhoAmI() {
  return (
    <div style={{ marginBottom: 4 }}>
      <div style={{ marginBottom: 6 }}>
        <Comment># charles-frank/whoami</Comment>
      </div>
      <div style={{ fontSize: 22, fontWeight: 700, lineHeight: 1.1, marginBottom: 4 }}>
        {resume.name}
        <span style={{ color: accent }}>_</span>
      </div>
      <div style={{ color: dim, maxWidth: 680, marginBottom: 10 }}>{resume.taglines.technical}</div>
      <div style={{ color: dim, maxWidth: 680 }}>{resume.taglines.general}</div>
      <div style={{ color: muted, marginTop: 12, fontSize: 12 }}>
        type <span style={{ color: accent }}>ls</span> to explore files, or{" "}
        <span style={{ color: accent }}>help</span> for commands.
      </div>
    </div>
  );
}

export const FILES = [
  "contact.txt",
  "experience.txt",
  "projects.txt",
  "skills.txt",
  "education.txt",
  "resume.pdf",
] as const;

export type FileName = (typeof FILES)[number];

export function Ls() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "2px 18px" }}>
      {FILES.map((f) => (
        <div key={f} style={{ color: f.endsWith(".pdf") ? accent : "var(--fg)" }}>
          {f}
        </div>
      ))}
    </div>
  );
}

export function Help() {
  const cmds: Array<[string, string]> = [
    ["help", "show this list"],
    ["whoami", "who is charles frank?"],
    ["ls", "explore files"],
    ["cat [filename]", "read file to output"],
    ["theme [light/dark]", "switch theme (default: auto)"],
    ["clear", "clear the terminal"],
  ];
  return (
    <div>
      <div style={{ color: muted, marginBottom: 6 }}>
        <Comment># available commands</Comment>
      </div>
      <table style={{ borderCollapse: "collapse" }}>
        <tbody>
          {cmds.map(([cmd, desc]) => (
            <tr key={cmd}>
              <td style={{ color: accent, paddingRight: 24, verticalAlign: "top" }}>{cmd}</td>
              <td style={{ color: dim }}>{desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ContactTxt() {
  return (
    <div>
      <div style={{ color: muted, marginBottom: 6 }}>
        <Comment># contact.txt</Comment>
      </div>
      <div style={{ paddingLeft: 14, borderLeft: `2px solid ${accent}`, color: dim, lineHeight: 1.6 }}>
        <div>
          <span style={{ color: muted }}>email&nbsp;&nbsp;&nbsp;&nbsp;=</span>{" "}
          <a href={`mailto:${resume.email}`}>{resume.email}</a>
        </div>
        <div>
          <span style={{ color: muted }}>phone&nbsp;&nbsp;&nbsp;&nbsp;=</span> {resume.phone}
        </div>
        <div>
          <span style={{ color: muted }}>github&nbsp;&nbsp;&nbsp;=</span>{" "}
          <a href={`https://${resume.github}`} target="_blank" rel="noreferrer">
            @{resume.githubHandle}
          </a>
        </div>
        <div>
          <span style={{ color: muted }}>linkedin&nbsp;=</span>{" "}
          <a href={`https://${resume.linkedin}`} target="_blank" rel="noreferrer">
            {resume.linkedinHandle}
          </a>
        </div>
        <div>
          <span style={{ color: muted }}>loc&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=</span> {resume.location}
        </div>
      </div>
    </div>
  );
}

export function ExperienceTxt() {
  return (
    <div>
      <SectionHeader id="01" title="experience" />
      {resume.experience.map((e, i) => (
        <div
          key={i}
          style={{
            marginBottom: 14,
            paddingBottom: 10,
            borderBottom: i < resume.experience.length - 1 ? `1px dashed ${rule}` : "none",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12, flexWrap: "wrap" }}>
            <div style={{ fontSize: 14 }}>
              <span style={{ color: accent }}>›</span>{" "}
              <span style={{ fontWeight: 700 }}>{e.role}</span>
              <span style={{ color: muted }}> @ </span>
              <span>{e.org}</span>
            </div>
            <div style={{ color: muted, fontSize: 12, fontVariantNumeric: "tabular-nums" }}>
              [{e.start} .. {e.end}]
            </div>
          </div>
          <div style={{ color: muted, fontSize: 12, marginBottom: 6, paddingLeft: 16 }}>{e.location}</div>
          {e.bullets.map((b, j) => (
            <div key={j} style={{ paddingLeft: 16, color: dim, marginBottom: 2 }}>
              <span style={{ color: muted }}>·</span> {b}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export function SkillsTxt() {
  return (
    <div>
      <SectionHeader id="03" title="skills" />
      {Object.entries(resume.skills).map(([k, v]) => (
        <div key={k} style={{ marginBottom: 10 }}>
          <div style={{ color: muted, marginBottom: 3 }}>
            <Comment>{`// ${k.toLowerCase()}`}</Comment>
          </div>
          <div style={{ color: dim, lineHeight: 1.6 }}>
            {v.map((x, j) => (
              <span key={j}>
                <span style={{ color: "var(--fg)" }}>{x}</span>
                {j < v.length - 1 && <span style={{ color: muted }}>{" , "}</span>}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function EducationTxt() {
  return (
    <div>
      <SectionHeader id="04" title="education" />
      <div style={{ fontWeight: 700, fontSize: 14 }}>{resume.education.school}</div>
      <div style={{ color: dim, marginTop: 2 }}>{resume.education.degree}</div>
      <div style={{ color: muted, marginTop: 2, fontSize: 12 }}>{resume.education.graduation}</div>
      <div style={{ color: muted, marginTop: 10 }}>
        <Comment>{"// coursework"}</Comment>
      </div>
      <div style={{ marginTop: 4, color: dim, lineHeight: 1.6 }}>{resume.education.coursework.join(", ")}</div>
    </div>
  );
}

export function ProjectsTxt() {
  return (
    <div>
      <SectionHeader id="02" title="projects" />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {resume.projects.map((p, i) => {
          const cardStyle: React.CSSProperties = {
            display: "block",
            border: `1px solid ${rule}`,
            padding: "12px 14px",
            borderRadius: 4,
            background: "var(--card-bg)",
            gridColumn: i === 0 ? "1 / -1" : "auto",
            color: "inherit",
            textDecoration: "none",
            transition: "border-color 120ms ease, background 120ms ease",
          };
          const inner = (
            <>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 8, marginBottom: 4, flexWrap: "wrap" }}>
                <div style={{ fontWeight: 700, fontSize: 15 }}>
                  <span style={{ color: accent }}>{"<"}</span>
                  {p.name}
                  <span style={{ color: accent }}>{"/>"}</span>
                </div>
                {p.url && (
                  <span style={{ fontSize: 12, color: accent }}>↗ {p.url}</span>
                )}
              </div>
              <div style={{ color: dim, fontWeight: 700, marginBottom: 6 }}>{p.tagline}</div>
              {p.bullets.map((b, j) => (
                <div key={j} style={{ color: dim, marginBottom: 2 }}>
                  <span style={{ color: muted }}>·</span> {b}
                </div>
              ))}
              <div style={{ marginTop: 8 }}>
                {p.stack.map((s, j) => (
                  <span
                    key={j}
                    style={{
                      display: "inline-block",
                      padding: "1px 6px",
                      background: "var(--pill-bg)",
                      borderRadius: 3,
                      fontSize: 11,
                      marginRight: 4,
                      marginBottom: 4,
                      color: dim,
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </>
          );
          return p.url ? (
            <a key={i} href={`https://${p.url}`} target="_blank" rel="noreferrer" className="project-card" style={cardStyle}>
              {inner}
            </a>
          ) : (
            <div key={i} className="project-card" style={cardStyle}>
              {inner}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function ResumePdf() {
  return (
    <div>
      <div style={{ color: muted, marginBottom: 8, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
        <Comment># rendering resume.pdf — editorial brutalist layout</Comment>
        <a
          href="/resume.pdf"
          download="Charles_Frank_Resume.pdf"
          style={{
            display: "inline-block",
            border: `1px solid ${accent}`,
            padding: "4px 10px",
            borderRadius: 3,
            color: accent,
            fontSize: 12,
            textDecoration: "none",
          }}
        >
          ↓ download pdf
        </a>
      </div>
      <ResumeBrutalist />
    </div>
  );
}
