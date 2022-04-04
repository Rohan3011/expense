import React from 'react'
import Link from 'next/link';
import HeroSection from './HeroSection';

const Signup = () => {
    return (
        <div className='w-lg h-screen w-screen flex justify-center items-center gap-10'>
            <div className='bg-white p-4 lg:ml-10 w-[400px] lg:w-[500px] flex flex-col items-center space-y-8'>
                <SignupTitle />
                <SignupBody />
                <SignupAction />
                <SignupSocialHandle />
            </div>
            <HeroSection />
        </div>
    )
}

export default Signup;


const SignupTitle = () => {
    return (
        <section className='flex flex-col justify-center space-y-2'>
            <h3 className="text-3xl lg:text-4xl tracking-tight font-bold text-center text-slate-800">
                Create Your Account
            </h3>
            <p className='text-center text-sm text-slate-500'>
                Already have an account?
                <Link passHref href="/signup">
                    <span className='cursor-pointer text-blue-700 font-semibold'> Login </span>
                </Link>
            </p>
        </section>
    )
}

const SignupBody = () => {

    const style = {
        input: 'text-slate-800 sm:text-xl border-b-2 border-slate-500 focus:border-slate-900',
        inputCell: 'border-b-2 mb-2 card-animation grow focus:shadow-lg focus:border outline-none p-2 rounded text-lg text-slate-700 font-medium',
        label: "mt-1 text-xs font-bold text-slate-500"
    }

    return (
        <section className='w-full max-w-sm p-4 flex flex-col rounded-md'>
            <label htmlFor='name' className={style.label}>Name</label>
            <input className={style.inputCell} type={'text'} id="name" />

            <label htmlFor='username' className={style.label}>username</label>
            <input className={style.inputCell} type={'text'} id="username" />

            <label htmlFor='email' className={style.label}>email</label>
            <input className={style.inputCell} type={'email'} id="email" />

            <label htmlFor='password' className={style.label}>password</label>
            <input className={style.inputCell} type={'password'} id="password" />

        </section>
    );
}


const SignupAction = () => {
    return (
        <section className='w-full flex justify-center'>
            <button className='bg-blue-700 text-white px-10 py-2 rounded cursor-pointer hover:bg-blue-600'> Signup</button>
        </section>
    )
}


const SignupSocialHandle = () => {
    const style = {
        span: 'cursor-pointer text-slate-700 font-medium px-1'
    }

    const link = {
        github: "https://github.com/Rohan3011/expense",
        linkedin: "https://www.linkedin.com/in/rohan-kamble/",

    }

    return (
        <div className='fixed bottom-10 left-30 divide-x-2'>
            <a target={'_blank'} href={link.github} rel="noreferrer">
                <span className={style.span} > GitHub </span>
            </a>
            <a target={'_blank'} href={link.linkedin} rel="noreferrer">
                <span className={style.span} > Linkedin </span>
            </a>

        </div>
    )
}