import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const BoxImageContainer = styled(Paper)(({ theme }) => ({
	height: "14rem",
	width: "19rem",
	[theme.breakpoints.down("md")]: {
		height: "10rem",
		width: "14rem",
	},
}));

const BoxImage = styled("img")({
	height: "100%",
	width: "100%",
});

const BannerContainer = ({ image, text }) => {
	return (
		<Box
			sx={{
				marginBottom: "0.5rem",
				marginRight: "1rem",
			}}
		>
			<BoxImageContainer
				sx={{
					marginBottom: "0.3rem",
				}}
			>
				{image && <BoxImage src={image} alt="gif image" />}
				{!image && (
					<Paper
						sx={{ backgroundColor: "#C4C4C4", height: "100%", width: "100%" }}
						elevation={0}
					/>
				)}
			</BoxImageContainer>
			<Typography sx={{ color: "primary.main" }} variant="p" component="div">
				{text || ""}
			</Typography>
		</Box>
	);
};

export default BannerContainer;
