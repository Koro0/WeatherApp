import React, { useContext, useEffect, useState, } from 'react';
import Context from '../context/geolocation.context';

export default function GetLocatistion() {
  const { ipData, setIpData } = useContext(Context);
  useEffect(() => {
    const fetchWithIP = async () => {
      try {
        const response = await fetch("https://api.ipify.org/?format=json");
        if (response.ok) {
          const data = response.json();
          setIpData(data);
        } else {
          console.error("La requête a échoué avec le statut : " + response.status);
        }
      } catch (err) {
        console.error(err)
      }

    }
    fetchWithIP();
    console.log(fetchWithIP());

  }, []);

  return <>

  </>;
}