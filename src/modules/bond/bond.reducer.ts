import createReducer from '../../common/redux/createReducer'
import { BondActions, BondAction } from './types'
import { Currency } from '../../types/models'
import { BondState } from './types'

const activeBondInitialState = {
  symbol: 'token1',
  name: 'N/A',
  address: 'N/A',
  collateral: { amount: 0, denom: 'N/A' },
  totalSupply: { amount: 0, denom: 'N/A' },
  price: { amount: 0, denom: 'N/A' },
  alpha: 0,
  alphaDate: new Date(),
  trades: [],
} as BondState

export const activeBond = createReducer(activeBondInitialState, {
  [BondActions.GET_BOND_BALANCES + '_FULFILLED'](
    activeBond: BondState,
    action: BondAction,
  ) {
    const newState = Object.assign({}, action.payload)
    newState.trades = []

    // keep old trade if the same
    if (activeBond.symbol == action.payload.symbol) {
      newState.trades = activeBond.trades
    }
    return newState
  },
  [BondActions.GET_TRADES + '_FULFILLED'](
    activeBond: BondState,
    action: BondAction,
  ) {
    const newState = Object.assign({}, activeBond)
    newState.trades = action.payload!
    return newState
  },
})

export const totalSupplies = createReducer([] as Currency[], {
  [BondActions.GET_TOTAL_SUPPLIES + '_FULFILLED'](
    totalSupplies: [],
    action: BondAction,
  ) {
    const newState = Object.assign([], action.payload)
    return newState
  },
})

// activeBond: Bond;
// balances: [Currency];
// accounts: Accounts;
// activeQuote: Quote;