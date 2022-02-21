import React, { useState, createContext } from "react";

export const GifContext = createContext({});

const GifContextProvider = (props) => {
	const [details, setDetails] = useState(null);

	const values = {
		details,
		setDetails,
	};

	return (
		<GifContext.Provider value={values}>{props.children}</GifContext.Provider>
	);
};

export default GifContextProvider;
