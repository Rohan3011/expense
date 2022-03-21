import Head from 'next/head'
import InputCard from '../components/InputCard'
import Body from '../components/Body'
import PageTitle from '../components/PageTitle'
import Table from '../components/Table'
import BarChart from '../components/BarChart'
import TopThreeCard from '../components/InputCard/TopThreeCard'


export default function Home() {
    return (
        <div className='flex flex-col'>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Body >
                <PageTitle title={"Income"} link={"/income"} />
                <div className='flex justify-around'>
                    <InputCard title={"Add Income"} />
                    <BarChart />
                </div>
                <Table title={"Recent Incomes"} />
            </Body>
        </div>
    )
}


