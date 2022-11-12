import { describe, it, expect, vi } from 'vitest';


describe.skip('test fn', () => {
  const sayHello = (name: string | any): string => `Hello ${name}`;
  const spyOnSayHello = vi.fn(sayHello);

  spyOnSayHello(1)
  spyOnSayHello(2)
  // fn 是否被调用过
  it('call fn', () => {

    expect(spyOnSayHello).toHaveBeenCalled();
  })
  // fn 被调用的次数
  it('call fn times', () => {

    expect(spyOnSayHello).toHaveBeenCalledTimes(2);
  })
  // fn 至少返回一次值
  it('call fn return', () => {

    expect(spyOnSayHello).toHaveReturned();
  })
  // fn 返回的值几次
  it('call fn return times', () => {

    expect(spyOnSayHello).toHaveReturnedTimes(2);
  })
  // fn 返回的值
  it('call fn return value', () => {

    expect(spyOnSayHello).toHaveReturnedWith('Hello 2');
  })
  // fn 经过几次调用后返回值
  it('call fn return value times', () => {

    expect(spyOnSayHello).toHaveNthReturnedWith(2, 'Hello 2');
  })
})
