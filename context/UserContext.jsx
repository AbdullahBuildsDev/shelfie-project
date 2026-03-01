import { createContext, useState } from "react";
import { account, ID } from "../lib/appwrite";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  // 1️⃣ LOGIN FUNCTION
  async function login(email, password) {
    try {
      await account.createEmailPasswordSession({
        email: email,
        password: password,
      });

      const response = await account.get();
      setUser(response);
      return response;
    } catch (error) {
      console.log("Login Error:", error.message);
      throw error;
    }
  }

  // 2️⃣ REGISTER FUNCTION
  async function register(email, password) {
    try {
      await account.create({
        userId: ID.unique(),
        email: email,
        password: password,
      });

      return await login(email, password); // auto login
    } catch (error) {
      console.log("Register Error:", error.message);
      throw error;
    }
  }

  // 3️⃣ LOGOUT FUNCTION
  async function logout() {
    try {
      await account.deleteSession({
        sessionId: "current",
      });

      setUser(null);
    } catch (error) {
      console.log("Logout Error:", error.message);
    }
  }

  return (
    <UserContext.Provider value={{ user, login, logout, register }}>
      {children}
    </UserContext.Provider>
  );
}