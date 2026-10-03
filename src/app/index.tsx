import { NavigationBar } from "expo-navigation-bar";
import { Text, View, StyleSheet } from "react-native";

import { DestaqueCard } from "@/components/cards/destaqueCard";

export default function Index(){
    return (
        <View style={styles.container}>
            <DestaqueCard />
            <NavigationBar style="light" />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});