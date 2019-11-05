/**
  @flow
*/

import React from 'react';
import { Photo, UserName, Stat } from './styles';
import { Container, Text, LargeLoading } from '~shared/styles/theme';
import { spacing } from '~shared/styles/metrics'
import colors from '~shared/styles/colors'

import Icon from 'react-native-feather1s';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import { bindActionCreators } from 'redux';
import * as ProfileActions from '../../ducks/Profile/actions';

import Button from '~shared/components/Buttons';
import Loading from '../../components/Loading';
import ConnectionError from '~shared/components/ConnectionError';

function ProfileScreen(props: properties) {
  const { profile } = props;

  React.useEffect(() => {
    props.getUser(props.user.login);

    return function () {
      props.clearUser()
    }
  }, [])

  function navigateToFind() {
    Navigation.pop(props.componentId);
  }

  function renderView() {
    const { user } = profile;

    if (user.isLoading) 
      return (
        <>
          <Loading onPress={navigateToFind} />
          <Container style={{padding: spacing['LARGE']}} alignItems="center" justifyContent="center">
            <LargeLoading />
          </Container>
        </>
      );

    if (user.isFailed)
      return (
        <>
          <Loading onPress={navigateToFind} />
          <ConnectionError onPress={() => props.getUser(props.user.login)} />
        </>
      );

    return (
      <Container style={{flexGrow: 1}}>
        <Container row alignItems="center" style={{margin: spacing['LARGER']}}>
          <Button.Transparent onPress={navigateToFind}>
            <Icon color={colors['DARKEST']} name="arrow-left" size={24} />
          </Button.Transparent>
          <Photo sourceUrl={user.data.avatar_url} />
          <Container style={{alignSelf:"stretch"}}>
            <Text>{user.data.name || user.data.login}</Text>
            <UserName>@{user.data.login}</UserName>
          </Container>
        </Container>
        <Container row style={{alignSelf: 'stretch'}}>
          <Stat>
            <Text size='LARGE'>{user.data.following}</Text>
            <Text color='PRIMARY' size='SMALLER'>Following</Text>
          </Stat>
          <Stat>
            <Text size='LARGE'>{user.data.public_repos}</Text>
            <Text color='PRIMARY' size='SMALLER'>Repositories</Text>
          </Stat>
          <Stat>
            <Text size='LARGE'>{user.data.followers}</Text>
            <Text color='PRIMARY' size='SMALLER'>Followers</Text>
          </Stat>
        </Container>
        <Container style={{padding: spacing['LARGE'], alignSelf: "stretch"}}>
          {/* <Container row style={{alignSelf: "stretch", marginBottom: spacing['MEDIUM']}}>
            <Container style={{width: '50%'}}>
              <Text size='SMALL' color='REGULAR'>Name</Text>
              <Text>Gerlison</Text>
            </Container>
            <Container style={{width: '50%'}}>
              <Text size='SMALL' color='REGULAR'>Login</Text>
              <Text>gerlison</Text>
            </Container>
          </Container>
          <Container row style={{alignSelf: "stretch"}}>
            <Container style={{width: '50%'}}>
              <Text size='SMALL' color='REGULAR'>Company</Text>
              <Text>Following</Text>
            </Container>
            <Container style={{width: '50%'}}>
              <Text size='SMALL' color='REGULAR'>Location</Text>
              <Text>Following</Text>
            </Container>
          </Container> */}
        </Container>
      </Container>
    );
  }

  return renderView();
}

type properties = {
  componentId: string,
  getUser: Function,
  clearUser: Function,
  user: Object,
  profile: Object
}

const mapStateToProps = state => {
  const {profile, repositories} = state;
  return Object.assign({}, {profile, repositories})
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(Object.assign({}, ProfileActions), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
