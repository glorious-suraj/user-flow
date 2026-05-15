import React, { ReactNode } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import colors from '../theme/colors';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props {
  children: ReactNode;
}

const ScreenLayout = ({ children }: Props) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.mainWrap}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  mainWrap: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

export default ScreenLayout;
