import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://www.sbeardemo.cf'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://www.sbeardemo.cf/farms'
  },
  {
    label: 'Stake',
    icon: 'PoolIcon',
    href: 'https://www.sbeardemo.cf/nests'
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://www.goosedefi.com/lottery'
  // },
 
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/",
      },
      
    ],
  },
  {
    label: 'Dashboard',
    icon: 'HomeIcon',
    href: 'https://ybear.surge.sh/'
  },
 
 
]

export default config
