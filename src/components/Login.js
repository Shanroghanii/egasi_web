import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const validate = (values) => {
  const errors = {};
  if (values.email === "") {
    errors.email = "Email is required";
  }
  if (values.password === "") {
    errors.password = "Password is required";
  }
  return errors;
};

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: () => {
      setIsLoading(true);
      setTimeout(handleSave, 2000);
    },
  });

  const handleSave = () => {
    submitData(formik.values);
  };

  const submitData = (data) => {
    axios
      .post("http://54.179.232.109:1337/api/v1/user/email-login", data)
      .then((res) => {
        setIsLoading(false);

        Cookies.set("token", res.data.token, { expires: 7 });
        console.log(res.data);

        navigate("/homeprofile");
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };

  return (
    <div className="container rounded-lg" style={{ background: "#F4F5F9" }}>
      <h4 className="fw-bold mt-4 text-center">Login</h4>
      <p className="text-center">Please Sign in to continue</p>
      <div className="flex flex-col items-center">
        <div className="mt-3">
          <input
            className="bg-white shadow-md rounded-full w-80  p-3"
            type="text"
            placeholder="Email"
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <div className="mt-3">
          <input
            className="bg-white shadow-md rounded-full w-80  p-3"
            type="password"
            placeholder="Password"
            id="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>

        <button
          onClick={formik.handleSubmit}
          className="mt-3 bg-orange-600 text-white shadow-md rounded-full w-80  p-3"
        >
          {isLoading ? "Loading" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Login;

// No Delte
// import React, { useState } from "react";
// import { useFormik } from "formik";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const validate = (values) => {
//   const errors = {};
//   if (values.email === "") {
//     errors.email = "Email is required";
//   }
//   if (values.password === "") {
//     errors.password = "Password is required";
//   }
//   return errors;
// };
// const Login = () => {

//   const [token, setToken] = useState("")
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     validate,
//     onSubmit: () => {
//       setIsLoading(true);
//       setTimeout(handleSave, 2000);
//     },
//   });

//   const handleSave = () => {
//     submitData(formik.values);
//   };

//   const submitData = (data) => {
//     const headers = { Authorization: localStorage.getItem("token") };
//     axios
//       .post("http://54.179.232.109:1337/api/v1/user/email-login", data, {
//         headers,
//       })

//       .then((res) => {
//         setIsLoading(false);
        
//         // console.log(res);

//         localStorage.setItem("token", res.data.token);
//         console.log(res.data);
        
//         navigate("/homeprofile");
//       })
//       .catch((err) => {
//         setIsLoading(false);
//         console.log(err);
//       });
//   };

//   return (
//     <div className="container rounded-lg" style={{ background: "#F4F5F9" }}>
//       <h4 className="fw-bold mt-4 text-center">Login</h4>
//       <p className="text-center">Please Sign in to continue</p>
//       <div className="flex flex-col items-center">
//         <div className="mt-3">
//           <input
//             className="bg-white shadow-md rounded-full w-80  p-3"
//             type="text"
//             placeholder="Email"
//             id="email"
//             onChange={formik.handleChange}
//             value={formik.values.email}
//           />
//         </div>
//         <div className="mt-3">
//           <input
//             className="bg-white shadow-md rounded-full w-80  p-3"
//             type="text"
//             placeholder="Password"
//             id="password"
//             onChange={formik.handleChange}
//             value={formik.values.password}
//           />
//         </div>

//         <button
//           onClick={formik.handleSubmit}
//           className="mt-3 bg-orange-600 text-white shadow-md rounded-full w-80  p-3"
//         >
//           {isLoading ? "Loading" : "Login"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post(
//         "http://54.179.232.109:1337/api/v1/user/email-login",
//         {
//           email,
//           password,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       )
//       .then((res) => {

// localStorage.setItem("token", res.data.token);
// console.log(res.data);
//         navigate("/homeprofile");
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
//       <div className="mb-4">
//         <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
//           Email
//         </label>
//         <input
//           className="w-80 border border-gray-400 p-2 rounded-lg"
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label
//           className="block text-gray-700 font-medium mb-2"
//           htmlFor="password"
//         >
//           Password
//         </label>
//         <input
//           className="w-80 border border-gray-400 p-2 rounded-lg"
//           type="password"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>
//       <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600">
//         Login
//       </button>
//     </form>
//   );
// }

// export default Login;

// // import React, { useState } from "react";
// // import { Formik, Form, Field, ErrorMessage } from "formik";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";

// // function Login() {
// //   // const [isLoading, setIsLoading] = useState(false);
// //   const navigate = useNavigate();
// //   const [error, setError] = useState(null);

// //   return (
// //     <Formik
// //       initialValues={{ email: "", password: "" }}
// //       validate={(values) => {
// //         const errors = {};
// //         if (!values.email) {
// //           errors.email = "Email is required";
// //         } else if (
// //           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
// //         ) {
// //           errors.email = "Invalid email address";
// //         }
// //         if (!values.password) {
// //           errors.password = "Password is required";
// //         }
// //         return errors;
// //       }}
// //       onSubmit={(values, { setSubmitting }) => {
// //         setError(null);
// //         axios
// //           .post("http://54.179.232.109:1337/api/v1/user/email-login", values)
// //           .then((response) => {
// //             // localStorage.setItem('token', response.data.token);
// //             setSubmitting(false);
// //             navigate("/homeprofile");
// //             console.log(response);
// //             localStorage.clear();
// //             localStorage.setItem("token", JSON.stringify(response.data.token));
// //           })
// //           .catch((error) => {
// //             setError(error.response.data.message);
// //             setSubmitting(false);
// //           });
// //       }}
// //     >
// //       {({ isSubmitting }) => (
// //         <Form>
// //           <div>
// //             <Field type="email" name="email" placeholder="Email" />
// //             <ErrorMessage name="email" component="div" />
// //           </div>
// //           <div>
// //             <Field type="password" name="password" placeholder="Password" />
// //             <ErrorMessage name="password" component="div" />
// //           </div>
// //           <button type="submit" disabled={isSubmitting}>
// //             Login
// //           </button>
// //           {error && <div>{error}</div>}
// //         </Form>
// //       )}
// //     </Formik>
// //   );
// // }

// // export default Login;
