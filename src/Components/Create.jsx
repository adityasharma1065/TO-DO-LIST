import { nanoid } from "nanoid";
import { useState } from "react"; 

const Create = (props) => {

    const{tasks,settasks}=props;

    const [title,settitle]=useState("")

    const submitHandler=(e)=>{
        e.preventDefault();

        const task={
            title:title,
            completed:false,
            id:nanoid()
        }

        settasks([...tasks,task])

        settitle("")
    }

  return (
    <form onSubmit={submitHandler} className="w-[25%] flex justify-between px-5 my-[2%]">
                <input
                name="title"
                    onChange={(e)=>{settitle(e.target.value)}}
                    placeholder="write your next task..."
                    className="px-5 py-3 text-yellow-100 outline-none w-[85%] rounded-xl bg-zinc-700 "
                    type="text"
                    value={title}
                />
                <button className="outline-none text-4xl font-extrabold flex justify-center items-center w-[50px] h-[50px] rounded-full bg-orange-600">
                    <i className="ri-add-fill"></i>
                </button>
            </form>
  )
}

export default Create