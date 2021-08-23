import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import { LegalRouteParams } from '../types';
import { FaqsIcon, PrivacyIcon, TermsIcon } from '../images/icons';
import { Footer, OfflineHeader } from '../components';

const Legal = (props: RouteComponentProps<LegalRouteParams>) => {
    const [ option, setOption ] = useState<string>(props.match.params.option || 'faqs');
    const [ t ] = useTranslation('legal');

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
			<OfflineHeader />

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
							option === 'terms-of-service' && (
								terms()
							)
						}
					</div>
				</div>
			</div>

			<Footer />
		</div>
    );
}

export default Legal;