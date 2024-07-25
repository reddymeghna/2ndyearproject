import { Route, Routes} from "react-router-dom";
import Home from "./Componenets/Home";
import Signup from "./Componenets/Sign";
import Login from "./Componenets/Login";
import Layout from "./Componenets/Layout";
import House from "./Componenets/House";
import About from "./Componenets/About";
import { Navigate } from "react-router-dom";

function App() {


	return (
		<Routes>
		<Route path="/layout" index element={<Layout />}/>	
		<Route path="/layout" element={<House />} />
          <Route path="/about" element={<About />} />
			
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/Home" element={<Home />} />
			{/* <Route path="/" element={<Navigate replace to="/login" />} /> */}
			<Route path="/" element={<Navigate replace to="/Layout" />} />
		</Routes>
	);
}

export default App;