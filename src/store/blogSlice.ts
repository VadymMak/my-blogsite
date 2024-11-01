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
  language: string; // Track the current language
}

const initialState: BlogState = {
  posts: [],
  loading: false,
  error: null,
  language: "en", // Default language
};

// Create a Contentful client
const client = createClient({
  space: "ys4ugb0tz6hx",
  accessToken: "hNAzP706sdLhBl0QhxnY_gmf0NNwkfMNnUAmfHMQOP0",
});

// Async thunk to fetch posts with language
export const fetchPosts = createAsyncThunk<BlogPost[], string>(
  "blog/fetchPosts",
  async (language) => {
    const response = await client.getEntries({
      content_type: "blogPost",
      locale: language, // Use locale for Contentful localization
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
  reducers: {
    setLanguage(state, action) {
      state.language = action.payload;
    },
  },
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

export const { setLanguage } = blogSlice.actions;
export default blogSlice.reducer;
