import React, { useState } from 'react';

export default function Bodycompleted(props) {
    return (
        <div className='bodycompleted--head'>
            <h1 className='bodytodo--head--h1'>COMPLETED</h1>
            <h1 className='bodytodo--head--count'>{props.count}</h1>
        </div>
    )
}