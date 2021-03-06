import React, {useState} from 'react'
import Navbar from './Navbar';
import Header from './Header';
import axios from 'axios';

const API_endpoint = 'https://api.openweathermap.org/data/2.5/weather?';
const API_key = 'c5a48b3e59d242aedae7b2fb0b9ad0e4'

function Home() {
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
    <div>
        <Navbar />
        <Header />
        <h1>{responseData.name} Hello</h1>
    </div>
  )
}

export default Home