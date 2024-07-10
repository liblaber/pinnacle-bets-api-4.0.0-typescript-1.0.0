// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

export const roundRobinOption = z.enum([
  'Parlay',
  'TwoLegRoundRobin',
  'ThreeLegRoundRobin',
  'FourLegRoundRobin',
  'FiveLegRoundRobin',
  'SixLegRoundRobin',
  'SevenLegRoundRobin',
  'EightLegRoundRobin',
]);

export type RoundRobinOption = z.infer<typeof roundRobinOption>;