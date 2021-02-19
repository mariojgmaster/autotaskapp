import images from './Images';

let Devices1 = ['Ar Condicionado', 'Lâmpada 1', 'Lâmpada 2', 'Televisão', 'Leds da Tv'];
let Devices2 = ['Televisão',  'Lâmpada 1','Ar Condicionado', 'Leds da Tv'];
let Devices3 = ['Televisão', 'Leds da Tv'];

let getDevicesData = (numOfDevices, devicesArray) => {
    let davices = [];

    for (let i = 1; i < numOfDevices+1; i++) {
        davices.push({
            id_equipamento: i, // Integer
            id_usuario_cadastrado: i*10, // Integer
            id_departamento: i*20, // Integer
            nome: `${devicesArray[i-1] != undefined ? devicesArray[i-1] : 'Outro'}`, // string
            ativo: i%2 == 0 ? 'true' : 'false', // boolean
            path: getPath(i), // string
        })
    }
    return davices;
}

let getPath = tipo => JSON.stringify({
    type: tipo, // 5 tipos de Devices
    ImagemUri: images.LogIn.logoUri
})

const DATA = [getDevicesData(6, Devices1), getDevicesData(5, Devices2), getDevicesData(3, Devices3)];

export default DATA;