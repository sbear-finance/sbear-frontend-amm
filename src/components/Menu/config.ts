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
    label: 'sBEAR INFO',
    icon: 'InfoIcon',
    items: [
      {
        label: 'BUY sBEAR',
        href: 'https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xdec858d5ee93568ce4ea5bbf9169cea23d2de305',
      },
	  {
        label: 'sBEAR CONTRACT',
        href: 'https://bscscan.com/token/0xdec858d5ee93568ce4ea5bbf9169cea23d2de305',
      },
	  {
        label: 'sBEAR CHART',
        href: 'https://dex.guru/token/0xdec858d5ee93568ce4ea5bbf9169cea23d2de305-bsc',
      },
	  {
		label: 'Sbear Whitepaper',
		href: 'https://ybear.finance/YBEARSWAP_WHITEPAPER.pdf',
	  },
    ],
  },
  
  {
    label: 'yBEAR  INFO',
    icon: 'InfoIcon',
    items: [
      {
        label: 'BUY yBEAR',
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xA8dA060eBD32A753005c6Ee476A0D79177C6EA8b',
      },
	  {
        label: 'yBEAR CONTRACT',
        href: 'https://bscscan.com/token/0xa8da060ebd32a753005c6ee476a0d79177c6ea8b',
      },
	  {
        label: 'yBEAR CHART',
        href: 'https://dex.guru/token/0xa8da060ebd32a753005c6ee476a0d79177c6ea8b-bsc',
      },
	  {
		label: 'yBEAR Whitepaper',
		href: 'https://ybear.finance/wp-content/uploads/2021/03/Ybear-Whitepaper.pdf',
	  },
	    {
		label: 'yBEAR Website',
		href: 'https://ybear.finance',
	  },
    ],
  },
  
    {
    label: 'yBHONEY INFO',
    icon: 'InfoIcon',
    items: [
      {
        label: 'yBHONEY yBEAR',
        href: 'https://exchange.pancakeswap.finance/#/swap?inputCurrency=0x5b147ad94f3f25f6aa94a58abccd6745df36d7f7',
      },
	  {
        label: 'yBHONEY CONTRACT',
        href: 'https://bscscan.com/token/0x5b147ad94f3f25f6aa94a58abccd6745df36d7f7',
      },
	  {
        label: 'yBHONEY CHART',
        href: 'https://dex.guru/token/0x5b147ad94f3f25f6aa94a58abccd6745df36d7f7-bsc',
      },
	  {
		label: 'yBHONEY Whitepaper',
		href: 'https://www.ybearswap.finance/ybear.pdf',
	  },
    ],
  },
 
  {
    label: 'Solid Group',
    icon: 'AuditIcon',
    href: 'https://www.ybearswap.finance/ybear_audit.pdf',
  }, 
    {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/sbear-finance/',
      },
    ],
  },
 
]

export default config
