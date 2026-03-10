import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { posts, Post } from "../data/posts";

function PostCard({ post }: { post: Post }) {
  return (
    <View style={styles.card}>
      {/* Header: avatar + username */}
      <View style={styles.header}>
        <Image source={{ uri: post.user.pfp }} style={styles.avatar} />
        <Text style={styles.username}>{post.user.name}</Text>
        <Text style={styles.moreIcon}>⋮</Text>
      </View>

      {/* Imagen del post */}
      <Image source={{ uri: post.postImg }} style={styles.postImage} />

      {/* Botones de acción */}
      <View style={styles.actionsContainer}>
        <View style={styles.leftActions}>
          <Text style={styles.actionIcon}>♡</Text>
          <Text style={styles.actionIcon}>💬</Text>
          <Text style={styles.actionIcon}>➤</Text>
        </View>
      </View>

      {/* Info: likes, caption, comentarios, timestamp */}
      <View style={styles.infoContainer}>
        <Text style={styles.likes}>{post.likes} Me gusta</Text>
        <Text style={styles.caption}>
          <Text style={styles.captionUsername}>{post.user.name} </Text>
          {post.caption}
        </Text>
        <Text style={styles.comments}>
          Ver los {post.commentsCount} comentarios
        </Text>
        <Text style={styles.timestamp}>{post.timestamp}</Text>
      </View>
    </View>
  );
}

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Top bar */}
      <View style={styles.topBar}>
        <Text style={styles.logo}>Instagram</Text>
      </View>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PostCard post={item} />}
        showsVerticalScrollIndicator={false}
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
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#dbdbdb",
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  card: {
    marginBottom: 8,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
    borderWidth: 2,
    borderColor: "#e1306c",
  },
  username: {
    fontWeight: "bold",
    fontSize: 14,
    flex: 1,
  },
  moreIcon: {
    fontSize: 20,
    color: "#333",
  },
  postImage: {
    width: "100%",
    height: 400,
    resizeMode: "cover",
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  leftActions: {
    flexDirection: "row",
    gap: 14,
  },
  actionIcon: {
    fontSize: 24,
  },
  infoContainer: {
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  likes: {
    fontWeight: "bold",
    marginBottom: 4,
  },
  caption: {
    marginBottom: 4,
    lineHeight: 20,
  },
  captionUsername: {
    fontWeight: "bold",
  },
  comments: {
    color: "#888",
    marginBottom: 4,
  },
  timestamp: {
    color: "#aaa",
    fontSize: 11,
  },
});
