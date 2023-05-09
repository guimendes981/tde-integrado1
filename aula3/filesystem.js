const fs = require('fs');
const fsPromise = require('fs').promises;
const {readdir: readdirPromise} = require('fs').promises;

fs.readdir('./', (err, files) => {
    if (err) {
        console.log('Erro', err);
        return;
    }
    console.log('Conteúdo da pasta: ', files);
});

fsPromise.readdir(".").then((files) => {
    console.log('Conteúdo da pasta: ', files);
}).catch((err) => {
    console.log('Erro', err);
}
);
