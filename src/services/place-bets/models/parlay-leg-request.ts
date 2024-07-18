import { z } from 'zod';
import { parlayLegRequestLegBetType } from './parlay-leg-request-leg-bet-type';
import { parlayLegRequestSide } from './parlay-leg-request-side';

/**
 * The shape of the model inside the application code - what the users use
 */
export const parlayLegRequest: any = z.lazy(() => {
  return z.object({
    uniqueLegId: z.string().optional(),
    lineId: z.number().optional(),
    altLineId: z.number().optional().nullable(),
    sportId: z.number().optional(),
    eventId: z.number().optional(),
    periodNumber: z.number().optional(),
    legBetType: parlayLegRequestLegBetType.optional(),
    team: z.string().optional(),
    side: parlayLegRequestSide.optional().nullable(),
  });
});

/**
 *
 * @typedef  {ParlayLegRequest} parlayLegRequest
 * @property {string} - Unique id of the leg. It's used to identify and match legs in the response.
 * @property {number} - Line identification.
 * @property {number} - Alternate line identification.
 * @property {number} - Sport identification.
 * @property {number} - Event identification.
 * @property {number} - This represents the period of the match. For example, for soccer we have: 0 -  Game, 1 - 1st Half and 2 - 2nd Half
 * @property {ParlayLegRequestLegBetType} - Only SPREAD, MONEYLINE and TOTAL_POINTS are supported.
 * @property {string} - Chosen team type. This is needed only for SPREAD and MONEYLINE bet types.
 * @property {ParlayLegRequestSide} - Chosen side type. This is needed only for TOTAL_POINTS bet type.
 */
export type ParlayLegRequest = z.infer<typeof parlayLegRequest>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const parlayLegRequestResponse: any = z.lazy(() => {
  return z
    .object({
      uniqueLegId: z.string().optional(),
      lineId: z.number().optional(),
      altLineId: z.number().optional().nullable(),
      sportId: z.number().optional(),
      eventId: z.number().optional(),
      periodNumber: z.number().optional(),
      legBetType: parlayLegRequestLegBetType.optional(),
      team: z.string().optional(),
      side: parlayLegRequestSide.optional().nullable(),
    })
    .transform((data) => ({
      uniqueLegId: data['uniqueLegId'],
      lineId: data['lineId'],
      altLineId: data['altLineId'],
      sportId: data['sportId'],
      eventId: data['eventId'],
      periodNumber: data['periodNumber'],
      legBetType: data['legBetType'],
      team: data['team'],
      side: data['side'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const parlayLegRequestRequest: any = z.lazy(() => {
  return z
    .object({
      uniqueLegId: z.string().nullish(),
      lineId: z.number().nullish(),
      altLineId: z.number().nullish(),
      sportId: z.number().nullish(),
      eventId: z.number().nullish(),
      periodNumber: z.number().nullish(),
      legBetType: parlayLegRequestLegBetType.nullish(),
      team: z.string().nullish(),
      side: parlayLegRequestSide.nullish(),
    })
    .transform((data) => ({
      uniqueLegId: data['uniqueLegId'],
      lineId: data['lineId'],
      altLineId: data['altLineId'],
      sportId: data['sportId'],
      eventId: data['eventId'],
      periodNumber: data['periodNumber'],
      legBetType: data['legBetType'],
      team: data['team'],
      side: data['side'],
    }));
});
