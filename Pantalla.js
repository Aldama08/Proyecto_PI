import React, { Component } from "react";
import { TextInput, View, Text, Image, TouchableOpacity } from "react-native";

export default class Pantalla extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempCiudad: "",
      velViento: "",
      buscarCiudad: "", 
      PreCiudad: "",
    };
  }

  buscar = () => {
    const { buscarCiudad } = this.state;
    const url = `http://api.weatherapi.com/v1/forecast.json?key=8e6389607b744bfc973152818250402&q=${buscarCiudad}&days=5&aqi=no&alerts=no`;

    // Utilizando fetch(url))
    fetch(url)
      .then((response) => response.json()) // Convertir la respuesta a JSON
      .then((data) => {
        // console.log(data.current.temp_c);  Ver el valor en la consola

        const temperatura = data.current.temp_c;
        const velViento = data.current.wind_kph;
        const PreCiudad = data.current.precip_mm;

        // Actualizar el estado con los nuevos valores
        this.setState({
          tempCiudad: temperatura + "°C",
          velViento: velViento + " km/h", 
          PreCiudad: PreCiudad + " % ",

        });
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  };

  render() {
    return (
      <View>
        <Text
          style={{
            color: "#09122C",
            fontSize: 10,
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
              width: 300,
              height: 200,
              marginLeft: 0,
              borderWidth: 0,
            }}
          />

          <Text
            style={{
              color: "#09122C",
              fontSize: 69,
              marginTop: -140,
              marginLeft: 80,
              fontFamily: "monospace",
            }}
          >
            {this.state.tempCiudad}
          </Text>
        </View>

        <View>
          <TextInput
            onChangeText={(text) => this.setState({ buscarCiudad: text })}
            placeholder="Ciudad a buscar"
            keyboardType="default"
            style={{
              color: "#09122C",
              marginLeft: 40,
              marginTop: 50,
              fontSize: 30,
            }}
          />
          <TouchableOpacity onPress={this.buscar}>
            <Image
              source={require('./imagenes/lupa.png')}
              style={{
                width: 30,
                height: 30,
                marginTop: -37,
                marginLeft: 230,
                transform: [{ rotate: '90deg' }],
              }}
            />
          </TouchableOpacity>
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
            {this.state.velViento}
          </Text>

          <Image
            source={require('./imagenes/lluvia.png')}
            style={{
              width: 80,
              height: 80,
              marginTop: -120,
              marginLeft: 230,
            }}
          />

          <Text
            style={{
              color: "#09122C",
              fontFamily: "monospace",
              fontSize: 25,
              marginTop: 10,
              marginLeft: 260,
            }}
          >
            {this.state.PreCiudad}
          </Text>
        </View>
      </View>
    );
  }
}
