import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Text, StyleSheet } from 'react-native';
import { PrimaryButton } from '@myorg/shared-ui';
import type { MutualFundsStackParamList } from '../types';

type Props = NativeStackScreenProps<
  MutualFundsStackParamList,
  'FundsPortfolio'
>;

export function FundsPortfolioScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your portfolio (sample)</Text>
      <Text style={styles.subtitle}>
        Track SIPs, current value, and asset mix. In production this would sync
        with your account and show real balances.
      </Text>
      <PrimaryButton
        label="Back to fund list"
        onPress={() => navigation.navigate('FundsHome')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: { fontSize: 22, fontWeight: '700', marginBottom: 8, color: '#0f172a' },
  subtitle: { fontSize: 15, lineHeight: 22, color: '#475569', marginBottom: 16 },
});
