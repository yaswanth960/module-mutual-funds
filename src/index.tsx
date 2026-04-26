import type { ComponentType } from 'react';
import { MutualFundsNavigator } from './MutualFundsNavigator';

type ModuleContract = {
  name: string;
  root: ComponentType;
};

const mutualFundsModule: ModuleContract = {
  name: 'mutual-funds',
  root: MutualFundsNavigator,
};

export default mutualFundsModule;
