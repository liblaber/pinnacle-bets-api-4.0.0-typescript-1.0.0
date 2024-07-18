import { Betlist, betlist } from './models/betlist';
import { BetStatuses, betStatuses } from './models/bet-statuses';
import { SortDir, sortDir } from './models/sort-dir';
import { BetsGetBetsByTypeV4BetType, betsGetBetsByTypeV4BetType } from './models/bets-get-bets-by-type-v4-bet-type';

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
