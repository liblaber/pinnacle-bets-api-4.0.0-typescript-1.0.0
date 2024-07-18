import { z } from 'zod';
import { roundRobinOption } from './round-robin-option';

/**
 * The shape of the model inside the application code - what the users use
 */
export const roundRobinOptionWithOdds: any = z.lazy(() => {
  return z.object({
    roundRobinOption: roundRobinOption.optional(),
    odds: z.number().optional(),
    unroundedDecimalOdds: z.number().optional(),
  });
});

/**
 *
 * @typedef  {RoundRobinOptionWithOdds} roundRobinOptionWithOdds
 * @property {RoundRobinOption}
 * @property {number} - Parlay odds for this option.
 * @property {number} - Unrounded parlay odds in decimal format to be used for calculations only
 */
export type RoundRobinOptionWithOdds = z.infer<typeof roundRobinOptionWithOdds>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const roundRobinOptionWithOddsResponse: any = z.lazy(() => {
  return z
    .object({
      roundRobinOption: roundRobinOption.optional(),
      odds: z.number().optional(),
      unroundedDecimalOdds: z.number().optional(),
    })
    .transform((data) => ({
      roundRobinOption: data['roundRobinOption'],
      odds: data['odds'],
      unroundedDecimalOdds: data['unroundedDecimalOdds'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const roundRobinOptionWithOddsRequest: any = z.lazy(() => {
  return z
    .object({
      roundRobinOption: roundRobinOption.nullish(),
      odds: z.number().nullish(),
      unroundedDecimalOdds: z.number().nullish(),
    })
    .transform((data) => ({
      roundRobinOption: data['roundRobinOption'],
      odds: data['odds'],
      unroundedDecimalOdds: data['unroundedDecimalOdds'],
    }));
});
