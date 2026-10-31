// ==================== 小站多语言（中英文） ====================
// 每个键对应页面上带 data-i18n="key" 的元素，value 是 { zh: '...', en: '...' }
// 同时也供 script.js 中 JS 生成的内容调用

const I18N = {
  // ---------- 页面标题 ----------
  title: { zh: 'Small Moss|来自中国的科幻爱好者！', en: 'Small Moss | Sci-Fi Lover from China!' },

  // ---------- 顶部导航 ----------
  nav_github: { zh: 'GitHub', en: 'GitHub' },
  nav_bilibili: { zh: 'B站', en: 'Bilibili' },
  nav_modrinth: { zh: 'Modrinth', en: 'Modrinth' },
  nav_discord: { zh: 'Discord', en: 'Discord' },

  // ---------- 左侧内容导航 ----------
  side_home: { zh: '首页', en: 'Home' },
  side_about: { zh: '关于', en: 'About' },
  side_works: { zh: '作品', en: 'Works' },
  side_contact: { zh: '联系', en: 'Contact' },

  // ---------- Hero ----------
  hero_greeting: { zh: '你好，我是', en: 'Hello, I am' },
  hero_subtitle: { zh: '一位热衷于科幻作品的 Minecraft Mod 开发者 · 天体干预局组织的组长', en: 'A Minecraft Mod developer and sci-fi enthusiast · Leader of the Celestial Intervention Agency' },

  hero_tag_java: { zh: 'Java', en: 'Java', tooltip: { zh: '顺手学的', en: 'Picked it up along the way' } },
  hero_tag_fabric: { zh: 'Fabric', en: 'Fabric', tooltip: { zh: '为了 AIT 我来到了 Fabric，为了永恒的旅行我做了 DOCTOR M，现在我只会 Fabric 的开发…', en: 'I came to Fabric for AIT, made DOCTOR M for Eternal Travel, and now I only do Fabric development…' } },
  hero_tag_mod: { zh: 'Minecraft Mod', en: 'Minecraft Mod', tooltip: { zh: '除了 Minecraft 的模组，别的我真的不会搞了', en: 'Apart from Minecraft mods, I really can’t do anything else' } },
  hero_tag_moddev: { zh: '模组开发', en: 'Mod Development', tooltip: { zh: '这正是我现在热爱的', en: 'This is what I love right now' } },
  hero_tag_pack: { zh: '整合包制作', en: 'Modpack Making', tooltip: { zh: '讲个笑话，我的作品 DOCTOR M 起初是永恒的旅行的附属模组', en: 'Fun fact: my work DOCTOR M started as an addon mod for Eternal Travel' } },
  hero_tag_translation: { zh: '汉化翻译', en: 'Localization / Translation', tooltip: { zh: '我是个中国人，英语也不是很好，所以…懂吧？', en: 'I’m Chinese and my English isn’t great, so… you get it?' } },
  hero_tag_scifi: { zh: '科幻世界观', en: 'Sci-Fi Worldview', tooltip: { zh: '科幻爱好者，尤其是对《三体》《神秘博士》这样的科幻作品', en: 'Sci-fi enthusiast, especially for works like *The Three-Body Problem* and *Doctor Who*' } },
  hero_tag_ai: { zh: 'AI 辅助开发', en: 'AI-Assisted Development', tooltip: { zh: '我知道有些人会歧视我这样的人，但请相信我，我的 QA 质量把关绝对在线！', en: 'I know some people may discriminate against people like me, but please believe me, my QA quality is top-notch!' } },

  // ---------- 关于 ----------
  about_title: { zh: '关于我', en: 'About Me' },
  about_intro: { zh: '来自中国，一名 17 岁的高三学生，热衷于科幻作品与经典 FPS 游戏。在作为一名玩家的基础上，才是一位比较业余的模组开发者和整合包作者，以及汉化者。目前，作品有基于《神秘博士》为主题的 DOCTOR M 系列、以《幽灵行者》为主题的 Ghostrunner 模组，以及「永恒的旅行」系列整合包。', en: 'From China, a 17-year-old senior high school student, passionate about sci-fi and classic FPS games. On top of being a player, I’m an amateur mod developer, modpack author, and translator. Current works include the DOCTOR M series themed on *Doctor Who*, the Ghostrunner mod themed on *Ghostrunner*, and the “Eternal Travel” modpack series.' },

  about_label_location: { zh: '位置', en: 'Location' },
  about_value_location: { zh: '🇨🇳 中国', en: '🇨🇳 China' },
  about_tooltip_location: { zh: '详细地址？我是个广西人，不能再细说了！', en: 'Detailed address? I’m from Guangxi, can’t be more specific!' },

  about_label_age: { zh: '年龄', en: 'Age' },
  about_value_age: { zh: '17 岁 · 高三', en: '17 · Senior Year' },
  about_tooltip_age: { zh: '是的，我还在读书 :P', en: 'Yes, I’m still in school :P' },

  about_label_identity: { zh: '身份', en: 'Identity' },
  about_value_identity: { zh: '玩家 &gt; 开发者', en: 'Player &gt; Developer' },
  about_tooltip_identity: { zh: '从玩东西的，到给别人做东西玩的', en: 'From playing things, to making things for others to play' },

  about_label_games: { zh: '最喜欢的游戏', en: 'Favorite Games' },
  about_game_doom: { zh: '毁灭战士', en: 'Doom', tooltip: { zh: '因他终将与我们同行', en: 'Because he will walk with us' } },
  about_game_hl: { zh: '半条命', en: 'Half-Life', tooltip: { zh: '我就要去莱温霍姆', en: "I'm going to Ravenholm" } },
  about_game_blue_archive: { zh: '蔚蓝档案', en: 'Blue Archive', tooltip: { zh: '九蓝一金', en: 'Nine Blue One Gold' } },
  about_game_minecraft: { zh: '我的世界', en: 'Minecraft', tooltip: { zh: 'MC 是个游戏引擎（bushi）', en: 'MC is a game engine (not really)' } },
  about_game_ghostrunner: { zh: '幽灵行者2', en: 'Ghostrunner 2', tooltip: { zh: '我即是刀锋', en: 'I am the blade' } },

  // 名字来源
  name_origin_quote: { zh: '550W 听起来不像是一个名字，<br>但是把它反过来，叫 MOSS，<br>中文直译名为<b>小苔藓</b>，听起来是不是可爱多了？', en: '“550W” doesn’t sound like a name,<br>but reversed, it’s MOSS,<br>literally translated as <b>Small Moss</b>, isn’t that cuter?' },
  name_origin_source: { zh: '— 《流浪地球 2》· 550W / MOSS', en: '— *The Wandering Earth 2* · 550W / MOSS' },
  name_origin_note: { zh: '我的名字 <b>Small Moss</b>，正是取自这里。', en: 'My name <b>Small Moss</b> comes from right here.' },

  // ---------- 作品 ----------
  works_title: { zh: '我的作品', en: 'My Works' },
  works_subtitle: { zh: '我的作品都是免费发布的，如果遇到付费二次分发，请联系我。', en: 'All my works are free. If you encounter paid redistribution, please contact me.' },

  work_doctorm_name: { zh: 'DOCTOR M', en: 'DOCTOR M' },
  work_doctorm_desc: { zh: 'AIT扩展模组，让AIT变得更好更棒！', en: 'AIT extension mod, making AIT better and greater!' },
  work_doctorm_stats_label: { zh: '下载', en: 'Downloads' },

  work_eternal_name: { zh: '永恒的旅行', en: 'Eternal Travel' },
  work_eternal_desc: { zh: '《神秘博士》主题的整合包系列', en: '*Doctor Who*-themed modpack series' },
  work_eternal_stats_label: { zh: '暂无下载', en: 'No downloads yet' },

  work_doctorm3_name: { zh: 'DOCTOR M 3', en: 'DOCTOR M 3' },
  work_doctorm3_desc: { zh: 'DOCTOR M 3.0，新一代《神秘博士》模组。', en: 'DOCTOR M 3.0, the next-generation *Doctor Who* mod.' },
  work_doctorm3_stats_label: { zh: '暂无下载', en: 'No downloads yet' },

  work_ghostrunner_name: { zh: 'Ghostrunner', en: 'Ghostrunner' },
  work_ghostrunner_desc: { zh: '以《幽灵行者》为主题的模组，快、狠、准。', en: 'A *Ghostrunner*-themed mod, fast, fierce, precise.' },
  work_ghostrunner_stats_label: { zh: '暂无下载', en: 'No downloads yet' },

  works_github_stats: { zh: 'GitHub 活跃度', en: 'GitHub Activity' },
  works_github_chart_alt: { zh: 'Small Moss 的 GitHub 贡献图', en: "Small Moss's GitHub contribution graph" },
  works_recent_commits: { zh: '最近提交', en: 'Recent Commits' },
  works_commit_loading: { zh: '加载中…', en: 'Loading…' },
  works_commit_empty: { zh: '最近没有公开提交', en: 'No recent public commits' },
  works_commit_error: { zh: '暂时无法加载提交记录', en: 'Unable to load commit records at the moment' },

  // ---------- 联系 ----------
  contact_title: { zh: '联系', en: 'Contact' },
  contact_subtitle: { zh: '通过以下渠道找到我，或者加入天体干预局。', en: 'Find me through the channels below, or join the Celestial Intervention Agency.' },
  contact_github_desc: { zh: '@smallmoss233', en: '@smallmoss233' },
  contact_bilibili_desc: { zh: '@SmallMoss', en: '@SmallMoss' },
  contact_qq_desc: { zh: '群号：654700630', en: 'Group: 654700630' },
  contact_discord_loading: { zh: '加载中…', en: 'Loading…' },
  contact_discord_click: { zh: '点击加入', en: 'Click to join' },

  // 联系卡片标题
  contact_github_title: { zh: 'GitHub', en: 'GitHub' },
  contact_bilibili_title: { zh: 'Bilibili', en: 'Bilibili' },
  contact_qq_title: { zh: 'QQ 群', en: 'QQ Group' },
  contact_discord_title: { zh: 'Discord', en: 'Discord' },

  // ---------- 页脚 ----------
  footer_agency: { zh: 'CELESTIAL INTERVENTION AGENCY', en: 'CELESTIAL INTERVENTION AGENCY' },
  footer_copyright: { zh: '© 2026 Small Moss', en: '© 2026 Small Moss' },

  // ---------- 语言切换按钮 ----------
  lang_zh: { zh: '中文', en: '中文' },
  lang_en: { zh: 'English', en: 'English' },
};

