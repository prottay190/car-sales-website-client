import React, { useEffect, useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Car from '../Car/Car';
import './Cars.css'

const Cars = () => {
    const [cars, setCars] = useState([]);

    useEffect(() =>{
        fetch('https://floating-oasis-48049.herokuapp.com/cars')
        .then(res => res.json())
        .then(data => setCars(data))
    },[]) 
    return (
        <>
        <Navigation></Navigation>
        <div className="cars-container">
            <div className="cars-text">
                  {
                      cars.map(car => <Car
                        key={car.name}
                        car ={car}
                      ></Car>)
                  }
            </div>
        </div>
        </>
    );
};

export default Cars;