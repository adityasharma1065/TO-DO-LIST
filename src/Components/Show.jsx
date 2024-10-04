


const Show = (props) => {

    const {tasks,settasks}=props

    const toggleHandler=(index)=>{
        //  tasks[index].completed=!tasks[index].completed;

        const copytasks=[...tasks];
        copytasks[index].completed=!copytasks[index].completed;
        settasks(copytasks);
    }

    const deleteHandler=(index)=>{
        if(tasks[index].completed||confirm("Are you sure?")){
            const copytasks=[...tasks];
            copytasks.splice(index,1);
            settasks(copytasks);

        }else{
            alert("Task not deleted")
        }
    }

    let renderTasks;

    if(tasks.length>0){
          renderTasks=tasks.map((task,index)=>{
            return(
                
                <li key={task.id} className="mb-5 flex justify-between items-center border rounded-xl p-5" >
                    <div className="flex items-center">

                        <div 
                        onClick={()=>toggleHandler(index)}
                        className={`mr-4 rounded-full w-[30px] h-[30px] ${task.completed? "bg-green-500":"border border-orange-400"}`}></div>
                        <h1 
                             
                        className= {`text-2xl font-extrabold text-yellow-100 ${task.completed? "line-through": ""}`} > 
                            {task.title}
                        </h1>
                    </div>
                    <div className="flex gap-3 text-2xl text-yellow-100">
                        <i className="ri-file-edit-line"></i>
                        <i 
                        onClick={()=>deleteHandler(index)}
                        className="ri-delete-bin-3-line"></i>
                    </div>
                </li>
            )
          })
    }
    else{
        renderTasks=<h1 className="mt-5 text-yellow-100 text-2xl font-extrabold text-center" >No Tasks Found</h1>
    }

  return (
    <ul className="list-none w-[25%] ">

                {renderTasks}
              
            </ul>
  )
}

export default Show