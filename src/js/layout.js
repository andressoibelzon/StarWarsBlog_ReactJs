import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { AllCards } from "./views/allCards.jsx";
import { SingleCardCharacter } from "./views/singleCardCharacter.js";
import { SingleCardPlanet } from "./views/singleCardPlanet.js";
import { SingleCardVehicle } from "./views/singleCardVehicle.js";



//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<AllCards />} />
						<Route path="/singlecard/character/:theid" element={<SingleCardCharacter />} />
						<Route path="/singlecard/planet/:theid" element={<SingleCardPlanet />} />
						<Route path="/singlecard/vehicle/:theid" element={<SingleCardVehicle />} />

						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
