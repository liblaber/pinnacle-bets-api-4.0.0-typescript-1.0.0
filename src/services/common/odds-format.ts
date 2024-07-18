import { z } from 'zod';

export const oddsFormat = z.enum(['AMERICAN', 'DECIMAL', 'HONGKONG', 'INDONESIAN', 'MALAY']);

export type OddsFormat = z.infer<typeof oddsFormat>;
