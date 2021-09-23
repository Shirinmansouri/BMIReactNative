import React, { Component } from 'react'
import { StyleSheet,TextInput,View, Text, TouchableHighlight } from 'react-native'
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

class BMICalculatorStandard extends Component {
constructor(props){
  super(props);
  this.state={
    bmi:'',
    Height:'',
    Weight:'',
    BmiCategory:'',
  };
}
handleWight=(text)=>
{
  this.setState({weight:text});

}
handleHeight=(text)=>{
  this.setState({height:text});
}
    calculateBmi= (weight, height) =>
    {
      var bmiResult=((parseFloat(weight))/(parseFloat(height)*parseFloat(height))*703).toFixed(2);
      this.setState({bmi:bmiResult});
      if (bmiResult<=18.5)
      this.setState({BmiCategory:'Underweight'})
      else if (bmiResult>18.5 && bmiResult<=24.9)
      this.setState({BmiCategory:'Normal weight'})
      else if (bmiResult>24.9 && bmiResult<=29.9)
      this.setState({BmiCategory:'Overweight'})
      else if (bmiResult>=29.9)
      this.setState({BmiCategory:'Obesity'})

    }

render(){

      return (
        <View style = {styles.container}>
         <Text style={styles.title}>Standard BMI Calculator </Text>

            <Text  style = {styles.label}>Height</Text>
            <TextInput style = {styles.input}
               placeholder = "Height (in)"
               onChangeText = {this.handleHeight}/>

            <Text  style = {styles.label}>Weight</Text>
            <TextInput style = {styles.input}
               placeholder = "Weight (lbs)"
               onChangeText = {this.handleWight}/>

            <TouchableHighlight
               style = {styles.buttonStyleStandard}
               onPress= {()=>this.calculateBmi(this.state.weight,this.state.height)}>

               <Text style = {styles.ButtonTextStyle}> Compute BMI </Text>
            </TouchableHighlight>

            <Text style = {styles.output}>Your BMI Is : {this.state.bmi}</Text>
            <Text style = {styles.output}>BMI Category : {this.state.BmiCategory}</Text>
</View>
      );
   }
}
class BMICalculatorMetric extends Component {
constructor(props){
  super(props);
  this.state={
    bmi:'',
    Height:'',
    Weight:'',
    BmiCategory:'',
  };
}
handleWight=(text)=>
{
  this.setState({weight:text});

}
handleHeight=(text)=>{
  this.setState({height:text});
}
    calculateBmiMetric= (weight, height) =>
    {
   var bmiResult=((parseFloat(weight)*10000)/(parseFloat(height)*parseFloat(height))).toFixed(2);
      this.setState({bmi:bmiResult});
      if (bmiResult<=18.5)
      this.setState({BmiCategory:'Underweight'})
      else if (bmiResult>18.5 && bmiResult<=24.9)
      this.setState({BmiCategory:'Normal weight'})
      else if (bmiResult>24.9 && bmiResult<=29.9)
      this.setState({BmiCategory:'Overweight'})
      else if (bmiResult>=29.9)
      this.setState({BmiCategory:'Obesity'})
    }

render(){

      return (
        <View style = {styles.container}>
         <Text style={styles.title}>Metric BMI Calculator </Text>

            <Text  style = {styles.label}>Height</Text>
            <TextInput style = {styles.input}
               placeholder = "Height (cm)"
               onChangeText = {this.handleHeight}/>
            <Text  style = {styles.label}>Weight</Text>
            <TextInput style = {styles.input}
               placeholder = "Weight (kg)"
               onChangeText = {this.handleWight}/>

            <TouchableHighlight
               style = {styles.buttonStyleMetric}
               onPress= {()=>this.calculateBmiMetric(this.state.weight,this.state.height)}>

               <Text style = {styles.ButtonTextStyle}> Compute BMI </Text>
            </TouchableHighlight>

            <Text style = {styles.output}>Your BMI Is : {this.state.bmi}</Text>
            <Text style = {styles.output}>BMI Category : {this.state.BmiCategory}</Text>

            </View>
      );
   }
}

const TabNavigator = createMaterialBottomTabNavigator(
   {
       Standard: { screen: BMICalculatorStandard,
           navigationOptions:{
               tabBarLabel:'Standard',
               tabBarIcon: ({ tintColor }) => (
                   <View>
                       <Icon style={[{color: tintColor}]} size={30} name={'ios-menu'}/>
                   </View>),
           }
       },
       Metric: { screen: BMICalculatorMetric,
           navigationOptions:{
               tabBarLabel:'Metric',
               tabBarIcon: ({ tintColor }) => (
                   <View>
                       <Icon style={[{color: tintColor}]} size={30} name={'ios-menu'}/>
                   </View>),
               activeColor: '#f60c0d',
               inactiveColor: '#f65a22',
               barStyle: { backgroundColor: '#F6B83D' },
           }
       },
   },
   {
     initialRouteName: "Standard",
     activeColor: '#f0edf6',
     inactiveColor: '#226557',
     barStyle: { backgroundColor: '#3BAD87' },
   },
);

export default createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
   container: {
      paddingTop: 23
   },
   buttonStyleMetric: {
     alignItems: 'center',
     paddingVertical: 12,
     paddingHorizontal: 32,
    backgroundColor: '#F6B83D',
  },
  buttonStyleStandard: {
   alignItems: 'center',
   paddingVertical: 12,
   paddingHorizontal: 32,
   backgroundColor: '#3BAD87',
 },
  ButtonTextStyle: {
   fontSize: 16,
   lineHeight: 21,
   fontWeight: 'bold',
   letterSpacing: 0.25,
   color: 'white',
 },
   output:{
      textAlign: "left",
      fontSize: 30,
      paddingTop:30,
   },
   title:{
      paddingTop:100,
      paddingBottom:10,
      textAlign: "center",
      fontSize: 30,
      fontWeight:"bold",
   },
   resultText:{
      paddingTop:20,
      paddingBottom:10,
      textAlign: "center",
      fontSize: 30,
      color: 'blue'
   },
   label:{
      marginLeft: 15,
      paddingTop: 20,
   },
   tabStyle: {},
  scrollStyle: {
    backgroundColor: 'white',
    paddingLeft: 65,
    paddingRight: 65,
    // justifyContent: 'center',
  },
  tabBarTextStyle: {
    fontSize: 14,
    fontWeight: 'normal',
  },
  underlineStyle: {
    height: 3,
    backgroundColor: 'red',
    borderRadius: 3,
    width: 15,
  },
})
