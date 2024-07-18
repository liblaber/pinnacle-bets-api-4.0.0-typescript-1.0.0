import { z } from 'zod';

export const placeBetRequestWinRiskStake = z.enum(['WIN', 'RISK']);

export type PlaceBetRequestWinRiskStake = z.infer<typeof placeBetRequestWinRiskStake>;
