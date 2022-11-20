import React from 'react';
import { Provider as StyletronProvider } from "styletron-react";
import { BaseProvider, createDarkTheme } from 'baseui';
import { Server as Styletron } from "styletron-engine-atomic";
import Layout from './src/components/Layout';

const primitives = {
    primaryFontFamily: 'Plus Jakarta Sans',
  };
  
ReactGA.initialize("G-QZP8YGTFF5");

const theme = createDarkTheme(primitives);

const engine = new Styletron();

export const wrapRootElement = ({ element }) => {

    if (!engine) return null;

    return (
        <StyletronProvider value={engine}>
          <BaseProvider theme={theme}>
              {element}
          </BaseProvider>
        </StyletronProvider>
    )
}

export const wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>
  }