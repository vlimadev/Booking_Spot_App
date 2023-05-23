import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import api from "../services/api";

export default function SpotList({ tech }) {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    async function LoadSpots() {
      const response = await api.get("/spots", {
        params: { tech },
      });
      setSpots(response.data);
    }

    LoadSpots();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Empresa que usam <Text style={styles.bold}>{tech}</Text>
      </Text>
      <FlatList
        style={styles.list}
        data={spots}
        keyExtractor={(spot) => spot._id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Image
              style={styles.thumbnail}
              source={{ uri: item.thumbnail_url }}
            ></Image>
            <Text>{item.company}</Text>
            <Text>{item.price ? `R$${item.price}/DIA` : "GRATUITO"}</Text>
            <TouchableOpacity>
              <Text>Solicitar Reserva</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  title: {
    fontSize: 20,
    color: "#444",
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  bold: {
    fontWeight: "bold",
  },
});
