export type User = {
  id?: string;
  name: string;
  email: string;
};

export type LoginResponse = {
  data: {
    accessToken: string;
    user: User;
  };
};

export type UserResponse = {
  data: { user: User };
};
