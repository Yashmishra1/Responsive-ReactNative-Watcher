import React from 'react';
import {View, TextInput, Image, Text,} from 'react-native';
import {s, vs, ms, mvs} from 'react-native-size-matters';
import {ScaledSheet} from 'react-native-size-matters';
import Fonts from '../theme/fonts';
import Colors from '../theme/colors';

const CustomInput = ({
  placeholder,
  secureTextEntry,
  keyboardType,
  onChangeText,
  icon,
  autoCorrect,
  title,
  leftImage,
  placeholderColor,
  lineHeight,
  multiline,
  style,
  Inputstyle,
  value,
  textColor
}) => {
  return (
      <View style={styles.box}>
        <Image style={Inputstyle} source={icon} resizeMode="contain" />
        <View>
          <Text
            style={[
              styles.heading,
              {fontFamily: Fonts.PoppinsLight, color: Colors.grey},
            ]}>
            {title}
          </Text>
          <TextInput
            style={style}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            onChangeText={onChangeText}
            autoCorrect={autoCorrect}
            multiline={multiline}
            lineHeight={lineHeight}
            autoFocus={true}
            value={value}
          />
        </View>
        <Image
          style={styles.rightImage}
          source={leftImage}
          resizeMode="contain"
        />
      </View>
  );
};
const styles = ScaledSheet.create({
  box: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderColor: '#e6e6e6',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: '115@vs',
    height: '50@vs',
    width: '310@s',
  },
  inputimage: {
    width: '21@s',
    height: '15@vs',
  },
  rightImage: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexDirection: 'row',
    width: '24@s',
    height: '24@vs',
  },
  heading: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'grey',
    fontSize: 14,
    marginTop:10,
  },
});
export default CustomInput;
