import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import { LegalRouteParams } from '../types';
import { FaqsIcon, MenuIcon, PrivacyIcon, TermsIcon } from '../images/icons';

const Legal = (props: RouteComponentProps<LegalRouteParams>) => {
    const [ option, setOption ] = useState<string>(props.match.params.option || 'faqs');
    const [ t ] = useTranslation('legal');

    const [ navActive, setNavActive ] = useState<boolean>(false);

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

	const terms = () => {
		const texts = t('options.terms.content', { returnObjects: true, }) as string[];

		return texts.map((text: string, index: number) => (
			<ReactMarkdown 
				key={'line-' + index}
				components={{
					h1: ({ children }) => (<h1 className="mb-4 text-3xl font-semibold">{ children }</h1>),
					h2: ({ children }) => (<h2 className="mt-6 text-xl font-bold">{ children }</h2>),
					h3: ({ children }) => (<h3 className="text-base font-bold">{ children }</h3>),
					p: ({ children }) => (<p className="py-2">{ children }</p>),
				}}
			>
				{ text }
			</ReactMarkdown>
		));
	}

    return (
        <div className="bg-books min-h-screen">
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

			<div className="flex flex-col justify-center m-6">
				<div className="w-full lg:w-3/4 xl:w-2/3 p-4 mx-auto flex flex-col md:flex-row">
					<div className="flex flex-col items-end w-full md:w-96 mr-4">
				    	<ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4 mb-4 md:mb-0">
							{
								legalOptions.map((legalOption, index) => (
									<Link key={'legalOption' + index} className="bg-white bg-opacity-80 rounded-md p-4 md:mb-1 flex flex-row" to={legalOption.url}>
										<div>
											{ legalOption.icon }
										</div>
									    <div className="ml-4">
											<div className="font-semibold">{ legalOption.title }</div>
											<p className="text-xs text-gray-600">{ legalOption.description }</p>
										</div>
									</Link>
								))
							}
				    	</ul>
					</div>
					<div className="bg-white bg-opacity-95 p-6 w-full rounded-md">
						{
							option === 'terms-of-service' && (terms())
						}
					</div>
				</div>
			</div>

			<footer className="text-white text-shadow text-center p-4">
				<p>Copyright &copy; { new Date().getFullYear() } Ace Books. { t('footer') }</p>
			</footer>
		</div>
    );
}

export default Legal;
