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
				<h2>characters</h2>
				<div className ="row">{store.people.map((person, index) => <Card key ={index} person ={person} type = "person"/>)}</div>
				<h2>vehicles</h2>
				<div className ="row">{store.vehicles.map((vehicle, index) => <Card key ={index} vehicle ={vehicle} type = "vehicle"/>)}</div>
				<h2>planets</h2>
				<div className ="row">{store.planets.map((planet, index) => <Card key ={index} planet ={planet} type = "planet"/>)}</div>
				</div>
			</div>		
	)
	};
