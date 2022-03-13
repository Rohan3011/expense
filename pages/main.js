import Head from 'next/head'
import CardList from '../components/CardList'
import Dashboard from '../components/Dashboard'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Table from '../components/Table'

export default function Home() {
    return (
        <div className='flex flex-col'>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <CardList />
            <Table />
        </div>
    )
}
