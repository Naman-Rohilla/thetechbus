import "./sectionView.scss"; // Add styles for the section

const SectionView = ({ backgroundColor, heading, children }) => {
  return (
    <section
      style={{
        "--background-color": backgroundColor,
      }}
      className="section-container"
    >
      <div className="section-heading">
        <span>{heading}</span>
      </div>
      <div className="section-content">{children}</div>
    </section>
  );
};

export default SectionView;
