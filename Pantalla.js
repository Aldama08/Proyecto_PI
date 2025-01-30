
import React, { Component } from "react";
import { TextInput, View, Text, Image } from "react-native";

export default class Pantalla extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <View>
        <Text
        style={{
            color: "#09122C",
            fontSize: 50,
            marginTop: 50,
            marginLeft: 40,
        }}
        >
        App Tiempo
        </Text>


        <View>
        <Image
            source={require('./imagenes/nube.png')}
            style={{
              width: 200,
              height: 200,
            //marginTop: -400,
              marginLeft: 40,
              borderWidth: 0,
            }}
          />

          <Text
            style={{
              color: "#09122C",
              fontSize: 69,
              marginTop: -140,
              marginLeft: 100,
              fontFamily: "monospace",
            }}
          >
            32°
          </Text>
        </View>

        <View>
            <TextInput
            placeholder = "Ciudad a buscar"
            keyboardType="numeric   "
            style={{
                color: "#09122C",
                marginLeft: 120,
                marginTop: 50,
                fontSize: 30,
                marginLeft: 40,
            }}
            />
            <Image
              source={require('./imagenes/lupa.png')}
              style={{
                width: 30,
                height: 30,
                marginTop: -37,
                marginLeft: 230,
                transform: [{rotate: '90deg'}],

              }}

            />
        </View>

        <View>
          <Image
            source={require('./imagenes/viento.png')}
            style={{
              width: 80,
              height: 80,
              marginTop: 250,
              marginLeft: -15,
            }}
          />

          <Text
            style={{
              color: "#09122C",
              fontFamily: "monospace",
              fontSize: 25,
              marginTop: 10,
              marginLeft: -15,

            }}
          >
            32 km/h
          </Text>

          <Image
            source={require('./imagenes/lluvia.png')}
            style={{
              width: 80,
              height: 80,
               marginTop: -120,
               marginLeft: 190,
            }}
          />

          <Text
            style={{
              color: "#09122C",
              fontFamily: "monospace",
              fontSize: 25,
              marginTop: 10,
              marginLeft: 210,

            }}
          >
            40%
          </Text>
          
        </View>

      </View>
    );
  }
}

