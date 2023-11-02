import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Product17 = () => {
  const [heartClicked, setHeartClicked] = useState(false);
  const navigation = useNavigation(); 

  const handleHeartClick = () => {
    setHeartClicked(!heartClicked);
  };

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="arrow-back-outline"
            size={30}
            color="dimgray"
            style={{
              padding: 3,
              marginTop: 15,
            }}
          />
        </TouchableOpacity>
        
      </View>
      <View style={styles.header}>
      <Image source={{ uri: "https://storage.naiin.com/system/application/bookstore/resource/product/202306/582545/1000262035_front_XXL.jpg?imgname=ผมจะเฝ้ารอฆาตกรที่ร้านหนังสือแห่งความทรงจำ-", }}
            style={{ width: 200, height: 310, borderRadius: 10,borderColor: 'white',
            borderWidth: 3,}} />
      </View>

      <View style={styles.content}>
        <Text style={styles.profileName}>ผมจะเฝ้ารอฆาตกรที่ร้านหนังสือ</Text>
        <Text style={styles.price}>฿210.75</Text>
        <View style={styles.type}>
          <View style={styles.typebox}>
            <Text style={styles.typetext}>ปกแข็ง</Text>
          </View>
          <View style={styles.typebox}>
            <Text style={styles.typetext}>ปกอ่อน</Text>
          </View>
          <View style={styles.typebox}>
            <Text style={styles.typetext}>มือ 1</Text>
          </View>
          <View style={styles.typebox}>
            <Text style={styles.typetext}>มือ 2</Text>
          </View>
        </View>
        <View style={styles.detail}>
          <Text style={styles.textdetail}>
          ความทรงจำเกี่ยวกับหนังสือไม่ได้สวยงามเสมอไป...จริงหรือ
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
    justifyContent: 'center',
    alignItems: 'center',

  },
  content: {
    flex: 1,
    paddingTop: 20,
    padding: 10,
  },
  profileName: {
    fontSize: 19,
    
    marginBottom: 10,
    fontFamily: 'NotoSansThai-Regular',
  },
  price: {
    color: 'red',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    fontFamily: 'NotoSansThai-Regular',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactInfo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'grey',
    fontFamily: 'NotoSansThai-Regular',
  },
  type: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 5,
  },
  typebox: {
    backgroundColor: "#F5EEC8",
    borderColor: 'white',
    borderWidth: 3,
    padding: 5,
    borderRadius: 100,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5,
    height: 40
    
  },
  detail: {
    margin: 15,
    width:350,
    height:75,
  },
  textdetail: {
    fontSize: 16.5,
    fontFamily: 'NotoSansThai-Regular',
  },

  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    paddingHorizontal: 0,
  },
  heartIcon: {
    color: 'red',
    borderRadius: 50,
    paddingVertical: 10,
    marginRight: 10,


  },
  AddButton: {
    backgroundColor: '#2E4374',
    paddingVertical: 10,
    borderRadius: 50,
    flex: 1,
    width:350,
    height:55,
    borderWidth:2.5,
    borderColor:'white'

  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop:1.2,
    
  },
  typetext: {
    fontFamily: 'NotoSansThai-Regular',
    color: 'dimgray',
    marginTop: 3
    
  },
});

export default Product17;