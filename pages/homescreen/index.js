import api from '../../services/api';
import React from 'react';
import { ScrollView, Image,Linking,} from "react-native";
import { PricingCard } from 'react-native-elements';

export default class Homescreen extends React.Component {
  state = {
    persons: [],
    login: false,
  }

  componentDidMount() {
    api.get(`/propaganda`)
      .then(res => {
        const persons = res.data.rows;
        const login = true
        this.setState({ persons ,login});
      })
  }

  renderElement(){
    if(this.state.login === false)
       return  <Image source={require('../../assets/loading.gif')}style={{marginTop:200,width: 100, height: 100 }} />;
    return null;
 }
  render() {
    return (
      <ScrollView>
        { this.state.persons.map(person => 
      <PricingCard
        key={person.codigo}
        color="#20B2AA"
        title={person.title}
        price={person.promocao+" "+person.moeda+person.preco}
        info={[`${person.info}`]}
        button={{ title: 'Agendar', icon: 'phone', onPress:() => Linking.openURL(`tel:${person.fone}`)}}
      />
      )}
         { this.renderElement() }
      </ScrollView>
      
    )
  }
}
