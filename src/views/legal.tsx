import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { LegalRouteParams } from '../types';
import { FaqsIcon, PrivacyIcon, TermsIcon, CookiesIcon } from '../images/icons';
import { Footer, OfflineHeader } from '../components';

const Legal = (props: RouteComponentProps<LegalRouteParams>) => {
	const [ t ] = useTranslation('legal');
    const [ option, setOption ] = useState<string>(props.match.params.option || 'faqs');
	const content: string[] = t('options.' + option.split('-')[0] + '.content', { returnObjects: true });

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
		{
			icon: <CookiesIcon height="40px" width="40px" />,
			title: t('options.cookies.title'),
			description: t('options.cookies.description'),
			url: '/legal/cookies-notice',
		},
	];

    return (
        <div className="bg-books min-h-screen flex flex-col justify-between">
			<OfflineHeader />

			<div className="flex-1 flex-col justify-center mt-6 mx-6">
				<div className="w-full lg:w-3/4 xl:w-2/3 p-4 mx-auto flex flex-col md:flex-row">
					<div className="w-full md:w-96 mr-4">
				    	<ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4 mb-4 md:mb-0 sticky top-5">
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
						<ReactMarkdown
							remarkPlugins={[
								remarkGfm,
							]}
							components={{
								h1: ({ children }) => <h1 className="mb-4 text-3xl font-semibold">{ children }</h1>,
								h2: ({ children }) => <h2 className="mt-6 text-xl font-bold">{ children }</h2>,
								h3: ({ children }) => <h3 className="text-base font-bold">{ children }</h3>,
								p: ({ children }) => <p className="py-2">{ children }</p>,
								a: ({ href, children }) => <a className="text-blue-600 hover:underline" href={href} target="_blank" rel="noreferrer">{ children }</a>,
								ul: ({ children }) => <ul className="list-outside list-disc">{ children }</ul>,
								li: ({ children }) => <li className="ml-5">{ children }</li>,
								table: ({ children }) => <table className="w-full table-fixed rounded-md overflow-hidden text-left mt-3">{ children }</table>,
								thead: ({ children }) => <thead className="bg-gray-300 bg-opacity-80 overflow-hidden">{ children }</thead>,
								tbody: ({ children }) => <tbody className="bg-gray-200 overflow-hidden">{ children }</tbody>,
								th: ({ children }) => <th className="py-2 px-3">{ children }</th>,
								td: ({ children }) => <td className="py-2 px-3 border-t border-gray-300">{ children }</td>,
							}}
						>
							{
								content.reduce((accumulator: string, currentValue: string, index: number) => 
									accumulator + 
									(index === 1 ? '\n' : '') + 
									currentValue + 
									(currentValue[currentValue.length - 1] === '|'  ? '\n' : '\n\n')
								)
							}
						</ReactMarkdown>
					</div>
				</div>
			</div>

			<Footer className="p-4" />
		</div>
    );
}

export default Legal;
