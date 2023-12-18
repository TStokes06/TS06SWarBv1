import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = (props) => {
    const { store, actions } = useContext(Context);
    let field;

    if (props.type === "person") {
        field = 
                    <div className="card text-white bg-dark" style={{width: "18rem"}}>
                    <img
                        className="card-img-top"
                        alt="Card image cap"
                        src= {`https://starwars-visualguide.com/assets/img/characters/${props.index+1}.jpg`}
                        onError={(e) => {
                            e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                        }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{props.person.name}</h5>
                        <p className="card-text">Eye Color: {props.person.eye_color}</p>
                        <p className="card-text">Mass {props.person.mass}</p>
                        <p className="card-text">Hair Color: {props.person.hair_color}</p>
                    </div>
                    <div className="card-buttons">
                            <Link to={`profile/people/`+props.index} className="btn btn-secondary btn-card">Profile</Link>
                            <button className="btn btn-secondary btn-card" onClick={()=>actions.addFavorite(props.person.name)}>:hearts:</button>
                    </div>
            </div>
        ;
    } else if (props.type === "planet") {
        field = <div className="card text-white bg-dark" style={{width: "18rem"}}>
                    <img
                        className="card-img-top"
                        alt="Card image cap"
                        src={`https://starwars-visualguide.com/assets/img/planets/${props.index+1}.jpg`}
                        onError={(e) => {
                            e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                        }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{props.planet.name}</h5>
                        <p className="card-text">Climate: {props.planet.climate}</p>
                        <p className="card-text">Gravity: {props.planet.gravity}</p>
                        <p className="card-text">Rotation: {props.planet.rotation_period}</p>
                    </div>
                    <div className="card-buttons">
                        <Link to={'/profile/planets/' + props.index} className="btn btn-secondary btn-card">Profile</Link>
                        <button className="btn btn-secondary btn-card" onClick={()=>actions.addFavorite(props.planet.name)}>:hearts:</button>
                    </div>
            </div>
        ;
    } else if (props.type === "vehicle") {
        field = 
            <div className="card" style={{ width: "18rem" }}>
                <img
                    src={`https://starwars-visualguide.com/assets/img/vehicles/${props.index+1}.jpg`}
                    onError={(e) => {
                        e.target.src ="https://starwars-visualguide.com/assets/img/placeholder.jpg";
                    }}
                    className="card-img-top"
                    alt="..."
                />
                <div className="card-body">
                    <p className="card-text">{props.vehicle.name}</p>
                </div>
            </div>
        ;
    } else {
        field = null;
    }

    return <>{field}</>;
};

Card.propTypes = {
    type: PropTypes.string,
    index: PropTypes.number,
    person: PropTypes.shape({
        name: PropTypes.string
    }),
    vehicle: PropTypes.shape({
        name: PropTypes.string
    })
};

export default Card;
