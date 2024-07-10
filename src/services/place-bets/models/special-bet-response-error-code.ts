// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

export const specialBetResponseErrorCode = z.enum([
  'ALL_BETTING_CLOSED',
  'ABOVE_MAX_BET_AMOUNT',
  'BELOW_MIN_BET_AMOUNT',
  'BLOCKED_BETTING',
  'BLOCKED_CLIENT',
  'CONTEST_NOT_FOUND',
  'DUPLICATED_REQUEST',
  'INCOMPLETE_CUSTOMER_BETTING_PROFILE',
  'INSUFFICIENT_FUNDS',
  'INVALID_COUNTRY',
  'INVALID_REQUEST',
  'LINE_CHANGED',
  'PAST_CUTOFFTIME',
  'RESPONSIBLE_BETTING_LOSS_LIMIT_EXCEEDED',
  'RESPONSIBLE_BETTING_RISK_LIMIT_EXCEEDED',
  'SYSTEM_ERROR_1',
  'SYSTEM_ERROR_2',
  'UNIQUE_REQUEST_ID_REQUIRED',
  'INVALID_CUSTOMER_PROFILE',
  'BETTING_SUSPENDED',
]);

export type SpecialBetResponseErrorCode = z.infer<typeof specialBetResponseErrorCode>;