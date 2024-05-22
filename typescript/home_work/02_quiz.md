### コーディング問題：型を付与
以下の処理に対して型を付与してください。

```typescript
// 非同期に数値を取得する関数
function fetchNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(42);
        }, 1000);
    });
}

// 非同期処理を実行して結果をコンソールに出力する関数
function displayNumber() {
    fetchNumber().then(number => {
        console.log(`Number: ${number}`);
    }).catch(error => {
        console.error(error.message);
    });
}

// テスト関数の実行
displayNumber();
```


### コーディング問題：classの型チェック

二つのクラスが定義されています。
引数がDogのインスタンスであれば`true`を、そうでなければ`false`を返すisDog関数を作成してください

```typescript
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound() {
        return "Some sound";
    }
}

class Dog extends Animal {
    breed: string;

    constructor(name: string, breed: string) {
        super(name);
        this.breed = breed;
    }

    bark() {
        return "Woof!";
    }
}

const genericAnimal = new Animal("Generic Animal");
const myDog = new Dog("Rex", "Golden Retriever");

console.log(isDog(genericAnimal)); // false
console.log(isDog(myDog));         // true
```



### コーディング問題: keyof
以下のインターフェース `Person` と関数 `getProperty` を使って、オブジェクトの特定のプロパティの値を取得する型安全な関数を完成させてください。
また、必須条件としてkeyofを利用してください。

```typescript
type Person = {
    name: string;
    age: number;
    email: string;
}


// この関数を完成させてください
function getProperty() {}

// テストケース
const person: Person = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com"
};

const name = getProperty(person, "name");
const age = getProperty(person, "age");
const email = getProperty(person, "email");

console.log(name);  // "John Doe"
console.log(age);   // 30
console.log(email); // "john.doe@example.com"
```