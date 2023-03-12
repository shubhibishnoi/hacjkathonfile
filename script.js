let btnAdd = document.querySelector('button');
let table = document.querySelector('table');
let nameInput = document.querySelector('#name');
let ageInput = document.querySelector('#age');
let locationInput = document.querySelector('#location');
let phonenumberInput = document.querySelector('#phonenumber');
btnAdd.addEventListener('click', () => {
    let name = nameInput.value;
    let age = ageInput.value;
    let location = locationInput.value;
	let phonenumber=phonenumberInput.value
    let template = `
                <tr>
                    <td>${name}</td>
                    <td>${age}</td>
                    <td>${location}</td>
			<td>${phonenumber}</td>
                </tr>`;
    table.innerHTML += template;
});