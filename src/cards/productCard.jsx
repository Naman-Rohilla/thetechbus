import "./productCard.scss";

export default function ProductCard({ icon, title, description }) {
  return (
    <>
      <div className="product-card">
        <img height={40} width={40} src={icon} />
        <div>{title}</div>
        <div>{description}</div>
      </div>
    </>
  );
}
