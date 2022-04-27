import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AllOrganisations() {
     let navigate = useNavigate();
    const [organisations, setOrganisations] =useState([]);
    const [isLoaded ,setIsLoaded]= useState(false);

     useEffect(() => {
          axios.get("http://localhost:5000/organisations")
      .then((response) =>{
        if(response.status === 200)
        {
            setOrganisations(response.data);
            setIsLoaded(true);
        } 
        })
      .catch(error => { 
          console.log(error)
          navigate("/error")
        })
      }
     , [navigate]);
  return (
    <div style={{ padding: "2%", textAlign: "center" }}>
      <h1>Data Table</h1>
      <div className="table-responsive">
        <table className="table table-dark table-hover table-striped ">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">ID</th>
              <th scope="col">Public Key</th>
              <th scope="col">Private Key</th>
              <th scope="col">Full Name</th>
              <th scope="col">Organisation</th>
              <th scope="col">Department</th>
              <th scope="col">E-mail</th>
              <th scope="col">City</th>
              <th scope="col">State</th>
              <th scope="col">Country</th>
              <th scope="col">Expiration</th>
              <th scope="col">Signature</th>
            </tr>
          </thead>
          <tbody>
            {organisations.map((organisation, index) =>
              isLoaded ? (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{organisation.id}</td>
                  <td>
                    {organisation.public_key.substring(0,0)}
                    <button className="btn btn-light">Show</button>
                  </td>
                  <td>
                    {organisation.private_key.substring(0,0)}
                   <button className="btn btn-light">Show</button>
                  </td>
                  <td>{organisation.details.fullName}</td>
                  <td>{organisation.details.organisation}</td>
                  <td>{organisation.details.department}</td>
                  <td>{organisation.details.email}</td>
                  <td>{organisation.details.city}</td>
                  <td>{organisation.details.state}</td>
                  <td>{organisation.details.country}</td>
                  <td>{organisation.details.expiration}</td>
                  <td>
                    {organisation.digital_signature.substring(0, 0)}
                    <button className="btn btn-light">Show</button>
                  </td>
                </tr>
              ) : (
                <>Loading ...</>
              )
            )}
          </tbody>
        </table>
      </div>
      <br />
      <Link to="/">
        <button className="btn btn-lg btn-primary"> Go to Homepage</button>
      </Link>
    </div>
  );
}
