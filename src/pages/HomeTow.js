import React, { useReducer } from 'react';

const HomeTow = () => {
    const initialState = 0;
    const reducer = (state, action) => {
        if (action.type === 'INCREAMENT') {
            return state + 1;
        } else if (action.type === 'DECREAMENT') {
            return state - 1;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="flex justify-center items-center w-full ">
            <div className="w-96 border-solid border-2 border-indigo-600 px-4 py-4 mt-10">
                <h1>Home Two</h1>
                <h2 className="text-red-400">{state}</h2>
                <div className="flex gap-4 ">
                    <button className="px-6 py-3 bg-pink-400 border-r basis-1/2" onClick={() => dispatch({ type: 'INCREAMENT' })}>Increase</button>
                    <button className="px-6 py-3 bg-pink-400 basis-1/2 " onClick={() => dispatch({ type: 'DECREAMENT' })}>Decrease</button>
                </div>
            </div>
        </div>
    );
};

export default HomeTow;