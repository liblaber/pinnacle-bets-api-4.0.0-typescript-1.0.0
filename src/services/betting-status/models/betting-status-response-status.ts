// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

export const bettingStatusResponseStatus = z.enum([
  'ALL_BETTING_ENABLED',
  'ALL_LIVE_BETTING_CLOSED',
  'ALL_BETTING_CLOSED',
]);

export type BettingStatusResponseStatus = z.infer<typeof bettingStatusResponseStatus>;
