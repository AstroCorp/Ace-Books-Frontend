import React, { useEffect, useState } from 'react';
import classNames from "classnames";
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { useTranslation } from 'react-i18next';
import { AuthRouteParams } from '../types';
import { CloseIcon } from '../images/icons';
import { Footer } from '../components';

const Auth = (props: RouteComponentProps<AuthRouteParams>) => {
    const [ t ] = useTranslation('auth');
    const [ option, setOption ] = useState<string>(props.match.params.option || 'login');

    useEffect(() => {
        props.history.replace('/auth/' + option);
    }, [option, props.history]);

    const handleClick = () => {
        switch (option) {
            case 'login':
                login();
                break;
            case 'register':
                register();
                break;
            case 'recovery':
                recovery();
                break;
        }
    }

    const login = () => {
        //
    }

    const register = () => {
        //
    }

    const recovery = () => {
        //
    }

    return (
        <div className="min-h-screen bg-books flex flex-col justify-center">
            <div className="m-16 sm:m-6 sm:mx-auto sm:w-full sm:max-w-md">
                <Link to="/" className="block mb-6 text-shadow text-center text-4xl cursor-pointer text-white md:text-white">
				    Ace Books
				</Link>

                <div className="flex flex-row relative">
                    {
                        option !== 'recovery' && (
                            <>
                            <button
                                onClick={() => setOption('login')}
                                className={classNames("z-10 w-1/2 text-gray-700 bg-white text-xl font-semibold px-6 py-4 rounded-tl-md focus:outline-none", {
                                    "shadow-inner-full bg-opacity-85": option !== 'login',
                                })}>
                                { t('logIn.title') }
                            </button>
                            
                            <button
                                onClick={() => setOption('register')}
                                className={classNames("z-10 w-1/2 text-gray-700 bg-white text-xl font-semibold px-6 py-4 rounded-tr-md focus:outline-none", {
                                    "shadow-inner-full bg-opacity-85": option !== 'register',
                                })}>
                                { t('signIn.title') }
                            </button>
                            </>
                        )
                    }

                    <div className="w-full flex justify-end ml-14 absolute z-0">
                        {
                            option === 'recovery' ? (
                                <button 
                                    onClick={() => setOption('login')}
                                    className="p-2 rounded-md hover:bg-white hover:bg-opacity-20 transition duration-300 ease-in-out cursor-pointer"
                                >
                                    <CloseIcon height="32px" width="32px" color="#FFF" />
                                </button>
                            ) : (
                                <Link 
                                    to="/"
                                    className="p-2 rounded-md hover:bg-white hover:bg-opacity-20 transition duration-300 ease-in-out cursor-pointer"
                                >
                                    <CloseIcon height="32px" width="32px" color="#FFF" />
                                </Link>
                            )
                        }
                    </div>
                </div>
                    
                <div className={classNames("px-6 py-8 lg:px-8 bg-white rounded-b-md", {
                    'rounded-t-md': option === 'recovery',
                })}>
                    {
                        option === 'recovery' && (
                            <h1 className="text-2xl text-gray-500 mb-4">{ t('recoveryPassword.title') }</h1>
                        )
                    }

                    <label className="block text-sm font-medium text-gray-700">{ t('logIn.email') }</label>
                    <div className="mt-1">
                        <input type="email" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    
                    {
                        option !== 'recovery' && (
                            <>
                                <label className="block text-sm font-medium text-gray-700 mt-4">{ t('logIn.password') }</label>
                                <div className="mt-1">
                                    <input type="password" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                                </div>
                            </>
                        )
                    }
                    
                    {
                        option === 'register' && (
                            <>
                                <label className="block text-sm font-medium text-gray-700 mt-4">{ t('signIn.confirmPassword') }</label>
                                <div className="mt-1">
                                    <input type="password" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                                </div>

                                <button type="button" className="w-full mt-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    { t('signIn.title') }
                                </button>
                                
                                <ReactMarkdown
                                    components={{
                                        p: ({ children }) => <p className="mt-2 text-xs text-center">{ children }</p>,
                                        a: ({ href, children }) => <a className="text-blue-500 hover:underline" href={href} target="_blank" rel="noreferrer">{ children }</a>,
                                    }}
                                >
                                    { t('signIn.subtitle') }
                                </ReactMarkdown>
                            </>
                        )
                    }

                    {
                        option === 'login' && (
                            <>
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-4">
                                    <div className="flex items-center">
                                        <input id="remember_me" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                                        <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                                            { t('logIn.remember') }
                                        </label>
                                    </div>

                                    <div className="text-sm mt-2 sm:mt-0">
                                        <button onClick={() => setOption('recovery')} className="font-medium text-blue-600 hover:text-blue-500">
                                            { t('logIn.forgotPassword') }
                                        </button>
                                    </div>
                                </div>
                                
                                <button type="button" className="w-full mt-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    { t('logIn.title') }
                                </button>
                            </>
                        )
                    }

                    {
                        option === 'recovery' && (
                            <button 
                                onClick={handleClick} 
                                type="button" 
                                className="w-full mt-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                { t('recoveryPassword.next') }
                            </button>
                        )
                    }
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Auth;
