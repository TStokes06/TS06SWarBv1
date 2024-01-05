import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
// import Card from "../component/Card.jsx";
import "../../styles/home.css";

import Card from "../component/Card.jsx";
import PropTypes from "prop-types";


export const Home = () => {
	const {store} = useContext(Context);
	return (
		// const {store} = useContext(Context);
			<div>
				<div className ="container">
				<h2 className = "text-white">characters</h2>
				<div className ="row card-row">{store.people.map((person, index) => <Card key ={index} index = {index} person ={person} type = "person"/>)}</div>
				<h2 className = "text-white">vehicles</h2>
				<div className ="row card-row">{store.vehicles.map((vehicle, index) => <Card key ={index} index = {index} vehicle ={vehicle} type = "vehicle"/>)}</div>
				<h2 className ="text-white">planets</h2>
				<div className ="row card-row">{store.planets.map((planet, index) => <Card key ={index} index ={index} planet ={planet} type = "planet"/>)}</div>
				</div>
			</div>		
	)
	};
