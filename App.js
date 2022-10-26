import { StyleSheet, Text, View, Button, Image } from 'react-native';
import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super()
    this.state = {
      imgIndex: 0
    }
    this.newImage = this.newImage.bind(this);
  }

  images = [
    {
      title: "",
      link: require('./assets/img.png')
    },
    {
      title: "We are all worms, but you are a glow worm.",
      link: require('./assets/img0.jpg')
    },
    {
      title: "Only you can prevent forest fires.",
      link: require('./assets/img1.jpg')
    },
    {
      title: "Some days you have to settle for only being mostly awesome.",
      link: require('./assets/img2.jpg')
    },
    {
      title: "Every first draft is perfect, because all a first draft has to do is exist.",
      link: require('./assets/img3.jpg')
    },
    {
      title: "You are the sprinkles to my ice cream.",
      link: require('./assets/img4.jpg')
    },
    {
      title: "Lick the back of your hand. That's what a WINNER tastes like.",
      link: require('./assets/img5.jpg')
    },
    {
      title: "You make so much carbon dioxide for the trees. Thank you.",
      link: require('./assets/img6.jpg')
    },
    {
      title: "Consider eating an orange",
      link: require('./assets/img7.jpg')
    },
    {
      title: "Imperfect is better than boring",
      link: require('./assets/img8.jpg')
    },
    {
      title: "Be happy by yourself and for yourself",
      link: require('./assets/img9.jpg')
    }
  ];
  newImage() {
    this.setState({
      imgIndex: Math.round(Math.random() * 8 + 1)
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You look great today!</Text>
        <View style={styles.buttonBox}>
          <Button color='#3855A1' onPress={this.newImage} title="Press the button" />
        </View>
        <Image source={this.images[this.state.imgIndex].link} style={{ width: '80%', height: '30%', margin: 20 }} />
        <Text style={styles.text}>{this.images[this.state.imgIndex].title}</Text>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE99A',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  buttonBox: {
    padding: 20
  },
  text: {
    fontSize: 15,
    textAlign: 'center',
  }
});
