/**
  @flow
*/

import React from 'react';
import {
  Container,
  Header,
  Title,
  SubTitle,
  Group,
  GroupLabel,
  ItemContainer,
  Info,
  ItemTitle,
  ItemAuthor,
} from './styles';
import Icon from 'react-native-feather1s';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';

function ScreenName(props: { componentId: string }) {
  return (
    <Container>
      <Header>
        <Title>React-Native</Title>
        <SubTitle>BoilerPlate by G3RLISON</SubTitle>
      </Header>
      <Group>
        <GroupLabel>NAVIGATION</GroupLabel>
        <ItemContainer>
          <Icon name="compass" size={32} color="#000" />
          <Info>
            <ItemTitle>REACT-NATIVE-NAVIGATION</ItemTitle>
            <ItemAuthor>WIX</ItemAuthor>
          </Info>
        </ItemContainer>
      </Group>
      <Group>
        <GroupLabel>STATE MANAGEMENT</GroupLabel>
        <ItemContainer>
          <Icon name="compass" size={32} color="#000" />
          <Info>
            <ItemTitle>REDUX</ItemTitle>
            <ItemAuthor>REDUXJS</ItemAuthor>
          </Info>
        </ItemContainer>
        <ItemContainer noborder>
          <Icon name="compass" size={32} color="#000" />
          <Info>
            <ItemTitle>REDUX-THUNK</ItemTitle>
            <ItemAuthor>REDUXJS</ItemAuthor>
          </Info>
        </ItemContainer>
      </Group>
      <Group>
        <GroupLabel>ICONOGRAPHY</GroupLabel>
        <ItemContainer>
          <Icon name="compass" size={32} color="#000" />
          <Info>
            <ItemTitle>REACT-NATIVE-VECTOR-ICONS</ItemTitle>
            <ItemAuthor>OBLADOR</ItemAuthor>
          </Info>
        </ItemContainer>
        <ItemContainer>
          <Icon name="compass" size={32} color="#000" />
          <Info>
            <ItemTitle>REACT-NATIVE-FEATHER1S</ItemTitle>
            <ItemAuthor>SEBINQ</ItemAuthor>
          </Info>
        </ItemContainer>
      </Group>
      <Group>
        <GroupLabel>TYPING</GroupLabel>
        <ItemContainer>
          <Icon name="compass" size={32} color="#000" />
          <Info>
            <ItemTitle>FLOW</ItemTitle>
            <ItemAuthor>FACEBOOK</ItemAuthor>
          </Info>
        </ItemContainer>
      </Group>
      <Group>
        <GroupLabel>TESTS</GroupLabel>
        <ItemContainer>
          <Icon name="compass" size={32} color="#000" />
          <Info>
            <ItemTitle>JEST</ItemTitle>
            <ItemAuthor>FACEBOOK</ItemAuthor>
          </Info>
        </ItemContainer>
      </Group>
    </Container>
  );
}

const mapStateToProps = state => ({
  ...state,
});

export default connect(mapStateToProps)(ScreenName);
