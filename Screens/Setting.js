import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import BottomMenu from './../Components/Menu';

export default function SettingScreen({ navigation }) {
    return (
        <View style={styles.botMenu}>
            <Pressable style={styles} onPress={() => navigation.navigate("Play")}>
                <Text style={styles}>Play</Text>
            </Pressable>
            <Pressable style={styles} onPress={() => navigation.navigate("Setting")}>
                <Text style={styles}>Setting</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    botMenu: {
        position: 'absolute',
        bottom: 0,
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        width: "100%",
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: "space-around",
        borderTopWidth: 1,
        borderColor: "#DADADA",
    }
});
