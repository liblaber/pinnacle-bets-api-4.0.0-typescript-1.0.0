// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { oddsFormat } from '../../common/odds-format';
import { placeBetRequestWinRiskStake } from './place-bet-request-win-risk-stake';
import { fillType } from './fill-type';
import { placeBetRequestBetType } from './place-bet-request-bet-type';
import { team } from './team';
import { placeBetRequestSide } from './place-bet-request-side';

/**
 * The shape of the model inside the application code - what the users use
 */
export const placeBetRequest: any = z.lazy(() => {
  return z.object({
    oddsFormat: oddsFormat.optional(),
    uniqueRequestId: z.string().optional(),
    acceptBetterLine: z.boolean().optional(),
    stake: z.number().optional(),
    winRiskStake: placeBetRequestWinRiskStake.optional(),
    lineId: z.number().optional(),
    altLineId: z.number().optional().nullable(),
    fillType: fillType.optional(),
    sportId: z.number().optional(),
    eventId: z.number().optional(),
    periodNumber: z.number().optional(),
    betType: placeBetRequestBetType.optional(),
    team: team.optional(),
    side: placeBetRequestSide.optional().nullable(),
  });
});

/**
 * Request to place a bet.
 * @typedef  {PlaceBetRequest} placeBetRequest - Request to place a bet. - Request to place a bet.
 * @property {OddsFormat} - Bet odds format.  
AMERICAN = American odds format,  
DECIMAL = Decimal (European) odds format,  
HONGKONG = Hong Kong odds format,  
INDONESIAN = Indonesian odds format,  
MALAY = Malaysian odds format 

 * @property {string} - This is a Unique ID for PlaceBet requests. This is to support idempotent requests.
 * @property {boolean} - Whether or not to accept a bet when there is a line change in favor of the client.
 * @property {number} - amount in client’s currency.
 * @property {PlaceBetRequestWinRiskStake} - Whether the stake amount is risk or win amount.
 * @property {number} - Line identification.
 * @property {number} - Alternate line identification.
 * @property {FillType} - NORMAL - bet will be placed on specified stake.  
FILLANDKILL - If the stake is over the max limit, bet will be placed on max limit, otherwise it will be placed on specified stake.  
FILLMAXLIMIT - bet will be places on max limit, stake amount will be ignored. Please note that maximum limits can change at any moment, which may result in risking more than anticipated. This option is replacement of isMaxStakeBet from v1/bets/place'

 * @property {number} 
 * @property {number} 
 * @property {number} 
 * @property {PlaceBetRequestBetType} - Bet type.
 * @property {Team} - Team type.
 * @property {PlaceBetRequestSide} - Side type.
 */
export type PlaceBetRequest = z.infer<typeof placeBetRequest>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const placeBetRequestResponse: any = z.lazy(() => {
  return z
    .object({
      oddsFormat: oddsFormat.optional(),
      uniqueRequestId: z.string().optional(),
      acceptBetterLine: z.boolean().optional(),
      stake: z.number().optional(),
      winRiskStake: placeBetRequestWinRiskStake.optional(),
      lineId: z.number().optional(),
      altLineId: z.number().optional().nullable(),
      fillType: fillType.optional(),
      sportId: z.number().optional(),
      eventId: z.number().optional(),
      periodNumber: z.number().optional(),
      betType: placeBetRequestBetType.optional(),
      team: team.optional(),
      side: placeBetRequestSide.optional().nullable(),
    })
    .transform((data) => ({
      oddsFormat: data['oddsFormat'],
      uniqueRequestId: data['uniqueRequestId'],
      acceptBetterLine: data['acceptBetterLine'],
      stake: data['stake'],
      winRiskStake: data['winRiskStake'],
      lineId: data['lineId'],
      altLineId: data['altLineId'],
      fillType: data['fillType'],
      sportId: data['sportId'],
      eventId: data['eventId'],
      periodNumber: data['periodNumber'],
      betType: data['betType'],
      team: data['team'],
      side: data['side'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const placeBetRequestRequest: any = z.lazy(() => {
  return z
    .object({
      oddsFormat: oddsFormat.nullish(),
      uniqueRequestId: z.string().nullish(),
      acceptBetterLine: z.boolean().nullish(),
      stake: z.number().nullish(),
      winRiskStake: placeBetRequestWinRiskStake.nullish(),
      lineId: z.number().nullish(),
      altLineId: z.number().nullish(),
      fillType: fillType.nullish(),
      sportId: z.number().nullish(),
      eventId: z.number().nullish(),
      periodNumber: z.number().nullish(),
      betType: placeBetRequestBetType.nullish(),
      team: team.nullish(),
      side: placeBetRequestSide.nullish(),
    })
    .transform((data) => ({
      oddsFormat: data['oddsFormat'],
      uniqueRequestId: data['uniqueRequestId'],
      acceptBetterLine: data['acceptBetterLine'],
      stake: data['stake'],
      winRiskStake: data['winRiskStake'],
      lineId: data['lineId'],
      altLineId: data['altLineId'],
      fillType: data['fillType'],
      sportId: data['sportId'],
      eventId: data['eventId'],
      periodNumber: data['periodNumber'],
      betType: data['betType'],
      team: data['team'],
      side: data['side'],
    }));
});
