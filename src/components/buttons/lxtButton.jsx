import "./lxtButton.scss";

export default function LxtButton({
  text,
  color = "#4996f0",
  borderRadius = "40",
}) {
  return (
    <div
      className="lxtButton"
      style={{
        "--button-color": color,
        "--border-radius": `${borderRadius}px`,
      }}
    >
      {text}
    </div>
  );
}
