import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { login } from '../store/actions/authActions';
import { AuthProps } from '../types';
import { CloseIcon } from '../images/icons';
import { Footer } from '../components';

const Auth = (props: AuthProps) => {
    const [ t ] = useTranslation('auth');
    const [ option, setOption ] = useState<string>(props.match.params.option || 'login');
    const [ schema, setSchema ] = useState<yup.AnyObjectSchema>(yup.object().shape({}));
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    useEffect(() => {
        props.history.replace('/auth/' + option);

        reset(); // Limpiamos el form

        const newSchema: any = {
            email: yup.string().required().email(),
        };

        if (option === 'login' || option === 'register') {
            newSchema.password = yup.string().required().min(6).max(25);
        }

        if (option === 'register') {
            newSchema.confirmPassword = yup.string().required().oneOf([yup.ref('password')]);
        }

        setSchema(yup.object().shape(newSchema));
    }, [option, props.history, reset]);

    const onSubmit = (data: any) => {
        switch (option) {
            case 'login':
                props.login(data.email, data.password);
                break;
            case 'register':
                signup(data);
                break;
            case 'recovery':
                recovery(data);
                break;
        }
    }

    const signup = (data: any) => {
        //
    }

    const recovery = (data: any) => {
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
                                    })}
                                >
                                    { t('logIn.title') }
                                </button>
                                
                                <button
                                    onClick={() => setOption('register')}
                                    className={classNames("z-10 w-1/2 text-gray-700 bg-white text-xl font-semibold px-6 py-4 rounded-tr-md focus:outline-none", {
                                        "shadow-inner-full bg-opacity-85": option !== 'register',
                                    })}
                                >
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
                    
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className={classNames("px-6 py-8 lg:px-8 bg-white rounded-b-md", {
                        'rounded-t-md': option === 'recovery',
                    })}
                >
                    {
                        option === 'recovery' && (
                            <h1 className="text-2xl text-gray-500 mb-4">{ t('recoveryPassword.title') }</h1>
                        )
                    }

                    <label className="block text-sm font-medium text-gray-700">{ t('logIn.email') }</label>
                    <div className="mt-1">
                        <input 
                            type="email" 
                            className={classNames('shadow-sm block w-full sm:text-sm border-gray-300 rounded-md', {
                                'focus:ring-blue-500 focus:border-blue-500': !errors.email,
                                'focus:ring-red-500 focus:border-red-500': errors.email,
                            })}
                            { ...register('email') }
                        />
                        {
                            errors.email && (
                                <div className="text-sm text-red-500 pt-1">{ t('errors.email') }</div>
                            )
                        }
                    </div>
                    
                    {
                        option !== 'recovery' && (
                            <>
                                <label className="block text-sm font-medium text-gray-700 mt-4">{ t('logIn.password') }</label>
                                <div className="mt-1">
                                    <input 
                                        type="password"
                                        className={classNames('shadow-sm block w-full sm:text-sm border-gray-300 rounded-md', {
                                            'focus:ring-blue-500 focus:border-blue-500': !errors.password,
                                            'focus:ring-red-500 focus:border-red-500': errors.password,
                                        })}
                                        { ...register('password') }
                                    />
                                    {
                                        errors.password && (
                                            <div className="text-sm text-red-500 pt-1">{ t('errors.password') }</div>
                                        )
                                    }
                                </div>
                            </>
                        )
                    }
                    
                    {
                        option === 'register' && (
                            <>
                                <label className="block text-sm font-medium text-gray-700 mt-4">{ t('signIn.confirmPassword') }</label>
                                <div className="mt-1">
                                    <input
                                        type="password"
                                        className={classNames('shadow-sm block w-full sm:text-sm border-gray-300 rounded-md', {
                                            'focus:ring-blue-500 focus:border-blue-500': !errors.confirmPassword,
                                            'focus:ring-red-500 focus:border-red-500': errors.confirmPassword
                                        })}
                                        { ...register('confirmPassword') }
                                    />
                                    {
                                        errors.confirmPassword && (
                                            <div className="text-sm text-red-500 pt-1">{ t('errors.confirmPassword') }</div>
                                        )
                                    }
                                </div>

                                <button type="submit" className="w-full mt-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
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
                                <div className="flex items-center justify-start my-4">
                                    <button onClick={() => setOption('recovery')} className="text-sm font-medium text-blue-600 hover:text-blue-500">
                                        { t('logIn.forgotPassword') }
                                    </button>
                                </div>
                                
                                <button type="submit" className="w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    { t('logIn.title') }
                                </button>
                            </>
                        )
                    }

                    {
                        option === 'recovery' && (
                            <button
                                type="submit" 
                                className="w-full mt-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                { t('recoveryPassword.next') }
                            </button>
                        )
                    }
                </form>
            </div>

            <Footer />
        </div>
    );
}

const mapStateToProps = ({ authReducer }: any) => ({
	error: authReducer.error,
    loading: authReducer.loading,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    login,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Auth);