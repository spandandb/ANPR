import React, { useState } from "react";
// import FormData from 'form-data';
import axios from "axios";

export default function Upload() {
  const [image, setImage] = useState("");
  const [user, setUser] = useState();

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
    <div className="m-20">
      <div className="text-center">
        <input
          type="file"
          name="file"
          className="m-5 text-yellow-300"
          onChange={handleImage}
        />
        <button
          className="my-5 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800
          hover:text-yellow-300"
          onClick={handleApi}
        >
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Submit
          </span>
        </button>
        {/* <form action="http://127.0.0.1:8000/" method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
              <input type="file" name='image' onChange={handleImage}/>
              <button type = 'submit'>Submit</button>
          </form> */}
      </div>
      <div className="my-10">
        <div>
          <h1 className="font-bold text-md text-center text-yellow-300">
            Extracted Number Plate Image
          </h1>
          {/* <img src={`data:image/jpeg;base64,${data}`} /> */}
        </div>
      </div>
      <div className="m-10 p-10">
        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <div className="p-1.5 w-full inline-block align-middle">
              <div className="overflow-hidden border rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-800  uppercase "
                      >
                        Number Plate
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-800 uppercase "
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-800  uppercase "
                      >
                        Address
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right text-gray-800  uppercase "
                      >
                        Car Type
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right text-gray-800  uppercase "
                      >
                        Purchase Date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right text-gray-800  uppercase "
                      >
                        No. of Previous Owners
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right text-gray-800  uppercase "
                      >
                        Accident History
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right text-gray-800  uppercase "
                      >
                        Reason
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-white">
                    <tr>
                      <td className="px-6 py-4 text-sm text-bold text-green-500 font-medium whitespace-nowrap">
                        WB10D1467
                      </td>
                      <td className="px-6 py-4 text-sm  whitespace-nowrap">
                        Priyanka Laha
                      </td>
                      <td className="px-6 py-4 text-sm  whitespace-nowrap">
                        39/2, D. H. Road
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                        Edit
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                        19-JAN-97
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                        1
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-red-500 text-right whitespace-nowrap">
                        Yes
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-right whitespace-wrap">
                        drink and drive
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
