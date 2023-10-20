import React, { useEffect, useState } from 'react'
import GetWeather from '../components/getWeather'

function IndexPage() {
    const [ipData, setIpData] = useState()
    useEffect(() => {
        const fetchWithIP = async () => {
            try {
                const response = await fetch("https://api.ipify.org/?format=json");
                if (response.ok) {
                    const data = await response.json();
                    setIpData(data.ip);
                } else {
                    console.error("La requête a échoué avec le statut : " + response.status);
                }
            } catch (err) {
                console.error(err)
            }

        }
        fetchWithIP();

    }, []);
    return (
        <>
            <h1>Météo</h1>
            <GetWeather ip={ipData} />
        </>
    )
}

export default IndexPage