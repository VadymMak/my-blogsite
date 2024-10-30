// src/components/BlogPost.tsx
import React from "react";
import styles from "./BlogPost.module.scss";
import ReadMore from "../components/ReadMore";

interface BlogPostProps {
  post: {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    date: string;
  };
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <div className={styles.blogPost}>
      <h2>{post.title}</h2>
      <p className={styles.date}>{post.date}</p>
      <ReadMore content={post.content} excerpt={post.excerpt} />
    </div>
  );
};

export default BlogPost;
