import React from 'react'
import { Router, Scene } from 'react-native-router-flux';
import Home from './Home';
import Profile from './Profile';
import Search from './Search';
import Recipes from './Recipes';
import Login from './Login'

const Routes = () => (
   <Router hideNavBar={true} >
      <Scene key = "root">
        <Scene key = 'Login' component={Login} initial = {true} hideNavBar={true}/>
      <Scene key = 'tabBar' tabs={true} tabBarPosition="bottom" hideNavBar={true}>
         <Scene key = "Home" component = {Home}  />
         <Scene title='Profile' key = "Profile" component = {Profile}  />
         <Scene title= 'Search' key = "Search" component = {Search} />
         <Scene title='Recipes' key = "Recipes" component = {Recipes}/>
      </Scene>
      </Scene>
   </Router>
)
export default Routes