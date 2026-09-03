---
layout: page
title: 全OSS — SO Works Agent Series リリースロードマップ
description: SO Works Agent Seriesで公開予定の13 OSSと、各ツールがAgent Stackで担う役割を確認できます。
lang: ja
permalink: /ja/oss/
---

<section class="sw-product-hero sw-roadmap-hero">
  <span class="sw-kicker">SO Works OSSロードマップ</span>
  <h1>13のOSSを、1つのAgent Stackとして公開予定。</h1>
  <p>以下のプロジェクトはすべてpublic OSSとしてリリース予定です。多くのrepoは、public packaging・docs・license確認・release gateを仕上げる間はprivateのままです。このページはproduct directionを示すもので、release日を約束するものではありません。</p>
  <div class="sw-actions">
    <a class="sw-button" href="/ja/compare/">自分に合うツールを選ぶ</a>
    <a class="sw-button secondary" href="/ja/">Agent Seriesへ戻る</a>
  </div>
  <div class="sw-proof-row" aria-label="OSS release principles">
    <span><strong>13 OSSを公開予定</strong><small>repo公開前から全体のproduct directionを可視化</small></span>
    <span><strong>Local-first</strong><small>coreのagent workflow dataを自分の管理下に置く</small></span>
    <span><strong>Composable</strong><small>小さなpackage単体でも、stack全体でも使える</small></span>
    <span><strong>架空のrelease日は出さない</strong><small>本当に公開可能になったprojectからlinkを出す</small></span>
  </div>
</section>

<section class="sw-section">
  <div class="sw-section-head">
    <div>
      <span class="sw-kicker">Release status</span>
      <h2>ここに載っているものは、すべてpublic OSSとしてリリース予定です。</h2>
      <p>repoやpackageが実際にpublicになるまでは、private repo URL、未公開package前提のinstall導線、公開募集フローは表示しません。各projectがrelease gateを通過した時点で、public linkを順次追加します。</p>
    </div>
  </div>
</section>

<section class="sw-section">
  <div class="sw-section-head">
    <div>
      <span class="sw-kicker">Complete catalog</span>
      <h2>Product intentからrouting、execution、review、memory、operationsまで。</h2>
    </div>
  </div>
  <div class="sw-roadmap-grid">
    {% for project in site.data.oss_catalog %}
    <article class="sw-roadmap-card" id="{{ project.id }}">
      <div class="sw-card-top">
        <span class="sw-layer">{{ project.layer }}</span>
        <span class="sw-release-state">{{ project.phase }}</span>
      </div>
      <h3>{{ project.name }}</h3>
      <p>{{ project.summary_ja }}</p>
      <div class="sw-release-line"><span class="sw-release-dot"></span>{{ project.status }}</div>
      <div class="sw-card-actions">
        {% if project.page_ja %}<a href="{{ project.page_ja }}">プロダクトページ →</a>{% endif %}
      </div>
    </article>
    {% endfor %}
  </div>
</section>

<section class="sw-panel sw-pilot-panel">
  <span class="sw-kicker inverse">Release roadmap</span>
  <h2>public releaseの準備が整ったprojectから、順次linkを公開します。</h2>
  <p>private開発の段階でも全体アーキテクチャは見せつつ、まだ公開されていないsoftwareを「使える状態」と誤認させない方針です。</p>
  <div class="sw-actions">
    <a class="sw-button" href="/ja/compare/">使い分けを見る</a>
    <a class="sw-button secondary" href="/oss/">English</a>
  </div>
</section>
