import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  TouchableOpacityProps,
} from 'react-native';

type IconName = 'account' | 'phone' | 'email' | 'pencil';

type InfoRowProps = {
  iconName: IconName;
  label: string;
  onPress?: () => void;
  disabled?: boolean;
  containerStyle?: ViewStyle;
  labelStyle?: TextStyle;
  accessibilityLabel?: string;
};

const ICON_SIZE = 22;
const TOUCH_MIN = 44;

const colors = {
  rowBg: '#F2F2F2',
  textPrimary: '#0F172A',
  textSecondary: '#475569',
  icon: '#334155',
  divider: '#E5E7EB',
  rowBgDisabled: '#F5F6F7',
  iconDisabled: '#94A3B8',
};

const spacing = {
  rowPaddingV: 12,
  rowPaddingH: 14,
  rowGap: 12,
  radius: 10,
};

function getMCI() {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const mod = require('react-native-vector-icons/MaterialCommunityIcons');
    return (mod?.default ?? mod) as React.ComponentType<{ name: string; size: number; color: string }>;
  } catch {
    return null;
  }
}

const MaterialCommunityIcons = getMCI();

/**
 * Fallback de icono accesible si no está instalada la librería vector-icons.
 */
const IconFallback: React.FC<{ label: string; disabled?: boolean }> = ({ label, disabled }) => {
  return (
    <View
      accessible
      accessibilityRole="image"
      accessibilityLabel={`Icono ${label}`}
      style={[
        styles.iconFallback,
        { backgroundColor: disabled ? colors.rowBgDisabled : '#EEF2F7' },
      ]}
    >
      <Text style={[styles.iconFallbackText, { color: disabled ? colors.iconDisabled : colors.icon }]}>
        ⦿
      </Text>
    </View>
  );
};

const renderIcon = (name: IconName, disabled?: boolean) => {
  const color = disabled ? colors.iconDisabled : colors.icon;
  if (MaterialCommunityIcons) {
    return <MaterialCommunityIcons name={name} size={ICON_SIZE} color={color} />;
  }
  return <IconFallback label={name} disabled={disabled} />;
};

const InfoRowComponent: React.FC<InfoRowProps> = ({
  iconName,
  label,
  onPress,
  disabled = false,
  containerStyle,
  labelStyle,
  accessibilityLabel,
}) => {
  const content = (
    <View
      style={[
        styles.row,
        { backgroundColor: disabled ? colors.rowBgDisabled : colors.rowBg },
        containerStyle,
      ]}
      accessible
      accessibilityRole={onPress && !disabled ? 'button' : 'text'}
      accessibilityLabel={accessibilityLabel ?? label}
    >
      <View style={styles.iconContainer}>{renderIcon(iconName, disabled)}</View>
      <Text
        numberOfLines={1}
        style={[styles.label, disabled ? styles.labelDisabled : undefined, labelStyle]}
      >
        {label || '—'}
      </Text>
    </View>
  );

  if (onPress && !disabled) {
    const touchProps: TouchableOpacityProps = {
      onPress,
      activeOpacity: 0.7,
      hitSlop: { top: 8, bottom: 8, left: 8, right: 8 },
      accessible: true,
      accessibilityRole: 'button',
      accessibilityLabel: accessibilityLabel ?? label,
    };
    return (
      <TouchableOpacity style={styles.touchMinArea} {...touchProps}>
        {content}
      </TouchableOpacity>
    );
  }

  return <View style={styles.touchMinArea}>{content}</View>;
};

export const InfoRow = React.memo(InfoRowComponent);

const styles = StyleSheet.create({
  touchMinArea: {
    minHeight: TOUCH_MIN,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: spacing.radius,
    paddingVertical: spacing.rowPaddingV,
    paddingHorizontal: spacing.rowPaddingH,
  },
  iconContainer: {
    width: ICON_SIZE + 8,
    height: ICON_SIZE + 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.rowGap,
  },
  label: {
    flex: 1,
    color: colors.textPrimary,
    fontSize: 16,
  },
  labelDisabled: {
    color: colors.textSecondary,
  },
  iconFallback: {
    width: ICON_SIZE + 8,
    height: ICON_SIZE + 8,
    borderRadius: (ICON_SIZE + 8) / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconFallbackText: {
    fontSize: 12,
  },
});
