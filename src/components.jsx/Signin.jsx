import { useState } from "react";
import {AiOutlineCloseCircle} from "react-icons/ai"


function Signin({onRemoveSignin}) {
  const [type, setType] = useState("signup");

  return (
    <div className="w-full h-screen flex items-end md:justify-center md:items-center z-50 absolute ">
      <div className="w-[800px] md:h-[470px] h-[550px]  border bg-white rounded-xl md:rounded-md overflow-hidden">
        <div className="relative">
        <span className="hidden p-2 w-full md:inline-block text-center bg-green-300 text-green-700 font-bold text-sm">
          Let's learn, share & improve each other with our passion for computer engineering. Signup
          now
        </span>
        <AiOutlineCloseCircle onClick={onRemoveSignin} size={30} className="absolute right-2 top-4 md:top-1 cursor-pointer"/>
        </div>
      
        <div className="p-2 md:pl-4 md:flex mt-3 md:justify-between gap-4 pr-0">
          <div className="w-full md:w-[47%]">
            <h1 className="text-2xl font-bold">
              {type == "signup" ? "Create your Account" : "Sign in"}
            </h1>
            <div className="mt-4">
              <RegistrationForm type={type} />
              <div className="w-full py-2 flex justify-center items-center gap-x-5 border border-gray-800 rounded-md ">
                <img width="20" src="/google.png" alt="" />
                <span className="text-sm">Sign up with Google</span>
              </div>
              <div className="w-full py-2 flex justify-center items-center gap-x-5 border border-gray-800 rounded-md mt-2">
                <img width="23" src="/facebook.png" alt="" />
                <span className="text-sm">Sign up with facebook</span>
              </div>
              <span className="inline-block mt-4 text-sm font-bold w-full text-center">
                Forgot password ?
              </span>
            </div>
          </div>
          <div className="md:flex flex-col mt-3 md:mt-0">
            {type === "signup" ? (
              <span
                onClick={() => setType("signin")}
                className="float-right text-sm font-bold ml-auto mr-5"
              >
                Already have an account? <a href="#">Sign in!</a>{" "}
              </span>
            ) : (
              <span
                onClick={() => setType("signup")}
                className="float-right text-sm font-bold ml-auto mr-4"
              >
                Don't have an account yet? <a href="#">Create new for free here!</a>{" "}
              </span>
            )}
            <img
              className="w-[80%] mt-8  h-[330px] object-cover object-left hidden md:block"
              src="/social.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const RegistrationForm = ({ type }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  let style = {
    input:
      "text-sm px-4 py-2.5 block w-full bg-gray-200/75 placeholder:text-gray-500 placeholder:font-bold border border-black  focus:outline-none focus:border-blue-500",
  };
  return (
    <form className=" ">
      <div className="rounded-md overflow-hidden">
        {type === "signup" && (
          <div className="grid grid-cols-2 ">
            <div>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className={style.input}
              />
            </div>
            <div>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className={style.input}
              />
            </div>
          </div>
        )}

        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className={style.input}
        />

        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className={style.input}
        />

        {type === "signup" && (
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className={style.input}
          />
        )}
      </div>

      <input
        type="submit"
        className="w-full rounded-3xl text-white bg-blue-700 hover:bg-blue-800 text-sm font-bold text-center py-2.5 my-4"
        value={type === "signup" ? "Create Account" : "Sign in"}
      />
    </form>
  );
};

export default Signin;
