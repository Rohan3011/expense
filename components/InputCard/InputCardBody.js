import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai';

const InputCardBody = ({ amount, handleIt }) => {
    {
        return (
            <div className="grow flex flex-col space-y-4">
                <InputAmount amount={amount} handleChange={handleIt} />
                <InputIncomeSource />
                <InputIncomeType />
                <InputCardNote />
            </div>
        )
    }
}

export default InputCardBody;

const InputAmount = ({ amount, handleChange }) => {
    return (
        <section className="flex items-center gap-2">

            <input type={'number'}
                onChange={handleChange}
                value={amount}
                readOnly
                placeholder={"add income"}
                className="card-animation grow focus:shadow-lg outline-none p-2 rounded text-xl text-slate-700 font-semibold" />
            <InputDate />
        </section>
    )
}


const InputIncomeType = () => {
    return (
        <section className='flex gap-2'>
            <select className="grow outline-none p-1 text-slate-500 font-medium">
                <option defaultValue>Income Type</option>
                <option className=''>Salary</option>
                <option className=''>Side Huslte</option>
                <option className=''>Bonus</option>
                <option className=''>Gift</option>
            </select>
            <NewButton />
        </section>

    )
}


const InputIncomeSource = () => {
    return (
        <section className='flex gap-2'>
            <select className="grow outline-none p-1 text-slate-500 font-medium">
                <option defaultValue>Source</option>
                <option className=''>Salary</option>
                <option className=''>Side Huslte</option>
                <option className=''>Thief</option>
            </select>
            <NewButton />
        </section>
    )
}


const InputDate = () => {
    return (
        <section className='px-4 text-slate-500'>
            <input type={'date'}
                className="outline-none"
            />
        </section>
    )
}

const InputCardNote = () => {
    return (
        <div className='mx-4 flex border-b'>
            <textarea
                className="card-animation grow hover:border focus:shadow-lg outline-none p-2 rounded text-xl text-slate-700 font-semibold"
                placeholder='note'
            />
        </div>
    )
}

// utilites
const SelectCurrency = () => {
    return (
        <select className="outline-none p-1 text-slate-700">
            <option selected>USD</option>
            <option className=''>INR</option>
            <option className=''>PKR</option>
            <option className=''>EUR</option>
            <option className=''>RUB</option>
            <option className=''>YEN</option>
        </select>
    )
}

const NewButton = () => {
    return (
        <button className='flex items-center gap-1 hover:bg-gray-200  px-4 rounded text-sm text-slate-500'>
            <AiOutlinePlus className='text-lg' />
            <span>New</span>
        </button>
    )
}

