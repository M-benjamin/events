import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  TextInput,
  Picker,
  StyleSheet,
  Button,
  AsyncStorage
} from "react-native";
// import Icon from "react-native-vector-icons/Ionicons";
import parser from "fast-xml-parser";
import CardComponent from "../../components/Card";
import styled from "styled-components";
import Icon from "react-native-vector-icons/Ionicons";

class HomeScreen extends React.Component {
  state = {
    events: [],
    loading: false,
    country: ""
  };

  async componentDidMount() {
    let emailTok = await AsyncStorage.getItem("email");
    let uidTok = await AsyncStorage.getItem("uid");
    console.log("DATA  >>>>", emailTok, uidTok);
    this.loadData();
  }

  loadData = () => {
    fetch(
      `http://www.vizgr.org/historical-events/search.php?query=${
        this.state.country
      }&limit=5`
    )
      .then(response => response.text())
      .then(data => {
        var options = {
          attributeNamePrefix: "@_",
          attrNodeName: false,
          textNodeName: "#text",
          ignoreAttributes: true,
          ignoreNameSpace: false,
          allowBooleanAttributes: false,
          parseNodeValue: true,
          parseAttributeValue: false,
          trimValues: true,
          cdataTagName: "__cdata", //default is 'false'
          cdataPositionChar: "\\c",
          attrValueProcessor: a => a.toUpperCase(),
          tagValueProcessor: a => a.toUpperCase()
        };

        if (parser.validate(data) === true) {
          //optional
          var jsonObj = parser.parse(data, options);
          // console.log("FINAL", jsonObj);

          this.setState({
            events: jsonObj.result.event
          });
        }
      });
  };

  render() {
    console.log("FFFFF", this.state.events);
    return (
      <SafeAreaView>
        <Text style={{ fontSize: 15 }}>Choose a country :</Text>
        <ContainerSearch>
          <SearchInput
            placeholder="Expl: France"
            onChangeText={text => {
              console.log("TEEEEEE", text);
              this.setState({ country: text, loading: false });
            }}
            // value={this.state.country}
          />
          <ButtonSearch onPress={() => this.loadData()}>
            <Icon
              name="md-search"
              style={{ fontSize: 24, padding: 5, color: "white" }}
            />
          </ButtonSearch>
        </ContainerSearch>

        {this.state.loading ? (
          <View
            style={{
              ...StyleSheet.absoluteFill,
              justifyContent: "center",
              alignContent: "center",
              marginTop: 100
            }}
          >
            <ActivityIndicator size="large" />
          </View>
        ) : null}

        <ScrollView style={{ marginBottom: 50 }}>
          {this.state.events.map((val, index) => (
            <CardComponent
              key={index}
              title={val.date}
              content={val.description}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;

const SearchInput = styled.TextInput`
  height: 40px;
  width: 290px;
  border-color: gray;
  border-radius: 10px;
  border-width: 1;
`;

const ContainerSearch = styled.View`
  display: flex;
  flex-direction: row;
  padding: 10px;
`;

const ButtonSearch = styled.TouchableOpacity`
  background-color: red;
  border-radius: 10px;
  margin-left: 10px;
  align-content: center;
`;
