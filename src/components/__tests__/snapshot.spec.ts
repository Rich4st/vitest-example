import { describe, it, expect, beforeAll, afterAll } from 'vitest';


describe.skip('snapshot test', () => {
  const target = [
    {
      name: 'Orange',
      price: 100,
    },
    {
      name: 'Apple',
      price: 200,
    },
  ]

  beforeAll(() => {
    expect(target).toContainEqual({ name: 'Orange', price: 100 })
    console.log('🚀 -----> test start')
  })

  afterAll(() => {
    console.log('🚀 -----> test end')
  })

  // snapshot file
  it.skip('fruit snapshot', () => {

    expect(target).toMatchSnapshot();
  })
  // math snapshot inline
  it('math napshot inline', () => {

    expect(target).toMatchInlineSnapshot([
      {
        name: 'Orange',
        price: 100,
      },
      {
        name: 'Apple',
        price: 200,
      },
    ])
  })

  // throw error test
  it('throw error', () => {
    const food = (food: string): string => {
      throw new Error(`I don't like ${food}`);
    }

    //expect(food('apple')).toThrowErrorMatchingSnapshot(); // error
    expect(() => food('苦瓜')).toThrowError('I don\'t like 苦瓜'); // pass
  })
})
