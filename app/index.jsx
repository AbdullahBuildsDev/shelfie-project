import { StyleSheet, Text, View, Image } from 'react-native';
import {Link} from 'expo-router'

import Logo from '../assets/img/logo_light.png'

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.img}  />
      <Text style={styles.title} >The Number 1</Text>


      <Text style={{ marginTop: 5,marginBottom:12 }}>
        Reading List App
      </Text>
<Link href="/about" style={styles.links}> About Page</Link>
<Link href="/contact" style={styles.links}> Contact Page</Link>

    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    // we can also add our content in like we do in regular css means Inline Css above.
  },

  img:{
    width: 140,   // Aap apni marzi se chota bara kar sakte hain
    height: 150,
    marginBottom: 12,
  },
  links:{
marginVertical: 10,
borderBottomWidth:2
  }

})