import { configureStore } from "@reduxjs/toolkit";
import { changeName, changeCost, formReducer } from "./slices/formSlice";
import { changeSearchTerm, addCar, removeCar, carsReducer } from "./slices/carsSlice";

/*
    We can create Redux Store by calling configureStore() method provided
    by redux toolkit.
    configureStore() is going to have a single property called reducer 
    and this reducer property will contain all the combined reducers of 
    our different slices.
    This way we connect our store to our different slices.
    The object contained by the reducer property will dictate the general
    shape of our big state object. 
*/
const store = configureStore({
    reducer: {
        cars: carsReducer,
        form: formReducer
    }
});

export {
    store,
    changeName,
    changeCost,
    changeSearchTerm,
    addCar,
    removeCar
}

