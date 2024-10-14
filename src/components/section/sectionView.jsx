import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./sectionView.scss"; // Add styles for the section

const SectionView = ({ id, backgroundColor, heading, children }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { threshold: 0.01 });

  return (
    <motion.section
      id={id}
      style={{
        "--background-color": backgroundColor,
      }}
      className="section-container"
      ref={sectionRef}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { y: -100 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div className="section-heading">
        <span>{heading}</span>
      </motion.div>

      <motion.div
        className="section-content"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        {children}
      </motion.div>
    </motion.section>
  );
};

export default SectionView;
