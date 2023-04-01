import { ScrollView, Image, View, Text, StyleSheet } from 'react-native'
import OutlinedButton from '../components/UI/OutlinedButton'
import { Colors } from '../constants/colors'
import { useEffect } from 'react'

const PlaceDetails = ({ route }) => {
  function showOnMapHandler() {}

  const selectedPlaceId = route.params.placeId

  useEffect(() => {
    // use selectedPlaceId to fetch data
  }, [selectedPlaceId])

  return (
    <ScrollView>
      <Image style={styles.image} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>Address</Text>
        </View>
        <OutlinedButton icon='map' onPress={showOnMapHandler}>
          View On Map
        </OutlinedButton>
      </View>
    </ScrollView>
  )
}

export default PlaceDetails

const styles = StyleSheet.create({
  image: {
    height: '35%',
    minHeight: 300,
    width: '100%',
  },
  locationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: Colors.primary500,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
})
