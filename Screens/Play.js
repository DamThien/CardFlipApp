import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Pressable, TouchableOpacity } from 'react-native';
import CardFlip from 'react-native-card-flip';
export default function PlayScreen({ navigation }) {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [cards, setcards] = useState([['a', 's', 'd', 'f', 'g', 'h'], ['A', 'S', 'D', 'F', 'G', 'H']]);
    const [index, setIndex] = useState(0);
    const [swap, setSwap] = useState(1);
    cardreset = [['a', 's', 'd', 'f', 'g', 'h'], ['A', 'S', 'D', 'F', 'G', 'H']]
    const cardRef = useRef();
    const reseting = () => {
        setIndex(0)
        setSwap(1)
    }
    const flipCard = () => {
        // Sử dụng ref để flip thẻ hiện có (thẻ có giá trị currentCardIndex)
        cardRef.current.flip();
        temp = index
        setIndex(swap);
        setSwap(temp);
    };

    const handlePrevious = () => {
        // Tính chỉ mục của thẻ trước đó
        const previousCardIndex = currentCardIndex === 0 ? cards[0].length - 1 : currentCardIndex - 1;
        reseting();
        // Cập nhật chỉ mục của thẻ hiện tại mà không lật thẻ
        setCurrentCardIndex(previousCardIndex);
    };

    const handleNext = () => {
        // Tính chỉ mục của thẻ tiếp theo
        const nextCardIndex = (currentCardIndex + 1) % cards[0].length;
        reseting();
        // Cập nhật chỉ mục của thẻ hiện tại mà không lật thẻ
        setCurrentCardIndex(nextCardIndex);
    };
    const reset = () => {
        reseting();
        setcards(cardreset)
        setCurrentCardIndex(0)
    }
    const deleteCurrentCharacter = () => {
        // Xác định chỉ mục của ký tự hiện tại
        const currentCharacterIndex = currentCardIndex;

        // Tạo một bản sao của mảng cards
        const newCards = [...cards];
        reseting();
        // Loại bỏ ký tự ở chỉ mục currentCharacterIndex
        newCards[0].splice(currentCharacterIndex, 1);
        newCards[1].splice(currentCharacterIndex, 1);

        // Cập nhật mảng cards mới sau khi xóa ký tự
        // Ở đây, chúng tôi đặt currentCardIndex thành 0,
        // nhưng bạn có thể đặt nó thành giá trị khác tùy thuộc vào trường hợp của bạn.
        setCurrentCardIndex(0);
        setcards(newCards);
        
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Play Card ({cards[0].length})</Text>
            <CardFlip style={styles.cardContainer} ref={cardRef}>
                <TouchableOpacity style={styles.card} onPress={flipCard}>
                    <Text style={styles.cardText}>{cards[index][currentCardIndex]}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card} onPress={flipCard}>
                    <Text style={styles.cardText}>{cards[index][currentCardIndex]}</Text>
                </TouchableOpacity>
            </CardFlip>
            <View style={{ display: 'flex', flexDirection: 'row', width: "140%", justifyContent: 'space-around', margin: 20 }}>
                <Pressable style={styles.arrowBtn} onPress={handlePrevious}>
                    <Text style={styles.arrowBtnTil}>Previous</Text>
                </Pressable>
                <Pressable style={styles.arrowBtn} onPress={handleNext}>
                    <Text style={styles.arrowBtnTil}>Next</Text>
                </Pressable>
            </View>
            <View style={styles}>
                <Pressable style={styles.Btn}>
                    <Text style={styles.BtnTil} onPress={deleteCurrentCharacter}>Remove From Deck</Text>
                </Pressable>
                <Pressable style={styles.Btn}>
                    <Text style={styles.BtnTil} onPress={reset}>Reset Deck</Text>
                </Pressable>
            </View>
            <View style={styles.botMenu}>
                <Pressable style={styles} onPress={() => navigation.navigate("Play")}>
                    <Text style={styles}>Play</Text>
                </Pressable>
                <Pressable style={styles} onPress={() => navigation.navigate("Setting")}>
                    <Text style={styles}>Setting</Text>
                </Pressable>
            </View>
            <StatusBar style='auto'></StatusBar>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1F1F1',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        top: -40,
        fontSize: 20,
        fontWeight: "bold",
        backgroundColor: "white",
        width: "100%",
        lineHeight: 70,
        display: "flex",
        textAlign: "center"
    },
    card: {
        height: 400,
        width: "100%",
        backgroundColor: "#FF6969",
        borderRadius: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardContainer: {
        height: 400,
        width: "90%",
    },
    cardText: {
        fontSize: 200,
        color: "white",
    },
    arrowBtn: {
        borderWidth: 1,
        borderRadius: 4,
        borderColor: "#FF6969",
        width: 70,
        height: 25,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "white",
    },
    arrowBtnTil: {
        color: "#FF6969",
    },
    BtnTil: {
        color: "#FF6969",
        fontSize: 20
    },
    Btn: {
        width: 320,
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "white",
        margin: 10,
        borderRadius: 10
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
