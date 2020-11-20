import axios from 'axios';
const KEY = 'AIzaSyClGZ8z9ZvqY0cM-ycQCTFGuN0nNrToj3U';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 1,
        key: KEY
    }
})
