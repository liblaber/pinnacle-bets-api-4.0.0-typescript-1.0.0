import { z } from 'zod';

export const roundRobinOptions = z.enum([
  'Parlay',
  'TwoLegRoundRobin',
  'ThreeLegRoundRobin',
  'FourLegRoundRobin',
  'FiveLegRoundRobin',
  'SixLegRoundRobin',
  'SevenLegRoundRobin',
  'EightLegRoundRobin',
]);

export type RoundRobinOptions = z.infer<typeof roundRobinOptions>;
