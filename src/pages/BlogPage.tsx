import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BlogPost from "./BlogPost";
import styles from "./BlogPage.module.scss";
import { RootState, AppDispatch } from "../store/store";
import { fetchPosts, setLanguage } from "../store/blogSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { Helmet } from "react-helmet"; // Import Helmet for SEO

const BlogPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { posts, loading, error, language } = useSelector(
    (state: RootState) => state.blog
  );

  const postsPerPage = 4;
  const location = useLocation();
  const navigate = useNavigate();

  const getPageNumber = () => {
    const params = new URLSearchParams(location.search);
    return Number(params.get("page")) || 1;
  };

  const currentPage = getPageNumber();
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const sortedPosts = posts
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const currentPosts = sortedPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const handlePageChange = (newPage: number) => {
    navigate(`/blog?page=${newPage}`);
  };

  useEffect(() => {
    localStorage.setItem("language", "en");
    dispatch(setLanguage("en"));
    dispatch(fetchPosts("en"));
  }, [dispatch]);

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.blogPageWrapper}>
      {/* SEO Metadata */}
      <Helmet>
        <title>Our Blog - Insights and Updates from UB Market</title>
        <meta
          name="description"
          content="Stay updated with the latest insights and news from UB Market. Explore our blog for articles on quality products and market trends."
        />
        <meta
          name="keywords"
          content="UB Market, blog, quality products, market trends, insights, news"
        />
        <meta property="og:title" content="Our Blog - UB Market" />
        <meta
          property="og:description"
          content="Explore articles, insights, and updates from UB Market. Discover quality products and market trends."
        />
        <meta
          property="og:image"
          content="https://ub-market.com/images/logo.webp"
        />
        <meta property="og:url" content="https://ub-market.com/blog" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ub-market.com/blog" />
        
      </Helmet>

      <div className={styles.blogTitle}>
        <h1>Our Blog</h1>
      </div>

      {language === "ua" ? (
        <div className={styles.centeredMessage}>
          <p>Blog in the Ukrainian language is not available.</p>
        </div>
      ) : (
        <div className={styles.blogContent}>
          <ul className={styles.blogList}>
            {currentPosts.map((post) => (
              <BlogPost key={post.id} post={post} language={language} />
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
      )}
    </div>
  );
};

export default BlogPage;
