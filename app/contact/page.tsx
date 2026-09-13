import Link from "next/link";

export default function ContactPage() {
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
          maxWidth: "550px",
          width: "100%",
          backgroundColor: "#1e293b",
          padding: "35px",
          borderRadius: "16px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
          border: "1px solid #334155",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "28px",
            color: "#38bdf8",
            marginBottom: "10px",
          }}
        >
          Contact Me 📬
        </h1>

        <p
          style={{
            color: "#94a3b8",
            fontSize: "15px",
            marginBottom: "30px",
          }}
        >
          Feel free to reach out for collaborations or just a friendly chat!
        </p>

        {/* Contact Details */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              backgroundColor: "#0f172a",
              padding: "15px",
              borderRadius: "10px",
              border: "1px solid #334155",
            }}
          >
            <span style={{ color: "#34d399", fontWeight: "bold" }}>
              Email:{" "}
            </span>
            <span style={{ color: "#cbd5e1" }}>nourhenriahi11@gmail.com</span>
          </div>

          <div
            style={{
              backgroundColor: "#0f172a",
              padding: "15px",
              borderRadius: "10px",
              border: "1px solid #334155",
            }}
          >
            <span style={{ color: "#34d399", fontWeight: "bold" }}>
              GitHub:{" "}
            </span>
            <span style={{ color: "#cbd5e1" }}>
              https://github.com/nourhenriahii
            </span>
          </div>

          <div
            style={{
              backgroundColor: "#0f172a",
              padding: "15px",
              borderRadius: "10px",
              border: "1px solid #334155",
            }}
          >
            <span style={{ color: "#34d399", fontWeight: "bold" }}>
              Location:{" "}
            </span>
            <span style={{ color: "#cbd5e1" }}>Tunisia</span>
          </div>
        </div>

        {/* Back Button */}
        <div>
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
