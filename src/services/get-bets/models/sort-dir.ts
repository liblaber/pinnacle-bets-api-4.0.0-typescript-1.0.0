import { z } from 'zod';

export const sortDir = z.enum(['ASC', 'DESC']);

export type SortDir = z.infer<typeof sortDir>;
