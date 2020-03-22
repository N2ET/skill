import React, { useState, useEffect, useReducer, useRef, useImperativeHandle, forwardRef } from 'react';


function reducer (times : {data: number}, action: { type: string }) {
    switch (action.type) {
        case 'plus':
            return {
                data: times.data + 1
            };
        default:
            throw new Error();
    }
}

// todo 这里写any行？
let Simple = function (props : any, ref : any) {

    let [value, setValue] = useState(0);

    useImperativeHandle(ref, () => {
        return {
            update () {
                setValue(value + 1);   
            }
        };
    });

    return (
        <div>
            Simple value: { value }
        </div>
    );
}

let NewSimple = forwardRef(Simple);

function Count () {

    let [count, setCount] = useState(0);
    let [state, dispatch] = useReducer(reducer, {
        data: 0
    });

    useEffect(() => {
        document.title = `count: ${count}`;
    });

    // todo 暂时定义一个这样的类型
    interface RefArg {
        [index: string] : any
    }
    let arg : RefArg = {};

    // todo 如何定义参数的类型
    let simpleRef = useRef(arg);

    // 不传递参数会提示类型错误
    let divRef = useRef(null);

    return (
      <>
        <div ref={divRef} onClick={ () => {
            setCount(count + 1);
            } }>count: { count }
        </div>
        <div onClick={ () => { dispatch({
            type: 'plus'
        }); } }>
            reducer: { state.data }
        </div>34

        <div>
            <NewSimple ref={simpleRef}/>
            <button onClick={() => {

                if (simpleRef.current !== null) {
                    simpleRef.current.update();
                }

                console.log(divRef);
                console.log(simpleRef);
                
            }}>add Simple Value</button>
        </div>
        
      </>
    );

}

export default function () {

    return (
        <>
            <h5>Hooks</h5>
            <Count />
        </>
    );

};