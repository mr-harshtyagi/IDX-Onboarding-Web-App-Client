import Sidebar from "../components/sidebar";
import Submitted from "../components/form-submitted";

function Formsubmitted() {
  return (
    <div className="row">
      <div className="col col-3">
        <Sidebar />
      </div>
      <div className="col col-9">
        <Submitted />
      </div>
    </div>
  );
}

export default Formsubmitted;
