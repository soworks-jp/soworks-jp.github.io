---
layout: page
title: Agent Token Optimizer
lang: ja
permalink: /ja/agent-token-optimizer/
---

# Agent Token Optimizer

Agent Token Optimizer は、大きなrepoでAI agentへ作業を渡す前に、context量、巨大ファイル、生成物、モデル選択のヒントを確認するためのツールです。

## 使いどころ

- repo全体を読ませるとtokenが重すぎる
- 生成物や依存ファイルを除外したい
- 軽いモデルで足りる作業と重いモデルが必要な作業を分けたい

## 日本語での依頼例

```text
このrepoでagentに渡す前に、読むべきファイルと除外すべきファイルを整理して。
tokenリスクが高い場所と、モデル選択の目安を出して。
```

## Preview

- [HTML report サンプル](https://soworks.app/examples/agent-token-optimizer/agent-token-report.html)
- [dashboard サンプル](https://soworks.app/examples/agent-token-optimizer/agent-token-dashboard.html)
- [compare サンプル](https://soworks.app/examples/agent-token-optimizer/agent-token-compare.html)
- [サンプル一覧](https://soworks.app/examples/agent-token-optimizer/)
- [日本語のサンプル説明](https://soworks.app/examples/agent-token-optimizer/ja)

![Agent Token Optimizer report preview](https://soworks.app/examples/agent-token-optimizer/report-preview.png)

サンプルは丸めた架空の値と汎用的なファイル名だけを使います。自分のレポートを共有する前に、非公開のファイルパス、secretの詳細、個人名、ホスト名、private repo名を取り除いてください。

## リンク

- English summary: [../agent-token-optimizer/](/agent-token-optimizer/)
- 英語ページ: `https://soworks.app/agent-token-optimizer/`
- 日本語ガイド: `https://soworks.app/ja/agent-token-optimizer/`
