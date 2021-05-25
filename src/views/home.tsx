import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { MenuIcon } from '../images/icons';

const Home = () => {
	const [ t ] = useTranslation('home');

	const [ navActive, setNavActive ] = useState(false);

	const toggleNav = () => {
		setNavActive(!navActive);
	}

	return (
		<div className="bg-books h-screen flex flex-col">
			<header className={classNames("md:bg-opacity-0 md:h-auto", {
				"absolute bg-white bg-opacity-90 h-full w-full": navActive,
			})}>
				<nav className="flex items-center p-4 flex-wrap">
				    <Link to="/" className={classNames("p-2 mr-4 inline-flex items-center text-white md:text-white text-4xl cursor-pointer", {
						"text-gray-700 hover:text-darkblue-500": navActive,
						"text-shadow": !navActive,
					})}>
				        Ace Books
				    </Link>

				    <button className={classNames("text-white inline-flex md:hidden ml-auto cursor-pointer", {
						"text-gray-700 hover:text-darkblue-500": navActive,
					})} onClick={ toggleNav }>
						<MenuIcon
							width="32px"
							height="32px"
							color="currentColor"
						/>
					</button>

				    <div className={classNames("relative w-full md:inline-flex md:flex-grow md:w-auto", {
						"hidden": !navActive,
					})}>
				        <ul className={classNames("md:inline-flex md:flex-row md:ml-auto md:w-auto w-full md:items-center items-start flex flex-col md:h-auto md:text-right md:mt-0", {
							"text-center mt-8": navActive,
						})}>
				            <li className={classNames("md:inline-flex md:w-auto w-full items-center justify-center md:mx-6", {
								"mt-5 mb-8 md:my-0 text-gray-700 hover:text-darkblue-500": navActive
							})}>
				                <Link className={classNames("md:text-white p-2 hover:underline", {
									"text-gray-700 hover:text-darkblue-500": navActive,
								})} to="/legal/faqs">
									{ t('nav.faqs') }
								</Link>
				            </li>
							
				            <li className="md:inline-flex md:w-auto w-full items-center justify-center">
				                <Link className={classNames("md:text-white md:border-white p-2 border-2 rounded-md bg-white bg-opacity-0 hover:bg-opacity-20 transition duration-300 ease-in-out", {
									"text-gray-700 border-gray-700": navActive,
								})} to="/auth/login">
									{ t('nav.signIn') }
								</Link>
				            </li>
				        </ul>
				    </div>
				</nav>
			</header>

			<div className="h-screen flex flex-col justify-center">
				<article className="text-white w-full p-4 mx-auto md:w-2/3 xl:w-1/2 xl:ml-32">
					<h1 className="text-4xl font-semibold">{ t('main.title') }</h1>
					<p className="text-sm mt-2 mb-10">{ t('main.description') }</p>

					<Link className="text-white px-4 py-3 border-2 rounded-md uppercase bg-white bg-opacity-0 hover:bg-opacity-20 transition duration-300 ease-in-out" to="/auth/register">{ t('main.button') }</Link>
				</article>
			</div>

			<footer className="text-white text-shadow text-center p-4">
				<p>Copyright &copy; { new Date().getFullYear() } Ace Books. { t('footer') }</p>
			</footer>
		</div>
	);
}

export default Home;
