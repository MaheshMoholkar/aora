import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { icons, images } from "../constants";
import { Image } from "react-native";

const SearchInput = () => {
  return (
    <View className="space-y-2">
      <View className="border-2 border-black-200 rounded-2xl focus:border-secondary items-center w-full h-16 px-4 bg-black-100 flex-row space-x-4">
        <TextInput
          className="text-base mt-0.5 text-white flex-1 font-pregular"
          placeholder="Search"
          placeholderTextColor="#7b7b8b"
        />
        <TouchableOpacity onPress={() => {}}>
          <Image
            source={icons.search}
            className="w-5 h-5"
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchInput;
