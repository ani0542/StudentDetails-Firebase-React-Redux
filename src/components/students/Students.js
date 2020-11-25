import React from 'react'
import {Link} from 'react-router-dom'
import Avatar from '../Avatar'
import { useSelector } from "react-redux";
import { useFirestore } from "react-redux-firebase";
import { useFirestoreConnect } from "react-redux-firebase";
import Loading from '../layout/Loading';
// import { useFirebaseConnect } from "react-redux-firebase";




function Students() {


    const students = useSelector((state) => state.firestore.ordered.students);
    console.log(students)


    const firestore = useFirestore();

    useFirestoreConnect([
      { collection: "students", orderBy: ["createdAt", "desc"] },
    ]);

      if(!students){
         return  <Loading/>
      }





      

      const deleteStudent=async(id)=>{
        //   alert('delete ho gaya ' + id)

        try {
             await  firestore.collection('students').doc(id).delete()
        } catch (err) {
              console.log(err)
        } 
       
      }

    return (
        <>
                    <div className="container">
                                        <div className="py-4">
                                            <div className="row">
                                                     {
                                                         students.map((value,index)=>{
                                                                return(
                                                                    <>
                                              
                                                                     <div className="col-lg-3 col-md-6 mb-4" key={value.id}>
                                                                                <div className="card shadow text-center py-4">
                                                                                     
                                                                                      <Avatar url={`https://i.pravatar.cc/150?img=${value.id}`}  />
                                                                                <div className="card-body">
                                                                                     <h5 className="card-title mb-0">{value.name}</h5>
                                                                                    <p className="text-muted small">{value.email}</p>
                                                                                    <Link
                                                                                    to={`/student/${value.id}`}
                                                                                    className="btn btn-primary btn-profile"
                                                                                    >
                                                                                    View Profile
                                                                                    </Link>
                                                                                    <button
                                                                                    className="btn btn-edit"
                                                                                     
                                                                                      onClick={()=>deleteStudent(value.id)}
                                                                                    >
                                                                                    <span className="material-icons">delete_outline</span>
                                                                                    </button>
                                                                                </div>
                                                                                </div>
                                                                      </div>


                                                                    </>
                                                                )
                                                         })
                                                     }
                                            </div>
                                        </div>
                     </div>
        </>
    )
}

export default Students








