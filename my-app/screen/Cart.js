import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export default function Cart() {
    const navigation = useNavigation();
    
    const [productQuantities, setProductQuantities] = useState({
        product1: 1,
        product2: 1,
        product3: 1,
    });

    const increaseQuantity = (product) => {
        setProductQuantities({
            ...productQuantities,
            [product]: productQuantities[product] + 1,
        });
    };

    const decreaseQuantity = (product) => {
        if (productQuantities[product] > 1) {
            setProductQuantities({
                ...productQuantities,
                [product]: productQuantities[product] - 1,
            });
        }
    };

    return (
      <View style={{ flex: 1, backgroundColor: "#F2F2F2", fontFamily: 'NotoSansThai-Regular' }}>
      <View style={{ margin: 25, marginTop: 30 }}>
        <View style={styles.Cart}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-outline" size={30} color="dimgray" />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 26,
              color: "#504E4E",
              marginBottom: 10,
              marginTop: -5,
              fontFamily:'NotoSansThai-Regular',
            }}
          >
            Cart
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("profile")}>
          <Ionicons name="person" size={24} color="dimgray" marginTop={2} />
          </TouchableOpacity>
        </View>
                <View style={{ marginTop: 10,fontFamily:'NotoSansThai-Regular', }}>
                    {renderProduct("product1", "จุดเริ่มต้นที่ไร้เส้นชัยของนักเดินทางไกล", "฿215.75", "https://storage.naiin.com/system/application/bookstore/resource/product/202309/591174/1000265242_front_XXXL.jpg?imgname=จุดเริ่มต้นที่ไร้เส้นชัยของนักเดินทางไกลที่อยากเอาใจกลับมาเป็นของตัวเอง")}
                    {renderProduct("product2", "สักวันชีวิตของเธอจะผลิบานและงดงาม", "฿210.75", "https://storage.naiin.com/system/application/bookstore/resource/product/202309/589860/1000264794_front_XXXL.jpg?imgname=สักวันชีวิตของเธอจะผลิบานและงดงามจนใจเต้นรัว")}
                    {renderProduct("product3", "ถึงฉัน...คนที่อยู่ข้างกันเสมอ", "฿215.75", "https://storage.naiin.com/system/application/bookstore/resource/product/202309/590556/1000265059_front_XXL.jpg?imgname=ถึงฉัน...คนที่อยู่ข้างกันเสมอ")}
                </View>
                <View style={styles.btn_bot1}>
                    <Text style={styles.text1}>Total :</Text>
                    <Text style={styles.text11}>฿642.25</Text>
                </View>
                
                <View style={styles.btn_bot}>
                <TouchableOpacity>
                    <View style={styles.typebox2}>
                        <Text style={styles.text}>Check out</Text>
                       
                    </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

    function renderProduct(product, title, price, imageUrl) {
        return (
            <View style={styles.Image}>
                <TouchableOpacity onPress={() => navigation.navigate("Product")}>
                <Image
                style={{
                  width: 85,
                  height: 115,
                  resizeMode: "contain",
                  marginTop: 10,
                  marginBottom: 10,
                  borderRadius: 5,
                  borderWidth: 3,
                  borderColor: "#ffffff",
                }}
                        source={{
                            uri: imageUrl,
                        }}
                    />
                </TouchableOpacity>
                <View style={styles.TypeImage}>
                    <Text style={{ fontSize: 16, marginBottom: 10, width: 200, height: 50,fontFamily:'NotoSansThai-Regular' }}>
                        {title}
                    </Text>
                    <Text style={{ fontSize: 17, fontWeight: '500' }}>{price}</Text>
                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 4 }}>
                        <TouchableOpacity onPress={() => decreaseQuantity(product)}>
                            <Ionicons name="remove-circle-outline" size={25} color="#504E4E"></Ionicons>
                        </TouchableOpacity>
                        <Text style={{ marginHorizontal: 10 }}>{productQuantities[product]}</Text>
                        <TouchableOpacity onPress={() => increaseQuantity(product)}>
                            <Ionicons name="add-circle-outline" size={25} color="#504E4E"></Ionicons>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity>
                    <View style={{ margin: 25, marginLeft: 47 }}>
                        <Ionicons
                            name="close-circle-outline"
                            size={28}
                            color="#504E4E"
                        ></Ionicons>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    Cart: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    Image: {
      flexDirection: "row",
      borderBottomWidth: 2,
      borderColor: "white",
    },
    TypeImage: {
      margin: 10,
      marginLeft: 20,
    },
    btn_bot: {
      flexDirection: "row",
      justifyContent: "center",
      marginTop: 10,
      borderRadius: 20,
    },
    btn_bot1: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 20,
      marginBottom:10
     
    },
  
    typebox2: {
      backgroundColor: "#2E4374",
      width: 400,
      height: 70,
      borderRadius: 50,
      borderWidth:3,
     borderColor: 'white',
     fontFamily:'NotoSansThai-Regular',
    },
    box1: {
      flexDirection: "row",
    },
    text: {
      fontSize: 22,
      color: "white",
      marginLeft:150,
      marginTop:17,
     
    },
    text1: {
        fontSize: 19,
        color: "#2B2B2B",
        fontFamily:'NotoSansThai-Regular',
        
      },
    text11: {
        fontSize: 19,
        color: "#B31312",
        fontFamily:'NotoSansThai-Regular',
      },
  });
  