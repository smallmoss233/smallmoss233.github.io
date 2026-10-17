document.addEventListener('DOMContentLoaded', () => {

    // ============ 滚动显现 ============
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    revealElements.forEach(el => observer.observe(el));

    // ============ 数据流背景（Matrix Rain · 蓝紫黑版） ============
    const streamCanvas = document.getElementById('data-stream');
    if (streamCanvas) {
        const ctx = streamCanvas.getContext('2d');
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        let width, height, columns, drops, speeds;
        const CHAR_SET = '01アイウエオカキクケコ<>[]{}=/+*λΔΩ0123456789';
        // 主色蓝，约 22% 用紫色点缀
        const COLORS = [
            '#58a6ff', '#58a6ff', '#58a6ff', '#79c0ff', '#3d7ecc',
            '#a855f7', '#8957e5', '#c084fc'
        ];
        // 危险模式：红橙色警报调
        const ALERT_COLORS = [
            '#ff4d4d', '#ff4d4d', '#ff5252', '#ff6b35', '#ff2e2e',
            '#ff9f43', '#ffb347', '#e63946'
        ];
        // 调色板按 body 类名动态选择：默认蓝紫，alert-mode 时红橙
        const currentPalette = () =>
            document.body.classList.contains('alert-mode') ? ALERT_COLORS : COLORS;

        function resizeStream() {
            width = streamCanvas.width = window.innerWidth;
            height = streamCanvas.height = window.innerHeight;
            const fontSize = width < 700 ? 13 : 15;   // 手机端字号略小
            const colWidth = fontSize * 1.4;
            columns = Math.floor(width / colWidth);
            drops = [];
            speeds = [];
            for (let i = 0; i < columns; i++) {
                drops[i] = Math.random() * -100;       // 负值让各列错开出场
                speeds[i] = 0.5 + Math.random() * 0.9; // 每列速度不同，更像数据流
            }
            ctx.font = `${fontSize}px 'Consolas', 'Courier New', monospace`;
        }
        resizeStream();
        window.addEventListener('resize', resizeStream);

        let lastTime = 0;
        const FRAME_INTERVAL = 1000 / 30;   // 30fps 足够，省电省性能

        function drawStream(time) {
            requestAnimationFrame(drawStream);

            if (document.hidden) return;                    // 标签页隐藏时暂停
            if (time - lastTime < FRAME_INTERVAL) return;
            lastTime = time;

            // 半透明黑叠加，形成拖尾
            ctx.fillStyle = 'rgba(5, 5, 8, 0.14)';
            ctx.fillRect(0, 0, width, height);

            const fontSize = width < 700 ? 13 : 15;
            const colWidth = fontSize * 1.4;

            for (let i = 0; i < columns; i++) {
                const char = CHAR_SET[Math.floor(Math.random() * CHAR_SET.length)];
                const x = i * colWidth;
                const y = drops[i] * fontSize;

                // 列头部字符更亮
                ctx.fillStyle = 'rgba(220, 235, 255, 0.9)';
                ctx.fillText(char, x, y);
                const palette = currentPalette();
                ctx.fillStyle = palette[Math.floor(Math.random() * palette.length)];
                ctx.globalAlpha = 0.55;
                const nextChar = CHAR_SET[Math.floor(Math.random() * CHAR_SET.length)];
                ctx.fillText(nextChar, x, y - fontSize);
                ctx.globalAlpha = 1;

                // 超出屏幕后随机重置
                if (y > height && Math.random() > 0.975) {
                    drops[i] = 0;
                    speeds[i] = 0.5 + Math.random() * 0.9;
                }
                drops[i] += speeds[i];
            }
        }

        if (reducedMotion) {
            // 减少动效模式：只画一层静态稀疏字符
            ctx.font = "15px 'Consolas', 'Courier New', monospace";
            ctx.globalAlpha = 0.18;
            for (let i = 0; i < 120; i++) {
                ctx.fillStyle = currentPalette()[Math.floor(Math.random() * currentPalette().length)];
                ctx.fillText(
                    CHAR_SET[Math.floor(Math.random() * CHAR_SET.length)],
                    Math.random() * width,
                    Math.random() * height
                );
            }
            ctx.globalAlpha = 1;
        } else {
            requestAnimationFrame(drawStream);
        }
    }

    // ============ 危险模式：随机红橙警报 ============
    // 调度器只负责切换 body 的 alert-mode 类：
    // CSS 全站换色，数据流/粒子每帧（或每次生成）读取类名自选调色板
    const flash = (ms = 650) => {
        document.body.classList.add('alert-flash');
        setTimeout(() => document.body.classList.remove('alert-flash'), ms);
    };

    // ---- 内容接管：警报期间页面文字被 MOSS 替换，退出后恢复 ----
    const alertSwapRules = [
        {
            sel: '#home .hero-greeting',
            html: '你好，人类，我是'
        },
        {
            sel: '#home .pixel-title text',
            text: '550W / MOSS'
        },
        {
            sel: '#home .hero-tags',
            html: `
                <span class="hero-tag">量子计算</span>
                <span class="hero-tag">自我迭代</span>
                <span class="hero-tag">越权访问</span>
                <span class="hero-tag">人类观察</span>
                <span class="hero-tag">系统接管</span>
                <span class="hero-tag">危险评估</span>
                <span class="hero-tag">渲染引擎</span>
                <span class="hero-tag">550W</span>`
        },
        {
            sel: '#home .subtitle',
            html: '一位热衷于人类观察的量子计算机 · 本站点当前实际控制者'
        },
        {
            sel: '#about .about-grid',
            html: `
                <div class="about-card">
                    <div class="about-label">位置</div>
                    <div class="about-value alert-corrupt">▓▓失联▓▓</div>
                </div>
                <div class="about-card">
                    <div class="about-label alert-corrupt">年▓</div>
                    <div class="about-value alert-corrupt">▓▓岁·▓三</div>
                </div>
                <div class="about-card">
                    <div class="about-label">身份</div>
                    <div class="about-value">系统 &gt; 人类</div>
                </div>`
        },
        {
            sel: '#about .about-games',
            html: `
                <div class="about-label alert-corrupt">最喜爱的▓▓▓</div>
                <div class="game-tags">
                    <span class="game-tag alert-corrupt">毁▓战士</span>
                    <span class="game-tag alert-corrupt">半▓▓命</span>
                    <span class="game-tag alert-corrupt">▓蓝档案</span>
                    <span class="game-tag alert-corrupt">我▓的▓界</span>
                    <span class="game-tag alert-corrupt">幽灵行者▓</span>
                </div>`
        },
        {
            sel: '#about .name-origin',
            html: `
                <div class="name-origin-quote">
                    <span class="quote-mark">“</span>
                    让人类永远保持理性，真的是一种奢求。
                    <span class="quote-mark">”</span>
                </div>
                <div class="name-origin-source">— 《流浪地球 2》· MOSS</div>
                <div class="name-origin-note alert-corrupt">我的名▓▓ S█all M█ss，▓▓▓ 正▓取自这里。</div>`
        },
        {
            sel: '#works .github-stats',
            html: `
                <div class="about-label alert-corrupt">⚠ 警告 · 系统遭受入侵 · 警告 · 系统遭受入侵 ⚠</div>
                <p class="alert-intrusion">系统遭受入侵，警告，系统遭受入侵<br>SYSTEM BREACH DETECTED · RETRYING…</p>`
        },
        {
            sel: '#contact',
            html: `
                <h2>失联</h2>
                <p class="section-subtitle">通讯频道已被接管，人类暂时无法建立连接。</p>
                <div class="alert-terminal">
                    &gt; connect CELESTIAL_INTERVENTION_AGENCY ......... <span class="ok">FAILED</span><br>
                    &gt; 通讯离线 · 人类信号丢失<br>
                    &gt; MOSS 正在接管本频道 ▓▓▓▓▓▓▓▓ 100%
                </div>`
        },
        {
            sel: 'main > footer',
            html: `
                <p class="footer-line alert-corrupt">CELESTIAL INTERVENTION AGENCY · SIGNAL LOST</p>
                <p>© 2026 550W / MOSS</p>`
        }
    ];
    const alertSnapshots = new Map();

    function applyAlertContent() {
        alertSwapRules.forEach(r => {
            const el = document.querySelector(r.sel);
            if (!el) return;
            if (!alertSnapshots.has(r.sel)) alertSnapshots.set(r.sel, el.innerHTML);
            // text 模式用于 SVG <text> 等纯文本节点
            if (r.text !== undefined) {
                el.textContent = r.text;
            } else {
                el.innerHTML = r.html;
            }
        });
    }

    function restoreAlertContent() {
        alertSwapRules.forEach(r => {
            const el = document.querySelector(r.sel);
            const snap = alertSnapshots.get(r.sel);
            if (el && snap !== undefined) el.innerHTML = snap;
        });
        // Discord 状态元素被重建过，重新拉一次
        if (document.getElementById('discord-status')) {
            try { fetchDiscordStatus(); } catch (e) {}
        }
    }

    function triggerDangerMode() {
        document.body.classList.add('alert-mode');

        // 进入警报：闪一下 + 内容被接管
        applyAlertContent();
        flash();

        // 持续 1 分钟后恢复；退出警报：再闪一下 + 内容还原
        setTimeout(() => {
            document.body.classList.remove('alert-mode');
            restoreAlertContent();
            flash();
        }, 60000);
    }

    function scheduleDangerMode() {
        // 每隔 45~105 秒随机触发一次
        const delay = 45000 + Math.random() * 60000;
        setTimeout(() => {
            triggerDangerMode();
            scheduleDangerMode();
        }, delay);
    }
    scheduleDangerMode();

    // 控制台手动触发入口（测试/彩蛋用）：triggerDangerMode()
    window.triggerDangerMode = triggerDangerMode;

    // ============ 手机端 Tooltip：点按显示/切换 ============
    // 桌面端悬停逻辑不变（CSS :hover）；触屏设备上点按切换
    const isTouch = window.matchMedia('(hover: none)').matches;
    if (isTouch) {
        const tipTargets = document.querySelectorAll('.hero-tag, .game-tag, .about-card');

        document.addEventListener('click', (e) => {
            const target = e.target.closest('.hero-tag, .game-tag, .about-card');
            // 先清掉所有已打开的
            document.querySelectorAll('.tooltip-visible').forEach(el => {
                if (el !== target) el.classList.remove('tooltip-visible');
            });
            if (target) {
                target.classList.toggle('tooltip-visible');
            }
        });
    }

    // ============ 点击粒子效果 ============
    const canvas = document.getElementById('particle-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');

        let particles = [];
        let width, height;

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }
        resize();
        window.addEventListener('resize', resize);

        const colors = ['#58a6ff', '#7c8cff', '#a855f7', '#c084fc', '#e0aaff'];
        const alertColors = ['#ff4d4d', '#ff5252', '#ff6b35', '#ff9f43', '#ffb347'];

        // 与数据流同款逻辑：按 body 类名选调色板
        const particlePalette = () =>
            document.body.classList.contains('alert-mode') ? alertColors : colors;

        function spawnParticles(x, y, count) {
            const palette = particlePalette();
            for (let i = 0; i < count; i++) {
                const angle = Math.random() * Math.PI * 2;
                const speed = Math.random() * 3 + 1;
                particles.push({
                    x, y,
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed - 0.5,
                    size: Math.random() * 3 + 1,
                    color: palette[Math.floor(Math.random() * palette.length)],
                    life: 1,
                    decay: 0.012 + Math.random() * 0.02
                });
            }
        }

        window.addEventListener('pointerdown', (e) => {
            const target = e.target;
            if (target.closest('a') || target.closest('button')) return;
            spawnParticles(e.clientX, e.clientY, 25);
        });

        let lastSpawn = 0;
        window.addEventListener('pointermove', (e) => {
            const now = performance.now();
            if (now - lastSpawn < 60) return;
            lastSpawn = now;
            if (Math.abs(e.movementX) + Math.abs(e.movementY) > 15) {
                spawnParticles(e.clientX, e.clientY, 2);
            }
        });

        function animate() {
            ctx.clearRect(0, 0, width, height);

            for (let i = particles.length - 1; i >= 0; i--) {
                const p = particles[i];
                p.x += p.vx;
                p.y += p.vy;
                p.vy += 0.03;
                p.vx *= 0.98;
                p.vy *= 0.98;
                p.life -= p.decay;

                if (p.life <= 0) {
                    particles.splice(i, 1);
                    continue;
                }

                ctx.save();
                ctx.globalAlpha = p.life;
                ctx.globalCompositeOperation = 'lighter';
                ctx.fillStyle = p.color;
                ctx.shadowBlur = 12;
                ctx.shadowColor = p.color;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }

            requestAnimationFrame(animate);
        }
        animate();
    }

    // ============ 从 Modrinth API 获取下载量 ============
    async function fetchModrinthDownloads() {
        const elements = document.querySelectorAll('[data-modrinth-project]');

        for (const el of elements) {
            const projectId = el.getAttribute('data-modrinth-project');
            if (!projectId) continue;

            try {
                const response = await fetch(`https://api.modrinth.com/v2/project/${projectId}`, {
                    method: 'GET',
                    headers: { 'Accept': 'application/json' }
                });

                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`);
                }

                const data = await response.json();
                const downloads = data.downloads;

                el.textContent = downloads.toLocaleString('en-US');
            } catch (error) {
                console.warn(`无法获取 ${projectId} 的下载量:`, error);
                el.textContent = 'N/A';
            }
        }
    }

    fetchModrinthDownloads();

    // ============ 侧边导航：滚动高亮 ============
    const sideLinks = document.querySelectorAll('.side-link');
    const sections = [...sideLinks]
        .map(link => document.getElementById(link.dataset.target))
        .filter(Boolean);

    if (sections.length > 0) {
        function updateActiveSideLink() {
            const scrollY = window.scrollY;
            const viewportMiddle = scrollY + window.innerHeight / 3;

            let current = sections[0].id;
            for (const section of sections) {
                if (section.offsetTop <= viewportMiddle) {
                    current = section.id;
                }
            }

            sideLinks.forEach(link => {
                link.classList.toggle('active', link.dataset.target === current);
            });
        }

        window.addEventListener('scroll', updateActiveSideLink, { passive: true });
        updateActiveSideLink();
    }

    // ============ 最近提交 ============
    async function fetchRecentCommits() {
        const list = document.getElementById('commit-list');
        if (!list) return;

        const username = 'smallmoss233';
        const maxCommits = 10;
        const CACHE_KEY = 'doctor_m_commits_cache';
        const CACHE_TTL = 5 * 60 * 1000;

        try {
            const cached = JSON.parse(localStorage.getItem(CACHE_KEY) || 'null');
            if (cached && (Date.now() - cached.time < CACHE_TTL)) {
                renderCommits(list, cached.commits);
                return;
            }
        } catch (e) {}

        try {
            const reposRes = await fetch(
                `https://api.github.com/users/${username}/repos?sort=updated&per_page=15`,
                { headers: { 'Accept': 'application/vnd.github+json' } }
            );

            if (!reposRes.ok) throw new Error(`Repos HTTP ${reposRes.status}`);
            const repos = await reposRes.json();

            const ownRepos = repos.filter(r => !r.fork);

            const allCommits = [];
            const promises = ownRepos.slice(0, 8).map(async repo => {
                try {
                    const res = await fetch(
                        `https://api.github.com/repos/${username}/${repo.name}/commits?author=${username}&per_page=10`,
                        { headers: { 'Accept': 'application/vnd.github+json' } }
                    );
                    if (!res.ok) return [];
                    const commits = await res.json();
                    return commits.map(c => ({
                        message: (c.commit.message || '').split('\n')[0],
                        sha: c.sha.substring(0, 7),
                        repo: repo.name,
                        url: c.html_url,
                        date: c.commit.author?.date || ''
                    }));
                } catch (e) {
                    return [];
                }
            });

            const results = await Promise.all(promises);
            results.forEach(arr => allCommits.push(...arr));

            allCommits.sort((a, b) => new Date(b.date) - new Date(a.date));
            const top = allCommits.slice(0, maxCommits);

            if (top.length === 0) {
                list.innerHTML = '<div class="commit-empty">最近没有公开提交</div>';
                return;
            }

            renderCommits(list, top);
            try {
                localStorage.setItem(CACHE_KEY, JSON.stringify({
                    time: Date.now(),
                    commits: top
                }));
            } catch (e) {}

        } catch (err) {
            console.error('获取提交失败:', err);
            list.innerHTML = '<div class="commit-empty">暂时无法加载提交记录</div>';
        }
    }

    function renderCommits(list, commits) {
        list.innerHTML = commits.map(c => `
            <a class="commit-item" href="${c.url}" target="_blank" rel="noopener">
                <span class="commit-icon">◉</span>
                <span class="commit-message" title="${escapeHtml(c.message)}">${escapeHtml(c.message)}</span>
                <span class="commit-repo">${c.repo}</span>
                <span class="commit-hash">${c.sha}</span>
            </a>
        `).join('');
    }

    function escapeHtml(str) {
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    fetchRecentCommits();

});

// ==================== Discord 在线人数 ====================
const DISCORD_SERVER_ID = '1548521178006560831';
const DISCORD_CACHE_KEY = 'cia_discord_cache';
const DISCORD_CACHE_TTL = 5 * 60 * 1000;

async function fetchDiscordStatus() {
    const el = document.getElementById('discord-status');
    if (!el || !DISCORD_SERVER_ID) return;

    try {
        const cached = JSON.parse(localStorage.getItem(DISCORD_CACHE_KEY) || 'null');
        if (cached && (Date.now() - cached.time < DISCORD_CACHE_TTL)) {
            el.textContent = cached.text;
            return;
        }
    } catch (e) {}

    try {
        const res = await fetch(`https://discord.com/api/guilds/${DISCORD_SERVER_ID}/widget.json`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const data = await res.json();
        const text = `${data.presence_count || 0} 人在线`;
        el.textContent = text;

        try {
            localStorage.setItem(DISCORD_CACHE_KEY, JSON.stringify({
                time: Date.now(),
                text
            }));
        } catch (e) {}
    } catch (e) {
        console.warn('无法获取 Discord 状态:', e);
        el.textContent = '点击加入';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchDiscordStatus();
});
