const students = [
    {id: 23, name: 'akas'},
    {id: 24, name: 'batas'},
    {id: 25, name: 'tatas'},
    {id: 26, name: 'latas'}
]

const names = students.map( n => n.name);
const ids = students.map( n => n.id);
const bigger = students.filter(n => n.id > 24);
const biggerOne = students.find(n => n.id > 24);
console.log(ids, names, bigger, biggerOne);