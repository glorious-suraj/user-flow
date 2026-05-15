import React from 'react';
import {
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
  Text,
  Dimensions,
  View,
} from 'react-native';
import colors from '../theme/colors';
const { width } = Dimensions.get('window');
interface Props {
  title: string;
  onPress: () => void;
  loading?: boolean;
}

const AppButton = ({ title, onPress, loading }: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.buttonBox}
    >
      {loading ? (
        <ActivityIndicator color={colors.white} />
      ) : (
        <View style={styles.row}>
          <Text style={styles.buttonText}>{title}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonBox: {
    height: width * 0.14,
    backgroundColor: '#E056A0',
    borderRadius: width * 0.04,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: width * 0.03,
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttonText: {
    color: colors.white,
    fontSize: width * 0.052,
    fontWeight: '700',
    marginRight: width * 0.03,
  },
});

export default AppButton;
