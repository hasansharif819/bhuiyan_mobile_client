import React from 'react';

const User = ({user, refetch}) => {
    const {email, name, role} = user;
    return (
        <tr>
            <th></th>
            {/* <td>{name}</td> */}
            <td>{email}</td>
            <td>
                <button className=' text-primary'>Make Admin</button>
            </td>
            <td>
                <button className=' text-red-500'>Remove User</button>
            </td>
        </tr>
    );
};

export default User;