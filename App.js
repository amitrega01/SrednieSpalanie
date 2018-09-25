import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Button, Form, Item, Label, Input } from "native-base";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      litry: null,
      kilometry: null,
      cena: null,
      srednie: 0,
      wynik: 0
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Oblicz średnie spalanie</Text>
        <ScrollView style={{ width: 100 + "%" }}>
          <Form style={{ width: 100 + "%" }}>
            <Item floatingLabel style={{ marginRight: 16 }}>
              <Label style={styles.font}>Ilosc litrow paliwa</Label>
              <Input
                style={styles.font}
                keyboardType="numeric"
                value={this.state.litry}
                onChangeText={text => this.setState({ litry: text })}
              />
            </Item>
            <Item floatingLabel style={{ marginRight: 16 }}>
              <Label style={styles.font}>Przejechane kilometry</Label>
              <Input
                style={styles.font}
                keyboardType="numeric"
                value={this.state.kilometry}
                onChangeText={text => this.setState({ kilometry: text })}
              />
            </Item>
            <Item floatingLabel style={{ marginRight: 16 }}>
              <Label style={styles.font}>Cena za litr</Label>
              <Input
                style={styles.font}
                keyboardType="numeric"
                value={this.state.cena}
                onChangeText={text => this.setState({ cena: text })}
              />
            </Item>

            <Button
              style={styles.obliczBtn}
              onPress={() => {
                this.setState({
                  wynik: (
                    parseInt(this.state.litry) /
                    (parseInt(this.state.kilometry) / 100)
                  ).toFixed(2)
                });
              }}
            >
              <Text style={styles.btnText}>Oblicz</Text>
            </Button>
            {this.state.wynik == 0 ? (
              <Text
                style={{
                  alignSelf: "center",
                  fontFamily: "Product Sans Regular",
                  padding: 16
                }}
              >
                Wypełnij pola i kliknij oblicz...
              </Text>
            ) : (
              <View style={{ alignSelf: "center", paddingHorizontal: 32 }}>
                <Text
                  style={{
                    fontFamily: "Product Sans Regular",
                    fontSize: 32,
                    color: "#000",
                    textAlign: "center"
                  }}
                >
                  Twoje średnie spalanie to:{" "}
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    fontFamily: "Product Sans Bold",
                    fontSize: 36,
                    color: "#000",
                    padding: 8
                  }}
                >
                  {this.state.wynik}l/100km
                </Text>
              </View>
            )}
            {this.state.wynik!=0 && this.state.cena!= null
            ? <Text style={{
              fontFamily: 'Product Sans Regular',
              fontSize: 16,
              color: '#000',
              textAlign: 'center'
            }}>100km kosztowało {(this.state.wynik * this.state.cena).toFixed(2)}zł</Text> :<Text></Text> }
          </Form>
        </ScrollView>
        <Text style={{
              fontFamily: 'Product Sans Regular',
              fontSize: 12,
              color: '#000',
              textAlign: 'center',
              marginBottom: 4
            }}>QuickApps by InsuDev</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFF"
  },
  obliczBtn: {
    alignSelf: "center",
    marginVertical: 16,
    width: 70 + "%",
    borderRadius: 25,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#0085FF"
  },
  btnText: {
    fontFamily: "Product Sans Bold",
    fontSize: 18,
    color: "#fff"
  },
  header: {
    fontFamily: "Product Sans Bold",
    fontSize: 36,
    color: "#000",
    padding: 16,
    textAlign: "center"
  },
  font: {
    fontFamily: "Product Sans Regular"
  }
});
