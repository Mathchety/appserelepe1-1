import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Platform,
  Dimensions,
  KeyboardAvoidingView,
  Button
} from "react-native";
import React, { useState } from "react";
import Colors from "../../constants/Colors";
import { auth, db } from "../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const { height } = Dimensions.get("window");
let top;
if (Platform.OS === "ios") {
  top = height * 0.02;
} else {
  top = 0;
}

export default function Signup({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<any>("");
  const [username, setUsername] = useState<string>("");
  const [phone, setPhone] = useState<number | string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSignup = async () => {
    setLoading(true);
    await createUserWithEmailAndPassword(auth, email.trim(), password)
      .then((userCredential) => {
        const user = userCredential.user;
        setLoading(false);
        setDoc(doc(db, "users", user.uid), {
          Name: username,
          Email: email,
          PhoneNumber: phone,
          CreatedAt: new Date().toUTCString(),
        });
      })
      .then(() => alert("Conta Criada com Sucesso 🎉"))
      .catch((error: any) => {
        setLoading(false);
        alert(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginHeader}>
        <Text style={styles.loginHeaderText}>Inscreva-se agora 🎉</Text>
      </View>

      <KeyboardAvoidingView behavior="padding" style={styles.loginContainer}>
        {/* Username */}
        <View style={styles.emailContainer}>
          <Text style={styles.emailText}>Username</Text>
          <TextInput
            style={styles.emailInput}
            placeholder="Nome"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
        </View>
        {/* Email */}
        <View style={styles.emailContainer}>
          <Text style={styles.emailText}>Email</Text>
          <TextInput
            style={styles.emailInput}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        {/* Phone Number */}
        <View style={styles.emailContainer}>
          <Text style={styles.emailText}>Phone Number</Text>
          <TextInput
            style={styles.emailInput}
            placeholder="Número de Telefone"
            value={phone?.toString()}
            inputMode="numeric"
            onChangeText={(text) => setPhone(text)}
          />
        </View>
        {/* Password */}
        <View style={styles.passwordContainer}>
          <Text style={styles.passwordText}>Password</Text>
          <TextInput
            style={styles.passwordInput}
            placeholder="Senha"
            value={password}
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        {/* Forgot Password */}

        {/* Login Button */}
        <View style={styles.loginButton}>
        
        <TouchableOpacity onPress={handleSignup} style={{ width: '100%'}}>
        
        <Button title={loading ? "Criando conta..." : "Conta criada"} onPress={handleSignup} />
        
        </TouchableOpacity>
        </View>

        <View style={styles.signupGroup}>
          <Text style={styles.new}>Já tem uma conta?</Text>
          <TouchableOpacity onPress={() => navigation.push("Login")}>
            <Text style={styles.signup}>Logar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    marginTop: height * 0.05,
  },
  arrowContainer: {
    width: 40,
    height: 40,
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  loginHeader: {
    marginTop: 20,
  },
  loginHeaderText: {
    fontSize: 36,
    fontWeight: "bold",
  },
  loginContainer: {
    marginTop: 20,
  },
  emailContainer: {
    marginTop: 20,
  },
  emailText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  emailInput: {
    marginTop: 10,
    width: "100%",
    height: 50,
    backgroundColor: Colors.light,
    borderWidth: 1,
    borderColor: Colors.light,
    borderRadius: 8,
    paddingLeft: 10,
  },
  passwordContainer: {
    marginTop: 20,
  },
  passwordText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  passwordInput: {
    marginTop: 10,
    width: "100%",
    height: 50,
    backgroundColor: Colors.light,
    borderRadius: 8,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: Colors.light,
  },
  forgotContainer: {
    marginTop: 20,
    alignItems: "flex-end",
  },
  forgotText: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.primary,
  },
  loginButton: {
    marginTop: 20,
    width: "100%",
    height: 50,
    backgroundColor: Colors.primary,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.white,
  },
  signupGroup: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  signup: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 5,
  },
  new: {
    fontSize: 16,
    fontWeight: "500",
    marginRight: 5,
  },
});
