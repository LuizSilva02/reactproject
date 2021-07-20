import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Button from './Button';
import "./TaskDetails.css";
const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();

    const back = () => {
        history.goBack();
    }
    return (  
        <>
    <div className="back-button-container">
        <Button onClick={back}>Voltar</Button>
    </div>
        <div className="task-details-container">
            <h2>{params.taskTitle}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Eius omnis similique quo, repellendus unde quidem quaerat nihil vel. 
                Ex quis ducimus neque dolorum aperiam? Facere esse nam doloremque et ducimus!
            </p>
        </div>
        </>
    );
}
 
export default TaskDetails;