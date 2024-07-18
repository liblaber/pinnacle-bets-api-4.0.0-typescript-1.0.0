import { z } from 'zod';

export const specialBetResponseStatus = z.enum(['ACCEPTED', 'PROCESSED_WITH_ERROR']);

export type SpecialBetResponseStatus = z.infer<typeof specialBetResponseStatus>;
