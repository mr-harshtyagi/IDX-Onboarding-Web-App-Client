import Sidebar from "../components/sidebar";
import Form from "../components/Form";
import { useContext, useEffect } from "react";
import SidebarContext from "../sidebarcontext";
function Registeration() {

  const {changeState} =useContext(SidebarContext)
  useEffect(()=>{
    changeState({
                  home: "nav-link link-dark",
                  registeration: "nav-link active",
                  mykeys: "nav-link link-dark",
                  digitalcertificate: "nav-link link-dark",
                  verify:"nav-link link-dark"
                });

  },[]);
  return (
    <div className="row">
      <div className="col-3">
        <Sidebar />
      </div>
      <div className="col-9">
        <Form />
      </div>
    </div>
  );
}

export default Registeration;
