// This file was generated by liblab | https://liblab.com/

import {
  BetStatuses,
  Betlist,
  BetsGetBetsByTypeV4BetType,
  SortDir,
  betStatuses,
  betlist,
  betsGetBetsByTypeV4BetType,
  sortDir,
} from './models';

export interface BetsGetBetsByTypeV4Params {
  betlist?: Betlist;
  betStatuses?: BetStatuses[];
  fromDate?: string;
  toDate?: string;
  sortDir?: SortDir;
  pageSize?: number;
  fromRecord?: number;
  betids?: number[];
  uniqueRequestIds?: string[];
  betType?: BetsGetBetsByTypeV4BetType[];
}