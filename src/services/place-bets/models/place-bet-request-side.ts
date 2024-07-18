import { z } from 'zod';

export const placeBetRequestSide = z.enum(['OVER', 'UNDER']);

export type PlaceBetRequestSide = z.infer<typeof placeBetRequestSide>;
