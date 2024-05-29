### コーディング問題: 複合型を使用したユーザープロファイルの管理

TypeScriptを使用して、ユーザープロファイルを管理する関数を実装してください。
ここでは、ユーザープロファイルに関連する複数の型を組み合わせて使用します。

#### 要件

1. 以下の複合型を定義してください：
   - `Address`型: ユーザーの住所情報を表します。
     ```typescript
     type Address = {
         street: string;
         city: string;
         country: string;
     };
     ```
   - `PersonalInfo`型: ユーザーの個人情報を表します。
     ```typescript
     type PersonalInfo = {
         firstName: string;
         lastName: string;
         email: string;
     };
     ```
   - `UserProfile`型: `Address`型と`PersonalInfo`型を組み合わせたユーザープロファイルを表します。
     ```typescript
     type UserProfile = PersonalInfo & {
         address: Address;
     };
     ```

2. `UserProfile`型のユーザープロファイルを更新する関数を実装してください：
   - `updateUserProfile(profile: UserProfile, updates: Partial<UserProfile>): UserProfile`
     - `profile`は既存のユーザープロファイルです。
     - `updates`は更新するプロパティを含む部分的なユーザープロファイルです。

#### 例

1. ユーザープロファイルの更新
```typescript
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

#### 要件

1. 配列が空の場合は`undefined`を返す。
2. 数値の配列を受け取り、その中の最大値を返す。
3. カスタムオブジェクトの配列を受け取り、指定されたプロパティの値の中で最大のオブジェクトを返す。

#### ヒント

- `Array.prototype.reduce`の使用。
- 比較には、ジェネリック型を使用して柔軟に対応できるようにします。
- カスタムオブジェクトの場合、比較するプロパティを関数引数として受け取ります。

#### 例

1. 数値の配列の場合
```typescript
const numbers = [1, 5, 3, 9, 2];
const maxNumber = findMax(numbers); // 9
console.log(maxNumber); // 9
```

2. カスタムオブジェクトの配列の場合
```typescript
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

TypeScriptを使用して、銀行口座を管理するクラスを実装してください。
このクラスは、預金、引き出し、残高照会の機能を持ち、すべての操作を型安全に行う必要があります。

#### 要件

1. 銀行口座クラス（`BankAccount`）を実装してください。
2. クラスは以下のプロパティを持つべきです：
   - `accountNumber`（口座番号）: 文字列型
   - `accountHolder`（口座名義人）: 文字列型
   - `balance`（残高）: 数値型（初期値は0）
3. クラスは以下のメソッドを持つべきです：
   - `deposit(amount: number): void` - 指定された金額を預金します。
   - `withdraw(amount: number): void` - 指定された金額を引き出します。残高が不足している場合はエラーを投げます。
   - `getBalance(): number` - 現在の残高を返します。

#### 注意点

- 金額は常に0以上でなければなりません。
- 引き出しは残高を超えて行うことはできません。超えた場合はエラーを発生させます。

#### 例

```typescript
const account = new BankAccount("123456789", "John Doe");

account.deposit(1000);
console.log(account.getBalance()); // 1000

account.withdraw(500);
console.log(account.getBalance()); // 500

account.withdraw(600); // エラー: 残高不足
```


### コーディング問題: ジェネリクスを利用したデータ変換関数

TypeScriptを使用して、任意の型の配列を別の型の配列に変換するジェネリック関数を実装してください。この関数は、与えられた変換関数を用いて、入力配列の各要素を変換し、変換後の配列を返します。

#### 要件

1. 入力配列の型を`T`、出力配列の型を`U`とするジェネリック関数を実装してください。
2. 関数は以下のシグネチャを持つべきです：
   - `transformArray<T, U>(inputArray: T[], transformFn: (item: T) => U): U[]`
3. `inputArray`は任意の型の配列です。
4. `transformFn`は、入力配列の各要素を変換する関数です。

#### 例

1. 数字の配列を文字列の配列に変換する場合
```typescript
const numbers = [1, 2, 3, 4];
const numberToString = (num: number) => num.toString();
const stringArray = transformArray(numbers, numberToString);
console.log(stringArray); // ["1", "2", "3", "4"]
```

2. オブジェクトの配列を特定のプロパティの配列に変換する場合
```typescript
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

#### 要件

1. スタッククラスはジェネリック型`T`を使用し、任意の型の要素を保持できるようにします。
2. スタッククラスには以下のメソッドを含めます：
   - `push(item: T): void` - スタックにアイテムを追加します。
   - `pop(): T | undefined` - スタックからアイテムを取り出します（空のスタックの場合は`undefined`を返します）。
   - `peek(): T | undefined` - スタックのトップにあるアイテムを確認します（取り出さずに、空のスタックの場合は`undefined`を返します）。
   - `isEmpty(): boolean` - スタックが空かどうかを確認します。
   - `size(): number` - スタックに含まれるアイテムの数を返します。

#### 例

```typescript
const numberStack = new GenericStack<number>();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.peek()); // 2
console.log(numberStack.pop()); // 2
console.log(numberStack.pop()); // 1
console.log(numberStack.isEmpty()); // true

const stringStack = new GenericStack<string>();
stringStack.push("a");
stringStack.push("b");
console.log(stringStack.size()); // 2
console.log(stringStack.peek()); // "b"
```