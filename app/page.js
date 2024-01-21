"use client";

import Main from "@/src/main";
import { Provider } from "react-redux";
import store from "../src/redux/store";

function Home() {
	return (
		<Provider store={store}>
			<Main />
		</Provider>
	);
}
export default Home;
