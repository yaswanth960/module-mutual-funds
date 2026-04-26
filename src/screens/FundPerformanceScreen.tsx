import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Text, StyleSheet } from 'react-native';
import { PrimaryButton } from '@myorg/shared-ui';
import type { MutualFundsStackParamList } from '../types';

type Props = NativeStackScreenProps<
  MutualFundsStackParamList,
  'FundPerformance'
>;

export function FundPerformanceScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Performance & risk</Text>
      <Text style={styles.subtitle}>
        Here you would chart rolling returns, drawdowns, and benchmark
        comparison. This demo screen links onward to a sample portfolio view.
      </Text>
      <PrimaryButton
        label="Go to portfolio"
        onPress={() => navigation.navigate('FundsPortfolio')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: { fontSize: 22, fontWeight: '700', marginBottom: 8, color: '#0f172a' },
  subtitle: { fontSize: 15, lineHeight: 22, color: '#475569', marginBottom: 16 },
});
