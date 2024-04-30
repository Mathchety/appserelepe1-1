import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import Colors from "../../constants/Colors";
import { auth, db } from "../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { getAuth, signOut, } from "firebase/auth";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from '../../components/HeaderPerfil';
import AvatarImage from "../../components/Avatar";


export default function Logout({ navigation }: { navigation: any }) {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const handleSignout = async () => {


    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  };
  const getData = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      // Recupere o documento do usuário no Firestore
      const userDocRef = doc(db, 'users', user.uid); // Substitua 'Users' pelo nome da sua coleção
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        setUserName(userData?.Name);

        // Agora você pode usar o nome do usuário onde precisar
      } else {
        Alert.alert('Documento do usuário não encontrado.');
      }
    } else {
      Alert.alert('Usuário não autenticado.');
    }
    // Get the current user
    if (user) {
      // Fetch the user's email
      setEmail(user.email);

    }
  }

  useEffect(() => {
    getData();
  }, );
  return (
    <SafeAreaView style={styles.tela}>
      <Header />
      <View style={styles.conteudo}>{/* <Text style={{ fontSize: 25 }}>aqui{userName}</Text> */}
      <AvatarImage/>
        <Text style={{ fontSize: 25 }}>{email}</Text>
        <Text style={{ fontSize: 25 }}>Olá!</Text>

        <View style={styles.container}>

          <Text style={styles.conta}>Dados Pessoais</Text>

          <Text style={styles.conquistas}>Conquistas</Text>

          <Text style={styles.progresso}>Progresso</Text>

          <Text style={styles.meta}>Meta de Injestão</Text>

        </View>


        <View>
          <TouchableOpacity style={styles.button} onPress={handleSignout}>
            <Text style={{ color: Colors.white, fontSize: 20 }}>Sair</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  tela: {
    flex: 1,
    backgroundColor: "F7F8F8",
    /* justifyContent: "center", */
    alignItems: "center",
  },
  conteudo : {
    flex: 1,
    backgroundColor: "F7F8F8",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: Colors.alert,
    padding: 10,
    borderRadius: 8,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    marginTop: 50,
  },

  conta: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },

  conquistas: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },

  progresso: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },

  meta: {

    justifyContent: "center",
    alignItems: "center",
    color: "grey",
  },

});
