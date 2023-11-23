(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{455:function(a,e,r){"use strict";r.r(e);var s=r(10),n=Object(s.a)({},(function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#运行时组件"}},[a._v("运行时组件")]),r("ul",[r("li",[r("a",{attrs:{href:"#resourcemanager"}},[a._v("ResourceManager")])]),r("li",[r("a",{attrs:{href:"#jobmanager"}},[a._v("JobManager")])]),r("li",[r("a",{attrs:{href:"#taskmanager"}},[a._v("TaskManager")])]),r("li",[r("a",{attrs:{href:"#dispatcher"}},[a._v("Dispatcher")])])])])])]),r("p"),a._v(" "),r("h2",{attrs:{id:"运行时组件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#运行时组件"}},[a._v("#")]),a._v(" 运行时组件")]),a._v(" "),r("p",[a._v("Flink运行时主要有4个组件，具体如下：")]),a._v(" "),r("ul",[r("li",[a._v("资源管理器（ResourceManager）")]),a._v(" "),r("li",[a._v("作业管理器（JobManager）")]),a._v(" "),r("li",[a._v("任务管理器（TaskManager）")]),a._v(" "),r("li",[a._v("分发器（Dispatcher）")])]),a._v(" "),r("p",[r("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gva9fdywkqj61120t0q5i02.jpg",alt:""}})]),a._v(" "),r("h3",{attrs:{id:"resourcemanager"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#resourcemanager"}},[a._v("#")]),a._v(" ResourceManager")]),a._v(" "),r("p",[a._v("主要负责TaskManager的slot（插槽），slot是Flink中处理资源的单元。Flink为不同的环境和资源管理工具提供了不同资源管理器。当JobManager申请插槽资源的时候，ResourceManager会将有空闲插槽的TaskManager分配给JobManager。如果没有足够的插槽，可以向资源提供平台发起会话，以提供启动TaskManager进程的容器。还负责终止空闲的TaskManager，释放计算资源。")]),a._v(" "),r("h3",{attrs:{id:"jobmanager"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#jobmanager"}},[a._v("#")]),a._v(" JobManager")]),a._v(" "),r("p",[a._v("协调分布式计算，负责调度任务、协调 checkpoints、协调故障恢复等。每个 Job 至少会有一个 JobManager。高可用部署下会有多个 JobManagers，其中一个作为 leader，其余处于 standby 状态。")]),a._v(" "),r("p",[a._v("每个应用程序都会被一个不同的JobManager所控制执行，是控制每一个应用程序执行的主进程。JobManager接收要执行的应用程序，包括作业图（JobGraph）、逻辑数据流图（logical dataflow graph）和打包了所有的类、库和其它资源的JAR包等。JobManager将JobGraph转换成物理层面的数据流图也叫执行图（ExecutionGraph），执行图包含了所有可以并行进行执行的任务。当JobManager向资源管理器请求完执行任务需要的资源（TaskManager上的slot）时就会将执行图分发到真正运行它们的TaskManager上，JobManager还需要负责所有需要中央协调的操作。")]),a._v(" "),r("p",[r("strong",[a._v("主要工作内容")])]),a._v(" "),r("ol",[r("li",[a._v("接收提交过来的应用程序（作业图，逻辑数据图）")])]),a._v(" "),r("h3",{attrs:{id:"taskmanager"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#taskmanager"}},[a._v("#")]),a._v(" TaskManager")]),a._v(" "),r("p",[a._v("用来执行 dataflow 中的 tasks（准确来说是 subtasks ），并且缓存和交换数据 streams。每个 Job 至少会有一个 TaskManager。")]),a._v(" "),r("p",[a._v("每一个TaskManager都包含了一定数量的插槽（slots）。插槽的数量限制了TaskManager能够执行的任务数量。每当TaskManager启动后都会向资源管理器注册它的插槽。当资源管理器向它发出提供slot指令后TaskManager就会将一个或者多个插槽提供给JobManager调用，JobManager就可以向插槽分配任务（tasks）来执行了。在执行过程中，同一应用程序的TaskManager之间可以交换数据。")]),a._v(" "),r("p",[a._v("Flink 运行时由两种类型的进程组成：一个 JobManager 和一个或者多个 TaskManager。")]),a._v(" "),r("h3",{attrs:{id:"dispatcher"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dispatcher"}},[a._v("#")]),a._v(" Dispatcher")]),a._v(" "),r("p",[a._v("Dispatcher为应用提交提供了REST接口。当一个应用被提交执行时，分发器就会启动并将应用移交给一个JobManager，可以跨作业运行。Dispatcher是REST接口，所以可以作为集群的一个HTTP接入点，这样就能够不受防火墙阻挡。Dispatcher也会启动一个Web UI，用来方便地展示和监控作业执行的信息。Dispatcher在架构中可能并不是必需的，这取决于应用提交运行的方式。")]),a._v(" "),r("p",[a._v("2 任务提交流程\n  当一个任务提交时，较高层次的各运行时组件的交互如下：")]),a._v(" "),r("p",[a._v("（1）客户端提交应用")]),a._v(" "),r("p",[a._v("（2）分发器就会启动并将应用移交给一个JobManager")]),a._v(" "),r("p",[a._v("（3）JobManager向ResourceManager申请slots")]),a._v(" "),r("p",[a._v("（4）ResourceManager启动TaskManager")]),a._v(" "),r("p",[a._v("（5）TaskManager启动后向ResourceManager注册slots")]),a._v(" "),r("p",[a._v("（6）ResourceManager向TaskManager发出提供slot的指令")]),a._v(" "),r("p",[a._v("（7）TaskManager向JobManager提供slots")]),a._v(" "),r("p",[a._v("（8）JobManager在TaskManager提供的slots中提交要执行的任务")]),a._v(" "),r("p",[a._v("（9）在执行任务过程中TaskManager之间交互数据")]),a._v(" "),r("p",[a._v("当部署的集群环境不同（YARN，Mesos，Kubernetes，standalone等），上述步骤会有所不同，如果我们将Flink集群部署到YARN上，提交流程如下：")]),a._v(" "),r("p",[a._v("（1）Client首先把jar包和配置上传到hdfs里")]),a._v(" "),r("p",[a._v("（2）Client提交job到ResourceManager")]),a._v(" "),r("p",[a._v("（3）ResourceManager分配container资源，通知对应的NodeManager启动ApplicationMaster")]),a._v(" "),r("p",[a._v("（4）ApplicationMaster启动后加载jar包和配置构建环境，启动JobManager")]),a._v(" "),r("p",[a._v("（5）ApplicationMaster向ResourceManager申请启动TaskManager")]),a._v(" "),r("p",[a._v("（6）ResourceManager分配container之后，ApplicationMaster通知资源所在节点的NodeManager启动TaskManager")]),a._v(" "),r("p",[a._v("（7）NodeManager加载jar包和配置构建环境，并启动TaskManager")]),a._v(" "),r("p",[a._v("（8）TaskManager启动后向jobManager发送心跳包，并等待JobManager向其分配任务")])])}),[],!1,null,null,null);e.default=n.exports}}]);