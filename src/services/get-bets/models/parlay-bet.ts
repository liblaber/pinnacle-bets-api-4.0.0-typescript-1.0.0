import { z } from 'zod';
import { parlayBetBetStatus } from './parlay-bet-bet-status';
import { oddsFormat } from '../../common/odds-format';
import { cancellationReason, cancellationReasonRequest, cancellationReasonResponse } from './cancellation-reason';
import { parlayLeg, parlayLegRequest, parlayLegResponse } from './parlay-leg';

/**
 * The shape of the model inside the application code - what the users use
 */
export const parlayBet: any = z.lazy(() => {
  return z.object({
    betId: z.number(),
    uniqueRequestId: z.string().optional(),
    wagerNumber: z.number(),
    betStatus: parlayBetBetStatus,
    betType: z.string(),
    win: z.number(),
    risk: z.number(),
    winLoss: z.number().optional().nullable(),
    oddsFormat: oddsFormat,
    customerCommission: z.number().optional().nullable(),
    cancellationReason: cancellationReason.optional(),
    updateSequence: z.number(),
    legs: z.array(parlayLeg),
    price: z.number().optional(),
    finalPrice: z.number().optional(),
  });
});

/**
 * 
 * @typedef  {ParlayBet} parlayBet   
 * @property {number} - Bet identification
 * @property {string} - Unique Request Id
 * @property {number} - Wager identification. All bets placed thru the API will have value 1. Website Classic view supports multiple contest(special) bets placement in the same bet slip in that case the bet would have appropriate wager number, as well as all round robin parlay bets.
 * @property {ParlayBetBetStatus} - Bet Status. 

ACCEPTED = Bet was accepted.  
CANCELLED = Bet is cancelled as per Pinnacle betting rules.  
LOST = The bet is settled as lose.  
PENDING_ACCEPTANCE = This status is reserved only for live bets. If a live bet is placed during danger zone or live delay is applied, it will be in PENDING_ACCEPTANCE , otherwise in ACCEPTED status. From this status bet can go to ACCEPTED or REJECTED status.  
REFUNDED = When an event is cancelled or when the bet is settled as push, the bet will have REFUNDED status.  
NOT_ACCEPTED = Bet was not accepted. Bet can be in this status only if it was previously in PENDING_ACCEPTANCE status.  
WON = The bet is settled as won.  
PARTIAL_WON  - If gross payout is greater than the  stake. Only for parlays with the asian handicap legs.  
PARTIAL_LOST  - If gross payout is less or equal to the stake. Only for parlays with the asian handicap legs.

 * @property {string} 
 * @property {number} - Win amount.
 * @property {number} - Risk amount.
 * @property {number} - Win-Loss for settled bets.
 * @property {OddsFormat} - Bet odds format.  
AMERICAN = American odds format,  
DECIMAL = Decimal (European) odds format,  
HONGKONG = Hong Kong odds format,  
INDONESIAN = Indonesian odds format,  
MALAY = Malaysian odds format 

 * @property {number} - Client’s commission on the bet.
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

 * @property {number} - Update Sequence
 * @property {ParlayLeg[]} 
 * @property {number} 
 * @property {number} - Only for settled parlay. Final price may differ in case leg was cancelled or half won
 */
export type ParlayBet = z.infer<typeof parlayBet>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const parlayBetResponse: any = z.lazy(() => {
  return z
    .object({
      betId: z.number(),
      uniqueRequestId: z.string().optional(),
      wagerNumber: z.number(),
      betStatus: parlayBetBetStatus,
      betType: z.string(),
      win: z.number(),
      risk: z.number(),
      winLoss: z.number().optional().nullable(),
      oddsFormat: oddsFormat,
      customerCommission: z.number().optional().nullable(),
      cancellationReason: cancellationReasonResponse.optional(),
      updateSequence: z.number(),
      legs: z.array(parlayLegResponse),
      price: z.number().optional(),
      finalPrice: z.number().optional(),
    })
    .transform((data) => ({
      betId: data['betId'],
      uniqueRequestId: data['uniqueRequestId'],
      wagerNumber: data['wagerNumber'],
      betStatus: data['betStatus'],
      betType: data['betType'],
      win: data['win'],
      risk: data['risk'],
      winLoss: data['winLoss'],
      oddsFormat: data['oddsFormat'],
      customerCommission: data['customerCommission'],
      cancellationReason: data['cancellationReason'],
      updateSequence: data['updateSequence'],
      legs: data['legs'],
      price: data['price'],
      finalPrice: data['finalPrice'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const parlayBetRequest: any = z.lazy(() => {
  return z
    .object({
      betId: z.number().nullish(),
      uniqueRequestId: z.string().nullish(),
      wagerNumber: z.number().nullish(),
      betStatus: parlayBetBetStatus.nullish(),
      betType: z.string().nullish(),
      win: z.number().nullish(),
      risk: z.number().nullish(),
      winLoss: z.number().nullish(),
      oddsFormat: oddsFormat.nullish(),
      customerCommission: z.number().nullish(),
      cancellationReason: cancellationReasonRequest.nullish(),
      updateSequence: z.number().nullish(),
      legs: z.array(parlayLegRequest).nullish(),
      price: z.number().nullish(),
      finalPrice: z.number().nullish(),
    })
    .transform((data) => ({
      betId: data['betId'],
      uniqueRequestId: data['uniqueRequestId'],
      wagerNumber: data['wagerNumber'],
      betStatus: data['betStatus'],
      betType: data['betType'],
      win: data['win'],
      risk: data['risk'],
      winLoss: data['winLoss'],
      oddsFormat: data['oddsFormat'],
      customerCommission: data['customerCommission'],
      cancellationReason: data['cancellationReason'],
      updateSequence: data['updateSequence'],
      legs: data['legs'],
      price: data['price'],
      finalPrice: data['finalPrice'],
    }));
});
