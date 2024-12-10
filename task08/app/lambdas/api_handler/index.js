const { OpenMetoAPI } = require("/opt/nodejs");

exports.handler = async (event) => {
    
    const meteo = new OpenMetoAPI;
    const responseApi = await meteo.getMeteo()
    const totalResult = JSON.stringify(responseApi)
    const response = {
        statusCode: 200,
        body: totalResult,
    };
    return response;
};
