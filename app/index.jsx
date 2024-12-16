import { Image, SafeAreaView, Text, View, TouchableOpacity, FlatList, ScrollView } from "react-native";
import CustomSearch from "@/components/CustomSearch.jsx";
import bgimage from "@/assets/background.png";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import people from '../constants/People'
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useState } from "react";
import rewardicon from '../assets/images/rewards.jpeg'
import refferalicon from '@/assets/images/referral.jpeg'
import offersicon from '@/assets/images/offers.jpeg'
import endbg from '@/assets/endbg.png'
import Fontisto from '@expo/vector-icons/Fontisto';

export default function Index() {
  const [visiblePeople, setVisiblePeople] = useState(8);



  


  const showMorePeople = () => { setVisiblePeople(people.length); };
  const showLessPeople = () => { setVisiblePeople(8); };

  const getColor=()=> {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const renderItem = ({ item, index }) => {
    if (index == visiblePeople-1  && visiblePeople < people.length) {
      return (
        <TouchableOpacity onPress={showMorePeople} className="mt-2 ml-5" >
           <View className="h-16 w-16 rounded-full items-center justify-center m-2 border-gray-500 border" >
          <AntDesign name="down" size={24} color="#1c5bbc" />
        </View>
        <Text className="text-center">More</Text>
        </TouchableOpacity>
      );
    }

    if(index == people.length -1){
      return (
        <TouchableOpacity onPress={showLessPeople} className="mt-2 ml-5" >
           <View className="h-16 w-16 rounded-full items-center justify-center m-2 border-gray-500 border" >
          <AntDesign name="up" size={24} color="#1c5bbc" />
        </View>
        <Text className="text-center">Less</Text>
        </TouchableOpacity>
      )
    }

    return (
      <TouchableOpacity className="px-5 py-2">
        <View 
          style={{ backgroundColor: getColor() }} 
          className="h-16 w-16 rounded-full items-center justify-center m-2"
        >
          <Text className="text-white font-medium text-lg">
            {item.name.slice(0, 1)}
          </Text>
        </View>
        <Text className="text-center">{item.name}</Text>
      </TouchableOpacity>
    );
  };

  
  


  return (
  <SafeAreaView className="flex-1 mb-3" >
    <ScrollView>

    <Image 
      source={bgimage} 
      style={{ width: "100%", height: 320 }} 
      resizeMode="contain" 
      /> 
      <View className="absolute w-full right-7 top-5 " >
      <CustomSearch title='Search' placeholder='Pay friends and merchants'  />
      </View>
      <View  className="h-10 w-10  rounded-full items-center justify-center bg-['#01579a'] absolute right-6 top-6" >
        <Text className="text-2xl font-medium text-white" >A</Text>
      </View>


      <View className="w-[95%] h-[200] self-center " >
        <View className="flex-row justify-between pl-2 mt-3" >
          <TouchableOpacity className="w-28 items-center justify-center" >
          <MaterialIcons name="qr-code-scanner" size={30} color="#1c5bbc" />
            <Text className="text-gray-700 font-medium mt-2 text-center" >Scan any{'\n'} QR code</Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-28  items-center justify-center" >
          <AntDesign name="contacts" size={30} color="#1c5bbc" />
            <Text className="text-gray-700 font-medium mt-2 text-center">Pay{'\n'}Contacts</Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-28  items-center justify-center" >
          <MaterialCommunityIcons name="cellphone" size={30} color="#1c5bbc" />
          <Text className="text-gray-700 font-medium mt-2 text-center">Pay phone{'\n'}number</Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-28  items-center justify-center" >
          <MaterialCommunityIcons name="bank-outline" size={30} color="#1c5bbc" />
            <Text className="text-gray-700 font-medium mt-2 text-center">Bank{'\n'}transfer</Text>
          </TouchableOpacity>
        </View>


        <View className="flex-row justify-between pl-2 mt-3" >
          <TouchableOpacity className="w-28  items-center justify-center mt-2 text-center" >
          <Feather name="at-sign" size={30} color="#1c5bbc" />
            <Text className="text-gray-700 font-medium mt-2 text-center">Pay UPI ID{'\n'}or number</Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-28  items-center justify-center mt-2 text-center" >
          <MaterialIcons name="person-outline" size={30} color="#1c5bbc" />
            <Text className="text-gray-700 font-medium mt-2 text-center">Self{'\n'}transfer</Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-28  items-center justify-center mt-2 text-center" >
          <Ionicons name="newspaper-outline" size={30} color="#1c5bbc" />
            <Text className="text-gray-700 font-medium mt-2 text-center">Pay{'\n'}bills</Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-28 items-center justify-center mt-2 text-center">
            <MaterialCommunityIcons name="cellphone-charging" size={30} color="#1c5bbc" />
            <Text className="text-gray-700 font-medium mt-2 text-center">
              Mobile{'\n'}recharge
            </Text>
          </TouchableOpacity>

        </View>

      </View>

      <View className="w-[80%] justify-evenly flex-row ml-10 mt-3 items-center " >
        <TouchableOpacity className="flex-row w-44 h-10 border-dashed border rounded-3xl justify-center items-center border-gray-600 " >
          <Text>Activate UPI Lite</Text>
          <AntDesign name="pluscircleo" size={14} color="black" style={{ paddingLeft:5 }} />
        </TouchableOpacity>

        <View className="bg-[#f3f6fd] h-12 w-64 rounded-3xl justify-center items-center ml-3" >
          <Text className="text-gray-600" >UPI ID: amit12345@bank</Text>
        </View>

      </View>

      <View className="mt-7 w-[95%]" >
        <Text className="text-gray-800 text-2xl pl-5 " >People</Text>
        <View className="items-center ml-4" >

          <FlatList
            data={people.slice(0, visiblePeople)}
            numColumns={4}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
          />

        </View>
      </View>


      <View className="mt-7 w-[95%]"  >
      <Text className="text-gray-800 text-2xl pl-5 " >Bills & recharges</Text>
      <Text className="text-gray-800 text-sm pl-5 mt-2" >No Bills due. Try adding these!</Text>

      <View className="flex-row justify-between pl-2 mt-3 w-full mb-3" >
          
          <TouchableOpacity onPress={showLessPeople} className="mt-2 ml-5" >
            <View className="h-16 w-16 rounded-full items-center justify-center m-2  bg-[#c3e7ff]" >
            <Entypo name="tv" size={24} color="#001d36" />
            </View>
            <Text className="text-center">DTH / Cable{'\n'}TV</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={showLessPeople} className="mt-2 ml-5" >
            <View className="h-16 w-16 rounded-full items-center justify-center m-2 bg-[#c3e7ff]" >
              <FontAwesome6 name="lightbulb" size={24} color="#001d36" />
            </View>
            <Text className="text-center">Electricity</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={showLessPeople} className="mt-2 ml-5" >
            <View className="h-16 w-16 rounded-full items-center justify-center m-2 bg-[#c3e7ff]" >
            <Ionicons name="water-outline" size={24} color="#001d36" />
            </View>
            <Text className="text-center">Water</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={showLessPeople} className="mt-2 ml-5" >
            <View className="h-16 w-16 rounded-full items-center justify-center m-2 bg-[#c3e7ff]" >
              <MaterialIcons name="router" size={24} color="#001d36" />
            </View>
            <Text className="text-center">Broadband /{'\n'}Landline</Text>
          </TouchableOpacity>

      </View>

      <TouchableOpacity>
      <View className="border w-28 h-11 rounded-3xl items-center justify-center self-center mt-3 border-gray-700 " >
        <Text className="text-center font-medium text-[#1b53b0] " >View all</Text>
      </View>
      </TouchableOpacity>

      </View>


      
      <View className="mt-7 w-[95%]"  >
      <Text className="text-gray-800 text-2xl pl-5 " >Offers & rewards</Text>
      <View className="flex-row justify-start ml-4 mt-3 w-full mb-3 " >
          
          <TouchableOpacity onPress={showLessPeople} className="mt-2 ml-5 mr-5 " >
            <View className="h-16 w-16 rounded-full items-center justify-center m-2  bg-[#c3e7ff]" >
            <Image 
              source={rewardicon}
              resizeMode="contain"
              style={{borderRadius: 50, height: 50, width: 50 }}
            />
            </View>
            <Text className="text-center">Rewards</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={showLessPeople} className="mt-2 ml-5 mr-5" >
            <View className="h-16 w-16 rounded-full items-center justify-center m-2  bg-[#c3e7ff]" >
            <Image 
              source={offersicon}
              resizeMode="contain"
              style={{borderRadius: 50, height: 50, width: 50 }}
            />
            </View>
            <Text className="text-center">Rewards</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={showLessPeople} className="mt-2 ml-5 mr-5" >
            <View className="h-16 w-16 rounded-full items-center justify-center m-2  bg-[#c3e7ff]" >
            <Image 
              source={refferalicon}
              resizeMode="contain"
              style={{borderRadius: 50, height: 50, width: 50 }}
            />
            </View>
            <Text className="text-center">Rewards</Text>
          </TouchableOpacity>
       </View>   

      <View className="relative left-5" >

       <Image
       source={endbg}
       resizeMode="contain"
       style={{ width: "100%", height: 200 }}
       />
        <Text className="absolute top-14 left-4 text-lg mt-4" >Invite friends to get ₹301</Text>
        <Text className="absolute top-20 mt-5 left-4 text-gray-600 ">Referral code: 88mn5j</Text>
        <Text className="absolute top-32 mt-5 left-4 text-blue-600 font-medium">Invite & earn</Text>

       </View>


      </View>

      <View className="mt-7 w-[95%]"  >
      <Text className="text-gray-800 text-2xl pl-5 " >Manage your money</Text>

      <View className="w-[95%] items-center justify-center" >
        <TouchableOpacity className="flex-row justify-between pl-2 ml-9 mt-5 w-full mb-3 h-14 items-center" >
        <MaterialCommunityIcons name="speedometer" size={26} color="#1c5bbc" />
        <Text className="text-lg right-12 text-gray-900 "  >Check you CIBIL score for free</Text>
        <AntDesign name="right" size={17} color="#474948" />
        </TouchableOpacity>

        <TouchableOpacity className="flex-row justify-between pl-2 ml-9  w-full mb-3 h-14 items-center" >
        <Fontisto name="history" size={24} color="#1c5bbc" />
        <Text className="text-lg right-[67] text-gray-900 "  >See transaction History</Text>
        <AntDesign name="right" size={17} color="#474948" />
        </TouchableOpacity>

        <TouchableOpacity className="flex-row justify-between pl-2 ml-9  w-full mb-3 h-14 items-center" >
        <MaterialCommunityIcons name="bank" size={24} color="#1c5bbc" />
        <Text className="text-lg right-[80] text-gray-900 "  >Check bank balance</Text>
        <AntDesign name="right" size={17} color="#474948" />
        </TouchableOpacity>
      </View>

      </View>


      </ScrollView>
  </SafeAreaView>
  );
}
