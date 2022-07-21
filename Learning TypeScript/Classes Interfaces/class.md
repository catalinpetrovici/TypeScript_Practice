### PlayGround

[Playground Link](https://www.typescriptlang.org/play?ts=4.8.0-beta#code/MYGwhgzhAEAqCmEAu0DeAoa0B2YC28AXNMgE4CW2A5gNybQAOFAbmEvAHICueARvKWLYe-UnSzAA9tjJdgSSaQAUuAoTKUqAGiblW7bnwGFhR0gEo09JAAtyEAHSr40ALw588cdFv2Hu-U4RATdGFjYgs28AX3RY9HRQSBgEZAAmKyxnYg1qbwBiAIjDUSFgsXopGSRSOQVlbNztIoNyk3LLDCxfR2dQ528eh0Lw1rNQlsjRGLiEpKg4RCQAZkzGLl4QcmAPNRIazW9JsL1itpxy7yrZeUUVT3UD6i0TwJLjU1FO6ztez37PINfv5RlMQu5Ju8KlhYlhZolwAtUkgACxrbL7Ch5egAfUh50+Aiu0hu9XuaiaL3xZnaZm+3WBfXcAx+fjxoKhEw5l3osXi8xSSwArOiHpjDvRjqR4GAACbSEAAT1eZxpFyilRJNTqd0aT20KrGpUJFjWQyZuy8rMc1NEXNORqJvLiQA)

### Doc

[DOC 1](https://stackoverflow.com/questions/59641564/what-are-the-differences-between-the-private-keyword-and-private-fields-in-types)

### Normal

```javascript

Input TypeScript:

class Test {
  name: string;
  privateNumber: number;
  constructor(name: string, privateNumber: number) {
    this.name = name;
    this.privateNumber = privateNumber;
  }
}

Output JavaScript:

class Test {
    constructor(name, privateNumber) {
        this.name = name;
        this.privateNumber = privateNumber;
    }
}
```

### Hash # prefix

```javascript

Input TypeScript:

class Test2 {
  name: string;
  #privateNumber: number;
  constructor(name:string,privateNumber:number) {
  this.name = name;
  this.#privateNumber = privateNumber;
  }
}

Output JavaScript:

"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Test2_privateNumber;
class Test {
    constructor(name, privateNumber) {
        this.name = name;
        this.privateNumber = privateNumber;
    }
}
_Test2_privateNumber = new WeakMap();
```

### Plain valid character ' \_ '

```javascript

Input TypeScript:

class Test4 {
  name: string;
  _privateNumber: number;
  constructor(name:string, privateNumber:number) {
  this.name = name;
  this._privateNumber = privateNumber;
  }
}

Output JavaScript:

class Test4 {
    constructor(name, privateNumber) {
        this.name = name;
        this._privateNumber = privateNumber;
    }
}
```

### Private Public

```javascript

Input TypeScript:

class Test3 {
  public name: string;
  private privateNumber: number;
  constructor(name:string, privateNumber:number) {
  this.name = name;
  this.privateNumber = privateNumber;
  }
}

Output JavaScript:

class Test3 {
    constructor(name, privateNumber) {
        this.name = name;
        this.privateNumber = privateNumber;
    }
}
```

### Private ReadOnly

```javascript

Input TypeScript:

class Test5 {
  name: string;
  private readonly privateNumber: number;
  constructor(name:string, privateNumber:number) {
  this.name = name;
  this.privateNumber = privateNumber;
  }
}

Output JavaScript:

class Test5 {
    constructor(name, privateNumber) {
        this.name = name;
        this.privateNumber = privateNumber;
    }
}
```
