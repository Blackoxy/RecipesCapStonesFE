import React from 'react'
import { Router, Scene } from 'react-native-router-flux';
import Home from './Home';
import Profile from './Profile';
import Search from './Search';
import Recipes from './Recipes';

const Routes = () => (
   <Router>
      <Scene key = "root" hideNavBar>
      <Scene key='tabBar' tabs={true} tabBarPosition="bottom" >
         <Scene key = "home" component = {Home} title = "Home" initial = {true} />
         <Scene key = "profile" component = {Profile} title = 'Profile' />
         <Scene key = "search" component = {Search} title = 'Search' />
         <Scene key = "recipes" component = {Recipes} title = 'Recipes'/>
      </Scene>
      </Scene>
   </Router>
)
export default Routes