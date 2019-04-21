import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";

class App extends Component {
    // addTask() {
    //     console.log(this.taskName.value);
    //     this.props.onAddTask(this.taskName.value)
    // }
  render() {
      // console.log(this.props.testStore);
    return (
      <div>
        {/*<input autoFocus type="text" ref={(input) => { this.taskName = input }} />*/}
        {/*  <input type="datetime-local" defaultValue={"2019-04-22T12:00"} ref={(input) => this.deadeline = input} />*/}
        {/*    <textarea placeholder="Описание задачи" required ref={(input) => this.description = input}></textarea>*/}
        {/*    <select ref={(input) => this.typeOfTask = input}>*/}
        {/*      <option>Личная задача</option>*/}
        {/*      <option>Рабочая задача</option>*/}
        {/*    </select>*/}
        {/*      <button onClick={this.addTask.bind(this)}>Создать</button>*/}
        {/*  <ul>*/}
        {/*      {this.props.testStore.map((task, index) =>*/}
        {/*          <li key={index}>{task}</li>)}*/}
        {/*  </ul>*/}
      </div>
    );
  }
}

// export default connect(
//     state => ({
//         testStore: state
//     }),
//     dispatch => ({
//         onAddTask: (taskName) => {
//             dispatch({type: 'ADD_TASK', payload: {taskName: taskName
//                      deadline: deadline, description: description, typeOfTask: typeOfTask
                    // }});
        // }
    // })
// )(App);

export default App;