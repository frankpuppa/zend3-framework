
const test= React.createElement(
	'h1',
	{id: 'test', className: 'header'},
	'ReactPage'
)

ReactDOM.render(
	test,
	document.getElementById('react-container')
)