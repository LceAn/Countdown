/**
 * 倒计时核心逻辑
 */

class Countdown {
    constructor(config) {
        this.config = config;
        this.elements = {
            title: document.getElementById('title'),
            subtitle: document.getElementById('subtitle'),
            days: document.getElementById('days'),
            hours: document.getElementById('hours'),
            minutes: document.getElementById('minutes'),
            seconds: document.getElementById('seconds'),
            message: document.getElementById('message'),
            progressContainer: document.getElementById('progress-container'),
            progressFill: document.getElementById('progress-fill'),
            progressPercent: document.getElementById('progress-percent'),
            themeBtn: document.getElementById('theme-btn')
        };
        
        this.isCompleted = false;
        this.init();
    }

    init() {
        // 设置标题
        this.elements.title.textContent = this.config.title;
        
        // 初始化主题
        this.initTheme();
        
        // 隐藏/显示秒数
        if (!this.config.showSeconds) {
            this.elements.seconds.parentElement.style.display = 'none';
        }
        
        // 隐藏/显示进度条
        if (!this.config.showProgress) {
            this.elements.progressContainer.style.display = 'none';
        }
        
        // 启动倒计时
        this.update();
        setInterval(() => this.update(), 1000);
        
        // 主题切换事件
        this.elements.themeBtn.addEventListener('click', () => this.toggleTheme());
    }

    initTheme() {
        const savedTheme = localStorage.getItem('countdown-theme') || this.config.defaultTheme;
        if (savedTheme === 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
            this.elements.themeBtn.textContent = '☀️';
        }
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'light') {
            document.documentElement.removeAttribute('data-theme');
            this.elements.themeBtn.textContent = '🌙';
            localStorage.setItem('countdown-theme', 'gradient');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            this.elements.themeBtn.textContent = '☀️';
            localStorage.setItem('countdown-theme', 'light');
        }
    }

    update() {
        const now = new Date();
        const remaining = CountdownTime.calculateRemaining(now, this.config.targetDate);

        if (remaining.completed) {
            this.countdownEnded();
            return;
        }

        this.isCompleted = false;
        this.elements.message.textContent = this.config.message;

        // 更新显示
        this.elements.days.textContent = this.formatTime(remaining.days);
        this.elements.hours.textContent = this.formatTime(remaining.hours);
        this.elements.minutes.textContent = this.formatTime(remaining.minutes);
        this.elements.seconds.textContent = this.formatTime(remaining.seconds);

        // 更新进度条
        this.updateProgress(now);
    }

    formatTime(time) {
        return time.toString().padStart(2, '0');
    }

    updateProgress(current) {
        const percent = CountdownTime.calculateProgress(
            current,
            this.config.yearProgress.startDate,
            this.config.yearProgress.endDate
        );

        this.elements.progressFill.style.width = `${percent}%`;
        this.elements.progressPercent.textContent = `${percent.toFixed(2)}%`;
    }

    countdownEnded() {
        if (!this.isCompleted) {
            this.isCompleted = true;
            this.elements.days.textContent = '00';
            this.elements.hours.textContent = '00';
            this.elements.minutes.textContent = '00';
            this.elements.seconds.textContent = '00';
            this.elements.message.textContent = this.config.completedMessage;
            this.elements.progressFill.style.width = '100%';
            this.elements.progressPercent.textContent = '100%';
            
            document.querySelector('.countdown-wrapper').classList.add('countdown-ended');
        }
    }
}

// 初始化倒计时
document.addEventListener('DOMContentLoaded', () => {
    new Countdown(CONFIG);
});
