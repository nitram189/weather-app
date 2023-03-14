import { useState } from "react";


export const Form = ({ onAddCity }) => {

const [ cityName , setCityName ] = useState('');

    const onChange = ( event ) => {
        setCityName( event.target.value );
    };
    const onSubmit = ( event ) => {
        event.preventDefault();
        if( cityName.length <= 1 ) return;

        onAddCity( cityName );
        setCityName('');
    };


  return (
    <form onSubmit={ onSubmit }>
        <input 
          type="text"
          placeholder="Enter city name"
          value={ cityName }
          onChange={ onChange }
        />
    </form>
  )
}
