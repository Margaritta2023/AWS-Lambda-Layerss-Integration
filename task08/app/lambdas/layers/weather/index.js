const axios = require("axios");

exports.myMeteoApi = class {
  getMeteo() {
    return axios
      .get(
        "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m"
      )
      .then((data) => data.data);
  }
}