import { useEffect, useState } from "react";
import { createClient } from "contentful";

// Define the BlogPost interface
export interface BlogPost {
  id: string; // Contentful IDs are strings
  title: string;
  content: string;
  date: string;
  excerpt: string;
}

// Define the return type for the hook
export interface UseFetchBlogPosts {
  posts: BlogPost[];
  loading: boolean;
  error: string | null;
}

const useFetchBlogPosts = (): UseFetchBlogPosts => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Initialize the Contentful client
  const client = createClient({
    space: "ys4ugb0tz6hx", // Replace with your space ID
    accessToken: "hNAzP706sdLhBl0QhxnY_gmf0NNwkfMNnUAmfHMQOP0", // Replace with your access token
  });

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await client.getEntries({
          content_type: "blogPost", // Replace with your Contentful content type ID
        });

        const formattedPosts: BlogPost[] = response.items.map((item) => {
          // Safely access properties and ensure they are strings
          const title = String(item.fields.title); // Cast to string
          const content = String(item.fields.content); // Cast to string
          const date = String(item.fields.date); // Cast to string
          const excerpt = item.fields.excerpt
            ? String(item.fields.excerpt)
            : ""; // Ensure it's a string

          return {
            id: item.sys.id, // Contentful ID (always a string)
            title,
            content,
            date,
            excerpt,
          };
        });

        setPosts(formattedPosts);
      } catch (err: any) {
        setError(err.message || "Error fetching posts");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []); // Use empty array to only run on mount

  return { posts, loading, error };
};

export default useFetchBlogPosts;
