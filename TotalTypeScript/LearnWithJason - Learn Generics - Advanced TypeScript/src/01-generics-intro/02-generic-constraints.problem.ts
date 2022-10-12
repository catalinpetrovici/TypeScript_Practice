import { it } from 'vitest';
import { Equal, Expect } from '../helpers/type-utils';

// my solution => generic type
export const returnWhatIPassIn = <T>(t: T & string) => t;

// the solution => generic function
export const returnWhatIPassIn1 = <T extends string>(t: T) => t;

it('Should ONLY allow strings to be passed in', () => {
  const a = returnWhatIPassIn('a');

  type test1 = Expect<Equal<typeof a, 'a'>>;

  // @ts-expect-error
  returnWhatIPassIn(1);

  // @ts-expect-error
  returnWhatIPassIn(true);

  // @ts-expect-error
  returnWhatIPassIn({
    foo: 'bar',
  });
});
