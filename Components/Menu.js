
import { StyleSheet, Text, View, Image, Pressable, TextInput, } from 'react-native';

export default function BottomMenu({ navigation }) {
    return (
        <View>
            <Pressable onPress={() => navigation.navigate("Play")}>
                <Text>Play</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Setting")}>
                <Text>Setting</Text>
            </Pressable>
        </View>
    )
}