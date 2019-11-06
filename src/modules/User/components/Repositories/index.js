/**
  @flow
 */

import React from 'react';
import { RepositorieList, RepositorieItem } from './styles';
import { Container, Text, LargeLoading } from '~shared/styles/theme';
import { spacing } from '~shared/styles/metrics'
import colors from '~shared/styles/colors'

import {getPassedTimeFromUTCDate} from '~shared/helpers/Date';
import _ from 'lodash'

import Icon from 'react-native-feather1s';

function Repositories(props: properties) {

  React.useEffect(() => {
    props.getRepositories();
  }, [])

  return (
    <RepositorieList 
      data={_.get(props, 'repositories.repositories.data')}
      renderItem={(({item}) => (
        <RepositorieItem>
          <Container grow style={{flexBasis: '70%'}}>
            <Text color='SECUNDARY'>{item.name}</Text>
            {item.description && 
              <Text size='SMALL' color='REGULAR'>
                {item.description}
              </Text>
            }

            <Text size='SMALLER' color='REGULAR'>
              {item.language && item.language + '   -   '}
              Updated {getPassedTimeFromUTCDate(item.updated_at)}
            </Text>
          </Container>
          <Container grow alignItems="flex-end">
            <Icon name="chevron-right" size={24} color={colors['REGULAR']} /> 
          </Container>
        </RepositorieItem>
      ))}
    />
  );
}

type properties = {
  getRepositories: Function,
  repositories: Object
}

export default Repositories;