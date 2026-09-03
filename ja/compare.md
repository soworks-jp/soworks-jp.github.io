---
layout: page
title: SO Works Agent Seriesの使い分け
lang: ja
permalink: /ja/compare/
---

<section class="sw-product-hero">
  <span class="sw-kicker">ボトルネックから選ぶ</span>
  <h1>全部入れず、今困っている1つから。</h1>
  <p>SO WorksのOSSは小さく分けています。まずbefore/afterを測れる1つの実験から始め、同じ問題が繰り返すと分かったときだけ組み合わせます。</p>
  <div class="sw-actions"><a class="sw-button" href="/ja/pilot/">pilotを見る</a><a class="sw-button secondary" href="/ja/oss/">13 OSSのrelease roadmap</a></div>
</section>

| 主な悩み | 最初に使うOSS | 最短の検証 / 状態 |
|---|---|---|
| 複数coding agentが同じ作業をしたり、task contextを毎回作り直す | **[Agent Workbench](/ja/agent-workbench/)** | 7日で実タスク3件 |
| agent/editorがrepoを読みすぎる、agent instructionが肥大化する | **[Agent Token Optimizer](/ja/agent-token-optimizer/)** | baseline scan → 1〜3改善 → rescan |
| AI reviewにuser/adopter/operator視点が足りない | **[Agent Persona](/ja/agent-persona/)** | 通常review vs persona review |
| agent memoryを明示的・制御可能な形で研究したい | **[Agent Human Memory](/ja/agent-human-memory/)** | synthetic/低機密exampleで複数session評価 |
| 複数agent向けskillを再利用可能に管理したい | **[Agent Skill Shelf](/ja/agent-skill-shelf/)** | Preview |
| 1つの回答を複数視点でreview・統合したい | **[Fusion Skill](/ja/fusion-skill/)** | Preview |
| ideaからbrief / PRD / taskを作りたい | **AI Product Manager** | Planned public OSS release |
| taskをagent / model / skill / human gateへ振り分けたい | **Agent Task Router** | Preview |
| taskをtarget別handoff packetへ変換したい | **Agent Handoff Kit** | Planned public OSS release |
| agent runをreport / risk / learning / next actionへ変えたい | **Agent Reporting** | Planned public OSS release |
| developer machineのperformanceを診断したい | **Agent Machine Doctor** | Preview |
| repo / agent securityのrelease gateがほしい | **Agent Security Doctor** | Preview |
| Slack / Discordへapprovalやresultを橋渡ししたい | **Agent Channel Bridge** | Preview |

[13 OSSすべての説明とrelease stageを見る →](/ja/oss/)

## 基本の順番

1. **入口として試しやすい:** Agent Token Optimizer — read-only auditから始められる。
2. **複数agent運用が既に痛い:** Agent Workbench — task memory、claim、handoff、reviewをまとめる。
3. **review品質が課題:** Agent Persona / Fusion Skill — 追加時間に対して新しいactionable findingが増えるかを見る。
4. **必要になったら下位レイヤー:** planning、routing、handoff、reporting、doctor、channel packageを組み合わせる。
5. **memory研究:** Agent Human Memory — safety boundaryを先に検証する。

<div class="sw-callout"><strong>ルール:</strong> 13 OSSはすべてpublic release予定ですが、「便利そう」だけで全部を導入しない。繰り返し発生している問題と、改善を判定するbefore/after指標を先に決めます。</div>

- [全OSS release roadmap](/ja/oss/)
- [pilot一覧](/ja/pilot/)
- [public pilot / release waitlist](https://github.com/soworks-jp/soworks-jp.github.io/issues/3)
- [English comparison](/compare/)