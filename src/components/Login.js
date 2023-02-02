import React, {useState} from 'react';
import { auth } from '../firebase';
import { NavLink, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
// ​​import {  getFirestore, query, getDocs,​collection,​where, ​​addDoc  ​​} from "firebase/firestore";
import {  collection, addDoc } from 'firebase/firestore'; 



function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
     
  const onLogin = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/")
          console.log(user);
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage)
      });
     
  }

    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
        // An error happened.
        });
    }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
    <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg">
        <h3 className="text-2xl font-bold text-center">SignIn</h3>
        <form action="">
            <div className="mt-4">
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
                      onClick={onLogin}
                      className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                     >Login
                     </button>
                    {/* <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a> */}
                    <p className="text-sm text-white text-center">
                            No account yet? {' '}
                            <NavLink 
                            to="/register" 
                            className="text-lg text-blue-600 hover:underline"
                            // onClick={registerWithEmailAndPassword}
                            >
                                Signup
                            </NavLink>
                        </p>
                </div>
            </div>
        </form>
    </div>
</div>
  )
}

export default Login