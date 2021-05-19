// import React, { Component, useState, useEffect } from "react";

// import {
//   SafeAreaView,
//   Text,
//   StyleSheet,
//   View,
//   FlatList,
//   Button,
// } from "react-native";
// import { SearchBar, ListItem } from "react-native-elements";

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//   }

//   dataFunction = () => {
//     window.filteredDataSource = [];
//     window.masterDataSource = [];

//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((responseJson) => {
//         window.filteredDataSource = responseJson;
//         window.masterDataSource = responseJson;
//         console.log(window.filteredDataSource);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   searchFilterFunction = (text) => {
//     // Check if searched text is not blank
//     if (text) {
//       window.search = "";
//       // If inserted text is not blank =>
//       // Filter the masterDataSource
//       // Update FilteredDataSource
//       const newData = window.masterDataSource.filter(function (item) {
//         const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
//         const textData = text.toUpperCase();
//         return itemData.indexOf(textData) > -1;
//       });
//       window.filteredDataSource = newData;
//       window.search = text;
//       console.log(this.itemData);
//       console.log(newData);
//     } else {
//       // If inserted text is blank =>
//       // Update FilteredDataSource with masterDataSource
//       window.filteredDataSource = masterDataSource;
//       window.search = text;
//     }
//   };

//   ItemView = ({ item }) => {
//     return (
//       <ListItem bottomDivider>
//         <Text style={styles.itemStyle} onPress={() => showItem(item)}>
//           {item.id}
//           {". "}
//           {item.name.toUpperCase()}
//         </Text>
//       </ListItem>
//     );
//   };

//   showItem = (item) => {
//     alert(
//       "Id : " +
//         item.id +
//         "\n" +
//         "Name : " +
//         item.name +
//         "\n" +
//         "Email : " +
//         item.email +
//         "\n" +
//         "Phone : " +
//         item.phone
//     );
//   };

//   render() {
//     return (
//       <SafeAreaView style={{ flex: 1 }}>
//         <Button title="Users" onPress={this.dataFunction()} />
//         <Button
//           title="Go to Form"
//           onPress={() => this.props.navigation.navigate("Form")}
//         />
//         <View style={styles.container}>
//           <SearchBar
//             round
//             searchIcon={{ size: 24 }}
//             onChangeText={(text) => this.searchFilterFunction(text)}
//             onClear={(text) => this.searchFilterFunction("")}
//             placeholder="Search users"
//             value={window.search}
//           />
//           <FlatList
//             data={window.filteredDataSource}
//             keyExtractor={(item, index) => index.toString()}
//             renderItem={this.ItemView}
//           />
//         </View>
//       </SafeAreaView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "white",
//     marginBottom: 100,
//   },
//   itemStyle: {
//     padding: 10,
//   },
// });

import React, { Component } from "react";
import { render } from "react-dom";
import { View, Button, Text, StyleSheet } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

export default class Form extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Text style={styles.firstText}>Welcome!</Text>
        <Text style={styles.buttonText}>
          To search among our users, please visit our List
        </Text>
        <Button
          title="Go to List"
          onPress={() => this.props.navigation.navigate("List")}
        />
        <Text style={styles.buttonText}>
          To submit your own user information, please visit our Form
        </Text>
        <Button
          title="Go to Form"
          onPress={() => this.props.navigation.navigate("Form")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  firstText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  buttonText: {
    marginBottom: 10,
    marginTop: 40,
    padding: 5,
    fontSize: 14,
  },
});
