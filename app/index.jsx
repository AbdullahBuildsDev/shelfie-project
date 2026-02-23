import { StyleSheet, Text, View, Image } from 'react-native';
import Logo from '../assets/img/logo_light.png'

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.img}  />
      <Text style={styles.title} >The Number 1</Text>


      <Text style={{ marginTop: 12 }}>
        Reading List App
      </Text>

      <View>
        <Text style={styles.card}> Hello,This is card</Text>

      </View>

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
  card: {
    backgroundColor: '#eee',
    padding: 20,
    borderRadius: 5,
    boxShadow: '4px,4px,rgba(0,0,0,0.1)',
    marginTop:12,
  },
  img:{
    width: 140,   // Aap apni marzi se chota bara kar sakte hain
    height: 150,
    marginBottom: 12,
  }

})