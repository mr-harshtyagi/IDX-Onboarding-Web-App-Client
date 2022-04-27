import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Form() {
  
  let navigate=useNavigate();
  const [data,setData]= useState({
    fullName:"",
    organisation:"",
    department:"",
    email:"",
    city:"",
    state:"",
    country:"",
    expiration:""
  })

  function handleChange(event){
    const {name,value} =event.target;
    setData(prevData =>
      {return {
      ...prevData,
      [name]:value}})
  }
   
  function handleSubmit(e){
      e.preventDefault();
      axios.post("http://localhost:5000/postdatatoserver", data)
      .then((response) =>{
        if(response.status === 200)
        {
          console.log(response.data);
          navigate("/formsubmitted")} 
    })
    .catch(error => {
      console.log(error)
    navigate("/error")})
  }


  return (
    <>
      <div
        style={{
          paddingLeft: "6%",
          paddingRight: "10%",
          paddingTop: "50px",
          paddingBottom: "50px",
        }}
        className="d-flex flex-column"
      >
        <h2>Please complete your Organisation Registration.</h2>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="col-md-12">
            <label htmlFor="validationDefault01" className="form-label">
              Hostname or your Full Name
            </label>
            <input
              type="text"
              onChange={handleChange}
              name="fullName"
              value={data.fullName}
              className="form-control"
              id="validationDefault01"
              placeholder="Full Name"
              required
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="validationDefault02" className="form-label">
              Organisation/Company
            </label>
            <input
              type="text"
              onChange={handleChange}
              name="organisation"
              value={data.organisation}
              className="form-control"
              id="validationDefault02"
              placeholder="BITS Pilani"
              required
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="formGroupExampleInput" className="form-label">
              Department
            </label>
            <input
              type="text"
              onChange={handleChange}
              name="department"
              value={data.department}
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Student Welfare Division"
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="formGroupExampleInput" className="form-label">
              Email
            </label>
            <input
              type="email"
              onChange={handleChange}
              name="email"
              value={data.email}
              className="form-control"
              id="formGroupExampleInput"
              placeholder="swd@goa.bits-pilani.ac.in"
              required
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="formGroupExampleInput" className="form-label">
              City/Local
            </label>
            <input
              type="text"
              onChange={handleChange}
              name="city"
              value={data.city}
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Sancoale"
              required
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="formGroupExampleInput" className="form-label">
              State
            </label>
            <input
              type="text"
              onChange={handleChange}
              name="state"
              value={data.state}
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Goa"
              required
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="autoSizingSelect" className="form-label">
              Country
            </label>
            <select
              className="form-select"
              id="autoSizingSelect"
              onChange={handleChange}
              name="country"
              value={data.country}
              required
            >
              <option disabled="" value="">
                Choose...
              </option>
              <option>India</option>
              <option>United States of America</option>
              <option>Russia</option>
              <option>Ukraine</option>
            </select>
          </div>
          <div className="col-md-12">
            <label htmlFor="autoSizingSelect" className="form-label">
              Expiration
            </label>
            <select
              className="form-select"
              id="autoSizingSelect"
              onChange={handleChange}
              name="expiration"
              value={data.expiration}
              required
            >
              <option disabled="" value="">
                Choose...
              </option>
              <option>1 yr</option>
              <option>2 yr</option>
              <option>5 yr</option>
              <option>10 yr</option>
            </select>
          </div>
          <div className="col-12 my-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue=""
                id="invalidCheck2"
                required
              />
              <label className="form-check-label" htmlFor="invalidCheck2">
                Agree to terms and conditions*
              </label>
            </div>
          </div>
          <br />
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-primary btn-lg">
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
}



