import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";

const Contact = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.text}>Contact Page</ThemedText>
      <Link href="/" style={styles.links}>
        <ThemedText> Back Home</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
  },
  links: {
    marginVertical: 10,
    borderBottomWidth: 2,
  },
});
