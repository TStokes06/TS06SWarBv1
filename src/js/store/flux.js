const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            people: [],
            planets: [],
            vehicles: [],
            favorites: [],
        },
        actions: {

            fetchpeople: () => {
                // fetch("https://www.swapi.tech/api/people/")
                //     .then(res => res.json())
                //     .then(data => {setStore({people:data.results}
                //     );})
                //     .catch(err => console.log("try again", err));

                fetch("https://swapi.dev/api/people")
				.then(response => response.json())	
				.then(data => {
					// console.log(data);
					setStore({people:data.results});
				})
				.catch(error => console.log("Something went wrong, check me out:", error))
            },
            fetchplanets: async () => {
                const res = await fetch("https://swapi.dev/api/planets");
                let data = await res.json();
                setStore({planets:data.results});
            },
            fetchvehicles: async () => {
                const res = await fetch("https://swapi.dev/api/vehicles");
                let data = await res.json();
                setStore({vehicles:data.results});
            },
            addfavorites: (name) => {
                const favorites = [...getStore().favorites, name];
                 setStore({ favorites });
            },
            removefavorites: (index) => {
                 const favorites = [...getStore().favorites];
                 favorites.splice(index, 1);
                setStore({ favorites });
            },

        },
    };
};

export default getState;
