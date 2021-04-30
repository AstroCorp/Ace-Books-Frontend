import React, { useEffect, useState } from 'react';
import classNames from "classnames";
import { RouteComponentProps } from 'react-router';
import { AuthRouteParams } from '../types/routesParams';

const Auth = (props: RouteComponentProps<AuthRouteParams>) => {
    const [ mode, setMode ] = useState(props.match.params.mode || 'login');

    useEffect(() => {
        props.history.replace('/auth/' + mode);
    }, [mode]);

    return (
        <div className="min-h-screen bg-books flex flex-col justify-center">
            <div className="sm:mx-auto sm:w-full sm:max-w-md m-6">
                <div>
                    <button
                        onClick={() => setMode('login')}
                        className={classNames("w-1/2 text-gray-700 bg-white text-xl font-semibold px-6 py-4 focus:outline-none", {
                            "shadow-inner-full bg-opacity-85": mode !== 'login',
                        })}>
                        Log in
                    </button>

                    <button
                        onClick={() => setMode('register')}
                        className={classNames("w-1/2 text-gray-700 bg-white text-xl font-semibold px-6 py-4 focus:outline-none", {
                            "shadow-inner-full bg-opacity-85": mode !== 'register',
                        })}>
                        Sign up
                    </button>
                </div>
                
                <div className="px-6 py-8 sm:px-6 lg:px-8 bg-white">
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <div className="mt-1">
                        <input type="email" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                    </div>

                    <label className="block text-sm font-medium text-gray-700 mt-4">Password</label>
                    <div className="mt-1">
                        <input type="password" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                    </div>

                    <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center">
                            <input id="remember_me" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                            <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                                Forgot your password?
                            </a>
                        </div>
                    </div>

                    <button type="button" className="w-full mt-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Auth;
