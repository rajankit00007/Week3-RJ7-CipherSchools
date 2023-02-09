import { increment,decrement, reset }  from "../reducers/CounterReducer";


export const increment = () => ({type: "INCREMENT" });
export const decrement = () => ({type: "DECREMENT"});
export const reset = () => ({type: "RESET" });