import { z } from 'zod';
import { specialBetBetStatus } from './special-bet-bet-status';
import { oddsFormat } from '../../common/odds-format';
import { cancellationReason, cancellationReasonRequest, cancellationReasonResponse } from './cancellation-reason';

/**
 * The shape of the model inside the application code - what the users use
 */
export const specialBet: any = z.lazy(() => {
  return z.object({
    betId: z.number(),
    uniqueRequestId: z.string().optional(),
    wagerNumber: z.number(),
    placedAt: z.string(),
    betStatus: specialBetBetStatus,
    betType: z.string(),
    win: z.number(),
    risk: z.number(),
    winLoss: z.number().optional().nullable(),
    oddsFormat: oddsFormat,
    customerCommission: z.number().optional().nullable(),
    cancellationReason: cancellationReason.optional(),
    updateSequence: z.number(),
    specialId: z.number(),
    specialName: z.string(),
    contestantId: z.number(),
    contestantName: z.string(),
    price: z.number(),
    handicap: z.number().optional(),
    units: z.string().optional(),
    sportId: z.number(),
    leagueId: z.number(),
    eventId: z.number().optional().nullable(),
    periodNumber: z.number().optional().nullable(),
    team1: z.string().optional().nullable(),
    team2: z.string().optional().nullable(),
    eventStartTime: z.string().optional(),
  });
});

/**
 * 
 * @typedef  {SpecialBet} specialBet   
 * @property {number} - Bet identification
 * @property {string} - Unique Request Id
 * @property {number} - Wager identification. All bets placed thru the API will have value 1. Website Classic view supports multiple contest(special) bets placement in the same bet slip in that case the bet would have appropriate wager number, as well as all round robin parlay bets.
 * @property {string} - Date time when the bet was placed.
 * @property {SpecialBetBetStatus} - Bet Status. 
ACCEPTED = Bet was accepted, 
CANCELLED = Bet is cancelled as per Pinnacle betting rules, 
LOSE = The bet is settled as lose,
REFUNDED = When an event is cancelled or when the bet is settled as push, the bet will have REFUNDED status, 
WON = The bet is settled as won 
PUSHED = The bet is settled as a push.

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

 * @property {number} - Update Sequence. It gets updated when the bet status change.
 * @property {number} 
 * @property {string} 
 * @property {number} 
 * @property {string} 
 * @property {number} 
 * @property {number} 
 * @property {string} 
 * @property {number} 
 * @property {number} 
 * @property {number} - Populated if bet was placed on a special linked to the event.
 * @property {number} - Populated if bet was placed on a special linked to the event.
 * @property {string} - Populated if bet was placed on a special linked to the event.
 * @property {string} - Populated if bet was placed on a special linked to the event.
 * @property {string} - Date time when the event starts
 */
export type SpecialBet = z.infer<typeof specialBet>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const specialBetResponse: any = z.lazy(() => {
  return z
    .object({
      betId: z.number(),
      uniqueRequestId: z.string().optional(),
      wagerNumber: z.number(),
      placedAt: z.string(),
      betStatus: specialBetBetStatus,
      betType: z.string(),
      win: z.number(),
      risk: z.number(),
      winLoss: z.number().optional().nullable(),
      oddsFormat: oddsFormat,
      customerCommission: z.number().optional().nullable(),
      cancellationReason: cancellationReasonResponse.optional(),
      updateSequence: z.number(),
      specialId: z.number(),
      specialName: z.string(),
      contestantId: z.number(),
      contestantName: z.string(),
      price: z.number(),
      handicap: z.number().optional(),
      units: z.string().optional(),
      sportId: z.number(),
      leagueId: z.number(),
      eventId: z.number().optional().nullable(),
      periodNumber: z.number().optional().nullable(),
      team1: z.string().optional().nullable(),
      team2: z.string().optional().nullable(),
      eventStartTime: z.string().optional(),
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
      specialId: data['specialId'],
      specialName: data['specialName'],
      contestantId: data['contestantId'],
      contestantName: data['contestantName'],
      price: data['price'],
      handicap: data['handicap'],
      units: data['units'],
      sportId: data['sportId'],
      leagueId: data['leagueId'],
      eventId: data['eventId'],
      periodNumber: data['periodNumber'],
      team1: data['team1'],
      team2: data['team2'],
      eventStartTime: data['eventStartTime'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const specialBetRequest: any = z.lazy(() => {
  return z
    .object({
      betId: z.number().nullish(),
      uniqueRequestId: z.string().nullish(),
      wagerNumber: z.number().nullish(),
      placedAt: z.string().nullish(),
      betStatus: specialBetBetStatus.nullish(),
      betType: z.string().nullish(),
      win: z.number().nullish(),
      risk: z.number().nullish(),
      winLoss: z.number().nullish(),
      oddsFormat: oddsFormat.nullish(),
      customerCommission: z.number().nullish(),
      cancellationReason: cancellationReasonRequest.nullish(),
      updateSequence: z.number().nullish(),
      specialId: z.number().nullish(),
      specialName: z.string().nullish(),
      contestantId: z.number().nullish(),
      contestantName: z.string().nullish(),
      price: z.number().nullish(),
      handicap: z.number().nullish(),
      units: z.string().nullish(),
      sportId: z.number().nullish(),
      leagueId: z.number().nullish(),
      eventId: z.number().nullish(),
      periodNumber: z.number().nullish(),
      team1: z.string().nullish(),
      team2: z.string().nullish(),
      eventStartTime: z.string().nullish(),
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
      specialId: data['specialId'],
      specialName: data['specialName'],
      contestantId: data['contestantId'],
      contestantName: data['contestantName'],
      price: data['price'],
      handicap: data['handicap'],
      units: data['units'],
      sportId: data['sportId'],
      leagueId: data['leagueId'],
      eventId: data['eventId'],
      periodNumber: data['periodNumber'],
      team1: data['team1'],
      team2: data['team2'],
      eventStartTime: data['eventStartTime'],
    }));
});
