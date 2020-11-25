import React, { useEffect, useState } from 'react'
// import Input from "../layout/Input";
import {
   
  useParams,useHistory 
} from 'react-router-dom'

import { useFirestore } from "react-redux-firebase";   //for database we r using firestore
import Input from '../Input'


const StudentForm = () => {


  let history = useHistory();
  const firestore = useFirestore();


  let {id} = useParams()

  const docRef = id?firestore.collection("students").doc(id):null;

  const [student,setStudents] = useState({
    name: "",
    email: "",
    standard: "",
    phone: "",
    address1: "",
    address2: "",

  })


  const onInputChange=(e)=>{
      setStudents({
        ...student,
          [e.target.name]:e.target.value
      })
  }






  const loadStudent = async () => {
    try {
      // const docRef = firestore.collection("students").doc(id);
      const result = await docRef.get();
      // console.log(result.data())
      if (result.exists) {
        setStudents(result.data());
      } else {
        console.log("No such students!");
      }
    } catch (error) {
      console.log("Error getting document:", error);
    }
  };

  useEffect(() => {
    if(id){
      loadStudent();
    }
   
  }, [id]);









  const submitForm= async(e)=>{
    e.preventDefault();
    // console.log(student)

    if(id)
      // alert ('update ho gaya friends')

        await docRef.update({...student,updateAt:firestore.FieldValue.serverTimestamp()})


      else
          
            // add new student
      firestore
      .collection("students")
      .add({ ...student, createdAt: firestore.FieldValue.serverTimestamp() });

      history.push("/");

  }





    return (
        <>
               <div className="container">
      <div className="py-4">
        <div className="row ">
          <div className="col-md-10 mx-auto">
            <div className="card card-body shadow">
              <form onSubmit={submitForm}>
                <div className="form-row form-group mb-4">
                  <div className="col-md-6">
                   

                    <Input 

                          placeholder="Enter Student Name"
                          name="name"
                          value={student.name}
                          onChange={onInputChange}
                          className='form-control'
                    />
                  </div>
                  <div className="col-md-6">
                   

                    <Input type='text'
                      placeholder="Enter Student E-mail"
                      name="email"
                      value={student.email}
                      onChange={onInputChange}
                    className='form-control'/>
                  </div>
                  
                </div>
                <div className="form-row form-group mb-4">
                  <div className="col-md-6">
                    
                   

                    <Input type='text'
                      placeholder="Enter Student Phone"
                      name="phone"
                      value={student.phone}
                      onChange={onInputChange}
                    className='form-control'/>




                  </div>
                  <div className="col-md-6">
                   

                    <Input type='text'
                      placeholder="Enter Student Class"
                      name="standard"
                      value={student.standard}
                      onChange={onInputChange}
                    className='form-control'/>

                  </div>
                </div>
                <div className="form-row form-group">
                  <div className="col-md-6">
                    

                    <Input type='text'
                      placeholder="Enter Student Address Line 1"
                      name="address1"
                      value={student.address1}
                      onChange={onInputChange}
                    className='form-control'/>
                  </div>
                  <div className="col-md-6">
                   

                    <Input type='text'
                      placeholder="Enter Student Line 2"
                      name="address2"
                      value={student.address2}
                      onChange={onInputChange}
                    className='form-control'/>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary">
                       {
                         id ? "Update Student" : "Add Student"
                       }
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}

export default StudentForm






























