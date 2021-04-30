import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';


interface TaskState {
  idCount: number;
  tasks: {id:number; title:string; completed:boolean}[];
  selectedTask: {id:number; title:string; complete:boolean};
  isModalOpen: boolean;
}


const initialState: TaskState = {
  idCount: 1,
  tasks:[{id:1, title:'taskA', completed:false}],
  selectedTask:{id:0, title:'', complete:false},
  isModalOpen:false,
};



export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {

    // タスクの作成
    createTask:(state,action)=>{
        state.idCount++;
        const newTask = {
            id: state.idCount,
            title: action.payload,
            completed: false,
        };
        state.tasks=[newTask, ...state.tasks];
    },

    editTask: (state, action) => {
        // state.tasksの中から指定したtaskを抜き出す
        const task = state.tasks.find((t) => t.id === action.payload.id);
        if (task) {
          // 抜き出したtaskのtitleを書き換える
          task.title = action.payload.title;
        }
    },

    // どのタスクを選択しているかを管理
    selectTask:(state, action) => {
        state.selectedTask = action.payload;
    },

    //モーダル開くか閉じるかのフラグ管理
    handleModalOpen: (state, action) => {
        state.isModalOpen = action.payload;
    },
  },
 
});

export const {createTask, selectTask, handleModalOpen, editTask } = taskSlice.actions;

export const selectTasks = (state: RootState):TaskState['tasks'] => state.task.tasks;

export const selectIsModalOpen = (state: RootState):TaskState['isModalOpen'] => state.task.isModalOpen;
export const selectSelectedTask = (state: RootState):TaskState['selectedTask'] => state.task.selectedTask;



export default taskSlice.reducer;
