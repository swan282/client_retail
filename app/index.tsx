import { Text, View, Button, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Index() {

  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('OTP'); // Navigate to SecondScreen when button is pressed
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={require('../assets/images/png_logo_2.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Welcome To </Text>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Swan Retail App</Text>
      <TouchableOpacity onPress={handlePress} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Let's Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 200, // Adjust the width of the logo
    height: 200, // Adjust the height of the logo
  },
  buttonContainer: {
    marginTop: 50,
    height: 50,
    width: '80%', // Adjust width as needed
    backgroundColor: 'black', // Background color of the button
    borderRadius: 6, // Border radius to make the button slightly rounded
    justifyContent: 'center',
    alignItems: 'center', // Center the content horizontally and vertically
    overflow: 'hidden'
  },
  
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
})
