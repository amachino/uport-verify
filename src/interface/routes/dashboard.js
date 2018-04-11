import MenuSmartContracts from 'components/menus/MenuSmartContracts'
import MenuAsideEthereumWallet from 'components/menus/MenuAsideEthereumWallet'

import Home from 'views/dashboard/main/Home'
import EthereumContracts from 'views/dashboard/main/EthereumContracts'
import EnsScan from 'views/dashboard/main/EnsScan'


export default [
  {
    path: "/dashboard",
    main: Home,
    props: {
      exact: true,
    }
  },
  {
    path: "/dashboard/contracts",
    main: EthereumContracts,
    panelLeft: MenuSmartContracts,
    panelRight: MenuAsideEthereumWallet
  },
  {
    path: "/dashboard/ens",
    main: EnsScan,
  },
  {
    path: "/dashboard/settings",
    main: Home,
  },
]