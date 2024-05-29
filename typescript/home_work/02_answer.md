### コーディング問題：型を付与

### 解答
```
// 非同期に数値を取得する関数
function fetchNumber(): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(42);
        }, 1000);
    });
}

// 非同期処理を実行して結果をコンソールに出力する関数
// 結果は返さないのでvoid
function displayNumber(): void {
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


### 解答
```
function isDog(animal: Animal): boolean {
    return animal instanceof Dog;
}
```


### コーディング問題: keyof
以下のインターフェース `Person` と関数 `getProperty` を使って、オブジェクトの特定のプロパティの値を取得する型安全な関数を完成させてください。
また、必須条件としてkeyofを利用してください。

### 解答
```
type Person = {
    name: string;
    age: number;
    email: string;
}

// `keyof` 演算子を使って、指定されたプロパティの値を取得する関数を定義します。
// これならキー名をユニオン型で一個一個定義しなくてもよい
function getProperty(obj: Person, key: keyof Person) {
    return obj[key];
}

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