export type User = {
  id: string;
  email: string;
};

export type LoginResponse = {
  data: {
    accessToken: string;
    user: User;
  };
};
