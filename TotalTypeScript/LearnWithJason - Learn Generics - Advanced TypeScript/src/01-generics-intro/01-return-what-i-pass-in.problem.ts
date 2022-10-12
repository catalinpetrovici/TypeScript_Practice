import { Equal, Expect } from '../helpers/type-utils';

// T it's like function arguments

// types can represent anything
// interfaces only objects and functions

const returnWhatIPassIn = <T>(t: T): T => {
  return t;
};
// or
const returnWhatIPassIn1 = <T>(t: T) => {
  return t;
};

const one = returnWhatIPassIn(1);
const matt = returnWhatIPassIn('matt');

type tests = [Expect<Equal<typeof one, 1>>, Expect<Equal<typeof matt, 'matt'>>];

//
interface DataWrapper<TData> {
  data: TData;
}

interface User {
  name: string;
  age: number;
}

type UserData = DataWrapper<User>;

const whatever: UserData = {
  data: { name: 'Catalin', age: 26 },
};
