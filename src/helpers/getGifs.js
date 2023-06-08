export const getGifs = async (category) => {
	const apiKey = 'ig1hHw01dKmqVWmFX6wIgwIEcYE8PBKm';
	const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=20&q=${category}`;
	const resp = await fetch(url);
	const { data } = await resp.json();

	const gifs = data.map(img => ({
		id: img.id,
		title: img.title,
		url: img.images.downsized_medium.url
	}));

	console.log(gifs);
	return gifs;
}