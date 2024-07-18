import { z } from 'zod';
import { specialBetResponse, specialBetResponseRequest, specialBetResponseResponse } from './special-bet-response';

/**
 * The shape of the model inside the application code - what the users use
 */
export const multiBetResponseSpecialBetResponse: any = z.lazy(() => {
  return z.object({
    bets: z.array(specialBetResponse).optional(),
  });
});

/**
 *
 * @typedef  {MultiBetResponseSpecialBetResponse} multiBetResponseSpecialBetResponse
 * @property {SpecialBetResponse[]} - The individual bets.
 */
export type MultiBetResponseSpecialBetResponse = z.infer<typeof multiBetResponseSpecialBetResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const multiBetResponseSpecialBetResponseResponse: any = z.lazy(() => {
  return z
    .object({
      bets: z.array(specialBetResponseResponse).optional(),
    })
    .transform((data) => ({
      bets: data['bets'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const multiBetResponseSpecialBetResponseRequest: any = z.lazy(() => {
  return z.object({ bets: z.array(specialBetResponseRequest).nullish() }).transform((data) => ({
    bets: data['bets'],
  }));
});
