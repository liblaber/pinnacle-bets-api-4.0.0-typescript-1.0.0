import { z } from 'zod';
import { placeTeaserBetResponseErrorCode } from './place-teaser-bet-response-error-code';
import {
  placeTeaserBetLegResponse,
  placeTeaserBetLegResponseRequest,
  placeTeaserBetLegResponseResponse,
} from './place-teaser-bet-leg-response';

/**
 * The shape of the model inside the application code - what the users use
 */
export const placeTeaserBetResponse: any = z.lazy(() => {
  return z.object({
    status: z.string().optional(),
    errorCode: placeTeaserBetResponseErrorCode.optional(),
    betId: z.number().optional(),
    uniqueRequestId: z.string().optional(),
    price: z.number().optional(),
    risk: z.number().optional(),
    win: z.number().optional(),
    invalidLegs: z.array(placeTeaserBetLegResponse).optional(),
    validLegs: z.array(placeTeaserBetLegResponse).optional(),
  });
});

/**
 * 
 * @typedef  {PlaceTeaserBetResponse} placeTeaserBetResponse   
 * @property {string} - Status of the request.
 * @property {PlaceTeaserBetResponseErrorCode} - When Status is PROCESSED_WITH_ERROR, provides a code indicating the specific problem.

ABOVE_MAX_BET_AMOUNT = Bet is above the maximum allowed,  
ALL_BETTING_CLOSED = The wagering is disabled in the system (not related to a customer),  
BELOW_MIN_BET_AMOUNT = Bet is below the minimum allowed,  
BLOCKED_BETTING = Betting is suspended for the client,  
BLOCKED_CLIENT = Customer is inactive in the system,  
DOUBLE_HIT = The website submitted the same bet more than once,  
DUPLICATE_CLIENT_REFERENCE_ID = The teaser unique id and/or one of the leg unique id are the same,  
INCOMPLETE_CUSTOMER_BETTING_PROFILE = The customer does not exist,  
INSUFFICIENT_FUNDS = The risk amount is above the customer’s available balance,  
INVALID_COUNTRY = Current location is proscribed,  
INVALID_CUSTOMER_PROFILE = Either the customer does not exist OR the customer business rules are not verified,  
INVALID_LEGS = One or more legs are not verified,  
INVALID_REQUEST = Teaser request is not valid,  
ODDS_FORMAT_MISMATCH = Agent customer’s odds format differs from wager request odds format,
TEASER_DOES_NOT_EXIST = Teaser does not exist in the system,  
SAME_EVENT_ONLY_REQUIRED = Legs required to be for the same game only. Specified in the Teaser Specifications,  
SYSTEM_ERROR_1 = System error,  
SYSTEM_ERROR_2 = System error,  
SYSTEM_ERROR_3 = System error,  
TOO_FEW_LEGS = Legs count is below Min Picks specified in the Teaser Specifications,  
TOO_MANY_LEGS = Legs count is above Max Picks specified in the Teaser Specifications,
DUPLICATED_REQUEST = Request with the same uniqueRequestId was already processed. Please set the new value if you still want the request to be processed,  
RESPONSIBLE_BETTING_LOSS_LIMIT_EXCEEDED = Client has reached his total loss limit,  
RESPONSIBLE_BETTING_RISK_LIMIT_EXCEEDED = Client has reached his total risk limit

 * @property {number} - Id of a newly created bet.
 * @property {string} - Unique identifier provided in the request.
 * @property {number} - Price for the bet.
 * @property {number} - Amount wagered.
 * @property {number} - Potential winnings.
 * @property {PlaceTeaserBetLegResponse[]} - A collection of invalid legs, if any.
 * @property {PlaceTeaserBetLegResponse[]} - A collection of valid legs, if any.
 */
export type PlaceTeaserBetResponse = z.infer<typeof placeTeaserBetResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const placeTeaserBetResponseResponse: any = z.lazy(() => {
  return z
    .object({
      status: z.string().optional(),
      errorCode: placeTeaserBetResponseErrorCode.optional(),
      betId: z.number().optional(),
      uniqueRequestId: z.string().optional(),
      price: z.number().optional(),
      risk: z.number().optional(),
      win: z.number().optional(),
      invalidLegs: z.array(placeTeaserBetLegResponseResponse).optional(),
      validLegs: z.array(placeTeaserBetLegResponseResponse).optional(),
    })
    .transform((data) => ({
      status: data['status'],
      errorCode: data['errorCode'],
      betId: data['betId'],
      uniqueRequestId: data['uniqueRequestId'],
      price: data['price'],
      risk: data['risk'],
      win: data['win'],
      invalidLegs: data['invalidLegs'],
      validLegs: data['validLegs'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const placeTeaserBetResponseRequest: any = z.lazy(() => {
  return z
    .object({
      status: z.string().nullish(),
      errorCode: placeTeaserBetResponseErrorCode.nullish(),
      betId: z.number().nullish(),
      uniqueRequestId: z.string().nullish(),
      price: z.number().nullish(),
      risk: z.number().nullish(),
      win: z.number().nullish(),
      invalidLegs: z.array(placeTeaserBetLegResponseRequest).nullish(),
      validLegs: z.array(placeTeaserBetLegResponseRequest).nullish(),
    })
    .transform((data) => ({
      status: data['status'],
      errorCode: data['errorCode'],
      betId: data['betId'],
      uniqueRequestId: data['uniqueRequestId'],
      price: data['price'],
      risk: data['risk'],
      win: data['win'],
      invalidLegs: data['invalidLegs'],
      validLegs: data['validLegs'],
    }));
});
