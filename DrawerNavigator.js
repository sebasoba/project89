import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";
import Profile from "../screens/Profile";
import Logout from "../screens/Logout";
import firebase from "firebase";
import { render } from "react-dom";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={StackNavigator} />
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="Logout" component={Logout} />
        </Drawer.Navigator>
    

    constructor(props) {
        super(props);
        this.state = {
            previewImage: "image_1",
            dropdownHeight: 40
        };
    }
componentDidMount() {
    let theme;
    firebase
       .database()
       .ref("/users/" + firebase.auth().currentUser.uid)
       .on("value", function (snapshot) {
           theme = snapshot.val().current_theme;
       });
    this.setState({ light_theme: theme === "light" ? true : false});
}

render() {
    let props = this.props;
    return(
        <Drawer.Navigator
         drawerContentOptions={{
             activeTintColor: "#e91e63",
             inactiveTintColor: this.state.light_theme ? "black" : "white",
             itemStyle: { marginVertical : 5}
         }}
         drawerContent={props => <CunstomSidebarMenu {...props} />}
         >
            <Drawer.Screnn
               name="Home"
               component={StackNavigator}
               options={{ unmountOnBlur: true}}
            />
            <Drawer.Screen
                name="Profile"
                component={StackNavigator}
                options={{ unmountOnBlur: true}}
            />
            <Drawer.Screen
                name="Logout"
                component={StackNavigator}
                options={{ unmountOnBlur: true}}
            />
         </Drawer.Navigator>
    )
}
    );
};

export default DrawerNavigator;
