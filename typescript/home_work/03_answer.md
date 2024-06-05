### コーディング問題: 複合型を使用したユーザープロファイルの管理

### 答え

```typescript
type Address = {
    street: string;
    city: string;
    country: string;
};

type PersonalInfo = {
    firstName: string;
    lastName: string;
    email: string;
};

// Partialを追記
type UserProfile = PersonalInfo & {
    address: Partial<Address>;
};

function updateUserProfile(profile: UserProfile, updates: Partial<UserProfile>): UserProfile {
    return {
        ...profile,
        ...updates,
        address: {
            ...profile.address,
            ...updates.address
        }
    };
}

// テスト

const profile: UserProfile = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    }
};

const updates: Partial<UserProfile> = {
    email: "john.new@example.com",
    address: {
        city: "New City"
    }
};

const updatedProfile = updateUserProfile(profile, updates);
console.log(updatedProfile);
/*
{
    firstName: "John",
    lastName: "Doe",
    email: "john.new@example.com",
    address: {
        street: "123 Main St",
        city: "New City",
        country: "USA"
    }
}
*/
```

### コーディング問題: 配列の最大値を求めるジェネリクス関数

ジェネリクスを使用して、配列の中から最大値を求める関数を作成してください。この関数は、数値の配列だけでなく、カスタムオブジェクトの配列でも動作するようにします。カスタムオブジェクトの場合は、比較に使うプロパティを指定できるようにします。

### 解答

```typescript
function findMax<T>(array: T[], getValue?: (item: T) => number): T | undefined {
    if (array.length === 0) {
        return undefined;
    }

    if (!getValue) {
        // 数値の配列の場合
        return array.reduce((max, item) => (item > max ? item : max)) as unknown as T;
    }

    // カスタムオブジェクトの配列の場合
    return array.reduce((max, item) => (getValue(item) > getValue(max) ? item : max));
}

// 数値の配列のテスト
const numbers = [1, 5, 3, 9, 2];
const maxNumber = findMax(numbers); // 9
console.log(maxNumber); // 9

// カスタムオブジェクトの配列のテスト
type Person = {
    name: string;
    age: number;
};

const people: Person[] = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 20 }
];

const oldestPerson = findMax(people, person => person.age); // { name: "Bob", age: 30 }
console.log(oldestPerson); // { name: "Bob", age: 30 }
```


### コーディング問題: 銀行口座クラスの実装

### 解答

```typescript
class BankAccount {
    private accountNumber: string;
    private accountHolder: string;
    private balance: number;

    constructor(accountNumber: string, accountHolder: string) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = 0;
    }

    deposit(amount: number): void {
        if (amount <= 0) {
            throw new Error("預金額は0以上でなければなりません。");
        }
        this.balance += amount;
    }

    withdraw(amount: number): void {
        if (amount <= 0) {
            throw new Error("引き出し額は0以上でなければなりません。");
        }
        if (amount > this.balance) {
            throw new Error("残高不足です。");
        }
        this.balance -= amount;
    }

    getBalance(): number {
        return this.balance;
    }
}

// テスト
const account = new BankAccount("123456789", "John Doe");

account.deposit(1000);
console.log(account.getBalance()); // 1000

account.withdraw(500);
console.log(account.getBalance()); // 500

try {
    account.withdraw(600);
} catch (error) {
    console.log(error.message); // "残高不足です。"
}
```


### コーディング問題: ジェネリクスを利用したデータ変換関数

### 解答

```typescript
function transformArray<T, U>(inputArray: T[], transformFn: (item: T) => U): U[] {
    return inputArray.map(transformFn);
}

// テスト

// 数字の配列を文字列の配列に変換する場合
const numbers = [1, 2, 3, 4];
const numberToString = (num: number) => num.toString();
const stringArray = transformArray(numbers, numberToString);
console.log(stringArray); // ["1", "2", "3", "4"]

// オブジェクトの配列を特定のプロパティの配列に変換する場合
type User = {
    id: number;
    name: string;
};

const users: User[] = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];

const getNames = (user: User) => user.name;
const names = transformArray(users, getNames);
console.log(names); // ["Alice", "Bob", "Charlie"]
```



### コーディング問題: ジェネリックスタッククラスの実装

以下の要件に基づいて、ジェネリクスを使用したスタッククラス（`GenericStack`）を実装してください。

### 解答

```typescript
class GenericStack<T> {
    private items: T[] = [];

    public push(item: T): void {
        this.items.push(item);
    }

    public pop(): T | undefined {
        return this.items.pop();
    }

    public peek(): T | undefined {
        if (this.items.length === 0) {
            return undefined;
        }
        return this.items[this.items.length - 1];
    }

    public isEmpty(): boolean {
        return this.items.length === 0;
    }

    public size(): number {
        return this.items.length;
    }
}

// テスト

// 数値スタック
const numberStack = new GenericStack<number>();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.peek()); // 2
console.log(numberStack.pop()); // 2
console.log(numberStack.pop()); // 1
console.log(numberStack.isEmpty()); // true

// 文字列スタック
const stringStack = new GenericStack<string>();
stringStack.push("a");
stringStack.push("b");
console.log(stringStack.size()); // 2
console.log(stringStack.peek()); // "b"
console.log(stringStack.pop()); // "b"
console.log(stringStack.pop()); // "a"
console.log(stringStack.isEmpty()); // true
```
