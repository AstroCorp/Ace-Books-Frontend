import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { LegalOption } from '../components';
import { LegalRouteParams } from '../types';
import { FaqsIcon, MenuIcon, PrivacyIcon, TermsIcon } from '../images/icons';

const Legal = (props: RouteComponentProps<LegalRouteParams>) => {
    const [ option, setOption ] = useState(props.match.params.option || 'faqs');
    const [ t ] = useTranslation('legal');

    const [ navActive, setNavActive ] = useState(false);

	const toggleNav = () => {
		setNavActive(!navActive);
	}

    useEffect(() => {
        setOption(props.match.params.option);
    }, [props.match.params.option]);

	const legalOptions = [
		{
			icon: <FaqsIcon height="40px" width="40px" />,
			title: t('options.faqs.title'),
			description: t('options.faqs.description'),
			url: '/legal/faqs',
		},
		{
			icon: <TermsIcon height="40px" width="40px" />,
			title: t('options.terms.title'),
			description: t('options.terms.description'),
			url: '/legal/terms-of-service',
		},
		{
			icon: <PrivacyIcon height="40px" width="40px" />,
			title: t('options.privacy.title'),
			description: t('options.privacy.description'),
			url: '/legal/privacy-notice',
		},
	];

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
					<div className="flex flex-col items-end w-96">
				    	<ul>
							{
								legalOptions.map((legalOption) => (
									<LegalOption
										key={legalOption.url}
										icon={legalOption.icon}
										title={legalOption.title}
										description={legalOption.description}
										url={legalOption.url}
									/>
								))
							}
				    	</ul>
					</div>
					<div className="bg-white bg-opacity-95 p-2 w-full rounded-md">{ option }</div>
				</article>
			</div>

			<footer className="text-white text-shadow text-center p-4">
				<p>Copyright &copy; { new Date().getFullYear() } Ace Books. { t('footer') }</p>
			</footer>
		</div>
    );
}

export default Legal;
