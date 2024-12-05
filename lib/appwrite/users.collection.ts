import { ID, Query } from "react-native-appwrite";
import { account, avatars, config, databases } from "./setup";
import { handleError } from "@/utils/handleError";

export const createUser = async ({ email, password, username }: CreateUser) => {
  try {
    const newAccount = account.create(ID.unique(), email, password, username); // create the user auth

    if (!newAccount) {
      throw Error;
    }

    const avatarUrl = avatars.getInitials(); // get the users initials

    // prepare data
    const newUserObject: Omit<
      User,
      | "$id"
      | "$createdAt"
      | "$updatedAt"
      | "$databaseId"
      | "$collectionId"
      | "$permissions"
    > = {
      accountId: (await newAccount).$id,
      email,
      username,
      avatar: String(avatarUrl),
    };

    // create the user in the db
    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      newUserObject
    );

    await login(email, password); // establish session

    return newUser;
  } catch (error) {
    console.log("error", error);
    throw Error;
  }
};

export const login = async (email: string, password: string) => {
  try {
    const existingSession = await account.get();

    if (existingSession) {
      return existingSession;
    }

    const session = await account.createEmailPasswordSession(email, password);

    return session;
  } catch (error) {
    console.log("error", error);
    throw Error;
  }
};

export const getAccount = async () => {
  try {
    return await account.get();
  } catch (error) {
    handleError(error);
  }
};

export const getCurrentUser = async (): Promise<User | null> => {
  try {
    const currentAccount = await getAccount();

    if (!currentAccount) {
      throw Error;
    }

    const currentUser = await databases.listDocuments(
      config.databaseId,
      config.userCollectionId,
      [Query.equal("accountId", currentAccount.$id)]
    );

    if (!currentUser) {
      throw Error;
    }

    return currentUser.documents[0] as User;
  } catch (error) {
    return null;
  }
};
