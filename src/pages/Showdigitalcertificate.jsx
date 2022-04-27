import { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import axios from "axios";
import {Link, useParams } from "react-router-dom";

export default function Showdigitalcertificate() {
  let params =useParams();
  const [data, setData] = useState();
  const [isLoaded,setIsLoaded] =useState(false)
  const [message,setMessage] = useState("Loading ...")
 
  useEffect(()=>{
     axios
       .get(`http://localhost:5000/findcertificate/${params.uniqueId}`)
       .then(function (response) {
         if(response.status === 200)
         {setData(response.data);
        setIsLoaded(true)
      }
        else
        setMessage("Error Loading your Data.")
       })
       .catch(function (error) {
         console.log(error);
         setMessage("Error Loading your Data.");
       });
  },[params.uniqueId])
  return (
    <div className="row">
      <div className="col-3">
        <Sidebar />
      </div>
      <div className="col-8 text-center">
        {isLoaded ? (
          <>
            <h1
              style={{
                marginTop: "30px",
                marginBottom: "30px",
                textAlign: "center",
              }}
            >
              Here is your Digital Certificate.
            </h1>
            <div className="row">
              <div className="form-floating col">
                <textarea
                  style={{ height: "350px" }}
                  className="form-control"
                  placeholder="This is your Private Key."
                  id="certificate"
                >
                  {data}
                </textarea>
                <label for="certificate">Digital Certificate</label>
              </div>
            </div>
          </>
        ) : (
          <h1> {message}</h1>
        )}
        <br />
        <Link to="/mydigitalcertificate">
          <button className="btn btn-primary"> Enter another ID </button>
        </Link>
      </div>
      <div className="col-1" ></div>
    </div>
  );
}
