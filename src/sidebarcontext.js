import { createContext, useState } from "react";

const SidebarContext = createContext();
export function SidebarProvider({ children }) {
 const [isActive, setIsActive] = useState({
   home: "nav-link active",
   registeration: "nav-link link-dark",
   mykeys: "nav-link link-dark",
   digitalcertificate: "nav-link link-dark",
   verify:"nav-link link-dark"
 });

 function changeState(object){
     setIsActive(object)
 }


  return (
    <SidebarContext.Provider
      value={{ isActive,changeState }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export default SidebarContext;
