import { z } from 'zod';

export const placeBetRequestBetType = z.enum(['MONEYLINE', 'TEAM_TOTAL_POINTS', 'SPREAD', 'TOTAL_POINTS']);

export type PlaceBetRequestBetType = z.infer<typeof placeBetRequestBetType>;
