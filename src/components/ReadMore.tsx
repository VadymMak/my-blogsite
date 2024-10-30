// src/components/ReadMore.tsx
import React, { useState } from "react";
import styles from "./ReadMore.module.scss";

interface ReadMoreProps {
  content: string;
  excerpt: string;
}

const ReadMore: React.FC<ReadMoreProps> = ({ content, excerpt }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.readMore}>
      <p>{isExpanded ? excerpt : content}</p>
      <button onClick={toggleReadMore}>
        {isExpanded ? "Show Less" : "Read More"}
      </button>
    </div>
  );
};

export default ReadMore;
