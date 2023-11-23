(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{566:function(s,t,a){"use strict";a.r(t);var n=a(10),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"在macos上使用python安装pymssql库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在macos上使用python安装pymssql库"}},[s._v("#")]),s._v(" 在MacOS上使用python安装pymssql库")]),s._v(" "),a("p",[s._v("本实例介绍如何在MacOS系统中，使用python上连接SqlServer数据库。")]),s._v(" "),a("p",[s._v("pymssql是一个python操作SqlServer的库")]),s._v(" "),a("h2",{attrs:{id:"安装pymssql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装pymssql"}},[s._v("#")]),s._v(" 安装pymssql")]),s._v(" "),a("p",[s._v("安装pymssql的顺序：unixodbc--\x3efreetds---\x3epymsssql")]),s._v(" "),a("h3",{attrs:{id:"关闭brew的自动更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关闭brew的自动更新"}},[s._v("#")]),s._v(" 关闭brew的自动更新")]),s._v(" "),a("p",[s._v("关闭brew的自动更新，否则brew install的时候卡死在Updating Homebrew...界面上")]),s._v(" "),a("p",[s._v("在命令行中输入如下命令")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("HOMEBREW_NO_AUTO_UPDATE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"安装unixodbc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装unixodbc"}},[s._v("#")]),s._v(" 安装unixodbc")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("brew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" unixodbc\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"安装freetds"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装freetds"}},[s._v("#")]),s._v(" 安装freetds")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("brew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" freetds --with-unixodbc\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("注意：这里一定要使用--with-unixodbc选项")]),s._v(" "),a("h3",{attrs:{id:"安装pymssql库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装pymssql库"}},[s._v("#")]),s._v(" 安装pymssql库")]),s._v(" "),a("p",[s._v("安装pymssql库的时候请按如下步骤安装")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("brew uninstall --force freetds\nbrew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" freetds@0.91\nbrew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" --force freetds@0.91\npip "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" pymssql\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("注意：")]),s._v(" "),a("p",[s._v("其中link --force freetds@0.91这步骤如果出错，则把相应已经存在的文件删除（移动）即可")]),s._v(" "),a("p",[s._v("例如：如下例子中，提示/usr/local/etc/freetds.conf文件已存在，则把该文件从该目录删除记录。")]),s._v(" "),a("p",[s._v("这里我为了安全，直接mv移动到别的目录了。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("fangzheng@localhost $ brew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" --force freetds@0.91\nLinking /usr/local/Cellar/freetds@0.91/0.91.112"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nError: Could not symlink etc/freetds.conf\nTarget /usr/local/etc/freetds.conf\nalready exists. You may want to remove it:\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/usr/local/etc/freetds.conf'")]),s._v("\nTo force the "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" and overwrite all conflicting files:\n  brew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" --overwrite freetds@0.91\nTo list all files that would be deleted:\n  brew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" --overwrite --dry-run freetds@0.91\nfangzheng@localhost $ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" /usr/local/etc/freetds.conf ~/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h2",{attrs:{id:"pymssql简单使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pymssql简单使用"}},[s._v("#")]),s._v(" pymssql简单使用")]),s._v(" "),a("p",[s._v("具体使用方法可参考"),a("a",{attrs:{href:"http://www.pymssql.org/en/stable/pymssql_examples.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/usr/bin/python")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -*- coding: utf-8 -*-")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('""" \n-------------------------------------------------\n@version    : v1.0 \n@author     : fangzheng\n@contact    : 13070108748@163.com \n@software   : PyCharm \n@filename   : inc_data.py\n@create time: 2018/7/26 下午2:15 \n@describe   : 使用python+datax增量抽取SQL Server数据到MySQL\n-------------------------------------------------\n"""')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" pymssql\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# jdbc:sqlserver://10.15.1.11:2121;databaseName=pms")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    conn "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pymssql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("connect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("host"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"192.168.1.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" user"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"username"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" password"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pwd"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" database"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"db"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2121")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" charset"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"utf8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    cursor "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" conn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cursor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    sql "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SELECT updatestamp,cast(updatestamp as bigint) FROM tablename;"')]),s._v("\n    cursor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("execute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    rows "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cursor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("fetchone"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rows = cursor.fetchall()")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# for row in rows:")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#     print row[0]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),s._v(" rows\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# except Exception as e:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#     print e")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("finally")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" cursor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        cursor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("close"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" conn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        conn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("close"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);