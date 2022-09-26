import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/normalize.css";
import "./styles/app.min.css";
import App from "./App";
import { store } from "./store/reducers";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(
	<Provider store={store}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>
);
