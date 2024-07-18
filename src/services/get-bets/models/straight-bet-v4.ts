import { z } from 'zod';
import { straightBetV4BetStatus } from './straight-bet-v4-bet-status';
import { straightBetV4BetType } from './straight-bet-v4-bet-type';
import { oddsFormat } from '../../common/odds-format';
import { cancellationReason, cancellationReasonRequest, cancellationReasonResponse } from './cancellation-reason';
import { straightBetV4Side } from './straight-bet-v4-side';

/**
 * The shape of the model inside the application code - what the users use
 */
export const straightBetV4: any = z.lazy(() => {
  return z.object({
    betId: z.number(),
    wagerNumber: z.number(),
    placedAt: z.string(),
    betStatus: straightBetV4BetStatus,
    betType: straightBetV4BetType,
    win: z.number(),
    risk: z.number(),
    winLoss: z.number().optional().nullable(),
    oddsFormat: oddsFormat,
    customerCommission: z.number().optional().nullable(),
    cancellationReason: cancellationReason.optional(),
    updateSequence: z.number(),
    sportId: z.number().optional(),
    leagueId: z.number().optional(),
    eventId: z.number().optional(),
    handicap: z.number().optional().nullable(),
    price: z.number().optional(),
    teamName: z.string().optional(),
    side: straightBetV4Side.optional().nullable(),
    team1: z.string().optional(),
    team2: z.string().optional(),
    periodNumber: z.number().optional(),
    team1Score: z.number().optional().nullable(),
    team2Score: z.number().optional().nullable(),
    ftTeam1Score: z.number().optional().nullable(),
    ftTeam2Score: z.number().optional().nullable(),
    pTeam1Score: z.number().optional().nullable(),
    pTeam2Score: z.number().optional().nullable(),
    isLive: z.boolean().optional(),
    eventStartTime: z.string().optional(),
  });
});

/**
 * 
 * @typedef  {StraightBetV4} straightBetV4   
 * @property {number} - Bet identification
 * @property {number} - Wager identification. All bets placed thru the API will have value 1. Website Classic view supports multiple contest(special) bets placement in the same bet slip in that case the bet would have appropriate wager number, as well as all round robin parlay bets.
 * @property {string} - Date time when the bet was placed.
 * @property {StraightBetV4BetStatus} - Bet Status.  

ACCEPTED = Bet was accepted.
PUSHED = Bet was pushed.
CANCELLED = Bet is cancelled as per Pinnacle betting rules.  
LOST = The bet is settled as lose.  
PENDING_ACCEPTANCE = This status is reserved only for live bets. If a live bet is placed during danger zone or live delay is applied, it will be in PENDING_ACCEPTANCE , otherwise in ACCEPTED status. From this status bet can go to ACCEPTED or NOT_ACCEPTED status.  
REFUNDED = When an event is cancelled or when the bet is settled as push, the bet will have REFUNDED status.  
NOT_ACCEPTED = Bet was not accepted. Bet can be in this status only if it was previously in PENDING_ACCEPTANCE status.  
WON = The bet is settled as won.  
HALF_WON_HALF_PUSHED = The bet is settled as half won half pushed. Only for asian handicap bets.  
HALF_LOST_HALF_PUSHED =  The bet is settled as half lost half pushed. Only for asian handicap bets.

 * @property {StraightBetV4BetType} - Bet type.
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
 * @property {number} 
 * @property {number} 
 * @property {number} 
 * @property {number} 
 * @property {number} 
 * @property {string} 
 * @property {StraightBetV4Side} - Side type.
 * @property {string} 
 * @property {string} 
 * @property {number} 
 * @property {number} - Team 1 on the period that the bet was placed on at the moment of placing a bet, only for live bets.
 * @property {number} - Team 2 on the period that the bet was placed on at the moment of placing a bet, only for live bets.
 * @property {number} - Full time team 1 score, only for settled bets.
 * @property {number} - Full time team 2 score, only for settled bets.
 * @property {number} - .End of period team 1 score, only for settled bets. If the bet was placed on Game period (periodNumber =0), this will be null . 
 * @property {number} - End of period team 2 score, only for settled bets. If the bet was placed on Game period (periodNumber =0), this will be null
 * @property {boolean} - Whether the bet is on live event
 * @property {string} - Date time when the event starts.
 */
