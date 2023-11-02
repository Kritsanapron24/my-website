import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, StatusBar, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { Entypo, Octicons, AntDesign } from '@expo/vector-icons';
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const navigation = useNavigation();


  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ flex: 1 }}>
          <Ionicons name="arrow-back-outline" size={28} color="#45474B" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Profile</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ flex: 1, alignItems: 'flex-end' }}>
          <Ionicons name="exit-outline" size={28} color="#45474B" />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, backgroundColor: 'F2F2F2', }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 20, }}>
          <Image source={{ uri: 'https://i.pinimg.com/564x/22/b0/6e/22b06e703e980b0811a2879ed76faf32.jpg' }} style={{ width: 100, height: 100, borderRadius: 50, borderWidth: 4, borderColor: 'white' }} />
          <View>
            <Text style={{ fontWeight: '400', fontSize: 24, marginLeft: 10, marginTop: 10 }}>Liz</Text>
            <Text style={{ fontSize: 16, marginLeft: 10, color: 'gray',fontFamily:'NotoSansThai-Regular', }}>b650XXXX@g.sut.ac.th</Text>
          </View>
        </View>
      </View>
      <ScrollView>


        <View style={{ flex: 8, marginRight: 10, marginLeft: 10, marginTop: 80 }}>

          <View style={styles.sectionContainer}>


            <View style={{ marginLeft: 20, }}>
              <Text style={{ fontWeight: '200', fontWeight: 'bold', fontSize: 18, color: '#45474B',fontFamily:'NotoSansThai-Regular', }}>My orders</Text>

              <Text style={{ fontWeight: '300', fontSize: 16, marginTop: 10, color: 'gray',fontFamily:'NotoSansThai-Regular', }}>Already have 5 orders</Text>
            </View>
          </View>
          <View style={styles.sectionContainer}>

            <View style={{ marginLeft: 20, }}>
              <Text style={{ fontWeight: '200', fontWeight: 'bold', fontSize: 18, color: '#45474B',fontFamily:'NotoSansThai-Regular', }}>Shipping Addresses</Text>

              <Text style={{ fontWeight: '300', fontSize: 16, marginTop: 10, color: 'gray',fontFamily:'NotoSansThai-Regular', }}>03 Addresses</Text>
            </View>
          </View>

          <View style={styles.sectionContainer}>

            <View style={{ marginLeft: 20, }}>
              <Text style={{ fontWeight: '200', fontWeight: 'bold', fontSize: 18, color: '#45474B',fontFamily:'NotoSansThai-Regular', }}>Payment</Text>

              <Text style={{ fontWeight: '300', fontSize: 16, marginTop: 10, color: 'gray',fontFamily:'NotoSansThai-Regular', }}>You have 2 cards</Text>
            </View>
          </View>

          <View style={styles.sectionContainer}>

            <View style={{ marginLeft: 20, }}>
              <Text style={{ fontWeight: '200', fontWeight: 'bold', fontSize: 18, color: '#45474B',fontFamily:'NotoSansThai-Regular', }}>My reviews</Text>

              <Text style={{ fontWeight: '300', fontSize: 16, marginTop: 10, color: 'gray',fontFamily:'NotoSansThai-Regular', }}>Reviews for 5 items</Text>
            </View>
          </View>


          <View style={styles.sectionContainer}>

            <View style={{ marginLeft: 20, }}>
              <Text style={{ fontWeight: '200', fontWeight: 'bold', fontSize: 18, color: '#45474B',fontFamily:'NotoSansThai-Regular', }}>Setting</Text>

              <Text style={{ fontWeight: '300', fontSize: 16, marginTop: 10, color: 'gray' ,fontFamily:'NotoSansThai-Regular',}}>Notification, Password, FAQ, Contact</Text>
            </View>
          </View>
        </View>

      </ScrollView>
      <View>
        <Text style={{ marginTop: 20, }}>Setting</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: '#F5F7F8',
    padding: 6,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    borderRadius: 0,
    borderWidth: 5,
    borderColor: 'white',
    marginTop: 6,
    borderRadius: 35
  },
  subSectionContainer: {
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',

  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#F2F2F2',
    marginTop: 24,
  },
  headerText: {
    fontSize: 22,
  },
});