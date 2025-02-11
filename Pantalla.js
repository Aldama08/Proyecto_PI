import React, { Component } from "react";
import { StyleSheet, TextInput, View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./styles.js";

export default class Pantalla extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempCiudad: "",
      velViento: "",
      buscarCiudad: "", 
      PreCiudad: "",
      forecastDays: [],
    };
  }

  buscar = () => {
    const { buscarCiudad } = this.state;
    const url = `http://api.weatherapi.com/v1/forecast.json?key=8e6389607b744bfc973152818250402&q=${buscarCiudad}&days=7&aqi=no&alerts=no`;
  
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.forecast && data.forecast.forecastday) {
          const today = new Date(); // Fecha local actual
          const forecastDays = data.forecast.forecastday.filter((day) => {
            const forecastDate = new Date(day.date); // Convertir fecha de la API a objeto Date
            const dayDifference = Math.floor((forecastDate - today) / (1000 * 60 * 60 * 24)); // Diferencia en días
            return dayDifference > 0 && dayDifference <6; // 5 días
          });
          this.setState({
            tempCiudad: `${data.current.temp_c}°C`,
            velViento: `${data.current.wind_kph} km/h`, 
            PreCiudad: `${data.current.precip_mm} mm`,
            forecastDays: forecastDays, 
          });
        }
      })
      .catch((error) => {
        console.error('❌', error);
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>App Tiempo</Text>

        <Image source={require('./imagenes/nube.png')} style={styles.weatherImage} />
        <Text style={styles.temperatureText}>{this.state.tempCiudad}</Text>

        {/* Input y botón de búsqueda */}
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={(text) => this.setState({ buscarCiudad: text })}
            placeholder="Ciudad a buscar"
            keyboardType="default"
            style={styles.input}
          />
          <TouchableOpacity onPress={this.buscar}>
            <Image source={require('./imagenes/lupa.png')} style={styles.searchIcon} />
          </TouchableOpacity>
        </View>

        {/* Proximos  dias */}
        <ScrollView horizontal style={styles.forecastScroll}>
          {this.state.forecastDays.map((day, index) => (
            <View key={index} style={styles.forecastItem}>
              <Text style={styles.forecastText}>
                {new Date(day.date).toLocaleDateString('es-ES', { weekday: 'long' })}
              </Text>
              <Image source={{ uri: `https:${day.day.condition.icon}` }} style={styles.forecastIcon} />
              <Text style={styles.forecastText}>{day.day.avgtemp_c}°C</Text>
              <Text style={styles.forecastText}>{day.day.condition.text}</Text>
            </View>
          ))}
        </ScrollView>

        {/* viento y lluvia */}
        <View style={styles.windRainContainer}>
          <View style={styles.windRainItem}>
            <Image source={require('./imagenes/viento.png')} style={styles.windRainImage} />
            <Text style={styles.windRainText}>{this.state.velViento}</Text>
          </View>
          <View style={styles.windRainItem}>
            <Image source={require('./imagenes/lluvia.png')} style={styles.windRainImage} />
            <Text style={styles.windRainText}>{this.state.PreCiudad}</Text>
          </View>
        </View>
      </View>

      
    );
  }
}


