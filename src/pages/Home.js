import React, { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);

  const counter = (data) => {
    console.log(data)
    if (data === "increase") {
      return setCount(count + 1);
    } else {
      return setCount(count - 1);
    }
  };
  return (
    <div className="flex justify-center items-center w-full ">
      <div className="w-96 border-solid border-2 border-indigo-600 px-4 py-4 mt-10">
        <h1>Home one</h1>
        <h2 className="text-green-400">{count}</h2>
        <div className="flex gap-4 ">
          <button
            className="px-6 py-3 bg-pink-400 border-r basis-1/2"
            onClick={() => counter("increase")}
          >
            Increase
          </button>
          <button className="px-6 py-3 bg-pink-400 basis-1/2 " onClick={() => counter('decrease')}>Decrease</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
