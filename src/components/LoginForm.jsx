import React, { useState } from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router";


// assets
import googleLogo from "../assets/logo/googleLogo.png";
import facebookLogo from "../assets/logo/facebookLogo.png";
import xLogo from "../assets/logo/xLogo.png";

const LoginForm = ({ handleCloseModal }) => {
  const navigate = useNavigate();
  const [isInvalidCredential, setIsInvalidCredential] = useState(false);
  const [loading, setisLoading] = useState(false);
  return (
    <div className="flex flex-col w-full h-[calc(100vh-80px)] justify-center items-center">
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          if (!values.password) {
            errors.password = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setisLoading(true);
          setTimeout(() => {
            if (
              values.email !== "xure@gmail.com" ||
              values.password !== "tiger123"
            ) {
              setIsInvalidCredential(true);
            } else {
              navigate('/card')
              // alert(JSON.stringify(values, null, 2));
            }
            setisLoading(false);
            setSubmitting(false);
          }, 800);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} className="form-container">
            <div>
              {isInvalidCredential && (
                <p className="text-md text-red-500 text-center py-3">
                  Incorrect Email or Password
                </p>
              )}
            </div>
            <h1 className="form-header">Login</h1>
            <label htmlFor="username" className="input-label">
              Email*
            </label>
            <input
              type="email"
              name="email"
              id="username"
              className={`input ${
                errors.email && touched.email && errors.email
                  ? "outline-red-700 border-red-500 border-2"
                  : ""
              }`}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <p className="label-error">
              {errors.email && touched.email && errors.email}
            </p>
            <label htmlFor="password" className="input-label">
              Password*
            </label>
            <input
              id="password"
              type="password"
              name="password"
              className={`input ${
                errors.email && touched.email && errors.email
                  ? "outline-red-700 border-red-500 border-2"
                  : ""
              }`}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <p htmlFor="password" className="label-error">
              {errors.password && touched.password && errors.password}
            </p>
            <div className="flex justify-between items-center mt-2 mb-4">
              <div className="flex justify-center items-center">
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  className="size-4"
                />
                <label htmlFor="remember" className="text-slate text-sm ml-1">
                  Remember me
                </label>
              </div>
              <div>
                <p
                  onClick={handleCloseModal}
                  className="text-slate text-sm leading-1 hover:text-[var(--primary-color)] cursor-pointer"
                >
                  Forgot password?
                </p>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`btn-primary w-full flex items-center justify-center gap-1 ${
                isSubmitting && "bg-slate-400"
              } `}
            >
              {loading && (
                <div role="status">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-200 animate-spin fill-orange-700"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span class="sr-only">Loading...</span>
                </div>
              )}
              Login
            </button>

            <div className="flex items-center gap-2 my-7">
              <div className="bg-slate-400 h-[0.3px] w-full"></div>
              <p>Or</p>
              <div className="bg-slate-400 h-[0.3px] w-full"></div>
            </div>

            <div className="flex justify-center gap-1">
              <div
                title="Google"
                className="w-fit p-2 rounded-full hover:bg-slate-200 duration-300"
              >
                <img src={googleLogo} alt="google" className="size-6" />
              </div>
              <div
                title="Facebook"
                className="w-fit p-2 rounded-full hover:bg-slate-200 duration-300"
              >
                <img src={facebookLogo} alt="facebook" className="size-6" />
              </div>
              <div
                title="X"
                className="w-fit p-2 rounded-full hover:bg-slate-200 duration-300"
              >
                <img src={xLogo} alt="x" className="size-6" />
              </div>
            </div>
          </form>
        )}
      </Formik>

      <div className="">
        <p>username: xure@gmail.com</p>
        <p>password: tiger123</p>
      </div>
    </div>
  );
};

export default LoginForm;
