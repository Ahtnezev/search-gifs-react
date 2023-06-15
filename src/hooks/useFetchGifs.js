import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const getImages = async() => {
		const newImages = await getGifs( category );
		setImages(newImages);
		setIsLoading(false);
	}

	useEffect( () => {
		getImages();
	}, []);
	// Sino pasamos el listado de dependencias el componente sólo se va a dibujar 1 vez -> []

	// un hook es una funcion
	// cuando la propiedad y la variable tienen el mismo valor no es necesario : y solo pasarla una vez
	return {
		images,
		isLoading
	};
}
