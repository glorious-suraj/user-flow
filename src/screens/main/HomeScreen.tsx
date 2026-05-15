import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ScreenLayout from '../../components/ScreenLayout';
import colors from '../../theme/colors';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchUsers } from '../../redux/slices/userSlice';
import DataCard from '../../components/DataCard';
const { width, height } = Dimensions.get('window');

const HomeScreen = () => {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const users = useAppSelector(state => state.users.data);
  const loading = useAppSelector(state => state.users.loading);
  const error = useAppSelector(state => state.users.error);
  const userData = useAppSelector(state => state.auth.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const renderPost = ({ item }: any) => {
    return <DataCard item={item} />;
  };

  const handleRefresh = () => {
    dispatch(fetchUsers());
  };

  if (loading && users.length === 0) {
    return (
      <ScreenLayout>
        <View style={styles.loaderWrap}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      </ScreenLayout>
    );
  }

  return (
    <ScreenLayout>
      <View style={styles.screenWrap}>
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.userName}>{userData?.fullName}</Text>
            <Text style={styles.subText}>API fetched content</Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Profile')}
            style={styles.profileButton}
          >
            <Text style={styles.profileText}>Profile</Text>
          </TouchableOpacity>
        </View>

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <FlatList
          data={users}
          renderItem={renderPost}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={handleRefresh} />
          }
          initialNumToRender={8}
          maxToRenderPerBatch={8}
          windowSize={10}
          removeClippedSubviews
        />
      </View>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  screenWrap: {
    flex: 1,
    paddingHorizontal: width * 0.05,
    paddingTop: height * 0.03,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: width * 0.05,
  },
  userName: {
    color: colors.black,
    fontSize: width * 0.06,
    fontWeight: '700',
    marginTop: width * 0.01,
  },
  subText: {
    color: colors.gray,
    fontSize: width * 0.037,
    marginTop: width * 0.01,
  },
  profileButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: width * 0.045,
    paddingVertical: width * 0.03,
    borderRadius: width * 0.03,
  },
  profileText: {
    color: colors.white,
    fontWeight: '700',
    fontSize: width * 0.035,
  },
  listContent: {
    paddingBottom: width * 0.06,
  },
  loaderWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: colors.danger,
    marginBottom: width * 0.04,
    fontSize: width * 0.035,
  },
});

export default HomeScreen;
