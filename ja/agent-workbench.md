---
layout: page
title: Agent Workbench — AI coding agentの作業基盤
description: 複数coding agentのtask memory、routing、claim、handoff、reviewをローカルに運用する公開予定OSSのproduct preview。
lang: ja
permalink: /ja/agent-workbench/
---

<section class="sw-product-hero">
  <span class="sw-kicker">Agent Workbench · Planned OSS release</span>
  <h1>AI coding agentを、実際の開発チームのように運用する。</h1>
  <p>Agent Workbenchは、実repo上のtask memory、routing、claim/lease、prompt、handoff、report、reviewをローカルにまとめるoperating layerとして公開準備中です。</p>
  <div class="sw-actions">
    <a class="sw-button" href="/examples/agent-workbench/agent-workbench-dashboard.html">Product previewを見る</a>
    <a class="sw-button secondary" href="/ja/oss/#agent-workbench">Release roadmap</a>
  </div>
</section>

<div class="sw-metric-grid">
  <div class="sw-metric-card"><strong>Task memory</strong><span>TODO、issue、roadmap、review needをagentへ渡せるtaskとして残す設計。</span></div>
  <div class="sw-metric-card"><strong>Coordination</strong><span>routingとclaim/leaseで複数agentの重複作業や衝突を減らす。</span></div>
  <div class="sw-metric-card"><strong>Evidence</strong><span>prompt、report、review、PR briefをtask loopに沿って残す。</span></div>
</div>

## 解決したいこと

複数のcoding agentを使うと、コード生成速度よりも「何をやるか」「誰が担当するか」「何を渡すか」「何をreviewするか」「次のagentが何を覚えるか」が運用コストになります。Agent Workbenchはこのcoordinationをrepo-local artifactとして扱う方向で設計しています。

## Planned product surface

<div class="sw-choice-grid">
  <div class="sw-choice-card"><h3>Task memory</h3><p>acceptance criteria、decision、completion learning、review evidenceをsessionをまたいで残す。</p></div>
  <div class="sw-choice-card"><h3>Safe parallel work</h3><p>routingとclaim leaseでownershipを明示してからagentを動かす。</p></div>
  <div class="sw-choice-card"><h3>Handoff</h3><p>taskからtarget agent向けのpromptやhandoff packetを組み立てる。</p></div>
  <div class="sw-choice-card"><h3>Local Control + Desktop</h3><p>repoをsource of truthにしながら、local UIでprojectやoperational stateを確認する。</p></div>
</div>

## Preview

[![Agent Workbench dashboard preview](/examples/agent-workbench/view-preview.png)](/examples/agent-workbench/agent-workbench-dashboard.html)

- [Dashboard example](/examples/agent-workbench/agent-workbench-dashboard.html)
- [Examples](/examples/agent-workbench/)

## Public release status

Agent Workbenchはpublic OSSとしてリリース予定です。repoはpublic packaging・docs・license確認・release gateを仕上げる間はprivateで、実際に公開可能になった時点でrepo / install linkを追加します。

- [全OSS release roadmap](/ja/oss/)
- [English page](/agent-workbench/)
- [使い分けを見る](/ja/compare/)
