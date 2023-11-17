import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const formDataInitialState = { name: "", fatherName: "", age: "", cnic: "", fathercnic: "", email: "", phoneNumber: "", houseNumber: "", address: "", }

export default function Hero() {
  // const [usersData, setUsersData] = useState([]);
  const [formData, setFormData] = useState(formDataInitialState);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleCreateUser = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/addUser", formData)
      .then((response) => {
        console.log("User Data created successfully!!");
        console.log("response.data : ", response.data);
        navigate('/')
        // setUsersData((usersData) => [...usersData, response.data]);
        setFormData(formDataInitialState);
      })
      .catch((error) => {
        console.log("Error : ", error);
      });
  };



  return (
    <>

      <div className="container mt-5" style={{ height: "500px", border: "1px solid black", width: "800px" }}>
        <div className="row mt-5 p-2">
          <div className="col-6">
            <input type="text" name='name' value={formData.name} placeholder='Name' style={{ height: "50px", borderRadius: "0px" }} className='form-control' onChange={handleChange} />
          </div>
          <div className="col-6">
            <input type="text" name='fatherName' value={formData.fatherName} placeholder='Father Name' style={{ height: "50px", borderRadius: "0px" }} className='form-control' onChange={handleChange} />
          </div>
        </div>

        <div className="row mt-3 p-2">
          <div className="col-6">
            <input type="number" name='age' value={formData.age} placeholder='Age' className='form-control' style={{ height: "50px", borderRadius: "0px" }} onChange={handleChange} />
          </div>
          <div className="col-6">
            <input type="number" name='cnic' value={formData.cnic} placeholder='CNIC' className='form-control' style={{ height: "50px", borderRadius: "0px" }} onChange={handleChange} />
          </div>
        </div>

        <div className="row mt-3 p-2">
          <div className="col-6">
            <input type="number" name='fathercnic' value={formData.fathercnic} placeholder='Father CNIC' className='form-control' style={{ height: "50px", borderRadius: "0px" }} onChange={handleChange} />
          </div>
          <div className="col-6">
            <input type="text" name='email' value={formData.email} placeholder='Email' className='form-control' style={{ height: "50px", borderRadius: "0px" }} onChange={handleChange} />
          </div>
        </div>

        <div className="row mt-3 p-2">
          <div className="col-6">
            <input type="number" name='phoneNumber' value={formData.phoneNumber} placeholder='Phone Number' className='form-control' style={{ height: "50px", borderRadius: "0px" }} onChange={handleChange} />
          </div>
          <div className="col-6">
            <input type="number" name='houseNumber' value={formData.houseNumber} placeholder='House Number' className='form-control' style={{ height: "50px", borderRadius: "0px" }} onChange={handleChange} />
          </div>
        </div>

        <div className="row mt-3 p-2">
          <div className="col-9">
            <textarea name="address" value={formData.address} id="address" placeholder='Address' cols="70" rows="3" style={{ borderRadius: "0px" }}></textarea>
          </div>
          <div className="col-3">
            <button className='btn btn-dark border-0' style={{ height: "72px", borderRadius: "0px", width: "140px" }} onClick={handleCreateUser}>Submit</button>
          </div>
        </div>
      </div>

    </>
  )
}
