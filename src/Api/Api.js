import axios from 'axios';

const BASE_URL = "https://pixabay.com/api";
const API_KEY = "19541580-1bdd8df51d74162905bdf8d23";

const fetchPhotos = ({ searchQuery = '', currentPage = 1, perPage = 12 }) => {
    return axios
        .get(`${BASE_URL}/?key=${API_KEY}&q=${searchQuery}&page=${currentPage}&image_type=photo&orientation=horizontal&per_page=${perPage}`)
        .then(response => response.data.hits)
};

export default { fetchPhotos };