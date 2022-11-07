import React from "react";
import { View, Text, ImageBackground } from "react-native";

import styles from "./styles";
import StyledButton from "../StyledButton/StyledButton";

function CarItem(props) {
	const { name, tagline, taglineCTA, image } = props.car;

	return (
		<View style={styles.carContainer}>
			<ImageBackground style={styles.image} source={image} />
			<View style={styles.titles}>
				<Text style={styles.title}>{name}</Text>
				<Text style={styles.subTitle}>
					{tagline} <Text style={styles.subTitleCTA}>{taglineCTA}</Text>
				</Text>
			</View>

			<View style={styles.buttonContainer}>
				<StyledButton
					type="primary"
					content="CUSTOM ORDER"
					onPress={() => console.warn("Custom Order button pressed")}
				/>
				<StyledButton
					type="secondary"
					content="EXISTING ORDER"
					onPress={() => console.warn("Existing Order button pressed")}
				/>
			</View>
		</View>
	);
}

export default CarItem;
