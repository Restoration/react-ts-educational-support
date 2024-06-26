# ES6

## 環境

- Node.js v20.12.1

## 前提

TypeScriptの基本構文については、初歩的な構文を説明していると講義時間が足りないため各個人で勉強していただく必要がある。
そのためReact開発で度々利用するポイントに絞って講義を実施する。

APIリファレンス

- https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference

## ES6の説明

ES6、正式にはECMAScript 2015と呼ばれる、JavaScriptの標準仕様の一つです。ECMAScriptは、JavaScriptを含む言語の標準規格であり、JavaScriptの核となる言語機能を定義しています。ES6は2015年にリリースされ、それ以前のバージョン（ES5、2009年にリリース）から大幅な機能追加や改善が行われました。
Reactの開発を行う上でまずはES6を習得することが重要です。

ES6で導入された主な機能は以下の通りです。
講義では大まかに以下の項目、および付随して必要となるであろう知識を学びます。

### letとconst

- `let`はブロックスコープの変数宣言に使用され、`var`に比べてより制御しやすいスコープを提供します。
- `const`は、一度値が割り当てられると変更できない（再代入できない）定数を宣言するために使用されます。

### アロー関数

- 簡潔な構文で関数を定義できるようになりました。これにより、コードが簡潔になるだけでなく、`this`の挙動がより予測しやすくなります。

### クラス

- JavaScriptにクラスベースのオブジェクト指向を導入し、コンストラクタ、継承などの概念がより使いやすくなりました。

### テンプレートリテラル

- バッククォート（`` ` ``）を使った文字列で、変数の埋め込みや複数行の文字列が直接書けるようになりました。

### デフォルトパラメータ

- 関数のパラメータにデフォルト値を設定できるようになり、関数呼び出し時に引数が省略された場合の挙動を定義できます。

### スプレッド演算子とレストパラメータ

- スプレッド演算子（`...`）を使用して、配列やオブジェクトを展開したり、関数の引数を渡したりできるようになりました。
- レストパラメータもスプレッド演算子の構文を使用し、関数が受け取る可変長の引数を配列として扱えるようになりました。

### モジュール

- `import`と`export`の構文が導入され、JavaScriptファイル間でコードのモジュール化が容易になりました。

### Promise

- 非同期処理をより簡潔に扱うためのPromiseオブジェクトが導入されました。これにより、コールバック地獄から脱却し、非同期処理のコードが読みやすくなります。

これらの機能は、JavaScriptの開発をより強力で効率的にするためのものであり、ES6以降のバージョンでもさらに多くの機能が追加され続けています。

近年のブラウザはES6に対応しているので標準で利用していても問題はないです。
また、TypeScriptのコンパイルでビルドされるコードをES5にすることも可能なので古いブラウザでも動かすことが可能です。
