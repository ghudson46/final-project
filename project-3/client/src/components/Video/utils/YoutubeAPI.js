import axios from 'axios';
const KEY = 'AIzaSyBcv7X5EfILcAagZzFAhWQYIuzsmuyJC4g';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 3,
        key: KEY
    }
})
