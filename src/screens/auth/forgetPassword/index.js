import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {
  Box,
  CustomText,
  CustomInput,
  CustomButton,
  ColorText,
} from '@components';
import Images from '@themes/images';

const ForgotPassword = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Box source={Images.Forgotlogo} />
      <Text style={styles.primarytext}>Forgot Password?</Text>
      <CustomText label="Please enter your email address to reset your password" />
      <View style={styles.inputBox}>
        <CustomInput placeholder="Email" keyboardType="email-address" />
      </View>
      <View style={styles.colorInput}>
        <CustomButton onPress={() => navigation.navigate('verificationCode')} text="Send >" />
      </View>
      <View style={styles.cancelButton}>
        <ColorText onPress={() => navigation.navigate('login')} text="Cancel" />
      </View>
    </View>
  );
};
export default ForgotPassword;
