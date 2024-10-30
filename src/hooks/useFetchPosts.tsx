import { useEffect, useState } from "react";
import axios from "axios";

export interface BlogPost {
  id: number;
  title: string;
  content: string;
  date: string;
  excerpt: string;
}

export interface UseFetchBlogPosts {
  posts: BlogPost[];
  loading: boolean;
  error: string | null;
}

// src/hooks/useFetchBlogPosts.ts

const useFetchBlogPosts = (): UseFetchBlogPosts => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://ubmarket2022.blogspot.com/feeds/posts/default?alt=json"
        );
        const items = response.data.feed.entry || [];

        const formattedPosts: BlogPost[] = items.map((item: any) => ({
          id: item.id.$t,
          title: item.title.$t,
          content: item.content.$t,
          date: item.published.$t,
          excerpt: item.summary ? item.summary.$t : "",
        }));

        setPosts(formattedPosts);
      } catch (err) {
        setError("Error fetching posts");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
};

export default useFetchBlogPosts;
