import React, { useState } from 'react';
import classNames from "classnames";
import { Link } from "react-router-dom";
import Menu from '../images/icons/menu';

const Home = () => {
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
				    <Link to="/" className={classNames("p-2 mr-4 inline-flex items-center text-white md:text-white font-sans text-4xl cursor-pointer", {
						"text-gray-700 hover:text-darkblue-500": navActive,
					})}>
				        Ace Books
				    </Link>

				    <button className={classNames("text-white inline-flex md:hidden ml-auto cursor-pointer", {
						"text-gray-700 hover:text-darkblue-500": navActive,
					})} onClick={ toggleNav }>
						<Menu
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
				            <li className="md:inline-flex md:w-auto w-full items-center justify-center">
				                <Link className={classNames("md:text-white p-2 hover:underline", {
									"text-gray-700 hover:text-darkblue-500": navActive,
								})} to="/">Home</Link>
				            </li>
				            <li className={classNames("md:inline-flex md:w-auto w-full items-center justify-center md:mx-6", {
								"mt-5 mb-8 md:my-0 text-gray-700 hover:text-darkblue-500": navActive
							})}>
				                <Link className={classNames("md:text-white p-2 hover:underline", {
									"text-gray-700 hover:text-darkblue-500": navActive,
								})} to="/faqs">FAQs</Link>
				            </li>
				            <li className="md:inline-flex md:w-auto w-full items-center justify-center">
				                <Link className={classNames("md:text-white md:border-white p-2 border-2", {
									"text-gray-700 border-gray-700": navActive,
								})} to="/auth/login">Sign in</Link>
				            </li>
				        </ul>
				    </div>
				</nav>
			</header>

			<div className="h-screen flex flex-col justify-center">
				<article className="text-white w-full p-4 mx-auto md:w-2/3 xl:w-1/2 xl:ml-32">
					<h1 className="text-4xl font-semibold">Your books always with you.</h1>
					<p className="text-sm mt-2 mb-8">
						Resume your reading from any device.
					</p>

					<Link className="text-white p-2 border-2 uppercase" to="/auth/register">Sign up</Link>
				</article>
			</div>

			<footer className="text-white text-center p-4">
				<p>Copyright &copy; { new Date().getFullYear() } Ace Books. All rights reserved.</p>
			</footer>
		</div>
	);
}

export default Home;
