## MUI（デザインシステム）を使ってアプリを実装してみる

スクラッチでReactコードを学んできたので、次のステップとしてパッケージを利用した開発を行なってみましょう。
Material-UIは、React用の人気のあるUIフレームワークで、GoogleのMaterial Designガイドラインに基づいたコンポーネントを提供しています。

セットアップ方法は以下のURLを参照
- https://mui.com/material-ui/getting-started/installation/


Material UI ver 5をReactプロジェクトにセットアップする方法を以下に示します。
React & TypeScriptプロジェクトに対してMaterial-UI（現在のMUI）バージョン5のセットアップ方法について説明します。

### 1. プロジェクトの作成
新しいReact & TypeScriptプロジェクトを作成します。

```bash
$ npx create-react-app my-app --template typescript
$ cd my-app
```

### 2. MUIのインストール
次に、必要なMUIパッケージをインストールします。

```bash
$ npm install @mui/material @emotion/react @emotion/styled
```

### 3. 必要な型定義のインストール
TypeScript用の型定義を追加します。

```bash
$ npm install @types/react @types/react-dom
```

### 4. プロジェクトのセットアップ
`src`ディレクトリにあるファイルを編集して、MUIコンポーネントを使用する設定を行います。

#### `src/index.tsx`
`index.tsx`でテーマの設定を追加します。

Material-UI（MUI）のテーマを使用することで、アプリケーション全体の外観を統一することができます。
MUIはテーマのカスタマイズを容易にする強力なAPIを提供しており、以下の主要な部分をカスタマイズできます：

- パレット（色）
- タイポグラフィ
- スペーシング
- ブレークポイント
- コンポーネントのスタイル

公式サイト参照
- https://mui.com/material-ui/customization/theming/

createThemeを使用してテーマを作成し、それをThemeProviderでアプリケーション全体に適用します。
以下のコードは基本的なセットアップです。

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
```


#### `src/App.tsx`
`App.tsx`にMUIコンポーネントを追加します。

```tsx
import React from 'react';
import { Button, Typography, Container, TextField, Grid } from '@mui/material';

const App: React.FC = () => {
  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Hello, Material-UI!
      </Typography>
      <Button variant="contained" color="primary">
        Click Me
      </Button>
      <Grid container spacing={2} style={{ marginTop: 20 }}>
        <Grid item xs={12} sm={6}>
          <TextField label="First Name" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Last Name" variant="outlined" fullWidth />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
```

コンポーネントについては公式ドキュメントを読みながら渡せるPropsを確認してください。

### 5. プロジェクトの起動
設定が完了したら、プロジェクトを起動してMUIコンポーネントが正しく表示されるか確認します。

```bash
$ npm start
```

ブラウザで `http://localhost:3000` にアクセスし、MUIコンポーネントが正しく表示されることを確認。


## テンプレートを利用してUIを実装

以下引用
- https://mui.com/material-ui/getting-started/templates/
- https://github.com/mui/material-ui/blob/v5.16.4/docs/data/material/getting-started/templates/sign-in-side/SignInSide.tsx

演習として以前の講義で利用した要領でログインフォームをカスタマイズして実際動かせるものにしてみましょう。