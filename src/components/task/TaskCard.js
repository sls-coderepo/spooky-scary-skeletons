import React, {Component} from 'react';
import {Button} from 'reactstrap'
import moment from "moment";


class TaskCard extends Component {
    
    
    render(){
        return (
            <>
            
            <div>
                <h5>{this.props.task.task}</h5>
                <p>Due By: {moment(this.props.task.date).format("ll")}</p>
              
            </div>
            <div className="mb-2">
               
                <Button type="button" color="secondary" size="sm" className="mx-1"
            		  onClick={() => {this.props.handleEdit(this.props.task.id)}}>Edit
          		</Button>
                 
                <Button type='button' color="secondary" size="sm" className="mx-1"
                      onClick={() => this.props.handleDelete(this.props.task.id)}>
						Delete
				</Button>
                <Button type='button' color="secondary" size="sm" className="mx-1"
                      onClick={() => this.props.handleComplete(this.props.task.id)}>
						Complete
				</Button>
            </div>
            </>
        )
    }
}

export default TaskCard;
