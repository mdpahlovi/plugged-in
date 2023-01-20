import React, { useState } from 'react';
import { BiPlusMedical } from 'react-icons/bi';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import Main from "../components/Layout/Main";

const todo = () => {
    const [userInput, setUserInput] = useState("");
    const [todoList, setTodoList] = useState([]);


    const handleChange = (e) => {
        e.preventDefault()

        setUserInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setTodoList([
            userInput,
            ...todoList
        ])

        setUserInput('');
    }

    const handleDelete = (todo) => {
        const updatedArr = todoList.filter(todoItem => todoList.indexOf(todoItem) != todoList.indexOf(todo))
        setTodoList(updatedArr)
    }

    return (
        <Main>
            <div className="section-gap bg-purple-200 max-w-lg sm:mx-auto shadow-lg drop-shadow p-6 space-y-6 rounded-lg mx-8">
                <p className='text-center text-3xl font-bold'>Your ToDo List</p>
                <form className='flex pt-2 mb-1'>
                    <input type="text" value={userInput} placeholder="Enter your todo here" onChange={handleChange} className="flex-1 rounded shadow p-2 text-grey-dark mr-2" aria-required /><button onClick={handleSubmit} className='btn btn-primary ml-0'><BiPlusMedical className='inline-block' /> Add</button>
                </form>
                <ul>
                    {
                        todoList.length >= 1 ? todoList.map((todo, idx) => {
                            return <li className='flex justify-between items-center flex-1 rounded shadow text-grey-dark mr-2 text-center gap-2 bg-yellow-50 text-green-800' key={idx}>{idx + 1} {todo} <button onClick={(e) => {
                                e.preventDefault()
                                handleDelete(todo)
                            }}
                                className='mt-0 items-center btn btn-warning'><RiDeleteBin2Fill className='inline-block' />Delete</button></li>
                        })
                            : "No Todo Available"
                    }
                </ul>
            </div>
        </Main>
    );
};

export default todo;