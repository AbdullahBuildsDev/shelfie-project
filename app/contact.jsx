import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router';


const Contact = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Contact Page</Text>
            <Link href="/" style={styles.links}>Back Home</Link>
        </View>
    )
}

export default Contact

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