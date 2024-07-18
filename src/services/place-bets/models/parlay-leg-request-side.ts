import { z } from 'zod';

export const parlayLegRequestSide = z.enum(['OVER', 'UNDER']);

export type ParlayLegRequestSide = z.infer<typeof parlayLegRequestSide>;