// 当前语言：'zh' | 'en'
let currentLang = 'zh';

// 读取/保存用户语言偏好
function getSavedLang() {
  try {
    const saved = localStorage.getItem('sm_lang');
    if (saved === 'zh' || saved === 'en') return saved;
  } catch (e) {}
  return null;
}

// 根据浏览器语言自动匹配：中文环境用中文，其余用英文
function detectBrowserLang() {
  const lang = (navigator.language || navigator.userLanguage || 'zh-CN').toLowerCase();
  return lang.startsWith('zh') ? 'zh' : 'en';
}

// 初始化语言：优先用户保存的选择，其次浏览器自动匹配，默认中文
function initLang() {
  const saved = getSavedLang();
  currentLang = saved ? saved : detectBrowserLang();
  return currentLang;
}

function getLang() {
  return currentLang;
}

// 切换语言并持久化
function setLang(lang) {
  if (lang !== 'zh' && lang !== 'en') return;
  currentLang = lang;
  try { localStorage.setItem('sm_lang', lang); } catch (e) {}
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  document.documentElement.setAttribute('data-lang', lang);
  applyLang();
  refreshLangSwitcher();
  if (typeof window.__onLangChange === 'function') window.__onLangChange();
}

// 给带 data-i18n 的元素应用翻译
function applyLang() {
  const code = currentLang;

  // 页面标题
  const titleEl = document.querySelector('title');
  if (titleEl && I18N.title) titleEl.textContent = I18N.title[code];

  // 所有带 data-i18n 的普通元素
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const entry = I18N[key];
    if (!entry) return;
    el.textContent = entry[code];
    // 如果有 data-i18n-tooltip，一并翻译提示
    const tipKey = el.getAttribute('data-i18n-tooltip');
    if (tipKey && I18N[tipKey]) {
      el.setAttribute('data-tooltip', I18N[tipKey][code]);
      el.setAttribute('title', I18N[tipKey][code]);
    }
  });

  // 带 data-i18n-html 的元素（可包含 <br> <b> 等 HTML）
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    const entry = I18N[key];
    if (!entry) return;
    el.innerHTML = entry[code];
  });

  // 语言切换按钮自身文本（由 renderLangSwitcher 单独处理，这里不覆盖）
}

