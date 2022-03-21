import react, { useState, useEffect } from 'react';
import { HiDotsHorizontal, HiOutlineCollection } from 'react-icons/hi'

const InputCardHeader = ({ title }) => {
    return (
        <div className='flex items-center'>
            <AddCardHeader title={title} />
            <CardHeaderActions />
        </div>
    )
}

export default InputCardHeader;


const CardHeaderActions = ({ }) => {
    return (
        <div className='flex gap-2'>
            <HiDotsHorizontal />
        </div>
    )
}

const AddCardHeader = ({ title }) => {
    const [link, setLink] = useState("");
    const [addLink, setAddLink] = useState(false);

    return (
        <div className='grow flex items-center'>
            <HiOutlineCollection
                onClick={() => setAddLink(!addLink)}
                className='text-slate-700 cursor-pointer'
            />
            <span className=' mx-4 text-sm text-slate-500 font-semibold'>{title}</span>

            {/* 
                  (<input type={'url'}
                    onChange={(e) => setLink(e.target.value)}
                    value={link}
                    placeholder={"link reciept, etc"}
                    className="grow mx-4 input-cell text-sm text-blue-900 z-10"
                />) */}
        </div>

    )
}

