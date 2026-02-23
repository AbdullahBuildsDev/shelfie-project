import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router';


const About = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>About Page</Text>
            <Link href="/" style={styles.links}>Back Home</Link>
            
        </View>
    )
}

export default About

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontWeight: "bold",
        fontSize: 18,

    },
    links: {
        marginVertical: 10,
        borderBottomWidth: 2
    },
})