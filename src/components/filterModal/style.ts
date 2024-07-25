import {StyleSheet} from 'react-native';
import {COLOR} from '../../constants/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    paddingHorizontal: 15,

    height: '100%',
    width: '100%',
  },
  row: {
    width: '100%',
    marginVertical: 5,
    flexDirection: 'row',
  },
  radioButton: {
    borderWidth: 1,
    height: 20,
    width: 20,
    marginHorizontal: 10,
    borderRadius: 999,
  },
  checkBoxChosed: {
    backgroundColor: COLOR,
    flex: 1,
    margin: 2,
    borderRadius: 5,
  },
  checkBox: {
    borderWidth: 1,
    height: 20,
    width: 20,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  chosed: {
    backgroundColor: COLOR,
    flex: 1,
    margin: 2,
    borderRadius: 999,
  },
  modalText: {
    textAlign: 'center',
  },
});
