import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from './Loading';

const IndividualCat = () => {
    const { data: catagories = [], isLoading } = useQuery({
        queryKey: ['catagories'],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/catagory");
            const data = await res.json();
            return data;
        }
    });

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            sdadadsaad
        </div>
    );
};

export default IndividualCat;