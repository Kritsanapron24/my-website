import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Product = () => {
  const [heartClicked, setHeartClicked] = useState(false);

  const handleHeartClick = () => {
    setHeartClicked(!heartClicked);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://static.wikia.nocookie.net/digitousailorcure/images/0/09/Anya_forger.png/revision/latest?cb=20221019014231",
          }}
          style={styles.headerImage}
          resizeMode="cover"
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.profileName}>eieieiei</Text>
        <Text style={styles.price}>$259.99</Text>
        <View style={styles.iconContainer}>
          <Text style={styles.contactInfo}>eieieiei</Text>
        </View>
        <View style={styles.type}>
          <View style={styles.typebox}>
            <Text style={styles.typetext}>eiei8</Text>
          </View>
          <View style={styles.typebox}>
            <Text style={styles.typetext}>eiei8.5</Text>
          </View>
          <View style={styles.typebox}>
            <Text style={styles.typetext}>eiei9</Text>
          </View>
          <View style={styles.typebox}>
            <Text style={styles.typetext}>eiei9.5</Text>
          </View>
          <View style={styles.typebox}>
            <Text style={styles.typetext}>eiei10</Text>
          </View>
        </View>
        <View style={styles.detail}>
          <Text style={styles.textdetail}>
          eieieieieieiei
          </Text>
        </View>

       
        <View style={styles.rowContainer}>
          <TouchableOpacity onPress={handleHeartClick} style={styles.heartIcon}>
            <Ionicons
              name={heartClicked ? "heart" : "heart"}
              size={40}
              color={heartClicked ? "red" : "grey"}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.AddButton}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    paddingTop: 20,
    padding: 10,
  },
  profileName: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    color:'red',
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactInfo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'grey',
  },
  type: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  typebox: {
    backgroundColor: "white",
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
    borderRadius: 9,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 15,
  },
  detail: {
    marginTop: 20,
  },
  textdetail: {
    fontSize: 16,
  },
  
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    paddingHorizontal: 0,
  },
  heartIcon: {
    color:'red',
    borderRadius: 50,
    paddingVertical:10,
    marginRight:10,

  },
  AddButton: {
  backgroundColor: 'lightgreen',
  paddingVertical: 10,
  borderRadius: 50,
  flex: 1, 
},
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    
  },
});

export default Product;
