import { HiDotsHorizontal } from 'react-icons/hi'

const InputCardHeader = ({ title }) => {
    return (
        <div className='flex px-2'>
            <h3 className='grow text-sm text-slate-500 font-semibold'>{title}</h3>
            <AddCardHeaderActions />
        </div>
    )
}

export default InputCardHeader;


const AddCardHeaderActions = ({ }) => {
    return (
        <div className='flex gap-2'>
            <HiDotsHorizontal />
        </div>
    )
}