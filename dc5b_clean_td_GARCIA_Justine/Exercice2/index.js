const fs = require('fs');

const data = [
    { id: 1, name: 'Jean-paul', power: 20, autonomy: '2 heures', energy: '3500GHz' },
    { id: 2, name: 'Panasonic', power: 74, autonomy: '3 heures', energy: '5000GHz' },
    { id: 3, name: 'Remington', power: 35, autonomy: '2.5 heures', energy: '3000GHz' },
    { id: 4, name: 'Wahl', power: 22, autonomy: '2 heures', energy: '4500GHz' },
    { id: 5, name: 'Philips', power: 98, autonomy: '4 heures', energy: '4000GHz' },
    { id: 6, name: 'Andis', power: 25, autonomy: '1.5 heures', energy: '2500GHz' },
    { id: 7, name: 'Conair', power: 20, autonomy: '1 heure', energy: '2000GHz' },
    { id: 8, name: 'Moser', power: 10, autonomy: '5 heures', energy: '5400GHz' },
    { id: 9, name: 'Oster', power: 30, autonomy: '2 heures', energy: '3000GHz' },
    { id: 10, name: 'Babyliss', power: 35, autonomy: '3 heures', energy: '3500GHz' },
    { id: 11, name: 'Gillette', power: 20, autonomy: '1 heure', energy: '1000GHz' },
    { id: 12, name: 'Jaguar', power: 40, autonomy: '3.5 heures', energy: '6000GHz' },
    { id: 13, name: 'Moser', power: 50, autonomy: '4 heures', energy:'5000GHz' },
    { id: 14, name: 'Norelco', power: 30, autonomy: '2.5 heures', energy: '3000GHz' },
    { id: 15, name: 'Philips', power: 45, autonomy: '3 heures', energy: '7500GHz' },
    { id: 16, name: 'Remington', power: 25, autonomy: '1.5 heures', energy: '2500GHz' },
    { id: 17, name: 'Wahl', power: 40, autonomy: '2.5 heures', energy: '4200GHz' },
    { id: 18, name: 'Braun', power: 55, autonomy: '4 heures', energy: '5600GHz' },
    { id: 19, name: 'Andis', power: 35, autonomy: '2.5 heures', energy: '2500GHz' }
]

const writeStream = fs.createWriteStream('tondeuses.csv');

writeStream.write('Id, Nom de la tondeuse, Puissance, Autonomie, Energie \n');


data.forEach((row) => {
    writeStream.write(`${row.id},${row.name},${row.power},${row.autonomy},${row.energy}\n`);
});

writeStream.end();