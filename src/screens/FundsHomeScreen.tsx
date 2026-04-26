import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { PrimaryButton } from '@myorg/shared-ui';
import type { MutualFundsStackParamList } from '../types';

type Props = NativeStackScreenProps<MutualFundsStackParamList, 'FundsHome'>;

const funds = [
  { id: '1', name: 'Bluechip Large Cap', returns: '11.2% p.a.' },
  { id: '2', name: 'Growth Mid Cap', returns: '13.8% p.a.' },
  { id: '3', name: 'Explorer Small Cap', returns: '14.5% p.a.' },
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
      <Text style={styles.subtitle}>Indicative return: {item.returns}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Invest in mutual funds</Text>
      <Text style={styles.intro}>
        Explore categories, then open a scheme to see details and next steps.
      </Text>
      <FlatList
        data={funds}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
      <PrimaryButton
        label="Open first scheme"
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
    marginBottom: 8,
    color: '#0f172a',
  },
  intro: {
    fontSize: 15,
    color: '#64748b',
    marginBottom: 16,
    lineHeight: 22,
  },
  card: {
    padding: 16,
    backgroundColor: '#f1f5f9',
    borderRadius: 8,
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0f172a',
  },
  subtitle: {
    fontSize: 14,
    marginTop: 4,
    color: '#475569',
  },
});
