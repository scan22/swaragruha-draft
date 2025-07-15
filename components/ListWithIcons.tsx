// components/ListWithIcons.tsx
import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// ✅ Props now also include `navigation` and full `data`
interface Props {
  title: string;
  items: string[];
  navigation: any;
  data: any[];
}

const ListWithIcons: React.FC<Props> = ({ title, items, navigation, data }) => {
  return (
    <View style={styles.fullScreenWrapper}>
      <View style={styles.container}>
        <Text style={styles.header}>{title}</Text>

        {items.map((item, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.name}>{item}</Text>

            <View style={styles.iconGroup}>
              {/* Play Button */}
              <MaterialIcons name="play-arrow" size={24} color="blue" style={styles.icon} />

              {/* 📄 PDF Button as Touchable */}
              <TouchableOpacity
                onPress={() => {
                  const pdfName = data[index]?.pdfName ?? 'mydoc.pdf'; // fallback to one PDF
                  navigation.navigate('PDFViewer', { pdfName });
                }}
              >
                <MaterialIcons name="picture-as-pdf" size={24} color="red" style={styles.icon} />
              </TouchableOpacity>

              {/* 🎧 Headphones Icon */}
              <FontAwesome name="headphones" size={22} color="#555" style={styles.icon} />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  fullScreenWrapper: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: height - 40,
    width: width - 20,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 30,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    textDecorationLine: 'underline',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#005',
    paddingVertical: 12,
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 18,
    flex: 1,
  },
  iconGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 5,
  },
});

export default ListWithIcons;
