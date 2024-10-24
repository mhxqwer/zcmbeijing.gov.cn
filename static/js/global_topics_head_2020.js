/*----------------------------
@files:首都之窗全网专题输出文件
@author:ch
@date:2020/03/18
----------------------------*/
document.write("<style>body,h1,h2,h3,h4,h5,h6,div,dl,dt,dd,ol,ul,li,form,table,th,td,a,img,span,strong,var,em,input,textarea,select,option{margin:0;padding:0;}html,body{min-width: 1200px;font-family:\"Microsoft YaHei\",\"SimSun\",\"Arail\",\"Tabhoma\";font-size:12px;text-align:left;}ul,ol{list-style:none;}img{border:0;vertical-align:middle;}input,select,textarea{outline:0;}textarea{resize:none;}table{border-collapse:collapse;border-spacing:0;}a{text-decoration:none;}a:link,a:visited,a:hover,a:active{text-decoration:none;}.Whidden{display:none;visibility:hidden;}.Wclear{display:block;*zoom:1;}.Wclear:after{content:'';overflow:hidden;width:100%;height:0px;font-size:0px;display:block;clear:both;}#w_header *{box-sizing: content-box;-moz-box-sizing: content-box;-webkit-box-sizing: content-box;}#w_header{width:100%;border-bottom:1px solid #E5E5E5;border-top:3px solid #bd1a2d;height:126px;background:#fff;}.w_header_main{width:1200px;margin:0 auto;position: relative;}.w_header_home{float:left;}.w_header_home_img{float:left;margin-top:25px;}.w_header_home_img img{padding:3px 0 0px 10px;}.w_header_home_text{float:left;font-size:14px;line-height:42px;color:#333;}.toggle_btn{display:none;}.g-header-search{float:left;width:340px;border-radius:8px;height:48px;margin-top:45px;border:1px solid #b5b5b5;position:relative;background:#fff;margin-left:25px;margin-right:25px;+z-index:100;}.g-header-search .u-search-row{float:left;width:80px;height:22px;line-height:22px;padding-left:10px;color:#666;border-right:1px solid #b5b5b5;cursor:pointer;outline:0;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;margin-top:6px;font-size:12px}.g-header-search #keyword{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;float:left;width:235px;height:48px;line-height:48px;font-size:14px;color:#444;background:0;border-radius: 5px 0 0 5px;padding-left: 2%;}.g-header-search #searchbutton{float:right;background: #f5f5f6 url(https://www.beijing.gov.cn/images/ico_searchbtn_ch_20190924.png) center no-repeat;border:0;border-top-right-radius: 8px;border-bottom-right-radius: 8px;width:50px;height:48px;line-height:48px;font-size:12px;color:#808080;cursor: pointer;font-family: \"Microsoft YaHei\",\"SimSun\",\"Arail\",\"Tabhoma\",sans-serif;}.g-header-search .u-search-recommend{position:absolute;padding:0 18px 2px 18px;top:36px;left:5px;background:#FFF;border:1px solid #b5b5b5;border-top:0;display:none;overflow:hidden;z-index:9999;}.u-search-recommend li{font-size:12px;height:28px;line-height:28px;color:#666;cursor:pointer}.u-search-recommend li:hover{color:#f71501}.u-search-recommend .u-line{height:0;border-top:1px solid #b5b5b5}.g-header-function{float:left;width:210px;margin-left:70px}.w_header_nav_box{float:right;}.w_header_nav_box li{float:left;font-size:12px;line-height:126px;background:url(\"https://www.beijing.gov.cn/ywdt/images/zhuanti/2016/zdlyxxgk/bg01.gif\") no-repeat 0px center}.w_header_nav_box li a{color:#333;padding:0 10px;}.w_header_nav_box .u-no-bg{background:none;}.w_header_home_logo{float: left;margin-top: 36px;cursor: default;}.u_special{position:absolute;right:10px;top:25px;font-size:12px;color:#d30b15!important}.m-login-box{font-size: 12px;position: absolute;right:85px;top:25px;width:93%;text-overflow: ellipsis;white-space: nowrap;overflow:hidden;text-align:right;color:#d30b15!important;}.m-login-box a {color:#d30b15!important;}.g-header-search .u-icon-qa{float:right;width:50px;height: 37px;line-height:50px;color:#808080;margin: 10px 10px 0 0;font-size:12px;}.z-none{display: none!important;}.voice-draw{display: none;position: fixed;top: 0;left: 0;width: 100%;height: 100%;background: rgba(0, 0, 0, .3);z-index:10000;}.voice-div{padding: 20px;box-sizing: border-box;width: 680px;height: 389px;background: #FFFFFF;border-radius: 10px;position: fixed;top: 0;left: 0;right: 0;bottom: 0;margin: auto;}.voice-head{text-align: right;margin-bottom: 30px;}.voice-head .voice-close{display: inline-block;width: 20px;height: 20px;background: url(\"https://www.beijing.gov.cn/images/speech/voice-close.png\") no-repeat;background-size: 100% 100%;cursor: pointer;}.voice-con{height: 100px;font-size: 24px;line-height: 32px;text-align: center;}.voice-tips-time{color: #CCCCCC;}.identify-txt{max-height: 160px;overflow-y: scroll;}.identify-txt::-webkit-scrollbar{display: none;}.voice-button{text-align: center;}.voice-button-png{display: inline-block;width: 100px;height: 100px;background: url(\"https://www.beijing.gov.cn/images/speech/voice-button-png.png\") no-repeat;background-size: 100% 100%;cursor: pointer;}.voice-button-gif{display: inline-block;width: 100px;height: 100px;background: url(\"https://www.beijing.gov.cn/images/speech/voice-button-gif.gif\") no-repeat;background-size: 100% 100%;cursor: pointer;}.noIdentify-txt, .voice-button-png{display: none;}.inp{display: flex;align-items: center;position: relative;width: fit-content;}.voiceBtn{position: absolute;width: 12px;height: 20px;background: url(\"https://www.beijing.gov.cn/images/speech/voice.png\") no-repeat;background-size: 100% 100%;left: 76%;cursor: pointer;top: 50%;margin-top: -10px;}@media only screen and (max-width: 750px){html, body{min-width:auto;}#w_header,.g_links_box,.g_foot_box,.g_head_box,.g-nav-box,.public_nav,.jingtong_hide{display:none;}.w_header_main{width:100%;}.g-header-search,.w_header_home_logo,.u_special{display:none;}.toggle_btn{display:block;float:right;margin:37px 15px 0 0;}.w_header_nav_box{float:left;width:100%;height:0px;overflow:hidden;}.w_header_nav_box li{float:none;background:none;font-size:16px;border-bottom:1px dotted #bd1a2d;text-align:center;line-height:40px;}.w_header_nav_box .w_header_select{border:none;}#w_header{height:auto;}.w_header_home{width:70%;height: 100px;}.w_header_home_img img{width:240px;}.m-login-box{top:12px;}.w_header_nav_box{display: none;height: auto;position:absolute;left:0;top:95px;background: #fff;z-index: 9999;}.m-login-box{text-align: left;width:50px;right:65px;top:26px;}.m-login-box a{display:inline-block;text-indent: -9999px;background: url(https://www.beijing.gov.cn/images/public_head_login_ch_20200521.png) center no-repeat;width: 50px;height: 50px;}.m_mobile_menu_btn i {background-color: #bd1a2d;}.m_mobile_menu_btn .m_z_hover {background: transparent;}.z_cur,.m_z_hover {position: relative;display: inline-block;vertical-align: top;height: 4px;width: 30px;top:12px;right: 10px;}.z_cur:before,.z_cur:after,.m_z_hover:before,.m_z_hover:after {position: absolute;content: \"\";background-color: #bd1a2d;height: 100%;width: 100%;left: 0;}.z_cur:before {transform: translateY(-250%);-webkit-transform: translateY(-250%);}.z_cur:after {transform: translateY(250%);-webkit-transform: translateY(250%);}.m_z_hover {background-color: transparent;}.m_z_hover:before {transform: translateY(0) rotate(45deg);-webkit-transform: translateY(0) rotate(45deg);}.m_z_hover:after {transform: translateY(0) rotate(-45deg);-webkit-transform: translateY(0) rotate(-45deg);}.voice-div{padding:2%;width:100%;height: 289px;}.voice-con{height:80px;}}</style>");
document.write("<div id=\"w_header\"><div class=\"w_header_main Wclear\"><div class=\"w_header_home Wclear\"><a class=\"w_header_home_img\" href=\"https://www.beijing.gov.cn/\" target=\"_blank\"><img src=\"https://www.beijing.gov.cn/images/topics_logo_ch_20191009.png\" alt=\"首都之窗_北京市人民政府门户网站\" /></a></div><div class=\"toggle_btn\"><span class=\"m_mobile_menu_btn\"><i class=\"z_cur\"></i></span></div><div class=\"g-header-search\"><form id=\"search\" method=\"get\" name=\"searchForm\" action=\"\" target=\"_blank\"><input name=\"database\" type=\"hidden\" id=\"database\" value=\"bj\" /><input type=\"text\" id=\"keyword\" name=\"temp\" value=\"\" title=\"搜索关键词\" onfocus=\"clearInput(this)\" onblur=\"returnInput(this)\" /><a class=\"voiceBtn\" href=\"javascript:void(0)\" title=\"语音搜索\"></a><input id=\"searchbutton\" type=\"submit\" title=\"点击搜索\" alt=\"搜索\" value=\"\" /></form></div><a class=\"w_header_home_logo\" href=\"javascript:;\"><img src=\"https://www.beijing.gov.cn/images/20190419_ch_shouchuang.png\" alt=\"返回首都之窗首页\" /></a><ul class=\"w_header_nav_box Wclear\"><li class=\"u-no-bg\"><a href=\"https://www.beijing.gov.cn/ywdt/\" title=\"要闻动态\" target=\"_blank\">要闻动态</a></li><li><a href=\"https://www.beijing.gov.cn/gongkai/\" target=\"_blank\" title=\"政务公开\">政务公开</a></li><li><a href=\"https://banshi.beijing.gov.cn/\" target=\"_blank\" title=\"政务服务\">政务服务</a></li><li><a href=\"https://zhengce.beijing.gov.cn\" target=\"_blank\" title=\"政策兑现\">政策兑现</a></li><li><a href=\"https://www.beijing.gov.cn/hudong/\" target=\"_blank\" title=\"政民互动\">政民互动</a></li><li class=\"w_header_select\"><a href=\"https://www.beijing.gov.cn/renwen/\" target=\"_blank\" title=\"人文北京\">人文北京</a></li></ul><div class=\"m-login-box\"><a class=\"btn-login\" href=\"https://www.beijing.gov.cn/hudong/yonghu/uSpace/myCenter\" target=\"_blank\">登录个人中心</a><a class=\"btn-username z-none\" href=\"https://www.beijing.gov.cn/hudong/yonghu/uSpace/myCenter\" target=\"_blank\" title=\"\"></a></div><a class=\"u_special\" href=\"https://www.beijing.gov.cn/jj/\" target=\"_blank\">智能问答</a></div></div><div class=\"voice-draw\"><div class=\"voice-div\"><div class=\"voice-head\"><span class=\"voice-close\"></span></div><div class=\"voice-con\"><div class=\"init-txt\"><span class=\"voice-tips-txt\">我在听，请说话</span><span class=\"voice-tips-time\">(10s)</span></div><div class=\"noIdentify-txt\"><span class=\"voice-tips-txt\">抱歉，没听清，请再说一遍吧</span></div><div class=\"identify-txt\"><span class=\"voice-tips-txt\" id=\"voice-search-result\"></span></div></div><div class=\"voice-button\"><span class=\"voice-button-png\" id=\"btn_control\"></span><span class=\"voice-button-gif\"></span></div></div></div>");
document.writeln("<script src=\'https://www.beijing.gov.cn/images/jquery-migrate.min.js\'></script>");
document.writeln("<script src=\'https://www.beijing.gov.cn/hudong/yonghu/js/front/hdSyn.min.js\'></script>");
document.writeln("<script src=\'https://www.beijing.gov.cn/images/speech/speech.umd.js\'></script>");
document.writeln("<script src=\'https://www.beijing.gov.cn/images/speech/speech.js\'></script>");
//默认搜索引擎   --   搜索暂时只显示政策，其他隐藏
$("#search").on("submit",znForm);
//站内搜索
function znForm(){
    var temp = searchForm.temp.value;
    var url = "https://www.beijing.gov.cn/so/s?tab=all&siteCode=1100000088&qt="+encodeURIComponent(temp);
    if(temp == null || temp=="" || temp == "全文搜索"){
        //window.open("https://www.beijing.gov.cn/so");
        alert("请输入您想要搜索的内容");
        return false;
    }
    else{
        window.open(url);
    }
    return false;
}
//京京搜索
function jjForm(){
    var temp = searchForm.temp.value;
    var database = searchForm.database.value;
    var url = "https://www.beijing.gov.cn/jj?question="+encodeURIComponent(temp)+"&database1="+encodeURIComponent(database);
    if(temp==null || temp=="" || temp=="智能搜索"){
        window.open("https://www.beijing.gov.cn/jj");
    }else{
        window.open(url);
    }
    return false;
}
//政策搜索
function zcForm(){
    var temp = searchForm.temp.value;
    var database = searchForm.database.value;
    var url = "https://www.beijing.gov.cn/zhengce/wenjian/jiansuo/searchForZhengCe?ZCYW_XXMC="+encodeURIComponent(temp);
    if(temp==null || temp=="" || temp== "政策搜索"){
        window.open("https://www.beijing.gov.cn/zhengce/wenjian/jiansuo/searchForZhengCe"); 
    }else{
        window.open(url);
    }
    return false;
}
//文本输入框
function clearInput(node){
    if(!node){return;}
    if(node.value == node.defaultValue){node.value = "";}
}
function returnInput(node){
    if(!node){return;}
    if(node.value == ""){node.value = node.defaultValue;}
}
//手机端导航
$('.m_mobile_menu_btn').on('click',function(){
    $(this).children("i").toggleClass('m_z_hover');
    $('.w_header_nav_box').slideToggle();
});