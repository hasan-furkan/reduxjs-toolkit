import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmunt } from "../redux/counter/counterSlice";

const Counter = () => {

    const [amount, setAmount] = useState(3)

  const dispatch = useDispatch();
  const value = useSelector((state) => state.counter.value);
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <br /><br />
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button onClick={() => dispatch(incrementByAmunt(amount))}>Increment by amount</button>
    </div>
  );
};

export default Counter;
