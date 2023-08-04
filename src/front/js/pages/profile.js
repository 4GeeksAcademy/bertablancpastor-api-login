import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Profile = () => {
	const { store, actions } = useContext(Context);
    const navigate = useNavigate()
    const kickUser = async() => {
        await actions.protected() ? " " : 
        (navigate("/login"))
    }

	useEffect(() => {
        kickUser() 
    }, [])

	return (
		<div className="container">
            <h1>Protected path</h1>
		</div>
	);
};

