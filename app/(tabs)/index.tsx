import { View, Text, Button, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import DownloadPicture from '@/components/BottomSheetComponent';

const explore = () => {
  const [pictureOpen, setPictureOpen] = useState(false);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
          <Text style={{alignSelf: 'center'}}>Explore Page</Text>
          <Button title='Open Bottom Sheet' onPress={() => {
            setPictureOpen(true);
          }}></Button>
          { pictureOpen && <DownloadPicture onClose={() => {
            setPictureOpen(false);
          }}/> }
      </View>
    </SafeAreaView>
  )
}

export default explore