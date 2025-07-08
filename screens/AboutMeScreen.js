import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import { LinearGradient } from 'expo-linear-gradient';

export default function AboutMeScreen({ navigation }) {
    const { theme } = useTheme();
    const skills = ['ReactJS', 'NextJS', 'NodeJS', 'Python', 'JavaScript', 'TypeScript', 'UI/UX'];

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
                    <Image
                        source={{
                            uri: 'https://avatars.githubusercontent.com/u/119285237?s=400',
                        }}
                        style={styles.profileImage}
                    />
                    <Text style={[styles.name, { color: theme.text }]}>นายธนาโชค สุวรรณ์</Text>
                    <Text style={[styles.id, { color: theme.text }]}>รหัสนิสิต: 653450287-7</Text>
                    <Text style={[styles.major, { color: theme.text }]}>วิทยาการคอมพิวเตอร์และสารสนเทศ</Text>
                    <Text style={[styles.university, { color: theme.text }]}>มหาวิทยาลัยขอนแก่น</Text>

                    <Text style={[styles.sectionTitle, { color: theme.text }]}>💼 ความสามารถ</Text>
                    <View style={styles.skillContainer}>
                        {skills.map((skill, index) => (
                            <View
                                key={index}
                                style={[
                                    styles.skillBadge,
                                    { backgroundColor: theme.name === 'light' ? '#007AFF' : '#4ca1af' },
                                ]}
                            >
                                <Text style={styles.skillText}>{skill}</Text>
                            </View>
                        ))}
                    </View>
                    <TouchableOpacity
                        style={[
                            styles.button,
                            {
                                backgroundColor: theme.name === 'light' ? '#34C759' : '#27ae60',
                                marginTop: 10,
                            },
                        ]}
                        onPress={() => navigation.navigate('CourseScreen')}
                    >
                        <Text style={styles.buttonText}>📚 เกี่ยวกับรายวิชา</Text>
                    </TouchableOpacity>
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
        alignItems: 'center',
    },
    card: {
        padding: 24,
        borderRadius: 20,
        alignItems: 'center',
        width: '100%',
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 6,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 16,
        borderWidth: 3,
        borderColor: '#fff',
    },
    name: {
        fontSize: 24,
        fontWeight: '700',
    },
    id: {
        fontSize: 16,
        marginBottom: 8,
    },
    major: {
        fontSize: 16,
    },
    university: {
        fontSize: 16,
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginTop: 20,
        marginBottom: 10,
        alignSelf: 'flex-start',
    },
    skillContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: 20,
    },
    skillBadge: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        margin: 6,
    },
    skillText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#fff',
    },
    button: {
        marginTop: 10,
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 25,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
