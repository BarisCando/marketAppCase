import {Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import {styles} from './style';

type Props = {
  productBrand?: string;
  onlyTitle?: boolean;
  setVisible?: (value: boolean) => void;
};

const Header = ({productBrand, setVisible, onlyTitle}: Props) => {
  return (
    <>
      <View style={styles.container}>
        {onlyTitle ? null : (
          <TouchableOpacity onPress={() => setVisible && setVisible(false)}>
            <Image
              style={styles.backIcon}
              source={require('../../assets/images/backButton.png')}
            />
          </TouchableOpacity>
        )}
        <Text style={styles.title}>
          {onlyTitle ? 'E-Market' : productBrand}
        </Text>
        <Text>{onlyTitle}</Text>
      </View>
    </>
  );
};

export default Header;
