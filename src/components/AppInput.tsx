import React, { useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import colors from '../theme/colors';
const { width } = Dimensions.get('window');
interface Props {
  title: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  onBlur?: (e: any) => void;
  secureTextEntry?: boolean;
  error?: string;
}

const AppInput = ({
  title,
  placeholder,
  value,
  onChangeText,
  onBlur,
  secureTextEntry,
  error,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          onBlur={onBlur}
          secureTextEntry={secureTextEntry && !showPassword}
          style={styles.input}
          placeholderTextColor="#999"
        />

        {secureTextEntry && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Text style={{ fontSize: 20 }}>{showPassword ? '👁️' : '🔒'}</Text>
          </TouchableOpacity>
        )}
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: width * 0.04,
  },
  title: {
    fontSize: width * 0.04,
    marginBottom: 8,
    fontWeight: '600',
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    paddingHorizontal: 15,
    backgroundColor: colors.white,
  },
  input: {
    flex: 1,
    height: 55,
    fontSize: width * 0.04,
    color: colors.black,
  },
  error: {
    color: colors.danger,
    marginTop: 5,
    fontSize: 13,
  },
});

export default AppInput;
