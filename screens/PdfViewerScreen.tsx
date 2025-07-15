import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Pdf from 'react-native-pdf';

const PDFViewerScreen = ({ route }: { route: any }) => {

  const { pdfName } = route.params;
  const source = { uri: `bundle-assets://${pdfName}`, cache: true };

  return (
    <View style={styles.container}>
      <Pdf
        source={source}
        style={styles.pdf}
        onError={(error) => {
          console.log('PDF load error:', error);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
});

export default PDFViewerScreen;
