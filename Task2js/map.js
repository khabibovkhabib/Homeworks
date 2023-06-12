const persons = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

const names = persons.map(personsName => { return personsName.name; });
const heights = persons.map(personsHeight => { return personsHeight.height });
const nameAndHeight = persons.map((nameAndHeight) => ({ name: nameAndHeight.name, height: nameAndHeight.height }));
const firstNames = persons.map(firstName => { return firstName.name.split(' ')[0] });