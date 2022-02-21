import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Layout from "../components/Layout";
import DrawerHeader from "../components/DrawerHeader";
import BannerContainer from "../components/BannerContainer";
import searchGif from "../services/giphyService";
import { GifContext } from "../context/GifContext";

const Search = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const [loading, setLoading] = useState(false);

	const { setDetails } = useContext(GifContext);
	const history = useHistory();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!searchTerm) {
			toast.error("Please enter a phrase to search");
			return;
		}
		try {
			setLoading(true);
			const { data } = await searchGif(searchTerm);
			setSearchResults(data);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			if (error.response) {
				toast.error(error.response.data.message);
			} else if (error.request) {
				toast.error("Internal Server Error");
			} else {
				toast.error("Error", error.message);
			}
		}
	};
	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<Layout />
			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<DrawerHeader />
				<Box
					component="form"
					sx={{
						"& > :not(style)": { m: 1, width: "50ch" },
						display: "flex",
						justifyContent: "center",
					}}
					noValidate
					autoComplete="off"
				>
					<TextField
						id="search"
						label="Search some gifs!"
						variant="outlined"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
					<Button
						sx={{ width: "25ch" }}
						onClick={handleSubmit}
						variant="contained"
					>
						Search
					</Button>
				</Box>
				{loading && (
					<Box
						sx={{
							width: "100%",
							display: "flex",
							justifyContent: "center",
							marginTop: "5rem",
						}}
					>
						<CircularProgress size="3rem" />
					</Box>
				)}
				<Box
					sx={{
						display: "flex",
						flexWrap: "wrap",
						justifyContent: {
							sm: "center",
							xs: "center",
						},
						marginBottom: "2rem",
						marginTop: "3rem",
					}}
				>
					{!loading &&
						searchResults.map((item) => (
							<Box
								key={item.id}
								sx={{ textDecoration: "none" }}
								onClick={() => {
									setDetails(item);
									history.push("/details");
								}}
							>
								<BannerContainer
									image={item.images.original.url || ""}
									text={item.title}
								/>
							</Box>
						))}

					{!loading && searchResults.length < 1 && (
						<Box
							sx={{
								width: "100%",
								display: "flex",
								justifyContent: "center",
								marginTop: "5rem",
							}}
						>
							<p>No gif matches your search</p>
						</Box>
					)}
				</Box>
			</Box>
		</Box>
	);
};

export default Search;
