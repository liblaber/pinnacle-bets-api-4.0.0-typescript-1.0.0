import { z } from 'zod';
import { teaserBetLegBetType } from './teaser-bet-leg-bet-type';
import { teaserBetLegSide } from './teaser-bet-leg-side';

/**
 * The shape of the model inside the application code - what the users use
 */
export const teaserBetLeg: any = z.lazy(() => {
  return z.object({
    legId: z.string().optional(),
    betType: teaserBetLegBetType.optional(),
    lineId: z.number().optional(),
    eventId: z.number().optional(),
    team: z.string().optional(),
    side: teaserBetLegSide.optional(),
  });
});

/**
 *
 * @typedef  {TeaserBetLeg} teaserBetLeg
 * @property {string} - Client generated GUID for uniquely identifying the leg.
 * @property {TeaserBetLegBetType} - Leg bet type can be SPREAD or TOTAL_POINTS
 * @property {number} - Unique identifier.
 * @property {number} - Unique identifier.
 * @property {string} - Team being bet on for a spread line.
 * @property {TeaserBetLegSide} - Chosen side type. This is needed only for TOTAL_POINTS bet type.
 */
export type TeaserBetLeg = z.infer<typeof teaserBetLeg>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const teaserBetLegResponse: any = z.lazy(() => {
  return z
    .object({
      legId: z.string().optional(),
      betType: teaserBetLegBetType.optional(),
      lineId: z.number().optional(),
      eventId: z.number().optional(),
      team: z.string().optional(),
      side: teaserBetLegSide.optional(),
    })
    .transform((data) => ({
      legId: data['legId'],
      betType: data['betType'],
      lineId: data['lineId'],
      eventId: data['eventId'],
      team: data['team'],
      side: data['side'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const teaserBetLegRequest: any = z.lazy(() => {
  return z
    .object({
      legId: z.string().nullish(),
      betType: teaserBetLegBetType.nullish(),
      lineId: z.number().nullish(),
      eventId: z.number().nullish(),
      team: z.string().nullish(),
      side: teaserBetLegSide.nullish(),
    })
    .transform((data) => ({
      legId: data['legId'],
      betType: data['betType'],
      lineId: data['lineId'],
      eventId: data['eventId'],
      team: data['team'],
      side: data['side'],
    }));
});
