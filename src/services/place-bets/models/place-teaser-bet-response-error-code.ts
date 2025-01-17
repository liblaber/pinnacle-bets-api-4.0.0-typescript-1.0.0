// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

export const placeTeaserBetResponseErrorCode = z.enum([
  'ABOVE_MAX_BET_AMOUNT',
  'ALL_BETTING_CLOSED',
  'BELOW_MIN_BET_AMOUNT',
  'BLOCKED_BETTING',
  'BLOCKED_CLIENT',
  'DOUBLE_HIT',
  'DUPLICATE_CLIENT_REFERENCE_ID',
  'INCOMPLETE_CUSTOMER_BETTING_PROFILE',
  'INSUFFICIENT_FUNDS',
  'INVALID_COUNTRY',
  'INVALID_CUSTOMER_PROFILE',
  'INVALID_LEGS',
  'INVALID_REQUEST',
  'ODDS_FORMAT_MISMATCH',
  'TEASER_DOES_NOT_EXIST',
  'SAME_EVENT_ONLY_REQUIRED',
  'SYSTEM_ERROR_1',
  'SYSTEM_ERROR_2',
  'SYSTEM_ERROR_3',
  'TOO_FEW_LEGS',
  'TOO_MANY_LEGS',
  'DUPLICATED_REQUEST',
  'RESPONSIBLE_BETTING_LOSS_LIMIT_EXCEEDED',
  'RESPONSIBLE_BETTING_RISK_LIMIT_EXCEEDED',
]);

export type PlaceTeaserBetResponseErrorCode = z.infer<typeof placeTeaserBetResponseErrorCode>;
