const { myMeteoApi } = require("/opt/nodejs");

exports.handler = async (event) => {
    
    const meteo = new myMeteoApi;
    const responseApi = await meteo.getMeteo()
  
    const response = {
        statusCode: 200,
        body: responseApi,
    };
    return response;
};
