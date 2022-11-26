import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Laptop from './Laptop';
import Loading from './Loading';

const IndividualCat = () => {
    const allLaptops=useLoaderData();

    console.log(allLaptops[0].code);
    const lapCode=allLaptops[0].code;

    const { data: laptops = [], isLoading } = useQuery({
        queryKey: ['laptops'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/category/${lapCode}`);
            const data = await res.json();
            return data;
        }
    });

    if(isLoading){
        return <Loading></Loading>
    }


    return (
        <div>
            <div className='container'>
            {lapCode==="gl" && <h2 className='text-center'>Gaming Laptop</h2>}
            {lapCode==="bl" && <h2 className='text-center'>Business Laptop</h2>}
            {lapCode==="ol" && <h2 className='text-center'>Office Laptop</h2>}
            <div className='col-12 col-sm-8 col-md-9 col-lg-9 mx-auto mb-5'>
                <div className='row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 g-4 container m-auto'>
                {laptops.map((laptop,i)=><Laptop key={i} laptop={laptop}></Laptop>)}
                </div>
            </div>
        </div>
            
        </div>
    );
};

export default IndividualCat;