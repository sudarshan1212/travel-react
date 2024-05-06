import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  date: [],
  userInfo: null,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    travelDate: null,
  },
  reducers: {
    travelDate: (state, action) => {
      state.value = action.payload;

      // console.log(action.payload);
      // console.log(state.value);
      // const date = state.value.slice(0, 10);
      // action.payload.push(date);
    },
    // const clickedDate = new Date("2024-12-28"); // Create a Date object for May 28

    // // Add 5 days to the clicked date
    // const resultDate = new Date(clickedDate);
    // resultDate.setDate(clickedDate.getDate() + 5);

    // // Output the result in the desired format
    // const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    // const formattedResult = resultDate.toLocaleDateString('en-US', options);

    // console.log(formattedResult); // Output: "
  },
});

// Action creators are generated for each case reducer function
export const { travelDate, decrement, incrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
