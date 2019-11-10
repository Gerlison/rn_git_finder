/**
  @flow
 */

import React from 'react';
import { TouchableWithoutFeedback} from 'react-native';
import { RepositorieList, RepositorieItem } from './styles';
import { Container, Text, LargeLoading } from '~shared/styles/theme';
import { spacing } from '~shared/styles/metrics'
import colors from '~shared/styles/colors'

import { Navigation } from 'react-native-navigation';
import ConnectionError from '~shared/components/ConnectionError';
import LoadingRepositories from '../LoadingRepositories';
import {getPassedTimeFromUTCDate} from '~shared/helpers/Date';
import _ from 'lodash'

import Icon from 'react-native-feather1s';

function Repositories(props: properties) {

  function navigateToRepository() {
    Navigation.push(props.componentId, {
      component: {
        name: 'navigation.User.RepositoryScreen',
        passProps: {
          repository: 'teste'
        },
      }
    });
  }

  React.useEffect(() => {
    props.getRepositories();

    return function() {
      props.clearRepositories();
    }
  }, [])

  if (_.get(props, 'repositories.repositories.isFailed'))
    return (
      <ConnectionError 
        onPress={props.getRepositories} 
        style={{width: '100%'}} />
    );

  return (
    <RepositorieList 
      data={_.get(props, 'repositories.repositories.data')}
      ListEmptyComponent={LoadingRepositories}
      renderItem={(({item}) => (
        <TouchableWithoutFeedback onPress={navigateToRepository}>
          <RepositorieItem>
            <Container grow style={{flexBasis: '70%'}}>
              <Text color='SECUNDARY'>{item.name}</Text>
              {item.description && 
                <Text size='SMALL' color='REGULAR'>
                  {item.description}
                </Text>
              }

              <Text size='SMALLER' color='REGULAR' style={{marginTop: spacing['SMALLER']}}>
                {item.language && item.language + '   -   '}
                Updated {getPassedTimeFromUTCDate(item.updated_at)}
              </Text>
            </Container>
            <Container grow alignItems="flex-end">
              <Icon name="chevron-right" size={24} color={colors['REGULAR']} /> 
            </Container>
          </RepositorieItem>
        </TouchableWithoutFeedback>
      ))}
    />
  );
}

type properties = {
  getRepositories: Function,
  clearRepositories: Function,
  repositories: Object,
  componentId: string
}

export default Repositories;