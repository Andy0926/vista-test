import logo from './logo.svg';
import './App.css';
import './3dvista.css'

function App() {
  const style1 = {
    zIndex: "4",
    position: "absolute",
    left: "0%", 
    top: "50%",
    width: "100.00%",
    height: "10.00%"
  };
  const style2 ={
    textAlign:"left", 
    color:"#000" 
  };
  const style3 = {
    textAlign:"center",
    fontSize:"1.6666666666666663vmin"
  };
  const style4 ={
    display:"inline-block",
     letterSpacing:"0vmin",
      whiteSpace:"pre-wrap",
      color:"#777777",
      fontSize:"1.67vmin",
      fontFamily:"Arial, Helvetica, sans-serif"
  };

  const style5 = {
    textDecoration:"none",
    color:"inherit"
  };
  const style6 ={
    display:"inline-block",
     letterSpacing:"0vmin",
      whiteSpace:"pre-wrap",
      color:"#999999",
      fontSize:"1.48vmin",
      fontFamily:"Arial, Helvetica, sans-serif"
  };
  


  return (
    <>

      <head>
        <title>Untitled 1</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" id="metaViewport" content="user-scalable=no, initial-scale=1, width=device-width, viewport-fit=cover" data-tdv-general-scale="0.5" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <script src="lib/tdvplayer.js?v=1661512972751"></script>
        <link rel="preload" href="locale/en.txt?v=1661512972751" as="fetch" crossorigin="anonymous" />
        <link rel="preload" href="script.js?v=1661512972751" as="script" />
        <link rel="preload" href="media/panorama_CE8CE039_C54F_07F7_41E8_7B7431916118_0/r/3/0_0.jpg?v=1661512972751" as="image" />
        <link rel="preload" href="media/panorama_CE8CE039_C54F_07F7_41E8_7B7431916118_0/l/3/0_0.jpg?v=1661512972751" as="image" />
        <link rel="preload" href="media/panorama_CE8CE039_C54F_07F7_41E8_7B7431916118_0/u/3/0_0.jpg?v=1661512972751" as="image" />
        <link rel="preload" href="media/panorama_CE8CE039_C54F_07F7_41E8_7B7431916118_0/d/3/0_0.jpg?v=1661512972751" as="image" />
        <link rel="preload" href="media/panorama_CE8CE039_C54F_07F7_41E8_7B7431916118_0/f/3/0_0.jpg?v=1661512972751" as="image" />
        <link rel="preload" href="media/panorama_CE8CE039_C54F_07F7_41E8_7B7431916118_0/b/3/0_0.jpg?v=1661512972751" as="image" />
        <meta name="description" content="Virtual Tour" />
        <meta name="theme-color" content="#FFFFFF" />
        <script src="script.js?v=1661512972751"></script>
        <script type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
          var tour;
          var devicesUrl = {"general":"script_general.js?v=1661512972751"};

          (function()
          {
            var deviceType = ['general'];
          if(TDV.PlayerAPI.mobile)
          deviceType.unshift('mobile');
          if(TDV.PlayerAPI.device == TDV.PlayerAPI.DEVICE_IPAD)
          deviceType.unshift('ipad');
          var url;
          for(var i=0; i<deviceType.length; ++i) {
                var d = deviceType[i];
          if(d in devicesUrl) {
            url = devicesUrl[d];
          break;
                }
            }
          if(typeof url == "object") {
                var orient = TDV.PlayerAPI.getOrientation();
          if(orient in url) {
            url = url[orient];
                }
            }
          var link = document.createElement('link');
          link.rel = 'preload';
          link.href = url;
          link.as = 'script';
          var el = document.getElementsByTagName('script')[0];
          el.parentNode.insertBefore(link, el);
        })();

          function loadTour()
          {
            if(tour) return;

          if (/AppleWebKit/.test(navigator.userAgent) && /Mobile\/\w+/.test(navigator.userAgent)) {
                var preloadContainer = document.getElementById('preloadContainer');
          if(preloadContainer)
          document.body.style.backgroundColor = window.getComputedStyle(preloadContainer).backgroundColor;
            }

          var settings = new TDV.PlayerSettings();
          settings.set(TDV.PlayerSettings.CONTAINER, document.getElementById('viewer'));
          settings.set(TDV.PlayerSettings.WEBVR_POLYFILL_URL, 'lib/WebVRPolyfill.js?v=1661512972751');
          settings.set(TDV.PlayerSettings.HLS_URL, 'lib/Hls.js?v=1661512972751');
          settings.set(TDV.PlayerSettings.QUERY_STRING_PARAMETERS, 'v=1661512972751');

          tour = new TDV.Tour(settings, devicesUrl);
          tour.bind(TDV.Tour.EVENT_TOUR_INITIALIZED, onVirtualTourInit);
          tour.bind(TDV.Tour.EVENT_TOUR_LOADED, onVirtualTourLoaded);
          tour.bind(TDV.Tour.EVENT_TOUR_ENDED, onVirtualTourEnded);
          tour.load();
        }

          function pauseTour()
          {
            if(!tour)
          return;

          tour.pause();
        }

          function resumeTour()
          {
            if(!tour)
          return;

          tour.resume();
        }

          function onVirtualTourInit()
          {
            var updateTexts = function() {
            document.title = this.trans("tour.name")
          };

          tour.locManager.bind(TDV.Tour.LocaleManager.EVENT_LOCALE_CHANGED, updateTexts.bind(tour.locManager));

          if (tour.player.cookiesEnabled)
          enableCookies();
          else
          tour.player.bind('enableCookies', enableCookies);
        }

          function onVirtualTourLoaded()
          {
            disposePreloader();
        }

          function onVirtualTourEnded()
          {

          }

          function enableCookies()
          {

          }

          function setMediaByIndex(index) {
            if(!tour)
          return;

          tour.setMediaByIndex(index);
        }

          function setMediaByName(name)
          {
            if(!tour)
          return;

          tour.setMediaByName(name);
        }

          function showPreloader()
          {
            var preloadContainer = document.getElementById('preloadContainer');
          if(preloadContainer != undefined)
          preloadContainer.style.opacity = 1;
        }

          function disposePreloader()
          {
            var preloadContainer = document.getElementById('preloadContainer');
          if(preloadContainer == undefined)
          return;

          var transitionEndName = transitionEndEventName();
          if(transitionEndName)
          {
            preloadContainer.addEventListener(transitionEndName, hide, false);
          preloadContainer.style.opacity = 0;
          setTimeout(hide, 500); //Force hide. Some cases the transitionend event isn't dispatched with an iFrame.
            }
          else
          {
            hide();
            }

          function hide()
          {

            document.body.style.backgroundColor = window.getComputedStyle(preloadContainer).backgroundColor;
          preloadContainer.style.visibility = 'hidden';
          preloadContainer.style.display = 'none';
          var videoList = preloadContainer.getElementsByTagName("video");
          for(var i=0; i<videoList.length; ++i)
          {
                    var video = videoList[i];
          video.pause();
          while (video.children.length)
          video.removeChild(video.children[0]);
                }
            }

          function transitionEndEventName () {
                var el = document.createElement('div');
          var transitions = {
            'transition':'transitionend',
          'OTransition':'otransitionend',
          'MozTransition':'transitionend',
          'WebkitTransition':'webkitTransitionEnd'
                    };

          var t;
          for (t in transitions) {
                    if (el.style[t] !== undefined) {
                        return transitions[t];
                    }
                }

          return undefined;
            }
        }

          function onBodyClick(){
            document.body.removeEventListener("click", onBodyClick);
          document.body.removeEventListener("touchend", onBodyClick);
            
        }

          function onLoad() {
            if (/AppleWebKit/.test(navigator.userAgent) && /Mobile\/\w+/.test(navigator.userAgent))
          {
                var onOrientationChange = function()
          {
            document.documentElement.style.height = 'initial';
          Array.from(document.querySelectorAll('.fill-viewport')).forEach(function(element)
          {
            element.classList.toggle('landscape-right', window.orientation == -90);
          element.classList.toggle('landscape-left', window.orientation == 90);
                    });
          setTimeout(function()
          {
            document.documentElement.style.height = '100%';
                    }, 500);
                };
          window.addEventListener('orientationchange', onOrientationChange);
          onOrientationChange();
            }

          var params = getParams(location.search.substr(1));
          if(params.hasOwnProperty("skip-loading"))
          {
            loadTour();
          disposePreloader();
          return;
            }

          if (isOVRWeb()){
            showPreloader();
          loadTour();
          return;
            }

          showPreloader();
          loadTour();
        }

          function playVideo(video) {
            function isSafariDesktopV11orGreater() {
              return /^((?!chrome|android|crios|ipad|iphone).)*safari/i.test(navigator.userAgent) && parseFloat(/Version\/([0-9]+\.[0-9]+)/i.exec(navigator.userAgent)[1]) >= 11;
            }

            function hasAudio (video) {
                return video.mozHasAudio ||
          Boolean(video.webkitAudioDecodedByteCount) ||
          Boolean(video.audioTracks && video.audioTracks.length);
            }

          function detectUserAction() {
                var onVideoClick = function(e) {
                    if(video.paused) {
            video.play();
                    }
          video.muted = false;
          if(hasAudio(video))
          {
            e.stopPropagation();
          e.stopImmediatePropagation();
          e.preventDefault();
                    }

          video.removeEventListener('click', onVideoClick);
          video.removeEventListener('touchend', onVideoClick);
                };
          video.addEventListener("click", onVideoClick);
          video.addEventListener("touchend", onVideoClick);
            }

          if (isSafariDesktopV11orGreater()) {
            video.muted = true;
          video.play();
            } else {
                var canPlay = true;
          var promise = video.play();
          if (promise) {
            promise.catch(function () {
              video.muted = true;
              video.play();
              detectUserAction();
            });
                } else {
            canPlay = false;
                }

          if (!canPlay || video.muted) {
            detectUserAction();
                }
            }
        }

          function isOVRWeb(){
            return window.location.hash.substring(1).split('&').indexOf('ovrweb') > -1;
        }

          function getParams(params) {
            var queryDict = { }; params.split("&").forEach(function(item) {var k = item.split("=")[0], v = decodeURIComponent(item.split("=")[1]);queryDict[k.toLowerCase()] = v});
          return queryDict;
        }

          document.addEventListener('DOMContentLoaded', onLoad);
          
          `
          }}>

        </script>
      </head>
      <body>
        <div id="preloadContainer" class="fill-viewport">
          <div style={style1}>
          <div style={style2}>
            <div style={style3}>
              <span style={style4}>Loading virtual tour. Please wait...</span>
            </div>
            <div style={style3}>
              <span style={style4}>created with the trial of 3DVista VT Pro</span>
            </div>
            <div style={style3}>
              <a target="_blank" href="https://www.3dvista.com" style={style5}>
                <span style={style6}><u>www.3DVista.com</u></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="viewer" class="fill-viewport"></div>
    </body>
    </>
  );
}

export default App;
