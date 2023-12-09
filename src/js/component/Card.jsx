import React, {useContext} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {Context} from "../store/appContext";

export const Card = (props) => {
    const {store, actions} = useContext(Context);
    let field 
    props.type === "person" ? (
        field = 
        <div class="card" style= {{width: "18rem;"}}>
            <img src={`https://starwars-visualguide.com/assets/img/characters/${props.index + 1}.jpg`}onError={(e) => {e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'}} class="card-img-top" alt="..."/>
        <div class="card-body">
            <h5 class="card-title">{props.person.name}</h5>
            <p class="card-text">eyecolor:{props.person.eye_color}</p>
            <Link to ={'profile/people/'+props.index} className = "btn btn-primary">Profile</Link>
            <button onClick ={()=>actions.addfavorites(props.person.name)} className = "btn btn-primary">Add to Favorites</button>
        </div>
        </div>
    ) :null
    props.type === "planet" ? (
        field = 
        <div class="card" style= {{width: "18rem;"}}>
            <img src={`https://starwars-visualguide.com/assets/img/planets/${props.index + 1}.jpg`}onError={(e) => {e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'}} class="card-img-top" alt="..."/>
        <div class="card-body">
            <h5 class="card-title">{props.planet.name}</h5>
            <p class="card-text">Climate:{props.planet.climate}</p>
            <Link to ={'profile/planets/'+props.index} className = "btn btn-primary">Profile</Link>
            <button onClick ={()=>actions.addfavorites(props.planet.name)} className = "btn btn-primary">Add to Favorites</button>
        </div>
        </div>
    ) :null
    props.type === "vehicle" ? (
        field = 
        <div class="card" style= {{width: "18rem;"}}>
            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${props.index + 1}.jpg`}onError={(e) => {e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'}} class="card-img-top" alt="..."/>
        <div class="card-body">
            <h5 class="card-title">{props.vehicle.name}</h5>
            <p class="card-text">Model:{props.vehicle.model}</p>
            <Link to ={'profile/vehicles/'+props.index} className = "btn btn-primary">Profile</Link>
            <button onClick ={()=>actions.addfavorites(props.vehicle.name)} className = "btn btn-primary">Add to Favorites</button>
        </div>
        </div>
    ) :null
    return (
        <>
        {field}
        </>
    )
}