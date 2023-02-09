import React from 'react';
import { connect,useDispatch,useSelector } from "react-redux";
import { increment, decrement, reset } from '../actions/CounterAction';

const ReduxCounter =()  => {
    
    const count = useSelector((state) => state.count);
   const dispatch= useDispatch();
    return (
    <div>
        <h2> The count is : {state.count} {state.statePromise}</h2>
        <button onClick={(e) => dispatch(increment()) }>Increase</button>
        <button onClick={(e) => dispatch(decrement()) }> Decrease</button>
        <button onClick={(e) => dispatch(reset()) }>Reset</button>
        <button onClick={(e) => dispatch({type: "TEST"})}> Test </button>
        <button 
         onClick ={(e) => {
            state.statePromise.then((data) => {
                dispatch({ type: "TEST_FULFILLED", payload: data});
            });
         }}
         >Test</button>
    </div>
  );
};

// const mapStateToProps = (state) => ({ count: state.count});
// const mapDispatchToProps = (dispatch) => ({
//    increment: () => dispatch(increment()),
//    decrement: () => dispatch(decrement()),
//    reset: () => dispatch(reset()),
// });
export default ReduxCounter;
// export default connect(mapStateToProps,mapDispatchToProps)(ReduxCounter);
