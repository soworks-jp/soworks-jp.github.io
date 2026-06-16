---
layout: page
title: Fusion Skill
lang: ja
---

# Fusion Skill

Fusion Skill は、AI agentの回答を複数視点でレビューし、judgeが統合してから最終出力にするprompt-based skillです。

## 使いどころ

- PRDや仕様を実装前に強くしたい
- Codexへ渡す指示を具体化したい
- 事業アイデア、UI、文章を複数視点で見たい

## 日本語での依頼例

```text
Fusionで考えて。このPRDをPM、エンジニア、ユーザー、リスク視点でレビューして。
Make this Codex-ready. 実装手順、検証、やらないことを分けて。
```

## Preview

- [Fusion Skill view サンプル](https://harks-inc.github.io/fusion-skill/examples/fusion-skill-view.html)
- [日本語のサンプル説明](https://harks-inc.github.io/fusion-skill/examples/ja.html)

![Fusion Skill view preview](https://harks-inc.github.io/fusion-skill/examples/view-preview.png)

サンプルは架空のpromptと汎用的なreviewer名だけを使います。自分のレビュー入力を共有する前に、顧客情報、private project名、ホスト名、private repo名を取り除いてください。

## 注意

Fusion Skill は、Fusion-style reasoning のような複数視点統合パターンから着想を得ています。ただし、OpenRouter公式プロダクトではなく、OpenRouter Fusion Routerを実装するものでもありません。

## リンク

- English summary: [../fusion-skill.md](../fusion-skill.md)
- 英語ページ: `https://soworks-jp.github.io/fusion-skill.html`
- 日本語ガイド: `https://soworks-jp.github.io/ja/fusion-skill.html`
