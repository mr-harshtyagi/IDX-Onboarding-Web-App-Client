import { Link } from "react-router-dom";
export default function Error() {
  return (
    <div style={{ padding: "10%" }}>
      <h1>OOPS!!! 404 ERROR</h1>
      <h1>Error while communicating with server.</h1>
      <Link to="/">
        <button className="btn btn-primary"> Go to Home</button>
      </Link>
    </div>
  );
}
