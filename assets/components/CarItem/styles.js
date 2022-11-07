import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
	carContainer: {
		height: Dimensions.get("screen").height,
		width: "100%",
	},

	titles: {
		marginTop: "30%",
		alignItems: "center",
	},

	title: {
		fontSize: 40,
		fontWeight: "500",
	},

	subTitle: {
		fontSize: 16,
		color: "#5c5e62",
	},

	subTitleCTA: {
		textDecorationLine: "underline",
		fontWeight: "bold",
	},

	image: {
		height: "100%",
		width: "100%",
		position: "absolute",
	},

	buttonContainer: {
		position: "absolute",
		bottom: 50,
		width: "100%",
	},
});
export default styles;
