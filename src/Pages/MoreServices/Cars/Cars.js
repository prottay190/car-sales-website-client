import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import './Cars.css'

const Cars = () => {
    const [cars, setCars] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/cars')
        .then(res => res.json())
        .then(data => setCars(data))
    },[])
    return (
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
    );
};

export default Cars;