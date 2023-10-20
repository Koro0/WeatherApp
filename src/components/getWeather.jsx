import React, { useEffect, useState } from 'react'
import TokenForApi from '../accessKey';

export default function GetWeather(props) {
    const [locationData, setLocationData] = useState(null);
    const [currentData, setCurrentData] = useState(null);
    useEffect(() => {
        const getTemperature = async () => {
            try {
                const res = await fetch(TokenForApi.URL + TokenForApi.TOKEN + `&query=${props.ip}`)
                if (res.ok) {
                    const data = await res.json();
                    setCurrentData(data.current);
                    setLocationData(data.location);
                } else {
                    console.error("Erreur de requete méteo");
                }
            }
            catch (err) {
                console.error(err)
            };
        }
        getTemperature();
    }, [props])
    return (
        <div>
            {locationData != null && currentData != null &&
                <>
                    <div className='weather_location'>
                        <h2>{locationData.name},{locationData.region}, {locationData.country}</h2>
                        <p> Actualisé : {locationData.localtime}</p>
                    </div>
                    <div className='weather_temperature'>
                        <h3>Prévision actuelle</h3>
                        <p><span>Temperature : </span>{currentData.temperature}</p>
                        <img src={currentData.weeather_icons} alt={currentData.weeather_description} />
                    </div>
                    <div className='weather_wind'>
                        <p><span>Vent : </span> {currentData.wind_speed}</p>
                        <p><span>direction : </span> {currentData.wind_dir}</p>
                    </div>
                    <div className='weather_uv'>
                        <p><span>UV : </span> {currentData.uv} /10</p>
                    </div>
                    <div className="weather_humidity">
                        <p><span>L'humidité : </span> {currentData.humidity}</p>
                    </div>
                </>

            }
        </div>
    )
}
