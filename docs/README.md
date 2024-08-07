# 職務経歴書

## 基本情報

|key|value|
|---|---|
|氏名|岩見彰太|
|最終学歴|東京都立大学大学院航空宇宙システム工学域|
|Email|shota.iwami@outlook.jp|

[<img src="https://img.shields.io/badge/-biwashi-3EA8FF.svg?logo=zenn&style=popout">](https://zenn.dev/biwashi) [<img src="https://img.shields.io/badge/-B__Sardine-000000.svg?logo=x&style=popout">](https://twitter.com/B_Sardine) [<img src="https://img.shields.io/badge/-Shota%20Iwami-0077B5.svg?logo=linkedin&style=popout">](https://www.linkedin.com/in/shota-iwami-biwashi/) [<img src="https://img.shields.io/badge/-BIwashi-181717.svg?logo=Github&style=popout">](https://github.com/BIwashi)

### 資格
- [Google Cloud Professional Cloud Architect（2023/04）](https://www.credential.net/a7e784e3-fc3e-4b21-bb96-6890d867b6a4)
- [Datadog Certified: Datadog Fundamentals（2023/07）](https://www.credly.com/badges/9e3a9ae6-46e5-4654-8911-c39b4c157cea/linked_in?t=ry3g0t)


# 技術スタック

**言語**

<img src="https://img.shields.io/badge/-Go-76E1FE.svg?logo=go&style=popout"> <img src="https://img.shields.io/badge/-Python-3776AB.svg?logo=python&style=popout"> <img src="https://img.shields.io/badge/-Ruby-CC342D.svg?logo=ruby&style=popout"> <img src="https://img.shields.io/badge/-C++-00599C.svg?logo=cplusplus&style=popout">

**インフラ**

<img src="https://img.shields.io/badge/-AWS-232F3E.svg?logo=amazon-aws&style=popout"> <img src="https://img.shields.io/badge/-AWS%20Fargate-FF9900.svg?logo=aws-fargate&style=popout"> <img src="https://img.shields.io/badge/-AWS%20Aurora-3B4AC7.svg?&style=popout">

<img src="https://img.shields.io/badge/-Google%20Cloud-4285F4.svg?logo=google-cloud&style=popout"> <img src="https://img.shields.io/badge/-Cloud%20Run-4285F4.svg?logo=google-cloud&style=popout"> <img src="https://img.shields.io/badge/-Cloud%20Spanner-4285F4.svg?logo=google-cloud&style=popout">


**フレームワーク・その他**

<img src="https://img.shields.io/badge/-gRPC-5CAFB4.svg?logo=&style=popout"> <img src="https://img.shields.io/badge/-grpc--gateway-5CAFB4.svg?logo=&style=popout"> <img src="https://img.shields.io/badge/-Rails-CC0000.svg?logo=rubyonrails&style=popout"> <img src="https://img.shields.io/badge/-Flask-000000.svg?logo=flask&style=popout">
<img src="https://img.shields.io/badge/-Datadog-632CA6.svg?logo=Datadog&style=popout">



# 職務経歴

## 株式会社サイバーエージェント（2022/04-現在）

### 某大手ドラックストア新規アプリ開発（2023/04-）/ AI事業本部

新モバイルアプリ・管理画面の構築

バックエンドのアプリケーション構築から Datadog によるモニタリング・オブザーバビリティ基盤の構築、大規模な負荷試験の実施

- 言語： Go
- インフラ： AWS(ECS on Fargate/Aurora)
- モニタリング： Datadog
- CICD: Github Actions/PipeCD
- IaC:Terraform
- 通信： gRPC（gRPC-Web / connect）

#### 登壇
- [Go Conference mini 2023 Winter IN KYOTO](https://kyotogo.connpass.com/event/285351/)
  - [GoのProtocプラグインを活用した効率的な負荷試験戦略 - Speaker Deck](https://speakerdeck.com/biwashi/efficient-load-testing-strategies-utilizing-the-go-protoc-plugin)
- [DevOpsDays Tokyo 2024](https://www.devopsdaystokyo.org/)
  - [DevOpsDays Tokyo 2024 - 自動生成を活用した、運用保守コストを抑える Error/Alert/Runbook の一元集約管理 / ConfEngine - Conference Platform](https://confengine.com/conferences/devopsdays-tokyo-2024/proposal/19703/erroralertrunbook-centralized-management-of-erroralertrunbook-to-minimize-operational-costs-using-automated-code-generation)
  - [自動生成を活用した、運用保守コストを抑える Error/Alert/Runbook の一元集約管理 - Speaker Deck](https://speakerdeck.com/biwashi/runbook-to-minimize-operational-costs-using-automated-code-generation)
- [Go Conference 2024](https://gocon.jp/2024/)
  - [Sessions / Go Conference 2024 / Unified Diff 形式の差分から Go AST を構築して feature flag を自動計装する](https://gocon.jp/2024/sessions/11/)
  - [Unified Diff 形式の差分から Go AST を構築して feature flag を自動計装する - Speaker Deck](https://speakerdeck.com/biwashi/go-conference-2024-automating-feature-flag-instrumentation-by-constructing-go-ast-from-unified-diff-format)
- [CloudNative Days Summer 2024](https://event.cloudnativedays.jp/cnds2024)
  - [OpenFeature と自動生成を活用した、フィーチャーフラグの宣言的集約管理 | CloudNative Days Summer 2024](https://event.cloudnativedays.jp/cnds2024/talks/2274)
  - [OpenFeatureと自動生成を活用したフィーチャーフラグの宣言的集約管理 - Speaker Deck](https://speakerdeck.com/biwashi/cloudnative-days-summer-2024-declarative-aggregated-management-of-feature-flags-using-openfeature-and-auto-generation)


### 某外資アパレル企業の新CRM構築・モバイルアプリ・会員サイト・データ移行プロジェクト（2022/04-2023/03）/ AI事業本部

複数のブランドとプラットフォームの統合、新 CRM  システムの構築とデータ移行を実施

0 -> 1 の立ち上げ時期から参画し、要件定義/設計/実装/負荷テスト/脆弱性診断/リリース/改修まで一貫して経験

主に会員関連機能と外部 API 統合担当

- 言語： Go
- インフラ： GCP(Cloud Run/Cloud Spanner/Firebase Authentication)
- モニタリング： Datadog
- DWH: Snowflake
- CICD: Github Actions/PipeCD
- IaC: Terraform
- 通信： gRPC, REST（grpc-gateway）
- CEP: Braze


#### 参考

- [外部API連携とシナリオテスト基盤構築で新卒1年目がDXに向き合う / CyberAgent Developers Blog](https://developers.cyberagent.co.jp/blog/archives/42003/)


## グリー株式会社（アウモ株式会社）（2021/01-2021/09）

おでかけメディア「aumo」の開発

主にバックエンドの基本的な実装からフロントエンドのパフォーマンスチューニングを実施

- 言語： Ruby（Ruby on Rails）
- インフラ： AWS

#### 記事
- [【コアウェブバイタル】Page Speed Insights API を利用したパフォーマンス計測基盤の自作 / aumo Tech Blog – アウモテックブログ](https://techblog.aumo.co.jp/articles/271)
- [【コアウェブバイタル】Google Core Update による CLS の変化と対策 / aumo Tech Blog – アウモテックブログ](https://techblog.aumo.co.jp/articles/532)
- [【コアウェブバイタル】CriticalCSS の導入による FCP の改善 / aumo Tech Blog – アウモテックブログ](https://techblog.aumo.co.jp/articles/633)
- [8ヶ月間のアウモエンジニア長期インターンを卒業します / aumo Tech Blog – アウモテックブログ](https://techblog.aumo.co.jp/articles/842)


## 株式会社アカツキ（2021/01）

2 週間のインターン参加

タイトル「八月のシンデレラナイン」のバックエンド開発を担当

- 言語： Ruby（Ruby on Rails）
- インフラ： AWS

#### 参考
- [アカツキで「ハチナイ」のサーバーサイドインターンに参加してきた。 - Akatsuki Hackers Lab / 株式会社アカツキ（Akatsuki Inc.)](https://hackerslab.aktsk.jp/2021/05/06/174224)

## 株式会社スペースエンターテインメントラボラトリー（2019/01-2022/03）

飛行艇型ドローンの開発

成層圏高高度気球のよるプロモーション撮影

その他、ドローンを用いた事業複数

- Software
  - 言語： C++/Python
- Hardware
  - CAD: SOLIDWORKS

#### 参考

- [スペースエンターテインメントラボラトリー](https://www.selab.jp/)
- [株式会社スペースエンターテインメントラボラトリー：福島イノベーション・コースト構想](https://www.fipo.or.jp/type_activity/%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E3%82%B9%E3%83%9A%E3%83%BC%E3%82%B9%E3%82%A8%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%86%E3%82%A4%E3%83%B3%E3%83%A1%E3%83%B3%E3%83%88%E3%83%A9%E3%83%9C%E3%83%A9%E3%83%88)

# スキル
## 言語

- Go
  - 3 年程度
  - Web サービスのバックエンド
  - CLI ツールの作成
  - 自動生成ツールの作成
- Python
  - 3 年程度
  - ハッカソンでの Web サービスのバックエンド
  - ドローン制御ソフトの開発
- Ruby
  - 1 年程度
  - Web サービスのバックエンド
  - モバイルゲームのバックエンド
- MATLAB
  - 2 年程度
  - 研究で使用
- C++
  - 1 年程度
  - 研究、長期インターンで使用

## インフラ
- AWS
  - 3 年程度
  - ECS on Fargate, Aurora 等を使用した基本的な構成のシステム構築経験
- GCP
  - 1 年程度
  - Clour Run, Cloud Spanner を使用したシステムの構築・運用経験

## ツール

- Datadog
  - 2 年程度
  - ECS on Fargate への Sidecar での Agent 構築経験
  - APM, Continuous Profiler, Logs, Monitors の構築
  - Mobile App Testing を用いたモバイル端末の自動テスト
- Terraform
  - 3 年程度
  - AWS, GCP での使用
- Raspberry pi
  - 3 年
  - 大学・大学院での研究に使用
  - ドローンの改造に使用

# 登壇

### 2024 年
- [DevOpsDays Tokyo 2024](https://devopsdays.org/events/2024-tokyo/welcome/)
  - [DevOpsDays Tokyo 2024 - Program Schedule / ConfEngine - Conference Platform](https://confengine.com/conferences/devopsdays-tokyo-2024/schedule/rich)
  - [自動生成を活用した、運用保守コストを抑える Error/Alert/Runbook の一元集約管理 / Centralized management of Error/Alert/Runbook to minimize operational costs using automated code generation - Speaker Deck](https://speakerdeck.com/biwashi/runbook-to-minimize-operational-costs-using-automated-code-generation)
- [Go Conference 2024](https://gocon.jp/2024/)
  - [Sessions / Go Conference 2024 / Unified Diff 形式の差分から Go AST を構築して feature flag を自動計装する](https://gocon.jp/2024/sessions/11/)
  - [Unified Diff 形式の差分から Go AST を構築して feature flag を自動計装する - Speaker Deck](https://speakerdeck.com/biwashi/go-conference-2024-automating-feature-flag-instrumentation-by-constructing-go-ast-from-unified-diff-format)
- [CloudNative Days Summer 2024](https://event.cloudnativedays.jp/cnds2024)
  - [OpenFeature と自動生成を活用した、フィーチャーフラグの宣言的集約管理 | CloudNative Days Summer 2024](https://event.cloudnativedays.jp/cnds2024/talks/2274)
  - [OpenFeatureと自動生成を活用したフィーチャーフラグの宣言的集約管理 - Speaker Deck](https://speakerdeck.com/biwashi/cloudnative-days-summer-2024-declarative-aggregated-management-of-feature-flags-using-openfeature-and-auto-generation)

### 2023 年

- [Go Conference mini 2023 Winter IN KYOTO](https://kyotogo.connpass.com/event/285351/)
  - [GoのProtocプラグインを活用した効率的な負荷試験戦略 / Efficient Load Testing Strategies Utilizing the Go Protoc Plugin - Speaker Deck](https://speakerdeck.com/biwashi/efficient-load-testing-strategies-utilizing-the-go-protoc-plugin)

# ブログ

2021 年

- [アカツキで「ハチナイ」のサーバーサイドインターンに参加してきた。 - Akatsuki Hackers Lab / 株式会社アカツキ（Akatsuki Inc.)](https://hackerslab.aktsk.jp/2021/05/06/174224)
- [【コアウェブバイタル】Page Speed Insights API を利用したパフォーマンス計測基盤の自作 / aumo Tech Blog – アウモテックブログ](https://techblog.aumo.co.jp/articles/271)
- [【コアウェブバイタル】Google Core Update による CLS の変化と対策 / aumo Tech Blog – アウモテックブログ](https://techblog.aumo.co.jp/articles/532)
- [【コアウェブバイタル】CriticalCSS の導入による FCP の改善 / aumo Tech Blog – アウモテックブログ](https://techblog.aumo.co.jp/articles/633)
- [8ヶ月間のアウモエンジニア長期インターンを卒業します / aumo Tech Blog – アウモテックブログ](https://techblog.aumo.co.jp/articles/842)

2022 年

- [【Go】ジェネリクスと双方向マップを使った enum の実装](https://zenn.dev/biwashi/articles/6f627732446885)

2023 年

- [外部API連携とシナリオテスト基盤構築で新卒1年目がDXに向き合う / CyberAgent Developers Blog](https://developers.cyberagent.co.jp/blog/archives/42003/)
- [Datadog 認定資格（Datadog Fundamentals）を取ってみた](https://zenn.dev/biwashi/articles/b51782bc9da259)

