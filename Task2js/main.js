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

//MAPS//
const names = persons.map(personsName => personsName.name);
const heights = persons.map(personsHeight => personsHeight.height);
const nameAndHeight = persons.map((nameAndHeight) => ({ name: nameAndHeight.name, height: nameAndHeight.height }));
const firstNames = persons.map(firstName => firstName.name.split(' ')[0]);
//FILTERS//
const greatherThanHunderd = persons.filter(greatherThanHunderd => greatherThanHunderd.mass > 100);
const lessThanTwoHunderd = persons.filter(lessThanTwoHunderd => lessThanTwoHunderd.height < 200);
const genderFilterm = persons.filter(genderFilterm => genderFilterm.gender === 'male');
const genderFilterf = persons.filter(genderFilterf => genderFilterf.gender === 'female');
//SORTS//
const sortForMass = persons.sort((a, b) => a.mass - b.mass);
// const sortForMass = persons.sort((a,b)=>b.mass-a.mass);
const sortForHeight = persons.sort((a, b) => a.height - b.height);
// const sortForHeight = persons.sort((a,b)=>b.height-a.height);
const sortForName = persons.sort((a,b)=>{if (a.name<b.name) return-1; return 1});
// const sortForName = persons.sort((a,b)=>{if (a.name>b.name) return-1; return 1});