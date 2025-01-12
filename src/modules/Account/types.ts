import { Currency } from '../../types/models'

export interface DidDoc {
  did: string
  pubKey: string
}

export interface UserInfo {
  didDoc: DidDoc
  name: string
  ledgered: boolean
  loggedInKeysafe: boolean
  hasKYC: boolean
}

export interface AccountState {
  userInfo: UserInfo
  address: string
  accountNumber: string
  sequence: string
  balances: Currency[]
  loginStatusCheckCompleted: boolean
  assistantToggled: boolean
  assistantFixed: boolean
  intent: string
}

export enum AgentRole {
  Owner = 'PO',
  Evaluator = 'EA',
  ServiceProvider = 'SA',
  Investor = 'IA',
}

export type AgentRoleStrategyMap = {
  [TKey in AgentRole]: {
    title: string
    plural: string
  }
}

export enum AccountActions {
  Login = 'ixo/Account/Login',
  Logout = 'ixo/Account/Logout',
  GetAccount = 'ixo/Account/GET_ACCOUNT',
  GetAccountSuccess = 'ixo/Account/GET_ACCOUNT_FULFILLED',
  GetAccountPending = 'ixo/Account/GET_ACCOUNT_PENDING',
  GetAccountFailure = 'ixo/Account/GET_ACCOUNT_REJECTED',
  ToggleAssistant = 'ixo/Account/TOGGLE_ASSISTANT'
}

export interface LoginAction {
  type: typeof AccountActions.Login
  payload: {
    userInfo: UserInfo
    address: string
  }
}

export interface LogoutAction {
  type: typeof AccountActions.Logout
}

export interface GetAccountAction {
  type: typeof AccountActions.GetAccount
  payload: Promise<any>
}

export interface GetAccountSuccessAction {
  type: typeof AccountActions.GetAccountSuccess
  payload: {
    balances: Currency[]
    sequence: string
    accountNumber: string
  }
}

export interface ToogleAssistantPayload {
  fixed?: boolean
  forceClose?: boolean
  forceOpen?: boolean
  intent?: string
  params?: any
}

export interface ToggleAssistantAction {
  type: typeof AccountActions.ToggleAssistant
  payload: ToogleAssistantPayload
}

export type AccountActionTypes =
  | LoginAction
  | LogoutAction
  | GetAccountAction
  | GetAccountSuccessAction
  | ToggleAssistantAction
