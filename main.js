const h1 = document.getElementsByClassName("text")[0];
h1.style.color = "blue";
h1.style.backgroundColor = "red";


//////////////////////////////////////////////


const para = document.getElementById('paragraph');
para.style.fontWeight = 'bold';
para.classList.add('highlight');


const img = document.getElementsByTagName('img')[0];
img.src = './4.png';


const ul = document.querySelector('my-list');
const items = ['1', '2', '3'];
const li = document.createElement('li');
ul.appendChild(li);


const tableContainer = document.getElementById('table-container');
const table = document.createElement('table');
table.className = 'custom-table';



for (let i = 0; i < 2; i++) {

    const row = document.createElement('tr');

    for (let j = 0; j < 3; j++) {
        const cell = document.createElement('td');
        cell.textContent = `row ${i + 1} col ${j + 1}`;
        row.appendChild(cell);
    }
    table.appendChild(row);
}
tableContainer.appendChild(table);