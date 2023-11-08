import axios from "axios";

export default axios.create({
    //baseURL:'https://localhost:8080'
    baseURL:'https://communal-garfish-intensely.ngrok-free.app/',
    headers: {"ngrok-skip-browser-warning": "true"}
});