export type StraightBetV4 = z.infer<typeof straightBetV4>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const straightBetV4Response: any = z.lazy(() => {
  return z
    .object({
      betId: z.number(),
      wagerNumber: z.number(),
      placedAt: z.string(),
      betStatus: straightBetV4BetStatus,
      betType: straightBetV4BetType,
      win: z.number(),
      risk: z.number(),
      winLoss: z.number().optional().nullable(),
      oddsFormat: oddsFormat,
      customerCommission: z.number().optional().nullable(),
      cancellationReason: cancellationReasonResponse.optional(),
      updateSequence: z.number(),
      sportId: z.number().optional(),
      leagueId: z.number().optional(),
      eventId: z.number().optional(),
      handicap: z.number().optional().nullable(),
      price: z.number().optional(),
      teamName: z.string().optional(),
      side: straightBetV4Side.optional().nullable(),
      team1: z.string().optional(),
      team2: z.string().optional(),
      periodNumber: z.number().optional(),
      team1Score: z.number().optional().nullable(),
      team2Score: z.number().optional().nullable(),
      ftTeam1Score: z.number().optional().nullable(),
      ftTeam2Score: z.number().optional().nullable(),
      pTeam1Score: z.number().optional().nullable(),
      pTeam2Score: z.number().optional().nullable(),
      isLive: z.boolean().optional(),
      eventStartTime: z.string().optional(),
    })
    .transform((data) => ({
      betId: data['betId'],
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
      sportId: data['sportId'],
      leagueId: data['leagueId'],
      eventId: data['eventId'],
      handicap: data['handicap'],
      price: data['price'],
      teamName: data['teamName'],
      side: data['side'],
      team1: data['team1'],
      team2: data['team2'],
      periodNumber: data['periodNumber'],
      team1Score: data['team1Score'],
      team2Score: data['team2Score'],
      ftTeam1Score: data['ftTeam1Score'],
      ftTeam2Score: data['ftTeam2Score'],
      pTeam1Score: data['pTeam1Score'],
      pTeam2Score: data['pTeam2Score'],
      isLive: data['isLive'],
      eventStartTime: data['eventStartTime'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const straightBetV4Request: any = z.lazy(() => {
  return z
    .object({
      betId: z.number().nullish(),
      wagerNumber: z.number().nullish(),
      placedAt: z.string().nullish(),
      betStatus: straightBetV4BetStatus.nullish(),
      betType: straightBetV4BetType.nullish(),
      win: z.number().nullish(),
      risk: z.number().nullish(),
      winLoss: z.number().nullish(),
      oddsFormat: oddsFormat.nullish(),
      customerCommission: z.number().nullish(),
      cancellationReason: cancellationReasonRequest.nullish(),
      updateSequence: z.number().nullish(),
      sportId: z.number().nullish(),
      leagueId: z.number().nullish(),
      eventId: z.number().nullish(),
      handicap: z.number().nullish(),
      price: z.number().nullish(),
      teamName: z.string().nullish(),
      side: straightBetV4Side.nullish(),
      team1: z.string().nullish(),
      team2: z.string().nullish(),
      periodNumber: z.number().nullish(),
      team1Score: z.number().nullish(),
      team2Score: z.number().nullish(),
      ftTeam1Score: z.number().nullish(),
      ftTeam2Score: z.number().nullish(),
      pTeam1Score: z.number().nullish(),
      pTeam2Score: z.number().nullish(),
      isLive: z.boolean().nullish(),
      eventStartTime: z.string().nullish(),
    })
    .transform((data) => ({
      betId: data['betId'],
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
      sportId: data['sportId'],
      leagueId: data['leagueId'],
      eventId: data['eventId'],
      handicap: data['handicap'],
      price: data['price'],
      teamName: data['teamName'],
      side: data['side'],
      team1: data['team1'],
      team2: data['team2'],
      periodNumber: data['periodNumber'],
      team1Score: data['team1Score'],
      team2Score: data['team2Score'],
      ftTeam1Score: data['ftTeam1Score'],
      ftTeam2Score: data['ftTeam2Score'],
      pTeam1Score: data['pTeam1Score'],
      pTeam2Score: data['pTeam2Score'],
      isLive: data['isLive'],
      eventStartTime: data['eventStartTime'],
    }));
});
