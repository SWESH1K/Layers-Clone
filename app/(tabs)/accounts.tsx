import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const accounts = () => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
        <Text>Accounts Page</Text>
        <Link href="/accountinfo" style={{alignSelf: 'flex-start'}}>
          <Text>Account Info</Text>
        </Link>
    </View>
  )
}

export default accounts