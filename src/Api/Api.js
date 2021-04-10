import axios from 'axios';

const fetchPhotos = ({ searchQuery = '', currentPage = 1, perPage = 12 }) => {
    return axios
        .get(`https://pixabay.com/api/?key=19541580-1bdd8df51d74162905bdf8d23&q=${searchQuery}&page=${currentPage}&image_type=photo&orientation=horizontal&per_page=${perPage}`)
        .then(response => response.data.hits)
};

export default { fetchPhotos };