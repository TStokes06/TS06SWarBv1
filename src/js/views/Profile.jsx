import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router";
import { Context } from "../store/appContext.js";
import "../../styles/index.css";

export const Profile = (props) => {
    const { store, actions } = useContext(Context);
    let params = useParams();
    let field;
    let item = store[params.type][params.index];
    
    if (params.type === "people") {
        field = (
            <div>
                <div>birth year</div>
                <div>{item.birth_year}</div>
            </div>
        );
    } else if (params.type === "vehicles") {
        field = (
            <div>
                <div>model</div>
                <div>{item.model}</div>
            </div>
        );
    } else if (params.type === "planets") {
        field = (
            <div>
                <div>climate</div>
                <div>{item.climate}</div>
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
