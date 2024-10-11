import "./actionCard.scss";

export default function ActionCard({
  id,
  totalSize,
  icon,
  heading,
  content,
  enableContent,
  setActiveCard,
}) {
  function handleClick() {
    if (id == totalSize - 1) {
      setActiveCard(0);
    } else {
      setActiveCard(id + 1);
    }
  }

  return (
    <>
      <div
        style={{
          height: enableContent ? "200px" : "50px",
          boxShadow: enableContent
            ? "5px 10px 50px rgba(0, 0, 0, 0.1)"
            : "none",
          backgroundColor: enableContent ? "white" : "transparent",
        }}
        className="action-card-container"
      >
        <div
          style={{
            color: enableContent ? "rgba(0,0,0,1)" : "rgba(0,0,0,0.5)",
            fontWeight: enableContent ? "rgba(0,0,0,1)" : "rgba(0,0,0,0.5)",
            fontSize: enableContent ? "1.2rem" : "1rem",
          }}
          className="action-heading"
        >
          <img src={icon} height={30} width={30} />
          <span
            style={{
              width: "80%",
            }}
            onClick={() => setActiveCard(id)}
          >
            {heading}
          </span>
          {enableContent ? (
            <span onClick={() => handleClick()}>-</span>
          ) : (
            <span onClick={() => setActiveCard(id)}>+</span>
          )}
        </div>
        {enableContent && (
          <div className="action-content">
            <span>{content}</span>
          </div>
        )}
      </div>
    </>
  );
}
