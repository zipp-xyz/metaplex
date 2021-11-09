import {
  AccountsProvider,
  ConnectionProvider,
  StoreProvider,
  WalletProvider,
  MetaProvider,
} from '@oyster/common';
import React, { FC } from 'react';
import { ConfettiProvider } from './components/Confetti';
import { AppLayout } from './components/Layout';
import { LoaderProvider } from './components/Loader';
import { CoingeckoProvider } from './contexts/coingecko';
import { SPLTokenListProvider } from './contexts/tokenList';
import { PlayerProvider } from './contexts/player';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme';

export const Providers: FC = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <ConnectionProvider>
        <WalletProvider>
          <AccountsProvider>
            <SPLTokenListProvider>
              <CoingeckoProvider>
                <StoreProvider
                  ownerAddress={process.env.NEXT_PUBLIC_STORE_OWNER_ADDRESS}
                  storeAddress={process.env.NEXT_PUBLIC_STORE_ADDRESS}
                >
                  <MetaProvider>
                    <LoaderProvider>
                      <ConfettiProvider>
                        <PlayerProvider>
                          <AppLayout>{children}</AppLayout>
                        </PlayerProvider>
                      </ConfettiProvider>
                    </LoaderProvider>
                  </MetaProvider>
                </StoreProvider>
              </CoingeckoProvider>
            </SPLTokenListProvider>
          </AccountsProvider>
        </WalletProvider>
      </ConnectionProvider>
    </ChakraProvider>
  );
};
