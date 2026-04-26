import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Text, StyleSheet } from 'react-native';
import { PrimaryButton } from '@myorg/shared-ui';
import type { MutualFundsStackParamList } from '../types';

type Props = NativeStackScreenProps<MutualFundsStackParamList, 'FundDetails'>;

export function FundDetailsScreen({ route, navigation }: Props) {
  const { name, returns } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{name}</Text>
      <Text style={styles.subtitle}>
        Stated return: {returns}. Past performance does not guarantee future
        results. Review the scheme document and your risk profile before
        investing.
      </Text>
      <PrimaryButton
        label="View performance history"
        onPress={() => navigation.navigate('FundPerformance')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: { fontSize: 22, fontWeight: '700', marginBottom: 8, color: '#0f172a' },
  subtitle: { fontSize: 15, lineHeight: 22, color: '#475569', marginBottom: 16 },
});
