import { UUID } from "crypto";

export interface User {
  id: UUID;
  name: string;
  email: string;
  email_verified_at: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
  auth: {
    user: User;
  };
};

export interface Chirp {
  id: UUID
  user: User;
  message: string;
  created_at: string;
  updated_at: string;
}
