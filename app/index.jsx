import { StyleSheet, Text } from "react-native";
import { Link } from "expo-router";

import Logo from "../assets/img/logo_light.png";

import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import ThemedText from "../components/ThemedText";
import Spacer from "../components/Spacer";

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo style={styles.img} />
      <Spacer height={40} />

      <ThemedText style={styles.title} title={true}>
        The Number 1
      </ThemedText>

      <ThemedText style={{ marginTop: 5, marginBottom: 12 }}>
        Reading List App
      </ThemedText>
      <Link href="/login" style={styles.links}>
        <ThemedText>Login Page</ThemedText>
      </Link>
      <Link href="/register" style={styles.links}>
        <ThemedText>Register Page</ThemedText>
      </Link>
      <Link href="/profile" style={styles.links}>
        <ThemedText>Profile Page</ThemedText>
      </Link>
    
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    // we can also add our content in like we do in regular css means Inline Css above.
  },

  img: {
    width: 140, // Aap apni marzi se chota bara kar sakte hain
    height: 150,
    marginBottom: 12,
  },
  links: {
    marginVertical: 10,
    borderBottomWidth: 2,
  },
});
