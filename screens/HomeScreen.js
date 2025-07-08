import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '../contexts/ThemeContext';

export default function HomeScreen({ navigation }) {
    const { theme } = useTheme();

    return (
        <LinearGradient
            colors={
                theme.name === 'light'
                    ? ['#e0f7fa', '#80deea']
                    : ['#2c3e50', '#4ca1af']
            }
            style={styles.gradientBackground}
        >
            <View
                style={[
                    styles.cardContainer,
                    {
                        backgroundColor: theme.name === 'light' ? '#ffffff' : '#121212',
                    },
                ]}
            >
                <Image
                    source={{
                        uri: 'https://avatars.githubusercontent.com/u/119285237?s=400',
                    }}
                    style={styles.profileImage}
                />
                <Text style={[styles.greeting, { color: theme.text }]}>
                    สวัสดีครับ ผมชื่อ ธนาโชค
                </Text>
                <Text style={[styles.subtitle, { color: theme.text }]}>
                    Developer & Content Creator
                </Text>
                <Text style={[styles.welcomeText, { color: theme.text }]}>
                    ขอบคุณที่เข้ามาชมแอปพลิเคชันของผม ที่รวบรวมผลงาน บทความ
                    และข้อมูลต่างๆ หวังว่าจะเป็นประโยชน์ และสร้างแรงบันดาลใจให้กับทุกคนครับ
                </Text>

                <TouchableOpacity
                    onPress={() => navigation.navigate('AboutMe')}
                    style={[
                        styles.button,
                        {
                            backgroundColor: theme.name === 'light' ? '#007AFF' : '#4ca1af',
                            shadowColor: theme.name === 'light' ? '#007AFF' : '#000',
                        },
                    ]}
                >
                    <Text style={styles.buttonText}>เกี่ยวกับผมเพิ่มเติม</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    gradientBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContainer: {
        backgroundColor: 'rgba(255,255,255,0.85)',
        padding: 30,
        borderRadius: 20,
        alignItems: 'center',
        marginHorizontal: 20,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 10,
        elevation: 5,
    },
    profileImage: {
        width: 160,
        height: 160,
        borderRadius: 80,
        borderWidth: 4,
        borderColor: '#fff',
        marginBottom: 20,
    },
    greeting: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 15,
    },
    welcomeText: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 30,
        lineHeight: 24,
        paddingHorizontal: 10,
    },
    button: {
        paddingVertical: 14,
        paddingHorizontal: 30,
        borderRadius: 25,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
});
