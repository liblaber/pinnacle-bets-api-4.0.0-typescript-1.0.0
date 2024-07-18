import { z } from 'zod';
import { manualBetBetStatus } from './manual-bet-bet-status';

/**
 * The shape of the model inside the application code - what the users use
 */
export const manualBet: any = z.lazy(() => {
  return z.object({
    betId: z.number(),
    wagerNumber: z.number(),
    placedAt: z.string(),
    betStatus: manualBetBetStatus,
    betType: z.string(),
    win: z.number(),
    risk: z.number(),
    winLoss: z.number().optional(),
    updateSequence: z.number(),
    description: z.string(),
    referenceBetId: z.number().optional().nullable(),
  });
});

/**
 * 
 * @typedef  {ManualBet} manualBet   
 * @property {number} - Bet identification
 * @property {number} - Wager identification. All bets placed thru the API will have value 1. Website Classic view supports multiple contest(special) bets placement in the same bet slip in that case the bet would have appropriate wager number, as well as all round robin parlay bets.
 * @property {string} - Date time when the bet was placed.
 * @property {ManualBetBetStatus} - Bet Status. 

ACCEPTED = Bet was accepted,  
CANCELLED = Bet is cancelled as per Pinnacle betting rules,  
LOSE = The bet is settled as lose,  
REFUNDED = When an event is cancelled or when the bet is settled as push, the bet will have REFUNDED status,  
WON = The bet is settled as won 

 * @property {string} 
 * @property {number} - Win amount.
 * @property {number} - Risk amount.
 * @property {number} - Win-Loss for settled bets.
 * @property {number} - Update Sequence
 * @property {string} - Manual bet description.
 * @property {number} - Referenced original bet id.
 */
export type ManualBet = z.infer<typeof manualBet>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const manualBetResponse: any = z.lazy(() => {
  return z
    .object({
      betId: z.number(),
      wagerNumber: z.number(),
      placedAt: z.string(),
      betStatus: manualBetBetStatus,
      betType: z.string(),
      win: z.number(),
      risk: z.number(),
      winLoss: z.number().optional(),
      updateSequence: z.number(),
      description: z.string(),
      referenceBetId: z.number().optional().nullable(),
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
      updateSequence: data['updateSequence'],
      description: data['description'],
      referenceBetId: data['referenceBetId'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const manualBetRequest: any = z.lazy(() => {
  return z
    .object({
      betId: z.number().nullish(),
      wagerNumber: z.number().nullish(),
      placedAt: z.string().nullish(),
      betStatus: manualBetBetStatus.nullish(),
      betType: z.string().nullish(),
      win: z.number().nullish(),
      risk: z.number().nullish(),
      winLoss: z.number().nullish(),
      updateSequence: z.number().nullish(),
      description: z.string().nullish(),
      referenceBetId: z.number().nullish(),
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
      updateSequence: data['updateSequence'],
      description: data['description'],
      referenceBetId: data['referenceBetId'],
    }));
});
