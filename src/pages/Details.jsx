import { useContext, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Layout from "../components/Layout";
import DrawerHeader from "../components/DrawerHeader";
import { GifContext } from "../context/GifContext";

const BoxImageContainer = styled(Paper)(({ theme }) => ({
	height: "35rem",
	width: "35rem",
	[theme.breakpoints.down("md")]: {
		height: "20rem",
		width: "14rem",
	},
}));

const BoxImage = styled("img")({
	height: "100%",
	width: "100%",
});

const Details = () => {
	const { details } = useContext(GifContext);
	const history = useHistory();
	console.log(details);

	useEffect(() => {
		if (!details) {
			history.push("/");
		}
	}, [details, history]);

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<Layout />
			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<DrawerHeader />
				<Button component={Link} to="/">
					<HomeIcon /> <ArrowForwardIosIcon sx={{ fontSize: "0.8rem" }} /> 
				</Button>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<BoxImageContainer
						sx={{
							marginBottom: "0.3rem",
						}}
					>
						{details?.images?.original?.url && (
							<BoxImage src={details?.images?.original?.url} alt="gif image" />
						)}
						{!details?.images?.original?.url && (
							<Paper
								sx={{
									backgroundColor: "#C4C4C4",
									height: "100%",
									width: "100%",
								}}
								elevation={0}
							/>
						)}
					</BoxImageContainer>
					<Typography
						sx={{ color: "primary.main" }}
						variant="p"
						component="div"
					>
						<b>Title</b>: {details?.title}
					</Typography>
					<Typography
						sx={{ color: "primary.main" }}
						variant="p"
						component="div"
					>
						<b>Rating</b>: {details?.rating}
					</Typography>
					<Typography
						sx={{ color: "primary.main" }}
						variant="p"
						component="div"
					>
						<b>Slug</b>: {details?.slug}
					</Typography>
					<Typography
						sx={{ color: "primary.main" }}
						variant="p"
						component="div"
					>
						<b>Username</b>: {details?.username}
					</Typography>
					<Typography
						sx={{ color: "primary.main" }}
						variant="p"
						component="div"
					>
						<b>Source</b>: <a href={details?.source}>{details?.source}</a>
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default Details;
