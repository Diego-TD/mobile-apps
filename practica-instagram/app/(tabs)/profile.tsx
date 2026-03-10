import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Platform,
  Dimensions,
} from "react-native";
import { posts } from "../data/posts";

const SCREEN_WIDTH = Dimensions.get("window").width;
const GRID_ITEM_SIZE = SCREEN_WIDTH / 3 - 1;

const PROFILE = {
  username: "diegodtd_",
  name: "Diego Torres",
  bio: "I like software. 20 yo.\n2x SWE Google intern.",
  pfp: "https://avatars.githubusercontent.com/u/99055808?v=4&size=256",
  postsCount: posts.length,
  followers: 115,
  following: 180,
};

function StatItem({ value, label }: { value: number | string; label: string }) {
  return (
    <View style={styles.statItem}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

function GridPost({ uri }: { uri: string }) {
  return <Image source={{ uri }} style={styles.gridImage} resizeMode="cover" />;
}

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Top bar */}
      <View style={styles.topBar}>
        <Text style={styles.topBarUsername}>{PROFILE.username}</Text>
        <Text style={styles.menuIcon}>☰</Text>
      </View>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        numColumns={3}
        columnWrapperStyle={styles.gridRow}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* Sección de info: foto + estadísticas */}
            <View style={styles.profileSection}>
              <Image
                source={{ uri: PROFILE.pfp }}
                style={styles.profileImage}
              />
              <View style={styles.statsRow}>
                <StatItem value={PROFILE.postsCount} label="posts" />
                <StatItem value={PROFILE.followers} label="followers" />
                <StatItem value={PROFILE.following} label="following" />
              </View>
            </View>

            {/* Nombre y bio */}
            <View style={styles.bioSection}>
              <Text style={styles.name}>{PROFILE.name}</Text>
              <Text style={styles.bio}>{PROFILE.bio}</Text>
            </View>

            {/* Botones */}
            <View style={styles.buttonsRow}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Edit profile</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Share profile</Text>
              </TouchableOpacity>
            </View>

            {/* Divisor de grilla */}
            <View style={styles.gridDivider} />
          </View>
        }
        renderItem={({ item }) => <GridPost uri={item.postImg} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#dbdbdb",
  },
  topBarUsername: {
    fontSize: 18,
    fontWeight: "bold",
  },
  menuIcon: {
    fontSize: 22,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  profileImage: {
    width: 86,
    height: 86,
    borderRadius: 43,
    borderWidth: 1,
    borderColor: "#dbdbdb",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  statsRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginLeft: 16,
  },
  statItem: {
    alignItems: "center",
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
  },
  statLabel: {
    fontSize: 13,
    color: "#333",
  },
  bioSection: {
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  name: {
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 4,
  },
  bio: {
    fontSize: 14,
    color: "#333",
    lineHeight: 20,
  },
  buttonsRow: {
    flexDirection: "row",
    gap: 8,
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  button: {
    flex: 1,
    paddingVertical: 7,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#dbdbdb",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  buttonText: {
    fontWeight: "600",
    fontSize: 14,
  },
  gridDivider: {
    height: 0.5,
    backgroundColor: "#dbdbdb",
    marginBottom: 1,
  },
  gridRow: {
    gap: 1,
    marginBottom: 1,
  },
  gridImage: {
    width: GRID_ITEM_SIZE,
    height: GRID_ITEM_SIZE,
  },
});
