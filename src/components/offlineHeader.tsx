import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { MenuIcon } from '../images/icons';

const OfflineHeader = ({ mode = 'default' }: any) => {
    const [ t ] = useTranslation('global');

    const [ navActive, setNavActive ] = useState<boolean>(false);

	const toggleNav = () => {
		setNavActive(!navActive);
	}

    return (
        <header className={classNames('md:bg-opacity-0 md:h-auto', {
            'absolute bg-white bg-opacity-90 h-full w-full': navActive,
        })}>
            <nav className="flex items-center p-4 flex-wrap">
                <Link to="/" className={classNames('p-2 mr-4 inline-flex items-center text-white md:text-white text-4xl cursor-pointer', {
                    'text-gray-700 hover:text-darkblue-500': navActive,
                    'text-shadow': !navActive,
                })}>
                    Ace Books
                </Link>

                <button className={classNames('text-white inline-flex md:hidden ml-auto cursor-pointer', {
                    'text-gray-700 hover:text-darkblue-500': navActive,
                })} onClick={ toggleNav }>
                    <MenuIcon
                        width="32px"
                        height="32px"
                        color="currentColor"
                    />
                </button>

                <div className={classNames('relative w-full md:inline-flex md:flex-grow md:w-auto', {
                    'hidden': !navActive,
                })}>
                    <ul className={classNames('md:inline-flex md:flex-row md:ml-auto md:w-auto w-full md:items-center items-start flex flex-col md:h-auto md:text-right md:mt-0', {
                        'text-center mt-8': navActive,
                    })}>
                        <li className={classNames('md:inline-flex md:w-auto w-full items-center justify-center md:mx-6', {
                            'mt-5 mb-8 md:my-0 text-gray-700 hover:text-darkblue-500': navActive
                        })}>
                            <Link 
                                className={classNames('md:text-white p-2 hover:underline', {
                                    'text-gray-700 hover:text-darkblue-500': navActive,
                                })} 
                                to={mode === 'default' ? '/' : '/legal/faqs'}
                            >
                                { t('offlineHeader.' + (mode === 'default' ? 'home' : 'faqs')) }
                            </Link>
                        </li>
                        
                        <li className="md:inline-flex md:w-auto w-full items-center justify-center">
                            <Link className={classNames('md:text-white md:border-white p-2 border-2 rounded-md bg-white bg-opacity-0 hover:bg-opacity-20 transition duration-300 ease-in-out', {
                                'text-gray-700 border-gray-700': navActive,
                            })} to="/auth/login">
                                { t('offlineHeader.signIn') }
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default OfflineHeader;
