import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Profile = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 3, marginRight: 10, marginLeft: 10 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>


        </View>

        <View style={{
          flex: 1, justifyContent: 'center',
          alignItems: 'center',marginTop:80,
        }}>
          <Image source={{ uri: 'https://somoskudasai.com/wp-content/uploads/2022/04/portada_spy-x-family-42.jpg' }}
            style={{ width: 90, height: 90, marginBottom: 10, borderRadius: 50, }} />
          <View style={{justifyContent: 'center',alignItems:'center' }}>
            <Text style={{ fontWeight: '300',fontSize: 20, }}>Hi, eieieieieiei</Text>
            <Text style={{ fontWeight: '600',  }}>eieieieieieieieieieieieieieieiei</Text>
          </View>
        </View>





      </View>
      <View style={{ flex: 7, marginRight: 10, marginLeft: 10 }}>
    <View style={{ flex: 7, marginRight: 10, marginLeft: 10, marginTop: 250 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center'}}>
        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/126/126472.png' }}
          style={{ width: 30, height: 30, borderRadius: 50, marginRight: 10 }} />
        <Text style={{ fontWeight: '600', fontSize: 15 }}>Settings</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' ,marginTop:8}}>
        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2344/2344684.png' }}
          style={{ width: 30, height: 30, borderRadius: 50, marginRight: 10 }} />
        <Text style={{ fontWeight: '600', fontSize: 15 }}>Help</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center',marginTop:10 }}>
        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/152/152534.png' }}
          style={{ width: 30, height: 30, borderRadius: 50, marginRight: 10 ,}} />
        <Text style={{ fontWeight: '600', fontSize: 15 }}>Logout</Text>
      </View>
    </View>
  </View>
    </View>
  );
};

const styles = StyleSheet.create({
 
  Digitech: {
    fontSize: 29,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  dgt:{
    fontSize:18,
    textAlign: 'center',

  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  Text:{
    fontSize:20,
  }
});

export default Profile;
