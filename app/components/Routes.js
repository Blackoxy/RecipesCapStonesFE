import React from 'react'
import { Router, Scene } from 'react-native-router-flux';
import Home from './Home';
import Profile from './Profile';
import Search from './Search';
import Recipes from './Recipes';
import Login from './Login'

const Routes = () => (
   <Router hideNavBar= "true" >
      <Scene key = "root">
        <Scene key = 'login' title='login' component={Login} initial = {true} />
      <Scene key = 'tabBar' tabs={true} tabBarPosition="bottom" >
         <Scene key = "home" component = {Home} title = "Home" />
         <Scene key = "profile" component = {Profile} title = 'Profile' />
         <Scene key = "search" component = {Search} title = 'Search' />
         <Scene key = "recipes" component = {Recipes} title = 'Recipes'/>
      </Scene>
      </Scene>
   </Router>
)
export default Routes