import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {

	const {store, actions} = useContext(Context)
	const navigate = useNavigate()

	const handleLogut = () => {
		actions.logout()
		navigate("/")

	}

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				{localStorage.getItem("token") ? <div className="ml-auto">
					<button className="btn btn-primary" onClick={handleLogut}>Logout</button>
				</div> : <div className="ml-auto">
					<Link to="/login">
						<button className="btn btn-success mx-2 ">Login</button>
					</Link>
					<Link to="/signup"><button className="btn btn-primary">Signup</button></Link>
				</div>}
			</div>
		</nav>
	);
};
