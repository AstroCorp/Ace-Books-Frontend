import React, { useEffect, useState } from 'react';
import classNames from "classnames";
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { AuthRouteParams } from '../types';
import { CloseIcon } from '../images/icons';

const Auth = (props: RouteComponentProps<AuthRouteParams>) => {
    const [ option, setOption ] = useState<string>(props.match.params.option || 'login');

    useEffect(() => {
        props.history.replace('/auth/' + option);
    }, [option, props.history]);

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
                                Log in
                            </button>
                            
                            <button
                                onClick={() => setOption('register')}
                                className={classNames("z-10 w-1/2 text-gray-700 bg-white text-xl font-semibold px-6 py-4 rounded-tr-md focus:outline-none", {
                                    "shadow-inner-full bg-opacity-85": option !== 'register',
                                })}>
                                Sign up
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
                            <h1 className="text-2xl text-gray-500 mb-4">Recover your account</h1>
                        )
                    }

                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <div className="mt-1">
                        <input type="email" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    
                    {
                        option !== 'recovery' && (
                            <>
                                <label className="block text-sm font-medium text-gray-700 mt-4">Password</label>
                                <div className="mt-1">
                                    <input type="password" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                                </div>
                            </>
                        )
                    }
                    
                    {
                        option === 'register' && (
                            <>
                                <label className="block text-sm font-medium text-gray-700 mt-4">Confirm Password</label>
                                <div className="mt-1">
                                    <input type="password" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                                </div>

                                <button type="button" className="w-full mt-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    Sign up
                                </button>
                                
                                <p className="mt-2 text-xs text-center">
                                    By clicking Sign up, you are indicating that you have read and acknowledge the 
                                    <Link target="_blank" className="mx-1 text-blue-500 hover:underline" to="/legal/terms-of-service">Terms of Service</Link>and 
                                    <Link target="_blank" className="ml-1 text-blue-500 hover:underline" to="/legal/privacy-notice">Privacy Notice</Link>.
                                </p>
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
                                            Remember me
                                        </label>
                                    </div>

                                    <div className="text-sm mt-2 sm:mt-0">
                                        <button onClick={() => setOption('recovery')} className="font-medium text-blue-600 hover:text-blue-500">
                                            Forgot your password?
                                        </button>
                                    </div>
                                </div>
                                
                                <button type="button" className="w-full mt-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    Log in
                                </button>
                            </>
                        )
                    }

                    {
                        option === 'recovery' && (
                            <button type="button" className="w-full mt-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                Next
                            </button>
                        )
                    }
                </div>
            </div>

            <footer className="text-white text-shadow text-center">
				<p>Copyright &copy; { new Date().getFullYear() } Ace Books. All rights reserved.</p>
			</footer>
        </div>
    );
}

export default Auth;
