const test= React.createElement(
	'h2',
	{id: 'test', className: 'header'},
	'ReactPage Working?'
)

const hello = React.createElement(
	  'h4',
	  { id:'title', className:'header test'},
		'hello'
)

ReactDOM.render(
	<div>
	{test}
	{hello}
	</div>,
	document.getElementById('react-container')
)

// ReactDOM.render(
// 	test,
// 	document.getElementById('react-container')
// )