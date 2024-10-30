// src/components/ReadMore.tsx
import React, { useState } from "react";
import styles from "./ReadMore.module.scss";

interface ReadMoreProps {
  content: string; // The full content that will be split into paragraphs
  excerpt: string; // The excerpt to show when not expanded
}

const ReadMore: React.FC<ReadMoreProps> = ({ content, excerpt }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.readMore}>
      {isExpanded ? (
        <div>
          {content.split("\n\n").map((paragraph: string, index: number) => {
            return (
              <div key={index}>
                <br />
                <p key={index}>{paragraph.substring(4)}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <p>{excerpt}</p> // Render the excerpt as a single paragraph
      )}
      <button onClick={toggleReadMore}>
        {isExpanded ? "Show Less" : "Read More"}
      </button>
    </div>
  );
};

export default ReadMore;
