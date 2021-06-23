import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./ui-slice";
console.log(uiSlice.reducer);

const store = configureStore({
  reducer: { ui: uiSlice.reducer },
});

export default store;
