import React from 'react';
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import ScreenLayout from '../../components/ScreenLayout';
import colors from '../../theme/colors';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { logoutUser } from '../../redux/slices/authSlice';
const { width, height } = Dimensions.get('window');
import MaterialIcon from '@react-native-vector-icons/material-design-icons';

const ProfileScreen = () => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector(state => state.auth.user);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <ScreenLayout>
      <View style={styles.screenWrap}>
        <View style={styles.profileCard}>
          <View style={styles.avatarBox}>
            <MaterialIcon
              name="account-circle-outline"
              size={width * 0.13}
              color={colors.primary}
            />
          </View>
          <Text style={styles.nameText}>{userData?.fullName}</Text>
          <Text style={styles.emailText}>{userData?.email}</Text>
        </View>

        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <Text style={styles.infoTitle}>Account</Text>
            <Text style={styles.activeText}>Active</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoTitle}>Storage</Text>
            <Text style={styles.infoValue}>Redux Persist</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoTitle}>State</Text>
            <Text style={styles.infoValue}>Redux Toolkit</Text>
          </View>
        </View>

        <Pressable onPress={handleLogout} style={styles.logoutButton}>
          <Text style={styles.logoutText}>Logout</Text>
        </Pressable>
      </View>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  screenWrap: {
    flex: 1,
    paddingHorizontal: width * 0.06,
    paddingTop: height * 0.05,
    paddingBottom: width * 0.05,
  },
  profileCard: {
    backgroundColor: colors.white,
    borderRadius: width * 0.06,
    paddingVertical: width * 0.08,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  avatarBox: {
    width: width * 0.22,
    height: width * 0.22,
    borderRadius: width,
    backgroundColor: '#EEF2FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: width * 0.04,
  },
  nameText: {
    color: colors.black,
    fontSize: width * 0.055,
    fontWeight: '700',
    marginBottom: width * 0.015,
  },
  emailText: {
    color: colors.gray,
    fontSize: width * 0.038,
  },
  infoCard: {
    backgroundColor: colors.white,
    marginTop: width * 0.05,
    borderRadius: width * 0.05,
    padding: width * 0.05,
    borderWidth: 1,
    borderColor: colors.border,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: width * 0.04,
  },
  infoTitle: {
    color: colors.gray,
    fontSize: width * 0.038,
  },
  infoValue: {
    color: colors.black,
    fontSize: width * 0.038,
    fontWeight: '600',
  },
  activeText: {
    color: '#16A34A',
    fontSize: width * 0.038,
    fontWeight: '700',
  },
  logoutButton: {
    marginTop: 'auto',
    height: width * 0.14,
    backgroundColor: colors.danger,
    borderRadius: width * 0.04,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutText: {
    color: colors.white,
    fontSize: width * 0.042,
    fontWeight: '700',
  },
});

export default ProfileScreen;
