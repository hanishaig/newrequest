
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function Question() {
  // List of options
  const options = Array.from({ length: 10 }, (_, i) => `Option ${i + 1}`);
  
  // State to store the input text
  const [searchText, setSearchText] = useState('');
  
  // Filter options based on the input text
  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchText.toLowerCase())
  );

  // Handle selecting an option
  const handleOptionSelect = (option:string) => {
    setSearchText(option);  // Set the selected option as the input text
  };

  return (
    <View style={styles.questionview}>
      <Text style={styles.question}>Question</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Type 3 or more characters to filter options"
        value={searchText}
        onChangeText={text => setSearchText(text)} // Update state as the user types
      />
      
      {/* Show options only if there is input or matching options */}
      {searchText.length > 0 && (
        <ScrollView style={styles.optionsContainer}>
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.optionContainer}
                onPress={() => handleOptionSelect(option)} // Set option as input on click
              >
                <Text style={styles.optionText}>
                  {option}
                </Text>
              </TouchableOpacity>
            ))
          ) : (
            <Text style={styles.noOptionsText}>No matching options</Text>
          )}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  question: {
    fontSize: 20,
  },
  questionview: {
    marginLeft: 15,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginTop: 5,
    width: '90%',
    fontSize: 15,
  },
  optionsContainer: {
    marginTop: 15,
    width: '90%',
  },
  optionContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#f2f2f2',
    marginVertical: 3,
    borderRadius: 5,
  },
  optionText: {
    fontSize: 16,
  },
  noOptionsText: {
    fontSize: 16,
    color: 'gray',
    paddingVertical: 5,
  },
});