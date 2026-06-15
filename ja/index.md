---
layout: home
title: AIエージェントOSSガイド
---

# AIエージェントOSSガイド

Sakai のAIエージェント向けOSSをまとめた日本語ガイドです。

英語READMEはOSS本体の一次情報として残し、この日本語ガイドでは「何に使うか」「日本語でどう依頼するか」「安全に導入するには何を見るか」を補足します。

## プロジェクト

| プロジェクト | 役割 |
|---|---|
| [Agent Workbench](agent-workbench.md) | AI coding agentのタスク、claim、prompt、report、PR briefをローカル管理する |
| [Agent Skill Shelf](agent-skill-shelf.md) | 複数AIエージェント向けのskillをsource bundleとして管理・配布する |
| [Agent Token Optimizer](agent-token-optimizer.md) | 大きなrepoでagentに渡す前のcontext量とリスクを確認する |
| [Fusion Skill](fusion-skill.md) | AI回答を複数視点でレビューし、最終出力を強くする |

## 比較

- [OSSの使い分けを見る](compare.md)
- [English top](../index.md)

## 初期URL方針

最初は独自ドメインを使わず、GitHub PagesのURLで公開します。

```text
https://soworks-jp.github.io/ja/
```

組織名が変わる場合は、公開前にURLを更新します。
