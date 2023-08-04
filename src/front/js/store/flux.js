import axios from "axios"

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: "",
			auth: false
		},
		actions: {

			login: async (dataEmail, dataPassword) => {
				//sincronismo y asincronismo
				try {
					//codigo exitoso
					let data = await axios.post('https://laughing-space-meme-j96qr66x556257wr-3001.app.github.dev/api/login', {
						email: dataEmail,
						password: dataPassword
					})
					// let data = await response.json();
					console.log(data);
					localStorage.setItem("token", data.data.access_token)
					setStore({ token: data.data.access_token })
					setStore({ auth: true })
					return true;
				} catch (error) {
					//manejar los errrores
					console.log(error);
					return false;
				}
			},

			logout: () => {
				localStorage.removeItem("token")
				setStore({ auth: false })
			},

			protected: async () => {

				try {
					let data = await fetch('https://laughing-space-meme-j96qr66x556257wr-3001.app.github.dev/api/profile', {
						method: "POST",
						headers: {
							Authorization: `Bearer ${localStorage.getItem("token")}`
						}
					})
					console.log(data);
					if (data.status != 200) {
						return false
					} else {
						return true
					}
				} catch (error) {
					console.log(error);
				}

			}

		}
	};
};

export default getState;