import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://www.goosedefi.com/'
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
    href: 'https://www.goosedefi.com/farms'
  },
  {
    label: 'Stake',
    icon: 'PoolIcon',
    href: 'https://www.goosedefi.com/nests'
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
        href: "https://github.com/goosedefi/",
      },
      {
        label: "Docs",
        href: "https://goosedefi.gitbook.io/goose-finance/",
      },
      {
        label: "Blog",
        href: "https://goosefinance.medium.com/",
      },
    ],
  },
 
 
]

export default config
