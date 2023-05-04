import React, { useState } from "react";
// import FormData from 'form-data';
import axios from "axios";

export default function Upload() {
  const [image, setImage] = useState("");
  const [user, setUser] = useState("");

  const fetchData = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUser(data));
  };

  function handleImage(e) {
    setImage(e.target.files[0]);
    console.log(e.target.files);
    // e.preventDefault();
  }

  function handleSubmit(e) {
    e.preventDefault();
    e.target.submit();
  }

  function handleApi() {
    // const formData = new formData();
    // formData.append('image',image);
    // axios.post('http://127.0.0.1:8000/', image).then((res) => {
    //     console.log(res);
    // })
    let files = image;
    let formData = new FormData();
    //Adding files to the formdata
    formData.append("image", files);
    axios({
      // Endpoint to send files
      url: "http://127.0.0.1:8000/",
      method: "POST",
      // Attaching the form data
      data: formData,
    })
      .then((res) => {
        console.log(res);
      }) // Handle the response from backend here
      .catch((err) => {}); // Catch errors if any
  }

  return (
    <div>
      <input type="file" name="file" onChange={handleImage} /> */
      <button onClick={handleApi}>Submit</button>
      {/* <form action="http://127.0.0.1:8000/" method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
            <input type="file" name='image' onChange={handleImage}/>
            <button type = 'submit'>Submit</button>
        </form> */}
    </div>
  );
}
