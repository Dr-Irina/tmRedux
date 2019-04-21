// import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import { Provider } from 'react-redux';
import { createStore } from "redux";

// function showTask(state = [], action) {
//     if (action.type === 'ADD_TASK') {
//         return [
//             ...state,
//             action.payload
//         ];
//     }
    // return state;
// }

// const store = createStore(showTask);

// ReactDOM.render(
//         <App />,
//     document.getElementById('root'
//     ));



function showTask(state = [], action) {
    if (action.type === 'ADD_TASK') {
        return [
            ...state,
            action.payload
        ];
    }
    return state;
}

const store = createStore(showTask);

const addTaskBtn = document.querySelectorAll('.but')[0];
const taskList = document.querySelectorAll('.taskList')[0];
const taskName = document.querySelectorAll('.nameOfTask')[0];
const deadline = document.querySelectorAll('.deadline')[0];
const description = document.querySelectorAll('.description')[0];
const typeOfTask = document.querySelectorAll('.typeOfTask')[0];

store.subscribe(() => {
    console.log(store.getState());
    taskList.innerHTML = '';
    taskName.value = '';
    deadline.value = '2019-04-22T12:00';
    description.value = '';
    typeOfTask.value = 'Личная задача';
    store.getState().forEach(task => {
        console.log(task)
        let str = task.taskName + "<hr>" + task.deadline + "<hr>" + task.description + "<hr>" + task.typeOfTask;
        console.log(str)
        const li = document.createElement('li');
        li.innerHTML = str;
        taskList.appendChild(li);
    });
});

addTaskBtn.addEventListener('click', () => {
    const taskName = document.querySelectorAll('.nameOfTask')[0].value;
    console.log(taskName);
    const deadline = document.querySelectorAll('.deadline')[0].value;
    const description = document.querySelectorAll('.description')[0].value;
    const typeOfTask = document.querySelectorAll('.typeOfTask')[0].value;
    store.dispatch({type: 'ADD_TASK', payload: {taskName: taskName, deadline: deadline, description: description, typeOfTask: typeOfTask}});
});