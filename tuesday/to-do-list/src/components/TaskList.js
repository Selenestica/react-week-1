import React, { Component } from "react";


class TaskList extends Component {

    render() {

        let taskItems = this.props.tasks.map(task => {
            return (<>
            
            <div>
                <li className="list-number-text"> 
                    <div className="task-div">
                        <p className="task-text">{task}</p>
                        <input className="check-box-input" onClick="" type="checkbox" name={task} value={task} />
                        <p className="mark-complete-text">Mark as complete</p>
                    </div>
                </li>
            </div>

            </>)
        })

        return (<>
            <div className="pending-items-div">
                <h2>Pending Tasks</h2>
            </div>
                <ol>
                    {taskItems}
                </ol>

        </>)
    }

}

export default TaskList