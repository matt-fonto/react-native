import { Client, Account, ID, Avatars, Databases } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.matt-fonto.rn-crash-course",
  projectId: "6751f3e5002c63273632",
  databaseId: "6751f5c3002dcd56cc3a", // get from created db on appwrite
  userCollectionId: "6751f5f50029de41ba9a", // represents the table in the database
  videoCollectionId: "6751f615003b4a87ffce", // another table
  storageId: "6751f867002a70164d0c",
};

export const client = new Client()
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

export const account = new Account(client);
export const avatars = new Avatars(client);
export const databases = new Databases(client);
