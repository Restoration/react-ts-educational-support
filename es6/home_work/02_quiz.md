# クイズ

### クイズ1: アロー関数についての質問

ES6で導入されたアロー関数に関する記述として正しいものはどれでしょうか？
A. `this` の値は関数が呼ばれたコンテキストに基づく  
B. アロー関数は自身の `this` を持たないため、外側のスコープから `this` を継承する  
C. アロー関数は `new` キーワードを使用してインスタンス化できる  
D. アロー関数は常に匿名である

### クイズ2: デフォルトパラメータに関する質問

次の関数定義の中で、ES6のデフォルトパラメータ機能を使用しているのはどれでしょうか？
A. `function add(x, y) { return x + y; }`  
B. `function add(x, y = 1) { return x + y; }`  
C. `function add(x = 1, y) { return x + y; }`  
D. BとCの両方

### クイズ3: アロー関数の使用例に関する質問

次のコードスニペットの中で、アロー関数を正しく使用しているのはどれでしょうか？
A. `const double = x => x * 2;`  
B. `const double = function(x) => x * 2;`  
C. `const double = (x) => { return x * 2; }`  
D. AとCの両方

## プログラミング問題

### 関数

### 配列内の数値を倍にする関数の作成

以下の条件に沿った関数を作成してください

1. 関数名は `doubleValues` とします。
2. 引数として数値の配列を一つ取ります。
3. 戻り値は、配列の各要素を倍にした新しい配列です。
4. 関数はアロー関数を使用して定義してください。

#### 例

```javascript
console.log(doubleValues([1, 2, 3])); // [2, 4, 6]
console.log(doubleValues([-1, 0, 5])); // [-2, 0, 10]
```

### JavaScript クラスの基本

#### 課題

「Car」クラスを定義してください。このクラスは車のブランド（brand）とモデル（model）をプロパティとして持ちます。次に、クラスに`displayInfo`メソッドを追加し、それを使用して車の情報をコンソールに出力するコードを書いてください。

1. **クラスの定義**:

   - クラス名は`Car`です。
   - コンストラクタは`brand`（車のブランド）と`model`（車のモデル）の2つの引数を受け取ります。

2. **メソッドの追加**:

   - `displayInfo`メソッドをクラスに追加します。このメソッドは、インスタンスのブランドとモデルを組み合わせた文字列をコンソールに出力する`console.log`を含むようにします。

3. **インスタンスの作成とメソッドのテスト**:
   - `Car`クラスから`myCar`という名前の新しいインスタンスを作成します。このインスタンスは`brand`に`"Toyota"`、`model`に`"Corolla"`を持ちます。
   - `myCar`インスタンスで`displayInfo`メソッドを呼び出し、正しく車の情報がコンソールに出力されることを確認します。

以下のテンプレートを使用して、上記の課題を解決するコードを書いてください。

```javascript
// Car クラスの定義
class Car {
  // コンストラクタを定義してください
  // displayInfo メソッドを定義してください
}

// 'myCar' インスタンスを作成してください

// 'myCar' の displayInfo メソッドを呼び出してください
```

### JavaScript クラスの応用

#### 問題文

次のクラス定義を考えます。

```javascript
class Animal {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  makeSound() {
    console.log("Some generic sound!");
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this._breed = breed;
  }

  get breed() {
    return this._breed;
  }

  makeSound() {
    console.log("Woof! Woof!");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("Meow! Meow!");
  }
}

function makeAnimalSound(animal) {
  animal.makeSound();
}
```

1. 上記のコードにおいて、`Animal` クラスは何のために存在していますか？
2. `Dog` クラスにはどのような追加情報がありますか？
3. `makeAnimalSound` 関数はどのような種類の引数を受け取ることができ、どのように機能しますか？
4. このコードの中でカプセル化がどのように使われているか説明してください。
5. 継承とポリモーフィズムがどのように実装されているか、具体的に述べてください。
