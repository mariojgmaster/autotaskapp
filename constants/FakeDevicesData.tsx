import images from './Images';

let getDevicesData = numOfDevices => {
    let sensors = [];

    for (let i = 1; i < numOfDevices+1; i++) {
        sensors.push({
            id_equipamento: i, // Integer
            id_usuario_cadastrado: i*10, // Integer
            id_departamento: i*20, // Integer
            nome: `Sensor ${i}`, // string
            ativo: i%2 == 0 ? 'true' : 'false', // boolean
            path: getPath(i), // string
        })
    }
    return sensors;
}

let getPath = tipo => JSON.stringify({
    type: tipo, // 5 tipos de sensores
    ImagemUri: images.LogIn.logoUri
})

const DATA = getDevicesData(5);

export default DATA;