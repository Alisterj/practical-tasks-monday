import React from 'react';
import {DataType} from "../App";

type TodolistPropsType = {
    data: DataType
};
export const Tasks = (props: TodolistPropsType) => {
    let tasksShow = props.data.tasks.map(t => {
        return(
            <li key={t.taskId}>
                <input type={'checkbox'}
                       checked={t.isDone}
                       className={"is-done"}/>
                <span>{t.title}</span>
            </li>
        );
    });
    let studentsShow = props.data.students.map(s => {
        return(
            <li>{s}</li>
        );
    });
    return (
        <div>
            <h1>{props.data.title}</h1>
            <ul>
                {tasksShow}
            </ul>
            <span>Students list:</span>
            <ul>
                {studentsShow}
            </ul>
        </div>
    );
};