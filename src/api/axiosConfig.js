import axios from "axios";

export default axios.create({
    baseURL:'https://866a-88-74-119-183.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});