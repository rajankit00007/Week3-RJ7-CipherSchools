// import React from "react";
// import SignUpForm from "./components/SignUpFrom";
// import SumNumbers from "./components/SumNumber";
// const App = () => {
//   return (
//     <div>
//       <h1>This is App Component</h1>
//       <SignUpForm />
//     </div>
//   );
// };

// export default App;

import React, {lazy, Suspense} from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Provider } from "react-redux";
import { createStore} from "redux";


import Header from "./components/header";
import SignUpForm from "./components/SignUpFrom";
const TaskScreen = lazy(() => ("./components/taskScreen"));
const Photos = lazy(() => ("./components/Photos"));
const SumNumbers = lazy(() => ("./components/SumNumber"));
import higherOrderComponent from "./components/Hoc";
import counterReducer from "./reducers/CounterReducer";
import ReduxCounter from "./components/ReduxCounter";
const SampleRenderProps = lazy(() => import("./components/SampleRenderProps"));
const ErrorBoundary = lazy(() => import("./components/ErrorBoundary"));
const CounterComponent = lazy(() => import("./components/CounterComponent"));
const ReduxCounter = lazy(() => import("./components/ReduxCounter"));
const myReduxStore = createStore(counterReducer);


const App = () => {
  const TestApp = higherOrderComponent(() => {
  return <div>Test App</div>;
  });

  const myMomsFavouriteCharacter = " Anupama";
  
  return(
  <div>
  <BrowserRouter>
  <Header/>
  <Suspense fallback={<div>Loading...</div>} />
  <Routes>
  <Route path={"/"} element={<h1> This is on Home Page</h1>} />
  <Route path={"/contact"} element={<h1>This is a Contact Page</h1>} />
  <Route path={"/about"} element={<h1> This is a about Page</h1>} />
  <Route path={"/signup"} element={<SignUpForm/>} />
   <Route path={"sum"} element={<SumNumbers/>} >
  </Route> 
  <Route path={"/tasks"} element={<TaskScreen />} />
  <Route path={"/counter"} element={<CounterComponent />} />
  <Route path={"/photos"} element={<Photos name={myMomsFavouriteCharacter} />} />
  <Route path={"/test"} element={<TestApp />} />
 
  <Route path={"/sample"} element={<SampleRenderProps />} />
 <Route path= {"/redux-counter"} element={<ReduxCounter />} />
  </Routes>
  </BrowserRouter>
  </div>
  );
};



const MyApp = () => {
  <Provider store={ myReduxStore}>
  <AnupamaContext.Provider
  value={{ favCharacter: "Anupama", favVillain: "Vanraj", loudest: "Kavya" }}>
    <BreakingBadContext.Provider value={{ favCharacter : "Walter White", mostHatedCharcater: "Jessie"}}>
      <App />
    </BreakingBadContext.Provider>
  </AnupamaContext.Provider>
  </Provider>
};
export default MyApp;

