import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import db from '../firebase';
import { auth } from '../firebase';
import {  collection, addDoc } from 'firebase/firestore'; 
import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const registerWithEmailAndPassword = async (e) => {
    console.log(name)
    try {
      e.preventDefault()
      const res = await createUserWithEmailAndPassword(auth, email, password);
      
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
    <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg">
        <h3 className="text-2xl font-bold text-center">Register</h3>
        <form action="">
            <div className="mt-4">
                <div>
                    <label className="block" htmlFor="name">Name</label>
                            <input 
                              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                              id="email-address"
                              name="text"
                              type="text"                                    
                              required                                                                                
                              placeholder="name.."
                              onChange={(e)=>setName(e.target.value)} 
                            />
                </div>
                <div>
                    <label className="block" htmlFor="email">Email</label>
                            <input 
                              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                              id="email-address"
                              name="email"
                              type="email"                                    
                              required                                                                                
                              placeholder="Email address"
                              onChange={(e)=>setEmail(e.target.value)} 
                            />
                </div>
                <div className="mt-4">
                    <label className="block">Password</label>
                            <input
                              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                              id="password"
                              name="password"
                              type="password"                                    
                              required                                                                                
                              placeholder="Password"
                              onChange={(e)=>setPassword(e.target.value)}
                              />
                </div>
                <div className="flex items-baseline justify-between">
                    <button 
                      onClick={registerWithEmailAndPassword}
                      className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                     >SignUp
                     </button>
                    {/* <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a> */}
                    {/* <p className="text-sm text-white text-center">
                            No account yet? {' '}
                            <NavLink 
                            to="/signup" 
                            className="text-lg text-blue-600 hover:underline"
                            onClick={registerWithEmailAndPassword}
                            >
                                Sign up
                            </NavLink>
                        </p> */}
                </div>
            </div>
        </form>
    </div>
</div>
  )
}

export default Signup