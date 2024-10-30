// src/pages/BlogPage.tsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BlogPost from "./BlogPost";
import styles from "./BlogPage.module.scss";
import useFetchPosts from "../hooks/useFetchPosts";

const BlogPage: React.FC = () => {
  const { posts, loading, error } = useFetchPosts();

  const postsPerPage = 5;
  const location = useLocation();
  const navigate = useNavigate();

  const getPageNumber = () => {
    const params = new URLSearchParams(location.search);
    return Number(params.get("page")) || 1;
  };

  const currentPage = getPageNumber();
  const totalPages = Math.ceil(posts.length / postsPerPage);

  // Slice posts based on the current page
  const currentPosts = posts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const handlePageChange = (newPage: number) => {
    navigate(`/blog?page=${newPage}`);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.blogPageWrapper}>
      <div className={styles.blogTitle}>
        <h1>Our Blog</h1>
      </div>

      <div className={styles.blogContent}>
        <ul className={styles.blogList}>
          {currentPosts.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </ul>

        <div className={styles.pagination}>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
