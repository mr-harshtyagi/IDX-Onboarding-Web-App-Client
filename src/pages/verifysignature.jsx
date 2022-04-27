import Sidebar from "../components/sidebar";
import { useState } from "react";
import axios from "axios";
import { useContext, useEffect } from "react";
import SidebarContext from "../sidebarcontext";
function VerifySignature() {
  const [loaded, setLoaded] = useState(false)
  const [verified, setVerified] = useState(false)
  const [message,setMessage] =useState("")
  const [data,setData]= useState({
    id:"",
    signature:""
  });
  const {changeState} =useContext(SidebarContext)
  useEffect(()=>{
    changeState({
                  home: "nav-link link-dark",
                  registeration: "nav-link link-dark",
                  mykeys: "nav-link link-dark",
                  digitalcertificate: "nav-link link-dark",
                  verify:"nav-link active"
                });

  },[]);
  function handleChange(event){
    const {name,value} =event.target;
    setData(prevData =>
      {return {
      ...prevData,
      [name]:value}})
  }
  function handleSubmit(e) {
      e.preventDefault();
      axios.post('http://localhost:5000/verifysignature', data)
  .then(function (response) {
    console.log(response.data);
    switch(response.data){
      case true:
        {
           setLoaded(true)
      setVerified(true)
      setMessage("Signature is valid")
           break;
        }
      case false:
        {
        setLoaded(true)
        setMessage("Invalid Signature")
            break;
        } 
        default:{
          setLoaded(true)
        setMessage("ID not found in the Database")

        } 
    }
  })
  .catch(function (error) {
    console.log(error);
  });
     
  }
  return (
    <div className="row">
      <div className="col-3">
        <Sidebar />
      </div>
      <div className="col-9">
        {loaded ? (
        <>
       
        <h1
          style={{
            marginTop: "50px",
            marginBottom: "30px",
            textAlign: "center",
          }}
        >
           <div >{verified ?
           (<i style={{fontSize:"7rem", color:"#1aa260"}}className="bi bi-patch-check-fill"></i>) :
           (<i style={{fontSize:"10rem", color:"#DB4437"}} className="bi bi-x"></i>)}
           </div>
          {message}
        </h1>
        </>): (
          <>
          <h1
          style={{
            marginTop: "50px",
            marginBottom: "30px",
            textAlign: "center",
          }}
        >
          Enter your Unique ID and Digital Signature.
        </h1>
        <form onSubmit={handleSubmit}>
          <div
            style={{ marginTop: "80px", marginLeft: "200px" }}
            className="w-50"
          >
            <label htmlFor="validationDefault01" className="form-label">
              Your Unique ID
            </label>
            <input
              type="text"
              onChange={handleChange}
              name="id"
              value={data.id}
              className="form-control"
              id="validationDefault01"
              placeholder="ID"
              required
            />
            <label htmlFor="validationDefault01" className="form-label">
              Digital Signature
            </label>
            <input
              type="text"
              onChange={handleChange}
              name="signature"
              value={data.signature}
              className="form-control"
              id="validationDefault01"
              placeholder="Paste your Digital Signature"
              required
            />
            <div className="col-12 text-center mt-5">
              <button type="submit" className="btn btn-primary btn-lg">
                Verify
              </button>
            </div>
          </div>
        </form>

          </>
        )}
        
      </div>
    </div>
  );
}

export default VerifySignature;
