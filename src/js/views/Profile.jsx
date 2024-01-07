import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router";
import { Context } from "../store/appContext.js";
import "../../styles/index.css";

export const Profile = (props) => {
    const { store, actions } = useContext(Context);
    let params = useParams();
    let field;
    let item = store[`${params.type}`][`${params.index}`];
    
    if (params.type === "people") {
        field = (
            <div>
                <div className = "Profile-Top">
                <img
                    className="Profile-Img"
                    alt="Card image cap"
                    src= {`https://starwars-visualguide.com/assets/img/characters/${parseInt(params.index)+1}.jpg`}
                    onError={(e) => {
                        e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                    }}
                    />
                    <h1 className = "text-warning">{item.name}</h1>
                    <p className = "text-warning profile-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                    tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                    quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                    sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                    recusandae alias error harum maxime adipisci amet laborum.</p>
                </div>
                <div className = "profile-Bottom row">
                    <div className = "text-warning col-3">Mass:{item.mass}</div>
                    <div className = "text-warning col-3">Year of Birth:{item.birth_year}</div>
                    <div className = "text-warning col-3">Gender:{item.gender}</div>
                    <div className = "text-warning col-3 right-border">Height:{item.height}</div>
                </div>
            </div>
        );
    } else if (params.type === "vehicles") {
        field = (
            <div>
                <div className = "Profile-Top">
                <img
                    className="Profile-Img"
                    alt="Card image cap"
                    src= {`https://starwars-visualguide.com/assets/img/vehicles/${parseInt(params.index)+1}.jpg`}
                    onError={(e) => {
                        e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                    }}
                    />
                    <h1 className = "text-warning">{item.name}</h1>
                    <p className = "text-warning profile-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                    tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                    quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                    sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                    recusandae alias error harum maxime adipisci amet laborum.</p>
                </div>
                <div className = "profile-Bottom row">
                    <div className = "text-warning col-3">Vehicle{item.name}</div>
                    <div className = "text-warning col-3">Model{item.model}</div>
                    <div className = "text-warning col-3">Manufacture{item.manufacturer}</div>
                    <div className = "text-warning col-3 right-border">Cost{item.cost_in_credits}</div>
                </div>
            </div>
        );
    } else if (params.type === "planets") {
        field = (
            <div>
                <div className = "Profile-Top">
                <img
                        className="Profile-Img"
                        alt="Card image cap"
                        src= {`https://starwars-visualguide.com/assets/img/planets/${parseInt(params.index)+1}.jpg`}
                        onError={(e) => {
                            e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                        }}
                    />
                    <h1 className = "text-warning">{item.name}</h1>
                    <p className = "text-warning profile-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                    tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                    quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                    sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                    recusandae alias error harum maxime adipisci amet laborum.</p>
                </div>
                <div className = "profile-Bottom row">

                    <div className = "text-warning col-3">Name: {item.name}</div>
                    <div className = "text-warning col-3">Rotation{item.rotation_period}</div>
                    <div className = "text-warning col-3">Orbital{item.orbital_period}</div>
                    <div className = "text-warning col-3 right-border">Diameter{item.diameter}</div>
                    {/* <div className = "text-warning col-3">{item.climate}</div>
                    <div className = "text-warning col-3">{item.gravity}</div>
                    <div className = "text-warning col-3">{item.terrain}</div>
                    <div className = "text-warning col-3">{item.surface_water}</div>
                    <div className = "text-warning col-3">{item.population}</div> */}
                    
                </div>
            </div>
        );
    }

    return (
        <div>
            {field}
        </div>
    );
};

Profile.propTypes = {
    // Define prop types here if needed
};

export default Profile;
