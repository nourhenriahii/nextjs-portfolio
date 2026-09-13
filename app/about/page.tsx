import Link from "next/link";

export default function AboutPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0f172a",
        color: "#ffffff",
        padding: "40px",
        fontFamily: "sans-serif",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "#38bdf8", fontSize: "32px" }}>About Me 👩‍💻</h1>
      <p style={{ color: "#cbd5e1", fontSize: "18px", marginTop: "20px" }}>
        Hello! I am Nourhen, a Full-Stack Web Developer.
      </p>

      <div style={{ marginTop: "30px" }}>
        <Link
          href="/"
          style={{
            color: "#ffffff",
            backgroundColor: "#2563eb",
            padding: "10px 20px",
            borderRadius: "8px",
            textDecoration: "none",
          }}
        >
          ⬅️ Back to Home
        </Link>
      </div>
    </div>
  );
}
