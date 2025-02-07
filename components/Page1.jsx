import { Alert, StyleSheet, Text, View, Keyboard, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './Header';
import Footer from './Footer';
import { TextInput, Button } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker'; 
import GlobalStyles from '../styles';
import Imager from './Imager';

export default function App() {
  const [comment, setComment] = useState('');
  
  // State for the Floor dropdown
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(
    // Create an array of floor items from 1 to 10
    Array.from({ length: 10 }, (_, i) => ({
      label: `Floor ${i + 1}`,
      value: `Floor ${i + 1}`
    }))
  );
  
  // State for the Location dropdown
  const [locationOpen, setLocationOpen] = useState(false);
  const [locationValue, setLocationValue] = useState(null);
  const [locationItems, setLocationItems] = useState(
    // Create an array of location items from 1 to 10
    Array.from({ length: 10 }, (_, i) => ({
      label: `Location ${i + 1}`,
      value: `Location ${i + 1}`
    }))
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
      <SafeAreaView style={styles.container}>
        <Header />
        <View style={[styles.viewtwo, GlobalStyles.bordermargins]}>
          <Text style={GlobalStyles.textsize}>Question</Text>
          <Text style={GlobalStyles.textsize}>Previous Question</Text>
          <Text style={[GlobalStyles.textsize, styles.margintop]}>
            Write your comments here
          </Text>
          <View style={styles.contained}>
            <TextInput
              label="Type Something"
              value={comment}
              onChangeText={setComment}
              multiline
              style={[styles.commentBox, { backgroundColor: 'white' }]}
            />
          </View>
          
          {/* Floor Dropdown */}
          <Text style={[GlobalStyles.textsize, GlobalStyles.diffmargin]}>
            Floor *
          </Text>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            searchable={true} 
            placeholder="Select Floor"
            containerStyle={styles.dropdownContainer}
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownList}
          />

          {/* Location Dropdown */}
          <Text style={[GlobalStyles.textsize, GlobalStyles.diffmargin, { marginTop: 15 }]}>
            Location *
          </Text>
          <DropDownPicker
            open={locationOpen}
            value={locationValue}
            items={locationItems}
            setOpen={setLocationOpen}
            setValue={setLocationValue}
            setItems={setLocationItems}
            // searchable={true} 
            placeholder="Select Location"
            containerStyle={styles.dropdownContainer}
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownList}
          />
        
        <View>

        </View>
            <Text style={[GlobalStyles.textsize,GlobalStyles.diffmargin]}>Attach Image</Text>
            <Imager/>
        </View>
        
        <Footer />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  viewtwo: {
    flex: 1,
    padding: 10,
  },
  margintop: {
    marginTop: 25,
    marginBottom: 5,
  },
  contained: {
    paddingHorizontal: 3,
  },
  commentBox: {
    height: 120,
    width: '100%',
  },

  dropdownContainer: {
    width: '100%',
    marginTop: 10,
  },
  dropdown: {
    borderColor: 'white', 
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: 'white',
  },

  dropdownList: {
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
  },
});
