import React, { useState } from 'react'
import "./todo.css"
import { TodoCards } from './TodoCards';
import { ToastContainer, toast } from 'react-toastify';
export const Todo = () => {
    const [Inputs, setInputs] = useState({ title: "", body: "" });
    const [Array, setArrays] = useState([]);
    const show = () => {
        document.getElementById("textarea").style.display = "block";
    };
    const change = (e) => {
        const { name, value } = e.target;
        setInputs({ ...Inputs, [name]: value })
    }
    const submit = () => {
        if (Inputs.title.trim() && Inputs.body.trim()) { 
            setArrays([...Array, Inputs]);
            setInputs({ title: "", body: "" });
            toast.success("Task Submitted!");
        }
    };
    const del = (id) =>{
        const newArray = Array.filter((_, index) => index !== id);
        setArrays(newArray);
    };
    return (
        <div className='todo'>
            <ToastContainer />
            <div className='todo-main container d-flex flex-column justify-content-center align-items-center'>
                <div className='d-flex flex-column todo-inputs-div w-50 p-2'>
                    <input type='text' name='title' value={Inputs.title} placeholder='TITLE' className='my-2 p-2 todo-inputs' onClick={show} onChange={change}></input>
                    <textarea id="textarea" name='body' value={Inputs.body} type='text' placeholder='BODY' className='p-2 todo-inputs' onChange={change}></textarea>
                </div>
                <div className='w-50 d-flex justify-content-end my-3'>
                    <button className='home-btn px-3 py-1' onClick={submit}>Add</button>
                </div>
            </div>
            <div className="todo-body">
                <div className="container-fluid">
                    <div className="row">
                        {Array && Array.map((item, index) => (
                            <div className='col-lg-3 col-10 mx-5 my-2' key={index}>
                                <TodoCards title={item.title} body={item.body} id={index} delid={del}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
