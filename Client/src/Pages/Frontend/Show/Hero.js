import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Hero() {

  const [usersData, setUsersData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [isUpdate, setIsUpdate] = useState(false);

  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get("http://localhost:8000/users")
      .then((response) => {
        console.log("response : ", response.data);
        setUsersData(response.data);
        // setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error : ", error);
      });
  }, []);

  const handleDelete = (userId) => {
    axios
      .delete("http://localhost:8000/deleteUser/" + userId)
      .then((response) => {
        console.log("response : ", response);
        const updateData = usersData.filter((user) => user._id != userId);
        setUsersData(updateData);
      })
      .catch((error) => {
        console.error("Error : ", error);
      });
  };
  return (
    <>

      <div className="container mt-5">

        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col" className='text-center p-3'>Name</th>
              <th scope="col" className='text-center p-3'>Father Name</th>
              <th scope="col" className='text-center p-3'>Age</th>
              <th scope="col" className='text-center p-3'>CNIC</th>
              <th scope="col" className='text-center p-3'>Father CNIC</th>
              <th scope="col" className='text-center p-3'>Email</th>
              <th scope="col" className='text-center p-3'>Phone No</th>
              <th scope="col" className='text-center p-3'>House No</th>
              <th scope="col" className='text-center p-3'>Action</th>

            </tr>
          </thead>

          < tbody >

            {
              usersData.map((user, i) => {
                return (
                  <tr key={i}>
                    <th>{i + 1}</th>
                    <td className='text-center'>{user.name}</td>
                    <td className='text-center p-3'>{user.age}</td>
                    <td className='text-center p-3'>{user.fatherName}</td>
                    <td className='text-center p-3'>{user.cnic}</td>
                    <td className='text-center p-3'>{user.fathercnic}</td>
                    <td className='text-center p-3'>{user.email}</td>
                    <td className='text-center p-3'>{user.phoneNumber}</td>
                    <td className='text-center p-3'>{user.houseNumber}</td>
                    <td>
                      <button className="btn btn-danger" onClick={() => handleDelete(user._id)}>Delete</button>
                      <button className="ms-1 btn btn-primary" onClick={() => { navigate(`./edit/${user._id}`) }}>Update</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div >
    </>
  )
}
