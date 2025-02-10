import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E2E0C8",
    alignItems: "center",
    padding: 20,
  },
  title: {
    color: "#09122C",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  },
  weatherImage: {
    width: 150,
    height: 150,
    marginVertical: 10,
  },
  temperatureText: {
    color: "#09122C",
    fontSize: 50,
    fontWeight: "bold",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#09122C",
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: "#09122C",
    paddingVertical: 5,
  },
  searchIcon: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  forecastScroll: {
    marginTop: 20,
    paddingVertical: 10,
    flexDirection: "row",
  },
  forecastItem: {
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
    elevation: 3,
  },
  forecastText: {
    fontSize: 14,
    color: "#09122C",
    fontWeight: "bold",
    textAlign: "center",
  },
  forecastIcon: {
    width: 40,
    height: 40,
  },
  windRainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
  windRainItem: {
    alignItems: "center",
    flex: 1,
  },
  windRainImage: {
    width: 50,
    height: 50,
  },
  windRainText: {
    fontSize: 18,
    color: "#09122C",
    fontWeight: "bold",
    marginTop: 5,
  },
});
