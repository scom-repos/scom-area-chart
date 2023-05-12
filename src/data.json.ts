export default {
  defaultBuilderData: {
    apiEndpoint: 'https://api.dune.com/api/v1/query/2030745/results?api_key=324WhvsCHWCji2pkgtfa0JDqDu8j0FdD',
    options: {
      title: 'ETH Staked - Cumulative',
      options: {
        xColumn: {
          key: 'date',
          type: 'time'
        },
        yColumns: [
          'total_eth',
        ],
        stacking: true,
        groupBy: 'depositor_entity_category',
        seriesOptions: [
          {
            key: 'CEX',
            color: '#d52828'
          },
          {
            key: 'Liquid Staking',
            color: '#d2da25'
          },
          {
            key: 'Others',
            color: '#000000'
          },
          {
            key: 'Staking Pools',
            color: '#49a34f'
          },
          {
            key: 'Unidentified',
            color: '#bcb8b8'
          }
        ],
        xAxis: {
          title: 'Date',
          tickFormat: 'MMM YYYY'
        },
        yAxis: {
          title: 'ETH deposited',
          labelFormat: '0,000.00ma',
          position: 'left'
        }
      }
    }
  }
}
