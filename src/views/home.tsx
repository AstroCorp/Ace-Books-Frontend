import React, { useState } from 'react';
import classNames from "classnames";
import { Link } from "react-router-dom";
import Menu from '../images/icons/menu';

const Home = (props: any) => {
	const [ navActive, setNavActive ] = useState(false);

	const toggleNav = () => {
		setNavActive(!navActive);
	}

	return (
		<div className="bg-index h-screen p-4 flex flex-col">
			<header>
				<nav className="flex items-center p-3 flex-wrap">
				    <Link to="/" className="p-2 mr-4 inline-flex items-center text-white font-sans text-4xl cursor-pointer">
				        Ace Books
				    </Link>

				    <button className="inline-flex md:hidden ml-auto cursor-pointer" onClick={ toggleNav }>
						<Menu
							width="32px"
							height="32px"
						/>
					</button>

				    <div className={classNames("relative w-full md:inline-flex md:flex-grow md:w-auto", {
						"hidden": !navActive,
						"block justify-end bg-white bg-opacity-25 py-4 pr-2": navActive,
					})}>
				        <ul className="md:inline-flex md:flex-row md:ml-auto md:w-auto w-full md:items-center items-start flex flex-col md:h-auto">
				            <li className="md:inline-flex md:w-auto w-full items-center justify-center text-right">
				                <Link className="text-white p-2 hover:underline" to="/">Inicio</Link>
				            </li>
				            <li className={classNames("md:inline-flex md:w-auto w-full items-center justify-center text-right md:mx-6", {
								"mt-5 mb-8 md:my-0": navActive
							})}>
				                <Link className="text-white p-2 hover:underline" to="/faqs">Preguntas frecuentes</Link>
				            </li>
				            <li className="md:inline-flex md:w-auto w-full items-center justify-center text-right">
				                <Link className="text-white p-2 border-2" to="/login">Iniciar Sesión</Link>
				            </li>
				        </ul>
				    </div>
				</nav>
			</header>

			<div className="h-screen flex flex-col justify-center">
				<article className="text-white w-full md:w-2/3 md:mx-auto xl:w-1/2 xl:ml-32">
					<h1 className="text-4xl font-semibold">Sincroniza y disfruta</h1>
					<p className="text-sm mt-2 mb-8">
						Ten todos tus libros siempre a mano, retoma tu lectura en cualquier dispositivo, 
						ya sea en un ordenador, una tablet o un smartphone, crea anotaciones y organiza tu
						biblioteca como desees.</p>

					<Link className="text-white p-2 border-2 uppercase" to="/register">Registrarse</Link>
				</article>
			</div>

			<header className="text-white text-center">
				<p>Copyright &copy; { new Date().getFullYear() } Ace Books. All rights reserved.</p>
			</header>
		</div>
	);
}

export default Home;
