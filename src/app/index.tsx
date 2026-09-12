import { NavigationBar } from "expo-navigation-bar";
import { Text, View, StyleSheet } from "react-native";

export default function Index(){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Notice that the navigation bar has light buttons</Text>
            <NavigationBar style="light" />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
});