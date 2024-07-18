import { Environment } from './http/environment';
import { SdkConfig } from './http/types';
import { PlaceBetsService } from './services/place-bets';
import { GetBetsService } from './services/get-bets';
import { BettingStatusService } from './services/betting-status';

export class PinnacleBets {
  public readonly placeBets: PlaceBetsService;

  public readonly getBets: GetBetsService;

  public readonly bettingStatus: BettingStatusService;

  constructor(public config: SdkConfig) {
    const baseUrl = config.environment || config.baseUrl || Environment.DEFAULT;
    this.config = {
      ...config,
      baseUrl,
    };
    this.placeBets = new PlaceBetsService(this.config);

    this.getBets = new GetBetsService(this.config);

    this.bettingStatus = new BettingStatusService(this.config);
  }

  set baseUrl(baseUrl: string) {
    this.placeBets.baseUrl = baseUrl;
    this.getBets.baseUrl = baseUrl;
    this.bettingStatus.baseUrl = baseUrl;
  }

  set environment(environment: Environment) {
    this.placeBets.baseUrl = environment;
    this.getBets.baseUrl = environment;
    this.bettingStatus.baseUrl = environment;
  }

  set timeout(timeout: number) {
    this.placeBets.timeout = timeout;
    this.getBets.timeout = timeout;
    this.bettingStatus.timeout = timeout;
  }

  set username(username: string) {
    this.placeBets.username = username;
    this.getBets.username = username;
    this.bettingStatus.username = username;
  }

  set password(password: string) {
    this.placeBets.password = password;
    this.getBets.password = password;
    this.bettingStatus.password = password;
  }
}

// c029837e0e474b76bc487506e8799df5e3335891efe4fb02bda7a1441840310c
