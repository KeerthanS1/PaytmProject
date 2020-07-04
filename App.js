import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
const {width, height} = Dimensions.get('window');
const imageWidth = width;
const imageHeight = height;

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentFooter = () => {
    return (
      <View style={styles.footer}>
        <View style={styles.Tab}>
          <Icon style={styles.TabIcons} name="home" size={25} color="#1d1b38" />
          <Icon
            style={styles.TabIcons}
            name="shopping-bag"
            size={25}
            color="#336d88"
          />
          <Icon
            style={styles.TabIcons}
            name="qrcode"
            size={25}
            color="#336d88"
          />
          <Icon
            style={styles.TabIcons}
            name="university"
            size={25}
            color="#336d88"
          />
          <Icon
            style={styles.TabIcons}
            name="comment-alt"
            size={25}
            color="#336d88"
          />
        </View>
      </View>
    );
  };
  headerLogos = () => {
    return (
      <View style={styles.HeaderPage}>
        <Icon
          style={styles.headerLogo}
          name="user-circle"
          size={30}
          color="#aaa"
        />
        <Text style={styles.maintext}>Hi Keerthan</Text>
        <Icon
          style={styles.headerSteps}
          name="comment-alt"
          size={30}
          color="#aaa"
        />
        <Icon
          style={styles.headerStepstwo}
          name="search"
          size={30}
          color="#aaa"
        />
      </View>
    );
  };

  componentBody = () => {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
            <View style={styles.item}>
              <TouchableOpacity>
                <LinearGradient
                  colors={['#2193b0', '#6dd5ed']}
                  style={styles.linearGradient}
                />
                <Icon
                  style={styles.blueicon}
                  name="comment-alt"
                  size={30}
                  color="#fff"
                />
                <Icon
                  style={styles.blueicon2}
                  name="search"
                  size={30}
                  color="#fff"
                />
                <Icon
                  style={styles.blueicon3}
                  name="search"
                  size={40}
                  color="#fff"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.maincomp}>
            <TouchableOpacity>
              <View style={styles.linearGradient} />
            </TouchableOpacity>
          </View>
          <View style={styles.itemtwo}>
            <TouchableOpacity>
              <View>
                <ImageBackground
                  source={{
                    uri:
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7P3NO36rV28-IkB2PyoUN5vMJUxtZaiMa7WjMyH0cUamVDRHU&s',
                  }}
                  style={styles.BackgroundImage}
                  imageStyle={{borderRadius: 10}}
                />
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.body}>
        {this.headerLogos()}
        {this.componentBody()}
        {this.componentFooter()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  HeaderPage: {
    flex: 0.5,
  },
  maintext: {
    marginHorizontal: 50,
    position: 'absolute',
    fontSize: 20,
    marginVertical: 14,
    fontFamily: 'ProductSans-Bold',
  },
  headerLogo: {
    width: 150,
    height: 40,
    resizeMode: 'stretch',
    margin: 10,
  },
  headerSteps: {
    position: 'absolute',
    alignSelf: 'flex-end',
    margin: 10,
    paddingRight: 10,
    fontFamily: 'Lato-Regular',
  },
  headerStepstwo: {
    position: 'absolute',
    alignSelf: 'flex-end',
    margin: 10,
    paddingRight: 60,
    fontFamily: 'Lato-Regular',
  },
  header: {
    flex: 1,
  },
  blueicon: {
    position: 'absolute',
    marginVertical: 50,
    marginHorizontal: 80,
    fontFamily: 'Lato-Regular',
  },
  blueicon2: {
    position: 'absolute',
    marginVertical: 50,
    marginHorizontal: 120,
    fontFamily: 'Lato-Regular',
  },
  blueicon3: {
    position: 'absolute',
    marginVertical: 50,
    marginHorizontal: 150,
    fontFamily: 'Lato-Regular',
  },
  footer: {
    flex: 1,
    borderTopWidth: 1,
    borderColor: '#ffffff',
  },
  container: {
    flex: 8,
  },
  HeaderTitle: {
    margin: 20,
    paddingVertical: 30,
    justifyContent: 'flex-start',
    fontSize: 60,
    color: '#000',
    fontFamily: 'ProductSans-Bold',
  },
  Tab: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  Darkmode: {
    marginHorizontal: 50,
    paddingVertical: 65,
  },

  item: {
    borderRadius: 10,
    alignItems: 'center',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 42,
    color: 'white',
    position: 'absolute',
    alignSelf: 'center',
    paddingVertical: 100,
    fontFamily: 'ProductSans-Black',
  },
  amt: {
    fontSize: 22,
    color: 'white',
    position: 'absolute',
    alignSelf: 'center',
    bottom: 20,
    borderRadius: 10,
    borderWidth: 3,
    fontFamily: 'ProductSans-Bold',
    borderColor: '#fff',
    textAlign: 'center',
    padding: 8,
  },
  linearGradient: {
    borderRadius: 10,
    alignItems: 'center',
    height: 130,
    width: imageWidth - 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  maincomp: {
    flex: 1,
    shadowOpacity: 2, // IOS
    shadowRadius: 2, //IOS
    backgroundColor: '#fff',
    elevation: 2, // Android
    borderRadius: 10,
    alignItems: 'center',
    padding: 20,
    height: 300,
    width: imageWidth - 20,
    marginVertical: 8,
    marginHorizontal: 10,
  },
  BackgroundImage: {
    backgroundColor: '#000',
    opacity: 0.6,
    padding: 20,
    marginVertical: 8,
    alignSelf: 'center',
    height: imageHeight - 450,
    width: 370,
    borderRadius: 10,
  },
});

export default App;
