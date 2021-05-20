import React from 'react';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

const NoMatch = (props: RouteComponentProps) => {
    const [ t ] = useTranslation('no_match');

    return (
        <div className="bg-books h-screen flex flex-col justify-center">
            <main className="flex flex-col items-center">
                <h1 className="text-9xl text-center text-white text-opacity-60">404</h1>
                <h2 className="text-2xl text-center text-white text-opacity-75 mb-10">{ t('message') }</h2>

                <Link className="text-white px-4 py-3 border-2 rounded-md uppercase bg-white bg-opacity-0 hover:bg-opacity-20 transition duration-300 ease-in-out" to="/">{ t('button') }</Link>
            </main>
        </div>
    );
}

export default NoMatch;
