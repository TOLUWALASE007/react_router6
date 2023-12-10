
import { Outlet} from "react-router-dom";
import StyledNavbar from "../components/StyledNavbar";

const Home = () => {
  return (
    <>
        <h2>Product</h2>
       <Outlet />
    </>
    
  );
};
export default Home;
