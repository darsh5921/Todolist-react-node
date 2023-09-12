"use client"
import { Changa } from 'next/font/google'
import React, { useState } from 'react'

const page = () => {
const [title,settitle] = useState("")
const [desc, setdesc] = useState("")
const [mainTask, setmainTask] = useState([])

const submitHandler=(e)=>{
  e.preventDefault()
  setmainTask([...mainTask,{title,desc}]);
  settitle ("");
  setdesc ("");
  console.log(mainTask);
};

const deleteHandler = (i) => {
  let copytask=[...mainTask]
copytask.splice(i,1)
setmainTask(copytask)
}

let rendertask=<h2>No task Available</h2>;

if(mainTask.length>0){
rendertask=mainTask.map((t,i)=>{
return (
<li key={i} className="flex items-center justify-between mb-5">
  <div className="flex items-center justify-between w-2/3">
  <h5 className='text-xl font-semibold'>{t.title}</h5>
  <h6 className='text-lg font-medium'>{t.desc}</h6>
  </div>
<button onClick={()=>{
  deleteHandler(i)
}}
className='bg-red-500 text-white px-4 py-2 rounded font-bold'> - </button>
</li>
);

});
}
return (
<>
<h1 className='bg-black text-white p-5 font-bold text-4xl text-center'>
  My To Do List</h1>

  <form onSubmit={submitHandler}>

    <input type="text" className='text
     border-zinc-800 border-4 m-8 px-4 py-2 rounded'
     placeholder='Enter Title Here'
     value={title}
     onChange={(e)=>{
      settitle(e.target.value)
     }}
     />

    <input type="text" className='text
     border-zinc-800 border-4 m-8 px-4 py-2 rounded'
     placeholder='Enter Description Here'
     value={desc}
     onChange={(e)=>{
      setdesc(e.target.value)
     }}
     />

     <button className='bg-black text-white px-6 py-2 text-2xl font-bold rounded m-5'>Add Task</button>

  </form>
<hr />
<div className='p-6 bg-slate-200'>
<ul>
  {rendertask}
</ul>
</div>

</>
  )
}

export default page
