import React from 'react'
import InputCardBody from './InputCardBody';
import InputCardHeader from './InputCardHeader';

const InputCard = ({ title }) => {
    return (
        <div className='p-4 flex flex-col m-4 max-w-2xl shadow rounded gap-2'>
            <InputCardHeader title={title} />
            <InputCardBody />
        </div>
    )
}

export default InputCard;
