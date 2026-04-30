import { resume } from "@/data/resume";

const accent = "#c1440e";
const fg = "#1a1714";
const bg = "#f4f1ea";
const muted = "rgba(26,23,20,0.55)";
const rule = "rgba(26,23,20,0.22)";

const Hx = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      fontSize: 11,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      fontWeight: 700,
      color: fg,
      paddingBottom: 5,
      borderBottom: `1.5px solid ${fg}`,
      marginBottom: 11,
    }}
  >
    {children}
  </div>
);

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span
    style={{
      display: "inline-block",
      padding: "1px 6px",
      border: `1px solid ${rule}`,
      fontSize: 10,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: muted,
      marginRight: 4,
      marginBottom: 3,
    }}
  >
    {children}
  </span>
);

export function ResumeBrutalist() {
  return (
    <div
      className="resume-sheet"
      style={{
        background: bg,
        color: fg,
        fontFamily: '"JetBrains Mono", "IBM Plex Mono", ui-monospace, monospace',
        fontSize: 12,
        lineHeight: 1.45,
        borderRadius: 4,
        boxShadow: "0 0 0 1px rgba(214,211,204,0.1), 0 8px 24px rgba(0,0,0,0.4)",
      }}
    >
      <header style={{ marginBottom: 16 }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            borderBottom: `2px solid ${fg}`,
            paddingBottom: 10,
            marginBottom: 8,
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div>
            <div
              style={{
                fontSize: 10,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: muted,
                marginBottom: 6,
              }}
            >
              VOL.&nbsp;26 · NO.&nbsp;04 · NEW YORK EDITION
            </div>
            <h1
              style={{
                margin: 0,
                fontSize: 52,
                fontFamily: '"Fraunces", "Times New Roman", serif',
                fontWeight: 400,
                letterSpacing: "-0.02em",
                lineHeight: 0.95,
              }}
            >
              Charles Frank<span style={{ color: accent }}>.</span>
            </h1>
          </div>
          <div style={{ textAlign: "right", fontSize: 12, lineHeight: 1.55 }}>
            <div
              style={{
                color: muted,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 5,
                fontSize: 10,
              }}
            >
              Contact
            </div>
            <div>{resume.email}</div>
            <div>{resume.phone}</div>
            <div>
              <a
                href={`https://${resume.github}`}
                style={{ color: fg, textDecoration: "none", borderBottom: `1px dotted ${rule}` }}
              >
                {resume.github}
              </a>
            </div>
            <div>
              <a
                href={`https://${resume.linkedin}`}
                style={{ color: fg, textDecoration: "none", borderBottom: `1px dotted ${rule}` }}
              >
                linkedin/charles-frank
              </a>
            </div>
            <div style={{ color: muted, marginTop: 5 }}>{resume.location}</div>
          </div>
        </div>
        <div
          style={{
            fontFamily: '"Fraunces", "Times New Roman", serif',
            fontSize: 16,
            fontStyle: "italic",
            lineHeight: 1.3,
            maxWidth: 640,
            color: fg,
            marginTop: 6,
          }}
        >
          &ldquo;{resume.taglines.general}&rdquo;
        </div>
      </header>

      <div className="resume-body-grid">
        <div>
          <section style={{ marginBottom: 18 }}>
            <Hx>Professional Experience</Hx>
            {resume.experience.map((e, i) => (
              <div key={i} style={{ marginBottom: 12 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginBottom: 2,
                    flexWrap: "wrap",
                    gap: 8,
                  }}
                >
                  <div style={{ fontWeight: 700, fontSize: 13 }}>
                    {e.role} <span style={{ color: muted, fontWeight: 400 }}>— {e.org}</span>
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: muted,
                      fontVariantNumeric: "tabular-nums",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {e.start} → {e.end}
                  </div>
                </div>
                <div style={{ color: muted, fontSize: 12, marginBottom: 5 }}>{e.location}</div>
                <ul style={{ margin: 0, paddingLeft: 16, listStyle: "none" }}>
                  {e.bullets.map((b, j) => (
                    <li key={j} style={{ position: "relative", marginBottom: 3 }}>
                      <span style={{ position: "absolute", left: -16, color: accent }}>›</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section>
            <Hx>Selected Projects</Hx>
            {resume.projects.map((p, i) => (
              <div
                key={i}
                style={{
                  marginBottom: 12,
                  paddingBottom: 8,
                  borderBottom: i < resume.projects.length - 1 ? `1px dashed ${rule}` : "none",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 6 }}>
                  <div style={{ fontWeight: 700, fontSize: 13 }}>
                    {p.name}
                    {p.url && (
                      <a
                        href={`https://${p.url}`}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          marginLeft: 10,
                          color: accent,
                          textDecoration: "none",
                          fontWeight: 400,
                          fontSize: 12,
                        }}
                      >
                        ↗ {p.url}
                      </a>
                    )}
                  </div>
                </div>
                <div style={{ color: muted, fontStyle: "italic", marginBottom: 4, fontSize: 12 }}>
                  {p.tagline}
                </div>
                <ul style={{ margin: 0, paddingLeft: 16, listStyle: "none" }}>
                  {p.bullets.map((b, j) => (
                    <li key={j} style={{ position: "relative", marginBottom: 3 }}>
                      <span style={{ position: "absolute", left: -16, color: accent }}>›</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: 6 }}>
                  {p.stack.map((s, j) => (
                    <Tag key={j}>{s}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </section>
        </div>

        <div>
          <section style={{ marginBottom: 16 }}>
            <Hx>Education</Hx>
            <div style={{ fontWeight: 700, fontSize: 13 }}>{resume.education.school}</div>
            <div style={{ marginTop: 2, fontSize: 12 }}>{resume.education.degree}</div>
            <div style={{ color: muted, fontSize: 12, marginTop: 2 }}>{resume.education.graduation}</div>
            <div
              style={{
                marginTop: 8,
                fontSize: 11,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: muted,
              }}
            >
              Coursework
            </div>
            <div style={{ marginTop: 3, color: fg, fontSize: 12, lineHeight: 1.5 }}>
              {resume.education.coursework.join(" · ")}
            </div>
          </section>

          <section style={{ marginBottom: 16 }}>
            <Hx>Technical</Hx>
            {Object.entries(resume.skills).map(([k, v]) => (
              <div key={k} style={{ marginBottom: 9 }}>
                <div
                  style={{
                    fontSize: 11,
                    color: muted,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: 3,
                  }}
                >
                  {k}
                </div>
                <div style={{ fontSize: 12, lineHeight: 1.5 }}>{v.join(" · ")}</div>
              </div>
            ))}
          </section>

          <section>
            <Hx>Off-Shift</Hx>
            {Object.entries(resume.interests).map(([k, v]) => (
              <div key={k} style={{ marginBottom: 8 }}>
                <div
                  style={{
                    fontSize: 11,
                    color: muted,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: 3,
                  }}
                >
                  {k}
                </div>
                <div style={{ fontSize: 12, lineHeight: 1.5 }}>{v.join(" · ")}</div>
              </div>
            ))}
          </section>
        </div>
      </div>

      <div
        style={{
          marginTop: 14,
          paddingTop: 6,
          borderTop: `1.5px solid ${fg}`,
          display: "flex",
          justifyContent: "space-between",
          fontSize: 10,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: muted,
        }}
      >
        <div>End of Document</div>
        <div>Charles Frank · 2026</div>
      </div>
    </div>
  );
}
