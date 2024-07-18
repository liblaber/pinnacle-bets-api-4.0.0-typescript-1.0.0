import { z } from 'zod';
import { specialBetRequest, specialBetRequestRequest, specialBetRequestResponse } from './special-bet-request';

/**
 * The shape of the model inside the application code - what the users use
 */
export const multiBetRequestSpecialBetRequest: any = z.lazy(() => {
  return z.object({
    bets: z.array(specialBetRequest).optional(),
  });
});

/**
 *
 * @typedef  {MultiBetRequestSpecialBetRequest} multiBetRequestSpecialBetRequest
 * @property {SpecialBetRequest[]} - The individual bets.
 */
export type MultiBetRequestSpecialBetRequest = z.infer<typeof multiBetRequestSpecialBetRequest>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const multiBetRequestSpecialBetRequestResponse: any = z.lazy(() => {
  return z
    .object({
      bets: z.array(specialBetRequestResponse).optional(),
    })
    .transform((data) => ({
      bets: data['bets'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const multiBetRequestSpecialBetRequestRequest: any = z.lazy(() => {
  return z.object({ bets: z.array(specialBetRequestRequest).nullish() }).transform((data) => ({
    bets: data['bets'],
  }));
});
