import { describe, it, expect, beforeEach } from 'vitest';

describe.skip('add-func', () => {
  const add = (a: number | string, b: number | string): number => {
    return (parseFloat(a as string) * 10 + parseFloat(b as string) * 10) / 10;
  };

  beforeEach(() => {
    
  })

  it('num plus num', () => {

    expect(add(1, 1)).toBe(2);
  });

  it('str plus str', () => {
    
    expect(add('1', '1')).toBe(2);
  });

  it('float plus float', () => {
    // let 0.1 plus 0.2 equals 0.3

    expect(add(0.1, 0.2)).toBe(0.3);
  })

  it('concact str', () => {

    expect(add('1', '1')).not.toBe('11');
  })


})
