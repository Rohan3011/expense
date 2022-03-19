import React from 'react'
import PageSubHeader from './PageSubHeader'

const Table = ({ title }) => {


    const data = [
        {
            Header: "title",
            Date: "1-2-22",
            Amount: "3000",
            Source: "hidden",
            Type: "money",
            Note: "no coins"
        },
        {
            Header: "title",
            Date: "1-2-22",
            Amount: "3000",
            Source: "hidden",
            Type: "money",
            Note: "no coins"
        },
        {
            header: "header",
            date: "1-2-22",
            amount: "3000",
            source: "hidden",
            type: "money",
            note: "no coins"
        },
    ]

    return (
        <div className='overflow-x-auto grow p-4'>
            <PageSubHeader title={title} />
            <div className="">
                <table className="table-auto border border-collapse rounded-none w-full">
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
        </div>
    )
}

export default Table;



const TableHeader = ({ props }) => {
    return (
        <thead className='bg-stone-50 text-slate-500 text-lg font-semibold'>
            <tr>{
                Object.entries(props).map((value, key) => {
                    return (
                        <td className='border' key={key}>
                            <span
                                className='input-cell'
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
    return (
        <tr className="">
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
        <td className='border'>
            <input
                onChange={handleIt}
                className='input-cell text-slate-700'
                type="text" value={value[1]} />
        </td>
    );
}