import {Footer, FooterTab, Button, Icon} from 'native-base';
import React, {Component} from 'react';
import {Text} from 'react-native';

class AppFooter extends Component {
    render(){
        return (
            <Footer>
                <FooterTab>
                    <Button active>
                        <Icon name='person'/>
                        <Text>Profile</Text>
                    </Button>
                    <Button>
                        <Icon active name='egg'/>
                        <Text>Search</Text>
                    </Button>
                    
                </FooterTab>
            </Footer>

        )
    }
}

export default AppFooter