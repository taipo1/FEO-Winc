import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./Actions";
import { decrement } from "./Actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.loggedIn);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      {isLogged ? (
        <h3> valuable information i should not see if im not logged in </h3>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
