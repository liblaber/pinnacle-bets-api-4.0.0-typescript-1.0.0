import { z } from 'zod';

export const straightBetV4Side = z.enum(['OVER', 'UNDER']);

export type StraightBetV4Side = z.infer<typeof straightBetV4Side>;
