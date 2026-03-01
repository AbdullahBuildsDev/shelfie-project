import 'react-native-url-polyfill/auto';
import { Client, Account, ID, Avatars } from 'appwrite';

// 1️⃣ Appwrite Client initialize
export const client = new Client();

client
  .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT)
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID);

// 2️⃣ Services export
export const account = new Account(client);
export const avatars = new Avatars(client);
export { ID };