(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{475:function(s,t,a){"use strict";a.r(t);var e=a(10),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-hive的几种内置服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-hive的几种内置服务"}},[s._v("#")]),s._v(" 1. Hive的几种内置服务")]),s._v(" "),a("p",[s._v("执行"),a("code",[s._v("bin/hive --service help")]),s._v("如下：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("master@master1 hive"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ bin/hive --service "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v("\nUsage ./hive "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("parameters"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" --service serviceName "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("service parameters"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nService List: beeline cli "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" hiveburninclient hiveserver2 hiveserver hwi jar lineage metastore metatool orcfiledump rcfilecat schemaTool version \nParameters parsed:\n  --auxpath "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" Auxillary jars \n  --config "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" Hive configuration directory\n  --service "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" Starts specific service/component. cli is default\nParameters used:\n  HADOOP_HOME or HADOOP_PREFIX "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" Hadoop "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" directory\n  HIVE_OPT "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" Hive options\nFor "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" on a particular service:\n  ./hive --service serviceName --help\nDebug help:  ./hive --debug --help\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("我们可以看到上边输出项Server List，里边显示出Hive支持的服务列表，")]),s._v(" "),a("ul",[a("li",[s._v("beeline")]),s._v(" "),a("li",[s._v("cli help")]),s._v(" "),a("li",[s._v("hiveserver2")]),s._v(" "),a("li",[s._v("hiveserver")]),s._v(" "),a("li",[s._v("hwi")]),s._v(" "),a("li",[s._v("jar")]),s._v(" "),a("li",[s._v("lineage")]),s._v(" "),a("li",[s._v("metastore")]),s._v(" "),a("li",[s._v("metatool")]),s._v(" "),a("li",[s._v("orcfiledump")]),s._v(" "),a("li",[s._v("rcfilecat")])]),s._v(" "),a("p",[a("strong",[s._v("下面介绍最有用的一些服务")])]),s._v(" "),a("ol",[a("li",[a("p",[s._v("cli：是Command Line Interface 的缩写，是Hive的命令行界面，用的比较多，是默认服务，直接可以在命令行里使用")])]),s._v(" "),a("li",[a("p",[s._v("hiveserver：这个可以让Hive以提供Thrift服务的服务器形式来运行，可以允许许多个不同语言编写的客户端进行通信，使用需要启动HiveServer服务以和客户端联系，我们可以通过设置HIVE_PORT环境变量来设置服务器所监听的端口，在默认情况下，端口号为10000，这个可以通过以下方式来启动Hiverserver：")]),s._v(" "),a("p",[a("code",[s._v("bin/hive --service hiveserver -p 10002")])]),s._v(" "),a("p",[s._v("其中-p参数也是用来指定监听端口的")])]),s._v(" "),a("li",[a("p",[s._v("hwi：其实就是hive web interface的缩写它是hive的web借口，是hive cli的一个web替代方案")])]),s._v(" "),a("li",[a("p",[s._v("jar：与hadoop jar等价的Hive接口，这是运行类路径中同时包含Hadoop 和Hive类的Java应用程序的简便方式")])]),s._v(" "),a("li",[a("p",[s._v("metastore：在默认的情况下，metastore和hive服务运行在同一个进程中，使用这个服务，可以让metastore作为一个单独的进程运行，我们可以通过METASTOE——PORT来指定监听的端口号")])])]),s._v(" "),a("h2",{attrs:{id:"_2-hive的三种启动方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-hive的三种启动方式"}},[s._v("#")]),s._v(" 2. Hive的三种启动方式")]),s._v(" "),a("h3",{attrs:{id:"_2-1-hive-命令行模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-hive-命令行模式"}},[s._v("#")]),s._v(" 2.1 hive  命令行模式")]),s._v(" "),a("p",[s._v("​进入hive安装目录，输入"),a("code",[s._v("bin/hive")]),s._v("的执行程序，或者输入 "),a("code",[s._v("hive –service cli")])]),s._v(" "),a("p",[s._v("​用于linux平台命令行查询，查询语句基本跟mysql查询语句类似")]),s._v(" "),a("h3",{attrs:{id:"_2-2-hive-web界面的启动方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-hive-web界面的启动方式"}},[s._v("#")]),s._v(" 2.2 hive  web界面的启动方式")]),s._v(" "),a("p",[s._v("​"),a("code",[s._v("bin/hive –service hwi &")]),s._v(" （& 表示后台运行）")]),s._v(" "),a("p",[s._v("​用于通过浏览器来访问hive，感觉没多大用途，浏览器访问地址是："),a("a",{attrs:{href:"http://127.0.0.1:9999/hwi",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://127.0.0.1:9999/hwi"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"_2-3-hive-远程服务-端口号10000-启动方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-hive-远程服务-端口号10000-启动方式"}},[s._v("#")]),s._v(" 2.3 hive  远程服务 (端口号10000) 启动方式")]),s._v(" "),a("p",[a("code",[s._v("bin/hive –service hiveserver2 &")]),s._v("（&表示后台运行）")]),s._v(" "),a("p",[s._v("​用java，python等程序实现通过jdbc等驱动的访问hive就用这种起动方式了，这个是程序员最需要的方式了")]),s._v(" "),a("h2",{attrs:{id:"_3-hiveserver-hiveserver2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-hiveserver-hiveserver2"}},[s._v("#")]),s._v(" 3. hiveServer/HiveServer2")]),s._v(" "),a("h3",{attrs:{id:"_3-1-简单介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-简单介绍"}},[s._v("#")]),s._v(" 3.1 简单介绍")]),s._v(" "),a("p",[s._v("两者都允许远程客户端使用多种编程语言，通过HiveServer或者HiveServer2，客户端可以在不启动CLI的情况下对Hive中的数据进行操作，连这个和都允许远程客户端使用多种编程语言如java，python等向hive提交请求，取回结果（从hive0.15起就不再支持hiveserver了），但是在这里我们还是要说一下hiveserver")]),s._v(" "),a("p",[s._v("HiveServer或者HiveServer2都是基于Thrift的，但HiveSever有时被称为Thrift server，而HiveServer2却不会。既然已经存在HiveServer，为什么还需要HiveServer2呢？这是因为HiveServer不能处理多于一个客户端的并发请求，这是由于HiveServer使用的Thrift接口所导致的限制，不能通过修改HiveServer的代码修正。因此在Hive-0.11.0版本中重写了HiveServer代码得到了HiveServer2，进而解决了该问题。HiveServer2支持多客户端的并发和认证，为开放API客户端如JDBC、ODBC提供更好的支持。")]),s._v(" "),a("h3",{attrs:{id:"_3-2-两者的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-两者的区别"}},[s._v("#")]),s._v(" 3.2 两者的区别")]),s._v(" "),a("p",[s._v("Hiveserver1 和hiveserver2的JDBC区别：")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("HiveServer version")]),s._v(" "),a("th",[s._v("Connection URL")]),s._v(" "),a("th",[s._v("Driver Class")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("HiveServer2")]),s._v(" "),a("td",[s._v("jdbc:hive2://:")]),s._v(" "),a("td",[s._v("org.apache.hive.jdbc.HiveDriver")])]),s._v(" "),a("tr",[a("td",[s._v("HiveServer1")]),s._v(" "),a("td",[s._v("jdbc:hive://:")]),s._v(" "),a("td",[s._v("org.apache.hadoop.hive.jdbc.HiveDriver")])])])]),s._v(" "),a("h2",{attrs:{id:"_4-学习hiveserver和hiveserver2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-学习hiveserver和hiveserver2"}},[s._v("#")]),s._v(" 4. 学习HiveServer和HiveServer2")]),s._v(" "),a("h3",{attrs:{id:"_4-1-hiveserver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-hiveserver"}},[s._v("#")]),s._v(" 4.1 "),a("strong",[s._v("HiveServer")])]),s._v(" "),a("p",[s._v("在命令行输入"),a("code",[s._v("hive --service hiveserver –help")]),s._v("查看hiveserver的帮助信息：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("hadoop@hadoop~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ hive --service hiveserver --help\nStarting Hive Thrift Server\nusage:hiveserver\n-h,--help                        Print "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" information\n    --hiveconf "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("property"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("   Use value "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" given property\n    --maxWorkerThreads "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("arg"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("      maximum number of worker threads,\n                                 default:2147483647\n    --minWorkerThreads "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("arg"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("      minimum number of worker threads,\n                                  default:100\n-p "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("                        Hive Server portnumber, default:10000\n-v,--verbose                     Verbose mode\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("启动hiveserver服务，可以得知默认hiveserver运行在端口10000，最小100工作线程，最大2147483647工作线程。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("hadoop@hadoop~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ hive --service hiveserver -v\nStarting Hive Thrift Server\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v("/08/01 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":07:09WARN conf.HiveConf: DEPRECATED: hive.metastore.ds.retry.* no longer has anyeffect.  Use hive.hmshandler.retry.*instead\nStarting hive serveron port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),s._v(" with "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" min worker threads and "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2147483647")]),s._v(" maxworker threads\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("以上的hiveserver在hive1.2.1中并不会出现，官网的说法是：")]),s._v(" "),a("p",[s._v("HiveServer is scheduled to be removed from Hive releases starting Hive 0.15. See HIVE-6977. Please switch over to HiveServer2.")]),s._v(" "),a("p",[a("strong",[s._v("4.2 Hiveserver2")])]),s._v(" "),a("p",[s._v("Hiveserver2允许在配置文件"),a("code",[s._v("hive-site.xml")]),s._v("中进行配置管理，具体的参数为：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("hive.server2.thrift.min.worker.threads– 最小工作线程数，默认为5。\nhive.server2.thrift.max.worker.threads – 最小工作线程数，默认为500。\nhive.server2.thrift.port– TCP 的监听端口，默认为10000。\nhive.server2.thrift.bind.host– TCP绑定的主机，默认为localhost\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("也可以设置环境变量HIVE_SERVER2_THRIFT_BIND_HOST和HIVE_SERVER2_THRIFT_PORT覆盖hive-site.xml设置的主机和端口号。从Hive-0.13.0开始，HiveServer2支持通过HTTP传输消息，该特性当客户端和服务器之间存在代理中介时特别有用。与HTTP传输相关的参数如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("hive.server2.transport.mode – 默认值为binary（TCP），可选值HTTP。\nhive.server2.thrift.http.port– HTTP的监听端口，默认值为10001。\nhive.server2.thrift.http.path – 服务的端点名称，默认为 cliservice。\nhive.server2.thrift.http.min.worker.threads– 服务池中的最小工作线程，默认为5。\nhive.server2.thrift.http.max.worker.threads– 服务池中的最小工作线程，默认为500。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("启动Hiveserver2有两种方式，一种是上面已经介绍过的"),a("code",[s._v("hive --service hiveserver2")]),s._v("\n另一种更为简洁,为hiveserver2。使用"),a("code",[s._v("hive--service hiveserver2 –H")]),s._v("或"),a("code",[s._v("hive--service hiveserver2 –help")]),s._v("查看帮助信息：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("Starting HiveServer2\nUnrecognizedoption: -h\nusage:hiveserver2\n-H,--help                        Print "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" information\n--hiveconf "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("property"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("   Use value "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" given property\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("默认情况下，HiveServer2以提交查询的用户执行查询（true），如果hive.server2.enable.doAs设置为false，查询将以运行hiveserver2进程的用户运行。为了防止非加密模式下的内存泄露，可以通过设置下面的参数为true禁用文件系统的缓存：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("fs.hdfs.impl.disable.cache – 禁用HDFS文件系统缓存，默认值为false。\nfs.file.impl.disable.cache – 禁用本地文件系统缓存，默认值为false。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"_5-配置使用hiveserver2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-配置使用hiveserver2"}},[s._v("#")]),s._v(" 5. 配置使用hiveserver2")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("这里（Hive 2.0为例）")])]),s._v(" "),a("p",[s._v("在"),a("code",[s._v("sudo vim hive-site.xml")]),s._v("中修改如下配置")]),s._v(" "),a("h3",{attrs:{id:"_5-1-配置监听端口和路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-配置监听端口和路径"}},[s._v("#")]),s._v(" 5.1 配置监听端口和路径")]),s._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("property")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("hive.server2.thrift.port"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("10000"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("property")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("property")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("hive.server2.thrift.bind.host"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("192.168.48.130"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("property")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"_5-2-设置impersonation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-设置impersonation"}},[s._v("#")]),s._v(" 5.2 设置impersonation")]),s._v(" "),a("p",[s._v("这样hive server会以提交用户的身份去执行语句，如果设置为false，则会以起"),a("code",[s._v("hive server daemon")]),s._v("的admin user来执行语句")]),s._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("property")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("hive.server2.enable.doAs"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("true"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("property")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"_5-3-hiveserver2节点配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-hiveserver2节点配置"}},[s._v("#")]),s._v(" 5.3 hiveserver2节点配置")]),s._v(" "),a("p",[s._v("Hiveserver2已经不再需要"),a("code",[s._v("hive.metastore.local")]),s._v("这个配置项了"),a("code",[s._v("hive.metastore.uris")]),s._v("为空，则表示是metastore在本地，否则就是远程）远程的话直接配置"),a("code",[s._v("hive.metastore.uris")]),s._v("即可")]),s._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("property")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("hive.metastore.uris"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("thrift://xxx.xxx.xxx.xxx:9083"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("Thrift URI for the remote metastore. Used by metastore client to con\nnect to remote metastore."),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("property")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"_5-4-zookeeper配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-zookeeper配置"}},[s._v("#")]),s._v(" 5.4 zookeeper配置")]),s._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("property")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("hive.support.concurrency"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("Enable Hive's Table Lock Manager Service"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("true"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("property")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("property")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("hive.zookeeper.quorum"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("Zookeeper quorum used by Hive's Table Lock Manager"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("master1:2181,slave1:2181,slave2:2181"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("property")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("没有配置"),a("code",[s._v("hive.zookeeper.quorum")]),s._v("会导致无法并发执行"),a("code",[s._v("hive ql")]),s._v("请求和导致数据异常")])]),s._v(" "),a("h3",{attrs:{id:"_5-5-hiveserver2的web-ui配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-5-hiveserver2的web-ui配置"}},[s._v("#")]),s._v(" 5.5 hiveserver2的Web UI配置")]),s._v(" "),a("p",[s._v("Hive 2.0 以后才支持Web UI的，在以前的版本中并不支持")]),s._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("property")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("hive.server2.webui.host"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("192.168.48.130"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("The host address the HiveServer2 WebUI will listen on"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("property")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("property")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("hive.server2.webui.port"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("10002"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("The port the HiveServer2 WebUI will listen on. This can beset to 0 o\n    r a negative integer to disable the web UI"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("property")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h3",{attrs:{id:"_5-6-启动服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-6-启动服务"}},[s._v("#")]),s._v(" 5.6 启动服务")]),s._v(" "),a("ol",[a("li",[s._v("启动metastore")])]),s._v(" "),a("p",[a("code",[s._v("bin/hive --service metastore &")]),s._v("\n默认端口为9083")]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("启动hiveserver2")])]),s._v(" "),a("p",[a("code",[s._v("$HIVE_HOME/bin/hiveserver2")]),s._v("\nOR\n"),a("code",[s._v("$HIVE_HOME/bin/hive --service hiveserver2")])]),s._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[s._v("测试")])]),s._v(" "),a("p",[s._v("Web UI："),a("a",{attrs:{href:"http://192.168.48.130:10002/",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://192.168.48.130:10002/"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);