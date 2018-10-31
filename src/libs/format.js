define(() => {
    return function formatTime(time, format) {
        if (!time) {
            return '';
        }
        if (typeof time === 'string') {
            time = time.toString().replace(/-/g, '/'); // ios下new Date(2016-10-31)报错:invalid date...要改为: 2016/10/31样式
        }
        if (typeof time === 'number' && (time.toString().length) === 10) {
            time = parseInt(time + '000');
        }
        // 过去
        var stamp = new Date(time),
            cur = new Date(),
            year = stamp.getFullYear(),
            month = (stamp.getMonth() + 1) > 9 ? (stamp.getMonth() + 1) : '0' + (stamp.getMonth() + 1),
            day = stamp.getDate() > 9 ? stamp.getDate() : '0' + stamp.getDate(),
            hour = stamp.getHours() > 9 ? stamp.getHours() : '0' + stamp.getHours(),
            minute = stamp.getMinutes() > 9 ? stamp.getMinutes() : '0' + stamp.getMinutes(),
            sec = stamp.getSeconds() > 9 ? stamp.getSeconds() : '0' + stamp.getSeconds(),
            ms = stamp.getMilliseconds() < 100 ? '0' + (stamp.getMilliseconds() < 10 ? '0' + stamp.getMilliseconds() : stamp.getMilliseconds()) : stamp.getMilliseconds(),
            weeks = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
            week = weeks[stamp.getDay()];
        if (format) {
            format = format.replace('yyyy', year);
            format = format.replace('MM', month);
            format = format.replace('dd', day);
            format = format.replace('hh', hour);
            format = format.replace('mm', minute);
            format = format.replace('ss', sec);
            format = format.replace('ms', ms);

            if (year === cur.getFullYear() && stamp.getMonth() === cur.getMonth() && stamp.getDate() === cur.getDate()) {
                week = '今天';
            }
            format = format.replace('week', week);
        } else {
            format = year + '-' + month + '-' + day + ' ' + hour + ':' + minute;
        }

        return format;
    };
})