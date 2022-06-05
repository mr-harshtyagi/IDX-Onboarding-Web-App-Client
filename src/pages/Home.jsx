import Sidebar from "../components/sidebar";

function Home() {
  return (
    <div className="row">
      <div className="col-3">
        <Sidebar />
      </div>
      <div className="col-9">
        <h1 className="">This is Homepage of Identrix.</h1>
       
        
      </div>
    </div>
  );
}

export default Home;
