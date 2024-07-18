import { z } from 'zod';

export const placeParlayBetResponseStatus = z.enum(['ACCEPTED', 'PROCESSED_WITH_ERROR']);

export type PlaceParlayBetResponseStatus = z.infer<typeof placeParlayBetResponseStatus>;
