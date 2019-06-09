import React, { Component } from "react";
import { View, Text } from "native-base";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import styled from "styled-components";

const CardComponent = props => (
  <Card>
    <View>
      <Title>{props.title}</Title>
      <Content>{props.content}</Content>
    </View>
  </Card>
);

export default CardComponent;

const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
`;

const Content = styled.Text`
  margin-top: 20px;
  font-size: 15px;
  font-style: italic;
`;
