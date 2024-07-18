import { z } from 'zod';

export const specialBetRequestWinRiskStake = z.enum(['WIN', 'RISK']);

export type SpecialBetRequestWinRiskStake = z.infer<typeof specialBetRequestWinRiskStake>;
