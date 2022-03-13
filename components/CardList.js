import React from 'react'
import Card from './Card';

const CardList = () => {
    return (
        <div className='p-4 m-4 grid grid-flow-row sm:grid-cols-2 lg:grid-cols-4 gap-4'>
            <Card title={"INCOME"} value={"+5"} amount={"$30k"} />
            <Card title={"INCOME"} value={"+5"} amount={"$30k"} />
            <Card title={"INCOME"} value={"+5"} amount={"$30k"} />
            <Card title={"INCOME"} value={"+5"} amount={"$30k"} />
        </div>
    )
}

export default CardList;