const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    console.log(`Tabla de ${base}`.red.underline.inverse);
    return new Promise((resolve, reject) => {
        let data = '';
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
        }
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
            //console.log(`${base} * ${i} = ${base*i}\n`);

        }
        console.log(data.magenta);
    });
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        })

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}