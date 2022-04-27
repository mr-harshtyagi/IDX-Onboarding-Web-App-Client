import { useState } from "react";
import Sidebar from "../components/sidebar";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import SidebarContext from "../sidebarcontext";

function Mykeys() {
  let navigate=useNavigate();
  const [uniqueId, setUniqueId] =useState();
   const {changeState} =useContext(SidebarContext)
  useEffect(()=>{
    changeState({
                  home: "nav-link link-dark",
                  registeration: "nav-link link-dark",
                  mykeys: "nav-link active",
                  digitalcertificate: "nav-link link-dark",
                  verify:"nav-link link-dark"
                });

  },[])
 
   function handleChange(e) {
     setUniqueId(e.target.value)
   }
   function handleSubmit(){
     navigate(`showkeys/${uniqueId}`)
    
}
  return (
    <div className="row">
      <div className="col-3">
        <Sidebar />
      </div>
      <div className="col-9">
        <h1
          style={{
            marginTop: "50px",
            marginBottom: "30px",
            textAlign: "center",
          }}
        >
          Enter your Unique ID to get your keys.
        </h1>
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
              name="fullName"
              value={uniqueId}
              className="form-control"
              id="validationDefault01"
              placeholder="ID"
              required
            />
            <div className="col-12 text-center mt-5">
              <button onClick={handleSubmit} className="btn btn-primary btn-lg">
                Get Keys
              </button>
            </div>
          </div>
        <br/>
      </div>
    </div>
  );
}

export default Mykeys;
