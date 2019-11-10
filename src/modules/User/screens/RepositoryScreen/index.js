/**
  @flow
*/

import React from 'react';
import { Container, LargeLoading } from '~shared/styles/theme';
import { spacing } from '~shared/styles/metrics'

import { WebView } from 'react-native-webview';
import ConnectionError from '~shared/components/ConnectionError';

function RepositoryScreen(props: properties) {
  return (
    <WebView 
      source={{ uri: 'https://infinite.red' }}
      style={{ marginTop: 20 }}
    />
  )
}

type properties = {
}

export default RepositoryScreen;
