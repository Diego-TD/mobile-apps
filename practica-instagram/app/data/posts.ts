export type Post = {
  id: string;
  user: {
    name: string;
    pfp: string;
  };
  likes: string;
  caption: string;
  postImg: string;
  commentsCount: number;
  timestamp: string;
};

export const posts: Post[] = [
  {
    id: "1",
    user: {
      name: "diegodtd_",
      pfp: "https://avatars.githubusercontent.com/u/99055808?v=4&size=64",
    },
    likes: "324",
    caption: "Explorando React Native con Flexbox 🚀",
    postImg: "https://picsum.photos/seed/abc/400/400",
    commentsCount: 12,
    timestamp: "hace 2 horas",
  },
  {
    id: "2",
    user: {
      name: "maria_dev",
      pfp: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    likes: "891",
    caption: "Atardecer desde la oficina 🌅",
    postImg: "https://picsum.photos/seed/def/400/400",
    commentsCount: 34,
    timestamp: "hace 5 horas",
  },
  {
    id: "3",
    user: {
      name: "carlos_codes",
      pfp: "https://randomuser.me/api/portraits/men/15.jpg",
    },
    likes: "156",
    caption: "Nuevo setup, nueva energía 💻",
    postImg: "https://picsum.photos/seed/ghi/400/400",
    commentsCount: 8,
    timestamp: "hace 1 día",
  },
  {
    id: "4",
    user: {
      name: "laura.ui",
      pfp: "https://randomuser.me/api/portraits/women/22.jpg",
    },
    likes: "2.1k",
    caption: "Diseño + código = ❤️ #UX #Mobile",
    postImg: "https://picsum.photos/seed/jkl/400/400",
    commentsCount: 67,
    timestamp: "hace 2 días",
  },
  {
    id: "5",
    user: {
      name: "pedro.foto",
      pfp: "https://randomuser.me/api/portraits/men/77.jpg",
    },
    likes: "543",
    caption: "La ciudad nunca duerme 🌆",
    postImg: "https://picsum.photos/seed/mno/400/400",
    commentsCount: 21,
    timestamp: "hace 3 días",
  },
];
