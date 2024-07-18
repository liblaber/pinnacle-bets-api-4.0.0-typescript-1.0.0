import { z } from 'zod';

export const betlist = z.enum(['SETTLED', 'RUNNING', 'ALL']);

export type Betlist = z.infer<typeof betlist>;
