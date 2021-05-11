import React,{ useState, useEffect } from 'react'
import { TextInput } from 'react-native'
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import { Text } from 'react-native-elements'
import SingleRestaurant from '../components/SingleRestaurant'


function HomeScreen() {
    const [restaurants, setRestaurants] = useState()

    useEffect(() => {
      fetch('https://bocacode-intranet-api.web.app/restaurants')
        .then((response) => response.json())
        .then((data) => setRestaurants(data))
        .catch((err) => console.log(err))
    }, [])

    return (

    <SafeAreaView style={styles.container}>
      <Text h2> Boca Code Restaurants</Text>
      <ScrollView>
        {restaurants &&
          restaurants.map((eachRestaurant) => {
            return (
              <SingleRestaurant key={eachRestaurant.id} eachRestaurant={eachRestaurant}/>
            )
          })}
      </ScrollView>
      <TextInput style={styles.inputFields} placeholder="Restaurant Name" />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputFields: {
    alignSelf: 'center',
    height: 40,
    width: '80%',
    textAlign: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#efefef',
    marginVertical: 10,
  },
  containerHeading: {
    color: 'white',
    fontSize: 30,
    fontWeight: '800',
    textAlign: 'center',
  },
  containerText: {
    color: 'white',
  },
  containerImg: {
    width: 300,
    height: 200,
  },
})

export default HomeScreen
