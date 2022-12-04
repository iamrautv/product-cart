import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrap: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    flexDirection: 'row',
    width: 100,
    overflow: 'hidden',
  },
  countWrap: {
    width: 40,
    borderLeftColor: '#ddd',
    borderRightColor: '#ddd',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  countText: {
    fontSize: 15
  },
  tickerBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 7,
    flex: 1
  },
  disabledBtn: {
    backgroundColor: '#ddd'
  }
});

export default styles;
