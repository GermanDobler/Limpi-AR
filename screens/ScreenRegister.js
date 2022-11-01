import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../src/context/AuthContext";
import { Button, View,Image } from 'react-native';
//import { Alert } from "./Alert";
export default function Register() {
  const { signup, loginWithGoogle } = useAuth();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/ScreenSecretaria");
    } catch (error) {
      setError(error.message);
    }
  };
  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/ScreenSecretaria");
    } catch (error) {
      setError(error.message);
    }
  };


  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Image
          style={{ width: 300, height: 300, marginBottom: 5 }}
          source={require("../src/img/Logoviejo.png")}
        />
    <div className="w-full max-w-xs m-auto text-black">

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-6 mb-4"
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
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="*************"
          />
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Register
        </button>
        <button
        onClick={handleGoogleSignin}
        style={ {margin: 25} }
        className="bg-slate-50 hover:bg-slate-200 text-black  shadow rounded border-2 border-gray-300 py-2 px-4 w-full"
      >
        Google login
      </button>
      </form>
      <p className="my-4 text-sm flex justify-between px-3">
        Already have an Account?
        <Link to="/ScreenLogin" className="text-blue-700 hover:text-blue-900">
          Login
        </Link>
      </p>
    </div>
    </View>
  );
}