// 渲染右上角语言切换按钮
function renderLangSwitcher() {
  const navLinks = document.querySelector('.nav-links');
  if (!navLinks) return;

  // 避免重复渲染：如果按钮已存在，只刷新状态
  if (document.getElementById('lang-switcher-btns')) {
    refreshLangSwitcher();
    return;
  }

  const wrapper = document.createElement('div');
  wrapper.id = 'lang-switcher';
  wrapper.style.display = 'inline-flex';
  wrapper.style.gap = '6px';
  wrapper.style.marginLeft = '14px';
  wrapper.style.alignItems = 'center';

  const btnsContainer = document.createElement('div');
  btnsContainer.id = 'lang-switcher-btns';

  const makeBtn = (label, code, active) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'nav-link lang-btn' + (active ? ' active' : '');
    btn.textContent = label;
    btn.setAttribute('aria-label', '切换语言 / Switch language: ' + label);
    btn.setAttribute('data-lang', code);
    btn.addEventListener('click', () => setLang(code));
    return btn;
  };

  btnsContainer.appendChild(makeBtn(I18N.lang_zh.zh, 'zh', currentLang === 'zh'));
  btnsContainer.appendChild(makeBtn(I18N.lang_en.en, 'en', currentLang === 'en'));

  wrapper.appendChild(btnsContainer);
  navLinks.appendChild(wrapper);
}

// 刷新语言切换按钮的选中状态与文字
function refreshLangSwitcher() {
  document.querySelectorAll('#lang-switcher .lang-btn').forEach(btn => {
    const code = btn.getAttribute('data-lang');
    btn.classList.toggle('active', code === currentLang);
  });
}

// 对外暴露，供 script.js 调用
window.smI18n = {
  I18N,
  initLang,
  getLang,
  setLang,
  applyLang,
  renderLangSwitcher,
  refreshLangSwitcher,
};
