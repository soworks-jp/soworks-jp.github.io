---
layout: home
title: AIエージェント開発を支えるローカルファーストOSS
description: AI coding agentのタスク運用、repo context最適化、personaレビュー、安全なmemory研究をローカルファーストで支えるSO Works Agent Series。
---

<section class="sw-hero sw-hero-product">
  <span class="sw-eyebrow">SO Works Agent Series · 13 OSSをpublic release予定</span>
  <h1>AIエージェントを、実際の開発チームのように運用する。</h1>
  <p>Codex、Claude Code、Cursor、Gemini CLIなどを実repoで使う人向けに、planning、routing、handoff、context削減、review、memory、安全性、運用までを小さなOSSとして分けて提供します。</p>
  <div class="sw-actions">
    <a class="sw-button" href="agent-workbench/">Agent Workbenchを見る</a>
    <a class="sw-button secondary" href="agent-token-optimizer/">repoを5分で診断する</a>
    <a class="sw-button secondary" href="oss/">13 OSSのrelease roadmapを見る</a>
  </div>
  <div class="sw-proof-row">
    <span><strong>13 OSSを公開予定</strong><small>pilot / preview / plannedをroadmapで明示</small></span>
    <span><strong>ローカルファースト</strong><small>core workflow dataを自分の管理下に置く</small></span>
    <span><strong>Composable</strong><small>1 packageだけでもstack全体でも使える</small></span>
    <span><strong>実験で評価</strong><small>signup数ではなくbounded experimentのbefore/afterで見る</small></span>
  </div>
</section>

<section class="sw-section">
  <div class="sw-section-head">
    <div>
      <span class="sw-kicker">まずここから</span>
      <h2>今困っている1つのボトルネックから使う。</h2>
      <p>主要4プロジェクトはbounded pilotを開始済み。その他のOSSもprivate開発のまま隠さず、公開予定と現在地をroadmapに載せます。</p>
    </div>
    <a href="oss/">全OSS roadmap →</a>
  </div>

  <div class="sw-grid sw-product-grid">
    <article class="sw-card sw-product-card featured">
      <div class="sw-card-top"><span class="sw-icon">AW</span><span class="sw-badge">Pilot now</span></div>
      <h3>Agent Workbench</h3>
      <p class="sw-card-lead">複数coding agentのタスク、担当、handoff、review、完了memoryをrepo内で管理。</p>
      <ul class="sw-mini-list"><li>task memory / routing / claim lease</li><li>prompt / report / review / Local Control</li><li>7日間・実タスク3件のdesign partner pilot</li></ul>
      <div class="sw-card-actions"><a class="sw-button" href="agent-workbench/">詳しく見る</a><a href="https://github.com/soworks-jp/soworks-jp.github.io/issues/3">pilot / waitlist →</a></div>
    </article>

    <article class="sw-card sw-product-card">
      <div class="sw-card-top"><span class="sw-icon green">TO</span><span class="sw-badge green">Pilot now</span></div>
      <h3>Agent Token Optimizer</h3>
      <p class="sw-card-lead">AIが読むrepo contextの無駄、巨大ファイル、instruction肥大、indexing riskをローカル診断。</p>
      <ul class="sw-mini-list"><li>read-only scanから開始</li><li>安全な1〜3改善をbefore/after比較</li><li>source codeの外部送信なし</li></ul>
      <div class="sw-card-actions"><a class="sw-button secondary" href="agent-token-optimizer/">repo診断を見る</a><a href="https://github.com/soworks-jp/soworks-jp.github.io/issues/3">pilot / waitlist →</a></div>
    </article>

    <article class="sw-card sw-product-card">
      <div class="sw-card-top"><span class="sw-icon orange">AP</span><span class="sw-badge orange">Pilot now</span></div>
      <h3>Agent Persona</h3>
      <p class="sw-card-lead">user、adopter、security、operator、buyerなどの視点をAI reviewへ明示的に追加。</p>
      <ul class="sw-mini-list"><li>通常reviewとのbefore/after</li><li>新しいactionable findingだけ測る</li><li>README / PRD / onboarding / handoff向け</li></ul>
      <div class="sw-card-actions"><a class="sw-button secondary" href="agent-persona/">詳しく見る</a><a href="https://github.com/soworks-jp/soworks-jp.github.io/issues/3">pilot / waitlist →</a></div>
    </article>

    <article class="sw-card sw-product-card">
      <div class="sw-card-top"><span class="sw-icon cyan">HM</span><span class="sw-badge cyan">Research pilot</span></div>
      <h3>Agent Human Memory</h3>
      <p class="sw-card-lead">明示的・review可能・forget可能なhuman-like memoryを安全性優先で研究。</p>
      <ul class="sw-mini-list"><li>preference / goal / episode / relationship context</li><li>authority / provenance / consent / forgetting</li><li>synthetic・低機密data限定の招待制pilot</li></ul>
      <div class="sw-card-actions"><a class="sw-button secondary" href="agent-human-memory/">詳しく見る</a><a href="https://github.com/soworks-jp/soworks-jp.github.io/issues/3">research pilot / waitlist →</a></div>
    </article>
  </div>
</section>

<section class="sw-section sw-roadmap-preview">
  <div class="sw-section-head">
    <div><span class="sw-kicker">Full release roadmap</span><h2>publicになる前から、13 OSSすべての役割と現在地を見せる。</h2><p>private repoだから存在が見えない、という状態をやめます。release済みと誤認させず、Pilot / Preview / Plannedを明示します。</p></div>
    <a href="oss/">全roadmapを開く →</a>
  </div>
  <div class="sw-roadmap-strip">
    {% for project in site.data.oss_catalog %}
    <a href="/ja/oss/#{{ project.id }}"><span>{{ project.layer }}</span><strong>{{ project.name }}</strong><small>{{ project.phase }}</small></a>
    {% endfor %}
  </div>
</section>

<section class="sw-panel sw-pilot-panel">
  <span class="sw-kicker inverse">Pilot + public release waitlist</span>
  <h2>今試すことも、public releaseの通知だけ受けることもできます。</h2>
  <p>応募窓口はpublicなPages repoのIssueへ集約しました。product repoがprivateでも誰でもopt-inできます。source code、secret、raw prompt、private repo情報、機密memoryは公開Issueへ投稿しないでください。</p>
  <div class="sw-actions">
    <a class="sw-button" href="https://github.com/soworks-jp/soworks-jp.github.io/issues/3">Public pilot / waitlist</a>
    <a class="sw-button secondary" href="pilot/">active pilotを見る</a>
    <a class="sw-button secondary" href="compare/">使い分けを見る</a>
  </div>
</section>
