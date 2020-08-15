import axios from 'axios';
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 6rinfuu0YTdxIcEz3ExDeTILuayGuSqDe729rOgyu0c'
    }
}
)