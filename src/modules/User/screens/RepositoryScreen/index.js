/**
  @flow
*/

import React from 'react';
import { Alert } from 'react-native';
import { Container, LargeLoading } from '~shared/styles/theme';
import { spacing } from '~shared/styles/metrics'

import { WebView } from 'react-native-webview';
import { Navigation } from 'react-native-navigation';

function RepositoryScreen(props: properties) {
  function handleError() {
    Alert.alert("Atenção", "Houve um problema ao carregar a página");
    Navigation.pop(props.componentId)
  }

  return (
    <WebView 
      startInLoadingState={true}
      renderLoading={() => (
        <LargeLoading style={{flex: 1, justifyContent: "flex-start"}} />
      )}
      renderError={() => handleError()}
      source={{ uri: props.repository }}
    />
  )
}

type properties = {
  componentId: string,
  repository: string
}

export default RepositoryScreen;
