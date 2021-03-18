import React from "react";
import {
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
  Image,
  ImageSourcePropType,
} from "react-native";
import { colors } from "../../constants/dogeStyle";

interface SingleUserAvatarProps {
  style?: StyleProp<ViewStyle>;
  src: ImageSourcePropType;
  size?: "default" | "sm" | "xs";
  isOnline?: boolean;
}

export const singleUserAvatarSize = {
  default: 80,
  sm: 40,
  xs: 24,
};

export const SingleUserAvatar: React.FC<SingleUserAvatarProps> = ({
  src,
  size = "default",
  style,
  isOnline = false,
}) => {
  return (
    <View style={[style, styles[size + "Avatar"]]}>
      <Image source={src} style={styles[size + "Avatar"]} />
      {isOnline && (
        <View style={[styles[size + "Indicator"], styles.indicator]} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  defaultAvatar: {
    height: singleUserAvatarSize.default,
    width: singleUserAvatarSize.default,
    borderRadius: singleUserAvatarSize.default / 2,
  },
  smAvatar: {
    height: singleUserAvatarSize.sm,
    width: singleUserAvatarSize.sm,
    borderRadius: singleUserAvatarSize.sm / 2,
  },
  xsAvatar: {
    height: singleUserAvatarSize.xs,
    width: singleUserAvatarSize.xs,
    borderRadius: singleUserAvatarSize.xs / 2,
  },
  indicator: {
    position: "absolute",
    borderColor: colors.primary900,
    backgroundColor: colors.accent,
  },
  defaultIndicator: {
    width: 24,
    height: 24,
    right: 2,
    bottom: -4,
    borderWidth: 4,
    borderRadius: 12,
  },
  smIndicator: {
    width: 12,
    height: 12,
    right: 2,
    bottom: -2,
    borderWidth: 2,
    borderRadius: 6,
  },
  xsIndicator: {
    width: 6,
    height: 6,
    right: 0,
    bottom: -1,
    borderWidth: 1,
    borderRadius: 3,
  },
});
