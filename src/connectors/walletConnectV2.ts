import { initializeConnector } from '@web3-react/core'
import { WalletConnect as WalletConnectV2 } from '@web3-react/walletconnect-v2'

import { MAINNET_CHAINS } from '../chains'

console.log('AAAAAAAAAAAA', process.env.REACT_APP_WALLET_CONNECT_PROJECT_ID)

export const [walletConnectV2, hooks] = initializeConnector<WalletConnectV2>(
  (actions) =>
    new WalletConnectV2({
      actions,
      options: {
        projectId: process.env.REACT_APP_WALLET_CONNECT_PROJECT_ID as string,
        chains: Object.keys(MAINNET_CHAINS).map(Number),
        showQrModal: true
      },
    })
)
