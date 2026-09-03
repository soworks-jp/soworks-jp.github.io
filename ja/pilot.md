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
  <div class="sw-actions">
    <a class="sw-button" href="https://github.com/soworks-jp/soworks-jp.github.io/issues/3">Public pilot / release waitlistを開く</a>
    <a class="sw-button secondary" href="/ja/oss/">13 OSSのrelease roadmapを見る</a>
  </div>
</section>

<div class="sw-choice-grid">
  <div class="sw-choice-card"><h3>Agent Workbench · 7日</h3><p>実repoでcoding-agent taskを3件完了し、first-valueと2件目・3件目の継続価値を見る。</p><p><a href="https://github.com/soworks-jp/soworks-jp.github.io/issues/3">public Issueからdesign partnerに参加 →</a></p></div>
  <div class="sw-choice-card"><h3>Token Optimizer · 30〜60分</h3><p>baseline scan → 安全な1〜3改善 → rescanで、context/readinessのbefore/afterとfalse positiveを見る。</p><p><a href="https://github.com/soworks-jp/soworks-jp.github.io/issues/3">public Issueからrepo auditに参加 →</a></p></div>
  <div class="sw-choice-card"><h3>Agent Persona · 30分</h3><p>同じartifactを通常reviewとpersona reviewで比較し、本当に新しいactionable findingと追加時間を測る。</p><p><a href="https://github.com/soworks-jp/soworks-jp.github.io/issues/3">review challengeに参加 →</a></p></div>
  <div class="sw-choice-card"><h3>Human Memory · 招待制research</h3><p>syntheticまたは低機密memoryだけでcontinuity、forgetting、authority、provenance、recurrenceを評価する。</p><p><a href="https://github.com/soworks-jp/soworks-jp.github.io/issues/3">research pilotへ応募 →</a></p></div>
</div>

## Public signup / private follow-up

各product repoはpublic OSS release gateを整備中のため、現時点ではprivateです。誰でもopt-inできるよう応募窓口はこのpublic Pages repoへ集約しました。必要な場合、初回opt-in後の機密な調整だけprivate channelへ移します。

## 公開Issueに載せないもの

source code、raw prompt、secret、顧客情報、private repo名・path、raw log、高機密な個人memoryは公開Issueへ載せないでください。最初は「どのprojectを試したいか」「どんなworkflowか」だけで十分です。pilot evidenceはsanitized / aggregate-onlyを基本にします。

<div class="sw-callout"><strong>最初に試しやすいのは:</strong> workflowを変えずread-only scanから始められるAgent Token Optimizer。すでに複数coding agentの引き継ぎや重複作業が痛い場合はAgent Workbenchから始める方が早いです。</div>

- [全OSS release roadmap](/ja/oss/)
- [OSSを比較する](/ja/compare/)
- [Public pilot / release waitlist](https://github.com/soworks-jp/soworks-jp.github.io/issues/3)
- [English pilot page](/pilot/)