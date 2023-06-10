import React from 'react';

export default function Bodytodo(props) {
    return (
        <div className='bodytodo--head'>
            <h1 className='bodytodo--head--h1'>TODO</h1>
            <h1 className='bodytodo--head--count'>{props.count}</h1>
        </div>
    )
}