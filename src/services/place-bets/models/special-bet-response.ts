import { z } from 'zod';
import { specialBetResponseStatus } from './special-bet-response-status';
import { specialBetResponseErrorCode } from './special-bet-response-error-code';

/**
 * The shape of the model inside the application code - what the users use
 */
export const specialBetResponse: any = z.lazy(() => {
  return z.object({
    status: specialBetResponseStatus.optional(),
    errorCode: specialBetResponseErrorCode.optional().nullable(),
    betId: z.number().optional(),
    uniqueRequestId: z.string().optional(),
    win: z.number().optional(),
    risk: z.number().optional(),
    price: z.number().optional(),
    betterLineWasAccepted: z.boolean().optional(),
  });
});

/**
 * 
 * @typedef  {SpecialBetResponse} specialBetResponse   
 * @property {SpecialBetResponseStatus} - Status of the request.
 * @property {SpecialBetResponseErrorCode} - When Status is PROCESSED_WITH_ERROR, provides a code indicating the specific problem.

ALL_BETTING_CLOSED = Betting is not allowed at this moment. This may happen during system maintenance.  
 ABOVE_MAX_BET_AMOUNT = Stake is above allowed maximum amount,  
 BELOW_MIN_BET_AMOUNT = Stake is below allowed minimum amount,  
 BLOCKED_BETTING = Betting is suspended for the client,  
 BLOCKED_CLIENT = Client is no longer active,  
 CONTEST_NOT_FOUND = Incorrect contest id provided or contest is no longer available,  
 DUPLICATED_REQUEST = UniqueRequestId must be unique for each bet,  
 INCOMPLETE_CUSTOMER_BETTING_PROFILE = Customer profile could not be loaded,   
 INSUFFICIENT_FUNDS = Bet is submitted by a client with insufficient funds,  
 INVALID_COUNTRY = Client country is not allowed for betting,  
 INVALID_REQUEST = Special bet request is not valid,  
 LINE_CHANGED = Bet is submitted on a line that has changed,  
 PAST_CUTOFFTIME = Bet is submitted on a game after the betting cutoff time,  
 RESPONSIBLE_BETTING_LOSS_LIMIT_EXCEEDED = Self-imposed loss limit exceeded,  
 RESPONSIBLE_BETTING_RISK_LIMIT_EXCEEDED = Self-imposed risk limit exceeded, 
 SYSTEM_ERROR_1 = Unexpected error,  
 SYSTEM_ERROR_2 = Unexpected error,  
 UNIQUE_REQUEST_ID_REQUIRED = UniqueRequestId is missing,  
 INVALID_CUSTOMER_PROFILE = System configuration issue, 
BETTING_SUSPENDED - Due to anomalous market circumstances bets are not currently being accepted on this line. Try again with next LineId.

 * @property {number} - Bet identifier. Populated in case of accepted bet.
 * @property {string} - Unique identifier provided in the request.
 * @property {number} - Win amount. Populated in case of accepted bet.
 * @property {number} - Risk amount.  Populated in case of accepted bet.
 * @property {number} - Bet price. Populated in case of accepted bet.
 * @property {boolean} - Whether or not the bet was accepted on the line that changed in favour of client. This can be true only if acceptBetterLine in the Place Bet request is set to TRUE.
 */
export type SpecialBetResponse = z.infer<typeof specialBetResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const specialBetResponseResponse: any = z.lazy(() => {
  return z
    .object({
      status: specialBetResponseStatus.optional(),
      errorCode: specialBetResponseErrorCode.optional().nullable(),
      betId: z.number().optional(),
      uniqueRequestId: z.string().optional(),
      win: z.number().optional(),
      risk: z.number().optional(),
      price: z.number().optional(),
      betterLineWasAccepted: z.boolean().optional(),
    })
    .transform((data) => ({
      status: data['status'],
      errorCode: data['errorCode'],
      betId: data['betId'],
      uniqueRequestId: data['uniqueRequestId'],
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
export const specialBetResponseRequest: any = z.lazy(() => {
  return z
    .object({
      status: specialBetResponseStatus.nullish(),
      errorCode: specialBetResponseErrorCode.nullish(),
      betId: z.number().nullish(),
      uniqueRequestId: z.string().nullish(),
      win: z.number().nullish(),
      risk: z.number().nullish(),
      price: z.number().nullish(),
      betterLineWasAccepted: z.boolean().nullish(),
    })
    .transform((data) => ({
      status: data['status'],
      errorCode: data['errorCode'],
      betId: data['betId'],
      uniqueRequestId: data['uniqueRequestId'],
      win: data['win'],
      risk: data['risk'],
      price: data['price'],
      betterLineWasAccepted: data['betterLineWasAccepted'],
    }));
});
