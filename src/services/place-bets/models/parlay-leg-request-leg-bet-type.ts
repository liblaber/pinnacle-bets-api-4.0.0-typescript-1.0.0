import { z } from 'zod';

export const parlayLegRequestLegBetType = z.enum(['MONEYLINE', 'SPREAD', 'TOTAL_POINTS']);

export type ParlayLegRequestLegBetType = z.infer<typeof parlayLegRequestLegBetType>;
