import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width: screenWidth } = Dimensions.get('window')

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: '#fff'
  },
  imageWrap: {
    height: 400,
  },
  imageItem: {
    width: screenWidth - 60,
    height: screenWidth - 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }),
    backgroundColor: 'white',
    borderRadius: 8,
  },
  // image: {
  //   ...StyleSheet.absoluteFillObject,
  //   resizeMode: 'cover',
  // },
  contentWrap: {
    marginTop: 20,
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    justifyContent: 'flex-start'
  },
  title: {
    fontWeight: '700',
    fontSize: 19
  },
  description: {
    fontWeight: '400',
    fontSize: 17,
    marginBottom: 10,
  },
  productInfo: {
    fontWeight: '400',
    marginBottom: 10,
    fontSize: 14,
    color: '#6a6767'
  },
  priceWrap: {
    marginTop: 5,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  priceText: {
    fontSize: 22,
    fontWeight: '700',
    marginLeft: 5
  },
});

export default styles;
