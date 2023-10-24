type User = {
  cpf: number;
  email: string;
  id: number;
  name: string;
  phone: string;
};

export type userType = {
  accessToken: string;
  user: User;
};
