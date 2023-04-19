import './style.css';
import employees from './data/employees.json';

const getEmployeeListHtml = () => {
	let html = '';
	for (const emp of employees) {
		html += `<div class="employee">
		${emp.firstName} ${emp.lastName} - ${emp.address.country}	
		</div>`;
	}
	return html;
};

document.querySelector('#app').innerHTML = `<h1>Loading...</h1>`;

(async () => {
	const booksUrl = 'https://gutendex.com/books/?search=berlin';
	const response = await fetch(booksUrl);
	const booksData = await response.json();

	const getBookListHtml = () => {
		let html = '';
		for (const book of booksData.results) {
			html += `<div class="book">
		${book.title}
		</div>`;
		}
		return html;
	};

	document.querySelector('#app').innerHTML = `
	<div>
		<h1>Employees</h1>
		<p>There are ${employees.length} employees.</p>
		${getEmployeeListHtml()}
		<h1>Books</h1>
		<p>There are ${booksData.count} books.</p>
		${getBookListHtml()}
	</div>
`;
})();
