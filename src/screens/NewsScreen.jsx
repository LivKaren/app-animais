import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import axios from 'axios';

const API_URL = 'https://randomfox.ca/floof/'; 

const FoxImageAPIApp = () => {
  const [raposa, setRaposa] = useState(null);

  useEffect(() => {
    fetchRaposa();
  }, []);

  const fetchRaposa = async () => {
    try {
      const response = await axios.get(API_URL);
      setRaposa(response.data.image);
    } catch (error) {
      console.error('Erro ao recuperar imagem da raposa:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Imagem de Raposa:</Text>
      {raposa && (
        <Image source={{ uri: raposa }} style={styles.foxImage} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  foxImage: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
    borderRadius: 10,
  },
});

export default FoxImageAPIApp;