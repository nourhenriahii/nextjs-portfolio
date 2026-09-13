import Link from "next/link";

export const metadata = {
  title: "Nourhen | Portfolio",
  description: "Full-Stack Developer Portfolio built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
          backgroundColor: "#0f172a",
          color: "#ffffff",
          fontFamily: "sans-serif",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Persistent Navbar */}
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 40px",
            backgroundColor: "#1e293b",
            borderBottom: "1px solid #334155",
          }}
        >
          <Link
            href="/"
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#38bdf8",
              textDecoration: "none",
            }}
          >
            Nourhen.dev
          </Link>

          <div style={{ display: "flex", gap: "20px" }}>
            <Link href="/" style={{ color: "#cbd5e1", textDecoration: "none" }}>
              Home
            </Link>
            <Link
              href="/about"
              style={{ color: "#cbd5e1", textDecoration: "none" }}
            >
              About
            </Link>
            <Link
              href="/projects"
              style={{ color: "#cbd5e1", textDecoration: "none" }}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              style={{ color: "#cbd5e1", textDecoration: "none" }}
            >
              Contact
            </Link>
          </div>
        </nav>

        {/* Dynamic Page Content */}
        <main style={{ flex: 1 }}>{children}</main>

        {/* Persistent Footer */}
        <footer
          style={{
            textAlign: "center",
            padding: "20px",
            backgroundColor: "#1e293b",
            borderTop: "1px solid #334155",
            color: "#94a3b8",
            fontSize: "14px",
          }}
        >
          © {new Date().getFullYear()} Nourhen. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
