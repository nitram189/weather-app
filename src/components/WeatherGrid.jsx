import { useEffect, useState } from "react";
import { cityFetch } from "./cityFetch"

export const WeatherGrid = ({ city }) => {

    const [ info, setInfo] = useState([]);

    const getData = async() => {
        const newData = await cityFetch( city );
        setInfo([ newData, ...info ]);
    };

    useEffect(()=>{
        getData()
    },[]);
    
  return (
    <>
      {
        info.map( item => (
            <div key={ item.cityName } className="card">
                    <h2>{ item.cityName }</h2>
                    <h3>{ `${item.temp}°C` }</h3>
                    <h4>{ item.sky }</h4>
                    <p>{`Feels like: ${ item.feels }°C`}</p>
                    <p>{`Wind: ${ item.feels } km/h`}</p>

            </div>
        ))
      }
   
    </>
  )
}