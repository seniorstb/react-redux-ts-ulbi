export interface UserState {
  users: any[];
  loading: boolean;
  error: null | string;
}
export enum UsersActionTypes {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}
interface FetchUsersAction {
  type: UsersActionTypes.FETCH_USERS;
}
interface FetchUsersSuccessAction {
  type: UsersActionTypes.FETCH_USERS_SUCCESS;
  payload: any[]
}
interface FetchUserErrorAction {
  type: UsersActionTypes.FETCH_USERS_ERROR;
  payload: string;
} 
export type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUserErrorAction