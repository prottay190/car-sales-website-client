import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddService.css';
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post(' https://floating-oasis-48049.herokuapp.com/cars', data)
        .then(res => {
            if(res.data.insertedId){
                alert('successfully added')
                reset()
            }
        })
    }

    return (   
        <> 
        <Navigation></Navigation>
        <div className="add-services">
        <h2 style={{fontSize: '40px', fontWeight: 600, color: '#F4D03F', marginBottom: '20px'}}>Add services</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name"/>
        <input {...register("img")} placeholder="Image URL"/>
        <textarea  {...register("description")} placeholder="Description"/> 
        <input type="number" {...register("price")} placeholder="Price"/>
        <input style={{fontSize: '20px', backgroundColor: '#935116'}}  type="submit" />
        </form>
    </div>
    <Footer></Footer>
    </>
    
    );
};

export default AddService;