import axios from 'axios';
const KEY = 'AIzaSyDetBtZ8-tiID1oPX2E9TieRdsuG5V_w7Y';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 1,
        key: KEY
    }
})
