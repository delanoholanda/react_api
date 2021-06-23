import axios from "axios";

const api = axios.create({
    // baseURL: 'https://api.tvmaze.com/search/shows?q=',
    baseURL: 'https://www.ag-grid.com/example-assets/olympic-winners.json',

});

export default api;