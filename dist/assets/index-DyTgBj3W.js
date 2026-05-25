const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/SplashScreen-DQnSwGWW.js",
      "assets/activity-B_EBu9jR.js",
      "assets/LoginPage-CQV5bMiz.js",
      "assets/input-DxWv1980.js",
      "assets/label-DBpL6Vvx.js",
      "assets/switch-CwA47XvP.js",
      "assets/index-P6GNFLz_.js",
      "assets/useAuth-COcWXV3M.js",
      "assets/useMutation-DMGcHodS.js",
      "assets/phone-i6-Lxs9W.js",
      "assets/lock-DA543Y57.js",
      "assets/eye-off-CPltdNwK.js",
      "assets/eye-CNdW8zu_.js",
      "assets/arrow-right-8rLTEVp1.js",
      "assets/SignupPage-D7OEslje.js",
      "assets/user-BzXy9WCF.js",
      "assets/ForgotPasswordPage-DrfOErvh.js",
      "assets/message-square-DDwqP2AM.js",
      "assets/DashboardPage-8LKKKpi7.js",
      "assets/card-90uzyMSL.js",
      "assets/StatCard-Daylbgwm.js",
      "assets/MatchCard-BsmirRoy.js",
      "assets/clock-BKoxI88n.js",
      "assets/map-pin-BXm7mxFw.js",
      "assets/PlayerCard-DJL6IfjT.js",
      "assets/trending-up-B-gCfQIg.js",
      "assets/SkeletonCard-BKLuwOVl.js",
      "assets/EmptyState-BJtYtocH.js",
      "assets/useMatches-BeFykKQI.js",
      "assets/useQuery-tfLU3Xkm.js",
      "assets/useTeams-gbU3B7c-.js",
      "assets/useStatistics-cHULYohH.js",
      "assets/calendar-Ck_IEEgp.js",
      "assets/StartMatchPage-DtLdgsJw.js",
      "assets/select-6S5Lwv3c.js",
      "assets/chevron-up-CYtXndFe.js",
      "assets/user-check-DFj3OsnQ.js",
      "assets/share-2-Bc6aYDz2.js",
      "assets/LiveScoringPage-Dy1UCuLb.js",
      "assets/dialog-DtHQAndx.js",
      "assets/tabs-WH5KVQZe.js",
      "assets/ScoreBoard-BpICaGwM.js",
      "assets/MatchSummaryPage-Bowc9HyX.js",
      "assets/arrow-left-BBUMc36_.js",
      "assets/MatchHistoryPage-Bgx22dUa.js",
      "assets/filter-DrJ8OCg7.js",
      "assets/MatchViewPage-BrcTuHD7.js",
      "assets/StatisticsPage-C0y9L-hX.js",
      "assets/PlayerProfilePage-BLrlx87N.js",
      "assets/PlayersListPage-B1nWPko3.js",
      "assets/plus-DCJfrik8.js",
      "assets/CreateTeamPage-CD-ooH5m.js",
      "assets/trash-2-24-vOTRu.js",
      "assets/AdminDashboardPage-Qq1ay2jz.js",
      "assets/AdminUsersPage-98LO0r7J.js",
      "assets/AdminMatchesPage-z87E4sC_.js",
      "assets/SettingsPage-6reVsYsA.js",
    ]),
) => i.map((i) => d[i]);
var Um = (e) => {
  throw TypeError(e);
};
var Nc = (e, t, n) => t.has(e) || Um("Cannot " + n);
var O = (e, t, n) => (
    Nc(e, t, "read from private field"),
    n ? n.call(e) : t.get(e)
  ),
  ce = (e, t, n) =>
    t.has(e)
      ? Um("Cannot add the same private member more than once")
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, n),
  te = (e, t, n, r) => (
    Nc(e, t, "write to private field"),
    r ? r.call(e, n) : t.set(e, n),
    n
  ),
  rt = (e, t, n) => (Nc(e, t, "access private method"), n);
var Xa = (e, t, n, r) => ({
  set _(o) {
    te(e, t, o, n);
  },
  get _() {
    return O(e, t, r);
  },
});
function X0(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function Sh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Y0 = { exports: {} },
  Vu = {},
  Z0 = { exports: {} },
  ue = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ca = Symbol.for("react.element"),
  gP = Symbol.for("react.portal"),
  yP = Symbol.for("react.fragment"),
  vP = Symbol.for("react.strict_mode"),
  wP = Symbol.for("react.profiler"),
  xP = Symbol.for("react.provider"),
  SP = Symbol.for("react.context"),
  EP = Symbol.for("react.forward_ref"),
  CP = Symbol.for("react.suspense"),
  bP = Symbol.for("react.memo"),
  PP = Symbol.for("react.lazy"),
  $m = Symbol.iterator;
function RP(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = ($m && e[$m]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var J0 = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ew = Object.assign,
  tw = {};
function Wi(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = tw),
    (this.updater = n || J0));
}
Wi.prototype.isReactComponent = {};
Wi.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Wi.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function nw() {}
nw.prototype = Wi.prototype;
function Eh(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = tw),
    (this.updater = n || J0));
}
var Ch = (Eh.prototype = new nw());
Ch.constructor = Eh;
ew(Ch, Wi.prototype);
Ch.isPureReactComponent = !0;
var zm = Array.isArray,
  rw = Object.prototype.hasOwnProperty,
  bh = { current: null },
  ow = { key: !0, ref: !0, __self: !0, __source: !0 };
function iw(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      rw.call(t, r) && !ow.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: Ca,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: bh.current,
  };
}
function TP(e, t) {
  return {
    $$typeof: Ca,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ph(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ca;
}
function AP(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Wm = /\/+/g;
function Lc(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? AP("" + e.key)
    : t.toString(36);
}
function Tl(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ca:
          case gP:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + Lc(s, 0) : r),
      zm(o)
        ? ((n = ""),
          e != null && (n = e.replace(Wm, "$&/") + "/"),
          Tl(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (Ph(o) &&
            (o = TP(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Wm, "$&/") + "/") +
                e,
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), zm(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = r + Lc(i, a);
      s += Tl(i, t, n, l, o);
    }
  else if (((l = RP(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(i = e.next()).done; )
      ((i = i.value), (l = r + Lc(i, a++)), (s += Tl(i, t, n, l, o)));
  else if (i === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return s;
}
function Ya(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Tl(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function _P(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var St = { current: null },
  Al = { transition: null },
  MP = {
    ReactCurrentDispatcher: St,
    ReactCurrentBatchConfig: Al,
    ReactCurrentOwner: bh,
  };
function sw() {
  throw Error("act(...) is not supported in production builds of React.");
}
ue.Children = {
  map: Ya,
  forEach: function (e, t, n) {
    Ya(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ya(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ya(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ph(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
ue.Component = Wi;
ue.Fragment = yP;
ue.Profiler = wP;
ue.PureComponent = Eh;
ue.StrictMode = vP;
ue.Suspense = CP;
ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = MP;
ue.act = sw;
ue.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = ew({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = bh.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      rw.call(t, l) &&
        !ow.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Ca, type: e.type, key: o, ref: i, props: r, _owner: s };
};
ue.createContext = function (e) {
  return (
    (e = {
      $$typeof: SP,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: xP, _context: e }),
    (e.Consumer = e)
  );
};
ue.createElement = iw;
ue.createFactory = function (e) {
  var t = iw.bind(null, e);
  return ((t.type = e), t);
};
ue.createRef = function () {
  return { current: null };
};
ue.forwardRef = function (e) {
  return { $$typeof: EP, render: e };
};
ue.isValidElement = Ph;
ue.lazy = function (e) {
  return { $$typeof: PP, _payload: { _status: -1, _result: e }, _init: _P };
};
ue.memo = function (e, t) {
  return { $$typeof: bP, type: e, compare: t === void 0 ? null : t };
};
ue.startTransition = function (e) {
  var t = Al.transition;
  Al.transition = {};
  try {
    e();
  } finally {
    Al.transition = t;
  }
};
ue.unstable_act = sw;
ue.useCallback = function (e, t) {
  return St.current.useCallback(e, t);
};
ue.useContext = function (e) {
  return St.current.useContext(e);
};
ue.useDebugValue = function () {};
ue.useDeferredValue = function (e) {
  return St.current.useDeferredValue(e);
};
ue.useEffect = function (e, t) {
  return St.current.useEffect(e, t);
};
ue.useId = function () {
  return St.current.useId();
};
ue.useImperativeHandle = function (e, t, n) {
  return St.current.useImperativeHandle(e, t, n);
};
ue.useInsertionEffect = function (e, t) {
  return St.current.useInsertionEffect(e, t);
};
ue.useLayoutEffect = function (e, t) {
  return St.current.useLayoutEffect(e, t);
};
ue.useMemo = function (e, t) {
  return St.current.useMemo(e, t);
};
ue.useReducer = function (e, t, n) {
  return St.current.useReducer(e, t, n);
};
ue.useRef = function (e) {
  return St.current.useRef(e);
};
ue.useState = function (e) {
  return St.current.useState(e);
};
ue.useSyncExternalStore = function (e, t, n) {
  return St.current.useSyncExternalStore(e, t, n);
};
ue.useTransition = function () {
  return St.current.useTransition();
};
ue.version = "18.3.1";
Z0.exports = ue;
var h = Z0.exports;
const Pn = Sh(h),
  Bu = X0({ __proto__: null, default: Pn }, [h]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kP = h,
  DP = Symbol.for("react.element"),
  OP = Symbol.for("react.fragment"),
  NP = Object.prototype.hasOwnProperty,
  LP = kP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  jP = { key: !0, ref: !0, __self: !0, __source: !0 };
function aw(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  (n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref));
  for (r in t) NP.call(t, r) && !jP.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: DP,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: LP.current,
  };
}
Vu.Fragment = OP;
Vu.jsx = aw;
Vu.jsxs = aw;
Y0.exports = Vu;
var E = Y0.exports,
  $f = {},
  lw = { exports: {} },
  zt = {},
  uw = { exports: {} },
  cw = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(M, N) {
    var F = M.length;
    M.push(N);
    e: for (; 0 < F; ) {
      var K = (F - 1) >>> 1,
        re = M[K];
      if (0 < o(re, N)) ((M[K] = N), (M[F] = re), (F = K));
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var N = M[0],
      F = M.pop();
    if (F !== N) {
      M[0] = F;
      e: for (var K = 0, re = M.length, fe = re >>> 1; K < fe; ) {
        var Se = 2 * (K + 1) - 1,
          ye = M[Se],
          Ee = Se + 1,
          me = M[Ee];
        if (0 > o(ye, F))
          Ee < re && 0 > o(me, ye)
            ? ((M[K] = me), (M[Ee] = F), (K = Ee))
            : ((M[K] = ye), (M[Se] = F), (K = Se));
        else if (Ee < re && 0 > o(me, F)) ((M[K] = me), (M[Ee] = F), (K = Ee));
        else break e;
      }
    }
    return N;
  }
  function o(M, N) {
    var F = M.sortIndex - N.sortIndex;
    return F !== 0 ? F : M.id - N.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    m = !1,
    v = !1,
    p = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    y = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function x(M) {
    for (var N = n(u); N !== null; ) {
      if (N.callback === null) r(u);
      else if (N.startTime <= M)
        (r(u), (N.sortIndex = N.expirationTime), t(l, N));
      else break;
      N = n(u);
    }
  }
  function S(M) {
    if (((p = !1), x(M), !v))
      if (n(l) !== null) ((v = !0), J(b));
      else {
        var N = n(u);
        N !== null && Z(S, N.startTime - M);
      }
  }
  function b(M, N) {
    ((v = !1), p && ((p = !1), g(R), (R = -1)), (m = !0));
    var F = d;
    try {
      for (
        x(N), f = n(l);
        f !== null && (!(f.expirationTime > N) || (M && !B()));
      ) {
        var K = f.callback;
        if (typeof K == "function") {
          ((f.callback = null), (d = f.priorityLevel));
          var re = K(f.expirationTime <= N);
          ((N = e.unstable_now()),
            typeof re == "function" ? (f.callback = re) : f === n(l) && r(l),
            x(N));
        } else r(l);
        f = n(l);
      }
      if (f !== null) var fe = !0;
      else {
        var Se = n(u);
        (Se !== null && Z(S, Se.startTime - N), (fe = !1));
      }
      return fe;
    } finally {
      ((f = null), (d = F), (m = !1));
    }
  }
  var T = !1,
    C = null,
    R = -1,
    L = 5,
    D = -1;
  function B() {
    return !(e.unstable_now() - D < L);
  }
  function V() {
    if (C !== null) {
      var M = e.unstable_now();
      D = M;
      var N = !0;
      try {
        N = C(!0, M);
      } finally {
        N ? Y() : ((T = !1), (C = null));
      }
    } else T = !1;
  }
  var Y;
  if (typeof y == "function")
    Y = function () {
      y(V);
    };
  else if (typeof MessageChannel < "u") {
    var W = new MessageChannel(),
      se = W.port2;
    ((W.port1.onmessage = V),
      (Y = function () {
        se.postMessage(null);
      }));
  } else
    Y = function () {
      w(V, 0);
    };
  function J(M) {
    ((C = M), T || ((T = !0), Y()));
  }
  function Z(M, N) {
    R = w(function () {
      M(e.unstable_now());
    }, N);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (M) {
      M.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || m || ((v = !0), J(b));
    }),
    (e.unstable_forceFrameRate = function (M) {
      0 > M || 125 < M
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (L = 0 < M ? Math.floor(1e3 / M) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (M) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var N = 3;
          break;
        default:
          N = d;
      }
      var F = d;
      d = N;
      try {
        return M();
      } finally {
        d = F;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (M, N) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var F = d;
      d = M;
      try {
        return N();
      } finally {
        d = F;
      }
    }),
    (e.unstable_scheduleCallback = function (M, N, F) {
      var K = e.unstable_now();
      switch (
        (typeof F == "object" && F !== null
          ? ((F = F.delay), (F = typeof F == "number" && 0 < F ? K + F : K))
          : (F = K),
        M)
      ) {
        case 1:
          var re = -1;
          break;
        case 2:
          re = 250;
          break;
        case 5:
          re = 1073741823;
          break;
        case 4:
          re = 1e4;
          break;
        default:
          re = 5e3;
      }
      return (
        (re = F + re),
        (M = {
          id: c++,
          callback: N,
          priorityLevel: M,
          startTime: F,
          expirationTime: re,
          sortIndex: -1,
        }),
        F > K
          ? ((M.sortIndex = F),
            t(u, M),
            n(l) === null &&
              M === n(u) &&
              (p ? (g(R), (R = -1)) : (p = !0), Z(S, F - K)))
          : ((M.sortIndex = re), t(l, M), v || m || ((v = !0), J(b))),
        M
      );
    }),
    (e.unstable_shouldYield = B),
    (e.unstable_wrapCallback = function (M) {
      var N = d;
      return function () {
        var F = d;
        d = N;
        try {
          return M.apply(this, arguments);
        } finally {
          d = F;
        }
      };
    }));
})(cw);
uw.exports = cw;
var IP = uw.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var FP = h,
  Ut = IP;
function I(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var fw = new Set(),
  zs = {};
function Lo(e, t) {
  (ki(e, t), ki(e + "Capture", t));
}
function ki(e, t) {
  for (zs[e] = t, e = 0; e < t.length; e++) fw.add(t[e]);
}
var tr = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  zf = Object.prototype.hasOwnProperty,
  VP =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Hm = {},
  Km = {};
function BP(e) {
  return zf.call(Km, e)
    ? !0
    : zf.call(Hm, e)
      ? !1
      : VP.test(e)
        ? (Km[e] = !0)
        : ((Hm[e] = !0), !1);
}
function UP(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function $P(e, t, n, r) {
  if (t === null || typeof t > "u" || UP(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Et(e, t, n, r, o, i, s) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s));
}
var lt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    lt[e] = new Et(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  lt[t] = new Et(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  lt[e] = new Et(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  lt[e] = new Et(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    lt[e] = new Et(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  lt[e] = new Et(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  lt[e] = new Et(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  lt[e] = new Et(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  lt[e] = new Et(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Rh = /[\-:]([a-z])/g;
function Th(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Rh, Th);
    lt[t] = new Et(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Rh, Th);
    lt[t] = new Et(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Rh, Th);
  lt[t] = new Et(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  lt[e] = new Et(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
lt.xlinkHref = new Et(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  lt[e] = new Et(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ah(e, t, n, r) {
  var o = lt.hasOwnProperty(t) ? lt[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    ($P(t, n, o, r) && (n = null),
    r || o === null
      ? BP(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var lr = FP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Za = Symbol.for("react.element"),
  Xo = Symbol.for("react.portal"),
  Yo = Symbol.for("react.fragment"),
  _h = Symbol.for("react.strict_mode"),
  Wf = Symbol.for("react.profiler"),
  dw = Symbol.for("react.provider"),
  hw = Symbol.for("react.context"),
  Mh = Symbol.for("react.forward_ref"),
  Hf = Symbol.for("react.suspense"),
  Kf = Symbol.for("react.suspense_list"),
  kh = Symbol.for("react.memo"),
  wr = Symbol.for("react.lazy"),
  pw = Symbol.for("react.offscreen"),
  Gm = Symbol.iterator;
function ss(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Gm && e[Gm]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ne = Object.assign,
  jc;
function Ss(e) {
  if (jc === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      jc = (t && t[1]) || "";
    }
  return (
    `
` +
    jc +
    e
  );
}
var Ic = !1;
function Fc(e, t) {
  if (!e || Ic) return "";
  Ic = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          a = i.length - 1;
        1 <= s && 0 <= a && o[s] !== i[a];
      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (o[s] !== i[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || o[s] !== i[a])) {
                var l =
                  `
` + o[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    ((Ic = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? Ss(e) : "";
}
function zP(e) {
  switch (e.tag) {
    case 5:
      return Ss(e.type);
    case 16:
      return Ss("Lazy");
    case 13:
      return Ss("Suspense");
    case 19:
      return Ss("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = Fc(e.type, !1)), e);
    case 11:
      return ((e = Fc(e.type.render, !1)), e);
    case 1:
      return ((e = Fc(e.type, !0)), e);
    default:
      return "";
  }
}
function Gf(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Yo:
      return "Fragment";
    case Xo:
      return "Portal";
    case Wf:
      return "Profiler";
    case _h:
      return "StrictMode";
    case Hf:
      return "Suspense";
    case Kf:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case hw:
        return (e.displayName || "Context") + ".Consumer";
      case dw:
        return (e._context.displayName || "Context") + ".Provider";
      case Mh:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case kh:
        return (
          (t = e.displayName || null),
          t !== null ? t : Gf(e.type) || "Memo"
        );
      case wr:
        ((t = e._payload), (e = e._init));
        try {
          return Gf(e(t));
        } catch {}
    }
  return null;
}
function WP(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Gf(t);
    case 8:
      return t === _h ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Br(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function mw(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function HP(e) {
  var t = mw(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          ((r = "" + s), i.call(this, s));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function Ja(e) {
  e._valueTracker || (e._valueTracker = HP(e));
}
function gw(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = mw(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ql(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function qf(e, t) {
  var n = t.checked;
  return Ne({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function qm(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = Br(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function yw(e, t) {
  ((t = t.checked), t != null && Ah(e, "checked", t, !1));
}
function Qf(e, t) {
  yw(e, t);
  var n = Br(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? Xf(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Xf(e, t.type, Br(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function Qm(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function Xf(e, t, n) {
  (t !== "number" || Ql(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Es = Array.isArray;
function hi(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      ((o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + Br(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        ((e[o].selected = !0), r && (e[o].defaultSelected = !0));
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Yf(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(I(91));
  return Ne({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Xm(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(I(92));
      if (Es(n)) {
        if (1 < n.length) throw Error(I(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: Br(n) };
}
function vw(e, t) {
  var n = Br(t.value),
    r = Br(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function Ym(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ww(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Zf(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ww(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var el,
  xw = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        el = el || document.createElement("div"),
          el.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = el.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ws(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ms = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  KP = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ms).forEach(function (e) {
  KP.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ms[t] = Ms[e]));
  });
});
function Sw(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Ms.hasOwnProperty(e) && Ms[e])
      ? ("" + t).trim()
      : t + "px";
}
function Ew(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Sw(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o));
    }
}
var GP = Ne(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Jf(e, t) {
  if (t) {
    if (GP[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(I(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(I(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(I(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(I(62));
  }
}
function ed(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var td = null;
function Dh(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var nd = null,
  pi = null,
  mi = null;
function Zm(e) {
  if ((e = Ra(e))) {
    if (typeof nd != "function") throw Error(I(280));
    var t = e.stateNode;
    t && ((t = Hu(t)), nd(e.stateNode, e.type, t));
  }
}
function Cw(e) {
  pi ? (mi ? mi.push(e) : (mi = [e])) : (pi = e);
}
function bw() {
  if (pi) {
    var e = pi,
      t = mi;
    if (((mi = pi = null), Zm(e), t)) for (e = 0; e < t.length; e++) Zm(t[e]);
  }
}
function Pw(e, t) {
  return e(t);
}
function Rw() {}
var Vc = !1;
function Tw(e, t, n) {
  if (Vc) return e(t, n);
  Vc = !0;
  try {
    return Pw(e, t, n);
  } finally {
    ((Vc = !1), (pi !== null || mi !== null) && (Rw(), bw()));
  }
}
function Hs(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Hu(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(I(231, t, typeof n));
  return n;
}
var rd = !1;
if (tr)
  try {
    var as = {};
    (Object.defineProperty(as, "passive", {
      get: function () {
        rd = !0;
      },
    }),
      window.addEventListener("test", as, as),
      window.removeEventListener("test", as, as));
  } catch {
    rd = !1;
  }
function qP(e, t, n, r, o, i, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var ks = !1,
  Xl = null,
  Yl = !1,
  od = null,
  QP = {
    onError: function (e) {
      ((ks = !0), (Xl = e));
    },
  };
function XP(e, t, n, r, o, i, s, a, l) {
  ((ks = !1), (Xl = null), qP.apply(QP, arguments));
}
function YP(e, t, n, r, o, i, s, a, l) {
  if ((XP.apply(this, arguments), ks)) {
    if (ks) {
      var u = Xl;
      ((ks = !1), (Xl = null));
    } else throw Error(I(198));
    Yl || ((Yl = !0), (od = u));
  }
}
function jo(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Aw(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Jm(e) {
  if (jo(e) !== e) throw Error(I(188));
}
function ZP(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = jo(e)), t === null)) throw Error(I(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return (Jm(o), e);
        if (i === r) return (Jm(o), t);
        i = i.sibling;
      }
      throw Error(I(188));
    }
    if (n.return !== r.return) ((n = o), (r = i));
    else {
      for (var s = !1, a = o.child; a; ) {
        if (a === n) {
          ((s = !0), (n = o), (r = i));
          break;
        }
        if (a === r) {
          ((s = !0), (r = o), (n = i));
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = i.child; a; ) {
          if (a === n) {
            ((s = !0), (n = i), (r = o));
            break;
          }
          if (a === r) {
            ((s = !0), (r = i), (n = o));
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(I(189));
      }
    }
    if (n.alternate !== r) throw Error(I(190));
  }
  if (n.tag !== 3) throw Error(I(188));
  return n.stateNode.current === n ? e : t;
}
function _w(e) {
  return ((e = ZP(e)), e !== null ? Mw(e) : null);
}
function Mw(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Mw(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var kw = Ut.unstable_scheduleCallback,
  eg = Ut.unstable_cancelCallback,
  JP = Ut.unstable_shouldYield,
  eR = Ut.unstable_requestPaint,
  We = Ut.unstable_now,
  tR = Ut.unstable_getCurrentPriorityLevel,
  Oh = Ut.unstable_ImmediatePriority,
  Dw = Ut.unstable_UserBlockingPriority,
  Zl = Ut.unstable_NormalPriority,
  nR = Ut.unstable_LowPriority,
  Ow = Ut.unstable_IdlePriority,
  Uu = null,
  Dn = null;
function rR(e) {
  if (Dn && typeof Dn.onCommitFiberRoot == "function")
    try {
      Dn.onCommitFiberRoot(Uu, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var pn = Math.clz32 ? Math.clz32 : sR,
  oR = Math.log,
  iR = Math.LN2;
function sR(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((oR(e) / iR) | 0)) | 0);
}
var tl = 64,
  nl = 4194304;
function Cs(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Jl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~o;
    a !== 0 ? (r = Cs(a)) : ((i &= s), i !== 0 && (r = Cs(i)));
  } else ((s = n & ~o), s !== 0 ? (r = Cs(s)) : i !== 0 && (r = Cs(i)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - pn(t)), (o = 1 << n), (r |= e[n]), (t &= ~o));
  return r;
}
function aR(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function lR(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;
  ) {
    var s = 31 - pn(i),
      a = 1 << s,
      l = o[s];
    (l === -1
      ? (!(a & n) || a & r) && (o[s] = aR(a, t))
      : l <= t && (e.expiredLanes |= a),
      (i &= ~a));
  }
}
function id(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Nw() {
  var e = tl;
  return ((tl <<= 1), !(tl & 4194240) && (tl = 64), e);
}
function Bc(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ba(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - pn(t)),
    (e[t] = n));
}
function uR(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - pn(n),
      i = 1 << o;
    ((t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i));
  }
}
function Nh(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - pn(n),
      o = 1 << r;
    ((o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o));
  }
}
var xe = 0;
function Lw(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var jw,
  Lh,
  Iw,
  Fw,
  Vw,
  sd = !1,
  rl = [],
  Dr = null,
  Or = null,
  Nr = null,
  Ks = new Map(),
  Gs = new Map(),
  Sr = [],
  cR =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function tg(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Dr = null;
      break;
    case "dragenter":
    case "dragleave":
      Or = null;
      break;
    case "mouseover":
    case "mouseout":
      Nr = null;
      break;
    case "pointerover":
    case "pointerout":
      Ks.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Gs.delete(t.pointerId);
  }
}
function ls(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Ra(t)), t !== null && Lh(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function fR(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return ((Dr = ls(Dr, e, t, n, r, o)), !0);
    case "dragenter":
      return ((Or = ls(Or, e, t, n, r, o)), !0);
    case "mouseover":
      return ((Nr = ls(Nr, e, t, n, r, o)), !0);
    case "pointerover":
      var i = o.pointerId;
      return (Ks.set(i, ls(Ks.get(i) || null, e, t, n, r, o)), !0);
    case "gotpointercapture":
      return (
        (i = o.pointerId),
        Gs.set(i, ls(Gs.get(i) || null, e, t, n, r, o)),
        !0
      );
  }
  return !1;
}
function Bw(e) {
  var t = uo(e.target);
  if (t !== null) {
    var n = jo(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Aw(n)), t !== null)) {
          ((e.blockedOn = t),
            Vw(e.priority, function () {
              Iw(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function _l(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ad(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((td = r), n.target.dispatchEvent(r), (td = null));
    } else return ((t = Ra(n)), t !== null && Lh(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function ng(e, t, n) {
  _l(e) && n.delete(t);
}
function dR() {
  ((sd = !1),
    Dr !== null && _l(Dr) && (Dr = null),
    Or !== null && _l(Or) && (Or = null),
    Nr !== null && _l(Nr) && (Nr = null),
    Ks.forEach(ng),
    Gs.forEach(ng));
}
function us(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    sd ||
      ((sd = !0),
      Ut.unstable_scheduleCallback(Ut.unstable_NormalPriority, dR)));
}
function qs(e) {
  function t(o) {
    return us(o, e);
  }
  if (0 < rl.length) {
    us(rl[0], e);
    for (var n = 1; n < rl.length; n++) {
      var r = rl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Dr !== null && us(Dr, e),
      Or !== null && us(Or, e),
      Nr !== null && us(Nr, e),
      Ks.forEach(t),
      Gs.forEach(t),
      n = 0;
    n < Sr.length;
    n++
  )
    ((r = Sr[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < Sr.length && ((n = Sr[0]), n.blockedOn === null); )
    (Bw(n), n.blockedOn === null && Sr.shift());
}
var gi = lr.ReactCurrentBatchConfig,
  eu = !0;
function hR(e, t, n, r) {
  var o = xe,
    i = gi.transition;
  gi.transition = null;
  try {
    ((xe = 1), jh(e, t, n, r));
  } finally {
    ((xe = o), (gi.transition = i));
  }
}
function pR(e, t, n, r) {
  var o = xe,
    i = gi.transition;
  gi.transition = null;
  try {
    ((xe = 4), jh(e, t, n, r));
  } finally {
    ((xe = o), (gi.transition = i));
  }
}
function jh(e, t, n, r) {
  if (eu) {
    var o = ad(e, t, n, r);
    if (o === null) (Xc(e, t, r, tu, n), tg(e, r));
    else if (fR(o, e, t, n, r)) r.stopPropagation();
    else if ((tg(e, r), t & 4 && -1 < cR.indexOf(e))) {
      for (; o !== null; ) {
        var i = Ra(o);
        if (
          (i !== null && jw(i),
          (i = ad(e, t, n, r)),
          i === null && Xc(e, t, r, tu, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Xc(e, t, r, null, n);
  }
}
var tu = null;
function ad(e, t, n, r) {
  if (((tu = null), (e = Dh(r)), (e = uo(e)), e !== null))
    if (((t = jo(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Aw(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((tu = e), null);
}
function Uw(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (tR()) {
        case Oh:
          return 1;
        case Dw:
          return 4;
        case Zl:
        case nR:
          return 16;
        case Ow:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var _r = null,
  Ih = null,
  Ml = null;
function $w() {
  if (Ml) return Ml;
  var e,
    t = Ih,
    n = t.length,
    r,
    o = "value" in _r ? _r.value : _r.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (Ml = o.slice(e, 1 < r ? 1 - r : void 0));
}
function kl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ol() {
  return !0;
}
function rg() {
  return !1;
}
function Wt(e) {
  function t(n, r, o, i, s) {
    ((this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null));
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? ol
        : rg),
      (this.isPropagationStopped = rg),
      this
    );
  }
  return (
    Ne(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ol));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ol));
      },
      persist: function () {},
      isPersistent: ol,
    }),
    t
  );
}
var Hi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Fh = Wt(Hi),
  Pa = Ne({}, Hi, { view: 0, detail: 0 }),
  mR = Wt(Pa),
  Uc,
  $c,
  cs,
  $u = Ne({}, Pa, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Vh,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== cs &&
            (cs && e.type === "mousemove"
              ? ((Uc = e.screenX - cs.screenX), ($c = e.screenY - cs.screenY))
              : ($c = Uc = 0),
            (cs = e)),
          Uc);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : $c;
    },
  }),
  og = Wt($u),
  gR = Ne({}, $u, { dataTransfer: 0 }),
  yR = Wt(gR),
  vR = Ne({}, Pa, { relatedTarget: 0 }),
  zc = Wt(vR),
  wR = Ne({}, Hi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  xR = Wt(wR),
  SR = Ne({}, Hi, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ER = Wt(SR),
  CR = Ne({}, Hi, { data: 0 }),
  ig = Wt(CR),
  bR = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  PR = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  RR = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function TR(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = RR[e]) ? !!t[e] : !1;
}
function Vh() {
  return TR;
}
var AR = Ne({}, Pa, {
    key: function (e) {
      if (e.key) {
        var t = bR[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = kl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? PR[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Vh,
    charCode: function (e) {
      return e.type === "keypress" ? kl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? kl(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  _R = Wt(AR),
  MR = Ne({}, $u, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  sg = Wt(MR),
  kR = Ne({}, Pa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Vh,
  }),
  DR = Wt(kR),
  OR = Ne({}, Hi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  NR = Wt(OR),
  LR = Ne({}, $u, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  jR = Wt(LR),
  IR = [9, 13, 27, 32],
  Bh = tr && "CompositionEvent" in window,
  Ds = null;
tr && "documentMode" in document && (Ds = document.documentMode);
var FR = tr && "TextEvent" in window && !Ds,
  zw = tr && (!Bh || (Ds && 8 < Ds && 11 >= Ds)),
  ag = " ",
  lg = !1;
function Ww(e, t) {
  switch (e) {
    case "keyup":
      return IR.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Hw(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var Zo = !1;
function VR(e, t) {
  switch (e) {
    case "compositionend":
      return Hw(t);
    case "keypress":
      return t.which !== 32 ? null : ((lg = !0), ag);
    case "textInput":
      return ((e = t.data), e === ag && lg ? null : e);
    default:
      return null;
  }
}
function BR(e, t) {
  if (Zo)
    return e === "compositionend" || (!Bh && Ww(e, t))
      ? ((e = $w()), (Ml = Ih = _r = null), (Zo = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return zw && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var UR = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function ug(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!UR[e.type] : t === "textarea";
}
function Kw(e, t, n, r) {
  (Cw(r),
    (t = nu(t, "onChange")),
    0 < t.length &&
      ((n = new Fh("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var Os = null,
  Qs = null;
function $R(e) {
  rx(e, 0);
}
function zu(e) {
  var t = ti(e);
  if (gw(t)) return e;
}
function zR(e, t) {
  if (e === "change") return t;
}
var Gw = !1;
if (tr) {
  var Wc;
  if (tr) {
    var Hc = "oninput" in document;
    if (!Hc) {
      var cg = document.createElement("div");
      (cg.setAttribute("oninput", "return;"),
        (Hc = typeof cg.oninput == "function"));
    }
    Wc = Hc;
  } else Wc = !1;
  Gw = Wc && (!document.documentMode || 9 < document.documentMode);
}
function fg() {
  Os && (Os.detachEvent("onpropertychange", qw), (Qs = Os = null));
}
function qw(e) {
  if (e.propertyName === "value" && zu(Qs)) {
    var t = [];
    (Kw(t, Qs, e, Dh(e)), Tw($R, t));
  }
}
function WR(e, t, n) {
  e === "focusin"
    ? (fg(), (Os = t), (Qs = n), Os.attachEvent("onpropertychange", qw))
    : e === "focusout" && fg();
}
function HR(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return zu(Qs);
}
function KR(e, t) {
  if (e === "click") return zu(t);
}
function GR(e, t) {
  if (e === "input" || e === "change") return zu(t);
}
function qR(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var yn = typeof Object.is == "function" ? Object.is : qR;
function Xs(e, t) {
  if (yn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!zf.call(t, o) || !yn(e[o], t[o])) return !1;
  }
  return !0;
}
function dg(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function hg(e, t) {
  var n = dg(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = dg(n);
  }
}
function Qw(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Qw(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Xw() {
  for (var e = window, t = Ql(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ql(e.document);
  }
  return t;
}
function Uh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function QR(e) {
  var t = Xw(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Qw(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Uh(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        ((r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = hg(n, i)));
        var s = hg(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var XR = tr && "documentMode" in document && 11 >= document.documentMode,
  Jo = null,
  ld = null,
  Ns = null,
  ud = !1;
function pg(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ud ||
    Jo == null ||
    Jo !== Ql(r) ||
    ((r = Jo),
    "selectionStart" in r && Uh(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Ns && Xs(Ns, r)) ||
      ((Ns = r),
      (r = nu(ld, "onSelect")),
      0 < r.length &&
        ((t = new Fh("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Jo))));
}
function il(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var ei = {
    animationend: il("Animation", "AnimationEnd"),
    animationiteration: il("Animation", "AnimationIteration"),
    animationstart: il("Animation", "AnimationStart"),
    transitionend: il("Transition", "TransitionEnd"),
  },
  Kc = {},
  Yw = {};
tr &&
  ((Yw = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete ei.animationend.animation,
    delete ei.animationiteration.animation,
    delete ei.animationstart.animation),
  "TransitionEvent" in window || delete ei.transitionend.transition);
function Wu(e) {
  if (Kc[e]) return Kc[e];
  if (!ei[e]) return e;
  var t = ei[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Yw) return (Kc[e] = t[n]);
  return e;
}
var Zw = Wu("animationend"),
  Jw = Wu("animationiteration"),
  ex = Wu("animationstart"),
  tx = Wu("transitionend"),
  nx = new Map(),
  mg =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Kr(e, t) {
  (nx.set(e, t), Lo(t, [e]));
}
for (var Gc = 0; Gc < mg.length; Gc++) {
  var qc = mg[Gc],
    YR = qc.toLowerCase(),
    ZR = qc[0].toUpperCase() + qc.slice(1);
  Kr(YR, "on" + ZR);
}
Kr(Zw, "onAnimationEnd");
Kr(Jw, "onAnimationIteration");
Kr(ex, "onAnimationStart");
Kr("dblclick", "onDoubleClick");
Kr("focusin", "onFocus");
Kr("focusout", "onBlur");
Kr(tx, "onTransitionEnd");
ki("onMouseEnter", ["mouseout", "mouseover"]);
ki("onMouseLeave", ["mouseout", "mouseover"]);
ki("onPointerEnter", ["pointerout", "pointerover"]);
ki("onPointerLeave", ["pointerout", "pointerover"]);
Lo(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Lo(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Lo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Lo(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Lo(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Lo(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var bs =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  JR = new Set("cancel close invalid load scroll toggle".split(" ").concat(bs));
function gg(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), YP(r, t, void 0, e), (e.currentTarget = null));
}
function rx(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== i && o.isPropagationStopped())) break e;
          (gg(o, a, u), (i = l));
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== i && o.isPropagationStopped())
          )
            break e;
          (gg(o, a, u), (i = l));
        }
    }
  }
  if (Yl) throw ((e = od), (Yl = !1), (od = null), e);
}
function Re(e, t) {
  var n = t[pd];
  n === void 0 && (n = t[pd] = new Set());
  var r = e + "__bubble";
  n.has(r) || (ox(t, e, 2, !1), n.add(r));
}
function Qc(e, t, n) {
  var r = 0;
  (t && (r |= 4), ox(n, e, r, t));
}
var sl = "_reactListening" + Math.random().toString(36).slice(2);
function Ys(e) {
  if (!e[sl]) {
    ((e[sl] = !0),
      fw.forEach(function (n) {
        n !== "selectionchange" && (JR.has(n) || Qc(n, !1, e), Qc(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[sl] || ((t[sl] = !0), Qc("selectionchange", !1, t));
  }
}
function ox(e, t, n, r) {
  switch (Uw(t)) {
    case 1:
      var o = hR;
      break;
    case 4:
      o = pR;
      break;
    default:
      o = jh;
  }
  ((n = o.bind(null, t, n, e)),
    (o = void 0),
    !rd ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1));
}
function Xc(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = uo(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = i = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Tw(function () {
    var u = i,
      c = Dh(n),
      f = [];
    e: {
      var d = nx.get(e);
      if (d !== void 0) {
        var m = Fh,
          v = e;
        switch (e) {
          case "keypress":
            if (kl(n) === 0) break e;
          case "keydown":
          case "keyup":
            m = _R;
            break;
          case "focusin":
            ((v = "focus"), (m = zc));
            break;
          case "focusout":
            ((v = "blur"), (m = zc));
            break;
          case "beforeblur":
          case "afterblur":
            m = zc;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            m = og;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = yR;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = DR;
            break;
          case Zw:
          case Jw:
          case ex:
            m = xR;
            break;
          case tx:
            m = NR;
            break;
          case "scroll":
            m = mR;
            break;
          case "wheel":
            m = jR;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = ER;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = sg;
        }
        var p = (t & 4) !== 0,
          w = !p && e === "scroll",
          g = p ? (d !== null ? d + "Capture" : null) : d;
        p = [];
        for (var y = u, x; y !== null; ) {
          x = y;
          var S = x.stateNode;
          if (
            (x.tag === 5 &&
              S !== null &&
              ((x = S),
              g !== null && ((S = Hs(y, g)), S != null && p.push(Zs(y, S, x)))),
            w)
          )
            break;
          y = y.return;
        }
        0 < p.length &&
          ((d = new m(d, v, null, n, c)), f.push({ event: d, listeners: p }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (m = e === "mouseout" || e === "pointerout"),
          d &&
            n !== td &&
            (v = n.relatedTarget || n.fromElement) &&
            (uo(v) || v[nr]))
        )
          break e;
        if (
          (m || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
                ? d.defaultView || d.parentWindow
                : window),
          m
            ? ((v = n.relatedTarget || n.toElement),
              (m = u),
              (v = v ? uo(v) : null),
              v !== null &&
                ((w = jo(v)), v !== w || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((m = null), (v = u)),
          m !== v)
        ) {
          if (
            ((p = og),
            (S = "onMouseLeave"),
            (g = "onMouseEnter"),
            (y = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((p = sg),
              (S = "onPointerLeave"),
              (g = "onPointerEnter"),
              (y = "pointer")),
            (w = m == null ? d : ti(m)),
            (x = v == null ? d : ti(v)),
            (d = new p(S, y + "leave", m, n, c)),
            (d.target = w),
            (d.relatedTarget = x),
            (S = null),
            uo(c) === u &&
              ((p = new p(g, y + "enter", v, n, c)),
              (p.target = x),
              (p.relatedTarget = w),
              (S = p)),
            (w = S),
            m && v)
          )
            t: {
              for (p = m, g = v, y = 0, x = p; x; x = Wo(x)) y++;
              for (x = 0, S = g; S; S = Wo(S)) x++;
              for (; 0 < y - x; ) ((p = Wo(p)), y--);
              for (; 0 < x - y; ) ((g = Wo(g)), x--);
              for (; y--; ) {
                if (p === g || (g !== null && p === g.alternate)) break t;
                ((p = Wo(p)), (g = Wo(g)));
              }
              p = null;
            }
          else p = null;
          (m !== null && yg(f, d, m, p, !1),
            v !== null && w !== null && yg(f, w, v, p, !0));
        }
      }
      e: {
        if (
          ((d = u ? ti(u) : window),
          (m = d.nodeName && d.nodeName.toLowerCase()),
          m === "select" || (m === "input" && d.type === "file"))
        )
          var b = zR;
        else if (ug(d))
          if (Gw) b = GR;
          else {
            b = HR;
            var T = WR;
          }
        else
          (m = d.nodeName) &&
            m.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (b = KR);
        if (b && (b = b(e, u))) {
          Kw(f, b, n, c);
          break e;
        }
        (T && T(e, d, u),
          e === "focusout" &&
            (T = d._wrapperState) &&
            T.controlled &&
            d.type === "number" &&
            Xf(d, "number", d.value));
      }
      switch (((T = u ? ti(u) : window), e)) {
        case "focusin":
          (ug(T) || T.contentEditable === "true") &&
            ((Jo = T), (ld = u), (Ns = null));
          break;
        case "focusout":
          Ns = ld = Jo = null;
          break;
        case "mousedown":
          ud = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((ud = !1), pg(f, n, c));
          break;
        case "selectionchange":
          if (XR) break;
        case "keydown":
        case "keyup":
          pg(f, n, c);
      }
      var C;
      if (Bh)
        e: {
          switch (e) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
      else
        Zo
          ? Ww(e, n) && (R = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      (R &&
        (zw &&
          n.locale !== "ko" &&
          (Zo || R !== "onCompositionStart"
            ? R === "onCompositionEnd" && Zo && (C = $w())
            : ((_r = c),
              (Ih = "value" in _r ? _r.value : _r.textContent),
              (Zo = !0))),
        (T = nu(u, R)),
        0 < T.length &&
          ((R = new ig(R, e, null, n, c)),
          f.push({ event: R, listeners: T }),
          C ? (R.data = C) : ((C = Hw(n)), C !== null && (R.data = C)))),
        (C = FR ? VR(e, n) : BR(e, n)) &&
          ((u = nu(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new ig("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = C))));
    }
    rx(f, t);
  });
}
function Zs(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function nu(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    (o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Hs(e, n)),
      i != null && r.unshift(Zs(e, i, o)),
      (i = Hs(e, t)),
      i != null && r.push(Zs(e, i, o))),
      (e = e.return));
  }
  return r;
}
function Wo(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function yg(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    (a.tag === 5 &&
      u !== null &&
      ((a = u),
      o
        ? ((l = Hs(n, i)), l != null && s.unshift(Zs(n, l, a)))
        : o || ((l = Hs(n, i)), l != null && s.push(Zs(n, l, a)))),
      (n = n.return));
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var eT = /\r\n?/g,
  tT = /\u0000|\uFFFD/g;
function vg(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      eT,
      `
`,
    )
    .replace(tT, "");
}
function al(e, t, n) {
  if (((t = vg(t)), vg(e) !== t && n)) throw Error(I(425));
}
function ru() {}
var cd = null,
  fd = null;
function dd(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var hd = typeof setTimeout == "function" ? setTimeout : void 0,
  nT = typeof clearTimeout == "function" ? clearTimeout : void 0,
  wg = typeof Promise == "function" ? Promise : void 0,
  rT =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof wg < "u"
        ? function (e) {
            return wg.resolve(null).then(e).catch(oT);
          }
        : hd;
function oT(e) {
  setTimeout(function () {
    throw e;
  });
}
function Yc(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(o), qs(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  qs(t);
}
function Lr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function xg(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Ki = Math.random().toString(36).slice(2),
  _n = "__reactFiber$" + Ki,
  Js = "__reactProps$" + Ki,
  nr = "__reactContainer$" + Ki,
  pd = "__reactEvents$" + Ki,
  iT = "__reactListeners$" + Ki,
  sT = "__reactHandles$" + Ki;
function uo(e) {
  var t = e[_n];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[nr] || n[_n])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = xg(e); e !== null; ) {
          if ((n = e[_n])) return n;
          e = xg(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function Ra(e) {
  return (
    (e = e[_n] || e[nr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ti(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(I(33));
}
function Hu(e) {
  return e[Js] || null;
}
var md = [],
  ni = -1;
function Gr(e) {
  return { current: e };
}
function Te(e) {
  0 > ni || ((e.current = md[ni]), (md[ni] = null), ni--);
}
function be(e, t) {
  (ni++, (md[ni] = e.current), (e.current = t));
}
var Ur = {},
  gt = Gr(Ur),
  At = Gr(!1),
  Ro = Ur;
function Di(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ur;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function _t(e) {
  return ((e = e.childContextTypes), e != null);
}
function ou() {
  (Te(At), Te(gt));
}
function Sg(e, t, n) {
  if (gt.current !== Ur) throw Error(I(168));
  (be(gt, t), be(At, n));
}
function ix(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(I(108, WP(e) || "Unknown", o));
  return Ne({}, n, r);
}
function iu(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ur),
    (Ro = gt.current),
    be(gt, e),
    be(At, At.current),
    !0
  );
}
function Eg(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(I(169));
  (n
    ? ((e = ix(e, t, Ro)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Te(At),
      Te(gt),
      be(gt, e))
    : Te(At),
    be(At, n));
}
var Gn = null,
  Ku = !1,
  Zc = !1;
function sx(e) {
  Gn === null ? (Gn = [e]) : Gn.push(e);
}
function aT(e) {
  ((Ku = !0), sx(e));
}
function qr() {
  if (!Zc && Gn !== null) {
    Zc = !0;
    var e = 0,
      t = xe;
    try {
      var n = Gn;
      for (xe = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((Gn = null), (Ku = !1));
    } catch (o) {
      throw (Gn !== null && (Gn = Gn.slice(e + 1)), kw(Oh, qr), o);
    } finally {
      ((xe = t), (Zc = !1));
    }
  }
  return null;
}
var ri = [],
  oi = 0,
  su = null,
  au = 0,
  Yt = [],
  Zt = 0,
  To = null,
  Qn = 1,
  Xn = "";
function ro(e, t) {
  ((ri[oi++] = au), (ri[oi++] = su), (su = e), (au = t));
}
function ax(e, t, n) {
  ((Yt[Zt++] = Qn), (Yt[Zt++] = Xn), (Yt[Zt++] = To), (To = e));
  var r = Qn;
  e = Xn;
  var o = 32 - pn(r) - 1;
  ((r &= ~(1 << o)), (n += 1));
  var i = 32 - pn(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    ((i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (Qn = (1 << (32 - pn(t) + o)) | (n << o) | r),
      (Xn = i + e));
  } else ((Qn = (1 << i) | (n << o) | r), (Xn = e));
}
function $h(e) {
  e.return !== null && (ro(e, 1), ax(e, 1, 0));
}
function zh(e) {
  for (; e === su; )
    ((su = ri[--oi]), (ri[oi] = null), (au = ri[--oi]), (ri[oi] = null));
  for (; e === To; )
    ((To = Yt[--Zt]),
      (Yt[Zt] = null),
      (Xn = Yt[--Zt]),
      (Yt[Zt] = null),
      (Qn = Yt[--Zt]),
      (Yt[Zt] = null));
}
var Ft = null,
  It = null,
  Me = !1,
  hn = null;
function lx(e, t) {
  var n = Jt(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function Cg(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ft = e), (It = Lr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ft = e), (It = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = To !== null ? { id: Qn, overflow: Xn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Jt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ft = e),
            (It = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function gd(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function yd(e) {
  if (Me) {
    var t = It;
    if (t) {
      var n = t;
      if (!Cg(e, t)) {
        if (gd(e)) throw Error(I(418));
        t = Lr(n.nextSibling);
        var r = Ft;
        t && Cg(e, t)
          ? lx(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Me = !1), (Ft = e));
      }
    } else {
      if (gd(e)) throw Error(I(418));
      ((e.flags = (e.flags & -4097) | 2), (Me = !1), (Ft = e));
    }
  }
}
function bg(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ft = e;
}
function ll(e) {
  if (e !== Ft) return !1;
  if (!Me) return (bg(e), (Me = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !dd(e.type, e.memoizedProps))),
    t && (t = It))
  ) {
    if (gd(e)) throw (ux(), Error(I(418)));
    for (; t; ) (lx(e, t), (t = Lr(t.nextSibling)));
  }
  if ((bg(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(I(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              It = Lr(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      It = null;
    }
  } else It = Ft ? Lr(e.stateNode.nextSibling) : null;
  return !0;
}
function ux() {
  for (var e = It; e; ) e = Lr(e.nextSibling);
}
function Oi() {
  ((It = Ft = null), (Me = !1));
}
function Wh(e) {
  hn === null ? (hn = [e]) : hn.push(e);
}
var lT = lr.ReactCurrentBatchConfig;
function fs(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(I(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(I(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var a = o.refs;
            s === null ? delete a[i] : (a[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(I(284));
    if (!n._owner) throw Error(I(290, e));
  }
  return e;
}
function ul(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      I(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function Pg(e) {
  var t = e._init;
  return t(e._payload);
}
function cx(e) {
  function t(g, y) {
    if (e) {
      var x = g.deletions;
      x === null ? ((g.deletions = [y]), (g.flags |= 16)) : x.push(y);
    }
  }
  function n(g, y) {
    if (!e) return null;
    for (; y !== null; ) (t(g, y), (y = y.sibling));
    return null;
  }
  function r(g, y) {
    for (g = new Map(); y !== null; )
      (y.key !== null ? g.set(y.key, y) : g.set(y.index, y), (y = y.sibling));
    return g;
  }
  function o(g, y) {
    return ((g = Vr(g, y)), (g.index = 0), (g.sibling = null), g);
  }
  function i(g, y, x) {
    return (
      (g.index = x),
      e
        ? ((x = g.alternate),
          x !== null
            ? ((x = x.index), x < y ? ((g.flags |= 2), y) : x)
            : ((g.flags |= 2), y))
        : ((g.flags |= 1048576), y)
    );
  }
  function s(g) {
    return (e && g.alternate === null && (g.flags |= 2), g);
  }
  function a(g, y, x, S) {
    return y === null || y.tag !== 6
      ? ((y = sf(x, g.mode, S)), (y.return = g), y)
      : ((y = o(y, x)), (y.return = g), y);
  }
  function l(g, y, x, S) {
    var b = x.type;
    return b === Yo
      ? c(g, y, x.props.children, S, x.key)
      : y !== null &&
          (y.elementType === b ||
            (typeof b == "object" &&
              b !== null &&
              b.$$typeof === wr &&
              Pg(b) === y.type))
        ? ((S = o(y, x.props)), (S.ref = fs(g, y, x)), (S.return = g), S)
        : ((S = Fl(x.type, x.key, x.props, null, g.mode, S)),
          (S.ref = fs(g, y, x)),
          (S.return = g),
          S);
  }
  function u(g, y, x, S) {
    return y === null ||
      y.tag !== 4 ||
      y.stateNode.containerInfo !== x.containerInfo ||
      y.stateNode.implementation !== x.implementation
      ? ((y = af(x, g.mode, S)), (y.return = g), y)
      : ((y = o(y, x.children || [])), (y.return = g), y);
  }
  function c(g, y, x, S, b) {
    return y === null || y.tag !== 7
      ? ((y = Co(x, g.mode, S, b)), (y.return = g), y)
      : ((y = o(y, x)), (y.return = g), y);
  }
  function f(g, y, x) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return ((y = sf("" + y, g.mode, x)), (y.return = g), y);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Za:
          return (
            (x = Fl(y.type, y.key, y.props, null, g.mode, x)),
            (x.ref = fs(g, null, y)),
            (x.return = g),
            x
          );
        case Xo:
          return ((y = af(y, g.mode, x)), (y.return = g), y);
        case wr:
          var S = y._init;
          return f(g, S(y._payload), x);
      }
      if (Es(y) || ss(y))
        return ((y = Co(y, g.mode, x, null)), (y.return = g), y);
      ul(g, y);
    }
    return null;
  }
  function d(g, y, x, S) {
    var b = y !== null ? y.key : null;
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return b !== null ? null : a(g, y, "" + x, S);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Za:
          return x.key === b ? l(g, y, x, S) : null;
        case Xo:
          return x.key === b ? u(g, y, x, S) : null;
        case wr:
          return ((b = x._init), d(g, y, b(x._payload), S));
      }
      if (Es(x) || ss(x)) return b !== null ? null : c(g, y, x, S, null);
      ul(g, x);
    }
    return null;
  }
  function m(g, y, x, S, b) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return ((g = g.get(x) || null), a(y, g, "" + S, b));
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Za:
          return (
            (g = g.get(S.key === null ? x : S.key) || null),
            l(y, g, S, b)
          );
        case Xo:
          return (
            (g = g.get(S.key === null ? x : S.key) || null),
            u(y, g, S, b)
          );
        case wr:
          var T = S._init;
          return m(g, y, x, T(S._payload), b);
      }
      if (Es(S) || ss(S)) return ((g = g.get(x) || null), c(y, g, S, b, null));
      ul(y, S);
    }
    return null;
  }
  function v(g, y, x, S) {
    for (
      var b = null, T = null, C = y, R = (y = 0), L = null;
      C !== null && R < x.length;
      R++
    ) {
      C.index > R ? ((L = C), (C = null)) : (L = C.sibling);
      var D = d(g, C, x[R], S);
      if (D === null) {
        C === null && (C = L);
        break;
      }
      (e && C && D.alternate === null && t(g, C),
        (y = i(D, y, R)),
        T === null ? (b = D) : (T.sibling = D),
        (T = D),
        (C = L));
    }
    if (R === x.length) return (n(g, C), Me && ro(g, R), b);
    if (C === null) {
      for (; R < x.length; R++)
        ((C = f(g, x[R], S)),
          C !== null &&
            ((y = i(C, y, R)),
            T === null ? (b = C) : (T.sibling = C),
            (T = C)));
      return (Me && ro(g, R), b);
    }
    for (C = r(g, C); R < x.length; R++)
      ((L = m(C, g, R, x[R], S)),
        L !== null &&
          (e && L.alternate !== null && C.delete(L.key === null ? R : L.key),
          (y = i(L, y, R)),
          T === null ? (b = L) : (T.sibling = L),
          (T = L)));
    return (
      e &&
        C.forEach(function (B) {
          return t(g, B);
        }),
      Me && ro(g, R),
      b
    );
  }
  function p(g, y, x, S) {
    var b = ss(x);
    if (typeof b != "function") throw Error(I(150));
    if (((x = b.call(x)), x == null)) throw Error(I(151));
    for (
      var T = (b = null), C = y, R = (y = 0), L = null, D = x.next();
      C !== null && !D.done;
      R++, D = x.next()
    ) {
      C.index > R ? ((L = C), (C = null)) : (L = C.sibling);
      var B = d(g, C, D.value, S);
      if (B === null) {
        C === null && (C = L);
        break;
      }
      (e && C && B.alternate === null && t(g, C),
        (y = i(B, y, R)),
        T === null ? (b = B) : (T.sibling = B),
        (T = B),
        (C = L));
    }
    if (D.done) return (n(g, C), Me && ro(g, R), b);
    if (C === null) {
      for (; !D.done; R++, D = x.next())
        ((D = f(g, D.value, S)),
          D !== null &&
            ((y = i(D, y, R)),
            T === null ? (b = D) : (T.sibling = D),
            (T = D)));
      return (Me && ro(g, R), b);
    }
    for (C = r(g, C); !D.done; R++, D = x.next())
      ((D = m(C, g, R, D.value, S)),
        D !== null &&
          (e && D.alternate !== null && C.delete(D.key === null ? R : D.key),
          (y = i(D, y, R)),
          T === null ? (b = D) : (T.sibling = D),
          (T = D)));
    return (
      e &&
        C.forEach(function (V) {
          return t(g, V);
        }),
      Me && ro(g, R),
      b
    );
  }
  function w(g, y, x, S) {
    if (
      (typeof x == "object" &&
        x !== null &&
        x.type === Yo &&
        x.key === null &&
        (x = x.props.children),
      typeof x == "object" && x !== null)
    ) {
      switch (x.$$typeof) {
        case Za:
          e: {
            for (var b = x.key, T = y; T !== null; ) {
              if (T.key === b) {
                if (((b = x.type), b === Yo)) {
                  if (T.tag === 7) {
                    (n(g, T.sibling),
                      (y = o(T, x.props.children)),
                      (y.return = g),
                      (g = y));
                    break e;
                  }
                } else if (
                  T.elementType === b ||
                  (typeof b == "object" &&
                    b !== null &&
                    b.$$typeof === wr &&
                    Pg(b) === T.type)
                ) {
                  (n(g, T.sibling),
                    (y = o(T, x.props)),
                    (y.ref = fs(g, T, x)),
                    (y.return = g),
                    (g = y));
                  break e;
                }
                n(g, T);
                break;
              } else t(g, T);
              T = T.sibling;
            }
            x.type === Yo
              ? ((y = Co(x.props.children, g.mode, S, x.key)),
                (y.return = g),
                (g = y))
              : ((S = Fl(x.type, x.key, x.props, null, g.mode, S)),
                (S.ref = fs(g, y, x)),
                (S.return = g),
                (g = S));
          }
          return s(g);
        case Xo:
          e: {
            for (T = x.key; y !== null; ) {
              if (y.key === T)
                if (
                  y.tag === 4 &&
                  y.stateNode.containerInfo === x.containerInfo &&
                  y.stateNode.implementation === x.implementation
                ) {
                  (n(g, y.sibling),
                    (y = o(y, x.children || [])),
                    (y.return = g),
                    (g = y));
                  break e;
                } else {
                  n(g, y);
                  break;
                }
              else t(g, y);
              y = y.sibling;
            }
            ((y = af(x, g.mode, S)), (y.return = g), (g = y));
          }
          return s(g);
        case wr:
          return ((T = x._init), w(g, y, T(x._payload), S));
      }
      if (Es(x)) return v(g, y, x, S);
      if (ss(x)) return p(g, y, x, S);
      ul(g, x);
    }
    return (typeof x == "string" && x !== "") || typeof x == "number"
      ? ((x = "" + x),
        y !== null && y.tag === 6
          ? (n(g, y.sibling), (y = o(y, x)), (y.return = g), (g = y))
          : (n(g, y), (y = sf(x, g.mode, S)), (y.return = g), (g = y)),
        s(g))
      : n(g, y);
  }
  return w;
}
var Ni = cx(!0),
  fx = cx(!1),
  lu = Gr(null),
  uu = null,
  ii = null,
  Hh = null;
function Kh() {
  Hh = ii = uu = null;
}
function Gh(e) {
  var t = lu.current;
  (Te(lu), (e._currentValue = t));
}
function vd(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function yi(e, t) {
  ((uu = e),
    (Hh = ii = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Tt = !0), (e.firstContext = null)));
}
function nn(e) {
  var t = e._currentValue;
  if (Hh !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), ii === null)) {
      if (uu === null) throw Error(I(308));
      ((ii = e), (uu.dependencies = { lanes: 0, firstContext: e }));
    } else ii = ii.next = e;
  return t;
}
var co = null;
function qh(e) {
  co === null ? (co = [e]) : co.push(e);
}
function dx(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), qh(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    rr(e, r)
  );
}
function rr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var xr = !1;
function Qh(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function hx(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function Yn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function jr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), pe & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      rr(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), qh(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    rr(e, n)
  );
}
function Dl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Nh(e, n));
  }
}
function Rg(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (i === null ? (o = i = s) : (i = i.next = s), (n = n.next));
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function cu(e, t, n, r) {
  var o = e.updateQueue;
  xr = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a,
      u = l.next;
    ((l.next = null), s === null ? (i = u) : (s.next = u), (s = l));
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== s &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var f = o.baseState;
    ((s = 0), (c = u = l = null), (a = i));
    do {
      var d = a.lane,
        m = a.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: m,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var v = e,
            p = a;
          switch (((d = t), (m = n), p.tag)) {
            case 1:
              if (((v = p.payload), typeof v == "function")) {
                f = v.call(m, f, d);
                break e;
              }
              f = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = p.payload),
                (d = typeof v == "function" ? v.call(m, f, d) : v),
                d == null)
              )
                break e;
              f = Ne({}, f, d);
              break e;
            case 2:
              xr = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (d = o.effects),
          d === null ? (o.effects = [a]) : d.push(a));
      } else
        ((m = {
          eventTime: m,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = m), (l = f)) : (c = c.next = m),
          (s |= d));
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        ((d = a),
          (a = d.next),
          (d.next = null),
          (o.lastBaseUpdate = d),
          (o.shared.pending = null));
      }
    } while (!0);
    if (
      (c === null && (l = f),
      (o.baseState = l),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do ((s |= o.lane), (o = o.next));
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    ((_o |= s), (e.lanes = s), (e.memoizedState = f));
  }
}
function Tg(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(I(191, o));
        o.call(r);
      }
    }
}
var Ta = {},
  On = Gr(Ta),
  ea = Gr(Ta),
  ta = Gr(Ta);
function fo(e) {
  if (e === Ta) throw Error(I(174));
  return e;
}
function Xh(e, t) {
  switch ((be(ta, t), be(ea, e), be(On, Ta), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Zf(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Zf(t, e)));
  }
  (Te(On), be(On, t));
}
function Li() {
  (Te(On), Te(ea), Te(ta));
}
function px(e) {
  fo(ta.current);
  var t = fo(On.current),
    n = Zf(t, e.type);
  t !== n && (be(ea, e), be(On, n));
}
function Yh(e) {
  ea.current === e && (Te(On), Te(ea));
}
var ke = Gr(0);
function fu(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var Jc = [];
function Zh() {
  for (var e = 0; e < Jc.length; e++)
    Jc[e]._workInProgressVersionPrimary = null;
  Jc.length = 0;
}
var Ol = lr.ReactCurrentDispatcher,
  ef = lr.ReactCurrentBatchConfig,
  Ao = 0,
  Oe = null,
  Qe = null,
  et = null,
  du = !1,
  Ls = !1,
  na = 0,
  uT = 0;
function ut() {
  throw Error(I(321));
}
function Jh(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!yn(e[n], t[n])) return !1;
  return !0;
}
function ep(e, t, n, r, o, i) {
  if (
    ((Ao = i),
    (Oe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ol.current = e === null || e.memoizedState === null ? hT : pT),
    (e = n(r, o)),
    Ls)
  ) {
    i = 0;
    do {
      if (((Ls = !1), (na = 0), 25 <= i)) throw Error(I(301));
      ((i += 1),
        (et = Qe = null),
        (t.updateQueue = null),
        (Ol.current = mT),
        (e = n(r, o)));
    } while (Ls);
  }
  if (
    ((Ol.current = hu),
    (t = Qe !== null && Qe.next !== null),
    (Ao = 0),
    (et = Qe = Oe = null),
    (du = !1),
    t)
  )
    throw Error(I(300));
  return e;
}
function tp() {
  var e = na !== 0;
  return ((na = 0), e);
}
function bn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (et === null ? (Oe.memoizedState = et = e) : (et = et.next = e), et);
}
function rn() {
  if (Qe === null) {
    var e = Oe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Qe.next;
  var t = et === null ? Oe.memoizedState : et.next;
  if (t !== null) ((et = t), (Qe = e));
  else {
    if (e === null) throw Error(I(310));
    ((Qe = e),
      (e = {
        memoizedState: Qe.memoizedState,
        baseState: Qe.baseState,
        baseQueue: Qe.baseQueue,
        queue: Qe.queue,
        next: null,
      }),
      et === null ? (Oe.memoizedState = et = e) : (et = et.next = e));
  }
  return et;
}
function ra(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function tf(e) {
  var t = rn(),
    n = t.queue;
  if (n === null) throw Error(I(311));
  n.lastRenderedReducer = e;
  var r = Qe,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      ((o.next = i.next), (i.next = s));
    }
    ((r.baseQueue = o = i), (n.pending = null));
  }
  if (o !== null) {
    ((i = o.next), (r = r.baseState));
    var a = (s = null),
      l = null,
      u = i;
    do {
      var c = u.lane;
      if ((Ao & c) === c)
        (l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action)));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        (l === null ? ((a = l = f), (s = r)) : (l = l.next = f),
          (Oe.lanes |= c),
          (_o |= c));
      }
      u = u.next;
    } while (u !== null && u !== i);
    (l === null ? (s = r) : (l.next = a),
      yn(r, t.memoizedState) || (Tt = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do ((i = o.lane), (Oe.lanes |= i), (_o |= i), (o = o.next));
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function nf(e) {
  var t = rn(),
    n = t.queue;
  if (n === null) throw Error(I(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do ((i = e(i, s.action)), (s = s.next));
    while (s !== o);
    (yn(i, t.memoizedState) || (Tt = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i));
  }
  return [i, r];
}
function mx() {}
function gx(e, t) {
  var n = Oe,
    r = rn(),
    o = t(),
    i = !yn(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Tt = !0)),
    (r = r.queue),
    np(wx.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (et !== null && et.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      oa(9, vx.bind(null, n, r, o, t), void 0, null),
      tt === null)
    )
      throw Error(I(349));
    Ao & 30 || yx(n, t, o);
  }
  return o;
}
function yx(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Oe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Oe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function vx(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), xx(t) && Sx(e));
}
function wx(e, t, n) {
  return n(function () {
    xx(t) && Sx(e);
  });
}
function xx(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !yn(e, n);
  } catch {
    return !0;
  }
}
function Sx(e) {
  var t = rr(e, 1);
  t !== null && mn(t, e, 1, -1);
}
function Ag(e) {
  var t = bn();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ra,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = dT.bind(null, Oe, e)),
    [t.memoizedState, e]
  );
}
function oa(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Oe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Oe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Ex() {
  return rn().memoizedState;
}
function Nl(e, t, n, r) {
  var o = bn();
  ((Oe.flags |= e),
    (o.memoizedState = oa(1 | t, n, void 0, r === void 0 ? null : r)));
}
function Gu(e, t, n, r) {
  var o = rn();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Qe !== null) {
    var s = Qe.memoizedState;
    if (((i = s.destroy), r !== null && Jh(r, s.deps))) {
      o.memoizedState = oa(t, n, i, r);
      return;
    }
  }
  ((Oe.flags |= e), (o.memoizedState = oa(1 | t, n, i, r)));
}
function _g(e, t) {
  return Nl(8390656, 8, e, t);
}
function np(e, t) {
  return Gu(2048, 8, e, t);
}
function Cx(e, t) {
  return Gu(4, 2, e, t);
}
function bx(e, t) {
  return Gu(4, 4, e, t);
}
function Px(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Rx(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    Gu(4, 4, Px.bind(null, t, e), n)
  );
}
function rp() {}
function Tx(e, t) {
  var n = rn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Jh(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Ax(e, t) {
  var n = rn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Jh(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function _x(e, t, n) {
  return Ao & 21
    ? (yn(n, t) || ((n = Nw()), (Oe.lanes |= n), (_o |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Tt = !0)), (e.memoizedState = n));
}
function cT(e, t) {
  var n = xe;
  ((xe = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = ef.transition;
  ef.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((xe = n), (ef.transition = r));
  }
}
function Mx() {
  return rn().memoizedState;
}
function fT(e, t, n) {
  var r = Fr(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    kx(e))
  )
    Dx(t, n);
  else if (((n = dx(e, t, n, r)), n !== null)) {
    var o = wt();
    (mn(n, e, r, o), Ox(n, t, r));
  }
}
function dT(e, t, n) {
  var r = Fr(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (kx(e)) Dx(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), yn(a, s))) {
          var l = t.interleaved;
          (l === null
            ? ((o.next = o), qh(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o));
          return;
        }
      } catch {
      } finally {
      }
    ((n = dx(e, t, o, r)),
      n !== null && ((o = wt()), mn(n, e, r, o), Ox(n, t, r)));
  }
}
function kx(e) {
  var t = e.alternate;
  return e === Oe || (t !== null && t === Oe);
}
function Dx(e, t) {
  Ls = du = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function Ox(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Nh(e, n));
  }
}
var hu = {
    readContext: nn,
    useCallback: ut,
    useContext: ut,
    useEffect: ut,
    useImperativeHandle: ut,
    useInsertionEffect: ut,
    useLayoutEffect: ut,
    useMemo: ut,
    useReducer: ut,
    useRef: ut,
    useState: ut,
    useDebugValue: ut,
    useDeferredValue: ut,
    useTransition: ut,
    useMutableSource: ut,
    useSyncExternalStore: ut,
    useId: ut,
    unstable_isNewReconciler: !1,
  },
  hT = {
    readContext: nn,
    useCallback: function (e, t) {
      return ((bn().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: nn,
    useEffect: _g,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Nl(4194308, 4, Px.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Nl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Nl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = bn();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = bn();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = fT.bind(null, Oe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = bn();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: Ag,
    useDebugValue: rp,
    useDeferredValue: function (e) {
      return (bn().memoizedState = e);
    },
    useTransition: function () {
      var e = Ag(!1),
        t = e[0];
      return ((e = cT.bind(null, e[1])), (bn().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Oe,
        o = bn();
      if (Me) {
        if (n === void 0) throw Error(I(407));
        n = n();
      } else {
        if (((n = t()), tt === null)) throw Error(I(349));
        Ao & 30 || yx(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        _g(wx.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        oa(9, vx.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = bn(),
        t = tt.identifierPrefix;
      if (Me) {
        var n = Xn,
          r = Qn;
        ((n = (r & ~(1 << (32 - pn(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = na++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = uT++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  pT = {
    readContext: nn,
    useCallback: Tx,
    useContext: nn,
    useEffect: np,
    useImperativeHandle: Rx,
    useInsertionEffect: Cx,
    useLayoutEffect: bx,
    useMemo: Ax,
    useReducer: tf,
    useRef: Ex,
    useState: function () {
      return tf(ra);
    },
    useDebugValue: rp,
    useDeferredValue: function (e) {
      var t = rn();
      return _x(t, Qe.memoizedState, e);
    },
    useTransition: function () {
      var e = tf(ra)[0],
        t = rn().memoizedState;
      return [e, t];
    },
    useMutableSource: mx,
    useSyncExternalStore: gx,
    useId: Mx,
    unstable_isNewReconciler: !1,
  },
  mT = {
    readContext: nn,
    useCallback: Tx,
    useContext: nn,
    useEffect: np,
    useImperativeHandle: Rx,
    useInsertionEffect: Cx,
    useLayoutEffect: bx,
    useMemo: Ax,
    useReducer: nf,
    useRef: Ex,
    useState: function () {
      return nf(ra);
    },
    useDebugValue: rp,
    useDeferredValue: function (e) {
      var t = rn();
      return Qe === null ? (t.memoizedState = e) : _x(t, Qe.memoizedState, e);
    },
    useTransition: function () {
      var e = nf(ra)[0],
        t = rn().memoizedState;
      return [e, t];
    },
    useMutableSource: mx,
    useSyncExternalStore: gx,
    useId: Mx,
    unstable_isNewReconciler: !1,
  };
function ln(e, t) {
  if (e && e.defaultProps) {
    ((t = Ne({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function wd(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Ne({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var qu = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? jo(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = wt(),
      o = Fr(e),
      i = Yn(r, o);
    ((i.payload = t),
      n != null && (i.callback = n),
      (t = jr(e, i, o)),
      t !== null && (mn(t, e, o, r), Dl(t, e, o)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = wt(),
      o = Fr(e),
      i = Yn(r, o);
    ((i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = jr(e, i, o)),
      t !== null && (mn(t, e, o, r), Dl(t, e, o)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = wt(),
      r = Fr(e),
      o = Yn(n, r);
    ((o.tag = 2),
      t != null && (o.callback = t),
      (t = jr(e, o, r)),
      t !== null && (mn(t, e, r, n), Dl(t, e, r)));
  },
};
function Mg(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Xs(n, r) || !Xs(o, i)
        : !0
  );
}
function Nx(e, t, n) {
  var r = !1,
    o = Ur,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = nn(i))
      : ((o = _t(t) ? Ro : gt.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Di(e, o) : Ur)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = qu),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function kg(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && qu.enqueueReplaceState(t, t.state, null));
}
function xd(e, t, n, r) {
  var o = e.stateNode;
  ((o.props = n), (o.state = e.memoizedState), (o.refs = {}), Qh(e));
  var i = t.contextType;
  (typeof i == "object" && i !== null
    ? (o.context = nn(i))
    : ((i = _t(t) ? Ro : gt.current), (o.context = Di(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (wd(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && qu.enqueueReplaceState(o, o.state, null),
      cu(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308));
}
function ji(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += zP(r)), (r = r.return));
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function rf(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Sd(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var gT = typeof WeakMap == "function" ? WeakMap : Map;
function Lx(e, t, n) {
  ((n = Yn(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (mu || ((mu = !0), (kd = r)), Sd(e, t));
    }),
    n
  );
}
function jx(e, t, n) {
  ((n = Yn(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    ((n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Sd(e, t);
      }));
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        (Sd(e, t),
          typeof r != "function" &&
            (Ir === null ? (Ir = new Set([this])) : Ir.add(this)));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function Dg(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new gT();
    var o = new Set();
    r.set(t, o);
  } else ((o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o)));
  o.has(n) || (o.add(n), (e = MT.bind(null, e, t, n)), t.then(e, e));
}
function Og(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ng(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Yn(-1, 1)), (t.tag = 2), jr(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var yT = lr.ReactCurrentOwner,
  Tt = !1;
function yt(e, t, n, r) {
  t.child = e === null ? fx(t, null, n, r) : Ni(t, e.child, n, r);
}
function Lg(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    yi(t, o),
    (r = ep(e, t, n, r, i, o)),
    (n = tp()),
    e !== null && !Tt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        or(e, t, o))
      : (Me && n && $h(t), (t.flags |= 1), yt(e, t, r, o), t.child)
  );
}
function jg(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !fp(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Ix(e, t, i, r, o))
      : ((e = Fl(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Xs), n(s, r) && e.ref === t.ref)
    )
      return or(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Vr(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Ix(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Xs(i, r) && e.ref === t.ref)
      if (((Tt = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Tt = !0);
      else return ((t.lanes = e.lanes), or(e, t, o));
  }
  return Ed(e, t, n, r, o);
}
function Fx(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        be(ai, Ot),
        (Ot |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          be(ai, Ot),
          (Ot |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        be(ai, Ot),
        (Ot |= r));
    }
  else
    (i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      be(ai, Ot),
      (Ot |= r));
  return (yt(e, t, o, n), t.child);
}
function Vx(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ed(e, t, n, r, o) {
  var i = _t(n) ? Ro : gt.current;
  return (
    (i = Di(t, i)),
    yi(t, o),
    (n = ep(e, t, n, r, i, o)),
    (r = tp()),
    e !== null && !Tt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        or(e, t, o))
      : (Me && r && $h(t), (t.flags |= 1), yt(e, t, n, o), t.child)
  );
}
function Ig(e, t, n, r, o) {
  if (_t(n)) {
    var i = !0;
    iu(t);
  } else i = !1;
  if ((yi(t, o), t.stateNode === null))
    (Ll(e, t), Nx(t, n, r), xd(t, n, r, o), (r = !0));
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = nn(u))
      : ((u = _t(n) ? Ro : gt.current), (u = Di(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    (f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && kg(t, s, r, u)),
      (xr = !1));
    var d = t.memoizedState;
    ((s.state = d),
      cu(t, r, s, o),
      (l = t.memoizedState),
      a !== r || d !== l || At.current || xr
        ? (typeof c == "function" && (wd(t, n, c, r), (l = t.memoizedState)),
          (a = xr || Mg(t, n, a, r, d, l, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((s = t.stateNode),
      hx(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : ln(t.type, a)),
      (s.props = u),
      (f = t.pendingProps),
      (d = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = nn(l))
        : ((l = _t(n) ? Ro : gt.current), (l = Di(t, l))));
    var m = n.getDerivedStateFromProps;
    ((c =
      typeof m == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== f || d !== l) && kg(t, s, r, l)),
      (xr = !1),
      (d = t.memoizedState),
      (s.state = d),
      cu(t, r, s, o));
    var v = t.memoizedState;
    a !== f || d !== v || At.current || xr
      ? (typeof m == "function" && (wd(t, n, m, r), (v = t.memoizedState)),
        (u = xr || Mg(t, n, u, r, d, v, l) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, v, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, v, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (s.props = r),
        (s.state = v),
        (s.context = l),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Cd(e, t, n, r, i, o);
}
function Cd(e, t, n, r, o, i) {
  Vx(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return (o && Eg(t, n, !1), or(e, t, i));
  ((r = t.stateNode), (yT.current = t));
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Ni(t, e.child, null, i)), (t.child = Ni(t, null, a, i)))
      : yt(e, t, a, i),
    (t.memoizedState = r.state),
    o && Eg(t, n, !0),
    t.child
  );
}
function Bx(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? Sg(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Sg(e, t.context, !1),
    Xh(e, t.containerInfo));
}
function Fg(e, t, n, r, o) {
  return (Oi(), Wh(o), (t.flags |= 256), yt(e, t, n, r), t.child);
}
var bd = { dehydrated: null, treeContext: null, retryLane: 0 };
function Pd(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ux(e, t, n) {
  var r = t.pendingProps,
    o = ke.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    be(ke, o & 1),
    e === null)
  )
    return (
      yd(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = Yu(s, r, 0, null)),
              (e = Co(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Pd(n)),
              (t.memoizedState = bd),
              e)
            : op(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return vT(e, t, s, r, a, o, n);
  if (i) {
    ((i = r.fallback), (s = t.mode), (o = e.child), (a = o.sibling));
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = Vr(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (i = Vr(a, i)) : ((i = Co(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Pd(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = bd),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Vr(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function op(e, t) {
  return (
    (t = Yu({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function cl(e, t, n, r) {
  return (
    r !== null && Wh(r),
    Ni(t, e.child, null, n),
    (e = op(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function vT(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = rf(Error(I(422)))), cl(e, t, s, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (o = t.mode),
          (r = Yu({ mode: "visible", children: r.children }, o, 0, null)),
          (i = Co(i, o, s, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && Ni(t, e.child, null, s),
          (t.child.memoizedState = Pd(s)),
          (t.memoizedState = bd),
          i);
  if (!(t.mode & 1)) return cl(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (
      (r = a),
      (i = Error(I(419))),
      (r = rf(i, r, void 0)),
      cl(e, t, s, r)
    );
  }
  if (((a = (s & e.childLanes) !== 0), Tt || a)) {
    if (((r = tt), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      ((o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), rr(e, o), mn(r, e, o, -1)));
    }
    return (cp(), (r = rf(Error(I(421)))), cl(e, t, s, r));
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = kT.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (It = Lr(o.nextSibling)),
      (Ft = t),
      (Me = !0),
      (hn = null),
      e !== null &&
        ((Yt[Zt++] = Qn),
        (Yt[Zt++] = Xn),
        (Yt[Zt++] = To),
        (Qn = e.id),
        (Xn = e.overflow),
        (To = t)),
      (t = op(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Vg(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), vd(e.return, t, n));
}
function of(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function $x(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((yt(e, t, r.children, n), (r = ke.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Vg(e, n, t);
        else if (e.tag === 19) Vg(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((be(ke, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          ((e = n.alternate),
            e !== null && fu(e) === null && (o = n),
            (n = n.sibling));
        ((n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          of(t, !1, o, n, i));
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && fu(e) === null)) {
            t.child = o;
            break;
          }
          ((e = o.sibling), (o.sibling = n), (n = o), (o = e));
        }
        of(t, !0, n, null, i);
        break;
      case "together":
        of(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ll(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function or(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (_o |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(I(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Vr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = Vr(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function wT(e, t, n) {
  switch (t.tag) {
    case 3:
      (Bx(t), Oi());
      break;
    case 5:
      px(t);
      break;
    case 1:
      _t(t.type) && iu(t);
      break;
    case 4:
      Xh(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      (be(lu, r._currentValue), (r._currentValue = o));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (be(ke, ke.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Ux(e, t, n)
            : (be(ke, ke.current & 1),
              (e = or(e, t, n)),
              e !== null ? e.sibling : null);
      be(ke, ke.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return $x(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        be(ke, ke.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), Fx(e, t, n));
  }
  return or(e, t, n);
}
var zx, Rd, Wx, Hx;
zx = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
Rd = function () {};
Wx = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    ((e = t.stateNode), fo(On.current));
    var i = null;
    switch (n) {
      case "input":
        ((o = qf(e, o)), (r = qf(e, r)), (i = []));
        break;
      case "select":
        ((o = Ne({}, o, { value: void 0 })),
          (r = Ne({}, r, { value: void 0 })),
          (i = []));
        break;
      case "textarea":
        ((o = Yf(e, o)), (r = Yf(e, r)), (i = []));
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ru);
    }
    Jf(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var a = o[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (zs.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else (n || (i || (i = []), i.push(u, n)), (n = l));
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (i = i || []).push(u, l))
            : u === "children"
              ? (typeof l != "string" && typeof l != "number") ||
                (i = i || []).push(u, "" + l)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (zs.hasOwnProperty(u)
                  ? (l != null && u === "onScroll" && Re("scroll", e),
                    i || a === l || (i = []))
                  : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Hx = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ds(e, t) {
  if (!Me)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ct(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      ((n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling));
  else
    for (o = e.child; o !== null; )
      ((n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function xT(e, t, n) {
  var r = t.pendingProps;
  switch ((zh(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (ct(t), null);
    case 1:
      return (_t(t.type) && ou(), ct(t), null);
    case 3:
      return (
        (r = t.stateNode),
        Li(),
        Te(At),
        Te(gt),
        Zh(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ll(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), hn !== null && (Nd(hn), (hn = null)))),
        Rd(e, t),
        ct(t),
        null
      );
    case 5:
      Yh(t);
      var o = fo(ta.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (Wx(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(I(166));
          return (ct(t), null);
        }
        if (((e = fo(On.current)), ll(t))) {
          ((r = t.stateNode), (n = t.type));
          var i = t.memoizedProps;
          switch (((r[_n] = t), (r[Js] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (Re("cancel", r), Re("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              Re("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < bs.length; o++) Re(bs[o], r);
              break;
            case "source":
              Re("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (Re("error", r), Re("load", r));
              break;
            case "details":
              Re("toggle", r);
              break;
            case "input":
              (qm(r, i), Re("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!i.multiple }),
                Re("invalid", r));
              break;
            case "textarea":
              (Xm(r, i), Re("invalid", r));
          }
          (Jf(n, i), (o = null));
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var a = i[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      al(r.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      al(r.textContent, a, e),
                    (o = ["children", "" + a]))
                : zs.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  Re("scroll", r);
            }
          switch (n) {
            case "input":
              (Ja(r), Qm(r, i, !0));
              break;
            case "textarea":
              (Ja(r), Ym(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ru);
          }
          ((r = o), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ww(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === "select" &&
                      ((s = e),
                      r.multiple
                        ? (s.multiple = !0)
                        : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[_n] = t),
            (e[Js] = r),
            zx(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((s = ed(n, r)), n)) {
              case "dialog":
                (Re("cancel", e), Re("close", e), (o = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (Re("load", e), (o = r));
                break;
              case "video":
              case "audio":
                for (o = 0; o < bs.length; o++) Re(bs[o], e);
                o = r;
                break;
              case "source":
                (Re("error", e), (o = r));
                break;
              case "img":
              case "image":
              case "link":
                (Re("error", e), Re("load", e), (o = r));
                break;
              case "details":
                (Re("toggle", e), (o = r));
                break;
              case "input":
                (qm(e, r), (o = qf(e, r)), Re("invalid", e));
                break;
              case "option":
                o = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = Ne({}, r, { value: void 0 })),
                  Re("invalid", e));
                break;
              case "textarea":
                (Xm(e, r), (o = Yf(e, r)), Re("invalid", e));
                break;
              default:
                o = r;
            }
            (Jf(n, o), (a = o));
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === "style"
                  ? Ew(e, l)
                  : i === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && xw(e, l))
                    : i === "children"
                      ? typeof l == "string"
                        ? (n !== "textarea" || l !== "") && Ws(e, l)
                        : typeof l == "number" && Ws(e, "" + l)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (zs.hasOwnProperty(i)
                          ? l != null && i === "onScroll" && Re("scroll", e)
                          : l != null && Ah(e, i, l, s));
              }
            switch (n) {
              case "input":
                (Ja(e), Qm(e, r, !1));
                break;
              case "textarea":
                (Ja(e), Ym(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Br(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? hi(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      hi(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = ru);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (ct(t), null);
    case 6:
      if (e && t.stateNode != null) Hx(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(I(166));
        if (((n = fo(ta.current)), fo(On.current), ll(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[_n] = t),
            (i = r.nodeValue !== n) && ((e = Ft), e !== null))
          )
            switch (e.tag) {
              case 3:
                al(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  al(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[_n] = t),
            (t.stateNode = r));
      }
      return (ct(t), null);
    case 13:
      if (
        (Te(ke),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Me && It !== null && t.mode & 1 && !(t.flags & 128))
          (ux(), Oi(), (t.flags |= 98560), (i = !1));
        else if (((i = ll(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(I(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(I(317));
            i[_n] = t;
          } else
            (Oi(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (ct(t), (i = !1));
        } else (hn !== null && (Nd(hn), (hn = null)), (i = !0));
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ke.current & 1 ? Xe === 0 && (Xe = 3) : cp())),
          t.updateQueue !== null && (t.flags |= 4),
          ct(t),
          null);
    case 4:
      return (
        Li(),
        Rd(e, t),
        e === null && Ys(t.stateNode.containerInfo),
        ct(t),
        null
      );
    case 10:
      return (Gh(t.type._context), ct(t), null);
    case 17:
      return (_t(t.type) && ou(), ct(t), null);
    case 19:
      if ((Te(ke), (i = t.memoizedState), i === null)) return (ct(t), null);
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) ds(i, !1);
        else {
          if (Xe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = fu(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    ds(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  ((i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (be(ke, (ke.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          i.tail !== null &&
            We() > Ii &&
            ((t.flags |= 128), (r = !0), ds(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = fu(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ds(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !Me)
            )
              return (ct(t), null);
          } else
            2 * We() - i.renderingStartTime > Ii &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ds(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = We()),
          (t.sibling = null),
          (n = ke.current),
          be(ke, r ? (n & 1) | 2 : n & 1),
          t)
        : (ct(t), null);
    case 22:
    case 23:
      return (
        up(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ot & 1073741824 && (ct(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ct(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(I(156, t.tag));
}
function ST(e, t) {
  switch ((zh(t), t.tag)) {
    case 1:
      return (
        _t(t.type) && ou(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Li(),
        Te(At),
        Te(gt),
        Zh(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (Yh(t), null);
    case 13:
      if (
        (Te(ke), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(I(340));
        Oi();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (Te(ke), null);
    case 4:
      return (Li(), null);
    case 10:
      return (Gh(t.type._context), null);
    case 22:
    case 23:
      return (up(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var fl = !1,
  ht = !1,
  ET = typeof WeakSet == "function" ? WeakSet : Set,
  $ = null;
function si(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Ve(e, t, r);
      }
    else n.current = null;
}
function Td(e, t, n) {
  try {
    n();
  } catch (r) {
    Ve(e, t, r);
  }
}
var Bg = !1;
function CT(e, t) {
  if (((cd = eu), (e = Xw()), Uh(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, i.nodeType);
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var m;
              f !== n || (o !== 0 && f.nodeType !== 3) || (a = s + o),
                f !== i || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (m = f.firstChild) !== null;
            )
              ((d = f), (f = m));
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === o && (a = s),
                d === i && ++c === r && (l = s),
                (m = f.nextSibling) !== null)
              )
                break;
              ((f = d), (d = f.parentNode));
            }
            f = m;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (fd = { focusedElem: e, selectionRange: n }, eu = !1, $ = t; $ !== null; )
    if (((t = $), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), ($ = e));
    else
      for (; $ !== null; ) {
        t = $;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var p = v.memoizedProps,
                    w = v.memoizedState,
                    g = t.stateNode,
                    y = g.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? p : ln(t.type, p),
                      w,
                    );
                  g.__reactInternalSnapshotBeforeUpdate = y;
                }
                break;
              case 3:
                var x = t.stateNode.containerInfo;
                x.nodeType === 1
                  ? (x.textContent = "")
                  : x.nodeType === 9 &&
                    x.documentElement &&
                    x.removeChild(x.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(I(163));
            }
        } catch (S) {
          Ve(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), ($ = e));
          break;
        }
        $ = t.return;
      }
  return ((v = Bg), (Bg = !1), v);
}
function js(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        ((o.destroy = void 0), i !== void 0 && Td(t, n, i));
      }
      o = o.next;
    } while (o !== r);
  }
}
function Qu(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ad(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Kx(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), Kx(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[_n], delete t[Js], delete t[pd], delete t[iT], delete t[sT])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function Gx(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ug(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Gx(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function _d(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ru)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (_d(e, t, n), e = e.sibling; e !== null; )
      (_d(e, t, n), (e = e.sibling));
}
function Md(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Md(e, t, n), e = e.sibling; e !== null; )
      (Md(e, t, n), (e = e.sibling));
}
var it = null,
  fn = !1;
function dr(e, t, n) {
  for (n = n.child; n !== null; ) (qx(e, t, n), (n = n.sibling));
}
function qx(e, t, n) {
  if (Dn && typeof Dn.onCommitFiberUnmount == "function")
    try {
      Dn.onCommitFiberUnmount(Uu, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ht || si(n, t);
    case 6:
      var r = it,
        o = fn;
      ((it = null),
        dr(e, t, n),
        (it = r),
        (fn = o),
        it !== null &&
          (fn
            ? ((e = it),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : it.removeChild(n.stateNode)));
      break;
    case 18:
      it !== null &&
        (fn
          ? ((e = it),
            (n = n.stateNode),
            e.nodeType === 8
              ? Yc(e.parentNode, n)
              : e.nodeType === 1 && Yc(e, n),
            qs(e))
          : Yc(it, n.stateNode));
      break;
    case 4:
      ((r = it),
        (o = fn),
        (it = n.stateNode.containerInfo),
        (fn = !0),
        dr(e, t, n),
        (it = r),
        (fn = o));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ht &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          ((i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && Td(n, t, s),
            (o = o.next));
        } while (o !== r);
      }
      dr(e, t, n);
      break;
    case 1:
      if (
        !ht &&
        (si(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (a) {
          Ve(n, t, a);
        }
      dr(e, t, n);
      break;
    case 21:
      dr(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ht = (r = ht) || n.memoizedState !== null), dr(e, t, n), (ht = r))
        : dr(e, t, n);
      break;
    default:
      dr(e, t, n);
  }
}
function $g(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new ET()),
      t.forEach(function (r) {
        var o = DT.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      }));
  }
}
function sn(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              ((it = a.stateNode), (fn = !1));
              break e;
            case 3:
              ((it = a.stateNode.containerInfo), (fn = !0));
              break e;
            case 4:
              ((it = a.stateNode.containerInfo), (fn = !0));
              break e;
          }
          a = a.return;
        }
        if (it === null) throw Error(I(160));
        (qx(i, s, o), (it = null), (fn = !1));
        var l = o.alternate;
        (l !== null && (l.return = null), (o.return = null));
      } catch (u) {
        Ve(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (Qx(t, e), (t = t.sibling));
}
function Qx(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((sn(t, e), Cn(e), r & 4)) {
        try {
          (js(3, e, e.return), Qu(3, e));
        } catch (p) {
          Ve(e, e.return, p);
        }
        try {
          js(5, e, e.return);
        } catch (p) {
          Ve(e, e.return, p);
        }
      }
      break;
    case 1:
      (sn(t, e), Cn(e), r & 512 && n !== null && si(n, n.return));
      break;
    case 5:
      if (
        (sn(t, e),
        Cn(e),
        r & 512 && n !== null && si(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Ws(o, "");
        } catch (p) {
          Ve(e, e.return, p);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            (a === "input" && i.type === "radio" && i.name != null && yw(o, i),
              ed(a, s));
            var u = ed(a, i);
            for (s = 0; s < l.length; s += 2) {
              var c = l[s],
                f = l[s + 1];
              c === "style"
                ? Ew(o, f)
                : c === "dangerouslySetInnerHTML"
                  ? xw(o, f)
                  : c === "children"
                    ? Ws(o, f)
                    : Ah(o, c, f, u);
            }
            switch (a) {
              case "input":
                Qf(o, i);
                break;
              case "textarea":
                vw(o, i);
                break;
              case "select":
                var d = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var m = i.value;
                m != null
                  ? hi(o, !!i.multiple, m, !1)
                  : d !== !!i.multiple &&
                    (i.defaultValue != null
                      ? hi(o, !!i.multiple, i.defaultValue, !0)
                      : hi(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Js] = i;
          } catch (p) {
            Ve(e, e.return, p);
          }
      }
      break;
    case 6:
      if ((sn(t, e), Cn(e), r & 4)) {
        if (e.stateNode === null) throw Error(I(162));
        ((o = e.stateNode), (i = e.memoizedProps));
        try {
          o.nodeValue = i;
        } catch (p) {
          Ve(e, e.return, p);
        }
      }
      break;
    case 3:
      if (
        (sn(t, e), Cn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          qs(t.containerInfo);
        } catch (p) {
          Ve(e, e.return, p);
        }
      break;
    case 4:
      (sn(t, e), Cn(e));
      break;
    case 13:
      (sn(t, e),
        Cn(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (ap = We())),
        r & 4 && $g(e));
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ht = (u = ht) || c), sn(t, e), (ht = u)) : sn(t, e),
        Cn(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for ($ = e, c = e.child; c !== null; ) {
            for (f = $ = c; $ !== null; ) {
              switch (((d = $), (m = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  js(4, d, d.return);
                  break;
                case 1:
                  si(d, d.return);
                  var v = d.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    ((r = d), (n = d.return));
                    try {
                      ((t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount());
                    } catch (p) {
                      Ve(r, n, p);
                    }
                  }
                  break;
                case 5:
                  si(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Wg(f);
                    continue;
                  }
              }
              m !== null ? ((m.return = d), ($ = m)) : Wg(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                ((o = f.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = f.stateNode),
                      (l = f.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = Sw("display", s))));
              } catch (p) {
                Ve(e, e.return, p);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (p) {
                Ve(e, e.return, p);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            ((f.child.return = f), (f = f.child));
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            (c === f && (c = null), (f = f.return));
          }
          (c === f && (c = null),
            (f.sibling.return = f.return),
            (f = f.sibling));
        }
      }
      break;
    case 19:
      (sn(t, e), Cn(e), r & 4 && $g(e));
      break;
    case 21:
      break;
    default:
      (sn(t, e), Cn(e));
  }
}
function Cn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Gx(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(I(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Ws(o, ""), (r.flags &= -33));
          var i = Ug(e);
          Md(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = Ug(e);
          _d(e, a, s);
          break;
        default:
          throw Error(I(161));
      }
    } catch (l) {
      Ve(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function bT(e, t, n) {
  (($ = e), Xx(e));
}
function Xx(e, t, n) {
  for (var r = (e.mode & 1) !== 0; $ !== null; ) {
    var o = $,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || fl;
      if (!s) {
        var a = o.alternate,
          l = (a !== null && a.memoizedState !== null) || ht;
        a = fl;
        var u = ht;
        if (((fl = s), (ht = l) && !u))
          for ($ = o; $ !== null; )
            ((s = $),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Hg(o)
                : l !== null
                  ? ((l.return = s), ($ = l))
                  : Hg(o));
        for (; i !== null; ) (($ = i), Xx(i), (i = i.sibling));
        (($ = o), (fl = a), (ht = u));
      }
      zg(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), ($ = i)) : zg(e);
  }
}
function zg(e) {
  for (; $ !== null; ) {
    var t = $;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ht || Qu(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ht)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ln(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && Tg(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Tg(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && qs(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(I(163));
          }
        ht || (t.flags & 512 && Ad(t));
      } catch (d) {
        Ve(t, t.return, d);
      }
    }
    if (t === e) {
      $ = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), ($ = n));
      break;
    }
    $ = t.return;
  }
}
function Wg(e) {
  for (; $ !== null; ) {
    var t = $;
    if (t === e) {
      $ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), ($ = n));
      break;
    }
    $ = t.return;
  }
}
function Hg(e) {
  for (; $ !== null; ) {
    var t = $;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Qu(4, t);
          } catch (l) {
            Ve(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Ve(t, o, l);
            }
          }
          var i = t.return;
          try {
            Ad(t);
          } catch (l) {
            Ve(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Ad(t);
          } catch (l) {
            Ve(t, s, l);
          }
      }
    } catch (l) {
      Ve(t, t.return, l);
    }
    if (t === e) {
      $ = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      ((a.return = t.return), ($ = a));
      break;
    }
    $ = t.return;
  }
}
var PT = Math.ceil,
  pu = lr.ReactCurrentDispatcher,
  ip = lr.ReactCurrentOwner,
  en = lr.ReactCurrentBatchConfig,
  pe = 0,
  tt = null,
  qe = null,
  at = 0,
  Ot = 0,
  ai = Gr(0),
  Xe = 0,
  ia = null,
  _o = 0,
  Xu = 0,
  sp = 0,
  Is = null,
  Rt = null,
  ap = 0,
  Ii = 1 / 0,
  Kn = null,
  mu = !1,
  kd = null,
  Ir = null,
  dl = !1,
  Mr = null,
  gu = 0,
  Fs = 0,
  Dd = null,
  jl = -1,
  Il = 0;
function wt() {
  return pe & 6 ? We() : jl !== -1 ? jl : (jl = We());
}
function Fr(e) {
  return e.mode & 1
    ? pe & 2 && at !== 0
      ? at & -at
      : lT.transition !== null
        ? (Il === 0 && (Il = Nw()), Il)
        : ((e = xe),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Uw(e.type))),
          e)
    : 1;
}
function mn(e, t, n, r) {
  if (50 < Fs) throw ((Fs = 0), (Dd = null), Error(I(185)));
  (ba(e, n, r),
    (!(pe & 2) || e !== tt) &&
      (e === tt && (!(pe & 2) && (Xu |= n), Xe === 4 && Er(e, at)),
      Mt(e, r),
      n === 1 && pe === 0 && !(t.mode & 1) && ((Ii = We() + 500), Ku && qr())));
}
function Mt(e, t) {
  var n = e.callbackNode;
  lR(e, t);
  var r = Jl(e, e === tt ? at : 0);
  if (r === 0)
    (n !== null && eg(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && eg(n), t === 1))
      (e.tag === 0 ? aT(Kg.bind(null, e)) : sx(Kg.bind(null, e)),
        rT(function () {
          !(pe & 6) && qr();
        }),
        (n = null));
    else {
      switch (Lw(r)) {
        case 1:
          n = Oh;
          break;
        case 4:
          n = Dw;
          break;
        case 16:
          n = Zl;
          break;
        case 536870912:
          n = Ow;
          break;
        default:
          n = Zl;
      }
      n = oS(n, Yx.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function Yx(e, t) {
  if (((jl = -1), (Il = 0), pe & 6)) throw Error(I(327));
  var n = e.callbackNode;
  if (vi() && e.callbackNode !== n) return null;
  var r = Jl(e, e === tt ? at : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = yu(e, r);
  else {
    t = r;
    var o = pe;
    pe |= 2;
    var i = Jx();
    (tt !== e || at !== t) && ((Kn = null), (Ii = We() + 500), Eo(e, t));
    do
      try {
        AT();
        break;
      } catch (a) {
        Zx(e, a);
      }
    while (!0);
    (Kh(),
      (pu.current = i),
      (pe = o),
      qe !== null ? (t = 0) : ((tt = null), (at = 0), (t = Xe)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = id(e)), o !== 0 && ((r = o), (t = Od(e, o)))), t === 1)
    )
      throw ((n = ia), Eo(e, 0), Er(e, r), Mt(e, We()), n);
    if (t === 6) Er(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !RT(o) &&
          ((t = yu(e, r)),
          t === 2 && ((i = id(e)), i !== 0 && ((r = i), (t = Od(e, i)))),
          t === 1))
      )
        throw ((n = ia), Eo(e, 0), Er(e, r), Mt(e, We()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(I(345));
        case 2:
          oo(e, Rt, Kn);
          break;
        case 3:
          if (
            (Er(e, r), (r & 130023424) === r && ((t = ap + 500 - We()), 10 < t))
          ) {
            if (Jl(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              (wt(), (e.pingedLanes |= e.suspendedLanes & o));
              break;
            }
            e.timeoutHandle = hd(oo.bind(null, e, Rt, Kn), t);
            break;
          }
          oo(e, Rt, Kn);
          break;
        case 4:
          if ((Er(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - pn(r);
            ((i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i));
          }
          if (
            ((r = o),
            (r = We() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * PT(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = hd(oo.bind(null, e, Rt, Kn), r);
            break;
          }
          oo(e, Rt, Kn);
          break;
        case 5:
          oo(e, Rt, Kn);
          break;
        default:
          throw Error(I(329));
      }
    }
  }
  return (Mt(e, We()), e.callbackNode === n ? Yx.bind(null, e) : null);
}
function Od(e, t) {
  var n = Is;
  return (
    e.current.memoizedState.isDehydrated && (Eo(e, t).flags |= 256),
    (e = yu(e, t)),
    e !== 2 && ((t = Rt), (Rt = n), t !== null && Nd(t)),
    e
  );
}
function Nd(e) {
  Rt === null ? (Rt = e) : Rt.push.apply(Rt, e);
}
function RT(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!yn(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function Er(e, t) {
  for (
    t &= ~sp,
      t &= ~Xu,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - pn(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function Kg(e) {
  if (pe & 6) throw Error(I(327));
  vi();
  var t = Jl(e, 0);
  if (!(t & 1)) return (Mt(e, We()), null);
  var n = yu(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = id(e);
    r !== 0 && ((t = r), (n = Od(e, r)));
  }
  if (n === 1) throw ((n = ia), Eo(e, 0), Er(e, t), Mt(e, We()), n);
  if (n === 6) throw Error(I(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    oo(e, Rt, Kn),
    Mt(e, We()),
    null
  );
}
function lp(e, t) {
  var n = pe;
  pe |= 1;
  try {
    return e(t);
  } finally {
    ((pe = n), pe === 0 && ((Ii = We() + 500), Ku && qr()));
  }
}
function Mo(e) {
  Mr !== null && Mr.tag === 0 && !(pe & 6) && vi();
  var t = pe;
  pe |= 1;
  var n = en.transition,
    r = xe;
  try {
    if (((en.transition = null), (xe = 1), e)) return e();
  } finally {
    ((xe = r), (en.transition = n), (pe = t), !(pe & 6) && qr());
  }
}
function up() {
  ((Ot = ai.current), Te(ai));
}
function Eo(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), nT(n)), qe !== null))
    for (n = qe.return; n !== null; ) {
      var r = n;
      switch ((zh(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && ou());
          break;
        case 3:
          (Li(), Te(At), Te(gt), Zh());
          break;
        case 5:
          Yh(r);
          break;
        case 4:
          Li();
          break;
        case 13:
          Te(ke);
          break;
        case 19:
          Te(ke);
          break;
        case 10:
          Gh(r.type._context);
          break;
        case 22:
        case 23:
          up();
      }
      n = n.return;
    }
  if (
    ((tt = e),
    (qe = e = Vr(e.current, null)),
    (at = Ot = t),
    (Xe = 0),
    (ia = null),
    (sp = Xu = _o = 0),
    (Rt = Is = null),
    co !== null)
  ) {
    for (t = 0; t < co.length; t++)
      if (((n = co[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          ((i.next = o), (r.next = s));
        }
        n.pending = r;
      }
    co = null;
  }
  return e;
}
function Zx(e, t) {
  do {
    var n = qe;
    try {
      if ((Kh(), (Ol.current = hu), du)) {
        for (var r = Oe.memoizedState; r !== null; ) {
          var o = r.queue;
          (o !== null && (o.pending = null), (r = r.next));
        }
        du = !1;
      }
      if (
        ((Ao = 0),
        (et = Qe = Oe = null),
        (Ls = !1),
        (na = 0),
        (ip.current = null),
        n === null || n.return === null)
      ) {
        ((Xe = 1), (ia = t), (qe = null));
        break;
      }
      e: {
        var i = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = at),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var m = Og(s);
          if (m !== null) {
            ((m.flags &= -257),
              Ng(m, s, a, i, t),
              m.mode & 1 && Dg(i, u, t),
              (t = m),
              (l = u));
            var v = t.updateQueue;
            if (v === null) {
              var p = new Set();
              (p.add(l), (t.updateQueue = p));
            } else v.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              (Dg(i, u, t), cp());
              break e;
            }
            l = Error(I(426));
          }
        } else if (Me && a.mode & 1) {
          var w = Og(s);
          if (w !== null) {
            (!(w.flags & 65536) && (w.flags |= 256),
              Ng(w, s, a, i, t),
              Wh(ji(l, a)));
            break e;
          }
        }
        ((i = l = ji(l, a)),
          Xe !== 4 && (Xe = 2),
          Is === null ? (Is = [i]) : Is.push(i),
          (i = s));
        do {
          switch (i.tag) {
            case 3:
              ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
              var g = Lx(i, l, t);
              Rg(i, g);
              break e;
            case 1:
              a = l;
              var y = i.type,
                x = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof y.getDerivedStateFromError == "function" ||
                  (x !== null &&
                    typeof x.componentDidCatch == "function" &&
                    (Ir === null || !Ir.has(x))))
              ) {
                ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                var S = jx(i, a, t);
                Rg(i, S);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      tS(n);
    } catch (b) {
      ((t = b), qe === n && n !== null && (qe = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function Jx() {
  var e = pu.current;
  return ((pu.current = hu), e === null ? hu : e);
}
function cp() {
  ((Xe === 0 || Xe === 3 || Xe === 2) && (Xe = 4),
    tt === null || (!(_o & 268435455) && !(Xu & 268435455)) || Er(tt, at));
}
function yu(e, t) {
  var n = pe;
  pe |= 2;
  var r = Jx();
  (tt !== e || at !== t) && ((Kn = null), Eo(e, t));
  do
    try {
      TT();
      break;
    } catch (o) {
      Zx(e, o);
    }
  while (!0);
  if ((Kh(), (pe = n), (pu.current = r), qe !== null)) throw Error(I(261));
  return ((tt = null), (at = 0), Xe);
}
function TT() {
  for (; qe !== null; ) eS(qe);
}
function AT() {
  for (; qe !== null && !JP(); ) eS(qe);
}
function eS(e) {
  var t = rS(e.alternate, e, Ot);
  ((e.memoizedProps = e.pendingProps),
    t === null ? tS(e) : (qe = t),
    (ip.current = null));
}
function tS(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = ST(n, t)), n !== null)) {
        ((n.flags &= 32767), (qe = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((Xe = 6), (qe = null));
        return;
      }
    } else if (((n = xT(n, t, Ot)), n !== null)) {
      qe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      qe = t;
      return;
    }
    qe = t = e;
  } while (t !== null);
  Xe === 0 && (Xe = 5);
}
function oo(e, t, n) {
  var r = xe,
    o = en.transition;
  try {
    ((en.transition = null), (xe = 1), _T(e, t, n, r));
  } finally {
    ((en.transition = o), (xe = r));
  }
  return null;
}
function _T(e, t, n, r) {
  do vi();
  while (Mr !== null);
  if (pe & 6) throw Error(I(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(I(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var i = n.lanes | n.childLanes;
  if (
    (uR(e, i),
    e === tt && ((qe = tt = null), (at = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      dl ||
      ((dl = !0),
      oS(Zl, function () {
        return (vi(), null);
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    ((i = en.transition), (en.transition = null));
    var s = xe;
    xe = 1;
    var a = pe;
    ((pe |= 4),
      (ip.current = null),
      CT(e, n),
      Qx(n, e),
      QR(fd),
      (eu = !!cd),
      (fd = cd = null),
      (e.current = n),
      bT(n),
      eR(),
      (pe = a),
      (xe = s),
      (en.transition = i));
  } else e.current = n;
  if (
    (dl && ((dl = !1), (Mr = e), (gu = o)),
    (i = e.pendingLanes),
    i === 0 && (Ir = null),
    rR(n.stateNode),
    Mt(e, We()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest }));
  if (mu) throw ((mu = !1), (e = kd), (kd = null), e);
  return (
    gu & 1 && e.tag !== 0 && vi(),
    (i = e.pendingLanes),
    i & 1 ? (e === Dd ? Fs++ : ((Fs = 0), (Dd = e))) : (Fs = 0),
    qr(),
    null
  );
}
function vi() {
  if (Mr !== null) {
    var e = Lw(gu),
      t = en.transition,
      n = xe;
    try {
      if (((en.transition = null), (xe = 16 > e ? 16 : e), Mr === null))
        var r = !1;
      else {
        if (((e = Mr), (Mr = null), (gu = 0), pe & 6)) throw Error(I(331));
        var o = pe;
        for (pe |= 4, $ = e.current; $ !== null; ) {
          var i = $,
            s = i.child;
          if ($.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for ($ = u; $ !== null; ) {
                  var c = $;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      js(8, c, i);
                  }
                  var f = c.child;
                  if (f !== null) ((f.return = c), ($ = f));
                  else
                    for (; $ !== null; ) {
                      c = $;
                      var d = c.sibling,
                        m = c.return;
                      if ((Kx(c), c === u)) {
                        $ = null;
                        break;
                      }
                      if (d !== null) {
                        ((d.return = m), ($ = d));
                        break;
                      }
                      $ = m;
                    }
                }
              }
              var v = i.alternate;
              if (v !== null) {
                var p = v.child;
                if (p !== null) {
                  v.child = null;
                  do {
                    var w = p.sibling;
                    ((p.sibling = null), (p = w));
                  } while (p !== null);
                }
              }
              $ = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) ((s.return = i), ($ = s));
          else
            e: for (; $ !== null; ) {
              if (((i = $), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    js(9, i, i.return);
                }
              var g = i.sibling;
              if (g !== null) {
                ((g.return = i.return), ($ = g));
                break e;
              }
              $ = i.return;
            }
        }
        var y = e.current;
        for ($ = y; $ !== null; ) {
          s = $;
          var x = s.child;
          if (s.subtreeFlags & 2064 && x !== null) ((x.return = s), ($ = x));
          else
            e: for (s = y; $ !== null; ) {
              if (((a = $), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qu(9, a);
                  }
                } catch (b) {
                  Ve(a, a.return, b);
                }
              if (a === s) {
                $ = null;
                break e;
              }
              var S = a.sibling;
              if (S !== null) {
                ((S.return = a.return), ($ = S));
                break e;
              }
              $ = a.return;
            }
        }
        if (
          ((pe = o), qr(), Dn && typeof Dn.onPostCommitFiberRoot == "function")
        )
          try {
            Dn.onPostCommitFiberRoot(Uu, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((xe = n), (en.transition = t));
    }
  }
  return !1;
}
function Gg(e, t, n) {
  ((t = ji(n, t)),
    (t = Lx(e, t, 1)),
    (e = jr(e, t, 1)),
    (t = wt()),
    e !== null && (ba(e, 1, t), Mt(e, t)));
}
function Ve(e, t, n) {
  if (e.tag === 3) Gg(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Gg(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Ir === null || !Ir.has(r)))
        ) {
          ((e = ji(n, e)),
            (e = jx(t, e, 1)),
            (t = jr(t, e, 1)),
            (e = wt()),
            t !== null && (ba(t, 1, e), Mt(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function MT(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = wt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    tt === e &&
      (at & n) === n &&
      (Xe === 4 || (Xe === 3 && (at & 130023424) === at && 500 > We() - ap)
        ? Eo(e, 0)
        : (sp |= n)),
    Mt(e, t));
}
function nS(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = nl), (nl <<= 1), !(nl & 130023424) && (nl = 4194304))
      : (t = 1));
  var n = wt();
  ((e = rr(e, t)), e !== null && (ba(e, t, n), Mt(e, n)));
}
function kT(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), nS(e, n));
}
function DT(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(I(314));
  }
  (r !== null && r.delete(t), nS(e, n));
}
var rS;
rS = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || At.current) Tt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((Tt = !1), wT(e, t, n));
      Tt = !!(e.flags & 131072);
    }
  else ((Tt = !1), Me && t.flags & 1048576 && ax(t, au, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (Ll(e, t), (e = t.pendingProps));
      var o = Di(t, gt.current);
      (yi(t, n), (o = ep(null, t, r, e, o, n)));
      var i = tp();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            _t(r) ? ((i = !0), iu(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Qh(t),
            (o.updater = qu),
            (t.stateNode = o),
            (o._reactInternals = t),
            xd(t, r, e, n),
            (t = Cd(null, t, r, !0, i, n)))
          : ((t.tag = 0), Me && i && $h(t), yt(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ll(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = NT(r)),
          (e = ln(r, e)),
          o)
        ) {
          case 0:
            t = Ed(null, t, r, e, n);
            break e;
          case 1:
            t = Ig(null, t, r, e, n);
            break e;
          case 11:
            t = Lg(null, t, r, e, n);
            break e;
          case 14:
            t = jg(null, t, r, ln(r.type, e), n);
            break e;
        }
        throw Error(I(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ln(r, o)),
        Ed(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ln(r, o)),
        Ig(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Bx(t), e === null)) throw Error(I(387));
        ((r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          hx(e, t),
          cu(t, r, null, n));
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            ((o = ji(Error(I(423)), t)), (t = Fg(e, t, r, n, o)));
            break e;
          } else if (r !== o) {
            ((o = ji(Error(I(424)), t)), (t = Fg(e, t, r, n, o)));
            break e;
          } else
            for (
              It = Lr(t.stateNode.containerInfo.firstChild),
                Ft = t,
                Me = !0,
                hn = null,
                n = fx(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((Oi(), r === o)) {
            t = or(e, t, n);
            break e;
          }
          yt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        px(t),
        e === null && yd(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        dd(r, o) ? (s = null) : i !== null && dd(r, i) && (t.flags |= 32),
        Vx(e, t),
        yt(e, t, s, n),
        t.child
      );
    case 6:
      return (e === null && yd(t), null);
    case 13:
      return Ux(e, t, n);
    case 4:
      return (
        Xh(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Ni(t, null, r, n)) : yt(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ln(r, o)),
        Lg(e, t, r, o, n)
      );
    case 7:
      return (yt(e, t, t.pendingProps, n), t.child);
    case 8:
      return (yt(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (yt(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          be(lu, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (yn(i.value, s)) {
            if (i.children === o.children && !At.current) {
              t = or(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                s = i.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      ((l = Yn(-1, n & -n)), (l.tag = 2));
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        (c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l));
                      }
                    }
                    ((i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      vd(i.return, n, t),
                      (a.lanes |= n));
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(I(341));
                ((s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  vd(s, n, t),
                  (s = i.sibling));
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    ((i.return = s.return), (s = i));
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        (yt(e, t, o.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        yi(t, n),
        (o = nn(o)),
        (r = r(o)),
        (t.flags |= 1),
        yt(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = ln(r, t.pendingProps)),
        (o = ln(r.type, o)),
        jg(e, t, r, o, n)
      );
    case 15:
      return Ix(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ln(r, o)),
        Ll(e, t),
        (t.tag = 1),
        _t(r) ? ((e = !0), iu(t)) : (e = !1),
        yi(t, n),
        Nx(t, r, o),
        xd(t, r, o, n),
        Cd(null, t, r, !0, e, n)
      );
    case 19:
      return $x(e, t, n);
    case 22:
      return Fx(e, t, n);
  }
  throw Error(I(156, t.tag));
};
function oS(e, t) {
  return kw(e, t);
}
function OT(e, t, n, r) {
  ((this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function Jt(e, t, n, r) {
  return new OT(e, t, n, r);
}
function fp(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function NT(e) {
  if (typeof e == "function") return fp(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Mh)) return 11;
    if (e === kh) return 14;
  }
  return 2;
}
function Vr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Jt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Fl(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) fp(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Yo:
        return Co(n.children, o, i, t);
      case _h:
        ((s = 8), (o |= 8));
        break;
      case Wf:
        return (
          (e = Jt(12, n, t, o | 2)),
          (e.elementType = Wf),
          (e.lanes = i),
          e
        );
      case Hf:
        return ((e = Jt(13, n, t, o)), (e.elementType = Hf), (e.lanes = i), e);
      case Kf:
        return ((e = Jt(19, n, t, o)), (e.elementType = Kf), (e.lanes = i), e);
      case pw:
        return Yu(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case dw:
              s = 10;
              break e;
            case hw:
              s = 9;
              break e;
            case Mh:
              s = 11;
              break e;
            case kh:
              s = 14;
              break e;
            case wr:
              ((s = 16), (r = null));
              break e;
          }
        throw Error(I(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Jt(s, n, t, o)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = i),
    t
  );
}
function Co(e, t, n, r) {
  return ((e = Jt(7, e, r, t)), (e.lanes = n), e);
}
function Yu(e, t, n, r) {
  return (
    (e = Jt(22, e, r, t)),
    (e.elementType = pw),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function sf(e, t, n) {
  return ((e = Jt(6, e, null, t)), (e.lanes = n), e);
}
function af(e, t, n) {
  return (
    (t = Jt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function LT(e, t, n, r, o) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Bc(0)),
    (this.expirationTimes = Bc(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Bc(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null));
}
function dp(e, t, n, r, o, i, s, a, l) {
  return (
    (e = new LT(e, t, n, a, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Jt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Qh(i),
    e
  );
}
function jT(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Xo,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function iS(e) {
  if (!e) return Ur;
  e = e._reactInternals;
  e: {
    if (jo(e) !== e || e.tag !== 1) throw Error(I(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (_t(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(I(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (_t(n)) return ix(e, n, t);
  }
  return t;
}
function sS(e, t, n, r, o, i, s, a, l) {
  return (
    (e = dp(n, r, !0, e, o, i, s, a, l)),
    (e.context = iS(null)),
    (n = e.current),
    (r = wt()),
    (o = Fr(n)),
    (i = Yn(r, o)),
    (i.callback = t ?? null),
    jr(n, i, o),
    (e.current.lanes = o),
    ba(e, o, r),
    Mt(e, r),
    e
  );
}
function Zu(e, t, n, r) {
  var o = t.current,
    i = wt(),
    s = Fr(o);
  return (
    (n = iS(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Yn(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = jr(o, t, s)),
    e !== null && (mn(e, o, s, i), Dl(e, o, s)),
    s
  );
}
function vu(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function qg(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function hp(e, t) {
  (qg(e, t), (e = e.alternate) && qg(e, t));
}
function IT() {
  return null;
}
var aS =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function pp(e) {
  this._internalRoot = e;
}
Ju.prototype.render = pp.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(I(409));
  Zu(e, t, null, null);
};
Ju.prototype.unmount = pp.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (Mo(function () {
      Zu(null, e, null, null);
    }),
      (t[nr] = null));
  }
};
function Ju(e) {
  this._internalRoot = e;
}
Ju.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Fw();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Sr.length && t !== 0 && t < Sr[n].priority; n++);
    (Sr.splice(n, 0, e), n === 0 && Bw(e));
  }
};
function mp(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ec(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Qg() {}
function FT(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = vu(s);
        i.call(u);
      };
    }
    var s = sS(t, r, e, 0, null, !1, !1, "", Qg);
    return (
      (e._reactRootContainer = s),
      (e[nr] = s.current),
      Ys(e.nodeType === 8 ? e.parentNode : e),
      Mo(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = vu(l);
      a.call(u);
    };
  }
  var l = dp(e, 0, !1, null, null, !1, !1, "", Qg);
  return (
    (e._reactRootContainer = l),
    (e[nr] = l.current),
    Ys(e.nodeType === 8 ? e.parentNode : e),
    Mo(function () {
      Zu(t, l, n, r);
    }),
    l
  );
}
function tc(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var l = vu(s);
        a.call(l);
      };
    }
    Zu(t, s, e, o);
  } else s = FT(n, t, e, o, r);
  return vu(s);
}
jw = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Cs(t.pendingLanes);
        n !== 0 &&
          (Nh(t, n | 1), Mt(t, We()), !(pe & 6) && ((Ii = We() + 500), qr()));
      }
      break;
    case 13:
      (Mo(function () {
        var r = rr(e, 1);
        if (r !== null) {
          var o = wt();
          mn(r, e, 1, o);
        }
      }),
        hp(e, 1));
  }
};
Lh = function (e) {
  if (e.tag === 13) {
    var t = rr(e, 134217728);
    if (t !== null) {
      var n = wt();
      mn(t, e, 134217728, n);
    }
    hp(e, 134217728);
  }
};
Iw = function (e) {
  if (e.tag === 13) {
    var t = Fr(e),
      n = rr(e, t);
    if (n !== null) {
      var r = wt();
      mn(n, e, t, r);
    }
    hp(e, t);
  }
};
Fw = function () {
  return xe;
};
Vw = function (e, t) {
  var n = xe;
  try {
    return ((xe = e), t());
  } finally {
    xe = n;
  }
};
nd = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Qf(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Hu(r);
            if (!o) throw Error(I(90));
            (gw(r), Qf(r, o));
          }
        }
      }
      break;
    case "textarea":
      vw(e, n);
      break;
    case "select":
      ((t = n.value), t != null && hi(e, !!n.multiple, t, !1));
  }
};
Pw = lp;
Rw = Mo;
var VT = { usingClientEntryPoint: !1, Events: [Ra, ti, Hu, Cw, bw, lp] },
  hs = {
    findFiberByHostInstance: uo,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  BT = {
    bundleType: hs.bundleType,
    version: hs.version,
    rendererPackageName: hs.rendererPackageName,
    rendererConfig: hs.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: lr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = _w(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: hs.findFiberByHostInstance || IT,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var hl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!hl.isDisabled && hl.supportsFiber)
    try {
      ((Uu = hl.inject(BT)), (Dn = hl));
    } catch {}
}
zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = VT;
zt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!mp(t)) throw Error(I(200));
  return jT(e, t, null, n);
};
zt.createRoot = function (e, t) {
  if (!mp(e)) throw Error(I(299));
  var n = !1,
    r = "",
    o = aS;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = dp(e, 1, !1, null, null, n, !1, r, o)),
    (e[nr] = t.current),
    Ys(e.nodeType === 8 ? e.parentNode : e),
    new pp(t)
  );
};
zt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(I(188))
      : ((e = Object.keys(e).join(",")), Error(I(268, e)));
  return ((e = _w(t)), (e = e === null ? null : e.stateNode), e);
};
zt.flushSync = function (e) {
  return Mo(e);
};
zt.hydrate = function (e, t, n) {
  if (!ec(t)) throw Error(I(200));
  return tc(null, e, t, !0, n);
};
zt.hydrateRoot = function (e, t, n) {
  if (!mp(e)) throw Error(I(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    s = aS;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = sS(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[nr] = t.current),
    Ys(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o));
  return new Ju(t);
};
zt.render = function (e, t, n) {
  if (!ec(t)) throw Error(I(200));
  return tc(null, e, t, !1, n);
};
zt.unmountComponentAtNode = function (e) {
  if (!ec(e)) throw Error(I(40));
  return e._reactRootContainer
    ? (Mo(function () {
        tc(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[nr] = null));
        });
      }),
      !0)
    : !1;
};
zt.unstable_batchedUpdates = lp;
zt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ec(n)) throw Error(I(200));
  if (e == null || e._reactInternals === void 0) throw Error(I(38));
  return tc(e, t, n, !1, r);
};
zt.version = "18.3.1-next-f1338f8080-20240426";
function lS() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lS);
    } catch (e) {
      console.error(e);
    }
}
(lS(), (lw.exports = zt));
var Gi = lw.exports;
const uS = Sh(Gi),
  UT = X0({ __proto__: null, default: uS }, [Gi]);
var Xg = Gi;
(($f.createRoot = Xg.createRoot), ($f.hydrateRoot = Xg.hydrateRoot));
/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function _e() {
  return (
    (_e = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    _e.apply(this, arguments)
  );
}
var Ge;
(function (e) {
  ((e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE"));
})(Ge || (Ge = {}));
const Yg = "popstate";
function $T(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: s, hash: a } = r.location;
    return sa(
      "",
      { pathname: i, search: s, hash: a },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default",
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : Do(o);
  }
  return WT(t, n, null, e);
}
function le(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function ko(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function zT() {
  return Math.random().toString(36).substr(2, 8);
}
function Zg(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function sa(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    _e(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Qr(t) : t,
      { state: n, key: (t && t.key) || r || zT() },
    )
  );
}
function Do(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Qr(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    (r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e));
  }
  return t;
}
function WT(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    s = o.history,
    a = Ge.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), s.replaceState(_e({}, s.state, { idx: u }), ""));
  function c() {
    return (s.state || { idx: null }).idx;
  }
  function f() {
    a = Ge.Pop;
    let w = c(),
      g = w == null ? null : w - u;
    ((u = w), l && l({ action: a, location: p.location, delta: g }));
  }
  function d(w, g) {
    a = Ge.Push;
    let y = sa(p.location, w, g);
    u = c() + 1;
    let x = Zg(y, u),
      S = p.createHref(y);
    try {
      s.pushState(x, "", S);
    } catch (b) {
      if (b instanceof DOMException && b.name === "DataCloneError") throw b;
      o.location.assign(S);
    }
    i && l && l({ action: a, location: p.location, delta: 1 });
  }
  function m(w, g) {
    a = Ge.Replace;
    let y = sa(p.location, w, g);
    u = c();
    let x = Zg(y, u),
      S = p.createHref(y);
    (s.replaceState(x, "", S),
      i && l && l({ action: a, location: p.location, delta: 0 }));
  }
  function v(w) {
    let g = o.location.origin !== "null" ? o.location.origin : o.location.href,
      y = typeof w == "string" ? w : Do(w);
    return (
      (y = y.replace(/ $/, "%20")),
      le(
        g,
        "No window.location.(origin|href) available to create URL for href: " +
          y,
      ),
      new URL(y, g)
    );
  }
  let p = {
    get action() {
      return a;
    },
    get location() {
      return e(o, s);
    },
    listen(w) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(Yg, f),
        (l = w),
        () => {
          (o.removeEventListener(Yg, f), (l = null));
        }
      );
    },
    createHref(w) {
      return t(o, w);
    },
    createURL: v,
    encodeLocation(w) {
      let g = v(w);
      return { pathname: g.pathname, search: g.search, hash: g.hash };
    },
    push: d,
    replace: m,
    go(w) {
      return s.go(w);
    },
  };
  return p;
}
var we;
(function (e) {
  ((e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error"));
})(we || (we = {}));
const HT = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function KT(e) {
  return e.index === !0;
}
function wu(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((o, i) => {
      let s = [...n, String(i)],
        a = typeof o.id == "string" ? o.id : s.join("-");
      if (
        (le(
          o.index !== !0 || !o.children,
          "Cannot specify children on an index route",
        ),
        le(
          !r[a],
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`,
        ),
        KT(o))
      ) {
        let l = _e({}, o, t(o), { id: a });
        return ((r[a] = l), l);
      } else {
        let l = _e({}, o, t(o), { id: a, children: void 0 });
        return (
          (r[a] = l),
          o.children && (l.children = wu(o.children, t, s, r)),
          l
        );
      }
    })
  );
}
function ao(e, t, n) {
  return (n === void 0 && (n = "/"), Vl(e, t, n, !1));
}
function Vl(e, t, n, r) {
  let o = typeof t == "string" ? Qr(t) : t,
    i = qi(o.pathname || "/", n);
  if (i == null) return null;
  let s = cS(e);
  qT(s);
  let a = null;
  for (let l = 0; a == null && l < s.length; ++l) {
    let u = iA(i);
    a = rA(s[l], u, r);
  }
  return a;
}
function GT(e, t) {
  let { route: n, pathname: r, params: o } = e;
  return { id: n.id, pathname: r, params: o, data: t[n.id], handle: n.handle };
}
function cS(e, t, n, r) {
  (t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = ""));
  let o = (i, s, a) => {
    let l = {
      relativePath: a === void 0 ? i.path || "" : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: s,
      route: i,
    };
    l.relativePath.startsWith("/") &&
      (le(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = Zn([r, l.relativePath]),
      c = n.concat(l);
    (i.children &&
      i.children.length > 0 &&
      (le(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".'),
      ),
      cS(i.children, t, c, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: tA(u, i.index), routesMeta: c }));
  };
  return (
    e.forEach((i, s) => {
      var a;
      if (i.path === "" || !((a = i.path) != null && a.includes("?"))) o(i, s);
      else for (let l of fS(i.path)) o(i, s, l);
    }),
    t
  );
}
function fS(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let s = fS(r.join("/")),
    a = [];
  return (
    a.push(...s.map((l) => (l === "" ? i : [i, l].join("/")))),
    o && a.push(...s),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function qT(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : nA(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const QT = /^:[\w-]+$/,
  XT = 3,
  YT = 2,
  ZT = 1,
  JT = 10,
  eA = -2,
  Jg = (e) => e === "*";
function tA(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Jg) && (r += eA),
    t && (r += YT),
    n
      .filter((o) => !Jg(o))
      .reduce((o, i) => o + (QT.test(i) ? XT : i === "" ? ZT : JT), r)
  );
}
function nA(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function rA(e, t, n) {
  n === void 0 && (n = !1);
  let { routesMeta: r } = e,
    o = {},
    i = "/",
    s = [];
  for (let a = 0; a < r.length; ++a) {
    let l = r[a],
      u = a === r.length - 1,
      c = i === "/" ? t : t.slice(i.length) || "/",
      f = ey(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
        c,
      ),
      d = l.route;
    if (
      (!f &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (f = ey(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
          c,
        )),
      !f)
    )
      return null;
    (Object.assign(o, f.params),
      s.push({
        params: o,
        pathname: Zn([i, f.pathname]),
        pathnameBase: uA(Zn([i, f.pathnameBase])),
        route: d,
      }),
      f.pathnameBase !== "/" && (i = Zn([i, f.pathnameBase])));
  }
  return s;
}
function ey(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = oA(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    s = i.replace(/(.)\/+$/, "$1"),
    a = o.slice(1);
  return {
    params: r.reduce((u, c, f) => {
      let { paramName: d, isOptional: m } = c;
      if (d === "*") {
        let p = a[f] || "";
        s = i.slice(0, i.length - p.length).replace(/(.)\/+$/, "$1");
      }
      const v = a[f];
      return (
        m && !v ? (u[d] = void 0) : (u[d] = (v || "").replace(/%2F/g, "/")),
        u
      );
    }, {}),
    pathname: i,
    pathnameBase: s,
    pattern: e,
  };
}
function oA(e, t, n) {
  (t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    ko(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    ));
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, a, l) => (
            r.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (o += "\\/*$")
        : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function iA(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      ko(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function qi(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
const sA = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  aA = (e) => sA.test(e);
function lA(e, t) {
  t === void 0 && (t = "/");
  let {
      pathname: n,
      search: r = "",
      hash: o = "",
    } = typeof e == "string" ? Qr(e) : e,
    i;
  if (n)
    if (aA(n)) i = n;
    else {
      if (n.includes("//")) {
        let s = n;
        ((n = n.replace(/\/\/+/g, "/")),
          ko(
            !1,
            "Pathnames cannot have embedded double slashes - normalizing " +
              (s + " -> " + n),
          ));
      }
      n.startsWith("/") ? (i = ty(n.substring(1), "/")) : (i = ty(n, t));
    }
  else i = t;
  return { pathname: i, search: cA(r), hash: fA(o) };
}
function ty(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function lf(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function dS(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function nc(e, t) {
  let n = dS(e);
  return t
    ? n.map((r, o) => (o === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function rc(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = Qr(e))
    : ((o = _e({}, e)),
      le(
        !o.pathname || !o.pathname.includes("?"),
        lf("?", "pathname", "search", o),
      ),
      le(
        !o.pathname || !o.pathname.includes("#"),
        lf("#", "pathname", "hash", o),
      ),
      le(!o.search || !o.search.includes("#"), lf("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "",
    s = i ? "/" : o.pathname,
    a;
  if (s == null) a = n;
  else {
    let f = t.length - 1;
    if (!r && s.startsWith("..")) {
      let d = s.split("/");
      for (; d[0] === ".."; ) (d.shift(), (f -= 1));
      o.pathname = d.join("/");
    }
    a = f >= 0 ? t[f] : "/";
  }
  let l = lA(o, a),
    u = s && s !== "/" && s.endsWith("/"),
    c = (i || s === ".") && n.endsWith("/");
  return (!l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l);
}
const Zn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  uA = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  cA = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  fA = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class xu {
  constructor(t, n, r, o) {
    (o === void 0 && (o = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = o),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r));
  }
}
function aa(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const hS = ["post", "put", "patch", "delete"],
  dA = new Set(hS),
  hA = ["get", ...hS],
  pA = new Set(hA),
  mA = new Set([301, 302, 303, 307, 308]),
  gA = new Set([307, 308]),
  uf = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  yA = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  ps = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  gp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  vA = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  pS = "remix-router-transitions";
function wA(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  le(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter",
  );
  let o;
  if (e.mapRouteProperties) o = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let P = e.detectErrorBoundary;
    o = (A) => ({ hasErrorBoundary: P(A) });
  } else o = vA;
  let i = {},
    s = wu(e.routes, o, void 0, i),
    a,
    l = e.basename || "/",
    u = e.dataStrategy || CA,
    c = e.patchRoutesOnNavigation,
    f = _e(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        v7_skipActionErrorRevalidation: !1,
      },
      e.future,
    ),
    d = null,
    m = new Set(),
    v = null,
    p = null,
    w = null,
    g = e.hydrationData != null,
    y = ao(s, e.history.location, l),
    x = !1,
    S = null;
  if (y == null && !c) {
    let P = Pt(404, { pathname: e.history.location.pathname }),
      { matches: A, route: k } = dy(s);
    ((y = A), (S = { [k.id]: P }));
  }
  y &&
    !e.hydrationData &&
    Ka(y, s, e.history.location.pathname).active &&
    (y = null);
  let b;
  if (y)
    if (y.some((P) => P.route.lazy)) b = !1;
    else if (!y.some((P) => P.route.loader)) b = !0;
    else if (f.v7_partialHydration) {
      let P = e.hydrationData ? e.hydrationData.loaderData : null,
        A = e.hydrationData ? e.hydrationData.errors : null;
      if (A) {
        let k = y.findIndex((j) => A[j.route.id] !== void 0);
        b = y.slice(0, k + 1).every((j) => !jd(j.route, P, A));
      } else b = y.every((k) => !jd(k.route, P, A));
    } else b = e.hydrationData != null;
  else if (((b = !1), (y = []), f.v7_partialHydration)) {
    let P = Ka(null, s, e.history.location.pathname);
    P.active && P.matches && ((x = !0), (y = P.matches));
  }
  let T,
    C = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: y,
      initialized: b,
      navigation: uf,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || S,
      fetchers: new Map(),
      blockers: new Map(),
    },
    R = Ge.Pop,
    L = !1,
    D,
    B = !1,
    V = new Map(),
    Y = null,
    W = !1,
    se = !1,
    J = [],
    Z = new Set(),
    M = new Map(),
    N = 0,
    F = -1,
    K = new Map(),
    re = new Set(),
    fe = new Map(),
    Se = new Map(),
    ye = new Set(),
    Ee = new Map(),
    me = new Map(),
    ae;
  function Ue() {
    if (
      ((d = e.history.listen((P) => {
        let { action: A, location: k, delta: j } = P;
        if (ae) {
          (ae(), (ae = void 0));
          return;
        }
        ko(
          me.size === 0 || j != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.",
        );
        let U = Im({
          currentLocation: C.location,
          nextLocation: k,
          historyAction: A,
        });
        if (U && j != null) {
          let X = new Promise((ne) => {
            ae = ne;
          });
          (e.history.go(j * -1),
            Ha(U, {
              state: "blocked",
              location: k,
              proceed() {
                (Ha(U, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: k,
                }),
                  X.then(() => e.history.go(j)));
              },
              reset() {
                let ne = new Map(C.blockers);
                (ne.set(U, ps), $e({ blockers: ne }));
              },
            }));
          return;
        }
        return Un(A, k);
      })),
      n)
    ) {
      IA(t, V);
      let P = () => FA(t, V);
      (t.addEventListener("pagehide", P),
        (Y = () => t.removeEventListener("pagehide", P)));
    }
    return (
      C.initialized || Un(Ge.Pop, C.location, { initialHydration: !0 }),
      T
    );
  }
  function Kt() {
    (d && d(),
      Y && Y(),
      m.clear(),
      D && D.abort(),
      C.fetchers.forEach((P, A) => Wa(A)),
      C.blockers.forEach((P, A) => jm(A)));
  }
  function Bn(P) {
    return (m.add(P), () => m.delete(P));
  }
  function $e(P, A) {
    (A === void 0 && (A = {}), (C = _e({}, C, P)));
    let k = [],
      j = [];
    (f.v7_fetcherPersist &&
      C.fetchers.forEach((U, X) => {
        U.state === "idle" && (ye.has(X) ? j.push(X) : k.push(X));
      }),
      ye.forEach((U) => {
        !C.fetchers.has(U) && !M.has(U) && j.push(U);
      }),
      [...m].forEach((U) =>
        U(C, {
          deletedFetchers: j,
          viewTransitionOpts: A.viewTransitionOpts,
          flushSync: A.flushSync === !0,
        }),
      ),
      f.v7_fetcherPersist
        ? (k.forEach((U) => C.fetchers.delete(U)), j.forEach((U) => Wa(U)))
        : j.forEach((U) => ye.delete(U)));
  }
  function bt(P, A, k) {
    var j, U;
    let { flushSync: X } = k === void 0 ? {} : k,
      ne =
        C.actionData != null &&
        C.navigation.formMethod != null &&
        dn(C.navigation.formMethod) &&
        C.navigation.state === "loading" &&
        ((j = P.state) == null ? void 0 : j._isRedirect) !== !0,
      G;
    A.actionData
      ? Object.keys(A.actionData).length > 0
        ? (G = A.actionData)
        : (G = null)
      : ne
        ? (G = C.actionData)
        : (G = null);
    let q = A.loaderData
        ? cy(C.loaderData, A.loaderData, A.matches || [], A.errors)
        : C.loaderData,
      z = C.blockers;
    z.size > 0 && ((z = new Map(z)), z.forEach((de, nt) => z.set(nt, ps)));
    let Q =
      L === !0 ||
      (C.navigation.formMethod != null &&
        dn(C.navigation.formMethod) &&
        ((U = P.state) == null ? void 0 : U._isRedirect) !== !0);
    (a && ((s = a), (a = void 0)),
      W ||
        R === Ge.Pop ||
        (R === Ge.Push
          ? e.history.push(P, P.state)
          : R === Ge.Replace && e.history.replace(P, P.state)));
    let oe;
    if (R === Ge.Pop) {
      let de = V.get(C.location.pathname);
      de && de.has(P.pathname)
        ? (oe = { currentLocation: C.location, nextLocation: P })
        : V.has(P.pathname) &&
          (oe = { currentLocation: P, nextLocation: C.location });
    } else if (B) {
      let de = V.get(C.location.pathname);
      (de
        ? de.add(P.pathname)
        : ((de = new Set([P.pathname])), V.set(C.location.pathname, de)),
        (oe = { currentLocation: C.location, nextLocation: P }));
    }
    ($e(
      _e({}, A, {
        actionData: G,
        loaderData: q,
        historyAction: R,
        location: P,
        initialized: !0,
        navigation: uf,
        revalidation: "idle",
        restoreScrollPosition: Vm(P, A.matches || C.matches),
        preventScrollReset: Q,
        blockers: z,
      }),
      { viewTransitionOpts: oe, flushSync: X === !0 },
    ),
      (R = Ge.Pop),
      (L = !1),
      (B = !1),
      (W = !1),
      (se = !1),
      (J = []));
  }
  async function on(P, A) {
    if (typeof P == "number") {
      e.history.go(P);
      return;
    }
    let k = Ld(
        C.location,
        C.matches,
        l,
        f.v7_prependBasename,
        P,
        f.v7_relativeSplatPath,
        A == null ? void 0 : A.fromRouteId,
        A == null ? void 0 : A.relative,
      ),
      {
        path: j,
        submission: U,
        error: X,
      } = ny(f.v7_normalizeFormMethod, !1, k, A),
      ne = C.location,
      G = sa(C.location, j, A && A.state);
    G = _e({}, G, e.history.encodeLocation(G));
    let q = A && A.replace != null ? A.replace : void 0,
      z = Ge.Push;
    q === !0
      ? (z = Ge.Replace)
      : q === !1 ||
        (U != null &&
          dn(U.formMethod) &&
          U.formAction === C.location.pathname + C.location.search &&
          (z = Ge.Replace));
    let Q =
        A && "preventScrollReset" in A ? A.preventScrollReset === !0 : void 0,
      oe = (A && A.flushSync) === !0,
      de = Im({ currentLocation: ne, nextLocation: G, historyAction: z });
    if (de) {
      Ha(de, {
        state: "blocked",
        location: G,
        proceed() {
          (Ha(de, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: G,
          }),
            on(P, A));
        },
        reset() {
          let nt = new Map(C.blockers);
          (nt.set(de, ps), $e({ blockers: nt }));
        },
      });
      return;
    }
    return await Un(z, G, {
      submission: U,
      pendingError: X,
      preventScrollReset: Q,
      replace: A && A.replace,
      enableViewTransition: A && A.viewTransition,
      flushSync: oe,
    });
  }
  function Tc() {
    if (
      (Mc(),
      $e({ revalidation: "loading" }),
      C.navigation.state !== "submitting")
    ) {
      if (C.navigation.state === "idle") {
        Un(C.historyAction, C.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      Un(R || C.historyAction, C.navigation.location, {
        overrideNavigation: C.navigation,
        enableViewTransition: B === !0,
      });
    }
  }
  async function Un(P, A, k) {
    (D && D.abort(),
      (D = null),
      (R = P),
      (W = (k && k.startUninterruptedRevalidation) === !0),
      dP(C.location, C.matches),
      (L = (k && k.preventScrollReset) === !0),
      (B = (k && k.enableViewTransition) === !0));
    let j = a || s,
      U = k && k.overrideNavigation,
      X =
        k != null &&
        k.initialHydration &&
        C.matches &&
        C.matches.length > 0 &&
        !x
          ? C.matches
          : ao(j, A, l),
      ne = (k && k.flushSync) === !0;
    if (
      X &&
      C.initialized &&
      !se &&
      _A(C.location, A) &&
      !(k && k.submission && dn(k.submission.formMethod))
    ) {
      bt(A, { matches: X }, { flushSync: ne });
      return;
    }
    let G = Ka(X, j, A.pathname);
    if ((G.active && G.matches && (X = G.matches), !X)) {
      let { error: Ce, notFoundMatches: ve, route: Le } = kc(A.pathname);
      bt(
        A,
        { matches: ve, loaderData: {}, errors: { [Le.id]: Ce } },
        { flushSync: ne },
      );
      return;
    }
    D = new AbortController();
    let q = Ho(e.history, A, D.signal, k && k.submission),
      z;
    if (k && k.pendingError)
      z = [lo(X).route.id, { type: we.error, error: k.pendingError }];
    else if (k && k.submission && dn(k.submission.formMethod)) {
      let Ce = await Ac(q, A, k.submission, X, G.active, {
        replace: k.replace,
        flushSync: ne,
      });
      if (Ce.shortCircuited) return;
      if (Ce.pendingActionResult) {
        let [ve, Le] = Ce.pendingActionResult;
        if (Lt(Le) && aa(Le.error) && Le.error.status === 404) {
          ((D = null),
            bt(A, {
              matches: Ce.matches,
              loaderData: {},
              errors: { [ve]: Le.error },
            }));
          return;
        }
      }
      ((X = Ce.matches || X),
        (z = Ce.pendingActionResult),
        (U = cf(A, k.submission)),
        (ne = !1),
        (G.active = !1),
        (q = Ho(e.history, q.url, q.signal)));
    }
    let {
      shortCircuited: Q,
      matches: oe,
      loaderData: de,
      errors: nt,
    } = await _c(
      q,
      A,
      X,
      G.active,
      U,
      k && k.submission,
      k && k.fetcherSubmission,
      k && k.replace,
      k && k.initialHydration === !0,
      ne,
      z,
    );
    Q ||
      ((D = null),
      bt(A, _e({ matches: oe || X }, fy(z), { loaderData: de, errors: nt })));
  }
  async function Ac(P, A, k, j, U, X) {
    (X === void 0 && (X = {}), Mc());
    let ne = LA(A, k);
    if (($e({ navigation: ne }, { flushSync: X.flushSync === !0 }), U)) {
      let z = await Ga(j, A.pathname, P.signal);
      if (z.type === "aborted") return { shortCircuited: !0 };
      if (z.type === "error") {
        let Q = lo(z.partialMatches).route.id;
        return {
          matches: z.partialMatches,
          pendingActionResult: [Q, { type: we.error, error: z.error }],
        };
      } else if (z.matches) j = z.matches;
      else {
        let { notFoundMatches: Q, error: oe, route: de } = kc(A.pathname);
        return {
          matches: Q,
          pendingActionResult: [de.id, { type: we.error, error: oe }],
        };
      }
    }
    let G,
      q = Ps(j, A);
    if (!q.route.action && !q.route.lazy)
      G = {
        type: we.error,
        error: Pt(405, {
          method: P.method,
          pathname: A.pathname,
          routeId: q.route.id,
        }),
      };
    else if (
      ((G = (await ns("action", C, P, [q], j, null))[q.route.id]),
      P.signal.aborted)
    )
      return { shortCircuited: !0 };
    if (ho(G)) {
      let z;
      return (
        X && X.replace != null
          ? (z = X.replace)
          : (z =
              ay(
                G.response.headers.get("Location"),
                new URL(P.url),
                l,
                e.history,
              ) ===
              C.location.pathname + C.location.search),
        await Jr(P, G, !0, { submission: k, replace: z }),
        { shortCircuited: !0 }
      );
    }
    if (kr(G)) throw Pt(400, { type: "defer-action" });
    if (Lt(G)) {
      let z = lo(j, q.route.id);
      return (
        (X && X.replace) !== !0 && (R = Ge.Push),
        { matches: j, pendingActionResult: [z.route.id, G] }
      );
    }
    return { matches: j, pendingActionResult: [q.route.id, G] };
  }
  async function _c(P, A, k, j, U, X, ne, G, q, z, Q) {
    let oe = U || cf(A, X),
      de = X || ne || py(oe),
      nt = !W && (!f.v7_partialHydration || !q);
    if (j) {
      if (nt) {
        let je = Zr(Q);
        $e(_e({ navigation: oe }, je !== void 0 ? { actionData: je } : {}), {
          flushSync: z,
        });
      }
      let ge = await Ga(k, A.pathname, P.signal);
      if (ge.type === "aborted") return { shortCircuited: !0 };
      if (ge.type === "error") {
        let je = lo(ge.partialMatches).route.id;
        return {
          matches: ge.partialMatches,
          loaderData: {},
          errors: { [je]: ge.error },
        };
      } else if (ge.matches) k = ge.matches;
      else {
        let { error: je, notFoundMatches: $o, route: is } = kc(A.pathname);
        return { matches: $o, loaderData: {}, errors: { [is.id]: je } };
      }
    }
    let Ce = a || s,
      [ve, Le] = oy(
        e.history,
        C,
        k,
        de,
        A,
        f.v7_partialHydration && q === !0,
        f.v7_skipActionErrorRevalidation,
        se,
        J,
        Z,
        ye,
        fe,
        re,
        Ce,
        l,
        Q,
      );
    if (
      (Dc(
        (ge) =>
          !(k && k.some((je) => je.route.id === ge)) ||
          (ve && ve.some((je) => je.route.id === ge)),
      ),
      (F = ++N),
      ve.length === 0 && Le.length === 0)
    ) {
      let ge = Nm();
      return (
        bt(
          A,
          _e(
            {
              matches: k,
              loaderData: {},
              errors: Q && Lt(Q[1]) ? { [Q[0]]: Q[1].error } : null,
            },
            fy(Q),
            ge ? { fetchers: new Map(C.fetchers) } : {},
          ),
          { flushSync: z },
        ),
        { shortCircuited: !0 }
      );
    }
    if (nt) {
      let ge = {};
      if (!j) {
        ge.navigation = oe;
        let je = Zr(Q);
        je !== void 0 && (ge.actionData = je);
      }
      (Le.length > 0 && (ge.fetchers = iP(Le)), $e(ge, { flushSync: z }));
    }
    Le.forEach((ge) => {
      (fr(ge.key), ge.controller && M.set(ge.key, ge.controller));
    });
    let Uo = () => Le.forEach((ge) => fr(ge.key));
    D && D.signal.addEventListener("abort", Uo);
    let { loaderResults: rs, fetcherResults: zn } = await km(C, k, ve, Le, P);
    if (P.signal.aborted) return { shortCircuited: !0 };
    (D && D.signal.removeEventListener("abort", Uo),
      Le.forEach((ge) => M.delete(ge.key)));
    let En = pl(rs);
    if (En)
      return (
        await Jr(P, En.result, !0, { replace: G }),
        { shortCircuited: !0 }
      );
    if (((En = pl(zn)), En))
      return (
        re.add(En.key),
        await Jr(P, En.result, !0, { replace: G }),
        { shortCircuited: !0 }
      );
    let { loaderData: Oc, errors: os } = uy(C, k, rs, Q, Le, zn, Ee);
    (Ee.forEach((ge, je) => {
      ge.subscribe(($o) => {
        ($o || ge.done) && Ee.delete(je);
      });
    }),
      f.v7_partialHydration && q && C.errors && (os = _e({}, C.errors, os)));
    let eo = Nm(),
      qa = Lm(F),
      Qa = eo || qa || Le.length > 0;
    return _e(
      { matches: k, loaderData: Oc, errors: os },
      Qa ? { fetchers: new Map(C.fetchers) } : {},
    );
  }
  function Zr(P) {
    if (P && !Lt(P[1])) return { [P[0]]: P[1].data };
    if (C.actionData)
      return Object.keys(C.actionData).length === 0 ? null : C.actionData;
  }
  function iP(P) {
    return (
      P.forEach((A) => {
        let k = C.fetchers.get(A.key),
          j = ms(void 0, k ? k.data : void 0);
        C.fetchers.set(A.key, j);
      }),
      new Map(C.fetchers)
    );
  }
  function sP(P, A, k, j) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
      );
    fr(P);
    let U = (j && j.flushSync) === !0,
      X = a || s,
      ne = Ld(
        C.location,
        C.matches,
        l,
        f.v7_prependBasename,
        k,
        f.v7_relativeSplatPath,
        A,
        j == null ? void 0 : j.relative,
      ),
      G = ao(X, ne, l),
      q = Ka(G, X, ne);
    if ((q.active && q.matches && (G = q.matches), !G)) {
      $n(P, A, Pt(404, { pathname: ne }), { flushSync: U });
      return;
    }
    let {
      path: z,
      submission: Q,
      error: oe,
    } = ny(f.v7_normalizeFormMethod, !0, ne, j);
    if (oe) {
      $n(P, A, oe, { flushSync: U });
      return;
    }
    let de = Ps(G, z),
      nt = (j && j.preventScrollReset) === !0;
    if (Q && dn(Q.formMethod)) {
      aP(P, A, z, de, G, q.active, U, nt, Q);
      return;
    }
    (fe.set(P, { routeId: A, path: z }),
      lP(P, A, z, de, G, q.active, U, nt, Q));
  }
  async function aP(P, A, k, j, U, X, ne, G, q) {
    (Mc(), fe.delete(P));
    function z(Ke) {
      if (!Ke.route.action && !Ke.route.lazy) {
        let zo = Pt(405, { method: q.formMethod, pathname: k, routeId: A });
        return ($n(P, A, zo, { flushSync: ne }), !0);
      }
      return !1;
    }
    if (!X && z(j)) return;
    let Q = C.fetchers.get(P);
    cr(P, jA(q, Q), { flushSync: ne });
    let oe = new AbortController(),
      de = Ho(e.history, k, oe.signal, q);
    if (X) {
      let Ke = await Ga(U, new URL(de.url).pathname, de.signal, P);
      if (Ke.type === "aborted") return;
      if (Ke.type === "error") {
        $n(P, A, Ke.error, { flushSync: ne });
        return;
      } else if (Ke.matches) {
        if (((U = Ke.matches), (j = Ps(U, k)), z(j))) return;
      } else {
        $n(P, A, Pt(404, { pathname: k }), { flushSync: ne });
        return;
      }
    }
    M.set(P, oe);
    let nt = N,
      ve = (await ns("action", C, de, [j], U, P))[j.route.id];
    if (de.signal.aborted) {
      M.get(P) === oe && M.delete(P);
      return;
    }
    if (f.v7_fetcherPersist && ye.has(P)) {
      if (ho(ve) || Lt(ve)) {
        cr(P, mr(void 0));
        return;
      }
    } else {
      if (ho(ve))
        if ((M.delete(P), F > nt)) {
          cr(P, mr(void 0));
          return;
        } else
          return (
            re.add(P),
            cr(P, ms(q)),
            Jr(de, ve, !1, { fetcherSubmission: q, preventScrollReset: G })
          );
      if (Lt(ve)) {
        $n(P, A, ve.error);
        return;
      }
    }
    if (kr(ve)) throw Pt(400, { type: "defer-action" });
    let Le = C.navigation.location || C.location,
      Uo = Ho(e.history, Le, oe.signal),
      rs = a || s,
      zn =
        C.navigation.state !== "idle"
          ? ao(rs, C.navigation.location, l)
          : C.matches;
    le(zn, "Didn't find any matches after fetcher action");
    let En = ++N;
    K.set(P, En);
    let Oc = ms(q, ve.data);
    C.fetchers.set(P, Oc);
    let [os, eo] = oy(
      e.history,
      C,
      zn,
      q,
      Le,
      !1,
      f.v7_skipActionErrorRevalidation,
      se,
      J,
      Z,
      ye,
      fe,
      re,
      rs,
      l,
      [j.route.id, ve],
    );
    (eo
      .filter((Ke) => Ke.key !== P)
      .forEach((Ke) => {
        let zo = Ke.key,
          Bm = C.fetchers.get(zo),
          mP = ms(void 0, Bm ? Bm.data : void 0);
        (C.fetchers.set(zo, mP),
          fr(zo),
          Ke.controller && M.set(zo, Ke.controller));
      }),
      $e({ fetchers: new Map(C.fetchers) }));
    let qa = () => eo.forEach((Ke) => fr(Ke.key));
    oe.signal.addEventListener("abort", qa);
    let { loaderResults: Qa, fetcherResults: ge } = await km(C, zn, os, eo, Uo);
    if (oe.signal.aborted) return;
    (oe.signal.removeEventListener("abort", qa),
      K.delete(P),
      M.delete(P),
      eo.forEach((Ke) => M.delete(Ke.key)));
    let je = pl(Qa);
    if (je) return Jr(Uo, je.result, !1, { preventScrollReset: G });
    if (((je = pl(ge)), je))
      return (re.add(je.key), Jr(Uo, je.result, !1, { preventScrollReset: G }));
    let { loaderData: $o, errors: is } = uy(C, zn, Qa, void 0, eo, ge, Ee);
    if (C.fetchers.has(P)) {
      let Ke = mr(ve.data);
      C.fetchers.set(P, Ke);
    }
    (Lm(En),
      C.navigation.state === "loading" && En > F
        ? (le(R, "Expected pending action"),
          D && D.abort(),
          bt(C.navigation.location, {
            matches: zn,
            loaderData: $o,
            errors: is,
            fetchers: new Map(C.fetchers),
          }))
        : ($e({
            errors: is,
            loaderData: cy(C.loaderData, $o, zn, is),
            fetchers: new Map(C.fetchers),
          }),
          (se = !1)));
  }
  async function lP(P, A, k, j, U, X, ne, G, q) {
    let z = C.fetchers.get(P);
    cr(P, ms(q, z ? z.data : void 0), { flushSync: ne });
    let Q = new AbortController(),
      oe = Ho(e.history, k, Q.signal);
    if (X) {
      let ve = await Ga(U, new URL(oe.url).pathname, oe.signal, P);
      if (ve.type === "aborted") return;
      if (ve.type === "error") {
        $n(P, A, ve.error, { flushSync: ne });
        return;
      } else if (ve.matches) ((U = ve.matches), (j = Ps(U, k)));
      else {
        $n(P, A, Pt(404, { pathname: k }), { flushSync: ne });
        return;
      }
    }
    M.set(P, Q);
    let de = N,
      Ce = (await ns("loader", C, oe, [j], U, P))[j.route.id];
    if (
      (kr(Ce) && (Ce = (await yp(Ce, oe.signal, !0)) || Ce),
      M.get(P) === Q && M.delete(P),
      !oe.signal.aborted)
    ) {
      if (ye.has(P)) {
        cr(P, mr(void 0));
        return;
      }
      if (ho(Ce))
        if (F > de) {
          cr(P, mr(void 0));
          return;
        } else {
          (re.add(P), await Jr(oe, Ce, !1, { preventScrollReset: G }));
          return;
        }
      if (Lt(Ce)) {
        $n(P, A, Ce.error);
        return;
      }
      (le(!kr(Ce), "Unhandled fetcher deferred data"), cr(P, mr(Ce.data)));
    }
  }
  async function Jr(P, A, k, j) {
    let {
      submission: U,
      fetcherSubmission: X,
      preventScrollReset: ne,
      replace: G,
    } = j === void 0 ? {} : j;
    A.response.headers.has("X-Remix-Revalidate") && (se = !0);
    let q = A.response.headers.get("Location");
    (le(q, "Expected a Location header on the redirect Response"),
      (q = ay(q, new URL(P.url), l, e.history)));
    let z = sa(C.location, q, { _isRedirect: !0 });
    if (n) {
      let ve = !1;
      if (A.response.headers.has("X-Remix-Reload-Document")) ve = !0;
      else if (gp.test(q)) {
        const Le = e.history.createURL(q);
        ve = Le.origin !== t.location.origin || qi(Le.pathname, l) == null;
      }
      if (ve) {
        G ? t.location.replace(q) : t.location.assign(q);
        return;
      }
    }
    D = null;
    let Q =
        G === !0 || A.response.headers.has("X-Remix-Replace")
          ? Ge.Replace
          : Ge.Push,
      { formMethod: oe, formAction: de, formEncType: nt } = C.navigation;
    !U && !X && oe && de && nt && (U = py(C.navigation));
    let Ce = U || X;
    if (gA.has(A.response.status) && Ce && dn(Ce.formMethod))
      await Un(Q, z, {
        submission: _e({}, Ce, { formAction: q }),
        preventScrollReset: ne || L,
        enableViewTransition: k ? B : void 0,
      });
    else {
      let ve = cf(z, U);
      await Un(Q, z, {
        overrideNavigation: ve,
        fetcherSubmission: X,
        preventScrollReset: ne || L,
        enableViewTransition: k ? B : void 0,
      });
    }
  }
  async function ns(P, A, k, j, U, X) {
    let ne,
      G = {};
    try {
      ne = await bA(u, P, A, k, j, U, X, i, o);
    } catch (q) {
      return (
        j.forEach((z) => {
          G[z.route.id] = { type: we.error, error: q };
        }),
        G
      );
    }
    for (let [q, z] of Object.entries(ne))
      if (MA(z)) {
        let Q = z.result;
        G[q] = {
          type: we.redirect,
          response: TA(Q, k, q, U, l, f.v7_relativeSplatPath),
        };
      } else G[q] = await RA(z);
    return G;
  }
  async function km(P, A, k, j, U) {
    let X = P.matches,
      ne = ns("loader", P, U, k, A, null),
      G = Promise.all(
        j.map(async (Q) => {
          if (Q.matches && Q.match && Q.controller) {
            let de = (
              await ns(
                "loader",
                P,
                Ho(e.history, Q.path, Q.controller.signal),
                [Q.match],
                Q.matches,
                Q.key,
              )
            )[Q.match.route.id];
            return { [Q.key]: de };
          } else
            return Promise.resolve({
              [Q.key]: { type: we.error, error: Pt(404, { pathname: Q.path }) },
            });
        }),
      ),
      q = await ne,
      z = (await G).reduce((Q, oe) => Object.assign(Q, oe), {});
    return (
      await Promise.all([OA(A, q, U.signal, X, P.loaderData), NA(A, z, j)]),
      { loaderResults: q, fetcherResults: z }
    );
  }
  function Mc() {
    ((se = !0),
      J.push(...Dc()),
      fe.forEach((P, A) => {
        (M.has(A) && Z.add(A), fr(A));
      }));
  }
  function cr(P, A, k) {
    (k === void 0 && (k = {}),
      C.fetchers.set(P, A),
      $e(
        { fetchers: new Map(C.fetchers) },
        { flushSync: (k && k.flushSync) === !0 },
      ));
  }
  function $n(P, A, k, j) {
    j === void 0 && (j = {});
    let U = lo(C.matches, A);
    (Wa(P),
      $e(
        { errors: { [U.route.id]: k }, fetchers: new Map(C.fetchers) },
        { flushSync: (j && j.flushSync) === !0 },
      ));
  }
  function Dm(P) {
    return (
      Se.set(P, (Se.get(P) || 0) + 1),
      ye.has(P) && ye.delete(P),
      C.fetchers.get(P) || yA
    );
  }
  function Wa(P) {
    let A = C.fetchers.get(P);
    (M.has(P) && !(A && A.state === "loading" && K.has(P)) && fr(P),
      fe.delete(P),
      K.delete(P),
      re.delete(P),
      f.v7_fetcherPersist && ye.delete(P),
      Z.delete(P),
      C.fetchers.delete(P));
  }
  function uP(P) {
    let A = (Se.get(P) || 0) - 1;
    (A <= 0
      ? (Se.delete(P), ye.add(P), f.v7_fetcherPersist || Wa(P))
      : Se.set(P, A),
      $e({ fetchers: new Map(C.fetchers) }));
  }
  function fr(P) {
    let A = M.get(P);
    A && (A.abort(), M.delete(P));
  }
  function Om(P) {
    for (let A of P) {
      let k = Dm(A),
        j = mr(k.data);
      C.fetchers.set(A, j);
    }
  }
  function Nm() {
    let P = [],
      A = !1;
    for (let k of re) {
      let j = C.fetchers.get(k);
      (le(j, "Expected fetcher: " + k),
        j.state === "loading" && (re.delete(k), P.push(k), (A = !0)));
    }
    return (Om(P), A);
  }
  function Lm(P) {
    let A = [];
    for (let [k, j] of K)
      if (j < P) {
        let U = C.fetchers.get(k);
        (le(U, "Expected fetcher: " + k),
          U.state === "loading" && (fr(k), K.delete(k), A.push(k)));
      }
    return (Om(A), A.length > 0);
  }
  function cP(P, A) {
    let k = C.blockers.get(P) || ps;
    return (me.get(P) !== A && me.set(P, A), k);
  }
  function jm(P) {
    (C.blockers.delete(P), me.delete(P));
  }
  function Ha(P, A) {
    let k = C.blockers.get(P) || ps;
    le(
      (k.state === "unblocked" && A.state === "blocked") ||
        (k.state === "blocked" && A.state === "blocked") ||
        (k.state === "blocked" && A.state === "proceeding") ||
        (k.state === "blocked" && A.state === "unblocked") ||
        (k.state === "proceeding" && A.state === "unblocked"),
      "Invalid blocker state transition: " + k.state + " -> " + A.state,
    );
    let j = new Map(C.blockers);
    (j.set(P, A), $e({ blockers: j }));
  }
  function Im(P) {
    let { currentLocation: A, nextLocation: k, historyAction: j } = P;
    if (me.size === 0) return;
    me.size > 1 && ko(!1, "A router only supports one blocker at a time");
    let U = Array.from(me.entries()),
      [X, ne] = U[U.length - 1],
      G = C.blockers.get(X);
    if (
      !(G && G.state === "proceeding") &&
      ne({ currentLocation: A, nextLocation: k, historyAction: j })
    )
      return X;
  }
  function kc(P) {
    let A = Pt(404, { pathname: P }),
      k = a || s,
      { matches: j, route: U } = dy(k);
    return (Dc(), { notFoundMatches: j, route: U, error: A });
  }
  function Dc(P) {
    let A = [];
    return (
      Ee.forEach((k, j) => {
        (!P || P(j)) && (k.cancel(), A.push(j), Ee.delete(j));
      }),
      A
    );
  }
  function fP(P, A, k) {
    if (((v = P), (w = A), (p = k || null), !g && C.navigation === uf)) {
      g = !0;
      let j = Vm(C.location, C.matches);
      j != null && $e({ restoreScrollPosition: j });
    }
    return () => {
      ((v = null), (w = null), (p = null));
    };
  }
  function Fm(P, A) {
    return (
      (p &&
        p(
          P,
          A.map((j) => GT(j, C.loaderData)),
        )) ||
      P.key
    );
  }
  function dP(P, A) {
    if (v && w) {
      let k = Fm(P, A);
      v[k] = w();
    }
  }
  function Vm(P, A) {
    if (v) {
      let k = Fm(P, A),
        j = v[k];
      if (typeof j == "number") return j;
    }
    return null;
  }
  function Ka(P, A, k) {
    if (c)
      if (P) {
        if (Object.keys(P[0].params).length > 0)
          return { active: !0, matches: Vl(A, k, l, !0) };
      } else return { active: !0, matches: Vl(A, k, l, !0) || [] };
    return { active: !1, matches: null };
  }
  async function Ga(P, A, k, j) {
    if (!c) return { type: "success", matches: P };
    let U = P;
    for (;;) {
      let X = a == null,
        ne = a || s,
        G = i;
      try {
        await c({
          signal: k,
          path: A,
          matches: U,
          fetcherKey: j,
          patch: (Q, oe) => {
            k.aborted || sy(Q, oe, ne, G, o);
          },
        });
      } catch (Q) {
        return { type: "error", error: Q, partialMatches: U };
      } finally {
        X && !k.aborted && (s = [...s]);
      }
      if (k.aborted) return { type: "aborted" };
      let q = ao(ne, A, l);
      if (q) return { type: "success", matches: q };
      let z = Vl(ne, A, l, !0);
      if (
        !z ||
        (U.length === z.length &&
          U.every((Q, oe) => Q.route.id === z[oe].route.id))
      )
        return { type: "success", matches: null };
      U = z;
    }
  }
  function hP(P) {
    ((i = {}), (a = wu(P, o, void 0, i)));
  }
  function pP(P, A) {
    let k = a == null;
    (sy(P, A, a || s, i, o), k && ((s = [...s]), $e({})));
  }
  return (
    (T = {
      get basename() {
        return l;
      },
      get future() {
        return f;
      },
      get state() {
        return C;
      },
      get routes() {
        return s;
      },
      get window() {
        return t;
      },
      initialize: Ue,
      subscribe: Bn,
      enableScrollRestoration: fP,
      navigate: on,
      fetch: sP,
      revalidate: Tc,
      createHref: (P) => e.history.createHref(P),
      encodeLocation: (P) => e.history.encodeLocation(P),
      getFetcher: Dm,
      deleteFetcher: uP,
      dispose: Kt,
      getBlocker: cP,
      deleteBlocker: jm,
      patchRoutes: pP,
      _internalFetchControllers: M,
      _internalActiveDeferreds: Ee,
      _internalSetRoutes: hP,
    }),
    T
  );
}
function xA(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function Ld(e, t, n, r, o, i, s, a) {
  let l, u;
  if (s) {
    l = [];
    for (let f of t)
      if ((l.push(f), f.route.id === s)) {
        u = f;
        break;
      }
  } else ((l = t), (u = t[t.length - 1]));
  let c = rc(o || ".", nc(l, i), qi(e.pathname, n) || e.pathname, a === "path");
  if (
    (o == null && ((c.search = e.search), (c.hash = e.hash)),
    (o == null || o === "" || o === ".") && u)
  ) {
    let f = vp(c.search);
    if (u.route.index && !f)
      c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index";
    else if (!u.route.index && f) {
      let d = new URLSearchParams(c.search),
        m = d.getAll("index");
      (d.delete("index"),
        m.filter((p) => p).forEach((p) => d.append("index", p)));
      let v = d.toString();
      c.search = v ? "?" + v : "";
    }
  }
  return (
    r &&
      n !== "/" &&
      (c.pathname = c.pathname === "/" ? n : Zn([n, c.pathname])),
    Do(c)
  );
}
function ny(e, t, n, r) {
  if (!r || !xA(r)) return { path: n };
  if (r.formMethod && !DA(r.formMethod))
    return { path: n, error: Pt(405, { method: r.formMethod }) };
  let o = () => ({ path: n, error: Pt(400, { type: "invalid-body" }) }),
    i = r.formMethod || "get",
    s = e ? i.toUpperCase() : i.toLowerCase(),
    a = yS(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!dn(s)) return o();
      let d =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
            ? Array.from(r.body.entries()).reduce((m, v) => {
                let [p, w] = v;
                return (
                  "" +
                  m +
                  p +
                  "=" +
                  w +
                  `
`
                );
              }, "")
            : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: s,
          formAction: a,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: d,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!dn(s)) return o();
      try {
        let d = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: s,
            formAction: a,
            formEncType: r.formEncType,
            formData: void 0,
            json: d,
            text: void 0,
          },
        };
      } catch {
        return o();
      }
    }
  }
  le(
    typeof FormData == "function",
    "FormData is not available in this environment",
  );
  let l, u;
  if (r.formData) ((l = Id(r.formData)), (u = r.formData));
  else if (r.body instanceof FormData) ((l = Id(r.body)), (u = r.body));
  else if (r.body instanceof URLSearchParams) ((l = r.body), (u = ly(l)));
  else if (r.body == null) ((l = new URLSearchParams()), (u = new FormData()));
  else
    try {
      ((l = new URLSearchParams(r.body)), (u = ly(l)));
    } catch {
      return o();
    }
  let c = {
    formMethod: s,
    formAction: a,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: u,
    json: void 0,
    text: void 0,
  };
  if (dn(c.formMethod)) return { path: n, submission: c };
  let f = Qr(n);
  return (
    t && f.search && vp(f.search) && l.append("index", ""),
    (f.search = "?" + l),
    { path: Do(f), submission: c }
  );
}
function ry(e, t, n) {
  n === void 0 && (n = !1);
  let r = e.findIndex((o) => o.route.id === t);
  return r >= 0 ? e.slice(0, n ? r + 1 : r) : e;
}
function oy(e, t, n, r, o, i, s, a, l, u, c, f, d, m, v, p) {
  let w = p ? (Lt(p[1]) ? p[1].error : p[1].data) : void 0,
    g = e.createURL(t.location),
    y = e.createURL(o),
    x = n;
  i && t.errors
    ? (x = ry(n, Object.keys(t.errors)[0], !0))
    : p && Lt(p[1]) && (x = ry(n, p[0]));
  let S = p ? p[1].statusCode : void 0,
    b = s && S && S >= 400,
    T = x.filter((R, L) => {
      let { route: D } = R;
      if (D.lazy) return !0;
      if (D.loader == null) return !1;
      if (i) return jd(D, t.loaderData, t.errors);
      if (SA(t.loaderData, t.matches[L], R) || l.some((Y) => Y === R.route.id))
        return !0;
      let B = t.matches[L],
        V = R;
      return iy(
        R,
        _e(
          {
            currentUrl: g,
            currentParams: B.params,
            nextUrl: y,
            nextParams: V.params,
          },
          r,
          {
            actionResult: w,
            actionStatus: S,
            defaultShouldRevalidate: b
              ? !1
              : a ||
                g.pathname + g.search === y.pathname + y.search ||
                g.search !== y.search ||
                mS(B, V),
          },
        ),
      );
    }),
    C = [];
  return (
    f.forEach((R, L) => {
      if (i || !n.some((W) => W.route.id === R.routeId) || c.has(L)) return;
      let D = ao(m, R.path, v);
      if (!D) {
        C.push({
          key: L,
          routeId: R.routeId,
          path: R.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let B = t.fetchers.get(L),
        V = Ps(D, R.path),
        Y = !1;
      (d.has(L)
        ? (Y = !1)
        : u.has(L)
          ? (u.delete(L), (Y = !0))
          : B && B.state !== "idle" && B.data === void 0
            ? (Y = a)
            : (Y = iy(
                V,
                _e(
                  {
                    currentUrl: g,
                    currentParams: t.matches[t.matches.length - 1].params,
                    nextUrl: y,
                    nextParams: n[n.length - 1].params,
                  },
                  r,
                  {
                    actionResult: w,
                    actionStatus: S,
                    defaultShouldRevalidate: b ? !1 : a,
                  },
                ),
              )),
        Y &&
          C.push({
            key: L,
            routeId: R.routeId,
            path: R.path,
            matches: D,
            match: V,
            controller: new AbortController(),
          }));
    }),
    [T, C]
  );
}
function jd(e, t, n) {
  if (e.lazy) return !0;
  if (!e.loader) return !1;
  let r = t != null && t[e.id] !== void 0,
    o = n != null && n[e.id] !== void 0;
  return !r && o
    ? !1
    : typeof e.loader == "function" && e.loader.hydrate === !0
      ? !0
      : !r && !o;
}
function SA(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    o = e[n.route.id] === void 0;
  return r || o;
}
function mS(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function iy(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
function sy(e, t, n, r, o) {
  var i;
  let s;
  if (e) {
    let u = r[e];
    (le(u, "No route found to patch children into: routeId = " + e),
      u.children || (u.children = []),
      (s = u.children));
  } else s = n;
  let a = t.filter((u) => !s.some((c) => gS(u, c))),
    l = wu(
      a,
      o,
      [e || "_", "patch", String(((i = s) == null ? void 0 : i.length) || "0")],
      r,
    );
  s.push(...l);
}
function gS(e, t) {
  return "id" in e && "id" in t && e.id === t.id
    ? !0
    : e.index === t.index &&
        e.path === t.path &&
        e.caseSensitive === t.caseSensitive
      ? (!e.children || e.children.length === 0) &&
        (!t.children || t.children.length === 0)
        ? !0
        : e.children.every((n, r) => {
            var o;
            return (o = t.children) == null ? void 0 : o.some((i) => gS(n, i));
          })
      : !1;
}
async function EA(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let o = n[e.id];
  le(o, "No route found in manifest");
  let i = {};
  for (let s in r) {
    let l = o[s] !== void 0 && s !== "hasErrorBoundary";
    (ko(
      !l,
      'Route "' +
        o.id +
        '" has a static property "' +
        s +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + s + '" will be ignored.'),
    ),
      !l && !HT.has(s) && (i[s] = r[s]));
  }
  (Object.assign(o, i), Object.assign(o, _e({}, t(o), { lazy: void 0 })));
}
async function CA(e) {
  let { matches: t } = e,
    n = t.filter((o) => o.shouldLoad);
  return (await Promise.all(n.map((o) => o.resolve()))).reduce(
    (o, i, s) => Object.assign(o, { [n[s].route.id]: i }),
    {},
  );
}
async function bA(e, t, n, r, o, i, s, a, l, u) {
  let c = i.map((m) => (m.route.lazy ? EA(m.route, l, a) : void 0)),
    f = i.map((m, v) => {
      let p = c[v],
        w = o.some((y) => y.route.id === m.route.id);
      return _e({}, m, {
        shouldLoad: w,
        resolve: async (y) => (
          y &&
            r.method === "GET" &&
            (m.route.lazy || m.route.loader) &&
            (w = !0),
          w
            ? PA(t, r, m, p, y, u)
            : Promise.resolve({ type: we.data, result: void 0 })
        ),
      });
    }),
    d = await e({
      matches: f,
      request: r,
      params: i[0].params,
      fetcherKey: s,
      context: u,
    });
  try {
    await Promise.all(c);
  } catch {}
  return d;
}
async function PA(e, t, n, r, o, i) {
  let s,
    a,
    l = (u) => {
      let c,
        f = new Promise((v, p) => (c = p));
      ((a = () => c()), t.signal.addEventListener("abort", a));
      let d = (v) =>
          typeof u != "function"
            ? Promise.reject(
                new Error(
                  "You cannot call the handler for a route which defines a boolean " +
                    ('"' + e + '" [routeId: ' + n.route.id + "]"),
                ),
              )
            : u(
                { request: t, params: n.params, context: i },
                ...(v !== void 0 ? [v] : []),
              ),
        m = (async () => {
          try {
            return { type: "data", result: await (o ? o((p) => d(p)) : d()) };
          } catch (v) {
            return { type: "error", result: v };
          }
        })();
      return Promise.race([m, f]);
    };
  try {
    let u = n.route[e];
    if (r)
      if (u) {
        let c,
          [f] = await Promise.all([
            l(u).catch((d) => {
              c = d;
            }),
            r,
          ]);
        if (c !== void 0) throw c;
        s = f;
      } else if ((await r, (u = n.route[e]), u)) s = await l(u);
      else if (e === "action") {
        let c = new URL(t.url),
          f = c.pathname + c.search;
        throw Pt(405, { method: t.method, pathname: f, routeId: n.route.id });
      } else return { type: we.data, result: void 0 };
    else if (u) s = await l(u);
    else {
      let c = new URL(t.url),
        f = c.pathname + c.search;
      throw Pt(404, { pathname: f });
    }
    le(
      s.result !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`.",
    );
  } catch (u) {
    return { type: we.error, result: u };
  } finally {
    a && t.signal.removeEventListener("abort", a);
  }
  return s;
}
async function RA(e) {
  let { result: t, type: n } = e;
  if (vS(t)) {
    let f;
    try {
      let d = t.headers.get("Content-Type");
      d && /\bapplication\/json\b/.test(d)
        ? t.body == null
          ? (f = null)
          : (f = await t.json())
        : (f = await t.text());
    } catch (d) {
      return { type: we.error, error: d };
    }
    return n === we.error
      ? {
          type: we.error,
          error: new xu(t.status, t.statusText, f),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: we.data, data: f, statusCode: t.status, headers: t.headers };
  }
  if (n === we.error) {
    if (hy(t)) {
      var r, o;
      if (t.data instanceof Error) {
        var i, s;
        return {
          type: we.error,
          error: t.data,
          statusCode: (i = t.init) == null ? void 0 : i.status,
          headers:
            (s = t.init) != null && s.headers
              ? new Headers(t.init.headers)
              : void 0,
        };
      }
      return {
        type: we.error,
        error: new xu(
          ((r = t.init) == null ? void 0 : r.status) || 500,
          void 0,
          t.data,
        ),
        statusCode: aa(t) ? t.status : void 0,
        headers:
          (o = t.init) != null && o.headers
            ? new Headers(t.init.headers)
            : void 0,
      };
    }
    return { type: we.error, error: t, statusCode: aa(t) ? t.status : void 0 };
  }
  if (kA(t)) {
    var a, l;
    return {
      type: we.deferred,
      deferredData: t,
      statusCode: (a = t.init) == null ? void 0 : a.status,
      headers:
        ((l = t.init) == null ? void 0 : l.headers) &&
        new Headers(t.init.headers),
    };
  }
  if (hy(t)) {
    var u, c;
    return {
      type: we.data,
      data: t.data,
      statusCode: (u = t.init) == null ? void 0 : u.status,
      headers:
        (c = t.init) != null && c.headers
          ? new Headers(t.init.headers)
          : void 0,
    };
  }
  return { type: we.data, data: t };
}
function TA(e, t, n, r, o, i) {
  let s = e.headers.get("Location");
  if (
    (le(
      s,
      "Redirects returned/thrown from loaders/actions must have a Location header",
    ),
    !gp.test(s))
  ) {
    let a = r.slice(0, r.findIndex((l) => l.route.id === n) + 1);
    ((s = Ld(new URL(t.url), a, o, !0, s, i)), e.headers.set("Location", s));
  }
  return e;
}
function ay(e, t, n, r) {
  let o = [
    "about:",
    "blob:",
    "chrome:",
    "chrome-untrusted:",
    "content:",
    "data:",
    "devtools:",
    "file:",
    "filesystem:",
    "javascript:",
  ];
  if (gp.test(e)) {
    let i = e,
      s = i.startsWith("//") ? new URL(t.protocol + i) : new URL(i);
    if (o.includes(s.protocol)) throw new Error("Invalid redirect location");
    let a = qi(s.pathname, n) != null;
    if (s.origin === t.origin && a) return s.pathname + s.search + s.hash;
  }
  try {
    let i = r.createURL(e);
    if (o.includes(i.protocol)) throw new Error("Invalid redirect location");
  } catch {}
  return e;
}
function Ho(e, t, n, r) {
  let o = e.createURL(yS(t)).toString(),
    i = { signal: n };
  if (r && dn(r.formMethod)) {
    let { formMethod: s, formEncType: a } = r;
    ((i.method = s.toUpperCase()),
      a === "application/json"
        ? ((i.headers = new Headers({ "Content-Type": a })),
          (i.body = JSON.stringify(r.json)))
        : a === "text/plain"
          ? (i.body = r.text)
          : a === "application/x-www-form-urlencoded" && r.formData
            ? (i.body = Id(r.formData))
            : (i.body = r.formData));
  }
  return new Request(o, i);
}
function Id(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function ly(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function AA(e, t, n, r, o) {
  let i = {},
    s = null,
    a,
    l = !1,
    u = {},
    c = n && Lt(n[1]) ? n[1].error : void 0;
  return (
    e.forEach((f) => {
      if (!(f.route.id in t)) return;
      let d = f.route.id,
        m = t[d];
      if (
        (le(!ho(m), "Cannot handle redirect results in processLoaderData"),
        Lt(m))
      ) {
        let v = m.error;
        (c !== void 0 && ((v = c), (c = void 0)), (s = s || {}));
        {
          let p = lo(e, d);
          s[p.route.id] == null && (s[p.route.id] = v);
        }
        ((i[d] = void 0),
          l || ((l = !0), (a = aa(m.error) ? m.error.status : 500)),
          m.headers && (u[d] = m.headers));
      } else
        kr(m)
          ? (r.set(d, m.deferredData),
            (i[d] = m.deferredData.data),
            m.statusCode != null &&
              m.statusCode !== 200 &&
              !l &&
              (a = m.statusCode),
            m.headers && (u[d] = m.headers))
          : ((i[d] = m.data),
            m.statusCode && m.statusCode !== 200 && !l && (a = m.statusCode),
            m.headers && (u[d] = m.headers));
    }),
    c !== void 0 && n && ((s = { [n[0]]: c }), (i[n[0]] = void 0)),
    { loaderData: i, errors: s, statusCode: a || 200, loaderHeaders: u }
  );
}
function uy(e, t, n, r, o, i, s) {
  let { loaderData: a, errors: l } = AA(t, n, r, s);
  return (
    o.forEach((u) => {
      let { key: c, match: f, controller: d } = u,
        m = i[c];
      if (
        (le(m, "Did not find corresponding fetcher result"),
        !(d && d.signal.aborted))
      )
        if (Lt(m)) {
          let v = lo(e.matches, f == null ? void 0 : f.route.id);
          ((l && l[v.route.id]) || (l = _e({}, l, { [v.route.id]: m.error })),
            e.fetchers.delete(c));
        } else if (ho(m)) le(!1, "Unhandled fetcher revalidation redirect");
        else if (kr(m)) le(!1, "Unhandled fetcher deferred data");
        else {
          let v = mr(m.data);
          e.fetchers.set(c, v);
        }
    }),
    { loaderData: a, errors: l }
  );
}
function cy(e, t, n, r) {
  let o = _e({}, t);
  for (let i of n) {
    let s = i.route.id;
    if (
      (t.hasOwnProperty(s)
        ? t[s] !== void 0 && (o[s] = t[s])
        : e[s] !== void 0 && i.route.loader && (o[s] = e[s]),
      r && r.hasOwnProperty(s))
    )
      break;
  }
  return o;
}
function fy(e) {
  return e
    ? Lt(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {};
}
function lo(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function dy(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function Pt(e, t) {
  let {
      pathname: n,
      routeId: r,
      method: o,
      type: i,
      message: s,
    } = t === void 0 ? {} : t,
    a = "Unknown Server Error",
    l = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((a = "Bad Request"),
        o && n && r
          ? (l =
              "You made a " +
              o +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : i === "defer-action"
            ? (l = "defer() is not supported in actions")
            : i === "invalid-body" && (l = "Unable to encode submission body"))
      : e === 403
        ? ((a = "Forbidden"),
          (l = 'Route "' + r + '" does not match URL "' + n + '"'))
        : e === 404
          ? ((a = "Not Found"), (l = 'No route matches URL "' + n + '"'))
          : e === 405 &&
            ((a = "Method Not Allowed"),
            o && n && r
              ? (l =
                  "You made a " +
                  o.toUpperCase() +
                  ' request to "' +
                  n +
                  '" but ' +
                  ('did not provide an `action` for route "' + r + '", ') +
                  "so there is no way to handle the request.")
              : o && (l = 'Invalid request method "' + o.toUpperCase() + '"')),
    new xu(e || 500, a, new Error(l), !0)
  );
}
function pl(e) {
  let t = Object.entries(e);
  for (let n = t.length - 1; n >= 0; n--) {
    let [r, o] = t[n];
    if (ho(o)) return { key: r, result: o };
  }
}
function yS(e) {
  let t = typeof e == "string" ? Qr(e) : e;
  return Do(_e({}, t, { hash: "" }));
}
function _A(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
      ? t.hash !== ""
      : e.hash === t.hash
        ? !0
        : t.hash !== "";
}
function MA(e) {
  return vS(e.result) && mA.has(e.result.status);
}
function kr(e) {
  return e.type === we.deferred;
}
function Lt(e) {
  return e.type === we.error;
}
function ho(e) {
  return (e && e.type) === we.redirect;
}
function hy(e) {
  return (
    typeof e == "object" &&
    e != null &&
    "type" in e &&
    "data" in e &&
    "init" in e &&
    e.type === "DataWithResponseInit"
  );
}
function kA(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function vS(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function DA(e) {
  return pA.has(e.toLowerCase());
}
function dn(e) {
  return dA.has(e.toLowerCase());
}
async function OA(e, t, n, r, o) {
  let i = Object.entries(t);
  for (let s = 0; s < i.length; s++) {
    let [a, l] = i[s],
      u = e.find((d) => (d == null ? void 0 : d.route.id) === a);
    if (!u) continue;
    let c = r.find((d) => d.route.id === u.route.id),
      f = c != null && !mS(c, u) && (o && o[u.route.id]) !== void 0;
    kr(l) &&
      f &&
      (await yp(l, n, !1).then((d) => {
        d && (t[a] = d);
      }));
  }
}
async function NA(e, t, n) {
  for (let r = 0; r < n.length; r++) {
    let { key: o, routeId: i, controller: s } = n[r],
      a = t[o];
    e.find((u) => (u == null ? void 0 : u.route.id) === i) &&
      kr(a) &&
      (le(
        s,
        "Expected an AbortController for revalidating fetcher deferred result",
      ),
      await yp(a, s.signal, !0).then((u) => {
        u && (t[o] = u);
      }));
  }
}
async function yp(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: we.data, data: e.deferredData.unwrappedData };
      } catch (o) {
        return { type: we.error, error: o };
      }
    return { type: we.data, data: e.deferredData.data };
  }
}
function vp(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Ps(e, t) {
  let n = typeof t == "string" ? Qr(t).search : t.search;
  if (e[e.length - 1].route.index && vp(n || "")) return e[e.length - 1];
  let r = dS(e);
  return r[r.length - 1];
}
function py(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: o,
    formData: i,
    json: s,
  } = e;
  if (!(!t || !n || !r)) {
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: o,
      };
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: i,
        json: void 0,
        text: void 0,
      };
    if (s !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: s,
        text: void 0,
      };
  }
}
function cf(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function LA(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function ms(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function jA(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function mr(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function IA(e, t) {
  try {
    let n = e.sessionStorage.getItem(pS);
    if (n) {
      let r = JSON.parse(n);
      for (let [o, i] of Object.entries(r || {}))
        i && Array.isArray(i) && t.set(o, new Set(i || []));
    }
  } catch {}
}
function FA(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, o] of t) n[r] = [...o];
    try {
      e.sessionStorage.setItem(pS, JSON.stringify(n));
    } catch (r) {
      ko(
        !1,
        "Failed to save applied view transitions in sessionStorage (" +
          r +
          ").",
      );
    }
  }
}
/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Su() {
  return (
    (Su = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Su.apply(this, arguments)
  );
}
const oc = h.createContext(null),
  wS = h.createContext(null),
  Xr = h.createContext(null),
  wp = h.createContext(null),
  Fn = h.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  xS = h.createContext(null);
function VA(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Qi() || le(!1);
  let { basename: r, navigator: o } = h.useContext(Xr),
    { hash: i, pathname: s, search: a } = ES(e, { relative: n }),
    l = s;
  return (
    r !== "/" && (l = s === "/" ? r : Zn([r, s])),
    o.createHref({ pathname: l, search: a, hash: i })
  );
}
function Qi() {
  return h.useContext(wp) != null;
}
function Io() {
  return (Qi() || le(!1), h.useContext(wp).location);
}
function SS(e) {
  h.useContext(Xr).static || h.useLayoutEffect(e);
}
function xp() {
  let { isDataRoute: e } = h.useContext(Fn);
  return e ? JA() : BA();
}
function BA() {
  Qi() || le(!1);
  let e = h.useContext(oc),
    { basename: t, future: n, navigator: r } = h.useContext(Xr),
    { matches: o } = h.useContext(Fn),
    { pathname: i } = Io(),
    s = JSON.stringify(nc(o, n.v7_relativeSplatPath)),
    a = h.useRef(!1);
  return (
    SS(() => {
      a.current = !0;
    }),
    h.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !a.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let f = rc(u, JSON.parse(s), i, c.relative === "path");
        (e == null &&
          t !== "/" &&
          (f.pathname = f.pathname === "/" ? t : Zn([t, f.pathname])),
          (c.replace ? r.replace : r.push)(f, c.state, c));
      },
      [t, r, s, i, e],
    )
  );
}
const UA = h.createContext(null);
function $A(e) {
  let t = h.useContext(Fn).outlet;
  return t && h.createElement(UA.Provider, { value: e }, t);
}
function fU() {
  let { matches: e } = h.useContext(Fn),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function ES(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = h.useContext(Xr),
    { matches: o } = h.useContext(Fn),
    { pathname: i } = Io(),
    s = JSON.stringify(nc(o, r.v7_relativeSplatPath));
  return h.useMemo(() => rc(e, JSON.parse(s), i, n === "path"), [e, s, i, n]);
}
function zA(e, t, n, r) {
  Qi() || le(!1);
  let { navigator: o } = h.useContext(Xr),
    { matches: i } = h.useContext(Fn),
    s = i[i.length - 1],
    a = s ? s.params : {};
  s && s.pathname;
  let l = s ? s.pathnameBase : "/";
  s && s.route;
  let u = Io(),
    c;
  c = u;
  let f = c.pathname || "/",
    d = f;
  if (l !== "/") {
    let p = l.replace(/^\//, "").split("/");
    d = "/" + f.replace(/^\//, "").split("/").slice(p.length).join("/");
  }
  let m = ao(e, { pathname: d });
  return qA(
    m &&
      m.map((p) =>
        Object.assign({}, p, {
          params: Object.assign({}, a, p.params),
          pathname: Zn([
            l,
            o.encodeLocation
              ? o.encodeLocation(p.pathname).pathname
              : p.pathname,
          ]),
          pathnameBase:
            p.pathnameBase === "/"
              ? l
              : Zn([
                  l,
                  o.encodeLocation
                    ? o.encodeLocation(p.pathnameBase).pathname
                    : p.pathnameBase,
                ]),
        }),
      ),
    i,
    n,
    r,
  );
}
function WA() {
  let e = ZA(),
    t = aa(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return h.createElement(
    h.Fragment,
    null,
    h.createElement("h2", null, "Unexpected Application Error!"),
    h.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? h.createElement("pre", { style: o }, n) : null,
    null,
  );
}
const HA = h.createElement(WA, null);
class KA extends h.Component {
  constructor(t) {
    (super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      }));
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? h.createElement(
          Fn.Provider,
          { value: this.props.routeContext },
          h.createElement(xS.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function GA(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = h.useContext(oc);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    h.createElement(Fn.Provider, { value: t }, r)
  );
}
function qA(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (i = r) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let s = e,
    a = (o = n) == null ? void 0 : o.errors;
  if (a != null) {
    let c = s.findIndex(
      (f) => f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0,
    );
    (c >= 0 || le(!1), (s = s.slice(0, Math.min(s.length, c + 1))));
  }
  let l = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < s.length; c++) {
      let f = s[c];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = c),
        f.route.id)
      ) {
        let { loaderData: d, errors: m } = n,
          v =
            f.route.loader &&
            d[f.route.id] === void 0 &&
            (!m || m[f.route.id] === void 0);
        if (f.route.lazy || v) {
          ((l = !0), u >= 0 ? (s = s.slice(0, u + 1)) : (s = [s[0]]));
          break;
        }
      }
    }
  return s.reduceRight((c, f, d) => {
    let m,
      v = !1,
      p = null,
      w = null;
    n &&
      ((m = a && f.route.id ? a[f.route.id] : void 0),
      (p = f.route.errorElement || HA),
      l &&
        (u < 0 && d === 0
          ? (e_("route-fallback"), (v = !0), (w = null))
          : u === d &&
            ((v = !0), (w = f.route.hydrateFallbackElement || null))));
    let g = t.concat(s.slice(0, d + 1)),
      y = () => {
        let x;
        return (
          m
            ? (x = p)
            : v
              ? (x = w)
              : f.route.Component
                ? (x = h.createElement(f.route.Component, null))
                : f.route.element
                  ? (x = f.route.element)
                  : (x = c),
          h.createElement(GA, {
            match: f,
            routeContext: { outlet: c, matches: g, isDataRoute: n != null },
            children: x,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || d === 0)
      ? h.createElement(KA, {
          location: n.location,
          revalidation: n.revalidation,
          component: p,
          error: m,
          children: y(),
          routeContext: { outlet: null, matches: g, isDataRoute: !0 },
        })
      : y();
  }, null);
}
var CS = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(CS || {}),
  bS = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(bS || {});
function QA(e) {
  let t = h.useContext(oc);
  return (t || le(!1), t);
}
function XA(e) {
  let t = h.useContext(wS);
  return (t || le(!1), t);
}
function YA(e) {
  let t = h.useContext(Fn);
  return (t || le(!1), t);
}
function PS(e) {
  let t = YA(),
    n = t.matches[t.matches.length - 1];
  return (n.route.id || le(!1), n.route.id);
}
function ZA() {
  var e;
  let t = h.useContext(xS),
    n = XA(),
    r = PS();
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function JA() {
  let { router: e } = QA(CS.UseNavigateStable),
    t = PS(bS.UseNavigateStable),
    n = h.useRef(!1);
  return (
    SS(() => {
      n.current = !0;
    }),
    h.useCallback(
      function (o, i) {
        (i === void 0 && (i = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, Su({ fromRouteId: t }, i))));
      },
      [e, t],
    )
  );
}
const my = {};
function e_(e, t, n) {
  my[e] || (my[e] = !0);
}
function t_(e, t) {
  (e == null || e.v7_startTransition,
    (e == null ? void 0 : e.v7_relativeSplatPath) === void 0 &&
      (!t || t.v7_relativeSplatPath),
    t &&
      (t.v7_fetcherPersist,
      t.v7_normalizeFormMethod,
      t.v7_partialHydration,
      t.v7_skipActionErrorRevalidation));
}
function gy(e) {
  let { to: t, replace: n, state: r, relative: o } = e;
  Qi() || le(!1);
  let { future: i, static: s } = h.useContext(Xr),
    { matches: a } = h.useContext(Fn),
    { pathname: l } = Io(),
    u = xp(),
    c = rc(t, nc(a, i.v7_relativeSplatPath), l, o === "path"),
    f = JSON.stringify(c);
  return (
    h.useEffect(
      () => u(JSON.parse(f), { replace: n, state: r, relative: o }),
      [u, f, o, n, r],
    ),
    null
  );
}
function n_(e) {
  return $A(e.context);
}
function r_(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = Ge.Pop,
    navigator: i,
    static: s = !1,
    future: a,
  } = e;
  Qi() && le(!1);
  let l = t.replace(/^\/*/, "/"),
    u = h.useMemo(
      () => ({
        basename: l,
        navigator: i,
        static: s,
        future: Su({ v7_relativeSplatPath: !1 }, a),
      }),
      [l, a, i, s],
    );
  typeof r == "string" && (r = Qr(r));
  let {
      pathname: c = "/",
      search: f = "",
      hash: d = "",
      state: m = null,
      key: v = "default",
    } = r,
    p = h.useMemo(() => {
      let w = qi(c, l);
      return w == null
        ? null
        : {
            location: { pathname: w, search: f, hash: d, state: m, key: v },
            navigationType: o,
          };
    }, [l, c, f, d, m, v, o]);
  return p == null
    ? null
    : h.createElement(
        Xr.Provider,
        { value: u },
        h.createElement(wp.Provider, { children: n, value: p }),
      );
}
new Promise(() => {});
function o_(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: h.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: h.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: h.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function la() {
  return (
    (la = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    la.apply(this, arguments)
  );
}
function i_(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    ((o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]));
  return n;
}
function s_(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function a_(e, t) {
  return e.button === 0 && (!t || t === "_self") && !s_(e);
}
const l_ = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  u_ = "6";
try {
  window.__reactRouterVersion = u_;
} catch {}
function c_(e, t) {
  return wA({
    basename: void 0,
    future: la({}, void 0, { v7_prependBasename: !0 }),
    history: $T({ window: void 0 }),
    hydrationData: f_(),
    routes: e,
    mapRouteProperties: o_,
    dataStrategy: void 0,
    patchRoutesOnNavigation: void 0,
    window: void 0,
  }).initialize();
}
function f_() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return (t && t.errors && (t = la({}, t, { errors: d_(t.errors) })), t);
}
function d_(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, o] of t)
    if (o && o.__type === "RouteErrorResponse")
      n[r] = new xu(o.status, o.statusText, o.data, o.internal === !0);
    else if (o && o.__type === "Error") {
      if (o.__subType) {
        let i = window[o.__subType];
        if (typeof i == "function")
          try {
            let s = new i(o.message);
            ((s.stack = ""), (n[r] = s));
          } catch {}
      }
      if (n[r] == null) {
        let i = new Error(o.message);
        ((i.stack = ""), (n[r] = i));
      }
    } else n[r] = o;
  return n;
}
const h_ = h.createContext({ isTransitioning: !1 }),
  p_ = h.createContext(new Map()),
  m_ = "startTransition",
  yy = Bu[m_],
  g_ = "flushSync",
  vy = UT[g_];
function y_(e) {
  yy ? yy(e) : e();
}
function gs(e) {
  vy ? vy(e) : e();
}
class v_ {
  constructor() {
    ((this.status = "pending"),
      (this.promise = new Promise((t, n) => {
        ((this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), t(r));
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), n(r));
          }));
      })));
  }
}
function w_(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [o, i] = h.useState(n.state),
    [s, a] = h.useState(),
    [l, u] = h.useState({ isTransitioning: !1 }),
    [c, f] = h.useState(),
    [d, m] = h.useState(),
    [v, p] = h.useState(),
    w = h.useRef(new Map()),
    { v7_startTransition: g } = r || {},
    y = h.useCallback(
      (R) => {
        g ? y_(R) : R();
      },
      [g],
    ),
    x = h.useCallback(
      (R, L) => {
        let { deletedFetchers: D, flushSync: B, viewTransitionOpts: V } = L;
        (R.fetchers.forEach((W, se) => {
          W.data !== void 0 && w.current.set(se, W.data);
        }),
          D.forEach((W) => w.current.delete(W)));
        let Y =
          n.window == null ||
          n.window.document == null ||
          typeof n.window.document.startViewTransition != "function";
        if (!V || Y) {
          B ? gs(() => i(R)) : y(() => i(R));
          return;
        }
        if (B) {
          gs(() => {
            (d && (c && c.resolve(), d.skipTransition()),
              u({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: V.currentLocation,
                nextLocation: V.nextLocation,
              }));
          });
          let W = n.window.document.startViewTransition(() => {
            gs(() => i(R));
          });
          (W.finished.finally(() => {
            gs(() => {
              (f(void 0), m(void 0), a(void 0), u({ isTransitioning: !1 }));
            });
          }),
            gs(() => m(W)));
          return;
        }
        d
          ? (c && c.resolve(),
            d.skipTransition(),
            p({
              state: R,
              currentLocation: V.currentLocation,
              nextLocation: V.nextLocation,
            }))
          : (a(R),
            u({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: V.currentLocation,
              nextLocation: V.nextLocation,
            }));
      },
      [n.window, d, c, w, y],
    );
  (h.useLayoutEffect(() => n.subscribe(x), [n, x]),
    h.useEffect(() => {
      l.isTransitioning && !l.flushSync && f(new v_());
    }, [l]),
    h.useEffect(() => {
      if (c && s && n.window) {
        let R = s,
          L = c.promise,
          D = n.window.document.startViewTransition(async () => {
            (y(() => i(R)), await L);
          });
        (D.finished.finally(() => {
          (f(void 0), m(void 0), a(void 0), u({ isTransitioning: !1 }));
        }),
          m(D));
      }
    }, [y, s, c, n.window]),
    h.useEffect(() => {
      c && s && o.location.key === s.location.key && c.resolve();
    }, [c, d, o.location, s]),
    h.useEffect(() => {
      !l.isTransitioning &&
        v &&
        (a(v.state),
        u({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: v.currentLocation,
          nextLocation: v.nextLocation,
        }),
        p(void 0));
    }, [l.isTransitioning, v]),
    h.useEffect(() => {}, []));
  let S = h.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (R) => n.navigate(R),
        push: (R, L, D) =>
          n.navigate(R, {
            state: L,
            preventScrollReset: D == null ? void 0 : D.preventScrollReset,
          }),
        replace: (R, L, D) =>
          n.navigate(R, {
            replace: !0,
            state: L,
            preventScrollReset: D == null ? void 0 : D.preventScrollReset,
          }),
      }),
      [n],
    ),
    b = n.basename || "/",
    T = h.useMemo(
      () => ({ router: n, navigator: S, static: !1, basename: b }),
      [n, S, b],
    ),
    C = h.useMemo(
      () => ({ v7_relativeSplatPath: n.future.v7_relativeSplatPath }),
      [n.future.v7_relativeSplatPath],
    );
  return (
    h.useEffect(() => t_(r, n.future), [r, n.future]),
    h.createElement(
      h.Fragment,
      null,
      h.createElement(
        oc.Provider,
        { value: T },
        h.createElement(
          wS.Provider,
          { value: o },
          h.createElement(
            p_.Provider,
            { value: w.current },
            h.createElement(
              h_.Provider,
              { value: l },
              h.createElement(
                r_,
                {
                  basename: b,
                  location: o.location,
                  navigationType: o.historyAction,
                  navigator: S,
                  future: C,
                },
                o.initialized || n.future.v7_partialHydration
                  ? h.createElement(x_, {
                      routes: n.routes,
                      future: n.future,
                      state: o,
                    })
                  : t,
              ),
            ),
          ),
        ),
      ),
      null,
    )
  );
}
const x_ = h.memo(S_);
function S_(e) {
  let { routes: t, future: n, state: r } = e;
  return zA(t, void 0, r, n);
}
const E_ =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  C_ = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Eu = h.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: i,
        replace: s,
        state: a,
        target: l,
        to: u,
        preventScrollReset: c,
        viewTransition: f,
      } = t,
      d = i_(t, l_),
      { basename: m } = h.useContext(Xr),
      v,
      p = !1;
    if (typeof u == "string" && C_.test(u) && ((v = u), E_))
      try {
        let x = new URL(window.location.href),
          S = u.startsWith("//") ? new URL(x.protocol + u) : new URL(u),
          b = qi(S.pathname, m);
        S.origin === x.origin && b != null
          ? (u = b + S.search + S.hash)
          : (p = !0);
      } catch {}
    let w = VA(u, { relative: o }),
      g = b_(u, {
        replace: s,
        state: a,
        target: l,
        preventScrollReset: c,
        relative: o,
        viewTransition: f,
      });
    function y(x) {
      (r && r(x), x.defaultPrevented || g(x));
    }
    return h.createElement(
      "a",
      la({}, d, { href: v || w, onClick: p || i ? r : y, ref: n, target: l }),
    );
  });
var wy;
(function (e) {
  ((e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState"));
})(wy || (wy = {}));
var xy;
(function (e) {
  ((e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration"));
})(xy || (xy = {}));
function b_(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: i,
      relative: s,
      viewTransition: a,
    } = t === void 0 ? {} : t,
    l = xp(),
    u = Io(),
    c = ES(e, { relative: s });
  return h.useCallback(
    (f) => {
      if (a_(f, n)) {
        f.preventDefault();
        let d = r !== void 0 ? r : Do(u) === Do(c);
        l(e, {
          replace: d,
          state: o,
          preventScrollReset: i,
          relative: s,
          viewTransition: a,
        });
      }
    },
    [u, l, c, r, o, n, e, i, s, a],
  );
}
var ic = class {
    constructor() {
      ((this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(e), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  go,
  Cr,
  Ei,
  U0,
  P_ =
    ((U0 = class extends ic {
      constructor() {
        super();
        ce(this, go);
        ce(this, Cr);
        ce(this, Ei);
        te(this, Ei, (t) => {
          if (typeof window < "u" && window.addEventListener) {
            const n = () => t();
            return (
              window.addEventListener("visibilitychange", n, !1),
              () => {
                window.removeEventListener("visibilitychange", n);
              }
            );
          }
        });
      }
      onSubscribe() {
        O(this, Cr) || this.setEventListener(O(this, Ei));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = O(this, Cr)) == null || t.call(this), te(this, Cr, void 0));
      }
      setEventListener(t) {
        var n;
        (te(this, Ei, t),
          (n = O(this, Cr)) == null || n.call(this),
          te(
            this,
            Cr,
            t((r) => {
              typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
            }),
          ));
      }
      setFocused(t) {
        O(this, go) !== t && (te(this, go, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((n) => {
          n(t);
        });
      }
      isFocused() {
        var t;
        return typeof O(this, go) == "boolean"
          ? O(this, go)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    (go = new WeakMap()),
    (Cr = new WeakMap()),
    (Ei = new WeakMap()),
    U0),
  RS = new P_(),
  R_ = {
    setTimeout: (e, t) => setTimeout(e, t),
    clearTimeout: (e) => clearTimeout(e),
    setInterval: (e, t) => setInterval(e, t),
    clearInterval: (e) => clearInterval(e),
  },
  br,
  xh,
  $0,
  T_ =
    (($0 = class {
      constructor() {
        ce(this, br, R_);
        ce(this, xh, !1);
      }
      setTimeoutProvider(e) {
        te(this, br, e);
      }
      setTimeout(e, t) {
        return O(this, br).setTimeout(e, t);
      }
      clearTimeout(e) {
        O(this, br).clearTimeout(e);
      }
      setInterval(e, t) {
        return O(this, br).setInterval(e, t);
      }
      clearInterval(e) {
        O(this, br).clearInterval(e);
      }
    }),
    (br = new WeakMap()),
    (xh = new WeakMap()),
    $0),
  Fd = new T_();
function A_(e) {
  setTimeout(e, 0);
}
var __ = typeof window > "u" || "Deno" in globalThis;
function un() {}
function M_(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function k_(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function D_(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Vd(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function O_(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Sy(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: o,
    predicate: i,
    queryKey: s,
    stale: a,
  } = e;
  if (s) {
    if (r) {
      if (t.queryHash !== Sp(s, t.options)) return !1;
    } else if (!ca(t.queryKey, s)) return !1;
  }
  if (n !== "all") {
    const l = t.isActive();
    if ((n === "active" && !l) || (n === "inactive" && l)) return !1;
  }
  return !(
    (typeof a == "boolean" && t.isStale() !== a) ||
    (o && o !== t.state.fetchStatus) ||
    (i && !i(t))
  );
}
function Ey(e, t) {
  const { exact: n, status: r, predicate: o, mutationKey: i } = e;
  if (i) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (ua(t.options.mutationKey) !== ua(i)) return !1;
    } else if (!ca(t.options.mutationKey, i)) return !1;
  }
  return !((r && t.state.status !== r) || (o && !o(t)));
}
function Sp(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || ua)(e);
}
function ua(e) {
  return JSON.stringify(e, (t, n) =>
    Bd(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, o) => ((r[o] = n[o]), r), {})
      : n,
  );
}
function ca(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
      ? !1
      : e && t && typeof e == "object" && typeof t == "object"
        ? Object.keys(t).every((n) => ca(e[n], t[n]))
        : !1;
}
var N_ = Object.prototype.hasOwnProperty;
function TS(e, t, n = 0) {
  if (e === t) return e;
  if (n > 500) return t;
  const r = Cy(e) && Cy(t);
  if (!r && !(Bd(e) && Bd(t))) return t;
  const i = (r ? e : Object.keys(e)).length,
    s = r ? t : Object.keys(t),
    a = s.length,
    l = r ? new Array(a) : {};
  let u = 0;
  for (let c = 0; c < a; c++) {
    const f = r ? c : s[c],
      d = e[f],
      m = t[f];
    if (d === m) {
      ((l[f] = d), (r ? c < i : N_.call(e, f)) && u++);
      continue;
    }
    if (
      d === null ||
      m === null ||
      typeof d != "object" ||
      typeof m != "object"
    ) {
      l[f] = m;
      continue;
    }
    const v = TS(d, m, n + 1);
    ((l[f] = v), v === d && u++);
  }
  return i === a && u === i ? e : l;
}
function dU(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (e[n] !== t[n]) return !1;
  return !0;
}
function Cy(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Bd(e) {
  if (!by(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(
    !by(n) ||
    !n.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function by(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function L_(e) {
  return new Promise((t) => {
    Fd.setTimeout(t, e);
  });
}
function j_(e, t, n) {
  return typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
      ? TS(e, t)
      : t;
}
function I_(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function F_(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var Ep = Symbol();
function AS(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === Ep
      ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
function hU(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
function V_(e, t, n) {
  let r = !1,
    o;
  return (
    Object.defineProperty(e, "signal", {
      enumerable: !0,
      get: () => (
        o ?? (o = t()),
        r ||
          ((r = !0),
          o.aborted ? n() : o.addEventListener("abort", n, { once: !0 })),
        o
      ),
    }),
    e
  );
}
var _S = (() => {
  let e = () => __;
  return {
    isServer() {
      return e();
    },
    setIsServer(t) {
      e = t;
    },
  };
})();
function B_() {
  let e, t;
  const n = new Promise((o, i) => {
    ((e = o), (t = i));
  });
  ((n.status = "pending"), n.catch(() => {}));
  function r(o) {
    (Object.assign(n, o), delete n.resolve, delete n.reject);
  }
  return (
    (n.resolve = (o) => {
      (r({ status: "fulfilled", value: o }), e(o));
    }),
    (n.reject = (o) => {
      (r({ status: "rejected", reason: o }), t(o));
    }),
    n
  );
}
var U_ = A_;
function $_() {
  let e = [],
    t = 0,
    n = (a) => {
      a();
    },
    r = (a) => {
      a();
    },
    o = U_;
  const i = (a) => {
      t
        ? e.push(a)
        : o(() => {
            n(a);
          });
    },
    s = () => {
      const a = e;
      ((e = []),
        a.length &&
          o(() => {
            r(() => {
              a.forEach((l) => {
                n(l);
              });
            });
          }));
    };
  return {
    batch: (a) => {
      let l;
      t++;
      try {
        l = a();
      } finally {
        (t--, t || s());
      }
      return l;
    },
    batchCalls:
      (a) =>
      (...l) => {
        i(() => {
          a(...l);
        });
      },
    schedule: i,
    setNotifyFunction: (a) => {
      n = a;
    },
    setBatchNotifyFunction: (a) => {
      r = a;
    },
    setScheduler: (a) => {
      o = a;
    },
  };
}
var vt = $_(),
  Ci,
  Pr,
  bi,
  z0,
  z_ =
    ((z0 = class extends ic {
      constructor() {
        super();
        ce(this, Ci, !0);
        ce(this, Pr);
        ce(this, bi);
        te(this, bi, (t) => {
          if (typeof window < "u" && window.addEventListener) {
            const n = () => t(!0),
              r = () => t(!1);
            return (
              window.addEventListener("online", n, !1),
              window.addEventListener("offline", r, !1),
              () => {
                (window.removeEventListener("online", n),
                  window.removeEventListener("offline", r));
              }
            );
          }
        });
      }
      onSubscribe() {
        O(this, Pr) || this.setEventListener(O(this, bi));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = O(this, Pr)) == null || t.call(this), te(this, Pr, void 0));
      }
      setEventListener(t) {
        var n;
        (te(this, bi, t),
          (n = O(this, Pr)) == null || n.call(this),
          te(this, Pr, t(this.setOnline.bind(this))));
      }
      setOnline(t) {
        O(this, Ci) !== t &&
          (te(this, Ci, t),
          this.listeners.forEach((r) => {
            r(t);
          }));
      }
      isOnline() {
        return O(this, Ci);
      }
    }),
    (Ci = new WeakMap()),
    (Pr = new WeakMap()),
    (bi = new WeakMap()),
    z0),
  Cu = new z_();
function W_(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function MS(e) {
  return (e ?? "online") === "online" ? Cu.isOnline() : !0;
}
var Ud = class extends Error {
  constructor(e) {
    (super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent));
  }
};
function kS(e) {
  let t = !1,
    n = 0,
    r;
  const o = B_(),
    i = () => o.status !== "pending",
    s = (p) => {
      var w;
      if (!i()) {
        const g = new Ud(p);
        (d(g), (w = e.onCancel) == null || w.call(e, g));
      }
    },
    a = () => {
      t = !0;
    },
    l = () => {
      t = !1;
    },
    u = () =>
      RS.isFocused() &&
      (e.networkMode === "always" || Cu.isOnline()) &&
      e.canRun(),
    c = () => MS(e.networkMode) && e.canRun(),
    f = (p) => {
      i() || (r == null || r(), o.resolve(p));
    },
    d = (p) => {
      i() || (r == null || r(), o.reject(p));
    },
    m = () =>
      new Promise((p) => {
        var w;
        ((r = (g) => {
          (i() || u()) && p(g);
        }),
          (w = e.onPause) == null || w.call(e));
      }).then(() => {
        var p;
        ((r = void 0), i() || (p = e.onContinue) == null || p.call(e));
      }),
    v = () => {
      if (i()) return;
      let p;
      const w = n === 0 ? e.initialPromise : void 0;
      try {
        p = w ?? e.fn();
      } catch (g) {
        p = Promise.reject(g);
      }
      Promise.resolve(p)
        .then(f)
        .catch((g) => {
          var T;
          if (i()) return;
          const y = e.retry ?? (_S.isServer() ? 0 : 3),
            x = e.retryDelay ?? W_,
            S = typeof x == "function" ? x(n, g) : x,
            b =
              y === !0 ||
              (typeof y == "number" && n < y) ||
              (typeof y == "function" && y(n, g));
          if (t || !b) {
            d(g);
            return;
          }
          (n++,
            (T = e.onFail) == null || T.call(e, n, g),
            L_(S)
              .then(() => (u() ? void 0 : m()))
              .then(() => {
                t ? d(g) : v();
              }));
        });
    };
  return {
    promise: o,
    status: () => o.status,
    cancel: s,
    continue: () => (r == null || r(), o),
    cancelRetry: a,
    continueRetry: l,
    canStart: c,
    start: () => (c() ? v() : m().then(v), o),
  };
}
var yo,
  W0,
  DS =
    ((W0 = class {
      constructor() {
        ce(this, yo);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        (this.clearGcTimeout(),
          k_(this.gcTime) &&
            te(
              this,
              yo,
              Fd.setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime),
            ));
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (_S.isServer() ? 1 / 0 : 5 * 60 * 1e3),
        );
      }
      clearGcTimeout() {
        O(this, yo) !== void 0 &&
          (Fd.clearTimeout(O(this, yo)), te(this, yo, void 0));
      }
    }),
    (yo = new WeakMap()),
    W0);
function H_(e) {
  return {
    onFetch: (t, n) => {
      var c, f, d, m, v;
      const r = t.options,
        o =
          (d =
            (f = (c = t.fetchOptions) == null ? void 0 : c.meta) == null
              ? void 0
              : f.fetchMore) == null
            ? void 0
            : d.direction,
        i = ((m = t.state.data) == null ? void 0 : m.pages) || [],
        s = ((v = t.state.data) == null ? void 0 : v.pageParams) || [];
      let a = { pages: [], pageParams: [] },
        l = 0;
      const u = async () => {
        let p = !1;
        const w = (x) => {
            V_(
              x,
              () => t.signal,
              () => (p = !0),
            );
          },
          g = AS(t.options, t.fetchOptions),
          y = async (x, S, b) => {
            if (p) return Promise.reject(t.signal.reason);
            if (S == null && x.pages.length) return Promise.resolve(x);
            const C = (() => {
                const B = {
                  client: t.client,
                  queryKey: t.queryKey,
                  pageParam: S,
                  direction: b ? "backward" : "forward",
                  meta: t.options.meta,
                };
                return (w(B), B);
              })(),
              R = await g(C),
              { maxPages: L } = t.options,
              D = b ? F_ : I_;
            return {
              pages: D(x.pages, R, L),
              pageParams: D(x.pageParams, S, L),
            };
          };
        if (o && i.length) {
          const x = o === "backward",
            S = x ? K_ : Py,
            b = { pages: i, pageParams: s },
            T = S(r, b);
          a = await y(b, T, x);
        } else {
          const x = e ?? i.length;
          do {
            const S = l === 0 ? (s[0] ?? r.initialPageParam) : Py(r, a);
            if (l > 0 && S == null) break;
            ((a = await y(a, S)), l++);
          } while (l < x);
        }
        return a;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var p, w;
            return (w = (p = t.options).persister) == null
              ? void 0
              : w.call(
                  p,
                  u,
                  {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  n,
                );
          })
        : (t.fetchFn = u);
    },
  };
}
function Py(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function K_(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0
    ? (r = e.getPreviousPageParam) == null
      ? void 0
      : r.call(e, t[0], t, n[0], n)
    : void 0;
}
var Pi,
  vo,
  Ri,
  Xt,
  wo,
  Je,
  xa,
  xo,
  Nt,
  OS,
  Hn,
  H0,
  G_ =
    ((H0 = class extends DS {
      constructor(t) {
        super();
        ce(this, Nt);
        ce(this, Pi);
        ce(this, vo);
        ce(this, Ri);
        ce(this, Xt);
        ce(this, wo);
        ce(this, Je);
        ce(this, xa);
        ce(this, xo);
        (te(this, xo, !1),
          te(this, xa, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          te(this, wo, t.client),
          te(this, Xt, O(this, wo).getQueryCache()),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          te(this, vo, Ty(this.options)),
          (this.state = t.state ?? O(this, vo)),
          this.scheduleGc());
      }
      get meta() {
        return this.options.meta;
      }
      get queryType() {
        return O(this, Pi);
      }
      get promise() {
        var t;
        return (t = O(this, Je)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        if (
          ((this.options = { ...O(this, xa), ...t }),
          t != null && t._type && te(this, Pi, t._type),
          this.updateGcTime(this.options.gcTime),
          this.state && this.state.data === void 0)
        ) {
          const n = Ty(this.options);
          n.data !== void 0 &&
            (this.setState(Ry(n.data, n.dataUpdatedAt)), te(this, vo, n));
        }
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          O(this, Xt).remove(this);
      }
      setData(t, n) {
        const r = j_(this.state.data, t, this.options);
        return (
          rt(this, Nt, Hn).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          r
        );
      }
      setState(t) {
        rt(this, Nt, Hn).call(this, { type: "setState", state: t });
      }
      cancel(t) {
        var r, o;
        const n = (r = O(this, Je)) == null ? void 0 : r.promise;
        return (
          (o = O(this, Je)) == null || o.cancel(t),
          n ? n.then(un).catch(un) : Promise.resolve()
        );
      }
      destroy() {
        (super.destroy(), this.cancel({ silent: !0 }));
      }
      get resetState() {
        return O(this, vo);
      }
      reset() {
        (this.destroy(), this.setState(this.resetState));
      }
      isActive() {
        return this.observers.some((t) => O_(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === Ep || !this.isFetched();
      }
      isFetched() {
        return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
      }
      isStatic() {
        return this.getObserversCount() > 0
          ? this.observers.some(
              (t) => Vd(t.options.staleTime, this) === "static",
            )
          : !1;
      }
      isStale() {
        return this.getObserversCount() > 0
          ? this.observers.some((t) => t.getCurrentResult().isStale)
          : this.state.data === void 0 || this.state.isInvalidated;
      }
      isStaleByTime(t = 0) {
        return this.state.data === void 0
          ? !0
          : t === "static"
            ? !1
            : this.state.isInvalidated
              ? !0
              : !D_(this.state.dataUpdatedAt, t);
      }
      onFocus() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
        (t == null || t.refetch({ cancelRefetch: !1 }),
          (n = O(this, Je)) == null || n.continue());
      }
      onOnline() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnReconnect());
        (t == null || t.refetch({ cancelRefetch: !1 }),
          (n = O(this, Je)) == null || n.continue());
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          O(this, Xt).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((n) => n !== t)),
          this.observers.length ||
            (O(this, Je) &&
              (O(this, xo) || rt(this, Nt, OS).call(this)
                ? O(this, Je).cancel({ revert: !0 })
                : O(this, Je).cancelRetry()),
            this.scheduleGc()),
          O(this, Xt).notify({
            type: "observerRemoved",
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          rt(this, Nt, Hn).call(this, { type: "invalidate" });
      }
      async fetch(t, n) {
        var u, c, f, d, m, v, p, w, g, y, x;
        if (
          this.state.fetchStatus !== "idle" &&
          ((u = O(this, Je)) == null ? void 0 : u.status()) !== "rejected"
        ) {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (O(this, Je))
            return (O(this, Je).continueRetry(), O(this, Je).promise);
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const S = this.observers.find((b) => b.options.queryFn);
          S && this.setOptions(S.options);
        }
        const r = new AbortController(),
          o = (S) => {
            Object.defineProperty(S, "signal", {
              enumerable: !0,
              get: () => (te(this, xo, !0), r.signal),
            });
          },
          i = () => {
            const S = AS(this.options, n),
              T = (() => {
                const C = {
                  client: O(this, wo),
                  queryKey: this.queryKey,
                  meta: this.meta,
                };
                return (o(C), C);
              })();
            return (
              te(this, xo, !1),
              this.options.persister ? this.options.persister(S, T, this) : S(T)
            );
          },
          a = (() => {
            const S = {
              fetchOptions: n,
              options: this.options,
              queryKey: this.queryKey,
              client: O(this, wo),
              state: this.state,
              fetchFn: i,
            };
            return (o(S), S);
          })(),
          l =
            O(this, Pi) === "infinite"
              ? H_(this.options.pages)
              : this.options.behavior;
        (l == null || l.onFetch(a, this),
          te(this, Ri, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((c = a.fetchOptions) == null ? void 0 : c.meta)) &&
            rt(this, Nt, Hn).call(this, {
              type: "fetch",
              meta: (f = a.fetchOptions) == null ? void 0 : f.meta,
            }),
          te(
            this,
            Je,
            kS({
              initialPromise: n == null ? void 0 : n.initialPromise,
              fn: a.fetchFn,
              onCancel: (S) => {
                (S instanceof Ud &&
                  S.revert &&
                  this.setState({ ...O(this, Ri), fetchStatus: "idle" }),
                  r.abort());
              },
              onFail: (S, b) => {
                rt(this, Nt, Hn).call(this, {
                  type: "failed",
                  failureCount: S,
                  error: b,
                });
              },
              onPause: () => {
                rt(this, Nt, Hn).call(this, { type: "pause" });
              },
              onContinue: () => {
                rt(this, Nt, Hn).call(this, { type: "continue" });
              },
              retry: a.options.retry,
              retryDelay: a.options.retryDelay,
              networkMode: a.options.networkMode,
              canRun: () => !0,
            }),
          ));
        try {
          const S = await O(this, Je).start();
          if (S === void 0)
            throw new Error(`${this.queryHash} data is undefined`);
          return (
            this.setData(S),
            (m = (d = O(this, Xt).config).onSuccess) == null ||
              m.call(d, S, this),
            (p = (v = O(this, Xt).config).onSettled) == null ||
              p.call(v, S, this.state.error, this),
            S
          );
        } catch (S) {
          if (S instanceof Ud) {
            if (S.silent) return O(this, Je).promise;
            if (S.revert) {
              if (this.state.data === void 0) throw S;
              return this.state.data;
            }
          }
          throw (
            rt(this, Nt, Hn).call(this, { type: "error", error: S }),
            (g = (w = O(this, Xt).config).onError) == null ||
              g.call(w, S, this),
            (x = (y = O(this, Xt).config).onSettled) == null ||
              x.call(y, this.state.data, S, this),
            S
          );
        } finally {
          this.scheduleGc();
        }
      }
    }),
    (Pi = new WeakMap()),
    (vo = new WeakMap()),
    (Ri = new WeakMap()),
    (Xt = new WeakMap()),
    (wo = new WeakMap()),
    (Je = new WeakMap()),
    (xa = new WeakMap()),
    (xo = new WeakMap()),
    (Nt = new WeakSet()),
    (OS = function () {
      return (
        this.state.fetchStatus === "paused" && this.state.status === "pending"
      );
    }),
    (Hn = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case "pause":
            return { ...r, fetchStatus: "paused" };
          case "continue":
            return { ...r, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...r,
              ...q_(r.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case "success":
            const o = {
              ...r,
              ...Ry(t.data, t.dataUpdatedAt),
              dataUpdateCount: r.dataUpdateCount + 1,
              ...(!t.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
            return (te(this, Ri, t.manual ? o : void 0), o);
          case "error":
            const i = t.error;
            return {
              ...r,
              error: i,
              errorUpdateCount: r.errorUpdateCount + 1,
              errorUpdatedAt: Date.now(),
              fetchFailureCount: r.fetchFailureCount + 1,
              fetchFailureReason: i,
              fetchStatus: "idle",
              status: "error",
              isInvalidated: !0,
            };
          case "invalidate":
            return { ...r, isInvalidated: !0 };
          case "setState":
            return { ...r, ...t.state };
        }
      };
      ((this.state = n(this.state)),
        vt.batch(() => {
          (this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            O(this, Xt).notify({ query: this, type: "updated", action: t }));
        }));
    }),
    H0);
function q_(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: MS(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function Ry(e, t) {
  return {
    data: e,
    dataUpdatedAt: t ?? Date.now(),
    error: null,
    isInvalidated: !1,
    status: "success",
  };
}
function Ty(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? (r ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var Sa,
  Rn,
  ft,
  So,
  Tn,
  gr,
  K0,
  Q_ =
    ((K0 = class extends DS {
      constructor(t) {
        super();
        ce(this, Tn);
        ce(this, Sa);
        ce(this, Rn);
        ce(this, ft);
        ce(this, So);
        (te(this, Sa, t.client),
          (this.mutationId = t.mutationId),
          te(this, ft, t.mutationCache),
          te(this, Rn, []),
          (this.state = t.state || X_()),
          this.setOptions(t.options),
          this.scheduleGc());
      }
      setOptions(t) {
        ((this.options = t), this.updateGcTime(this.options.gcTime));
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        O(this, Rn).includes(t) ||
          (O(this, Rn).push(t),
          this.clearGcTimeout(),
          O(this, ft).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        (te(
          this,
          Rn,
          O(this, Rn).filter((n) => n !== t),
        ),
          this.scheduleGc(),
          O(this, ft).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          }));
      }
      optionalRemove() {
        O(this, Rn).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : O(this, ft).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = O(this, So)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var s, a, l, u, c, f, d, m, v, p, w, g, y, x, S, b, T, C;
        const n = () => {
            rt(this, Tn, gr).call(this, { type: "continue" });
          },
          r = {
            client: O(this, Sa),
            meta: this.options.meta,
            mutationKey: this.options.mutationKey,
          };
        te(
          this,
          So,
          kS({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t, r)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (R, L) => {
              rt(this, Tn, gr).call(this, {
                type: "failed",
                failureCount: R,
                error: L,
              });
            },
            onPause: () => {
              rt(this, Tn, gr).call(this, { type: "pause" });
            },
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => O(this, ft).canRun(this),
          }),
        );
        const o = this.state.status === "pending",
          i = !O(this, So).canStart();
        try {
          if (o) n();
          else {
            (rt(this, Tn, gr).call(this, {
              type: "pending",
              variables: t,
              isPaused: i,
            }),
              O(this, ft).config.onMutate &&
                (await O(this, ft).config.onMutate(t, this, r)));
            const L = await ((a = (s = this.options).onMutate) == null
              ? void 0
              : a.call(s, t, r));
            L !== this.state.context &&
              rt(this, Tn, gr).call(this, {
                type: "pending",
                context: L,
                variables: t,
                isPaused: i,
              });
          }
          const R = await O(this, So).start();
          return (
            await ((u = (l = O(this, ft).config).onSuccess) == null
              ? void 0
              : u.call(l, R, t, this.state.context, this, r)),
            await ((f = (c = this.options).onSuccess) == null
              ? void 0
              : f.call(c, R, t, this.state.context, r)),
            await ((m = (d = O(this, ft).config).onSettled) == null
              ? void 0
              : m.call(
                  d,
                  R,
                  null,
                  this.state.variables,
                  this.state.context,
                  this,
                  r,
                )),
            await ((p = (v = this.options).onSettled) == null
              ? void 0
              : p.call(v, R, null, t, this.state.context, r)),
            rt(this, Tn, gr).call(this, { type: "success", data: R }),
            R
          );
        } catch (R) {
          try {
            await ((g = (w = O(this, ft).config).onError) == null
              ? void 0
              : g.call(w, R, t, this.state.context, this, r));
          } catch (L) {
            Promise.reject(L);
          }
          try {
            await ((x = (y = this.options).onError) == null
              ? void 0
              : x.call(y, R, t, this.state.context, r));
          } catch (L) {
            Promise.reject(L);
          }
          try {
            await ((b = (S = O(this, ft).config).onSettled) == null
              ? void 0
              : b.call(
                  S,
                  void 0,
                  R,
                  this.state.variables,
                  this.state.context,
                  this,
                  r,
                ));
          } catch (L) {
            Promise.reject(L);
          }
          try {
            await ((C = (T = this.options).onSettled) == null
              ? void 0
              : C.call(T, void 0, R, t, this.state.context, r));
          } catch (L) {
            Promise.reject(L);
          }
          throw (rt(this, Tn, gr).call(this, { type: "error", error: R }), R);
        } finally {
          O(this, ft).runNext(this);
        }
      }
    }),
    (Sa = new WeakMap()),
    (Rn = new WeakMap()),
    (ft = new WeakMap()),
    (So = new WeakMap()),
    (Tn = new WeakSet()),
    (gr = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              failureCount: t.failureCount,
              failureReason: t.error,
            };
          case "pause":
            return { ...r, isPaused: !0 };
          case "continue":
            return { ...r, isPaused: !1 };
          case "pending":
            return {
              ...r,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...r,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...r,
              data: void 0,
              error: t.error,
              failureCount: r.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      ((this.state = n(this.state)),
        vt.batch(() => {
          (O(this, Rn).forEach((r) => {
            r.onMutationUpdate(t);
          }),
            O(this, ft).notify({ mutation: this, type: "updated", action: t }));
        }));
    }),
    K0);
function X_() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var qn,
  cn,
  Ea,
  G0,
  Y_ =
    ((G0 = class extends ic {
      constructor(t = {}) {
        super();
        ce(this, qn);
        ce(this, cn);
        ce(this, Ea);
        ((this.config = t),
          te(this, qn, new Set()),
          te(this, cn, new Map()),
          te(this, Ea, 0));
      }
      build(t, n, r) {
        const o = new Q_({
          client: t,
          mutationCache: this,
          mutationId: ++Xa(this, Ea)._,
          options: t.defaultMutationOptions(n),
          state: r,
        });
        return (this.add(o), o);
      }
      add(t) {
        O(this, qn).add(t);
        const n = ml(t);
        if (typeof n == "string") {
          const r = O(this, cn).get(n);
          r ? r.push(t) : O(this, cn).set(n, [t]);
        }
        this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        if (O(this, qn).delete(t)) {
          const n = ml(t);
          if (typeof n == "string") {
            const r = O(this, cn).get(n);
            if (r)
              if (r.length > 1) {
                const o = r.indexOf(t);
                o !== -1 && r.splice(o, 1);
              } else r[0] === t && O(this, cn).delete(n);
          }
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        const n = ml(t);
        if (typeof n == "string") {
          const r = O(this, cn).get(n),
            o =
              r == null ? void 0 : r.find((i) => i.state.status === "pending");
          return !o || o === t;
        } else return !0;
      }
      runNext(t) {
        var r;
        const n = ml(t);
        if (typeof n == "string") {
          const o =
            (r = O(this, cn).get(n)) == null
              ? void 0
              : r.find((i) => i !== t && i.state.isPaused);
          return (o == null ? void 0 : o.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        vt.batch(() => {
          (O(this, qn).forEach((t) => {
            this.notify({ type: "removed", mutation: t });
          }),
            O(this, qn).clear(),
            O(this, cn).clear());
        });
      }
      getAll() {
        return Array.from(O(this, qn));
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => Ey(n, r));
      }
      findAll(t = {}) {
        return this.getAll().filter((n) => Ey(t, n));
      }
      notify(t) {
        vt.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((n) => n.state.isPaused);
        return vt.batch(() =>
          Promise.all(t.map((n) => n.continue().catch(un))),
        );
      }
    }),
    (qn = new WeakMap()),
    (cn = new WeakMap()),
    (Ea = new WeakMap()),
    G0);
function ml(e) {
  var t;
  return (t = e.options.scope) == null ? void 0 : t.id;
}
var An,
  q0,
  Z_ =
    ((q0 = class extends ic {
      constructor(t = {}) {
        super();
        ce(this, An);
        ((this.config = t), te(this, An, new Map()));
      }
      build(t, n, r) {
        const o = n.queryKey,
          i = n.queryHash ?? Sp(o, n);
        let s = this.get(i);
        return (
          s ||
            ((s = new G_({
              client: t,
              queryKey: o,
              queryHash: i,
              options: t.defaultQueryOptions(n),
              state: r,
              defaultOptions: t.getQueryDefaults(o),
            })),
            this.add(s)),
          s
        );
      }
      add(t) {
        O(this, An).has(t.queryHash) ||
          (O(this, An).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const n = O(this, An).get(t.queryHash);
        n &&
          (t.destroy(),
          n === t && O(this, An).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        vt.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return O(this, An).get(t);
      }
      getAll() {
        return [...O(this, An).values()];
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => Sy(n, r));
      }
      findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter((r) => Sy(t, r)) : n;
      }
      notify(t) {
        vt.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      onFocus() {
        vt.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        vt.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (An = new WeakMap()),
    q0),
  Ie,
  Rr,
  Tr,
  Ti,
  Ai,
  Ar,
  _i,
  Mi,
  Q0,
  J_ =
    ((Q0 = class {
      constructor(e = {}) {
        ce(this, Ie);
        ce(this, Rr);
        ce(this, Tr);
        ce(this, Ti);
        ce(this, Ai);
        ce(this, Ar);
        ce(this, _i);
        ce(this, Mi);
        (te(this, Ie, e.queryCache || new Z_()),
          te(this, Rr, e.mutationCache || new Y_()),
          te(this, Tr, e.defaultOptions || {}),
          te(this, Ti, new Map()),
          te(this, Ai, new Map()),
          te(this, Ar, 0));
      }
      mount() {
        (Xa(this, Ar)._++,
          O(this, Ar) === 1 &&
            (te(
              this,
              _i,
              RS.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), O(this, Ie).onFocus());
              }),
            ),
            te(
              this,
              Mi,
              Cu.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), O(this, Ie).onOnline());
              }),
            )));
      }
      unmount() {
        var e, t;
        (Xa(this, Ar)._--,
          O(this, Ar) === 0 &&
            ((e = O(this, _i)) == null || e.call(this),
            te(this, _i, void 0),
            (t = O(this, Mi)) == null || t.call(this),
            te(this, Mi, void 0)));
      }
      isFetching(e) {
        return O(this, Ie).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return O(this, Rr).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = O(this, Ie).get(t.queryHash)) == null
          ? void 0
          : n.state.data;
      }
      ensureQueryData(e) {
        const t = this.defaultQueryOptions(e),
          n = O(this, Ie).build(this, t),
          r = n.state.data;
        return r === void 0
          ? this.fetchQuery(e)
          : (e.revalidateIfStale &&
              n.isStaleByTime(Vd(t.staleTime, n)) &&
              this.prefetchQuery(t),
            Promise.resolve(r));
      }
      getQueriesData(e) {
        return O(this, Ie)
          .findAll(e)
          .map(({ queryKey: t, state: n }) => {
            const r = n.data;
            return [t, r];
          });
      }
      setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({ queryKey: e }),
          o = O(this, Ie).get(r.queryHash),
          i = o == null ? void 0 : o.state.data,
          s = M_(t, i);
        if (s !== void 0)
          return O(this, Ie)
            .build(this, r)
            .setData(s, { ...n, manual: !0 });
      }
      setQueriesData(e, t, n) {
        return vt.batch(() =>
          O(this, Ie)
            .findAll(e)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)]),
        );
      }
      getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = O(this, Ie).get(t.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(e) {
        const t = O(this, Ie);
        vt.batch(() => {
          t.findAll(e).forEach((n) => {
            t.remove(n);
          });
        });
      }
      resetQueries(e, t) {
        const n = O(this, Ie);
        return vt.batch(
          () => (
            n.findAll(e).forEach((r) => {
              r.reset();
            }),
            this.refetchQueries({ type: "active", ...e }, t)
          ),
        );
      }
      cancelQueries(e, t = {}) {
        const n = { revert: !0, ...t },
          r = vt.batch(() =>
            O(this, Ie)
              .findAll(e)
              .map((o) => o.cancel(n)),
          );
        return Promise.all(r).then(un).catch(un);
      }
      invalidateQueries(e, t = {}) {
        return vt.batch(
          () => (
            O(this, Ie)
              .findAll(e)
              .forEach((n) => {
                n.invalidate();
              }),
            (e == null ? void 0 : e.refetchType) === "none"
              ? Promise.resolve()
              : this.refetchQueries(
                  {
                    ...e,
                    type:
                      (e == null ? void 0 : e.refetchType) ??
                      (e == null ? void 0 : e.type) ??
                      "active",
                  },
                  t,
                )
          ),
        );
      }
      refetchQueries(e, t = {}) {
        const n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
          r = vt.batch(() =>
            O(this, Ie)
              .findAll(e)
              .filter((o) => !o.isDisabled() && !o.isStatic())
              .map((o) => {
                let i = o.fetch(void 0, n);
                return (
                  n.throwOnError || (i = i.catch(un)),
                  o.state.fetchStatus === "paused" ? Promise.resolve() : i
                );
              }),
          );
        return Promise.all(r).then(un);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = O(this, Ie).build(this, t);
        return n.isStaleByTime(Vd(t.staleTime, n))
          ? n.fetch(t)
          : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(un).catch(un);
      }
      fetchInfiniteQuery(e) {
        return ((e._type = "infinite"), this.fetchQuery(e));
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(un).catch(un);
      }
      ensureInfiniteQueryData(e) {
        return ((e._type = "infinite"), this.ensureQueryData(e));
      }
      resumePausedMutations() {
        return Cu.isOnline()
          ? O(this, Rr).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return O(this, Ie);
      }
      getMutationCache() {
        return O(this, Rr);
      }
      getDefaultOptions() {
        return O(this, Tr);
      }
      setDefaultOptions(e) {
        te(this, Tr, e);
      }
      setQueryDefaults(e, t) {
        O(this, Ti).set(ua(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...O(this, Ti).values()],
          n = {};
        return (
          t.forEach((r) => {
            ca(e, r.queryKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        O(this, Ai).set(ua(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...O(this, Ai).values()],
          n = {};
        return (
          t.forEach((r) => {
            ca(e, r.mutationKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...O(this, Tr).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = Sp(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.queryFn === Ep && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...O(this, Tr).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        (O(this, Ie).clear(), O(this, Rr).clear());
      }
    }),
    (Ie = new WeakMap()),
    (Rr = new WeakMap()),
    (Tr = new WeakMap()),
    (Ti = new WeakMap()),
    (Ai = new WeakMap()),
    (Ar = new WeakMap()),
    (_i = new WeakMap()),
    (Mi = new WeakMap()),
    Q0),
  NS = h.createContext(void 0),
  pU = (e) => {
    const t = h.useContext(NS);
    if (!t)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return t;
  },
  eM = ({ client: e, children: t }) => (
    h.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e],
    ),
    E.jsx(NS.Provider, { value: e, children: t })
  );
const Cp = h.createContext({});
function bp(e) {
  const t = h.useRef(null);
  return (t.current === null && (t.current = e()), t.current);
}
const sc = h.createContext(null),
  Pp = h.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
class tM extends h.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      ((r.height = n.offsetHeight || 0),
        (r.width = n.offsetWidth || 0),
        (r.top = n.offsetTop),
        (r.left = n.offsetLeft));
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function nM({ children: e, isPresent: t }) {
  const n = h.useId(),
    r = h.useRef(null),
    o = h.useRef({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: i } = h.useContext(Pp);
  return (
    h.useInsertionEffect(() => {
      const { width: s, height: a, top: l, left: u } = o.current;
      if (t || !r.current || !s || !a) return;
      r.current.dataset.motionPopId = n;
      const c = document.createElement("style");
      return (
        i && (c.nonce = i),
        document.head.appendChild(c),
        c.sheet &&
          c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `),
        () => {
          document.head.removeChild(c);
        }
      );
    }, [t]),
    E.jsx(tM, {
      isPresent: t,
      childRef: r,
      sizeRef: o,
      children: h.cloneElement(e, { ref: r }),
    })
  );
}
const rM = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: o,
  presenceAffectsLayout: i,
  mode: s,
}) => {
  const a = bp(oM),
    l = h.useId(),
    u = h.useCallback(
      (f) => {
        a.set(f, !0);
        for (const d of a.values()) if (!d) return;
        r && r();
      },
      [a, r],
    ),
    c = h.useMemo(
      () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: o,
        onExitComplete: u,
        register: (f) => (a.set(f, !1), () => a.delete(f)),
      }),
      i ? [Math.random(), u] : [n, u],
    );
  return (
    h.useMemo(() => {
      a.forEach((f, d) => a.set(d, !1));
    }, [n]),
    h.useEffect(() => {
      !n && !a.size && r && r();
    }, [n]),
    s === "popLayout" && (e = E.jsx(nM, { isPresent: n, children: e })),
    E.jsx(sc.Provider, { value: c, children: e })
  );
};
function oM() {
  return new Map();
}
function LS(e = !0) {
  const t = h.useContext(sc);
  if (t === null) return [!0, null];
  const { isPresent: n, onExitComplete: r, register: o } = t,
    i = h.useId();
  h.useEffect(() => {
    e && o(i);
  }, [e]);
  const s = h.useCallback(() => e && r && r(i), [i, r, e]);
  return !n && r ? [!1, s] : [!0];
}
const gl = (e) => e.key || "";
function Ay(e) {
  const t = [];
  return (
    h.Children.forEach(e, (n) => {
      h.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const Rp = typeof window < "u",
  jS = Rp ? h.useLayoutEffect : h.useEffect,
  Tp = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    presenceAffectsLayout: o = !0,
    mode: i = "sync",
    propagate: s = !1,
  }) => {
    const [a, l] = LS(s),
      u = h.useMemo(() => Ay(e), [e]),
      c = s && !a ? [] : u.map(gl),
      f = h.useRef(!0),
      d = h.useRef(u),
      m = bp(() => new Map()),
      [v, p] = h.useState(u),
      [w, g] = h.useState(u);
    jS(() => {
      ((f.current = !1), (d.current = u));
      for (let S = 0; S < w.length; S++) {
        const b = gl(w[S]);
        c.includes(b) ? m.delete(b) : m.get(b) !== !0 && m.set(b, !1);
      }
    }, [w, c.length, c.join("-")]);
    const y = [];
    if (u !== v) {
      let S = [...u];
      for (let b = 0; b < w.length; b++) {
        const T = w[b],
          C = gl(T);
        c.includes(C) || (S.splice(b, 0, T), y.push(T));
      }
      (i === "wait" && y.length && (S = y), g(Ay(S)), p(u));
      return;
    }
    const { forceRender: x } = h.useContext(Cp);
    return E.jsx(E.Fragment, {
      children: w.map((S) => {
        const b = gl(S),
          T = s && !a ? !1 : u === w || c.includes(b),
          C = () => {
            if (m.has(b)) m.set(b, !0);
            else return;
            let R = !0;
            (m.forEach((L) => {
              L || (R = !1);
            }),
              R &&
                (x == null || x(),
                g(d.current),
                s && (l == null || l()),
                r && r()));
          };
        return E.jsx(
          rM,
          {
            isPresent: T,
            initial: !f.current || n ? void 0 : !1,
            custom: T ? void 0 : t,
            presenceAffectsLayout: o,
            mode: i,
            onExitComplete: T ? void 0 : C,
            children: S,
          },
          b,
        );
      }),
    });
  },
  Vt = (e) => e;
let IS = Vt;
function Ap(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Fi = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  Jn = (e) => e * 1e3,
  er = (e) => e / 1e3,
  iM = { useManualTiming: !1 };
function sM(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    o = !1;
  const i = new WeakSet();
  let s = { delta: 0, timestamp: 0, isProcessing: !1 };
  function a(u) {
    (i.has(u) && (l.schedule(u), e()), u(s));
  }
  const l = {
    schedule: (u, c = !1, f = !1) => {
      const m = f && r ? t : n;
      return (c && i.add(u), m.has(u) || m.add(u), u);
    },
    cancel: (u) => {
      (n.delete(u), i.delete(u));
    },
    process: (u) => {
      if (((s = u), r)) {
        o = !0;
        return;
      }
      ((r = !0),
        ([t, n] = [n, t]),
        t.forEach(a),
        t.clear(),
        (r = !1),
        o && ((o = !1), l.process(u)));
    },
  };
  return l;
}
const yl = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  aM = 40;
function FS(e, t) {
  let n = !1,
    r = !0;
  const o = { delta: 0, timestamp: 0, isProcessing: !1 },
    i = () => (n = !0),
    s = yl.reduce((g, y) => ((g[y] = sM(i)), g), {}),
    {
      read: a,
      resolveKeyframes: l,
      update: u,
      preRender: c,
      render: f,
      postRender: d,
    } = s,
    m = () => {
      const g = performance.now();
      ((n = !1),
        (o.delta = r ? 1e3 / 60 : Math.max(Math.min(g - o.timestamp, aM), 1)),
        (o.timestamp = g),
        (o.isProcessing = !0),
        a.process(o),
        l.process(o),
        u.process(o),
        c.process(o),
        f.process(o),
        d.process(o),
        (o.isProcessing = !1),
        n && t && ((r = !1), e(m)));
    },
    v = () => {
      ((n = !0), (r = !0), o.isProcessing || e(m));
    };
  return {
    schedule: yl.reduce((g, y) => {
      const x = s[y];
      return (
        (g[y] = (S, b = !1, T = !1) => (n || v(), x.schedule(S, b, T))),
        g
      );
    }, {}),
    cancel: (g) => {
      for (let y = 0; y < yl.length; y++) s[yl[y]].cancel(g);
    },
    state: o,
    steps: s,
  };
}
const {
    schedule: Ae,
    cancel: $r,
    state: st,
    steps: ff,
  } = FS(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Vt, !0),
  VS = h.createContext({ strict: !1 }),
  _y = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Vi = {};
for (const e in _y) Vi[e] = { isEnabled: (t) => _y[e].some((n) => !!t[n]) };
function lM(e) {
  for (const t in e) Vi[t] = { ...Vi[t], ...e[t] };
}
const uM = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function bu(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    uM.has(e)
  );
}
let BS = (e) => !bu(e);
function cM(e) {
  e && (BS = (t) => (t.startsWith("on") ? !bu(t) : e(t)));
}
try {
  cM(require("@emotion/is-prop-valid").default);
} catch {}
function fM(e, t, n) {
  const r = {};
  for (const o in e)
    (o === "values" && typeof e.values == "object") ||
      ((BS(o) ||
        (n === !0 && bu(o)) ||
        (!t && !bu(o)) ||
        (e.draggable && o.startsWith("onDrag"))) &&
        (r[o] = e[o]));
  return r;
}
function dM(e) {
  if (typeof Proxy > "u") return e;
  const t = new Map(),
    n = (...r) => e(...r);
  return new Proxy(n, {
    get: (r, o) =>
      o === "create" ? e : (t.has(o) || t.set(o, e(o)), t.get(o)),
  });
}
const ac = h.createContext({});
function fa(e) {
  return typeof e == "string" || Array.isArray(e);
}
function lc(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const _p = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Mp = ["initial", ..._p];
function uc(e) {
  return lc(e.animate) || Mp.some((t) => fa(e[t]));
}
function US(e) {
  return !!(uc(e) || e.variants);
}
function hM(e, t) {
  if (uc(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || fa(n) ? n : void 0,
      animate: fa(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function pM(e) {
  const { initial: t, animate: n } = hM(e, h.useContext(ac));
  return h.useMemo(() => ({ initial: t, animate: n }), [My(t), My(n)]);
}
function My(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const mM = Symbol.for("motionComponentSymbol");
function li(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function gM(e, t, n) {
  return h.useCallback(
    (r) => {
      (r && e.onMount && e.onMount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : li(n) && (n.current = r)));
    },
    [t],
  );
}
const kp = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  yM = "framerAppearId",
  $S = "data-" + kp(yM),
  { schedule: Dp } = FS(queueMicrotask, !1),
  zS = h.createContext({});
function vM(e, t, n, r, o) {
  var i, s;
  const { visualElement: a } = h.useContext(ac),
    l = h.useContext(VS),
    u = h.useContext(sc),
    c = h.useContext(Pp).reducedMotion,
    f = h.useRef(null);
  ((r = r || l.renderer),
    !f.current &&
      r &&
      (f.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: u,
        blockInitialAnimation: u ? u.initial === !1 : !1,
        reducedMotionConfig: c,
      })));
  const d = f.current,
    m = h.useContext(zS);
  d &&
    !d.projection &&
    o &&
    (d.type === "html" || d.type === "svg") &&
    wM(f.current, n, o, m);
  const v = h.useRef(!1);
  h.useInsertionEffect(() => {
    d && v.current && d.update(n, u);
  });
  const p = n[$S],
    w = h.useRef(
      !!p &&
        !(
          !((i = window.MotionHandoffIsComplete) === null || i === void 0) &&
          i.call(window, p)
        ) &&
        ((s = window.MotionHasOptimisedAnimation) === null || s === void 0
          ? void 0
          : s.call(window, p)),
    );
  return (
    jS(() => {
      d &&
        ((v.current = !0),
        (window.MotionIsMounted = !0),
        d.updateFeatures(),
        Dp.render(d.render),
        w.current && d.animationState && d.animationState.animateChanges());
    }),
    h.useEffect(() => {
      d &&
        (!w.current && d.animationState && d.animationState.animateChanges(),
        w.current &&
          (queueMicrotask(() => {
            var g;
            (g = window.MotionHandoffMarkAsComplete) === null ||
              g === void 0 ||
              g.call(window, p);
          }),
          (w.current = !1)));
    }),
    d
  );
}
function wM(e, t, n, r) {
  const {
    layoutId: o,
    layout: i,
    drag: s,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: u,
  } = t;
  ((e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : WS(e.parent),
  )),
    e.projection.setOptions({
      layoutId: o,
      layout: i,
      alwaysMeasureLayout: !!s || (a && li(a)),
      visualElement: e,
      animationType: typeof i == "string" ? i : "both",
      initialPromotionConfig: r,
      layoutScroll: l,
      layoutRoot: u,
    }));
}
function WS(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : WS(e.parent);
}
function xM({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: o,
}) {
  var i, s;
  e && lM(e);
  function a(u, c) {
    let f;
    const d = { ...h.useContext(Pp), ...u, layoutId: SM(u) },
      { isStatic: m } = d,
      v = pM(u),
      p = r(u, m);
    if (!m && Rp) {
      EM();
      const w = CM(d);
      ((f = w.MeasureLayout),
        (v.visualElement = vM(o, p, d, t, w.ProjectionNode)));
    }
    return E.jsxs(ac.Provider, {
      value: v,
      children: [
        f && v.visualElement
          ? E.jsx(f, { visualElement: v.visualElement, ...d })
          : null,
        n(o, u, gM(p, v.visualElement, c), p, m, v.visualElement),
      ],
    });
  }
  a.displayName = `motion.${typeof o == "string" ? o : `create(${(s = (i = o.displayName) !== null && i !== void 0 ? i : o.name) !== null && s !== void 0 ? s : ""})`}`;
  const l = h.forwardRef(a);
  return ((l[mM] = o), l);
}
function SM({ layoutId: e }) {
  const t = h.useContext(Cp).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function EM(e, t) {
  h.useContext(VS).strict;
}
function CM(e) {
  const { drag: t, layout: n } = Vi;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
const bM = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Op(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(bM.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function ky(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        ((t[0][r] = n.get()), (t[1][r] = n.getVelocity()));
      }),
    t
  );
}
function Np(e, t, n, r) {
  if (typeof t == "function") {
    const [o, i] = ky(r);
    t = t(n !== void 0 ? n : e.custom, o, i);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [o, i] = ky(r);
    t = t(n !== void 0 ? n : e.custom, o, i);
  }
  return t;
}
const $d = (e) => Array.isArray(e),
  PM = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  RM = (e) => ($d(e) ? e[e.length - 1] || 0 : e),
  mt = (e) => !!(e && e.getVelocity);
function Bl(e) {
  const t = mt(e) ? e.get() : e;
  return PM(t) ? t.toValue() : t;
}
function TM(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n },
  r,
  o,
  i,
) {
  const s = { latestValues: AM(r, o, i, e), renderState: t() };
  return (
    n &&
      ((s.onMount = (a) => n({ props: r, current: a, ...s })),
      (s.onUpdate = (a) => n(a))),
    s
  );
}
const HS = (e) => (t, n) => {
  const r = h.useContext(ac),
    o = h.useContext(sc),
    i = () => TM(e, t, r, o);
  return n ? i() : bp(i);
};
function AM(e, t, n, r) {
  const o = {},
    i = r(e, {});
  for (const d in i) o[d] = Bl(i[d]);
  let { initial: s, animate: a } = e;
  const l = uc(e),
    u = US(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || s === !1;
  const f = c ? a : s;
  if (f && typeof f != "boolean" && !lc(f)) {
    const d = Array.isArray(f) ? f : [f];
    for (let m = 0; m < d.length; m++) {
      const v = Np(e, d[m]);
      if (v) {
        const { transitionEnd: p, transition: w, ...g } = v;
        for (const y in g) {
          let x = g[y];
          if (Array.isArray(x)) {
            const S = c ? x.length - 1 : 0;
            x = x[S];
          }
          x !== null && (o[y] = x);
        }
        for (const y in p) o[y] = p[y];
      }
    }
  }
  return o;
}
const Xi = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Fo = new Set(Xi),
  KS = (e) => (t) => typeof t == "string" && t.startsWith(e),
  GS = KS("--"),
  _M = KS("var(--"),
  Lp = (e) => (_M(e) ? MM.test(e.split("/*")[0].trim()) : !1),
  MM =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  qS = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  ir = (e, t, n) => (n > t ? t : n < e ? e : n),
  Yi = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  da = { ...Yi, transform: (e) => ir(0, 1, e) },
  vl = { ...Yi, default: 1 },
  Aa = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  yr = Aa("deg"),
  Nn = Aa("%"),
  ee = Aa("px"),
  kM = Aa("vh"),
  DM = Aa("vw"),
  Dy = {
    ...Nn,
    parse: (e) => Nn.parse(e) / 100,
    transform: (e) => Nn.transform(e * 100),
  },
  OM = {
    borderWidth: ee,
    borderTopWidth: ee,
    borderRightWidth: ee,
    borderBottomWidth: ee,
    borderLeftWidth: ee,
    borderRadius: ee,
    radius: ee,
    borderTopLeftRadius: ee,
    borderTopRightRadius: ee,
    borderBottomRightRadius: ee,
    borderBottomLeftRadius: ee,
    width: ee,
    maxWidth: ee,
    height: ee,
    maxHeight: ee,
    top: ee,
    right: ee,
    bottom: ee,
    left: ee,
    padding: ee,
    paddingTop: ee,
    paddingRight: ee,
    paddingBottom: ee,
    paddingLeft: ee,
    margin: ee,
    marginTop: ee,
    marginRight: ee,
    marginBottom: ee,
    marginLeft: ee,
    backgroundPositionX: ee,
    backgroundPositionY: ee,
  },
  NM = {
    rotate: yr,
    rotateX: yr,
    rotateY: yr,
    rotateZ: yr,
    scale: vl,
    scaleX: vl,
    scaleY: vl,
    scaleZ: vl,
    skew: yr,
    skewX: yr,
    skewY: yr,
    distance: ee,
    translateX: ee,
    translateY: ee,
    translateZ: ee,
    x: ee,
    y: ee,
    z: ee,
    perspective: ee,
    transformPerspective: ee,
    opacity: da,
    originX: Dy,
    originY: Dy,
    originZ: ee,
  },
  Oy = { ...Yi, transform: Math.round },
  jp = {
    ...OM,
    ...NM,
    zIndex: Oy,
    size: ee,
    fillOpacity: da,
    strokeOpacity: da,
    numOctaves: Oy,
  },
  LM = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  jM = Xi.length;
function IM(e, t, n) {
  let r = "",
    o = !0;
  for (let i = 0; i < jM; i++) {
    const s = Xi[i],
      a = e[s];
    if (a === void 0) continue;
    let l = !0;
    if (
      (typeof a == "number"
        ? (l = a === (s.startsWith("scale") ? 1 : 0))
        : (l = parseFloat(a) === 0),
      !l || n)
    ) {
      const u = qS(a, jp[s]);
      if (!l) {
        o = !1;
        const c = LM[s] || s;
        r += `${c}(${u}) `;
      }
      n && (t[s] = u);
    }
  }
  return ((r = r.trim()), n ? (r = n(t, o ? "" : r)) : o && (r = "none"), r);
}
function Ip(e, t, n) {
  const { style: r, vars: o, transformOrigin: i } = e;
  let s = !1,
    a = !1;
  for (const l in t) {
    const u = t[l];
    if (Fo.has(l)) {
      s = !0;
      continue;
    } else if (GS(l)) {
      o[l] = u;
      continue;
    } else {
      const c = qS(u, jp[l]);
      l.startsWith("origin") ? ((a = !0), (i[l] = c)) : (r[l] = c);
    }
  }
  if (
    (t.transform ||
      (s || n
        ? (r.transform = IM(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    a)
  ) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = i;
    r.transformOrigin = `${l} ${u} ${c}`;
  }
}
const FM = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  VM = { offset: "strokeDashoffset", array: "strokeDasharray" };
function BM(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? FM : VM;
  e[i.offset] = ee.transform(-r);
  const s = ee.transform(t),
    a = ee.transform(n);
  e[i.array] = `${s} ${a}`;
}
function Ny(e, t, n) {
  return typeof e == "string" ? e : ee.transform(t + n * e);
}
function UM(e, t, n) {
  const r = Ny(t, e.x, e.width),
    o = Ny(n, e.y, e.height);
  return `${r} ${o}`;
}
function Fp(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: o,
    originY: i,
    pathLength: s,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...u
  },
  c,
  f,
) {
  if ((Ip(e, u, f), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  ((e.attrs = e.style), (e.style = {}));
  const { attrs: d, style: m, dimensions: v } = e;
  (d.transform && (v && (m.transform = d.transform), delete d.transform),
    v &&
      (o !== void 0 || i !== void 0 || m.transform) &&
      (m.transformOrigin = UM(
        v,
        o !== void 0 ? o : 0.5,
        i !== void 0 ? i : 0.5,
      )),
    t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    s !== void 0 && BM(d, s, a, l, !1));
}
const Vp = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  QS = () => ({ ...Vp(), attrs: {} }),
  Bp = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function XS(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const i in n) e.style.setProperty(i, n[i]);
}
const YS = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function ZS(e, t, n, r) {
  XS(e, t, void 0, r);
  for (const o in t.attrs) e.setAttribute(YS.has(o) ? o : kp(o), t.attrs[o]);
}
const Pu = {};
function $M(e) {
  Object.assign(Pu, e);
}
function JS(e, { layout: t, layoutId: n }) {
  return (
    Fo.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!Pu[e] || e === "opacity"))
  );
}
function Up(e, t, n) {
  var r;
  const { style: o } = e,
    i = {};
  for (const s in o)
    (mt(o[s]) ||
      (t.style && mt(t.style[s])) ||
      JS(s, e) ||
      ((r = n == null ? void 0 : n.getValue(s)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (i[s] = o[s]);
  return i;
}
function e1(e, t, n) {
  const r = Up(e, t, n);
  for (const o in e)
    if (mt(e[o]) || mt(t[o])) {
      const i =
        Xi.indexOf(o) !== -1
          ? "attr" + o.charAt(0).toUpperCase() + o.substring(1)
          : o;
      r[i] = e[o];
    }
  return r;
}
function zM(e, t) {
  try {
    t.dimensions =
      typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect();
  } catch {
    t.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
}
const Ly = ["x", "y", "width", "height", "cx", "cy", "r"],
  WM = {
    useVisualState: HS({
      scrapeMotionValuesFromProps: e1,
      createRenderState: QS,
      onUpdate: ({
        props: e,
        prevProps: t,
        current: n,
        renderState: r,
        latestValues: o,
      }) => {
        if (!n) return;
        let i = !!e.drag;
        if (!i) {
          for (const a in o)
            if (Fo.has(a)) {
              i = !0;
              break;
            }
        }
        if (!i) return;
        let s = !t;
        if (t)
          for (let a = 0; a < Ly.length; a++) {
            const l = Ly[a];
            e[l] !== t[l] && (s = !0);
          }
        s &&
          Ae.read(() => {
            (zM(n, r),
              Ae.render(() => {
                (Fp(r, o, Bp(n.tagName), e.transformTemplate), ZS(n, r));
              }));
          });
      },
    }),
  },
  HM = {
    useVisualState: HS({
      scrapeMotionValuesFromProps: Up,
      createRenderState: Vp,
    }),
  };
function t1(e, t, n) {
  for (const r in t) !mt(t[r]) && !JS(r, n) && (e[r] = t[r]);
}
function KM({ transformTemplate: e }, t) {
  return h.useMemo(() => {
    const n = Vp();
    return (Ip(n, t, e), Object.assign({}, n.vars, n.style));
  }, [t]);
}
function GM(e, t) {
  const n = e.style || {},
    r = {};
  return (t1(r, n, e), Object.assign(r, KM(e, t)), r);
}
function qM(e, t) {
  const n = {},
    r = GM(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
function QM(e, t, n, r) {
  const o = h.useMemo(() => {
    const i = QS();
    return (
      Fp(i, t, Bp(r), e.transformTemplate),
      { ...i.attrs, style: { ...i.style } }
    );
  }, [t]);
  if (e.style) {
    const i = {};
    (t1(i, e.style, e), (o.style = { ...i, ...o.style }));
  }
  return o;
}
function XM(e = !1) {
  return (n, r, o, { latestValues: i }, s) => {
    const l = (Op(n) ? QM : qM)(r, i, s, n),
      u = fM(r, typeof n == "string", e),
      c = n !== h.Fragment ? { ...u, ...l, ref: o } : {},
      { children: f } = r,
      d = h.useMemo(() => (mt(f) ? f.get() : f), [f]);
    return h.createElement(n, { ...c, children: d });
  };
}
function YM(e, t) {
  return function (r, { forwardMotionProps: o } = { forwardMotionProps: !1 }) {
    const s = {
      ...(Op(r) ? WM : HM),
      preloadedFeatures: e,
      useRender: XM(o),
      createVisualElement: t,
      Component: r,
    };
    return xM(s);
  };
}
function n1(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function cc(e, t, n) {
  const r = e.getProps();
  return Np(r, t, n !== void 0 ? n : r.custom, e);
}
const ZM = Ap(() => window.ScrollTimeline !== void 0);
class JM {
  constructor(t) {
    ((this.stop = () => this.runAll("stop")),
      (this.animations = t.filter(Boolean)));
  }
  get finished() {
    return Promise.all(
      this.animations.map((t) => ("finished" in t ? t.finished : t)),
    );
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
  }
  attachTimeline(t, n) {
    const r = this.animations.map((o) => {
      if (ZM() && o.attachTimeline) return o.attachTimeline(t);
      if (typeof n == "function") return n(o);
    });
    return () => {
      r.forEach((o, i) => {
        (o && o(), this.animations[i].stop());
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
class ek extends JM {
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
}
function $p(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const zd = 2e4;
function r1(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < zd; ) ((t += n), (r = e.next(t)));
  return t >= zd ? 1 / 0 : t;
}
function zp(e) {
  return typeof e == "function";
}
function jy(e, t) {
  ((e.timeline = t), (e.onfinish = null));
}
const Wp = (e) => Array.isArray(e) && typeof e[0] == "number",
  tk = { linearEasing: void 0 };
function nk(e, t) {
  const n = Ap(e);
  return () => {
    var r;
    return (r = tk[t]) !== null && r !== void 0 ? r : n();
  };
}
const Ru = nk(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  o1 = (e, t, n = 10) => {
    let r = "";
    const o = Math.max(Math.round(t / n), 2);
    for (let i = 0; i < o; i++) r += e(Fi(0, o - 1, i)) + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  };
function i1(e) {
  return !!(
    (typeof e == "function" && Ru()) ||
    !e ||
    (typeof e == "string" && (e in Wd || Ru())) ||
    Wp(e) ||
    (Array.isArray(e) && e.every(i1))
  );
}
const Rs = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Wd = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Rs([0, 0.65, 0.55, 1]),
    circOut: Rs([0.55, 0, 1, 0.45]),
    backIn: Rs([0.31, 0.01, 0.66, -0.59]),
    backOut: Rs([0.33, 1.53, 0.69, 0.99]),
  };
function s1(e, t) {
  if (e)
    return typeof e == "function" && Ru()
      ? o1(e, t)
      : Wp(e)
        ? Rs(e)
        : Array.isArray(e)
          ? e.map((n) => s1(n, t) || Wd.easeOut)
          : Wd[e];
}
const an = { x: !1, y: !1 };
function a1() {
  return an.x || an.y;
}
function rk(e, t, n) {
  var r;
  if (e instanceof Element) return [e];
  if (typeof e == "string") {
    let o = document;
    const i = (r = void 0) !== null && r !== void 0 ? r : o.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e);
}
function l1(e, t) {
  const n = rk(e),
    r = new AbortController(),
    o = { passive: !0, ...t, signal: r.signal };
  return [n, o, () => r.abort()];
}
function Iy(e) {
  return (t) => {
    t.pointerType === "touch" || a1() || e(t);
  };
}
function ok(e, t, n = {}) {
  const [r, o, i] = l1(e, n),
    s = Iy((a) => {
      const { target: l } = a,
        u = t(a);
      if (typeof u != "function" || !l) return;
      const c = Iy((f) => {
        (u(f), l.removeEventListener("pointerleave", c));
      });
      l.addEventListener("pointerleave", c, o);
    });
  return (
    r.forEach((a) => {
      a.addEventListener("pointerenter", s, o);
    }),
    i
  );
}
const u1 = (e, t) => (t ? (e === t ? !0 : u1(e, t.parentElement)) : !1),
  Hp = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1,
  ik = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function sk(e) {
  return ik.has(e.tagName) || e.tabIndex !== -1;
}
const Ts = new WeakSet();
function Fy(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function df(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }),
  );
}
const ak = (e, t) => {
  const n = e.currentTarget;
  if (!n) return;
  const r = Fy(() => {
    if (Ts.has(n)) return;
    df(n, "down");
    const o = Fy(() => {
        df(n, "up");
      }),
      i = () => df(n, "cancel");
    (n.addEventListener("keyup", o, t), n.addEventListener("blur", i, t));
  });
  (n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t));
};
function Vy(e) {
  return Hp(e) && !a1();
}
function lk(e, t, n = {}) {
  const [r, o, i] = l1(e, n),
    s = (a) => {
      const l = a.currentTarget;
      if (!Vy(a) || Ts.has(l)) return;
      Ts.add(l);
      const u = t(a),
        c = (m, v) => {
          (window.removeEventListener("pointerup", f),
            window.removeEventListener("pointercancel", d),
            !(!Vy(m) || !Ts.has(l)) &&
              (Ts.delete(l), typeof u == "function" && u(m, { success: v })));
        },
        f = (m) => {
          c(m, n.useGlobalTarget || u1(l, m.target));
        },
        d = (m) => {
          c(m, !1);
        };
      (window.addEventListener("pointerup", f, o),
        window.addEventListener("pointercancel", d, o));
    };
  return (
    r.forEach((a) => {
      (!sk(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0),
        (n.useGlobalTarget ? window : a).addEventListener("pointerdown", s, o),
        a.addEventListener("focus", (u) => ak(u, o), o));
    }),
    i
  );
}
function uk(e) {
  return e === "x" || e === "y"
    ? an[e]
      ? null
      : ((an[e] = !0),
        () => {
          an[e] = !1;
        })
    : an.x || an.y
      ? null
      : ((an.x = an.y = !0),
        () => {
          an.x = an.y = !1;
        });
}
const c1 = new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Xi,
]);
let Ul;
function ck() {
  Ul = void 0;
}
const Ln = {
  now: () => (
    Ul === void 0 &&
      Ln.set(
        st.isProcessing || iM.useManualTiming
          ? st.timestamp
          : performance.now(),
      ),
    Ul
  ),
  set: (e) => {
    ((Ul = e), queueMicrotask(ck));
  },
};
function Kp(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Gp(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class qp {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return (Kp(this.subscriptions, t), () => Gp(this.subscriptions, t));
  }
  notify(t, n, r) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1) this.subscriptions[0](t, n, r);
      else
        for (let i = 0; i < o; i++) {
          const s = this.subscriptions[i];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function f1(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const By = 30,
  fk = (e) => !isNaN(parseFloat(e));
class dk {
  constructor(t, n = {}) {
    ((this.version = "11.18.2"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, o = !0) => {
        const i = Ln.now();
        (this.updatedAt !== i && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          o &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current));
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner));
  }
  setCurrent(t) {
    ((this.current = t),
      (this.updatedAt = Ln.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = fk(this.current)));
  }
  setPrevFrameValue(t = this.current) {
    ((this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new qp());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          (r(),
            Ae.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    ((this.passiveEffect = t), (this.stopPassiveEffect = n));
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    (this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r));
  }
  jump(t, n = !0) {
    (this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = Ln.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > By
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, By);
    return f1(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        ((this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete &&
          this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    (this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function ha(e, t) {
  return new dk(e, t);
}
function hk(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, ha(n));
}
function pk(e, t) {
  const n = cc(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...i } = n || {};
  i = { ...i, ...r };
  for (const s in i) {
    const a = RM(i[s]);
    hk(e, s, a);
  }
}
function mk(e) {
  return !!(mt(e) && e.add);
}
function Hd(e, t) {
  const n = e.getValue("willChange");
  if (mk(n)) return n.add(t);
}
function d1(e) {
  return e.props[$S];
}
const h1 = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  gk = 1e-7,
  yk = 12;
function vk(e, t, n, r, o) {
  let i,
    s,
    a = 0;
  do ((s = t + (n - t) / 2), (i = h1(s, r, o) - e), i > 0 ? (n = s) : (t = s));
  while (Math.abs(i) > gk && ++a < yk);
  return s;
}
function _a(e, t, n, r) {
  if (e === t && n === r) return Vt;
  const o = (i) => vk(i, 0, 1, e, n);
  return (i) => (i === 0 || i === 1 ? i : h1(o(i), t, r));
}
const p1 = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  m1 = (e) => (t) => 1 - e(1 - t),
  g1 = _a(0.33, 1.53, 0.69, 0.99),
  Qp = m1(g1),
  y1 = p1(Qp),
  v1 = (e) =>
    (e *= 2) < 1 ? 0.5 * Qp(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Xp = (e) => 1 - Math.sin(Math.acos(e)),
  w1 = m1(Xp),
  x1 = p1(Xp),
  S1 = (e) => /^0[^.\s]+$/u.test(e);
function wk(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
      ? e === "none" || e === "0" || S1(e)
      : !0;
}
const Vs = (e) => Math.round(e * 1e5) / 1e5,
  Yp = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function xk(e) {
  return e == null;
}
const Sk =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Zp = (e, t) => (n) =>
    !!(
      (typeof n == "string" && Sk.test(n) && n.startsWith(e)) ||
      (t && !xk(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  E1 = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [o, i, s, a] = r.match(Yp);
    return {
      [e]: parseFloat(o),
      [t]: parseFloat(i),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  Ek = (e) => ir(0, 255, e),
  hf = { ...Yi, transform: (e) => Math.round(Ek(e)) },
  po = {
    test: Zp("rgb", "red"),
    parse: E1("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      hf.transform(e) +
      ", " +
      hf.transform(t) +
      ", " +
      hf.transform(n) +
      ", " +
      Vs(da.transform(r)) +
      ")",
  };
function Ck(e) {
  let t = "",
    n = "",
    r = "",
    o = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (o = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (o = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (o += o)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: o ? parseInt(o, 16) / 255 : 1,
    }
  );
}
const Kd = { test: Zp("#"), parse: Ck, transform: po.transform },
  ui = {
    test: Zp("hsl", "hue"),
    parse: E1("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      Nn.transform(Vs(t)) +
      ", " +
      Nn.transform(Vs(n)) +
      ", " +
      Vs(da.transform(r)) +
      ")",
  },
  dt = {
    test: (e) => po.test(e) || Kd.test(e) || ui.test(e),
    parse: (e) =>
      po.test(e) ? po.parse(e) : ui.test(e) ? ui.parse(e) : Kd.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
          ? po.transform(e)
          : ui.transform(e),
  },
  bk =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Pk(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(Yp)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(bk)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const C1 = "number",
  b1 = "color",
  Rk = "var",
  Tk = "var(",
  Uy = "${}",
  Ak =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function pa(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    o = [];
  let i = 0;
  const a = t
    .replace(
      Ak,
      (l) => (
        dt.test(l)
          ? (r.color.push(i), o.push(b1), n.push(dt.parse(l)))
          : l.startsWith(Tk)
            ? (r.var.push(i), o.push(Rk), n.push(l))
            : (r.number.push(i), o.push(C1), n.push(parseFloat(l))),
        ++i,
        Uy
      ),
    )
    .split(Uy);
  return { values: n, split: a, indexes: r, types: o };
}
function P1(e) {
  return pa(e).values;
}
function R1(e) {
  const { split: t, types: n } = pa(e),
    r = t.length;
  return (o) => {
    let i = "";
    for (let s = 0; s < r; s++)
      if (((i += t[s]), o[s] !== void 0)) {
        const a = n[s];
        a === C1
          ? (i += Vs(o[s]))
          : a === b1
            ? (i += dt.transform(o[s]))
            : (i += o[s]);
      }
    return i;
  };
}
const _k = (e) => (typeof e == "number" ? 0 : e);
function Mk(e) {
  const t = P1(e);
  return R1(e)(t.map(_k));
}
const zr = {
    test: Pk,
    parse: P1,
    createTransformer: R1,
    getAnimatableNone: Mk,
  },
  kk = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Dk(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(Yp) || [];
  if (!r) return e;
  const o = n.replace(r, "");
  let i = kk.has(t) ? 1 : 0;
  return (r !== n && (i *= 100), t + "(" + i + o + ")");
}
const Ok = /\b([a-z-]*)\(.*?\)/gu,
  Gd = {
    ...zr,
    getAnimatableNone: (e) => {
      const t = e.match(Ok);
      return t ? t.map(Dk).join(" ") : e;
    },
  },
  Nk = {
    ...jp,
    color: dt,
    backgroundColor: dt,
    outlineColor: dt,
    fill: dt,
    stroke: dt,
    borderColor: dt,
    borderTopColor: dt,
    borderRightColor: dt,
    borderBottomColor: dt,
    borderLeftColor: dt,
    filter: Gd,
    WebkitFilter: Gd,
  },
  Jp = (e) => Nk[e];
function T1(e, t) {
  let n = Jp(e);
  return (
    n !== Gd && (n = zr),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const Lk = new Set(["auto", "none", "0"]);
function jk(e, t, n) {
  let r = 0,
    o;
  for (; r < e.length && !o; ) {
    const i = e[r];
    (typeof i == "string" && !Lk.has(i) && pa(i).values.length && (o = e[r]),
      r++);
  }
  if (o && n) for (const i of t) e[i] = T1(n, o);
}
const $y = (e) => e === Yi || e === ee,
  zy = (e, t) => parseFloat(e.split(", ")[t]),
  Wy =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const o = r.match(/^matrix3d\((.+)\)$/u);
      if (o) return zy(o[1], t);
      {
        const i = r.match(/^matrix\((.+)\)$/u);
        return i ? zy(i[1], e) : 0;
      }
    },
  Ik = new Set(["x", "y", "z"]),
  Fk = Xi.filter((e) => !Ik.has(e));
function Vk(e) {
  const t = [];
  return (
    Fk.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const Bi = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Wy(4, 13),
  y: Wy(5, 14),
};
Bi.translateX = Bi.x;
Bi.translateY = Bi.y;
const bo = new Set();
let qd = !1,
  Qd = !1;
function A1() {
  if (Qd) {
    const e = Array.from(bo).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    (t.forEach((r) => {
      const o = Vk(r);
      o.length && (n.set(r, o), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const o = n.get(r);
        o &&
          o.forEach(([i, s]) => {
            var a;
            (a = r.getValue(i)) === null || a === void 0 || a.set(s);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      }));
  }
  ((Qd = !1), (qd = !1), bo.forEach((e) => e.complete()), bo.clear());
}
function _1() {
  bo.forEach((e) => {
    (e.readKeyframes(), e.needsMeasurement && (Qd = !0));
  });
}
function Bk() {
  (_1(), A1());
}
class em {
  constructor(t, n, r, o, i, s = !1) {
    ((this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = o),
      (this.element = i),
      (this.isAsync = s));
  }
  scheduleResolve() {
    ((this.isScheduled = !0),
      this.isAsync
        ? (bo.add(this),
          qd || ((qd = !0), Ae.read(_1), Ae.resolveKeyframes(A1)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: o,
    } = this;
    for (let i = 0; i < t.length; i++)
      if (t[i] === null)
        if (i === 0) {
          const s = o == null ? void 0 : o.get(),
            a = t[t.length - 1];
          if (s !== void 0) t[0] = s;
          else if (r && n) {
            const l = r.readValue(n, a);
            l != null && (t[0] = l);
          }
          (t[0] === void 0 && (t[0] = a), o && s === void 0 && o.set(t[0]));
        } else t[i] = t[i - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    ((this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      bo.delete(this));
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), bo.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const M1 = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  Uk = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function $k(e) {
  const t = Uk.exec(e);
  if (!t) return [,];
  const [, n, r, o] = t;
  return [`--${n ?? r}`, o];
}
function k1(e, t, n = 1) {
  const [r, o] = $k(e);
  if (!r) return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const s = i.trim();
    return M1(s) ? parseFloat(s) : s;
  }
  return Lp(o) ? k1(o, t, n + 1) : o;
}
const D1 = (e) => (t) => t.test(e),
  zk = { test: (e) => e === "auto", parse: (e) => e },
  O1 = [Yi, ee, Nn, yr, DM, kM, zk],
  Hy = (e) => O1.find(D1(e));
class N1 extends em {
  constructor(t, n, r, o, i) {
    super(t, n, r, o, i, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let u = t[l];
      if (typeof u == "string" && ((u = u.trim()), Lp(u))) {
        const c = k1(u, n.current);
        (c !== void 0 && (t[l] = c),
          l === t.length - 1 && (this.finalKeyframe = u));
      }
    }
    if ((this.resolveNoneKeyframes(), !c1.has(r) || t.length !== 2)) return;
    const [o, i] = t,
      s = Hy(o),
      a = Hy(i);
    if (s !== a)
      if ($y(s) && $y(a))
        for (let l = 0; l < t.length; l++) {
          const u = t[l];
          typeof u == "string" && (t[l] = parseFloat(u));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let o = 0; o < t.length; o++) wk(t[o]) && r.push(o);
    r.length && jk(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    (r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Bi[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current),
      )),
      (n[0] = this.measuredOrigin));
    const o = n[n.length - 1];
    o !== void 0 && t.getValue(r, o).jump(o, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: o } = this;
    if (!n || !n.current) return;
    const i = n.getValue(r);
    i && i.jump(this.measuredOrigin, !1);
    const s = o.length - 1,
      a = o[s];
    ((o[s] = Bi[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([l, u]) => {
          n.getValue(l).set(u);
        }),
      this.resolveNoneKeyframes());
  }
}
const Ky = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (zr.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function Wk(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function Hk(e, t, n, r) {
  const o = e[0];
  if (o === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const i = e[e.length - 1],
    s = Ky(o, t),
    a = Ky(i, t);
  return !s || !a ? !1 : Wk(e) || ((n === "spring" || zp(n)) && r);
}
const Kk = (e) => e !== null;
function fc(e, { repeat: t, repeatType: n = "loop" }, r) {
  const o = e.filter(Kk),
    i = t && n !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
  return !i || r === void 0 ? o[i] : r;
}
const Gk = 40;
class L1 {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: o = 0,
    repeatDelay: i = 0,
    repeatType: s = "loop",
    ...a
  }) {
    ((this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = Ln.now()),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: o,
        repeatDelay: i,
        repeatType: s,
        ...a,
      }),
      this.updateFinishedPromise());
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > Gk
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return (
      !this._resolved && !this.hasAttemptedResolve && Bk(),
      this._resolved
    );
  }
  onKeyframesResolved(t, n) {
    ((this.resolvedAt = Ln.now()), (this.hasAttemptedResolve = !0));
    const {
      name: r,
      type: o,
      velocity: i,
      delay: s,
      onComplete: a,
      onUpdate: l,
      isGenerator: u,
    } = this.options;
    if (!u && !Hk(t, r, o, i))
      if (s) this.options.duration = 0;
      else {
        (l && l(fc(t, this.options, n)),
          a && a(),
          this.resolveFinishedPromise());
        return;
      }
    const c = this.initPlayback(t, n);
    c !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...c }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  flatten() {
    ((this.options.type = "keyframes"), (this.options.ease = "linear"));
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
const De = (e, t, n) => e + (t - e) * n;
function pf(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  );
}
function qk({ hue: e, saturation: t, lightness: n, alpha: r }) {
  ((e /= 360), (t /= 100), (n /= 100));
  let o = 0,
    i = 0,
    s = 0;
  if (!t) o = i = s = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    ((o = pf(l, a, e + 1 / 3)), (i = pf(l, a, e)), (s = pf(l, a, e - 1 / 3)));
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
function Tu(e, t) {
  return (n) => (n > 0 ? t : e);
}
const mf = (e, t, n) => {
    const r = e * e,
      o = n * (t * t - r) + r;
    return o < 0 ? 0 : Math.sqrt(o);
  },
  Qk = [Kd, po, ui],
  Xk = (e) => Qk.find((t) => t.test(e));
function Gy(e) {
  const t = Xk(e);
  if (!t) return !1;
  let n = t.parse(e);
  return (t === ui && (n = qk(n)), n);
}
const qy = (e, t) => {
    const n = Gy(e),
      r = Gy(t);
    if (!n || !r) return Tu(e, t);
    const o = { ...n };
    return (i) => (
      (o.red = mf(n.red, r.red, i)),
      (o.green = mf(n.green, r.green, i)),
      (o.blue = mf(n.blue, r.blue, i)),
      (o.alpha = De(n.alpha, r.alpha, i)),
      po.transform(o)
    );
  },
  Yk = (e, t) => (n) => t(e(n)),
  Ma = (...e) => e.reduce(Yk),
  Xd = new Set(["none", "hidden"]);
function Zk(e, t) {
  return Xd.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function Jk(e, t) {
  return (n) => De(e, t, n);
}
function tm(e) {
  return typeof e == "number"
    ? Jk
    : typeof e == "string"
      ? Lp(e)
        ? Tu
        : dt.test(e)
          ? qy
          : nD
      : Array.isArray(e)
        ? j1
        : typeof e == "object"
          ? dt.test(e)
            ? qy
            : eD
          : Tu;
}
function j1(e, t) {
  const n = [...e],
    r = n.length,
    o = e.map((i, s) => tm(i)(i, t[s]));
  return (i) => {
    for (let s = 0; s < r; s++) n[s] = o[s](i);
    return n;
  };
}
function eD(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = tm(e[o])(e[o], t[o]));
  return (o) => {
    for (const i in r) n[i] = r[i](o);
    return n;
  };
}
function tD(e, t) {
  var n;
  const r = [],
    o = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const s = t.types[i],
      a = e.indexes[s][o[s]],
      l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    ((r[i] = l), o[s]++);
  }
  return r;
}
const nD = (e, t) => {
  const n = zr.createTransformer(t),
    r = pa(e),
    o = pa(t);
  return r.indexes.var.length === o.indexes.var.length &&
    r.indexes.color.length === o.indexes.color.length &&
    r.indexes.number.length >= o.indexes.number.length
    ? (Xd.has(e) && !o.values.length) || (Xd.has(t) && !r.values.length)
      ? Zk(e, t)
      : Ma(j1(tD(r, o), o.values), n)
    : Tu(e, t);
};
function I1(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? De(e, t, n)
    : tm(e)(e, t);
}
const rD = 5;
function F1(e, t, n) {
  const r = Math.max(t - rD, 0);
  return f1(n - e(r), t - r);
}
const Fe = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  gf = 0.001;
function oD({
  duration: e = Fe.duration,
  bounce: t = Fe.bounce,
  velocity: n = Fe.velocity,
  mass: r = Fe.mass,
}) {
  let o,
    i,
    s = 1 - t;
  ((s = ir(Fe.minDamping, Fe.maxDamping, s)),
    (e = ir(Fe.minDuration, Fe.maxDuration, er(e))),
    s < 1
      ? ((o = (u) => {
          const c = u * s,
            f = c * e,
            d = c - n,
            m = Yd(u, s),
            v = Math.exp(-f);
          return gf - (d / m) * v;
        }),
        (i = (u) => {
          const f = u * s * e,
            d = f * n + n,
            m = Math.pow(s, 2) * Math.pow(u, 2) * e,
            v = Math.exp(-f),
            p = Yd(Math.pow(u, 2), s);
          return ((-o(u) + gf > 0 ? -1 : 1) * ((d - m) * v)) / p;
        }))
      : ((o = (u) => {
          const c = Math.exp(-u * e),
            f = (u - n) * e + 1;
          return -gf + c * f;
        }),
        (i = (u) => {
          const c = Math.exp(-u * e),
            f = (n - u) * (e * e);
          return c * f;
        })));
  const a = 5 / e,
    l = sD(o, i, a);
  if (((e = Jn(e)), isNaN(l)))
    return { stiffness: Fe.stiffness, damping: Fe.damping, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const iD = 12;
function sD(e, t, n) {
  let r = n;
  for (let o = 1; o < iD; o++) r = r - e(r) / t(r);
  return r;
}
function Yd(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const aD = ["duration", "bounce"],
  lD = ["stiffness", "damping", "mass"];
function Qy(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function uD(e) {
  let t = {
    velocity: Fe.velocity,
    stiffness: Fe.stiffness,
    damping: Fe.damping,
    mass: Fe.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Qy(e, lD) && Qy(e, aD))
    if (e.visualDuration) {
      const n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        o = r * r,
        i = 2 * ir(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(o);
      t = { ...t, mass: Fe.mass, stiffness: o, damping: i };
    } else {
      const n = oD(e);
      ((t = { ...t, ...n, mass: Fe.mass }), (t.isResolvedFromDuration = !0));
    }
  return t;
}
function V1(e = Fe.visualDuration, t = Fe.bounce) {
  const n =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: r, restDelta: o } = n;
  const i = n.keyframes[0],
    s = n.keyframes[n.keyframes.length - 1],
    a = { done: !1, value: i },
    {
      stiffness: l,
      damping: u,
      mass: c,
      duration: f,
      velocity: d,
      isResolvedFromDuration: m,
    } = uD({ ...n, velocity: -er(n.velocity || 0) }),
    v = d || 0,
    p = u / (2 * Math.sqrt(l * c)),
    w = s - i,
    g = er(Math.sqrt(l / c)),
    y = Math.abs(w) < 5;
  (r || (r = y ? Fe.restSpeed.granular : Fe.restSpeed.default),
    o || (o = y ? Fe.restDelta.granular : Fe.restDelta.default));
  let x;
  if (p < 1) {
    const b = Yd(g, p);
    x = (T) => {
      const C = Math.exp(-p * g * T);
      return (
        s - C * (((v + p * g * w) / b) * Math.sin(b * T) + w * Math.cos(b * T))
      );
    };
  } else if (p === 1) x = (b) => s - Math.exp(-g * b) * (w + (v + g * w) * b);
  else {
    const b = g * Math.sqrt(p * p - 1);
    x = (T) => {
      const C = Math.exp(-p * g * T),
        R = Math.min(b * T, 300);
      return (
        s - (C * ((v + p * g * w) * Math.sinh(R) + b * w * Math.cosh(R))) / b
      );
    };
  }
  const S = {
    calculatedDuration: (m && f) || null,
    next: (b) => {
      const T = x(b);
      if (m) a.done = b >= f;
      else {
        let C = 0;
        p < 1 && (C = b === 0 ? Jn(v) : F1(x, b, T));
        const R = Math.abs(C) <= r,
          L = Math.abs(s - T) <= o;
        a.done = R && L;
      }
      return ((a.value = a.done ? s : T), a);
    },
    toString: () => {
      const b = Math.min(r1(S), zd),
        T = o1((C) => S.next(b * C).value, b, 30);
      return b + "ms " + T;
    },
  };
  return S;
}
function Xy({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: o = 10,
  bounceStiffness: i = 500,
  modifyTarget: s,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const f = e[0],
    d = { done: !1, value: f },
    m = (R) => (a !== void 0 && R < a) || (l !== void 0 && R > l),
    v = (R) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - R) < Math.abs(l - R)
          ? a
          : l;
  let p = n * t;
  const w = f + p,
    g = s === void 0 ? w : s(w);
  g !== w && (p = g - f);
  const y = (R) => -p * Math.exp(-R / r),
    x = (R) => g + y(R),
    S = (R) => {
      const L = y(R),
        D = x(R);
      ((d.done = Math.abs(L) <= u), (d.value = d.done ? g : D));
    };
  let b, T;
  const C = (R) => {
    m(d.value) &&
      ((b = R),
      (T = V1({
        keyframes: [d.value, v(d.value)],
        velocity: F1(x, R, d.value),
        damping: o,
        stiffness: i,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    C(0),
    {
      calculatedDuration: null,
      next: (R) => {
        let L = !1;
        return (
          !T && b === void 0 && ((L = !0), S(R), C(R)),
          b !== void 0 && R >= b ? T.next(R - b) : (!L && S(R), d)
        );
      },
    }
  );
}
const cD = _a(0.42, 0, 1, 1),
  fD = _a(0, 0, 0.58, 1),
  B1 = _a(0.42, 0, 0.58, 1),
  dD = (e) => Array.isArray(e) && typeof e[0] != "number",
  hD = {
    linear: Vt,
    easeIn: cD,
    easeInOut: B1,
    easeOut: fD,
    circIn: Xp,
    circInOut: x1,
    circOut: w1,
    backIn: Qp,
    backInOut: y1,
    backOut: g1,
    anticipate: v1,
  },
  Yy = (e) => {
    if (Wp(e)) {
      IS(e.length === 4);
      const [t, n, r, o] = e;
      return _a(t, n, r, o);
    } else if (typeof e == "string") return hD[e];
    return e;
  };
function pD(e, t, n) {
  const r = [],
    o = n || I1,
    i = e.length - 1;
  for (let s = 0; s < i; s++) {
    let a = o(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || Vt : t;
      a = Ma(l, a);
    }
    r.push(a);
  }
  return r;
}
function mD(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const i = e.length;
  if ((IS(i === t.length), i === 1)) return () => t[0];
  if (i === 2 && t[0] === t[1]) return () => t[1];
  const s = e[0] === e[1];
  e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = pD(t, r, o),
    l = a.length,
    u = (c) => {
      if (s && c < e[0]) return t[0];
      let f = 0;
      if (l > 1) for (; f < e.length - 2 && !(c < e[f + 1]); f++);
      const d = Fi(e[f], e[f + 1], c);
      return a[f](d);
    };
  return n ? (c) => u(ir(e[0], e[i - 1], c)) : u;
}
function gD(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = Fi(0, t, r);
    e.push(De(n, 1, o));
  }
}
function yD(e) {
  const t = [0];
  return (gD(t, e.length - 1), t);
}
function vD(e, t) {
  return e.map((n) => n * t);
}
function wD(e, t) {
  return e.map(() => t || B1).splice(0, e.length - 1);
}
function Au({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const o = dD(r) ? r.map(Yy) : Yy(r),
    i = { done: !1, value: t[0] },
    s = vD(n && n.length === t.length ? n : yD(t), e),
    a = mD(s, t, { ease: Array.isArray(o) ? o : wD(t, o) });
  return {
    calculatedDuration: e,
    next: (l) => ((i.value = a(l)), (i.done = l >= e), i),
  };
}
const xD = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => Ae.update(t, !0),
      stop: () => $r(t),
      now: () => (st.isProcessing ? st.timestamp : Ln.now()),
    };
  },
  SD = { decay: Xy, inertia: Xy, tween: Au, keyframes: Au, spring: V1 },
  ED = (e) => e / 100;
class nm extends L1 {
  constructor(t) {
    (super(t),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: l } = this.options;
        l && l();
      }));
    const { name: n, motionValue: r, element: o, keyframes: i } = this.options,
      s = (o == null ? void 0 : o.KeyframeResolver) || em,
      a = (l, u) => this.onKeyframesResolved(l, u);
    ((this.resolver = new s(i, a, n, r, o)), this.resolver.scheduleResolve());
  }
  flatten() {
    (super.flatten(),
      this._resolved &&
        Object.assign(
          this._resolved,
          this.initPlayback(this._resolved.keyframes),
        ));
  }
  initPlayback(t) {
    const {
        type: n = "keyframes",
        repeat: r = 0,
        repeatDelay: o = 0,
        repeatType: i,
        velocity: s = 0,
      } = this.options,
      a = zp(n) ? n : SD[n] || Au;
    let l, u;
    a !== Au &&
      typeof t[0] != "number" &&
      ((l = Ma(ED, I1(t[0], t[1]))), (t = [0, 100]));
    const c = a({ ...this.options, keyframes: t });
    (i === "mirror" &&
      (u = a({ ...this.options, keyframes: [...t].reverse(), velocity: -s })),
      c.calculatedDuration === null && (c.calculatedDuration = r1(c)));
    const { calculatedDuration: f } = c,
      d = f + o,
      m = d * (r + 1) - o;
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: l,
      calculatedDuration: f,
      resolvedDuration: d,
      totalDuration: m,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    (this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState));
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: R } = this.options;
      return { done: !0, value: R[R.length - 1] };
    }
    const {
      finalKeyframe: o,
      generator: i,
      mirroredGenerator: s,
      mapPercentToKeyframes: a,
      keyframes: l,
      calculatedDuration: u,
      totalDuration: c,
      resolvedDuration: f,
    } = r;
    if (this.startTime === null) return i.next(0);
    const {
      delay: d,
      repeat: m,
      repeatType: v,
      repeatDelay: p,
      onUpdate: w,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - c / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = Math.round(t - this.startTime) * this.speed));
    const g = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
      y = this.speed >= 0 ? g < 0 : g > c;
    ((this.currentTime = Math.max(g, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = c));
    let x = this.currentTime,
      S = i;
    if (m) {
      const R = Math.min(this.currentTime, c) / f;
      let L = Math.floor(R),
        D = R % 1;
      (!D && R >= 1 && (D = 1),
        D === 1 && L--,
        (L = Math.min(L, m + 1)),
        !!(L % 2) &&
          (v === "reverse"
            ? ((D = 1 - D), p && (D -= p / f))
            : v === "mirror" && (S = s)),
        (x = ir(0, 1, D) * f));
    }
    const b = y ? { done: !1, value: l[0] } : S.next(x);
    a && (b.value = a(b.value));
    let { done: T } = b;
    !y &&
      u !== null &&
      (T = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const C =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && T));
    return (
      C && o !== void 0 && (b.value = fc(l, this.options, o)),
      w && w(b.value),
      C && this.finish(),
      b
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? er(t.calculatedDuration) : 0;
  }
  get time() {
    return er(this.currentTime);
  }
  set time(t) {
    ((t = Jn(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed));
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    ((this.playbackSpeed = t), n && (this.time = er(this.currentTime)));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = xD, onPlay: n, startTime: r } = this.options;
    (this.driver || (this.driver = t((i) => this.tick(i))), n && n());
    const o = this.driver.now();
    (this.holdTime !== null
      ? (this.startTime = o - this.holdTime)
      : this.startTime
        ? this.state === "finished" && (this.startTime = o)
        : (this.startTime = r ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start());
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    ((this.state = "paused"),
      (this.holdTime =
        (t = this.currentTime) !== null && t !== void 0 ? t : 0));
  }
  complete() {
    (this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null));
  }
  finish() {
    (this.teardown(), (this.state = "finished"));
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    (this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise());
  }
  teardown() {
    ((this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel());
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return ((this.startTime = 0), this.tick(t, !0));
  }
}
const CD = new Set(["opacity", "clipPath", "filter", "transform"]);
function bD(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: o = 300,
    repeat: i = 0,
    repeatType: s = "loop",
    ease: a = "easeInOut",
    times: l,
  } = {},
) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = s1(a, o);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: o,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: i + 1,
      direction: s === "reverse" ? "alternate" : "normal",
    })
  );
}
const PD = Ap(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  _u = 10,
  RD = 2e4;
function TD(e) {
  return zp(e.type) || e.type === "spring" || !i1(e.ease);
}
function AD(e, t) {
  const n = new nm({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const o = [];
  let i = 0;
  for (; !r.done && i < RD; ) ((r = n.sample(i)), o.push(r.value), (i += _u));
  return { times: void 0, keyframes: o, duration: i - _u, ease: "linear" };
}
const U1 = { anticipate: v1, backInOut: y1, circInOut: x1 };
function _D(e) {
  return e in U1;
}
class Zy extends L1 {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: o, keyframes: i } = this.options;
    ((this.resolver = new N1(
      i,
      (s, a) => this.onKeyframesResolved(s, a),
      n,
      r,
      o,
    )),
      this.resolver.scheduleResolve());
  }
  initPlayback(t, n) {
    let {
      duration: r = 300,
      times: o,
      ease: i,
      type: s,
      motionValue: a,
      name: l,
      startTime: u,
    } = this.options;
    if (!a.owner || !a.owner.current) return !1;
    if (
      (typeof i == "string" && Ru() && _D(i) && (i = U1[i]), TD(this.options))
    ) {
      const {
          onComplete: f,
          onUpdate: d,
          motionValue: m,
          element: v,
          ...p
        } = this.options,
        w = AD(t, p);
      ((t = w.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (r = w.duration),
        (o = w.times),
        (i = w.ease),
        (s = "keyframes"));
    }
    const c = bD(a.owner.current, l, t, {
      ...this.options,
      duration: r,
      times: o,
      ease: i,
    });
    return (
      (c.startTime = u ?? this.calcStartTime()),
      this.pendingTimeline
        ? (jy(c, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (c.onfinish = () => {
            const { onComplete: f } = this.options;
            (a.set(fc(t, this.options, n)),
              f && f(),
              this.cancel(),
              this.resolveFinishedPromise());
          }),
      { animation: c, duration: r, times: o, type: s, ease: i, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return er(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return er(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = Jn(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t) return null;
    const { animation: n } = t;
    return n.startTime;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return Vt;
      const { animation: r } = n;
      jy(r, t);
    }
    return Vt;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    (n.playState === "finished" && this.updateFinishedPromise(), n.play());
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    (this.resolveFinishedPromise(), this.updateFinishedPromise());
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: n,
      keyframes: r,
      duration: o,
      type: i,
      ease: s,
      times: a,
    } = t;
    if (n.playState === "idle" || n.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: u,
          onUpdate: c,
          onComplete: f,
          element: d,
          ...m
        } = this.options,
        v = new nm({
          ...m,
          keyframes: r,
          duration: o,
          type: i,
          ease: s,
          times: a,
          isGenerator: !0,
        }),
        p = Jn(this.time);
      u.setWithVelocity(v.sample(p - _u).value, v.sample(p).value, _u);
    }
    const { onStop: l } = this.options;
    (l && l(), this.cancel());
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: o,
      repeatType: i,
      damping: s,
      type: a,
    } = t;
    if (!n || !n.owner || !(n.owner.current instanceof HTMLElement)) return !1;
    const { onUpdate: l, transformTemplate: u } = n.owner.getProps();
    return (
      PD() &&
      r &&
      CD.has(r) &&
      !l &&
      !u &&
      !o &&
      i !== "mirror" &&
      s !== 0 &&
      a !== "inertia"
    );
  }
}
const MD = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  kD = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  DD = { type: "keyframes", duration: 0.8 },
  OD = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  ND = (e, { keyframes: t }) =>
    t.length > 2
      ? DD
      : Fo.has(e)
        ? e.startsWith("scale")
          ? kD(t[1])
          : MD
        : OD;
function LD({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: o,
  repeat: i,
  repeatType: s,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
const rm =
  (e, t, n, r = {}, o, i) =>
  (s) => {
    const a = $p(r, e) || {},
      l = a.delay || r.delay || 0;
    let { elapsed: u = 0 } = r;
    u = u - Jn(l);
    let c = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...a,
      delay: -u,
      onUpdate: (d) => {
        (t.set(d), a.onUpdate && a.onUpdate(d));
      },
      onComplete: () => {
        (s(), a.onComplete && a.onComplete());
      },
      name: e,
      motionValue: t,
      element: i ? void 0 : o,
    };
    (LD(a) || (c = { ...c, ...ND(e, c) }),
      c.duration && (c.duration = Jn(c.duration)),
      c.repeatDelay && (c.repeatDelay = Jn(c.repeatDelay)),
      c.from !== void 0 && (c.keyframes[0] = c.from));
    let f = !1;
    if (
      ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
        ((c.duration = 0), c.delay === 0 && (f = !0)),
      f && !i && t.get() !== void 0)
    ) {
      const d = fc(c.keyframes, a);
      if (d !== void 0)
        return (
          Ae.update(() => {
            (c.onUpdate(d), c.onComplete());
          }),
          new ek([])
        );
    }
    return !i && Zy.supports(c) ? new Zy(c) : new nm(c);
  };
function jD({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return ((t[n] = !1), r);
}
function $1(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  var i;
  let { transition: s = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  r && (s = r);
  const u = [],
    c = o && e.animationState && e.animationState.getState()[o];
  for (const f in l) {
    const d = e.getValue(
        f,
        (i = e.latestValues[f]) !== null && i !== void 0 ? i : null,
      ),
      m = l[f];
    if (m === void 0 || (c && jD(c, f))) continue;
    const v = { delay: n, ...$p(s || {}, f) };
    let p = !1;
    if (window.MotionHandoffAnimation) {
      const g = d1(e);
      if (g) {
        const y = window.MotionHandoffAnimation(g, f, Ae);
        y !== null && ((v.startTime = y), (p = !0));
      }
    }
    (Hd(e, f),
      d.start(
        rm(f, d, m, e.shouldReduceMotion && c1.has(f) ? { type: !1 } : v, e, p),
      ));
    const w = d.animation;
    w && u.push(w);
  }
  return (
    a &&
      Promise.all(u).then(() => {
        Ae.update(() => {
          a && pk(e, a);
        });
      }),
    u
  );
}
function Zd(e, t, n = {}) {
  var r;
  const o = cc(
    e,
    t,
    n.type === "exit"
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0,
  );
  let { transition: i = e.getDefaultTransition() || {} } = o || {};
  n.transitionOverride && (i = n.transitionOverride);
  const s = o ? () => Promise.all($1(e, o, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: f,
              staggerDirection: d,
            } = i;
            return ID(e, t, c + u, f, d, n);
          }
        : () => Promise.resolve(),
    { when: l } = i;
  if (l) {
    const [u, c] = l === "beforeChildren" ? [s, a] : [a, s];
    return u().then(() => c());
  } else return Promise.all([s(), a(n.delay)]);
}
function ID(e, t, n = 0, r = 0, o = 1, i) {
  const s = [],
    a = (e.variantChildren.size - 1) * r,
    l = o === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(FD)
      .forEach((u, c) => {
        (u.notify("AnimationStart", t),
          s.push(
            Zd(u, t, { ...i, delay: n + l(c) }).then(() =>
              u.notify("AnimationComplete", t),
            ),
          ));
      }),
    Promise.all(s)
  );
}
function FD(e, t) {
  return e.sortNodePosition(t);
}
function VD(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((i) => Zd(e, i, n));
    r = Promise.all(o);
  } else if (typeof t == "string") r = Zd(e, t, n);
  else {
    const o = typeof t == "function" ? cc(e, t, n.custom) : t;
    r = Promise.all($1(e, o, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const BD = Mp.length;
function z1(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? z1(e.parent) || {} : {};
    return (e.props.initial !== void 0 && (n.initial = e.props.initial), n);
  }
  const t = {};
  for (let n = 0; n < BD; n++) {
    const r = Mp[n],
      o = e.props[r];
    (fa(o) || o === !1) && (t[r] = o);
  }
  return t;
}
const UD = [..._p].reverse(),
  $D = _p.length;
function zD(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => VD(e, n, r)));
}
function WD(e) {
  let t = zD(e),
    n = Jy(),
    r = !0;
  const o = (l) => (u, c) => {
    var f;
    const d = cc(
      e,
      c,
      l === "exit"
        ? (f = e.presenceContext) === null || f === void 0
          ? void 0
          : f.custom
        : void 0,
    );
    if (d) {
      const { transition: m, transitionEnd: v, ...p } = d;
      u = { ...u, ...p, ...v };
    }
    return u;
  };
  function i(l) {
    t = l(e);
  }
  function s(l) {
    const { props: u } = e,
      c = z1(e.parent) || {},
      f = [],
      d = new Set();
    let m = {},
      v = 1 / 0;
    for (let w = 0; w < $D; w++) {
      const g = UD[w],
        y = n[g],
        x = u[g] !== void 0 ? u[g] : c[g],
        S = fa(x),
        b = g === l ? y.isActive : null;
      b === !1 && (v = w);
      let T = x === c[g] && x !== u[g] && S;
      if (
        (T && r && e.manuallyAnimateOnMount && (T = !1),
        (y.protectedKeys = { ...m }),
        (!y.isActive && b === null) ||
          (!x && !y.prevProp) ||
          lc(x) ||
          typeof x == "boolean")
      )
        continue;
      const C = HD(y.prevProp, x);
      let R = C || (g === l && y.isActive && !T && S) || (w > v && S),
        L = !1;
      const D = Array.isArray(x) ? x : [x];
      let B = D.reduce(o(g), {});
      b === !1 && (B = {});
      const { prevResolvedValues: V = {} } = y,
        Y = { ...V, ...B },
        W = (Z) => {
          ((R = !0),
            d.has(Z) && ((L = !0), d.delete(Z)),
            (y.needsAnimating[Z] = !0));
          const M = e.getValue(Z);
          M && (M.liveStyle = !1);
        };
      for (const Z in Y) {
        const M = B[Z],
          N = V[Z];
        if (m.hasOwnProperty(Z)) continue;
        let F = !1;
        ($d(M) && $d(N) ? (F = !n1(M, N)) : (F = M !== N),
          F
            ? M != null
              ? W(Z)
              : d.add(Z)
            : M !== void 0 && d.has(Z)
              ? W(Z)
              : (y.protectedKeys[Z] = !0));
      }
      ((y.prevProp = x),
        (y.prevResolvedValues = B),
        y.isActive && (m = { ...m, ...B }),
        r && e.blockInitialAnimation && (R = !1),
        R &&
          (!(T && C) || L) &&
          f.push(...D.map((Z) => ({ animation: Z, options: { type: g } }))));
    }
    if (d.size) {
      const w = {};
      (d.forEach((g) => {
        const y = e.getBaseTarget(g),
          x = e.getValue(g);
        (x && (x.liveStyle = !0), (w[g] = y ?? null));
      }),
        f.push({ animation: w }));
    }
    let p = !!f.length;
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (p = !1),
      (r = !1),
      p ? t(f) : Promise.resolve()
    );
  }
  function a(l, u) {
    var c;
    if (n[l].isActive === u) return Promise.resolve();
    ((c = e.variantChildren) === null ||
      c === void 0 ||
      c.forEach((d) => {
        var m;
        return (m = d.animationState) === null || m === void 0
          ? void 0
          : m.setActive(l, u);
      }),
      (n[l].isActive = u));
    const f = s(l);
    for (const d in n) n[d].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: i,
    getState: () => n,
    reset: () => {
      ((n = Jy()), (r = !0));
    },
  };
}
function HD(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !n1(t, e) : !1;
}
function to(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Jy() {
  return {
    animate: to(!0),
    whileInView: to(),
    whileHover: to(),
    whileTap: to(),
    whileDrag: to(),
    whileFocus: to(),
    exit: to(),
  };
}
class Yr {
  constructor(t) {
    ((this.isMounted = !1), (this.node = t));
  }
  update() {}
}
class KD extends Yr {
  constructor(t) {
    (super(t), t.animationState || (t.animationState = WD(t)));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    lc(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    (this.node.animationState.reset(),
      (t = this.unmountControls) === null || t === void 0 || t.call(this));
  }
}
let GD = 0;
class qD extends Yr {
  constructor() {
    (super(...arguments), (this.id = GD++));
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const o = this.node.animationState.setActive("exit", !t);
    n && !t && o.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const QD = { animation: { Feature: KD }, exit: { Feature: qD } };
function ma(e, t, n, r = { passive: !0 }) {
  return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n));
}
function ka(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const XD = (e) => (t) => Hp(t) && e(t, ka(t));
function Bs(e, t, n, r) {
  return ma(e, t, XD(n), r);
}
const ev = (e, t) => Math.abs(e - t);
function YD(e, t) {
  const n = ev(e.x, t.x),
    r = ev(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class W1 {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: o, dragSnapToOrigin: i = !1 } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const f = vf(this.lastMoveEventInfo, this.history),
          d = this.startEvent !== null,
          m = YD(f.offset, { x: 0, y: 0 }) >= 3;
        if (!d && !m) return;
        const { point: v } = f,
          { timestamp: p } = st;
        this.history.push({ ...v, timestamp: p });
        const { onStart: w, onMove: g } = this.handlers;
        (d ||
          (w && w(this.lastMoveEvent, f),
          (this.startEvent = this.lastMoveEvent)),
          g && g(this.lastMoveEvent, f));
      }),
      (this.handlePointerMove = (f, d) => {
        ((this.lastMoveEvent = f),
          (this.lastMoveEventInfo = yf(d, this.transformPagePoint)),
          Ae.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (f, d) => {
        this.end();
        const { onEnd: m, onSessionEnd: v, resumeAnimation: p } = this.handlers;
        if (
          (this.dragSnapToOrigin && p && p(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const w = vf(
          f.type === "pointercancel"
            ? this.lastMoveEventInfo
            : yf(d, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && m && m(f, w), v && v(f, w));
      }),
      !Hp(t))
    )
      return;
    ((this.dragSnapToOrigin = i),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = o || window));
    const s = ka(t),
      a = yf(s, this.transformPagePoint),
      { point: l } = a,
      { timestamp: u } = st;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = n;
    (c && c(t, vf(a, this.history)),
      (this.removeListeners = Ma(
        Bs(this.contextWindow, "pointermove", this.handlePointerMove),
        Bs(this.contextWindow, "pointerup", this.handlePointerUp),
        Bs(this.contextWindow, "pointercancel", this.handlePointerUp),
      )));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    (this.removeListeners && this.removeListeners(), $r(this.updatePoint));
  }
}
function yf(e, t) {
  return t ? { point: t(e.point) } : e;
}
function tv(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function vf({ point: e }, t) {
  return {
    point: e,
    delta: tv(e, H1(t)),
    offset: tv(e, ZD(t)),
    velocity: JD(t, 0.1),
  };
}
function ZD(e) {
  return e[0];
}
function H1(e) {
  return e[e.length - 1];
}
function JD(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const o = H1(e);
  for (; n >= 0 && ((r = e[n]), !(o.timestamp - r.timestamp > Jn(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const i = er(o.timestamp - r.timestamp);
  if (i === 0) return { x: 0, y: 0 };
  const s = { x: (o.x - r.x) / i, y: (o.y - r.y) / i };
  return (s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s);
}
const K1 = 1e-4,
  eO = 1 - K1,
  tO = 1 + K1,
  G1 = 0.01,
  nO = 0 - G1,
  rO = 0 + G1;
function $t(e) {
  return e.max - e.min;
}
function oO(e, t, n) {
  return Math.abs(e - t) <= n;
}
function nv(e, t, n, r = 0.5) {
  ((e.origin = r),
    (e.originPoint = De(t.min, t.max, e.origin)),
    (e.scale = $t(n) / $t(t)),
    (e.translate = De(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= eO && e.scale <= tO) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= nO && e.translate <= rO) || isNaN(e.translate)) &&
      (e.translate = 0));
}
function Us(e, t, n, r) {
  (nv(e.x, t.x, n.x, r ? r.originX : void 0),
    nv(e.y, t.y, n.y, r ? r.originY : void 0));
}
function rv(e, t, n) {
  ((e.min = n.min + t.min), (e.max = e.min + $t(t)));
}
function iO(e, t, n) {
  (rv(e.x, t.x, n.x), rv(e.y, t.y, n.y));
}
function ov(e, t, n) {
  ((e.min = t.min - n.min), (e.max = e.min + $t(t)));
}
function $s(e, t, n) {
  (ov(e.x, t.x, n.x), ov(e.y, t.y, n.y));
}
function sO(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? De(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? De(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function iv(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function aO(e, { top: t, left: n, bottom: r, right: o }) {
  return { x: iv(e.x, n, o), y: iv(e.y, t, r) };
}
function sv(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return (
    t.max - t.min < e.max - e.min && ([n, r] = [r, n]),
    { min: n, max: r }
  );
}
function lO(e, t) {
  return { x: sv(e.x, t.x), y: sv(e.y, t.y) };
}
function uO(e, t) {
  let n = 0.5;
  const r = $t(e),
    o = $t(t);
  return (
    o > r
      ? (n = Fi(t.min, t.max - r, e.min))
      : r > o && (n = Fi(e.min, e.max - o, t.min)),
    ir(0, 1, n)
  );
}
function cO(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const Jd = 0.35;
function fO(e = Jd) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Jd),
    { x: av(e, "left", "right"), y: av(e, "top", "bottom") }
  );
}
function av(e, t, n) {
  return { min: lv(e, t), max: lv(e, n) };
}
function lv(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const uv = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  ci = () => ({ x: uv(), y: uv() }),
  cv = () => ({ min: 0, max: 0 }),
  ze = () => ({ x: cv(), y: cv() });
function Qt(e) {
  return [e("x"), e("y")];
}
function q1({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function dO({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function hO(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function wf(e) {
  return e === void 0 || e === 1;
}
function eh({ scale: e, scaleX: t, scaleY: n }) {
  return !wf(e) || !wf(t) || !wf(n);
}
function io(e) {
  return (
    eh(e) ||
    Q1(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function Q1(e) {
  return fv(e.x) || fv(e.y);
}
function fv(e) {
  return e && e !== "0%";
}
function Mu(e, t, n) {
  const r = e - n,
    o = t * r;
  return n + o;
}
function dv(e, t, n, r, o) {
  return (o !== void 0 && (e = Mu(e, o, r)), Mu(e, n, r) + t);
}
function th(e, t = 0, n = 1, r, o) {
  ((e.min = dv(e.min, t, n, r, o)), (e.max = dv(e.max, t, n, r, o)));
}
function X1(e, { x: t, y: n }) {
  (th(e.x, t.translate, t.scale, t.originPoint),
    th(e.y, n.translate, n.scale, n.originPoint));
}
const hv = 0.999999999999,
  pv = 1.0000000000001;
function pO(e, t, n, r = !1) {
  const o = n.length;
  if (!o) return;
  t.x = t.y = 1;
  let i, s;
  for (let a = 0; a < o; a++) {
    ((i = n[a]), (s = i.projectionDelta));
    const { visualElement: l } = i.options;
    (l && l.props.style && l.props.style.display === "contents") ||
      (r &&
        i.options.layoutScroll &&
        i.scroll &&
        i !== i.root &&
        di(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), X1(e, s)),
      r && io(i.latestValues) && di(e, i.latestValues));
  }
  (t.x < pv && t.x > hv && (t.x = 1), t.y < pv && t.y > hv && (t.y = 1));
}
function fi(e, t) {
  ((e.min = e.min + t), (e.max = e.max + t));
}
function mv(e, t, n, r, o = 0.5) {
  const i = De(e.min, e.max, o);
  th(e, t, n, i, r);
}
function di(e, t) {
  (mv(e.x, t.x, t.scaleX, t.scale, t.originX),
    mv(e.y, t.y, t.scaleY, t.scale, t.originY));
}
function Y1(e, t) {
  return q1(hO(e.getBoundingClientRect(), t));
}
function mO(e, t, n) {
  const r = Y1(e, n),
    { scroll: o } = t;
  return (o && (fi(r.x, o.offset.x), fi(r.y, o.offset.y)), r);
}
const Z1 = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  gO = new WeakMap();
class yO {
  constructor(t) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = ze()),
      (this.visualElement = t));
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const o = (c) => {
        const { dragSnapToOrigin: f } = this.getProps();
        (f ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(ka(c).point));
      },
      i = (c, f) => {
        const { drag: d, dragPropagation: m, onDragStart: v } = this.getProps();
        if (
          d &&
          !m &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = uk(d)),
          !this.openDragLock)
        )
          return;
        ((this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Qt((w) => {
            let g = this.getAxisMotionValue(w).get() || 0;
            if (Nn.test(g)) {
              const { projection: y } = this.visualElement;
              if (y && y.layout) {
                const x = y.layout.layoutBox[w];
                x && (g = $t(x) * (parseFloat(g) / 100));
              }
            }
            this.originPoint[w] = g;
          }),
          v && Ae.postRender(() => v(c, f)),
          Hd(this.visualElement, "transform"));
        const { animationState: p } = this.visualElement;
        p && p.setActive("whileDrag", !0);
      },
      s = (c, f) => {
        const {
          dragPropagation: d,
          dragDirectionLock: m,
          onDirectionLock: v,
          onDrag: p,
        } = this.getProps();
        if (!d && !this.openDragLock) return;
        const { offset: w } = f;
        if (m && this.currentDirection === null) {
          ((this.currentDirection = vO(w)),
            this.currentDirection !== null && v && v(this.currentDirection));
          return;
        }
        (this.updateAxis("x", f.point, w),
          this.updateAxis("y", f.point, w),
          this.visualElement.render(),
          p && p(c, f));
      },
      a = (c, f) => this.stop(c, f),
      l = () =>
        Qt((c) => {
          var f;
          return (
            this.getAnimationState(c) === "paused" &&
            ((f = this.getAxisMotionValue(c).animation) === null || f === void 0
              ? void 0
              : f.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new W1(
      t,
      {
        onSessionStart: o,
        onStart: i,
        onMove: s,
        onSessionEnd: a,
        resumeAnimation: l,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: Z1(this.visualElement),
      },
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: o } = n;
    this.startAnimation(o);
    const { onDragEnd: i } = this.getProps();
    i && Ae.postRender(() => i(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    (t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0));
    const { dragPropagation: r } = this.getProps();
    (!r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1));
  }
  updateAxis(t, n, r) {
    const { drag: o } = this.getProps();
    if (!r || !wl(t, o, this.currentDirection)) return;
    const i = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    (this.constraints &&
      this.constraints[t] &&
      (s = sO(s, this.constraints[t], this.elastic[t])),
      i.set(s));
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      o =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
            ? void 0
            : t.layout,
      i = this.constraints;
    (n && li(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && o
        ? (this.constraints = aO(o.layoutBox, n))
        : (this.constraints = !1),
      (this.elastic = fO(r)),
      i !== this.constraints &&
        o &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Qt((s) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(s) &&
            (this.constraints[s] = cO(o.layoutBox[s], this.constraints[s]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !li(t)) return !1;
    const r = t.current,
      { projection: o } = this.visualElement;
    if (!o || !o.layout) return !1;
    const i = mO(r, o.root, this.visualElement.getTransformPagePoint());
    let s = lO(o.layout.layoutBox, i);
    if (n) {
      const a = n(dO(s));
      ((this.hasMutatedConstraints = !!a), a && (s = q1(a)));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: o,
        dragTransition: i,
        dragSnapToOrigin: s,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = Qt((c) => {
        if (!wl(c, n, this.currentDirection)) return;
        let f = (l && l[c]) || {};
        s && (f = { min: 0, max: 0 });
        const d = o ? 200 : 1e6,
          m = o ? 40 : 1e7,
          v = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: d,
            bounceDamping: m,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...i,
            ...f,
          };
        return this.startAxisValueAnimation(c, v);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      Hd(this.visualElement, t),
      r.start(rm(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    Qt((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Qt((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      o = r[n];
    return (
      o ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    Qt((n) => {
      const { drag: r } = this.getProps();
      if (!wl(n, r, this.currentDirection)) return;
      const { projection: o } = this.visualElement,
        i = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: s, max: a } = o.layout.layoutBox[n];
        i.set(t[n] - De(s, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!li(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    Qt((s) => {
      const a = this.getAxisMotionValue(s);
      if (a && this.constraints !== !1) {
        const l = a.get();
        o[s] = uO({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = i ? i({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      Qt((s) => {
        if (!wl(s, t, null)) return;
        const a = this.getAxisMotionValue(s),
          { min: l, max: u } = this.constraints[s];
        a.set(De(l, u, o[s]));
      }));
  }
  addListeners() {
    if (!this.visualElement.current) return;
    gO.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Bs(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        li(l) && l.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: o } = this.visualElement,
      i = o.addEventListener("measure", r);
    (o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()),
      Ae.read(r));
    const s = ma(window, "resize", () => this.scalePositionWithinConstraints()),
      a = o.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (Qt((c) => {
              const f = this.getAxisMotionValue(c);
              f &&
                ((this.originPoint[c] += l[c].translate),
                f.set(f.get() + l[c].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      (s(), n(), i(), a && a());
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: o = !1,
        dragConstraints: i = !1,
        dragElastic: s = Jd,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: o,
      dragConstraints: i,
      dragElastic: s,
      dragMomentum: a,
    };
  }
}
function wl(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function vO(e, t = 10) {
  let n = null;
  return (Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n);
}
class wO extends Yr {
  constructor(t) {
    (super(t),
      (this.removeGroupControls = Vt),
      (this.removeListeners = Vt),
      (this.controls = new yO(t)));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    (t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Vt));
  }
  unmount() {
    (this.removeGroupControls(), this.removeListeners());
  }
}
const gv = (e) => (t, n) => {
  e && Ae.postRender(() => e(t, n));
};
class xO extends Yr {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = Vt));
  }
  onPointerDown(t) {
    this.session = new W1(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Z1(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: o,
    } = this.node.getProps();
    return {
      onSessionStart: gv(t),
      onStart: gv(n),
      onMove: r,
      onEnd: (i, s) => {
        (delete this.session, o && Ae.postRender(() => o(i, s)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Bs(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
const $l = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function yv(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const ys = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (ee.test(e)) e = parseFloat(e);
        else return e;
      const n = yv(e, t.target.x),
        r = yv(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  SO = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        o = zr.parse(e);
      if (o.length > 5) return r;
      const i = zr.createTransformer(e),
        s = typeof o[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      ((o[0 + s] /= a), (o[1 + s] /= l));
      const u = De(a, l, 0.5);
      return (
        typeof o[2 + s] == "number" && (o[2 + s] /= u),
        typeof o[3 + s] == "number" && (o[3 + s] /= u),
        i(o)
      );
    },
  };
class EO extends h.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: o,
      } = this.props,
      { projection: i } = t;
    ($M(CO),
      i &&
        (n.group && n.group.add(i),
        r && r.register && o && r.register(i),
        i.root.didUpdate(),
        i.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        i.setOptions({
          ...i.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      ($l.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: o,
        isPresent: i,
      } = this.props,
      s = r.projection;
    return (
      s &&
        ((s.isPresent = i),
        o || t.layoutDependency !== n || n === void 0
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== i &&
          (i
            ? s.promote()
            : s.relegate() ||
              Ae.postRender(() => {
                const a = s.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      Dp.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: o } = t;
    o &&
      (o.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(o),
      r && r.deregister && r.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function J1(e) {
  const [t, n] = LS(),
    r = h.useContext(Cp);
  return E.jsx(EO, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: h.useContext(zS),
    isPresent: t,
    safeToRemove: n,
  });
}
const CO = {
  borderRadius: {
    ...ys,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: ys,
  borderTopRightRadius: ys,
  borderBottomLeftRadius: ys,
  borderBottomRightRadius: ys,
  boxShadow: SO,
};
function bO(e, t, n) {
  const r = mt(e) ? e : ha(e);
  return (r.start(rm("", r, t, n)), r.animation);
}
function PO(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const RO = (e, t) => e.depth - t.depth;
class TO {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(t) {
    (Kp(this.children, t), (this.isDirty = !0));
  }
  remove(t) {
    (Gp(this.children, t), (this.isDirty = !0));
  }
  forEach(t) {
    (this.isDirty && this.children.sort(RO),
      (this.isDirty = !1),
      this.children.forEach(t));
  }
}
function AO(e, t) {
  const n = Ln.now(),
    r = ({ timestamp: o }) => {
      const i = o - n;
      i >= t && ($r(r), e(i - t));
    };
  return (Ae.read(r, !0), () => $r(r));
}
const eE = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  _O = eE.length,
  vv = (e) => (typeof e == "string" ? parseFloat(e) : e),
  wv = (e) => typeof e == "number" || ee.test(e);
function MO(e, t, n, r, o, i) {
  o
    ? ((e.opacity = De(0, n.opacity !== void 0 ? n.opacity : 1, kO(r))),
      (e.opacityExit = De(t.opacity !== void 0 ? t.opacity : 1, 0, DO(r))))
    : i &&
      (e.opacity = De(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r,
      ));
  for (let s = 0; s < _O; s++) {
    const a = `border${eE[s]}Radius`;
    let l = xv(t, a),
      u = xv(n, a);
    if (l === void 0 && u === void 0) continue;
    (l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || wv(l) === wv(u)
        ? ((e[a] = Math.max(De(vv(l), vv(u), r), 0)),
          (Nn.test(u) || Nn.test(l)) && (e[a] += "%"))
        : (e[a] = u));
  }
  (t.rotate || n.rotate) && (e.rotate = De(t.rotate || 0, n.rotate || 0, r));
}
function xv(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const kO = tE(0, 0.5, w1),
  DO = tE(0.5, 0.95, Vt);
function tE(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Fi(e, t, r)));
}
function Sv(e, t) {
  ((e.min = t.min), (e.max = t.max));
}
function Gt(e, t) {
  (Sv(e.x, t.x), Sv(e.y, t.y));
}
function Ev(e, t) {
  ((e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin));
}
function Cv(e, t, n, r, o) {
  return (
    (e -= t),
    (e = Mu(e, 1 / n, r)),
    o !== void 0 && (e = Mu(e, 1 / o, r)),
    e
  );
}
function OO(e, t = 0, n = 1, r = 0.5, o, i = e, s = e) {
  if (
    (Nn.test(t) &&
      ((t = parseFloat(t)), (t = De(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let a = De(i.min, i.max, r);
  (e === i && (a -= t),
    (e.min = Cv(e.min, t, n, a, o)),
    (e.max = Cv(e.max, t, n, a, o)));
}
function bv(e, t, [n, r, o], i, s) {
  OO(e, t[n], t[r], t[o], t.scale, i, s);
}
const NO = ["x", "scaleX", "originX"],
  LO = ["y", "scaleY", "originY"];
function Pv(e, t, n, r) {
  (bv(e.x, t, NO, n ? n.x : void 0, r ? r.x : void 0),
    bv(e.y, t, LO, n ? n.y : void 0, r ? r.y : void 0));
}
function Rv(e) {
  return e.translate === 0 && e.scale === 1;
}
function nE(e) {
  return Rv(e.x) && Rv(e.y);
}
function Tv(e, t) {
  return e.min === t.min && e.max === t.max;
}
function jO(e, t) {
  return Tv(e.x, t.x) && Tv(e.y, t.y);
}
function Av(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function rE(e, t) {
  return Av(e.x, t.x) && Av(e.y, t.y);
}
function _v(e) {
  return $t(e.x) / $t(e.y);
}
function Mv(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class IO {
  constructor() {
    this.members = [];
  }
  add(t) {
    (Kp(this.members, t), t.scheduleRender());
  }
  remove(t) {
    if (
      (Gp(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((o) => t === o);
    if (n === 0) return !1;
    let r;
    for (let o = n; o >= 0; o--) {
      const i = this.members[o];
      if (i.isPresent !== !1) {
        r = i;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      (r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0));
      const { crossfade: o } = t.options;
      o === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      (n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete());
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function FO(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x,
    i = e.y.translate / t.y,
    s = (n == null ? void 0 : n.z) || 0;
  if (
    ((o || i || s) && (r = `translate3d(${o}px, ${i}px, ${s}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      rotateX: f,
      rotateY: d,
      skewX: m,
      skewY: v,
    } = n;
    (u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      f && (r += `rotateX(${f}deg) `),
      d && (r += `rotateY(${d}deg) `),
      m && (r += `skewX(${m}deg) `),
      v && (r += `skewY(${v}deg) `));
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return ((a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none");
}
const so = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  As = typeof window < "u" && window.MotionDebug !== void 0,
  xf = ["", "X", "Y", "Z"],
  VO = { visibility: "hidden" },
  kv = 1e3;
let BO = 0;
function Sf(e, t, n, r) {
  const { latestValues: o } = t;
  o[e] && ((n[e] = o[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function oE(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = d1(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: o, layoutId: i } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", Ae, !(o || i));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && oE(r);
}
function iE({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: o,
}) {
  return class {
    constructor(s = {}, a = t == null ? void 0 : t()) {
      ((this.id = BO++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            As &&
              (so.totalNodes =
                so.resolvedTargetDeltas =
                so.recalculatedProjection =
                  0),
            this.nodes.forEach(zO),
            this.nodes.forEach(qO),
            this.nodes.forEach(QO),
            this.nodes.forEach(WO),
            As && window.MotionDebug.record(so));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0));
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new TO());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new qp()),
        this.eventHandlers.get(s).add(a)
      );
    }
    notifyListeners(s, ...a) {
      const l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      ((this.isSVG = PO(s)), (this.instance = s));
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f;
        const d = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          ((this.root.updateBlockedByResize = !0),
            f && f(),
            (f = AO(d, 250)),
            $l.hasAnimatedSinceResize &&
              (($l.hasAnimatedSinceResize = !1), this.nodes.forEach(Ov)));
        });
      }
      (l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: f,
              hasLayoutChanged: d,
              hasRelativeTargetChanged: m,
              layout: v,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const p =
                  this.options.transition || c.getDefaultTransition() || eN,
                { onLayoutAnimationStart: w, onLayoutAnimationComplete: g } =
                  c.getProps(),
                y = !this.targetLayout || !rE(this.targetLayout, v) || m,
                x = !d && m;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                x ||
                (d && (y || !this.currentAnimation))
              ) {
                (this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, x));
                const S = { ...$p(p, "layout"), onPlay: w, onComplete: g };
                ((c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((S.delay = 0), (S.type = !1)),
                  this.startAnimation(S));
              } else
                (d || Ov(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = v;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      const s = this.getStack();
      (s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        $r(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(XO),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          oE(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        ((f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1));
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = u
        ? u(this.latestValues, "")
        : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        (this.unblockUpdate(),
          this.clearAllSnapshots(),
          this.nodes.forEach(Dv));
        return;
      }
      (this.isUpdating || this.nodes.forEach(KO),
        (this.isUpdating = !1),
        this.nodes.forEach(GO),
        this.nodes.forEach(UO),
        this.nodes.forEach($O),
        this.clearAllSnapshots());
      const a = Ln.now();
      ((st.delta = ir(0, 1e3 / 60, a - st.timestamp)),
        (st.timestamp = a),
        (st.isProcessing = !0),
        ff.update.process(st),
        ff.preRender.process(st),
        ff.render.process(st),
        (st.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Dp.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(HO), this.sharedNodes.forEach(YO));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        Ae.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Ae.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const s = this.layout;
      ((this.layout = this.measure(!1)),
        (this.layoutCorrected = ze()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0,
        );
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === s &&
          (a = !1),
        a)
      ) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: s,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!o) return;
      const s =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !nE(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      s &&
        (a || io(this.latestValues) || c) &&
        (o(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        s && (l = this.removeTransform(l)),
        tN(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var s;
      const { visualElement: a } = this.options;
      if (!a) return ze();
      const l = a.measureViewportBox();
      if (
        !(
          ((s = this.scroll) === null || s === void 0 ? void 0 : s.wasRoot) ||
          this.path.some(nN)
        )
      ) {
        const { scroll: c } = this.root;
        c && (fi(l.x, c.offset.x), fi(l.y, c.offset.y));
      }
      return l;
    }
    removeElementScroll(s) {
      var a;
      const l = ze();
      if (
        (Gt(l, s), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
      )
        return l;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: f, options: d } = c;
        c !== this.root &&
          f &&
          d.layoutScroll &&
          (f.wasRoot && Gt(l, s), fi(l.x, f.offset.x), fi(l.y, f.offset.y));
      }
      return l;
    }
    applyTransform(s, a = !1) {
      const l = ze();
      Gt(l, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        (!a &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          di(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          io(c.latestValues) && di(l, c.latestValues));
      }
      return (io(this.latestValues) && di(l, this.latestValues), l);
    }
    removeTransform(s) {
      const a = ze();
      Gt(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !io(u.latestValues)) continue;
        eh(u.latestValues) && u.updateSnapshot();
        const c = ze(),
          f = u.measurePageBox();
        (Gt(c, f),
          Pv(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c));
      }
      return (io(this.latestValues) && Pv(a, this.latestValues), a);
    }
    setTargetDelta(s) {
      ((this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== st.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var a;
      const l = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty));
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          s ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: f, layoutId: d } = this.options;
      if (!(!this.layout || !(f || d))) {
        if (
          ((this.resolvedRelativeTargetAt = st.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const m = this.getClosestProjectingParent();
          m && m.layout && this.animationProgress !== 1
            ? ((this.relativeParent = m),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = ze()),
              (this.relativeTargetOrigin = ze()),
              $s(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                m.layout.layoutBox,
              ),
              Gt(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = ze()), (this.targetWithTransforms = ze())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                iO(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target,
                ))
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : Gt(this.target, this.layout.layoutBox),
                  X1(this.target, this.targetDelta))
                : Gt(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const m = this.getClosestProjectingParent();
            m &&
            !!m.resumingFrom == !!this.resumingFrom &&
            !m.options.layoutScroll &&
            m.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = m),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = ze()),
                (this.relativeTargetOrigin = ze()),
                $s(this.relativeTargetOrigin, this.target, m.target),
                Gt(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          As && so.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          eh(this.parent.latestValues) ||
          Q1(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var s;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === st.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || f))
      )
        return;
      Gt(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x,
        m = this.treeScale.y;
      (pO(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = ze())));
      const { target: v } = a;
      if (!v) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Ev(this.prevProjectionDelta.x, this.projectionDelta.x),
          Ev(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Us(this.projectionDelta, this.layoutCorrected, v, this.latestValues),
        (this.treeScale.x !== d ||
          this.treeScale.y !== m ||
          !Mv(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Mv(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", v)),
        As && so.recalculatedProjection++);
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      var a;
      if (
        ((a = this.options.visualElement) === null ||
          a === void 0 ||
          a.scheduleRender(),
        s)
      ) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = ci()),
        (this.projectionDelta = ci()),
        (this.projectionDeltaWithTransform = ci()));
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        f = ci();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a));
      const d = ze(),
        m = l ? l.source : void 0,
        v = this.layout ? this.layout.source : void 0,
        p = m !== v,
        w = this.getStack(),
        g = !w || w.members.length <= 1,
        y = !!(p && !g && this.options.crossfade === !0 && !this.path.some(JO));
      this.animationProgress = 0;
      let x;
      ((this.mixTargetDelta = (S) => {
        const b = S / 1e3;
        (Nv(f.x, s.x, b),
          Nv(f.y, s.y, b),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            ($s(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            ZO(this.relativeTarget, this.relativeTargetOrigin, d, b),
            x && jO(this.relativeTarget, x) && (this.isProjectionDirty = !1),
            x || (x = ze()),
            Gt(x, this.relativeTarget)),
          p &&
            ((this.animationValues = c), MO(c, u, this.latestValues, b, y, g)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = b));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(s) {
      (this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          ($r(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Ae.update(() => {
          (($l.hasAnimatedSinceResize = !0),
            (this.currentAnimation = bO(0, kv, {
              ...s,
              onUpdate: (a) => {
                (this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a));
              },
              onComplete: () => {
                (s.onComplete && s.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      (s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(kv),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: c,
      } = s;
      if (!(!a || !l || !u)) {
        if (
          this !== s &&
          this.layout &&
          u &&
          sE(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || ze();
          const f = $t(this.layout.layoutBox.x);
          ((l.x.min = s.target.x.min), (l.x.max = l.x.min + f));
          const d = $t(this.layout.layoutBox.y);
          ((l.y.min = s.target.y.min), (l.y.max = l.y.min + d));
        }
        (Gt(a, l),
          di(a, c),
          Us(this.projectionDeltaWithTransform, this.layoutCorrected, a, c));
      }
    }
    registerSharedNode(s, a) {
      (this.sharedNodes.has(s) || this.sharedNodes.set(s, new IO()),
        this.sharedNodes.get(s).add(a));
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      (u && u.promote(this, l),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a }));
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let a = !1;
      const { latestValues: l } = s;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const u = {};
      l.z && Sf("z", s, u, this.animationValues);
      for (let c = 0; c < xf.length; c++)
        (Sf(`rotate${xf[c]}`, s, u, this.animationValues),
          Sf(`skew${xf[c]}`, s, u, this.animationValues));
      s.render();
      for (const c in u)
        (s.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]));
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return VO;
      const u = { visibility: "" },
        c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = Bl(s == null ? void 0 : s.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const p = {};
        return (
          this.options.layoutId &&
            ((p.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (p.pointerEvents = Bl(s == null ? void 0 : s.pointerEvents) || "")),
          this.hasProjected &&
            !io(this.latestValues) &&
            ((p.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          p
        );
      }
      const d = f.animationValues || f.latestValues;
      (this.applyTransformsToTarget(),
        (u.transform = FO(
          this.projectionDeltaWithTransform,
          this.treeScale,
          d,
        )),
        c && (u.transform = c(d, u.transform)));
      const { x: m, y: v } = this.projectionDelta;
      ((u.transformOrigin = `${m.origin * 100}% ${v.origin * 100}% 0`),
        f.animationValues
          ? (u.opacity =
              f === this
                ? (l =
                    (a = d.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : d.opacityExit)
          : (u.opacity =
              f === this
                ? d.opacity !== void 0
                  ? d.opacity
                  : ""
                : d.opacityExit !== void 0
                  ? d.opacityExit
                  : 0));
      for (const p in Pu) {
        if (d[p] === void 0) continue;
        const { correct: w, applyTo: g } = Pu[p],
          y = u.transform === "none" ? d[p] : w(d[p], f);
        if (g) {
          const x = g.length;
          for (let S = 0; S < x; S++) u[g[S]] = y;
        } else u[p] = y;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            f === this
              ? Bl(s == null ? void 0 : s.pointerEvents) || ""
              : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(Dv),
        this.root.sharedNodes.clear());
    }
  };
}
function UO(e) {
  e.updateLayout();
}
function $O(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout,
      { animationType: i } = e.options,
      s = n.source !== e.layout.source;
    i === "size"
      ? Qt((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            m = $t(d);
          ((d.min = r[f].min), (d.max = d.min + m));
        })
      : sE(i, n.layoutBox, r) &&
        Qt((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            m = $t(r[f]);
          ((d.max = d.min + m),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + m)));
        });
    const a = ci();
    Us(a, r, n.layoutBox);
    const l = ci();
    s ? Us(l, e.applyTransform(o, !0), n.measuredBox) : Us(l, r, n.layoutBox);
    const u = !nE(a);
    let c = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: m } = f;
        if (d && m) {
          const v = ze();
          $s(v, n.layoutBox, d.layoutBox);
          const p = ze();
          ($s(p, r, m.layoutBox),
            rE(v, p) || (c = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = p),
              (e.relativeTargetOrigin = v),
              (e.relativeParent = f)));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function zO(e) {
  (As && so.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty)));
}
function WO(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function HO(e) {
  e.clearSnapshot();
}
function Dv(e) {
  e.clearMeasurements();
}
function KO(e) {
  e.isLayoutDirty = !1;
}
function GO(e) {
  const { visualElement: t } = e.options;
  (t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform());
}
function Ov(e) {
  (e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0));
}
function qO(e) {
  e.resolveTargetDelta();
}
function QO(e) {
  e.calcProjection();
}
function XO(e) {
  e.resetSkewAndRotation();
}
function YO(e) {
  e.removeLeadSnapshot();
}
function Nv(e, t, n) {
  ((e.translate = De(t.translate, 0, n)),
    (e.scale = De(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint));
}
function Lv(e, t, n, r) {
  ((e.min = De(t.min, n.min, r)), (e.max = De(t.max, n.max, r)));
}
function ZO(e, t, n, r) {
  (Lv(e.x, t.x, n.x, r), Lv(e.y, t.y, n.y, r));
}
function JO(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const eN = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  jv = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  Iv = jv("applewebkit/") && !jv("chrome/") ? Math.round : Vt;
function Fv(e) {
  ((e.min = Iv(e.min)), (e.max = Iv(e.max)));
}
function tN(e) {
  (Fv(e.x), Fv(e.y));
}
function sE(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !oO(_v(t), _v(n), 0.2))
  );
}
function nN(e) {
  var t;
  return (
    e !== e.root &&
    ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
  );
}
const rN = iE({
    attachResizeListener: (e, t) => ma(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Ef = { current: void 0 },
  aE = iE({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Ef.current) {
        const e = new rN({});
        (e.mount(window), e.setOptions({ layoutScroll: !0 }), (Ef.current = e));
      }
      return Ef.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  oN = {
    pan: { Feature: xO },
    drag: { Feature: wO, ProjectionNode: aE, MeasureLayout: J1 },
  };
function Vv(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive("whileHover", n === "Start");
  const o = "onHover" + n,
    i = r[o];
  i && Ae.postRender(() => i(t, ka(t)));
}
class iN extends Yr {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = ok(
        t,
        (n) => (Vv(this.node, n, "Start"), (r) => Vv(this.node, r, "End")),
      ));
  }
  unmount() {}
}
class sN extends Yr {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Ma(
      ma(this.node.current, "focus", () => this.onFocus()),
      ma(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function Bv(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive("whileTap", n === "Start");
  const o = "onTap" + (n === "End" ? "" : n),
    i = r[o];
  i && Ae.postRender(() => i(t, ka(t)));
}
class aN extends Yr {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = lk(
        t,
        (n) => (
          Bv(this.node, n, "Start"),
          (r, { success: o }) => Bv(this.node, r, o ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget },
      ));
  }
  unmount() {}
}
const nh = new WeakMap(),
  Cf = new WeakMap(),
  lN = (e) => {
    const t = nh.get(e.target);
    t && t(e);
  },
  uN = (e) => {
    e.forEach(lN);
  };
function cN({ root: e, ...t }) {
  const n = e || document;
  Cf.has(n) || Cf.set(n, {});
  const r = Cf.get(n),
    o = JSON.stringify(t);
  return (
    r[o] || (r[o] = new IntersectionObserver(uN, { root: e, ...t })),
    r[o]
  );
}
function fN(e, t, n) {
  const r = cN(t);
  return (
    nh.set(e, n),
    r.observe(e),
    () => {
      (nh.delete(e), r.unobserve(e));
    }
  );
}
const dN = { some: 0, all: 1 };
class hN extends Yr {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: o = "some", once: i } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof o == "number" ? o : dN[o],
      },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), i && !u && this.hasEnteredView)
        )
          return;
        (u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u));
        const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(),
          d = u ? c : f;
        d && d(l);
      };
    return fN(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(pN(t, n)) && this.startObserver();
  }
  unmount() {}
}
function pN({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const mN = {
    inView: { Feature: hN },
    tap: { Feature: aN },
    focus: { Feature: sN },
    hover: { Feature: iN },
  },
  gN = { layout: { ProjectionNode: aE, MeasureLayout: J1 } },
  rh = { current: null },
  lE = { current: !1 };
function yN() {
  if (((lE.current = !0), !!Rp))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (rh.current = e.matches);
      (e.addListener(t), t());
    } else rh.current = !1;
}
const vN = [...O1, dt, zr],
  wN = (e) => vN.find(D1(e)),
  Uv = new WeakMap();
function xN(e, t, n) {
  for (const r in t) {
    const o = t[r],
      i = n[r];
    if (mt(o)) e.addValue(r, o);
    else if (mt(i)) e.addValue(r, ha(o, { owner: e }));
    else if (i !== o)
      if (e.hasValue(r)) {
        const s = e.getValue(r);
        s.liveStyle === !0 ? s.jump(o) : s.hasAnimated || s.set(o);
      } else {
        const s = e.getStaticValue(r);
        e.addValue(r, ha(s !== void 0 ? s : o, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const $v = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class SN {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: o,
      blockInitialAnimation: i,
      visualState: s,
    },
    a = {},
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = em),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const m = Ln.now();
        this.renderScheduledAt < m &&
          ((this.renderScheduledAt = m), Ae.render(this.render, !1, !0));
      }));
    const { latestValues: l, renderState: u, onUpdate: c } = s;
    ((this.onUpdate = c),
      (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = o),
      (this.options = a),
      (this.blockInitialAnimation = !!i),
      (this.isControllingVariants = uc(n)),
      (this.isVariantNode = US(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current)));
    const { willChange: f, ...d } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this,
    );
    for (const m in d) {
      const v = d[m];
      l[m] !== void 0 && mt(v) && v.set(l[m], !1);
    }
  }
  mount(t) {
    ((this.current = t),
      Uv.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      lE.current || yN(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
            ? !0
            : rh.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext));
  }
  unmount() {
    (Uv.delete(this.current),
      this.projection && this.projection.unmount(),
      $r(this.notifyUpdate),
      $r(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this));
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = Fo.has(t),
      o = n.on("change", (a) => {
        ((this.latestValues[t] = a),
          this.props.onUpdate && Ae.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0));
      }),
      i = n.on("renderRequest", this.scheduleRender);
    let s;
    (window.MotionCheckAppearSync &&
      (s = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        (o(), i(), s && s(), n.owner && n.stop());
      }));
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Vi) {
      const n = Vi[t];
      if (!n) continue;
      const { isEnabled: r, Feature: o } = n;
      if (
        (!this.features[t] &&
          o &&
          r(this.props) &&
          (this.features[t] = new o(this)),
        this.features[t])
      ) {
        const i = this.features[t];
        i.isMounted ? i.update() : (i.mount(), (i.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : ze();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    ((t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n));
    for (let r = 0; r < $v.length; r++) {
      const o = $v[r];
      this.propEventSubscriptions[o] &&
        (this.propEventSubscriptions[o](),
        delete this.propEventSubscriptions[o]);
      const i = "on" + o,
        s = t[i];
      s && (this.propEventSubscriptions[o] = this.on(o, s));
    }
    ((this.prevMotionValues = xN(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue(),
      this.onUpdate && this.onUpdate(this));
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    (n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState));
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = ha(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    var r;
    let o =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
            r !== void 0
          ? r
          : this.readValueFromInstance(this.current, t, this.options);
    return (
      o != null &&
        (typeof o == "string" && (M1(o) || S1(o))
          ? (o = parseFloat(o))
          : !wN(o) && zr.test(n) && (o = T1(t, n)),
        this.setBaseTarget(t, mt(o) ? o.get() : o)),
      mt(o) ? o.get() : o
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let o;
    if (typeof r == "string" || typeof r == "object") {
      const s = Np(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom,
      );
      s && (o = s[t]);
    }
    if (r && o !== void 0) return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !mt(i)
      ? i
      : this.initialValues[t] !== void 0 && o === void 0
        ? void 0
        : this.baseTarget[t];
  }
  on(t, n) {
    return (
      this.events[t] || (this.events[t] = new qp()),
      this.events[t].add(n)
    );
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class uE extends SN {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = N1));
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    (delete n[t], delete r[t]);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    mt(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
function EN(e) {
  return window.getComputedStyle(e);
}
class CN extends uE {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = XS));
  }
  readValueFromInstance(t, n) {
    if (Fo.has(n)) {
      const r = Jp(n);
      return (r && r.default) || 0;
    } else {
      const r = EN(t),
        o = (GS(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Y1(t, n);
  }
  build(t, n, r) {
    Ip(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Up(t, n, r);
  }
}
class bN extends uE {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = ze));
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Fo.has(n)) {
      const r = Jp(n);
      return (r && r.default) || 0;
    }
    return ((n = YS.has(n) ? n : kp(n)), t.getAttribute(n));
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return e1(t, n, r);
  }
  build(t, n, r) {
    Fp(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    ZS(t, n, r, o);
  }
  mount(t) {
    ((this.isSVGTag = Bp(t.tagName)), super.mount(t));
  }
}
const PN = (e, t) =>
    Op(e) ? new bN(t) : new CN(t, { allowProjection: e !== h.Fragment }),
  RN = YM({ ...QD, ...mN, ...oN, ...gN }, PN),
  gn = dM(RN),
  TN = "modulepreload",
  AN = function (e) {
    return "/" + e;
  },
  zv = {},
  Ye = function (t, n, r) {
    let o = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const s = document.querySelector("meta[property=csp-nonce]"),
        a =
          (s == null ? void 0 : s.nonce) ||
          (s == null ? void 0 : s.getAttribute("nonce"));
      o = Promise.allSettled(
        n.map((l) => {
          if (((l = AN(l)), l in zv)) return;
          zv[l] = !0;
          const u = l.endsWith(".css"),
            c = u ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${l}"]${c}`)) return;
          const f = document.createElement("link");
          if (
            ((f.rel = u ? "stylesheet" : TN),
            u || (f.as = "script"),
            (f.crossOrigin = ""),
            (f.href = l),
            a && f.setAttribute("nonce", a),
            document.head.appendChild(f),
            u)
          )
            return new Promise((d, m) => {
              (f.addEventListener("load", d),
                f.addEventListener("error", () =>
                  m(new Error(`Unable to preload CSS for ${l}`)),
                ));
            });
        }),
      );
    }
    function i(s) {
      const a = new Event("vite:preloadError", { cancelable: !0 });
      if (((a.payload = s), window.dispatchEvent(a), !a.defaultPrevented))
        throw s;
    }
    return o.then((s) => {
      for (const a of s || []) a.status === "rejected" && i(a.reason);
      return t().catch(i);
    });
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var _N = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const MN = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  Ze = (e, t) => {
    const n = h.forwardRef(
      (
        {
          color: r = "currentColor",
          size: o = 24,
          strokeWidth: i = 2,
          absoluteStrokeWidth: s,
          className: a = "",
          children: l,
          ...u
        },
        c,
      ) =>
        h.createElement(
          "svg",
          {
            ref: c,
            ..._N,
            width: o,
            height: o,
            stroke: r,
            strokeWidth: s ? (Number(i) * 24) / Number(o) : i,
            className: ["lucide", `lucide-${MN(e)}`, a].join(" "),
            ...u,
          },
          [
            ...t.map(([f, d]) => h.createElement(f, d)),
            ...(Array.isArray(l) ? l : [l]),
          ],
        ),
    );
    return ((n.displayName = `${e}`), n);
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kN = Ze("AlertTriangle", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
      key: "c3ski4",
    },
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const DN = Ze("BarChart3", [
  ["path", { d: "M3 3v18h18", key: "1s2lah" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ON = Ze("Bell", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const NN = Ze("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const LN = Ze("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jN = Ze("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cE = Ze("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const IN = Ze("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fE = Ze("History", [
  [
    "path",
    { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" },
  ],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const FN = Ze("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dE = Ze("LayoutDashboard", [
  ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }],
  [
    "rect",
    { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" },
  ],
  [
    "rect",
    { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" },
  ],
  [
    "rect",
    { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hE = Ze("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wv = Ze("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const VN = Ze("Settings", [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f",
    },
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const BN = Ze("Shield", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pE = Ze("Trophy", [
  ["path", { d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6", key: "17hqa7" }],
  ["path", { d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18", key: "lmptdp" }],
  ["path", { d: "M4 22h16", key: "57wxv0" }],
  [
    "path",
    {
      d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",
      key: "1nw9bq",
    },
  ],
  [
    "path",
    {
      d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",
      key: "1np0yb",
    },
  ],
  ["path", { d: "M18 2H6v7a6 6 0 0 0 12 0V2Z", key: "u46fv3" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mE = Ze("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gE = Ze("XCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yE = Ze("Zap", [
  [
    "polygon",
    { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2", key: "45s27k" },
  ],
]);
function Hv(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function Ht(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const i = Hv(o, t);
      return (!n && typeof i == "function" && (n = !0), i);
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : Hv(e[o], null);
        }
      };
  };
}
function Dt(...e) {
  return h.useCallback(Ht(...e), e);
}
var UN = Symbol.for("react.lazy"),
  ku = Bu[" use ".trim().toString()];
function $N(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function vE(e) {
  return (
    e != null &&
    typeof e == "object" &&
    "$$typeof" in e &&
    e.$$typeof === UN &&
    "_payload" in e &&
    $N(e._payload)
  );
}
function wE(e) {
  const t = WN(e),
    n = h.forwardRef((r, o) => {
      let { children: i, ...s } = r;
      vE(i) && typeof ku == "function" && (i = ku(i._payload));
      const a = h.Children.toArray(i),
        l = a.find(KN);
      if (l) {
        const u = l.props.children,
          c = a.map((f) =>
            f === l
              ? h.Children.count(u) > 1
                ? h.Children.only(null)
                : h.isValidElement(u)
                  ? u.props.children
                  : null
              : f,
          );
        return E.jsx(t, {
          ...s,
          ref: o,
          children: h.isValidElement(u) ? h.cloneElement(u, void 0, c) : null,
        });
      }
      return E.jsx(t, { ...s, ref: o, children: i });
    });
  return ((n.displayName = `${e}.Slot`), n);
}
var zN = wE("Slot");
function WN(e) {
  const t = h.forwardRef((n, r) => {
    let { children: o, ...i } = n;
    if (
      (vE(o) && typeof ku == "function" && (o = ku(o._payload)),
      h.isValidElement(o))
    ) {
      const s = qN(o),
        a = GN(i, o.props);
      return (
        o.type !== h.Fragment && (a.ref = r ? Ht(r, s) : s),
        h.cloneElement(o, a)
      );
    }
    return h.Children.count(o) > 1 ? h.Children.only(null) : null;
  });
  return ((t.displayName = `${e}.SlotClone`), t);
}
var HN = Symbol("radix.slottable");
function KN(e) {
  return (
    h.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === HN
  );
}
function GN(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      i = t[r];
    /^on[A-Z]/.test(r)
      ? o && i
        ? (n[r] = (...a) => {
            const l = i(...a);
            return (o(...a), l);
          })
        : o && (n[r] = o)
      : r === "style"
        ? (n[r] = { ...o, ...i })
        : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function qN(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function xE(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = xE(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function SE() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = xE(e)) && (r && (r += " "), (r += t));
  return r;
}
const Kv = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  Gv = SE,
  EE = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return Gv(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className,
      );
    const { variants: o, defaultVariants: i } = t,
      s = Object.keys(o).map((u) => {
        const c = n == null ? void 0 : n[u],
          f = i == null ? void 0 : i[u];
        if (c === null) return null;
        const d = Kv(c) || Kv(f);
        return o[u][d];
      }),
      a =
        n &&
        Object.entries(n).reduce((u, c) => {
          let [f, d] = c;
          return (d === void 0 || (u[f] = d), u);
        }, {}),
      l =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((u, c) => {
              let { class: f, className: d, ...m } = c;
              return Object.entries(m).every((v) => {
                let [p, w] = v;
                return Array.isArray(w)
                  ? w.includes({ ...i, ...a }[p])
                  : { ...i, ...a }[p] === w;
              })
                ? [...u, f, d]
                : u;
            }, []);
    return Gv(
      e,
      s,
      l,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className,
    );
  },
  om = "-",
  QN = (e) => {
    const t = YN(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (s) => {
        const a = s.split(om);
        return (a[0] === "" && a.length !== 1 && a.shift(), CE(a, t) || XN(s));
      },
      getConflictingClassGroupIds: (s, a) => {
        const l = n[s] || [];
        return a && r[s] ? [...l, ...r[s]] : l;
      },
    };
  },
  CE = (e, t) => {
    var s;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      o = r ? CE(e.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const i = e.join(om);
    return (s = t.validators.find(({ validator: a }) => a(i))) == null
      ? void 0
      : s.classGroupId;
  },
  qv = /^\[(.+)\]$/,
  XN = (e) => {
    if (qv.test(e)) {
      const t = qv.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  YN = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      JN(Object.entries(e.classGroups), n).forEach(([i, s]) => {
        oh(s, r, i, t);
      }),
      r
    );
  },
  oh = (e, t, n, r) => {
    e.forEach((o) => {
      if (typeof o == "string") {
        const i = o === "" ? t : Qv(t, o);
        i.classGroupId = n;
        return;
      }
      if (typeof o == "function") {
        if (ZN(o)) {
          oh(o(r), t, n, r);
          return;
        }
        t.validators.push({ validator: o, classGroupId: n });
        return;
      }
      Object.entries(o).forEach(([i, s]) => {
        oh(s, Qv(t, i), n, r);
      });
    });
  },
  Qv = (e, t) => {
    let n = e;
    return (
      t.split(om).forEach((r) => {
        (n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r)));
      }),
      n
    );
  },
  ZN = (e) => e.isThemeGetter,
  JN = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const o = r.map((i) =>
            typeof i == "string"
              ? t + i
              : typeof i == "object"
                ? Object.fromEntries(
                    Object.entries(i).map(([s, a]) => [t + s, a]),
                  )
                : i,
          );
          return [n, o];
        })
      : e,
  eL = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const o = (i, s) => {
      (n.set(i, s), t++, t > e && ((t = 0), (r = n), (n = new Map())));
    };
    return {
      get(i) {
        let s = n.get(i);
        if (s !== void 0) return s;
        if ((s = r.get(i)) !== void 0) return (o(i, s), s);
      },
      set(i, s) {
        n.has(i) ? n.set(i, s) : o(i, s);
      },
    };
  },
  bE = "!",
  tL = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      o = t[0],
      i = t.length,
      s = (a) => {
        const l = [];
        let u = 0,
          c = 0,
          f;
        for (let w = 0; w < a.length; w++) {
          let g = a[w];
          if (u === 0) {
            if (g === o && (r || a.slice(w, w + i) === t)) {
              (l.push(a.slice(c, w)), (c = w + i));
              continue;
            }
            if (g === "/") {
              f = w;
              continue;
            }
          }
          g === "[" ? u++ : g === "]" && u--;
        }
        const d = l.length === 0 ? a : a.substring(c),
          m = d.startsWith(bE),
          v = m ? d.substring(1) : d,
          p = f && f > c ? f - c : void 0;
        return {
          modifiers: l,
          hasImportantModifier: m,
          baseClassName: v,
          maybePostfixModifierPosition: p,
        };
      };
    return n ? (a) => n({ className: a, parseClassName: s }) : s;
  },
  nL = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  rL = (e) => ({ cache: eL(e.cacheSize), parseClassName: tL(e), ...QN(e) }),
  oL = /\s+/,
  iL = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: o,
      } = t,
      i = [],
      s = e.trim().split(oL);
    let a = "";
    for (let l = s.length - 1; l >= 0; l -= 1) {
      const u = s[l],
        {
          modifiers: c,
          hasImportantModifier: f,
          baseClassName: d,
          maybePostfixModifierPosition: m,
        } = n(u);
      let v = !!m,
        p = r(v ? d.substring(0, m) : d);
      if (!p) {
        if (!v) {
          a = u + (a.length > 0 ? " " + a : a);
          continue;
        }
        if (((p = r(d)), !p)) {
          a = u + (a.length > 0 ? " " + a : a);
          continue;
        }
        v = !1;
      }
      const w = nL(c).join(":"),
        g = f ? w + bE : w,
        y = g + p;
      if (i.includes(y)) continue;
      i.push(y);
      const x = o(p, v);
      for (let S = 0; S < x.length; ++S) {
        const b = x[S];
        i.push(g + b);
      }
      a = u + (a.length > 0 ? " " + a : a);
    }
    return a;
  };
function sL() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = PE(t)) && (r && (r += " "), (r += n));
  return r;
}
const PE = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = PE(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function aL(e, ...t) {
  let n,
    r,
    o,
    i = s;
  function s(l) {
    const u = t.reduce((c, f) => f(c), e());
    return ((n = rL(u)), (r = n.cache.get), (o = n.cache.set), (i = a), a(l));
  }
  function a(l) {
    const u = r(l);
    if (u) return u;
    const c = iL(l, n);
    return (o(l, c), c);
  }
  return function () {
    return i(sL.apply(null, arguments));
  };
}
const Pe = (e) => {
    const t = (n) => n[e] || [];
    return ((t.isThemeGetter = !0), t);
  },
  RE = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  lL = /^\d+\/\d+$/,
  uL = new Set(["px", "full", "screen"]),
  cL = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  fL =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  dL = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  hL = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  pL =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Wn = (e) => wi(e) || uL.has(e) || lL.test(e),
  hr = (e) => Zi(e, "length", EL),
  wi = (e) => !!e && !Number.isNaN(Number(e)),
  bf = (e) => Zi(e, "number", wi),
  vs = (e) => !!e && Number.isInteger(Number(e)),
  mL = (e) => e.endsWith("%") && wi(e.slice(0, -1)),
  ie = (e) => RE.test(e),
  pr = (e) => cL.test(e),
  gL = new Set(["length", "size", "percentage"]),
  yL = (e) => Zi(e, gL, TE),
  vL = (e) => Zi(e, "position", TE),
  wL = new Set(["image", "url"]),
  xL = (e) => Zi(e, wL, bL),
  SL = (e) => Zi(e, "", CL),
  ws = () => !0,
  Zi = (e, t, n) => {
    const r = RE.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  EL = (e) => fL.test(e) && !dL.test(e),
  TE = () => !1,
  CL = (e) => hL.test(e),
  bL = (e) => pL.test(e),
  PL = () => {
    const e = Pe("colors"),
      t = Pe("spacing"),
      n = Pe("blur"),
      r = Pe("brightness"),
      o = Pe("borderColor"),
      i = Pe("borderRadius"),
      s = Pe("borderSpacing"),
      a = Pe("borderWidth"),
      l = Pe("contrast"),
      u = Pe("grayscale"),
      c = Pe("hueRotate"),
      f = Pe("invert"),
      d = Pe("gap"),
      m = Pe("gradientColorStops"),
      v = Pe("gradientColorStopPositions"),
      p = Pe("inset"),
      w = Pe("margin"),
      g = Pe("opacity"),
      y = Pe("padding"),
      x = Pe("saturate"),
      S = Pe("scale"),
      b = Pe("sepia"),
      T = Pe("skew"),
      C = Pe("space"),
      R = Pe("translate"),
      L = () => ["auto", "contain", "none"],
      D = () => ["auto", "hidden", "clip", "visible", "scroll"],
      B = () => ["auto", ie, t],
      V = () => [ie, t],
      Y = () => ["", Wn, hr],
      W = () => ["auto", wi, ie],
      se = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      J = () => ["solid", "dashed", "dotted", "double", "none"],
      Z = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      M = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      N = () => ["", "0", ie],
      F = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      K = () => [wi, ie];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [ws],
        spacing: [Wn, hr],
        blur: ["none", "", pr, ie],
        brightness: K(),
        borderColor: [e],
        borderRadius: ["none", "", "full", pr, ie],
        borderSpacing: V(),
        borderWidth: Y(),
        contrast: K(),
        grayscale: N(),
        hueRotate: K(),
        invert: N(),
        gap: V(),
        gradientColorStops: [e],
        gradientColorStopPositions: [mL, hr],
        inset: B(),
        margin: B(),
        opacity: K(),
        padding: V(),
        saturate: K(),
        scale: K(),
        sepia: N(),
        skew: K(),
        space: V(),
        translate: V(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", ie] }],
        container: ["container"],
        columns: [{ columns: [pr] }],
        "break-after": [{ "break-after": F() }],
        "break-before": [{ "break-before": F() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...se(), ie] }],
        overflow: [{ overflow: D() }],
        "overflow-x": [{ "overflow-x": D() }],
        "overflow-y": [{ "overflow-y": D() }],
        overscroll: [{ overscroll: L() }],
        "overscroll-x": [{ "overscroll-x": L() }],
        "overscroll-y": [{ "overscroll-y": L() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [p] }],
        "inset-x": [{ "inset-x": [p] }],
        "inset-y": [{ "inset-y": [p] }],
        start: [{ start: [p] }],
        end: [{ end: [p] }],
        top: [{ top: [p] }],
        right: [{ right: [p] }],
        bottom: [{ bottom: [p] }],
        left: [{ left: [p] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", vs, ie] }],
        basis: [{ basis: B() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", ie] }],
        grow: [{ grow: N() }],
        shrink: [{ shrink: N() }],
        order: [{ order: ["first", "last", "none", vs, ie] }],
        "grid-cols": [{ "grid-cols": [ws] }],
        "col-start-end": [{ col: ["auto", { span: ["full", vs, ie] }, ie] }],
        "col-start": [{ "col-start": W() }],
        "col-end": [{ "col-end": W() }],
        "grid-rows": [{ "grid-rows": [ws] }],
        "row-start-end": [{ row: ["auto", { span: [vs, ie] }, ie] }],
        "row-start": [{ "row-start": W() }],
        "row-end": [{ "row-end": W() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", ie] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", ie] }],
        gap: [{ gap: [d] }],
        "gap-x": [{ "gap-x": [d] }],
        "gap-y": [{ "gap-y": [d] }],
        "justify-content": [{ justify: ["normal", ...M()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...M(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...M(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [y] }],
        px: [{ px: [y] }],
        py: [{ py: [y] }],
        ps: [{ ps: [y] }],
        pe: [{ pe: [y] }],
        pt: [{ pt: [y] }],
        pr: [{ pr: [y] }],
        pb: [{ pb: [y] }],
        pl: [{ pl: [y] }],
        m: [{ m: [w] }],
        mx: [{ mx: [w] }],
        my: [{ my: [w] }],
        ms: [{ ms: [w] }],
        me: [{ me: [w] }],
        mt: [{ mt: [w] }],
        mr: [{ mr: [w] }],
        mb: [{ mb: [w] }],
        ml: [{ ml: [w] }],
        "space-x": [{ "space-x": [C] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [C] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ie, t] }],
        "min-w": [{ "min-w": [ie, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              ie,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [pr] },
              pr,
            ],
          },
        ],
        h: [{ h: [ie, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [ie, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [ie, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [ie, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", pr, hr] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              bf,
            ],
          },
        ],
        "font-family": [{ font: [ws] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              ie,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", wi, bf] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              Wn,
              ie,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", ie] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", ie] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [g] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [g] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...J(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", Wn, hr] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", Wn, ie] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: V() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              ie,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", ie] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [g] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...se(), vL] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", yL] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              xL,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [v] }],
        "gradient-via-pos": [{ via: [v] }],
        "gradient-to-pos": [{ to: [v] }],
        "gradient-from": [{ from: [m] }],
        "gradient-via": [{ via: [m] }],
        "gradient-to": [{ to: [m] }],
        rounded: [{ rounded: [i] }],
        "rounded-s": [{ "rounded-s": [i] }],
        "rounded-e": [{ "rounded-e": [i] }],
        "rounded-t": [{ "rounded-t": [i] }],
        "rounded-r": [{ "rounded-r": [i] }],
        "rounded-b": [{ "rounded-b": [i] }],
        "rounded-l": [{ "rounded-l": [i] }],
        "rounded-ss": [{ "rounded-ss": [i] }],
        "rounded-se": [{ "rounded-se": [i] }],
        "rounded-ee": [{ "rounded-ee": [i] }],
        "rounded-es": [{ "rounded-es": [i] }],
        "rounded-tl": [{ "rounded-tl": [i] }],
        "rounded-tr": [{ "rounded-tr": [i] }],
        "rounded-br": [{ "rounded-br": [i] }],
        "rounded-bl": [{ "rounded-bl": [i] }],
        "border-w": [{ border: [a] }],
        "border-w-x": [{ "border-x": [a] }],
        "border-w-y": [{ "border-y": [a] }],
        "border-w-s": [{ "border-s": [a] }],
        "border-w-e": [{ "border-e": [a] }],
        "border-w-t": [{ "border-t": [a] }],
        "border-w-r": [{ "border-r": [a] }],
        "border-w-b": [{ "border-b": [a] }],
        "border-w-l": [{ "border-l": [a] }],
        "border-opacity": [{ "border-opacity": [g] }],
        "border-style": [{ border: [...J(), "hidden"] }],
        "divide-x": [{ "divide-x": [a] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [a] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [g] }],
        "divide-style": [{ divide: J() }],
        "border-color": [{ border: [o] }],
        "border-color-x": [{ "border-x": [o] }],
        "border-color-y": [{ "border-y": [o] }],
        "border-color-s": [{ "border-s": [o] }],
        "border-color-e": [{ "border-e": [o] }],
        "border-color-t": [{ "border-t": [o] }],
        "border-color-r": [{ "border-r": [o] }],
        "border-color-b": [{ "border-b": [o] }],
        "border-color-l": [{ "border-l": [o] }],
        "divide-color": [{ divide: [o] }],
        "outline-style": [{ outline: ["", ...J()] }],
        "outline-offset": [{ "outline-offset": [Wn, ie] }],
        "outline-w": [{ outline: [Wn, hr] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: Y() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [g] }],
        "ring-offset-w": [{ "ring-offset": [Wn, hr] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", pr, SL] }],
        "shadow-color": [{ shadow: [ws] }],
        opacity: [{ opacity: [g] }],
        "mix-blend": [{ "mix-blend": [...Z(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": Z() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [l] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", pr, ie] }],
        grayscale: [{ grayscale: [u] }],
        "hue-rotate": [{ "hue-rotate": [c] }],
        invert: [{ invert: [f] }],
        saturate: [{ saturate: [x] }],
        sepia: [{ sepia: [b] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [l] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
        "backdrop-invert": [{ "backdrop-invert": [f] }],
        "backdrop-opacity": [{ "backdrop-opacity": [g] }],
        "backdrop-saturate": [{ "backdrop-saturate": [x] }],
        "backdrop-sepia": [{ "backdrop-sepia": [b] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [s] }],
        "border-spacing-x": [{ "border-spacing-x": [s] }],
        "border-spacing-y": [{ "border-spacing-y": [s] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              ie,
            ],
          },
        ],
        duration: [{ duration: K() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", ie] }],
        delay: [{ delay: K() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", ie] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [S] }],
        "scale-x": [{ "scale-x": [S] }],
        "scale-y": [{ "scale-y": [S] }],
        rotate: [{ rotate: [vs, ie] }],
        "translate-x": [{ "translate-x": [R] }],
        "translate-y": [{ "translate-y": [R] }],
        "skew-x": [{ "skew-x": [T] }],
        "skew-y": [{ "skew-y": [T] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              ie,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              ie,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": V() }],
        "scroll-mx": [{ "scroll-mx": V() }],
        "scroll-my": [{ "scroll-my": V() }],
        "scroll-ms": [{ "scroll-ms": V() }],
        "scroll-me": [{ "scroll-me": V() }],
        "scroll-mt": [{ "scroll-mt": V() }],
        "scroll-mr": [{ "scroll-mr": V() }],
        "scroll-mb": [{ "scroll-mb": V() }],
        "scroll-ml": [{ "scroll-ml": V() }],
        "scroll-p": [{ "scroll-p": V() }],
        "scroll-px": [{ "scroll-px": V() }],
        "scroll-py": [{ "scroll-py": V() }],
        "scroll-ps": [{ "scroll-ps": V() }],
        "scroll-pe": [{ "scroll-pe": V() }],
        "scroll-pt": [{ "scroll-pt": V() }],
        "scroll-pr": [{ "scroll-pr": V() }],
        "scroll-pb": [{ "scroll-pb": V() }],
        "scroll-pl": [{ "scroll-pl": V() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", ie] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [Wn, hr, bf] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  RL = aL(PL);
function Be(...e) {
  return RL(SE(e));
}
function gU(e) {
  return new Date(e).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
function yU(e) {
  const t = Math.floor(e / 6),
    n = e % 6;
  return n > 0 ? `${t}.${n}` : `${t}.0`;
}
function vU(e, t) {
  return t === 0 ? 0 : parseFloat(((e / t) * 6).toFixed(2));
}
function wU(e, t, n) {
  if (n === 0) return 0;
  const r = e - t;
  return parseFloat(((r / n) * 6).toFixed(2));
}
const TL = EE(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
    {
      variants: {
        variant: {
          default:
            "bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-500 hover:to-blue-400 shadow-lg shadow-blue-500/25",
          destructive:
            "bg-gradient-to-r from-red-600 to-red-500 text-white hover:from-red-500 hover:to-red-400 shadow-lg shadow-red-500/25",
          outline:
            "border border-white/20 bg-transparent text-white hover:bg-white/10 hover:border-white/30",
          secondary:
            "bg-white/10 text-white hover:bg-white/15 border border-white/10",
          ghost: "text-white hover:bg-white/10",
          link: "text-blue-400 underline-offset-4 hover:underline",
          glass: "glass-card text-white hover:bg-white/10",
          sport:
            "bg-gradient-to-r from-electric to-blue-500 text-white font-bold hover:brightness-110 shadow-lg shadow-electric/30",
        },
        size: {
          default: "h-11 px-6 py-2",
          sm: "h-9 px-4 text-xs",
          lg: "h-14 px-8 text-base",
          icon: "h-11 w-11",
          "icon-sm": "h-9 w-9",
          "icon-lg": "h-14 w-14",
          touch: "h-14 px-6 text-base min-w-[120px]",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    },
  ),
  ih = h.forwardRef(
    (
      {
        className: e,
        variant: t,
        size: n,
        asChild: r = !1,
        isLoading: o,
        children: i,
        disabled: s,
        ...a
      },
      l,
    ) => {
      const u = r ? zN : "button";
      return E.jsx(u, {
        className: Be(TL({ variant: t, size: n, className: e })),
        ref: l,
        disabled: s || o,
        ...a,
        children: o
          ? E.jsxs(E.Fragment, {
              children: [
                E.jsxs("svg", {
                  className: "animate-spin h-4 w-4",
                  viewBox: "0 0 24 24",
                  children: [
                    E.jsx("circle", {
                      className: "opacity-25",
                      cx: "12",
                      cy: "12",
                      r: "10",
                      stroke: "currentColor",
                      strokeWidth: "4",
                      fill: "none",
                    }),
                    E.jsx("path", {
                      className: "opacity-75",
                      fill: "currentColor",
                      d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                    }),
                  ],
                }),
                E.jsx("span", { className: "ml-2", children: "Loading..." }),
              ],
            })
          : i,
      });
    },
  );
ih.displayName = "Button";
function AL(e, t = []) {
  let n = [];
  function r(i, s) {
    const a = h.createContext(s);
    a.displayName = i + "Context";
    const l = n.length;
    n = [...n, s];
    const u = (f) => {
      var g;
      const { scope: d, children: m, ...v } = f,
        p = ((g = d == null ? void 0 : d[e]) == null ? void 0 : g[l]) || a,
        w = h.useMemo(() => v, Object.values(v));
      return E.jsx(p.Provider, { value: w, children: m });
    };
    u.displayName = i + "Provider";
    function c(f, d) {
      var p;
      const m = ((p = d == null ? void 0 : d[e]) == null ? void 0 : p[l]) || a,
        v = h.useContext(m);
      if (v) return v;
      if (s !== void 0) return s;
      throw new Error(`\`${f}\` must be used within \`${i}\``);
    }
    return [u, c];
  }
  const o = () => {
    const i = n.map((s) => h.createContext(s));
    return function (a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return h.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
    };
  };
  return ((o.scopeName = e), [r, _L(o, ...t)]);
}
function _L(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const s = r.reduce((a, { useScope: l, scopeName: u }) => {
        const f = l(i)[`__scope${u}`];
        return { ...a, ...f };
      }, {});
      return h.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return ((n.scopeName = t.scopeName), n);
}
function In(e) {
  const t = h.useRef(e);
  return (
    h.useEffect(() => {
      t.current = e;
    }),
    h.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      [],
    )
  );
}
var vn =
    globalThis != null && globalThis.document ? h.useLayoutEffect : () => {},
  ML = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  im = ML.reduce((e, t) => {
    const n = wE(`Primitive.${t}`),
      r = h.forwardRef((o, i) => {
        const { asChild: s, ...a } = o,
          l = s ? n : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          E.jsx(l, { ...a, ref: i })
        );
      });
    return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
  }, {}),
  AE = { exports: {} },
  _E = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ui = h;
function kL(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var DL = typeof Object.is == "function" ? Object.is : kL,
  OL = Ui.useState,
  NL = Ui.useEffect,
  LL = Ui.useLayoutEffect,
  jL = Ui.useDebugValue;
function IL(e, t) {
  var n = t(),
    r = OL({ inst: { value: n, getSnapshot: t } }),
    o = r[0].inst,
    i = r[1];
  return (
    LL(
      function () {
        ((o.value = n), (o.getSnapshot = t), Pf(o) && i({ inst: o }));
      },
      [e, n, t],
    ),
    NL(
      function () {
        return (
          Pf(o) && i({ inst: o }),
          e(function () {
            Pf(o) && i({ inst: o });
          })
        );
      },
      [e],
    ),
    jL(n),
    n
  );
}
function Pf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !DL(e, n);
  } catch {
    return !0;
  }
}
function FL(e, t) {
  return t();
}
var VL =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? FL
    : IL;
_E.useSyncExternalStore =
  Ui.useSyncExternalStore !== void 0 ? Ui.useSyncExternalStore : VL;
AE.exports = _E;
var ME = AE.exports;
function BL() {
  return ME.useSyncExternalStore(
    UL,
    () => !0,
    () => !1,
  );
}
function UL() {
  return () => {};
}
var sm = "Avatar",
  [$L] = AL(sm),
  [zL, kE] = $L(sm),
  DE = h.forwardRef((e, t) => {
    const { __scopeAvatar: n, ...r } = e,
      [o, i] = h.useState("idle");
    return E.jsx(zL, {
      scope: n,
      imageLoadingStatus: o,
      onImageLoadingStatusChange: i,
      children: E.jsx(im.span, { ...r, ref: t }),
    });
  });
DE.displayName = sm;
var OE = "AvatarImage",
  NE = h.forwardRef((e, t) => {
    const {
        __scopeAvatar: n,
        src: r,
        onLoadingStatusChange: o = () => {},
        ...i
      } = e,
      s = kE(OE, n),
      a = WL(r, i),
      l = In((u) => {
        (o(u), s.onImageLoadingStatusChange(u));
      });
    return (
      vn(() => {
        a !== "idle" && l(a);
      }, [a, l]),
      a === "loaded" ? E.jsx(im.img, { ...i, ref: t, src: r }) : null
    );
  });
NE.displayName = OE;
var LE = "AvatarFallback",
  jE = h.forwardRef((e, t) => {
    const { __scopeAvatar: n, delayMs: r, ...o } = e,
      i = kE(LE, n),
      [s, a] = h.useState(r === void 0);
    return (
      h.useEffect(() => {
        if (r !== void 0) {
          const l = window.setTimeout(() => a(!0), r);
          return () => window.clearTimeout(l);
        }
      }, [r]),
      s && i.imageLoadingStatus !== "loaded"
        ? E.jsx(im.span, { ...o, ref: t })
        : null
    );
  });
jE.displayName = LE;
function Xv(e, t) {
  return e
    ? t
      ? (e.src !== t && (e.src = t),
        e.complete && e.naturalWidth > 0 ? "loaded" : "loading")
      : "error"
    : "idle";
}
function WL(e, { referrerPolicy: t, crossOrigin: n }) {
  const r = BL(),
    o = h.useRef(null),
    i = r ? (o.current || (o.current = new window.Image()), o.current) : null,
    [s, a] = h.useState(() => Xv(i, e));
  return (
    vn(() => {
      a(Xv(i, e));
    }, [i, e]),
    vn(() => {
      const l = (f) => () => {
        a(f);
      };
      if (!i) return;
      const u = l("loaded"),
        c = l("error");
      return (
        i.addEventListener("load", u),
        i.addEventListener("error", c),
        t && (i.referrerPolicy = t),
        typeof n == "string" && (i.crossOrigin = n),
        () => {
          (i.removeEventListener("load", u), i.removeEventListener("error", c));
        }
      );
    }, [i, n, t]),
    s
  );
}
var IE = DE,
  FE = NE,
  VE = jE;
const BE = h.forwardRef(({ className: e, ...t }, n) =>
  E.jsx(IE, {
    ref: n,
    className: Be(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-white/10",
      e,
    ),
    ...t,
  }),
);
BE.displayName = IE.displayName;
const UE = h.forwardRef(({ className: e, ...t }, n) =>
  E.jsx(FE, {
    ref: n,
    className: Be("aspect-square h-full w-full object-cover", e),
    ...t,
  }),
);
UE.displayName = FE.displayName;
const $E = h.forwardRef(({ className: e, ...t }, n) =>
  E.jsx(VE, {
    ref: n,
    className: Be(
      "flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-white text-sm font-medium",
      e,
    ),
    ...t,
  }),
);
$E.displayName = VE.displayName;
const HL = EE(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-blue-600/20 text-blue-400 hover:bg-blue-600/30",
        secondary:
          "border-transparent bg-white/10 text-white/80 hover:bg-white/15",
        destructive:
          "border-transparent bg-red-500/20 text-red-400 hover:bg-red-500/30",
        outline: "text-white border-white/20",
        success:
          "border-transparent bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30",
        warning:
          "border-transparent bg-amber-500/20 text-amber-400 hover:bg-amber-500/30",
        live: "border-transparent bg-red-500/20 text-red-400 animate-pulse",
      },
    },
    defaultVariants: { variant: "default" },
  },
);
function KL({ className: e, variant: t, ...n }) {
  return E.jsx("div", { className: Be(HL({ variant: t }), e), ...n });
}
const GL = {},
  Yv = (e) => {
    let t;
    const n = new Set(),
      r = (c, f) => {
        const d = typeof c == "function" ? c(t) : c;
        if (!Object.is(d, t)) {
          const m = t;
          ((t =
            (f ?? (typeof d != "object" || d === null))
              ? d
              : Object.assign({}, t, d)),
            n.forEach((v) => v(t, m)));
        }
      },
      o = () => t,
      l = {
        setState: r,
        getState: o,
        getInitialState: () => u,
        subscribe: (c) => (n.add(c), () => n.delete(c)),
        destroy: () => {
          ((GL ? "production" : void 0) !== "production" &&
            console.warn(
              "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected.",
            ),
            n.clear());
        },
      },
      u = (t = e(r, o, l));
    return l;
  },
  qL = (e) => (e ? Yv(e) : Yv);
var zE = { exports: {} },
  WE = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dc = h,
  QL = ME;
function XL(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var YL = typeof Object.is == "function" ? Object.is : XL,
  ZL = QL.useSyncExternalStore,
  JL = dc.useRef,
  e2 = dc.useEffect,
  t2 = dc.useMemo,
  n2 = dc.useDebugValue;
WE.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
  var i = JL(null);
  if (i.current === null) {
    var s = { hasValue: !1, value: null };
    i.current = s;
  } else s = i.current;
  i = t2(
    function () {
      function l(m) {
        if (!u) {
          if (((u = !0), (c = m), (m = r(m)), o !== void 0 && s.hasValue)) {
            var v = s.value;
            if (o(v, m)) return (f = v);
          }
          return (f = m);
        }
        if (((v = f), YL(c, m))) return v;
        var p = r(m);
        return o !== void 0 && o(v, p) ? ((c = m), v) : ((c = m), (f = p));
      }
      var u = !1,
        c,
        f,
        d = n === void 0 ? null : n;
      return [
        function () {
          return l(t());
        },
        d === null
          ? void 0
          : function () {
              return l(d());
            },
      ];
    },
    [t, n, r, o],
  );
  var a = ZL(e, i[0], i[1]);
  return (
    e2(
      function () {
        ((s.hasValue = !0), (s.value = a));
      },
      [a],
    ),
    n2(a),
    a
  );
};
zE.exports = WE;
var r2 = zE.exports;
const o2 = Sh(r2),
  HE = {},
  { useDebugValue: i2 } = Pn,
  { useSyncExternalStoreWithSelector: s2 } = o2;
let Zv = !1;
const a2 = (e) => e;
function l2(e, t = a2, n) {
  (HE ? "production" : void 0) !== "production" &&
    n &&
    !Zv &&
    (console.warn(
      "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937",
    ),
    (Zv = !0));
  const r = s2(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    n,
  );
  return (i2(r), r);
}
const Jv = (e) => {
    (HE ? "production" : void 0) !== "production" &&
      typeof e != "function" &&
      console.warn(
        "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.",
      );
    const t = typeof e == "function" ? qL(e) : e,
      n = (r, o) => l2(t, r, o);
    return (Object.assign(n, t), n);
  },
  am = (e) => (e ? Jv(e) : Jv),
  u2 = {};
function c2(e, t) {
  let n;
  try {
    n = e();
  } catch {
    return;
  }
  return {
    getItem: (o) => {
      var i;
      const s = (l) => (l === null ? null : JSON.parse(l, void 0)),
        a = (i = n.getItem(o)) != null ? i : null;
      return a instanceof Promise ? a.then(s) : s(a);
    },
    setItem: (o, i) => n.setItem(o, JSON.stringify(i, void 0)),
    removeItem: (o) => n.removeItem(o),
  };
}
const ga = (e) => (t) => {
    try {
      const n = e(t);
      return n instanceof Promise
        ? n
        : {
            then(r) {
              return ga(r)(n);
            },
            catch(r) {
              return this;
            },
          };
    } catch (n) {
      return {
        then(r) {
          return this;
        },
        catch(r) {
          return ga(r)(n);
        },
      };
    }
  },
  f2 = (e, t) => (n, r, o) => {
    let i = {
        getStorage: () => localStorage,
        serialize: JSON.stringify,
        deserialize: JSON.parse,
        partialize: (w) => w,
        version: 0,
        merge: (w, g) => ({ ...g, ...w }),
        ...t,
      },
      s = !1;
    const a = new Set(),
      l = new Set();
    let u;
    try {
      u = i.getStorage();
    } catch {}
    if (!u)
      return e(
        (...w) => {
          (console.warn(
            `[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`,
          ),
            n(...w));
        },
        r,
        o,
      );
    const c = ga(i.serialize),
      f = () => {
        const w = i.partialize({ ...r() });
        let g;
        const y = c({ state: w, version: i.version })
          .then((x) => u.setItem(i.name, x))
          .catch((x) => {
            g = x;
          });
        if (g) throw g;
        return y;
      },
      d = o.setState;
    o.setState = (w, g) => {
      (d(w, g), f());
    };
    const m = e(
      (...w) => {
        (n(...w), f());
      },
      r,
      o,
    );
    let v;
    const p = () => {
      var w;
      if (!u) return;
      ((s = !1), a.forEach((y) => y(r())));
      const g =
        ((w = i.onRehydrateStorage) == null ? void 0 : w.call(i, r())) ||
        void 0;
      return ga(u.getItem.bind(u))(i.name)
        .then((y) => {
          if (y) return i.deserialize(y);
        })
        .then((y) => {
          if (y)
            if (typeof y.version == "number" && y.version !== i.version) {
              if (i.migrate) return i.migrate(y.state, y.version);
              console.error(
                "State loaded from storage couldn't be migrated since no migrate function was provided",
              );
            } else return y.state;
        })
        .then((y) => {
          var x;
          return ((v = i.merge(y, (x = r()) != null ? x : m)), n(v, !0), f());
        })
        .then(() => {
          (g == null || g(v, void 0), (s = !0), l.forEach((y) => y(v)));
        })
        .catch((y) => {
          g == null || g(void 0, y);
        });
    };
    return (
      (o.persist = {
        setOptions: (w) => {
          ((i = { ...i, ...w }), w.getStorage && (u = w.getStorage()));
        },
        clearStorage: () => {
          u == null || u.removeItem(i.name);
        },
        getOptions: () => i,
        rehydrate: () => p(),
        hasHydrated: () => s,
        onHydrate: (w) => (
          a.add(w),
          () => {
            a.delete(w);
          }
        ),
        onFinishHydration: (w) => (
          l.add(w),
          () => {
            l.delete(w);
          }
        ),
      }),
      p(),
      v || m
    );
  },
  d2 = (e, t) => (n, r, o) => {
    let i = {
        storage: c2(() => localStorage),
        partialize: (p) => p,
        version: 0,
        merge: (p, w) => ({ ...w, ...p }),
        ...t,
      },
      s = !1;
    const a = new Set(),
      l = new Set();
    let u = i.storage;
    if (!u)
      return e(
        (...p) => {
          (console.warn(
            `[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`,
          ),
            n(...p));
        },
        r,
        o,
      );
    const c = () => {
        const p = i.partialize({ ...r() });
        return u.setItem(i.name, { state: p, version: i.version });
      },
      f = o.setState;
    o.setState = (p, w) => {
      (f(p, w), c());
    };
    const d = e(
      (...p) => {
        (n(...p), c());
      },
      r,
      o,
    );
    o.getInitialState = () => d;
    let m;
    const v = () => {
      var p, w;
      if (!u) return;
      ((s = !1),
        a.forEach((y) => {
          var x;
          return y((x = r()) != null ? x : d);
        }));
      const g =
        ((w = i.onRehydrateStorage) == null
          ? void 0
          : w.call(i, (p = r()) != null ? p : d)) || void 0;
      return ga(u.getItem.bind(u))(i.name)
        .then((y) => {
          if (y)
            if (typeof y.version == "number" && y.version !== i.version) {
              if (i.migrate) return [!0, i.migrate(y.state, y.version)];
              console.error(
                "State loaded from storage couldn't be migrated since no migrate function was provided",
              );
            } else return [!1, y.state];
          return [!1, void 0];
        })
        .then((y) => {
          var x;
          const [S, b] = y;
          if (((m = i.merge(b, (x = r()) != null ? x : d)), n(m, !0), S))
            return c();
        })
        .then(() => {
          (g == null || g(m, void 0),
            (m = r()),
            (s = !0),
            l.forEach((y) => y(m)));
        })
        .catch((y) => {
          g == null || g(void 0, y);
        });
    };
    return (
      (o.persist = {
        setOptions: (p) => {
          ((i = { ...i, ...p }), p.storage && (u = p.storage));
        },
        clearStorage: () => {
          u == null || u.removeItem(i.name);
        },
        getOptions: () => i,
        rehydrate: () => v(),
        hasHydrated: () => s,
        onHydrate: (p) => (
          a.add(p),
          () => {
            a.delete(p);
          }
        ),
        onFinishHydration: (p) => (
          l.add(p),
          () => {
            l.delete(p);
          }
        ),
      }),
      i.skipHydration || v(),
      m || d
    );
  },
  h2 = (e, t) =>
    "getStorage" in t || "serialize" in t || "deserialize" in t
      ? ((u2 ? "production" : void 0) !== "production" &&
          console.warn(
            "[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead.",
          ),
        f2(e, t))
      : d2(e, t),
  p2 = h2,
  Da = am()(
    p2(
      (e) => ({
        user: null,
        token: null,
        isAuthenticated: !1,
        isLoading: !1,
        setUser: (t) => e({ user: t }),
        setToken: (t) => e({ token: t }),
        setAuthenticated: (t) => e({ isAuthenticated: t }),
        setLoading: (t) => e({ isLoading: t }),
        logout: () => e({ user: null, token: null, isAuthenticated: !1 }),
      }),
      {
        name: "cricop-auth",
        partialize: (e) => ({
          token: e.token,
          user: e.user,
          isAuthenticated: e.isAuthenticated,
        }),
      },
    ),
  ),
  e0 = {
    match: null,
    currentBatsmen: [null, null],
    currentBowler: null,
    onStrike: null,
    lastBalls: [],
    isFreeHit: !1,
    canUndo: !1,
    isLoading: !1,
  },
  xU = am((e) => ({
    matches: [],
    currentMatch: null,
    liveState: e0,
    setMatches: (t) => e({ matches: t }),
    setCurrentMatch: (t) => e({ currentMatch: t }),
    updateLiveState: (t) => e((n) => ({ liveState: { ...n.liveState, ...t } })),
    addBall: (t) =>
      e((n) => {
        var o;
        const r =
          (o = n.liveState.match) == null
            ? void 0
            : o.innings[n.liveState.match.currentInnings - 1];
        return (
          r && (!t.isWide && !t.isNoBall && (r.balls += 1), (r.runs += t.runs)),
          {
            liveState: {
              ...n.liveState,
              lastBalls: [t, ...n.liveState.lastBalls].slice(0, 6),
              canUndo: !0,
            },
          }
        );
      }),
    undoLastBall: () =>
      e((t) => ({
        liveState: {
          ...t.liveState,
          lastBalls: t.liveState.lastBalls.slice(1),
          canUndo: t.liveState.lastBalls.length > 1,
        },
      })),
    resetLiveState: () => e({ liveState: e0 }),
  })),
  lm = am((e) => ({
    toasts: [],
    sidebarOpen: !1,
    isMobile: !1,
    addToast: (t) =>
      e((n) => ({
        toasts: [
          ...n.toasts,
          { ...t, id: Math.random().toString(36).substring(7) },
        ],
      })),
    removeToast: (t) =>
      e((n) => ({ toasts: n.toasts.filter((r) => r.id !== t) })),
    setSidebarOpen: (t) => e({ sidebarOpen: t }),
    setIsMobile: (t) => e({ isMobile: t }),
  }));
function KE(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: m2 } = Object.prototype,
  { getPrototypeOf: hc } = Object,
  { iterator: pc, toStringTag: GE } = Symbol,
  mc = ((e) => (t) => {
    const n = m2.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Sn = (e) => ((e = e.toLowerCase()), (t) => mc(t) === e),
  gc = (e) => (t) => typeof t === e,
  { isArray: Ji } = Array,
  $i = gc("undefined");
function Oa(e) {
  return (
    e !== null &&
    !$i(e) &&
    e.constructor !== null &&
    !$i(e.constructor) &&
    kt(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const qE = Sn("ArrayBuffer");
function g2(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && qE(e.buffer)),
    t
  );
}
const y2 = gc("string"),
  kt = gc("function"),
  QE = gc("number"),
  Na = (e) => e !== null && typeof e == "object",
  v2 = (e) => e === !0 || e === !1,
  zl = (e) => {
    if (mc(e) !== "object") return !1;
    const t = hc(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(GE in e) &&
      !(pc in e)
    );
  },
  w2 = (e) => {
    if (!Na(e) || Oa(e)) return !1;
    try {
      return (
        Object.keys(e).length === 0 &&
        Object.getPrototypeOf(e) === Object.prototype
      );
    } catch {
      return !1;
    }
  },
  x2 = Sn("Date"),
  S2 = Sn("File"),
  E2 = (e) => !!(e && typeof e.uri < "u"),
  C2 = (e) => e && typeof e.getParts < "u",
  b2 = Sn("Blob"),
  P2 = Sn("FileList"),
  R2 = (e) => Na(e) && kt(e.pipe);
function T2() {
  return typeof globalThis < "u"
    ? globalThis
    : typeof self < "u"
      ? self
      : typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : {};
}
const t0 = T2(),
  n0 = typeof t0.FormData < "u" ? t0.FormData : void 0,
  A2 = (e) => {
    if (!e) return !1;
    if (n0 && e instanceof n0) return !0;
    const t = hc(e);
    if (!t || t === Object.prototype || !kt(e.append)) return !1;
    const n = mc(e);
    return (
      n === "formdata" ||
      (n === "object" && kt(e.toString) && e.toString() === "[object FormData]")
    );
  },
  _2 = Sn("URLSearchParams"),
  [M2, k2, D2, O2] = ["ReadableStream", "Request", "Response", "Headers"].map(
    Sn,
  ),
  N2 = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function La(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, o;
  if ((typeof e != "object" && (e = [e]), Ji(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    if (Oa(e)) return;
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      s = i.length;
    let a;
    for (r = 0; r < s; r++) ((a = i[r]), t.call(null, e[a], a, e));
  }
}
function XE(e, t) {
  if (Oa(e)) return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    o;
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
  return null;
}
const mo =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : global,
  YE = (e) => !$i(e) && e !== mo;
function sh(...e) {
  const { caseless: t, skipUndefined: n } = (YE(this) && this) || {},
    r = {},
    o = (i, s) => {
      if (s === "__proto__" || s === "constructor" || s === "prototype") return;
      const a = (t && XE(r, s)) || s,
        l = ah(r, a) ? r[a] : void 0;
      zl(l) && zl(i)
        ? (r[a] = sh(l, i))
        : zl(i)
          ? (r[a] = sh({}, i))
          : Ji(i)
            ? (r[a] = i.slice())
            : (!n || !$i(i)) && (r[a] = i);
    };
  for (let i = 0, s = e.length; i < s; i++) e[i] && La(e[i], o);
  return r;
}
const L2 = (e, t, n, { allOwnKeys: r } = {}) => (
    La(
      t,
      (o, i) => {
        n && kt(o)
          ? Object.defineProperty(e, i, {
              __proto__: null,
              value: KE(o, n),
              writable: !0,
              enumerable: !0,
              configurable: !0,
            })
          : Object.defineProperty(e, i, {
              __proto__: null,
              value: o,
              writable: !0,
              enumerable: !0,
              configurable: !0,
            });
      },
      { allOwnKeys: r },
    ),
    e
  ),
  j2 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  I2 = (e, t, n, r) => {
    ((e.prototype = Object.create(t.prototype, r)),
      Object.defineProperty(e.prototype, "constructor", {
        __proto__: null,
        value: e,
        writable: !0,
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "super", {
        __proto__: null,
        value: t.prototype,
      }),
      n && Object.assign(e.prototype, n));
  },
  F2 = (e, t, n, r) => {
    let o, i, s;
    const a = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
        ((s = o[i]),
          (!r || r(s, e, t)) && !a[s] && ((t[s] = e[s]), (a[s] = !0)));
      e = n !== !1 && hc(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  V2 = (e, t, n) => {
    ((e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length));
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  B2 = (e) => {
    if (!e) return null;
    if (Ji(e)) return e;
    let t = e.length;
    if (!QE(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  U2 = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && hc(Uint8Array)),
  $2 = (e, t) => {
    const r = (e && e[pc]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const i = o.value;
      t.call(e, i[0], i[1]);
    }
  },
  z2 = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  W2 = Sn("HTMLFormElement"),
  H2 = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  ah = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  K2 = Sn("RegExp"),
  ZE = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    (La(n, (o, i) => {
      let s;
      (s = t(o, i, e)) !== !1 && (r[i] = s || o);
    }),
      Object.defineProperties(e, r));
  },
  G2 = (e) => {
    ZE(e, (t, n) => {
      if (kt(e) && ["arguments", "caller", "callee"].includes(n)) return !1;
      const r = e[n];
      if (kt(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  q2 = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((i) => {
          n[i] = !0;
        });
      };
    return (Ji(e) ? r(e) : r(String(e).split(t)), n);
  },
  Q2 = () => {},
  X2 = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t);
function Y2(e) {
  return !!(e && kt(e.append) && e[GE] === "FormData" && e[pc]);
}
const Z2 = (e) => {
    const t = new WeakSet(),
      n = (r) => {
        if (Na(r)) {
          if (t.has(r)) return;
          if (Oa(r)) return r;
          if (!("toJSON" in r)) {
            t.add(r);
            const o = Ji(r) ? [] : {};
            return (
              La(r, (i, s) => {
                const a = n(i);
                !$i(a) && (o[s] = a);
              }),
              t.delete(r),
              o
            );
          }
        }
        return r;
      };
    return n(e);
  },
  J2 = Sn("AsyncFunction"),
  ej = (e) => e && (Na(e) || kt(e)) && kt(e.then) && kt(e.catch),
  JE = ((e, t) =>
    e
      ? setImmediate
      : t
        ? ((n, r) => (
            mo.addEventListener(
              "message",
              ({ source: o, data: i }) => {
                o === mo && i === n && r.length && r.shift()();
              },
              !1,
            ),
            (o) => {
              (r.push(o), mo.postMessage(n, "*"));
            }
          ))(`axios@${Math.random()}`, [])
        : (n) => setTimeout(n))(
    typeof setImmediate == "function",
    kt(mo.postMessage),
  ),
  tj =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(mo)
      : (typeof process < "u" && process.nextTick) || JE,
  nj = (e) => e != null && kt(e[pc]),
  _ = {
    isArray: Ji,
    isArrayBuffer: qE,
    isBuffer: Oa,
    isFormData: A2,
    isArrayBufferView: g2,
    isString: y2,
    isNumber: QE,
    isBoolean: v2,
    isObject: Na,
    isPlainObject: zl,
    isEmptyObject: w2,
    isReadableStream: M2,
    isRequest: k2,
    isResponse: D2,
    isHeaders: O2,
    isUndefined: $i,
    isDate: x2,
    isFile: S2,
    isReactNativeBlob: E2,
    isReactNative: C2,
    isBlob: b2,
    isRegExp: K2,
    isFunction: kt,
    isStream: R2,
    isURLSearchParams: _2,
    isTypedArray: U2,
    isFileList: P2,
    forEach: La,
    merge: sh,
    extend: L2,
    trim: N2,
    stripBOM: j2,
    inherits: I2,
    toFlatObject: F2,
    kindOf: mc,
    kindOfTest: Sn,
    endsWith: V2,
    toArray: B2,
    forEachEntry: $2,
    matchAll: z2,
    isHTMLForm: W2,
    hasOwnProperty: ah,
    hasOwnProp: ah,
    reduceDescriptors: ZE,
    freezeMethods: G2,
    toObjectSet: q2,
    toCamelCase: H2,
    noop: Q2,
    toFiniteNumber: X2,
    findKey: XE,
    global: mo,
    isContextDefined: YE,
    isSpecCompliantForm: Y2,
    toJSONObject: Z2,
    isAsyncFn: J2,
    isThenable: ej,
    setImmediate: JE,
    asap: tj,
    isIterable: nj,
  },
  rj = _.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  oj = (e) => {
    const t = {};
    let n, r, o;
    return (
      e &&
        e
          .split(
            `
`,
          )
          .forEach(function (s) {
            ((o = s.indexOf(":")),
              (n = s.substring(0, o).trim().toLowerCase()),
              (r = s.substring(o + 1).trim()),
              !(!n || (t[n] && rj[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r)));
          }),
      t
    );
  };
function ij(e) {
  let t = 0,
    n = e.length;
  for (; t < n; ) {
    const r = e.charCodeAt(t);
    if (r !== 9 && r !== 32) break;
    t += 1;
  }
  for (; n > t; ) {
    const r = e.charCodeAt(n - 1);
    if (r !== 9 && r !== 32) break;
    n -= 1;
  }
  return t === 0 && n === e.length ? e : e.slice(t, n);
}
const sj = new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g"),
  aj = new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
function um(e, t) {
  return _.isArray(e) ? e.map((n) => um(n, t)) : ij(String(e).replace(t, ""));
}
const lj = (e) => um(e, sj),
  uj = (e) => um(e, aj);
function eC(e) {
  const t = Object.create(null);
  return (
    _.forEach(e.toJSON(), (n, r) => {
      t[r] = uj(n);
    }),
    t
  );
}
const r0 = Symbol("internals");
function xs(e) {
  return e && String(e).trim().toLowerCase();
}
function Wl(e) {
  return e === !1 || e == null ? e : _.isArray(e) ? e.map(Wl) : lj(String(e));
}
function cj(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const fj = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Rf(e, t, n, r, o) {
  if (_.isFunction(r)) return r.call(this, t, n);
  if ((o && (t = n), !!_.isString(t))) {
    if (_.isString(r)) return t.indexOf(r) !== -1;
    if (_.isRegExp(r)) return r.test(t);
  }
}
function dj(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function hj(e, t) {
  const n = _.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      __proto__: null,
      value: function (o, i, s) {
        return this[r].call(this, t, o, i, s);
      },
      configurable: !0,
    });
  });
}
let xt = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function i(a, l, u) {
      const c = xs(l);
      if (!c) throw new Error("header name must be a non-empty string");
      const f = _.findKey(o, c);
      (!f || o[f] === void 0 || u === !0 || (u === void 0 && o[f] !== !1)) &&
        (o[f || l] = Wl(a));
    }
    const s = (a, l) => _.forEach(a, (u, c) => i(u, c, l));
    if (_.isPlainObject(t) || t instanceof this.constructor) s(t, n);
    else if (_.isString(t) && (t = t.trim()) && !fj(t)) s(oj(t), n);
    else if (_.isObject(t) && _.isIterable(t)) {
      let a = {},
        l,
        u;
      for (const c of t) {
        if (!_.isArray(c))
          throw TypeError("Object iterator must return a key-value pair");
        a[(u = c[0])] = (l = a[u])
          ? _.isArray(l)
            ? [...l, c[1]]
            : [l, c[1]]
          : c[1];
      }
      s(a, n);
    } else t != null && i(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = xs(t)), t)) {
      const r = _.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return cj(o);
        if (_.isFunction(n)) return n.call(this, o, r);
        if (_.isRegExp(n)) return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = xs(t)), t)) {
      const r = _.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Rf(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(s) {
      if (((s = xs(s)), s)) {
        const a = _.findKey(r, s);
        a && (!n || Rf(r, r[a], a, n)) && (delete r[a], (o = !0));
      }
    }
    return (_.isArray(t) ? t.forEach(i) : i(t), o);
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      o = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || Rf(this, this[i], i, t, !0)) && (delete this[i], (o = !0));
    }
    return o;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      _.forEach(this, (o, i) => {
        const s = _.findKey(r, i);
        if (s) {
          ((n[s] = Wl(o)), delete n[i]);
          return;
        }
        const a = t ? dj(i) : String(i).trim();
        (a !== i && delete n[i], (n[a] = Wl(o)), (r[a] = !0));
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      _.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && _.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return (n.forEach((o) => r.set(o)), r);
  }
  static accessor(t) {
    const r = (this[r0] = this[r0] = { accessors: {} }).accessors,
      o = this.prototype;
    function i(s) {
      const a = xs(s);
      r[a] || (hj(o, s), (r[a] = !0));
    }
    return (_.isArray(t) ? t.forEach(i) : i(t), this);
  }
};
xt.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
_.reduceDescriptors(xt.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
_.freezeMethods(xt);
const pj = "[REDACTED ****]";
function mj(e) {
  if (_.hasOwnProp(e, "toJSON")) return !0;
  let t = Object.getPrototypeOf(e);
  for (; t && t !== Object.prototype; ) {
    if (_.hasOwnProp(t, "toJSON")) return !0;
    t = Object.getPrototypeOf(t);
  }
  return !1;
}
function gj(e, t) {
  const n = new Set(t.map((i) => String(i).toLowerCase())),
    r = [],
    o = (i) => {
      if (i === null || typeof i != "object" || _.isBuffer(i)) return i;
      if (r.indexOf(i) !== -1) return;
      (i instanceof xt && (i = i.toJSON()), r.push(i));
      let s;
      if (_.isArray(i))
        ((s = []),
          i.forEach((a, l) => {
            const u = o(a);
            _.isUndefined(u) || (s[l] = u);
          }));
      else {
        if (!_.isPlainObject(i) && mj(i)) return (r.pop(), i);
        s = Object.create(null);
        for (const [a, l] of Object.entries(i)) {
          const u = n.has(a.toLowerCase()) ? pj : o(l);
          _.isUndefined(u) || (s[a] = u);
        }
      }
      return (r.pop(), s);
    };
  return o(e);
}
let H = class tC extends Error {
  static from(t, n, r, o, i, s) {
    const a = new tC(t.message, n || t.code, r, o, i);
    return (
      (a.cause = t),
      (a.name = t.name),
      t.status != null && a.status == null && (a.status = t.status),
      s && Object.assign(a, s),
      a
    );
  }
  constructor(t, n, r, o, i) {
    (super(t),
      Object.defineProperty(this, "message", {
        __proto__: null,
        value: t,
        enumerable: !0,
        writable: !0,
        configurable: !0,
      }),
      (this.name = "AxiosError"),
      (this.isAxiosError = !0),
      n && (this.code = n),
      r && (this.config = r),
      o && (this.request = o),
      i && ((this.response = i), (this.status = i.status)));
  }
  toJSON() {
    const t = this.config,
      n = t && _.hasOwnProp(t, "redact") ? t.redact : void 0,
      r = _.isArray(n) && n.length > 0 ? gj(t, n) : _.toJSONObject(t);
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: r,
      code: this.code,
      status: this.status,
    };
  }
};
H.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
H.ERR_BAD_OPTION = "ERR_BAD_OPTION";
H.ECONNABORTED = "ECONNABORTED";
H.ETIMEDOUT = "ETIMEDOUT";
H.ECONNREFUSED = "ECONNREFUSED";
H.ERR_NETWORK = "ERR_NETWORK";
H.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
H.ERR_DEPRECATED = "ERR_DEPRECATED";
H.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
H.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
H.ERR_CANCELED = "ERR_CANCELED";
H.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
H.ERR_INVALID_URL = "ERR_INVALID_URL";
H.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
const yj = null;
function lh(e) {
  return _.isPlainObject(e) || _.isArray(e);
}
function nC(e) {
  return _.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Tf(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, i) {
          return ((o = nC(o)), !n && i ? "[" + o + "]" : o);
        })
        .join(n ? "." : "")
    : t;
}
function vj(e) {
  return _.isArray(e) && !e.some(lh);
}
const wj = _.toFlatObject(_, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function yc(e, t, n) {
  if (!_.isObject(e)) throw new TypeError("target must be an object");
  ((t = t || new FormData()),
    (n = _.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (w, g) {
        return !_.isUndefined(g[w]);
      },
    )));
  const r = n.metaTokens,
    o = n.visitor || f,
    i = n.dots,
    s = n.indexes,
    a = n.Blob || (typeof Blob < "u" && Blob),
    l = n.maxDepth === void 0 ? 100 : n.maxDepth,
    u = a && _.isSpecCompliantForm(t);
  if (!_.isFunction(o)) throw new TypeError("visitor must be a function");
  function c(p) {
    if (p === null) return "";
    if (_.isDate(p)) return p.toISOString();
    if (_.isBoolean(p)) return p.toString();
    if (!u && _.isBlob(p))
      throw new H("Blob is not supported. Use a Buffer instead.");
    return _.isArrayBuffer(p) || _.isTypedArray(p)
      ? u && typeof Blob == "function"
        ? new Blob([p])
        : Buffer.from(p)
      : p;
  }
  function f(p, w, g) {
    let y = p;
    if (_.isReactNative(t) && _.isReactNativeBlob(p))
      return (t.append(Tf(g, w, i), c(p)), !1);
    if (p && !g && typeof p == "object") {
      if (_.endsWith(w, "{}"))
        ((w = r ? w : w.slice(0, -2)), (p = JSON.stringify(p)));
      else if (
        (_.isArray(p) && vj(p)) ||
        ((_.isFileList(p) || _.endsWith(w, "[]")) && (y = _.toArray(p)))
      )
        return (
          (w = nC(w)),
          y.forEach(function (S, b) {
            !(_.isUndefined(S) || S === null) &&
              t.append(
                s === !0 ? Tf([w], b, i) : s === null ? w : w + "[]",
                c(S),
              );
          }),
          !1
        );
    }
    return lh(p) ? !0 : (t.append(Tf(g, w, i), c(p)), !1);
  }
  const d = [],
    m = Object.assign(wj, {
      defaultVisitor: f,
      convertValue: c,
      isVisitable: lh,
    });
  function v(p, w, g = 0) {
    if (!_.isUndefined(p)) {
      if (g > l)
        throw new H(
          "Object is too deeply nested (" + g + " levels). Max depth: " + l,
          H.ERR_FORM_DATA_DEPTH_EXCEEDED,
        );
      if (d.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + w.join("."));
      (d.push(p),
        _.forEach(p, function (x, S) {
          (!(_.isUndefined(x) || x === null) &&
            o.call(t, x, _.isString(S) ? S.trim() : S, w, m)) === !0 &&
            v(x, w ? w.concat(S) : [S], g + 1);
        }),
        d.pop());
    }
  }
  if (!_.isObject(e)) throw new TypeError("data must be an object");
  return (v(e), t);
}
function o0(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20/g, function (r) {
    return t[r];
  });
}
function cm(e, t) {
  ((this._pairs = []), e && yc(e, this, t));
}
const rC = cm.prototype;
rC.append = function (t, n) {
  this._pairs.push([t, n]);
};
rC.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, o0);
      }
    : o0;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + "=" + n(o[1]);
    }, "")
    .join("&");
};
function xj(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+");
}
function oC(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || xj,
    o = _.isFunction(n) ? { serialize: n } : n,
    i = o && o.serialize;
  let s;
  if (
    (i
      ? (s = i(t, o))
      : (s = _.isURLSearchParams(t) ? t.toString() : new cm(t, o).toString(r)),
    s)
  ) {
    const a = e.indexOf("#");
    (a !== -1 && (e = e.slice(0, a)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + s));
  }
  return e;
}
class i0 {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    _.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const fm = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
    legacyInterceptorReqResOrdering: !0,
  },
  Sj = typeof URLSearchParams < "u" ? URLSearchParams : cm,
  Ej = typeof FormData < "u" ? FormData : null,
  Cj = typeof Blob < "u" ? Blob : null,
  bj = {
    isBrowser: !0,
    classes: { URLSearchParams: Sj, FormData: Ej, Blob: Cj },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  dm = typeof window < "u" && typeof document < "u",
  uh = (typeof navigator == "object" && navigator) || void 0,
  Pj =
    dm &&
    (!uh || ["ReactNative", "NativeScript", "NS"].indexOf(uh.product) < 0),
  Rj =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  Tj = (dm && window.location.href) || "http://localhost",
  Aj = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: dm,
        hasStandardBrowserEnv: Pj,
        hasStandardBrowserWebWorkerEnv: Rj,
        navigator: uh,
        origin: Tj,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  pt = { ...Aj, ...bj };
function _j(e, t) {
  return yc(e, new pt.classes.URLSearchParams(), {
    visitor: function (n, r, o, i) {
      return pt.isNode && _.isBuffer(n)
        ? (this.append(r, n.toString("base64")), !1)
        : i.defaultVisitor.apply(this, arguments);
    },
    ...t,
  });
}
function Mj(e) {
  return _.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0],
  );
}
function kj(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++) ((i = n[r]), (t[i] = e[i]));
  return t;
}
function iC(e) {
  function t(n, r, o, i) {
    let s = n[i++];
    if (s === "__proto__") return !0;
    const a = Number.isFinite(+s),
      l = i >= n.length;
    return (
      (s = !s && _.isArray(o) ? o.length : s),
      l
        ? (_.hasOwnProp(o, s)
            ? (o[s] = _.isArray(o[s]) ? o[s].concat(r) : [o[s], r])
            : (o[s] = r),
          !a)
        : ((!_.hasOwnProp(o, s) || !_.isObject(o[s])) && (o[s] = []),
          t(n, r, o[s], i) && _.isArray(o[s]) && (o[s] = kj(o[s])),
          !a)
    );
  }
  if (_.isFormData(e) && _.isFunction(e.entries)) {
    const n = {};
    return (
      _.forEachEntry(e, (r, o) => {
        t(Mj(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
const Ko = (e, t) => (e != null && _.hasOwnProp(e, t) ? e[t] : void 0);
function Dj(e, t, n) {
  if (_.isString(e))
    try {
      return ((t || JSON.parse)(e), _.trim(e));
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const ja = {
  transitional: fm,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        o = r.indexOf("application/json") > -1,
        i = _.isObject(t);
      if ((i && _.isHTMLForm(t) && (t = new FormData(t)), _.isFormData(t)))
        return o ? JSON.stringify(iC(t)) : t;
      if (
        _.isArrayBuffer(t) ||
        _.isBuffer(t) ||
        _.isStream(t) ||
        _.isFile(t) ||
        _.isBlob(t) ||
        _.isReadableStream(t)
      )
        return t;
      if (_.isArrayBufferView(t)) return t.buffer;
      if (_.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1,
          ),
          t.toString()
        );
      let a;
      if (i) {
        const l = Ko(this, "formSerializer");
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return _j(t, l).toString();
        if ((a = _.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const u = Ko(this, "env"),
            c = u && u.FormData;
          return yc(a ? { "files[]": t } : t, c && new c(), l);
        }
      }
      return i || o ? (n.setContentType("application/json", !1), Dj(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = Ko(this, "transitional") || ja.transitional,
        r = n && n.forcedJSONParsing,
        o = Ko(this, "responseType"),
        i = o === "json";
      if (_.isResponse(t) || _.isReadableStream(t)) return t;
      if (t && _.isString(t) && ((r && !o) || i)) {
        const a = !(n && n.silentJSONParsing) && i;
        try {
          return JSON.parse(t, Ko(this, "parseReviver"));
        } catch (l) {
          if (a)
            throw l.name === "SyntaxError"
              ? H.from(l, H.ERR_BAD_RESPONSE, this, null, Ko(this, "response"))
              : l;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: pt.classes.FormData, Blob: pt.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
_.forEach(["delete", "get", "head", "post", "put", "patch", "query"], (e) => {
  ja.headers[e] = {};
});
function Af(e, t) {
  const n = this || ja,
    r = t || n,
    o = xt.from(r.headers);
  let i = r.data;
  return (
    _.forEach(e, function (a) {
      i = a.call(n, i, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    i
  );
}
function sC(e) {
  return !!(e && e.__CANCEL__);
}
let Ia = class extends H {
  constructor(t, n, r) {
    (super(t ?? "canceled", H.ERR_CANCELED, n, r),
      (this.name = "CanceledError"),
      (this.__CANCEL__ = !0));
  }
};
function aC(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new H(
          "Request failed with status code " + n.status,
          n.status >= 400 && n.status < 500
            ? H.ERR_BAD_REQUEST
            : H.ERR_BAD_RESPONSE,
          n.config,
          n.request,
          n,
        ),
      );
}
function Oj(e) {
  const t = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e);
  return (t && t[1]) || "";
}
function Nj(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let o = 0,
    i = 0,
    s;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (l) {
      const u = Date.now(),
        c = r[i];
      (s || (s = u), (n[o] = l), (r[o] = u));
      let f = i,
        d = 0;
      for (; f !== o; ) ((d += n[f++]), (f = f % e));
      if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), u - s < t)) return;
      const m = c && u - c;
      return m ? Math.round((d * 1e3) / m) : void 0;
    }
  );
}
function Lj(e, t) {
  let n = 0,
    r = 1e3 / t,
    o,
    i;
  const s = (u, c = Date.now()) => {
    ((n = c), (o = null), i && (clearTimeout(i), (i = null)), e(...u));
  };
  return [
    (...u) => {
      const c = Date.now(),
        f = c - n;
      f >= r
        ? s(u, c)
        : ((o = u),
          i ||
            (i = setTimeout(() => {
              ((i = null), s(o));
            }, r - f)));
    },
    () => o && s(o),
  ];
}
const Du = (e, t, n = 3) => {
    let r = 0;
    const o = Nj(50, 250);
    return Lj((i) => {
      if (!i || typeof i.loaded != "number") return;
      const s = i.loaded,
        a = i.lengthComputable ? i.total : void 0,
        l = a != null ? Math.min(s, a) : s,
        u = Math.max(0, l - r),
        c = o(u);
      r = Math.max(r, l);
      const f = {
        loaded: l,
        total: a,
        progress: a ? l / a : void 0,
        bytes: u,
        rate: c || void 0,
        estimated: c && a ? (a - l) / c : void 0,
        event: i,
        lengthComputable: a != null,
        [t ? "download" : "upload"]: !0,
      };
      e(f);
    }, n);
  },
  s0 = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  a0 =
    (e) =>
    (...t) =>
      _.asap(() => e(...t)),
  jj = pt.hasStandardBrowserEnv
    ? ((e, t) => (n) => (
        (n = new URL(n, pt.origin)),
        e.protocol === n.protocol &&
          e.host === n.host &&
          (t || e.port === n.port)
      ))(
        new URL(pt.origin),
        pt.navigator && /(msie|trident)/i.test(pt.navigator.userAgent),
      )
    : () => !0,
  Ij = pt.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, o, i, s) {
          if (typeof document > "u") return;
          const a = [`${e}=${encodeURIComponent(t)}`];
          (_.isNumber(n) && a.push(`expires=${new Date(n).toUTCString()}`),
            _.isString(r) && a.push(`path=${r}`),
            _.isString(o) && a.push(`domain=${o}`),
            i === !0 && a.push("secure"),
            _.isString(s) && a.push(`SameSite=${s}`),
            (document.cookie = a.join("; ")));
        },
        read(e) {
          if (typeof document > "u") return null;
          const t = document.cookie.split(";");
          for (let n = 0; n < t.length; n++) {
            const r = t[n].replace(/^\s+/, ""),
              o = r.indexOf("=");
            if (o !== -1 && r.slice(0, o) === e)
              return decodeURIComponent(r.slice(o + 1));
          }
          return null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5, "/");
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function Fj(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Vj(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function lC(e, t, n) {
  let r = !Fj(t);
  return e && (r || n === !1) ? Vj(e, t) : t;
}
const l0 = (e) => (e instanceof xt ? { ...e } : e);
function Oo(e, t) {
  t = t || {};
  const n = Object.create(null);
  Object.defineProperty(n, "hasOwnProperty", {
    __proto__: null,
    value: Object.prototype.hasOwnProperty,
    enumerable: !1,
    writable: !0,
    configurable: !0,
  });
  function r(u, c, f, d) {
    return _.isPlainObject(u) && _.isPlainObject(c)
      ? _.merge.call({ caseless: d }, u, c)
      : _.isPlainObject(c)
        ? _.merge({}, c)
        : _.isArray(c)
          ? c.slice()
          : c;
  }
  function o(u, c, f, d) {
    if (_.isUndefined(c)) {
      if (!_.isUndefined(u)) return r(void 0, u, f, d);
    } else return r(u, c, f, d);
  }
  function i(u, c) {
    if (!_.isUndefined(c)) return r(void 0, c);
  }
  function s(u, c) {
    if (_.isUndefined(c)) {
      if (!_.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, c);
  }
  function a(u, c, f) {
    if (_.hasOwnProp(t, f)) return r(u, c);
    if (_.hasOwnProp(e, f)) return r(void 0, u);
  }
  const l = {
    url: i,
    method: i,
    data: i,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    withXSRFToken: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    allowedSocketPaths: s,
    responseEncoding: s,
    validateStatus: a,
    headers: (u, c, f) => o(l0(u), l0(c), f, !0),
  };
  return (
    _.forEach(Object.keys({ ...e, ...t }), function (c) {
      if (c === "__proto__" || c === "constructor" || c === "prototype") return;
      const f = _.hasOwnProp(l, c) ? l[c] : o,
        d = _.hasOwnProp(e, c) ? e[c] : void 0,
        m = _.hasOwnProp(t, c) ? t[c] : void 0,
        v = f(d, m, c);
      (_.isUndefined(v) && f !== a) || (n[c] = v);
    }),
    n
  );
}
const Bj = ["content-type", "content-length"];
function Uj(e, t, n) {
  if (n !== "content-only") {
    e.set(t);
    return;
  }
  Object.entries(t).forEach(([r, o]) => {
    Bj.includes(r.toLowerCase()) && e.set(r, o);
  });
}
const $j = (e) =>
    encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi, (t, n) =>
      String.fromCharCode(parseInt(n, 16)),
    ),
  uC = (e) => {
    const t = Oo({}, e),
      n = (d) => (_.hasOwnProp(t, d) ? t[d] : void 0),
      r = n("data");
    let o = n("withXSRFToken");
    const i = n("xsrfHeaderName"),
      s = n("xsrfCookieName");
    let a = n("headers");
    const l = n("auth"),
      u = n("baseURL"),
      c = n("allowAbsoluteUrls"),
      f = n("url");
    if (
      ((t.headers = a = xt.from(a)),
      (t.url = oC(lC(u, f, c), e.params, e.paramsSerializer)),
      l &&
        a.set(
          "Authorization",
          "Basic " +
            btoa((l.username || "") + ":" + (l.password ? $j(l.password) : "")),
        ),
      _.isFormData(r) &&
        (pt.hasStandardBrowserEnv || pt.hasStandardBrowserWebWorkerEnv
          ? a.setContentType(void 0)
          : _.isFunction(r.getHeaders) &&
            Uj(a, r.getHeaders(), n("formDataHeaderPolicy"))),
      pt.hasStandardBrowserEnv &&
        (_.isFunction(o) && (o = o(t)), o === !0 || (o == null && jj(t.url))))
    ) {
      const m = i && s && Ij.read(s);
      m && a.set(i, m);
    }
    return t;
  },
  zj = typeof XMLHttpRequest < "u",
  Wj =
    zj &&
    function (e) {
      return new Promise(function (n, r) {
        const o = uC(e);
        let i = o.data;
        const s = xt.from(o.headers).normalize();
        let { responseType: a, onUploadProgress: l, onDownloadProgress: u } = o,
          c,
          f,
          d,
          m,
          v;
        function p() {
          (m && m(),
            v && v(),
            o.cancelToken && o.cancelToken.unsubscribe(c),
            o.signal && o.signal.removeEventListener("abort", c));
        }
        let w = new XMLHttpRequest();
        (w.open(o.method.toUpperCase(), o.url, !0), (w.timeout = o.timeout));
        function g() {
          if (!w) return;
          const x = xt.from(
              "getAllResponseHeaders" in w && w.getAllResponseHeaders(),
            ),
            b = {
              data:
                !a || a === "text" || a === "json"
                  ? w.responseText
                  : w.response,
              status: w.status,
              statusText: w.statusText,
              headers: x,
              config: e,
              request: w,
            };
          (aC(
            function (C) {
              (n(C), p());
            },
            function (C) {
              (r(C), p());
            },
            b,
          ),
            (w = null));
        }
        ("onloadend" in w
          ? (w.onloadend = g)
          : (w.onreadystatechange = function () {
              !w ||
                w.readyState !== 4 ||
                (w.status === 0 &&
                  !(w.responseURL && w.responseURL.startsWith("file:"))) ||
                setTimeout(g);
            }),
          (w.onabort = function () {
            w &&
              (r(new H("Request aborted", H.ECONNABORTED, e, w)),
              p(),
              (w = null));
          }),
          (w.onerror = function (S) {
            const b = S && S.message ? S.message : "Network Error",
              T = new H(b, H.ERR_NETWORK, e, w);
            ((T.event = S || null), r(T), p(), (w = null));
          }),
          (w.ontimeout = function () {
            let S = o.timeout
              ? "timeout of " + o.timeout + "ms exceeded"
              : "timeout exceeded";
            const b = o.transitional || fm;
            (o.timeoutErrorMessage && (S = o.timeoutErrorMessage),
              r(
                new H(
                  S,
                  b.clarifyTimeoutError ? H.ETIMEDOUT : H.ECONNABORTED,
                  e,
                  w,
                ),
              ),
              p(),
              (w = null));
          }),
          i === void 0 && s.setContentType(null),
          "setRequestHeader" in w &&
            _.forEach(eC(s), function (S, b) {
              w.setRequestHeader(b, S);
            }),
          _.isUndefined(o.withCredentials) ||
            (w.withCredentials = !!o.withCredentials),
          a && a !== "json" && (w.responseType = o.responseType),
          u && (([d, v] = Du(u, !0)), w.addEventListener("progress", d)),
          l &&
            w.upload &&
            (([f, m] = Du(l)),
            w.upload.addEventListener("progress", f),
            w.upload.addEventListener("loadend", m)),
          (o.cancelToken || o.signal) &&
            ((c = (x) => {
              w &&
                (r(!x || x.type ? new Ia(null, e, w) : x),
                w.abort(),
                p(),
                (w = null));
            }),
            o.cancelToken && o.cancelToken.subscribe(c),
            o.signal &&
              (o.signal.aborted
                ? c()
                : o.signal.addEventListener("abort", c))));
        const y = Oj(o.url);
        if (y && !pt.protocols.includes(y)) {
          r(new H("Unsupported protocol " + y + ":", H.ERR_BAD_REQUEST, e));
          return;
        }
        w.send(i || null);
      });
    },
  Hj = (e, t) => {
    if (((e = e ? e.filter(Boolean) : []), !t && !e.length)) return;
    const n = new AbortController();
    let r = !1;
    const o = function (l) {
      if (!r) {
        ((r = !0), s());
        const u = l instanceof Error ? l : this.reason;
        n.abort(
          u instanceof H ? u : new Ia(u instanceof Error ? u.message : u),
        );
      }
    };
    let i =
      t &&
      setTimeout(() => {
        ((i = null), o(new H(`timeout of ${t}ms exceeded`, H.ETIMEDOUT)));
      }, t);
    const s = () => {
      e &&
        (i && clearTimeout(i),
        (i = null),
        e.forEach((l) => {
          l.unsubscribe ? l.unsubscribe(o) : l.removeEventListener("abort", o);
        }),
        (e = null));
    };
    e.forEach((l) => l.addEventListener("abort", o));
    const { signal: a } = n;
    return ((a.unsubscribe = () => _.asap(s)), a);
  },
  Kj = function* (e, t) {
    let n = e.byteLength;
    if (n < t) {
      yield e;
      return;
    }
    let r = 0,
      o;
    for (; r < n; ) ((o = r + t), yield e.slice(r, o), (r = o));
  },
  Gj = async function* (e, t) {
    for await (const n of qj(e)) yield* Kj(n, t);
  },
  qj = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: n, value: r } = await t.read();
        if (n) break;
        yield r;
      }
    } finally {
      await t.cancel();
    }
  },
  u0 = (e, t, n, r) => {
    const o = Gj(e, t);
    let i = 0,
      s,
      a = (l) => {
        s || ((s = !0), r && r(l));
      };
    return new ReadableStream(
      {
        async pull(l) {
          try {
            const { done: u, value: c } = await o.next();
            if (u) {
              (a(), l.close());
              return;
            }
            let f = c.byteLength;
            if (n) {
              let d = (i += f);
              n(d);
            }
            l.enqueue(new Uint8Array(c));
          } catch (u) {
            throw (a(u), u);
          }
        },
        cancel(l) {
          return (a(l), o.return());
        },
      },
      { highWaterMark: 2 },
    );
  };
function Qj(e) {
  if (!e || typeof e != "string" || !e.startsWith("data:")) return 0;
  const t = e.indexOf(",");
  if (t < 0) return 0;
  const n = e.slice(5, t),
    r = e.slice(t + 1);
  if (/;base64/i.test(n)) {
    let s = r.length;
    const a = r.length;
    for (let m = 0; m < a; m++)
      if (r.charCodeAt(m) === 37 && m + 2 < a) {
        const v = r.charCodeAt(m + 1),
          p = r.charCodeAt(m + 2);
        ((v >= 48 && v <= 57) ||
          (v >= 65 && v <= 70) ||
          (v >= 97 && v <= 102)) &&
          ((p >= 48 && p <= 57) ||
            (p >= 65 && p <= 70) ||
            (p >= 97 && p <= 102)) &&
          ((s -= 2), (m += 2));
      }
    let l = 0,
      u = a - 1;
    const c = (m) =>
      m >= 2 &&
      r.charCodeAt(m - 2) === 37 &&
      r.charCodeAt(m - 1) === 51 &&
      (r.charCodeAt(m) === 68 || r.charCodeAt(m) === 100);
    (u >= 0 && (r.charCodeAt(u) === 61 ? (l++, u--) : c(u) && (l++, (u -= 3))),
      l === 1 && u >= 0 && (r.charCodeAt(u) === 61 || c(u)) && l++);
    const d = Math.floor(s / 4) * 3 - (l || 0);
    return d > 0 ? d : 0;
  }
  if (typeof Buffer < "u" && typeof Buffer.byteLength == "function")
    return Buffer.byteLength(r, "utf8");
  let i = 0;
  for (let s = 0, a = r.length; s < a; s++) {
    const l = r.charCodeAt(s);
    if (l < 128) i += 1;
    else if (l < 2048) i += 2;
    else if (l >= 55296 && l <= 56319 && s + 1 < a) {
      const u = r.charCodeAt(s + 1);
      u >= 56320 && u <= 57343 ? ((i += 4), s++) : (i += 3);
    } else i += 3;
  }
  return i;
}
const hm = "1.16.1",
  c0 = 64 * 1024,
  { isFunction: xl } = _,
  f0 = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  Xj = (e) => {
    const t = _.global !== void 0 && _.global !== null ? _.global : globalThis,
      { ReadableStream: n, TextEncoder: r } = t;
    e = _.merge.call(
      { skipUndefined: !0 },
      { Request: t.Request, Response: t.Response },
      e,
    );
    const { fetch: o, Request: i, Response: s } = e,
      a = o ? xl(o) : typeof fetch == "function",
      l = xl(i),
      u = xl(s);
    if (!a) return !1;
    const c = a && xl(n),
      f =
        a &&
        (typeof r == "function"
          ? (
              (g) => (y) =>
                g.encode(y)
            )(new r())
          : async (g) => new Uint8Array(await new i(g).arrayBuffer())),
      d =
        l &&
        c &&
        f0(() => {
          let g = !1;
          const y = new i(pt.origin, {
              body: new n(),
              method: "POST",
              get duplex() {
                return ((g = !0), "half");
              },
            }),
            x = y.headers.has("Content-Type");
          return (y.body != null && y.body.cancel(), g && !x);
        }),
      m = u && c && f0(() => _.isReadableStream(new s("").body)),
      v = { stream: m && ((g) => g.body) };
    a &&
      ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((g) => {
        !v[g] &&
          (v[g] = (y, x) => {
            let S = y && y[g];
            if (S) return S.call(y);
            throw new H(
              `Response type '${g}' is not supported`,
              H.ERR_NOT_SUPPORT,
              x,
            );
          });
      });
    const p = async (g) => {
        if (g == null) return 0;
        if (_.isBlob(g)) return g.size;
        if (_.isSpecCompliantForm(g))
          return (
            await new i(pt.origin, { method: "POST", body: g }).arrayBuffer()
          ).byteLength;
        if (_.isArrayBufferView(g) || _.isArrayBuffer(g)) return g.byteLength;
        if ((_.isURLSearchParams(g) && (g = g + ""), _.isString(g)))
          return (await f(g)).byteLength;
      },
      w = async (g, y) => {
        const x = _.toFiniteNumber(g.getContentLength());
        return x ?? p(y);
      };
    return async (g) => {
      let {
        url: y,
        method: x,
        data: S,
        signal: b,
        cancelToken: T,
        timeout: C,
        onDownloadProgress: R,
        onUploadProgress: L,
        responseType: D,
        headers: B,
        withCredentials: V = "same-origin",
        fetchOptions: Y,
        maxContentLength: W,
        maxBodyLength: se,
      } = uC(g);
      const J = _.isNumber(W) && W > -1,
        Z = _.isNumber(se) && se > -1;
      let M = o || fetch;
      D = D ? (D + "").toLowerCase() : "text";
      let N = Hj([b, T && T.toAbortSignal()], C),
        F = null;
      const K =
        N &&
        N.unsubscribe &&
        (() => {
          N.unsubscribe();
        });
      let re;
      try {
        if (J && typeof y == "string" && y.startsWith("data:") && Qj(y) > W)
          throw new H(
            "maxContentLength size of " + W + " exceeded",
            H.ERR_BAD_RESPONSE,
            g,
            F,
          );
        if (Z && x !== "get" && x !== "head") {
          const ae = await w(B, S);
          if (typeof ae == "number" && isFinite(ae) && ae > se)
            throw new H(
              "Request body larger than maxBodyLength limit",
              H.ERR_BAD_REQUEST,
              g,
              F,
            );
        }
        if (
          L &&
          d &&
          x !== "get" &&
          x !== "head" &&
          (re = await w(B, S)) !== 0
        ) {
          let ae = new i(y, { method: "POST", body: S, duplex: "half" }),
            Ue;
          if (
            (_.isFormData(S) &&
              (Ue = ae.headers.get("content-type")) &&
              B.setContentType(Ue),
            ae.body)
          ) {
            const [Kt, Bn] = s0(re, Du(a0(L)));
            S = u0(ae.body, c0, Kt, Bn);
          }
        }
        _.isString(V) || (V = V ? "include" : "omit");
        const fe = l && "credentials" in i.prototype;
        if (_.isFormData(S)) {
          const ae = B.getContentType();
          ae &&
            /^multipart\/form-data/i.test(ae) &&
            !/boundary=/i.test(ae) &&
            B.delete("content-type");
        }
        B.set("User-Agent", "axios/" + hm, !1);
        const Se = {
          ...Y,
          signal: N,
          method: x.toUpperCase(),
          headers: eC(B.normalize()),
          body: S,
          duplex: "half",
          credentials: fe ? V : void 0,
        };
        F = l && new i(y, Se);
        let ye = await (l ? M(F, Y) : M(y, Se));
        if (J) {
          const ae = _.toFiniteNumber(ye.headers.get("content-length"));
          if (ae != null && ae > W)
            throw new H(
              "maxContentLength size of " + W + " exceeded",
              H.ERR_BAD_RESPONSE,
              g,
              F,
            );
        }
        const Ee = m && (D === "stream" || D === "response");
        if (m && ye.body && (R || J || (Ee && K))) {
          const ae = {};
          ["status", "statusText", "headers"].forEach((on) => {
            ae[on] = ye[on];
          });
          const Ue = _.toFiniteNumber(ye.headers.get("content-length")),
            [Kt, Bn] = (R && s0(Ue, Du(a0(R), !0))) || [];
          let $e = 0;
          const bt = (on) => {
            if (J && (($e = on), $e > W))
              throw new H(
                "maxContentLength size of " + W + " exceeded",
                H.ERR_BAD_RESPONSE,
                g,
                F,
              );
            Kt && Kt(on);
          };
          ye = new s(
            u0(ye.body, c0, bt, () => {
              (Bn && Bn(), K && K());
            }),
            ae,
          );
        }
        D = D || "text";
        let me = await v[_.findKey(v, D) || "text"](ye, g);
        if (J && !m && !Ee) {
          let ae;
          if (
            (me != null &&
              (typeof me.byteLength == "number"
                ? (ae = me.byteLength)
                : typeof me.size == "number"
                  ? (ae = me.size)
                  : typeof me == "string" &&
                    (ae =
                      typeof r == "function"
                        ? new r().encode(me).byteLength
                        : me.length)),
            typeof ae == "number" && ae > W)
          )
            throw new H(
              "maxContentLength size of " + W + " exceeded",
              H.ERR_BAD_RESPONSE,
              g,
              F,
            );
        }
        return (
          !Ee && K && K(),
          await new Promise((ae, Ue) => {
            aC(ae, Ue, {
              data: me,
              headers: xt.from(ye.headers),
              status: ye.status,
              statusText: ye.statusText,
              config: g,
              request: F,
            });
          })
        );
      } catch (fe) {
        if ((K && K(), N && N.aborted && N.reason instanceof H)) {
          const Se = N.reason;
          throw (
            (Se.config = g),
            F && (Se.request = F),
            fe !== Se && (Se.cause = fe),
            Se
          );
        }
        throw fe &&
          fe.name === "TypeError" &&
          /Load failed|fetch/i.test(fe.message)
          ? Object.assign(
              new H("Network Error", H.ERR_NETWORK, g, F, fe && fe.response),
              { cause: fe.cause || fe },
            )
          : H.from(fe, fe && fe.code, g, F, fe && fe.response);
      }
    };
  },
  Yj = new Map(),
  cC = (e) => {
    let t = (e && e.env) || {};
    const { fetch: n, Request: r, Response: o } = t,
      i = [r, o, n];
    let s = i.length,
      a = s,
      l,
      u,
      c = Yj;
    for (; a--; )
      ((l = i[a]),
        (u = c.get(l)),
        u === void 0 && c.set(l, (u = a ? new Map() : Xj(t))),
        (c = u));
    return u;
  };
cC();
const pm = { http: yj, xhr: Wj, fetch: { get: cC } };
_.forEach(pm, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { __proto__: null, value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { __proto__: null, value: t });
  }
});
const d0 = (e) => `- ${e}`,
  Zj = (e) => _.isFunction(e) || e === null || e === !1;
function Jj(e, t) {
  e = _.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, o;
  const i = {};
  for (let s = 0; s < n; s++) {
    r = e[s];
    let a;
    if (
      ((o = r),
      !Zj(r) && ((o = pm[(a = String(r)).toLowerCase()]), o === void 0))
    )
      throw new H(`Unknown adapter '${a}'`);
    if (o && (_.isFunction(o) || (o = o.get(t)))) break;
    i[a || "#" + s] = o;
  }
  if (!o) {
    const s = Object.entries(i).map(
      ([l, u]) =>
        `adapter ${l} ` +
        (u === !1
          ? "is not supported by the environment"
          : "is not available in the build"),
    );
    let a = n
      ? s.length > 1
        ? `since :
` +
          s.map(d0).join(`
`)
        : " " + d0(s[0])
      : "as no adapter specified";
    throw new H(
      "There is no suitable adapter to dispatch the request " + a,
      "ERR_NOT_SUPPORT",
    );
  }
  return o;
}
const fC = { getAdapter: Jj, adapters: pm };
function _f(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Ia(null, e);
}
function h0(e) {
  return (
    _f(e),
    (e.headers = xt.from(e.headers)),
    (e.data = Af.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    fC
      .getAdapter(
        e.adapter || ja.adapter,
        e,
      )(e)
      .then(
        function (r) {
          (_f(e), (e.response = r));
          try {
            r.data = Af.call(e, e.transformResponse, r);
          } finally {
            delete e.response;
          }
          return ((r.headers = xt.from(r.headers)), r);
        },
        function (r) {
          if (!sC(r) && (_f(e), r && r.response)) {
            e.response = r.response;
            try {
              r.response.data = Af.call(e, e.transformResponse, r.response);
            } finally {
              delete e.response;
            }
            r.response.headers = xt.from(r.response.headers);
          }
          return Promise.reject(r);
        },
      )
  );
}
const vc = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    vc[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  },
);
const p0 = {};
vc.transitional = function (t, n, r) {
  function o(i, s) {
    return (
      "[Axios v" +
      hm +
      "] Transitional option '" +
      i +
      "'" +
      s +
      (r ? ". " + r : "")
    );
  }
  return (i, s, a) => {
    if (t === !1)
      throw new H(
        o(s, " has been removed" + (n ? " in " + n : "")),
        H.ERR_DEPRECATED,
      );
    return (
      n &&
        !p0[s] &&
        ((p0[s] = !0),
        console.warn(
          o(
            s,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future",
          ),
        )),
      t ? t(i, s, a) : !0
    );
  };
};
vc.spelling = function (t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function eI(e, t, n) {
  if (typeof e != "object")
    throw new H("options must be an object", H.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o],
      s = Object.prototype.hasOwnProperty.call(t, i) ? t[i] : void 0;
    if (s) {
      const a = e[i],
        l = a === void 0 || s(a, i, e);
      if (l !== !0)
        throw new H("option " + i + " must be " + l, H.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new H("Unknown option " + i, H.ERR_BAD_OPTION);
  }
}
const Hl = { assertOptions: eI, validators: vc },
  qt = Hl.validators;
let Po = class {
  constructor(t) {
    ((this.defaults = t || {}),
      (this.interceptors = { request: new i0(), response: new i0() }));
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let o = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(o)
          : (o = new Error());
        const i = (() => {
          if (!o.stack) return "";
          const s = o.stack.indexOf(`
`);
          return s === -1 ? "" : o.stack.slice(s + 1);
        })();
        try {
          if (!r.stack) r.stack = i;
          else if (i) {
            const s = i.indexOf(`
`),
              a =
                s === -1
                  ? -1
                  : i.indexOf(
                      `
`,
                      s + 1,
                    ),
              l = a === -1 ? "" : i.slice(a + 1);
            String(r.stack).endsWith(l) ||
              (r.stack +=
                `
` + i);
          }
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    (typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = Oo(this.defaults, n)));
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    (r !== void 0 &&
      Hl.assertOptions(
        r,
        {
          silentJSONParsing: qt.transitional(qt.boolean),
          forcedJSONParsing: qt.transitional(qt.boolean),
          clarifyTimeoutError: qt.transitional(qt.boolean),
          legacyInterceptorReqResOrdering: qt.transitional(qt.boolean),
        },
        !1,
      ),
      o != null &&
        (_.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : Hl.assertOptions(
              o,
              { encode: qt.function, serialize: qt.function },
              !0,
            )),
      n.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (n.allowAbsoluteUrls = !0)),
      Hl.assertOptions(
        n,
        {
          baseUrl: qt.spelling("baseURL"),
          withXsrfToken: qt.spelling("withXSRFToken"),
        },
        !0,
      ),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase()));
    let s = i && _.merge(i.common, i[n.method]);
    (i &&
      _.forEach(
        ["delete", "get", "head", "post", "put", "patch", "query", "common"],
        (v) => {
          delete i[v];
        },
      ),
      (n.headers = xt.concat(s, i)));
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function (p) {
      if (typeof p.runWhen == "function" && p.runWhen(n) === !1) return;
      l = l && p.synchronous;
      const w = n.transitional || fm;
      w && w.legacyInterceptorReqResOrdering
        ? a.unshift(p.fulfilled, p.rejected)
        : a.push(p.fulfilled, p.rejected);
    });
    const u = [];
    this.interceptors.response.forEach(function (p) {
      u.push(p.fulfilled, p.rejected);
    });
    let c,
      f = 0,
      d;
    if (!l) {
      const v = [h0.bind(this), void 0];
      for (
        v.unshift(...a), v.push(...u), d = v.length, c = Promise.resolve(n);
        f < d;
      )
        c = c.then(v[f++], v[f++]);
      return c;
    }
    d = a.length;
    let m = n;
    for (; f < d; ) {
      const v = a[f++],
        p = a[f++];
      try {
        m = v(m);
      } catch (w) {
        p.call(this, w);
        break;
      }
    }
    try {
      c = h0.call(this, m);
    } catch (v) {
      return Promise.reject(v);
    }
    for (f = 0, d = u.length; f < d; ) c = c.then(u[f++], u[f++]);
    return c;
  }
  getUri(t) {
    t = Oo(this.defaults, t);
    const n = lC(t.baseURL, t.url, t.allowAbsoluteUrls);
    return oC(n, t.params, t.paramsSerializer);
  }
};
_.forEach(["delete", "get", "head", "options"], function (t) {
  Po.prototype[t] = function (n, r) {
    return this.request(
      Oo(r || {}, { method: t, url: n, data: (r || {}).data }),
    );
  };
});
_.forEach(["post", "put", "patch", "query"], function (t) {
  function n(r) {
    return function (i, s, a) {
      return this.request(
        Oo(a || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: i,
          data: s,
        }),
      );
    };
  }
  ((Po.prototype[t] = n()),
    t !== "query" && (Po.prototype[t + "Form"] = n(!0)));
});
let tI = class dC {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (i) {
      n = i;
    });
    const r = this;
    (this.promise.then((o) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; ) r._listeners[i](o);
      r._listeners = null;
    }),
      (this.promise.then = (o) => {
        let i;
        const s = new Promise((a) => {
          (r.subscribe(a), (i = a));
        }).then(o);
        return (
          (s.cancel = function () {
            r.unsubscribe(i);
          }),
          s
        );
      }),
      t(function (i, s, a) {
        r.reason || ((r.reason = new Ia(i, s, a)), n(r.reason));
      }));
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      n = (r) => {
        t.abort(r);
      };
    return (
      this.subscribe(n),
      (t.signal.unsubscribe = () => this.unsubscribe(n)),
      t.signal
    );
  }
  static source() {
    let t;
    return {
      token: new dC(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
};
function nI(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function rI(e) {
  return _.isObject(e) && e.isAxiosError === !0;
}
const ch = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526,
};
Object.entries(ch).forEach(([e, t]) => {
  ch[t] = e;
});
function hC(e) {
  const t = new Po(e),
    n = KE(Po.prototype.request, t);
  return (
    _.extend(n, Po.prototype, t, { allOwnKeys: !0 }),
    _.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return hC(Oo(e, o));
    }),
    n
  );
}
const He = hC(ja);
He.Axios = Po;
He.CanceledError = Ia;
He.CancelToken = tI;
He.isCancel = sC;
He.VERSION = hm;
He.toFormData = yc;
He.AxiosError = H;
He.Cancel = He.CanceledError;
He.all = function (t) {
  return Promise.all(t);
};
He.spread = nI;
He.isAxiosError = rI;
He.mergeConfig = Oo;
He.AxiosHeaders = xt;
He.formToJSON = (e) => iC(_.isHTMLForm(e) ? new FormData(e) : e);
He.getAdapter = fC.getAdapter;
He.HttpStatusCode = ch;
He.default = He;
const {
    Axios: bU,
    AxiosError: PU,
    CanceledError: RU,
    isCancel: TU,
    CancelToken: AU,
    VERSION: _U,
    all: MU,
    Cancel: kU,
    isAxiosError: DU,
    spread: OU,
    toFormData: NU,
    AxiosHeaders: LU,
    HttpStatusCode: jU,
    formToJSON: IU,
    getAdapter: FU,
    mergeConfig: VU,
    create: BU,
  } = He,
  oI = () => "http://localhost:8080",
  iI = oI(),
  pC = He.create({
    baseURL: iI,
    timeout: 15e3,
    headers: { "Content-Type": "application/json" },
  });
pC.interceptors.request.use(
  (e) => {
    const t = Da.getState().token;
    return (t && (e.headers.Authorization = `Bearer ${t}`), e);
  },
  (e) => Promise.reject(e),
);
pC.interceptors.response.use(
  (e) => e,
  async (e) => {
    var n;
    const t = e.config;
    return (
      ((n = e.response) == null ? void 0 : n.status) === 401 &&
        !t._retry &&
        ((t._retry = !0),
        Da.getState().logout(),
        (window.location.href = "/login")),
      Promise.reject(e)
    );
  },
);
function sI(e) {
  const [t, n] = h.useState(!1);
  return (
    h.useEffect(() => {
      const r = window.matchMedia(e);
      r.matches !== t && n(r.matches);
      const o = () => n(r.matches);
      return (
        r.addEventListener("change", o),
        () => r.removeEventListener("change", o)
      );
    }, [t, e]),
    t
  );
}
function mm() {
  return sI("(max-width: 768px)");
}
function he(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
function aI(e, t = []) {
  let n = [];
  function r(i, s) {
    const a = h.createContext(s),
      l = n.length;
    n = [...n, s];
    const u = (f) => {
      var g;
      const { scope: d, children: m, ...v } = f,
        p = ((g = d == null ? void 0 : d[e]) == null ? void 0 : g[l]) || a,
        w = h.useMemo(() => v, Object.values(v));
      return E.jsx(p.Provider, { value: w, children: m });
    };
    u.displayName = i + "Provider";
    function c(f, d) {
      var p;
      const m = ((p = d == null ? void 0 : d[e]) == null ? void 0 : p[l]) || a,
        v = h.useContext(m);
      if (v) return v;
      if (s !== void 0) return s;
      throw new Error(`\`${f}\` must be used within \`${i}\``);
    }
    return [u, c];
  }
  const o = () => {
    const i = n.map((s) => h.createContext(s));
    return function (a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return h.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
    };
  };
  return ((o.scopeName = e), [r, lI(o, ...t)]);
}
function lI(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const s = r.reduce((a, { useScope: l, scopeName: u }) => {
        const f = l(i)[`__scope${u}`];
        return { ...a, ...f };
      }, {});
      return h.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return ((n.scopeName = t.scopeName), n);
}
var uI = Bu[" useInsertionEffect ".trim().toString()] || vn;
function mC({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
  const [o, i, s] = cI({ defaultProp: t, onChange: n }),
    a = e !== void 0,
    l = a ? e : o;
  {
    const c = h.useRef(e !== void 0);
    h.useEffect(() => {
      const f = c.current;
      (f !== a &&
        console.warn(
          `${r} is changing from ${f ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
        ),
        (c.current = a));
    }, [a, r]);
  }
  const u = h.useCallback(
    (c) => {
      var f;
      if (a) {
        const d = fI(c) ? c(e) : c;
        d !== e && ((f = s.current) == null || f.call(s, d));
      } else i(c);
    },
    [a, e, i, s],
  );
  return [l, u];
}
function cI({ defaultProp: e, onChange: t }) {
  const [n, r] = h.useState(e),
    o = h.useRef(n),
    i = h.useRef(t);
  return (
    uI(() => {
      i.current = t;
    }, [t]),
    h.useEffect(() => {
      var s;
      o.current !== n &&
        ((s = i.current) == null || s.call(i, n), (o.current = n));
    }, [n, o]),
    [n, r, i]
  );
}
function fI(e) {
  return typeof e == "function";
}
function dI(e) {
  const t = hI(e),
    n = h.forwardRef((r, o) => {
      const { children: i, ...s } = r,
        a = h.Children.toArray(i),
        l = a.find(mI);
      if (l) {
        const u = l.props.children,
          c = a.map((f) =>
            f === l
              ? h.Children.count(u) > 1
                ? h.Children.only(null)
                : h.isValidElement(u)
                  ? u.props.children
                  : null
              : f,
          );
        return E.jsx(t, {
          ...s,
          ref: o,
          children: h.isValidElement(u) ? h.cloneElement(u, void 0, c) : null,
        });
      }
      return E.jsx(t, { ...s, ref: o, children: i });
    });
  return ((n.displayName = `${e}.Slot`), n);
}
function hI(e) {
  const t = h.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (h.isValidElement(o)) {
      const s = yI(o),
        a = gI(i, o.props);
      return (
        o.type !== h.Fragment && (a.ref = r ? Ht(r, s) : s),
        h.cloneElement(o, a)
      );
    }
    return h.Children.count(o) > 1 ? h.Children.only(null) : null;
  });
  return ((t.displayName = `${e}.SlotClone`), t);
}
var pI = Symbol("radix.slottable");
function mI(e) {
  return (
    h.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === pI
  );
}
function gI(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      i = t[r];
    /^on[A-Z]/.test(r)
      ? o && i
        ? (n[r] = (...a) => {
            const l = i(...a);
            return (o(...a), l);
          })
        : o && (n[r] = o)
      : r === "style"
        ? (n[r] = { ...o, ...i })
        : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function yI(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var vI = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  wI = vI.reduce((e, t) => {
    const n = dI(`Primitive.${t}`),
      r = h.forwardRef((o, i) => {
        const { asChild: s, ...a } = o,
          l = s ? n : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          E.jsx(l, { ...a, ref: i })
        );
      });
    return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
  }, {});
function xI(e, t = []) {
  let n = [];
  function r(i, s) {
    const a = h.createContext(s),
      l = n.length;
    n = [...n, s];
    const u = (f) => {
      var g;
      const { scope: d, children: m, ...v } = f,
        p = ((g = d == null ? void 0 : d[e]) == null ? void 0 : g[l]) || a,
        w = h.useMemo(() => v, Object.values(v));
      return E.jsx(p.Provider, { value: w, children: m });
    };
    u.displayName = i + "Provider";
    function c(f, d) {
      var p;
      const m = ((p = d == null ? void 0 : d[e]) == null ? void 0 : p[l]) || a,
        v = h.useContext(m);
      if (v) return v;
      if (s !== void 0) return s;
      throw new Error(`\`${f}\` must be used within \`${i}\``);
    }
    return [u, c];
  }
  const o = () => {
    const i = n.map((s) => h.createContext(s));
    return function (a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return h.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
    };
  };
  return ((o.scopeName = e), [r, SI(o, ...t)]);
}
function SI(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const s = r.reduce((a, { useScope: l, scopeName: u }) => {
        const f = l(i)[`__scope${u}`];
        return { ...a, ...f };
      }, {});
      return h.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return ((n.scopeName = t.scopeName), n);
}
function m0(e) {
  const t = EI(e),
    n = h.forwardRef((r, o) => {
      const { children: i, ...s } = r,
        a = h.Children.toArray(i),
        l = a.find(bI);
      if (l) {
        const u = l.props.children,
          c = a.map((f) =>
            f === l
              ? h.Children.count(u) > 1
                ? h.Children.only(null)
                : h.isValidElement(u)
                  ? u.props.children
                  : null
              : f,
          );
        return E.jsx(t, {
          ...s,
          ref: o,
          children: h.isValidElement(u) ? h.cloneElement(u, void 0, c) : null,
        });
      }
      return E.jsx(t, { ...s, ref: o, children: i });
    });
  return ((n.displayName = `${e}.Slot`), n);
}
function EI(e) {
  const t = h.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (h.isValidElement(o)) {
      const s = RI(o),
        a = PI(i, o.props);
      return (
        o.type !== h.Fragment && (a.ref = r ? Ht(r, s) : s),
        h.cloneElement(o, a)
      );
    }
    return h.Children.count(o) > 1 ? h.Children.only(null) : null;
  });
  return ((t.displayName = `${e}.SlotClone`), t);
}
var CI = Symbol("radix.slottable");
function bI(e) {
  return (
    h.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === CI
  );
}
function PI(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      i = t[r];
    /^on[A-Z]/.test(r)
      ? o && i
        ? (n[r] = (...a) => {
            const l = i(...a);
            return (o(...a), l);
          })
        : o && (n[r] = o)
      : r === "style"
        ? (n[r] = { ...o, ...i })
        : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function RI(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function gC(e) {
  const t = e + "CollectionProvider",
    [n, r] = xI(t),
    [o, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    s = (p) => {
      const { scope: w, children: g } = p,
        y = Pn.useRef(null),
        x = Pn.useRef(new Map()).current;
      return E.jsx(o, { scope: w, itemMap: x, collectionRef: y, children: g });
    };
  s.displayName = t;
  const a = e + "CollectionSlot",
    l = m0(a),
    u = Pn.forwardRef((p, w) => {
      const { scope: g, children: y } = p,
        x = i(a, g),
        S = Dt(w, x.collectionRef);
      return E.jsx(l, { ref: S, children: y });
    });
  u.displayName = a;
  const c = e + "CollectionItemSlot",
    f = "data-radix-collection-item",
    d = m0(c),
    m = Pn.forwardRef((p, w) => {
      const { scope: g, children: y, ...x } = p,
        S = Pn.useRef(null),
        b = Dt(w, S),
        T = i(c, g);
      return (
        Pn.useEffect(
          () => (
            T.itemMap.set(S, { ref: S, ...x }),
            () => void T.itemMap.delete(S)
          ),
        ),
        E.jsx(d, { [f]: "", ref: b, children: y })
      );
    });
  m.displayName = c;
  function v(p) {
    const w = i(e + "CollectionConsumer", p);
    return Pn.useCallback(() => {
      const y = w.collectionRef.current;
      if (!y) return [];
      const x = Array.from(y.querySelectorAll(`[${f}]`));
      return Array.from(w.itemMap.values()).sort(
        (T, C) => x.indexOf(T.ref.current) - x.indexOf(C.ref.current),
      );
    }, [w.collectionRef, w.itemMap]);
  }
  return [{ Provider: s, Slot: u, ItemSlot: m }, v, r];
}
function TI(e, t = []) {
  let n = [];
  function r(i, s) {
    const a = h.createContext(s),
      l = n.length;
    n = [...n, s];
    const u = (f) => {
      var g;
      const { scope: d, children: m, ...v } = f,
        p = ((g = d == null ? void 0 : d[e]) == null ? void 0 : g[l]) || a,
        w = h.useMemo(() => v, Object.values(v));
      return E.jsx(p.Provider, { value: w, children: m });
    };
    u.displayName = i + "Provider";
    function c(f, d) {
      var p;
      const m = ((p = d == null ? void 0 : d[e]) == null ? void 0 : p[l]) || a,
        v = h.useContext(m);
      if (v) return v;
      if (s !== void 0) return s;
      throw new Error(`\`${f}\` must be used within \`${i}\``);
    }
    return [u, c];
  }
  const o = () => {
    const i = n.map((s) => h.createContext(s));
    return function (a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return h.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
    };
  };
  return ((o.scopeName = e), [r, AI(o, ...t)]);
}
function AI(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const s = r.reduce((a, { useScope: l, scopeName: u }) => {
        const f = l(i)[`__scope${u}`];
        return { ...a, ...f };
      }, {});
      return h.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return ((n.scopeName = t.scopeName), n);
}
var _I = h.createContext(void 0);
function yC(e) {
  const t = h.useContext(_I);
  return e || t || "ltr";
}
function MI(e) {
  const t = kI(e),
    n = h.forwardRef((r, o) => {
      const { children: i, ...s } = r,
        a = h.Children.toArray(i),
        l = a.find(OI);
      if (l) {
        const u = l.props.children,
          c = a.map((f) =>
            f === l
              ? h.Children.count(u) > 1
                ? h.Children.only(null)
                : h.isValidElement(u)
                  ? u.props.children
                  : null
              : f,
          );
        return E.jsx(t, {
          ...s,
          ref: o,
          children: h.isValidElement(u) ? h.cloneElement(u, void 0, c) : null,
        });
      }
      return E.jsx(t, { ...s, ref: o, children: i });
    });
  return ((n.displayName = `${e}.Slot`), n);
}
function kI(e) {
  const t = h.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (h.isValidElement(o)) {
      const s = LI(o),
        a = NI(i, o.props);
      return (
        o.type !== h.Fragment && (a.ref = r ? Ht(r, s) : s),
        h.cloneElement(o, a)
      );
    }
    return h.Children.count(o) > 1 ? h.Children.only(null) : null;
  });
  return ((t.displayName = `${e}.SlotClone`), t);
}
var DI = Symbol("radix.slottable");
function OI(e) {
  return (
    h.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === DI
  );
}
function NI(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      i = t[r];
    /^on[A-Z]/.test(r)
      ? o && i
        ? (n[r] = (...a) => {
            const l = i(...a);
            return (o(...a), l);
          })
        : o && (n[r] = o)
      : r === "style"
        ? (n[r] = { ...o, ...i })
        : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function LI(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var jI = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  vC = jI.reduce((e, t) => {
    const n = MI(`Primitive.${t}`),
      r = h.forwardRef((o, i) => {
        const { asChild: s, ...a } = o,
          l = s ? n : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          E.jsx(l, { ...a, ref: i })
        );
      });
    return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
  }, {});
function II(e, t) {
  e && Gi.flushSync(() => e.dispatchEvent(t));
}
function FI(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = In(e);
  h.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var VI = "DismissableLayer",
  fh = "dismissableLayer.update",
  BI = "dismissableLayer.pointerDownOutside",
  UI = "dismissableLayer.focusOutside",
  g0,
  wC = h.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  xC = h.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: i,
        onInteractOutside: s,
        onDismiss: a,
        ...l
      } = e,
      u = h.useContext(wC),
      [c, f] = h.useState(null),
      d =
        (c == null ? void 0 : c.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, m] = h.useState({}),
      v = Dt(t, (C) => f(C)),
      p = Array.from(u.layers),
      [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      g = p.indexOf(w),
      y = c ? p.indexOf(c) : -1,
      x = u.layersWithOutsidePointerEventsDisabled.size > 0,
      S = y >= g,
      b = WI((C) => {
        const R = C.target,
          L = [...u.branches].some((D) => D.contains(R));
        !S ||
          L ||
          (o == null || o(C),
          s == null || s(C),
          C.defaultPrevented || a == null || a());
      }, d),
      T = HI((C) => {
        const R = C.target;
        [...u.branches].some((D) => D.contains(R)) ||
          (i == null || i(C),
          s == null || s(C),
          C.defaultPrevented || a == null || a());
      }, d);
    return (
      FI((C) => {
        y === u.layers.size - 1 &&
          (r == null || r(C),
          !C.defaultPrevented && a && (C.preventDefault(), a()));
      }, d),
      h.useEffect(() => {
        if (c)
          return (
            n &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((g0 = d.body.style.pointerEvents),
                (d.body.style.pointerEvents = "none")),
              u.layersWithOutsidePointerEventsDisabled.add(c)),
            u.layers.add(c),
            y0(),
            () => {
              n &&
                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (d.body.style.pointerEvents = g0);
            }
          );
      }, [c, d, n, u]),
      h.useEffect(
        () => () => {
          c &&
            (u.layers.delete(c),
            u.layersWithOutsidePointerEventsDisabled.delete(c),
            y0());
        },
        [c, u],
      ),
      h.useEffect(() => {
        const C = () => m({});
        return (
          document.addEventListener(fh, C),
          () => document.removeEventListener(fh, C)
        );
      }, []),
      E.jsx(vC.div, {
        ...l,
        ref: v,
        style: {
          pointerEvents: x ? (S ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: he(e.onFocusCapture, T.onFocusCapture),
        onBlurCapture: he(e.onBlurCapture, T.onBlurCapture),
        onPointerDownCapture: he(
          e.onPointerDownCapture,
          b.onPointerDownCapture,
        ),
      })
    );
  });
xC.displayName = VI;
var $I = "DismissableLayerBranch",
  zI = h.forwardRef((e, t) => {
    const n = h.useContext(wC),
      r = h.useRef(null),
      o = Dt(t, r);
    return (
      h.useEffect(() => {
        const i = r.current;
        if (i)
          return (
            n.branches.add(i),
            () => {
              n.branches.delete(i);
            }
          );
      }, [n.branches]),
      E.jsx(vC.div, { ...e, ref: o })
    );
  });
zI.displayName = $I;
function WI(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = In(e),
    r = h.useRef(!1),
    o = h.useRef(() => {});
  return (
    h.useEffect(() => {
      const i = (a) => {
          if (a.target && !r.current) {
            let l = function () {
              SC(BI, n, u, { discrete: !0 });
            };
            const u = { originalEvent: a };
            a.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = l),
                t.addEventListener("click", o.current, { once: !0 }))
              : l();
          } else t.removeEventListener("click", o.current);
          r.current = !1;
        },
        s = window.setTimeout(() => {
          t.addEventListener("pointerdown", i);
        }, 0);
      return () => {
        (window.clearTimeout(s),
          t.removeEventListener("pointerdown", i),
          t.removeEventListener("click", o.current));
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function HI(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = In(e),
    r = h.useRef(!1);
  return (
    h.useEffect(() => {
      const o = (i) => {
        i.target &&
          !r.current &&
          SC(UI, n, { originalEvent: i }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function y0() {
  const e = new CustomEvent(fh);
  document.dispatchEvent(e);
}
function SC(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  (t && o.addEventListener(e, t, { once: !0 }),
    r ? II(o, i) : o.dispatchEvent(i));
}
var Mf = 0;
function KI() {
  h.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", e[0] ?? v0()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? v0()),
      Mf++,
      () => {
        (Mf === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((t) => t.remove()),
          Mf--);
      }
    );
  }, []);
}
function v0() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.outline = "none"),
    (e.style.opacity = "0"),
    (e.style.position = "fixed"),
    (e.style.pointerEvents = "none"),
    e
  );
}
function GI(e) {
  const t = qI(e),
    n = h.forwardRef((r, o) => {
      const { children: i, ...s } = r,
        a = h.Children.toArray(i),
        l = a.find(XI);
      if (l) {
        const u = l.props.children,
          c = a.map((f) =>
            f === l
              ? h.Children.count(u) > 1
                ? h.Children.only(null)
                : h.isValidElement(u)
                  ? u.props.children
                  : null
              : f,
          );
        return E.jsx(t, {
          ...s,
          ref: o,
          children: h.isValidElement(u) ? h.cloneElement(u, void 0, c) : null,
        });
      }
      return E.jsx(t, { ...s, ref: o, children: i });
    });
  return ((n.displayName = `${e}.Slot`), n);
}
function qI(e) {
  const t = h.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (h.isValidElement(o)) {
      const s = ZI(o),
        a = YI(i, o.props);
      return (
        o.type !== h.Fragment && (a.ref = r ? Ht(r, s) : s),
        h.cloneElement(o, a)
      );
    }
    return h.Children.count(o) > 1 ? h.Children.only(null) : null;
  });
  return ((t.displayName = `${e}.SlotClone`), t);
}
var QI = Symbol("radix.slottable");
function XI(e) {
  return (
    h.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === QI
  );
}
function YI(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      i = t[r];
    /^on[A-Z]/.test(r)
      ? o && i
        ? (n[r] = (...a) => {
            const l = i(...a);
            return (o(...a), l);
          })
        : o && (n[r] = o)
      : r === "style"
        ? (n[r] = { ...o, ...i })
        : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function ZI(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var JI = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  eF = JI.reduce((e, t) => {
    const n = GI(`Primitive.${t}`),
      r = h.forwardRef((o, i) => {
        const { asChild: s, ...a } = o,
          l = s ? n : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          E.jsx(l, { ...a, ref: i })
        );
      });
    return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
  }, {}),
  kf = "focusScope.autoFocusOnMount",
  Df = "focusScope.autoFocusOnUnmount",
  w0 = { bubbles: !1, cancelable: !0 },
  tF = "FocusScope",
  EC = h.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: i,
        ...s
      } = e,
      [a, l] = h.useState(null),
      u = In(o),
      c = In(i),
      f = h.useRef(null),
      d = Dt(t, (p) => l(p)),
      m = h.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    (h.useEffect(() => {
      if (r) {
        let p = function (x) {
            if (m.paused || !a) return;
            const S = x.target;
            a.contains(S) ? (f.current = S) : vr(f.current, { select: !0 });
          },
          w = function (x) {
            if (m.paused || !a) return;
            const S = x.relatedTarget;
            S !== null && (a.contains(S) || vr(f.current, { select: !0 }));
          },
          g = function (x) {
            if (document.activeElement === document.body)
              for (const b of x) b.removedNodes.length > 0 && vr(a);
          };
        (document.addEventListener("focusin", p),
          document.addEventListener("focusout", w));
        const y = new MutationObserver(g);
        return (
          a && y.observe(a, { childList: !0, subtree: !0 }),
          () => {
            (document.removeEventListener("focusin", p),
              document.removeEventListener("focusout", w),
              y.disconnect());
          }
        );
      }
    }, [r, a, m.paused]),
      h.useEffect(() => {
        if (a) {
          S0.add(m);
          const p = document.activeElement;
          if (!a.contains(p)) {
            const g = new CustomEvent(kf, w0);
            (a.addEventListener(kf, u),
              a.dispatchEvent(g),
              g.defaultPrevented ||
                (nF(aF(CC(a)), { select: !0 }),
                document.activeElement === p && vr(a)));
          }
          return () => {
            (a.removeEventListener(kf, u),
              setTimeout(() => {
                const g = new CustomEvent(Df, w0);
                (a.addEventListener(Df, c),
                  a.dispatchEvent(g),
                  g.defaultPrevented || vr(p ?? document.body, { select: !0 }),
                  a.removeEventListener(Df, c),
                  S0.remove(m));
              }, 0));
          };
        }
      }, [a, u, c, m]));
    const v = h.useCallback(
      (p) => {
        if ((!n && !r) || m.paused) return;
        const w = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey,
          g = document.activeElement;
        if (w && g) {
          const y = p.currentTarget,
            [x, S] = rF(y);
          x && S
            ? !p.shiftKey && g === S
              ? (p.preventDefault(), n && vr(x, { select: !0 }))
              : p.shiftKey &&
                g === x &&
                (p.preventDefault(), n && vr(S, { select: !0 }))
            : g === y && p.preventDefault();
        }
      },
      [n, r, m.paused],
    );
    return E.jsx(eF.div, { tabIndex: -1, ...s, ref: d, onKeyDown: v });
  });
EC.displayName = tF;
function nF(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if ((vr(r, { select: t }), document.activeElement !== n)) return;
}
function rF(e) {
  const t = CC(e),
    n = x0(t, e),
    r = x0(t.reverse(), e);
  return [n, r];
}
function CC(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function x0(e, t) {
  for (const n of e) if (!oF(n, { upTo: t })) return n;
}
function oF(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function iF(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function vr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    (e.focus({ preventScroll: !0 }), e !== n && iF(e) && t && e.select());
  }
}
var S0 = sF();
function sF() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      (t !== n && (n == null || n.pause()), (e = E0(e, t)), e.unshift(t));
    },
    remove(t) {
      var n;
      ((e = E0(e, t)), (n = e[0]) == null || n.resume());
    },
  };
}
function E0(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return (r !== -1 && n.splice(r, 1), n);
}
function aF(e) {
  return e.filter((t) => t.tagName !== "A");
}
var lF = Bu[" useId ".trim().toString()] || (() => {}),
  uF = 0;
function dh(e) {
  const [t, n] = h.useState(lF());
  return (
    vn(() => {
      n((r) => r ?? String(uF++));
    }, [e]),
    t ? `radix-${t}` : ""
  );
}
const cF = ["top", "right", "bottom", "left"],
  Wr = Math.min,
  jt = Math.max,
  Ou = Math.round,
  Sl = Math.floor,
  jn = (e) => ({ x: e, y: e }),
  fF = { left: "right", right: "left", bottom: "top", top: "bottom" };
function hh(e, t, n) {
  return jt(e, Wr(t, n));
}
function sr(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ar(e) {
  return e.split("-")[0];
}
function es(e) {
  return e.split("-")[1];
}
function gm(e) {
  return e === "x" ? "y" : "x";
}
function ym(e) {
  return e === "y" ? "height" : "width";
}
function kn(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function vm(e) {
  return gm(kn(e));
}
function dF(e, t, n) {
  n === void 0 && (n = !1);
  const r = es(e),
    o = vm(e),
    i = ym(o);
  let s =
    o === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
        ? "bottom"
        : "top";
  return (t.reference[i] > t.floating[i] && (s = Nu(s)), [s, Nu(s)]);
}
function hF(e) {
  const t = Nu(e);
  return [ph(e), t, ph(t)];
}
function ph(e) {
  return e.includes("start")
    ? e.replace("start", "end")
    : e.replace("end", "start");
}
const C0 = ["left", "right"],
  b0 = ["right", "left"],
  pF = ["top", "bottom"],
  mF = ["bottom", "top"];
function gF(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? b0 : C0) : t ? C0 : b0;
    case "left":
    case "right":
      return t ? pF : mF;
    default:
      return [];
  }
}
function yF(e, t, n, r) {
  const o = es(e);
  let i = gF(ar(e), n === "start", r);
  return (
    o && ((i = i.map((s) => s + "-" + o)), t && (i = i.concat(i.map(ph)))),
    i
  );
}
function Nu(e) {
  const t = ar(e);
  return fF[t] + e.slice(t.length);
}
function vF(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function bC(e) {
  return typeof e != "number"
    ? vF(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Lu(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n,
  };
}
function P0(e, t, n) {
  let { reference: r, floating: o } = e;
  const i = kn(t),
    s = vm(t),
    a = ym(s),
    l = ar(t),
    u = i === "y",
    c = r.x + r.width / 2 - o.width / 2,
    f = r.y + r.height / 2 - o.height / 2,
    d = r[a] / 2 - o[a] / 2;
  let m;
  switch (l) {
    case "top":
      m = { x: c, y: r.y - o.height };
      break;
    case "bottom":
      m = { x: c, y: r.y + r.height };
      break;
    case "right":
      m = { x: r.x + r.width, y: f };
      break;
    case "left":
      m = { x: r.x - o.width, y: f };
      break;
    default:
      m = { x: r.x, y: r.y };
  }
  switch (es(t)) {
    case "start":
      m[s] -= d * (n && u ? -1 : 1);
      break;
    case "end":
      m[s] += d * (n && u ? -1 : 1);
      break;
  }
  return m;
}
async function wF(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: i, rects: s, elements: a, strategy: l } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: c = "viewport",
      elementContext: f = "floating",
      altBoundary: d = !1,
      padding: m = 0,
    } = sr(t, e),
    v = bC(m),
    w = a[d ? (f === "floating" ? "reference" : "floating") : f],
    g = Lu(
      await i.getClippingRect({
        element:
          (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null ||
          n
            ? w
            : w.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(a.floating))),
        boundary: u,
        rootBoundary: c,
        strategy: l,
      }),
    ),
    y =
      f === "floating"
        ? { x: r, y: o, width: s.floating.width, height: s.floating.height }
        : s.reference,
    x = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(a.floating)),
    S = (await (i.isElement == null ? void 0 : i.isElement(x)))
      ? (await (i.getScale == null ? void 0 : i.getScale(x))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    b = Lu(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: y,
            offsetParent: x,
            strategy: l,
          })
        : y,
    );
  return {
    top: (g.top - b.top + v.top) / S.y,
    bottom: (b.bottom - g.bottom + v.bottom) / S.y,
    left: (g.left - b.left + v.left) / S.x,
    right: (b.right - g.right + v.right) / S.x,
  };
}
const xF = 50,
  SF = async (e, t, n) => {
    const {
        placement: r = "bottom",
        strategy: o = "absolute",
        middleware: i = [],
        platform: s,
      } = n,
      a = s.detectOverflow ? s : { ...s, detectOverflow: wF },
      l = await (s.isRTL == null ? void 0 : s.isRTL(t));
    let u = await s.getElementRects({ reference: e, floating: t, strategy: o }),
      { x: c, y: f } = P0(u, r, l),
      d = r,
      m = 0;
    const v = {};
    for (let p = 0; p < i.length; p++) {
      const w = i[p];
      if (!w) continue;
      const { name: g, fn: y } = w,
        {
          x,
          y: S,
          data: b,
          reset: T,
        } = await y({
          x: c,
          y: f,
          initialPlacement: r,
          placement: d,
          strategy: o,
          middlewareData: v,
          rects: u,
          platform: a,
          elements: { reference: e, floating: t },
        });
      ((c = x ?? c),
        (f = S ?? f),
        (v[g] = { ...v[g], ...b }),
        T &&
          m < xF &&
          (m++,
          typeof T == "object" &&
            (T.placement && (d = T.placement),
            T.rects &&
              (u =
                T.rects === !0
                  ? await s.getElementRects({
                      reference: e,
                      floating: t,
                      strategy: o,
                    })
                  : T.rects),
            ({ x: c, y: f } = P0(u, d, l))),
          (p = -1)));
    }
    return { x: c, y: f, placement: d, strategy: o, middlewareData: v };
  },
  EF = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: o,
          rects: i,
          platform: s,
          elements: a,
          middlewareData: l,
        } = t,
        { element: u, padding: c = 0 } = sr(e, t) || {};
      if (u == null) return {};
      const f = bC(c),
        d = { x: n, y: r },
        m = vm(o),
        v = ym(m),
        p = await s.getDimensions(u),
        w = m === "y",
        g = w ? "top" : "left",
        y = w ? "bottom" : "right",
        x = w ? "clientHeight" : "clientWidth",
        S = i.reference[v] + i.reference[m] - d[m] - i.floating[v],
        b = d[m] - i.reference[m],
        T = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
      let C = T ? T[x] : 0;
      (!C || !(await (s.isElement == null ? void 0 : s.isElement(T)))) &&
        (C = a.floating[x] || i.floating[v]);
      const R = S / 2 - b / 2,
        L = C / 2 - p[v] / 2 - 1,
        D = Wr(f[g], L),
        B = Wr(f[y], L),
        V = D,
        Y = C - p[v] - B,
        W = C / 2 - p[v] / 2 + R,
        se = hh(V, W, Y),
        J =
          !l.arrow &&
          es(o) != null &&
          W !== se &&
          i.reference[v] / 2 - (W < V ? D : B) - p[v] / 2 < 0,
        Z = J ? (W < V ? W - V : W - Y) : 0;
      return {
        [m]: d[m] + Z,
        data: {
          [m]: se,
          centerOffset: W - se - Z,
          ...(J && { alignmentOffset: Z }),
        },
        reset: J,
      };
    },
  }),
  CF = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: o,
              middlewareData: i,
              rects: s,
              initialPlacement: a,
              platform: l,
              elements: u,
            } = t,
            {
              mainAxis: c = !0,
              crossAxis: f = !0,
              fallbackPlacements: d,
              fallbackStrategy: m = "bestFit",
              fallbackAxisSideDirection: v = "none",
              flipAlignment: p = !0,
              ...w
            } = sr(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          const g = ar(o),
            y = kn(a),
            x = ar(a) === a,
            S = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)),
            b = d || (x || !p ? [Nu(a)] : hF(a)),
            T = v !== "none";
          !d && T && b.push(...yF(a, p, v, S));
          const C = [a, ...b],
            R = await l.detectOverflow(t, w),
            L = [];
          let D = ((r = i.flip) == null ? void 0 : r.overflows) || [];
          if ((c && L.push(R[g]), f)) {
            const W = dF(o, s, S);
            L.push(R[W[0]], R[W[1]]);
          }
          if (
            ((D = [...D, { placement: o, overflows: L }]),
            !L.every((W) => W <= 0))
          ) {
            var B, V;
            const W = (((B = i.flip) == null ? void 0 : B.index) || 0) + 1,
              se = C[W];
            if (
              se &&
              (!(f === "alignment" ? y !== kn(se) : !1) ||
                D.every((M) =>
                  kn(M.placement) === y ? M.overflows[0] > 0 : !0,
                ))
            )
              return {
                data: { index: W, overflows: D },
                reset: { placement: se },
              };
            let J =
              (V = D.filter((Z) => Z.overflows[0] <= 0).sort(
                (Z, M) => Z.overflows[1] - M.overflows[1],
              )[0]) == null
                ? void 0
                : V.placement;
            if (!J)
              switch (m) {
                case "bestFit": {
                  var Y;
                  const Z =
                    (Y = D.filter((M) => {
                      if (T) {
                        const N = kn(M.placement);
                        return N === y || N === "y";
                      }
                      return !0;
                    })
                      .map((M) => [
                        M.placement,
                        M.overflows
                          .filter((N) => N > 0)
                          .reduce((N, F) => N + F, 0),
                      ])
                      .sort((M, N) => M[1] - N[1])[0]) == null
                      ? void 0
                      : Y[0];
                  Z && (J = Z);
                  break;
                }
                case "initialPlacement":
                  J = a;
                  break;
              }
            if (o !== J) return { reset: { placement: J } };
          }
          return {};
        },
      }
    );
  };
function R0(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function T0(e) {
  return cF.some((t) => e[t] >= 0);
}
const bF = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "hide",
        options: e,
        async fn(t) {
          const { rects: n, platform: r } = t,
            { strategy: o = "referenceHidden", ...i } = sr(e, t);
          switch (o) {
            case "referenceHidden": {
              const s = await r.detectOverflow(t, {
                  ...i,
                  elementContext: "reference",
                }),
                a = R0(s, n.reference);
              return {
                data: { referenceHiddenOffsets: a, referenceHidden: T0(a) },
              };
            }
            case "escaped": {
              const s = await r.detectOverflow(t, { ...i, altBoundary: !0 }),
                a = R0(s, n.floating);
              return { data: { escapedOffsets: a, escaped: T0(a) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  PC = new Set(["left", "top"]);
async function PF(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    s = ar(n),
    a = es(n),
    l = kn(n) === "y",
    u = PC.has(s) ? -1 : 1,
    c = i && l ? -1 : 1,
    f = sr(t, e);
  let {
    mainAxis: d,
    crossAxis: m,
    alignmentAxis: v,
  } = typeof f == "number"
    ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: f.mainAxis || 0,
        crossAxis: f.crossAxis || 0,
        alignmentAxis: f.alignmentAxis,
      };
  return (
    a && typeof v == "number" && (m = a === "end" ? v * -1 : v),
    l ? { x: m * c, y: d * u } : { x: d * u, y: m * c }
  );
}
const RF = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: i, placement: s, middlewareData: a } = t,
            l = await PF(t, e);
          return s === ((n = a.offset) == null ? void 0 : n.placement) &&
            (r = a.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + l.x, y: i + l.y, data: { ...l, placement: s } };
        },
      }
    );
  },
  TF = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o, platform: i } = t,
            {
              mainAxis: s = !0,
              crossAxis: a = !1,
              limiter: l = {
                fn: (g) => {
                  let { x: y, y: x } = g;
                  return { x: y, y: x };
                },
              },
              ...u
            } = sr(e, t),
            c = { x: n, y: r },
            f = await i.detectOverflow(t, u),
            d = kn(ar(o)),
            m = gm(d);
          let v = c[m],
            p = c[d];
          if (s) {
            const g = m === "y" ? "top" : "left",
              y = m === "y" ? "bottom" : "right",
              x = v + f[g],
              S = v - f[y];
            v = hh(x, v, S);
          }
          if (a) {
            const g = d === "y" ? "top" : "left",
              y = d === "y" ? "bottom" : "right",
              x = p + f[g],
              S = p - f[y];
            p = hh(x, p, S);
          }
          const w = l.fn({ ...t, [m]: v, [d]: p });
          return {
            ...w,
            data: { x: w.x - n, y: w.y - r, enabled: { [m]: s, [d]: a } },
          };
        },
      }
    );
  },
  AF = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: i, middlewareData: s } = t,
            { offset: a = 0, mainAxis: l = !0, crossAxis: u = !0 } = sr(e, t),
            c = { x: n, y: r },
            f = kn(o),
            d = gm(f);
          let m = c[d],
            v = c[f];
          const p = sr(a, t),
            w =
              typeof p == "number"
                ? { mainAxis: p, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...p };
          if (l) {
            const x = d === "y" ? "height" : "width",
              S = i.reference[d] - i.floating[x] + w.mainAxis,
              b = i.reference[d] + i.reference[x] - w.mainAxis;
            m < S ? (m = S) : m > b && (m = b);
          }
          if (u) {
            var g, y;
            const x = d === "y" ? "width" : "height",
              S = PC.has(ar(o)),
              b =
                i.reference[f] -
                i.floating[x] +
                ((S && ((g = s.offset) == null ? void 0 : g[f])) || 0) +
                (S ? 0 : w.crossAxis),
              T =
                i.reference[f] +
                i.reference[x] +
                (S ? 0 : ((y = s.offset) == null ? void 0 : y[f]) || 0) -
                (S ? w.crossAxis : 0);
            v < b ? (v = b) : v > T && (v = T);
          }
          return { [d]: m, [f]: v };
        },
      }
    );
  },
  _F = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, r;
          const { placement: o, rects: i, platform: s, elements: a } = t,
            { apply: l = () => {}, ...u } = sr(e, t),
            c = await s.detectOverflow(t, u),
            f = ar(o),
            d = es(o),
            m = kn(o) === "y",
            { width: v, height: p } = i.floating;
          let w, g;
          f === "top" || f === "bottom"
            ? ((w = f),
              (g =
                d ===
                ((await (s.isRTL == null ? void 0 : s.isRTL(a.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((g = f), (w = d === "end" ? "top" : "bottom"));
          const y = p - c.top - c.bottom,
            x = v - c.left - c.right,
            S = Wr(p - c[w], y),
            b = Wr(v - c[g], x),
            T = !t.middlewareData.shift;
          let C = S,
            R = b;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (R = x),
            (r = t.middlewareData.shift) != null && r.enabled.y && (C = y),
            T && !d)
          ) {
            const D = jt(c.left, 0),
              B = jt(c.right, 0),
              V = jt(c.top, 0),
              Y = jt(c.bottom, 0);
            m
              ? (R = v - 2 * (D !== 0 || B !== 0 ? D + B : jt(c.left, c.right)))
              : (C =
                  p - 2 * (V !== 0 || Y !== 0 ? V + Y : jt(c.top, c.bottom)));
          }
          await l({ ...t, availableWidth: R, availableHeight: C });
          const L = await s.getDimensions(a.floating);
          return v !== L.width || p !== L.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function wc() {
  return typeof window < "u";
}
function ts(e) {
  return RC(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Bt(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function Vn(e) {
  var t;
  return (t = (RC(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function RC(e) {
  return wc() ? e instanceof Node || e instanceof Bt(e).Node : !1;
}
function wn(e) {
  return wc() ? e instanceof Element || e instanceof Bt(e).Element : !1;
}
function ur(e) {
  return wc() ? e instanceof HTMLElement || e instanceof Bt(e).HTMLElement : !1;
}
function A0(e) {
  return !wc() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof Bt(e).ShadowRoot;
}
function Fa(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = xn(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    o !== "inline" &&
    o !== "contents"
  );
}
function MF(e) {
  return /^(table|td|th)$/.test(ts(e));
}
function xc(e) {
  try {
    if (e.matches(":popover-open")) return !0;
  } catch {}
  try {
    return e.matches(":modal");
  } catch {
    return !1;
  }
}
const kF = /transform|translate|scale|rotate|perspective|filter/,
  DF = /paint|layout|strict|content/,
  no = (e) => !!e && e !== "none";
let Of;
function wm(e) {
  const t = wn(e) ? xn(e) : e;
  return (
    no(t.transform) ||
    no(t.translate) ||
    no(t.scale) ||
    no(t.rotate) ||
    no(t.perspective) ||
    (!xm() && (no(t.backdropFilter) || no(t.filter))) ||
    kF.test(t.willChange || "") ||
    DF.test(t.contain || "")
  );
}
function OF(e) {
  let t = Hr(e);
  for (; ur(t) && !zi(t); ) {
    if (wm(t)) return t;
    if (xc(t)) return null;
    t = Hr(t);
  }
  return null;
}
function xm() {
  return (
    Of == null &&
      (Of =
        typeof CSS < "u" &&
        CSS.supports &&
        CSS.supports("-webkit-backdrop-filter", "none")),
    Of
  );
}
function zi(e) {
  return /^(html|body|#document)$/.test(ts(e));
}
function xn(e) {
  return Bt(e).getComputedStyle(e);
}
function Sc(e) {
  return wn(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Hr(e) {
  if (ts(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (A0(e) && e.host) || Vn(e);
  return A0(t) ? t.host : t;
}
function TC(e) {
  const t = Hr(e);
  return zi(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : ur(t) && Fa(t)
      ? t
      : TC(t);
}
function ya(e, t, n) {
  var r;
  (t === void 0 && (t = []), n === void 0 && (n = !0));
  const o = TC(e),
    i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    s = Bt(o);
  if (i) {
    const a = mh(s);
    return t.concat(
      s,
      s.visualViewport || [],
      Fa(o) ? o : [],
      a && n ? ya(a) : [],
    );
  } else return t.concat(o, ya(o, [], n));
}
function mh(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function AC(e) {
  const t = xn(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = ur(e),
    i = o ? e.offsetWidth : n,
    s = o ? e.offsetHeight : r,
    a = Ou(n) !== i || Ou(r) !== s;
  return (a && ((n = i), (r = s)), { width: n, height: r, $: a });
}
function Sm(e) {
  return wn(e) ? e : e.contextElement;
}
function xi(e) {
  const t = Sm(e);
  if (!ur(t)) return jn(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: i } = AC(t);
  let s = (i ? Ou(n.width) : n.width) / r,
    a = (i ? Ou(n.height) : n.height) / o;
  return (
    (!s || !Number.isFinite(s)) && (s = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    { x: s, y: a }
  );
}
const NF = jn(0);
function _C(e) {
  const t = Bt(e);
  return !xm() || !t.visualViewport
    ? NF
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function LF(e, t, n) {
  return (t === void 0 && (t = !1), !n || (t && n !== Bt(e)) ? !1 : t);
}
function No(e, t, n, r) {
  (t === void 0 && (t = !1), n === void 0 && (n = !1));
  const o = e.getBoundingClientRect(),
    i = Sm(e);
  let s = jn(1);
  t && (r ? wn(r) && (s = xi(r)) : (s = xi(e)));
  const a = LF(i, n, r) ? _C(i) : jn(0);
  let l = (o.left + a.x) / s.x,
    u = (o.top + a.y) / s.y,
    c = o.width / s.x,
    f = o.height / s.y;
  if (i) {
    const d = Bt(i),
      m = r && wn(r) ? Bt(r) : r;
    let v = d,
      p = mh(v);
    for (; p && r && m !== v; ) {
      const w = xi(p),
        g = p.getBoundingClientRect(),
        y = xn(p),
        x = g.left + (p.clientLeft + parseFloat(y.paddingLeft)) * w.x,
        S = g.top + (p.clientTop + parseFloat(y.paddingTop)) * w.y;
      ((l *= w.x),
        (u *= w.y),
        (c *= w.x),
        (f *= w.y),
        (l += x),
        (u += S),
        (v = Bt(p)),
        (p = mh(v)));
    }
  }
  return Lu({ width: c, height: f, x: l, y: u });
}
function Ec(e, t) {
  const n = Sc(e).scrollLeft;
  return t ? t.left + n : No(Vn(e)).left + n;
}
function MC(e, t) {
  const n = e.getBoundingClientRect(),
    r = n.left + t.scrollLeft - Ec(e, n),
    o = n.top + t.scrollTop;
  return { x: r, y: o };
}
function jF(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const i = o === "fixed",
    s = Vn(r),
    a = t ? xc(t.floating) : !1;
  if (r === s || (a && i)) return n;
  let l = { scrollLeft: 0, scrollTop: 0 },
    u = jn(1);
  const c = jn(0),
    f = ur(r);
  if ((f || (!f && !i)) && ((ts(r) !== "body" || Fa(s)) && (l = Sc(r)), f)) {
    const m = No(r);
    ((u = xi(r)), (c.x = m.x + r.clientLeft), (c.y = m.y + r.clientTop));
  }
  const d = s && !f && !i ? MC(s, l) : jn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + d.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + d.y,
  };
}
function IF(e) {
  return Array.from(e.getClientRects());
}
function FF(e) {
  const t = Vn(e),
    n = Sc(e),
    r = e.ownerDocument.body,
    o = jt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    i = jt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Ec(e);
  const a = -n.scrollTop;
  return (
    xn(r).direction === "rtl" && (s += jt(t.clientWidth, r.clientWidth) - o),
    { width: o, height: i, x: s, y: a }
  );
}
const _0 = 25;
function VF(e, t) {
  const n = Bt(e),
    r = Vn(e),
    o = n.visualViewport;
  let i = r.clientWidth,
    s = r.clientHeight,
    a = 0,
    l = 0;
  if (o) {
    ((i = o.width), (s = o.height));
    const c = xm();
    (!c || (c && t === "fixed")) && ((a = o.offsetLeft), (l = o.offsetTop));
  }
  const u = Ec(r);
  if (u <= 0) {
    const c = r.ownerDocument,
      f = c.body,
      d = getComputedStyle(f),
      m =
        (c.compatMode === "CSS1Compat" &&
          parseFloat(d.marginLeft) + parseFloat(d.marginRight)) ||
        0,
      v = Math.abs(r.clientWidth - f.clientWidth - m);
    v <= _0 && (i -= v);
  } else u <= _0 && (i += u);
  return { width: i, height: s, x: a, y: l };
}
function BF(e, t) {
  const n = No(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    i = ur(e) ? xi(e) : jn(1),
    s = e.clientWidth * i.x,
    a = e.clientHeight * i.y,
    l = o * i.x,
    u = r * i.y;
  return { width: s, height: a, x: l, y: u };
}
function M0(e, t, n) {
  let r;
  if (t === "viewport") r = VF(e, n);
  else if (t === "document") r = FF(Vn(e));
  else if (wn(t)) r = BF(t, n);
  else {
    const o = _C(e);
    r = { x: t.x - o.x, y: t.y - o.y, width: t.width, height: t.height };
  }
  return Lu(r);
}
function kC(e, t) {
  const n = Hr(e);
  return n === t || !wn(n) || zi(n)
    ? !1
    : xn(n).position === "fixed" || kC(n, t);
}
function UF(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = ya(e, [], !1).filter((a) => wn(a) && ts(a) !== "body"),
    o = null;
  const i = xn(e).position === "fixed";
  let s = i ? Hr(e) : e;
  for (; wn(s) && !zi(s); ) {
    const a = xn(s),
      l = wm(s);
    (!l && a.position === "fixed" && (o = null),
      (
        i
          ? !l && !o
          : (!l &&
              a.position === "static" &&
              !!o &&
              (o.position === "absolute" || o.position === "fixed")) ||
            (Fa(s) && !l && kC(e, s))
      )
        ? (r = r.filter((c) => c !== s))
        : (o = a),
      (s = Hr(s)));
  }
  return (t.set(e, r), r);
}
function $F(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const s = [
      ...(n === "clippingAncestors"
        ? xc(t)
          ? []
          : UF(t, this._c)
        : [].concat(n)),
      r,
    ],
    a = M0(t, s[0], o);
  let l = a.top,
    u = a.right,
    c = a.bottom,
    f = a.left;
  for (let d = 1; d < s.length; d++) {
    const m = M0(t, s[d], o);
    ((l = jt(m.top, l)),
      (u = Wr(m.right, u)),
      (c = Wr(m.bottom, c)),
      (f = jt(m.left, f)));
  }
  return { width: u - f, height: c - l, x: f, y: l };
}
function zF(e) {
  const { width: t, height: n } = AC(e);
  return { width: t, height: n };
}
function WF(e, t, n) {
  const r = ur(t),
    o = Vn(t),
    i = n === "fixed",
    s = No(e, !0, i, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = jn(0);
  function u() {
    l.x = Ec(o);
  }
  if (r || (!r && !i))
    if (((ts(t) !== "body" || Fa(o)) && (a = Sc(t)), r)) {
      const m = No(t, !0, i, t);
      ((l.x = m.x + t.clientLeft), (l.y = m.y + t.clientTop));
    } else o && u();
  i && !r && o && u();
  const c = o && !r && !i ? MC(o, a) : jn(0),
    f = s.left + a.scrollLeft - l.x - c.x,
    d = s.top + a.scrollTop - l.y - c.y;
  return { x: f, y: d, width: s.width, height: s.height };
}
function Nf(e) {
  return xn(e).position === "static";
}
function k0(e, t) {
  if (!ur(e) || xn(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return (Vn(e) === n && (n = n.ownerDocument.body), n);
}
function DC(e, t) {
  const n = Bt(e);
  if (xc(e)) return n;
  if (!ur(e)) {
    let o = Hr(e);
    for (; o && !zi(o); ) {
      if (wn(o) && !Nf(o)) return o;
      o = Hr(o);
    }
    return n;
  }
  let r = k0(e, t);
  for (; r && MF(r) && Nf(r); ) r = k0(r, t);
  return r && zi(r) && Nf(r) && !wm(r) ? n : r || OF(e) || n;
}
const HF = async function (e) {
  const t = this.getOffsetParent || DC,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: WF(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function KF(e) {
  return xn(e).direction === "rtl";
}
const GF = {
  convertOffsetParentRelativeRectToViewportRelativeRect: jF,
  getDocumentElement: Vn,
  getClippingRect: $F,
  getOffsetParent: DC,
  getElementRects: HF,
  getClientRects: IF,
  getDimensions: zF,
  getScale: xi,
  isElement: wn,
  isRTL: KF,
};
function OC(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function qF(e, t) {
  let n = null,
    r;
  const o = Vn(e);
  function i() {
    var a;
    (clearTimeout(r), (a = n) == null || a.disconnect(), (n = null));
  }
  function s(a, l) {
    (a === void 0 && (a = !1), l === void 0 && (l = 1), i());
    const u = e.getBoundingClientRect(),
      { left: c, top: f, width: d, height: m } = u;
    if ((a || t(), !d || !m)) return;
    const v = Sl(f),
      p = Sl(o.clientWidth - (c + d)),
      w = Sl(o.clientHeight - (f + m)),
      g = Sl(c),
      x = {
        rootMargin: -v + "px " + -p + "px " + -w + "px " + -g + "px",
        threshold: jt(0, Wr(1, l)) || 1,
      };
    let S = !0;
    function b(T) {
      const C = T[0].intersectionRatio;
      if (C !== l) {
        if (!S) return s();
        C
          ? s(!1, C)
          : (r = setTimeout(() => {
              s(!1, 1e-7);
            }, 1e3));
      }
      (C === 1 && !OC(u, e.getBoundingClientRect()) && s(), (S = !1));
    }
    try {
      n = new IntersectionObserver(b, { ...x, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(b, x);
    }
    n.observe(e);
  }
  return (s(!0), i);
}
function QF(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: i = !0,
      elementResize: s = typeof ResizeObserver == "function",
      layoutShift: a = typeof IntersectionObserver == "function",
      animationFrame: l = !1,
    } = r,
    u = Sm(e),
    c = o || i ? [...(u ? ya(u) : []), ...(t ? ya(t) : [])] : [];
  c.forEach((g) => {
    (o && g.addEventListener("scroll", n, { passive: !0 }),
      i && g.addEventListener("resize", n));
  });
  const f = u && a ? qF(u, n) : null;
  let d = -1,
    m = null;
  s &&
    ((m = new ResizeObserver((g) => {
      let [y] = g;
      (y &&
        y.target === u &&
        m &&
        t &&
        (m.unobserve(t),
        cancelAnimationFrame(d),
        (d = requestAnimationFrame(() => {
          var x;
          (x = m) == null || x.observe(t);
        }))),
        n());
    })),
    u && !l && m.observe(u),
    t && m.observe(t));
  let v,
    p = l ? No(e) : null;
  l && w();
  function w() {
    const g = No(e);
    (p && !OC(p, g) && n(), (p = g), (v = requestAnimationFrame(w)));
  }
  return (
    n(),
    () => {
      var g;
      (c.forEach((y) => {
        (o && y.removeEventListener("scroll", n),
          i && y.removeEventListener("resize", n));
      }),
        f == null || f(),
        (g = m) == null || g.disconnect(),
        (m = null),
        l && cancelAnimationFrame(v));
    }
  );
}
const XF = RF,
  YF = TF,
  ZF = CF,
  JF = _F,
  eV = bF,
  D0 = EF,
  tV = AF,
  nV = (e, t, n) => {
    const r = new Map(),
      o = { platform: GF, ...n },
      i = { ...o.platform, _c: r };
    return SF(e, t, { ...o, platform: i });
  };
var rV = typeof document < "u",
  oV = function () {},
  Kl = rV ? h.useLayoutEffect : oV;
function ju(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!ju(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !ju(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function NC(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function O0(e, t) {
  const n = NC(e);
  return Math.round(t * n) / n;
}
function Lf(e) {
  const t = h.useRef(e);
  return (
    Kl(() => {
      t.current = e;
    }),
    t
  );
}
function iV(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: o,
      elements: { reference: i, floating: s } = {},
      transform: a = !0,
      whileElementsMounted: l,
      open: u,
    } = e,
    [c, f] = h.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [d, m] = h.useState(r);
  ju(d, r) || m(r);
  const [v, p] = h.useState(null),
    [w, g] = h.useState(null),
    y = h.useCallback((M) => {
      M !== T.current && ((T.current = M), p(M));
    }, []),
    x = h.useCallback((M) => {
      M !== C.current && ((C.current = M), g(M));
    }, []),
    S = i || v,
    b = s || w,
    T = h.useRef(null),
    C = h.useRef(null),
    R = h.useRef(c),
    L = l != null,
    D = Lf(l),
    B = Lf(o),
    V = Lf(u),
    Y = h.useCallback(() => {
      if (!T.current || !C.current) return;
      const M = { placement: t, strategy: n, middleware: d };
      (B.current && (M.platform = B.current),
        nV(T.current, C.current, M).then((N) => {
          const F = { ...N, isPositioned: V.current !== !1 };
          W.current &&
            !ju(R.current, F) &&
            ((R.current = F),
            Gi.flushSync(() => {
              f(F);
            }));
        }));
    }, [d, t, n, B, V]);
  Kl(() => {
    u === !1 &&
      R.current.isPositioned &&
      ((R.current.isPositioned = !1), f((M) => ({ ...M, isPositioned: !1 })));
  }, [u]);
  const W = h.useRef(!1);
  (Kl(
    () => (
      (W.current = !0),
      () => {
        W.current = !1;
      }
    ),
    [],
  ),
    Kl(() => {
      if ((S && (T.current = S), b && (C.current = b), S && b)) {
        if (D.current) return D.current(S, b, Y);
        Y();
      }
    }, [S, b, Y, D, L]));
  const se = h.useMemo(
      () => ({ reference: T, floating: C, setReference: y, setFloating: x }),
      [y, x],
    ),
    J = h.useMemo(() => ({ reference: S, floating: b }), [S, b]),
    Z = h.useMemo(() => {
      const M = { position: n, left: 0, top: 0 };
      if (!J.floating) return M;
      const N = O0(J.floating, c.x),
        F = O0(J.floating, c.y);
      return a
        ? {
            ...M,
            transform: "translate(" + N + "px, " + F + "px)",
            ...(NC(J.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: N, top: F };
    }, [n, a, J.floating, c.x, c.y]);
  return h.useMemo(
    () => ({ ...c, update: Y, refs: se, elements: J, floatingStyles: Z }),
    [c, Y, se, J, Z],
  );
}
const sV = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? D0({ element: r.current, padding: o }).fn(n)
            : {}
          : r
            ? D0({ element: r, padding: o }).fn(n)
            : {};
      },
    };
  },
  aV = (e, t) => {
    const n = XF(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  lV = (e, t) => {
    const n = YF(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  uV = (e, t) => ({ fn: tV(e).fn, options: [e, t] }),
  cV = (e, t) => {
    const n = ZF(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  fV = (e, t) => {
    const n = JF(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  dV = (e, t) => {
    const n = eV(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  hV = (e, t) => {
    const n = sV(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  };
function pV(e) {
  const t = mV(e),
    n = h.forwardRef((r, o) => {
      const { children: i, ...s } = r,
        a = h.Children.toArray(i),
        l = a.find(yV);
      if (l) {
        const u = l.props.children,
          c = a.map((f) =>
            f === l
              ? h.Children.count(u) > 1
                ? h.Children.only(null)
                : h.isValidElement(u)
                  ? u.props.children
                  : null
              : f,
          );
        return E.jsx(t, {
          ...s,
          ref: o,
          children: h.isValidElement(u) ? h.cloneElement(u, void 0, c) : null,
        });
      }
      return E.jsx(t, { ...s, ref: o, children: i });
    });
  return ((n.displayName = `${e}.Slot`), n);
}
function mV(e) {
  const t = h.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (h.isValidElement(o)) {
      const s = wV(o),
        a = vV(i, o.props);
      return (
        o.type !== h.Fragment && (a.ref = r ? Ht(r, s) : s),
        h.cloneElement(o, a)
      );
    }
    return h.Children.count(o) > 1 ? h.Children.only(null) : null;
  });
  return ((t.displayName = `${e}.SlotClone`), t);
}
var gV = Symbol("radix.slottable");
function yV(e) {
  return (
    h.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === gV
  );
}
function vV(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      i = t[r];
    /^on[A-Z]/.test(r)
      ? o && i
        ? (n[r] = (...a) => {
            const l = i(...a);
            return (o(...a), l);
          })
        : o && (n[r] = o)
      : r === "style"
        ? (n[r] = { ...o, ...i })
        : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function wV(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var xV = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  SV = xV.reduce((e, t) => {
    const n = pV(`Primitive.${t}`),
      r = h.forwardRef((o, i) => {
        const { asChild: s, ...a } = o,
          l = s ? n : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          E.jsx(l, { ...a, ref: i })
        );
      });
    return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
  }, {}),
  EV = "Arrow",
  LC = h.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: o = 5, ...i } = e;
    return E.jsx(SV.svg, {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : E.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
LC.displayName = EV;
var CV = LC;
function bV(e, t = []) {
  let n = [];
  function r(i, s) {
    const a = h.createContext(s),
      l = n.length;
    n = [...n, s];
    const u = (f) => {
      var g;
      const { scope: d, children: m, ...v } = f,
        p = ((g = d == null ? void 0 : d[e]) == null ? void 0 : g[l]) || a,
        w = h.useMemo(() => v, Object.values(v));
      return E.jsx(p.Provider, { value: w, children: m });
    };
    u.displayName = i + "Provider";
    function c(f, d) {
      var p;
      const m = ((p = d == null ? void 0 : d[e]) == null ? void 0 : p[l]) || a,
        v = h.useContext(m);
      if (v) return v;
      if (s !== void 0) return s;
      throw new Error(`\`${f}\` must be used within \`${i}\``);
    }
    return [u, c];
  }
  const o = () => {
    const i = n.map((s) => h.createContext(s));
    return function (a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return h.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
    };
  };
  return ((o.scopeName = e), [r, PV(o, ...t)]);
}
function PV(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const s = r.reduce((a, { useScope: l, scopeName: u }) => {
        const f = l(i)[`__scope${u}`];
        return { ...a, ...f };
      }, {});
      return h.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return ((n.scopeName = t.scopeName), n);
}
function RV(e) {
  const t = TV(e),
    n = h.forwardRef((r, o) => {
      const { children: i, ...s } = r,
        a = h.Children.toArray(i),
        l = a.find(_V);
      if (l) {
        const u = l.props.children,
          c = a.map((f) =>
            f === l
              ? h.Children.count(u) > 1
                ? h.Children.only(null)
                : h.isValidElement(u)
                  ? u.props.children
                  : null
              : f,
          );
        return E.jsx(t, {
          ...s,
          ref: o,
          children: h.isValidElement(u) ? h.cloneElement(u, void 0, c) : null,
        });
      }
      return E.jsx(t, { ...s, ref: o, children: i });
    });
  return ((n.displayName = `${e}.Slot`), n);
}
function TV(e) {
  const t = h.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (h.isValidElement(o)) {
      const s = kV(o),
        a = MV(i, o.props);
      return (
        o.type !== h.Fragment && (a.ref = r ? Ht(r, s) : s),
        h.cloneElement(o, a)
      );
    }
    return h.Children.count(o) > 1 ? h.Children.only(null) : null;
  });
  return ((t.displayName = `${e}.SlotClone`), t);
}
var AV = Symbol("radix.slottable");
function _V(e) {
  return (
    h.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === AV
  );
}
function MV(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      i = t[r];
    /^on[A-Z]/.test(r)
      ? o && i
        ? (n[r] = (...a) => {
            const l = i(...a);
            return (o(...a), l);
          })
        : o && (n[r] = o)
      : r === "style"
        ? (n[r] = { ...o, ...i })
        : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function kV(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var DV = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  jC = DV.reduce((e, t) => {
    const n = RV(`Primitive.${t}`),
      r = h.forwardRef((o, i) => {
        const { asChild: s, ...a } = o,
          l = s ? n : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          E.jsx(l, { ...a, ref: i })
        );
      });
    return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
  }, {});
function OV(e) {
  const [t, n] = h.useState(void 0);
  return (
    vn(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const i = o[0];
          let s, a;
          if ("borderBoxSize" in i) {
            const l = i.borderBoxSize,
              u = Array.isArray(l) ? l[0] : l;
            ((s = u.inlineSize), (a = u.blockSize));
          } else ((s = e.offsetWidth), (a = e.offsetHeight));
          n({ width: s, height: a });
        });
        return (r.observe(e, { box: "border-box" }), () => r.unobserve(e));
      } else n(void 0);
    }, [e]),
    t
  );
}
var Em = "Popper",
  [IC, FC] = bV(Em),
  [NV, VC] = IC(Em),
  BC = (e) => {
    const { __scopePopper: t, children: n } = e,
      [r, o] = h.useState(null);
    return E.jsx(NV, { scope: t, anchor: r, onAnchorChange: o, children: n });
  };
BC.displayName = Em;
var UC = "PopperAnchor",
  $C = h.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      i = VC(UC, n),
      s = h.useRef(null),
      a = Dt(t, s),
      l = h.useRef(null);
    return (
      h.useEffect(() => {
        const u = l.current;
        ((l.current = (r == null ? void 0 : r.current) || s.current),
          u !== l.current && i.onAnchorChange(l.current));
      }),
      r ? null : E.jsx(jC.div, { ...o, ref: a })
    );
  });
$C.displayName = UC;
var Cm = "PopperContent",
  [LV, jV] = IC(Cm),
  zC = h.forwardRef((e, t) => {
    var me, ae, Ue, Kt, Bn, $e;
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: o = 0,
        align: i = "center",
        alignOffset: s = 0,
        arrowPadding: a = 0,
        avoidCollisions: l = !0,
        collisionBoundary: u = [],
        collisionPadding: c = 0,
        sticky: f = "partial",
        hideWhenDetached: d = !1,
        updatePositionStrategy: m = "optimized",
        onPlaced: v,
        ...p
      } = e,
      w = VC(Cm, n),
      [g, y] = h.useState(null),
      x = Dt(t, (bt) => y(bt)),
      [S, b] = h.useState(null),
      T = OV(S),
      C = (T == null ? void 0 : T.width) ?? 0,
      R = (T == null ? void 0 : T.height) ?? 0,
      L = r + (i !== "center" ? "-" + i : ""),
      D =
        typeof c == "number"
          ? c
          : { top: 0, right: 0, bottom: 0, left: 0, ...c },
      B = Array.isArray(u) ? u : [u],
      V = B.length > 0,
      Y = { padding: D, boundary: B.filter(FV), altBoundary: V },
      {
        refs: W,
        floatingStyles: se,
        placement: J,
        isPositioned: Z,
        middlewareData: M,
      } = iV({
        strategy: "fixed",
        placement: L,
        whileElementsMounted: (...bt) =>
          QF(...bt, { animationFrame: m === "always" }),
        elements: { reference: w.anchor },
        middleware: [
          aV({ mainAxis: o + R, alignmentAxis: s }),
          l &&
            lV({
              mainAxis: !0,
              crossAxis: !1,
              limiter: f === "partial" ? uV() : void 0,
              ...Y,
            }),
          l && cV({ ...Y }),
          fV({
            ...Y,
            apply: ({
              elements: bt,
              rects: on,
              availableWidth: Tc,
              availableHeight: Un,
            }) => {
              const { width: Ac, height: _c } = on.reference,
                Zr = bt.floating.style;
              (Zr.setProperty("--radix-popper-available-width", `${Tc}px`),
                Zr.setProperty("--radix-popper-available-height", `${Un}px`),
                Zr.setProperty("--radix-popper-anchor-width", `${Ac}px`),
                Zr.setProperty("--radix-popper-anchor-height", `${_c}px`));
            },
          }),
          S && hV({ element: S, padding: a }),
          VV({ arrowWidth: C, arrowHeight: R }),
          d && dV({ strategy: "referenceHidden", ...Y }),
        ],
      }),
      [N, F] = KC(J),
      K = In(v);
    vn(() => {
      Z && (K == null || K());
    }, [Z, K]);
    const re = (me = M.arrow) == null ? void 0 : me.x,
      fe = (ae = M.arrow) == null ? void 0 : ae.y,
      Se = ((Ue = M.arrow) == null ? void 0 : Ue.centerOffset) !== 0,
      [ye, Ee] = h.useState();
    return (
      vn(() => {
        g && Ee(window.getComputedStyle(g).zIndex);
      }, [g]),
      E.jsx("div", {
        ref: W.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...se,
          transform: Z ? se.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: ye,
          "--radix-popper-transform-origin": [
            (Kt = M.transformOrigin) == null ? void 0 : Kt.x,
            (Bn = M.transformOrigin) == null ? void 0 : Bn.y,
          ].join(" "),
          ...((($e = M.hide) == null ? void 0 : $e.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: E.jsx(LV, {
          scope: n,
          placedSide: N,
          onArrowChange: b,
          arrowX: re,
          arrowY: fe,
          shouldHideArrow: Se,
          children: E.jsx(jC.div, {
            "data-side": N,
            "data-align": F,
            ...p,
            ref: x,
            style: { ...p.style, animation: Z ? void 0 : "none" },
          }),
        }),
      })
    );
  });
zC.displayName = Cm;
var WC = "PopperArrow",
  IV = { top: "bottom", right: "left", bottom: "top", left: "right" },
  HC = h.forwardRef(function (t, n) {
    const { __scopePopper: r, ...o } = t,
      i = jV(WC, r),
      s = IV[i.placedSide];
    return E.jsx("span", {
      ref: i.onArrowChange,
      style: {
        position: "absolute",
        left: i.arrowX,
        top: i.arrowY,
        [s]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[i.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[i.placedSide],
        visibility: i.shouldHideArrow ? "hidden" : void 0,
      },
      children: E.jsx(CV, {
        ...o,
        ref: n,
        style: { ...o.style, display: "block" },
      }),
    });
  });
HC.displayName = WC;
function FV(e) {
  return e !== null;
}
var VV = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var w, g, y;
    const { placement: n, rects: r, middlewareData: o } = t,
      s = ((w = o.arrow) == null ? void 0 : w.centerOffset) !== 0,
      a = s ? 0 : e.arrowWidth,
      l = s ? 0 : e.arrowHeight,
      [u, c] = KC(n),
      f = { start: "0%", center: "50%", end: "100%" }[c],
      d = (((g = o.arrow) == null ? void 0 : g.x) ?? 0) + a / 2,
      m = (((y = o.arrow) == null ? void 0 : y.y) ?? 0) + l / 2;
    let v = "",
      p = "";
    return (
      u === "bottom"
        ? ((v = s ? f : `${d}px`), (p = `${-l}px`))
        : u === "top"
          ? ((v = s ? f : `${d}px`), (p = `${r.floating.height + l}px`))
          : u === "right"
            ? ((v = `${-l}px`), (p = s ? f : `${m}px`))
            : u === "left" &&
              ((v = `${r.floating.width + l}px`), (p = s ? f : `${m}px`)),
      { data: { x: v, y: p } }
    );
  },
});
function KC(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var BV = BC,
  UV = $C,
  $V = zC,
  zV = HC;
function WV(e) {
  const t = HV(e),
    n = h.forwardRef((r, o) => {
      const { children: i, ...s } = r,
        a = h.Children.toArray(i),
        l = a.find(GV);
      if (l) {
        const u = l.props.children,
          c = a.map((f) =>
            f === l
              ? h.Children.count(u) > 1
                ? h.Children.only(null)
                : h.isValidElement(u)
                  ? u.props.children
                  : null
              : f,
          );
        return E.jsx(t, {
          ...s,
          ref: o,
          children: h.isValidElement(u) ? h.cloneElement(u, void 0, c) : null,
        });
      }
      return E.jsx(t, { ...s, ref: o, children: i });
    });
  return ((n.displayName = `${e}.Slot`), n);
}
function HV(e) {
  const t = h.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (h.isValidElement(o)) {
      const s = QV(o),
        a = qV(i, o.props);
      return (
        o.type !== h.Fragment && (a.ref = r ? Ht(r, s) : s),
        h.cloneElement(o, a)
      );
    }
    return h.Children.count(o) > 1 ? h.Children.only(null) : null;
  });
  return ((t.displayName = `${e}.SlotClone`), t);
}
var KV = Symbol("radix.slottable");
function GV(e) {
  return (
    h.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === KV
  );
}
function qV(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      i = t[r];
    /^on[A-Z]/.test(r)
      ? o && i
        ? (n[r] = (...a) => {
            const l = i(...a);
            return (o(...a), l);
          })
        : o && (n[r] = o)
      : r === "style"
        ? (n[r] = { ...o, ...i })
        : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function QV(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var XV = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  YV = XV.reduce((e, t) => {
    const n = WV(`Primitive.${t}`),
      r = h.forwardRef((o, i) => {
        const { asChild: s, ...a } = o,
          l = s ? n : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          E.jsx(l, { ...a, ref: i })
        );
      });
    return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
  }, {}),
  ZV = "Portal",
  GC = h.forwardRef((e, t) => {
    var a;
    const { container: n, ...r } = e,
      [o, i] = h.useState(!1);
    vn(() => i(!0), []);
    const s =
      n ||
      (o &&
        ((a = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : a.body));
    return s ? uS.createPortal(E.jsx(YV.div, { ...r, ref: t }), s) : null;
  });
GC.displayName = ZV;
function JV(e, t) {
  return h.useReducer((n, r) => t[n][r] ?? n, e);
}
var Va = (e) => {
  const { present: t, children: n } = e,
    r = e3(t),
    o =
      typeof n == "function" ? n({ present: r.isPresent }) : h.Children.only(n),
    i = Dt(r.ref, t3(o));
  return typeof n == "function" || r.isPresent
    ? h.cloneElement(o, { ref: i })
    : null;
};
Va.displayName = "Presence";
function e3(e) {
  const [t, n] = h.useState(),
    r = h.useRef(null),
    o = h.useRef(e),
    i = h.useRef("none"),
    s = e ? "mounted" : "unmounted",
    [a, l] = JV(s, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    h.useEffect(() => {
      const u = El(r.current);
      i.current = a === "mounted" ? u : "none";
    }, [a]),
    vn(() => {
      const u = r.current,
        c = o.current;
      if (c !== e) {
        const d = i.current,
          m = El(u);
        (e
          ? l("MOUNT")
          : m === "none" || (u == null ? void 0 : u.display) === "none"
            ? l("UNMOUNT")
            : l(c && d !== m ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e));
      }
    }, [e, l]),
    vn(() => {
      if (t) {
        let u;
        const c = t.ownerDocument.defaultView ?? window,
          f = (m) => {
            const p = El(r.current).includes(CSS.escape(m.animationName));
            if (m.target === t && p && (l("ANIMATION_END"), !o.current)) {
              const w = t.style.animationFillMode;
              ((t.style.animationFillMode = "forwards"),
                (u = c.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = w);
                })));
            }
          },
          d = (m) => {
            m.target === t && (i.current = El(r.current));
          };
        return (
          t.addEventListener("animationstart", d),
          t.addEventListener("animationcancel", f),
          t.addEventListener("animationend", f),
          () => {
            (c.clearTimeout(u),
              t.removeEventListener("animationstart", d),
              t.removeEventListener("animationcancel", f),
              t.removeEventListener("animationend", f));
          }
        );
      } else l("ANIMATION_END");
    }, [t, l]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(a),
      ref: h.useCallback((u) => {
        ((r.current = u ? getComputedStyle(u) : null), n(u));
      }, []),
    }
  );
}
function El(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function t3(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function qC(e) {
  const t = n3(e),
    n = h.forwardRef((r, o) => {
      const { children: i, ...s } = r,
        a = h.Children.toArray(i),
        l = a.find(o3);
      if (l) {
        const u = l.props.children,
          c = a.map((f) =>
            f === l
              ? h.Children.count(u) > 1
                ? h.Children.only(null)
                : h.isValidElement(u)
                  ? u.props.children
                  : null
              : f,
          );
        return E.jsx(t, {
          ...s,
          ref: o,
          children: h.isValidElement(u) ? h.cloneElement(u, void 0, c) : null,
        });
      }
      return E.jsx(t, { ...s, ref: o, children: i });
    });
  return ((n.displayName = `${e}.Slot`), n);
}
function n3(e) {
  const t = h.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (h.isValidElement(o)) {
      const s = s3(o),
        a = i3(i, o.props);
      return (
        o.type !== h.Fragment && (a.ref = r ? Ht(r, s) : s),
        h.cloneElement(o, a)
      );
    }
    return h.Children.count(o) > 1 ? h.Children.only(null) : null;
  });
  return ((t.displayName = `${e}.SlotClone`), t);
}
var r3 = Symbol("radix.slottable");
function o3(e) {
  return (
    h.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === r3
  );
}
function i3(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      i = t[r];
    /^on[A-Z]/.test(r)
      ? o && i
        ? (n[r] = (...a) => {
            const l = i(...a);
            return (o(...a), l);
          })
        : o && (n[r] = o)
      : r === "style"
        ? (n[r] = { ...o, ...i })
        : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function s3(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var a3 = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  Ba = a3.reduce((e, t) => {
    const n = qC(`Primitive.${t}`),
      r = h.forwardRef((o, i) => {
        const { asChild: s, ...a } = o,
          l = s ? n : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          E.jsx(l, { ...a, ref: i })
        );
      });
    return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
  }, {});
function l3(e, t) {
  e && Gi.flushSync(() => e.dispatchEvent(t));
}
function u3(e, t = []) {
  let n = [];
  function r(i, s) {
    const a = h.createContext(s),
      l = n.length;
    n = [...n, s];
    const u = (f) => {
      var g;
      const { scope: d, children: m, ...v } = f,
        p = ((g = d == null ? void 0 : d[e]) == null ? void 0 : g[l]) || a,
        w = h.useMemo(() => v, Object.values(v));
      return E.jsx(p.Provider, { value: w, children: m });
    };
    u.displayName = i + "Provider";
    function c(f, d) {
      var p;
      const m = ((p = d == null ? void 0 : d[e]) == null ? void 0 : p[l]) || a,
        v = h.useContext(m);
      if (v) return v;
      if (s !== void 0) return s;
      throw new Error(`\`${f}\` must be used within \`${i}\``);
    }
    return [u, c];
  }
  const o = () => {
    const i = n.map((s) => h.createContext(s));
    return function (a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return h.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
    };
  };
  return ((o.scopeName = e), [r, c3(o, ...t)]);
}
function c3(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const s = r.reduce((a, { useScope: l, scopeName: u }) => {
        const f = l(i)[`__scope${u}`];
        return { ...a, ...f };
      }, {});
      return h.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return ((n.scopeName = t.scopeName), n);
}
function f3(e) {
  const t = d3(e),
    n = h.forwardRef((r, o) => {
      const { children: i, ...s } = r,
        a = h.Children.toArray(i),
        l = a.find(p3);
      if (l) {
        const u = l.props.children,
          c = a.map((f) =>
            f === l
              ? h.Children.count(u) > 1
                ? h.Children.only(null)
                : h.isValidElement(u)
                  ? u.props.children
                  : null
              : f,
          );
        return E.jsx(t, {
          ...s,
          ref: o,
          children: h.isValidElement(u) ? h.cloneElement(u, void 0, c) : null,
        });
      }
      return E.jsx(t, { ...s, ref: o, children: i });
    });
  return ((n.displayName = `${e}.Slot`), n);
}
function d3(e) {
  const t = h.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (h.isValidElement(o)) {
      const s = g3(o),
        a = m3(i, o.props);
      return (
        o.type !== h.Fragment && (a.ref = r ? Ht(r, s) : s),
        h.cloneElement(o, a)
      );
    }
    return h.Children.count(o) > 1 ? h.Children.only(null) : null;
  });
  return ((t.displayName = `${e}.SlotClone`), t);
}
var h3 = Symbol("radix.slottable");
function p3(e) {
  return (
    h.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === h3
  );
}
function m3(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      i = t[r];
    /^on[A-Z]/.test(r)
      ? o && i
        ? (n[r] = (...a) => {
            const l = i(...a);
            return (o(...a), l);
          })
        : o && (n[r] = o)
      : r === "style"
        ? (n[r] = { ...o, ...i })
        : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function g3(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var y3 = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  QC = y3.reduce((e, t) => {
    const n = f3(`Primitive.${t}`),
      r = h.forwardRef((o, i) => {
        const { asChild: s, ...a } = o,
          l = s ? n : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          E.jsx(l, { ...a, ref: i })
        );
      });
    return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
  }, {}),
  jf = "rovingFocusGroup.onEntryFocus",
  v3 = { bubbles: !1, cancelable: !0 },
  Ua = "RovingFocusGroup",
  [gh, XC, w3] = gC(Ua),
  [x3, YC] = u3(Ua, [w3]),
  [S3, E3] = x3(Ua),
  ZC = h.forwardRef((e, t) =>
    E.jsx(gh.Provider, {
      scope: e.__scopeRovingFocusGroup,
      children: E.jsx(gh.Slot, {
        scope: e.__scopeRovingFocusGroup,
        children: E.jsx(C3, { ...e, ref: t }),
      }),
    }),
  );
ZC.displayName = Ua;
var C3 = h.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        orientation: r,
        loop: o = !1,
        dir: i,
        currentTabStopId: s,
        defaultCurrentTabStopId: a,
        onCurrentTabStopIdChange: l,
        onEntryFocus: u,
        preventScrollOnEntryFocus: c = !1,
        ...f
      } = e,
      d = h.useRef(null),
      m = Dt(t, d),
      v = yC(i),
      [p, w] = mC({ prop: s, defaultProp: a ?? null, onChange: l, caller: Ua }),
      [g, y] = h.useState(!1),
      x = In(u),
      S = XC(n),
      b = h.useRef(!1),
      [T, C] = h.useState(0);
    return (
      h.useEffect(() => {
        const R = d.current;
        if (R)
          return (
            R.addEventListener(jf, x),
            () => R.removeEventListener(jf, x)
          );
      }, [x]),
      E.jsx(S3, {
        scope: n,
        orientation: r,
        dir: v,
        loop: o,
        currentTabStopId: p,
        onItemFocus: h.useCallback((R) => w(R), [w]),
        onItemShiftTab: h.useCallback(() => y(!0), []),
        onFocusableItemAdd: h.useCallback(() => C((R) => R + 1), []),
        onFocusableItemRemove: h.useCallback(() => C((R) => R - 1), []),
        children: E.jsx(QC.div, {
          tabIndex: g || T === 0 ? -1 : 0,
          "data-orientation": r,
          ...f,
          ref: m,
          style: { outline: "none", ...e.style },
          onMouseDown: he(e.onMouseDown, () => {
            b.current = !0;
          }),
          onFocus: he(e.onFocus, (R) => {
            const L = !b.current;
            if (R.target === R.currentTarget && L && !g) {
              const D = new CustomEvent(jf, v3);
              if ((R.currentTarget.dispatchEvent(D), !D.defaultPrevented)) {
                const B = S().filter((J) => J.focusable),
                  V = B.find((J) => J.active),
                  Y = B.find((J) => J.id === p),
                  se = [V, Y, ...B].filter(Boolean).map((J) => J.ref.current);
                tb(se, c);
              }
            }
            b.current = !1;
          }),
          onBlur: he(e.onBlur, () => y(!1)),
        }),
      })
    );
  }),
  JC = "RovingFocusGroupItem",
  eb = h.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        focusable: r = !0,
        active: o = !1,
        tabStopId: i,
        children: s,
        ...a
      } = e,
      l = dh(),
      u = i || l,
      c = E3(JC, n),
      f = c.currentTabStopId === u,
      d = XC(n),
      {
        onFocusableItemAdd: m,
        onFocusableItemRemove: v,
        currentTabStopId: p,
      } = c;
    return (
      h.useEffect(() => {
        if (r) return (m(), () => v());
      }, [r, m, v]),
      E.jsx(gh.ItemSlot, {
        scope: n,
        id: u,
        focusable: r,
        active: o,
        children: E.jsx(QC.span, {
          tabIndex: f ? 0 : -1,
          "data-orientation": c.orientation,
          ...a,
          ref: t,
          onMouseDown: he(e.onMouseDown, (w) => {
            r ? c.onItemFocus(u) : w.preventDefault();
          }),
          onFocus: he(e.onFocus, () => c.onItemFocus(u)),
          onKeyDown: he(e.onKeyDown, (w) => {
            if (w.key === "Tab" && w.shiftKey) {
              c.onItemShiftTab();
              return;
            }
            if (w.target !== w.currentTarget) return;
            const g = R3(w, c.orientation, c.dir);
            if (g !== void 0) {
              if (w.metaKey || w.ctrlKey || w.altKey || w.shiftKey) return;
              w.preventDefault();
              let x = d()
                .filter((S) => S.focusable)
                .map((S) => S.ref.current);
              if (g === "last") x.reverse();
              else if (g === "prev" || g === "next") {
                g === "prev" && x.reverse();
                const S = x.indexOf(w.currentTarget);
                x = c.loop ? T3(x, S + 1) : x.slice(S + 1);
              }
              setTimeout(() => tb(x));
            }
          }),
          children:
            typeof s == "function"
              ? s({ isCurrentTabStop: f, hasTabStop: p != null })
              : s,
        }),
      })
    );
  });
eb.displayName = JC;
var b3 = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last",
};
function P3(e, t) {
  return t !== "rtl"
    ? e
    : e === "ArrowLeft"
      ? "ArrowRight"
      : e === "ArrowRight"
        ? "ArrowLeft"
        : e;
}
function R3(e, t, n) {
  const r = P3(e.key, n);
  if (
    !(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) &&
    !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))
  )
    return b3[r];
}
function tb(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (
      r === n ||
      (r.focus({ preventScroll: t }), document.activeElement !== n)
    )
      return;
}
function T3(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var A3 = ZC,
  _3 = eb,
  M3 = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  Go = new WeakMap(),
  Cl = new WeakMap(),
  bl = {},
  If = 0,
  nb = function (e) {
    return e && (e.host || nb(e.parentNode));
  },
  k3 = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = nb(n);
        return r && e.contains(r)
          ? r
          : (console.error(
              "aria-hidden",
              n,
              "in not contained inside",
              e,
              ". Doing nothing",
            ),
            null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  D3 = function (e, t, n, r) {
    var o = k3(t, Array.isArray(e) ? e : [e]);
    bl[n] || (bl[n] = new WeakMap());
    var i = bl[n],
      s = [],
      a = new Set(),
      l = new Set(o),
      u = function (f) {
        !f || a.has(f) || (a.add(f), u(f.parentNode));
      };
    o.forEach(u);
    var c = function (f) {
      !f ||
        l.has(f) ||
        Array.prototype.forEach.call(f.children, function (d) {
          if (a.has(d)) c(d);
          else
            try {
              var m = d.getAttribute(r),
                v = m !== null && m !== "false",
                p = (Go.get(d) || 0) + 1,
                w = (i.get(d) || 0) + 1;
              (Go.set(d, p),
                i.set(d, w),
                s.push(d),
                p === 1 && v && Cl.set(d, !0),
                w === 1 && d.setAttribute(n, "true"),
                v || d.setAttribute(r, "true"));
            } catch (g) {
              console.error("aria-hidden: cannot operate on ", d, g);
            }
        });
    };
    return (
      c(t),
      a.clear(),
      If++,
      function () {
        (s.forEach(function (f) {
          var d = Go.get(f) - 1,
            m = i.get(f) - 1;
          (Go.set(f, d),
            i.set(f, m),
            d || (Cl.has(f) || f.removeAttribute(r), Cl.delete(f)),
            m || f.removeAttribute(n));
        }),
          If--,
          If ||
            ((Go = new WeakMap()),
            (Go = new WeakMap()),
            (Cl = new WeakMap()),
            (bl = {})));
      }
    );
  },
  O3 = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = M3(e);
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))),
        D3(r, o, n, "aria-hidden"))
      : function () {
          return null;
        };
  },
  Mn = function () {
    return (
      (Mn =
        Object.assign ||
        function (t) {
          for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
          }
          return t;
        }),
      Mn.apply(this, arguments)
    );
  };
function rb(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
function N3(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
var Gl = "right-scroll-bar-position",
  ql = "width-before-scroll-bar",
  L3 = "with-scroll-bars-hidden",
  j3 = "--removed-body-scroll-bar-size";
function Ff(e, t) {
  return (typeof e == "function" ? e(t) : e && (e.current = t), e);
}
function I3(e, t) {
  var n = h.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && ((n.value = r), n.callback(r, o));
        },
      },
    };
  })[0];
  return ((n.callback = t), n.facade);
}
var F3 = typeof window < "u" ? h.useLayoutEffect : h.useEffect,
  N0 = new WeakMap();
function V3(e, t) {
  var n = I3(null, function (r) {
    return e.forEach(function (o) {
      return Ff(o, r);
    });
  });
  return (
    F3(
      function () {
        var r = N0.get(n);
        if (r) {
          var o = new Set(r),
            i = new Set(e),
            s = n.current;
          (o.forEach(function (a) {
            i.has(a) || Ff(a, null);
          }),
            i.forEach(function (a) {
              o.has(a) || Ff(a, s);
            }));
        }
        N0.set(n, e);
      },
      [e],
    ),
    n
  );
}
function B3(e) {
  return e;
}
function U3(e, t) {
  t === void 0 && (t = B3);
  var n = [],
    r = !1,
    o = {
      read: function () {
        if (r)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (i) {
        var s = t(i, r);
        return (
          n.push(s),
          function () {
            n = n.filter(function (a) {
              return a !== s;
            });
          }
        );
      },
      assignSyncMedium: function (i) {
        for (r = !0; n.length; ) {
          var s = n;
          ((n = []), s.forEach(i));
        }
        n = {
          push: function (a) {
            return i(a);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (i) {
        r = !0;
        var s = [];
        if (n.length) {
          var a = n;
          ((n = []), a.forEach(i), (s = n));
        }
        var l = function () {
            var c = s;
            ((s = []), c.forEach(i));
          },
          u = function () {
            return Promise.resolve().then(l);
          };
        (u(),
          (n = {
            push: function (c) {
              (s.push(c), u());
            },
            filter: function (c) {
              return ((s = s.filter(c)), n);
            },
          }));
      },
    };
  return o;
}
function $3(e) {
  e === void 0 && (e = {});
  var t = U3(null);
  return ((t.options = Mn({ async: !0, ssr: !1 }, e)), t);
}
var ob = function (e) {
  var t = e.sideCar,
    n = rb(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car",
    );
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return h.createElement(r, Mn({}, n));
};
ob.isSideCarExport = !0;
function z3(e, t) {
  return (e.useMedium(t), ob);
}
var ib = $3(),
  Vf = function () {},
  Cc = h.forwardRef(function (e, t) {
    var n = h.useRef(null),
      r = h.useState({
        onScrollCapture: Vf,
        onWheelCapture: Vf,
        onTouchMoveCapture: Vf,
      }),
      o = r[0],
      i = r[1],
      s = e.forwardProps,
      a = e.children,
      l = e.className,
      u = e.removeScrollBar,
      c = e.enabled,
      f = e.shards,
      d = e.sideCar,
      m = e.noRelative,
      v = e.noIsolation,
      p = e.inert,
      w = e.allowPinchZoom,
      g = e.as,
      y = g === void 0 ? "div" : g,
      x = e.gapMode,
      S = rb(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noRelative",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      b = d,
      T = V3([n, t]),
      C = Mn(Mn({}, S), o);
    return h.createElement(
      h.Fragment,
      null,
      c &&
        h.createElement(b, {
          sideCar: ib,
          removeScrollBar: u,
          shards: f,
          noRelative: m,
          noIsolation: v,
          inert: p,
          setCallbacks: i,
          allowPinchZoom: !!w,
          lockRef: n,
          gapMode: x,
        }),
      s
        ? h.cloneElement(h.Children.only(a), Mn(Mn({}, C), { ref: T }))
        : h.createElement(y, Mn({}, C, { className: l, ref: T }), a),
    );
  });
Cc.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Cc.classNames = { fullWidth: ql, zeroRight: Gl };
var W3 = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function H3() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = W3();
  return (t && e.setAttribute("nonce", t), e);
}
function K3(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function G3(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var q3 = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        (e == 0 && (t = H3()) && (K3(t, n), G3(t)), e++);
      },
      remove: function () {
        (e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null)));
      },
    };
  },
  Q3 = function () {
    var e = q3();
    return function (t, n) {
      h.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n],
      );
    };
  },
  sb = function () {
    var e = Q3(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return (e(r, o), null);
      };
    return t;
  },
  X3 = { left: 0, top: 0, right: 0, gap: 0 },
  Bf = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  Y3 = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [Bf(n), Bf(r), Bf(o)];
  },
  Z3 = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return X3;
    var t = Y3(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  J3 = sb(),
  Si = "data-scroll-locked",
  e4 = function (e, t, n, r) {
    var o = e.left,
      i = e.top,
      s = e.right,
      a = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          L3,
          ` {
   overflow: hidden `,
        )
        .concat(
          r,
          `;
   padding-right: `,
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  body[`,
        )
        .concat(
          Si,
          `] {
    overflow: hidden `,
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `,
        )
        .concat(
          [
            t && "position: relative ".concat(r, ";"),
            n === "margin" &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `,
                )
                .concat(
                  i,
                  `px;
    padding-right: `,
                )
                .concat(
                  s,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
                )
                .concat(a, "px ")
                .concat(
                  r,
                  `;
    `,
                ),
            n === "padding" &&
              "padding-right: ".concat(a, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`,
        )
        .concat(
          Gl,
          ` {
    right: `,
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(
          ql,
          ` {
    margin-right: `,
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(Gl, " .")
        .concat(
          Gl,
          ` {
    right: 0 `,
        )
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(ql, " .")
        .concat(
          ql,
          ` {
    margin-right: 0 `,
        )
        .concat(
          r,
          `;
  }
  
  body[`,
        )
        .concat(
          Si,
          `] {
    `,
        )
        .concat(j3, ": ")
        .concat(
          a,
          `px;
  }
`,
        )
    );
  },
  L0 = function () {
    var e = parseInt(document.body.getAttribute(Si) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  t4 = function () {
    h.useEffect(function () {
      return (
        document.body.setAttribute(Si, (L0() + 1).toString()),
        function () {
          var e = L0() - 1;
          e <= 0
            ? document.body.removeAttribute(Si)
            : document.body.setAttribute(Si, e.toString());
        }
      );
    }, []);
  },
  n4 = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? "margin" : r;
    t4();
    var i = h.useMemo(
      function () {
        return Z3(o);
      },
      [o],
    );
    return h.createElement(J3, { styles: e4(i, !t, o, n ? "" : "!important") });
  },
  yh = !1;
if (typeof window < "u")
  try {
    var Pl = Object.defineProperty({}, "passive", {
      get: function () {
        return ((yh = !0), !0);
      },
    });
    (window.addEventListener("test", Pl, Pl),
      window.removeEventListener("test", Pl, Pl));
  } catch {
    yh = !1;
  }
var qo = yh ? { passive: !1 } : !1,
  r4 = function (e) {
    return e.tagName === "TEXTAREA";
  },
  ab = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !r4(e) && n[t] === "visible")
    );
  },
  o4 = function (e) {
    return ab(e, "overflowY");
  },
  i4 = function (e) {
    return ab(e, "overflowX");
  },
  j0 = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var o = lb(e, r);
      if (o) {
        var i = ub(e, r),
          s = i[1],
          a = i[2];
        if (s > a) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  s4 = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  a4 = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  lb = function (e, t) {
    return e === "v" ? o4(t) : i4(t);
  },
  ub = function (e, t) {
    return e === "v" ? s4(t) : a4(t);
  },
  l4 = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  u4 = function (e, t, n, r, o) {
    var i = l4(e, window.getComputedStyle(t).direction),
      s = i * r,
      a = n.target,
      l = t.contains(a),
      u = !1,
      c = s > 0,
      f = 0,
      d = 0;
    do {
      if (!a) break;
      var m = ub(e, a),
        v = m[0],
        p = m[1],
        w = m[2],
        g = p - w - i * v;
      (v || g) && lb(e, a) && ((f += g), (d += v));
      var y = a.parentNode;
      a = y && y.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? y.host : y;
    } while ((!l && a !== document.body) || (l && (t.contains(a) || t === a)));
    return (((c && Math.abs(f) < 1) || (!c && Math.abs(d) < 1)) && (u = !0), u);
  },
  Rl = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  I0 = function (e) {
    return [e.deltaX, e.deltaY];
  },
  F0 = function (e) {
    return e && "current" in e ? e.current : e;
  },
  c4 = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  f4 = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`,
      )
      .concat(
        e,
        ` {pointer-events: all;}
`,
      );
  },
  d4 = 0,
  Qo = [];
function h4(e) {
  var t = h.useRef([]),
    n = h.useRef([0, 0]),
    r = h.useRef(),
    o = h.useState(d4++)[0],
    i = h.useState(sb)[0],
    s = h.useRef(e);
  (h.useEffect(
    function () {
      s.current = e;
    },
    [e],
  ),
    h.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var p = N3([e.lockRef.current], (e.shards || []).map(F0), !0).filter(
            Boolean,
          );
          return (
            p.forEach(function (w) {
              return w.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              (document.body.classList.remove("block-interactivity-".concat(o)),
                p.forEach(function (w) {
                  return w.classList.remove("allow-interactivity-".concat(o));
                }));
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards],
    ));
  var a = h.useCallback(function (p, w) {
      if (
        ("touches" in p && p.touches.length === 2) ||
        (p.type === "wheel" && p.ctrlKey)
      )
        return !s.current.allowPinchZoom;
      var g = Rl(p),
        y = n.current,
        x = "deltaX" in p ? p.deltaX : y[0] - g[0],
        S = "deltaY" in p ? p.deltaY : y[1] - g[1],
        b,
        T = p.target,
        C = Math.abs(x) > Math.abs(S) ? "h" : "v";
      if ("touches" in p && C === "h" && T.type === "range") return !1;
      var R = window.getSelection(),
        L = R && R.anchorNode,
        D = L ? L === T || L.contains(T) : !1;
      if (D) return !1;
      var B = j0(C, T);
      if (!B) return !0;
      if ((B ? (b = C) : ((b = C === "v" ? "h" : "v"), (B = j0(C, T))), !B))
        return !1;
      if (
        (!r.current && "changedTouches" in p && (x || S) && (r.current = b), !b)
      )
        return !0;
      var V = r.current || b;
      return u4(V, w, p, V === "h" ? x : S);
    }, []),
    l = h.useCallback(function (p) {
      var w = p;
      if (!(!Qo.length || Qo[Qo.length - 1] !== i)) {
        var g = "deltaY" in w ? I0(w) : Rl(w),
          y = t.current.filter(function (b) {
            return (
              b.name === w.type &&
              (b.target === w.target || w.target === b.shadowParent) &&
              c4(b.delta, g)
            );
          })[0];
        if (y && y.should) {
          w.cancelable && w.preventDefault();
          return;
        }
        if (!y) {
          var x = (s.current.shards || [])
              .map(F0)
              .filter(Boolean)
              .filter(function (b) {
                return b.contains(w.target);
              }),
            S = x.length > 0 ? a(w, x[0]) : !s.current.noIsolation;
          S && w.cancelable && w.preventDefault();
        }
      }
    }, []),
    u = h.useCallback(function (p, w, g, y) {
      var x = { name: p, delta: w, target: g, should: y, shadowParent: p4(g) };
      (t.current.push(x),
        setTimeout(function () {
          t.current = t.current.filter(function (S) {
            return S !== x;
          });
        }, 1));
    }, []),
    c = h.useCallback(function (p) {
      ((n.current = Rl(p)), (r.current = void 0));
    }, []),
    f = h.useCallback(function (p) {
      u(p.type, I0(p), p.target, a(p, e.lockRef.current));
    }, []),
    d = h.useCallback(function (p) {
      u(p.type, Rl(p), p.target, a(p, e.lockRef.current));
    }, []);
  h.useEffect(function () {
    return (
      Qo.push(i),
      e.setCallbacks({
        onScrollCapture: f,
        onWheelCapture: f,
        onTouchMoveCapture: d,
      }),
      document.addEventListener("wheel", l, qo),
      document.addEventListener("touchmove", l, qo),
      document.addEventListener("touchstart", c, qo),
      function () {
        ((Qo = Qo.filter(function (p) {
          return p !== i;
        })),
          document.removeEventListener("wheel", l, qo),
          document.removeEventListener("touchmove", l, qo),
          document.removeEventListener("touchstart", c, qo));
      }
    );
  }, []);
  var m = e.removeScrollBar,
    v = e.inert;
  return h.createElement(
    h.Fragment,
    null,
    v ? h.createElement(i, { styles: f4(o) }) : null,
    m
      ? h.createElement(n4, { noRelative: e.noRelative, gapMode: e.gapMode })
      : null,
  );
}
function p4(e) {
  for (var t = null; e !== null; )
    (e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
      (e = e.parentNode));
  return t;
}
const m4 = z3(ib, h4);
var cb = h.forwardRef(function (e, t) {
  return h.createElement(Cc, Mn({}, e, { ref: t, sideCar: m4 }));
});
cb.classNames = Cc.classNames;
var vh = ["Enter", " "],
  g4 = ["ArrowDown", "PageUp", "Home"],
  fb = ["ArrowUp", "PageDown", "End"],
  y4 = [...g4, ...fb],
  v4 = { ltr: [...vh, "ArrowRight"], rtl: [...vh, "ArrowLeft"] },
  w4 = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] },
  $a = "Menu",
  [va, x4, S4] = gC($a),
  [Vo, db] = TI($a, [S4, FC, YC]),
  bc = FC(),
  hb = YC(),
  [E4, Bo] = Vo($a),
  [C4, za] = Vo($a),
  pb = (e) => {
    const {
        __scopeMenu: t,
        open: n = !1,
        children: r,
        dir: o,
        onOpenChange: i,
        modal: s = !0,
      } = e,
      a = bc(t),
      [l, u] = h.useState(null),
      c = h.useRef(!1),
      f = In(i),
      d = yC(o);
    return (
      h.useEffect(() => {
        const m = () => {
            ((c.current = !0),
              document.addEventListener("pointerdown", v, {
                capture: !0,
                once: !0,
              }),
              document.addEventListener("pointermove", v, {
                capture: !0,
                once: !0,
              }));
          },
          v = () => (c.current = !1);
        return (
          document.addEventListener("keydown", m, { capture: !0 }),
          () => {
            (document.removeEventListener("keydown", m, { capture: !0 }),
              document.removeEventListener("pointerdown", v, { capture: !0 }),
              document.removeEventListener("pointermove", v, { capture: !0 }));
          }
        );
      }, []),
      E.jsx(BV, {
        ...a,
        children: E.jsx(E4, {
          scope: t,
          open: n,
          onOpenChange: f,
          content: l,
          onContentChange: u,
          children: E.jsx(C4, {
            scope: t,
            onClose: h.useCallback(() => f(!1), [f]),
            isUsingKeyboardRef: c,
            dir: d,
            modal: s,
            children: r,
          }),
        }),
      })
    );
  };
pb.displayName = $a;
var b4 = "MenuAnchor",
  bm = h.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e,
      o = bc(n);
    return E.jsx(UV, { ...o, ...r, ref: t });
  });
bm.displayName = b4;
var Pm = "MenuPortal",
  [P4, mb] = Vo(Pm, { forceMount: void 0 }),
  gb = (e) => {
    const { __scopeMenu: t, forceMount: n, children: r, container: o } = e,
      i = Bo(Pm, t);
    return E.jsx(P4, {
      scope: t,
      forceMount: n,
      children: E.jsx(Va, {
        present: n || i.open,
        children: E.jsx(GC, { asChild: !0, container: o, children: r }),
      }),
    });
  };
gb.displayName = Pm;
var tn = "MenuContent",
  [R4, Rm] = Vo(tn),
  yb = h.forwardRef((e, t) => {
    const n = mb(tn, e.__scopeMenu),
      { forceMount: r = n.forceMount, ...o } = e,
      i = Bo(tn, e.__scopeMenu),
      s = za(tn, e.__scopeMenu);
    return E.jsx(va.Provider, {
      scope: e.__scopeMenu,
      children: E.jsx(Va, {
        present: r || i.open,
        children: E.jsx(va.Slot, {
          scope: e.__scopeMenu,
          children: s.modal
            ? E.jsx(T4, { ...o, ref: t })
            : E.jsx(A4, { ...o, ref: t }),
        }),
      }),
    });
  }),
  T4 = h.forwardRef((e, t) => {
    const n = Bo(tn, e.__scopeMenu),
      r = h.useRef(null),
      o = Dt(t, r);
    return (
      h.useEffect(() => {
        const i = r.current;
        if (i) return O3(i);
      }, []),
      E.jsx(Tm, {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: he(e.onFocusOutside, (i) => i.preventDefault(), {
          checkForDefaultPrevented: !1,
        }),
        onDismiss: () => n.onOpenChange(!1),
      })
    );
  }),
  A4 = h.forwardRef((e, t) => {
    const n = Bo(tn, e.__scopeMenu);
    return E.jsx(Tm, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1),
    });
  }),
  _4 = qC("MenuContent.ScrollLock"),
  Tm = h.forwardRef((e, t) => {
    const {
        __scopeMenu: n,
        loop: r = !1,
        trapFocus: o,
        onOpenAutoFocus: i,
        onCloseAutoFocus: s,
        disableOutsidePointerEvents: a,
        onEntryFocus: l,
        onEscapeKeyDown: u,
        onPointerDownOutside: c,
        onFocusOutside: f,
        onInteractOutside: d,
        onDismiss: m,
        disableOutsideScroll: v,
        ...p
      } = e,
      w = Bo(tn, n),
      g = za(tn, n),
      y = bc(n),
      x = hb(n),
      S = x4(n),
      [b, T] = h.useState(null),
      C = h.useRef(null),
      R = Dt(t, C, w.onContentChange),
      L = h.useRef(0),
      D = h.useRef(""),
      B = h.useRef(0),
      V = h.useRef(null),
      Y = h.useRef("right"),
      W = h.useRef(0),
      se = v ? cb : h.Fragment,
      J = v ? { as: _4, allowPinchZoom: !0 } : void 0,
      Z = (N) => {
        var me, ae;
        const F = D.current + N,
          K = S().filter((Ue) => !Ue.disabled),
          re = document.activeElement,
          fe =
            (me = K.find((Ue) => Ue.ref.current === re)) == null
              ? void 0
              : me.textValue,
          Se = K.map((Ue) => Ue.textValue),
          ye = U4(Se, F, fe),
          Ee =
            (ae = K.find((Ue) => Ue.textValue === ye)) == null
              ? void 0
              : ae.ref.current;
        ((function Ue(Kt) {
          ((D.current = Kt),
            window.clearTimeout(L.current),
            Kt !== "" && (L.current = window.setTimeout(() => Ue(""), 1e3)));
        })(F),
          Ee && setTimeout(() => Ee.focus()));
      };
    (h.useEffect(() => () => window.clearTimeout(L.current), []), KI());
    const M = h.useCallback((N) => {
      var K, re;
      return (
        Y.current === ((K = V.current) == null ? void 0 : K.side) &&
        z4(N, (re = V.current) == null ? void 0 : re.area)
      );
    }, []);
    return E.jsx(R4, {
      scope: n,
      searchRef: D,
      onItemEnter: h.useCallback(
        (N) => {
          M(N) && N.preventDefault();
        },
        [M],
      ),
      onItemLeave: h.useCallback(
        (N) => {
          var F;
          M(N) || ((F = C.current) == null || F.focus(), T(null));
        },
        [M],
      ),
      onTriggerLeave: h.useCallback(
        (N) => {
          M(N) && N.preventDefault();
        },
        [M],
      ),
      pointerGraceTimerRef: B,
      onPointerGraceIntentChange: h.useCallback((N) => {
        V.current = N;
      }, []),
      children: E.jsx(se, {
        ...J,
        children: E.jsx(EC, {
          asChild: !0,
          trapped: o,
          onMountAutoFocus: he(i, (N) => {
            var F;
            (N.preventDefault(),
              (F = C.current) == null || F.focus({ preventScroll: !0 }));
          }),
          onUnmountAutoFocus: s,
          children: E.jsx(xC, {
            asChild: !0,
            disableOutsidePointerEvents: a,
            onEscapeKeyDown: u,
            onPointerDownOutside: c,
            onFocusOutside: f,
            onInteractOutside: d,
            onDismiss: m,
            children: E.jsx(A3, {
              asChild: !0,
              ...x,
              dir: g.dir,
              orientation: "vertical",
              loop: r,
              currentTabStopId: b,
              onCurrentTabStopIdChange: T,
              onEntryFocus: he(l, (N) => {
                g.isUsingKeyboardRef.current || N.preventDefault();
              }),
              preventScrollOnEntryFocus: !0,
              children: E.jsx($V, {
                role: "menu",
                "aria-orientation": "vertical",
                "data-state": Ob(w.open),
                "data-radix-menu-content": "",
                dir: g.dir,
                ...y,
                ...p,
                ref: R,
                style: { outline: "none", ...p.style },
                onKeyDown: he(p.onKeyDown, (N) => {
                  const K =
                      N.target.closest("[data-radix-menu-content]") ===
                      N.currentTarget,
                    re = N.ctrlKey || N.altKey || N.metaKey,
                    fe = N.key.length === 1;
                  K &&
                    (N.key === "Tab" && N.preventDefault(),
                    !re && fe && Z(N.key));
                  const Se = C.current;
                  if (N.target !== Se || !y4.includes(N.key)) return;
                  N.preventDefault();
                  const Ee = S()
                    .filter((me) => !me.disabled)
                    .map((me) => me.ref.current);
                  (fb.includes(N.key) && Ee.reverse(), V4(Ee));
                }),
                onBlur: he(e.onBlur, (N) => {
                  N.currentTarget.contains(N.target) ||
                    (window.clearTimeout(L.current), (D.current = ""));
                }),
                onPointerMove: he(
                  e.onPointerMove,
                  wa((N) => {
                    const F = N.target,
                      K = W.current !== N.clientX;
                    if (N.currentTarget.contains(F) && K) {
                      const re = N.clientX > W.current ? "right" : "left";
                      ((Y.current = re), (W.current = N.clientX));
                    }
                  }),
                ),
              }),
            }),
          }),
        }),
      }),
    });
  });
yb.displayName = tn;
var M4 = "MenuGroup",
  Am = h.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return E.jsx(Ba.div, { role: "group", ...r, ref: t });
  });
Am.displayName = M4;
var k4 = "MenuLabel",
  vb = h.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return E.jsx(Ba.div, { ...r, ref: t });
  });
vb.displayName = k4;
var Iu = "MenuItem",
  V0 = "menu.itemSelect",
  Pc = h.forwardRef((e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e,
      i = h.useRef(null),
      s = za(Iu, e.__scopeMenu),
      a = Rm(Iu, e.__scopeMenu),
      l = Dt(t, i),
      u = h.useRef(!1),
      c = () => {
        const f = i.current;
        if (!n && f) {
          const d = new CustomEvent(V0, { bubbles: !0, cancelable: !0 });
          (f.addEventListener(V0, (m) => (r == null ? void 0 : r(m)), {
            once: !0,
          }),
            l3(f, d),
            d.defaultPrevented ? (u.current = !1) : s.onClose());
        }
      };
    return E.jsx(wb, {
      ...o,
      ref: l,
      disabled: n,
      onClick: he(e.onClick, c),
      onPointerDown: (f) => {
        var d;
        ((d = e.onPointerDown) == null || d.call(e, f), (u.current = !0));
      },
      onPointerUp: he(e.onPointerUp, (f) => {
        var d;
        u.current || (d = f.currentTarget) == null || d.click();
      }),
      onKeyDown: he(e.onKeyDown, (f) => {
        const d = a.searchRef.current !== "";
        n ||
          (d && f.key === " ") ||
          (vh.includes(f.key) && (f.currentTarget.click(), f.preventDefault()));
      }),
    });
  });
Pc.displayName = Iu;
var wb = h.forwardRef((e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...i } = e,
      s = Rm(Iu, n),
      a = hb(n),
      l = h.useRef(null),
      u = Dt(t, l),
      [c, f] = h.useState(!1),
      [d, m] = h.useState("");
    return (
      h.useEffect(() => {
        const v = l.current;
        v && m((v.textContent ?? "").trim());
      }, [i.children]),
      E.jsx(va.ItemSlot, {
        scope: n,
        disabled: r,
        textValue: o ?? d,
        children: E.jsx(_3, {
          asChild: !0,
          ...a,
          focusable: !r,
          children: E.jsx(Ba.div, {
            role: "menuitem",
            "data-highlighted": c ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...i,
            ref: u,
            onPointerMove: he(
              e.onPointerMove,
              wa((v) => {
                r
                  ? s.onItemLeave(v)
                  : (s.onItemEnter(v),
                    v.defaultPrevented ||
                      v.currentTarget.focus({ preventScroll: !0 }));
              }),
            ),
            onPointerLeave: he(
              e.onPointerLeave,
              wa((v) => s.onItemLeave(v)),
            ),
            onFocus: he(e.onFocus, () => f(!0)),
            onBlur: he(e.onBlur, () => f(!1)),
          }),
        }),
      })
    );
  }),
  D4 = "MenuCheckboxItem",
  xb = h.forwardRef((e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return E.jsx(Pb, {
      scope: e.__scopeMenu,
      checked: n,
      children: E.jsx(Pc, {
        role: "menuitemcheckbox",
        "aria-checked": Fu(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": Mm(n),
        onSelect: he(
          o.onSelect,
          () => (r == null ? void 0 : r(Fu(n) ? !0 : !n)),
          { checkForDefaultPrevented: !1 },
        ),
      }),
    });
  });
xb.displayName = D4;
var Sb = "MenuRadioGroup",
  [O4, N4] = Vo(Sb, { value: void 0, onValueChange: () => {} }),
  Eb = h.forwardRef((e, t) => {
    const { value: n, onValueChange: r, ...o } = e,
      i = In(r);
    return E.jsx(O4, {
      scope: e.__scopeMenu,
      value: n,
      onValueChange: i,
      children: E.jsx(Am, { ...o, ref: t }),
    });
  });
Eb.displayName = Sb;
var Cb = "MenuRadioItem",
  bb = h.forwardRef((e, t) => {
    const { value: n, ...r } = e,
      o = N4(Cb, e.__scopeMenu),
      i = n === o.value;
    return E.jsx(Pb, {
      scope: e.__scopeMenu,
      checked: i,
      children: E.jsx(Pc, {
        role: "menuitemradio",
        "aria-checked": i,
        ...r,
        ref: t,
        "data-state": Mm(i),
        onSelect: he(
          r.onSelect,
          () => {
            var s;
            return (s = o.onValueChange) == null ? void 0 : s.call(o, n);
          },
          { checkForDefaultPrevented: !1 },
        ),
      }),
    });
  });
bb.displayName = Cb;
var _m = "MenuItemIndicator",
  [Pb, L4] = Vo(_m, { checked: !1 }),
  Rb = h.forwardRef((e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e,
      i = L4(_m, n);
    return E.jsx(Va, {
      present: r || Fu(i.checked) || i.checked === !0,
      children: E.jsx(Ba.span, { ...o, ref: t, "data-state": Mm(i.checked) }),
    });
  });
Rb.displayName = _m;
var j4 = "MenuSeparator",
  Tb = h.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return E.jsx(Ba.div, {
      role: "separator",
      "aria-orientation": "horizontal",
      ...r,
      ref: t,
    });
  });
Tb.displayName = j4;
var I4 = "MenuArrow",
  Ab = h.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e,
      o = bc(n);
    return E.jsx(zV, { ...o, ...r, ref: t });
  });
Ab.displayName = I4;
var F4 = "MenuSub",
  [UU, _b] = Vo(F4),
  _s = "MenuSubTrigger",
  Mb = h.forwardRef((e, t) => {
    const n = Bo(_s, e.__scopeMenu),
      r = za(_s, e.__scopeMenu),
      o = _b(_s, e.__scopeMenu),
      i = Rm(_s, e.__scopeMenu),
      s = h.useRef(null),
      { pointerGraceTimerRef: a, onPointerGraceIntentChange: l } = i,
      u = { __scopeMenu: e.__scopeMenu },
      c = h.useCallback(() => {
        (s.current && window.clearTimeout(s.current), (s.current = null));
      }, []);
    return (
      h.useEffect(() => c, [c]),
      h.useEffect(() => {
        const f = a.current;
        return () => {
          (window.clearTimeout(f), l(null));
        };
      }, [a, l]),
      E.jsx(bm, {
        asChild: !0,
        ...u,
        children: E.jsx(wb, {
          id: o.triggerId,
          "aria-haspopup": "menu",
          "aria-expanded": n.open,
          "aria-controls": o.contentId,
          "data-state": Ob(n.open),
          ...e,
          ref: Ht(t, o.onTriggerChange),
          onClick: (f) => {
            var d;
            ((d = e.onClick) == null || d.call(e, f),
              !(e.disabled || f.defaultPrevented) &&
                (f.currentTarget.focus(), n.open || n.onOpenChange(!0)));
          },
          onPointerMove: he(
            e.onPointerMove,
            wa((f) => {
              (i.onItemEnter(f),
                !f.defaultPrevented &&
                  !e.disabled &&
                  !n.open &&
                  !s.current &&
                  (i.onPointerGraceIntentChange(null),
                  (s.current = window.setTimeout(() => {
                    (n.onOpenChange(!0), c());
                  }, 100))));
            }),
          ),
          onPointerLeave: he(
            e.onPointerLeave,
            wa((f) => {
              var m, v;
              c();
              const d =
                (m = n.content) == null ? void 0 : m.getBoundingClientRect();
              if (d) {
                const p = (v = n.content) == null ? void 0 : v.dataset.side,
                  w = p === "right",
                  g = w ? -5 : 5,
                  y = d[w ? "left" : "right"],
                  x = d[w ? "right" : "left"];
                (i.onPointerGraceIntentChange({
                  area: [
                    { x: f.clientX + g, y: f.clientY },
                    { x: y, y: d.top },
                    { x, y: d.top },
                    { x, y: d.bottom },
                    { x: y, y: d.bottom },
                  ],
                  side: p,
                }),
                  window.clearTimeout(a.current),
                  (a.current = window.setTimeout(
                    () => i.onPointerGraceIntentChange(null),
                    300,
                  )));
              } else {
                if ((i.onTriggerLeave(f), f.defaultPrevented)) return;
                i.onPointerGraceIntentChange(null);
              }
            }),
          ),
          onKeyDown: he(e.onKeyDown, (f) => {
            var m;
            const d = i.searchRef.current !== "";
            e.disabled ||
              (d && f.key === " ") ||
              (v4[r.dir].includes(f.key) &&
                (n.onOpenChange(!0),
                (m = n.content) == null || m.focus(),
                f.preventDefault()));
          }),
        }),
      })
    );
  });
Mb.displayName = _s;
var kb = "MenuSubContent",
  Db = h.forwardRef((e, t) => {
    const n = mb(tn, e.__scopeMenu),
      { forceMount: r = n.forceMount, ...o } = e,
      i = Bo(tn, e.__scopeMenu),
      s = za(tn, e.__scopeMenu),
      a = _b(kb, e.__scopeMenu),
      l = h.useRef(null),
      u = Dt(t, l);
    return E.jsx(va.Provider, {
      scope: e.__scopeMenu,
      children: E.jsx(Va, {
        present: r || i.open,
        children: E.jsx(va.Slot, {
          scope: e.__scopeMenu,
          children: E.jsx(Tm, {
            id: a.contentId,
            "aria-labelledby": a.triggerId,
            ...o,
            ref: u,
            align: "start",
            side: s.dir === "rtl" ? "left" : "right",
            disableOutsidePointerEvents: !1,
            disableOutsideScroll: !1,
            trapFocus: !1,
            onOpenAutoFocus: (c) => {
              var f;
              (s.isUsingKeyboardRef.current &&
                ((f = l.current) == null || f.focus()),
                c.preventDefault());
            },
            onCloseAutoFocus: (c) => c.preventDefault(),
            onFocusOutside: he(e.onFocusOutside, (c) => {
              c.target !== a.trigger && i.onOpenChange(!1);
            }),
            onEscapeKeyDown: he(e.onEscapeKeyDown, (c) => {
              (s.onClose(), c.preventDefault());
            }),
            onKeyDown: he(e.onKeyDown, (c) => {
              var m;
              const f = c.currentTarget.contains(c.target),
                d = w4[s.dir].includes(c.key);
              f &&
                d &&
                (i.onOpenChange(!1),
                (m = a.trigger) == null || m.focus(),
                c.preventDefault());
            }),
          }),
        }),
      }),
    });
  });
Db.displayName = kb;
function Ob(e) {
  return e ? "open" : "closed";
}
function Fu(e) {
  return e === "indeterminate";
}
function Mm(e) {
  return Fu(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function V4(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function B4(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function U4(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t,
    i = n ? e.indexOf(n) : -1;
  let s = B4(e, Math.max(i, 0));
  o.length === 1 && (s = s.filter((u) => u !== n));
  const l = s.find((u) => u.toLowerCase().startsWith(o.toLowerCase()));
  return l !== n ? l : void 0;
}
function $4(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const a = t[i],
      l = t[s],
      u = a.x,
      c = a.y,
      f = l.x,
      d = l.y;
    c > r != d > r && n < ((f - u) * (r - c)) / (d - c) + u && (o = !o);
  }
  return o;
}
function z4(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return $4(n, t);
}
function wa(e) {
  return (t) => (t.pointerType === "mouse" ? e(t) : void 0);
}
var W4 = pb,
  H4 = bm,
  K4 = gb,
  G4 = yb,
  q4 = Am,
  Q4 = vb,
  X4 = Pc,
  Y4 = xb,
  Z4 = Eb,
  J4 = bb,
  eB = Rb,
  tB = Tb,
  nB = Ab,
  rB = Mb,
  oB = Db,
  Rc = "DropdownMenu",
  [iB] = aI(Rc, [db]),
  Ct = db(),
  [sB, Nb] = iB(Rc),
  Lb = (e) => {
    const {
        __scopeDropdownMenu: t,
        children: n,
        dir: r,
        open: o,
        defaultOpen: i,
        onOpenChange: s,
        modal: a = !0,
      } = e,
      l = Ct(t),
      u = h.useRef(null),
      [c, f] = mC({ prop: o, defaultProp: i ?? !1, onChange: s, caller: Rc });
    return E.jsx(sB, {
      scope: t,
      triggerId: dh(),
      triggerRef: u,
      contentId: dh(),
      open: c,
      onOpenChange: f,
      onOpenToggle: h.useCallback(() => f((d) => !d), [f]),
      modal: a,
      children: E.jsx(W4, {
        ...l,
        open: c,
        onOpenChange: f,
        dir: r,
        modal: a,
        children: n,
      }),
    });
  };
Lb.displayName = Rc;
var jb = "DropdownMenuTrigger",
  Ib = h.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e,
      i = Nb(jb, n),
      s = Ct(n);
    return E.jsx(H4, {
      asChild: !0,
      ...s,
      children: E.jsx(wI.button, {
        type: "button",
        id: i.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": i.open,
        "aria-controls": i.open ? i.contentId : void 0,
        "data-state": i.open ? "open" : "closed",
        "data-disabled": r ? "" : void 0,
        disabled: r,
        ...o,
        ref: Ht(t, i.triggerRef),
        onPointerDown: he(e.onPointerDown, (a) => {
          !r &&
            a.button === 0 &&
            a.ctrlKey === !1 &&
            (i.onOpenToggle(), i.open || a.preventDefault());
        }),
        onKeyDown: he(e.onKeyDown, (a) => {
          r ||
            (["Enter", " "].includes(a.key) && i.onOpenToggle(),
            a.key === "ArrowDown" && i.onOpenChange(!0),
            ["Enter", " ", "ArrowDown"].includes(a.key) && a.preventDefault());
        }),
      }),
    });
  });
Ib.displayName = jb;
var aB = "DropdownMenuPortal",
  Fb = (e) => {
    const { __scopeDropdownMenu: t, ...n } = e,
      r = Ct(t);
    return E.jsx(K4, { ...r, ...n });
  };
Fb.displayName = aB;
var Vb = "DropdownMenuContent",
  Bb = h.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = Nb(Vb, n),
      i = Ct(n),
      s = h.useRef(!1);
    return E.jsx(G4, {
      id: o.contentId,
      "aria-labelledby": o.triggerId,
      ...i,
      ...r,
      ref: t,
      onCloseAutoFocus: he(e.onCloseAutoFocus, (a) => {
        var l;
        (s.current || (l = o.triggerRef.current) == null || l.focus(),
          (s.current = !1),
          a.preventDefault());
      }),
      onInteractOutside: he(e.onInteractOutside, (a) => {
        const l = a.detail.originalEvent,
          u = l.button === 0 && l.ctrlKey === !0,
          c = l.button === 2 || u;
        (!o.modal || c) && (s.current = !0);
      }),
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width":
          "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height":
          "var(--radix-popper-anchor-height)",
      },
    });
  });
Bb.displayName = Vb;
var lB = "DropdownMenuGroup",
  uB = h.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = Ct(n);
    return E.jsx(q4, { ...o, ...r, ref: t });
  });
uB.displayName = lB;
var cB = "DropdownMenuLabel",
  Ub = h.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = Ct(n);
    return E.jsx(Q4, { ...o, ...r, ref: t });
  });
Ub.displayName = cB;
var fB = "DropdownMenuItem",
  $b = h.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = Ct(n);
    return E.jsx(X4, { ...o, ...r, ref: t });
  });
$b.displayName = fB;
var dB = "DropdownMenuCheckboxItem",
  zb = h.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = Ct(n);
    return E.jsx(Y4, { ...o, ...r, ref: t });
  });
zb.displayName = dB;
var hB = "DropdownMenuRadioGroup",
  pB = h.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = Ct(n);
    return E.jsx(Z4, { ...o, ...r, ref: t });
  });
pB.displayName = hB;
var mB = "DropdownMenuRadioItem",
  Wb = h.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = Ct(n);
    return E.jsx(J4, { ...o, ...r, ref: t });
  });
Wb.displayName = mB;
var gB = "DropdownMenuItemIndicator",
  Hb = h.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = Ct(n);
    return E.jsx(eB, { ...o, ...r, ref: t });
  });
Hb.displayName = gB;
var yB = "DropdownMenuSeparator",
  Kb = h.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = Ct(n);
    return E.jsx(tB, { ...o, ...r, ref: t });
  });
Kb.displayName = yB;
var vB = "DropdownMenuArrow",
  wB = h.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = Ct(n);
    return E.jsx(nB, { ...o, ...r, ref: t });
  });
wB.displayName = vB;
var xB = "DropdownMenuSubTrigger",
  Gb = h.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = Ct(n);
    return E.jsx(rB, { ...o, ...r, ref: t });
  });
Gb.displayName = xB;
var SB = "DropdownMenuSubContent",
  qb = h.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = Ct(n);
    return E.jsx(oB, {
      ...o,
      ...r,
      ref: t,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width":
          "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height":
          "var(--radix-popper-anchor-height)",
      },
    });
  });
qb.displayName = SB;
var EB = Lb,
  CB = Ib,
  bB = Fb,
  Qb = Bb,
  Xb = Ub,
  Yb = $b,
  Zb = zb,
  Jb = Wb,
  eP = Hb,
  tP = Kb,
  nP = Gb,
  rP = qb;
const PB = EB,
  RB = CB,
  TB = h.forwardRef(({ className: e, inset: t, children: n, ...r }, o) =>
    E.jsxs(nP, {
      ref: o,
      className: Be(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-white/10 data-[state=open]:bg-white/10",
        t && "pl-8",
        e,
      ),
      ...r,
      children: [n, E.jsx(cE, { className: "ml-auto h-4 w-4" })],
    }),
  );
TB.displayName = nP.displayName;
const AB = h.forwardRef(({ className: e, ...t }, n) =>
  E.jsx(rP, {
    ref: n,
    className: Be(
      "z-50 min-w-[8rem] overflow-hidden rounded-xl border border-white/10 bg-[#0f1d32] p-1 text-white shadow-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[state=closed]:slide-out-to-right-2",
      e,
    ),
    ...t,
  }),
);
AB.displayName = rP.displayName;
const oP = h.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
  E.jsx(bB, {
    children: E.jsx(Qb, {
      ref: r,
      sideOffset: t,
      className: Be(
        "z-50 min-w-[8rem] overflow-hidden rounded-xl border border-white/10 bg-[#0f1d32] p-1 text-white shadow-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e,
      ),
      ...n,
    }),
  }),
);
oP.displayName = Qb.displayName;
const wh = h.forwardRef(({ className: e, inset: t, ...n }, r) =>
  E.jsx(Yb, {
    ref: r,
    className: Be(
      "relative flex cursor-default select-none items-center rounded-lg px-2 py-1.5 text-sm outline-none transition-colors focus:bg-white/10 focus:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e,
    ),
    ...n,
  }),
);
wh.displayName = Yb.displayName;
const _B = h.forwardRef(({ className: e, children: t, checked: n, ...r }, o) =>
  E.jsxs(Zb, {
    ref: o,
    className: Be(
      "relative flex cursor-default select-none items-center rounded-lg py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-white/10 focus:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e,
    ),
    checked: n,
    ...r,
    children: [
      E.jsx("span", {
        className:
          "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: E.jsx(eP, {
          children: E.jsx(LN, { className: "h-4 w-4 text-blue-400" }),
        }),
      }),
      t,
    ],
  }),
);
_B.displayName = Zb.displayName;
const MB = h.forwardRef(({ className: e, children: t, ...n }, r) =>
  E.jsxs(Jb, {
    ref: r,
    className: Be(
      "relative flex cursor-default select-none items-center rounded-lg py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-white/10 focus:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e,
    ),
    ...n,
    children: [
      E.jsx("span", {
        className:
          "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: E.jsx(eP, {
          children: E.jsx(IN, {
            className: "h-2 w-2 fill-blue-400 text-blue-400",
          }),
        }),
      }),
      t,
    ],
  }),
);
MB.displayName = Jb.displayName;
const kB = h.forwardRef(({ className: e, inset: t, ...n }, r) =>
  E.jsx(Xb, {
    ref: r,
    className: Be(
      "px-2 py-1.5 text-sm font-semibold text-white/60",
      t && "pl-8",
      e,
    ),
    ...n,
  }),
);
kB.displayName = Xb.displayName;
const DB = h.forwardRef(({ className: e, ...t }, n) =>
  E.jsx(tP, { ref: n, className: Be("-mx-1 my-1 h-px bg-white/10", e), ...t }),
);
DB.displayName = tP.displayName;
function OB() {
  var r, o;
  const e = xp(),
    t = mm(),
    { user: n } = Da();
  return E.jsx(gn.header, {
    initial: { y: -100 },
    animate: { y: 0 },
    className:
      "fixed top-0 left-0 right-0 z-50 h-16 bg-[#0a1628]/80 backdrop-blur-xl border-b border-white/5 transition-all duration-300",
    children: E.jsxs("div", {
      className: "flex items-center justify-between h-full px-4 md:px-6 w-full",
      children: [
        E.jsxs("div", {
          className: "flex items-center gap-4",
          children: [
            E.jsxs(Eu, {
              to: "/dashboard",
              className: "flex items-center gap-2",
              children: [
                E.jsx("div", {
                  className:
                    "w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-electric flex items-center justify-center",
                  children: E.jsx(yE, { className: "h-4 w-4 text-white" }),
                }),
                E.jsxs("span", {
                  className: "text-xl font-bold text-white tracking-tight",
                  children: [
                    "Cric",
                    E.jsx("span", {
                      className: "text-electric",
                      children: "OP",
                    }),
                  ],
                }),
              ],
            }),
            !t &&
              E.jsxs("div", {
                className:
                  "flex items-center gap-2 text-white/40 ml-4 border-l border-white/10 pl-4",
                children: [
                  E.jsx("span", {
                    className: "text-sm font-medium",
                    children: "Home",
                  }),
                  E.jsx("span", { className: "text-xs", children: "/" }),
                  E.jsx("span", {
                    className: "text-sm font-medium text-white capitalize",
                    children:
                      ((r = window.location.pathname.split("/").pop()) == null
                        ? void 0
                        : r.replace("-", " ")) || "Home",
                  }),
                ],
              }),
          ],
        }),
        E.jsxs("div", {
          className: "flex items-center gap-3",
          children: [
            E.jsxs("div", {
              className: "hidden sm:flex items-center relative mr-2",
              children: [
                E.jsx(Wv, {
                  className:
                    "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40",
                }),
                E.jsx("input", {
                  type: "text",
                  placeholder: "Search matches...",
                  className:
                    "bg-white/5 border border-white/10 rounded-full py-1.5 pl-10 pr-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 w-48 lg:w-64 transition-all",
                }),
              ],
            }),
            E.jsx(ih, {
              variant: "ghost",
              size: "icon",
              className: "text-white/70 sm:hidden",
              onClick: () => e("/history"),
              children: E.jsx(Wv, { className: "h-5 w-5" }),
            }),
            E.jsxs(PB, {
              children: [
                E.jsx(RB, {
                  asChild: !0,
                  children: E.jsxs(ih, {
                    variant: "ghost",
                    size: "icon",
                    className: "text-white/70 relative",
                    children: [
                      E.jsx(ON, { className: "h-5 w-5" }),
                      E.jsx(KL, {
                        variant: "live",
                        className:
                          "absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center text-[10px]",
                        children: "3",
                      }),
                    ],
                  }),
                }),
                E.jsxs(oP, {
                  align: "end",
                  className: "w-64",
                  children: [
                    E.jsx("div", {
                      className: "p-3 pb-2 border-b border-white/10",
                      children: E.jsx("h4", {
                        className: "font-semibold text-white",
                        children: "Notifications",
                      }),
                    }),
                    E.jsx(wh, { children: "Match started: MI vs CSK" }),
                    E.jsx(wh, { children: "Rohit Sharma scored a fifty!" }),
                  ],
                }),
              ],
            }),
            E.jsxs("div", {
              className:
                "flex items-center gap-2 pl-2 border-l border-white/10",
              children: [
                E.jsxs(BE, {
                  className:
                    "h-8 w-8 cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all",
                  onClick: () => e("/settings"),
                  children: [
                    E.jsx(UE, { src: n == null ? void 0 : n.avatar }),
                    E.jsx($E, {
                      children:
                        ((o = n == null ? void 0 : n.name) == null
                          ? void 0
                          : o.charAt(0)) || "U",
                    }),
                  ],
                }),
                !t &&
                  E.jsxs("div", {
                    className: "hidden lg:block",
                    children: [
                      E.jsx("p", {
                        className:
                          "text-sm font-medium text-white line-clamp-1",
                        children: n == null ? void 0 : n.name,
                      }),
                      E.jsx("p", {
                        className:
                          "text-[10px] text-white/50 uppercase tracking-wider",
                        children: n == null ? void 0 : n.role,
                      }),
                    ],
                  }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const B0 = [
    { icon: dE, label: "Dashboard", path: "/dashboard" },
    { icon: hE, label: "Start Match", path: "/start-match" },
    { icon: pE, label: "Create Team", path: "/create-team" },
    { icon: fE, label: "History", path: "/history" },
    { icon: DN, label: "Statistics", path: "/statistics" },
    { icon: mE, label: "Players", path: "/players" },
  ],
  NB = [{ icon: BN, label: "Admin", path: "/admin" }];
function LB() {
  const e = Io(),
    { sidebarOpen: t, setSidebarOpen: n } = lm(),
    { user: r } = Da();
  if (mm()) return null;
  const i = (r == null ? void 0 : r.role) === "admin" ? [...B0, ...NB] : B0;
  return E.jsx(gn.aside, {
    initial: !1,
    animate: { width: t ? 256 : 80 },
    transition: { duration: 0.3, ease: "easeInOut" },
    className:
      "fixed left-0 top-16 bottom-0 z-40 bg-[#0d1e36]/95 backdrop-blur-xl border-r border-white/5",
    children: E.jsxs("div", {
      className: "flex flex-col h-full pt-4",
      children: [
        E.jsx("nav", {
          className: "flex-1 px-3 space-y-1",
          children: i.map((s) => {
            const a =
              e.pathname === s.path || e.pathname.startsWith(`${s.path}/`);
            return E.jsxs(
              Eu,
              {
                to: s.path,
                className: Be(
                  "flex items-center rounded-xl transition-all duration-200 group relative",
                  t ? "gap-3 px-3 py-3" : "justify-center p-3",
                  a
                    ? "bg-gradient-to-r from-blue-600/20 to-blue-500/10 text-blue-400 border border-blue-500/20"
                    : "text-white/60 hover:text-white hover:bg-white/5",
                ),
                children: [
                  E.jsx(s.icon, {
                    className: Be(
                      "h-5 w-5 flex-shrink-0",
                      a && "text-electric",
                    ),
                  }),
                  E.jsx(Tp, {
                    children:
                      t &&
                      E.jsx(gn.span, {
                        initial: { opacity: 0, width: 0 },
                        animate: { opacity: 1, width: "auto" },
                        exit: { opacity: 0, width: 0 },
                        transition: { duration: 0.2 },
                        className:
                          "text-sm font-medium whitespace-nowrap overflow-hidden",
                        children: s.label,
                      }),
                  }),
                  a &&
                    E.jsx(gn.div, {
                      layoutId: "activeNav",
                      className:
                        "absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-electric rounded-r-full",
                    }),
                ],
              },
              s.path,
            );
          }),
        }),
        E.jsxs("div", {
          className: "px-3 mt-auto mb-4 space-y-2",
          children: [
            E.jsxs(Eu, {
              to: "/settings",
              className: Be(
                "flex items-center rounded-xl transition-all duration-200",
                t ? "gap-3 px-3 py-3" : "justify-center p-3",
                e.pathname === "/settings"
                  ? "bg-white/10 text-white"
                  : "text-white/60 hover:text-white hover:bg-white/5",
              ),
              children: [
                E.jsx(VN, { className: "h-5 w-5 flex-shrink-0" }),
                t &&
                  E.jsx("span", {
                    className: "text-sm font-medium",
                    children: "Settings",
                  }),
              ],
            }),
            E.jsx("button", {
              onClick: () => n(!t),
              className: Be(
                "w-full flex items-center rounded-xl p-3 text-white/50 hover:text-white hover:bg-white/5 transition-all",
                t ? "gap-3" : "justify-center",
              ),
              children: t
                ? E.jsxs(E.Fragment, {
                    children: [
                      E.jsx(jN, { className: "h-5 w-5" }),
                      E.jsx("span", {
                        className: "text-sm font-medium",
                        children: "Collapse",
                      }),
                    ],
                  })
                : E.jsx(cE, { className: "h-5 w-5" }),
            }),
          ],
        }),
      ],
    }),
  });
}
const jB = [
  { icon: dE, label: "Home", path: "/dashboard" },
  { icon: hE, label: "Match", path: "/start-match" },
  { icon: pE, label: "Team", path: "/create-team" },
  { icon: fE, label: "History", path: "/history" },
  { icon: mE, label: "Players", path: "/players" },
];
function IB() {
  const e = Io();
  return E.jsx(gn.nav, {
    initial: { y: 100 },
    animate: { y: 0 },
    className:
      "fixed bottom-0 left-0 right-0 z-50 bg-[#0d1e36]/95 backdrop-blur-xl border-t border-white/5 md:hidden",
    children: E.jsx("div", {
      className: "flex items-center justify-around h-16 safe-area-pb",
      children: jB.map((t) => {
        const n = e.pathname === t.path || e.pathname.startsWith(`${t.path}/`);
        return E.jsxs(
          Eu,
          {
            to: t.path,
            className: Be(
              "flex flex-col items-center gap-1 py-2 px-3 rounded-xl transition-all duration-200",
              n ? "text-electric" : "text-white/50",
            ),
            children: [
              E.jsx("div", {
                className: Be(
                  "p-1.5 rounded-lg transition-all",
                  n && "bg-blue-600/20",
                ),
                children: E.jsx(t.icon, { className: "h-5 w-5" }),
              }),
              E.jsx("span", {
                className: "text-[10px] font-medium",
                children: t.label,
              }),
              n &&
                E.jsx(gn.div, {
                  layoutId: "mobileActive",
                  className:
                    "absolute -top-0.5 w-8 h-0.5 bg-electric rounded-full",
                }),
            ],
          },
          t.path,
        );
      }),
    }),
  });
}
const FB = { default: FN, success: NN, error: gE, warning: kN },
  VB = {
    default: "border-white/10 bg-[#0f1d32]",
    success: "border-emerald-500/30 bg-emerald-950/50",
    error: "border-red-500/30 bg-red-950/50",
    warning: "border-amber-500/30 bg-amber-950/50",
  };
function BB() {
  const { toasts: e, removeToast: t } = lm();
  return E.jsx("div", {
    className:
      "fixed top-4 right-4 z-[100] flex flex-col gap-2 max-w-sm w-full",
    children: E.jsx(Tp, {
      children: e.map((n) => {
        const r = FB[n.variant];
        return E.jsxs(
          gn.div,
          {
            initial: { opacity: 0, x: 100, scale: 0.9 },
            animate: { opacity: 1, x: 0, scale: 1 },
            exit: { opacity: 0, x: 100, scale: 0.9 },
            transition: { duration: 0.3 },
            className: Be(
              "relative flex items-start gap-3 p-4 rounded-xl border shadow-2xl backdrop-blur-xl",
              VB[n.variant],
            ),
            children: [
              E.jsx(r, {
                className: Be(
                  "h-5 w-5 flex-shrink-0 mt-0.5",
                  n.variant === "success" && "text-emerald-400",
                  n.variant === "error" && "text-red-400",
                  n.variant === "warning" && "text-amber-400",
                  n.variant === "default" && "text-blue-400",
                ),
              }),
              E.jsxs("div", {
                className: "flex-1 min-w-0",
                children: [
                  E.jsx("p", {
                    className: "text-sm font-medium text-white",
                    children: n.title,
                  }),
                  n.description &&
                    E.jsx("p", {
                      className: "text-xs text-white/60 mt-1",
                      children: n.description,
                    }),
                ],
              }),
              E.jsx("button", {
                onClick: () => t(n.id),
                className: "text-white/40 hover:text-white transition-colors",
                children: E.jsx(gE, { className: "h-4 w-4" }),
              }),
            ],
          },
          n.id,
        );
      }),
    }),
  });
}
function UB() {
  const e = mm(),
    { sidebarOpen: t } = lm();
  return E.jsxs("div", {
    className: "min-h-screen bg-[#0a1628]",
    children: [
      E.jsx(OB, {}),
      E.jsxs("div", {
        className: "flex",
        children: [
          !e && E.jsx(LB, {}),
          E.jsx("main", {
            className: Be(
              "flex-1 transition-all duration-300 pt-16",
              !e && t ? "ml-64" : e ? "ml-0" : "ml-20",
              "pb-20 md:pb-0",
            ),
            children: E.jsx("div", {
              className: "p-4 md:p-6 lg:p-8 max-w-7xl mx-auto",
              children: E.jsx(n_, {}),
            }),
          }),
        ],
      }),
      e && E.jsx(IB, {}),
      E.jsx(BB, {}),
    ],
  });
}
function Uf({ children: e }) {
  return E.jsxs("div", {
    className:
      "min-h-screen bg-[#0a1628] relative overflow-hidden flex items-center justify-center",
    children: [
      E.jsxs("div", {
        className: "absolute inset-0 overflow-hidden",
        children: [
          E.jsx("div", {
            className:
              "absolute -top-40 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl",
          }),
          E.jsx("div", {
            className:
              "absolute -bottom-40 -left-40 w-96 h-96 bg-electric/10 rounded-full blur-3xl",
          }),
          E.jsx("div", {
            className:
              "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-800/5 rounded-full blur-3xl",
          }),
          E.jsx("svg", {
            className: "absolute bottom-0 left-0 w-full h-64 opacity-5",
            viewBox: "0 0 1440 320",
            children: E.jsx("path", {
              fill: "currentColor",
              d: "M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
            }),
          }),
        ],
      }),
      E.jsx(gn.div, {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
        className: "relative z-10 w-full max-w-md px-4",
        children: e,
      }),
    ],
  });
}
function $B({ children: e, requiredRole: t }) {
  const { isAuthenticated: n, user: r } = Da();
  return n
    ? t &&
      (r == null ? void 0 : r.role) !== t &&
      (r == null ? void 0 : r.role) !== "admin"
      ? E.jsx(gy, { to: "/dashboard", replace: !0 })
      : E.jsx(E.Fragment, { children: e })
    : E.jsx(gy, { to: "/login", replace: !0 });
}
function ot() {
  return E.jsx("div", {
    className: "min-h-screen bg-[#0a1628] flex items-center justify-center",
    children: E.jsxs(gn.div, {
      initial: { scale: 0.8, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      transition: { duration: 0.5 },
      className: "flex flex-col items-center gap-4",
      children: [
        E.jsxs("div", {
          className: "relative",
          children: [
            E.jsx(gn.div, {
              animate: { rotate: 360 },
              transition: { duration: 3, repeat: 1 / 0, ease: "linear" },
              className:
                "w-16 h-16 rounded-full border-2 border-blue-500/20 border-t-blue-500",
            }),
            E.jsx("div", {
              className: "absolute inset-0 flex items-center justify-center",
              children: E.jsx(yE, { className: "h-6 w-6 text-electric" }),
            }),
          ],
        }),
        E.jsx(gn.p, {
          animate: { opacity: [0.5, 1, 0.5] },
          transition: { duration: 1.5, repeat: 1 / 0 },
          className: "text-white/60 text-sm font-medium",
          children: "Loading...",
        }),
      ],
    }),
  });
}
const zB = h.lazy(() =>
    Ye(() => import("./SplashScreen-DQnSwGWW.js"), __vite__mapDeps([0, 1])),
  ),
  WB = h.lazy(() =>
    Ye(
      () => import("./LoginPage-CQV5bMiz.js"),
      __vite__mapDeps([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]),
    ),
  ),
  HB = h.lazy(() =>
    Ye(
      () => import("./SignupPage-D7OEslje.js"),
      __vite__mapDeps([14, 3, 4, 7, 8, 15, 9, 13, 10, 11, 12]),
    ),
  ),
  KB = h.lazy(() =>
    Ye(
      () => import("./ForgotPasswordPage-DrfOErvh.js"),
      __vite__mapDeps([16, 3, 4, 7, 8, 9, 17, 13]),
    ),
  ),
  GB = h.lazy(() =>
    Ye(
      () => import("./DashboardPage-8LKKKpi7.js"),
      __vite__mapDeps([
        18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 8, 30, 31, 1, 13, 32,
      ]),
    ),
  ),
  qB = h.lazy(() =>
    Ye(
      () => import("./StartMatchPage-DtLdgsJw.js"),
      __vite__mapDeps([33, 3, 4, 34, 6, 35, 19, 28, 29, 8, 30, 36, 23, 37]),
    ),
  ),
  QB = h.lazy(() =>
    Ye(
      () => import("./LiveScoringPage-Dy1UCuLb.js"),
      __vite__mapDeps([38, 39, 40, 41, 35, 28, 29, 8, 10]),
    ),
  ),
  XB = h.lazy(() =>
    Ye(
      () => import("./MatchSummaryPage-Bowc9HyX.js"),
      __vite__mapDeps([42, 19, 28, 29, 8, 43, 37]),
    ),
  ),
  YB = h.lazy(() =>
    Ye(
      () => import("./MatchHistoryPage-Bgx22dUa.js"),
      __vite__mapDeps([
        44, 3, 34, 6, 35, 21, 19, 22, 23, 27, 26, 28, 29, 8, 45,
      ]),
    ),
  ),
  ZB = h.lazy(() =>
    Ye(
      () => import("./MatchViewPage-BrcTuHD7.js"),
      __vite__mapDeps([46, 40, 19, 41, 28, 29, 8, 31, 1, 17]),
    ),
  ),
  JB = h.lazy(() =>
    Ye(
      () => import("./StatisticsPage-C0y9L-hX.js"),
      __vite__mapDeps([47, 40, 24, 19, 25, 26, 31, 29]),
    ),
  ),
  eU = h.lazy(() =>
    Ye(
      () => import("./PlayerProfilePage-BLrlx87N.js"),
      __vite__mapDeps([48, 19, 40, 30, 29, 8, 31, 43, 9, 32, 25]),
    ),
  ),
  tU = h.lazy(() =>
    Ye(
      () => import("./PlayersListPage-B1nWPko3.js"),
      __vite__mapDeps([
        49, 3, 39, 4, 34, 6, 35, 24, 19, 25, 27, 26, 30, 29, 8, 50, 15,
      ]),
    ),
  ),
  nU = h.lazy(() =>
    Ye(
      () => import("./CreateTeamPage-CD-ooH5m.js"),
      __vite__mapDeps([51, 3, 4, 19, 30, 29, 8, 43, 50, 52]),
    ),
  ),
  rU = h.lazy(() =>
    Ye(
      () => import("./AdminDashboardPage-Qq1ay2jz.js"),
      __vite__mapDeps([53, 19, 20, 22]),
    ),
  ),
  oU = h.lazy(() =>
    Ye(
      () => import("./AdminUsersPage-98LO0r7J.js"),
      __vite__mapDeps([54, 3, 19, 29, 8, 26, 36]),
    ),
  ),
  iU = h.lazy(() =>
    Ye(
      () => import("./AdminMatchesPage-z87E4sC_.js"),
      __vite__mapDeps([55, 3, 19, 34, 6, 35, 45, 12, 52]),
    ),
  ),
  sU = h.lazy(() =>
    Ye(
      () => import("./SettingsPage-6reVsYsA.js"),
      __vite__mapDeps([56, 19, 5, 6, 3, 4, 39, 7, 8, 15]),
    ),
  ),
  aU = h.lazy(() => Ye(() => import("./NotFoundPage-DcAI99YQ.js"), [])),
  lU = c_([
    { path: "/", element: E.jsx(zB, {}) },
    {
      path: "/login",
      element: E.jsx(Uf, {
        children: E.jsx(h.Suspense, {
          fallback: E.jsx(ot, {}),
          children: E.jsx(WB, {}),
        }),
      }),
    },
    {
      path: "/signup",
      element: E.jsx(Uf, {
        children: E.jsx(h.Suspense, {
          fallback: E.jsx(ot, {}),
          children: E.jsx(HB, {}),
        }),
      }),
    },
    {
      path: "/forgot-password",
      element: E.jsx(Uf, {
        children: E.jsx(h.Suspense, {
          fallback: E.jsx(ot, {}),
          children: E.jsx(KB, {}),
        }),
      }),
    },
    {
      path: "/",
      element: E.jsx($B, { children: E.jsx(UB, {}) }),
      children: [
        {
          path: "dashboard",
          element: E.jsx(h.Suspense, {
            fallback: E.jsx(ot, {}),
            children: E.jsx(GB, {}),
          }),
        },
        {
          path: "start-match",
          element: E.jsx(h.Suspense, {
            fallback: E.jsx(ot, {}),
            children: E.jsx(qB, {}),
          }),
        },
        {
          path: "live-scoring/:matchId",
          element: E.jsx(h.Suspense, {
            fallback: E.jsx(ot, {}),
            children: E.jsx(QB, {}),
          }),
        },
        {
          path: "match/:matchId",
          element: E.jsx(h.Suspense, {
            fallback: E.jsx(ot, {}),
            children: E.jsx(ZB, {}),
          }),
        },
        {
          path: "match-summary/:matchId",
          element: E.jsx(h.Suspense, {
            fallback: E.jsx(ot, {}),
            children: E.jsx(XB, {}),
          }),
        },
        {
          path: "history",
          element: E.jsx(h.Suspense, {
            fallback: E.jsx(ot, {}),
            children: E.jsx(YB, {}),
          }),
        },
        {
          path: "statistics",
          element: E.jsx(h.Suspense, {
            fallback: E.jsx(ot, {}),
            children: E.jsx(JB, {}),
          }),
        },
        {
          path: "players",
          element: E.jsx(h.Suspense, {
            fallback: E.jsx(ot, {}),
            children: E.jsx(tU, {}),
          }),
        },
        {
          path: "create-team",
          element: E.jsx(h.Suspense, {
            fallback: E.jsx(ot, {}),
            children: E.jsx(nU, {}),
          }),
        },
        {
          path: "player/:playerId",
          element: E.jsx(h.Suspense, {
            fallback: E.jsx(ot, {}),
            children: E.jsx(eU, {}),
          }),
        },
        {
          path: "admin",
          element: E.jsx(h.Suspense, {
            fallback: E.jsx(ot, {}),
            children: E.jsx(rU, {}),
          }),
        },
        {
          path: "admin/users",
          element: E.jsx(h.Suspense, {
            fallback: E.jsx(ot, {}),
            children: E.jsx(oU, {}),
          }),
        },
        {
          path: "admin/matches",
          element: E.jsx(h.Suspense, {
            fallback: E.jsx(ot, {}),
            children: E.jsx(iU, {}),
          }),
        },
        {
          path: "settings",
          element: E.jsx(h.Suspense, {
            fallback: E.jsx(ot, {}),
            children: E.jsx(sU, {}),
          }),
        },
      ],
    },
    { path: "*", element: E.jsx(aU, {}) },
  ]),
  uU = new J_({
    defaultOptions: {
      queries: { staleTime: 5e3, refetchOnWindowFocus: !1, retry: 1 },
    },
  });
$f.createRoot(document.getElementById("root")).render(
  E.jsx(Pn.StrictMode, {
    children: E.jsx(eM, {
      client: uU,
      children: E.jsx(Tp, {
        mode: "wait",
        children: E.jsx(w_, { router: lU }),
      }),
    }),
  }),
);
export {
  _S as $,
  Tp as A,
  ih as B,
  NN as C,
  mC as D,
  dh as E,
  he as F,
  Va as G,
  YC as H,
  _3 as I,
  BN as J,
  PB as K,
  Eu as L,
  RB as M,
  oP as N,
  wh as O,
  hE as P,
  ic as Q,
  A3 as R,
  Wv as S,
  pE as T,
  mE as U,
  B_ as V,
  O_ as W,
  dU as X,
  Vd as Y,
  yE as Z,
  un as _,
  Da as a,
  k_ as a0,
  D_ as a1,
  Fd as a2,
  RS as a3,
  q_ as a4,
  j_ as a5,
  vt as a6,
  hU as a7,
  BV as a8,
  Dt as a9,
  vn as aa,
  FC as ab,
  gC as ac,
  UV as ad,
  GC as ae,
  Gi as af,
  In as ag,
  O3 as ah,
  KI as ai,
  cb as aj,
  EC as ak,
  xC as al,
  $V as am,
  zV as an,
  LN as ao,
  im as ap,
  ON as aq,
  OV as ar,
  EE as as,
  ua as at,
  X_ as au,
  Be as b,
  Ze as c,
  lm as d,
  jN as e,
  cE as f,
  pC as g,
  pU as h,
  xU as i,
  E as j,
  yU as k,
  fU as l,
  gn as m,
  kN as n,
  KL as o,
  vU as p,
  gU as q,
  h as r,
  DN as s,
  wU as t,
  xp as u,
  BE as v,
  UE as w,
  $E as x,
  Ht as y,
  yC as z,
};
