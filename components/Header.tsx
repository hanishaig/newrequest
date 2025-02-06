import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View>
        <View style={styles.viewone}>
              <Text style={styles.heading}>New Request</Text>
              <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Cancel clicked')}>
                <Text style={styles.buttonText}>X</Text>
              </TouchableOpacity>
            </View>
         <View style={styles.linebreak}></View>
    </View>
  ) 
  
}

const styles = StyleSheet.create({
    linebreak: {
        borderColor: '#000',
        borderBottomWidth: 2,
      },
      viewone: {
        flexDirection: 'row', 
        justifyContent: 'center',  
        alignItems: 'center',  
        width: '100%',
        paddingHorizontal: 10,
        position: 'relative', 
      },
      heading: {
        fontSize: 25,
        textAlign: 'center',
        paddingVertical: 10,
        flex: 1,  
      },
      buttonText: {
        fontSize: 15,
        color: 'black',
      },
      button: {
        position: 'absolute', 
        right: 10,  
      },
})