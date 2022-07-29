import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import User from './User';

const Users = () => {
    const {data: users, isLoading, refetch} = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer`
        }
       }).then(res => res.json()));

       if(isLoading) {
        return <Loading></Loading>
       }
       
    return (
        <div>
            <h2 className='text-2xl'> All users: {users.length}</h2>
            <div className='overflow-x-auto'>
                <table className='table w-full'>
                    <thead>
                        <tr>
                            <th>Index No</th>
                            {/* <th>Name</th> */}
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <User
                                key={user._id}
                                user={user}
                                refetch={refetch}
                            ></User>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;