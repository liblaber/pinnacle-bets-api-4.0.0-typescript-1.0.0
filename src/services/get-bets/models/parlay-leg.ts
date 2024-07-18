import { z } from 'zod';
import { parlayLegLegBetType } from './parlay-leg-leg-bet-type';
import { parlayLegLegBetStatus } from './parlay-leg-leg-bet-status';
import { parlayLegSide } from './parlay-leg-side';
import { cancellationReason, cancellationReasonRequest, cancellationReasonResponse } from './cancellation-reason';

/**
 * The shape of the model inside the application code - what the users use
 */
export const parlayLeg: any = z.lazy(() => {
  return z.object({
    sportId: z.number().optional(),
    legBetType: parlayLegLegBetType.optional(),
    legBetStatus: parlayLegLegBetStatus.optional(),
    leagueId: z.number().optional(),
    eventId: z.number().optional(),
    eventStartTime: z.string().optional(),
    handicap: z.number().optional().nullable(),
    price: z.number().optional(),
    teamName: z.string().optional(),
    side: parlayLegSide.optional().nullable(),
    team1: z.string().optional(),
    team2: z.string().optional(),
    periodNumber: z.number().optional(),
    ftTeam1Score: z.number().optional().nullable(),
    ftTeam2Score: z.number().optional().nullable(),
    pTeam1Score: z.number().optional().nullable(),
    pTeam2Score: z.number().optional().nullable(),
    cancellationReason: cancellationReason.optional(),
  });
});

/**
 * 
 * @typedef  {ParlayLeg} parlayLeg   
 * @property {number} 
 * @property {ParlayLegLegBetType} - Parlay leg type.
 * @property {ParlayLegLegBetStatus} - Parlay Leg status.
CANCELLED = The leg is canceled- the stake on this leg will be transferred to the next one. In this case the leg will be ignored when calculating the winLoss.
LOST = The leg is a loss or a push-lose. When Push-lose happens, the half of the stake on the leg will be pushed to the next leg, and the other half will be a lose. This can happen only when the leg is placed on a quarter points handicap.  
PUSHED = The leg is a push - the stake on this leg will be transferred to the next one. In this case the leg will be ignored when calculating the winLoss.  
REFUNDED = The leg is refunded - the stake on this leg will be transferred to the next one. In this case the leg will be ignored when calculating the winLoss.  
WON = The leg is a won or a push-won. When Push-won happens, the half of the stake on the leg will be pushed to the next leg, and the other half is won. This can happen only when the leg is placed on a quarter points handicap.
HALF_WON_HALF_PUSHED = The bet is settled as half won half pushed. Only for asian handicap legs.
HALF_LOST_HALF_PUSHED =  The bet is settled as half lost half pushed. Only for asian handicap legs. 

 * @property {number} 
 * @property {number} 
 * @property {string} - Date time when the event starts.
 * @property {number} 
 * @property {number} 
 * @property {string} 
 * @property {ParlayLegSide} - Side type.
 * @property {string} - Wellington Phoenix
 * @property {string} - Adelaide United
 * @property {number} 
 * @property {number} - Full time team 1 score
 * @property {number} - Full time team 2 score
 * @property {number} - End of period team 1 score. If the bet was placed on Game period (periodNumber =0) , this will be null
 * @property {number} - End of period team 2 score. If the bet was placed on Game period (periodNumber =0) , this will be null
 * @property {CancellationReason} - Possible keys \:  
* correctTeam1Id
* correctTeam2Id
* correctListedPitcher1
* correctListedPitcher2
* correctSpread
* correctTotalPoints
* correctTeam1TotalPoints
* correctTeam2TotalPoints
* correctTeam1Score
* correctTeam2Score
* correctTeam1TennisSetsScore
* correctTeam2TennisSetsScore

 */
export type ParlayLeg = z.infer<typeof parlayLeg>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const parlayLegResponse: any = z.lazy(() => {
  return z
    .object({
      sportId: z.number().optional(),
      legBetType: parlayLegLegBetType.optional(),
      legBetStatus: parlayLegLegBetStatus.optional(),
      leagueId: z.number().optional(),
      eventId: z.number().optional(),
      eventStartTime: z.string().optional(),
      handicap: z.number().optional().nullable(),
      price: z.number().optional(),
      teamName: z.string().optional(),
      side: parlayLegSide.optional().nullable(),
      team1: z.string().optional(),
      team2: z.string().optional(),
      periodNumber: z.number().optional(),
      ftTeam1Score: z.number().optional().nullable(),
      ftTeam2Score: z.number().optional().nullable(),
      pTeam1Score: z.number().optional().nullable(),
      pTeam2Score: z.number().optional().nullable(),
      cancellationReason: cancellationReasonResponse.optional(),
    })
    .transform((data) => ({
      sportId: data['sportId'],
      legBetType: data['legBetType'],
      legBetStatus: data['legBetStatus'],
      leagueId: data['leagueId'],
      eventId: data['eventId'],
      eventStartTime: data['eventStartTime'],
      handicap: data['handicap'],
      price: data['price'],
      teamName: data['teamName'],
      side: data['side'],
      team1: data['team1'],
      team2: data['team2'],
      periodNumber: data['periodNumber'],
      ftTeam1Score: data['ftTeam1Score'],
      ftTeam2Score: data['ftTeam2Score'],
      pTeam1Score: data['pTeam1Score'],
      pTeam2Score: data['pTeam2Score'],
      cancellationReason: data['cancellationReason'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const parlayLegRequest: any = z.lazy(() => {
  return z
    .object({
      sportId: z.number().nullish(),
      legBetType: parlayLegLegBetType.nullish(),
      legBetStatus: parlayLegLegBetStatus.nullish(),
      leagueId: z.number().nullish(),
      eventId: z.number().nullish(),
      eventStartTime: z.string().nullish(),
      handicap: z.number().nullish(),
      price: z.number().nullish(),
      teamName: z.string().nullish(),
      side: parlayLegSide.nullish(),
      team1: z.string().nullish(),
      team2: z.string().nullish(),
      periodNumber: z.number().nullish(),
      ftTeam1Score: z.number().nullish(),
      ftTeam2Score: z.number().nullish(),
      pTeam1Score: z.number().nullish(),
      pTeam2Score: z.number().nullish(),
      cancellationReason: cancellationReasonRequest.nullish(),
    })
    .transform((data) => ({
      sportId: data['sportId'],
      legBetType: data['legBetType'],
      legBetStatus: data['legBetStatus'],
      leagueId: data['leagueId'],
      eventId: data['eventId'],
      eventStartTime: data['eventStartTime'],
      handicap: data['handicap'],
      price: data['price'],
      teamName: data['teamName'],
      side: data['side'],
      team1: data['team1'],
      team2: data['team2'],
      periodNumber: data['periodNumber'],
      ftTeam1Score: data['ftTeam1Score'],
      ftTeam2Score: data['ftTeam2Score'],
      pTeam1Score: data['pTeam1Score'],
      pTeam2Score: data['pTeam2Score'],
      cancellationReason: data['cancellationReason'],
    }));
});
