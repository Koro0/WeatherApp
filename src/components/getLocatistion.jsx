import React, { useContext, useEffect, } from 'react';
import Context from '../context/geolocation.context';

export default function GetLocatistion() {
  const { setLat } = useContext(Context);
  const { setLng } = useContext(Context);

  useEffect(() => {
    if ('geolocation' in navigator) {
      // La géolocalisation est disponible
      navigator.geolocation.getCurrentPosition(
        function (position) {
          // Callback en cas de succès
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          console.log(`Latitude : ${latitude}, Longitude : ${longitude}`);
          setLat(latitude);
          setLng(longitude);
        },
        function (error) {
          // Callback en cas d'erreur
          console.error('Erreur de géolocalisation : ' + error.message);
        }
      );
    } else {
      // La géolocalisation n'est pas prise en charge
      console.log(
        "La géolocalisation n'est pas disponible dans ce navigateur."
      );
    }
  }, []);

  return <>

  </>;
}
