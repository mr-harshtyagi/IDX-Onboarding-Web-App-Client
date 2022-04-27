import { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import axios from "axios";
import {Link, useParams } from "react-router-dom";

export default function Showkeys() {
  let params =useParams();
  const [data, setData] = useState();
  const [isLoaded,setIsLoaded] =useState(false)
  const [message,setMessage] = useState("Loading ...")
 
  useEffect(()=>{
     axios
       .get(`http://localhost:5000/findkeys/${params.uniqueId}`)
       .then(function (response) {
         if(response.status === 200)
         {setData(response.data);
        setIsLoaded(true)}
        else
        setMessage("Error Loading your Data.")
       })
       .catch(function (error) {
         console.log(error);
       });
  },[params.uniqueId])
  return (
    <div className="row">
      <div className="col-3">
        <Sidebar />
      </div>
      <div className="col-9 text-center">
        {isLoaded ? (
          <>
            <h1
              style={{
                marginTop: "30px",
                marginBottom: "30px",
                textAlign: "center",
              }}
            >
              Here are your keys.
            </h1>
            <div className="row">
              <div className="form-floating col">
                <textarea
                  style={{ height: "400px" }}
                  className="form-control"
                  placeholder="This is your Private Key."
                  id="privatekey"
                >
                  {data.private_key}
                </textarea>
                <label for="privatekey">Private Key</label>
              </div>
              <div className="form-floating col">
                <textarea
                  style={{ height: "400px" }}
                  className="form-control"
                  placeholder="This is your Public Key"
                  id="publickey"
                >
                  {data.public_key}
                </textarea>
                <label for="publickey">Public Key</label>
              </div>
            </div>
          </>
        ) : (
          <h1> {message}</h1>
        )}
        <br />
        <Link to="/mykeys">
          <button className="btn btn-primary"> Enter another ID </button>
        </Link>
      </div>
    </div>
  );
}
