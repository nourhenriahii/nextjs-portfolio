import Link from "next/link";

export default function ProjectsPage() {
  const projectsList = [
    {
      title: "Favorite Places Manager",
      description:
        "A React and Redux web application to manage, filter, and save favorite destinations with state persistence.",
      tech: ["React", "Redux", "TypeScript"],
    },
    {
      title: "Counter & Task App",
      description:
        "An interactive state management system built to handle complex dynamic UI updates cleanly.",
      tech: ["Next.js", "TypeScript", "CSS Modules"],
    },
    {
      title: "Gym Management Platform",
      description:
        "A modern landing interface for user administration, membership plans, and rate limiting features.",
      tech: ["React", "Next.js", "Tailwind CSS"],
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0f172a",
        color: "#ffffff",
        padding: "40px 20px",
        fontFamily: "sans-serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          width: "100%",
          backgroundColor: "#1e293b",
          padding: "35px",
          borderRadius: "16px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
          border: "1px solid #334155",
        }}
      >
        <h1
          style={{
            fontSize: "28px",
            color: "#38bdf8",
            marginBottom: "10px",
            textAlign: "center",
          }}
        >
          My Projects 🚀
        </h1>

        <p
          style={{
            color: "#94a3b8",
            fontSize: "15px",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          Here are some of the web applications I have built recently:
        </p>

        <div style={{ display: "grid", gap: "20px", marginBottom: "30px" }}>
          {projectsList.map((project, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#0f172a",
                padding: "20px",
                borderRadius: "12px",
                border: "1px solid #334155",
              }}
            >
              <h3
                style={{
                  color: "#34d399",
                  fontSize: "20px",
                  marginBottom: "8px",
                }}
              >
                {project.title}
              </h3>
              <p
                style={{
                  color: "#cbd5e1",
                  fontSize: "14px",
                  lineHeight: "1.5",
                  marginBottom: "15px",
                }}
              >
                {project.description}
              </p>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    style={{
                      backgroundColor: "#1e293b",
                      color: "#7dd3fc",
                      padding: "4px 10px",
                      borderRadius: "6px",
                      fontSize: "12px",
                      border: "1px solid #475569",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link
            href="/"
            style={{
              display: "inline-block",
              backgroundColor: "#2563eb",
              color: "#ffffff",
              padding: "10px 20px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "15px",
            }}
          >
            ⬅️ Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
