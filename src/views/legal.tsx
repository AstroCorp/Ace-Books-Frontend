import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { LegalRouteParams } from '../types/routesParams';
import Menu from '../images/icons/menu';
import { useTranslation } from 'react-i18next';

const Legal = (props: RouteComponentProps<LegalRouteParams>) => {
    const [ option, setOption ] = useState(props.match.params.option || 'faqs');
    const [ t ] = useTranslation('legal');

    const [ navActive, setNavActive ] = useState(false);
	const [ navLegalActive, setNavLegalActive ] = useState(false);

	const toggleNav = () => {
		setNavActive(!navActive);
	}

	const toggleLegal = () => {
		setNavLegalActive(!navLegalActive);
	}

    useEffect(() => {
        props.history.replace('/legal/' + option);
    }, [option]);

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
				            <li className={classNames("md:inline-flex md:w-auto w-full items-center justify-center md:mx-6", {
								"mt-5 mb-8 md:my-0 text-gray-700 hover:text-darkblue-500": navActive
							})}>
				                <Link to="/" className={classNames("md:text-white p-2 hover:underline", {
									"text-gray-700 hover:text-darkblue-500": navActive,
								})}>
									{ t('nav.home') }
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

			<div className="h-screen flex flex-col justify-center m-6">
				<article className="w-full lg:w-3/4 xl:w-2/3 p-4 mx-auto flex flex-col md:flex-row">
					<div className="bg-white bg-opacity-75 p-2 flex flex-col items-end w-1/3 rounded-l-md">
						<button 
							className={classNames("text-white inline-flex md:hidden cursor-pointer", {
								"text-gray-700 hover:text-darkblue-500": navActive,
							})} 
							onClick={ toggleLegal }
						>
							<Menu
								width="32px"
								height="32px"
								color="currentColor"
							/>
						</button>

				    	<div className={classNames("md:flex w-full", {
							"hidden": !navLegalActive,
						})}>
				    	    <ul className={classNames("w-full", {
								"text-center": navLegalActive,
							})}>
				    	        <li className={classNames("w-full", {
									"text-gray-700 hover:text-darkblue-500": navLegalActive
								})}>
				    	            <button 
										className={classNames("w-full md:text-white p-2 hover:underline", {
											"text-gray-700 hover:text-darkblue-500": navLegalActive,
										})}
										onClick={() => setOption('faqs')}
									>
										{ t('options.faqs') }
									</button>
				    	        </li>

				    	        <li className={classNames("w-full", {
									"text-gray-700 hover:text-darkblue-500": navLegalActive
								})}>
				    	            <button 
										className={classNames("w-full md:text-white p-2 hover:underline", {
											"text-gray-700 hover:text-darkblue-500": navLegalActive,
										})}
										onClick={() => setOption('terms')}
									>
										{ t('options.terms') }
									</button>
				    	        </li>

								<li className={classNames("w-full", {
									"text-gray-700 hover:text-darkblue-500": navLegalActive
								})}>
				    	            <button 
										className={classNames("w-full md:text-white p-2 hover:underline", {
											"text-gray-700 hover:text-darkblue-500": navLegalActive,
										})}
										onClick={() => setOption('privacy')}
									>
										{ t('options.privacy') }
									</button>
				    	        </li>
				    	    </ul>
				    	</div>
					</div>
					<div className="bg-white bg-opacity-50 p-2 w-2/3 rounded-r-md">{ option }</div>
				</article>
			</div>

			<footer className="text-white text-shadow text-center p-4">
				<p>Copyright &copy; { new Date().getFullYear() } Ace Books. { t('footer') }</p>
			</footer>
		</div>
    );
}

export default Legal;
