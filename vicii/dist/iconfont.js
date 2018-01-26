;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-sousuo_sousuo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M872.834 819.031l-0.021-0.020v0.020h0.021c6.611 7.724 9.929 16.273 9.929 25.645 0 10.485-3.728 19.446-11.186 26.902-6.683 6.903-16.034 11.188-26.387 11.188-0.189 0-0.376-0.002-0.564-0.006-4.4 0-8.664-0.7-12.804-2.079-6.214-2.076-11.451-5.687-15.438-10.387l0.112 0.893-204.607-206.068c-49.128 34.771-104.085 52.135-164.831 52.135-6.077 0-12.277-0.268-18.622-0.803-12.503-1.101-23.947-3.154-35.015-6.127-34.433-2.314-79.83-21.736-117.236-50.923-22.673-13.314-53.59-46.129-76.785-86.976-18.876-31.629-31.618-69.022-35.597-108.993 2.099 24.518-2.324-3.171-2.664-31.839 0.219 9.819 0.022 3.726 0.022-2.411 0-17.23 1.554-34.097 4.529-50.469 7.223-45.086 25.601-86.609 52.198-121.533 13.217-24.748 55.417-62.558 105.78-85.633-26.24 10.779 0.95-4.114 31.044-14.598 27.503-9.971 59.247-15.738 92.338-15.738 0.003 0 0.006 0 0.007 0 13.266 0 25.953 0.824 38.128 2.493 32.566 4.409 63.753 14.337 93.58 29.785 48.239 25.143 87.102 62.529 113.335 108.106-9.518-21.469 10.215 10.521 23.749 47.495 13.533 36.974 19.486 74.485 17.818 112.552-2.204 63.464-24.018 120.564-65.441 171.319l205.41 206.068h-0.803zM690.599 440.818c0.21-3.697 0.33-8.022 0.33-12.373 0-31.328-6.205-61.208-17.456-88.475-13.231-34.958-34.583-65.86-61.735-90.484 21.143 20.301 6.93 4.997-9.343-8.537-30.272-25.39-67.305-43.731-107.998-51.99 25.734 4.367-9.068-3.862-45.794-3.862-9.87 0-19.603 0.595-29.162 1.749-1.639-0.081-4.336 0.248-6.931 0.839l-4.358 0.695c-44.686 7.108-84.078 25.889-116.086 53.095-23.983 14.957-55.634 55.983-72.075 104.063-2.047-6.829-13.232 30.701-15.189 72.084-1.936 41.383 5.645 79.738 22.782 115.043 20.889 45.873 54.812 82.768 97.015 106.791-0.152 5.549 43.151 25.628 90.828 31.684 1.539 3.059 37.155 4.997 73.039-1.081 30.977-5.587 58.609-16.326 83.316-31.388 8.622-1.65 39.887-25.597 64.428-55.302-9.505 15.858 17.567-17.681 35.063-56.467-25.001 44.533-14.64 28.672-6.36 11.575v0.021c15.865-30.484 25.376-66.489 25.885-104.668z" fill="#cdcdcd" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zuoyoujiantouicon-defuben" viewBox="0 0 1262 1024">' +
    '' +
    '<path d="M843.145477 1024c11.346605 0 22.672209-4.525741 31.335172-13.538222 17.307923-18.044463 17.307923-47.291523 0-65.314984L467.562942 521.005168c-4.792756-5.017768-4.792756-12.984693 0.061503-18.042963L874.461148 78.840081c17.327424-18.044463 17.327424-47.291523 0-65.314985-17.327424-18.023461-45.345919-18.042962-62.692844 0L404.850597 437.689223c-39.201591 40.982186-39.201591 107.648742-0.061504 148.630929l407.000212 424.164127c8.683963 8.98998 20.030569 13.515721 31.356172 13.515721z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zuoyoujiantouicon-defuben1" viewBox="0 0 1262 1024">' +
    '' +
    '<path d="M419.75589 0c-11.346578 0-22.672155 4.525731-31.335097 13.53819-17.307882 18.044419-17.307882 47.29141 0 65.314828l406.916735 424.140613c4.792744 5.017756 4.792744 12.984662-0.061503 18.042919l-406.835731 424.121112c-17.327383 18.044419-17.327383 47.29141 0 65.314829s45.345811 18.042919 62.692694 0l406.916736-424.163114c39.201498-40.982088 39.201498-107.648485 0.061503-148.630574L451.111987 13.515689c-8.683943-8.989958-20.030521-13.515689-31.356097-13.515689z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)