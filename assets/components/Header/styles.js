import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		zIndex: 1,
		width: "100%",
		top: 50,
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 20,
	},
	logo: {
		height: 20,
		width: 100,
		resizeMode: "contain",
	},
	menu: {
		height: 25,
		width: 25,
		resizeMode: "contain",
	},
});
export default styles;
