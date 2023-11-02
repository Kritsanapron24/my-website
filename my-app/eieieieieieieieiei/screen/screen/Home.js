import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";  // เพิ่ม//

const ProductItem = ({ imageUri, productName }) => {
  const [heartClicked, setHeartClicked] = useState(false);

  const handleHeartClick = () => {
    setHeartClicked(!heartClicked);
  };

  return (
    <View style={styles.productContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.productImage}
          source={{
            uri: imageUri,
          }}
        />
        <TouchableOpacity onPress={handleHeartClick} style={styles.heartIcon}>
          <Ionicons
            name={heartClicked ? "heart" : "heart-outline"}
            size={24}
            color={heartClicked ? "red" : "black"}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.productText}>{productName}</Text>
      <Text style={styles.productPrice}>$259.99</Text>
    </View>
  );
};

export default function Home  () {  
  const [heartClicked, setHeartClicked] = useState(false);
  const navigation = useNavigation();  

  const handleProductPress = () => {  
    navigation.navigate("Product");
  };

  const handleHeartClick = () => {  
    setHeartClicked(!heartClicked);
  };

  const productImages = [
    "https://img.th.my-best.com/product_images/8287139ff34aa2acfb91b6334d8d5b42.jpg?ixlib=rails-4.3.1&q=70&lossless=0&w=640&h=640&fit=clip&s=1330242f6cdcd51bac1507ce00c33744",
    "https://img.th.my-best.com/product_images/c8aaf4fe06d2bd1496e0497d3ade7fed.png?ixlib=rails-4.3.1&q=70&lossless=0&w=640&h=640&fit=clip&s=f6f713c951a3f5fa6b8fffed933b969d",
    "https://img.th.my-best.com/product_images/2fe1af4c1ceab1a8388e2d06fd5ad3c7.jpg?ixlib=rails-4.3.1&q=70&lossless=0&w=640&h=640&fit=clip&s=888fd78e6d071fe7eeabef81b1a95123",
    "https://img.th.my-best.com/product_images/47c8b06f7e1c1ff29d05e3a9212dab0b.jpeg?ixlib=rails-4.3.1&q=70&lossless=0&w=640&h=640&fit=clip&s=469f19e45b9e77fffeae049d4f437a12",
    "https://img.th.my-best.com/product_images/5c5a48a01f24feeca44db714103c8fc9.jpg?ixlib=rails-4.3.1&q=70&lossless=0&w=640&h=640&fit=clip&s=86ee2e7b4b1049ebe79c07ccd1672b48",
    "https://img.th.my-best.com/product_images/3842a21d8a3eb5ca838e035fb0fb8a3c.jpg?ixlib=rails-4.3.1&q=70&lossless=0&w=640&h=640&fit=clip&s=9e7b79ce8015f395f66b744070f6b8c6",
  ];

  const productNames = ["ไลท์โนเวล", "ไลท์โนเวล", "ไลท์โนเวล", "ไลท์โนเวล", "ไลท์โนเวล", "ไลท์โนเวล"];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="menu" size={32} color="black" />
        <Ionicons name="home" size={29} color="black" />
      </View>
      <View style={styles.mainContent}>
                <Text style={styles.boxText}>Hi, eieieieieiei</Text>
                <Text style={{ fontSize: 20, fontWeight: "600" }}>
                    eieieieieieieieieieieieieieieiei
                </Text>
            </View>
      <View style={styles.searchBox}>
        <Feather name="search" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Search for shoes"
          onChangeText={(text) => console.log(text)}
        />
      </View>
      <View style={styles.type}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.typebox}>
            <Text style={styles.typetext}>ทั้งหมด</Text>
          </View>
          <View style={styles.typebox}>
            <Text style={styles.typetext}>หนังสือนิยาย</Text>
          </View>
          <View style={styles.typebox}>
            <Text style={styles.typetext}>ไลท์โนเวล</Text>
          </View>
          <View style={styles.typebox}>
            <Text style={styles.typetext}>สืบสวน</Text>
          </View>
          <View style={styles.typebox}>
            <Text style={styles.typetext}>ประวัติศาสตร์</Text>
          </View>
          <View style={styles.typebox}>
            <Text style={styles.typetext}>การ์ตูน</Text>
          </View>
          <View style={styles.typebox}>
            <Text style={styles.typetext}>อุปกรณ์อ่านอีบุ๊ก</Text>
          </View>
        </ScrollView>
        <View style={styles.imghead}>
          <Image source={{ uri: 'https://www.phoenixnext.com/pub/media/magefan_blog/Top10LightNovel2022_AD_1_.jpg' }}
            style={{ width: 'auto', height: 200, marginBottom: 10, borderRadius: 5, }} />
        </View>
        <Text style={{ fontSize: 20, fontWeight: "600", marginBottom: 10, marginLeft: 26 }}>
          eieieieieieieieiei
        </Text>
      </View>
      <FlatList
        style={styles.productContainer}
        data={productImages}
        numColumns={2}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={handleProductPress}>
            <ProductItem imageUri={item} productName={productNames[index]} />
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    margin: 10,
    backgroundColor:'white',
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mainContent: {
    flex: 0,
    margin: 5,
    marginTop: 10,
  },
  boxText: {
    color: "black",
    fontSize: 14,
  },
  productContainer: {
    flex: 7,
    backgroundColor: "white",
  },
  productImage: {
    width: 150,
    height: 200,
    borderRadius: 20,
    marginLeft: 26,
  },
  productText: {
    fontSize: 16,
    fontWeight: "600",
    color: "gray",
    marginLeft: 26,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "800",
    marginLeft: 26,
    marginBottom: 20,
  },

  imageContainer: {
    position: "relative",
  },
  heartIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  typebox: {
    backgroundColor: "skyblue",
    padding: 10,
    borderRadius: 9,
    margin: 10,
    marginBottom: 15,
  },
  typetext: {
    fontSize: 13,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    height: 42,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
  },

});