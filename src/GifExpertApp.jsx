import { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

	const [categories, setCategories] = useState([ 'One Punch' ]);
	// console.log(categories);
	// const onAddCategory = () => {
	// 	setCategories( [ ...categories, `Item: ${categories.length}` ] );
	// };
	const onAddCategory = ( newCategory ) => {
		// console.log(onNewCategory);
		if (categories.includes(newCategory)) return;
		setCategories([ newCategory, ...categories ]);
	};

  return (
	<>
		{/* titulo */}
		<h1>GifExpertApp</h1>
		{/* Input */}
		<AddCategory
			onNewCategory={ onAddCategory }
			// setCategories={ setCategories }
		/>
		{/* <button onClick={onAddCategory}>Agregar</button> */}
		{/* Listado de Gif */}
		{/* <ol> */}
			{/* { categories.map( category => {
				return <li key={category}>{category}</li>
			}) } */}
			{
				categories.map( (category) =>  (
					<GifGrid
						key={ category } category={ category }
					/>
				) )
			}
		{/* </ol> */}

	</>
  )
}
