import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Footer, OfflineHeader } from '../components';

const Home = () => {
	const [ t ] = useTranslation('home');

	return (
		<div className="bg-books h-screen flex flex-col">
			<OfflineHeader mode="home" />

			<div className="h-screen flex flex-col justify-center">
				<article className="text-white w-full p-4 mx-auto md:w-2/3 xl:w-1/2 xl:ml-32">
					<h1 className="text-4xl font-semibold">{ t('main.title') }</h1>
					<p className="text-sm mt-2 mb-10">{ t('main.description') }</p>

					<Link className="text-white px-4 py-3 border-2 rounded-md uppercase bg-white bg-opacity-0 hover:bg-opacity-20 transition duration-300 ease-in-out" to="/auth/register">{ t('main.button') }</Link>
				</article>
			</div>

			<Footer className="p-4" />
		</div>
	);
}

export default Home;
