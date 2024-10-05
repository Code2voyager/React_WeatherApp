
import React, { useState} from 'react';
import './weather.css';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Todayforecast from '../today_forecast/today_forecast';
import Hourly from '../Hourly_forecast/Hourly';

function Weather() {
   
    const [data, setData] = useState({});
    const [location, setLocation] = useState('');
    const[latitude,setlatitude] = useState('');
    const [longitude,setlongitude] = useState('');
  

   
    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            try {
                axios.get(`${process.env.REACT_APP_BASE_URL}/weather?q=${location}&appid=${process.env.REACT_APP_API_KEY}`).then((response) => {
               
                    setData(response.data);
                    // console.log(response.data.coord);
                   setlatitude(response.data.coord.lat);
                   setlongitude(response.data.coord.lon); 

                   
                });

                
            } catch (error) {
              
                // console.error("Error fetching location data:", error);
            }
        }
    };

    return (
        <>
       <div className="app">
                <div className="search">
                    <input
                        value={location}
                        onChange={event => setLocation(event.target.value)}
                        onKeyPress={searchLocation}
                        placeholder='Enter the location'
                        type="text"
                    />
                </div>

               
                        {data.main ? (
                            <Card style={{ width: '40rem', margin: '1rem auto ', top: '5rem' }}>
                                <Card.Body className="top">
                                    <Card.Text className="location">
                                        <p>{data.name}</p>
                                    </Card.Text>
                                    <Card.Text className="temp">
                                        {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
                                    </Card.Text>
                                    <Card.Text className="description">
                                        {data.weather ? <p>{data.weather[0].main}</p> : null}
                                    </Card.Text>
                                </Card.Body>

                                {data.main !== undefined && (
                                    <Card.Body className="bottom">
                                        <Card.Text className="feels">
                                            <p className='bold'>
                                                {data.main ? <p className='bold'>{data.main.feels_like}</p> : null}
                                            </p>
                                            <p>Feels Like</p>
                                        </Card.Text>
                                        <Card.Text className="humidity">
                                            {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
                                            <p>Humidity</p>
                                        </Card.Text>
                                        <Card.Text className="wind">
                                            <p className='bold '>
                                                {data.main ? <p className='bold'>{data.wind.speed} MPH</p> : null}
                                            </p>
                                            <p>wind speed</p>
                                        </Card.Text>
                                    </Card.Body>
                                )}
                            </Card>
                        ) : (
                            <p>No Location provided</p>
                        )}
                   
            
                <Hourly value={latitude} value1 ={longitude}  />
            </div>
        </>
    );
}

export default Weather;
