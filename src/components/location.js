import { cleanup } from '@testing-library/react'
import React from 'react'
import axios from 'axios';

const API_endpoint = 'https://api.openweathermap.org/data/2.5/weather?';
const API_key = 'c5a48b3e59d242aedae7b2fb0b9ad0e4'


function location() {
    const[latitude, setLatitude] = React.useState('');
    const [longitude, setLongitude] = React.useState('');
    const [responseData,setResponseData] = useState({})

    React.useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) =>  {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        })

        let finalAPIEndpoint = `${API_endpoint}lat=${latitude}&lon${longitude}&appid={API_key}`
        
        axios.get(finalAPIEndpoint)
        .then((response) => {
            setResponseData(response.data);
        })
    }, [])
  return (
    <div>location</div>
  )
}

export default location
