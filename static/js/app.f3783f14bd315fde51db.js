webpackJsonp([1],{"0kww":function(t,e){},CuRo:function(t,e){},Kn8B:function(t,e,o){t.exports=o.p+"static/img/loginBG.44a5745.jpg"},NHnr:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",[this.$route.meta.keepAlive?e("router-view"):this._e()],1),this._v(" "),this.$route.meta.keepAlive?this._e():e("router-view")],1)},staticRenderFns:[]};var a=o("VU/8")({name:"App"},n,!1,function(t){o("0kww")},null,null).exports,l=o("/ocq"),i={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"mainBox login"},[o("el-col",{staticClass:"loginFormBox",attrs:{span:6}},[o("el-card",[o("el-col",[o("h2",{staticClass:"diyFont1",staticStyle:{"font-size":"30px"}},[t._v("T o o l "),o("br"),t._v("s y s t e m")])]),t._v(" "),o("el-form",{attrs:{"label-width":"60px"},nativeOn:{submit:function(t){t.preventDefault()}}},[o("el-form-item",{attrs:{label:"账 号 :"}},[o("el-input",{attrs:{"suffix-icon":"el-icon-service",autofocus:"true"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.userLogin(e)}},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"密 码 :"}},[o("el-input",{attrs:{"suffix-icon":"el-icon-view",type:"password"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.userLogin(e)}},model:{value:t.passWord,callback:function(e){t.passWord=e},expression:"passWord"}})],1)],1),t._v(" "),o("el-col",{staticClass:"buttonBox"},[o("el-button",{attrs:{type:"success",size:"small"},on:{click:function(e){return t.userLogin()}}},[t._v(" 登 陆 "),o("i",{staticClass:"el-icon-arrow-right"})]),t._v(" "),o("el-button",{attrs:{type:"info",size:"small"},on:{click:t.Tourist}},[t._v("游客登陆"),o("i",{staticClass:"el-icon-upload el-icon--right"})])],1)],1)],1)],1)},staticRenderFns:[]},r=o("VU/8")({name:"login",data:function(){return{userName:"",passWord:""}},mounted:function(){},watch:{},methods:{userLogin:function(){""!=this.userName||""!=this.passWord?"zhaoqian"==this.userName&&"zhaoqian"==this.passWord?(this.$ls.set("user","zhaoqian"),this.jump("layout")):this.$notify.error({title:"密码错误",message:"登陆失败，请重试!"}):this.$notify.error({title:"账号密码不能为空",message:"登陆失败，请重试!"})},Tourist:function(){this.$ls.set("user",""),this.jump("layout"),this.$message("已登陆 [游客]")}}},i,!1,null,null,null).exports,c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mainBox"},[s("header",[s("el-col",{attrs:{span:3}},[s("span",{staticClass:"diyFont2"},[t._v("T o o l")]),s("br"),t._v(" "),s("span",{staticClass:"diyFont2"},[t._v("s y s t e m")])]),t._v(" "),s("el-col",{attrs:{span:21}},[s("div",{staticClass:"headImg"},[s("img",{attrs:{src:o("Kn8B")}}),t._v(" "),s("p",[s("span",{staticClass:"self"},[t._v("个人中心")]),t._v(" "),s("span",{staticClass:"signout",on:{click:function(e){return t.$router.push({path:"/"})}}},[t._v("退出账号")])])])])],1),t._v(" "),s("el-row",{staticClass:"mainLayer"},[s("el-col",{staticClass:"menu",attrs:{span:3}},[s("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"2","background-color":"rgba(14, 116, 141, 0.603)","text-color":"#fff","active-text-color":"#ffd04b"}},[s("el-submenu",{attrs:{index:"1"}},[s("template",{slot:"title"},[s("i",{staticClass:"el-icon-menu"}),t._v(" "),s("span",[t._v("工具箱")])]),t._v(" "),s("el-menu-item",{attrs:{index:"1-3"},on:{click:function(e){return t.jump("doorCount")}}},[s("i",{staticClass:"el-icon-document"}),t._v(" "),s("span",[t._v("门计算")])])],2),t._v(" "),s("el-menu-item",{attrs:{index:"2"},on:{click:function(e){return t.$message.error("暂无权限")}}},[s("i",{staticClass:"el-icon-remove"}),t._v(" "),s("span",{attrs:{slot:"title"},slot:"title"},[t._v("暂无权限")])]),t._v(" "),s("el-menu-item",{attrs:{index:"3"},on:{click:function(e){return t.$message("尽请期待")}}},[s("i",{staticClass:"el-icon-loading"}),t._v(" "),s("span",{attrs:{slot:"title"},slot:"title"},[t._v("正在开发...")])])],1)],1),t._v(" "),s("el-col",{staticClass:"mainLayer_main",attrs:{span:21}},[s("keep-alive",[t.$route.meta.keepAlive?s("router-view"):t._e()],1),t._v(" "),t.$route.meta.keepAlive?t._e():s("router-view")],1)],1)],1)},staticRenderFns:[]},d=o("VU/8")({name:"layout",data:function(){return{}},mounted:function(){},watch:{},methods:{}},c,!1,null,null,null).exports,u=o("mvHQ"),p=o.n(u),m=o("t4zo"),h=o.n(m),f={name:"doorCount",data:function(){return{tabPane:"0",index:0,boorIndex:0,btnLoading:!1,dataOutShow:!1,ResultModelShow:!1,boorChlidenEditShow:!1,updataBoxShow:!1,SboorType:"",SboorTypeAdd:"",ResultModel:"计算结果为:%$高%*%$宽%=%$面积%*%$门价格%+%$运费%+%$安装费%=%$总价%",ResultModelDilog:"计算结果为:%$高%*%$宽%=%$面积%*%$门价格%+%$运费%+%$安装费%=%$总价%",tableDeleteMore:[],ifaddBoor:"",addBoorModel:{price:"",name:"",send:"",minSell:""},toolinput:"",errarea:"",boorInfo:[{id:"u8c37u4ed3u95e8",label:"谷仓门",options:[{price:"749",name:"实木复合谷仓门",send:"送轨道",minSell:"0"},{price:"849",name:"贴皮谷仓门",send:"送轨道",minSell:"0"},{price:"849",name:"黑板门谷仓门",send:"送轨道",minSell:"0"},{price:"849",name:"普通玻璃谷仓门",send:"送轨道",minSell:"0"},{price:"949",name:"钢化玻璃谷仓门",send:"送轨道",minSell:"0"},{price:"899",name:"长虹玻璃谷仓门",send:"送轨道",minSell:"0"},{price:"949",name:"镜子谷仓门",send:"送轨道",minSell:"0"},{price:"1089",name:"实木谷仓门",send:"送轨道",minSell:"0"},{price:"689",name:"铝合金单层钢化谷仓门",send:"送轨道",minSell:"0"},{price:"839",name:"铝合金双层钢化谷仓门",send:"送轨道",minSell:"0"}]},{id:"u6298u53e0u95e8u000du000a",label:"折叠门",options:[{price:"699",name:"铝合金单层折叠门",send:"2平方起售",minSell:"2"},{price:"849",name:"铝合金双层折叠门",send:"2平方起售",minSell:"2"}]},{id:"u63a8u62c9u95e8",label:"推拉门",options:[{price:"699",name:"铝合金单层推拉门",send:"单门1.2平方起",minSell:"1.2"},{price:"849",name:"铝合金双层推拉门",send:"单门1.2平方起",minSell:"1.2"}]},{id:"u9690u5f62u95e8",label:"隐形门",options:[{price:"2300",name:"平板隐形门 含框架",send:"2100*850内",minSell:"0"},{price:"2800",name:"大线条隐形门 含框架",send:"2100*850内",minSell:"0"}]},{id:"u5176u4ed6",label:"其他",options:[{price:"999",name:"加磁黑板门",send:"送轨道",minSell:"0"},{price:"650",name:"平板木饰面",send:"",minSell:"0"},{price:"750",name:"大线条木饰面",send:"",minSell:"0"}]}],nowOrder:{input:{width:"",height:"",freight:0,install:0,area:0,sum:0},door:{price:"",name:"",send:"",minSell:0},Result:"",note:"",createTime:""},lsData:{userInfo:{userName:"",passWord:""},ResultModel:"",boorInfo:[],orderInfo:[]}}},mounted:function(){this.$ls.get("lsData")?(this.lsData=this.$ls.get("lsData"),this.boorInfo=this.$ls.get("lsData").boorInfo,this.ResultModel=this.$ls.get("lsData").ResultModel,this.ResultModelDilog=this.$ls.get("lsData").ResultModel):(this.lsData.ResultModel=this.ResultModel,this.lsData.boorInfo=this.boorInfo,this.$ls.set("lsData",this.lsData))},watch:{SboorType:function(t){document.getElementById(this.SboorType).scrollIntoView({behavior:"smooth"})}},methods:{doorChange:function(){for(var t=0;t<this.boorInfo.length;t++)for(var e=0;e<this.boorInfo[t].options.length;e++)if(this.nowOrder.door.name==this.boorInfo[t].options[e].name)return this.nowOrder.door.name=this.boorInfo[t].options[e].name,this.nowOrder.door.price=this.boorInfo[t].options[e].price,this.nowOrder.door.send=this.boorInfo[t].options[e].send,void(this.nowOrder.door.minSell=this.boorInfo[t].options[e].minSell)},emptyInput:function(){this.nowOrder.input.width="",this.nowOrder.input.height="",this.nowOrder.input.freight=0,this.nowOrder.input.install=0,this.nowOrder.door.price="",this.nowOrder.door.name="",this.nowOrder.door.send="",this.nowOrder.door.minSell=0,this.$message("  已  清  空  !")},copy:function(){document.querySelector("#Result").select(),document.execCommand("Copy"),this.$message({message:"成功复制！",type:"success"}),this.$refs.Result.blur()},copytags:function(t){var e=this;this.toolinput=t,setTimeout(function(){document.querySelector("#toolinput").select(),document.execCommand("Copy")},100),this.$message({message:"成功复制！",type:"success"}),setTimeout(function(){e.$refs.ResultModelTextarea.focus()},100)},count:function(){this.btnLoading=!0,this.nowOrder.input.width&&this.nowOrder.input.height&&this.nowOrder.door.price?(this.nowOrder.input.area=1*(this.nowOrder.input.width*this.nowOrder.input.height).toFixed(2),this.nowOrder.door.minSell=1*this.nowOrder.door.minSell,this.nowOrder.input.area<this.nowOrder.door.minSell?(this.nowOrder.input.area=this.nowOrder.door.minSell,this.$message.error({showClose:!0,duration:8e3,message:"当前门平方 不足 该门起售平方，已按起售平方计算"}),this.errarea=!0):(this.errarea=!1,this.$message({message:"已完成!",type:"success"})),this.nowOrder.input.sum=(this.nowOrder.input.area*this.nowOrder.door.price+parseInt(Number(this.nowOrder.input.install)+Number(this.nowOrder.input.freight))).toFixed(2),this.nowOrder.Result=this.ResultModelPrint(this.nowOrder)):this.$message.error("宽、高、价格 不能为空!"),this.nowOrder.createTime=this.dateFormat(),this.btnLoading=!1},ResultModelPrint:function(t){for(var e=this.ResultModel.split("%"),o="",s=0;s<e.length;s++)switch(e[s]){case"$高":e[s]=t.input.height;continue;case"$宽":e[s]=t.input.width;continue;case"$面积":e[s]=t.input.area;continue;case"$运费":e[s]=t.input.freight;continue;case"$安装费":e[s]=t.input.install;continue;case"$总价":e[s]=t.input.sum;continue;case"$门价格":e[s]=t.door.price;continue;case"$门名字":e[s]=t.door.name;continue;case"$门起售":e[s]=t.door.minSell;continue;case"$门赠送":e[s]=t.door.send;continue}for(var n=0;n<e.length;n++)o+=e[n];return o},ResultModelSave:function(){this.lsData=this.$ls.get("lsData"),this.ResultModel=this.ResultModelDilog,this.lsData.ResultModel=this.ResultModel,this.$ls.set("lsData",this.lsData),this.ResultModelShow=!1,this.$message({message:"保存成功！",type:"success"})},orderSave:function(){if(this.lsData=this.$ls.get("lsData"),this.nowOrder.createTime&&""!=this.nowOrder.createTime){for(var t=0;t<this.lsData.orderInfo.length;t++)if(this.lsData.orderInfo[t].createTime==this.nowOrder.createTime)return void this.$message.error("该数据已存在，请勿重复添加!");this.lsData.orderInfo[this.lsData.orderInfo.length]=this.nowOrder,this.$ls.set("lsData",this.lsData),this.$message({message:"保存成功!",type:"success"}),this.btnLoading=!1}else this.$message.error("请勿添加空数据!")},deleteOrder:function(t){var e=this;this.$confirm("此操作将永久删除该条数据, 是否继续?","提示",{confirmButtonText:"删除",cancelButtonText:"取消",type:"warning"}).then(function(){e.lsData.orderInfo.splice(t,1),e.$ls.set("lsData",e.lsData),e.$message({type:"success",message:"删除成功!"})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},handleSelectionChange:function(t){this.tableDeleteMore=t},DeleteMore:function(){var t=this;0!=this.tableDeleteMore.length&&this.$confirm("此操作将删除这些数据, 是否继续?","提示",{confirmButtonText:"删除",cancelButtonText:"取消",confirmButtonClass:"el-button--danger",type:"warning"}).then(function(){for(var e=0;e<t.tableDeleteMore.length;e++)for(var o=0;o<t.lsData.orderInfo.length;o++)t.tableDeleteMore[e].createTime!=t.lsData.orderInfo[o].createTime||t.lsData.orderInfo.splice(o,1);t.$ls.set("lsData",t.lsData),t.$message({type:"success",message:"删除成功!"})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},SboorTypeAddf:function(){var t=this;if(this.SboorTypeAdd){for(var e=0;e<this.boorInfo.length;e++)if(this.boorInfo[e].label==this.SboorTypeAdd)return void this.$message.error("["+this.SboorTypeAdd+"] 该名字已存在,请勿重复!");for(var o="",s=0;s<this.SboorTypeAdd.length;s++){var n=this.SboorTypeAdd.charAt(s);o+=n.charCodeAt(0).toString(16)}this.boorInfo.push({id:o,label:this.SboorTypeAdd,options:[]}),this.lsData.boorInfo=this.boorInfo,this.$ls.set("lsData",this.lsData),setTimeout(function(){t.SboorType=o},200),this.$message({message:"保存成功!",type:"success"})}else this.$message.error("类型名不能为空!")},deleteBoorType:function(t){var e=this;this.$confirm("此操作将永久删除该条数据, 是否继续?","提示",{confirmButtonText:"删除",cancelButtonText:"取消",type:"warning"}).then(function(){e.boorInfo.splice(t,1),e.lsData.boorInfo=e.boorInfo,e.$ls.set("lsData",e.lsData),e.$message({type:"success",message:"删除成功!"})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},boorGoTop:function(t){var e=this,o=this.boorInfo[t];this.boorInfo.splice(t,1),this.boorInfo.unshift(o),setTimeout(function(){e.SboorType=o.id},200),this.lsData.boorInfo=this.boorInfo,this.$ls.set("lsData",this.lsData),this.$message({type:"success",message:"置顶成功!"})},addBoor:function(t){var e={};this.addBoorModel.price&&this.addBoorModel.name?(e.name=this.addBoorModel.name,e.price=this.addBoorModel.price,e.send=this.addBoorModel.send,e.minSell=this.addBoorModel.minSell,this.boorInfo[t].options.push(e),this.addBoorModel.name="",this.addBoorModel.price="",this.addBoorModel.send="",this.addBoorModel.minSell="",this.ifaddBoor="",this.lsData.boorInfo=this.boorInfo,this.$ls.set("lsData",this.lsData),this.$message({type:"success",message:"添加成功!"})):this.$message.error("价格，名称  不能为空!")},boorChlidenDelete:function(t,e){var o=this;this.$confirm("是否删除 [ "+this.boorInfo[t].options[e].name+" ] , 是否继续?","提示",{confirmButtonText:"删除",cancelButtonText:"取消",type:"warning"}).then(function(){o.boorInfo[t].options.splice(e,1),o.lsData.boorInfo=o.boorInfo,o.$ls.set("lsData",o.lsData),o.$message({type:"success",message:"删除成功!"})}).catch(function(){o.$message({type:"info",message:"已取消删除"})})},boorChlidenEdit:function(t,e){this.ifaddBoor="",this.addBoorModel.name=this.boorInfo[t].options[e].name,this.addBoorModel.price=this.boorInfo[t].options[e].price,this.addBoorModel.send=this.boorInfo[t].options[e].send,this.addBoorModel.minSell=this.boorInfo[t].options[e].minSell,this.index=t,this.boorIndex=e,this.boorChlidenEditShow=!0},boorChlidenEditSave:function(){var t=this.index,e=this.boorIndex;this.boorInfo[t].options[e].name=this.addBoorModel.name,this.boorInfo[t].options[e].price=this.addBoorModel.price,this.boorInfo[t].options[e].send=this.addBoorModel.send,this.boorInfo[t].options[e].minSell=this.addBoorModel.minSell,this.lsData.boorInfo=this.boorInfo,this.$ls.set("lsData",this.lsData),this.$message({type:"success",message:"修改成功!"}),this.boorChlidenEditShow=!1},cleanAll:function(){var t=this;this.$confirm("是否还原默认，所有数据将清空!!!! , 是否继续?","提示",{confirmButtonText:"删除",cancelButtonText:"取消",type:"warning"}).then(function(){t.$ls.set("lsData",""),location.reload()}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},exportJSON:function(){var t=p()(this.lsData),e=new Blob([t],{type:""});h.a.saveAs(e,this.dateFormat()+".json"),this.$message({type:"success",showClose:!0,duration:8e3,message:"数据导出成功，请等待下载完成!"})},importJSON:function(){var t=document.getElementById("file").files[0].name.split(".");if("json"==t[1]||"JSON"==t[1]){var e=document.getElementById("file").files[0],o=new FileReader;o.readAsText(e);var s=this;o.onload=function(){s.lsData=JSON.parse(this.result),s.$ls.set("lsData",s.lsData),s.dataOutShow=!1,s.$message({type:"success",showClose:!0,duration:8e3,message:"数据导入成功!"})}}else this.$message.error({showClose:!0,duration:8e3,message:"导入文件格式错误！！！"})}}},v={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"mainBox"},[o("el-row",{staticStyle:{padding:"20px"}},[o("el-tabs",{staticStyle:{height:"200px"},attrs:{"tab-position":"top"},model:{value:t.tabPane,callback:function(e){t.tabPane=e},expression:"tabPane"}},[o("el-tab-pane",{attrs:{name:"0",label:"计算"}},[o("el-form",{attrs:{"label-width":"80px"}},[o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:"类型"}},[o("el-select",{attrs:{placeholder:"请选择门类型"},on:{change:function(e){return t.doorChange()}},model:{value:t.nowOrder.door.name,callback:function(e){t.$set(t.nowOrder.door,"name",e)},expression:"nowOrder.door.name"}},t._l(t.boorInfo,function(e,s){return o("el-option-group",{key:s,attrs:{label:e.label}},t._l(e.options,function(e,s){return o("el-option",{key:s,attrs:{label:e.name,value:e.name}},[o("span",{staticClass:"sltSpan01"},[t._v(t._s(e.name))]),t._v(" "),o("span",{staticClass:"sltSpan02"},[t._v(t._s(e.price)+"/平")]),t._v(" "),o("span",{staticClass:"sltSpan03"},[t._v(t._s(e.send))])])}),1)}),1)],1)],1),t._v(" "),o("el-col",{attrs:{span:6,offset:2}},[o("el-form-item",{attrs:{label:"宽"}},[o("el-input",{attrs:{placeholder:"请输入宽度 米"},nativeOn:{keyup:function(e){t.nowOrder.input.width=t.nowOrder.input.width.replace(/[^\.\d]/g,"")}},model:{value:t.nowOrder.input.width,callback:function(e){t.$set(t.nowOrder.input,"width",e)},expression:"nowOrder.input.width"}})],1)],1),t._v(" "),o("el-col",{attrs:{span:6,offset:2}},[o("el-form-item",{attrs:{label:"高"}},[o("el-input",{attrs:{placeholder:"请输入高度 米"},nativeOn:{keyup:function(e){t.nowOrder.input.height=t.nowOrder.input.height.replace(/[^\.\d]/g,"")}},model:{value:t.nowOrder.input.height,callback:function(e){t.$set(t.nowOrder.input,"height",e)},expression:"nowOrder.input.height"}})],1)],1),t._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:"价格/平"}},[o("el-input",{attrs:{placeholder:"请输入价格 已选类型则不需"},on:{input:function(e){t.nowOrder.door.name="自定义"}},nativeOn:{keyup:function(e){t.nowOrder.door.price=t.nowOrder.door.price.replace(/[^\.\d]/g,"")}},model:{value:t.nowOrder.door.price,callback:function(e){t.$set(t.nowOrder.door,"price",e)},expression:"nowOrder.door.price"}})],1)],1),t._v(" "),o("el-col",{attrs:{span:6,offset:2}},[o("el-form-item",{attrs:{label:"运费"}},[o("el-input",{attrs:{placeholder:"请输入运费 选填"},nativeOn:{keyup:function(e){t.nowOrder.input.freight=t.nowOrder.input.freight.replace(/[^\.\d]/g,"")}},model:{value:t.nowOrder.input.freight,callback:function(e){t.$set(t.nowOrder.input,"freight",e)},expression:"nowOrder.input.freight"}})],1)],1),t._v(" "),o("el-col",{attrs:{span:6,offset:2}},[o("el-form-item",{attrs:{label:"安装费"}},[o("el-input",{attrs:{placeholder:"请输入安装费 选填"},nativeOn:{keyup:function(e){t.nowOrder.input.install=t.nowOrder.input.install.replace(/[^\.\d]/g,"")}},model:{value:t.nowOrder.input.install,callback:function(e){t.$set(t.nowOrder.input,"install",e)},expression:"nowOrder.input.install"}})],1)],1),t._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:"起售平方"}},[o("el-input",{attrs:{placeholder:"请输入起售平方 选填"},on:{input:function(e){t.nowOrder.door.name="自定义"}},nativeOn:{keyup:function(e){t.nowOrder.door.minSell=t.nowOrder.door.minSell.replace(/[^\.\d]/g,"")}},model:{value:t.nowOrder.door.minSell,callback:function(e){t.$set(t.nowOrder.door,"minSell",e)},expression:"nowOrder.door.minSell"}})],1)],1),t._v(" "),o("el-col",{attrs:{span:6,offset:2}},[o("el-form-item",{attrs:{label:"提示"}},[o("span",{staticClass:"greenFont",class:{redFont:t.errarea}},[t._v("\n                                起售平方 "+t._s(t.nowOrder.door.minSell)+" 平方米，当前 "+t._s(t.nowOrder.input.area)+" 平方米\n                            ")])])],1),t._v(" "),o("el-col",{attrs:{span:6,offset:2}},[o("el-form-item",{attrs:{label:""}},[o("el-button",{attrs:{size:"medium",type:"primary",loading:t.btnLoading},on:{click:t.count}},[t._v("\n                                计  算")]),t._v(" "),o("el-button",{attrs:{size:"medium",type:"info"},on:{click:t.emptyInput}},[t._v("清空表单"),o("i",{staticClass:"el-icon-refresh el-icon--right"})])],1)],1),t._v(" "),o("el-col",{attrs:{span:16}},[o("el-form-item",{attrs:{label:"结果:"}},[o("el-input",{ref:"Result",attrs:{type:"textarea",id:"Result",autosize:{minRows:4,maxRows:6},placeholder:"结果"},model:{value:t.nowOrder.Result,callback:function(e){t.$set(t.nowOrder,"Result",e)},expression:"nowOrder.Result"}})],1)],1),t._v(" "),o("el-col",{staticStyle:{"padding-top":"30px"},attrs:{span:6}},[o("el-form-item",{attrs:{label:""}},[o("el-button",{attrs:{size:"medium",type:"warning",loading:!1},on:{click:t.copy}},[t._v("复制")]),t._v(" "),o("el-button",{attrs:{size:"medium",type:"text"},on:{click:function(e){t.ResultModelShow=!0}}},[t._v("自定义输出结果"),o("i",{staticClass:"el-icon-tickets el-icon--right"})])],1)],1),t._v(" "),o("el-col",{attrs:{span:16}},[o("el-form-item",{attrs:{label:"备注信息:"}},[o("el-input",{attrs:{type:"textarea",autosize:{minRows:1,maxRows:6},placeholder:"输入备注信息 选填"},model:{value:t.nowOrder.note,callback:function(e){t.$set(t.nowOrder,"note",e)},expression:"nowOrder.note"}})],1)],1),t._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:""}},[o("el-button",{attrs:{size:"medium",type:"success"},on:{click:t.orderSave}},[t._v("保存该条信息"),o("i",{staticClass:"el-icon-download el-icon--right"})])],1)],1),t._v(" "),o("el-col",[o("el-form-item",{attrs:{label:""}},[o("p",{staticStyle:{color:"rgb(197, 111, 111)"}},[t._v("数字位请勿填写其他字符，系统将无法识别。请勿填写多个小数点，防止类型计算!")])])],1)],1)],1),t._v(" "),o("el-tab-pane",{attrs:{name:"2",label:"门管理"}},[o("el-col",{staticStyle:{position:"relative"}},[o("el-col",{staticStyle:{position:"absolute",top:"0px",height:"6vh"}},[o("el-form",{attrs:{"label-width":"80px"}},[o("el-col",{attrs:{span:4}},[o("el-form-item",{attrs:{label:"门类型"}},[o("el-select",{attrs:{placeholder:"请选择门类型"},model:{value:t.SboorType,callback:function(e){t.SboorType=e},expression:"SboorType"}},t._l(t.boorInfo,function(t,e){return o("el-option",{key:e,attrs:{label:t.label,value:t.id}})}),1)],1)],1),t._v(" "),o("el-col",{attrs:{span:7}},[o("el-form-item",{attrs:{label:"门类型新增","label-width":"100px"}},[o("el-input",{attrs:{placeholder:"请输入类型名称"},model:{value:t.SboorTypeAdd,callback:function(e){t.SboorTypeAdd=e},expression:"SboorTypeAdd"}},[o("el-button",{staticClass:"inputBotton",attrs:{slot:"append",type:"primary",icon:"el-icon-circle-plus-outline"},on:{click:function(e){return t.SboorTypeAddf()}},slot:"append"},[t._v("新增")])],1)],1)],1)],1)],1),t._v(" "),o("el-col",{staticClass:"boorInfoBox"},t._l(t.boorInfo,function(e,s){return o("div",{attrs:{id:e.id},on:{click:function(o){t.SboorType=e.id}}},[o("el-card",{staticClass:"card_boor",class:{card_boor_hover:t.SboorType==e.id}},[o("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[o("span",{staticStyle:{"font-weight":"bold"}},[o("span",{staticStyle:{color:"rgb(34, 139, 209)","font-weight":"bolder","font-size":"20px"}},[t._v("#\n                                        ")]),t._v("\n                                        "+t._s(e.label))]),t._v(" "),o("el-button",{staticStyle:{float:"right",padding:"3px 0",color:"red"},attrs:{type:"text"},on:{click:function(e){return t.deleteBoorType(s)}}},[t._v("删除\n                                    ")]),t._v(" "),o("el-button",{staticStyle:{float:"right",padding:"3px 0","margin-right":"50px",color:"darkorange"},attrs:{type:"text"},on:{click:function(e){return t.boorGoTop(s)}}},[o("i",{staticClass:"el-icon-upload2"}),t._v(" 置顶\n                                    ")])],1),t._v(" "),o("div",{staticClass:"text item"},[o("el-col",{staticClass:"boorLi",staticStyle:{"font-size":"15px"}},[o("el-col",{attrs:{span:6}},[t._v("\n                                            名称\n                                        ")]),t._v(" "),o("el-col",{attrs:{span:4}},[t._v("\n                                            价格\n                                        ")]),t._v(" "),o("el-col",{attrs:{span:6}},[t._v("\n                                            起售平方\n                                        ")]),t._v(" "),o("el-col",{attrs:{span:6}},[t._v("\n                                            备注\n                                        ")]),t._v(" "),o("el-col",{attrs:{span:2}},[t._v("\n                                            操作\n                                        ")])],1)],1),t._v(" "),t._l(e.options,function(e,n){return o("div",{staticClass:"text item"},[o("el-col",{staticClass:"boorLi"},[o("el-col",{attrs:{span:6}},[t._v("\n                                            "+t._s(e.name)+"\n                                        ")]),t._v(" "),o("el-col",{staticStyle:{color:"darkorange"},attrs:{span:4}},[t._v("\n                                            ￥"+t._s(e.price)+"\n                                        ")]),t._v(" "),o("el-col",{staticStyle:{color:"rgb(110, 212, 27)"},attrs:{span:6}},[t._v("\n                                             "),0!=e.minSell?o("span",[t._v(t._s(e.minSell)+" 平方米起售")]):t._e()]),t._v(" "),o("el-col",{staticStyle:{color:"rgb(27, 144, 212)"},attrs:{span:6}},[t._v("\n                                             "+t._s(e.send)+"\n                                        ")]),t._v(" "),o("el-col",{staticStyle:{color:"rgb(27, 144, 212)"},attrs:{span:2}},[o("el-button",{staticStyle:{padding:"3px 0",color:"rgb(39, 131, 216)"},attrs:{type:"text"},on:{click:function(e){return t.boorChlidenEdit(s,n)}}},[t._v("编辑\n                                            ")]),t._v(" "),o("el-button",{staticStyle:{padding:"3px 0",color:"red"},attrs:{type:"text"},on:{click:function(e){return t.boorChlidenDelete(s,n)}}},[t._v("删除\n                                            ")])],1)],1)],1)}),t._v(" "),o("div",{staticClass:"text item"},[o("el-col",{staticClass:"boorLi",staticStyle:{"font-size":"15px"}},[o("el-col",{attrs:{span:6}},[t._v(" \n                                            "),o("el-input",{directives:[{name:"show",rawName:"v-show",value:t.ifaddBoor==e.id,expression:"ifaddBoor==boors.id"}],attrs:{placeholder:"请输入名称"},model:{value:t.addBoorModel.name,callback:function(e){t.$set(t.addBoorModel,"name",e)},expression:"addBoorModel.name"}})],1),t._v(" "),o("el-col",{attrs:{span:4}},[t._v(" \n                                            "),o("el-input",{directives:[{name:"show",rawName:"v-show",value:t.ifaddBoor==e.id,expression:"ifaddBoor==boors.id"}],attrs:{placeholder:"请输入价格"},nativeOn:{keyup:function(e){t.addBoorModel.price=t.addBoorModel.price.replace(/[^\.\d]/g,"")}},model:{value:t.addBoorModel.price,callback:function(e){t.$set(t.addBoorModel,"price",e)},expression:"addBoorModel.price"}})],1),t._v(" "),o("el-col",{attrs:{span:6}},[t._v(" \n                                            "),o("el-input",{directives:[{name:"show",rawName:"v-show",value:t.ifaddBoor==e.id,expression:"ifaddBoor==boors.id"}],attrs:{placeholder:"请输入起售"},nativeOn:{keyup:function(e){t.addBoorModel.minSell=t.addBoorModel.minSell.replace(/[^\.\d]/g,"")}},model:{value:t.addBoorModel.minSell,callback:function(e){t.$set(t.addBoorModel,"minSell",e)},expression:"addBoorModel.minSell"}})],1),t._v(" "),o("el-col",{attrs:{span:6}},[t._v(" \n                                            "),o("el-input",{directives:[{name:"show",rawName:"v-show",value:t.ifaddBoor==e.id,expression:"ifaddBoor==boors.id"}],attrs:{placeholder:"请输入备注"},model:{value:t.addBoorModel.send,callback:function(e){t.$set(t.addBoorModel,"send",e)},expression:"addBoorModel.send"}})],1),t._v(" "),o("el-col",{attrs:{span:2}},[o("el-button",{directives:[{name:"show",rawName:"v-show",value:t.ifaddBoor!=e.id,expression:"ifaddBoor!=boors.id"}],staticStyle:{padding:"3px 0",color:"rgb(224, 154, 48)"},attrs:{type:"text"},on:{click:function(o){t.ifaddBoor=e.id}}},[t._v("\n                                                添加门\n                                            ")]),t._v(" "),o("el-button",{directives:[{name:"show",rawName:"v-show",value:t.ifaddBoor==e.id,expression:"ifaddBoor==boors.id"}],attrs:{size:"mini",type:"success"},on:{click:function(e){return t.addBoor(s)}}},[t._v("添加")]),t._v(" "),o("el-button",{directives:[{name:"show",rawName:"v-show",value:t.ifaddBoor==e.id,expression:"ifaddBoor==boors.id"}],attrs:{size:"mini",type:"info"},on:{click:function(e){t.ifaddBoor=""}}},[t._v("取消")])],1)],1)],1)],2)],1)}),0)],1)],1),t._v(" "),o("el-tab-pane",{attrs:{name:"1",label:"数据管理"}},[o("el-table",{attrs:{data:t.lsData.orderInfo,"default-sort":{prop:"createTime",prop:"input.sum"},border:""},on:{"selection-change":t.handleSelectionChange}},[o("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),o("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[o("el-form-item",{attrs:{"label-width":"50px",label:"备注:"}},[o("span",[t._v(t._s(e.row.note))])]),t._v(" "),o("el-form-item",{attrs:{"label-width":"50px",label:"结果:"}},[o("span",[t._v(t._s(e.row.Result))])])],1)]}}])}),t._v(" "),o("el-table-column",{attrs:{prop:"door.name",label:"门名称",width:"170"}}),t._v(" "),o("el-table-column",{attrs:{prop:"input.width",label:"宽",width:"60"}}),t._v(" "),o("el-table-column",{attrs:{prop:"input.height",label:"高",width:"60"}}),t._v(" "),o("el-table-column",{attrs:{label:"面积",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("span",[t._v(t._s(e.row.input.area)+" 平方米")])]}}])}),t._v(" "),o("el-table-column",{attrs:{prop:"input.freight",label:"运费",width:"60"}}),t._v(" "),o("el-table-column",{attrs:{prop:"input.install",label:"安装费",width:"80"}}),t._v(" "),o("el-table-column",{attrs:{prop:"input.sum",sortable:"",label:"总价",width:"100"}}),t._v(" "),o("el-table-column",{attrs:{prop:"createTime",sortable:"",label:"创建时间",width:"160"}}),t._v(" "),o("el-table-column",{attrs:{prop:"note",label:"备注",width:"150"}}),t._v(" "),o("el-table-column",{attrs:{prop:"Result",label:"结果",width:"410"}}),t._v(" "),o("el-table-column",{attrs:{align:"center",label:"操作",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{attrs:{type:"success",size:"small"},on:{click:function(o){t.nowOrder=e.row,t.tabPane="0"}}},[t._v("使用\n                            ")]),t._v(" "),o("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(o){return t.deleteOrder(e.$index)}}},[t._v("删除")])]}}])})],1),t._v(" "),o("el-col",{staticStyle:{padding:"2vh"}},[o("el-button",{attrs:{type:"success"},on:{click:t.exportJSON}},[t._v("数据导出")]),t._v(" "),o("el-button",{attrs:{type:"warning"},on:{click:function(e){t.dataOutShow=!0}}},[t._v("数据导入")]),t._v(" "),o("el-button",{staticStyle:{float:"right"},attrs:{type:"danger"},on:{click:t.DeleteMore}},[t._v("批量删除")])],1)],1),t._v(" "),o("el-tab-pane",{attrs:{name:"3",label:"关于"}},[o("el-col",{staticStyle:{padding:"20px"},attrs:{span:20}},[o("el-card",[o("h3",[o("span",{staticStyle:{color:"darkorange","font-size":"23px"}},[t._v("# ")]),t._v("Tips")]),t._v(" "),o("el-collapse",{attrs:{accordion:""}},[o("el-collapse-item",[o("template",{slot:"title"},[o("span",{staticStyle:{"font-weight":"bold"}},[t._v("计 算 ")]),o("i",{staticClass:"el-icon-warning"})]),t._v(" "),o("div",[t._v(" 宽 * 高所得面积低于起售平方面积 将以起售平方计算，可另修改起售平方大小。")]),t._v(" "),o("div",[t._v(" 输入框中需填写数字的地方请勿填写其他字符和多个小数点，避免造成无法识别。 "),o("i",{staticClass:"el-icon-warning"})]),t._v(" "),o("div",[t._v(" 门备注不会影响计算结果。")])],2),t._v(" "),o("el-collapse-item",[o("template",{slot:"title"},[o("span",{staticStyle:{"font-weight":"bold"}},[t._v(" Diy 结果模板 ")])]),t._v(" "),o("div",[t._v(" 点击复制弹出框中占位符，编辑至下方输入框，编辑自定义模板")]),t._v(" "),o("div",[t._v(" 占位符格式:  %&高%  ")]),t._v(" "),o("div",[t._v(" 还原默认后将不能撤回。")])],2),t._v(" "),o("el-collapse-item",[o("template",{slot:"title"},[o("span",{staticStyle:{"font-weight":"bold"}},[t._v("数据管理 ")])]),t._v(" "),o("div",[t._v(" 计算结束后点击 [保存该条数据] 可将当前计算数据保存至 [数据管理]中。")]),t._v(" "),o("div",[t._v(" 数据管理中点击数据列表中 [使用] 可将该条数据转移到计算中，用于二次计算。 ")]),t._v(" "),o("div",[t._v(" 数据导出 将所有数据导出为json文件。包括 (自定义结果模板、保存的计算数据、保存的门信息、用户信息)")]),t._v(" "),o("div",[t._v(" 数据导入 将导出的json文件导出至系统，所有数据将被替换。"),o("i",{staticClass:"el-icon-warning"})]),t._v(" "),o("div",[t._v(" 清理浏览器缓存将清空所有数据，请注意备份!"),o("i",{staticClass:"el-icon-warning"})]),t._v(" "),o("div",[t._v(" 还原默认 所有数据将清空!!! 请先进行数据导出以备份。 权重 ! "),o("i",{staticClass:"el-icon-warning"})]),t._v(" "),o("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(e){return t.cleanAll()}}},[t._v("还原默认")])],2)],1)],1)],1)],1)],1)],1),t._v(" "),o("el-dialog",{attrs:{title:"编辑输出模板",visible:t.ResultModelShow,width:"50%","close-on-click-modal":!1},on:{"update:visible":function(e){t.ResultModelShow=e}}},[o("el-col",[o("el-col",{staticClass:"ResultModelBody"},[o("p",{staticStyle:{color:"rgb(146, 146, 146)",padding:"0",margin:"0","text-indent":"1em"}},[t._v("点击复制占位符\n                    "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.toolinput,expression:"toolinput"}],ref:"toolinput",staticStyle:{height:"1px",width:"1px"},attrs:{type:"text",id:"toolinput"},domProps:{value:t.toolinput},on:{input:function(e){e.target.composing||(t.toolinput=e.target.value)}}})]),t._v(" "),o("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"当前录入的高度",placement:"top-start"}},[o("el-tag",{on:{click:function(e){return t.copytags("%$高%")}}},[t._v("%$高%")])],1),t._v(" "),o("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"当前录入的宽度",placement:"top-start"}},[o("el-tag",{attrs:{type:"success"},on:{click:function(e){return t.copytags("%$宽%")}}},[t._v("%$宽%")])],1),t._v(" "),o("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"当前面积: 高 * 宽",placement:"top-start"}},[o("el-tag",{attrs:{type:"info"},on:{click:function(e){return t.copytags("%$面积%")}}},[t._v("%$面积%")])],1),t._v(" "),o("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"当前录入的运费",placement:"top-start"}},[o("el-tag",{attrs:{type:"warning"},on:{click:function(e){return t.copytags("%$运费%")}}},[t._v("%$运费%")])],1),t._v(" "),o("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"当前录入的安装费",placement:"top-start"}},[o("el-tag",{attrs:{type:"danger"},on:{click:function(e){return t.copytags("%$安装费%")}}},[t._v("%$安装费%")])],1),t._v(" "),o("br"),t._v(" "),o("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"当前计算结果总价 面积 * 价格 + 运费 + 安装费",placement:"bottom-start"}},[o("el-tag",{on:{click:function(e){return t.copytags("%$总价%")}}},[t._v("%$总价%")])],1),t._v(" "),o("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"当前门的价格",placement:"bottom-start"}},[o("el-tag",{attrs:{type:"success"},on:{click:function(e){return t.copytags("%$门价格%")}}},[t._v("%$门价格%")])],1),t._v(" "),o("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"当前门的名字",placement:"bottom-start"}},[o("el-tag",{attrs:{type:"info"},on:{click:function(e){return t.copytags("%$门名字%")}}},[t._v("%$门名字%")])],1),t._v(" "),o("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"当前门起售平方",placement:"bottom-start"}},[o("el-tag",{attrs:{type:"warning"},on:{click:function(e){return t.copytags("%$门起售%")}}},[t._v("%$门起售%")])],1),t._v(" "),o("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"当前门的备注&赠送",placement:"bottom-start"}},[o("el-tag",{attrs:{type:"danger"},on:{click:function(e){return t.copytags("%$门赠送%")}}},[t._v("%$门赠送%")])],1)],1),t._v(" "),o("el-col",[o("el-form",{attrs:{"label-width":"80px"}},[o("el-form-item",{attrs:{label:"输出模板:"}},[o("el-input",{ref:"ResultModelTextarea",staticClass:"ResultModelTextarea",attrs:{type:"textarea",autosize:{minRows:4,maxRows:6},placeholder:"模板"},model:{value:t.ResultModelDilog,callback:function(e){t.ResultModelDilog=e},expression:"ResultModelDilog"}}),t._v(" "),o("span",{staticStyle:{color:"rgb(146, 146, 146)"}},[t._v("例: 计算结果为: %$高% * %$宽% = %$面积% * %$门价格% + %$运费% +\n                            %$安装费% = %$总价%")])],1)],1)],1)],1),t._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{size:"small"},on:{click:function(e){t.ResultModelShow=!1}}},[t._v("取 消")]),t._v(" "),o("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){t.ResultModelDilog=t.ResultModelDilog.replace(/\s*/g,"")}}},[t._v("\n                去除空格")]),t._v(" "),o("el-button",{staticStyle:{float:"left"},attrs:{size:"small",type:"warning"},on:{click:function(e){t.ResultModelDilog="计算结果为:%$高%*%$宽%=%$面积%*%$门价格%+%$运费%+%$安装费%=%$总价%"}}},[t._v("还原默认\n            ")]),t._v(" "),o("el-button",{attrs:{size:"small",type:"success"},on:{click:t.ResultModelSave}},[t._v("保 存\n            ")])],1)],1),t._v(" "),o("el-dialog",{attrs:{title:"数据导入",visible:t.dataOutShow,width:"50%","close-on-click-modal":!1},on:{"update:visible":function(e){t.dataOutShow=e}}},[o("p",{staticStyle:{"margin-left":"10%"}},[t._v("点击选择文件 或 将文件拽至选框"),o("span",{staticClass:"redFont",staticStyle:{float:"right","margin-right":"10%"}},[t._v("导入将替换并覆盖当前所有数据！")])]),t._v(" "),o("input",{staticClass:"updataInput",attrs:{id:"file",type:"file",accept:".json"}}),t._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(e){t.dataOutShow=!1}}},[t._v("取 消")]),t._v(" "),o("el-button",{attrs:{type:"success"},on:{click:t.importJSON}},[t._v("导 入")])],1)]),t._v(" "),o("el-dialog",{attrs:{title:"编辑",visible:t.boorChlidenEditShow,width:"50%","close-on-click-modal":!1},on:{"update:visible":function(e){t.boorChlidenEditShow=e}}},[o("div",[o("el-form",[o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:"名称"}},[o("el-input",{attrs:{placeholder:"请输入"},model:{value:t.addBoorModel.name,callback:function(e){t.$set(t.addBoorModel,"name",e)},expression:"addBoorModel.name"}})],1)],1),t._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:"价格"}},[o("el-input",{attrs:{placeholder:"请输入"},nativeOn:{keyup:function(e){t.addBoorModel.price=t.addBoorModel.price.replace(/[^\.\d]/g,"")}},model:{value:t.addBoorModel.price,callback:function(e){t.$set(t.addBoorModel,"price",e)},expression:"addBoorModel.price"}})],1)],1),t._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:"起售"}},[o("el-input",{attrs:{placeholder:"请输入"},nativeOn:{keyup:function(e){t.addBoorModel.minSell=t.addBoorModel.minSell.replace(/[^\.\d]/g,"")}},model:{value:t.addBoorModel.minSell,callback:function(e){t.$set(t.addBoorModel,"minSell",e)},expression:"addBoorModel.minSell"}})],1)],1),t._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:"备注"}},[o("el-input",{attrs:{placeholder:"请输入"},model:{value:t.addBoorModel.send,callback:function(e){t.$set(t.addBoorModel,"send",e)},expression:"addBoorModel.send"}})],1)],1)],1)],1),t._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(e){t.boorChlidenEditShow=!1}}},[t._v("取 消")]),t._v(" "),o("el-button",{attrs:{type:"success"},on:{click:t.boorChlidenEditSave}},[t._v("保 存")])],1)])],1)},staticRenderFns:[]},b=o("VU/8")(f,v,!1,null,null,null).exports,g={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"mainBox"},[this._v("\n\t22222\n")])},staticRenderFns:[]},_=o("VU/8")(null,g,!1,null,null,null).exports;s.default.use(l.a);var w=new l.a({routes:[{path:"/",name:"login",component:r,meta:{keepAlive:!0}},{path:"/",name:"layout",component:d,redirect:{name:"doorCount"},children:[{path:"doorCount",name:"doorCount",component:b},{path:"index2",name:"index2",component:_}]}]}),y=o("zL8q"),S=o.n(y),$={install:function(t,e){t.prototype.jump=function(t){"back"==t?this.$router.go(-1):this.$router.push({name:t})},t.prototype.dateFormat=function(t){var e=new Date(new Date),o=e.getFullYear(),s=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1,n=e.getDate()<10?"0"+e.getDate():e.getDate(),a=e.getHours()<10?"0"+e.getHours():e.getHours(),l=e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes(),i=e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds();return"ymd"==t?o+"-"+s+"-"+n:o+"-"+s+"-"+n+" "+a+":"+l+":"+i},t.prototype.showLoading=function(){showLoading()},t.prototype.hideLoading=function(){hideLoading()}}},x=$,k=o("yXtV"),O=o.n(k);o("tvR6"),o("CuRo");s.default.use(S.a),s.default.use(x),s.default.use(O.a,{namespace:"vuejs__",name:"ls",storage:"local"}),s.default.config.productionTip=!1,new s.default({el:"#app",router:w,components:{App:a},template:"<App/>"})},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f3783f14bd315fde51db.js.map