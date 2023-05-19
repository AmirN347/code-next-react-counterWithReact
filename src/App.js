import React, { useState } from 'react';

export const App = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <h1>code-next-react-counter</h1>

      <hr />

      <div>
        <h2> The Counter to beat all Counters!!</h2>
        <h2> Count: {count} </h2>

        <button className=" btn btn-primary" onClick={incrementCount}>
          Increment
        </button>

        <button className="btn btn-primary m-2" onClick={decrementCount}>
          {' '}
          Decrement{' '}
        </button>
      </div>
    </div>
  );
};
