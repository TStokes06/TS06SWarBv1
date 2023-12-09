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
                fetch("https://www.swapi.tech/api/people/")
                    .then(res => res.json())
                    .then(data => setStore({ people: data.results }))
                    .catch(err => console.log("try again", err));
            },
            fetchplanets: async () => {
                const res = await fetch("https://swapi.dev/api/planets/");
                let data = await res.json();
                setStore({ planets: data.results });
            },
            fetchvehicles: async () => {
                const res = await fetch("https://swapi.dev/api/vehicles/");
                let data = await res.json();
                setStore({ vehicles: data.results });
            },
            addfavorites: (name) => {
                const favorites = getStore().favorites.slice();
                favorites.push(name);
                setStore({ favorites: favorites });
            },
            removefavorites: (index) => {
                const favorites = getStore().favorites.slice();
                favorites.splice(index, 1);
                setStore({ favorites: favorites });
            },
        },
    };
};

export default getState;
