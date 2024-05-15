# Asobeba

## ローカル実行

`http://localhost:3000`でローカル実行

```bash
pnpm start
```

# 各ファイルの追加

下記のコマンドから各ファイルを追加すること。

## nuxi add

```bash
pnpm dlx nuxi add [--cwd] [--force] <TEMPLATE> <NAME>
```

| オプション | デフォルト | 説明                                               |
| ---------- | ---------- | -------------------------------------------------- |
| TEMPLATE   | -          | 生成するファイルのテンプレートを指定します。       |
| NAME       | -          | 作成するファイルの名前を指定します。               |
| --cwd      | -          | ターゲットアプリケーションのディレクトリ           |
| --force    | false      | 上書きファイルが既に存在している場合は強制します。 |

#### 修飾子:

一部のテンプレートは、名前に接尾辞 ( `.get`または`.client`など)を追加する追加の修飾子フラグをサポートしている。

例:`/plugins/sockets.client.ts`を作成する場合

```bash
pnpm dlx nuxi add plugin sockets --client
```

## nuxi add component

#### 修飾子フラグ: `--mode client|server` または `--client` または `--server`

```bash
# `components/TheHeader.vue`を作成
pnpm dlx nuxi add component TheHeader
```

## nuxi add composable

例：

```bash
# `composables/foo.ts`を作成
pnpm dlx nuxi add composable foo
```

## nuxi add layout

例：

```bash
# `layouts/custom.vue`を作成
pnpm dlx nuxi add layout custom
```

## nuxi add plugin

####

修飾子フラグ: `--mode client|server` または `--client` または `--server`

例：

```bash
# `plugins/analytics.ts`を作成
pnpm dlx nuxi add plugin analytics
```

## nuxi add page

例：シンプルなページを作成

```bash
# `pages/about.vue`を作成
pnpm dlx nuxi add page about
```

例：url に id を使用する場合のページ作成

```bash
# `pages/category/[id].vue`を作成
pnpm dlx nuxi add page "category/[id]"
```

下記で id を取得可能

```js
const route = useRoute();
const id = route.params.id;
```

## nuxi add middleware

#### 修飾フラグ:`--global`

```bash
# `middleware/auth.ts`を作成
pnpm dlx nuxi add middleware auth
```

# store

store に関しては pinia を使用しセッションストレージに保持する。

[参考](https://zenn.dev/mihorin1729/articles/f29073e516bc8c)
