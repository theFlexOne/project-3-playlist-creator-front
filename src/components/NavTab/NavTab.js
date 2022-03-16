import { Link } from "react-router-dom";
import StringHelper from "../../helpers/StringHelper";
import "./navTab.css";

const stripEndpoint = (endpoint) => {
  if (endpoint[0] === "/") {
    return endpoint.substr(1);
  }
  return endpoint;
};

const NavTab = ({ label, endpoint, ...other }) => {
  label = StringHelper.titleCase(label);
  endpoint = StringHelper.trimSlashes(endpoint);
  // endpoint = stripEndpoint(endpoint);

  console.log(`endpoint: `, endpoint);

  return (
    <Link
      className={`page-nav-tab nav-tab tab ${endpoint}`}
      to={endpoint}
      id={endpoint}
      {...other}
    >
      {label}
    </Link>
  );
};

export default NavTab;
