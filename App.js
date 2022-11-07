import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import CarList from "./assets/components/CarList/CarList";

import CarItem from "./assets/components/CarItem";
import Header from "./assets/components/Header/Header";

export default function App() {
	return (
		<View style={styles.container}>
			<Header />
			<CarList />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
