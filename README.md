# README

このREADMEは通常、アプリケーションを稼働させるために必要な手順を文書化します。

* Ruby version
ruby "3.1.2"

* システムの依存関係

* 構成
rails "7.0.4"
docker-compose

## 開発環境構築
* dockerによる環境構築
docker-compose build

* データベースの作成
docker-compose run web rails db:create

* データベースの初期化

* 起動
```
docker-compose up
```

* コンソールに接続

  1. アプリサーバ
    ```
    docker-compose run web bash
    ```

  2. DBサーバー
    ```
    docker-compose run db bash
    ```

* テストスイートの実行方法

* サービス（jobキュー、キャッシュサーバー、検索エンジンなど）

* デプロイ方法

