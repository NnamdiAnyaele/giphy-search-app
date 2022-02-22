/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-unnecessary-act */
import React from "react";
import ReactTestUtils from "react-dom/test-utils";
import { act, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import faker from "faker";
import Search from "./pages/Search";
import searchGif from "./services/giphyService";

jest.mock("./services/giphyService");

describe("Search Component", () => {
	test("for search input", () => {
		act(() => {
			render(
				<Router>
					<Search />
				</Router>
			);
		});

		//  Enter search term
		act(() => {
			const searchBox = document.querySelector("#search");
			searchBox.value = "test";
			ReactTestUtils.Simulate.change(searchBox);
		});

		const searchBox = document.querySelector("#search");
		expect(searchBox.value).toBe("test");
	});
});
