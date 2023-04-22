import React, { useState } from "react";
import FormData from 'form-data';
import axios from 'axios';

export default function Upload(){
const[image,setImage] = useState('')

function handleImage(e){
    setImage(e.target.files[0]) 
    console.log(e.target.files)
    e.preventDefault();
}

function handleApi(){
    // const formData = new formData();
    // formData.append('image',image);
    axios.post('https://dummy.restapiexample.com/api/v1/create', image).then((res) => {
        console.log(res);
    })
}

return (
    <div>
        <input type="file" name='file' onChange={handleImage}/>
        <button onClick={handleApi}>Submit</button>
    </div>
);
};