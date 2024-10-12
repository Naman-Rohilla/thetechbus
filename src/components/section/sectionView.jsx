import { useEffect, useRef, useState } from "react";
import "./sectionView.scss"; // Add styles for the section

const SectionView = ({ id, backgroundColor, heading, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const observedId = entry.target.getAttribute("id");
          if (observedId === id) {
            if (entry.isIntersecting) {
              setIsVisible(true); // Section is visible
            } else {
              setIsVisible(false); // Section is out of view
            }
          }
        });
      },
      {
        threshold: 0.1, // Adjust this threshold to trigger earlier/later
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [id]);

  return (
    <>
      <section
        id={id}
        style={{
          "--background-color": backgroundColor,
        }}
        className={`section-container `}
        ref={sectionRef}
      >
        <>
          <div
            className={`section-heading ${
              isVisible ? "in-view" : "out-of-view"
            }`}
          >
            <span>{heading}</span>
          </div>
          <div
            className={`section-content ${
              isVisible ? "in-view" : "out-of-view"
            }`}
          >
            {children}
          </div>
        </>
      </section>
    </>
  );
};

export default SectionView;
