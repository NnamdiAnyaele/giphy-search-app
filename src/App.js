import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Search from "./pages/Search";
import Details from "./pages/Details";
import GifContextProvider from "./context/GifContext";
import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<Router>
			<div className="App">
				<ToastContainer />
				<GifContextProvider>
					<Switch>
						<Route path="/details" component={Details} />
						<Route path="/" component={Search} />
					</Switch>
				</GifContextProvider>
			</div>
		</Router>
	);
}

export default App;
