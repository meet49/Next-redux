"use client"
// import React from 'react'

// import { useSelector } from 'react-redux'



// async function Manage() {

//     const tasks = useSelector((state) => state.tasks)
//     console.log(tasks)


//     return (
//         <div className="mt-16">
//             <div>
//                 <h1 className="bg-yellow-600 h-16 text-center p-2 font-bold text-4xl ">Pending Task</h1>
//                 <table className=" table w-screen">
//                     <thead className="text-xs text-gray-700 uppercase bg-gray-50">
//                         <tr>
//                             <td className="py-3 px-6 font-bold text-2xl text-center">Task Name</td>
//                             <td className="py-3 px-12 font-bold text-2xl text-center" colspan="3">Action</td>
//                         </tr>
//                     </thead>
//                     <tbody className="text-lg font-medium">
//                         {
//                             tasks.map((item,index) => (
//                                 <tr key={index} className="bg-white border-b  bg-gradient-to-r from-cyan-500 to-blue-500" >
//                                     <td className="py-4 px-6 text-center">{item}</td>
//                                     {/* <td className="py-4 px-4"><Link href={"managetask/" + item._id}>Edit</Link></td>
//                                     <td className="py-4 "><DeleteTask id={item._id} /></td>
//                                     <td className="py-4 "><input type="checkbox" onClick={() => handleCheck(item._id)}></input></td> */}
//                                 </tr>
//                             ))
//                         }
//                     </tbody>
//                 </table>
//             </div>

//         </div>
//     )
// }

// export default Manage
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { deleteTasks, updateTasks } from '@/redux/slices/taskSlice';


function Manage() {
    const [task, setTask] = useState([])
    const tasks = useSelector((state) => state.tasks.task);
    const dispatch = useDispatch()
    useEffect(() => {
        setTask(tasks)
    }, [tasks])

    const handleRemoveTask = (taskId) => {
        dispatch(deleteTasks(taskId));
    };
    // const handleUpdateTask = (taskId) => {
    //     dispatch(updateTasks(taskId));
    // };
    return (
        <div className="mt-16">
            <div>
                <h1 className="bg-yellow-600 h-16 text-center p-2 font-bold text-4xl ">Pending Task</h1>
                <table className=" table w-screen">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <td className="py-3 px-6 font-bold text-2xl text-center">Task Name</td>
                            <td className="py-3 px-12 font-bold text-2xl text-center" colspan="3">Action</td>
                        </tr>
                    </thead>
                    <tbody className="text-lg font-medium">
                        {
                            task.map((item, index) =>
                                <tr key={index} className="bg-white border-b  bg-gradient-to-r from-cyan-500 to-blue-500">
                                    <td className="py-4 px-6 text-center">{item.data}</td>
                                    <td className="py-4 px-6 text-center">
                                        <button onClick={() => handleRemoveTask(item.id)}>Delete</button>
                                    </td>
                                    {/* <td className="py-4 px-6 text-center">
                                        <button onClick={() => handleUpdateTask(item.id)}>edit</button>
                                    </td> */}
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Manage;
