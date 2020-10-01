import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-clone-a5a50.cloudfunctions.net/api' //Production
    //baseURL: 'http://localhost:5001/clone-a5a50/us-central1/api'    //Dev
});

export default instance;