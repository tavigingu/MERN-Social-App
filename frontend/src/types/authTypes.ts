export interface LoginCredentials {
    email: string;
    password: string;
  }

export interface RegisterCredentials {
    username: string;
    email: string;
    password: string;
    firstname: string;
    lastname: string;
  }  
  
export interface IUser {
    _id: string;
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    role: string;
    desc: string,
    worksAt: string,
    occupation: string,
    city: string,
    followers: [];
    following: [];
    createdAt: string;
    updatedAt: string;
    profilePicture?: string;
    coverPicture?: string;
  }
  
  export interface AuthResponse {
    message: string;
    success: boolean;
    user: IUser;
  }
  
  export interface AuthState {
    user: IUser | null;
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;
  }