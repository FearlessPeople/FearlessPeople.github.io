(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{556:function(s,t,n){"use strict";n.r(t);var a=n(10),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"常用命令大全"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常用命令大全"}},[s._v("#")]),s._v(" 常用命令大全")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init                                                  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 初始化本地git仓库（创建新仓库）")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.name "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxx"')]),s._v("                       "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置用户名")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.email "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxx@xxx.com"')]),s._v("              "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置邮件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global color.ui "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("                         "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git status等命令自动着色")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global color.status auto\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global color.diff auto\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global color.branch auto\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global color.interactive auto\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone git+ssh://git@000.000.00.000/VT.git             "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# clone远程仓库")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status                                                "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看当前版本状态（是否修改）")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" xyz                                               "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加xyz文件至index")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("                                                 "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 增加当前子目录下所有更改过的文件至index")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xxx'")]),s._v("                                       "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 提交")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit --amend -m "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xxx'")]),s._v("                               "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 合并上一次提交（用于反复修改）")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -am "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xxx'")]),s._v("                                      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将add和commit合为一步")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" xxx                                                "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除index中的文件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -r *                                               "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 递归删除")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log                                                   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示提交日志")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log -1                                                "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示1行日志 -n为n行")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log -5\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log --stat                                            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示提交日志及相关变动文件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log -p -m\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log --oneline                                         "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在一行显示log")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" show dfb02e6e4f2f7b573337763e5c0013802e392818         "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示某个提交的详细内容")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" show dfb02                                            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可以只用commitid的前几位")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" show HEAD                                             "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示HEAD提交日志")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" show HEAD^                                            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示HEAD的父（上一个版本）的提交日志 ^^为上两个版本 ^5为上5个版本")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag                                                   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示已存在的tag")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -a v2.0 -m "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xxx'")]),s._v("                                  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 增加v2.0的tag")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" show v2.0                                             "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示v2.0的日志及详细内容")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log v2.0                                              "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示v2.0的日志")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v("                                                  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示所有未添加至index的变更")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" --cached                                         "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示所有已添加index但还未commit的变更")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" HEAD^                                            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 比较与上一个版本的差异")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" HEAD -- ./lib                                    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 比较与HEAD版本lib目录的差异")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" origin/master"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("master                            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 比较远程分支master上有本地分支master上没有的")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" origin/master"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("master --stat                     "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 只显示差异的文件，不显示具体内容")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" origin git+ssh://git@192.168.53.168/VT.git "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 增加远程定义（用于push/pull/fetch）")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch                                                "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示本地分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch --contains "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("50089")]),s._v("                               "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示包含提交50089的分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -a                                             "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示所有分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -r                                             "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示所有原创分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch --merged                                       "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示所有已合并到当前分支的分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch --no-merged                                    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示所有未合并到当前分支的分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -m master master_copy                          "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 本地分支改名")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b master_copy                               "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从当前分支创建新分支master_copy并检出")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b master master_copy                        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 上面的完整版")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout features/performance                         "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检出已存在的features/performance分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout --track hotfixes/BJVEP933                    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检出远程分支hotfixes/BJVEP933并创建本地跟踪分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout v2.0                                         "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检出版本v2.0")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b devel origin/develop                      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从远程分支develop创建新本地分支devel并检出")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -- README                                    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检出head版本的README文件（可用于修改错误回退）")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge origin/master                                   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 合并远程master分支至当前分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" cherry-pick ff44785404a8e                             "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 合并提交ff44785404a8e的修改")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin master                                    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将当前分支push到远程master分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin :hotfixes/BJVEP933                        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除远程仓库的hotfixes/BJVEP933分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push --tags                                           "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 把所有tag推送到远程仓库")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch                                                 "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取所有远程分支（不更新本地分支，另需merge）")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch --prune                                         "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取所有原创分支并清除服务器上已删掉的分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull origin master                                    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取远程分支master并merge到当前分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" README README2                                     "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重命名文件README为README2")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --hard HEAD                                     "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将当前版本重置为HEAD（通常用于merge失败回退）")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -d hotfixes/BJVEP933                           "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除分支hotfixes/BJVEP933（本分支修改已合并到其他分支）")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -D hotfixes/BJVEP933                           "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 强制删除分支hotfixes/BJVEP933")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" ls-files                                              "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出git index包含的文件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" show-branch                                           "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 图示当前分支历史")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" show-branch --all                                     "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 图示所有分支历史")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" whatchanged                                           "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示提交历史对应的文件修改")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" revert dfb02e6e4f2f7b573337763e5c0013802e392818       "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 撤销提交dfb02e6e4f2f7b573337763e5c0013802e392818")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" ls-tree HEAD                                          "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 内部命令：显示某个git对象")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rev-parse v2.0                                        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 内部命令：显示某个ref对于的SHA1 HASH")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reflog                                                "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示所有提交，包括孤立节点")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" show HEAD@"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" show master@"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("yesterday"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("                               "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示master分支昨天的状态")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log --pretty"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("format:"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%h %s'")]),s._v(" --graph                   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 图示提交日志")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" show HEAD~3\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" show -s --pretty"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("raw 2be7fcb476\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash                                                 "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 暂存当前修改，将所有至为HEAD状态")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash list                                            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所有暂存")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash show -p stash@"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("                               "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 参考第一次暂存")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash apply stash@"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("                                 "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 应用第一次暂存")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"delete from"')]),s._v("                                    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 文件中搜索文本“delete from”")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -e "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#define'")]),s._v(" --and -e SORT_DIRENT\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" gc\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("fsck")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br"),n("span",{staticClass:"line-number"},[s._v("80")]),n("br"),n("span",{staticClass:"line-number"},[s._v("81")]),n("br"),n("span",{staticClass:"line-number"},[s._v("82")]),n("br"),n("span",{staticClass:"line-number"},[s._v("83")]),n("br"),n("span",{staticClass:"line-number"},[s._v("84")]),n("br"),n("span",{staticClass:"line-number"},[s._v("85")]),n("br"),n("span",{staticClass:"line-number"},[s._v("86")]),n("br")])]),n("p",[n("img",{attrs:{src:"/img/Other/Git/006tNbRwgy1fw34hx6o4nj31kg14g4qq.jpg",alt:""}})]),s._v(" "),n("h2",{attrs:{id:"git-pull和本地文件冲突"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#git-pull和本地文件冲突"}},[s._v("#")]),s._v(" Git pull和本地文件冲突")]),s._v(" "),n("p",[n("strong",[s._v("1. 先将本地修改存储起来")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ git stash\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("这样本地的所有修改就都被暂时存储起来 。是用git stash list可以看到保存的信息：")]),s._v(" "),n("p",[n("img",{attrs:{src:"/img/Other/Git/006tNbRwgy1fysayytl3lj30bb00nglj.jpg",alt:""}})]),s._v(" "),n("p",[s._v("其中stash@{0}就是刚才保存的标记。")]),s._v(" "),n("p",[n("strong",[s._v("2. pull内容")])]),s._v(" "),n("p",[s._v("暂存了本地修改之后，就可以pull了。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ git pull\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("strong",[s._v("3. 还原暂存的内容")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ git stash pop stash@{0}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("系统提示如下类似的信息：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("Auto-merging c/environ.c\nCONFLICT (content): Merge conflict in c/environ.c\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("意思就是系统自动合并修改的内容，但是其中有冲突，需要解决其中的冲突。")]),s._v(" "),n("p",[n("strong",[s._v("4. 解决文件中冲突的的部分")])]),s._v(" "),n("p",[s._v("打开冲突的文件，会看到类似如下的内容：")]),s._v(" "),n("p",[n("img",{attrs:{src:"/img/Other/Git/006tNbRwgy1fys4bm0jwlj306p027t8h.jpg",alt:""}})]),s._v(" "),n("p",[s._v("其中Updated upstream 和=====之间的内容就是pull下来的内容，====和stashed changes之间的内容就是本地修改的内容。碰到这种情况，git也不知道哪行内容是需要的，所以要自行确定需要的内容。")]),s._v(" "),n("p",[s._v("解决完成之后，就可以正常的提交了。")]),s._v(" "),n("h2",{attrs:{id:"git回退某个文件到指定版本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#git回退某个文件到指定版本"}},[s._v("#")]),s._v(" Git回退某个文件到指定版本")]),s._v(" "),n("p",[n("img",{attrs:{src:"/img/Other/Git/006tNc79gy1fyusvixfokj31780jiq7u.jpg",alt:"image-20190104195755594"}})]),s._v(" "),n("ol",[n("li",[n("p",[s._v("使用"),n("code",[s._v("git log data_xiaonuan_mysql.clinic_book1.sh")]),s._v(" 首先要找到要回滚的版本的hash值，上图中hash值是")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("git checkout ea1855040 data_xiaonuan_mysql.clinic_book1.sh")]),s._v(" 利用 "),n("code",[s._v("hash")]),s._v(" 回滚特定文件，注意，这里为了方便操作，使用 "),n("code",[s._v("hash")]),s._v(" 的前六位就可以")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("git commit -m 'fix:回退版本'")]),s._v(" 回滚后需要提交")])])]),s._v(" "),n("h2",{attrs:{id:"git放弃所有修改-强制pull代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#git放弃所有修改-强制pull代码"}},[s._v("#")]),s._v(" Git放弃所有修改，强制pull代码")]),s._v(" "),n("p",[s._v("开发时，对于本地的项目中修改不做保存操作（或代码改崩），可以用到Git pull的强制覆盖，具体代码如下：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch --all\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --hard origin/master\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull //可以省略\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[n("code",[s._v("git fetch")]),s._v(" 指令是下载远程仓库最新内容，不做合并")]),s._v(" "),n("p",[n("code",[s._v("git reset")]),s._v(" 指令把HEAD指向master最新版本")])])}),[],!1,null,null,null);t.default=e.exports}}]);