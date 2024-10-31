// src/blogSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createClient } from "contentful";

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
  excerpt: string;
}

interface BlogState {
  posts: BlogPost[];
  loading: boolean;
  error: string | null;
}

const initialState: BlogState = {
  posts: [],
  loading: false,
  error: null,
};

// Create a Contentful client
const client = createClient({
  space: "ys4ugb0tz6hx", // Replace with your space ID
  accessToken: "hNAzP706sdLhBl0QhxnY_gmf0NNwkfMNnUAmfHMQOP0", // Replace with your access token
});

// Async thunk to fetch posts
export const fetchPosts = createAsyncThunk<BlogPost[], void>(
  "blog/fetchPosts",
  async () => {
    const response = await client.getEntries({
      content_type: "blogPost", // Replace with your content type ID
    });

    return response.items.map((item: any) => ({
      id: item.sys.id,
      title: item.fields.title,
      content: item.fields.content,
      date: item.fields.date,
      excerpt: item.fields.excerpt || "",
    }));
  }
);

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch posts";
      });
  },
});

export default blogSlice.reducer;
