


export const cityFetch = async ( city ) => {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e0f168f298471361cba33c58e8c506ac&units=metric`;
    const resp = await fetch( url );
    const { name, main, wind, weather } = await resp.json();
    
    console.log(weather[0].main)

    const data = {
      cityName: name,
      temp: main.temp,
      sky:weather[0].main,
      feels: main.feels_like,
      humidity: main.humidity,
      wind: wind.speed
    }
    return data;
  
}
