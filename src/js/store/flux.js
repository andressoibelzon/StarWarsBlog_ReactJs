const getState = ({
    getStore,
    getActions,
    setStore,
}) => {
    return {
        store: {
            personajes: [],
            planetas: [],
            vehiculos: [],
            favs: [],
            informacionPersonaje: [],
            informacionPlaneta: [],
            informacionVehiculo: [],
        },
        actions: {
            // Use getActions to call a function within a fuction
            obtenerPersonajes: () => {
                fetch("https://swapi.tech/api/people", {
                        method: "GET"
                    })
                    .then(res => res.json())
                    .then(data => setStore({
                        personajes: data.results
                    }))
                    .catch(err => console.error(err))
            },
            obtenerPlanetas: () => {
                fetch("https://www.swapi.tech/api/planets/", {
                        method: "GET"
                    })
                    .then(res => res.json())
                    .then(data => setStore({
                        planetas: data.results
                    }))
                    .catch(err => console.error(err))
            },
            obtenerVehiculos: () => {
                fetch("https://www.swapi.tech/api/vehicles", {
                        method: "GET"
                    })
                    .then(res => res.json())
                    .then(data => setStore({
                        vehiculos: data.results
                    }))
                    .catch(err => console.error(err))
            },
            obtenerPersonajesIndividuales: (id) => {
                fetch("https://www.swapi.tech/api/people/" + id)
                    .then(res => res.json())
                    .then(data => setStore({
                        informacionPersonaje: data.result
                    }))
                    .catch(err => console.error(err))
            },
            obtenerPlanetasIndividuales: (id) => {
                fetch("https://www.swapi.tech/api/planets/" + id)
                    .then(res => res.json())
                    .then(data => setStore({
                        informacionPlaneta: data.result
                    }))
                    .catch(err => console.error(err))
            },
            obtenerVehiculosIndividuales: (id) => {
                fetch("https://www.swapi.tech/api/vehicles/" + id)
                    .then(res => res.json())
                    .then(data => setStore({
                        informacionVehiculo: data.result
                    }))
                    .catch(err => console.error(err))
            },
            agregarFavs: (name, uid) => {
                const newFavs = getStore().favs.concat({
                    nombre: name,
                    id: uid
                })
                setStore({
                    favs: newFavs
                })
            },
            deleteFavs: (name) => {
                console.log("delete")
                console.log(name)

                const store = getStore();
                console.log(store.favs)
                const newFavStore = store.favs.filter((item) => item.nombre !== name)
                setStore({
                    favs: newFavStore
                })


            },
            changeColor: (index, color) => {
                //get the store
                const store = getStore();
                //we have to loop the entire demo array to look for the respective index
                //and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });
                //reset the global store
                setStore({
                    demo: demo,
                });
            }
        }
    };
};
export default getState;