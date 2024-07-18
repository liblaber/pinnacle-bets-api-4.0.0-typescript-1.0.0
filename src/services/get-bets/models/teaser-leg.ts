import { z } from 'zod';
import { teaserLegLegBetType } from './teaser-leg-leg-bet-type';
import { teaserLegLegBetStatus } from './teaser-leg-leg-bet-status';
import { teaserLegSide } from './teaser-leg-side';

/**
 * The shape of the model inside the application code - what the users use
 */
export const teaserLeg: any = z.lazy(() => {
  return z.object({
    sportId: z.number().optional(),
    legBetType: teaserLegLegBetType.optional(),
    legBetStatus: teaserLegLegBetStatus.optional(),
    leagueId: z.number().optional(),
    eventId: z.number().optional(),
    eventStartTime: z.string().optional(),
    handicap: z.number().optional(),
    teamName: z.string().optional(),
    side: teaserLegSide.optional(),
    team1: z.string().optional(),
    team2: z.string().optional(),
    periodNumber: z.number().optional(),
  });
});

/**
 * 
 * @typedef  {TeaserLeg} teaserLeg   
 * @property {number} 
 * @property {TeaserLegLegBetType} - Teaser leg type.
 * @property {TeaserLegLegBetStatus} - CANCELLED = The leg is canceled- the stake on this leg will be transferred to the next one. In this case the leg will be ignored when calculating the winLoss,  
LOSE = The leg is a loss or a push-lose. When Push-lose happens, the half of the stake on the leg will be pushed to the next leg, and the other half will be a lose. This can happen only when the leg is placed on a quarter points handicap,  
PUSHED = The leg is a push - the stake on this leg will be transferred to the next one. In this case the leg will be ignored when calculating the winLoss,  
REFUNDED = The leg is refunded - the stake on this leg will be transferred to the next one. In this case the leg will be ignored when calculating the winLoss,  
WON = The leg is a won or a push-won. When Push-won happens, the half of the stake on the leg will be pushed to the next leg, and the other half is won. This can happen only when the leg is placed on a quarter points handicap  

 * @property {number} 
 * @property {number} 
 * @property {string} - Date time when the event starts.
 * @property {number} 
 * @property {string} 
 * @property {TeaserLegSide} - Side type.
 * @property {string} 
 * @property {string} 
 * @property {number} 
 */
export type TeaserLeg = z.infer<typeof teaserLeg>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const teaserLegResponse: any = z.lazy(() => {
  return z
    .object({
      sportId: z.number().optional(),
      legBetType: teaserLegLegBetType.optional(),
      legBetStatus: teaserLegLegBetStatus.optional(),
      leagueId: z.number().optional(),
      eventId: z.number().optional(),
      eventStartTime: z.string().optional(),
      handicap: z.number().optional(),
      teamName: z.string().optional(),
      side: teaserLegSide.optional(),
      team1: z.string().optional(),
      team2: z.string().optional(),
      periodNumber: z.number().optional(),
    })
    .transform((data) => ({
      sportId: data['sportId'],
      legBetType: data['legBetType'],
      legBetStatus: data['legBetStatus'],
      leagueId: data['leagueId'],
      eventId: data['eventId'],
      eventStartTime: data['eventStartTime'],
      handicap: data['handicap'],
      teamName: data['teamName'],
      side: data['side'],
      team1: data['team1'],
      team2: data['team2'],
      periodNumber: data['periodNumber'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const teaserLegRequest: any = z.lazy(() => {
  return z
    .object({
      sportId: z.number().nullish(),
      legBetType: teaserLegLegBetType.nullish(),
      legBetStatus: teaserLegLegBetStatus.nullish(),
      leagueId: z.number().nullish(),
      eventId: z.number().nullish(),
      eventStartTime: z.string().nullish(),
      handicap: z.number().nullish(),
      teamName: z.string().nullish(),
      side: teaserLegSide.nullish(),
      team1: z.string().nullish(),
      team2: z.string().nullish(),
      periodNumber: z.number().nullish(),
    })
    .transform((data) => ({
      sportId: data['sportId'],
      legBetType: data['legBetType'],
      legBetStatus: data['legBetStatus'],
      leagueId: data['leagueId'],
      eventId: data['eventId'],
      eventStartTime: data['eventStartTime'],
      handicap: data['handicap'],
      teamName: data['teamName'],
      side: data['side'],
      team1: data['team1'],
      team2: data['team2'],
      periodNumber: data['periodNumber'],
    }));
});
