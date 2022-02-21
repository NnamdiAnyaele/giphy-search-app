import axios from "axios";

const baseUrl = "https://api.giphy.com";

const api_key = "Rf5jZ4wOyaE0Rs2HqX5F4X75lCzAlZoO";

export default async function searchGif(searchTerm) {
	const url = `${baseUrl}/v1/gifs/search?api_key=${api_key}&q=${searchTerm}&limit=25&offset=0&rating=Y&lang=en}`;
	const { data } = await axios.get(url);
	return data;
}
