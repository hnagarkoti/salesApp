'use strict';

import React, { Component } from 'React';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import styles from '../styles';
import TabBar from '../../core/TabBar';
// import { ProfileTabBar } from '../tabIcons';

class About extends Component {
  static contextTypes = {
    openDrawer: React.PropTypes.func,
    store: React.PropTypes.object.isRequired,
  }
  render() {
    return (
      <View style={ cs.mainContentOfAboutUs }>
        <View style= {cs.subContainer}>
          <ScrollView> 
            <View>
              <Text style={cs.text} >
                While everyone may need life insurance, they do not ask for it. Many believe life insurance is difficult to understand, the selling process is pushy or cumbersome
                and the benefits are not really useful. That's why we offer you simple, easy to understand life insurance plans with real benefits at a good price, backed
                up by efficient service. We do believe taking care of our customers' interests is the best way to promote our business.
              </Text>
              <Text  style={cs.text} >
                One of the youngest life insurers in India, IndiaFirst is paving the way for a brave new world of insurance. Think New, Be Honest, Be Helpful and Do More – are the
                four guiding values that help us ‘Do the First' and set benchmarks in productivity, financial efficiency and customer service through innovative use of technology.
                Launched nationwide in March, 2010 by Shri Pranab Mukherjee, Former Minister of Finance, Government of India, we provide you a variety of health, security
                (term insurance), savings and wealth (investment) products.
              </Text>
              <Text style={cs.text} >
                One of the youngest life insurers in India, IndiaFirst is paving the way for a brave new world of insurance. Think New, Be Honest, Be Helpful and Do More – are the
                four guiding values that help us ‘Do the First' and set benchmarks in productivity, financial efficiency and customer service through innovative use of technology.
                Launched nationwide in March, 2010 by Shri Pranab Mukherjee, Former Minister of Finance, Government of India, we provide you a variety of health, security
                (term insurance), savings and wealth (investment) products.
              </Text>
              <Text  style={cs.text} >
                One of the youngest life insurers in India, IndiaFirst is paving the way for a brave new world of insurance. Think New, Be Honest, Be Helpful and Do More – are the
                four guiding values that help us ‘Do the First' and set benchmarks in productivity, financial efficiency and customer service through innovative use of technology.
                Launched nationwide in March, 2010 by Shri Pranab Mukherjee, Former Minister of Finance, Government of India, we provide you a variety of health, security
                (term insurance), savings and wealth (investment) products.
              </Text>
              <Text  style={cs.text} >
                One of the youngest life insurers in India, IndiaFirst is paving the way for a brave new world of insurance. Think New, Be Honest, Be Helpful and Do More – are the
                four guiding values that help us ‘Do the First' and set benchmarks in productivity, financial efficiency and customer service through innovative use of technology.
                Launched nationwide in March, 2010 by Shri Pranab Mukherjee, Former Minister of Finance, Government of India, we provide you a variety of health, security
                (term insurance), savings and wealth (investment) products.
              </Text>
              <Text style={cs.text} >
                One of the youngest life insurers in India, IndiaFirst is paving the way for a brave new world of insurance. Think New, Be Honest, Be Helpful and Do More – are the
                four guiding values that help us ‘Do the First' and set benchmarks in productivity, financial efficiency and customer service through innovative use of technology.
                Launched nationwide in March, 2010 by Shri Pranab Mukherjee, Former Minister of Finance, Government of India, we provide you a variety of health, security
                (term insurance), savings and wealth (investment) products.
              </Text>
            </View>
          </ScrollView>
        </View>
        
        
       
      </View>
      );
  }
}

const cs = StyleSheet.create({
  mainContentOfAboutUs: {
    flex: 1,
    backgroundColor: '#fff',
    // borderColor: '#001088', borderStyle: 'solid', borderWidth: 6, // For Testing.
  },
  subContainer: {
    flex: 1,
    // borderColor: '#000088', borderStyle: 'solid', borderWidth: 6, // For Testing.
  },
  logoWrapper:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: 
  {
    fontSize :13,
    margin:20, 
  }
})

export default About;
