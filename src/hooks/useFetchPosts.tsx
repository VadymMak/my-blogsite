import { useEffect, useState } from "react";
import { createClient } from "contentful";

export interface BlogPost {
  id: string; // Change to string to match Contentful ID type
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

        const formattedPosts: BlogPost[] = response.items.map((item: any) => ({
          id: item.sys.id, // Contentful ID
          title: item.fields.title,
          content: item.fields.content,
          date: item.fields.date,
          excerpt: item.fields.excerpt || "",
        }));

        setPosts(formattedPosts);
      } catch (err) {
        setError("Error fetching posts");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [client]);

  return { posts, loading, error };
};

export default useFetchBlogPosts;
