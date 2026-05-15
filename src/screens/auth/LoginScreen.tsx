import React from 'react';
import {
  Alert,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import ScreenLayout from '../../components/ScreenLayout';
import AppInput from '../../components/AppInput';
import AppButton from '../../components/AppButton';
import colors from '../../theme/colors';
import { loginValidation } from '../../utils/validation';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { loginUser } from '../../redux/slices/authSlice';
const { width, height } = Dimensions.get('window');

const LoginScreen = () => {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const storedUser = useAppSelector(state => state.auth.user);

  return (
    <ScreenLayout>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior='height'>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.mainContainer}
        >
          <Image
            source={require('../../assets/topVector.png')}
            style={styles.topImage}
          />
          <View style={styles.container}>
            <View style={styles.topArea}>
              <Text style={styles.headingText}>Hello</Text>
              <Text style={styles.subText}>Sign in to your account</Text>
            </View>

            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              validationSchema={loginValidation}
              onSubmit={values => {
                if (
                  storedUser?.email === values.email &&
                  storedUser?.password === values.password
                ) {
                  dispatch(loginUser(storedUser));
                } else {
                  Alert.alert('Error', 'Invalid credentials');
                }
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
              }) => (
                <>
                  <AppInput
                    title="Email"
                    placeholder="Enter email"
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    error={touched.email && errors.email ? errors.email : ''}
                  />

                  <AppInput
                    title="Password"
                    placeholder="Enter password"
                    value={values.password}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    secureTextEntry
                    error={
                      touched.password && errors.password ? errors.password : ''
                    }
                  />

                  <AppButton title="Login" onPress={() => handleSubmit()} />
                </>
              )}
            </Formik>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('Register')}
            >
              <Text style={styles.bottomText}>Create new account</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
    paddingBottom: 80,
  },
  topImage: {
    width: '100%',
    height: 130,
  },
  container: {
    paddingTop: height * 0.05,
    paddingHorizontal: width * 0.06,
  },
  topArea: {
    marginBottom: width * 0.08,
  },
  headingText: {
    fontSize: width * 0.1,
    color: colors.black,
    fontWeight: '700',
    textAlign: 'center',
  },
  subText: {
    textAlign: 'center',
    fontSize: width * 0.045,
    color: colors.gray,
    marginTop: width * 0.02,
  },
  bottomText: {
    textAlign: 'center',
    marginTop: width * 0.06,
    color: colors.primary,
    fontSize: width * 0.042,
    fontWeight: '600',
  },
});

export default LoginScreen;
