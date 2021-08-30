// https://rickandmortyapi.com/api/character
import axios from "axios";

const getCharacters = async () => {
    try {
        const resp = await axios.get(
            "https://rickandmortyapi.com/api/character",
        );

        if (resp.status === 200) return resp.data.results;
    } catch (err) {
        console.error("error: ", err);
    }
};

export default getCharacters;
