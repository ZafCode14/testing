import { createSlice } from '@reduxjs/toolkit';
import { PostType } from '@/types/types';

interface PostsState {
  value: PostType[];
}

const initialState: PostsState = {
  value: []  // Explicitly typing the state as an array of PostType
};

const postsSlice = createSlice({
  name: 'about',
  initialState,
  reducers: {
    // Set the initial value of the posts
    setPostsR: (state, action) => {
      const posts = action.payload;
      state.value = posts;
    },

    // Add a post to the state
    addPostR: (state, action) => {
      const post = action.payload;
      state.value.unshift(post);
    },

    // Edit a post by index
    editPostR: (state, action) => {
      const { index, post } = action.payload;
      state.value[index] = { ...state.value[index], ...post };
    },

    // Delete a post by index
    deletePostR: (state, action) => {
      const index = action.payload;
      state.value.splice(index, 1);
    }
  }
});

// Correctly export the actions
export const { addPostR, editPostR, deletePostR, setPostsR } = postsSlice.actions;
export default postsSlice.reducer;