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
        Latest annual return: {returns}. Review strategy and risk profile.
      </Text>
      <PrimaryButton
        label="Next: Performance"
        onPress={() => navigation.navigate('FundPerformance')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: { fontSize: 22, fontWeight: '700', marginBottom: 8 },
  subtitle: { fontSize: 14, color: '#555', marginBottom: 16 },
});
