import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = 
    {
        task:[]
    }

const taskSlice = createSlice({
    name:"tasks",
    initialState,
    reducers:{
        addTasks:(state,action)=>{
            state.task.push({id:nanoid() , data: action.payload.task})
        },
        deleteTasks:(state,action)=>{
            const taskId = action.payload
            state.task = state.task.filter(task => task.id !== taskId);
        },
        // updateTasks:(state,action)=>{
        //     const {task} = action.payload
        //     const taskIndex = state.task.findIndex((task)=>task.id === id)
        //     if(taskIndex !== -1){
        //         state[taskIndex].task = task
        //     }
        // }
    }

})

export const {addTasks , deleteTasks,updateTasks} = taskSlice.actions
export default taskSlice.reducer 