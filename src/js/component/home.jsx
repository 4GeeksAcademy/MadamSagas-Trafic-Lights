import React from "react";
import TraficLight from "./TraficLight.js"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			
			<TraficLight />
		</div>
	);
};

export default Home;
