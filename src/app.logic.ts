import fs from 'fs';
import { yarg } from './config/plugins/args.plugin';

const { b:base, l:limit, s:showTable} = yarg;

let outputMessage = '';
const headerMessage= `
================================================
            Tabla del ${ base }
================================================\n
`;

for (let i = 1; i <= limit; i++) {
    outputMessage += `${ base } x ${ i } = ${ base * i }\n`;
}

outputMessage = headerMessage + outputMessage;

if( showTable ) {
    console.log(outputMessage);
}

const outputPath = `outputs/`;
//const outputPath = `outputs/folder1/folder2/folder3/` ---> ejemplo de que así se pueden crear un path de directorios.


fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${ outputPath }/tabla-${ base }.txt`, outputMessage);

console.log('File created!');