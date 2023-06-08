import React, { useReducer } from 'react';
// import { initialState, reducer } from '../state/reducerState';

const Form = () => {
    const initialState = {
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        education: '',
        quantity: 0,
        textArea: '',
        agree: false
    }
    const reducer = (state, action) => {
        // if (action.type === "INPUT") {
        //     return {
        //         ...state,
        //         [action.payload.name]: action.payload.value,
        //     }
        // }

        switch (action.type) {
            case "INPUT":
                return {
                    ...state,
                    [action.payload.name]: action.payload.value,
                }
            case "TOGGLE":
                return {
                    ...state,
                    agree: !state.agree,
                }
            case "INCREAMENT":
                return {
                    ...state,
                    quantity: state.quantity + 1,
                }
            // case "DECREAMENT":
            case "DECREAMENT":
                return {
                    ...state,
                    quantity: state.quantity - 1,
                }
            default: return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)

    console.log(state.quantity)

    const handleForm = event => {
        event.preventDefault();
        console.log(state)
    }
    return (
        <div>
            <h2>Form</h2>
            <form onSubmit={handleForm} className='max-w-lg mx-auto border px-1 py-1'>
                <div className='grid grid-cols-2 gap-3'>
                    <div className='flex flex-col border text-left mb-3'>
                        <label htmlFor="">Frist Name</label>
                        <input className='bg-slate-200' type="text" name='firstName' placeholder='Enter your first name' onBlur={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} />
                    </div>
                    <div className='flex flex-col border text-left mb-3'>
                        <label htmlFor="">Last Name</label>
                        <input className='bg-slate-200' type="text" name='lastName' placeholder='Enter your last name' onBlur={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} />
                    </div>
                    <div className='flex flex-col border text-left mb-3'>
                        <label htmlFor="">Email</label>
                        <input className='bg-slate-200' type="text" name='email' placeholder='Enter your email' onBlur={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} />
                    </div>
                    <div>
                        <label htmlFor="">Gender</label>
                        <div className='flex justify-between'>
                            <div className='flex gap-3'>
                                <input type="radio" name="gender" value="male" id="" onClick={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} />
                                <label htmlFor="">Male</label>
                            </div>
                            <div className='flex gap-3'>
                                <input type="radio" name="gender" value="female" id="" onClick={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} />
                                <label htmlFor="">Female</label>
                            </div>
                            <div className='flex gap-3'>
                                <input type="radio" name="gender" value="others" id="" onClick={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} />
                                <label htmlFor="">Others</label>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col border text-left mb-3'>
                        <label htmlFor="">Education</label>
                        <select className='bg-slate-200' name="education" id="" onChange={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })}>
                            <option value="SSC">SSC</option>
                            <option value="HSC">HSC</option>
                            <option value="BSc">BSc</option>
                            <option value="MSc">MSc</option>
                        </select>
                    </div>
                    <div >
                        <label htmlFor="">Number of PCs</label>
                        <div className='flex gap-1'>
                            <button className='bg-blue-400 px-3 text-white' onClick={() => dispatch({ type: 'DECREAMENT' })}>-</button>
                            <input className='bg-slate-200 text-center' type="text" name='quantity' value={state.quantity} />
                            <button className='bg-blue-400 px-3 text-white' onClick={() => dispatch({ type: 'INCREAMENT' })}>+</button>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="">Feedback</label>
                    <textarea className='bg-slate-200 px-3 ' name="textArea" id="" cols="5" rows="5" onBlur={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })}></textarea>
                </div>
                <div className='flex justify-between mt-5'>
                    <div className='flex gap-2'>
                        <input type="radio" name="agree" id="" onClick={(e) => dispatch({ type: "TOGGLE" })} />
                        <label htmlFor="">I agree to terms and conditions</label>
                    </div>
                    <button className='bg-blue-400 px-3 text-white' disabled={state.agree === false}>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Form;