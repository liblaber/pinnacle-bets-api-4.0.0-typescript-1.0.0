import { z } from 'zod';

export const fillType = z.enum(['NORMAL', 'FILLANDKILL', 'FILLMAXLIMIT']);

export type FillType = z.infer<typeof fillType>;
