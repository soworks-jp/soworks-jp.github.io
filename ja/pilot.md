---
layout: page
title: SO Works OSS pilotに参加する
lang: ja
permalink: /ja/pilot/
---

<section class="sw-product-hero">
  <span class="sw-kicker">Pilot募集中</span>
  <h1>1つの具体的な実験で、価値があるか確かめる。</h1>
  <p>一般的なβテストではなく、各OSSごとに実施内容・成功指標・privacy boundaryを決めています。完了したexperimentを次の改善判断に使います。</p>
</section>

<div class="sw-choice-grid">
  <div class="sw-choice-card"><h3>Agent Workbench · 7日</h3><p>実repoでcoding-agent taskを3件完了し、first-valueと2件目・3件目の継続価値を見る。</p><p><a href="https://github.com/soworks-jp/agent-workbench/issues/106">design partnerに参加 →</a></p></div>
  <div class="sw-choice-card"><h3>Token Optimizer · 30〜60分</h3><p>baseline scan → 安全な1〜3改善 → rescanで、context/readinessのbefore/afterとfalse positiveを見る。</p><p><a href="https://github.com/soworks-jp/agent-token-optimizer/issues/6">repo auditに参加 →</a></p></div>
  <div class="sw-choice-card"><h3>Agent Persona · 30分</h3><p>同じartifactを通常reviewとpersona reviewで比較し、本当に新しいactionable findingと追加時間を測る。</p><p><a href="https://github.com/soworks-jp/agent-persona/issues/5">review challengeに参加 →</a></p></div>
  <div class="sw-choice-card"><h3>Human Memory · 招待制research</h3><p>syntheticまたは低機密memoryだけでcontinuity、forgetting、authority、provenance、recurrenceを評価する。</p><p><a href="https://github.com/soworks-jp/agent-human-memory/issues/8">research pilotへ応募 →</a></p></div>
</div>

## 公開Issueに載せないもの

source code、raw prompt、secret、顧客情報、private repo識別子、raw log、高機密な個人memoryは公開pilot issueへ載せないでください。各repoの`PILOT.md`とprivacy-safe feedback formに従います。

<div class="sw-callout"><strong>最初に試しやすいのは:</strong> workflowを変えずread-only scanから始められるAgent Token Optimizer。すでに複数coding agentの引き継ぎや重複作業が痛い場合はAgent Workbenchから始める方が早いです。</div>

- [OSSを比較する](/ja/compare/)
- [English pilot page](/pilot/)
