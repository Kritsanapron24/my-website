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
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons
            name="menu"
            size={34}
            color="#213555"
            style={{
              width: 80,
              height: 80,
              borderRadius: 100,
              padding: 15,
              marginTop: 38,
            }}
          />
        </TouchableOpacity>
        <Image
          source={require("../assets/catcat.png")}
          style={{
            width: 140,
            height: 80,
            marginTop: 25,
            marginBottom: 20,
          }}
        />
        <TouchableOpacity >
          <Ionicons
            
            size={28}
            color="#F5EEC8"
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              padding: 10,
              marginTop: 35,
              marginRight: 12,
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.type}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.typebox}>
            <Text style={styles.typetext}>All</Text>
          </View>
          <View style={styles.typebox}>
            <Text style={styles.typetext}>Psychology</Text>
          </View>
          <View style={styles.typebox}>
            <Text style={styles.typetext}>Self-Improvement</Text>
          </View>
          <View style={styles.typebox}>
            <Text style={styles.typetext}>Literature</Text>
          </View>
          <View style={styles.typebox}>
            <Text style={styles.typetext}>History-book</Text>
          </View>
          <View style={styles.typebox}>
            <Text style={styles.typetext}>Novel</Text>
          </View>
          <View style={styles.typebox}>
            <Text style={styles.typetext}>Suspense</Text>
          </View>
        </ScrollView>
      </View>

      <ScrollView>
        <View style={styles.typ}>
          <ScrollView
            horizontal={true}
            contentContainerStyle={styles.contentContainer}
          >
            <View style={styles.production}>
              <Image
                source={require("../assets/banner.png")}
                style={{
                  width: 350,
                  height: 205,
                  marginLeft: 10,
                 
                  marginTop:20,
                  
                  
                }}
              />
            </View>
            <View style={styles.production}>
              <Image
                source={require("../assets/banner2.png")}
                style={{
                  width: 350,
                  height: 205,
                  marginLeft: 10,
                  
                  marginTop:20,
                  
                  
                }}
              />
            </View>
          </ScrollView>
          <View style={styles.box}>
            <Text style={styles.text}>
              Online Book Fair - หนังสือใหม่ต้อนรับงานมหกรรมหนังสือ
            </Text>
          </View>
        </View>
        <View style={styles.type1}>
          <ScrollView
            horizontal={true}
            contentContainerStyle={styles.contentContainer1}
          >
            <View style={styles.product}>
              <TouchableOpacity onPress={() => navigation.navigate("Product")}>
                <Image
                  source={{
                    uri: "https://storage.naiin.com/system/application/bookstore/resource/product/202202/541412/1000246409_front_XXXL.jpg?imgname=52-เฮิรตซ์...คลื่นเสียงที่ไม่มีใครได้ยิน",
                  }}
                  style={{
                    width: 140,
                    height: 190,
                    borderRadius: 10,
                    marginLeft: 21,
                    borderColor: "white",
                    borderWidth: 5,
                    marginTop:15,
                  }}
                />
                <Text style={styles.productText1}>
                  จุดเริ่มต้นที่ไร้เส้นชัยของนักเดินทางไกล
                </Text>
                <Text style={styles.productText2}>฿215.75</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.product}>
              <TouchableOpacity onPress={() => navigation.navigate("Product1")}>
                <Image
                  source={{
                    uri: "https://storage.naiin.com/system/application/bookstore/resource/product/202006/506970/1000233334_front_XXXL.jpg?imgname=ร้านขนมแห่งความลับ-(พิมพ์ครั้งที่-2)",
                  }}
                  style={{
                    width: 140,
                    height: 190,
                    borderRadius: 10,
                    marginLeft: 22,
                    borderColor: "white",
                    borderWidth: 5,
                    marginTop:15,
                  }}
                />
                <Text style={styles.productText}>
                  สักวันชีวิตของเธอจะผลิบานและงดงาม
                </Text>
                <Text style={styles.productText3}>฿210.75</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.product}>
              <TouchableOpacity onPress={() => navigation.navigate("Product2")}>
                <Image
                  source={{
                    uri: "https://storage.naiin.com/system/application/bookstore/resource/product/202309/590556/1000265059_front_XXL.jpg?imgname=ถึงฉัน...คนที่อยู่ข้างกันเสมอ",
                  }}
                  style={{
                    width: 140,
                    height: 190,
                    borderRadius: 10,
                    marginLeft: 22,
                    borderColor: "white",
                    borderWidth: 5,
                    marginTop:15,
                  }}
                />
                <Text style={styles.productText}>
                  ถึงฉัน...คนที่อยู่ข้างกันเสมอ
                </Text>
                <Text style={styles.productText3}>฿215.75</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.product}>
            <TouchableOpacity onPress={() => navigation.navigate("Product3")}>
              <Image
                source={{
                  uri: "https://storage.naiin.com/system/application/bookstore/resource/product/202309/591478/1000265328_front_XXXL.jpg?imgname=I-Decided-to-Live-as-Myself-ฉันจะมีชีวิตในแบบของตัวเอง",
                }}
                style={{
                  width: 140,
                  height: 190,
                  borderRadius: 10,
                  marginLeft: 22,
                  borderColor: "white",
                  borderWidth: 5,
                  marginTop:15,
                }}
              />
              <Text style={styles.productText}>
                I Decided to Live as Myself{" "}
              </Text>
              <Text style={styles.productText3}>฿215.75</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.product}>
            <TouchableOpacity onPress={() => navigation.navigate("Product4")}>
              <Image
                source={{
                  uri: "https://storage.naiin.com/system/application/bookstore/resource/product/202309/589680/1000264632_front_XXXL.jpg?imgname=เมื่อเธอโตขึ้น-เธอจะเข้าใจเอง",
                }}
                style={{
                  width: 140,
                  height: 190,
                  borderRadius: 10,
                  marginLeft: 22,
                  borderColor: "white",
                  borderWidth: 5,
                  marginTop:15,
                }}
              />
              <Text style={styles.productText}>
                เมื่อเธอโตขึ้น เธอจะเข้าใจเอง
              </Text>
              <Text style={styles.productText3}>฿215.75</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        <View style={styles.box1}>
          <Text style={styles.text1}>Online Book Fair - สินค้าขายดี</Text>
        </View>
        <View style={styles.type2}>
          <ScrollView
            horizontal={true}
            contentContainerStyle={styles.contentContainer2}
          >
            <View style={styles.product}>
            <TouchableOpacity onPress={() => navigation.navigate("Product5")}>
              <Image
                source={{
                  uri: "https://storage.naiin.com/system/application/bookstore/resource/product/202202/541412/1000246409_front_XXXL.jpg?imgname=52-เฮิรตซ์...คลื่นเสียงที่ไม่มีใครได้ยิน",
                }}
                style={{
                  width: 140,
                  height: 190,
                  borderRadius: 10,
                  marginLeft: 21,
                  borderColor: "white",
                  borderWidth: 5,
                  marginTop:15,
                }}
              />
              <Text style={styles.productText1}>
                52 เฮิรตซ์...คลื่นเสียงที่ไม่มีใครได้ยิน
              </Text>
              <Text style={styles.productText2}>฿215.75</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.product}>
            <TouchableOpacity onPress={() => navigation.navigate("Product6")}>
              <Image
                source={{
                  uri: "https://storage.naiin.com/system/application/bookstore/resource/product/202309/590043/1000264796_front_XXXL.jpg?imgname=มนุษย์เป็นสัตว์สังคม-(แค่บางวันก็พอ!)",
                }}
                style={{
                  width: 140,
                  height: 190,
                  borderRadius: 10,
                  marginLeft: 22,
                  borderColor: "white",
                  borderWidth: 5,
                  marginTop:15,
                }}
              />
              <Text style={styles.productText}>
                มนุษย์เป็นสัตว์สังคม (แค่บางวันก็พอ!)
              </Text>
              <Text style={styles.productText3}>฿215.75</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.product}>
            <TouchableOpacity onPress={() => navigation.navigate("Product7")}>
              <Image
                source={{
                  uri: "https://storage.naiin.com/system/application/bookstore/resource/product/202209/559277/1000253755_front_XXXL.jpg?imgname=เมษาลาตะวัน",
                }}
                style={{
                  width: 140,
                  height: 190,
                  borderRadius: 10,
                  marginLeft: 22,
                  borderColor: "white",
                  borderWidth: 5,
                  marginTop:15,
                }}
              />
              <Text style={styles.productText}>เมษาลาตะวัน</Text>
              <Text style={styles.productText3}>฿215.75</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.product}>
            <TouchableOpacity onPress={() => navigation.navigate("Product8")}>
              <Image
                source={{
                  uri: "https://storage.naiin.com/system/application/bookstore/resource/product/202303/576258/1000260153_front_XXXL.jpg?imgname=เมื่อแมวที่บ้านคุณผันตัวเองมาเป็นไลฟ์โค้ช",
                }}
                style={{
                  width: 140,
                  height: 190,
                  borderRadius: 10,
                  marginLeft: 22,
                  borderColor: "white",
                  borderWidth: 5,
                  marginTop:15,
                }}
              />
              <Text style={styles.productText}>
                เมื่อแมวที่บ้านคุณผันตัวเองมาเป็นไลฟ์โค้ช
              </Text>
              <Text style={styles.productText3}>฿215.75</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.product}>
            <TouchableOpacity onPress={() => navigation.navigate("Product9")}>
              <Image
                source={{
                  uri: "https://storage.naiin.com/system/application/bookstore/resource/product/202106/528550/1000241706_front_XXXL.jpg?imgname=คดีฆาตกรรมในบ้านสิบเหลี่ยม",
                }}
                style={{
                  width: 140,
                  height: 190,
                  borderRadius: 10,
                  marginLeft: 22,
                  borderColor: "white",
                  borderWidth: 5,
                  marginTop:15,
                }}
              />
              <Text style={styles.productText}>คดีฆาตกรรมในบ้านสิบเหลี่ยม</Text>
              <Text style={styles.productText3}>฿215.75</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>

        <View style={styles.box1}>
          <Text style={styles.text1}>
            Online Book Fair - มัดรวม How-to กู้พลังบวก!
          </Text>
        </View>

        <View style={styles.type2}>
          <ScrollView
            horizontal={true}
            contentContainerStyle={styles.contentContainer2}
          >
            <View style={styles.product}>
            <TouchableOpacity onPress={() => navigation.navigate("Product10")}>
              <Image
                source={{
                  uri: "https://storage.naiin.com/system/application/bookstore/resource/product/201907/482105/1000220914_front_XXXL.jpg?imgname=INTO-THE-MAGIC-SHOP-เราทุกคนล้วนมีร้านเวทมนตร์อยู่ในใจ",
                }}
                style={{
                  width: 140,
                  height: 190,
                  borderRadius: 10,
                  marginLeft: 21,
                  borderColor: "white",
                  borderWidth: 5,
                  marginTop:15,
                }}
              />
              <Text style={styles.productText1}>INTO THE MAGIC SHOP</Text>
              <Text style={styles.productText2}>฿215.75</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.product}>
            <TouchableOpacity onPress={() => navigation.navigate("Product11")}>
              <Image
                source={{
                  uri: "https://storage.naiin.com/system/application/bookstore/resource/product/202308/588597/1000264199_front_XXXL.jpg?imgname=คำตอบของความสุข-:-Answers-of-Happiness",
                }}
                style={{
                  width: 140,
                  height: 190,
                  borderRadius: 10,
                  marginLeft: 22,
                  borderColor: "white",
                  borderWidth: 5,
                  marginTop:15,
                }}
              />
              <Text style={styles.productText}>
                คำตอบของความสุข : Happiness
              </Text>
              <Text style={styles.productText3}>฿215.75</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.product}>
            <TouchableOpacity onPress={() => navigation.navigate("Product12")}>
              <Image
                source={{
                  uri: "https://storage.naiin.com/system/application/bookstore/resource/product/202310/591771/1000265439_front_XXXL.jpg?imgname=A-Wonderful-Lifeชีวิตนี้คู่ควรที่จะงดงาม",
                }}
                style={{
                  width: 140,
                  height: 190,
                  borderRadius: 10,
                  marginLeft: 22,
                  borderColor: "white",
                  borderWidth: 5,
                  marginTop:15,
                }}
              />
              <Text style={styles.productText}>ชีวิตนี้คู่ควรที่จะงดงาม</Text>
              <Text style={styles.productText3}>฿215.75</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.product}>
            <TouchableOpacity onPress={() => navigation.navigate("Product13")}>
              <Image
                source={{
                  uri: "https://storage.naiin.com/system/application/bookstore/resource/product/202303/574332/1000259502_front_XXXL.jpg?imgname=ศาสตร์และศิลป์แห่งการเล่าเรื่องให้ตรึงใจด้วยวิทยาศาสตร์สมอง-:-The-Science-of-Storytelling",
                }}
                style={{
                  width: 140,
                  height: 190,
                  borderRadius: 10,
                  marginLeft: 22,
                  borderColor: "white",
                  borderWidth: 5,
                  marginTop:15,
                }}
              />
              <Text style={styles.productText}>
                The Science of Storytelling
              </Text>
              <Text style={styles.productText3}>฿215.75</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>

        <View style={styles.box1}>
          <Text style={styles.text1}>
            Online Book Fair - สืบสวนสอบสวน เข้มข้น ชวนลุ้น!
          </Text>
        </View>

        <View style={styles.type2}>
          <ScrollView
            horizontal={true}
            contentContainerStyle={styles.contentContainer2}
          >
            <View style={styles.product}>
            <TouchableOpacity onPress={() => navigation.navigate("Product14")}>
              <Image
                source={{
                  uri: "https://storage.naiin.com/system/application/bookstore/resource/product/201804/233134/1000206488_front_XXXL.jpg?imgname=ปาฏิหาริย์ร้านชำของคุณนามิยะ-โดย-ฮิงาชิโนะ-เคโงะ",
                }}
                style={{
                  width: 140,
                  height: 190,
                  borderRadius: 10,
                  marginLeft: 21,
                  borderColor: "white",
                  borderWidth: 5,
                  marginTop:15,
                }}
              />
              <Text style={styles.productText1}>
                ปาฏิหาริย์ร้านชำของคุณนามิยะ
              </Text>
              <Text style={styles.productText2}>฿215.75</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.product}>
            <TouchableOpacity onPress={() => navigation.navigate("Product15")}>
              <Image
                source={{
                  uri: "https://storage.naiin.com/system/application/bookstore/resource/product/202303/574435/1000259567_front_XXXL.jpg?imgname=ชุด-คดีฆาตกรรมในคฤหาสน์หน้ากากมหัศจรรย์-เล่ม-1–2-(พิมพ์ครั้งที่-2)",
                }}
                style={{
                  width: 140,
                  height: 190,
                  borderRadius: 10,
                  marginLeft: 22,
                  borderColor: "white",
                  borderWidth: 5,
                  marginTop:15,
                }}
              />
              <Text style={styles.productText}>คดีฆาตกรรมในคฤหาสน์</Text>
              <Text style={styles.productText3}>฿215.75</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.product}>
            <TouchableOpacity onPress={() => navigation.navigate("Product16")}>
              <Image
                source={{
                  uri: "https://storage.naiin.com/system/application/bookstore/resource/product/202306/581471/1000261615_front_XXXL.jpg?imgname=คดีฆาตกรรมในหอคอยกระจก",
                }}
                style={{
                  width: 140,
                  height: 190,
                  borderRadius: 10,
                  marginLeft: 22,
                  borderColor: "white",
                  borderWidth: 5,
                  marginTop:15,
                }}
              />
              <Text style={styles.productText}>คดีฆาตกรรมในหอคอยกระจก</Text>
              <Text style={styles.productText3}>฿215.75</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.product}>
            <TouchableOpacity onPress={() => navigation.navigate("Product17")}>
              <Image
                source={{
                  uri: "https://storage.naiin.com/system/application/bookstore/resource/product/202306/582545/1000262035_front_XXL.jpg?imgname=ผมจะเฝ้ารอฆาตกรที่ร้านหนังสือแห่งความทรงจำ-",
                }}
                style={{
                  width: 140,
                  height: 190,
                  borderRadius: 10,
                  marginLeft: 22,
                  borderColor: "white",
                  borderWidth: 5,
                  marginTop:15,
                }}
              />
              <Text style={styles.productText}>
                ผมจะเฝ้ารอฆาตกรที่ร้านหนังสือ
              </Text>
              <Text style={styles.productText3}>฿215.75</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.product}>
            <TouchableOpacity onPress={() => navigation.navigate("Product18")}>
              <Image
                source={{
                  uri: "https://storage.naiin.com/system/application/bookstore/resource/product/202306/582839/1000262088_front_XXXL.jpg?imgname=ช่วยด้วยครับ!-พี่สาวผมเป็นไซโคพาธ",
                }}
                style={{
                  width: 140,
                  height: 190,
                  borderRadius: 10,
                  marginLeft: 22,
                  borderColor: "white",
                  borderWidth: 5,
                  marginTop:15,
                }}
              />
              <Text style={styles.productText}>
                ช่วยด้วยครับ! พี่สาวผมเป็นไซโคพาธ
              </Text>
              <Text style={styles.productText3}>฿215.75</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
          <View style={styles.box1}>
            <Text style={styles.text1}></Text>
          </View>
        </View>
      </ScrollView>
      <View>
        <Text style={{ marginTop: 20 }}></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  typebox: {
    borderColor: "white",
    borderWidth: 3,
    padding: 13,
    borderRadius: 100,
    margin: 6,
    marginTop: 7.5,
    marginBottom: 8,
    backgroundColor: "#F9E3AA",
  },
  typetext: {
    fontSize: 12.5,
    fontWeight: "bold",
    color: "#555843",
    fontFamily:'NotoSansThai-Regular',
  },
  productText1: {
    width: 140,
    height: 50,
    fontSize: 16,
    marginLeft: 28,
    marginTop:5,
    fontFamily:'NotoSansThai-Regular',
  },
  productText: {
    fontSize: 16,
    marginLeft: 25,
    width: 140,
    height: 50,
    marginTop:5,
    fontFamily:'NotoSansThai-Regular',
  },
  
  productText2: {
    fontSize: 17,
    marginLeft: 28,
    fontWeight: "bold",
    color: "black",
    fontFamily:'NotoSansThai-Regular',
  },
  productText3: {
    fontSize: 17,
    marginLeft: 25,
    fontWeight: "bold",
    color: "black",
    fontFamily:'NotoSansThai-Regular',
   
  },
  box: {
    borderColor: "#F2F2F2",
    borderWidth: 5,
    padding: 4,
    borderRadius: 0,
    flex: 1,
    height: 45,
    marginBottom: -10,
  },

  text: {
    fontSize: 16,
    color: "black",
    fontFamily:'NotoSansThai-Regular',
  },
  box1: {
    borderColor: "#F2F2F2",
    borderWidth: 5,
    padding: 4,
    borderRadius: 0,
    flex: 1,
    height: 35,
    marginTop: 15,
  },

  text1: {
    fontSize: 16,
    color: "black",
    marginBottom:-30,
    fontFamily:'NotoSansThai-Regular',
  },
  
  product: {
    marginTop:15,
    backgroundColor:'#E2ECFA',
    height:300,
    width:190,
    borderWidth:3,
    borderColor: 'white',
    borderRadius:25,
    margin:7
  },
  type: {
    marginTop:5
  },
  production: {
    marginTop:-15,
    marginBottom:9
  }

});
