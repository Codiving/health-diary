import { Calendar } from "components";

export default function Home() {
  return (
    <div
      style={{
        padding: "0 0.5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Calendar />
    </div>
  );
}
