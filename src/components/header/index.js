import React from 'react'
import { View, Text } from 'react-native'


const Header = ({ title }) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default Header;