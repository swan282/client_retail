import { Text, View, Button, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native";
import { useState } from "react";
function OTP() {

  const [number, setNumber] = useState('');
  const [otp, setOtp] = useState(false);

  const handleNumber = (text: string) => {
    setNumber(text);
  }

  const handlePress = () => {
    if(number.length === 10) setOtp(true);
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
      <Text style={{ fontSize: 20, marginTop: -20, marginBottom: 30  }}>Style . With . Your . Nearest . Artist</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Your Phone Number"
        value={number}
        onChangeText={handleNumber}
      />
      {
        otp && (
          <TextInput
            style={styles.inputOTP}
            placeholder="Enter OTP"
          />
        ) 
      }

      <TouchableOpacity onPress={handlePress} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>GET OTP</Text>
      </TouchableOpacity>
    </View>
  )
}

export default OTP

const styles = StyleSheet.create({
  logo: {
    width: 200, // Adjust the width of the logo
    height: 200, // Adjust the height of the logo
  },
  buttonContainer: {
    marginTop: 10,
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
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#577B8D',
    paddingHorizontal: 10, // Add padding to the left and right of the input text
    borderRadius: 6,
  },
  inputOTP: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    marginTop: 15,
    borderColor: '#577B8D',
    paddingHorizontal: 10, // Add padding to the left and right of the input text
    borderRadius: 6,
  },
})
