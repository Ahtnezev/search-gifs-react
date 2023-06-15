export const GiftItem = ({ id, title, url }) => {
	// console.log(imagen); // para cuando tenemos un chingo de props
	// console.log({id, title, url});
  return (
		<div className="card">
			<img src={ url } alt={ title } />
			<p>{ title }</p>
		</div>
	// <li key={ id }>
	// 	{ title } <br />
	// 	<img src={ url } alt={id} />
	// </li>
  )
}
