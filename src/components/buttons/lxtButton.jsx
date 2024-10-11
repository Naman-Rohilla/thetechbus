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
        backgroundColor: color,
        borderRadius: `${borderRadius}px`,
      }}
    >
      {text}
    </div>
  );
}
