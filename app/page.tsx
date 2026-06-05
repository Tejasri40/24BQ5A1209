import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Notification Dashboard</h1>

      <br />

      <Link href="/notifications">
        Notifications
      </Link>

      <br />
      <br />

      <Link href="/priority">
        Priority Notifications
      </Link>
    </div>
  );
}