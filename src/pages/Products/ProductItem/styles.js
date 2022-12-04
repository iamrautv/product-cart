import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
    flexDirection: 'row'
  },
  leftGrid: {
    paddingRight: 10,
  },
  thumbnail: {
    height: 100,
    width: 100
  },
  rightGrid: {
    flex: 1,
    alignItems: 'flex-start'
  },
  title: {
    fontWeight: '700',
    fontSize: 17
  },
  description: {
    fontWeight: '400',
    marginBottom: 10,
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
