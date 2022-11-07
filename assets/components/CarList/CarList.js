import React from "react";
import { FlatList, View, Dimensions } from "react-native";

import CarItem from "../CarItem";
import styles from "./styles";
import cars from "./cars";

function CarList(props) {
	return (
		<View style={styles.container}>
			<FlatList
				data={cars}
				renderItem={({ item }) => <CarItem car={item} />}
				snapToAlignment={"start"}
				decelerationRate={"fast"}
				showsVerticalScrollIndicator={false}
				snapToInterval={Dimensions.get("screen").height}
			/>
		</View>
	);
}

export default CarList;
