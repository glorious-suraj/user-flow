import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import colors from '../theme/colors';
const { width } = Dimensions.get('window');

interface Props {
  item: {
    id: number;
    title: string;
    body: string;
  };
}

const DataCard = ({ item }: Props) => {
  return (
    <View style={styles.cardWrap}>
      <View style={styles.idBox}>
        <Text style={styles.idText}>#{item.id}</Text>
      </View>
      <Text style={styles.titleText}>{item.title}</Text>
      <Text style={styles.bodyText}>{item.body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrap: {
    backgroundColor: colors.white,
    borderRadius: width * 0.05,
    padding: width * 0.045,
    marginBottom: width * 0.04,
    borderWidth: 1,
    borderColor: colors.border,
  },
  idBox: {
    width: width * 0.11,
    height: width * 0.11,
    borderRadius: width,
    backgroundColor: '#EEF2FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: width * 0.03,
  },
  idText: {
    color: colors.primary,
    fontWeight: '700',
  },
  titleText: {
    color: colors.black,
    fontSize: width * 0.043,
    fontWeight: '700',
    marginBottom: width * 0.025,
    textTransform: 'capitalize',
  },
  bodyText: {
    color: colors.gray,
    fontSize: width * 0.037,
    lineHeight: width * 0.06,
  },
});

export default DataCard;
