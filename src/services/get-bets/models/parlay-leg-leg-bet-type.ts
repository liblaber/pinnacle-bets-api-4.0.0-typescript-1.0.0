import { z } from 'zod';

export const parlayLegLegBetType = z.enum(['MONEYLINE', 'SPREAD', 'TOTAL_POINTS']);

export type ParlayLegLegBetType = z.infer<typeof parlayLegLegBetType>;
