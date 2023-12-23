import axios from "axios";

export default axios.create({
    baseURL: 'https://dr-movies.azurewebsites.net'
    //baseURL:'http://localhost:8080'
    //baseURL:'https://communal-garfish-intensely.ngrok-free.app/',
    //headers: {"ngrok-skip-browser-warning": "true"}
});