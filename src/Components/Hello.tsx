import * as React from "react";
import './index.scss'
import {Simulate} from "react-dom/test-utils";
import dragOver = Simulate.dragOver;
export interface HelloProps { compiler: string; framework: string; }

export const Hello = (props: HelloProps) => {
    return (
        <>
            <h1>Hello from {props.compiler} and {props.framework}!</h1>
            <div className='box'></div>
        </>
    )
};