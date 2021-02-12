import images from '../constants/Images';

let getSensorData = numOfSensors => {
    let sensors = [];

    for (let i = 1; i < numOfSensors+1; i++) {
        sensors.push({
            id_sensor: i, // Integer
            id_usuario_cadastro: i*10, // Integer
            nome: `Sensor ${i}`, // string
            ativo: i%2 == 0 ? 'true' : 'false', // boolean
            path: getPath(i), // string
        })
    }
    return sensors;
}

let getPath = tipo => JSON.stringify({
    type: tipo, // 5 tipos de sensores
    value: Math.round(Math.random()*99+1),
    ImagemUri: images.LogIn.logoUri
})

const DATA = getSensorData(5);

export default DATA;