import Link from 'next/link';
import React from 'react'
import { IoIosArrowUp } from 'react-icons/io';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';



const Card = ({ title, value, amount }) => {
    return (
        <div className='flex flex-col gap-2 w-full h-[150px] p-4 shadow-lg rounded-lg'>
            <CardHeader title={title} value={value} />
            <CardBody amount={amount} />
            <CardFooter />
        </div>
    )
}

export default Card;


const CardHeader = ({ title, value }) => {
    return (
        <div className='flex'>
            <span className='grow text-slate-500 font-semibold'>{title}</span>
            <div className='flex items-center gap-2 text-green-600'>
                <IoIosArrowUp className='' />
                <span>{value} %</span>
            </div>
        </div>
    )
}

const CardBody = ({ amount }) => {
    return (
        <div className='grow flex'>
            <span className='text-4xl'>{amount}</span>
        </div>
    )
}

const CardFooter = () => {
    return (
        <div className='flex items-center'>
            <Link passHref href="#"><span className='text-slate-600 text-sm'>see details</span></Link>
            <div className='ml-auto bg-fuchsia-100 p-2 rounded-lg'>
                <MdOutlineAccountBalanceWallet className='text-fuchsia-500 text-xl' />
            </div>
        </div>
    )
}