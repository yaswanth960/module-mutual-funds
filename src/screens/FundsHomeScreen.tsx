import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { PrimaryButton } from '@myorg/shared-ui';
import type { MutualFundsStackParamList } from '../types';

type Props = NativeStackScreenProps<MutualFundsStackParamList, 'FundsHome'>;

const funds = [
  { id: '1', name: 'Large Cap Funds are there', returns: '12%' },
  { id: '2', name: 'Mid Cap Fund', returns: '15%' },
  { id: '3', name: 'Small Cap Fund', returns: '18%' },
];

export function FundsHomeScreen({ navigation }: Props) {
  const renderItem = ({
    item,
  }: {
    item: { id: string; name: string; returns: string };
  }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate('FundDetails', {
          id: item.id,
          name: item.name,
          returns: item.returns,
        })
      }>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.subtitle}>Returns: {item.returns}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Mutual Funds</Text>
      <FlatList
        data={funds}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
      <PrimaryButton
        label="Next: Open First Fund"
        onPress={() =>
          navigation.navigate('FundDetails', {
            id: funds[0].id,
            name: funds[0].name,
            returns: funds[0].returns,
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 16,
  },
  card: {
    padding: 16,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 14,
    marginTop: 4,
    color: '#555',
  },
});
