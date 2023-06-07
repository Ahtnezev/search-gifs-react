import { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

	const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball' ]);
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
			<ol>
				{ categories.map( category => {
					return <li key={category}>{category}</li>
				}) }
			</ol>
			{/* Gif item */}

	</>
  )
}
