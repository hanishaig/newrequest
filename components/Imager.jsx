import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Modal, Image, Alert, StyleSheet } from 'react-native';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Imager = ({ onImageSelect }) => {
  const [imageUri, setImageUri] = useState(null);
  const [showImageOptions, setShowImageOptions] = useState(false);

  const handlePickImage = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) {
        console.log('User canceled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        setImageUri(response.assets[0].uri);
        setShowImageOptions(false);
        onImageSelect(response.assets); 
      }
    });
  };

  const handleTakePhoto = () => {
    launchCamera({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) {
        console.log('User canceled camera');
      } else if (response.errorCode) {
        console.log('Camera Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        setImageUri(response.assets[0].uri);
        setShowImageOptions(false);
        onImageSelect(response.assets);
      }
    });
  };

  return (
    <View style={[styles.container, styles.imagebtn]}>
      <TouchableOpacity onPress={() => setShowImageOptions(true)} style={styles.button}>
        <Text style={styles.buttonText}>Select Image</Text>
      </TouchableOpacity>

      {imageUri && (
        <View style={styles.imageContainer}>
          <Image source={{ uri: imageUri }} style={styles.image} />
        </View>
      )}

      <Modal transparent visible={showImageOptions} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={handlePickImage} style={styles.modalOption}>
              <Icon name="photo-library" size={24} color="gray" style={styles.icon} />
              <Text>Choose from Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleTakePhoto} style={styles.modalOption}>
              <Icon name="camera" size={24} color="gray" style={styles.icon} />
              <Text>Take a Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowImageOptions(false)} style={styles.cancelOption}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  imageContainer: {
    marginTop: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  imagebtn: {
    height: 90,
    width: '100%',
  },
  button: {
    width: '80%',
    paddingVertical: 15,
    borderRadius: 5,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    width: '80%',
  },
  modalOption: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  cancelOption: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  cancelText: {
    color: 'red',
  },
});

export default Imager;
