import { PinnacleBets } from 'pinnacle_bets';

(async () => {
  const pinnacleBets = new PinnacleBets({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
  });

  const betlist = Betlist.SETTLED;
  const sortDir = SortDir.ASC;

  const { data } = await pinnacleBets.getBets.betsGetBetsByTypeV4({
    betlist: betlist,
    betStatuses: [betStatuses],
    fromDate: 'fromDate',
    toDate: 'toDate',
    sortDir: sortDir,
    pageSize: 1000,
    fromRecord: 9,
    betids: [9],
    uniqueRequestIds: ['uniqueRequestIds'],
    betType: [betsGetBetsByTypeV4BetType],
  });

  console.log(data);
})();
