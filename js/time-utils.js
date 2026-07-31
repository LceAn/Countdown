(function (root, factory) {
    const api = factory();
    if (typeof module === 'object' && module.exports) {
        module.exports = api;
    }
    root.CountdownTime = api;
}(typeof globalThis !== 'undefined' ? globalThis : this, function () {
    const DAY_MS = 24 * 60 * 60 * 1000;

    function yearStart(year) {
        return `${year}-01-01T00:00:00`;
    }

    function createYearConfig(now = new Date()) {
        const currentYear = now.getFullYear();
        const targetYear = currentYear + 1;
        return {
            title: `${targetYear} 新年倒计时`,
            targetDate: yearStart(targetYear),
            message: `距离 ${targetYear} 年还有`,
            completedMessage: `🎉 ${targetYear} 年已经到来！`,
            defaultTheme: 'gradient',
            showSeconds: true,
            showProgress: true,
            yearProgress: {
                startDate: yearStart(currentYear),
                endDate: yearStart(targetYear)
            }
        };
    }

    function calculateRemaining(current, target) {
        const difference = new Date(target).getTime() - new Date(current).getTime();
        if (!Number.isFinite(difference)) {
            throw new TypeError('倒计时时间格式无效');
        }
        if (difference <= 0) {
            return { completed: true, days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
        return {
            completed: false,
            days: Math.floor(difference / DAY_MS),
            hours: Math.floor((difference % DAY_MS) / (60 * 60 * 1000)),
            minutes: Math.floor((difference % (60 * 60 * 1000)) / (60 * 1000)),
            seconds: Math.floor((difference % (60 * 1000)) / 1000)
        };
    }

    function calculateProgress(current, start, end) {
        const currentTime = new Date(current).getTime();
        const startTime = new Date(start).getTime();
        const endTime = new Date(end).getTime();
        if (![currentTime, startTime, endTime].every(Number.isFinite) || endTime <= startTime) {
            throw new TypeError('进度时间范围无效');
        }
        return Math.min(100, Math.max(0, ((currentTime - startTime) / (endTime - startTime)) * 100));
    }

    return { createYearConfig, calculateRemaining, calculateProgress };
}));
