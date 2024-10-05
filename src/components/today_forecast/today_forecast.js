import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function TodayForecast(props) {
    const [todayData, setTodayData] = useState(null);
    const [location, setLocation] = useState(props.value);

    // const   Api_key = '';
   // const todayUrl =`https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${location}&appid=${Api_key}`;
   
    const fetchWeatherData = () => {
        try {
            //this is 5day weathe forecast api were 5 days weather and every 3 hour is fetched
            axios.get(`${process.env.REACT_APP_API_URL_5DAYS_WEATHER}/forecast?q=${location}&appid=${process.env.REACT_APP_API_KEY}`)
                .then(response => {
                    setTodayData(response.data);
                    console.log(response.data.list);
                })
                .catch(error => {
                    console.error('Error fetching weather data:', error);
                });
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    useEffect(() => {
        setLocation(props.value);
       
    }, [props.value]);

    useEffect(() => {
        if (location) {
            fetchWeatherData();
        }
    }, [location]);

    return (

        <>
         <Card style={{ width: '40rem',margin:'1rem auto ',top:'5rem' }}>
                <Card.Body>
            
            {location ? (
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

export default TodayForecast;
