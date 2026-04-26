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
      <Text style={styles.header}>Portfolio</Text>
      <Text style={styles.subtitle}>
        Track SIPs, gains, and diversification for mutual funds.
      </Text>
      <PrimaryButton
        label="Next: Back to Home"
        onPress={() => navigation.navigate('FundsHome')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: { fontSize: 22, fontWeight: '700', marginBottom: 8 },
  subtitle: { fontSize: 14, color: '#555', marginBottom: 16 },
});
