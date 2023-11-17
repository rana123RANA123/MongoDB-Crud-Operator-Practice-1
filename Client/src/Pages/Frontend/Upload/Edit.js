import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const formDataInitialState = { name: "", fatherName: "", age: "", cnic: "", fathercnic: "", email: "", phoneNumber: "", houseNumber: "", address: "", }
export default function Edit() {
  const [usersData, setUsersData] = useState([]);
  const [formData, setFormData] = useState(formDataInitialState);
  const [isUpdate, setIsUpdate] = useState(false);

  const params = useParams()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getDocument = useCallback(async () => {
    axios
      .get("http://localhost:8000/users")
      .then((response) => {
        console.log("response : ", response.data);
        setFormData(response.data);
        // setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error : ", error);
      });

  }, [params.id])

  useEffect(() => {
    getDocument()
  }, [getDocument])




  useEffect(() => {
    axios
      .get("http://localhost:8000/users")
      .then((response) => {
        console.log("response : ", response.data);
        setFormData(response.data);
        // setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error : ", error);
      });
  }, []);

  // console.log("outer data" , usersData)
  console.log("formdata : ", formData);

  const handleUpdateUser = (e) => {
    e.preventDefault();

    console.log("formdata : ", formData);
    axios
      .put("http://localhost:8000/updateUser/" + formData._id, formData)
      .then((response) => {
        console.log("User updated successfully!!");
        console.log("response : ", response);

        const tempUsers = usersData.map((userData) => {
          return userData._id != formData._id ? userData : formData;
        });
        console.log("tempUsers : ", tempUsers);

        setUsersData(tempUsers);

        setFormData(formDataInitialState);
        setIsUpdate(false);
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
            <button className='btn btn-dark border-0' style={{ height: "72px", borderRadius: "0px", width: "140px" }} onClick={handleUpdateUser}>Submit</button>
          </div>
        </div>
      </div>

    </>
  )
}
