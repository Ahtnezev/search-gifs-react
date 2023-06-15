import { useFetchGifs } from "../hooks/useFetchGifs";
import { GiftItem } from "./GiftItem";

export const GifGrid = ({ category }) => {
	const { images, isLoading } = useFetchGifs( category );
	// console.log({isLoading});
	return (
		<>
			<h3>{category}</h3>
			{
				isLoading && ( <h2>Cargando...</h2> )
				// isLoading
				// ? ( <h2>Cargando...</h2> )
				// : null
			}
			{/* <h5>{counter}</h5>
			<button onClick={ () => setCounter(counter + 1)}>+1</button> */}
			<div className="card-grid">
				{/* { images.map( ({id, title, url}) =>
					<GiftItem key={ id } />
				)} */}
				{/* { images.map( ( images ) =>
					<GiftItem
						key={images.id}
						title={images.title}
						url={images.url}
					/>
				)} */}
				{ images.map( ( images ) =>
					<GiftItem
						key={images.id}
						{ ...images }
						// Exparsir todas las propiedades de images al componente, lo vemos mejor en la pestaña de componentes de devtools y se pasan todas las properties al item
					/>
				)}
			</div>
		</>
	)
}
