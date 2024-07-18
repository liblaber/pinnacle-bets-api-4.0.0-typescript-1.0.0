import { z } from 'zod';
import { placeStraightBetResponseStatus } from './place-straight-bet-response-status';
import { placeStraightBetResponseErrorCode } from './place-straight-bet-response-error-code';

/**
 * The shape of the model inside the application code - what the users use
 */
export const placeStraightBetResponse: any = z.lazy(() => {
  return z.object({
    status: placeStraightBetResponseStatus.optional(),
    errorCode: placeStraightBetResponseErrorCode.optional().nullable(),
    uniqueRequestId: z.string().optional(),
    betId: z.number().optional(),
    win: z.number().optional(),
    risk: z.number().optional(),
    price: z.number().optional(),
    betterLineWasAccepted: z.boolean().optional(),
  });
});

/**
 * 
 * @typedef  {PlaceStraightBetResponse} placeStraightBetResponse   
 * @property {PlaceStraightBetResponseStatus} - Status of the response.
 * @property {PlaceStraightBetResponseErrorCode} - If Status is PROCESSED_WITH_ERROR, errorCode will be in the response. 

ALL_BETTING_CLOSED = Betting is not allowed at this moment. This may happen during system maintenance,  
ALL_LIVE_BETTING_CLOSED = Live betting is not allowed at this moment. This may happen during system maintenance,  
ABOVE_EVENT_MAX = Bet cannot be placed because client exceeded allowed maximum of risk on a line,  
ABOVE_MAX_BET_AMOUNT = Stake is above allowed maximum amount,   
BELOW_MIN_BET_AMOUNT = Stake is below allowed minimum amount,  
BLOCKED_BETTING = Betting is suspended for the client,  
BLOCKED_CLIENT = Client is no longer active,   
INSUFFICIENT_FUNDS = Bet is submitted by a client with insufficient funds,  
INVALID_COUNTRY = Client country is not allowed for betting,  
INVALID_EVENT = Invalid eventid,  
INVALID_ODDS_FORMAT = If a bet was submitted with the odds format that is not allowed for the client,  
LINE_CHANGED = Bet is submitted on a line that has changed,  
OFFLINE_EVENT = Bet is submitted on an event that is offline or the submitted line is not offered at the moment due to points/handicap change or the submitted bet type is just not offered at the moment,  
PAST_CUTOFFTIME = Bet is submitted on a game after the betting cutoff time,  
RED_CARDS_CHANGED = Bet is submitted on a live soccer event with changed red card count,  
SCORE_CHANGED = Bet is submitted on a live soccer event with changed score,  
TIME_RESTRICTION = Bet is submitted within too short of a period from the same bet previously placed by a client,  
DUPLICATED_REQUEST = Request with the same uniqueRequestId was already processed. Please set the new value if you still want the request to be processed,  
INCOMPLETE_CUSTOMER_BETTING_PROFILE = System configuration issue,  
INVALID_CUSTOMER_PROFILE = System configuration issue,  
LIMITS_CONFIGURATION_ISSUE = System configuration issue,  
RESPONSIBLE_BETTING_LOSS_LIMIT_EXCEEDED = Client has reached his total loss limit,  
RESPONSIBLE_BETTING_RISK_LIMIT_EXCEEDED = Client has reached his total risk limit,  
SYSTEM_ERROR_3 = Unexpected error,  
LICENCE_RESTRICTION_LIVE_BETTING_BLOCKED - Live betting blocked due to licence restrictions, 
BETTING_SUSPENDED - Due to anomalous market circumstances bets are not currently being accepted on this line. Try again with next LineId.

 * @property {string} - Echo of the uniqueRequestId from the request.
 * @property {number} - Bet identification. Populated in case of accepted bet.
 * @property {number} - Win amount. Populated in case of accepted bet.
 * @property {number} - Risk amount.  Populated in case of accepted bet.
 * @property {number} - Bet price. Populated in case of accepted bet.
 * @property {boolean} - Whether or not the bet was accepted on the line that changed in favour of client. This can be true only if `acceptBetterLine` in the Place Bet request is set to TRUE.
 */
export type PlaceStraightBetResponse = z.infer<typeof placeStraightBetResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const placeStraightBetResponseResponse: any = z.lazy(() => {
  return z
    .object({
      status: placeStraightBetResponseStatus.optional(),
      errorCode: placeStraightBetResponseErrorCode.optional().nullable(),
      uniqueRequestId: z.string().optional(),
      betId: z.number().optional(),
      win: z.number().optional(),
      risk: z.number().optional(),
      price: z.number().optional(),
      betterLineWasAccepted: z.boolean().optional(),
    })
    .transform((data) => ({
      status: data['status'],
      errorCode: data['errorCode'],
      uniqueRequestId: data['uniqueRequestId'],
      betId: data['betId'],
      win: data['win'],
      risk: data['risk'],
      price: data['price'],
      betterLineWasAccepted: data['betterLineWasAccepted'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const placeStraightBetResponseRequest: any = z.lazy(() => {
  return z
    .object({
      status: placeStraightBetResponseStatus.nullish(),
      errorCode: placeStraightBetResponseErrorCode.nullish(),
      uniqueRequestId: z.string().nullish(),
      betId: z.number().nullish(),
      win: z.number().nullish(),
      risk: z.number().nullish(),
      price: z.number().nullish(),
      betterLineWasAccepted: z.boolean().nullish(),
    })
    .transform((data) => ({
      status: data['status'],
      errorCode: data['errorCode'],
      uniqueRequestId: data['uniqueRequestId'],
      betId: data['betId'],
      win: data['win'],
      risk: data['risk'],
      price: data['price'],
      betterLineWasAccepted: data['betterLineWasAccepted'],
    }));
});
