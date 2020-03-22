/* eslint-disable */

import React from 'react';
// import ReactDOM from 'react-dom';
import Graphin, { Utils } from '@antv/graphin';
import './index.css';

import '@antv/graphin/dist/index.css';

const data = Utils.mock(13)
    .circle()
    .graphin();


function MyComponent (props:any) {

    console.log(props.children);

    return (
        <>
            <div>MyComponent</div>
            <div>
                {props.children[0]}
                {props.children[1]}
            </div>
        </>
    );
}

const Graph = () => {
    console.log(data);

    return (
        <div className='graph'>
            {/* <Graphin data={data} layout={{ name: 'concentric'}} /> */}
            <MyComponent>
                <div>child-0</div>
                <div>child-1</div>
            </MyComponent>
        </div>
    );
};

export default Graph;