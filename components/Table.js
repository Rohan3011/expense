import React from 'react'
import PageSubHeader from './PageSubHeader'

const Table = ({ title }) => {


    const data = [
        {
            header: "header",
            date: "1-2-22",
            amount: "3000",
            source: "hidden",
            type: "cash",
            "note": "no card"
        },
    ]
    return (
        <div className='p-4' >
            <PageSubHeader title={title} />
            <table className="w-full bg-white">
                <TableHeader props={data[0]} />
                <tbody className="transform animate-none">
                    {
                        data.map((val, idx) => {
                            return <TableRow
                                key={idx}
                                header={val.header}
                                date={val.date}
                                amount={val.amount}
                                source={val.source}
                                type={val.type}
                                note={val?.note}
                            />
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table;



const TableHeader = ({ props }) => {
    return (
        <thead className='bg-stone-50 text-slate-500 font-medium'>
            <tr className=''>{
                Object.entries(props).map((value, key) => {
                    return (
                        <td className='p-1 w-fit border' key={key}>
                            <span
                                className=''
                                type="text">
                                {value[0]}
                            </span>
                        </td>
                    )
                })
            }
            </tr>
        </thead>
    )
}

const TableRow = (props) => {
    console.log(props)
    return (
        <tr className="w-full">
            {
                Object.entries(props).map((val, key) => {
                    return <TableColumn key={key} value={val} />
                })
            }
        </tr>
    );
}

const TableColumn = ({ value }) => {

    const handleIt = (val) => {
        (e) => console.log(val);
    }
    return (
        <td className='border rounded whitespace-nowrap tracking-wider'>
            <input
                onChange={handleIt}
                className='input-cell w-full text-slate-700'
                type="text" value={value[1]} />
        </td>
    );
}