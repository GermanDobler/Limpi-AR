import { useState, } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, View,Image } from 'react-native';
import { useAuth } from "../src/context/AuthContext";
import Typography from '@mui/material/Typography';
//import { Alert } from "./Alert";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, loginWithGoogle, resetPassword } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/ScreenHome");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!user.email) return setError("Write an email to reset password");
    try {
      await resetPassword(user.email);
      setError('We sent you an email. Check your inbox')
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <>
  <div className="stage">
    <div className="layer" />
    <div className="layer" />
    <div className="layer" />
    <div className="layer" />
    <div className="layer" />
    <div className="layer" />
    <div className="layer" />
    <div className="layer" />
    <div className="layer" />
    <div className="layer" />
    <div className="layer" />
    <div className="layer" />
    <div className="layer" />
    <div className="layer" />
    <div className="layer" />
    <div className="layer" />
    <div className="layer" />
    <div className="layer" />
    <div className="layer" />
    <div className="layer" />
  </div>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n  * *, *::before, *::after { \n    animation-play-state: running !important;\n  }\n"
    }}
  />
</>
<br /><br /><br /><br /><br /><br /><br />

    <div className="w-full max-w-xs m-auto">
      {/* {error && <Alert message={error} />} */}

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="youremail@company.tld"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="*************"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className=" bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            style={ {margin: 20} }
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#!"
            onClick={handleResetPassword}
          >
            Forgot Password?
          </a>
        </div>
      </form>
      <div className="text-center"> 
      <button
        onClick={handleGoogleSignin}
        className="bg-slate-50 hover:bg-slate-200 text-black  shadow rounded border-2 border-gray-300 py-2 px-4 w-full"
      >
        Google login
      </button>
      </div>
      <p className="my-4 text-sm flex justify-between px-3">
        Don't have an account?
        <Link to="/" className="text-blue-700 hover:text-blue-900">
          Register
        </Link>
      </p>
    </div>
    <style jsx="true">{`
      @import url("//fonts.googleapis.com/css?family=Pacifico&text=Pure");
      @import url("//fonts.googleapis.com/css?family=Roboto:700&text=css");
      @import url("//fonts.googleapis.com/css?family=Kaushan+Script&text=!");
      
      body {
        min-height: 450px;
        height: 100vh;
        margin: 0;
      }
      
      .stage {
        align-items: center;
        justify-content: center;
        text-align: center;
        height: 0px;
        width: 0px;
        margin: 20px;
        position: relative;
        top: 0;
        right: 250px;
        bottom: 0;
        left: 400;
        perspective: 9999px;
        transform-style: preserve-3d;
      }
      
      .layer {
        width: 100%;
        height: 100%;
        position: absolute;
        transform-style: preserve-3d;
        animation: ಠ_ಠ 5s infinite alternate ease-in-out -7.5s;
        animation-fill-mode: forwards;
        transform: rotateY(40deg) rotateX(33deg) translateZ(0);
      }
      
      .layer:after {
        font: 150px/0.65 "Pacifico", "Kaushan Script", Futura, "Roboto", "Trebuchet MS", Helvetica, sans-serif;
        content: "LimPi-Ar";
        white-space: pre;
        text-align: center;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0px;
        color: whitesmoke;
        letter-spacing: -2px;
        text-shadow: 4px 0 10px rgba(0, 0, 0, 0.13);
      }
      
      .layer:nth-child(1):after {
        transform: translateZ(0px);
      }
      
      .layer:nth-child(2):after {
        transform: translateZ(-1.5px);
      }
      
      .layer:nth-child(3):after {
        transform: translateZ(-3px);
      }
      
      .layer:nth-child(4):after {
        transform: translateZ(-4.5px);
      }
      
      .layer:nth-child(5):after {
        transform: translateZ(-6px);
      }
      
      .layer:nth-child(6):after {
        transform: translateZ(-7.5px);
      }
      
      .layer:nth-child(7):after {
        transform: translateZ(-9px);
      }
      
      .layer:nth-child(8):after {
        transform: translateZ(-10.5px);
      }
      
      .layer:nth-child(9):after {
        transform: translateZ(-12px);
      }
      
      .layer:nth-child(10):after {
        transform: translateZ(-13.5px);
      }
      
      .layer:nth-child(11):after {
        transform: translateZ(-15px);
      }
      
      .layer:nth-child(12):after {
        transform: translateZ(-16.5px);
      }
      
      .layer:nth-child(13):after {
        transform: translateZ(-18px);
      }
      
      .layer:nth-child(14):after {
        transform: translateZ(-19.5px);
      }
      
      .layer:nth-child(15):after {
        transform: translateZ(-21px);
      }
      
      .layer:nth-child(16):after {
        transform: translateZ(-22.5px);
      }
      
      .layer:nth-child(17):after {
        transform: translateZ(-24px);
      }
      
      .layer:nth-child(18):after {
        transform: translateZ(-25.5px);
      }
      
      .layer:nth-child(19):after {
        transform: translateZ(-27px);
      }
      
      .layer:nth-child(20):after {
        transform: translateZ(-28.5px);
      }
      
      .layer:nth-child(n+10):after {
        -webkit-text-stroke: 3px rgba(0, 0, 0, 0.25);
      }
      
      .layer:nth-child(n+11):after {
        -webkit-text-stroke: 15px dodgerblue;
        text-shadow: 6px 0 6px #00366b, 5px 5px 5px #002951, 0 6px 6px #00366b;
      }
      
      .layer:nth-child(n+12):after {
        -webkit-text-stroke: 15px #0077ea;
      }
      
      .layer:last-child:after {
        -webkit-text-stroke: 17px rgba(0, 0, 0, 0.1);
      }
      
      .layer:first-child:after {
        color: #fff;
        text-shadow: none;
      }
      
      @keyframes ಠ_ಠ {
        100% {
          transform: rotateY(-40deg) rotateX(-43deg);
        }
      }
      `}</style>
    </View>
  );
}
