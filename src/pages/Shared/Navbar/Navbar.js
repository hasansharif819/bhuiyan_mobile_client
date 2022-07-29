import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);
    // console.log(user);
    const logout = () => {
        signOut(auth);
    }
    const menu = <>
    
    <div className="form-control">
  <div className="input-group">
    <input type="text" placeholder="Search…" className="input input-bordered" />
    <button className="btn btn-square">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>
<li><Link to='/users'>User</Link></li>
<li><Link to="/signup">Signup</Link></li>
<li>{ user ? <button className='btn btn-ghost' onClick={logout}>Signout <img height={20} width={30} className='rounded-full' src={user?.photoURL} alt="" /> </button> : <Link to='/login'>Signin</Link>}</li>
    </>
    return (
        <div>
            <div className='navbar bg-base-100 bg-secondary font-bold'>
                <div className='navbar-start'>
                    <div className='dropdown'>
                        <label tabIndex='0' className='btn btn-ghost lg:hidden'>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg> */}
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">BHUIYAN MOBILE</a>
                </div>
                <div className='navbar-center hidden lg:flex'>
                <ul className="menu menu-horizontal p-0">
                        {menu}
                    </ul>
                </div>
                <div className="navbar-end">
                <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                </div>

            </div>
        </div>
    );
};

export default Navbar;