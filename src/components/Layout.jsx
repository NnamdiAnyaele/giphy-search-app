import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	backgroundColor: "#fff",
	color: "#304254",
	transition: theme.transitions.create(["width", "margin"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
}));

const Layout = () => {
	const [open, setOpen] = useState(true);
	const [value, setValue] = useState(0);
	const [innerWidth, setInnerWidth] = useState(window.innerWidth);

	const location = useLocation();
	useEffect(() => {
		function handleResize() {
			setInnerWidth(window.innerWidth);
			if (innerWidth < 960) {
				setOpen(false);
			} else {
				setOpen(true);
			}
		}

		window.addEventListener("resize", handleResize);
		return () => {
			window.addEventListener("resize", handleResize);
		};
	});

	useEffect(() => {
		if (innerWidth < 960) {
			setOpen(false);
		}
	}, [innerWidth]);

	useEffect(() => {
		if (location.pathname === "/stock-recommendation" && value !== 0) {
			setValue(0);
		}
	}, [value, location.pathname]);

	return (
		<>
			<AppBar
				position="fixed"
				open={open}
				sx={{
					paddingRight: "0 !important",
					"& .MuiPaper-root": {
						paddingRight: "0 !important",
					},
				}}
			>
				<Toolbar
					sx={{
						paddingRight: 0,
						"& .MuiPaper-root": {
							paddingRight: 0,
						},
					}}
				>
					<Typography
						sx={{ color: "#002564", fontWeight: 700 }}
						variant="p"
						component="div"
					>
						Giphy Search App
					</Typography>
					<Box sx={{ flexGrow: 1 }} />
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Layout;
