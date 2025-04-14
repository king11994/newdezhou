const firebaseConfig = {
  apiKey: "你的API密钥",
  authDomain: "你的项目ID.firebaseapp.com",
  databaseURL: "https://你的项目ID-default-rtdb.firebaseio.com",
  projectId: "你的项目ID",
  storageBucket: "你的项目ID.appspot.com",
  messagingSenderId: "你的发送者ID",
  appId: "你的AppID"
};

// 初始化Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();