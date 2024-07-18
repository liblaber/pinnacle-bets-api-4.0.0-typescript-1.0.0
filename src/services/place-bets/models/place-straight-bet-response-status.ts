import { z } from 'zod';

export const placeStraightBetResponseStatus = z.enum(['ACCEPTED', 'PENDING_ACCEPTANCE', 'PROCESSED_WITH_ERROR']);

export type PlaceStraightBetResponseStatus = z.infer<typeof placeStraightBetResponseStatus>;
