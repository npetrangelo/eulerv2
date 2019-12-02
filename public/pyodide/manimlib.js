var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};Module.checkABI(1);if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0;Module.finishedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="manimlib.data";var REMOTE_PACKAGE_BASE="manimlib.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata.remote_package_size;var PACKAGE_UUID=metadata.package_uuid;function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.7",true,true);Module["FS_createPath"]("/lib/python3.7","site-packages",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","manimlib",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/manimlib","utils",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/manimlib","mobject",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/manimlib/mobject","types",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/manimlib/mobject","svg",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/manimlib","animation",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/manimlib","camera",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/manimlib","scene",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/manimlib","web",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/manimlib","container",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/manimlib","files",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","manimlib-0.1.11.dev103-py3.7.egg-info",true,true);Module["FS_createPath"]("/","bin",true,true);function DataRequest(start,end,audio){this.start=start;this.end=end;this.audio=audio}DataRequest.prototype={requests:{},open:function(mode,name){this.name=name;this.requests[name]=this;Module["addRunDependency"]("fp "+this.name)},send:function(){},onload:function(){var byteArray=this.byteArray.subarray(this.start,this.end);this.finish(byteArray)},finish:function(byteArray){var that=this;Module["FS_createPreloadedFile"](this.name,null,byteArray,true,true,function(){Module["removeRunDependency"]("fp "+that.name)},function(){if(that.audio){Module["removeRunDependency"]("fp "+that.name)}else{err("Preloading file "+that.name+" failed")}},false,true);this.requests[this.name]=null}};function processPackageData(arrayBuffer){Module.finishedDataFileDownloads++;assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:284511,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1047,1839,2732,3834,4767,5809,6899,8039,9176,9952,11192,12526,13711,15113,16450,17830,18966,20213,21520,22727,23953,25099,26375,27455,28673,29964,31189,32530,33897,35071,36159,37061,38169,39402,40519,41623,42806,43874,44879,46024,47209,48176,49307,50354,51400,52405,53608,54612,55831,56891,57916,58962,59968,61149,62308,63376,64398,65286,66237,67301,68295,69285,70122,71187,72175,73228,74173,75087,75996,77047,78067,79167,80346,81510,82656,83875,84980,86164,87327,88419,89545,90598,91797,92691,93844,94912,96042,97014,98051,99228,100237,101351,102446,103475,104602,105715,106894,108101,109242,109995,110830,111572,112561,113599,114700,115694,116908,117909,119076,120256,121288,122264,123428,124422,125423,126588,127653,128847,129722,130551,131673,132860,133950,134939,136096,137228,138227,139443,140470,141387,142281,143330,144301,145374,146398,147574,148586,149606,150318,151192,152253,153403,154513,155659,156808,157885,158911,160077,161043,162125,163211,164214,165364,166422,167496,168466,169530,170501,171596,172673,173837,175015,176241,177289,178394,179475,180589,181731,182726,183650,184625,185708,186803,187811,188743,189688,190633,191767,192844,193859,194929,196044,197072,198193,199339,200505,201660,202507,203482,204649,205654,206666,207614,208648,209555,210568,211536,212661,213646,214744,215504,216576,217711,218641,219642,220795,221767,223002,223922,224988,226111,227215,228239,229158,230167,231102,232261,233354,234483,235553,236556,237618,238640,239634,240621,242362,243727,245441,247171,248578,250303,251915,253611,255153,256866,258377,260133,261738,263437,264787,266477,267866,269502,271070,272365,273443,274763,276125,277487,278302,279640,280837,282190,283644],sizes:[1047,792,893,1102,933,1042,1090,1140,1137,776,1240,1334,1185,1402,1337,1380,1136,1247,1307,1207,1226,1146,1276,1080,1218,1291,1225,1341,1367,1174,1088,902,1108,1233,1117,1104,1183,1068,1005,1145,1185,967,1131,1047,1046,1005,1203,1004,1219,1060,1025,1046,1006,1181,1159,1068,1022,888,951,1064,994,990,837,1065,988,1053,945,914,909,1051,1020,1100,1179,1164,1146,1219,1105,1184,1163,1092,1126,1053,1199,894,1153,1068,1130,972,1037,1177,1009,1114,1095,1029,1127,1113,1179,1207,1141,753,835,742,989,1038,1101,994,1214,1001,1167,1180,1032,976,1164,994,1001,1165,1065,1194,875,829,1122,1187,1090,989,1157,1132,999,1216,1027,917,894,1049,971,1073,1024,1176,1012,1020,712,874,1061,1150,1110,1146,1149,1077,1026,1166,966,1082,1086,1003,1150,1058,1074,970,1064,971,1095,1077,1164,1178,1226,1048,1105,1081,1114,1142,995,924,975,1083,1095,1008,932,945,945,1134,1077,1015,1070,1115,1028,1121,1146,1166,1155,847,975,1167,1005,1012,948,1034,907,1013,968,1125,985,1098,760,1072,1135,930,1001,1153,972,1235,920,1066,1123,1104,1024,919,1009,935,1159,1093,1129,1070,1003,1062,1022,994,987,1741,1365,1714,1730,1407,1725,1612,1696,1542,1713,1511,1756,1605,1699,1350,1690,1389,1636,1568,1295,1078,1320,1362,1362,815,1338,1197,1353,1454,867],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData.data=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData});Module["removeRunDependency"]("datafile_manimlib.data")}Module["addRunDependency"]("datafile_manimlib.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.7/site-packages/manimlib/media_dir.txt",start:0,end:5,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/__init__.py",start:5,end:2008,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/config.py",start:2008,end:10755,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/ctex_template.tex",start:10755,end:11249,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/tex_template.tex",start:11249,end:11743,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/extract_scene.py",start:11743,end:16677,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/imports.py",start:16677,end:20272,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/constants.py",start:20272,end:27720,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/config_ops.py",start:27720,end:30521,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/images.py",start:30521,end:31135,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/simple_functions.py",start:31135,end:33412,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/color.py",start:33412,end:36153,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/rate_functions.py",start:36153,end:38319,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/strings.py",start:38319,end:40182,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/iterables.py",start:40182,end:43300,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/file_ops.py",start:43300,end:45305,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/paths.py",start:45305,end:46729,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/tex_file_writing.py",start:46729,end:49645,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/sounds.py",start:49645,end:50384,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/space_ops.py",start:50384,end:56252,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/bezier.py",start:56252,end:60812,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/probability.py",start:60812,end:68697,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/numbers.py",start:68697,end:73303,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/geometry.py",start:73303,end:98213,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/value_tracker.py",start:98213,end:99610,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/number_line.py",start:99610,end:105828,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/shape_matchers.py",start:105828,end:108060,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/changing.py",start:108060,end:111262,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/mobject.py",start:111262,end:148990,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/mobject_update_utils.py",start:148990,end:151584,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/vector_field.py",start:151584,end:163064,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/three_d_shading_utils.py",start:163064,end:164465,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/three_dimensions.py",start:164465,end:168747,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/coordinate_systems.py",start:168747,end:182190,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/functions.py",start:182190,end:185284,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/three_d_utils.py",start:185284,end:186856,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/matrix.py",start:186856,end:192659,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/frame.py",start:192659,end:193702,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/types/image_mobject.py",start:193702,end:197382,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/types/vectorized_mobject.py",start:197382,end:230589,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/types/point_cloud_mobject.py",start:230589,end:238915,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/svg/brace.py",start:238915,end:243691,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/svg/drawings.py",start:243691,end:277417,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/svg/svg_mobject.py",start:277417,end:292629,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/svg/tex_mobject.py",start:292629,end:303857,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/growing.py",start:303857,end:305108,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/numbers.py",start:305108,end:306830,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/transform.py",start:306830,end:316600,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/composition.py",start:316600,end:321538,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/movement.py",start:321538,end:323758,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/creation.py",start:323758,end:328904,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/animation.py",start:328904,end:334069,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/indication.py",start:334069,end:341946,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/specialized.py",start:341946,end:344572,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/rotation.py",start:344572,end:345990,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/fading.py",start:345990,end:350016,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/update.py",start:350016,end:351252,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/camera/moving_camera.py",start:351252,end:354358,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/camera/three_d_camera.py",start:354358,end:362865,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/camera/camera.py",start:362865,end:379418,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/camera/multi_camera.py",start:379418,end:381658,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/camera/mapping_camera.py",start:381658,end:386161,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/scene/vector_space_scene.py",start:386161,end:404674,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/scene/media_dir.txt",start:404674,end:404679,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/scene/zoomed_scene.py",start:404679,end:408192,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/scene/sample_space_scene.py",start:408192,end:413494,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/scene/moving_camera_scene.py",start:413494,end:414664,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/scene/three_d_scene.py",start:414664,end:421097,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/scene/reconfigurable_scene.py",start:421097,end:423144,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/scene/graph_scene.py",start:423144,end:442730,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/scene/scene.py",start:442730,end:461220,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/web/web_mock.py",start:461220,end:500124,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/web/utils.py",start:500124,end:502239,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/web/web_scene.py",start:502239,end:504595,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/container/container.py",start:504595,end:505303,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/files/Bubbles_thought.svg",start:505303,end:506646,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/files/Bubbles_speech.svg",start:506646,end:507362,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/files/PiCreatures_plain.svg",start:507362,end:509199,audio:0},{filename:"/lib/python3.7/site-packages/manimlib-0.1.11.dev103-py3.7.egg-info/SOURCES.txt",start:509199,end:512025,audio:0},{filename:"/lib/python3.7/site-packages/manimlib-0.1.11.dev103-py3.7.egg-info/requires.txt",start:512025,end:512038,audio:0},{filename:"/lib/python3.7/site-packages/manimlib-0.1.11.dev103-py3.7.egg-info/pbr.json",start:512038,end:512086,audio:0},{filename:"/lib/python3.7/site-packages/manimlib-0.1.11.dev103-py3.7.egg-info/top_level.txt",start:512086,end:512095,audio:0},{filename:"/lib/python3.7/site-packages/manimlib-0.1.11.dev103-py3.7.egg-info/entry_points.txt",start:512095,end:512136,audio:0},{filename:"/lib/python3.7/site-packages/manimlib-0.1.11.dev103-py3.7.egg-info/dependency_links.txt",start:512136,end:512137,audio:0},{filename:"/lib/python3.7/site-packages/manimlib-0.1.11.dev103-py3.7.egg-info/not-zip-safe",start:512137,end:512138,audio:0},{filename:"/lib/python3.7/site-packages/manimlib-0.1.11.dev103-py3.7.egg-info/PKG-INFO",start:512138,end:521150,audio:0},{filename:"/bin/manim",start:521150,end:521322,audio:0}],remote_package_size:288607,package_uuid:"a867452b-80b4-4f51-95f7-5359b3c47292"})})();