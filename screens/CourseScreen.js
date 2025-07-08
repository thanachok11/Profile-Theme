import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import { LinearGradient } from 'expo-linear-gradient';

export default function SubjectScreen() {
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
            <View style={styles.container}>
                <View
                    style={[
                        styles.card,
                        {
                            backgroundColor: theme.name === 'light' ? '#fff' : '#121212',
                            borderColor: theme.name === 'light' ? '#ccc' : '#444',
                            borderWidth: 1,
                        },
                    ]}
                >
                    <Text style={[styles.title, { color: theme.text }]}>
                        📚 รายวิชา: Hybrid Mobile Application Development
                    </Text>
                    <Text style={[styles.content, { color: theme.text }]}>
                        - พัฒนาแอปพลิเคชันข้ามแพลตฟอร์มด้วย React Native{'\n'}
                        - ใช้ Expo, Navigation, Context API อย่างมีประสิทธิภาพ{'\n'}
                        - สร้าง UI ที่สวยงาม พร้อมรองรับ Dark/Light Theme{'\n'}
                        - แบ่งโครงสร้างโค้ดเป็น Modular Components อย่างชัดเจน
                    </Text>
                </View>
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
    container: {
        padding: 20,
        width: '100%',
    },
    card: {
        padding: 24,
        borderRadius: 20,
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 6,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    content: {
        fontSize: 16,
        lineHeight: 24,
    },
});
