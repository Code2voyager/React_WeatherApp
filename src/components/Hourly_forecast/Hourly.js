import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function Hourly(props) {
    const [todayData, setTodayData] = useState(null);
    const [latitude, setLatitude] = useState(props.value);
    const [longitude, setlongitude] = useState(props.value1);



    const fetchWeatherData = () => {
        try {
            //https://pro.openweathermap.org/data/2.5/forecast/hourly?lat={lat}&lon={lon}&appid={API key}
            axios.get(`${process.env.REACT_APP_HOURLY_URL_}/forecast/hourly?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_KEY}`)
                .then(response => {
                    setTodayData(response.data);
                    console.log(response.data);
                })
                .catch(error => {
                    console.error('Error fetching weather data:', error);
                });
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    useEffect(() => {
        setLatitude(props.value);
        setlongitude(props.value1);
        // console.log(props.value1);
    }, [props.value,props.value2]);

    useEffect(() => {
        if (latitude && longitude) {
            fetchWeatherData();
        }
    }, [latitude,longitude]);

    return (

        <>
         <Card style={{ width: '40rem',margin:'1rem auto ',top:'5rem' }}>
                <Card.Body>
            
            {latitude &&longitude ? (
                <div>
                    {todayData ? (
                                    <><Card.Title>Today's Forecast</Card.Title><Card.Text className="temp">
                                    {todayData.city ? <h1>{todayData.city.name}</h1> : null}
                                </Card.Text></>
                    ) : (
                        <p>Loading weather data...</p>
                    )}
                </div>
            ) : (
                <p>No location provided.</p>
            )}
            </Card.Body>
            </Card>
        </>
    );
}

export default Hourly;
