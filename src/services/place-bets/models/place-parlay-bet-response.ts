import { z } from 'zod';
import { placeParlayBetResponseStatus } from './place-parlay-bet-response-status';
import { placeParlayBetResponseErrorCode } from './place-parlay-bet-response-error-code';
import {
  roundRobinOptionWithOdds,
  roundRobinOptionWithOddsRequest,
  roundRobinOptionWithOddsResponse,
} from './round-robin-option-with-odds';
import { parlayLegResponse, parlayLegResponseRequest, parlayLegResponseResponse } from './parlay-leg-response';

/**
 * The shape of the model inside the application code - what the users use
 */
export const placeParlayBetResponse: any = z.lazy(() => {
  return z.object({
    status: placeParlayBetResponseStatus.optional(),
    errorCode: placeParlayBetResponseErrorCode.optional().nullable(),
    betId: z.number().optional(),
    uniqueRequestId: z.string().optional(),
    roundRobinOptionWithOdds: z.array(roundRobinOptionWithOdds).optional(),
    maxRiskStake: z.number().optional(),
    minRiskStake: z.number().optional(),
    validLegs: z.array(parlayLegResponse).optional(),
    invalidLegs: z.array(parlayLegResponse).optional(),
  });
});

/**
 * 
 * @typedef  {PlaceParlayBetResponse} placeParlayBetResponse   
 * @property {PlaceParlayBetResponseStatus} - Status of the response.
 * @property {PlaceParlayBetResponseErrorCode} - When Status is PROCESSED_WITH_ERROR, provides a code indicating the specific problem.


ABOVE_MAX_BET_AMOUNT = Stake is above allowed maximum amount,  
ALL_BETTING_CLOSED = Betting is not allowed at this moment,  
BELOW_MIN_BET_AMOUNT = Stake is below allowed minimum amount,  
BLOCKED_BETTING = Betting is suspended for the client,   
BLOCKED_CLIENT = Client is no longer active,  
INSUFFICIENT_FUNDS = Bet is submitted by a client with insufficient funds,  
INVALID_COUNTRY = Client country is not allowed for betting,  
INVALID_LEGS = One or more legs are invalid,  
INVALID_ODDS_FORMAT = If a bet was submitted with the odds format that is not allowed for the client,  
INVALID_ROUND_ROBIN_OPTIONS = Round robin options are invalid (i.e. does not match with number of legs),  
ROUND_ROBIN_DISALLOWED = Round robin is disallowed for one of the leagues,  
TOO_MANY_LEGS = Maximum of 10 legs can be specified,  
TOO_FEW_LEGS = At least 2 legs are required for Parlay,  
RESPONSIBLE_BETTING_LOSS_LIMIT_EXCEEDED = Client has reached his total loss limit,  
RESPONSIBLE_BETTING_RISK_LIMIT_EXCEEDED = Client has reached his total risk limit,  
INVALID_REQUEST = Request has invalid parameters,  
DUPLICATED_REQUEST = Request with the same uniqueRequestId was already processed. Please set the new value if you still want the request to be processed,  
SYSTEM_ERROR_3 = Unexpected error 

 * @property {number} - Id of a newly created bet.
 * @property {string} - Unique identifier provided in the request.
 * @property {RoundRobinOptionWithOdds[]} - Provides array with all acceptable Round Robin options with parlay odds for that option.
 * @property {number} - Maximum stake amount
 * @property {number} - Minimum stake amount
 * @property {ParlayLegResponse[]} - Collection of valid legs (format described below). Can be empty if no valid legs found.
 * @property {ParlayLegResponse[]} - The collection of legs that resulted in error (format described below). Can be empty if no invalid legs found.
 */
export type PlaceParlayBetResponse = z.infer<typeof placeParlayBetResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const placeParlayBetResponseResponse: any = z.lazy(() => {
  return z
    .object({
      status: placeParlayBetResponseStatus.optional(),
      errorCode: placeParlayBetResponseErrorCode.optional().nullable(),
      betId: z.number().optional(),
      uniqueRequestId: z.string().optional(),
      roundRobinOptionWithOdds: z.array(roundRobinOptionWithOddsResponse).optional(),
      maxRiskStake: z.number().optional(),
      minRiskStake: z.number().optional(),
      validLegs: z.array(parlayLegResponseResponse).optional(),
      invalidLegs: z.array(parlayLegResponseResponse).optional(),
    })
    .transform((data) => ({
      status: data['status'],
      errorCode: data['errorCode'],
      betId: data['betId'],
      uniqueRequestId: data['uniqueRequestId'],
      roundRobinOptionWithOdds: data['roundRobinOptionWithOdds'],
      maxRiskStake: data['maxRiskStake'],
      minRiskStake: data['minRiskStake'],
      validLegs: data['validLegs'],
      invalidLegs: data['invalidLegs'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const placeParlayBetResponseRequest: any = z.lazy(() => {
  return z
    .object({
      status: placeParlayBetResponseStatus.nullish(),
      errorCode: placeParlayBetResponseErrorCode.nullish(),
      betId: z.number().nullish(),
      uniqueRequestId: z.string().nullish(),
      roundRobinOptionWithOdds: z.array(roundRobinOptionWithOddsRequest).nullish(),
      maxRiskStake: z.number().nullish(),
      minRiskStake: z.number().nullish(),
      validLegs: z.array(parlayLegResponseRequest).nullish(),
      invalidLegs: z.array(parlayLegResponseRequest).nullish(),
    })
    .transform((data) => ({
      status: data['status'],
      errorCode: data['errorCode'],
      betId: data['betId'],
      uniqueRequestId: data['uniqueRequestId'],
      roundRobinOptionWithOdds: data['roundRobinOptionWithOdds'],
      maxRiskStake: data['maxRiskStake'],
      minRiskStake: data['minRiskStake'],
      validLegs: data['validLegs'],
      invalidLegs: data['invalidLegs'],
    }));
});
