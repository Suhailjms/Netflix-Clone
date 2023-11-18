import axios from "axios";


// the axios will create a base url which will be used for every url
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

//example

// instance.get('/foo-bar');

// the url will be we use get to append the url with base url and give the result as https://api.themoviedb.org/3/foo-bar

export default instance;