import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
//import { Input } from "../Components/UsedInput";
import { Link, useNavigate  } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { app } from "../Config/firebase.config";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

function Login({ setAuth }) {
  const navigate = useNavigate();

  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  const handleEmailChange = (e) => {

    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignInClick = () => {
   
    fetch('http://localhost:4000/api/users')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      data.forEach(element => {
        if(element.email==email){
          if (element.password==password) {
            localStorage.setItem("id",element._id)
            navigate('/dashboard');
            
          }else{
            alert("رمز عبور اشتباه است")

          }
        }else{
          alert("ایمیل یافت نشد")
        }
      });
    })
    .catch(error => console.error('Error:', error));
  };

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();


  const loginWithGoogle = async () => {
    await signInWithPopup(firebaseAuth, provider).then((userCred) => {
      setAuth(true)
      window.localStorage.setItem("auth", "true");

      firebaseAuth.onAuthStateChanged((userCred) => {
        if (userCred) {
          userCred.getIdToken().then((token) => {
            console.log(token);
          });
          navigate("/", { replace: true });
        } else {
          setAuth(false);
          navigate("/login");
        }
      });
    });
  };
  //بعد از ایجاد پیج مای اکانت باید برود روی آن صفحه و نویگیت کند
  useEffect(() => {
    /* if (window.localStorage.getItem("auth") === "true") {
      navigate("/", { replace: true });
    } */
  }, []);

  return (
    <>
      <Layout>
        <div className="container mx-auto px-2 my-20 flex-colo" style={{height:"61vh"}}>
          <div className="w-full 2xl:w-2/5 gap-8 flex-colo p-8 sm:p-14 md:w-3/5 bg-dry rounded-lg border border-border">
            {/* <img src='/images/logo.png' alt='logo' className='w-full h-12 object-contain'/> */}
            <input label='Email' placeholder='musico@gmail.com' type='email' bg={true} value={email} onChange={handleEmailChange} className={`w-full text-sm mt-2 p-4 border border-border rounded text-white
                bg-main
            `} />
      <input label='Password' placeholder='********' type='password' bg={true} value={password} onChange={handlePasswordChange} className={`w-full text-sm mt-2 p-4 border border-border rounded text-white bg-main
            `} />


            <Link
             /*  to="/dashboard"  */
              className="bg-subMain transitions  flex-rows gap-4 text-white p-4 rounded-lg w-full"
              onClick={handleSignInClick}
            >
              <FiLogIn />
              Sign In
            </Link>
            <p className="text-center text-border">
              Don't have an account?{" "}
              <Link
                
                className="text-dryGray font-semibold ml-2"
                onClick={loginWithGoogle}
              >
                Sign Up with google account{" "}
              </Link>
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Login;
