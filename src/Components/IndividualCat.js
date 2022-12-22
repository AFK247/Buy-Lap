import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Laptop from './Laptop';
import Loading from './Loading';

const IndividualCat = () => {
    const allLaptops = useLoaderData();

    console.log(allLaptops[0].code);
    const lapCode = allLaptops[0].code;

    const { data: laptops = [], isLoading } = useQuery({
        queryKey: ['laptops'],
        queryFn: async () => {
            const res = await fetch(`https://buy-lap-server-afk247.vercel.app/category/${lapCode}`);
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <div className='container '>
                {lapCode === "gl" && <h2 className='text-center my-4'>Gaming Laptop</h2>}
                {lapCode === "bl" && <h2 className='text-center my-4'>Business Laptop</h2>}
                {lapCode === "ol" && <h2 className='text-center my-4'>Office Laptop</h2>}
                
                <div class="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-3 g-3">
                        {laptops.map((laptop, i) => <Laptop key={i} laptop={laptop}></Laptop>)}
                    </div>

            </div>

        </div>
    );
};

export default IndividualCat;