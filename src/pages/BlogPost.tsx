// src/components/BlogPost.tsx
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
  };
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
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
