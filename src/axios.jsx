import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-fir-ff812.cloudfunctions.net/api",
});

export default instance;

//https://us-central1-fir-ff812.cloudfunctions.net/api

//http://localhost:5001/fir-ff812/us-central1/api
