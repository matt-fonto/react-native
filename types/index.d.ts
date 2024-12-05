type CreateUser = {
  username: string;
  email: string;
  password: string;
};

type User = {
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  $databaseId: string;
  $collectionId: string;
  $permissions: string[];
  accountId: string;
  avatar: string;
  email: string;
  username: string;
};
