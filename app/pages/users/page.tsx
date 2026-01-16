//import React from 'react'
import style from '../../styles/UsersCard.module.css';
import ButtonAdd from '@/app/components/Button';
import Link from 'next/link';

interface User {
    id: number;
    name: string;
    email: string;
}

const PageUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users',
        {
            cache: 'no-store'
        });

    const users: User[] = await res.json();

    return (
        <section className='text-center flex flex-col items-center justify-center min-h-screen'>
            <h1 className='text-lg font-bold'>This data comes from: <a
                href="https://jsonplaceholder.typicode.com"
                target="_blank"
                rel="noopener noreferrer"
                className='hover:text-amber-100'>https://jsonplaceholder.typicode.com</a>
            </h1>

            <p className="pb-4 text-amber-100">A web site to check REST API</p>
            <div className={style.usersCard}>
                <ul>
                    {users.map(user => <li key={user.id}>{user.name} : {user.email} </li>
                    )}
                </ul>
            </div>
            <div className='text-center p-4'>
                <ButtonAdd
                    label="Go back"
                    href="/"
                />
            </div>
        </section>
    )
}

export default PageUsers