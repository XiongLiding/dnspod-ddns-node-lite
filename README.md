# dnspod-ddns-node-lite

用来设定 dnspod 动态域名的微型 node 脚本

## 说明

只有一个文件 ddns.js ；只实现一个功能，向 dnspod 的动态域名接口发送一个请求，更新相应的域名解析信息。

## 设置

替换脚本中用星号占位的内容：

- login_email 你登录 dnspod 使用的邮箱
- login_password 你登录 dnspod 使用的密码
- domain_id 域名 id
- record_id 记录 id
- sub_domain 子域名

获取 `domain_id` 和 `record_id` 的方法，可以参考这里 <https://gist.github.com/chuangbo/833369>

## 使用

执行下面的命令可以立刻更新一次域名信息

    ./ddns.js
    
如果需要定时执行，可以写入 crontab ，下面是每 10 分钟执行一次的示例

    */10 * * * * /path/of/ddns.js
