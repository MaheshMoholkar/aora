import { Account, Avatars, Client, Databases, ID } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.example.aora",
  projectId: "66784bc2002fd0786364",
  databaseId: "66784cdc0036e120bc32",
  userCollectionId: "66784cf3000f5b52828e",
  videoCollectionId: "66784d090008e409cd04",
  storageId: "66784e34001f3f258cfb",
};

const client = new Client();

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (
  email: string,
  username: string,
  password: string
) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );

    if (!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(username);

    await signIn(email, password);

    const newUser = databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        accoundId: newAccount.$id,
        email,
        username,
        avatar: avatarUrl,
      }
    );

    return newUser;
  } catch (error) {
    console.log(error);
  }
};

export async function signIn(email: string, password: string) {
  try {
    const session = await account.createEmailPasswordSession(email, password);
  } catch (error) {
    console.log(error);
  }
}
