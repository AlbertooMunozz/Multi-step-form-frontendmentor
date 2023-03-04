import { configureStore } from "@reduxjs/toolkit";
import stepOneSlice from "../features/stepOneSlice";
import stepTwoSlice from "../features/stepTwoSlice";
import stepThreeSlice from "../features/stepThreeSlice";
import IndexSection from "../features/IndexSection";

const store = configureStore({

    reducer : {
        index: IndexSection,
        stepOne: stepOneSlice,
        stepTwo: stepTwoSlice,
        stepThree: stepThreeSlice
    }

})

export default store