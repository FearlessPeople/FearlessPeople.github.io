(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{465:function(o,a,e){"use strict";e.r(a);var t=e(10),r=Object(t.a)({},(function(){var o=this,a=o.$createElement,e=o._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[e("p",[e("img",{attrs:{src:"https://hadoop.apache.org/hadoop-logo.jpg",alt:""}})]),o._v(" "),e("h2",{attrs:{id:"hadoop是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hadoop是什么"}},[o._v("#")]),o._v(" Hadoop是什么")]),o._v(" "),e("p",[e("img",{attrs:{src:"/img/BigData/Hadoop/006tNc79ly1fz7nlb9q5xj30bd03cdfy.jpg",alt:"img"}})]),o._v(" "),e("p",[o._v("Apache™ Hadoop® 项目为可靠、可扩展的分布式计算开发开源软件。")]),o._v(" "),e("p",[o._v("Apache Hadoop 是一个框架,它允许使用简单的编程模型跨计算机集群分布式处理大型数据集。它旨在从单个服务器扩展到数千台机器，每台机器都提供本地计算和存储。库本身不是依靠硬件来提供高可用性，而是设计用于检测和处理应用层的故障，因此在计算机集群之上提供高可用性服务，每台计算机都可能容易出现故障。")]),o._v(" "),e("h2",{attrs:{id:"hadoop核心模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hadoop核心模块"}},[o._v("#")]),o._v(" Hadoop核心模块")]),o._v(" "),e("ol",[e("li",[o._v("Hadoop Common：支持其他 Hadoop 模块的通用实用程序。")]),o._v(" "),e("li",[o._v("Hadoop 分布式文件系统 (HDFS™)：一种分布式文件系统，可提供对应用程序数据的高吞吐量访问。")]),o._v(" "),e("li",[o._v("Hadoop YARN：作业调度和集群资源管理的框架。")]),o._v(" "),e("li",[o._v("Hadoop MapReduce：基于 YARN 的系统，用于并行处理大型数据集。")])]),o._v(" "),e("h2",{attrs:{id:"hadoop的起源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hadoop的起源"}},[o._v("#")]),o._v(" Hadoop的起源")]),o._v(" "),e("p",[o._v("2003-2004年，Google公布了部分GFS和MapReduce思想的细节，受此启发的Doug Cutting等人用2年的业余时间实现了DFS和MapReduce机制，使Nutch性能飙升。然后Yahoo招安Doug Gutting及其项目。\n2005年，Hadoop作为Lucene的子项目Nutch的一部分正式引入Apache基金会。\n2006年2月被分离出来，成为一套完整独立的软件，起名为Hadoop\n"),e("strong",[o._v("Hadoop名字不是一个缩写，而是一个生造出来的词。是Hadoop之父Doug Cutting儿子毛绒玩具象命名的。")]),o._v("\nHadoop的成长过程\nLucene--\x3eNutch---\x3eHadoop")]),o._v(" "),e("p",[o._v("总结起来，Hadoop起源于Google的三大论文\nGFS：Google的分布式文件系统Google File System\nMapReduce：Google的MapReduce开源分布式并行计算框架\nBigTable：一个大型的分布式数据库")]),o._v(" "),e("p",[e("strong",[o._v("演变关系")]),o._v("\nGFS----\x3eHDFS\nGoogle MapReduce----\x3eHadoop MapReduce\nBigTable----\x3eHBase")]),o._v(" "),e("h2",{attrs:{id:"hadoop发展史"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hadoop发展史"}},[o._v("#")]),o._v(" Hadoop发展史")]),o._v(" "),e("p",[e("strong",[o._v("Hadoop大事记")])]),o._v(" "),e("ul",[e("li",[o._v("2004年— 最初的版本(现在称为HDFS和MapReduce)由Doug Cutting和Mike Cafarella开始实施。")]),o._v(" "),e("li",[o._v("2005年12月— Nutch移植到新的框架，Hadoop在20个节点上稳定运行。")]),o._v(" "),e("li",[o._v("2006年1月— Doug Cutting加入雅虎。")]),o._v(" "),e("li",[o._v("2006年2月— Apache Hadoop项目正式启动以支持MapReduce和HDFS的独立发展。")]),o._v(" "),e("li",[o._v("2006年2月— 雅虎的网格计算团队采用Hadoop。")]),o._v(" "),e("li",[o._v("2006年4月— 标准排序(10 GB每个节点)在188个节点上运行47.9个小时。")]),o._v(" "),e("li",[o._v("2006年5月— 雅虎建立了一个300个节点的Hadoop研究集群。")]),o._v(" "),e("li",[o._v("2006年5月— 标准排序在500个节点上运行42个小时(硬件配置比4月的更好)。")]),o._v(" "),e("li",[o._v("2006年11月— 研究集群增加到600个节点。")]),o._v(" "),e("li",[o._v("2006年12月— 标准排序在20个节点上运行1.8个小时，100个节点3.3小时，500个节点5.2小时，900个节点7.8个小时。")]),o._v(" "),e("li",[o._v("2007年1月— 研究集群到达900个节点。")]),o._v(" "),e("li",[o._v("2007年4月— 研究集群达到两个1000个节点的集群。")]),o._v(" "),e("li",[o._v("2008年4月— 赢得世界最快1TB数据排序在900个节点上用时209秒。")]),o._v(" "),e("li",[o._v("2008年7月— 雅虎测试节点增加到4000个")]),o._v(" "),e("li",[o._v("2008年9月— Hive成为Hadoop的子项目")]),o._v(" "),e("li",[o._v("2008年11月— Google宣布其MapReduce用68秒对1TB的程序进行排序")]),o._v(" "),e("li",[o._v("2008年10月— 研究集群每天装载10TB的数据。")]),o._v(" "),e("li",[o._v("2008年— 淘宝开始投入研究基于Hadoop的系统--云梯。云梯总容量约9.3PB，共有1100台机器，每天处理18000道作业，扫描500TB数据。")]),o._v(" "),e("li",[o._v("2009年3月— 17个集群总共24 000台机器。")]),o._v(" "),e("li",[o._v("2009年3月— Cloudera推出CDH（Cloudera’s Dsitribution Including Apache Hadoop）")]),o._v(" "),e("li",[o._v("2009年4月— 赢得每分钟排序，雅虎59秒内排序500 GB(在1400个节点上)和173分钟内排序100 TB数据(在3400个节点上)。")]),o._v(" "),e("li",[o._v("2009年5月— Yahoo的团队使用Hadoop对1 TB的数据进行排序只花了62秒时间。")]),o._v(" "),e("li",[o._v("2009年7月— Hadoop Core项目更名为Hadoop Common;")]),o._v(" "),e("li",[o._v("2009年7月— MapReduce 和 Hadoop Distributed File System (HDFS) 成为Hadoop项目的独立子项目。")]),o._v(" "),e("li",[o._v("2009年7月— Avro 和 Chukwa 成为Hadoop新的子项目。")]),o._v(" "),e("li",[o._v("2009年9月— 亚联BI团队开始跟踪研究Hadoop")]),o._v(" "),e("li",[o._v("2009年12月—亚联提出橘云战略，开始研究Hadoop")]),o._v(" "),e("li",[o._v("2010年5月— Avro脱离Hadoop项目，成为Apache顶级项目。")]),o._v(" "),e("li",[o._v("2010年5月— HBase脱离Hadoop项目，成为Apache顶级项目。")]),o._v(" "),e("li",[o._v("2010年5月— IBM提供了基于Hadoop 的大数据分析软件——InfoSphere BigInsights，包括基础版和企业版。")]),o._v(" "),e("li",[o._v("2010年9月— Hive( Facebook) 脱离Hadoop，成为Apache顶级项目。")]),o._v(" "),e("li",[o._v("2010年9月— Pig脱离Hadoop，成为Apache顶级项目。")]),o._v(" "),e("li",[o._v("2011年1月— ZooKeeper 脱离Hadoop，成为Apache顶级项目。")]),o._v(" "),e("li",[o._v("2011年3月— Apache Hadoop获得Media Guardian Innovation Awards 。")]),o._v(" "),e("li",[o._v("2011年3月— Platform Computing 宣布在它的Symphony软件中支持Hadoop MapReduce API。")]),o._v(" "),e("li",[o._v("2011年5月— Mapr Technologies公司推出分布式文件系统和MapReduce引擎——MapR Distribution for Apache Hadoop。")]),o._v(" "),e("li",[o._v("2011年5月— HCatalog 1.0发布。该项目由Hortonworks 在2010年3月份提出，HCatalog主要用于解决数据存储、元数据的问题，主要解决HDFS的瓶颈，它提供了一个地方来存储数据的状态信息，这使得 数据清理和归档工具可以很容易的进行处理。")]),o._v(" "),e("li",[o._v("2011年4月— SGI( Silicon Graphics International )基于SGI Rackable和CloudRack服务器产品线提供Hadoop优化的解决方案。")]),o._v(" "),e("li",[o._v("2011年5月— EMC为客户推出一种新的基于开源Hadoop解决方案的数据中心设备——GreenPlum HD，以助其满足客户日益增长的数据分析需求并加快利用开源数据分析软件。Greenplum是EMC在2010年7月收购的一家开源数据仓库公司。")]),o._v(" "),e("li",[o._v("2011年5月— 在收购了Engenio之后， NetApp推出与Hadoop应用结合的产品E5400存储系统。")]),o._v(" "),e("li",[o._v("2011年6月— Calxeda公司(之前公司的名字是Smooth-Stone)发起了“开拓者行动”，一个由10家软件公司组成的团队将为基于Calxeda即将推出的ARM系统上芯片设计的服务器提供支持。并为Hadoop提供低功耗服务器技术。")]),o._v(" "),e("li",[o._v("2011年6月— 数据集成供应商Informatica发布了其旗舰产品，产品设计初衷是处理当今事务和社会媒体所产生的海量数据，同时支持- Hadoop。")]),o._v(" "),e("li",[o._v("2011年7月— Yahoo!和硅谷风险投资公司 Benchmark Capital创建了Hortonworks 公司，旨在让Hadoop更加鲁棒(可靠)，并让企业用户更容易安装、管理和使用Hadoop。")]),o._v(" "),e("li",[o._v("2011年8月— Cloudera公布了一项有益于合作伙伴生态系统的计划——创建一个生态系统，以便硬件供应商、软件供应商以及系统集成商可以一起- 探索如何使用Hadoop更好的洞察数据。")]),o._v(" "),e("li",[o._v("2011年8月— Dell与Cloudera联合推出Hadoop解决方案——Cloudera Enterprise。Cloudera Enterprise基于Dell PowerEdge - C2100机架服务器以及Dell PowerConnect 6248以太网交换机")])]),o._v(" "),e("h2",{attrs:{id:"hadoop的四大特性-优点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hadoop的四大特性-优点"}},[o._v("#")]),o._v(" Hadoop的四大特性（优点）")]),o._v(" "),e("ol",[e("li",[e("strong",[o._v("扩容能力（Scalable）")]),o._v("：Hadoop是在可用的计算机集群间分配数据并完成计算任务的，这些集群可用方便的扩展到数以千计个节点中。")]),o._v(" "),e("li",[e("strong",[o._v("成本低（Economical）")]),o._v("：Hadoop通过普通廉价的机器组成服务器集群来分发以及处理数据，以至于成本很低。")]),o._v(" "),e("li",[e("strong",[o._v("高效率（Efficient）")]),o._v("：通过并发数据，Hadoop可以在节点之间动态并行的移动数据，使得速度非常快。")]),o._v(" "),e("li",[e("strong",[o._v("可靠性（Rellable）")]),o._v("：能自动维护数据的多份复制，并且在任务失败后能自动地重新部署（redeploy）计算任务。所以Hadoop的按位存储和处理数据的能力值得人们信赖。")])]),o._v(" "),e("h2",{attrs:{id:"hadoop的版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hadoop的版本"}},[o._v("#")]),o._v(" Hadoop的版本")]),o._v(" "),e("p",[o._v("Hadoop的版本很特殊，是由多条分支并行的发展着。\n1.x：该版本是由"),e("strong",[o._v("0.20.x")]),o._v("发行版系列的延续\n2.x：该版本是由"),e("strong",[o._v("0.23.x")]),o._v("发行版系列的延续\n其实Hadoop也就两个版本1.x和2.x\nHadoop1.x 指的是：1.x(0.20.x)、0.21、0.22\nHadoop2.x 指的是：2.x、0.23.x\n"),e("strong",[o._v("注意：高版本不一定包含低版本的特性")])]),o._v(" "),e("p",[o._v("董的博客中也解释了各个版本的问题：\n"),e("a",{attrs:{href:"http://dongxicheng.org/mapreduce-nextgen/how-to-select-hadoop-versions/",target:"_blank",rel:"noopener noreferrer"}},[o._v("Hadoop版本选择探讨"),e("OutboundLink")],1),o._v(" "),e("a",{attrs:{href:"http://dongxicheng.org/mapreduce-nextgen/hadoop-2-0-terms-explained/",target:"_blank",rel:"noopener noreferrer"}},[o._v("Hadoop 2.0中的基本术语解释"),e("OutboundLink")],1)]),o._v(" "),e("p",[e("strong",[o._v("Hadoop版本演变图")]),o._v("\n红色：表示企业中用的最多的实际生产版本\n绿色：表示企业中用的最多的alpha版本\n"),e("img",{attrs:{src:"/img/BigData/Hadoop/006tNc79ly1fz7nlc8l2uj30j00btq3q.jpg",alt:"img"}}),o._v(" "),e("img",{attrs:{src:"/img/BigData/Hadoop/006tNc79ly1fz7nla75m3j30f20bw3zv.jpg",alt:"img"}})]),o._v(" "),e("h2",{attrs:{id:"如何选择hadoop版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何选择hadoop版本"}},[o._v("#")]),o._v(" 如何选择Hadoop版本")]),o._v(" "),e("p",[o._v("当前Hadoop版本比较混乱，让很多用户不知所措。实际上，当前Hadoop只有两个版本：Hadoop 1.0和Hadoop 2.0，其中，Hadoop 1.0由一个分布式文件系统HDFS和一个离线计算框架MapReduce组成，而Hadoop 2.0则包含一个支持NameNode横向扩展的HDFS，一个资源管理系统YARN和一个运行在YARN上的离线计算框架MapReduce。相比于Hadoop 1.0，Hadoop 2.0功能更加强大，且具有更好的扩展性、性能，并支持多种计算框架。\n当我们决定是否采用某个软件用于开源环境时，通常需要考虑以下几个因素：")]),o._v(" "),e("ol",[e("li",[o._v("是否为开源软件，即是否免费。")]),o._v(" "),e("li",[o._v("是否有稳定版，这个一般软件官方网站会给出说明。")]),o._v(" "),e("li",[o._v("是否经实践验证，这个可通过检查是否有一些大点的公司已经在生产环境中使用知道。")]),o._v(" "),e("li",[o._v("是否有强大的社区支持，当出现一个问题时，能够通过社区、论坛等网络资源快速获取解决方法。")])]),o._v(" "),e("p",[o._v("摘自"),e("a",{attrs:{href:"http://dongxicheng.org/",target:"_blank",rel:"noopener noreferrer"}},[o._v("董的博客"),e("OutboundLink")],1)]),o._v(" "),e("h2",{attrs:{id:"hadoop生态系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hadoop生态系统"}},[o._v("#")]),o._v(" Hadoop生态系统")]),o._v(" "),e("p",[o._v("当今的Hadoop已经成长为一个庞大的体系，只要有和海量数据相关的领域。都有Hadoop的身影。\n"),e("strong",[o._v("Hadoop生态系统图谱")]),o._v(" "),e("center",[e("img",{attrs:{src:"/img/BigData/Hadoop/006tNc79ly1fz7nez9hccj30fs0b7tg1.jpg"}}),o._v(" "),e("br"),o._v(" "),e("div",{staticClass:"imgtext"},[o._v("Hadoop生态系统图谱")]),o._v(" "),e("br")]),o._v("\n大家知道，Hadoop的两大核心就是HDFS和MapReduce，而整个Hadoop的体系结构主要是通过HDFS的分布式存储作为底层数据支持的。并且会通过MapReduce来进行计算分析。")],1),o._v(" "),e("p",[e("strong",[o._v("Hadoop1.x的核心：")])]),o._v(" "),e("ol",[e("li",[o._v("Hadoop Common")]),o._v(" "),e("li",[o._v("Hadoop Distributed File System（HDFS）")]),o._v(" "),e("li",[o._v("Hadoop MapReduce")])]),o._v(" "),e("center",[e("img",{attrs:{src:"/img/BigData/Hadoop/006tNc79ly1fz7nfabg1ej30ks0ag437.jpg"}}),o._v(" "),e("br"),o._v(" "),e("div",{staticClass:"imgtext"},[o._v("Hadoop1.x 生态系统图")]),o._v(" "),e("br")]),o._v(" "),e("p",[e("strong",[o._v("Hadoop2.x的核心：")])]),o._v(" "),e("ol",[e("li",[o._v("Hadoop Common")]),o._v(" "),e("li",[o._v("Hadoop Distributed File System（HDFS）")]),o._v(" "),e("li",[o._v("Hadoop MapReduce")]),o._v(" "),e("li",[o._v("Hadoop YARN")])]),o._v(" "),e("center",[e("img",{attrs:{src:"/img/BigData/Hadoop/006tNc79ly1fz7nfkw99wj30rh0ew7f7.jpg"}}),o._v(" "),e("br"),o._v(" "),e("div",{staticClass:"imgtext"},[o._v("Hadoop2.x 生态系统图")]),o._v(" "),e("br")]),o._v(" "),e("h2",{attrs:{id:"hadoop1-x-的各项目介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hadoop1-x-的各项目介绍"}},[o._v("#")]),o._v(" Hadoop1.x 的各项目介绍")]),o._v(" "),e("h3",{attrs:{id:"_1-hdfs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-hdfs"}},[o._v("#")]),o._v(" 1. HDFS")]),o._v(" "),e("p",[o._v("分布式文件系统，将一个文件分成多个块，分别存储(拷贝)到不同的节点上.它是Hadoop体系中"),e("font",{staticStyle:{color:"red","font-weight":"bold"}},[o._v("数据存储管理")]),o._v("的基础。它是一个高度容错的系统，能检测和应对硬件故障，用于在低成本的通用硬件上运行。HDFS简化了文件的一致性模型，通过流式数据访问，提供高吞吐量应用程序数据访问功能，适合带有大型数据集的应用程序。")],1),o._v(" "),e("h3",{attrs:{id:"_2-mapreduce"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-mapreduce"}},[o._v("#")]),o._v(" 2. MapReduce")]),o._v(" "),e("p",[o._v("分布式计算框架，它是一种分布式计算处理模型和执行环境，用于进行"),e("font",{staticStyle:{color:"red","font-weight":"bold"}},[o._v("大数据量的计算")]),o._v("。共包括Map和Reduce部分。其中Map接受一个键值对（key-value），产生一组中间键值对。MapReduce框架会将map函数产生的中间键值对里键相同的值传递给一个reduce函数。Reduce函数：接受一个键，以及相关的一组值，将这组值进行合并产生一组规模更小的值（通常只有一个或零个值）。")],1),o._v(" "),e("h3",{attrs:{id:"_3-hive"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-hive"}},[o._v("#")]),o._v(" 3. "),e("a",{attrs:{href:"http://hive.apache.org/",title:"Data warehouse infrastructure using the Apache Hadoop Database",target:"_blank",rel:"noopener noreferrer"}},[o._v("Hive"),e("OutboundLink")],1)]),o._v(" "),e("p",[o._v("基于Hadoop的"),e("font",{staticStyle:{color:"red","font-weight":"bold"}},[o._v("数据仓库工具")]),o._v("，可以将结构化的数据文件映射为一张数据库表，并提供类似SQL一样的查询语言HiveQL来管理这些数据。Hive定义了一种类似SQL的查询语言(HQL),"),e("font",{staticStyle:{color:"red","font-weight":"bold"}},[o._v("将SQL转化为MapReduce任务在Hadoop上执行")]),o._v("。通常用于离线分析。")],1),o._v(" "),e("h3",{attrs:{id:"_4-pig"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-pig"}},[o._v("#")]),o._v(" 4. "),e("a",{attrs:{href:"http://pig.apache.org/",title:"Platform for analyzing large data sets",target:"_blank",rel:"noopener noreferrer"}},[o._v("Pig"),e("OutboundLink")],1)]),o._v(" "),e("p",[o._v("Pig是一个基于Hadoop的大数据分析平台，它提供了一个叫PigLatin的高级语言来表达大数据分析程序，"),e("font",{staticStyle:{color:"red","font-weight":"bold"}},[o._v("将脚本转换为MapReduce任务在Hadoop上执行")]),o._v("。通常用于进行离线分析。")],1),o._v(" "),e("h3",{attrs:{id:"_5-mahout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-mahout"}},[o._v("#")]),o._v(" 5. "),e("a",{attrs:{href:"http://mahout.apache.org/",title:"Scalable machine learning library",target:"_blank",rel:"noopener noreferrer"}},[o._v("Mahout"),e("OutboundLink")],1)]),o._v(" "),e("p",[o._v("数据挖掘算法库，Mahout起源于2008年，最初是Apache Lucent的子项目，它在极短的时间内取得了长足的发展，现在是Apache的顶级项目。Mahout的主要目标是创建一些可扩展的机器学习领域经典算法的实现，旨在帮助开发人员更加方便快捷地创建智能应用程序。Mahout现在已经包含了聚类、分类、推荐引擎（协同过滤）和频繁集挖掘等广泛使用的数据挖掘方法。除了算法，Mahout还包含数据的输入/输出工具、与其他存储系统（如数据库、MongoDB 或Cassandra）集成等数据挖掘支持架构。")]),o._v(" "),e("h3",{attrs:{id:"_6-zookeeper"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-zookeeper"}},[o._v("#")]),o._v(" 6. "),e("a",{attrs:{href:"http://zookeeper.apache.org/",title:"Centralized service for maintaining configuration information",target:"_blank",rel:"noopener noreferrer"}},[o._v("ZooKeeper"),e("OutboundLink")],1)]),o._v(" "),e("p",[o._v("分布式协作服务，是一个针对大型分布式系统的可靠协调系统，提供包括配置维护，名字服务，分布式同步和组服务等功能。"),e("font",{staticStyle:{color:"red","font-weight":"bold"}},[o._v("Hadoop的管理就是用的ZooKeeper")])],1),o._v(" "),e("h3",{attrs:{id:"_7-hbase"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-hbase"}},[o._v("#")]),o._v(" 7. "),e("a",{attrs:{href:"http://hbase.apache.org/",title:"Apache Hadoop Database",target:"_blank",rel:"noopener noreferrer"}},[o._v("HBase"),e("OutboundLink")],1)]),o._v(" "),e("p",[o._v("HBase是一个"),e("font",{staticStyle:{color:"red","font-weight":"bold"}},[o._v("分布式列存数据库")]),o._v("，它基于Hadoop之上提供了类似BigTable的功能。HBase是一个针对结构化数据的"),e("strong",[o._v("可伸缩、高可靠、高性能、分布式和面向列的动态模式数据库")]),o._v("。和传统关系数据库不同，HBase采用了BigTable的数据模型：增强的稀疏排序映射表（Key/Value），其中，键由行关键字、列关键字和时间戳构成。HBase提供了对大规模数据的随机、实时读写访问，同时，HBase中保存的数据可以使用MapReduce来处理，它将数据存储和并行计算完美地结合在一起。")],1),o._v(" "),e("h3",{attrs:{id:"_8-sqoop"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-sqoop"}},[o._v("#")]),o._v(" 8. "),e("a",{attrs:{href:"http://sqoop.apache.org/",title:"Bulk Data Transfer for Apache Hadoop and Structured Datastores",target:"_blank",rel:"noopener noreferrer"}},[o._v("Sqoop"),e("OutboundLink")],1)]),o._v(" "),e("p",[o._v("数据同步工具，SQL-to-Hadoop的缩写。Sqoop是一个Hadoop和关系型数据库之间的数据转移工具。"),e("font",{staticStyle:{color:"red","font-weight":"bold"}},[o._v("可将关系型数据库中的数据导入到Hadoop的HDFS中，也可将HDFS中的数据导进到关系型数据库中")]),o._v("主要用于传统数据库和Hadoop之前传输数据。数据的导入和导出本质上是Mapreduce程序，充分利用了MR的并行化和容错性。")],1),o._v(" "),e("h3",{attrs:{id:"_9-flume"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-flume"}},[o._v("#")]),o._v(" 9. "),e("a",{attrs:{href:"http://flume.apache.org/",title:"A reliable service for efficiently collecting, aggregating, and moving large amounts of log data",target:"_blank",rel:"noopener noreferrer"}},[o._v("Flume"),e("OutboundLink")],1)]),o._v(" "),e("p",[o._v("日志收集工具，Cloudera开源的日志收集系统，具有分布式、高可靠、高容错、易于定制和扩展的特点。它将数据从产生、传输、处理并最终写入目标的路径的过程抽象为数据流，在具体的数据流中，数据源支持在Flume中定制数据发送方，从而支持收集各种不同协议数据。同时，Flume数据流提供对日志数据进行简单处理的能力，如过滤、格式转换等。此外，Flume还具有能够将日志写往各种数据目标（可定制）的能力。总的来说，Flume是一个可扩展、适合复杂环境的海量日志收集系统。")]),o._v(" "),e("h3",{attrs:{id:"_10-ambari"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-ambari"}},[o._v("#")]),o._v(" 10. "),e("a",{attrs:{href:"http://ambari.apache.org/",title:"Hadoop cluster management",target:"_blank",rel:"noopener noreferrer"}},[o._v("Ambari"),e("OutboundLink")],1)]),o._v(" "),e("p",[o._v("是一个对Hadoop集群进行监控和管理的基于Web的系统。目前已经支持HDFS，MapReduce，Hive，HCatalog，HBase，ZooKeeper，Oozie，Pig和Sqoop等组件。")])],1)}),[],!1,null,null,null);a.default=r.exports}}]);