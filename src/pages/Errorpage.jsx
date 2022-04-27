import Sidebar from "../components/sidebar";
import Error from "../components/error";

function Errorpage() {
  return (
    <div className="row">
      <div className="col col-3">
        <Sidebar />
      </div>
      <div className="col col-9">
        <Error />
      </div>
    </div>
  );
}

export default Errorpage;
