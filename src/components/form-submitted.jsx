
export default function Submitted() {
  function getDigitalCertificate(){
    console.log("Here is your Digital Certificate");
  }
  function getCSR() {
    console.log("Here is your Certificate Signing Request");
  }


  return (
    <div style={{ padding: "10%", textAlign: "center" }}>
      <h1>You have been registered successfuly!!!</h1>
      <button onClick={getDigitalCertificate} className="btn btn-primary"> Get your Digital Certificate</button>
      <br/>
      <br/>
      <button onClick={getCSR} className="btn btn-primary"> Get CSR</button>
    </div>
  );
}
