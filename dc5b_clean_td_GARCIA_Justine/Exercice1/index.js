const fs = require('fs');
const csvParser = require('csv-parser');
var i = 0;

fs.createReadStream('/test.csv')
 .pipe(csvParser())
 .on('data', (data) => {
   if (i < 20){
      console.log(data);
   }
    i++;
 })
 .on('end', () => {
    console.log('Affichage terminée');
 });