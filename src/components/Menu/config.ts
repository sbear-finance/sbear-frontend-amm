import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://www.ybearswap.finance'
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
    href: 'https://www.ybearswap.finance/farms'
  },
  {
    label: 'Stake',
    icon: 'PoolIcon',
    href: 'https://www.ybearswap.finance/nests'
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
        href: "https://github.com/sbear-finance",
      },
      
    ],
  },
  {
    label: 'Dashboard',
    icon: 'HomeIcon',
    href: 'https://ybear.surge.sh/'
  },
 {
    label: 'Audit by Solidity',
    icon: 'AuditIcon',
    href: 'https://solidity.finance/audits/yBEAR/',
  },
  {
    label: 'yBEAR Website',
    icon: 'GroupsIcon',
    href: 'https://ybear.finance',
  },
    {
    label: 'Sbear Whitepaper',
    icon: 'InfoIcon',
    href: 'https://www.ybearswap.finance/sbear.pdf',
  },
  {
    label: 'Ybear Whitepaper',
    icon: 'InfoIcon',
    href: 'https://www.ybearswap.finance/ybear.pdf',
  },
 
]

export default config
