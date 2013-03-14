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

获取 `domain_id` , `record_id` 和 `sub_domain` 的方法：

### 方法一，通过浏览器的开发者工具

登录 dnspod ，进入相应域名的管理界面，编辑你想设置动态域名的那个条目

![编辑条目](http://www.bnlt.org/images/dnspod-ddns-node-lite/ddns.jpg)

打开浏览器的开发者工具（现在的浏览器多数有类似功能，此处以 Chrome 为例），然后点击上图中的保存按钮，你会在网络页卡看到一条新的记录

![请求记录](http://www.bnlt.org/images/dnspod-ddns-node-lite/network.jpg)

点击这条记录打开它的详情，在 header 页卡里

![请求头](http://www.bnlt.org/images/dnspod-ddns-node-lite/form-data.jpg)

你能找到 `domain_id` , `record_id` 和 `sub_domain` 。

### 方法二，使用 curl 访问 dnspod 的接口 (此方法来自 <https://gist.github.com/chuangbo/833369>)

获得 `domain_id`

    curl -k https://dnsapi.cn/Domain.List -d "login_email=xxx&login_password=xxx"

获得 `record_id`
    
    curl -k https://dnsapi.cn/Record.List -d "login_email=xxx&login_password=xxx&domain_id=xxx"

## 使用

执行下面的命令可以立刻更新一次域名信息

    ./ddns.js
    
如果需要定时执行，可以写入 crontab ，下面是每 10 分钟执行一次的示例

    */10 * * * * /path/of/ddns.js

## Released under the MIT license
