import { createSlice } from "@reduxjs/toolkit";
/* we can mutate state directly, no need to return new state
    return [...satate, ]
*/
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  // reducers - pure functions
  // does not change data outside of function
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice;
// export actions and reducer

// 1. create slice
// 2. configure store
// 3. inject store using Provider
