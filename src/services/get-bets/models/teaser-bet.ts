import { z } from 'zod';
import { teaserBetBetStatus } from './teaser-bet-bet-status';
import { oddsFormat } from '../../common/odds-format';
import { cancellationReason, cancellationReasonRequest, cancellationReasonResponse } from './cancellation-reason';
import { teaserLeg, teaserLegRequest, teaserLegResponse } from './teaser-leg';

/**
 * The shape of the model inside the application code - what the users use
 */
export const teaserBet: any = z.lazy(() => {
  return z.object({
    betId: z.number(),
    uniqueRequestId: z.string().optional(),
    wagerNumber: z.number(),
    placedAt: z.string(),
    betStatus: teaserBetBetStatus,
    betType: z.string(),
    win: z.number(),
    risk: z.number(),
    winLoss: z.number().optional(),
    oddsFormat: oddsFormat,
    customerCommission: z.number().optional(),
    cancellationReason: cancellationReason.optional(),
    updateSequence: z.number(),
    teaserName: z.string(),
    isSameEventOnly: z.boolean(),
    minPicks: z.number(),
    maxPicks: z.number(),
    price: z.number().optional(),
    finalPrice: z.number().optional(),
    teaserId: z.number().optional(),
    teaserGroupId: z.number().optional(),
    legs: z.array(teaserLeg),
  });
});

/**
 * 
 * @typedef  {TeaserBet} teaserBet   
 * @property {number} - Bet identification
 * @property {string} - Unique Request Id
 * @property {number} - Wager identification. All bets placed thru the API will have value 1. Website Classic view supports multiple contest(special) bets placement in the same bet slip in that case the bet would have appropriate wager number, as well as all round robin parlay bets.
 * @property {string} - Date time when the bet was placed.
 * @property {TeaserBetBetStatus} - Bet Status. 

ACCEPTED = Bet was accepted,  
CANCELLED = Bet is cancelled as per Pinnacle betting rules,  
LOSE = The bet is settled as lose,  
REFUNDED = When an event is cancelled or when the bet is settled as push, the bet will have REFUNDED status,  
WON = The bet is settled as won 

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
 * @property {string} 
 * @property {boolean} 
 * @property {number} 
 * @property {number} 
 * @property {number} - Populated for all teaser bets and will be the original price at the time of the placement.
 * @property {number} - Only for settled parlay. Final price may differ in case leg was cancelled or half won.
 * @property {number} - Reference to the teaser id
 * @property {number} - Reference to the teaser group id
 * @property {TeaserLeg[]} 
 */
export type TeaserBet = z.infer<typeof teaserBet>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const teaserBetResponse: any = z.lazy(() => {
  return z
    .object({
      betId: z.number(),
      uniqueRequestId: z.string().optional(),
      wagerNumber: z.number(),
      placedAt: z.string(),
      betStatus: teaserBetBetStatus,
      betType: z.string(),
      win: z.number(),
      risk: z.number(),
      winLoss: z.number().optional(),
      oddsFormat: oddsFormat,
      customerCommission: z.number().optional(),
      cancellationReason: cancellationReasonResponse.optional(),
      updateSequence: z.number(),
      teaserName: z.string(),
      isSameEventOnly: z.boolean(),
      minPicks: z.number(),
      maxPicks: z.number(),
      price: z.number().optional(),
      finalPrice: z.number().optional(),
      teaserId: z.number().optional(),
      teaserGroupId: z.number().optional(),
      legs: z.array(teaserLegResponse),
    })
    .transform((data) => ({
      betId: data['betId'],
      uniqueRequestId: data['uniqueRequestId'],
      wagerNumber: data['wagerNumber'],
      placedAt: data['placedAt'],
      betStatus: data['betStatus'],
      betType: data['betType'],
      win: data['win'],
      risk: data['risk'],
      winLoss: data['winLoss'],
      oddsFormat: data['oddsFormat'],
      customerCommission: data['customerCommission'],
      cancellationReason: data['cancellationReason'],
      updateSequence: data['updateSequence'],
      teaserName: data['teaserName'],
      isSameEventOnly: data['isSameEventOnly'],
      minPicks: data['minPicks'],
      maxPicks: data['maxPicks'],
      price: data['price'],
      finalPrice: data['finalPrice'],
      teaserId: data['teaserId'],
      teaserGroupId: data['teaserGroupId'],
      legs: data['legs'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const teaserBetRequest: any = z.lazy(() => {
  return z
    .object({
      betId: z.number().nullish(),
      uniqueRequestId: z.string().nullish(),
      wagerNumber: z.number().nullish(),
      placedAt: z.string().nullish(),
      betStatus: teaserBetBetStatus.nullish(),
      betType: z.string().nullish(),
      win: z.number().nullish(),
      risk: z.number().nullish(),
      winLoss: z.number().nullish(),
      oddsFormat: oddsFormat.nullish(),
      customerCommission: z.number().nullish(),
      cancellationReason: cancellationReasonRequest.nullish(),
      updateSequence: z.number().nullish(),
      teaserName: z.string().nullish(),
      isSameEventOnly: z.boolean().nullish(),
      minPicks: z.number().nullish(),
      maxPicks: z.number().nullish(),
      price: z.number().nullish(),
      finalPrice: z.number().nullish(),
      teaserId: z.number().nullish(),
      teaserGroupId: z.number().nullish(),
      legs: z.array(teaserLegRequest).nullish(),
    })
    .transform((data) => ({
      betId: data['betId'],
      uniqueRequestId: data['uniqueRequestId'],
      wagerNumber: data['wagerNumber'],
      placedAt: data['placedAt'],
      betStatus: data['betStatus'],
      betType: data['betType'],
      win: data['win'],
      risk: data['risk'],
      winLoss: data['winLoss'],
      oddsFormat: data['oddsFormat'],
      customerCommission: data['customerCommission'],
      cancellationReason: data['cancellationReason'],
      updateSequence: data['updateSequence'],
      teaserName: data['teaserName'],
      isSameEventOnly: data['isSameEventOnly'],
      minPicks: data['minPicks'],
      maxPicks: data['maxPicks'],
      price: data['price'],
      finalPrice: data['finalPrice'],
      teaserId: data['teaserId'],
      teaserGroupId: data['teaserGroupId'],
      legs: data['legs'],
    }));
});
