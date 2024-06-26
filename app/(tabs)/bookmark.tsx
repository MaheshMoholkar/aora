import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Bookmark = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <Text className="text-2xl px-4 my-6 text-white font-psemibold">
        Bookmark
      </Text>
    </SafeAreaView>
  );
};

export default Bookmark;
