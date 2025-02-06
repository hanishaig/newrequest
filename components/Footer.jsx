import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';  


export default function Footer({onNext}) {
  return (
        <View style={styles.footer}>
            <TouchableOpacity style={styles.footerButton}
            onPress={()=>
            Alert.alert('Next Clicked')}
            >
                <Icon name="arrow-back" size={20} color="white" />
                <Text style={styles.footerText} >Next</Text>
            </TouchableOpacity>
        </View>
  )
}

const styles = StyleSheet.create({
    footer: {
        height: '6%', 
        backgroundColor: '#808080', 
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'absolute',  
        bottom: 0,  
        width: '100%',  
        paddingHorizontal: 20,
      },
      footerButton: {
        flexDirection: 'row',  
        alignItems: 'center',
        marginLeft: 'auto',
        gap: 3,
      },
      footerText: {
        fontSize: 18,
        color: 'white',
      },
})