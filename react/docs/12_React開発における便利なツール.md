## React開発における便利なツール

### コーディング規約
TypeScriptにおけるコーディング規約は、コードの一貫性、可読性、保守性を向上させるために使用されます。  
企業によっては独自の規約を開発チーム内で作成したり、Googleなどが提唱している規約をそのまま流用するなど、開発チームによって異なります。  
以下は有名どころの規約になります。  
  
- [Microsoft TypeScript Style Guide](https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html)


### 静的解析ツール
React開発において主に利用されるツールはESLintになります。
ESLintは、JavaScriptやTypeScriptコードの静的解析ツールであり、コードの品質を向上させ、バグの発生を減らすために使用されます。
ESLintは、コードの一貫性を保つためのルールセットを提供し、開発者が設定したルールに基づいてコードをチェックし、違反箇所を報告します。


__利用することのメリット__
1. **コードの一貫性:** コードスタイルのガイドラインに従うことで、プロジェクト内のコードが一貫して読みやすくなります。
2. **バグの早期発見:** 静的解析により、潜在的なバグやパフォーマンスの問題を早期に発見できます。
3. **カスタマイズ可能:** 既存のルールセットを使用するだけでなく、自分たちのプロジェクトに合わせたカスタムルールを追加することもできます。
4. **プラグインのサポート:** 様々なプラグインを利用して、ReactやTypeScript、Node.jsなどの特定のフレームワークやライブラリに対応したルールを追加できます。
5. **統合:** 多くのコードエディタ（VSCodeなど）やCI/CDパイプラインと統合して、開発のプロセスに組み込むことができます。

※似たようなものにTSLintも存在しましたがESLintへ移行したため現在は使われていません。そのためESLintを利用してください。
  
