// import React, { useState } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";

// function Login() {
  
//   // const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();
//   const [error, setError] = useState(null);

//   return (
//     <Formik
//       initialValues={{ code: '',  }}
//       validate={values => {
//         const errors = {};
//         if (!values.code) {
//           errors.code = 'code is required';
//         } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.code)) {
//           errors.code = 'Invalid code address';
//         }
       
//         return errors;
//       }}
//       onSubmit={(values, { setSubmitting }) => {
//         setError(null);
//         axios.post('http://54.179.232.109:1337/api/v1/user/code-login', values)
//           .then(response => {
//             // localStorage.setItem('token', response.data.token);
//             setSubmitting(false);
//             navigate("/homeprofile");
            
//         console.log(response);
//         localStorage.clear();
//         localStorage.setItem("token", JSON.stringify(response.data.token));
      
//           })
//           .catch(error => {
//             setError(error.response.data.message);
//             setSubmitting(false);
//           });
//       }}
//     >
//       {({ isSubmitting }) => (
//         <Form>
//           <div>
//             <Field type="code" name="code" placeholder="code" />
//             <ErrorMessage name="code" component="div" />
//           </div>
         
//           {/* <button type="submit" disabled={isSubmitting}>
//             verify
//           </button> */}
//           {error && <div>{error}</div>}
//         </Form>
//       )}
//     </Formik>
//   );
// }

// export default Login;

























// import React, { useState } from "react";
// import { useFormik } from "formik";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const validate = (values) => {
//   const errors = {};
//   if (values.code === "") {
//     errors.code = "code is required";
//   }

//   return errors;
// };
// const EnterTheCode = () => {

//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const formik = useFormik({
//     initialValues: {
//       code: "",
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
//     axios
//       .post("http://54.179.232.109:1337/api/v1/user/verify", data)
//       .then((res) => {
//         setIsLoading(false);
//         console.log(res);
//         navigate("/");
        
//       })
//       .catch((err) => {
//         setIsLoading(false);
//         console.log(err);
//       });
//   };

//   return (

//     <div className="container rounded-lg" style={{ background: "#F4F5F9" }}>
//       <h4 className="mt-5 text-center">Enter The Code</h4>
//       <p>Enter the code that you received through SMS.</p>
//       <div className="flex justify-center">
//         {/* <img src={Verfiy} alt="" style={{ width: "180px", height: "130px" }} /> */}
//       </div>

//       <div className="flex justify-center mt-5">

//         <input
//           className="bg-white shadow-md rounded-full w-80  p-3"
//           type="text"
//           placeholder="Enter the Code"
//           id="code"
//           onChange={formik.handleChange}
//           value={formik.values.code}
//         />
//       </div>
//     </div>
//   );
// };

// export default EnterTheCode;






