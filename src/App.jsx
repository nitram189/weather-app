import { useState } from 'react';
import { Form } from './components/Form';
import { WeatherGrid } from './components/WeatherGrid';


export const App = () => {

  const [ location , setLocation ] = useState([]);

    const onAddCity = ( newCity ) => {
      if( location.includes( newCity )) return;
        setLocation([ newCity, ...location ])
    };
    
  return (
      <>
      
      <div className="app">
        <h1 className='main-title'>Weather App</h1>
        <div className="form">
          <Form onAddCity={ onAddCity }/>
        </div>
      </div>
      <div className='cards'>
        {
          location.map( city => (
            <WeatherGrid key={ city } city={ city }/>
          ))
        }
      </div>
      
      </>
  )
}

