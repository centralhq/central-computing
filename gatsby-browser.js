import React from 'react';
import Layout from './src/components/Layout';

export const onServiceWorkerUpdateReady = () => {
    window.location.reload(true);
  };

export const wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>
  }