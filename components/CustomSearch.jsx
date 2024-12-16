import { useRef, useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import people from '../constants/People'

const CustomSearch = ({
  title,
  value,
  placeholder,
  handleChangeText,
  handleSubmitSearch,
  otherStyles,
  autoFocus, 
  ...props
}) => {
  const inputRef = useRef(null); 
  const [peopleData, setpeopleData] = useState(["amit", "alok", "shuhbham", "sumit"])
  const [textChange, setTextChange] = useState("")

  // setpoopleData(people)

  const handlesubmit = (value)={
    
  }

  useEffect(() => {
    setpeopleData(peopleData.filter(item => item.includes(textChange)))
    console.log(peopleData)
    setpeopleData( ["amit", "alok", "shuhbham", "sumit"])

  }, [textChange])
  

  useEffect(() => {
    if (autoFocus) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [autoFocus]);



  return (
    <View style={[styles.container, otherStyles]}>

      <View style={styles.inputContainer}>
      <FontAwesome5 name="search" size={18} color="#2e2f2f"  className='right-5' />
       
        <TextInput
          ref={inputRef} 
          style={styles.textInput}
          value={textChange}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={setTextChange}
          onSubmitEditing={handleSubmitSearch}
          {...props}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 40,
    alignItems: 'center',
   
  },
  title: {
    fontSize: 16,
    color: '#F3F4F6', 
    fontFamily: 'Poppins-Medium',
  },
  inputContainer: {
    width: '80%',
    backgroundColor: '#f8f9fd', 
    height: 48,
    borderRadius: 24, 
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 40,
    paddingHorizontal: 30, 
    shadowColor: '#000', 
    shadowOffset: { width: 2, height: 4 }, 
    shadowOpacity: 1, 
    shadowRadius: 5, 
    elevation: 20,
  },
  icon: {
    width: 20,
    height: 20,
    position: 'absolute',
    left: 16,
  },
  textInput: {
    flex: 1,
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    paddingLeft: 6,
  },
});

export default CustomSearch;