- [ESLint](https://eslint.org/)
  

エディタとの連携ができるため、プロジェクトおよびVSCodeに導入してみましょう。  
またプラグインを組み合わせることで先程書いたコーディング規約に寄せた設定を作成することも可能です。

#### 基本的な使用方法

1. **インストール**

   ```bash
   npm install eslint --save-dev
   ```

2. **設定ファイルの生成**

   プロジェクトのルートディレクトリで以下のコマンドを実行し、設定ファイルを生成します。

   ```bash
   npx eslint --init
   ```

   質問に答えることで、プロジェクトに適したESLintの設定が生成されます。

3. **ESLintの実行**

   設定ファイルが生成されたら、以下のコマンドでコードをチェックできます。

   ```bash
   npx eslint yourfile.js
   ```

4. **VSCodeでの統合**

   VSCodeを使用している場合、ESLint拡張機能をインストールすることで、コードを書いている間にリアルタイムでエラーチェックを行えます。

   - 拡張機能をインストールする
   - `.vscode/settings.json` に以下の設定を追加

     ```json
     {
       "eslint.enable": true,
       "eslint.run": "onSave",
       "editor.codeActionsOnSave": {
         "source.fixAll.eslint": true
       }
     }
     ```

##### よく使われるプラグイン

- **eslint-plugin-react:** Reactコードのルールを追加
- **eslint-plugin-import:** import/export文の整理とチェック
- **eslint-plugin-jsx-a11y:** アクセシビリティのチェック
- **@typescript-eslint/eslint-plugin:** TypeScript用のルールを追加


### Prettier
Prettierは、コードフォーマッターであり、JavaScript、TypeScript、HTML、CSSなどのコードを自動的に整形して一貫性のあるスタイルを維持するためのツールです。Prettierは、コードのフォーマットに関する議論を減らし、開発者がコーディングに集中できるようにすることを目的としています。

### Prettierの主な特徴と利点

1. **一貫したフォーマット:** チーム全体で一貫したコードスタイルを維持できます。
2. **設定が少ない:** デフォルトの設定が強力で、最小限のカスタマイズで使用できます。
3. **複数の言語サポート:** JavaScript、TypeScript、JSON、HTML、CSS、Markdownなど、様々な言語をサポート。
4. **エディタとの統合:** VSCodeなどの主要なコードエディタと簡単に統合できます。
5. **自動整形:** 保存時やコミット時にコードを自動的に整形できます。

### 基本的な使用方法

1. **インストール**

   プロジェクトにPrettierをインストールします。

   ```bash
   npm install --save-dev prettier
   ```

2. **設定ファイルの作成**

   プロジェクトのルートディレクトリに`.prettierrc`という名前の設定ファイルを作成します。以下は例です。

   ```json
   {
     "printWidth": 80,
     "tabWidth": 2,
     "useTabs": false,
     "semi": true,
     "singleQuote": true,
     "trailingComma": "es5",
     "bracketSpacing": true,
     "arrowParens": "avoid"
   }
   ```

3. **実行**

   コマンドラインからPrettierを実行して、コードを整形します。

   ```bash
   npx prettier --write .
   ```

4. **VSCodeとの統合**

   VSCodeでPrettierを使用するには、Prettier拡張機能をインストールします。拡張機能をインストールしたら、VSCodeの設定に以下を追加します。

   ```json
   {
     "editor.formatOnSave": true,
     "prettier.requireConfig": true
   }
   ```

### ESLintとの統合

PrettierとESLintを一緒に使用することで、コードのフォーマットと静的解析を同時に行うことができます。

1. **プラグインのインストール**

   ESLintとPrettierを統合するためのプラグインをインストールします。

   ```bash
   npm install --save-dev eslint-config-prettier eslint-plugin-prettier
   ```

2. **ESLint設定ファイルの更新**

   `.eslintrc.json` に以下を追加して、Prettierとの統合を設定します。

   ```json
   {
     "extends": [
       "eslint:recommended",
       "plugin:prettier/recommended"
     ],
     "plugins": ["prettier"],
     "rules": {
       "prettier/prettier": "error"
     }
   }
   ```

これにより、ESLintがPrettierのフォーマットルールに従うようになります。

### よく使われる設定オプション

- **printWidth:** 1行あたりの最大文字数を指定（デフォルトは80）。
- **tabWidth:** インデントのスペース数を指定（デフォルトは2）。
- **useTabs:** タブを使用するかどうか（デフォルトはfalse）。
- **semi:** 文の末尾にセミコロンを付けるかどうか（デフォルトはtrue）。
- **singleQuote:** シングルクオートを使用するかどうか（デフォルトはfalse）。
- **trailingComma:** 末尾のカンマをどのように扱うか（none, es5, all）。
- **bracketSpacing:** オブジェクトリテラル内の括弧の間にスペースを入れるかどうか（デフォルトはtrue）。
- **arrowParens:** アロー関数の引数に括弧を付けるかどうか（avoid, always）。


### precommit

Huskyとlint-stagedを使うと、Gitのpre-commitフックでコードのリントやフォーマットを自動化できます。こ
れにより、コミットされるコードが常に一定の品質基準を満たしていることを保証できます。

#### Huskyとlint-stagedの基本的な使用方法

1. **インストール**

   Huskyとlint-stagedをプロジェクトにインストールします。

   ```bash
   npm install husky lint-staged --save-dev
   ```

2. **Huskyのセットアップ**

   Huskyをセットアップして、Gitフックを有効にします。

   ```bash
   npx husky install
   ```

   これにより、プロジェクトに`.husky`ディレクトリが作成されます。

3. **pre-commitフックの設定**

   pre-commitフックを作成し、lint-stagedを実行するように設定します。

   ```bash
   npx husky add .husky/pre-commit "npx lint-staged"
   ```

4. **lint-stagedの設定**

   `package.json`ファイルにlint-stagedの設定を追加します。以下は例です。

   ```json
   {
     "lint-staged": {
       "**/*.{js,jsx,ts,tsx}": [
         "eslint --fix",
         "prettier --write"
       ],
       "**/*.{json,css,md}": [
         "prettier --write"
       ]
     }
   }
   ```

   この設定では、JavaScript、TypeScript、および関連ファイルに対してESLintとPrettierを実行し、JSON、CSS、Markdownファイルに対してPrettierを実行します。

### 具体的な設定例

以下は、Huskyとlint-stagedを使用して、コードのリントとフォーマットをpre-commitフックで実行するための具体的な設定例です。

1. **`package.json`の設定**

   ```json
   {
     "scripts": {
       "prepare": "husky install"
     },
     "devDependencies": {
       "husky": "^8.0.0",
       "lint-staged": "^12.0.0",
       "eslint": "^8.0.0",
       "prettier": "^3.0.0",
       "eslint-config-prettier": "^9.0.0",
       "eslint-plugin-prettier": "^5.0.0"
     },
     "lint-staged": {
       "**/*.{js,jsx,ts,tsx}": [
         "eslint --fix",
         "prettier --write"
       ],
       "**/*.{json,css,md}": [
         "prettier --write"
       ]
     }
   }
   ```

2. **Huskyのインストールスクリプトを追加**

   `package.json`のscriptsセクションに、Huskyのインストールスクリプトを追加します。

   ```json
   {
     "scripts": {
       "prepare": "husky install"
     }
   }
   ```

3. **Huskyのpre-commitフックを作成**

   Huskyのpre-commitフックを作成して、lint-stagedを実行するように設定します。

   ```bash
   npx husky add .husky/pre-commit "npx lint-staged"
   ```

4. **ESLintとPrettierの設定**

   プロジェクトにESLintとPrettierの設定ファイルを作成します。

   - **`.eslintrc.json`**

     ```json
     {
       "extends": ["eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/recommended", "prettier"],
       "plugins": ["react", "@typescript-eslint", "prettier"],
       "rules": {
         "prettier/prettier": "error"
       },
       "env": {
         "browser": true,
         "node": true,
         "es6": true
       },
       "parserOptions": {
         "ecmaVersion": 2020,
         "sourceType": "module",
         "ecmaFeatures": {
           "jsx": true
         }
       }
     }
     ```

   - **`.prettierrc`**

     ```json
     {
       "printWidth": 80,
       "tabWidth": 2,
       "useTabs": false,
       "semi": true,
       "singleQuote": true,
       "trailingComma": "es5",
       "bracketSpacing": true,
       "arrowParens": "avoid"
     }
     ```


### Reactのデバッグツール

- [React Developer Tools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=ja)


### Story Book

[Story Book]https://storybook.js.org/

Storybookは、UIコンポーネントを独立して開発およびテストするためのツールです。特にReactやVue、Angularなどのフレームワークを使用するプロジェクトでよく利用されます。
導入することによって、コンポーネントの独立した開発、テスト、ドキュメント化が容易になり、チーム内でのコミュニケーションも改善されます。

#### 特徴

1. **コンポーネントの分離**
   - Storybookは、アプリケーションの文脈から独立してUIコンポーネントを開発するための分離環境を提供します。
   - コンポーネントごとに異なる状態を簡単に確認できます。

2. **ドキュメント化**
   - コンポーネントの使用方法や各プロパティの説明をドキュメント化するのに役立ちます。
   - 自動生成されるUIを使って、他の開発者やデザイナーと共有することができます。

3. **テスト**
   - コンポーネントのビジュアルリグレッションテストやスナップショットテストを簡単に統合できます。

4. **アドオンの豊富さ**
   - アドオンを使ってStorybookの機能を拡張することができます。例えば、アクセシビリティチェックやレスポンシブデザインのテストなどがあります。

### インストールとセットアップ

以下は、ReactプロジェクトでのStorybookのインストールとセットアップ方法です。

#### 1. インストール
プロジェクトのルートディレクトリで以下のコマンドを実行します。
```sh
npx storybook init
```

このコマンドは、Storybookの必要なパッケージをインストールし、初期設定を行います。

#### 2. Storybookの起動
Storybookを起動するために、以下のコマンドを実行します。
```sh
npm run storybook
```

これにより、Storybookが起動し、デフォルトのブラウザで開きます。デフォルトのポートは `http://localhost:6006` です。

#### 3. ストーリーの作成
Storybookでは、「ストーリー」を作成してコンポーネントの異なる状態を表現します。以下は、Reactコンポーネントの簡単な例です。

`src/components/Button.js`
```jsx
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, onClick }) => (
  <button onClick={onClick}>
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
```

`src/components/Button.stories.js`
```jsx
import React from 'react';
import Button from './Button';

export default {
  title: 'Example/Button',
  component: Button,
};

export const Primary = () => <Button label="Primary Button" onClick={() => alert('Primary Button clicked!')} />;
export const Secondary = () => <Button label="Secondary Button" onClick={() => alert('Secondary Button clicked!')} />;
```