import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "4617b584acac91c3bae351730f841532";

const getNowPlayingMovies = async (page) => {
    try {
        const {data} = await axios({
            method: 'get',
            url: BASE_URL + '/movie/now_playing',
            params: {
                api_key: API_KEY,
                language: 'ko',
                region: 'KR',
                page: page,
            },
        });
        return data;
    } catch (e) {
        throw Error(e);
    }
}

export { getNowPlayingMovies }