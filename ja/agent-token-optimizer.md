---
layout: page
title: Agent Token Optimizer
lang: ja
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

- [HTML report サンプル](https://harks-inc.github.io/agent-token-optimizer/examples/agent-token-report.html)
- [dashboard サンプル](https://harks-inc.github.io/agent-token-optimizer/examples/agent-token-dashboard.html)
- [compare サンプル](https://harks-inc.github.io/agent-token-optimizer/examples/agent-token-compare.html)
- [日本語のサンプル説明](https://harks-inc.github.io/agent-token-optimizer/examples/ja.html)

![Agent Token Optimizer report preview](https://harks-inc.github.io/agent-token-optimizer/examples/report-preview.png)

サンプルは丸めたfixture値と汎用pathだけを使います。実際のローカルreportを公開する場合は、内部path、secret riskの具体値、個人名、ホスト名、private repo識別子が入っていないことを確認してから公開します。

## リンク

- English summary: [../agent-token-optimizer.md](../agent-token-optimizer.md)
- Product folder: `01_biz/projects/oss/products/agent-token-optimizer/`
- Planned English page: `https://soworks-jp.github.io/agent-token-optimizer.html`
- Planned Japanese page: `https://soworks-jp.github.io/ja/agent-token-optimizer.html`
- GitHub Pages examples: `docs/examples/`
