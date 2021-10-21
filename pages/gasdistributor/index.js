import api from '../../services/api';
import React from 'react';
import { Text, View ,ScrollView,Image,Linking} from "react-native";
import { PricingCard } from 'react-native-elements';

export default class gasdistributor extends React.Component {
  state = {
    persons: [],
    login: false,
  }

  componentDidMount() {
    api.get(`/empresas`)
      .then(res => {
        const persons = res.data.rows.filter(person => (person.tipoemp ==5));
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
             { this.renderElement() }
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
      </ScrollView>
    )
  }
}

