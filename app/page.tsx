import Link from "next/link";

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0f172a",
        color: "#ffffff",
        fontFamily: "sans-serif",
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "#1e293b",
          padding: "40px",
          borderRadius: "16px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
          textAlign: "center",
          maxWidth: "400px",
          border: "1px solid #334155",
        }}
      >
        <h1
          style={{ fontSize: "32px", marginBottom: "10px", color: "#38bdf8" }}
        >
          Hello, I'm Nourhen
        </h1>
        <h4
          style={{
            fontSize: "18px",
            color: "#94a3b8",
            fontWeight: "normal",
            marginBottom: "25px",
          }}
        >
          Welcome to my new Next.js app
        </h4>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/about"
            style={{
              color: "#ffffff",
              backgroundColor: "#2563eb",
              padding: "8px 16px",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "14px",
            }}
          >
            About Me
          </Link>
          <Link
            href="/projects"
            style={{
              color: "#ffffff",
              backgroundColor: "#2563eb",
              padding: "8px 16px",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "14px",
            }}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            style={{
              color: "#ffffff",
              backgroundColor: "#2563eb",
              padding: "8px 16px",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "14px",
            }}
          >
            Contact
          </Link>
        </div>
      </div>
    </main>
  );
}
