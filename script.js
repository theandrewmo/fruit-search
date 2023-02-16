const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	if(str == '') return results;
	// TODO
	for (let item of fruit) {
		item.toLowerCase().includes(str.toLowerCase()) ? results.push(item) : null;
	}
	return results;
}

function searchHandler(e) {
	// TODO
	let term = e.target.value;
	showSuggestions(search(term),term);
}

function showSuggestions(results, inputVal) {
	suggestions.innerHTML = '';
	// TODO
	if(results.length) suggestions.classList.add('has-suggestions')
	else suggestions.classList.remove('has-suggestions')
	for (let el of results) {
		let li = document.createElement('li')
		function check (el, inputVal) {
			let e = el.toUpperCase()
			let i = inputVal.toUpperCase()
			let ind = e.indexOf(i)
			let p1 = el.substring(0,ind)
			let p2 = el.substring(ind, ind + i.length) 
			p2 = `<b>${p2}</b>`
			let p3 = el.substring(ind + i.length)
			let spec = `${p1}${p2}${p3}`
			spec = spec.replace(' ','&nbsp;')
			return spec
		}
		li.innerHTML = check(el,inputVal)
		suggestions.append(li)
	}
}

function useSuggestion(e) {
	// TODO
	input.value = e.target.innerText
	suggestions.innerHTML = '';
}

// function highlight(e) {
// 	if(e.target.tagName == 'LI')
// 	e.target.style.backgroundColor = 'red'
// }

// function unHighlight(e) {
// 	e.target.style.backgroundColor = ''
// }

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
// suggestions.addEventListener('mouseover', highlight);
// suggestions.addEventListener('mouseout', unHighlight);
