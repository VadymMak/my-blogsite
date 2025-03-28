// src/components/BlogPost.tsx (move back to components if it was in pages)
import React from "react";
import styles from "./BlogPost.module.scss";
import ReadMore from "../components/ReadMore";

interface BlogPostProps {
  post: {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    slug?: string; // Optional, for linking
  };
  language: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ post, language }) => {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className={styles.blogPost}>
      <h2>{post.title}</h2>
      <p className={styles.date}>
        <strong>Date: </strong>
        {formattedDate}
      </p>
      <ReadMore content={post.content} excerpt={post.excerpt} />
    </div>
  );
};

export default BlogPost;
