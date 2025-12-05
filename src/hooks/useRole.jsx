import React from 'react';
import UseAuth from './UseAuth';
import UseAxiosSecure from './UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useRole = () => {

    const { user } = UseAuth();
    const axiosSecure = UseAxiosSecure();
    const { isLoading, data: role = 'user' } = useQuery({
        queryKey: ['user-role', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/${user?.email}/role`);
            return res.data;
        }
    })

    return { role, isLoading };
};

export default useRole;