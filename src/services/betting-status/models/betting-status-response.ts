// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { bettingStatusResponseStatus } from './betting-status-response-status';

/**
 * The shape of the model inside the application code - what the users use
 */
export const bettingStatusResponse: any = z.lazy(() => {
  return z.object({
    status: bettingStatusResponseStatus,
  });
});

/**
 * 
 * @typedef  {BettingStatusResponse} bettingStatusResponse   
 * @property {BettingStatusResponseStatus} - Betting status.

 */
export type BettingStatusResponse = z.infer<typeof bettingStatusResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const bettingStatusResponseResponse: any = z.lazy(() => {
  return z
    .object({
      status: bettingStatusResponseStatus,
    })
    .transform((data) => ({
      status: data['status'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const bettingStatusResponseRequest: any = z.lazy(() => {
  return z.object({ status: bettingStatusResponseStatus.nullish() }).transform((data) => ({
    status: data['status'],
  }));
});
