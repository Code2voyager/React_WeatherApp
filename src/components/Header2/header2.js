
import React,{useEffect,useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './header2.module.css';



function Header2() {

const [lat,setLat] = useState({});
const [long,setLong] = useState({});
const [currentdata,setcurrentdata] = useState({});


//const weatherkeyapi = '893afc5b32a336477d8ec5c042fc9b17';

// const API_url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${weatherkeyapi}`

    useEffect(()=>{
        const currentweather =async() =>{
        navigator.geolocation.getCurrentPosition(function(position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
          },(error)=>{
            console.log(error);

          });
        

        //   await axios.get(API_url).then((response)=>{
        //     if(response.data.length && response.data >0){
        //         try{
        //             setcurrentdata(response.data)
        //             console.log(response.data);
        //         }catch(error){
        //             console.log(error);
        //         }
        //     }

            

        //   })
      await  fetch(`${process.env.REACT_APP_API_URL_CURRENT_WEATHER}/weather?lat=${lat}&lon=${long}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setcurrentdata(data);
      });


        }
        currentweather();
    },[lat,long])



  return (

 
    <Navbar expand="sm"  className={styles.navbar}>
      {currentdata.main !== undefined &&
    
      <Navbar.Brand  className={styles.navbarbrand}>
        <div className={styles.currenttemp}>
        {currentdata.main ? <h6>{currentdata.main.temp.toFixed()}°C</h6>: null}
        <div className={styles.currentname}>
       <h6> {currentdata.name}</h6>
        </div>
        <div className={styles.currentname}>
        {currentdata.sys ? <h6>{currentdata.sys.country}</h6>: null}
        </div>
        </div>
      
     </Navbar.Brand>
    }
  </Navbar >
  );
}

export default Header2;