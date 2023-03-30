// import "bootstrap/dist/css/bootstrap.min.css";
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function ImageUpload() {
//   const [selectedFile, setSelectedFile] = useState();
//   const [loadimage, setLoadImage] = useState([]);

// //   useEffect(() => {
// //     loadList();
// //   }, []);

// //   const loadList = async () => {
// //     const result = await axios.get("http://localhost:8000/api/list");
// //     setLoadImage(result.data.reverse());
// //   };

//   const handleSubmission = async (e) => {
//     const formData = new FormData();
//     formData.append("file", selectedFile);

//     await fetch("http://54.179.232.109:1337/api/v1/admin/upload", {
//       method: "POST",
//       body: formData,
//     })
//       .then((result) => {
//         // loadList();
//       })
//       .catch(() => {
//         alert("Error in the Code");
//       });
//   };

// //   const deleteImage = (productId) => {
// //     axios
// //       .get("http://localhost:8000/api/delete/" + productId)
// //       .then((result) => {
// //         loadList();
// //       })
// //       .catch(() => {
// //         alert("Error in the Code");
// //       });
// //   };

//   return (
//     <div className="container bg-white p-2 mt-5">
//       <h6 class="text-center text-success  ml-4 mb-4 mt-4">
//                 Add Image
//       </h6>
//       <div className="row">
//       <div class="form-group">
//               <input
//                 type="file"
//                 name="file"
//                 className="mb-4 items-center"
//                 onChange={(e) => setSelectedFile(e.target.files[0])}
//               />
//             </div>
//             {/* <div class="form-group">
//               <button
//                 type="submit"
//                 onClick={handleSubmission}
//                 class="btn btn-success mb-3"
//                 name="submit"
//               >
//                 Add Gallary
//               </button>
//             </div> */}

//       </div>
//     </div>
//   );
// }
// export default ImageUpload;

// // import React, { useState } from "react";
// // import axios from "axios";

// // function ImageUpload() {
// //   const [selectedFiles, setSelectedFiles] = useState([]);

// //   const handleImageChange = (e) => {
// //     setSelectedFiles([]);
// //     if (e.target.files) {
// //       const filesArray = Array.from(e.target.files).map((file) =>
// //         URL.createObjectURL(file)
// //       );
// //       setSelectedFiles((prevImages) => prevImages.concat(filesArray));
// //       Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
// //     }
// //   };

// //   const renderPhotos = (source) => {
// //     return source.map((photo) => {
// //       return (
// //         <img
// //           className="p-2"
// //           src={photo}
// //           alt=""
// //           key={photo}
// //           style={{ width: "20%", height: "180px" }}
// //         />
// //       );
// //     });
// //   };

// //   function uploadToServer(e) {
// //     e.preventDefault();
// //     var files = e.target[0].files;
// //     const formData = new FormData();
// //     for (let i = 0; i < files.length; i++) {
// //       formData.append("file[]", files[i]);
// //     }
// //     axios({
// //       url: "http://54.179.232.109:1337/api/v1/admin/upload",
// //       method: "POST",
// //       data: formData,
// //     }).then((res) => {
// //       console.log(res);
// //     });
// //   }
// //   return (
// //     <>
// //       <div className="flex justify-center ">

// //           <form onSubmit={(e) => uploadToServer(e)} encType="multipart/form-data">

// //           <input className="ml-2" type="file" id="file" name="file[]" multiple onChange={handleImageChange} />
// //           <div className="result">{renderPhotos(selectedFiles)}</div>

// //       </form>

// //       </div>

// //     </>
// //   );
// // }

// // export default ImageUpload;

// // import React, { useState } from "react";

// // function ImageUpload() {
// //     const [logo, setLogo] = useState();
// //     function handleChange(e) {
// //         console.log(e.target.files);
// //         setLogo(URL.createObjectURL(e.target.files[0]));
// //     }

// //     return (
// //         <div className="ImageUpload">
// //             <h2>Add Image:</h2>
// //             <input type="file" onChange={handleChange} />
// //             <img src={logo} />

// //         </div>

// //     );
// // }

// // export default ImageUpload;

// // import React, {useState} from 'react'
// // import Axios from 'axios';

// // const ImageUpload = () => {
// //   const [imageSelected, setImageSelected] = useState("");

// //   const uploadImage = () => {
// //   const formData = new FormData();
// //   formData.append("file", imageSelected);
// //   formData.append("upload_preset", "xw4yr0gl");

// //   Axios.post(
// //       "http://54.179.232.109:1337/api/v1/admin/upload",
// //       formData

// //   ).then((response) => {
// //       console.log(response);
// //   });
// // };
// //   return (

// //     <div className="flex justify-center mt-4">
// //     <div className="bg-white w-80 h-24 rounded-2xl pt-2">
// //       <p>Add Logo</p>
// //       <div className="flex justify-center">
// //         <button
// //           className="items-center  w-32 p-2 text-white rounded-2xl"
// //           onClick={uploadImage}
// //         >

// //         </button>
// //         <input
// //           type="file"
// //           onChange={(event) => {
// //             setImageSelected(event.target.files[0]);
// //           }}
// //         />

// //       </div>
// //     </div>
// //   </div>
// //   )
// // }

// // export default ImageUpload
