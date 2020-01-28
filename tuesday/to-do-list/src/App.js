import React, {Component} from 'react';
import './css/App.css';
import './css/TaskList.css'
import './css/CompleteList.css'
import TaskList from './components/TaskList'
import CompleteList from './components/CompleteList'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      taskName: '',
      tasks: []
    }
  }

  handleAddTask = () => {
    this.setState({
      tasks: this.state.tasks.concat(this.state.taskName)
    })
  }

  handleChange = (e) => {
    this.setState({
      taskName: e.target.value
    })
  }

  render() {
    return (<><div className="main-container">

        <h1>Task Manager</h1>
        <div className="add-task-div">
          <input className="add-task-input" type="text" onChange={this.handleChange} />
          <button className="add-task-button" onClick={this.handleAddTask}>Add</button>
        </div>
        <div>
          <TaskList tasks = {this.state.tasks} />
        </div>
        <div>
          <CompleteList />
        </div>

          </div></>)
  }
}

export default App;
