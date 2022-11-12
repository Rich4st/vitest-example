import { describe, it, expect, beforeEach } from 'vitest';

class FoodBank {
  public safe: Record<string, { balance: number }>;

  constructor() {
    this.safe = {};
  }

  createAccount(name: string) {
    if (this.safe[name]) return 'Account already exists';
    this.safe[name] = { balance: 0 };
    
    return 'Account created';
  }

  deposit(name: string, amount: number) {
    if (!this.safe[name]) return 'Account does not exist';
    if(amount < 0) return 'illegal amount'
    this.safe[name].balance += amount;
    return `Deposit successful, banlance: ${this.safe[name].balance}`;
  }

  withdraw(name: string, amount: number) {
    if(!this.safe[name]) return 'account does not exist'
    if(amount < 0) return 'illegal amount'
    if(this.safe[name].balance < amount) return `insufficient funds, balance: ${this.safe[name].balance}`
    this.safe[name].balance -= amount
    return `Withdraw successful, balance: ${this.safe[name].balance}`
  }
}

describe.skip('createAccount', () => {
  // happy path
  it('created, user saved', () => {
    const bank = new FoodBank();

    bank.createAccount('John');
    // init bank safe successfully
    expect(bank.safe).toEqual({ John: { balance: 0 } });
  })
  it('created, alert saved', () => {
    const bank = new FoodBank();
    // create account successfully
    expect(bank.createAccount('John')).toEqual('Account created');
  })

  // sad path
  it('already exists, alert', () => {
    const bank = new FoodBank();
    bank.createAccount('John');
    // create account failed, account already exists
    expect(bank.createAccount('John')).toEqual('Account already exists');
  })
})

describe.skip('deposit', () => {
  // happy path
  it('deposited 100', () => {
    const bank = new FoodBank()
    
    bank.createAccount('john')
    bank.deposit('john', 100)
    // deposit successfully
    expect(bank.safe).toEqual({ john: { balance: 100 } })
  })
  it('deposited 100, return balance', () => {
    const bank = new FoodBank()

    bank.createAccount('john')
    // deposit successfully, return balance
    expect(bank.deposit('john', 100)).toEqual(`Deposit successful, banlance: ${100}`)
  })

  // sad path
  it('no account, alert', () => {
    const bank = new FoodBank()

    // deposit failed, account doesn't exist
    expect(bank.deposit('john', 100)).toEqual('Account does not exist')
  })
  it('negative amount, alert', () => {
    const bank = new FoodBank()

    bank.createAccount('john')
    // deposit negative amount
    expect(bank.deposit('john', -1)).toEqual('illegal amount')
  })
})

describe.skip('withdraw', () => {
  // happy path
  it('withdraw 100', () => {
    const bank = new FoodBank()

    bank.createAccount('john')
    bank.deposit('john', 100)
    bank.withdraw('john', 100)
    // withdraw successfully
    expect(bank.safe).toEqual({ john: { balance: 0 } })
  })
  it('withdraw 100, return balance', () => {
    const bank = new FoodBank()

    bank.createAccount('john')
    bank.deposit('john', 100)
    // withdraw successfully, return balance
    expect(bank.withdraw('john', 100)).toEqual(`Withdraw successful, balance: ${0}`)
  })

  // sad path
  it('no account, alert', () => {
    const bank = new FoodBank()

    // withdraw failed, account doesn't exist
    expect(bank.withdraw('john', 100)).toEqual('account does not exist')
  })
  it('negative amount, alert', () => {
    const bank = new FoodBank()

    bank.createAccount('john')
    // withdraw negative amount
    expect(bank.withdraw('john', -1)).toEqual('illegal amount')
  })
  it('insufficient funds, alert', () => {
    const bank = new FoodBank()

    bank.createAccount('john')
    // withdraw more than balance
    expect(bank.withdraw('john', 1)).toEqual(`insufficient funds, balance: ${0}`)
  })
})
