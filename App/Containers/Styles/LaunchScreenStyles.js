import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    paddingBottom: Metrics.baseMargin,
    backgroundColor: Colors.background
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: 50,
    width: 50,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  centered: {
    alignItems: 'center'
  }
})
