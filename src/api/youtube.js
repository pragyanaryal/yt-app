import axios from 'axios';

const KEY = 'AIzaSyBeimM7sPL1h3GCIYERHXZhAdwnfSKoDtI';

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
   params: {
      part: 'snippet',
      maxResults: 25,
      key: KEY
   }
});