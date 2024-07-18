import { z } from 'zod';

export const placeTeaserBetLegResponseErrorCode = z.enum([
  'CANNOT_TEASER_LIVE_GAME',
  'CHECK_TEASER_ERROR',
  'INVALID_EVENT',
  'INVALID_LEG_BET',
  'INVALID_LEG_BET_TYPE',
  'LINE_CHANGED',
  'LINE_DOES_NOT_BELONG_TO_EVENT',
  'OFFLINE_EVENT',
  'PAST_CUTOFFTIME',
  'POINTS_ARE_NOT_ADJUSTED',
  'SYSTEM_ERROR_1',
  'SYSTEM_ERROR_2',
  'WAGER_DATA_MISSING',
  'LINE_IS_NOT_AVAILABLE',
  'TEASER_IS_NOT_ENABLED',
  'BETTING_SUSPENDED',
]);

export type PlaceTeaserBetLegResponseErrorCode = z.infer<typeof placeTeaserBetLegResponseErrorCode>;