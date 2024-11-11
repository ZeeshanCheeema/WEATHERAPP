const weatherData = {
    base: "stations",
    clouds: {
        all: 5
    },
    cod: 200,
    coord: {
        lon: 74.3436,
        lat: 31.5497
    },
    dt: 1730806451,
    id: 1172451,
    main: {
        temp: 302.14,
        feels_like: 302.23,
        temp_min: 300.21,
        temp_max: 302.14,
        pressure: 1012,
        humidity: 45,
    },
    name: "Lahore",
    sys: {
        type: 1,
        id: 7585,
        country: "PK",
        sunrise: 1730769718,
        sunset: 1730808626
    },
    timezone: 18000,
    visibility: 2500,
    weather: [{
        id: 721,
        main: "Haze",
        description: "haze",
        icon: "50d"
    }],
    wind: {
        speed: 0,
        deg: 0
    }
};

const {base,cod,coord:{lon,lat},main:{temp,feels_like,temp_min,temp_max,pressure,humidity},name}=weatherData;
console.log(base);
console.log(cod);

console.log(lon);
console.log(lat);

console.log(temp);
console.log(feels_like);
console.log(temp_min);
console.log(temp_max);
console.log(pressure);
console.log(humidity);
console.log(name);
