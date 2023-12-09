import React,{useContext} from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router";
import {Context} from "../store/appContext";
import "../../styles/index.css"

export const Profile = (props) => {
const {store, actions} = useContext(Context);
let params = useParams()
let field
let item = store[`${params.type}`][`${params.index}`];
params.type === "people" ? (
    field = (
        <div>
        <div>birth year</div>
        <div>{item.birth_year}</div>
        </div>
)) : null
params.type === "vehicles" ? (
    field = (
        <div>
        <div>model</div>
        <div>{item.model}</div>
        </div>
)) : null
params.type === "planets" ? (
    field = (
        <div>
        <div>climate</div>
        <div>{item.planet}</div>
        </div>
)) : null
return (
    <>
    {field}
    </>
)
};