---
layout: page
title: SO Works Agent Seriesの使い分け
lang: ja
permalink: /ja/compare/
---

<section class="sw-product-hero">
  <span class="sw-kicker">ボトルネックから選ぶ</span>
  <h1>13 OSSの役割を、今の課題から理解する。</h1>
  <p>Agent Seriesはcomposableなprojectへ分けています。このページでは、どの公開予定OSSがどの繰り返し課題を解く設計かを整理します。public repo/package linkは各releaseの準備完了後に追加します。</p>
  <div class="sw-actions"><a class="sw-button" href="/ja/oss/">13 OSSのrelease roadmap</a></div>
</section>

| 主な悩み | 公開予定OSS | Stackでの役割 |
|---|---|---|
| 複数coding agentが同じ作業をしたりtask contextを失う | **[Agent Workbench](/ja/agent-workbench/)** | task、ownership、handoff、review、memoryを運用 |
| agent/editorがrepoを読みすぎる | **[Agent Token Optimizer](/ja/agent-token-optimizer/)** | 実行前のrepo context監査・最適化 |
| AI reviewにuser/adopter/operator視点が足りない | **[Agent Persona](/ja/agent-persona/)** | 再利用可能なhuman-perspective review |
| agent memoryを明示的・制御可能にしたい | **[Agent Human Memory](/ja/agent-human-memory/)** | memory、authority、provenance、forgetting |
| 複数agent向けskillを再利用可能に管理したい | **[Agent Skill Shelf](/ja/agent-skill-shelf/)** | canonical skill sourceとplatform別出力 |
| 1つの回答を複数視点でreview・統合したい | **[Fusion Skill](/ja/fusion-skill/)** | reviewer laneとjudge synthesis |
| ideaからbrief / PRD / taskを作りたい | **AI Product Manager** | product planningと実装artifact生成 |
| taskをagent / model / skill / human gateへ振り分けたい | **Agent Task Router** | deterministic routing |
| taskをtarget別handoff packetへ変換したい | **Agent Handoff Kit** | agent-ready handoff生成 |
| agent runをreport / risk / learning / next actionへ変えたい | **Agent Reporting** | run・failure・learningの説明 |
| developer machineのperformanceを診断したい | **Agent Machine Doctor** | machine health / developer-tool診断 |
| repo / agent securityのrelease gateがほしい | **Agent Security Doctor** | security diagnostics / release gate |
| Slack / Discordへapprovalやresultを橋渡ししたい | **Agent Channel Bridge** | human-in-the-loop channel bridge |

[13 OSSすべての説明とrelease statusを見る →](/ja/oss/)

## Anchor projectの関係

1. **Coordinate — Agent Workbench:** task、routing、claim、handoff、review、completion memory。
2. **Optimize — Agent Token Optimizer:** context waste、instruction bloat、indexing risk、token budget。
3. **Review — Agent Persona:** adopter、user、security、operator、buyerなどの視点。
4. **Remember — Agent Human Memory:** explicit memory、provenance、authority、review、retention、forgetting。

## Public release方針

13 projectはすべてpublic OSSとしてリリース予定です。各repo/packageが本当にpublicになるまでは、product directionとsynthetic previewだけを公開し、private URL、未公開packageのinstall手順、public募集フローは表示しません。

<div class="sw-callout"><strong>ルール:</strong> 全体roadmapは先に公開しますが、availabilityは先取りしません。public packaging、docs、license、安全性のrelease gateを通ったprojectから順番にlinkを追加します。</div>

- [全OSS release roadmap](/ja/oss/)
- [English comparison](/compare/)
