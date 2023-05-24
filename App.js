import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';

import ImageViewer from './components/ImageViewer';

// We use "require" to reference the image as the asset is a static resource. This means
// that it comes from a static place, and not the network as if we were extracting the
// picture from a web place or smt similar. This function can be used to open images,
// videos, audios or documents from our project.
const PlaceholderImage = require('./assets/images/background-image.png');

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
// "Flex" is used to tell stylesheet how much of the space this element can be spread out.
// In Android this would be equivalent to using "weight".
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
});
