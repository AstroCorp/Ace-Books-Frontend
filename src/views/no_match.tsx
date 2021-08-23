import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Footer } from '../components';

const NoMatch = () => {
    const [ t ] = useTranslation('no_match');

    return (
        <div className="bg-books h-screen flex flex-col">
            <header>
                <nav className="flex items-center p-4 flex-wrap">
                    <Link to="/" className="p-2 mr-4 inline-flex items-center text-white md:text-white text-4xl cursor-pointer">
                        Ace Books
                    </Link>
                </nav>
            </header>

            <div className="h-screen flex flex-col justify-center">
                <article className="flex flex-col p-4 items-center text-center">
                    <h1 className="text-9xl text-white text-opacity-60">404</h1>
                    <h2 className="text-2xl text-white text-opacity-75 mb-10">{ t('message') }</h2>

                    <Link className="text-white px-4 py-3 border-2 rounded-md uppercase bg-white bg-opacity-0 hover:bg-opacity-20 transition duration-300 ease-in-out" to="/">{ t('button') }</Link>
                </article>
            </div>

            <Footer className="p-4" />
        </div>
    );
}

export default NoMatch;
