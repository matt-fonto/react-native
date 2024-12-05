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

const client = new Client()
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async ({ email, password, username }: CreateUser) => {
  try {
    const newAccount = account.create(ID.unique(), email, password, username); // create the user auth

    if (!newAccount) {
      throw Error;
    }

    const avatarUrl = avatars.getInitials(); // get the users initials

    await createSession(email, password); // establish session

    // prepare data
    const newUserObject = {
      accountId: (await newAccount).$id,
      email,
      username,
      avatar: avatarUrl,
    };

    // create the user in the db
    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      newUserObject
    );

    return newUser;
  } catch (error) {
    console.log("error", error);
    throw Error;
  }
};

export const createSession = async (email: string, password: string) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);

    return session;
  } catch (error) {
    console.log("error", error);
    throw Error;
  }
};
