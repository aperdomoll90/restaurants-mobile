import React from 'react'
import { Card, Text } from 'react-native-elements'
import { StyleSheet, View, Button } from 'react-native'

function SingleRestaurant({ eachRestaurant }) {
  return (
    <View>
      <Card containerStyle={{ maxWidth: 300 }}>
        <Card.Title> {eachRestaurant.name}</Card.Title>
        <Card.Divider />
        <Card.Image
          source={{
            uri: eachRestaurant.photoUrl,
          }}
        >
          <Text style={styles.containerHeading}>{eachRestaurant.address}</Text>
          
        </Card.Image>
      </Card>
    </View>
  )
}
const styles = StyleSheet.create({
  containerHeading: {
    color: 'white',
    fontSize: 30,
    fontWeight: '800',
    textAlign: 'center',
  },
})

export default SingleRestaurant
