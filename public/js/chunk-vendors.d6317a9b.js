(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"000b":function(t,e,n){"use strict";n.d(e,"a",(function(){return pe}));var r=n("5606"),i=n("abfd"),o=n("a8e9"),s=n("ffa6"),a=n("9dbb");const c="@firebase/installations",u="0.5.0",l=1e4,h="w:"+u,f="FIS_v2",d="https://firebaseinstallations.googleapis.com/v1",p=36e5,g="installations",m="Installations",y={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},v=new o["b"](g,m,y);function b(t){return t instanceof o["c"]&&t.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w({projectId:t}){return`${d}/projects/${t}/installations`}function E(t){return{token:t.token,requestStatus:2,expiresIn:I(t.expiresIn),creationTime:Date.now()}}async function _(t,e){const n=await e.json(),r=n.error;return v.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function O({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function T(t,{refreshToken:e}){const n=O(t);return n.append("Authorization",j(e)),n}async function S(t){const e=await t();return e.status>=500&&e.status<600?t():e}function I(t){return Number(t.replace("s","000"))}function j(t){return`${f} ${t}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A(t,{fid:e}){const n=w(t),r=O(t),i={fid:e,authVersion:f,appId:t.appId,sdkVersion:h},o={method:"POST",headers:r,body:JSON.stringify(i)},s=await S(()=>fetch(n,o));if(s.ok){const t=await s.json(),n={fid:t.fid||e,registrationStatus:2,refreshToken:t.refreshToken,authToken:E(t.authToken)};return n}throw await _("Create Installation",s)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(t){return new Promise(e=>{setTimeout(e,t)})}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(t){const e=btoa(String.fromCharCode(...t));return e.replace(/\+/g,"-").replace(/\//g,"_")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k=/^[cdef][\w-]{21}$/,N="";function D(){try{const t=new Uint8Array(17),e=self.crypto||self.msCrypto;e.getRandomValues(t),t[0]=112+t[0]%16;const n=L(t);return k.test(n)?n:N}catch(t){return N}}function L(t){const e=x(t);return e.substr(0,22)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(t){return`${t.appName}!${t.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R=new Map;function M(t,e){const n=P(t);F(n,e),V(n,e)}function F(t,e){const n=R.get(t);if(n)for(const r of n)r(e)}function V(t,e){const n=B();n&&n.postMessage({key:t,fid:e}),q()}let U=null;function B(){return!U&&"BroadcastChannel"in self&&(U=new BroadcastChannel("[Firebase] FID Change"),U.onmessage=t=>{F(t.data.key,t.data.fid)}),U}function q(){0===R.size&&U&&(U.close(),U=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $="firebase-installations-database",z=1,G="firebase-installations-store";let K=null;function H(){return K||(K=Object(a["openDb"])($,z,t=>{switch(t.oldVersion){case 0:t.createObjectStore(G)}})),K}async function W(t,e){const n=P(t),r=await H(),i=r.transaction(G,"readwrite"),o=i.objectStore(G),s=await o.get(n);return await o.put(e,n),await i.complete,s&&s.fid===e.fid||M(t,e.fid),e}async function Q(t){const e=P(t),n=await H(),r=n.transaction(G,"readwrite");await r.objectStore(G).delete(e),await r.complete}async function X(t,e){const n=P(t),r=await H(),i=r.transaction(G,"readwrite"),o=i.objectStore(G),s=await o.get(n),a=e(s);return void 0===a?await o.delete(n):await o.put(a,n),await i.complete,!a||s&&s.fid===a.fid||M(t,a.fid),a}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y(t){let e;const n=await X(t,n=>{const r=J(n),i=Z(t,r);return e=i.registrationPromise,i.installationEntry});return n.fid===N?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function J(t){const e=t||{fid:D(),registrationStatus:0};return rt(e)}function Z(t,e){if(0===e.registrationStatus){if(!navigator.onLine){const t=Promise.reject(v.create("app-offline"));return{installationEntry:e,registrationPromise:t}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=tt(t,n);return{installationEntry:n,registrationPromise:r}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:et(t)}:{installationEntry:e}}async function tt(t,e){try{const n=await A(t,e);return W(t,n)}catch(n){throw b(n)&&409===n.customData.serverCode?await Q(t):await W(t,{fid:e.fid,registrationStatus:0}),n}}async function et(t){let e=await nt(t);while(1===e.registrationStatus)await C(100),e=await nt(t);if(0===e.registrationStatus){const{installationEntry:e,registrationPromise:n}=await Y(t);return n||e}return e}function nt(t){return X(t,t=>{if(!t)throw v.create("installation-not-found");return rt(t)})}function rt(t){return it(t)?{fid:t.fid,registrationStatus:0}:t}function it(t){return 1===t.registrationStatus&&t.registrationTime+l<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ot({appConfig:t,platformLoggerProvider:e},n){const r=st(t,n),i=T(t,n),o=e.getImmediate({optional:!0});o&&i.append("x-firebase-client",o.getPlatformInfoString());const s={installation:{sdkVersion:h}},a={method:"POST",headers:i,body:JSON.stringify(s)},c=await S(()=>fetch(r,a));if(c.ok){const t=await c.json(),e=E(t);return e}throw await _("Generate Auth Token",c)}function st(t,{fid:e}){return`${w(t)}/${e}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function at(t,e=!1){let n;const r=await X(t.appConfig,r=>{if(!ht(r))throw v.create("not-registered");const i=r.authToken;if(!e&&ft(i))return r;if(1===i.requestStatus)return n=ct(t,e),r;{if(!navigator.onLine)throw v.create("app-offline");const e=pt(r);return n=lt(t,e),e}}),i=n?await n:r.authToken;return i}async function ct(t,e){let n=await ut(t.appConfig);while(1===n.authToken.requestStatus)await C(100),n=await ut(t.appConfig);const r=n.authToken;return 0===r.requestStatus?at(t,e):r}function ut(t){return X(t,t=>{if(!ht(t))throw v.create("not-registered");const e=t.authToken;return gt(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function lt(t,e){try{const n=await ot(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await W(t.appConfig,r),n}catch(n){if(!b(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await W(t.appConfig,n)}else await Q(t.appConfig);throw n}}function ht(t){return void 0!==t&&2===t.registrationStatus}function ft(t){return 2===t.requestStatus&&!dt(t)}function dt(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+p}function pt(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function gt(t){return 1===t.requestStatus&&t.requestTime+l<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mt(t){const e=t,{installationEntry:n,registrationPromise:r}=await Y(e.appConfig);return r?r.catch(console.error):at(e).catch(console.error),n.fid}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yt(t,e=!1){const n=t;await vt(n.appConfig);const r=await at(n,e);return r.token}async function vt(t){const{registrationPromise:e}=await Y(t);e&&await e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bt(t){if(!t||!t.options)throw wt("App Configuration");if(!t.name)throw wt("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw wt(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function wt(t){return v.create("missing-app-config-values",{valueName:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et="installations",_t="installations-internal",Ot=t=>{const e=t.getProvider("app").getImmediate(),n=bt(e),i=Object(r["b"])(e,"platform-logger"),o={app:e,appConfig:n,platformLoggerProvider:i,_delete:()=>Promise.resolve()};return o},Tt=t=>{const e=t.getProvider("app").getImmediate(),n=Object(r["b"])(e,Et).getImmediate(),i={getId:()=>mt(n),getToken:t=>yt(n,t)};return i};function St(){Object(r["c"])(new s["a"](Et,Ot,"PUBLIC")),Object(r["c"])(new s["a"](_t,Tt,"PRIVATE"))}St(),Object(r["g"])(c,u);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const It="analytics",jt="firebase_id",At="origin",Ct=6e4,xt="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",kt="https://www.googletagmanager.com/gtag/js",Nt=new i["b"]("@firebase/analytics");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Dt(t){return Promise.all(t.map(t=>t.catch(t=>t)))}function Lt(t,e){const n=document.createElement("script");n.src=`${kt}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function Pt(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Rt(t,e,n,r,i,o){const s=r[i];try{if(s)await e[s];else{const t=await Dt(n),r=t.find(t=>t.measurementId===i);r&&await e[r.appId]}}catch(a){Nt.error(a)}t("config",i,o)}async function Mt(t,e,n,r,i){try{let o=[];if(i&&i["send_to"]){let t=i["send_to"];Array.isArray(t)||(t=[t]);const r=await Dt(n);for(const n of t){const t=r.find(t=>t.measurementId===n),i=t&&e[t.appId];if(!i){o=[];break}o.push(i)}}0===o.length&&(o=Object.values(e)),await Promise.all(o),t("event",r,i||{})}catch(o){Nt.error(o)}}function Ft(t,e,n,r){async function i(i,o,s){try{"event"===i?await Mt(t,e,n,o,s):"config"===i?await Rt(t,e,n,r,o,s):t("set",o)}catch(a){Nt.error(a)}}return i}function Vt(t,e,n,r,i){let o=function(...t){window[r].push(arguments)};return window[i]&&"function"===typeof window[i]&&(o=window[i]),window[i]=Ft(o,t,e,n),{gtagCore:o,wrappedGtag:window[i]}}function Ut(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(kt))return e;return null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},qt=new o["b"]("analytics","Analytics",Bt),$t=30,zt=1e3;class Gt{constructor(t={},e=zt){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Kt=new Gt;function Ht(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Wt(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:Ht(r)},o=xt.replace("{app-id}",n),s=await fetch(o,i);if(200!==s.status&&304!==s.status){let t="";try{const n=await s.json();(null===(e=n.error)||void 0===e?void 0:e.message)&&(t=n.error.message)}catch(a){}throw qt.create("config-fetch-failed",{httpStatus:s.status,responseMessage:t})}return s.json()}async function Qt(t,e=Kt,n){const{appId:r,apiKey:i,measurementId:o}=t.options;if(!r)throw qt.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw qt.create("no-api-key")}const s=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Zt;return setTimeout(async()=>{a.abort()},void 0!==n?n:Ct),Xt({appId:r,apiKey:i,measurementId:o},s,a,e)}async function Xt(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=Kt){const{appId:s,measurementId:a}=t;try{await Yt(r,e)}catch(c){if(a)return Nt.warn("Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID "+a+` provided in the "measurementId" field in the local Firebase config. [${c.message}]`),{appId:s,measurementId:a};throw c}try{const e=await Wt(t);return i.deleteThrottleMetadata(s),e}catch(c){if(!Jt(c)){if(i.deleteThrottleMetadata(s),a)return Nt.warn("Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID "+a+` provided in the "measurementId" field in the local Firebase config. [${c.message}]`),{appId:s,measurementId:a};throw c}const e=503===Number(c.customData.httpStatus)?Object(o["e"])(n,i.intervalMillis,$t):Object(o["e"])(n,i.intervalMillis),u={throttleEndTimeMillis:Date.now()+e,backoffCount:n+1};return i.setThrottleMetadata(s,u),Nt.debug(`Calling attemptFetch again in ${e} millis`),Xt(t,u,r,i)}}function Yt(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),o=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(o),r(qt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Jt(t){if(!(t instanceof o["c"])||!t.customData)return!1;const e=Number(t.customData["httpStatus"]);return 429===e||500===e||503===e||504===e}class Zt{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function te(){if(!Object(o["m"])())return Nt.warn(qt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await Object(o["r"])()}catch(t){return Nt.warn(qt.create("indexeddb-unavailable",{errorInfo:t}).message),!1}return!0}async function ee(t,e,n,r,i,o,s){var a;const c=Qt(t);c.then(e=>{n[e.measurementId]=e.appId,t.options.measurementId&&e.measurementId!==t.options.measurementId&&Nt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${e.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(t=>Nt.error(t)),e.push(c);const u=te().then(t=>t?r.getId():void 0),[l,h]=await Promise.all([c,u]);Ut()||Lt(o,l.measurementId),i("js",new Date);const f=null!==(a=null===s||void 0===s?void 0:s.config)&&void 0!==a?a:{};return f[At]="firebase",f.update=!0,null!=h&&(f[jt]=h),i("config",l.measurementId,f),l.measurementId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(t){this.app=t}_delete(){return delete re[this.app.options.appId],Promise.resolve()}}let re={},ie=[];const oe={};let se,ae,ce="dataLayer",ue="gtag",le=!1;function he(){const t=[];if(Object(o["j"])()&&t.push("This is a browser extension environment."),Object(o["d"])()||t.push("Cookies are not available."),t.length>0){const e=t.map((t,e)=>`(${e+1}) ${t}`).join(" "),n=qt.create("invalid-analytics-context",{errorInfo:e});Nt.warn(n.message)}}function fe(t,e,n){he();const r=t.options.appId;if(!r)throw qt.create("no-app-id");if(!t.options.apiKey){if(!t.options.measurementId)throw qt.create("no-api-key");Nt.warn('The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID '+t.options.measurementId+' provided in the "measurementId" field in the local Firebase config.')}if(null!=re[r])throw qt.create("already-exists",{id:r});if(!le){Pt(ce);const{wrappedGtag:t,gtagCore:e}=Vt(re,ie,oe,ce,ue);ae=t,se=e,le=!0}re[r]=ee(t,ie,oe,e,se,ce,n);const i=new ne(t);return i}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function de(t,e,n,r,i){if(i&&i.global)t("event",n,r);else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}function pe(t=Object(r["e"])()){t=Object(o["h"])(t);const e=Object(r["b"])(t,It);return e.isInitialized()?e.getImmediate():ge(t)}function ge(t,e={}){const n=Object(r["b"])(t,It);if(n.isInitialized()){const t=n.getImmediate();if(Object(o["g"])(e,n.getOptions()))return t;throw qt.create("already-initialized")}const i=n.initialize({options:e});return i}function me(t,e,n,r){t=Object(o["h"])(t),de(ae,re[t.app.options.appId],e,n,r).catch(t=>Nt.error(t))}const ye="@firebase/analytics",ve="0.7.0";function be(){function t(t){try{const e=t.getProvider(It).getImmediate();return{logEvent:(t,n,r)=>me(e,t,n,r)}}catch(e){throw qt.create("interop-component-reg-failed",{reason:e})}}Object(r["c"])(new s["a"](It,(t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=t.getProvider("installations-internal").getImmediate();return fe(n,r,e)},"PUBLIC")),Object(r["c"])(new s["a"]("analytics-internal",t,"PRIVATE")),Object(r["g"])(ye,ve)}be()},"00ee":function(t,e,n){var r=n("b622"),i=r("toStringTag"),o={};o[i]="z",t.exports="[object z]"===String(o)},"0366":function(t,e,n){var r=n("1c0b");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},"057f":function(t,e,n){var r=n("fc6a"),i=n("241c").f,o={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return i(t)}catch(e){return s.slice()}};t.exports.f=function(t){return s&&"[object Window]"==o.call(t)?a(t):i(r(t))}},"06cf":function(t,e,n){var r=n("83ab"),i=n("d1e7"),o=n("5c6c"),s=n("fc6a"),a=n("a04b"),c=n("5135"),u=n("0cfb"),l=Object.getOwnPropertyDescriptor;e.f=r?l:function(t,e){if(t=s(t),e=a(e),u)try{return l(t,e)}catch(n){}if(c(t,e))return o(!i.f.call(t,e),t[e])}},"0829":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return Go})),n.d(e,"b",(function(){return Ss})),n.d(e,"c",(function(){return Wo})),n.d(e,"d",(function(){return js}));var r=n("5606"),i=n("ffa6"),o=n("abfd"),s=n("a8e9"),a=n("c7b2");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class c{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}c.UNAUTHENTICATED=new c(null),c.GOOGLE_CREDENTIALS=new c("google-credentials-uid"),c.FIRST_PARTY=new c("first-party-uid"),c.MOCK_USER=new c("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let u="9.0.2";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l=new o["b"]("@firebase/firestore");function h(){return l.logLevel}function f(t,...e){if(l.logLevel<=o["a"].DEBUG){const n=e.map(g);l.debug(`Firestore (${u}): ${t}`,...n)}}function d(t,...e){if(l.logLevel<=o["a"].ERROR){const n=e.map(g);l.error(`Firestore (${u}): ${t}`,...n)}}function p(t,...e){if(l.logLevel<=o["a"].WARN){const n=e.map(g);l.warn(`Firestore (${u}): ${t}`,...n)}}function g(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m(t="Unexpected state"){const e=`FIRESTORE (${u}) INTERNAL ASSERTION FAILED: `+t;throw d(e),new Error(e)}function y(t,e){t||m()}function v(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class w extends Error{constructor(t,e){super(e),this.code=t,this.message=e,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(t,e){this.user=e,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization="Bearer "+t}}class O{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(c.UNAUTHENTICATED))}shutdown(){}}class T{constructor(t){this.t=t,this.currentUser=c.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new E;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new E,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const e=i;t.enqueueRetryable(async()=>{await e.promise,await r(this.currentUser)})},s=t=>{f("FirebaseCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(t=>s(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?s(t):(f("FirebaseCredentialsProvider","Auth not yet detected"),i.resolve(),i=new E)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(f("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(y("string"==typeof e.accessToken),new _(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return y(null===t||"string"==typeof t),new c(t)}}class S{constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=c.FIRST_PARTY}get authHeaders(){const t={"X-Goog-AuthUser":this.l},e=this.h.auth.getAuthHeaderValueForFirstParty([]);return e&&(t.Authorization=e),this.m&&(t["X-Goog-Iam-Authorization-Token"]=this.m),t}}class I{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new S(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable(()=>e(c.FIRST_PARTY))}shutdown(){}invalidateToken(){}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.g(t),this.p=t=>e.writeSequenceNumber(t))}g(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.p&&this.p(t),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */j.T=-1;class C{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=A(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function x(t,e){return t<e?-1:t>e?1:0}function k(t,e,n){return t.length===e.length&&t.every((t,r)=>n(t,e[r]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class N{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new w(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new w(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new w(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new w(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return N.fromMillis(Date.now())}static fromDate(t){return N.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new N(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?x(this.nanoseconds,t.nanoseconds):x(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(t){this.timestamp=t}static fromTimestamp(t){return new D(t)}static min(){return new D(new N(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function P(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function R(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t,e,n){void 0===e?e=0:e>t.length&&m(),void 0===n?n=t.length-e:n>t.length-e&&m(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===M.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof M?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class F extends M{construct(t,e,n){return new F(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new w(b.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new F(e)}static emptyPath(){return new F([])}}const V=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class U extends M{construct(t,e,n){return new U(t,e,n)}static isValidIdentifier(t){return V.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),U.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new U(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new w(b.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let o=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new w(b.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new w(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(o=!o,r++):"."!==e||o?(n+=e,r++):(i(),r++)}if(i(),o)throw new w(b.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new U(e)}static emptyPath(){return new U([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(t){this.fields=t,t.sort(U.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return k(this.fields,t.fields,(t,e)=>t.isEqual(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class q{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new q(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new q(e)}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return x(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}q.EMPTY_BYTE_STRING=new q("");const $=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function z(t){if(y(!!t),"string"==typeof t){let e=0;const n=$.exec(t);if(y(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:G(t.seconds),nanos:G(t.nanos)}}function G(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function K(t){return"string"==typeof t?q.fromBase64String(t):q.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function W(t){const e=t.mapValue.fields.__previous_value__;return H(e)?W(e):e}function Q(t){const e=z(t.mapValue.fields.__local_write_time__.timestampValue);return new N(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t){return null==t}function Y(t){return 0===t&&1/t==-1/0}function J(t){return"number"==typeof t&&Number.isInteger(t)&&!Y(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t){this.path=t}static fromPath(t){return new Z(F.fromString(t))}static fromName(t){return new Z(F.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===F.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return F.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Z(new F(t.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?H(t)?4:10:m()}function et(t,e){const n=tt(t);if(n!==tt(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Q(t).isEqual(Q(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=z(t.timestampValue),r=z(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return K(t.bytesValue).isEqual(K(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return G(t.geoPointValue.latitude)===G(e.geoPointValue.latitude)&&G(t.geoPointValue.longitude)===G(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return G(t.integerValue)===G(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=G(t.doubleValue),r=G(e.doubleValue);return n===r?Y(n)===Y(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return k(t.arrayValue.values||[],e.arrayValue.values||[],et);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(L(n)!==L(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!et(n[i],r[i])))return!1;return!0}(t,e);default:return m()}}function nt(t,e){return void 0!==(t.values||[]).find(t=>et(t,e))}function rt(t,e){const n=tt(t),r=tt(e);if(n!==r)return x(n,r);switch(n){case 0:return 0;case 1:return x(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=G(t.integerValue||t.doubleValue),r=G(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return it(t.timestampValue,e.timestampValue);case 4:return it(Q(t),Q(e));case 5:return x(t.stringValue,e.stringValue);case 6:return function(t,e){const n=K(t),r=K(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=x(n[i],r[i]);if(0!==t)return t}return x(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=x(G(t.latitude),G(e.latitude));return 0!==n?n:x(G(t.longitude),G(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=rt(n[i],r[i]);if(t)return t}return x(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},r=Object.keys(n),i=e.fields||{},o=Object.keys(i);r.sort(),o.sort();for(let s=0;s<r.length&&s<o.length;++s){const t=x(r[s],o[s]);if(0!==t)return t;const e=rt(n[r[s]],i[o[s]]);if(0!==e)return e}return x(r.length,o.length)}(t.mapValue,e.mapValue);default:throw m()}}function it(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return x(t,e);const n=z(t),r=z(e),i=x(n.seconds,r.seconds);return 0!==i?i:x(n.nanos,r.nanos)}function ot(t){return st(t)}function st(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=z(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?K(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Z.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=st(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${st(t.fields[i])}`;return n+"}"}(t.mapValue):m();var e,n}function at(t){return!!t&&"integerValue"in t}function ct(t){return!!t&&"arrayValue"in t}function ut(t){return!!t&&"nullValue"in t}function lt(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ht(t){return!!t&&"mapValue"in t}function ft(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return P(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=ft(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ft(t.arrayValue.values[n]);return e}return Object.assign({},t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t){this.value=t}static empty(){return new dt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!ht(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ft(e)}setAll(t){let e=U.emptyPath(),n={},r=[];t.forEach((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=ft(t):r.push(i.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());ht(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return et(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];ht(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){P(e,(e,n)=>t[e]=n);for(const r of n)delete t[r]}clone(){return new dt(ft(this.value))}}function pt(t){const e=[];return P(t.fields,(t,n)=>{const r=new U([t]);if(ht(n)){const t=pt(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)}),new B(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class gt{constructor(t,e,n,r,i){this.key=t,this.documentType=e,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(t){return new gt(t,0,D.min(),dt.empty(),0)}static newFoundDocument(t,e,n){return new gt(t,1,e,n,0)}static newNoDocument(t,e){return new gt(t,2,e,dt.empty(),0)}static newUnknownDocument(t,e){return new gt(t,3,e,dt.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=dt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof gt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}clone(){return new gt(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t,e=null,n=[],r=[],i=null,o=null,s=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=o,this.endAt=s,this.A=null}}function yt(t,e=null,n=[],r=[],i=null,o=null,s=null){return new mt(t,e,n,r,i,o,s)}function vt(t){const e=v(t);if(null===e.A){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>Ot(t)).join(","),t+="|ob:",t+=e.orderBy.map(t=>function(t){return t.field.canonicalString()+t.dir}(t)).join(","),X(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=Dt(e.startAt)),e.endAt&&(t+="|ub:",t+=Dt(e.endAt)),e.A=t}return e.A}function bt(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>{return`${(e=t).field.canonicalString()} ${e.op} ${ot(e.value)}`;var e}).join(", ")}]`),X(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t)).join(", ")}]`),t.startAt&&(e+=", startAt: "+Dt(t.startAt)),t.endAt&&(e+=", endAt: "+Dt(t.endAt)),`Target(${e})`}function wt(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!Pt(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!et(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Mt(t.startAt,e.startAt)&&Mt(t.endAt,e.endAt)}function Et(t){return Z.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class _t extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.R(t,e,n):new Tt(t,e,n):"array-contains"===e?new At(t,n):"in"===e?new Ct(t,n):"not-in"===e?new xt(t,n):"array-contains-any"===e?new kt(t,n):new _t(t,e,n)}static R(t,e,n){return"in"===e?new St(t,n):new It(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.P(rt(e,this.value)):null!==e&&tt(this.value)===tt(e)&&this.P(rt(e,this.value))}P(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return m()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function Ot(t){return t.field.canonicalString()+t.op.toString()+ot(t.value)}class Tt extends _t{constructor(t,e,n){super(t,e,n),this.key=Z.fromName(n.referenceValue)}matches(t){const e=Z.comparator(t.key,this.key);return this.P(e)}}class St extends _t{constructor(t,e){super(t,"in",e),this.keys=jt("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class It extends _t{constructor(t,e){super(t,"not-in",e),this.keys=jt("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function jt(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map(t=>Z.fromName(t.referenceValue))}class At extends _t{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ct(e)&&nt(e.arrayValue,this.value)}}class Ct extends _t{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&nt(this.value.arrayValue,e)}}class xt extends _t{constructor(t,e){super(t,"not-in",e)}matches(t){if(nt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!nt(this.value.arrayValue,e)}}class kt extends _t{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ct(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>nt(this.value.arrayValue,t))}}class Nt{constructor(t,e){this.position=t,this.before=e}}function Dt(t){return`${t.before?"b":"a"}:${t.position.map(t=>ot(t)).join(",")}`}class Lt{constructor(t,e="asc"){this.field=t,this.dir=e}}function Pt(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Rt(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(r=o.field.isKeyField()?Z.comparator(Z.fromName(s.referenceValue),n.key):rt(s,n.data.field(o.field)),"desc"===o.dir&&(r*=-1),0!==r)break}return t.before?r<=0:r<0}function Mt(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!et(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(t,e=null,n=[],r=[],i=null,o="F",s=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=o,this.startAt=s,this.endAt=a,this.V=null,this.S=null,this.startAt,this.endAt}}function Vt(t,e,n,r,i,o,s,a){return new Ft(t,e,n,r,i,o,s,a)}function Ut(t){return new Ft(t)}function Bt(t){return!X(t.limit)&&"F"===t.limitType}function qt(t){return!X(t.limit)&&"L"===t.limitType}function $t(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function zt(t){for(const e of t.filters)if(e.v())return e.field;return null}function Gt(t){return null!==t.collectionGroup}function Kt(t){const e=v(t);if(null===e.V){e.V=[];const t=zt(e),n=$t(e);if(null!==t&&null===n)t.isKeyField()||e.V.push(new Lt(t)),e.V.push(new Lt(U.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.V.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new Lt(U.keyField(),t))}}}return e.V}function Ht(t){const e=v(t);if(!e.S)if("F"===e.limitType)e.S=yt(e.path,e.collectionGroup,Kt(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of Kt(e)){const e="desc"===i.dir?"asc":"desc";t.push(new Lt(i.field,e))}const n=e.endAt?new Nt(e.endAt.position,!e.endAt.before):null,r=e.startAt?new Nt(e.startAt.position,!e.startAt.before):null;e.S=yt(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.S}function Wt(t,e,n){return new Ft(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Qt(t,e){return wt(Ht(t),Ht(e))&&t.limitType===e.limitType}function Xt(t){return`${vt(Ht(t))}|lt:${t.limitType}`}function Yt(t){return`Query(target=${bt(Ht(t))}; limitType=${t.limitType})`}function Jt(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Z.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!Rt(t.startAt,Kt(t),e))&&(!t.endAt||!Rt(t.endAt,Kt(t),e))}(t,e)}function Zt(t){return(e,n)=>{let r=!1;for(const i of Kt(t)){const t=te(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function te(t,e,n){const r=t.field.isKeyField()?Z.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?rt(r,i):m()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return m()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Y(e)?"-0":e}}function ne(t){return{integerValue:""+t}}function re(t,e){return J(e)?ne(e):ee(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(){this._=void 0}}function oe(t,e,n){return t instanceof ce?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof ue?le(t,e):t instanceof he?fe(t,e):function(t,e){const n=ae(t,e),r=pe(n)+pe(t.C);return at(n)&&at(t.C)?ne(r):ee(t.N,r)}(t,e)}function se(t,e,n){return t instanceof ue?le(t,e):t instanceof he?fe(t,e):n}function ae(t,e){return t instanceof de?at(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class ce extends ie{}class ue extends ie{constructor(t){super(),this.elements=t}}function le(t,e){const n=ge(e);for(const r of t.elements)n.some(t=>et(t,r))||n.push(r);return{arrayValue:{values:n}}}class he extends ie{constructor(t){super(),this.elements=t}}function fe(t,e){let n=ge(e);for(const r of t.elements)n=n.filter(t=>!et(t,r));return{arrayValue:{values:n}}}class de extends ie{constructor(t,e){super(),this.N=t,this.C=e}}function pe(t){return G(t.integerValue||t.doubleValue)}function ge(t){return ct(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof ue&&e instanceof ue||t instanceof he&&e instanceof he?k(t.elements,e.elements,et):t instanceof de&&e instanceof de?et(t.C,e.C):t instanceof ce&&e instanceof ce}(t.transform,e.transform)}class ye{constructor(t,e){this.version=t,this.transformResults=e}}class ve{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ve}static exists(t){return new ve(void 0,t)}static updateTime(t){return new ve(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function be(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class we{}function Ee(t,e,n){t instanceof Ie?function(t,e,n){const r=t.value.clone(),i=Ce(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof je?function(t,e,n){if(!be(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=Ce(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Ae(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function _e(t,e,n){t instanceof Ie?function(t,e,n){if(!be(t.precondition,e))return;const r=t.value.clone(),i=xe(t.fieldTransforms,n,e);r.setAll(i),e.convertToFoundDocument(Se(e),r).setHasLocalMutations()}(t,e,n):t instanceof je?function(t,e,n){if(!be(t.precondition,e))return;const r=xe(t.fieldTransforms,n,e),i=e.data;i.setAll(Ae(t)),i.setAll(r),e.convertToFoundDocument(Se(e),i).setHasLocalMutations()}(t,e,n):function(t,e){be(t.precondition,e)&&e.convertToNoDocument(D.min())}(t,e)}function Oe(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=ae(r.transform,t||null);null!=i&&(null==n&&(n=dt.empty()),n.set(r.field,i))}return n||null}function Te(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&k(t,e,(t,e)=>me(t,e))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Se(t){return t.isFoundDocument()?t.version:D.min()}class Ie extends we{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}}class je extends we{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Ae(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ce(t,e,n){const r=new Map;y(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,a=e.data.field(o.field);r.set(o.field,se(s,a,n[i]))}return r}function xe(t,e,n){const r=new Map;for(const i of t){const t=i.transform,o=n.data.field(i.field);r.set(i.field,oe(t,o,e))}return r}class ke extends we{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class Ne extends we{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Le,Pe;function Re(t){switch(t){case b.OK:return m();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0;default:return m()}}function Me(t){if(void 0===t)return d("GRPC error has no .code"),b.UNKNOWN;switch(t){case Le.OK:return b.OK;case Le.CANCELLED:return b.CANCELLED;case Le.UNKNOWN:return b.UNKNOWN;case Le.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case Le.INTERNAL:return b.INTERNAL;case Le.UNAVAILABLE:return b.UNAVAILABLE;case Le.UNAUTHENTICATED:return b.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case Le.NOT_FOUND:return b.NOT_FOUND;case Le.ALREADY_EXISTS:return b.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return b.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case Le.ABORTED:return b.ABORTED;case Le.OUT_OF_RANGE:return b.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return b.UNIMPLEMENTED;case Le.DATA_LOSS:return b.DATA_LOSS;default:return m()}}(Pe=Le||(Le={}))[Pe.OK=0]="OK",Pe[Pe.CANCELLED=1]="CANCELLED",Pe[Pe.UNKNOWN=2]="UNKNOWN",Pe[Pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Pe[Pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Pe[Pe.NOT_FOUND=5]="NOT_FOUND",Pe[Pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Pe[Pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Pe[Pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Pe[Pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Pe[Pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Pe[Pe.ABORTED=10]="ABORTED",Pe[Pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Pe[Pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Pe[Pe.INTERNAL=13]="INTERNAL",Pe[Pe.UNAVAILABLE=14]="UNAVAILABLE",Pe[Pe.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fe{constructor(t,e){this.comparator=t,this.root=e||Ue.EMPTY}insert(t,e){return new Fe(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Ue.BLACK,null,null))}remove(t){return new Fe(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ue.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ve(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ve(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ve(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ve(this.root,t,this.comparator,!0)}}class Ve{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ue{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:Ue.RED,this.left=null!=r?r:Ue.EMPTY,this.right=null!=i?i:Ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new Ue(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ue.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Ue.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw m();if(this.right.isRed())throw m();const t=this.left.check();if(t!==this.right.check())throw m();return t+(this.isRed()?0:1)}}Ue.EMPTY=null,Ue.RED=!0,Ue.BLACK=!1,Ue.EMPTY=new class{constructor(){this.size=0}get key(){throw m()}get value(){throw m()}get color(){throw m()}get left(){throw m()}get right(){throw m()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Ue(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Be{constructor(t){this.comparator=t,this.data=new Fe(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new qe(this.data.getIterator())}getIteratorFrom(t){return new qe(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof Be))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Be(this.comparator);return e.data=t,e}}class qe{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e=new Fe(Z.comparator);function ze(){return $e}const Ge=new Fe(Z.comparator);function Ke(){return Ge}const He=new Fe(Z.comparator);function We(){return He}const Qe=new Be(Z.comparator);function Xe(...t){let e=Qe;for(const n of t)e=e.add(n);return e}const Ye=new Be(x);function Je(){return Ye}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,tn.createSynthesizedTargetChangeForCurrentChange(t,e)),new Ze(D.min(),n,Je(),ze(),Xe())}}class tn{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new tn(q.EMPTY_BYTE_STRING,e,Xe(),Xe(),Xe())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(t,e,n,r){this.k=t,this.removedTargetIds=e,this.key=n,this.$=r}}class nn{constructor(t,e){this.targetId=t,this.O=e}}class rn{constructor(t,e,n=q.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class on{constructor(){this.F=0,this.M=cn(),this.L=q.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return 0!==this.F}get K(){return this.U}j(t){t.approximateByteSize()>0&&(this.U=!0,this.L=t)}W(){let t=Xe(),e=Xe(),n=Xe();return this.M.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:m()}}),new tn(this.L,this.B,t,e,n)}G(){this.U=!1,this.M=cn()}H(t,e){this.U=!0,this.M=this.M.insert(t,e)}J(t){this.U=!0,this.M=this.M.remove(t)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class sn{constructor(t){this.tt=t,this.et=new Map,this.nt=ze(),this.st=an(),this.it=new Be(x)}rt(t){for(const e of t.k)t.$&&t.$.isFoundDocument()?this.ot(e,t.$):this.at(e,t.key,t.$);for(const e of t.removedTargetIds)this.at(e,t.key,t.$)}ct(t){this.forEachTarget(t,e=>{const n=this.ut(e);switch(t.state){case 0:this.ht(e)&&n.j(t.resumeToken);break;case 1:n.X(),n.q||n.G(),n.j(t.resumeToken);break;case 2:n.X(),n.q||this.removeTarget(e);break;case 3:this.ht(e)&&(n.Z(),n.j(t.resumeToken));break;case 4:this.ht(e)&&(this.lt(e),n.j(t.resumeToken));break;default:m()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.et.forEach((t,n)=>{this.ht(n)&&e(n)})}ft(t){const e=t.targetId,n=t.O.count,r=this.dt(e);if(r){const t=r.target;if(Et(t))if(0===n){const n=new Z(t.path);this.at(e,n,gt.newNoDocument(n,D.min()))}else y(1===n);else this.wt(e)!==n&&(this.lt(e),this.it=this.it.add(e))}}_t(t){const e=new Map;this.et.forEach((n,r)=>{const i=this.dt(r);if(i){if(n.current&&Et(i.target)){const e=new Z(i.target.path);null!==this.nt.get(e)||this.gt(r,e)||this.at(r,e,gt.newNoDocument(e,t))}n.K&&(e.set(r,n.W()),n.G())}});let n=Xe();this.st.forEach((t,e)=>{let r=!0;e.forEachWhile(t=>{const e=this.dt(t);return!e||2===e.purpose||(r=!1,!1)}),r&&(n=n.add(t))});const r=new Ze(t,e,this.it,this.nt,n);return this.nt=ze(),this.st=an(),this.it=new Be(x),r}ot(t,e){if(!this.ht(t))return;const n=this.gt(t,e.key)?2:0;this.ut(t).H(e.key,n),this.nt=this.nt.insert(e.key,e),this.st=this.st.insert(e.key,this.yt(e.key).add(t))}at(t,e,n){if(!this.ht(t))return;const r=this.ut(t);this.gt(t,e)?r.H(e,1):r.J(e),this.st=this.st.insert(e,this.yt(e).delete(t)),n&&(this.nt=this.nt.insert(e,n))}removeTarget(t){this.et.delete(t)}wt(t){const e=this.ut(t).W();return this.tt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Y(t){this.ut(t).Y()}ut(t){let e=this.et.get(t);return e||(e=new on,this.et.set(t,e)),e}yt(t){let e=this.st.get(t);return e||(e=new Be(x),this.st=this.st.insert(t,e)),e}ht(t){const e=null!==this.dt(t);return e||f("WatchChangeAggregator","Detected inactive target",t),e}dt(t){const e=this.et.get(t);return e&&e.q?null:this.tt.Et(t)}lt(t){this.et.set(t,new on),this.tt.getRemoteKeysForTarget(t).forEach(e=>{this.at(t,e,null)})}gt(t,e){return this.tt.getRemoteKeysForTarget(t).has(e)}}function an(){return new Fe(Z.comparator)}function cn(){return new Fe(Z.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),ln=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class hn{constructor(t,e){this.databaseId=t,this.D=e}}function fn(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function dn(t,e){return t.D?e.toBase64():e.toUint8Array()}function pn(t,e){return fn(t,e.toTimestamp())}function gn(t){return y(!!t),D.fromTimestamp(function(t){const e=z(t);return new N(e.seconds,e.nanos)}(t))}function mn(t,e){return function(t){return new F(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function yn(t){const e=F.fromString(t);return y(qn(e)),e}function vn(t,e){return mn(t.databaseId,e.path)}function bn(t,e){const n=yn(e);if(n.get(1)!==t.databaseId.projectId)throw new w(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new w(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Z(On(n))}function wn(t,e){return mn(t.databaseId,e)}function En(t){const e=yn(t);return 4===e.length?F.emptyPath():On(e)}function _n(t){return new F(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function On(t){return y(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Tn(t,e,n){return{name:vn(t,e),fields:n.value.mapValue.fields}}function Sn(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:m()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(t,e){return t.D?(y(void 0===e||"string"==typeof e),q.fromBase64String(e||"")):(y(void 0===e||e instanceof Uint8Array),q.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,a=s&&function(t){const e=void 0===t.code?b.UNKNOWN:Me(t.code);return new w(e,t.message||"")}(s);n=new rn(r,i,o,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=bn(t,r.document.name),o=gn(r.document.updateTime),s=new dt({mapValue:{fields:r.document.fields}}),a=gt.newFoundDocument(i,o,s),c=r.targetIds||[],u=r.removedTargetIds||[];n=new en(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=bn(t,r.document),o=r.readTime?gn(r.readTime):D.min(),s=gt.newNoDocument(i,o),a=r.removedTargetIds||[];n=new en([],a,s.key,s)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=bn(t,r.document),o=r.removedTargetIds||[];n=new en([],o,i,null)}else{if(!("filter"in e))return m();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,i=new De(r),o=t.targetId;n=new nn(o,i)}}return n}function In(t,e){let n;if(e instanceof Ie)n={update:Tn(t,e.key,e.value)};else if(e instanceof ke)n={delete:vn(t,e.key)};else if(e instanceof je)n={update:Tn(t,e.key,e.data),updateMask:Bn(e.fieldMask)};else{if(!(e instanceof Ne))return m();n={verify:vn(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(t=>function(t,e){const n=e.transform;if(n instanceof ce)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof ue)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof he)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof de)return{fieldPath:e.field.canonicalString(),increment:n.C};throw m()}(0,t))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:pn(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:m()}(t,e.precondition)),n}function jn(t,e){return t&&t.length>0?(y(void 0!==e),t.map(t=>function(t,e){let n=t.updateTime?gn(t.updateTime):gn(e);return n.isEqual(D.min())&&(n=gn(e)),new ye(n,t.transformResults||[])}(t,e))):[]}function An(t,e){return{documents:[wn(t,e.path)]}}function Cn(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=wn(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=wn(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map(t=>function(t){if("=="===t.op){if(lt(t.value))return{unaryFilter:{field:Mn(t.field),op:"IS_NAN"}};if(ut(t.value))return{unaryFilter:{field:Mn(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(lt(t.value))return{unaryFilter:{field:Mn(t.field),op:"IS_NOT_NAN"}};if(ut(t.value))return{unaryFilter:{field:Mn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Mn(t.field),op:Rn(t.op),value:t.value}}}(t));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const o=function(t){if(0!==t.length)return t.map(t=>function(t){return{field:Mn(t.field),direction:Pn(t.dir)}}(t))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const s=function(t,e){return t.D||X(e)?e:{value:e}}(t,e.limit);return null!==s&&(n.structuredQuery.limit=s),e.startAt&&(n.structuredQuery.startAt=Dn(e.startAt)),e.endAt&&(n.structuredQuery.endAt=Dn(e.endAt)),n}function xn(t){let e=En(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){y(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let o=[];n.where&&(o=Nn(n.where));let s=[];n.orderBy&&(s=n.orderBy.map(t=>function(t){return new Lt(Fn(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,X(e)?null:e}(n.limit));let c=null;n.startAt&&(c=Ln(n.startAt));let u=null;return n.endAt&&(u=Ln(n.endAt)),Vt(e,i,s,o,a,"F",c,u)}function kn(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return m()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function Nn(t){return t?void 0!==t.unaryFilter?[Un(t)]:void 0!==t.fieldFilter?[Vn(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map(t=>Nn(t)).reduce((t,e)=>t.concat(e)):m():[]}function Dn(t){return{before:t.before,values:t.position}}function Ln(t){const e=!!t.before,n=t.values||[];return new Nt(n,e)}function Pn(t){return un[t]}function Rn(t){return ln[t]}function Mn(t){return{fieldPath:t.canonicalString()}}function Fn(t){return U.fromServerFormat(t.fieldPath)}function Vn(t){return _t.create(Fn(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":default:return m()}}(t.fieldFilter.op),t.fieldFilter.value)}function Un(t){switch(t.unaryFilter.op){case"IS_NAN":Fn(t.unaryFilter.field);return _t.create(r["d"],"==",{doubleValue:NaN});case"IS_NULL":Fn(t.unaryFilter.field);return _t.create(r["c"],"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":Fn(t.unaryFilter.field);return _t.create(r["g"],"!=",{doubleValue:NaN});case"IS_NOT_NULL":Fn(t.unaryFilter.field);return _t.create(r["a"],"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":default:return m()}}function Bn(t){const e=[];return t.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function qn(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Gn(e)),e=zn(t.get(n),e);return Gn(e)}function zn(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const e=t.charAt(i);switch(e){case"\0":n+="";break;case"":n+="";break;default:n+=e}}return n}function Gn(t){return t+""}class Kn{constructor(t,e,n){this.ownerId=t,this.allowTabSynchronization=e,this.leaseTimestampMs=n}}Kn.store="owner",Kn.key="owner";class Hn{constructor(t,e,n){this.userId=t,this.lastAcknowledgedBatchId=e,this.lastStreamToken=n}}Hn.store="mutationQueues",Hn.keyPath="userId";class Wn{constructor(t,e,n,r,i){this.userId=t,this.batchId=e,this.localWriteTimeMs=n,this.baseMutations=r,this.mutations=i}}Wn.store="mutations",Wn.keyPath="batchId",Wn.userMutationsIndex="userMutationsIndex",Wn.userMutationsKeyPath=["userId","batchId"];class Qn{constructor(){}static prefixForUser(t){return[t]}static prefixForPath(t,e){return[t,$n(e)]}static key(t,e,n){return[t,$n(e),n]}}Qn.store="documentMutations",Qn.PLACEHOLDER=new Qn;class Xn{constructor(t,e,n,r,i,o){this.unknownDocument=t,this.noDocument=e,this.document=n,this.hasCommittedMutations=r,this.readTime=i,this.parentPath=o}}Xn.store="remoteDocuments",Xn.readTimeIndex="readTimeIndex",Xn.readTimeIndexPath="readTime",Xn.collectionReadTimeIndex="collectionReadTimeIndex",Xn.collectionReadTimeIndexPath=["parentPath","readTime"];class Yn{constructor(t){this.byteSize=t}}Yn.store="remoteDocumentGlobal",Yn.key="remoteDocumentGlobalKey";class Jn{constructor(t,e,n,r,i,o,s){this.targetId=t,this.canonicalId=e,this.readTime=n,this.resumeToken=r,this.lastListenSequenceNumber=i,this.lastLimboFreeSnapshotVersion=o,this.query=s}}Jn.store="targets",Jn.keyPath="targetId",Jn.queryTargetsIndexName="queryTargetsIndex",Jn.queryTargetsKeyPath=["canonicalId","targetId"];class Zn{constructor(t,e,n){this.targetId=t,this.path=e,this.sequenceNumber=n}}Zn.store="targetDocuments",Zn.keyPath=["targetId","path"],Zn.documentTargetsIndex="documentTargetsIndex",Zn.documentTargetsKeyPath=["path","targetId"];class tr{constructor(t,e,n,r){this.highestTargetId=t,this.highestListenSequenceNumber=e,this.lastRemoteSnapshotVersion=n,this.targetCount=r}}tr.key="targetGlobalKey",tr.store="targetGlobal";class er{constructor(t,e){this.collectionId=t,this.parent=e}}er.store="collectionParents",er.keyPath=["collectionId","parent"];class nr{constructor(t,e,n,r){this.clientId=t,this.updateTimeMs=e,this.networkEnabled=n,this.inForeground=r}}nr.store="clientMetadata",nr.keyPath="clientId";class rr{constructor(t,e,n){this.bundleId=t,this.createTime=e,this.version=n}}rr.store="bundles",rr.keyPath="bundleId";class ir{constructor(t,e,n){this.name=t,this.readTime=e,this.bundledQuery=n}}ir.store="namedQueries",ir.keyPath="name";Hn.store,Wn.store,Qn.store,Xn.store,Jn.store,Kn.store,tr.store,Zn.store,nr.store,Yn.store,er.store,rr.store,ir.store;const or="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sr{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&m(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new ar((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof ar?e:ar.resolve(e)}catch(t){return ar.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):ar.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):ar.reject(e)}static resolve(t){return new ar((e,n)=>{e(t)})}static reject(t){return new ar((e,n)=>{n(t)})}static waitFor(t){return new ar((e,n)=>{let r=0,i=0,o=!1;t.forEach(t=>{++r,t.next(()=>{++i,o&&i===r&&e()},t=>n(t))}),o=!0,i===r&&e()})}static or(t){let e=ar.resolve(!1);for(const n of t)e=e.next(t=>t?ar.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,r)=>{n.push(e.call(this,t,r))}),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ur{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&Ee(e,t,n[r])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&_e(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&_e(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(e=>{const n=t.get(e.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(D.min())})}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),Xe())}isEqual(t){return this.batchId===t.batchId&&k(this.mutations,t.mutations,(t,e)=>Te(t,e))&&k(this.baseMutations,t.baseMutations,(t,e)=>Te(t,e))}}class lr{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){y(t.mutations.length===n.length);let r=We();const i=t.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,n[o].version);return new lr(t,e,n,r)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(t,e,n,r,i=D.min(),o=D.min(),s=q.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=s}withSequenceNumber(t){return new hr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new hr(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(t){this.Wt=t}}function dr(t){const e=xn({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Wt(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pr{constructor(){this.Gt=new gr}addToCollectionParentIndex(t,e){return this.Gt.add(e),ar.resolve()}getCollectionParents(t,e){return ar.resolve(this.Gt.getEntries(e))}}class gr{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Be(F.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Be(F.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new mr(t,mr.DEFAULT_COLLECTION_PERCENTILE,mr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mr.DEFAULT_COLLECTION_PERCENTILE=10,mr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,mr.DEFAULT=new mr(41943040,mr.DEFAULT_COLLECTION_PERCENTILE,mr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),mr.DISABLED=new mr(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yr{constructor(t){this.ne=t}next(){return this.ne+=2,this.ne}static se(){return new yr(0)}static ie(){return new yr(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function vr(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==or)throw t;f("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class br{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],t))return void(r[n]=[t,e]);r.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),!0;return!1}forEach(t){P(this.inner,(e,n)=>{for(const[r,i]of n)t(r,i)})}isEmpty(){return R(this.inner)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(){this.changes=new br(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}getReadTime(t){const e=this.changes.get(t);return e?e.readTime:D.min()}addEntry(t,e){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:e})}removeEntry(t,e=null){this.assertNotApplied(),this.changes.set(t,{document:gt.newInvalidDocument(t),readTime:e})}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?ar.resolve(n.document):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Er{constructor(t,e,n){this.He=t,this.In=e,this.Ht=n}An(t,e){return this.In.getAllMutationBatchesAffectingDocumentKey(t,e).next(n=>this.Rn(t,e,n))}Rn(t,e,n){return this.He.getEntry(t,e).next(t=>{for(const e of n)e.applyToLocalView(t);return t})}bn(t,e){t.forEach((t,n)=>{for(const r of e)r.applyToLocalView(n)})}Pn(t,e){return this.He.getEntries(t,e).next(e=>this.vn(t,e).next(()=>e))}vn(t,e){return this.In.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>this.bn(e,t))}getDocumentsMatchingQuery(t,e,n){return function(t){return Z.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Vn(t,e.path):Gt(e)?this.Sn(t,e,n):this.Dn(t,e,n)}Vn(t,e){return this.An(t,new Z(e)).next(t=>{let e=Ke();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}Sn(t,e,n){const r=e.collectionGroup;let i=Ke();return this.Ht.getCollectionParents(t,r).next(o=>ar.forEach(o,o=>{const s=function(t,e){return new Ft(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,o.child(r));return this.Dn(t,s,n).next(t=>{t.forEach((t,e)=>{i=i.insert(t,e)})})}).next(()=>i))}Dn(t,e,n){let r,i;return this.He.getDocumentsMatchingQuery(t,e,n).next(n=>(r=n,this.In.getAllMutationBatchesAffectingQuery(t,e))).next(e=>(i=e,this.Cn(t,i,r).next(t=>{r=t;for(const e of i)for(const t of e.mutations){const n=t.key;let i=r.get(n);null==i&&(i=gt.newInvalidDocument(n),r=r.insert(n,i)),_e(t,i,e.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}))).next(()=>(r.forEach((t,n)=>{Jt(e,n)||(r=r.remove(t))}),r))}Cn(t,e,n){let r=Xe();for(const o of e)for(const t of o.mutations)t instanceof je&&null===n.get(t.key)&&(r=r.add(t.key));let i=n;return this.He.getEntries(t,r).next(t=>(t.forEach((t,e)=>{e.isFoundDocument()&&(i=i.insert(t,e))}),i))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Nn=n,this.xn=r}static kn(t,e){let n=Xe(),r=Xe();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new _r(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{$n(t){this.On=t}getDocumentsMatchingQuery(t,e,n,r){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(D.min())?this.Fn(t,e):this.On.Pn(t,r).next(i=>{const s=this.Mn(e,i);return(Bt(e)||qt(e))&&this.Ln(e.limitType,s,r,n)?this.Fn(t,e):(h()<=o["a"].DEBUG&&f("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Yt(e)),this.On.getDocumentsMatchingQuery(t,e,n).next(t=>(s.forEach(e=>{t=t.insert(e.key,e)}),t)))})}Mn(t,e){let n=new Be(Zt(t));return e.forEach((e,r)=>{Jt(t,r)&&(n=n.add(r))}),n}Ln(t,e,n,r){if(n.size!==e.size)return!0;const i="F"===t?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Fn(t,e){return h()<=o["a"].DEBUG&&f("QueryEngine","Using full collection scan to execute query:",Yt(e)),this.On.getDocumentsMatchingQuery(t,e,D.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(t,e,n,r){this.persistence=t,this.Bn=e,this.N=r,this.Un=new Fe(x),this.qn=new br(t=>vt(t),wt),this.Kn=D.min(),this.In=t.getMutationQueue(n),this.jn=t.getRemoteDocumentCache(),this.ze=t.getTargetCache(),this.Qn=new Er(this.jn,this.In,this.persistence.getIndexManager()),this.Je=t.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Un))}}function Sr(t,e,n,r){return new Tr(t,e,n,r)}async function Ir(t,e){const n=v(t);let r=n.In,i=n.Qn;const o=await n.persistence.runTransaction("Handle user change","readonly",t=>{let o;return n.In.getAllMutationBatches(t).next(s=>(o=s,r=n.persistence.getMutationQueue(e),i=new Er(n.jn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(t))).next(e=>{const n=[],r=[];let s=Xe();for(const t of o){n.push(t.batchId);for(const e of t.mutations)s=s.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)s=s.add(e.key)}return i.Pn(t,s).next(t=>({Wn:t,removedBatchIds:n,addedBatchIds:r}))})});return n.In=r,n.Qn=i,n.Bn.$n(n.Qn),o}function jr(t,e){const n=v(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{const r=e.batch.keys(),i=n.jn.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,o=i.keys();let s=ar.resolve();return o.forEach(t=>{s=s.next(()=>r.getEntry(e,t)).next(e=>{const o=n.docVersions.get(t);y(null!==o),e.version.compareTo(o)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&r.addEntry(e,n.commitVersion))})}),s.next(()=>t.In.removeMutationBatch(e,i))}(n,t,e,i).next(()=>i.apply(t)).next(()=>n.In.performConsistencyCheck(t)).next(()=>n.Qn.Pn(t,r))})}function Ar(t){const e=v(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.ze.getLastRemoteSnapshotVersion(t))}function Cr(t,e){const n=v(t),r=e.snapshotVersion;let i=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const o=n.jn.newChangeBuffer({trackRemovals:!0});i=n.Un;const s=[];e.targetChanges.forEach((e,o)=>{const a=i.get(o);if(!a)return;s.push(n.ze.removeMatchingKeys(t,e.removedDocuments,o).next(()=>n.ze.addMatchingKeys(t,e.addedDocuments,o)));const c=e.resumeToken;if(c.approximateByteSize()>0){const u=a.withResumeToken(c,r).withSequenceNumber(t.currentSequenceNumber);i=i.insert(o,u),function(t,e,n){return y(e.resumeToken.approximateByteSize()>0),0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(a,u,e)&&s.push(n.ze.updateTargetData(t,u))}});let a=ze();if(e.documentUpdates.forEach((r,i)=>{e.resolvedLimboDocuments.has(r)&&s.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))}),s.push(xr(t,o,e.documentUpdates,r,void 0).next(t=>{a=t})),!r.isEqual(D.min())){const e=n.ze.getLastRemoteSnapshotVersion(t).next(e=>n.ze.setTargetsMetadata(t,t.currentSequenceNumber,r));s.push(e)}return ar.waitFor(s).next(()=>o.apply(t)).next(()=>n.Qn.vn(t,a)).next(()=>a)}).then(t=>(n.Un=i,t))}function xr(t,e,n,r,i){let o=Xe();return n.forEach(t=>o=o.add(t)),e.getEntries(t,o).next(t=>{let o=ze();return n.forEach((n,s)=>{const a=t.get(n),c=(null==i?void 0:i.get(n))||r;s.isNoDocument()&&s.version.isEqual(D.min())?(e.removeEntry(n,c),o=o.insert(n,s)):!a.isValidDocument()||s.version.compareTo(a.version)>0||0===s.version.compareTo(a.version)&&a.hasPendingWrites?(e.addEntry(s,c),o=o.insert(n,s)):f("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",s.version)}),o})}function kr(t,e){const n=v(t);return n.persistence.runTransaction("Get next mutation batch","readonly",t=>(void 0===e&&(e=-1),n.In.getNextMutationBatchAfterBatchId(t,e)))}function Nr(t,e){const n=v(t);return n.persistence.runTransaction("Allocate target","readwrite",t=>{let r;return n.ze.getTargetData(t,e).next(i=>i?(r=i,ar.resolve(r)):n.ze.allocateTargetId(t).next(i=>(r=new hr(e,i,0,t.currentSequenceNumber),n.ze.addTargetData(t,r).next(()=>r))))}).then(t=>{const r=n.Un.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Un=n.Un.insert(t.targetId,t),n.qn.set(e,t.targetId)),t})}async function Dr(t,e,n){const r=v(t),i=r.Un.get(e),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,t=>r.persistence.referenceDelegate.removeTarget(t,i))}catch(t){if(!cr(t))throw t;f("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.Un=r.Un.remove(e),r.qn.delete(i.target)}function Lr(t,e,n){const r=v(t);let i=D.min(),o=Xe();return r.persistence.runTransaction("Execute query","readonly",t=>function(t,e,n){const r=v(t),i=r.qn.get(n);return void 0!==i?ar.resolve(r.Un.get(i)):r.ze.getTargetData(e,n)}(r,t,Ht(e)).next(e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.ze.getMatchingKeysForTargetId(t,e.targetId).next(t=>{o=t})}).next(()=>r.Bn.getDocumentsMatchingQuery(t,e,n?i:D.min(),n?o:Xe())).next(t=>({documents:t,Gn:o})))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pr{constructor(t){this.N=t,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(t,e){return ar.resolve(this.Yn.get(e))}saveBundleMetadata(t,e){var n;return this.Yn.set(e.id,{id:(n=e).id,version:n.version,createTime:gn(n.createTime)}),ar.resolve()}getNamedQuery(t,e){return ar.resolve(this.Xn.get(e))}saveNamedQuery(t,e){return this.Xn.set(e.name,function(t){return{name:t.name,query:dr(t.bundledQuery),readTime:gn(t.readTime)}}(e)),ar.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(){this.Zn=new Be(Mr.ts),this.es=new Be(Mr.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const n=new Mr(t,e);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.rs(new Mr(t,e))}os(t,e){t.forEach(t=>this.removeReference(t,e))}cs(t){const e=new Z(new F([])),n=new Mr(e,t),r=new Mr(e,t+1),i=[];return this.es.forEachInRange([n,r],t=>{this.rs(t),i.push(t.key)}),i}us(){this.Zn.forEach(t=>this.rs(t))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new Z(new F([])),n=new Mr(e,t),r=new Mr(e,t+1);let i=Xe();return this.es.forEachInRange([n,r],t=>{i=i.add(t.key)}),i}containsKey(t){const e=new Mr(t,0),n=this.Zn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Mr{constructor(t,e){this.key=t,this.ls=e}static ts(t,e){return Z.comparator(t.key,e.key)||x(t.ls,e.ls)}static ns(t,e){return x(t.ls,e.ls)||Z.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(t,e){this.Ht=t,this.referenceDelegate=e,this.In=[],this.fs=1,this.ds=new Be(Mr.ts)}checkEmpty(t){return ar.resolve(0===this.In.length)}addMutationBatch(t,e,n,r){const i=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const o=new ur(i,e,n,r);this.In.push(o);for(const s of r)this.ds=this.ds.add(new Mr(s.key,i)),this.Ht.addToCollectionParentIndex(t,s.key.path.popLast());return ar.resolve(o)}lookupMutationBatch(t,e){return ar.resolve(this.ws(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this._s(n),i=r<0?0:r;return ar.resolve(this.In.length>i?this.In[i]:null)}getHighestUnacknowledgedBatchId(){return ar.resolve(0===this.In.length?-1:this.fs-1)}getAllMutationBatches(t){return ar.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Mr(e,0),r=new Mr(e,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([n,r],t=>{const e=this.ws(t.ls);i.push(e)}),ar.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Be(x);return e.forEach(t=>{const e=new Mr(t,0),r=new Mr(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,r],t=>{n=n.add(t.ls)})}),ar.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;Z.isDocumentKey(i)||(i=i.child(""));const o=new Mr(new Z(i),0);let s=new Be(x);return this.ds.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(s=s.add(t.ls)),!0)},o),ar.resolve(this.gs(s))}gs(t){const e=[];return t.forEach(t=>{const n=this.ws(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){y(0===this.ys(e.batchId,"removed")),this.In.shift();let n=this.ds;return ar.forEach(e.mutations,r=>{const i=new Mr(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.ds=n})}te(t){}containsKey(t,e){const n=new Mr(e,0),r=this.ds.firstAfterOrEqual(n);return ar.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.In.length,ar.resolve()}ys(t,e){return this._s(t)}_s(t){return 0===this.In.length?0:t-this.In[0].batchId}ws(t){const e=this._s(t);return e<0||e>=this.In.length?null:this.In[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(t,e){this.Ht=t,this.ps=e,this.docs=new Fe(Z.comparator),this.size=0}addEntry(t,e,n){const r=e.key,i=this.docs.get(r),o=i?i.size:0,s=this.ps(e);return this.docs=this.docs.insert(r,{document:e.clone(),size:s,readTime:n}),this.size+=s-o,this.Ht.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return ar.resolve(n?n.document.clone():gt.newInvalidDocument(e))}getEntries(t,e){let n=ze();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.clone():gt.newInvalidDocument(t))}),ar.resolve(n)}getDocumentsMatchingQuery(t,e,n){let r=ze();const i=new Z(e.path.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:t,value:{document:i,readTime:s}}=o.getNext();if(!e.path.isPrefixOf(t.path))break;s.compareTo(n)<=0||Jt(e,i)&&(r=r.insert(i.key,i.clone()))}return ar.resolve(r)}Es(t,e){return ar.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new Ur(this)}getSize(t){return ar.resolve(this.size)}}class Ur extends wr{constructor(t){super(),this.Se=t}applyChanges(t){const e=[];return this.changes.forEach((n,r)=>{r.document.isValidDocument()?e.push(this.Se.addEntry(t,r.document,this.getReadTime(n))):this.Se.removeEntry(n)}),ar.waitFor(e)}getFromCache(t,e){return this.Se.getEntry(t,e)}getAllFromCache(t,e){return this.Se.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(t){this.persistence=t,this.Ts=new br(t=>vt(t),wt),this.lastRemoteSnapshotVersion=D.min(),this.highestTargetId=0,this.Is=0,this.As=new Rr,this.targetCount=0,this.Rs=yr.se()}forEachTarget(t,e){return this.Ts.forEach((t,n)=>e(n)),ar.resolve()}getLastRemoteSnapshotVersion(t){return ar.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return ar.resolve(this.Is)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),ar.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Is&&(this.Is=e),ar.resolve()}ae(t){this.Ts.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new yr(e),this.highestTargetId=e),t.sequenceNumber>this.Is&&(this.Is=t.sequenceNumber)}addTargetData(t,e){return this.ae(e),this.targetCount+=1,ar.resolve()}updateTargetData(t,e){return this.ae(e),ar.resolve()}removeTargetData(t,e){return this.Ts.delete(e.target),this.As.cs(e.targetId),this.targetCount-=1,ar.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Ts.forEach((o,s)=>{s.sequenceNumber<=e&&null===n.get(s.targetId)&&(this.Ts.delete(o),i.push(this.removeMatchingKeysForTargetId(t,s.targetId)),r++)}),ar.waitFor(i).next(()=>r)}getTargetCount(t){return ar.resolve(this.targetCount)}getTargetData(t,e){const n=this.Ts.get(e)||null;return ar.resolve(n)}addMatchingKeys(t,e,n){return this.As.ss(e,n),ar.resolve()}removeMatchingKeys(t,e,n){this.As.os(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach(e=>{i.push(r.markPotentiallyOrphaned(t,e))}),ar.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.As.cs(e),ar.resolve()}getMatchingKeysForTargetId(t,e){const n=this.As.hs(e);return ar.resolve(n)}containsKey(t,e){return ar.resolve(this.As.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(t,e){this.bs={},this.Le=new j(0),this.Be=!1,this.Be=!0,this.referenceDelegate=t(this),this.ze=new Br(this),this.Ht=new pr,this.He=function(t,e){return new Vr(t,e)}(this.Ht,t=>this.referenceDelegate.Ps(t)),this.N=new fr(e),this.Je=new Pr(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(t){let e=this.bs[t.toKey()];return e||(e=new Fr(this.Ht,this.referenceDelegate),this.bs[t.toKey()]=e),e}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(t,e,n){f("MemoryPersistence","Starting transaction:",t);const r=new $r(this.Le.next());return this.referenceDelegate.vs(),n(r).next(t=>this.referenceDelegate.Vs(r).next(()=>t)).toPromise().then(t=>(r.raiseOnCommittedEvent(),t))}Ss(t,e){return ar.or(Object.values(this.bs).map(n=>()=>n.containsKey(t,e)))}}class $r extends sr{constructor(t){super(),this.currentSequenceNumber=t}}class zr{constructor(t){this.persistence=t,this.Ds=new Rr,this.Cs=null}static Ns(t){return new zr(t)}get xs(){if(this.Cs)return this.Cs;throw m()}addReference(t,e,n){return this.Ds.addReference(n,e),this.xs.delete(n.toString()),ar.resolve()}removeReference(t,e,n){return this.Ds.removeReference(n,e),this.xs.add(n.toString()),ar.resolve()}markPotentiallyOrphaned(t,e){return this.xs.add(e.toString()),ar.resolve()}removeTarget(t,e){this.Ds.cs(e.targetId).forEach(t=>this.xs.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.xs.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}vs(){this.Cs=new Set}Vs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ar.forEach(this.xs,n=>{const r=Z.fromPath(n);return this.ks(t,r).next(t=>{t||e.removeEntry(r)})}).next(()=>(this.Cs=null,e.apply(t)))}updateLimboDocument(t,e){return this.ks(t,e).next(t=>{t?this.xs.delete(e.toString()):this.xs.add(e.toString())})}Ps(t){return 0}ks(t,e){return ar.or([()=>ar.resolve(this.Ds.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ss(t,e)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(){this.activeTargetIds=Je()}Fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ms(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Os(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Kr{constructor(){this.yi=new Gr,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.yi.Fs(t),this.pi[t]||"not-current"}updateQueryState(t,e,n){this.pi[t]=e}removeLocalQueryTarget(t){this.yi.Ms(t)}isLocalQueryTarget(t){return this.yi.activeTargetIds.has(t)}clearQueryState(t){delete this.pi[t]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(t){return this.yi.activeTargetIds.has(t)}start(){return this.yi=new Gr,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{Ei(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(){this.Ti=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ei(t){this.bi.push(t)}shutdown(){window.removeEventListener("online",this.Ti),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ti),window.addEventListener("offline",this.Ai)}Ii(){f("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.bi)t(0)}Ri(){f("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.bi)t(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(t){this.vi=t.vi,this.Vi=t.Vi}Si(t){this.Di=t}Ci(t){this.Ni=t}onMessage(t){this.xi=t}close(){this.Vi()}send(t){this.vi(t)}ki(){this.Di()}$i(t){this.Ni(t)}Oi(t){this.xi(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.Fi=e+"://"+t.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(t,e,n,r){const i=this.Bi(t,e);f("RestConnection","Sending: ",i,n);const o={};return this.Ui(o,r),this.qi(t,i,o,n).then(t=>(f("RestConnection","Received: ",t),t),e=>{throw p("RestConnection",t+" failed with error: ",e,"url: ",i,"request:",n),e})}Ki(t,e,n,r){return this.Li(t,e,n,r)}Ui(t,e){if(t["X-Goog-Api-Client"]="gl-js/ fire/"+u,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e)for(const n in e.authHeaders)e.authHeaders.hasOwnProperty(n)&&(t[n]=e.authHeaders[n])}Bi(t,e){const n=Qr[t];return`${this.Fi}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}qi(t,e,n,r){return new Promise((i,o)=>{const s=new a["g"];s.listenOnce(a["c"].COMPLETE,()=>{try{switch(s.getLastErrorCode()){case a["a"].NO_ERROR:const e=s.getResponseJson();f("Connection","XHR received:",JSON.stringify(e)),i(e);break;case a["a"].TIMEOUT:f("Connection",'RPC "'+t+'" timed out'),o(new w(b.DEADLINE_EXCEEDED,"Request time out"));break;case a["a"].HTTP_ERROR:const n=s.getStatus();if(f("Connection",'RPC "'+t+'" failed with status:',n,"response text:",s.getResponseText()),n>0){const t=s.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(e)>=0?e:b.UNKNOWN}(t.status);o(new w(e,t.message))}else o(new w(b.UNKNOWN,"Server responded with status "+s.getStatus()))}else o(new w(b.UNAVAILABLE,"Connection failed."));break;default:m()}}finally{f("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(r);s.send(e,"POST",c,n,15)})}ji(t,e){const n=[this.Fi,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=Object(a["h"])(),i=Object(a["i"])(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new a["d"]({})),this.Ui(o.initMessageHeaders,e),Object(s["n"])()||Object(s["o"])()||Object(s["k"])()||Object(s["l"])()||Object(s["q"])()||Object(s["j"])()||(o.httpHeadersOverwriteParam="$httpHeaders");const c=n.join("");f("Connection","Creating WebChannel: "+c,o);const u=r.createWebChannel(c,o);let l=!1,h=!1;const d=new Xr({vi:t=>{h?f("Connection","Not sending because WebChannel is closed:",t):(l||(f("Connection","Opening WebChannel transport."),u.open(),l=!0),f("Connection","WebChannel sending:",t),u.send(t))},Vi:()=>u.close()}),g=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};return g(u,a["f"].EventType.OPEN,()=>{h||f("Connection","WebChannel transport opened.")}),g(u,a["f"].EventType.CLOSE,()=>{h||(h=!0,f("Connection","WebChannel transport closed"),d.$i())}),g(u,a["f"].EventType.ERROR,t=>{h||(h=!0,p("Connection","WebChannel transport errored:",t),d.$i(new w(b.UNAVAILABLE,"The operation could not be completed")))}),g(u,a["f"].EventType.MESSAGE,t=>{var e;if(!h){const n=t.data[0];y(!!n);const r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(i){f("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=Le[t];if(void 0!==e)return Me(e)}(t),n=i.message;void 0===e&&(e=b.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),h=!0,d.$i(new w(e,n)),u.close()}else f("Connection","WebChannel received:",n),d.Oi(n)}}),g(i,a["b"].STAT_EVENT,t=>{t.stat===a["e"].PROXY?f("Connection","Detected buffering proxy"):t.stat===a["e"].NOPROXY&&f("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.ki()},0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(t){return new hn(t,!0)}class ti{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Oe=t,this.timerId=e,this.Qi=n,this.Wi=r,this.Gi=i,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(t){this.cancel();const e=Math.floor(this.zi+this.Zi()),n=Math.max(0,Date.now()-this.Ji),r=Math.max(0,e-n);r>0&&f("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.zi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,r,()=>(this.Ji=Date.now(),t())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){null!==this.Hi&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){null!==this.Hi&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(t,e,n,r,i,o){this.Oe=t,this.er=n,this.nr=r,this.credentialsProvider=i,this.listener=o,this.state=0,this.sr=0,this.ir=null,this.stream=null,this.rr=new ti(t,e)}ar(){return 1===this.state||2===this.state||4===this.state}cr(){return 2===this.state}start(){3!==this.state?this.auth():this.ur()}async stop(){this.ar()&&await this.close(0)}hr(){this.state=0,this.rr.reset()}lr(){this.cr()&&null===this.ir&&(this.ir=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this.dr()))}wr(t){this._r(),this.stream.send(t)}async dr(){if(this.cr())return this.close(0)}_r(){this.ir&&(this.ir.cancel(),this.ir=null)}async close(t,e){this._r(),this.rr.cancel(),this.sr++,3!==t?this.rr.reset():e&&e.code===b.RESOURCE_EXHAUSTED?(d(e.toString()),d("Using maximum backoff delay to prevent overloading the backend."),this.rr.Yi()):e&&e.code===b.UNAUTHENTICATED&&this.credentialsProvider.invalidateToken(),null!==this.stream&&(this.mr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ci(e)}mr(){}auth(){this.state=1;const t=this.gr(this.sr),e=this.sr;this.credentialsProvider.getToken().then(t=>{this.sr===e&&this.yr(t)},e=>{t(()=>{const t=new w(b.UNKNOWN,"Fetching auth token failed: "+e.message);return this.pr(t)})})}yr(t){const e=this.gr(this.sr);this.stream=this.Er(t),this.stream.Si(()=>{e(()=>(this.state=2,this.listener.Si()))}),this.stream.Ci(t=>{e(()=>this.pr(t))}),this.stream.onMessage(t=>{e(()=>this.onMessage(t))})}ur(){this.state=4,this.rr.Xi(async()=>{this.state=0,this.start()})}pr(t){return f("PersistentStream","close with error: "+t),this.stream=null,this.close(3,t)}gr(t){return e=>{this.Oe.enqueueAndForget(()=>this.sr===t?e():(f("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ni extends ei{constructor(t,e,n,r,i){super(t,"listen_stream_connection_backoff","listen_stream_idle",e,n,i),this.N=r}Er(t){return this.nr.ji("Listen",t)}onMessage(t){this.rr.reset();const e=Sn(this.N,t),n=function(t){if(!("targetChange"in t))return D.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?D.min():e.readTime?gn(e.readTime):D.min()}(t);return this.listener.Tr(e,n)}Ir(t){const e={};e.database=_n(this.N),e.addTarget=function(t,e){let n;const r=e.target;return n=Et(r)?{documents:An(t,r)}:{query:Cn(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=dn(t,e.resumeToken):e.snapshotVersion.compareTo(D.min())>0&&(n.readTime=fn(t,e.snapshotVersion.toTimestamp())),n}(this.N,t);const n=kn(this.N,t);n&&(e.labels=n),this.wr(e)}Ar(t){const e={};e.database=_n(this.N),e.removeTarget=t,this.wr(e)}}class ri extends ei{constructor(t,e,n,r,i){super(t,"write_stream_connection_backoff","write_stream_idle",e,n,i),this.N=r,this.Rr=!1}get br(){return this.Rr}start(){this.Rr=!1,this.lastStreamToken=void 0,super.start()}mr(){this.Rr&&this.Pr([])}Er(t){return this.nr.ji("Write",t)}onMessage(t){if(y(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Rr){this.rr.reset();const e=jn(t.writeResults,t.commitTime),n=gn(t.commitTime);return this.listener.vr(n,e)}return y(!t.writeResults||0===t.writeResults.length),this.Rr=!0,this.listener.Vr()}Sr(){const t={};t.database=_n(this.N),this.wr(t)}Pr(t){const e={streamToken:this.lastStreamToken,writes:t.map(t=>In(this.N,t))};this.wr(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii extends class{}{constructor(t,e,n){super(),this.credentials=t,this.nr=e,this.N=n,this.Dr=!1}Cr(){if(this.Dr)throw new w(b.FAILED_PRECONDITION,"The client has already been terminated.")}Li(t,e,n){return this.Cr(),this.credentials.getToken().then(r=>this.nr.Li(t,e,n,r)).catch(t=>{throw"FirebaseError"===t.name?(t.code===b.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new w(b.UNKNOWN,t.toString())})}Ki(t,e,n){return this.Cr(),this.credentials.getToken().then(r=>this.nr.Ki(t,e,n,r)).catch(t=>{throw"FirebaseError"===t.name?(t.code===b.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new w(b.UNKNOWN,t.toString())})}terminate(){this.Dr=!0}}class oi{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Nr=0,this.kr=null,this.$r=!0}Or(){0===this.Nr&&(this.Fr("Unknown"),this.kr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.kr=null,this.Mr("Backend didn't respond within 10 seconds."),this.Fr("Offline"),Promise.resolve())))}Lr(t){"Online"===this.state?this.Fr("Unknown"):(this.Nr++,this.Nr>=1&&(this.Br(),this.Mr("Connection failed 1 times. Most recent error: "+t.toString()),this.Fr("Offline")))}set(t){this.Br(),this.Nr=0,"Online"===t&&(this.$r=!1),this.Fr(t)}Fr(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}Mr(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.$r?(d(e),this.$r=!1):f("OnlineStateTracker",e)}Br(){null!==this.kr&&(this.kr.cancel(),this.kr=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Ur=[],this.qr=new Map,this.Kr=new Set,this.jr=[],this.Qr=i,this.Qr.Ei(t=>{n.enqueueAndForget(async()=>{gi(this)&&(f("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=v(t);e.Kr.add(4),await ci(e),e.Wr.set("Unknown"),e.Kr.delete(4),await ai(e)}(this))})}),this.Wr=new oi(n,r)}}async function ai(t){if(gi(t))for(const e of t.jr)await e(!0)}async function ci(t){for(const e of t.jr)await e(!1)}function ui(t,e){const n=v(t);n.qr.has(e.targetId)||(n.qr.set(e.targetId,e),pi(n)?di(n):Ni(n).cr()&&hi(n,e))}function li(t,e){const n=v(t),r=Ni(n);n.qr.delete(e),r.cr()&&fi(n,e),0===n.qr.size&&(r.cr()?r.lr():gi(n)&&n.Wr.set("Unknown"))}function hi(t,e){t.Gr.Y(e.targetId),Ni(t).Ir(e)}function fi(t,e){t.Gr.Y(e),Ni(t).Ar(e)}function di(t){t.Gr=new sn({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.qr.get(e)||null}),Ni(t).start(),t.Wr.Or()}function pi(t){return gi(t)&&!Ni(t).ar()&&t.qr.size>0}function gi(t){return 0===v(t).Kr.size}function mi(t){t.Gr=void 0}async function yi(t){t.qr.forEach((e,n)=>{hi(t,e)})}async function vi(t,e){mi(t),pi(t)?(t.Wr.Lr(e),di(t)):t.Wr.set("Unknown")}async function bi(t,e,n){if(t.Wr.set("Online"),e instanceof rn&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.qr.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.qr.delete(r),t.Gr.removeTarget(r))}(t,e)}catch(n){f("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await wi(t,n)}else if(e instanceof en?t.Gr.rt(e):e instanceof nn?t.Gr.ft(e):t.Gr.ct(e),!n.isEqual(D.min()))try{const e=await Ar(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Gr._t(e);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.qr.get(r);i&&t.qr.set(r,i.withResumeToken(n.resumeToken,e))}}),n.targetMismatches.forEach(e=>{const n=t.qr.get(e);if(!n)return;t.qr.set(e,n.withResumeToken(q.EMPTY_BYTE_STRING,n.snapshotVersion)),fi(t,e);const r=new hr(n.target,e,1,n.sequenceNumber);hi(t,r)}),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){f("RemoteStore","Failed to raise snapshot:",e),await wi(t,e)}}async function wi(t,e,n){if(!cr(e))throw e;t.Kr.add(1),await ci(t),t.Wr.set("Offline"),n||(n=()=>Ar(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{f("RemoteStore","Retrying IndexedDB access"),await n(),t.Kr.delete(1),await ai(t)})}function Ei(t,e){return e().catch(n=>wi(t,n,e))}async function _i(t){const e=v(t),n=Di(e);let r=e.Ur.length>0?e.Ur[e.Ur.length-1].batchId:-1;for(;Oi(e);)try{const t=await kr(e.localStore,r);if(null===t){0===e.Ur.length&&n.lr();break}r=t.batchId,Ti(e,t)}catch(t){await wi(e,t)}Si(e)&&Ii(e)}function Oi(t){return gi(t)&&t.Ur.length<10}function Ti(t,e){t.Ur.push(e);const n=Di(t);n.cr()&&n.br&&n.Pr(e.mutations)}function Si(t){return gi(t)&&!Di(t).ar()&&t.Ur.length>0}function Ii(t){Di(t).start()}async function ji(t){Di(t).Sr()}async function Ai(t){const e=Di(t);for(const n of t.Ur)e.Pr(n.mutations)}async function Ci(t,e,n){const r=t.Ur.shift(),i=lr.from(r,e,n);await Ei(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await _i(t)}async function xi(t,e){e&&Di(t).br&&await async function(t,e){if(n=e.code,Re(n)&&n!==b.ABORTED){const n=t.Ur.shift();Di(t).hr(),await Ei(t,()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e)),await _i(t)}var n}(t,e),Si(t)&&Ii(t)}async function ki(t,e){const n=v(t);e?(n.Kr.delete(2),await ai(n)):e||(n.Kr.add(2),await ci(n),n.Wr.set("Unknown"))}function Ni(t){return t.zr||(t.zr=function(t,e,n){const r=v(t);return r.Cr(),new ni(e,r.nr,r.credentials,r.N,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Si:yi.bind(null,t),Ci:vi.bind(null,t),Tr:bi.bind(null,t)}),t.jr.push(async e=>{e?(t.zr.hr(),pi(t)?di(t):t.Wr.set("Unknown")):(await t.zr.stop(),mi(t))})),t.zr}function Di(t){return t.Hr||(t.Hr=function(t,e,n){const r=v(t);return r.Cr(),new ri(e,r.nr,r.credentials,r.N,n)}(t.datastore,t.asyncQueue,{Si:ji.bind(null,t),Ci:xi.bind(null,t),Vr:Ai.bind(null,t),vr:Ci.bind(null,t)}),t.jr.push(async e=>{e?(t.Hr.hr(),await _i(t)):(await t.Hr.stop(),t.Ur.length>0&&(f("RemoteStore",`Stopping write stream with ${t.Ur.length} pending writes`),t.Ur=[]))})),t.Hr
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Li{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new E,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}static createAndSchedule(t,e,n,r,i){const o=Date.now()+n,s=new Li(t,e,o,r,i);return s.start(n),s}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new w(b.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Pi(t,e){if(d("AsyncQueue",`${e}: ${t}`),cr(t))return new w(b.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Z.comparator(e.key,n.key):(t,e)=>Z.comparator(t.key,e.key),this.keyedMap=Ke(),this.sortedSet=new Fe(this.comparator)}static emptySet(t){return new Ri(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ri))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Ri;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(){this.Jr=new Fe(Z.comparator)}track(t){const e=t.doc.key,n=this.Jr.get(e);n?0!==t.type&&3===n.type?this.Jr=this.Jr.insert(e,t):3===t.type&&1!==n.type?this.Jr=this.Jr.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Jr=this.Jr.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Jr=this.Jr.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Jr=this.Jr.remove(e):1===t.type&&2===n.type?this.Jr=this.Jr.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Jr=this.Jr.insert(e,{type:2,doc:t.doc}):m():this.Jr=this.Jr.insert(e,t)}Yr(){const t=[];return this.Jr.inorderTraversal((e,n)=>{t.push(n)}),t}}class Fi{constructor(t,e,n,r,i,o,s,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=s,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,r){const i=[];return e.forEach(t=>{i.push({type:0,doc:t})}),new Fi(t,e,Ri.emptySet(e),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Qt(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(){this.Xr=void 0,this.listeners=[]}}class Ui{constructor(){this.queries=new br(t=>Xt(t),Qt),this.onlineState="Unknown",this.Zr=new Set}}async function Bi(t,e){const n=v(t),r=e.query;let i=!1,o=n.queries.get(r);if(o||(i=!0,o=new Vi),i)try{o.Xr=await n.onListen(r)}catch(t){const n=Pi(t,`Initialization of query '${Yt(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,o),o.listeners.push(e),e.eo(n.onlineState),o.Xr&&e.no(o.Xr)&&Gi(n)}async function qi(t,e){const n=v(t),r=e.query;let i=!1;const o=n.queries.get(r);if(o){const t=o.listeners.indexOf(e);t>=0&&(o.listeners.splice(t,1),i=0===o.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function $i(t,e){const n=v(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.no(i)&&(r=!0);e.Xr=i}}r&&Gi(n)}function zi(t,e,n){const r=v(t),i=r.queries.get(e);if(i)for(const o of i.listeners)o.onError(n);r.queries.delete(e)}function Gi(t){t.Zr.forEach(t=>{t.next()})}class Ki{constructor(t,e,n){this.query=t,this.so=e,this.io=!1,this.ro=null,this.onlineState="Unknown",this.options=n||{}}no(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Fi(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.io?this.oo(t)&&(this.so.next(t),e=!0):this.ao(t,this.onlineState)&&(this.co(t),e=!0),this.ro=t,e}onError(t){this.so.error(t)}eo(t){this.onlineState=t;let e=!1;return this.ro&&!this.io&&this.ao(this.ro,t)&&(this.co(this.ro),e=!0),e}ao(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.uo||!n)&&(!t.docs.isEmpty()||"Offline"===e)}oo(t){if(t.docChanges.length>0)return!0;const e=this.ro&&this.ro.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}co(t){t=Fi.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.io=!0,this.so.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hi{constructor(t){this.key=t}}class Wi{constructor(t){this.key=t}}class Qi{constructor(t,e){this.query=t,this._o=e,this.mo=null,this.current=!1,this.yo=Xe(),this.mutatedKeys=Xe(),this.po=Zt(t),this.Eo=new Ri(this.po)}get To(){return this._o}Io(t,e){const n=e?e.Ao:new Mi,r=e?e.Eo:this.Eo;let i=e?e.mutatedKeys:this.mutatedKeys,o=r,s=!1;const a=Bt(this.query)&&r.size===this.query.limit?r.last():null,c=qt(this.query)&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((t,e)=>{const u=r.get(t),l=Jt(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),f=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let d=!1;u&&l?u.data.isEqual(l.data)?h!==f&&(n.track({type:3,doc:l}),d=!0):this.Ro(u,l)||(n.track({type:2,doc:l}),d=!0,(a&&this.po(l,a)>0||c&&this.po(l,c)<0)&&(s=!0)):!u&&l?(n.track({type:0,doc:l}),d=!0):u&&!l&&(n.track({type:1,doc:u}),d=!0,(a||c)&&(s=!0)),d&&(l?(o=o.add(l),i=f?i.add(t):i.delete(t)):(o=o.delete(t),i=i.delete(t)))}),Bt(this.query)||qt(this.query))for(;o.size>this.query.limit;){const t=Bt(this.query)?o.last():o.first();o=o.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Eo:o,Ao:n,Ln:s,mutatedKeys:i}}Ro(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Eo;this.Eo=t.Eo,this.mutatedKeys=t.mutatedKeys;const i=t.Ao.Yr();i.sort((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return m()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.po(t.doc,e.doc)),this.bo(n);const o=e?this.Po():[],s=0===this.yo.size&&this.current?1:0,a=s!==this.mo;return this.mo=s,0!==i.length||a?{snapshot:new Fi(this.query,t.Eo,r,i,t.mutatedKeys,0===s,a,!1),vo:o}:{vo:o}}eo(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Eo:this.Eo,Ao:new Mi,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{vo:[]}}Vo(t){return!this._o.has(t)&&!!this.Eo.has(t)&&!this.Eo.get(t).hasLocalMutations}bo(t){t&&(t.addedDocuments.forEach(t=>this._o=this._o.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this._o=this._o.delete(t)),this.current=t.current)}Po(){if(!this.current)return[];const t=this.yo;this.yo=Xe(),this.Eo.forEach(t=>{this.Vo(t.key)&&(this.yo=this.yo.add(t.key))});const e=[];return t.forEach(t=>{this.yo.has(t)||e.push(new Wi(t))}),this.yo.forEach(n=>{t.has(n)||e.push(new Hi(n))}),e}So(t){this._o=t.Gn,this.yo=Xe();const e=this.Io(t.documents);return this.applyChanges(e,!0)}Do(){return Fi.fromInitialDocuments(this.query,this.Eo,this.mutatedKeys,0===this.mo)}}class Xi{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Yi{constructor(t){this.key=t,this.Co=!1}}class Ji{constructor(t,e,n,r,i,o){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.No={},this.xo=new br(t=>Xt(t),Qt),this.ko=new Map,this.$o=new Set,this.Oo=new Fe(Z.comparator),this.Fo=new Map,this.Mo=new Rr,this.Lo={},this.Bo=new Map,this.Uo=yr.ie(),this.onlineState="Unknown",this.qo=void 0}get isPrimaryClient(){return!0===this.qo}}async function Zi(t,e){const n=bo(t);let r,i;const o=n.xo.get(e);if(o)r=o.targetId,n.sharedClientState.addLocalQueryTarget(r),i=o.view.Do();else{const t=await Nr(n.localStore,Ht(e)),o=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await to(n,e,r,"current"===o),n.isPrimaryClient&&ui(n.remoteStore,t)}return i}async function to(t,e,n,r){t.Ko=(e,n,r)=>async function(t,e,n,r){let i=e.view.Io(n);i.Ln&&(i=await Lr(t.localStore,e.query,!1).then(({documents:t})=>e.view.Io(t,i)));const o=r&&r.targetChanges.get(e.targetId),s=e.view.applyChanges(i,t.isPrimaryClient,o);return fo(t,e.targetId,s.vo),s.snapshot}(t,e,n,r);const i=await Lr(t.localStore,e,!0),o=new Qi(e,i.Gn),s=o.Io(i.documents),a=tn.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState),c=o.applyChanges(s,t.isPrimaryClient,a);fo(t,n,c.vo);const u=new Xi(e,n,o);return t.xo.set(e,u),t.ko.has(n)?t.ko.get(n).push(e):t.ko.set(n,[e]),c.snapshot}async function eo(t,e){const n=v(t),r=n.xo.get(e),i=n.ko.get(r.targetId);if(i.length>1)return n.ko.set(r.targetId,i.filter(t=>!Qt(t,e))),void n.xo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Dr(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),li(n.remoteStore,r.targetId),lo(n,r.targetId)}).catch(vr)):(lo(n,r.targetId),await Dr(n.localStore,r.targetId,!0))}async function no(t,e,n){const r=wo(t);try{const t=await function(t,e){const n=v(t),r=N.now(),i=e.reduce((t,e)=>t.add(e.key),Xe());let o;return n.persistence.runTransaction("Locally write mutations","readwrite",t=>n.Qn.Pn(t,i).next(i=>{o=i;const s=[];for(const t of e){const e=Oe(t,o.get(t.key));null!=e&&s.push(new je(t.key,e,pt(e.value.mapValue),ve.exists(!0)))}return n.In.addMutationBatch(t,r,s,e)})).then(t=>(t.applyToLocalDocumentSet(o),{batchId:t.batchId,changes:o}))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.Lo[t.currentUser.toKey()];r||(r=new Fe(x)),r=r.insert(e,n),t.Lo[t.currentUser.toKey()]=r}(r,t.batchId,n),await mo(r,t.changes),await _i(r.remoteStore)}catch(t){const e=Pi(t,"Failed to persist write");n.reject(e)}}async function ro(t,e){const n=v(t);try{const t=await Cr(n.localStore,e);e.targetChanges.forEach((t,e)=>{const r=n.Fo.get(e);r&&(y(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.Co=!0:t.modifiedDocuments.size>0?y(r.Co):t.removedDocuments.size>0&&(y(r.Co),r.Co=!1))}),await mo(n,t,e)}catch(t){await vr(t)}}function io(t,e,n){const r=v(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.xo.forEach((n,r)=>{const i=r.view.eo(e);i.snapshot&&t.push(i.snapshot)}),function(t,e){const n=v(t);n.onlineState=e;let r=!1;n.queries.forEach((t,n)=>{for(const i of n.listeners)i.eo(e)&&(r=!0)}),r&&Gi(n)}(r.eventManager,e),t.length&&r.No.Tr(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function oo(t,e,n){const r=v(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fo.get(e),o=i&&i.key;if(o){let t=new Fe(Z.comparator);t=t.insert(o,gt.newNoDocument(o,D.min()));const n=Xe().add(o),i=new Ze(D.min(),new Map,new Be(x),t,n);await ro(r,i),r.Oo=r.Oo.remove(o),r.Fo.delete(e),go(r)}else await Dr(r.localStore,e,!1).then(()=>lo(r,e,n)).catch(vr)}async function so(t,e){const n=v(t),r=e.batch.batchId;try{const t=await jr(n.localStore,e);uo(n,r,null),co(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await mo(n,t)}catch(t){await vr(t)}}async function ao(t,e,n){const r=v(t);try{const t=await function(t,e){const n=v(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",t=>{let r;return n.In.lookupMutationBatch(t,e).next(e=>(y(null!==e),r=e.keys(),n.In.removeMutationBatch(t,e))).next(()=>n.In.performConsistencyCheck(t)).next(()=>n.Qn.Pn(t,r))})}(r.localStore,e);uo(r,e,n),co(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await mo(r,t)}catch(n){await vr(n)}}function co(t,e){(t.Bo.get(e)||[]).forEach(t=>{t.resolve()}),t.Bo.delete(e)}function uo(t,e,n){const r=v(t);let i=r.Lo[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.Lo[r.currentUser.toKey()]=i}}function lo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ko.get(e))t.xo.delete(r),n&&t.No.jo(r,n);t.ko.delete(e),t.isPrimaryClient&&t.Mo.cs(e).forEach(e=>{t.Mo.containsKey(e)||ho(t,e)})}function ho(t,e){t.$o.delete(e.path.canonicalString());const n=t.Oo.get(e);null!==n&&(li(t.remoteStore,n),t.Oo=t.Oo.remove(e),t.Fo.delete(n),go(t))}function fo(t,e,n){for(const r of n)r instanceof Hi?(t.Mo.addReference(r.key,e),po(t,r)):r instanceof Wi?(f("SyncEngine","Document no longer in limbo: "+r.key),t.Mo.removeReference(r.key,e),t.Mo.containsKey(r.key)||ho(t,r.key)):m()}function po(t,e){const n=e.key,r=n.path.canonicalString();t.Oo.get(n)||t.$o.has(r)||(f("SyncEngine","New document in limbo: "+n),t.$o.add(r),go(t))}function go(t){for(;t.$o.size>0&&t.Oo.size<t.maxConcurrentLimboResolutions;){const e=t.$o.values().next().value;t.$o.delete(e);const n=new Z(F.fromString(e)),r=t.Uo.next();t.Fo.set(r,new Yi(n)),t.Oo=t.Oo.insert(n,r),ui(t.remoteStore,new hr(Ht(Ut(n.path)),r,2,j.T))}}async function mo(t,e,n){const r=v(t),i=[],o=[],s=[];r.xo.isEmpty()||(r.xo.forEach((t,a)=>{s.push(r.Ko(a,e,n).then(t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=_r.kn(a.targetId,t);o.push(e)}}))}),await Promise.all(s),r.No.Tr(i),await async function(t,e){const n=v(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>ar.forEach(e,e=>ar.forEach(e.Nn,r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r)).next(()=>ar.forEach(e.xn,r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))}catch(t){if(!cr(t))throw t;f("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.Un.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Un=n.Un.insert(t,i)}}}(r.localStore,o))}async function yo(t,e){const n=v(t);if(!n.currentUser.isEqual(e)){f("SyncEngine","User change. New user:",e.toKey());const t=await Ir(n.localStore,e);n.currentUser=e,function(t,e){t.Bo.forEach(t=>{t.forEach(t=>{t.reject(new w(b.CANCELLED,e))})}),t.Bo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await mo(n,t.Wn)}}function vo(t,e){const n=v(t),r=n.Fo.get(e);if(r&&r.Co)return Xe().add(r.key);{let t=Xe();const r=n.ko.get(e);if(!r)return t;for(const e of r){const r=n.xo.get(e);t=t.unionWith(r.view.To)}return t}}function bo(t){const e=v(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ro.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=vo.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=oo.bind(null,e),e.No.Tr=$i.bind(null,e.eventManager),e.No.jo=zi.bind(null,e.eventManager),e}function wo(t){const e=v(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=so.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ao.bind(null,e),e}class Eo{constructor(){this.synchronizeTabs=!1}async initialize(t){this.N=Zr(t.databaseInfo.databaseId),this.sharedClientState=this.Wo(t),this.persistence=this.Go(t),await this.persistence.start(),this.gcScheduler=this.zo(t),this.localStore=this.Ho(t)}zo(t){return null}Ho(t){return Sr(this.persistence,new Or,t.initialUser,this.N)}Go(t){return new qr(zr.Ns,this.N)}Wo(t){return new Kr}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class _o{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>io(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=yo.bind(null,this.syncEngine),await ki(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Ui}createDatastore(t){const e=Zr(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new Yr(r));var r;return function(t,e,n){return new ii(t,e,n)}(t.credentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>io(this.syncEngine,t,0),o=Wr.bt()?new Wr:new Hr,new si(e,n,r,i,o);var e,n,r,i,o}createSyncEngine(t,e){return function(t,e,n,r,i,o,s){const a=new Ji(t,e,n,r,i,o);return s&&(a.qo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=v(t);f("RemoteStore","RemoteStore shutting down."),e.Kr.add(5),await ci(e),e.Qr.shutdown(),e.Wr.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oo{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Yo(this.observer.next,t)}error(t){this.observer.error?this.Yo(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Xo(){this.muted=!0}Yo(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class To{constructor(t,e,n){this.credentials=t,this.asyncQueue=e,this.databaseInfo=n,this.user=c.UNAUTHENTICATED,this.clientId=C.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(e,async t=>{f("FirestoreClient","Received user=",t.uid),await this.credentialListener(t),this.user=t})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.credentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new w(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new E;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),t.resolve()}catch(e){const n=Pi(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function So(t,e){t.asyncQueue.verifyOperationInProgress(),f("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async t=>{r.isEqual(t)||(await Ir(e.localStore,t),r=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Io(t,e){t.asyncQueue.verifyOperationInProgress();const n=await jo(t);f("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(t=>async function(t,e){const n=v(t);n.asyncQueue.verifyOperationInProgress(),f("RemoteStore","RemoteStore received new credentials");const r=gi(n);n.Kr.add(3),await ci(n),r&&n.Wr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Kr.delete(3),await ai(n)}(e.remoteStore,t)),t.onlineComponents=e}async function jo(t){return t.offlineComponents||(f("FirestoreClient","Using default OfflineComponentProvider"),await So(t,new Eo)),t.offlineComponents}async function Ao(t){return t.onlineComponents||(f("FirestoreClient","Using default OnlineComponentProvider"),await Io(t,new _o)),t.onlineComponents}function Co(t){return Ao(t).then(t=>t.syncEngine)}async function xo(t){const e=await Ao(t),n=e.eventManager;return n.onListen=Zi.bind(null,e.syncEngine),n.onUnlisten=eo.bind(null,e.syncEngine),n}function ko(t,e,n={}){const r=new E;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,i){const o=new Oo({next:o=>{e.enqueueAndForget(()=>qi(t,s));const a=o.docs.has(n);!a&&o.fromCache?i.reject(new w(b.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&o.fromCache&&r&&"server"===r.source?i.reject(new w(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(o)},error:t=>i.reject(t)}),s=new Ki(Ut(n.path),o,{includeMetadataChanges:!0,uo:!0});return Bi(t,s)}(await xo(t),t.asyncQueue,e,n,r)),r.promise}class No{constructor(t,e,n,r,i,o,s,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=s,this.useFetchStreams=a}}class Do{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Do&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(t,e,n){if(!n)throw new w(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Ro(t,e,n,r){if(!0===e&&!0===r)throw new w(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Mo(t){if(!Z.isDocumentKey(t))throw new w(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Fo(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=t.substring(0,20)+"..."),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){if(t.constructor){const e=/function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());if(e&&e.length>1)return e[1]}return null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":m()}function Vo(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new w(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Fo(t);throw new w(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Uo{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new w(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new w(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Ro("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(t,e){this._credentials=e,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Uo({}),this._settingsFrozen=!1,t instanceof Do?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new w(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Do(t.options.projectId)}(t))}get app(){if(!this._app)throw new w(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new w(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Uo(t),void 0!==t.credentials&&(this._credentials=function(t){if(!t)return new O;switch(t.type){case"gapi":t.client;return y(!("object"!=typeof r["d"]||null===r["d"]||!r["d"].auth||!r["d"].auth.getAuthHeaderValueForFirstParty)),new I(r["d"],t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new w(b.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Lo.get(t);e&&(f("ComponentProvider","Removing Datastore"),Lo.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qo{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zo(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new qo(this.firestore,t,this._key)}}class $o{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new $o(this.firestore,t,this._query)}}class zo extends $o{constructor(t,e,n){super(t,e,Ut(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new qo(this.firestore,null,new Z(t))}withConverter(t){return new zo(this.firestore,t,this._path)}}function Go(t,e,...n){if(t=Object(s["h"])(t),1===arguments.length&&(e=C.I()),Po("doc","path",e),t instanceof Bo){const r=F.fromString(e,...n);return Mo(r),new qo(t,null,new Z(r))}{if(!(t instanceof qo||t instanceof zo))throw new w(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(F.fromString(e,...n));return Mo(r),new qo(t.firestore,t instanceof zo?t.converter:null,new Z(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ko{constructor(){this.fa=Promise.resolve(),this.da=[],this.wa=!1,this._a=[],this.ma=null,this.ga=!1,this.ya=!1,this.pa=[],this.rr=new ti(this,"async_queue_retry"),this.Ea=()=>{const t=Jr();t&&f("AsyncQueue","Visibility state changed to "+t.visibilityState),this.rr.tr()};const t=Jr();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Ea)}get isShuttingDown(){return this.wa}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Ta(),this.Ia(t)}enterRestrictedMode(t){if(!this.wa){this.wa=!0,this.ya=t||!1;const e=Jr();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Ea)}}enqueue(t){if(this.Ta(),this.wa)return new Promise(()=>{});const e=new E;return this.Ia(()=>this.wa&&this.ya?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.da.push(t),this.Aa()))}async Aa(){if(0!==this.da.length){try{await this.da[0](),this.da.shift(),this.rr.reset()}catch(t){if(!cr(t))throw t;f("AsyncQueue","Operation failed with retryable error: "+t)}this.da.length>0&&this.rr.Xi(()=>this.Aa())}}Ia(t){const e=this.fa.then(()=>(this.ga=!0,t().catch(t=>{throw this.ma=t,this.ga=!1,d("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)),t}).then(t=>(this.ga=!1,t))));return this.fa=e,e}enqueueAfterDelay(t,e,n){this.Ta(),this.pa.indexOf(t)>-1&&(e=0);const r=Li.createAndSchedule(this,t,e,n,t=>this.Ra(t));return this._a.push(r),r}Ta(){this.ma&&m()}verifyOperationInProgress(){}async ba(){let t;do{t=this.fa,await t}while(t!==this.fa)}Pa(t){for(const e of this._a)if(e.timerId===t)return!0;return!1}va(t){return this.ba().then(()=>{this._a.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this._a)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.ba()})}Va(t){this.pa.push(t)}Ra(t){const e=this._a.indexOf(t);this._a.splice(e,1)}}class Ho extends Bo{constructor(t,e){super(t,e),this.type="firestore",this._queue=new Ko,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Xo(this),this._firestoreClient.terminate()}}function Wo(t=Object(r["e"])()){return Object(r["b"])(t,"firestore").getImmediate()}function Qo(t){return t._firestoreClient||Xo(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Xo(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new No(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new To(t._credentials,t._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yo{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new w(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new U(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jo{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Jo(q.fromBase64String(t))}catch(t){throw new w(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Jo(q.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new w(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new w(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return x(this._lat,t._lat)||x(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es=/^__.*__$/;class ns{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new je(t,this.data,this.fieldMask,e,this.fieldTransforms):new Ie(t,this.data,e,this.fieldTransforms)}}function rs(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw m()}}class is{constructor(t,e,n,r,i,o){this.settings=t,this.databaseId=e,this.N=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Sa(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Da(){return this.settings.Da}Ca(t){return new is(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Na(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Ca({path:n,xa:!1});return r.ka(t),r}$a(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Ca({path:n,xa:!1});return r.Sa(),r}Oa(t){return this.Ca({path:void 0,xa:!0})}Fa(t){return gs(t,this.settings.methodName,this.settings.Ma||!1,this.path,this.settings.La)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}Sa(){if(this.path)for(let t=0;t<this.path.length;t++)this.ka(this.path.get(t))}ka(t){if(0===t.length)throw this.Fa("Document fields must not be empty");if(rs(this.Da)&&es.test(t))throw this.Fa('Document fields cannot begin and end with "__"')}}class os{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.N=n||Zr(t)}Ba(t,e,n,r=!1){return new is({Da:t,methodName:e,La:n,path:U.emptyPath(),xa:!1,Ma:r},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function ss(t){const e=t._freezeSettings(),n=Zr(t._databaseId);return new os(t._databaseId,!!e.ignoreUndefinedProperties,n)}function as(t,e,n,r,i,o={}){const s=t.Ba(o.merge||o.mergeFields?2:0,e,n,i);hs("Data must be an object, but it was:",s,r);const a=us(r,s);let c,u;if(o.merge)c=new B(s.fieldMask),u=s.fieldTransforms;else if(o.mergeFields){const t=[];for(const r of o.mergeFields){const i=fs(e,r,n);if(!s.contains(i))throw new w(b.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);ms(t,i)||t.push(i)}c=new B(t),u=s.fieldTransforms.filter(t=>c.covers(t.field))}else c=null,u=s.fieldTransforms;return new ns(new dt(a),c,u)}function cs(t,e){if(ls(t=Object(s["h"])(t)))return hs("Unsupported field value:",e,t),us(t,e);if(t instanceof Zo)return function(t,e){if(!rs(e.Da))throw e.Fa(t._methodName+"() can only be used with update() and set()");if(!e.path)throw e.Fa(t._methodName+"() is not currently supported inside arrays");const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xa&&4!==e.Da)throw e.Fa("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=cs(i,e.Oa(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=Object(s["h"])(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return re(e.N,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=N.fromDate(t);return{timestampValue:fn(e.N,n)}}if(t instanceof N){const n=new N(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:fn(e.N,n)}}if(t instanceof ts)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Jo)return{bytesValue:dn(e.N,t._byteString)};if(t instanceof qo){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.Fa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:mn(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.Fa("Unsupported field value: "+Fo(t))}(t,e)}function us(t,e){const n={};return R(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):P(t,(t,r)=>{const i=cs(r,e.Na(t));null!=i&&(n[t]=i)}),{mapValue:{fields:n}}}function ls(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof N||t instanceof ts||t instanceof Jo||t instanceof qo||t instanceof Zo)}function hs(t,e,n){if(!ls(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=Fo(n);throw"an object"===r?e.Fa(t+" a custom object"):e.Fa(t+" "+r)}}function fs(t,e,n){if((e=Object(s["h"])(e))instanceof Yo)return e._internalPath;if("string"==typeof e)return ps(t,e);throw gs("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const ds=new RegExp("[~\\*/\\[\\]]");function ps(t,e,n){if(e.search(ds)>=0)throw gs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Yo(...e.split("."))._internalPath}catch(r){throw gs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function gs(t,e,n,r,i){const o=r&&!r.isEmpty(),s=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(o||s)&&(c+=" (found",o&&(c+=" in field "+r),s&&(c+=" in document "+i),c+=")"),new w(b.INVALID_ARGUMENT,a+t+c)}function ms(t,e){return t.some(t=>t.isEqual(e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new qo(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new vs(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(bs("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class vs extends ys{data(){return super.data()}}function bs(t,e){return"string"==typeof e?ps(t,e):e instanceof Yo?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Es extends ys{constructor(t,e,n,r,i,o){super(t,e,n,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new _s(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(bs("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class _s extends Es{data(t={}){return super.data(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Os{convertValue(t,e="none"){switch(tt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return G(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(K(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw m()}}convertObject(t,e){const n={};return P(t.fields,(t,r)=>{n[t]=this.convertValue(r,e)}),n}convertGeoPoint(t){return new ts(G(t.latitude),G(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":W(t);return null==r["c"]?null:this.convertValue(r["c"],e);case"estimate":return this.convertTimestamp(Q(t));default:return null}}convertTimestamp(t){const e=z(t);return new N(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=F.fromString(t);y(qn(n));const r=new Do(n.get(1),n.get(3)),i=new Z(n.popFirst(5));return r.isEqual(e)||d(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ss(t){t=Vo(t,qo);const e=Vo(t.firestore,Ho);return ko(Qo(e),t._key).then(n=>Cs(e,t,n))}class Is extends Os{constructor(t){super(),this.firestore=t}convertBytes(t){return new Jo(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new qo(this.firestore,null,e)}}function js(t,e,n){t=Vo(t,qo);const r=Vo(t.firestore,Ho),i=Ts(t.converter,e,n);return As(r,[as(ss(r),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,ve.none())])}function As(t,e){return function(t,e){const n=new E;return t.asyncQueue.enqueueAndForget(async()=>no(await Co(t),e,n)),n.promise}(Qo(t),e)}function Cs(t,e,n){const r=n.docs.get(e._key),i=new Is(t);return new Es(t,i,e._key,r,new ws(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xs;!function(t){u=t}(r["a"]),Object(r["c"])(new i["a"]("firestore",(t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=new Ho(n,new T(t.getProvider("auth-internal")));return e=Object.assign({useFetchStreams:!0},e),r._setSettings(e),r},"PUBLIC")),Object(r["g"])("@firebase/firestore","3.0.2",xs)}).call(this,n("4362"))},"0b42":function(t,e,n){var r=n("861d"),i=n("e8b5"),o=n("b622"),s=o("species");t.exports=function(t){var e;return i(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!i(e.prototype)?r(e)&&(e=e[s],null===e&&(e=void 0)):e=void 0),void 0===e?Array:e}},"0cfb":function(t,e,n){var r=n("83ab"),i=n("d039"),o=n("cc12");t.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},"159b":function(t,e,n){var r=n("da84"),i=n("fdbc"),o=n("785a"),s=n("17c2"),a=n("9112"),c=function(t){if(t&&t.forEach!==s)try{a(t,"forEach",s)}catch(e){t.forEach=s}};for(var u in i)c(r[u]&&r[u].prototype);c(o)},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,i=n("a640"),o=i("forEach");t.exports=o?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"19aa":function(t,e){t.exports=function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return t}},"1be4":function(t,e,n){var r=n("d066");t.exports=r("document","documentElement")},"1c0b":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},"1c7e":function(t,e,n){var r=n("b622"),i=r("iterator"),o=!1;try{var s=0,a={next:function(){return{done:!!s++}},return:function(){o=!0}};a[i]=function(){return this},Array.from(a,(function(){throw 2}))}catch(c){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch(c){}return n}},"1cdc":function(t,e,n){var r=n("342f");t.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},"1d80":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},"1da1":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("d3b7");function r(t,e,n,r,i,o,s){try{var a=t[o](s),c=a.value}catch(u){return void n(u)}a.done?e(c):Promise.resolve(c).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var s=t.apply(e,n);function a(t){r(s,i,o,a,c,"next",t)}function c(t){r(s,i,o,a,c,"throw",t)}a(void 0)}))}}},"1dde":function(t,e,n){var r=n("d039"),i=n("b622"),o=n("2d00"),s=i("species");t.exports=function(t){return o>=51||!r((function(){var e=[],n=e.constructor={};return n[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},2266:function(t,e,n){var r=n("825a"),i=n("e95a"),o=n("50c4"),s=n("0366"),a=n("9a1f"),c=n("35a1"),u=n("2a62"),l=function(t,e){this.stopped=t,this.result=e};t.exports=function(t,e,n){var h,f,d,p,g,m,y,v=n&&n.that,b=!(!n||!n.AS_ENTRIES),w=!(!n||!n.IS_ITERATOR),E=!(!n||!n.INTERRUPTED),_=s(e,v,1+b+E),O=function(t){return h&&u(h,"normal",t),new l(!0,t)},T=function(t){return b?(r(t),E?_(t[0],t[1],O):_(t[0],t[1])):E?_(t,O):_(t)};if(w)h=t;else{if(f=c(t),"function"!=typeof f)throw TypeError("Target is not iterable");if(i(f)){for(d=0,p=o(t.length);p>d;d++)if(g=T(t[d]),g&&g instanceof l)return g;return new l(!1)}h=a(t,f)}m=h.next;while(!(y=m.call(h)).done){try{g=T(y.value)}catch(S){u(h,"throw",S)}if("object"==typeof g&&g&&g instanceof l)return g}return new l(!1)}},"23cb":function(t,e,n){var r=n("a691"),i=Math.max,o=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):o(n,e)}},"23e7":function(t,e,n){var r=n("da84"),i=n("06cf").f,o=n("9112"),s=n("6eeb"),a=n("ce4e"),c=n("e893"),u=n("94ca");t.exports=function(t,e){var n,l,h,f,d,p,g=t.target,m=t.global,y=t.stat;if(l=m?r:y?r[g]||a(g,{}):(r[g]||{}).prototype,l)for(h in e){if(d=e[h],t.noTargetGet?(p=i(l,h),f=p&&p.value):f=l[h],n=u(m?h:g+(y?".":"#")+h,t.forced),!n&&void 0!==f){if(typeof d===typeof f)continue;c(d,f)}(t.sham||f&&f.sham)&&o(d,"sham",!0),s(l,h,d,t)}}},"241c":function(t,e,n){var r=n("ca84"),i=n("7839"),o=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},"260b":function(t,e,n){"use strict";var r=n("5606");n.d(e,"a",(function(){return r["f"]}));var i="firebase",o="9.0.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object(r["g"])(i,o,"app")},2626:function(t,e,n){"use strict";var r=n("d066"),i=n("9bf2"),o=n("b622"),s=n("83ab"),a=o("species");t.exports=function(t){var e=r(t),n=i.f;s&&e&&!e[a]&&n(e,a,{configurable:!0,get:function(){return this}})}},"2a62":function(t,e,n){var r=n("825a");t.exports=function(t,e,n){var i,o;r(t);try{if(i=t["return"],void 0===i){if("throw"===e)throw n;return n}i=i.call(t)}catch(s){o=!0,i=s}if("throw"===e)throw n;if(o)throw i;return r(i),n}},"2cf4":function(t,e,n){var r,i,o,s,a=n("da84"),c=n("d039"),u=n("0366"),l=n("1be4"),h=n("cc12"),f=n("1cdc"),d=n("605d"),p=a.setImmediate,g=a.clearImmediate,m=a.process,y=a.MessageChannel,v=a.Dispatch,b=0,w={},E="onreadystatechange";try{r=a.location}catch(I){}var _=function(t){if(w.hasOwnProperty(t)){var e=w[t];delete w[t],e()}},O=function(t){return function(){_(t)}},T=function(t){_(t.data)},S=function(t){a.postMessage(String(t),r.protocol+"//"+r.host)};p&&g||(p=function(t){var e=[],n=arguments.length,r=1;while(n>r)e.push(arguments[r++]);return w[++b]=function(){("function"==typeof t?t:Function(t)).apply(void 0,e)},i(b),b},g=function(t){delete w[t]},d?i=function(t){m.nextTick(O(t))}:v&&v.now?i=function(t){v.now(O(t))}:y&&!f?(o=new y,s=o.port2,o.port1.onmessage=T,i=u(s.postMessage,s,1)):a.addEventListener&&"function"==typeof postMessage&&!a.importScripts&&r&&"file:"!==r.protocol&&!c(S)?(i=S,a.addEventListener("message",T,!1)):i=E in h("script")?function(t){l.appendChild(h("script"))[E]=function(){l.removeChild(this),_(t)}}:function(t){setTimeout(O(t),0)}),t.exports={set:p,clear:g}},"2d00":function(t,e,n){var r,i,o=n("da84"),s=n("342f"),a=o.process,c=o.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l?(r=l.split("."),i=r[0]<4?1:r[0]+r[1]):s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=r[1]))),t.exports=i&&+i},"342f":function(t,e,n){var r=n("d066");t.exports=r("navigator","userAgent")||""},"35a1":function(t,e,n){var r=n("f5df"),i=n("3f8c"),o=n("b622"),s=o("iterator");t.exports=function(t){if(void 0!=t)return t[s]||t["@@iterator"]||i[r(t)]}},"37e8":function(t,e,n){var r=n("83ab"),i=n("9bf2"),o=n("825a"),s=n("df75");t.exports=r?Object.defineProperties:function(t,e){o(t);var n,r=s(e),a=r.length,c=0;while(a>c)i.f(t,n=r[c++],e[n]);return t}},"3bbe":function(t,e,n){var r=n("861d");t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},"3f4e":function(t,e,n){"use strict";n.d(e,"setupDevtoolsPlugin",(function(){return o}));var r=n("abc5"),i=n("b774");function o(t,e){const n=Object(r["a"])();if(n)n.emit(i["a"],t,e);else{const n=Object(r["b"])(),i=n.__VUE_DEVTOOLS_PLUGINS__=n.__VUE_DEVTOOLS_PLUGINS__||[];i.push({pluginDescriptor:t,setupFn:e})}}},"3f8c":function(t,e){t.exports={}},"428f":function(t,e,n){var r=n("da84");t.exports=r},4362:function(t,e,n){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,r="/";e.cwd=function(){return r},e.chdir=function(e){t||(t=n("df7c")),r=t.resolve(e,r)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"44ad":function(t,e,n){var r=n("d039"),i=n("c6b6"),o="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?o.call(t,""):Object(t)}:Object},"44d2":function(t,e,n){var r=n("b622"),i=n("7c73"),o=n("9bf2"),s=r("unscopables"),a=Array.prototype;void 0==a[s]&&o.f(a,s,{configurable:!0,value:i(null)}),t.exports=function(t){a[s][t]=!0}},"44de":function(t,e,n){var r=n("da84");t.exports=function(t,e){var n=r.console;n&&n.error&&(1===arguments.length?n.error(t):n.error(t,e))}},4840:function(t,e,n){var r=n("825a"),i=n("1c0b"),o=n("b622"),s=o("species");t.exports=function(t,e){var n,o=r(t).constructor;return void 0===o||void 0==(n=r(o)[s])?e:i(n)}},"485a":function(t,e,n){var r=n("861d");t.exports=function(t,e){var n,i;if("string"===e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if("string"!==e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},4930:function(t,e,n){var r=n("2d00"),i=n("d039");t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"4d64":function(t,e,n){var r=n("fc6a"),i=n("50c4"),o=n("23cb"),s=function(t){return function(e,n,s){var a,c=r(e),u=i(c.length),l=o(s,u);if(t&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},"4de4":function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").filter,o=n("1dde"),s=o("filter");r({target:"Array",proto:!0,forced:!s},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"50c4":function(t,e,n){var r=n("a691"),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},5135:function(t,e,n){var r=n("7b0b"),i={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,e){return i.call(r(t),e)}},5502:function(t,e,n){"use strict";n.d(e,"a",(function(){return Q})),n.d(e,"b",(function(){return J}));var r=n("7a23"),i=n("3f4e"),o="store";function s(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function a(t){return null!==t&&"object"===typeof t}function c(t){return t&&"function"===typeof t.then}function u(t,e){if(!t)throw new Error("[vuex] "+e)}function l(t,e){return function(){return t(e)}}function h(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function f(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;p(t,n,[],t._modules.root,!0),d(t,n,e)}function d(t,e,n){var i=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var o=t._wrappedGetters,a={};s(o,(function(e,n){a[n]=l(e,t),Object.defineProperty(t.getters,n,{get:function(){return a[n]()},enumerable:!0})})),t._state=Object(r["q"])({data:e}),t.strict&&w(t),i&&n&&t._withCommit((function(){i.data=null}))}function p(t,e,n,r,i){var o=!n.length,s=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[s]&&console.error("[vuex] duplicate namespace "+s+" for the namespaced module "+n.join("/")),t._modulesNamespaceMap[s]=r),!o&&!i){var a=E(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit((function(){c in a&&console.warn('[vuex] state field "'+c+'" was overridden by a module with the same name at "'+n.join(".")+'"'),a[c]=r.state}))}var u=r.context=g(t,s,n);r.forEachMutation((function(e,n){var r=s+n;y(t,r,e,u)})),r.forEachAction((function(e,n){var r=e.root?n:s+n,i=e.handler||e;v(t,r,i,u)})),r.forEachGetter((function(e,n){var r=s+n;b(t,r,e,u)})),r.forEachChild((function(r,o){p(t,e,n.concat(o),r,i)}))}function g(t,e,n){var r=""===e,i={dispatch:r?t.dispatch:function(n,r,i){var o=_(n,r,i),s=o.payload,a=o.options,c=o.type;if(a&&a.root||(c=e+c,t._actions[c]))return t.dispatch(c,s);console.error("[vuex] unknown local action type: "+o.type+", global type: "+c)},commit:r?t.commit:function(n,r,i){var o=_(n,r,i),s=o.payload,a=o.options,c=o.type;a&&a.root||(c=e+c,t._mutations[c])?t.commit(c,s,a):console.error("[vuex] unknown local mutation type: "+o.type+", global type: "+c)}};return Object.defineProperties(i,{getters:{get:r?function(){return t.getters}:function(){return m(t,e)}},state:{get:function(){return E(t.state,n)}}}),i}function m(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach((function(i){if(i.slice(0,r)===e){var o=i.slice(r);Object.defineProperty(n,o,{get:function(){return t.getters[i]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function y(t,e,n,r){var i=t._mutations[e]||(t._mutations[e]=[]);i.push((function(e){n.call(t,r.state,e)}))}function v(t,e,n,r){var i=t._actions[e]||(t._actions[e]=[]);i.push((function(e){var i=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e);return c(i)||(i=Promise.resolve(i)),t._devtoolHook?i.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):i}))}function b(t,e,n,r){t._wrappedGetters[e]?console.error("[vuex] duplicate getter key: "+e):t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)}}function w(t){Object(r["w"])((function(){return t._state.data}),(function(){u(t._committing,"do not mutate vuex store state outside mutation handlers.")}),{deep:!0,flush:"sync"})}function E(t,e){return e.reduce((function(t,e){return t[e]}),t)}function _(t,e,n){return a(t)&&t.type&&(n=e,e=t,t=t.type),u("string"===typeof t,"expects string as the type, but found "+typeof t+"."),{type:t,payload:e,options:n}}var O="vuex bindings",T="vuex:mutations",S="vuex:actions",I="vuex",j=0;function A(t,e){Object(i["setupDevtoolsPlugin"])({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[O]},(function(n){n.addTimelineLayer({id:T,label:"Vuex Mutations",color:C}),n.addTimelineLayer({id:S,label:"Vuex Actions",color:C}),n.addInspector({id:I,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===t&&n.inspectorId===I)if(n.filter){var r=[];P(r,e._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[L(e._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===t&&n.inspectorId===I){var r=n.nodeId;m(e,r),n.state=R(F(e._modules,r),"root"===r?e.getters:e._makeLocalGettersCache,r)}})),n.on.editInspectorState((function(n){if(n.app===t&&n.inspectorId===I){var r=n.nodeId,i=n.path;"root"!==r&&(i=r.split("/").filter(Boolean).concat(i)),e._withCommit((function(){n.set(e._state.data,i,n.state.value)}))}})),e.subscribe((function(t,e){var r={};t.payload&&(r.payload=t.payload),r.state=e,n.notifyComponentUpdate(),n.sendInspectorTree(I),n.sendInspectorState(I),n.addTimelineEvent({layerId:T,event:{time:Date.now(),title:t.type,data:r}})})),e.subscribeAction({before:function(t,e){var r={};t.payload&&(r.payload=t.payload),t._id=j++,t._time=Date.now(),r.state=e,n.addTimelineEvent({layerId:S,event:{time:t._time,title:t.type,groupId:t._id,subtitle:"start",data:r}})},after:function(t,e){var r={},i=Date.now()-t._time;r.duration={_custom:{type:"duration",display:i+"ms",tooltip:"Action duration",value:i}},t.payload&&(r.payload=t.payload),r.state=e,n.addTimelineEvent({layerId:S,event:{time:Date.now(),title:t.type,groupId:t._id,subtitle:"end",data:r}})}})}))}var C=8702998,x=6710886,k=16777215,N={label:"namespaced",textColor:k,backgroundColor:x};function D(t){return t&&"root"!==t?t.split("/").slice(-2,-1)[0]:"Root"}function L(t,e){return{id:e||"root",label:D(e),tags:t.namespaced?[N]:[],children:Object.keys(t._children).map((function(n){return L(t._children[n],e+n+"/")}))}}function P(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[N]:[]}),Object.keys(e._children).forEach((function(i){P(t,e._children[i],n,r+i+"/")}))}function R(t,e,n){e="root"===n?e:e[n];var r=Object.keys(e),i={state:Object.keys(t.state).map((function(e){return{key:e,editable:!0,value:t.state[e]}}))};if(r.length){var o=M(e);i.getters=Object.keys(o).map((function(t){return{key:t.endsWith("/")?D(t):t,editable:!1,value:V((function(){return o[t]}))}}))}return i}function M(t){var e={};return Object.keys(t).forEach((function(n){var r=n.split("/");if(r.length>1){var i=e,o=r.pop();r.forEach((function(t){i[t]||(i[t]={_custom:{value:{},display:t,tooltip:"Module",abstract:!0}}),i=i[t]._custom.value})),i[o]=V((function(){return t[n]}))}else e[n]=V((function(){return t[n]}))})),e}function F(t,e){var n=e.split("/").filter((function(t){return t}));return n.reduce((function(t,r,i){var o=t[r];if(!o)throw new Error('Missing module "'+r+'" for path "'+e+'".');return i===n.length-1?o:o._children}),"root"===e?t:t.root._children)}function V(t){try{return t()}catch(e){return e}}var U=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},B={namespaced:{configurable:!0}};B.namespaced.get=function(){return!!this._rawModule.namespaced},U.prototype.addChild=function(t,e){this._children[t]=e},U.prototype.removeChild=function(t){delete this._children[t]},U.prototype.getChild=function(t){return this._children[t]},U.prototype.hasChild=function(t){return t in this._children},U.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},U.prototype.forEachChild=function(t){s(this._children,t)},U.prototype.forEachGetter=function(t){this._rawModule.getters&&s(this._rawModule.getters,t)},U.prototype.forEachAction=function(t){this._rawModule.actions&&s(this._rawModule.actions,t)},U.prototype.forEachMutation=function(t){this._rawModule.mutations&&s(this._rawModule.mutations,t)},Object.defineProperties(U.prototype,B);var q=function(t){this.register([],t,!1)};function $(t,e,n){if(H(t,n),e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void console.warn("[vuex] trying to add a new module '"+r+"' on hot reloading, manual reload is needed");$(t.concat(r),e.getChild(r),n.modules[r])}}q.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},q.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")}),"")},q.prototype.update=function(t){$([],this.root,t)},q.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0),H(t,e);var i=new U(e,n);if(0===t.length)this.root=i;else{var o=this.get(t.slice(0,-1));o.addChild(t[t.length-1],i)}e.modules&&s(e.modules,(function(e,i){r.register(t.concat(i),e,n)}))},q.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],r=e.getChild(n);r?r.runtime&&e.removeChild(n):console.warn("[vuex] trying to unregister module '"+n+"', which is not registered")},q.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};var z={assert:function(t){return"function"===typeof t},expected:"function"},G={assert:function(t){return"function"===typeof t||"object"===typeof t&&"function"===typeof t.handler},expected:'function or object with "handler" function'},K={getters:z,mutations:z,actions:G};function H(t,e){Object.keys(K).forEach((function(n){if(e[n]){var r=K[n];s(e[n],(function(e,i){u(r.assert(e),W(t,n,i,e,r.expected))}))}}))}function W(t,e,n,r,i){var o=e+" should be "+i+' but "'+e+"."+n+'"';return t.length>0&&(o+=' in module "'+t.join(".")+'"'),o+=" is "+JSON.stringify(r)+".",o}function Q(t){return new X(t)}var X=function t(e){var n=this;void 0===e&&(e={}),u("undefined"!==typeof Promise,"vuex requires a Promise polyfill in this browser."),u(this instanceof t,"store must be called with the new operator.");var r=e.plugins;void 0===r&&(r=[]);var i=e.strict;void 0===i&&(i=!1);var o=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new q(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=o;var s=this,a=this,c=a.dispatch,l=a.commit;this.dispatch=function(t,e){return c.call(s,t,e)},this.commit=function(t,e,n){return l.call(s,t,e,n)},this.strict=i;var h=this._modules.root.state;p(this,h,[],this._modules.root),d(this,h),r.forEach((function(t){return t(n)}))},Y={state:{configurable:!0}};X.prototype.install=function(t,e){t.provide(e||o,this),t.config.globalProperties.$store=this;var n=void 0===this._devtools||this._devtools;n&&A(t,this)},Y.state.get=function(){return this._state.data},Y.state.set=function(t){u(!1,"use store.replaceState() to explicit replace store state.")},X.prototype.commit=function(t,e,n){var r=this,i=_(t,e,n),o=i.type,s=i.payload,a=i.options,c={type:o,payload:s},u=this._mutations[o];u?(this._withCommit((function(){u.forEach((function(t){t(s)}))})),this._subscribers.slice().forEach((function(t){return t(c,r.state)})),a&&a.silent&&console.warn("[vuex] mutation type: "+o+". Silent option has been removed. Use the filter functionality in the vue-devtools")):console.error("[vuex] unknown mutation type: "+o)},X.prototype.dispatch=function(t,e){var n=this,r=_(t,e),i=r.type,o=r.payload,s={type:i,payload:o},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(s,n.state)}))}catch(u){console.warn("[vuex] error in before action subscribers: "),console.error(u)}var c=a.length>1?Promise.all(a.map((function(t){return t(o)}))):a[0](o);return new Promise((function(t,e){c.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(s,n.state)}))}catch(u){console.warn("[vuex] error in after action subscribers: "),console.error(u)}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(s,n.state,t)}))}catch(u){console.warn("[vuex] error in error action subscribers: "),console.error(u)}e(t)}))}))}console.error("[vuex] unknown action type: "+i)},X.prototype.subscribe=function(t,e){return h(t,this._subscribers,e)},X.prototype.subscribeAction=function(t,e){var n="function"===typeof t?{before:t}:t;return h(n,this._actionSubscribers,e)},X.prototype.watch=function(t,e,n){var i=this;return u("function"===typeof t,"store.watch only accepts a function."),Object(r["w"])((function(){return t(i.state,i.getters)}),e,Object.assign({},n))},X.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._state.data=t}))},X.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),u(Array.isArray(t),"module path must be a string or an Array."),u(t.length>0,"cannot register the root module by using registerModule."),this._modules.register(t,e),p(this,this.state,t,this._modules.get(t),n.preserveState),d(this,this.state)},X.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),u(Array.isArray(t),"module path must be a string or an Array."),this._modules.unregister(t),this._withCommit((function(){var n=E(e.state,t.slice(0,-1));delete n[t[t.length-1]]})),f(this)},X.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),u(Array.isArray(t),"module path must be a string or an Array."),this._modules.isRegistered(t)},X.prototype.hotUpdate=function(t){this._modules.update(t),f(this,!0)},X.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(X.prototype,Y);et((function(t,e){var n={};return tt(e)||console.error("[vuex] mapState: mapper parameter must be either an Array or an Object"),Z(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=nt(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,e,n):e[i]},n[r].vuex=!0})),n})),et((function(t,e){var n={};return tt(e)||console.error("[vuex] mapMutations: mapper parameter must be either an Array or an Object"),Z(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var o=nt(this.$store,"mapMutations",t);if(!o)return;r=o.context.commit}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n}));var J=et((function(t,e){var n={};return tt(e)||console.error("[vuex] mapGetters: mapper parameter must be either an Array or an Object"),Z(e).forEach((function(e){var r=e.key,i=e.val;i=t+i,n[r]=function(){if(!t||nt(this.$store,"mapGetters",t)){if(i in this.$store.getters)return this.$store.getters[i];console.error("[vuex] unknown getter: "+i)}},n[r].vuex=!0})),n}));et((function(t,e){var n={};return tt(e)||console.error("[vuex] mapActions: mapper parameter must be either an Array or an Object"),Z(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var o=nt(this.$store,"mapActions",t);if(!o)return;r=o.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n}));function Z(t){return tt(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function tt(t){return Array.isArray(t)||a(t)}function et(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function nt(t,e,n){var r=t._modulesNamespaceMap[n];return r||console.error("[vuex] module namespace not found in "+e+"(): "+n),r}},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("b64b"),n("a4d3"),n("4de4"),n("e439"),n("159b"),n("dbb4");function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},5606:function(t,e,n){"use strict";n.d(e,"a",(function(){return H})),n.d(e,"b",(function(){return q})),n.d(e,"c",(function(){return B})),n.d(e,"d",(function(){return $})),n.d(e,"e",(function(){return Q})),n.d(e,"f",(function(){return W})),n.d(e,"g",(function(){return X}));var r=n("ffa6"),i=n("abfd"),o=n("a8e9");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class s{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map(t=>{if(a(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}function a(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const c="@firebase/app",u="0.7.0",l=new i["b"]("@firebase/app"),h="@firebase/app-compat",f="@firebase/analytics-compat",d="@firebase/analytics",p="@firebase/app-check-compat",g="@firebase/app-check",m="@firebase/auth",y="@firebase/auth-compat",v="@firebase/database",b="@firebase/database-compat",w="@firebase/functions",E="@firebase/functions-compat",_="@firebase/installations",O="@firebase/installations-compat",T="@firebase/messaging",S="@firebase/messaging-compat",I="@firebase/performance",j="@firebase/performance-compat",A="@firebase/remote-config",C="@firebase/remote-config-compat",x="@firebase/storage",k="@firebase/storage-compat",N="@firebase/firestore",D="@firebase/firestore-compat",L="firebase",P="9.0.0",R="[DEFAULT]",M={[c]:"fire-core",[h]:"fire-core-compat",[d]:"fire-analytics",[f]:"fire-analytics-compat",[g]:"fire-app-check",[p]:"fire-app-check-compat",[m]:"fire-auth",[y]:"fire-auth-compat",[v]:"fire-rtdb",[b]:"fire-rtdb-compat",[w]:"fire-fn",[E]:"fire-fn-compat",[_]:"fire-iid",[O]:"fire-iid-compat",[T]:"fire-fcm",[S]:"fire-fcm-compat",[I]:"fire-perf",[j]:"fire-perf-compat",[A]:"fire-rc",[C]:"fire-rc-compat",[x]:"fire-gcs",[k]:"fire-gcs-compat",[N]:"fire-fst",[D]:"fire-fst-compat","fire-js":"fire-js",[L]:"fire-js-all"},F=new Map,V=new Map;function U(t,e){try{t.container.addComponent(e)}catch(n){l.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function B(t){const e=t.name;if(V.has(e))return l.debug(`There were multiple attempts to register component ${e}.`),!1;V.set(e,t);for(const n of F.values())U(n,t);return!0}function q(t,e){return t.container.getProvider(e)}function $(t,e,n=R){q(t,e).clearInstance(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const z={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},G=new o["b"]("app","Firebase",z);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class K{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw G.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H=P;function W(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:R,automaticDataCollectionEnabled:!1},e),i=n.name;if("string"!==typeof i||!i)throw G.create("bad-app-name",{appName:String(i)});const s=F.get(i);if(s){if(Object(o["g"])(t,s.options)&&Object(o["g"])(n,s.config))return s;throw G.create("duplicate-app",{appName:i})}const a=new r["b"](i);for(const r of V.values())a.addComponent(r);const c=new K(t,n,a);return F.set(i,c),c}function Q(t=R){const e=F.get(t);if(!e)throw G.create("no-app",{appName:t});return e}function X(t,e,n){var i;let o=null!==(i=M[t])&&void 0!==i?i:t;n&&(o+="-"+n);const s=o.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const t=[`Unable to register library "${o}" with version "${e}":`];return s&&t.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void l.warn(t.join(" "))}B(new r["a"](o+"-version",()=>({library:o,version:e}),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Y(t){B(new r["a"]("platform-logger",t=>new s(t),"PRIVATE")),X(c,u,t),X("fire-js","")}Y()},5692:function(t,e,n){var r=n("c430"),i=n("c6cd");(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.17.3",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},"56ef":function(t,e,n){var r=n("d066"),i=n("241c"),o=n("7418"),s=n("825a");t.exports=r("Reflect","ownKeys")||function(t){var e=i.f(s(t)),n=o.f;return n?e.concat(n(t)):e}},"577e":function(t,e,n){var r=n("d9b5");t.exports=function(t){if(r(t))throw TypeError("Cannot convert a Symbol value to a string");return String(t)}},"5c6c":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"605d":function(t,e,n){var r=n("c6b6"),i=n("da84");t.exports="process"==r(i.process)},6069:function(t,e){t.exports="object"==typeof window},"60da":function(t,e,n){"use strict";var r=n("83ab"),i=n("d039"),o=n("df75"),s=n("7418"),a=n("d1e7"),c=n("7b0b"),u=n("44ad"),l=Object.assign,h=Object.defineProperty;t.exports=!l||i((function(){if(r&&1!==l({b:1},l(h({},"a",{enumerable:!0,get:function(){h(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol(),i="abcdefghijklmnopqrst";return t[n]=7,i.split("").forEach((function(t){e[t]=t})),7!=l({},t)[n]||o(l({},e)).join("")!=i}))?function(t,e){var n=c(t),i=arguments.length,l=1,h=s.f,f=a.f;while(i>l){var d,p=u(arguments[l++]),g=h?o(p).concat(h(p)):o(p),m=g.length,y=0;while(m>y)d=g[y++],r&&!f.call(p,d)||(n[d]=p[d])}return n}:l},"65f0":function(t,e,n){var r=n("0b42");t.exports=function(t,e){return new(r(t))(0===e?0:e)}},"69f3":function(t,e,n){var r,i,o,s=n("7f9a"),a=n("da84"),c=n("861d"),u=n("9112"),l=n("5135"),h=n("c6cd"),f=n("f772"),d=n("d012"),p="Object already initialized",g=a.WeakMap,m=function(t){return o(t)?i(t):r(t,{})},y=function(t){return function(e){var n;if(!c(e)||(n=i(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}};if(s||h.state){var v=h.state||(h.state=new g),b=v.get,w=v.has,E=v.set;r=function(t,e){if(w.call(v,t))throw new TypeError(p);return e.facade=t,E.call(v,t,e),e},i=function(t){return b.call(v,t)||{}},o=function(t){return w.call(v,t)}}else{var _=f("state");d[_]=!0,r=function(t,e){if(l(t,_))throw new TypeError(p);return e.facade=t,u(t,_,e),e},i=function(t){return l(t,_)?t[_]:{}},o=function(t){return l(t,_)}}t.exports={set:r,get:i,has:o,enforce:m,getterFor:y}},"6c02":function(t,e,n){"use strict";n.d(e,"a",(function(){return Zt})),n.d(e,"b",(function(){return z}));var r=n("7a23");n("3f4e");
/*!
  * vue-router v4.0.11
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
const i="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,o=t=>i?Symbol(t):"_vr_"+t,s=o("rvlm"),a=o("rvd"),c=o("r"),u=o("rl"),l=o("rvl"),h="undefined"!==typeof window;function f(t){return t.__esModule||i&&"Module"===t[Symbol.toStringTag]}const d=Object.assign;function p(t,e){const n={};for(const r in e){const i=e[r];n[r]=Array.isArray(i)?i.map(t):t(i)}return n}const g=()=>{};const m=/\/$/,y=t=>t.replace(m,"");function v(t,e,n="/"){let r,i={},o="",s="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),o=e.slice(a+1,c>-1?c:e.length),i=t(o)),c>-1&&(r=r||e.slice(0,c),s=e.slice(c,e.length)),r=I(null!=r?r:e,n),{fullPath:r+(o&&"?")+o+s,path:r,query:i,hash:s}}function b(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function w(t,e){return e&&t.toLowerCase().startsWith(e.toLowerCase())?t.slice(e.length)||"/":t}function E(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&_(e.matched[r],n.matched[i])&&O(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function _(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function O(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!T(t[n],e[n]))return!1;return!0}function T(t,e){return Array.isArray(t)?S(t,e):Array.isArray(e)?S(e,t):t===e}function S(t,e){return Array.isArray(e)?t.length===e.length&&t.every((t,n)=>t===e[n]):1===t.length&&t[0]===e}function I(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let i,o,s=n.length-1;for(i=0;i<r.length;i++)if(o=r[i],1!==s&&"."!==o){if(".."!==o)break;s--}return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var j,A;(function(t){t["pop"]="pop",t["push"]="push"})(j||(j={})),function(t){t["back"]="back",t["forward"]="forward",t["unknown"]=""}(A||(A={}));function C(t){if(!t)if(h){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return"/"!==t[0]&&"#"!==t[0]&&(t="/"+t),y(t)}const x=/^[^#]+#/;function k(t,e){return t.replace(x,"#")+e}function N(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const D=()=>({left:window.pageXOffset,top:window.pageYOffset});function L(t){let e;if("el"in t){const n=t.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=N(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(null!=e.left?e.left:window.pageXOffset,null!=e.top?e.top:window.pageYOffset)}function P(t,e){const n=history.state?history.state.position-e:-1;return n+t}const R=new Map;function M(t,e){R.set(t,e)}function F(t){const e=R.get(t);return R.delete(t),e}let V=()=>location.protocol+"//"+location.host;function U(t,e){const{pathname:n,search:r,hash:i}=e,o=t.indexOf("#");if(o>-1){let e=i.includes(t.slice(o))?t.slice(o).length:1,n=i.slice(e);return"/"!==n[0]&&(n="/"+n),w(n,"")}const s=w(n,t);return s+r+i}function B(t,e,n,r){let i=[],o=[],s=null;const a=({state:o})=>{const a=U(t,location),c=n.value,u=e.value;let l=0;if(o){if(n.value=a,e.value=o,s&&s===c)return void(s=null);l=u?o.position-u.position:0}else r(a);i.forEach(t=>{t(n.value,c,{delta:l,type:j.pop,direction:l?l>0?A.forward:A.back:A.unknown})})};function c(){s=n.value}function u(t){i.push(t);const e=()=>{const e=i.indexOf(t);e>-1&&i.splice(e,1)};return o.push(e),e}function l(){const{history:t}=window;t.state&&t.replaceState(d({},t.state,{scroll:D()}),"")}function h(){for(const t of o)t();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function q(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?D():null}}function $(t){const{history:e,location:n}=window,r={value:U(t,n)},i={value:e.state};function o(r,o,s){const a=t.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?t:t.slice(a))+r:V()+t+r;try{e[s?"replaceState":"pushState"](o,"",c),i.value=o}catch(u){console.error(u),n[s?"replace":"assign"](c)}}function s(t,n){const s=d({},e.state,q(i.value.back,t,i.value.forward,!0),n,{position:i.value.position});o(t,s,!0),r.value=t}function a(t,n){const s=d({},i.value,e.state,{forward:t,scroll:D()});o(s.current,s,!0);const a=d({},q(r.value,t,null),{position:s.position+1},n);o(t,a,!1),r.value=t}return i.value||o(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:a,replace:s}}function z(t){t=C(t);const e=$(t),n=B(t,e.state,e.location,e.replace);function r(t,e=!0){e||n.pauseListeners(),history.go(t)}const i=d({location:"",base:t,go:r,createHref:k.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function G(t){return"string"===typeof t||t&&"object"===typeof t}function K(t){return"string"===typeof t||"symbol"===typeof t}const H={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},W=o("nf");var Q;(function(t){t[t["aborted"]=4]="aborted",t[t["cancelled"]=8]="cancelled",t[t["duplicated"]=16]="duplicated"})(Q||(Q={}));function X(t,e){return d(new Error,{type:t,[W]:!0},e)}function Y(t,e){return t instanceof Error&&W in t&&(null==e||!!(t.type&e))}const J="[^/]+?",Z={sensitive:!1,strict:!1,start:!0,end:!0},tt=/[.+*?^${}()[\]/\\]/g;function et(t,e){const n=d({},Z,e),r=[];let i=n.start?"^":"";const o=[];for(const l of t){const t=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let e=0;e<l.length;e++){const r=l[e];let s=40+(n.sensitive?.25:0);if(0===r.type)e||(i+="/"),i+=r.value.replace(tt,"\\$&"),s+=40;else if(1===r.type){const{value:t,repeatable:n,optional:a,regexp:c}=r;o.push({name:t,repeatable:n,optional:a});const h=c||J;if(h!==J){s+=10;try{new RegExp(`(${h})`)}catch(u){throw new Error(`Invalid custom RegExp for param "${t}" (${h}): `+u.message)}}let f=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;e||(f=a&&l.length<2?`(?:/${f})`:"/"+f),a&&(f+="?"),i+=f,s+=20,a&&(s+=-8),n&&(s+=-20),".*"===h&&(s+=-50)}t.push(s)}r.push(t)}if(n.strict&&n.end){const t=r.length-1;r[t][r[t].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const s=new RegExp(i,n.sensitive?"":"i");function a(t){const e=t.match(s),n={};if(!e)return null;for(let r=1;r<e.length;r++){const t=e[r]||"",i=o[r-1];n[i.name]=t&&i.repeatable?t.split("/"):t}return n}function c(e){let n="",r=!1;for(const i of t){r&&n.endsWith("/")||(n+="/"),r=!1;for(const t of i)if(0===t.type)n+=t.value;else if(1===t.type){const{value:o,repeatable:s,optional:a}=t,c=o in e?e[o]:"";if(Array.isArray(c)&&!s)throw new Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);const u=Array.isArray(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${o}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n}return{re:s,score:r,keys:o,parse:a,stringify:c}}function nt(t,e){let n=0;while(n<t.length&&n<e.length){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?1===t.length&&80===t[0]?-1:1:t.length>e.length?1===e.length&&80===e[0]?1:-1:0}function rt(t,e){let n=0;const r=t.score,i=e.score;while(n<r.length&&n<i.length){const t=nt(r[n],i[n]);if(t)return t;n++}return i.length-r.length}const it={type:0,value:""},ot=/[a-zA-Z0-9_]/;function st(t){if(!t)return[[]];if("/"===t)return[[it]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(t){throw new Error(`ERR (${n})/"${u}": ${t}`)}let n=0,r=n;const i=[];let o;function s(){o&&i.push(o),o=[]}let a,c=0,u="",l="";function h(){u&&(0===n?o.push({type:0,value:u}):1===n||2===n||3===n?(o.length>1&&("*"===a||"+"===a)&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):e("Invalid state to consume buffer"),u="")}function f(){u+=a}while(c<t.length)if(a=t[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),s()):":"===a?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:"("===a?n=2:ot.test(a)?f():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:e("Unknown state");break}else r=n,n=4;return 2===n&&e(`Unfinished custom RegExp for param "${u}"`),h(),s(),i}function at(t,e,n){const r=et(st(t.path),n);const i=d(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf===!e.record.aliasOf&&e.children.push(i),i}function ct(t,e){const n=[],r=new Map;function i(t){return r.get(t)}function o(t,n,r){const i=!r,a=lt(t);a.aliasOf=r&&r.record;const u=pt(e,t),l=[a];if("alias"in t){const e="string"===typeof t.alias?[t.alias]:t.alias;for(const t of e)l.push(d({},a,{components:r?r.record.components:a.components,path:t,aliasOf:r?r.record:a}))}let h,f;for(const e of l){const{path:l}=e;if(n&&"/"!==l[0]){const t=n.record.path,r="/"===t[t.length-1]?"":"/";e.path=n.record.path+(l&&r+l)}if(h=at(e,n,u),r?r.alias.push(h):(f=f||h,f!==h&&f.alias.push(h),i&&t.name&&!ft(h)&&s(t.name)),"children"in a){const t=a.children;for(let e=0;e<t.length;e++)o(t[e],h,r&&r.children[e])}r=r||h,c(h)}return f?()=>{s(f)}:g}function s(t){if(K(t)){const e=r.get(t);e&&(r.delete(t),n.splice(n.indexOf(e),1),e.children.forEach(s),e.alias.forEach(s))}else{const e=n.indexOf(t);e>-1&&(n.splice(e,1),t.record.name&&r.delete(t.record.name),t.children.forEach(s),t.alias.forEach(s))}}function a(){return n}function c(t){let e=0;while(e<n.length&&rt(t,n[e])>=0)e++;n.splice(e,0,t),t.record.name&&!ft(t)&&r.set(t.record.name,t)}function u(t,e){let i,o,s,a={};if("name"in t&&t.name){if(i=r.get(t.name),!i)throw X(1,{location:t});s=i.record.name,a=d(ut(e.params,i.keys.filter(t=>!t.optional).map(t=>t.name)),t.params),o=i.stringify(a)}else if("path"in t)o=t.path,i=n.find(t=>t.re.test(o)),i&&(a=i.parse(o),s=i.record.name);else{if(i=e.name?r.get(e.name):n.find(t=>t.re.test(e.path)),!i)throw X(1,{location:t,currentLocation:e});s=i.record.name,a=d({},e.params,t.params),o=i.stringify(a)}const c=[];let u=i;while(u)c.unshift(u.record),u=u.parent;return{name:s,path:o,params:a,matched:c,meta:dt(c)}}return e=pt({strict:!1,end:!0,sensitive:!1},e),t.forEach(t=>o(t)),{addRoute:o,resolve:u,removeRoute:s,getRoutes:a,getRecordMatcher:i}}function ut(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function lt(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:ht(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function ht(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]="boolean"===typeof n?n:n[r];return e}function ft(t){while(t){if(t.record.aliasOf)return!0;t=t.parent}return!1}function dt(t){return t.reduce((t,e)=>d(t,e.meta),{})}function pt(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const gt=/#/g,mt=/&/g,yt=/\//g,vt=/=/g,bt=/\?/g,wt=/\+/g,Et=/%5B/g,_t=/%5D/g,Ot=/%5E/g,Tt=/%60/g,St=/%7B/g,It=/%7C/g,jt=/%7D/g,At=/%20/g;function Ct(t){return encodeURI(""+t).replace(It,"|").replace(Et,"[").replace(_t,"]")}function xt(t){return Ct(t).replace(St,"{").replace(jt,"}").replace(Ot,"^")}function kt(t){return Ct(t).replace(wt,"%2B").replace(At,"+").replace(gt,"%23").replace(mt,"%26").replace(Tt,"`").replace(St,"{").replace(jt,"}").replace(Ot,"^")}function Nt(t){return kt(t).replace(vt,"%3D")}function Dt(t){return Ct(t).replace(gt,"%23").replace(bt,"%3F")}function Lt(t){return null==t?"":Dt(t).replace(yt,"%2F")}function Pt(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}function Rt(t){const e={};if(""===t||"?"===t)return e;const n="?"===t[0],r=(n?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const t=r[i].replace(wt," "),n=t.indexOf("="),o=Pt(n<0?t:t.slice(0,n)),s=n<0?null:Pt(t.slice(n+1));if(o in e){let t=e[o];Array.isArray(t)||(t=e[o]=[t]),t.push(s)}else e[o]=s}return e}function Mt(t){let e="";for(let n in t){const r=t[n];if(n=Nt(n),null==r){void 0!==r&&(e+=(e.length?"&":"")+n);continue}const i=Array.isArray(r)?r.map(t=>t&&kt(t)):[r&&kt(r)];i.forEach(t=>{void 0!==t&&(e+=(e.length?"&":"")+n,null!=t&&(e+="="+t))})}return e}function Ft(t){const e={};for(const n in t){const r=t[n];void 0!==r&&(e[n]=Array.isArray(r)?r.map(t=>null==t?null:""+t):null==r?r:""+r)}return e}function Vt(){let t=[];function e(e){return t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Ut(t,e,n,r,i){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,a)=>{const c=t=>{!1===t?a(X(4,{from:n,to:e})):t instanceof Error?a(t):G(t)?a(X(2,{from:e,to:t})):(o&&r.enterCallbacks[i]===o&&"function"===typeof t&&o.push(t),s())},u=t.call(r&&r.instances[i],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(t=>a(t))})}function Bt(t,e,n,r){const i=[];for(const o of t)for(const t in o.components){let s=o.components[t];if("beforeRouteEnter"===e||o.instances[t])if(qt(s)){const a=s.__vccOpts||s,c=a[e];c&&i.push(Ut(c,n,r,o,t))}else{let a=s();0,i.push(()=>a.then(i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${t}" at "${o.path}"`));const s=f(i)?i.default:i;o.components[t]=s;const a=s.__vccOpts||s,c=a[e];return c&&Ut(c,n,r,o,t)()}))}}return i}function qt(t){return"object"===typeof t||"displayName"in t||"props"in t||"__vccOpts"in t}function $t(t){const e=Object(r["j"])(c),n=Object(r["j"])(u),i=Object(r["b"])(()=>e.resolve(Object(r["u"])(t.to))),o=Object(r["b"])(()=>{const{matched:t}=i.value,{length:e}=t,r=t[e-1],o=n.matched;if(!r||!o.length)return-1;const s=o.findIndex(_.bind(null,r));if(s>-1)return s;const a=Wt(t[e-2]);return e>1&&Wt(r)===a&&o[o.length-1].path!==a?o.findIndex(_.bind(null,t[e-2])):s}),s=Object(r["b"])(()=>o.value>-1&&Ht(n.params,i.value.params)),a=Object(r["b"])(()=>o.value>-1&&o.value===n.matched.length-1&&O(n.params,i.value.params));function l(n={}){return Kt(n)?e[Object(r["u"])(t.replace)?"replace":"push"](Object(r["u"])(t.to)).catch(g):Promise.resolve()}return{route:i,href:Object(r["b"])(()=>i.value.href),isActive:s,isExactActive:a,navigate:l}}const zt=Object(r["g"])({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$t,setup(t,{slots:e}){const n=Object(r["q"])($t(t)),{options:i}=Object(r["j"])(c),o=Object(r["b"])(()=>({[Qt(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Qt(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Object(r["i"])("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),Gt=zt;function Kt(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Ht(t,e){for(const n in e){const r=e[n],i=t[n];if("string"===typeof r){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some((t,e)=>t!==i[e]))return!1}return!0}function Wt(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Qt=(t,e,n)=>null!=t?t:null!=e?e:n,Xt=Object(r["g"])({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const i=Object(r["j"])(l),o=Object(r["b"])(()=>t.route||i.value),c=Object(r["j"])(a,0),u=Object(r["b"])(()=>o.value.matched[c]);Object(r["p"])(a,c+1),Object(r["p"])(s,u),Object(r["p"])(l,o);const h=Object(r["r"])();return Object(r["w"])(()=>[h.value,u.value,t.name],([t,e,n],[r,i,o])=>{e&&(e.instances[n]=t,i&&i!==e&&t&&t===r&&(e.leaveGuards.size||(e.leaveGuards=i.leaveGuards),e.updateGuards.size||(e.updateGuards=i.updateGuards))),!t||!e||i&&_(e,i)&&r||(e.enterCallbacks[n]||[]).forEach(e=>e(t))},{flush:"post"}),()=>{const i=o.value,s=u.value,a=s&&s.components[t.name],c=t.name;if(!a)return Yt(n.default,{Component:a,route:i});const l=s.props[t.name],f=l?!0===l?i.params:"function"===typeof l?l(i):l:null,p=t=>{t.component.isUnmounted&&(s.instances[c]=null)},g=Object(r["i"])(a,d({},f,e,{onVnodeUnmounted:p,ref:h}));return Yt(n.default,{Component:g,route:i})||g}}});function Yt(t,e){if(!t)return null;const n=t(e);return 1===n.length?n[0]:n}const Jt=Xt;function Zt(t){const e=ct(t.routes,t),n=t.parseQuery||Rt,i=t.stringifyQuery||Mt,o=t.history;const s=Vt(),a=Vt(),f=Vt(),m=Object(r["t"])(H);let y=H;h&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const w=p.bind(null,t=>""+t),_=p.bind(null,Lt),O=p.bind(null,Pt);function T(t,n){let r,i;return K(t)?(r=e.getRecordMatcher(t),i=n):i=t,e.addRoute(i,r)}function S(t){const n=e.getRecordMatcher(t);n&&e.removeRoute(n)}function I(){return e.getRoutes().map(t=>t.record)}function A(t){return!!e.getRecordMatcher(t)}function C(t,r){if(r=d({},r||m.value),"string"===typeof t){const i=v(n,t,r.path),s=e.resolve({path:i.path},r),a=o.createHref(i.fullPath);return d(i,s,{params:O(s.params),hash:Pt(i.hash),redirectedFrom:void 0,href:a})}let s;if("path"in t)s=d({},t,{path:v(n,t.path,r.path).path});else{const e=d({},t.params);for(const t in e)null==e[t]&&delete e[t];s=d({},t,{params:_(t.params)}),r.params=_(r.params)}const a=e.resolve(s,r),c=t.hash||"";a.params=w(O(a.params));const u=b(i,d({},t,{hash:xt(c),path:a.path})),l=o.createHref(u);return d({fullPath:u,hash:c,query:i===Mt?Ft(t.query):t.query||{}},a,{redirectedFrom:void 0,href:l})}function x(t){return"string"===typeof t?v(n,t,m.value.path):d({},t)}function k(t,e){if(y!==t)return X(8,{from:e,to:t})}function N(t){return U(t)}function R(t){return N(d(x(t),{replace:!0}))}function V(t){const e=t.matched[t.matched.length-1];if(e&&e.redirect){const{redirect:n}=e;let r="function"===typeof n?n(t):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=x(r):{path:r},r.params={}),d({query:t.query,hash:t.hash,params:t.params},r)}}function U(t,e){const n=y=C(t),r=m.value,o=t.state,s=t.force,a=!0===t.replace,c=V(n);if(c)return U(d(x(c),{state:o,force:s,replace:a}),e||n);const u=n;let l;return u.redirectedFrom=e,!s&&E(i,r,n)&&(l=X(16,{to:u,from:r}),rt(r,r,!0,!1)),(l?Promise.resolve(l):q(u,r)).catch(t=>Y(t)?t:tt(t,u,r)).then(t=>{if(t){if(Y(t,2))return U(d(x(t.to),{state:o,force:s,replace:a}),e||u)}else t=z(u,r,!0,a,o);return $(u,r,t),t})}function B(t,e){const n=k(t,e);return n?Promise.reject(n):Promise.resolve()}function q(t,e){let n;const[r,i,o]=ee(t,e);n=Bt(r.reverse(),"beforeRouteLeave",t,e);for(const s of r)s.leaveGuards.forEach(r=>{n.push(Ut(r,t,e))});const c=B.bind(null,t,e);return n.push(c),te(n).then(()=>{n=[];for(const r of s.list())n.push(Ut(r,t,e));return n.push(c),te(n)}).then(()=>{n=Bt(i,"beforeRouteUpdate",t,e);for(const r of i)r.updateGuards.forEach(r=>{n.push(Ut(r,t,e))});return n.push(c),te(n)}).then(()=>{n=[];for(const r of t.matched)if(r.beforeEnter&&!e.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const i of r.beforeEnter)n.push(Ut(i,t,e));else n.push(Ut(r.beforeEnter,t,e));return n.push(c),te(n)}).then(()=>(t.matched.forEach(t=>t.enterCallbacks={}),n=Bt(o,"beforeRouteEnter",t,e),n.push(c),te(n))).then(()=>{n=[];for(const r of a.list())n.push(Ut(r,t,e));return n.push(c),te(n)}).catch(t=>Y(t,8)?t:Promise.reject(t))}function $(t,e,n){for(const r of f.list())r(t,e,n)}function z(t,e,n,r,i){const s=k(t,e);if(s)return s;const a=e===H,c=h?history.state:{};n&&(r||a?o.replace(t.fullPath,d({scroll:a&&c&&c.scroll},i)):o.push(t.fullPath,i)),m.value=t,rt(t,e,n,a),nt()}let G;function W(){G=o.listen((t,e,n)=>{const r=C(t),i=V(r);if(i)return void U(d(i,{replace:!0}),r).catch(g);y=r;const s=m.value;h&&M(P(s.fullPath,n.delta),D()),q(r,s).catch(t=>Y(t,12)?t:Y(t,2)?(U(t.to,r).then(t=>{Y(t,20)&&!n.delta&&n.type===j.pop&&o.go(-1,!1)}).catch(g),Promise.reject()):(n.delta&&o.go(-n.delta,!1),tt(t,r,s))).then(t=>{t=t||z(r,s,!1),t&&(n.delta?o.go(-n.delta,!1):n.type===j.pop&&Y(t,20)&&o.go(-1,!1)),$(r,s,t)}).catch(g)})}let Q,J=Vt(),Z=Vt();function tt(t,e,n){nt(t);const r=Z.list();return r.length?r.forEach(r=>r(t,e,n)):console.error(t),Promise.reject(t)}function et(){return Q&&m.value!==H?Promise.resolve():new Promise((t,e)=>{J.add([t,e])})}function nt(t){Q||(Q=!0,W(),J.list().forEach(([e,n])=>t?n(t):e()),J.reset())}function rt(e,n,i,o){const{scrollBehavior:s}=t;if(!h||!s)return Promise.resolve();const a=!i&&F(P(e.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return Object(r["k"])().then(()=>s(e,n,a)).then(t=>t&&L(t)).catch(t=>tt(t,e,n))}const it=t=>o.go(t);let ot;const st=new Set,at={currentRoute:m,addRoute:T,removeRoute:S,hasRoute:A,getRoutes:I,resolve:C,options:t,push:N,replace:R,go:it,back:()=>it(-1),forward:()=>it(1),beforeEach:s.add,beforeResolve:a.add,afterEach:f.add,onError:Z.add,isReady:et,install(t){const e=this;t.component("RouterLink",Gt),t.component("RouterView",Jt),t.config.globalProperties.$router=e,Object.defineProperty(t.config.globalProperties,"$route",{enumerable:!0,get:()=>Object(r["u"])(m)}),h&&!ot&&m.value===H&&(ot=!0,N(o.location).catch(t=>{0}));const n={};for(const o in H)n[o]=Object(r["b"])(()=>m.value[o]);t.provide(c,e),t.provide(u,Object(r["q"])(n)),t.provide(l,m);const i=t.unmount;st.add(t),t.unmount=function(){st.delete(t),st.size<1&&(y=H,G&&G(),m.value=H,ot=!1,Q=!1),i()}}};return at}function te(t){return t.reduce((t,e)=>t.then(()=>e()),Promise.resolve())}function ee(t,e){const n=[],r=[],i=[],o=Math.max(e.matched.length,t.matched.length);for(let s=0;s<o;s++){const o=e.matched[s];o&&(t.matched.find(t=>_(t,o))?r.push(o):n.push(o));const a=t.matched[s];a&&(e.matched.find(t=>_(t,a))||i.push(a))}return[n,r,i]}},"6eeb":function(t,e,n){var r=n("da84"),i=n("9112"),o=n("5135"),s=n("ce4e"),a=n("8925"),c=n("69f3"),u=c.get,l=c.enforce,h=String(String).split("String");(t.exports=function(t,e,n,a){var c,u=!!a&&!!a.unsafe,f=!!a&&!!a.enumerable,d=!!a&&!!a.noTargetGet;"function"==typeof n&&("string"!=typeof e||o(n,"name")||i(n,"name",e),c=l(n),c.source||(c.source=h.join("string"==typeof e?e:""))),t!==r?(u?!d&&t[e]&&(f=!0):delete t[e],f?t[e]=n:i(t,e,n)):f?t[e]=n:s(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&u(this).source||a(this)}))},7418:function(t,e){e.f=Object.getOwnPropertySymbols},"746f":function(t,e,n){var r=n("428f"),i=n("5135"),o=n("e538"),s=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||s(e,t,{value:o.f(t)})}},7839:function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"785a":function(t,e,n){var r=n("cc12"),i=r("span").classList,o=i&&i.constructor&&i.constructor.prototype;t.exports=o===Object.prototype?void 0:o},"7a23":function(t,e,n){"use strict";n.d(e,"b",(function(){return Kt})),n.d(e,"q",(function(){return St})),n.d(e,"r",(function(){return Ft})),n.d(e,"t",(function(){return Vt})),n.d(e,"u",(function(){return qt})),n.d(e,"a",(function(){return Fn})),n.d(e,"d",(function(){return Qn})),n.d(e,"e",(function(){return er})),n.d(e,"f",(function(){return nr})),n.d(e,"g",(function(){return we})),n.d(e,"h",(function(){return vr})),n.d(e,"i",(function(){return gi})),n.d(e,"j",(function(){return ue})),n.d(e,"k",(function(){return Yr})),n.d(e,"l",(function(){return Te})),n.d(e,"m",(function(){return Se})),n.d(e,"n",(function(){return Me})),n.d(e,"o",(function(){return zn})),n.d(e,"p",(function(){return ce})),n.d(e,"s",(function(){return Ln})),n.d(e,"w",(function(){return li})),n.d(e,"x",(function(){return bn})),n.d(e,"c",(function(){return Oo})),n.d(e,"v",(function(){return mo})),n.d(e,"y",(function(){return bo}));var r=n("9ff4");let i;const o=[];class s{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&i&&(this.parent=i,this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(t){if(this.active)try{return this.on(),t()}finally{this.off()}else 0}on(){this.active&&(o.push(this),i=this)}off(){this.active&&(o.pop(),i=o[o.length-1])}stop(t){if(this.active){if(this.effects.forEach(t=>t.stop()),this.cleanups.forEach(t=>t()),this.scopes&&this.scopes.forEach(t=>t.stop(!0)),this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.active=!1}}}function a(t,e){e=e||i,e&&e.active&&e.effects.push(t)}const c=t=>{const e=new Set(t);return e.w=0,e.n=0,e},u=t=>(t.w&g)>0,l=t=>(t.n&g)>0,h=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=g},f=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];u(i)&&!l(i)?i.delete(t):e[n++]=i,i.w&=~g,i.n&=~g}e.length=n}},d=new WeakMap;let p=0,g=1;const m=30,y=[];let v;const b=Symbol(""),w=Symbol("");class E{constructor(t,e=null,n){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],a(this,n)}run(){if(!this.active)return this.fn();if(!y.includes(this))try{return y.push(v=this),I(),g=1<<++p,p<=m?h(this):_(this),this.fn()}finally{p<=m&&f(this),g=1<<--p,j(),y.pop();const t=y.length;v=t>0?y[t-1]:void 0}}stop(){this.active&&(_(this),this.onStop&&this.onStop(),this.active=!1)}}function _(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let O=!0;const T=[];function S(){T.push(O),O=!1}function I(){T.push(O),O=!0}function j(){const t=T.pop();O=void 0===t||t}function A(t,e,n){if(!C())return;let r=d.get(t);r||d.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=c());const o=void 0;x(i,o)}function C(){return O&&void 0!==v}function x(t,e){let n=!1;p<=m?l(t)||(t.n|=g,n=!u(t)):n=!t.has(v),n&&(t.add(v),v.deps.push(t))}function k(t,e,n,i,o,s){const a=d.get(t);if(!a)return;let u=[];if("clear"===e)u=[...a.values()];else if("length"===n&&Object(r["n"])(t))a.forEach((t,e)=>{("length"===e||e>=i)&&u.push(t)});else switch(void 0!==n&&u.push(a.get(n)),e){case"add":Object(r["n"])(t)?Object(r["r"])(n)&&u.push(a.get("length")):(u.push(a.get(b)),Object(r["s"])(t)&&u.push(a.get(w)));break;case"delete":Object(r["n"])(t)||(u.push(a.get(b)),Object(r["s"])(t)&&u.push(a.get(w)));break;case"set":Object(r["s"])(t)&&u.push(a.get(b));break}if(1===u.length)u[0]&&N(u[0]);else{const t=[];for(const e of u)e&&t.push(...e);N(c(t))}}function N(t,e){for(const n of Object(r["n"])(t)?t:[...t])(n!==v||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const D=Object(r["G"])("__proto__,__v_isRef,__isVue"),L=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(r["D"])),P=U(),R=U(!1,!0),M=U(!0),F=V();function V(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...t){const n=Nt(this);for(let e=0,i=this.length;e<i;e++)A(n,"get",e+"");const r=n[e](...t);return-1===r||!1===r?n[e](...t.map(Nt)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...t){S();const n=Nt(this)[e].apply(this,t);return j(),n}}),t}function U(t=!1,e=!1){return function(n,i,o){if("__v_isReactive"===i)return!t;if("__v_isReadonly"===i)return t;if("__v_raw"===i&&o===(t?e?_t:Et:e?wt:bt).get(n))return n;const s=Object(r["n"])(n);if(!t&&s&&Object(r["j"])(F,i))return Reflect.get(F,i,o);const a=Reflect.get(n,i,o);if(Object(r["D"])(i)?L.has(i):D(i))return a;if(t||A(n,"get",i),e)return a;if(Mt(a)){const t=!s||!Object(r["r"])(i);return t?a.value:a}return Object(r["u"])(a)?t?jt(a):St(a):a}}const B=$(),q=$(!0);function $(t=!1){return function(e,n,i,o){let s=e[n];if(!t&&(i=Nt(i),s=Nt(s),!Object(r["n"])(e)&&Mt(s)&&!Mt(i)))return s.value=i,!0;const a=Object(r["n"])(e)&&Object(r["r"])(n)?Number(n)<e.length:Object(r["j"])(e,n),c=Reflect.set(e,n,i,o);return e===Nt(o)&&(a?Object(r["i"])(i,s)&&k(e,"set",n,i,s):k(e,"add",n,i)),c}}function z(t,e){const n=Object(r["j"])(t,e),i=t[e],o=Reflect.deleteProperty(t,e);return o&&n&&k(t,"delete",e,void 0,i),o}function G(t,e){const n=Reflect.has(t,e);return Object(r["D"])(e)&&L.has(e)||A(t,"has",e),n}function K(t){return A(t,"iterate",Object(r["n"])(t)?"length":b),Reflect.ownKeys(t)}const H={get:P,set:B,deleteProperty:z,has:G,ownKeys:K},W={get:M,set(t,e){return!0},deleteProperty(t,e){return!0}},Q=Object(r["h"])({},H,{get:R,set:q}),X=t=>Object(r["u"])(t)?St(t):t,Y=t=>Object(r["u"])(t)?jt(t):t,J=t=>t,Z=t=>Reflect.getPrototypeOf(t);function tt(t,e,n=!1,r=!1){t=t["__v_raw"];const i=Nt(t),o=Nt(e);e!==o&&!n&&A(i,"get",e),!n&&A(i,"get",o);const{has:s}=Z(i),a=r?J:n?Y:X;return s.call(i,e)?a(t.get(e)):s.call(i,o)?a(t.get(o)):void(t!==i&&t.get(e))}function et(t,e=!1){const n=this["__v_raw"],r=Nt(n),i=Nt(t);return t!==i&&!e&&A(r,"has",t),!e&&A(r,"has",i),t===i?n.has(t):n.has(t)||n.has(i)}function nt(t,e=!1){return t=t["__v_raw"],!e&&A(Nt(t),"iterate",b),Reflect.get(t,"size",t)}function rt(t){t=Nt(t);const e=Nt(this),n=Z(e),r=n.has.call(e,t);return r||(e.add(t),k(e,"add",t,t)),this}function it(t,e){e=Nt(e);const n=Nt(this),{has:i,get:o}=Z(n);let s=i.call(n,t);s||(t=Nt(t),s=i.call(n,t));const a=o.call(n,t);return n.set(t,e),s?Object(r["i"])(e,a)&&k(n,"set",t,e,a):k(n,"add",t,e),this}function ot(t){const e=Nt(this),{has:n,get:r}=Z(e);let i=n.call(e,t);i||(t=Nt(t),i=n.call(e,t));const o=r?r.call(e,t):void 0,s=e.delete(t);return i&&k(e,"delete",t,void 0,o),s}function st(){const t=Nt(this),e=0!==t.size,n=void 0,r=t.clear();return e&&k(t,"clear",void 0,void 0,n),r}function at(t,e){return function(n,r){const i=this,o=i["__v_raw"],s=Nt(o),a=e?J:t?Y:X;return!t&&A(s,"iterate",b),o.forEach((t,e)=>n.call(r,a(t),a(e),i))}}function ct(t,e,n){return function(...i){const o=this["__v_raw"],s=Nt(o),a=Object(r["s"])(s),c="entries"===t||t===Symbol.iterator&&a,u="keys"===t&&a,l=o[t](...i),h=n?J:e?Y:X;return!e&&A(s,"iterate",u?w:b),{next(){const{value:t,done:e}=l.next();return e?{value:t,done:e}:{value:c?[h(t[0]),h(t[1])]:h(t),done:e}},[Symbol.iterator](){return this}}}}function ut(t){return function(...e){return"delete"!==t&&this}}function lt(){const t={get(t){return tt(this,t)},get size(){return nt(this)},has:et,add:rt,set:it,delete:ot,clear:st,forEach:at(!1,!1)},e={get(t){return tt(this,t,!1,!0)},get size(){return nt(this)},has:et,add:rt,set:it,delete:ot,clear:st,forEach:at(!1,!0)},n={get(t){return tt(this,t,!0)},get size(){return nt(this,!0)},has(t){return et.call(this,t,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:at(!0,!1)},r={get(t){return tt(this,t,!0,!0)},get size(){return nt(this,!0)},has(t){return et.call(this,t,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:at(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach(i=>{t[i]=ct(i,!1,!1),n[i]=ct(i,!0,!1),e[i]=ct(i,!1,!0),r[i]=ct(i,!0,!0)}),[t,n,e,r]}const[ht,ft,dt,pt]=lt();function gt(t,e){const n=e?t?pt:dt:t?ft:ht;return(e,i,o)=>"__v_isReactive"===i?!t:"__v_isReadonly"===i?t:"__v_raw"===i?e:Reflect.get(Object(r["j"])(n,i)&&i in e?n:e,i,o)}const mt={get:gt(!1,!1)},yt={get:gt(!1,!0)},vt={get:gt(!0,!1)};const bt=new WeakMap,wt=new WeakMap,Et=new WeakMap,_t=new WeakMap;function Ot(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Tt(t){return t["__v_skip"]||!Object.isExtensible(t)?0:Ot(Object(r["M"])(t))}function St(t){return t&&t["__v_isReadonly"]?t:At(t,!1,H,mt,bt)}function It(t){return At(t,!1,Q,yt,wt)}function jt(t){return At(t,!0,W,vt,Et)}function At(t,e,n,i,o){if(!Object(r["u"])(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const s=o.get(t);if(s)return s;const a=Tt(t);if(0===a)return t;const c=new Proxy(t,2===a?i:n);return o.set(t,c),c}function Ct(t){return xt(t)?Ct(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function xt(t){return!(!t||!t["__v_isReadonly"])}function kt(t){return Ct(t)||xt(t)}function Nt(t){const e=t&&t["__v_raw"];return e?Nt(e):t}function Dt(t){return Object(r["g"])(t,"__v_skip",!0),t}function Lt(t){C()&&(t=Nt(t),t.dep||(t.dep=c()),x(t.dep))}function Pt(t,e){t=Nt(t),t.dep&&N(t.dep)}const Rt=t=>Object(r["u"])(t)?St(t):t;function Mt(t){return Boolean(t&&!0===t.__v_isRef)}function Ft(t){return Bt(t,!1)}function Vt(t){return Bt(t,!0)}class Ut{constructor(t,e){this._shallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:Nt(t),this._value=e?t:Rt(t)}get value(){return Lt(this),this._value}set value(t){t=this._shallow?t:Nt(t),Object(r["i"])(t,this._rawValue)&&(this._rawValue=t,this._value=this._shallow?t:Rt(t),Pt(this,t))}}function Bt(t,e){return Mt(t)?t:new Ut(t,e)}function qt(t){return Mt(t)?t.value:t}const $t={get:(t,e,n)=>qt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Mt(i)&&!Mt(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function zt(t){return Ct(t)?t:new Proxy(t,$t)}class Gt{constructor(t,e,n){this._setter=e,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new E(t,()=>{this._dirty||(this._dirty=!0,Pt(this))}),this["__v_isReadonly"]=n}get value(){const t=Nt(this);return Lt(t),t._dirty&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Kt(t,e){let n,i;Object(r["o"])(t)?(n=t,i=r["d"]):(n=t.get,i=t.set);const o=new Gt(n,i,Object(r["o"])(t)||!t.set);return o}Promise.resolve();new Set;new Map;Object.create(null),Object.create(null);function Ht(t,e,...n){const i=t.vnode.props||r["b"];let o=n;const s=e.startsWith("update:"),a=s&&e.slice(7);if(a&&a in i){const t=("modelValue"===a?"model":a)+"Modifiers",{number:e,trim:s}=i[t]||r["b"];s?o=n.map(t=>t.trim()):e&&(o=n.map(r["L"]))}let c;let u=i[c=Object(r["K"])(e)]||i[c=Object(r["K"])(Object(r["e"])(e))];!u&&s&&(u=i[c=Object(r["K"])(Object(r["k"])(e))]),u&&Pr(u,t,6,o);const l=i[c+"Once"];if(l){if(t.emitted){if(t.emitted[c])return}else t.emitted={};t.emitted[c]=!0,Pr(l,t,6,o)}}function Wt(t,e,n=!1){const i=e.emitsCache,o=i.get(t);if(void 0!==o)return o;const s=t.emits;let a={},c=!1;if(!Object(r["o"])(t)){const i=t=>{const n=Wt(t,e,!0);n&&(c=!0,Object(r["h"])(a,n))};!n&&e.mixins.length&&e.mixins.forEach(i),t.extends&&i(t.extends),t.mixins&&t.mixins.forEach(i)}return s||c?(Object(r["n"])(s)?s.forEach(t=>a[t]=null):Object(r["h"])(a,s),i.set(t,a),a):(i.set(t,null),null)}function Qt(t,e){return!(!t||!Object(r["v"])(e))&&(e=e.slice(2).replace(/Once$/,""),Object(r["j"])(t,e[0].toLowerCase()+e.slice(1))||Object(r["j"])(t,Object(r["k"])(e))||Object(r["j"])(t,e))}let Xt=null,Yt=null;function Jt(t){const e=Xt;return Xt=t,Yt=t&&t.type.__scopeId||null,e}function Zt(t,e=Xt,n){if(!e)return t;if(t._n)return t;const r=(...n)=>{r._d&&Hn(-1);const i=Jt(e),o=t(...n);return Jt(i),r._d&&Hn(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function te(t){const{type:e,vnode:n,proxy:i,withProxy:o,props:s,propsOptions:[a],slots:c,attrs:u,emit:l,render:h,renderCache:f,data:d,setupState:p,ctx:g,inheritAttrs:m}=t;let y;const v=Jt(t);try{let t;if(4&n.shapeFlag){const e=o||i;y=ar(h.call(e,e,f,s,p,d,g)),t=u}else{const n=e;0,y=ar(n.length>1?n(s,{attrs:u,slots:c,emit:l}):n(s,null)),t=e.props?u:ee(u)}let v=y;if(t&&!1!==m){const e=Object.keys(t),{shapeFlag:n}=v;e.length&&7&n&&(a&&e.some(r["t"])&&(t=ne(t,a)),v=or(v,t))}0,n.dirs&&(v.dirs=v.dirs?v.dirs.concat(n.dirs):n.dirs),n.transition&&(v.transition=n.transition),y=v}catch(b){qn.length=0,Rr(b,t,1),y=nr(Un)}return Jt(v),y}const ee=t=>{let e;for(const n in t)("class"===n||"style"===n||Object(r["v"])(n))&&((e||(e={}))[n]=t[n]);return e},ne=(t,e)=>{const n={};for(const i in t)Object(r["t"])(i)&&i.slice(9)in e||(n[i]=t[i]);return n};function re(t,e,n){const{props:r,children:i,component:o}=t,{props:s,children:a,patchFlag:c}=e,u=o.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==s&&(r?!s||ie(r,s,u):!!s);if(1024&c)return!0;if(16&c)return r?ie(r,s,u):!!s;if(8&c){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(s[n]!==r[n]&&!Qt(u,n))return!0}}return!1}function ie(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(e[o]!==t[o]&&!Qt(n,o))return!0}return!1}function oe({vnode:t,parent:e},n){while(e&&e.subTree===t)(t=e.vnode).el=n,e=e.parent}const se=t=>t.__isSuspense;function ae(t,e){e&&e.pendingBranch?Object(r["n"])(t)?e.effects.push(...t):e.effects.push(t):ii(t)}function ce(t,e){if(yr){let n=yr.provides;const r=yr.parent&&yr.parent.provides;r===n&&(n=yr.provides=Object.create(r)),n[t]=e}else 0}function ue(t,e,n=!1){const i=yr||Xt;if(i){const o=null==i.parent?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(o&&t in o)return o[t];if(arguments.length>1)return n&&Object(r["o"])(e)?e.call(i.proxy):e}else 0}function le(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return De(()=>{t.isMounted=!0}),Re(()=>{t.isUnmounting=!0}),t}const he=[Function,Array],fe={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:he,onEnter:he,onAfterEnter:he,onEnterCancelled:he,onBeforeLeave:he,onLeave:he,onAfterLeave:he,onLeaveCancelled:he,onBeforeAppear:he,onAppear:he,onAfterAppear:he,onAppearCancelled:he},setup(t,{slots:e}){const n=vr(),r=le();let i;return()=>{const o=e.default&&be(e.default(),!0);if(!o||!o.length)return;const s=Nt(t),{mode:a}=s;const c=o[0];if(r.isLeaving)return me(c);const u=ye(c);if(!u)return me(c);const l=ge(u,s,r,n);ve(u,l);const h=n.subTree,f=h&&ye(h);let d=!1;const{getTransitionKey:p}=u.type;if(p){const t=p();void 0===i?i=t:t!==i&&(i=t,d=!0)}if(f&&f.type!==Un&&(!Yn(u,f)||d)){const t=ge(f,s,r,n);if(ve(f,t),"out-in"===a)return r.isLeaving=!0,t.afterLeave=()=>{r.isLeaving=!1,n.update()},me(c);"in-out"===a&&u.type!==Un&&(t.delayLeave=(t,e,n)=>{const i=pe(r,f);i[String(f.key)]=f,t._leaveCb=()=>{e(),t._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=n})}return c}}},de=fe;function pe(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function ge(t,e,n,r){const{appear:i,mode:o,persisted:s=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:f,onAfterLeave:d,onLeaveCancelled:p,onBeforeAppear:g,onAppear:m,onAfterAppear:y,onAppearCancelled:v}=e,b=String(t.key),w=pe(n,t),E=(t,e)=>{t&&Pr(t,r,9,e)},_={mode:o,persisted:s,beforeEnter(e){let r=a;if(!n.isMounted){if(!i)return;r=g||a}e._leaveCb&&e._leaveCb(!0);const o=w[b];o&&Yn(t,o)&&o.el._leaveCb&&o.el._leaveCb(),E(r,[e])},enter(t){let e=c,r=u,o=l;if(!n.isMounted){if(!i)return;e=m||c,r=y||u,o=v||l}let s=!1;const a=t._enterCb=e=>{s||(s=!0,E(e?o:r,[t]),_.delayedLeave&&_.delayedLeave(),t._enterCb=void 0)};e?(e(t,a),e.length<=1&&a()):a()},leave(e,r){const i=String(t.key);if(e._enterCb&&e._enterCb(!0),n.isUnmounting)return r();E(h,[e]);let o=!1;const s=e._leaveCb=n=>{o||(o=!0,r(),E(n?p:d,[e]),e._leaveCb=void 0,w[i]===t&&delete w[i])};w[i]=t,f?(f(e,s),f.length<=1&&s()):s()},clone(t){return ge(t,e,n,r)}};return _}function me(t){if(_e(t))return t=or(t),t.children=null,t}function ye(t){return _e(t)?t.children?t.children[0]:void 0:t}function ve(t,e){6&t.shapeFlag&&t.component?ve(t.component.subTree,e):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function be(t,e=!1){let n=[],r=0;for(let i=0;i<t.length;i++){const o=t[i];o.type===Fn?(128&o.patchFlag&&r++,n=n.concat(be(o.children,e))):(e||o.type!==Un)&&n.push(o)}if(r>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function we(t){return Object(r["o"])(t)?{setup:t,name:t.name}:t}const Ee=t=>!!t.type.__asyncLoader;const _e=t=>t.type.__isKeepAlive;RegExp,RegExp;function Oe(t,e){return Object(r["n"])(t)?t.some(t=>Oe(t,e)):Object(r["C"])(t)?t.split(",").indexOf(e)>-1:!!t.test&&t.test(e)}function Te(t,e){Ie(t,"a",e)}function Se(t,e){Ie(t,"da",e)}function Ie(t,e,n=yr){const r=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}t()});if(xe(e,r,n),n){let t=n.parent;while(t&&t.parent)_e(t.parent.vnode)&&je(r,e,n,t),t=t.parent}}function je(t,e,n,i){const o=xe(e,t,i,!0);Me(()=>{Object(r["J"])(i[e],o)},n)}function Ae(t){let e=t.shapeFlag;256&e&&(e-=256),512&e&&(e-=512),t.shapeFlag=e}function Ce(t){return 128&t.shapeFlag?t.ssContent:t}function xe(t,e,n=yr,r=!1){if(n){const i=n[t]||(n[t]=[]),o=e.__weh||(e.__weh=(...r)=>{if(n.isUnmounted)return;S(),br(n);const i=Pr(e,n,t,r);return wr(),j(),i});return r?i.unshift(o):i.push(o),o}}const ke=t=>(e,n=yr)=>(!Tr||"sp"===t)&&xe(t,e,n),Ne=ke("bm"),De=ke("m"),Le=ke("bu"),Pe=ke("u"),Re=ke("bum"),Me=ke("um"),Fe=ke("sp"),Ve=ke("rtg"),Ue=ke("rtc");function Be(t,e=yr){xe("ec",t,e)}let qe=!0;function $e(t){const e=He(t),n=t.proxy,i=t.ctx;qe=!1,e.beforeCreate&&Ge(e.beforeCreate,t,"bc");const{data:o,computed:s,methods:a,watch:c,provide:u,inject:l,created:h,beforeMount:f,mounted:d,beforeUpdate:p,updated:g,activated:m,deactivated:y,beforeDestroy:v,beforeUnmount:b,destroyed:w,unmounted:E,render:_,renderTracked:O,renderTriggered:T,errorCaptured:S,serverPrefetch:I,expose:j,inheritAttrs:A,components:C,directives:x,filters:k}=e,N=null;if(l&&ze(l,i,N,t.appContext.config.unwrapInjectedRef),a)for(const L in a){const t=a[L];Object(r["o"])(t)&&(i[L]=t.bind(n))}if(o){0;const e=o.call(n,n);0,Object(r["u"])(e)&&(t.data=St(e))}if(qe=!0,s)for(const L in s){const t=s[L],e=Object(r["o"])(t)?t.bind(n,n):Object(r["o"])(t.get)?t.get.bind(n,n):r["d"];0;const o=!Object(r["o"])(t)&&Object(r["o"])(t.set)?t.set.bind(n):r["d"],a=Kt({get:e,set:o});Object.defineProperty(i,L,{enumerable:!0,configurable:!0,get:()=>a.value,set:t=>a.value=t})}if(c)for(const r in c)Ke(c[r],i,n,r);if(u){const t=Object(r["o"])(u)?u.call(n):u;Reflect.ownKeys(t).forEach(e=>{ce(e,t[e])})}function D(t,e){Object(r["n"])(e)?e.forEach(e=>t(e.bind(n))):e&&t(e.bind(n))}if(h&&Ge(h,t,"c"),D(Ne,f),D(De,d),D(Le,p),D(Pe,g),D(Te,m),D(Se,y),D(Be,S),D(Ue,O),D(Ve,T),D(Re,b),D(Me,E),D(Fe,I),Object(r["n"])(j))if(j.length){const e=t.exposed||(t.exposed={});j.forEach(t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})})}else t.exposed||(t.exposed={});_&&t.render===r["d"]&&(t.render=_),null!=A&&(t.inheritAttrs=A),C&&(t.components=C),x&&(t.directives=x)}function ze(t,e,n=r["d"],i=!1){Object(r["n"])(t)&&(t=Je(t));for(const o in t){const n=t[o];let s;s=Object(r["u"])(n)?"default"in n?ue(n.from||o,n.default,!0):ue(n.from||o):ue(n),Mt(s)&&i?Object.defineProperty(e,o,{enumerable:!0,configurable:!0,get:()=>s.value,set:t=>s.value=t}):e[o]=s}}function Ge(t,e,n){Pr(Object(r["n"])(t)?t.map(t=>t.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ke(t,e,n,i){const o=i.includes(".")?di(n,i):()=>n[i];if(Object(r["C"])(t)){const n=e[t];Object(r["o"])(n)&&li(o,n)}else if(Object(r["o"])(t))li(o,t.bind(n));else if(Object(r["u"])(t))if(Object(r["n"])(t))t.forEach(t=>Ke(t,e,n,i));else{const i=Object(r["o"])(t.handler)?t.handler.bind(n):e[t.handler];Object(r["o"])(i)&&li(o,i,t)}else 0}function He(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:o,config:{optionMergeStrategies:s}}=t.appContext,a=o.get(e);let c;return a?c=a:i.length||n||r?(c={},i.length&&i.forEach(t=>We(c,t,s,!0)),We(c,e,s)):c=e,o.set(e,c),c}function We(t,e,n,r=!1){const{mixins:i,extends:o}=e;o&&We(t,o,n,!0),i&&i.forEach(e=>We(t,e,n,!0));for(const s in e)if(r&&"expose"===s);else{const r=Qe[s]||n&&n[s];t[s]=r?r(t[s],e[s]):e[s]}return t}const Qe={data:Xe,props:tn,emits:tn,methods:tn,computed:tn,beforeCreate:Ze,created:Ze,beforeMount:Ze,mounted:Ze,beforeUpdate:Ze,updated:Ze,beforeDestroy:Ze,beforeUnmount:Ze,destroyed:Ze,unmounted:Ze,activated:Ze,deactivated:Ze,errorCaptured:Ze,serverPrefetch:Ze,components:tn,directives:tn,watch:en,provide:Xe,inject:Ye};function Xe(t,e){return e?t?function(){return Object(r["h"])(Object(r["o"])(t)?t.call(this,this):t,Object(r["o"])(e)?e.call(this,this):e)}:e:t}function Ye(t,e){return tn(Je(t),Je(e))}function Je(t){if(Object(r["n"])(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ze(t,e){return t?[...new Set([].concat(t,e))]:e}function tn(t,e){return t?Object(r["h"])(Object(r["h"])(Object.create(null),t),e):e}function en(t,e){if(!t)return e;if(!e)return t;const n=Object(r["h"])(Object.create(null),t);for(const r in e)n[r]=Ze(t[r],e[r]);return n}function nn(t,e,n,i=!1){const o={},s={};Object(r["g"])(s,Jn,1),t.propsDefaults=Object.create(null),on(t,e,o,s);for(const r in t.propsOptions[0])r in o||(o[r]=void 0);n?t.props=i?o:It(o):t.type.props?t.props=o:t.props=s,t.attrs=s}function rn(t,e,n,i){const{props:o,attrs:s,vnode:{patchFlag:a}}=t,c=Nt(o),[u]=t.propsOptions;let l=!1;if(!(i||a>0)||16&a){let i;on(t,e,o,s)&&(l=!0);for(const s in c)e&&(Object(r["j"])(e,s)||(i=Object(r["k"])(s))!==s&&Object(r["j"])(e,i))||(u?!n||void 0===n[s]&&void 0===n[i]||(o[s]=sn(u,c,s,void 0,t,!0)):delete o[s]);if(s!==c)for(const t in s)e&&Object(r["j"])(e,t)||(delete s[t],l=!0)}else if(8&a){const n=t.vnode.dynamicProps;for(let i=0;i<n.length;i++){let a=n[i];const h=e[a];if(u)if(Object(r["j"])(s,a))h!==s[a]&&(s[a]=h,l=!0);else{const e=Object(r["e"])(a);o[e]=sn(u,c,e,h,t,!1)}else h!==s[a]&&(s[a]=h,l=!0)}}l&&k(t,"set","$attrs")}function on(t,e,n,i){const[o,s]=t.propsOptions;let a,c=!1;if(e)for(let u in e){if(Object(r["y"])(u))continue;const l=e[u];let h;o&&Object(r["j"])(o,h=Object(r["e"])(u))?s&&s.includes(h)?(a||(a={}))[h]=l:n[h]=l:Qt(t.emitsOptions,u)||l!==i[u]&&(i[u]=l,c=!0)}if(s){const e=Nt(n),i=a||r["b"];for(let a=0;a<s.length;a++){const c=s[a];n[c]=sn(o,e,c,i[c],t,!Object(r["j"])(i,c))}}return c}function sn(t,e,n,i,o,s){const a=t[n];if(null!=a){const t=Object(r["j"])(a,"default");if(t&&void 0===i){const t=a.default;if(a.type!==Function&&Object(r["o"])(t)){const{propsDefaults:r}=o;n in r?i=r[n]:(br(o),i=r[n]=t.call(null,e),wr())}else i=t}a[0]&&(s&&!t?i=!1:!a[1]||""!==i&&i!==Object(r["k"])(n)||(i=!0))}return i}function an(t,e,n=!1){const i=e.propsCache,o=i.get(t);if(o)return o;const s=t.props,a={},c=[];let u=!1;if(!Object(r["o"])(t)){const i=t=>{u=!0;const[n,i]=an(t,e,!0);Object(r["h"])(a,n),i&&c.push(...i)};!n&&e.mixins.length&&e.mixins.forEach(i),t.extends&&i(t.extends),t.mixins&&t.mixins.forEach(i)}if(!s&&!u)return i.set(t,r["a"]),r["a"];if(Object(r["n"])(s))for(let h=0;h<s.length;h++){0;const t=Object(r["e"])(s[h]);cn(t)&&(a[t]=r["b"])}else if(s){0;for(const t in s){const e=Object(r["e"])(t);if(cn(e)){const n=s[t],i=a[e]=Object(r["n"])(n)||Object(r["o"])(n)?{type:n}:n;if(i){const t=hn(Boolean,i.type),n=hn(String,i.type);i[0]=t>-1,i[1]=n<0||t<n,(t>-1||Object(r["j"])(i,"default"))&&c.push(e)}}}}const l=[a,c];return i.set(t,l),l}function cn(t){return"$"!==t[0]}function un(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:null===t?"null":""}function ln(t,e){return un(t)===un(e)}function hn(t,e){return Object(r["n"])(e)?e.findIndex(e=>ln(e,t)):Object(r["o"])(e)&&ln(e,t)?0:-1}const fn=t=>"_"===t[0]||"$stable"===t,dn=t=>Object(r["n"])(t)?t.map(ar):[ar(t)],pn=(t,e,n)=>{const r=Zt((...t)=>dn(e(...t)),n);return r._c=!1,r},gn=(t,e,n)=>{const i=t._ctx;for(const o in t){if(fn(o))continue;const n=t[o];if(Object(r["o"])(n))e[o]=pn(o,n,i);else if(null!=n){0;const t=dn(n);e[o]=()=>t}}},mn=(t,e)=>{const n=dn(e);t.slots.default=()=>n},yn=(t,e)=>{if(32&t.vnode.shapeFlag){const n=e._;n?(t.slots=Nt(e),Object(r["g"])(e,"_",n)):gn(e,t.slots={})}else t.slots={},e&&mn(t,e);Object(r["g"])(t.slots,Jn,1)},vn=(t,e,n)=>{const{vnode:i,slots:o}=t;let s=!0,a=r["b"];if(32&i.shapeFlag){const t=e._;t?n&&1===t?s=!1:(Object(r["h"])(o,e),n||1!==t||delete o._):(s=!e.$stable,gn(e,o)),a=e}else e&&(mn(t,e),a={default:1});if(s)for(const r in o)fn(r)||r in a||delete o[r]};function bn(t,e){const n=Xt;if(null===n)return t;const i=n.proxy,o=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[t,n,a,c=r["b"]]=e[s];Object(r["o"])(t)&&(t={mounted:t,updated:t}),t.deep&&pi(n),o.push({dir:t,instance:i,value:n,oldValue:void 0,arg:a,modifiers:c})}return t}function wn(t,e,n,r){const i=t.dirs,o=e&&e.dirs;for(let s=0;s<i.length;s++){const a=i[s];o&&(a.oldValue=o[s].value);let c=a.dir[r];c&&(S(),Pr(c,n,8,[t.el,a,t,e]),j())}}function En(){return{app:null,config:{isNativeTag:r["c"],performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _n=0;function On(t,e){return function(n,i=null){null==i||Object(r["u"])(i)||(i=null);const o=En(),s=new Set;let a=!1;const c=o.app={_uid:_n++,_component:n,_props:i,_container:null,_context:o,_instance:null,version:mi,get config(){return o.config},set config(t){0},use(t,...e){return s.has(t)||(t&&Object(r["o"])(t.install)?(s.add(t),t.install(c,...e)):Object(r["o"])(t)&&(s.add(t),t(c,...e))),c},mixin(t){return o.mixins.includes(t)||o.mixins.push(t),c},component(t,e){return e?(o.components[t]=e,c):o.components[t]},directive(t,e){return e?(o.directives[t]=e,c):o.directives[t]},mount(r,s,u){if(!a){const l=nr(n,i);return l.appContext=o,s&&e?e(l,r):t(l,r,u),a=!0,c._container=r,r.__vue_app__=c,l.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(t,e){return o.provides[t]=e,c}};return c}}function Tn(){}const Sn=ae;function In(t){return jn(t)}function jn(t,e){Tn();const{insert:n,remove:i,patchProp:o,createElement:s,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:f,setScopeId:d=r["d"],cloneNode:p,insertStaticContent:g}=t,m=(t,e,n,r=null,i=null,o=null,s=!1,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!Yn(t,e)&&(r=H(t),q(t,i,o,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=e;switch(u){case Vn:y(t,e,n,r);break;case Un:v(t,e,n,r);break;case Bn:null==t&&b(e,n,r,s);break;case Fn:N(t,e,n,r,i,o,s,a,c);break;default:1&h?O(t,e,n,r,i,o,s,a,c):6&h?D(t,e,n,r,i,o,s,a,c):(64&h||128&h)&&u.process(t,e,n,r,i,o,s,a,c,Q)}null!=l&&i&&An(l,t&&t.ref,o,e||t,!e)},y=(t,e,r,i)=>{if(null==t)n(e.el=a(e.children),r,i);else{const n=e.el=t.el;e.children!==t.children&&u(n,e.children)}},v=(t,e,r,i)=>{null==t?n(e.el=c(e.children||""),r,i):e.el=t.el},b=(t,e,n,r)=>{[t.el,t.anchor]=g(t.children,e,n,r)},w=({el:t,anchor:e},r,i)=>{let o;while(t&&t!==e)o=f(t),n(t,r,i),t=o;n(e,r,i)},_=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=f(t),i(t),t=n;i(e)},O=(t,e,n,r,i,o,s,a,c)=>{s=s||"svg"===e.type,null==t?T(e,n,r,i,o,s,a,c):C(t,e,i,o,s,a,c)},T=(t,e,i,a,c,u,h,f)=>{let d,g;const{type:m,props:y,shapeFlag:v,transition:b,patchFlag:w,dirs:E}=t;if(t.el&&void 0!==p&&-1===w)d=t.el=p(t.el);else{if(d=t.el=s(t.type,u,y&&y.is,y),8&v?l(d,t.children):16&v&&A(t.children,d,null,a,c,u&&"foreignObject"!==m,h,f),E&&wn(t,null,a,"created"),y){for(const e in y)"value"===e||Object(r["y"])(e)||o(d,e,null,y[e],u,t.children,a,c,K);"value"in y&&o(d,"value",null,y.value),(g=y.onVnodeBeforeMount)&&Cn(g,a,t)}I(d,t,t.scopeId,h,a)}E&&wn(t,null,a,"beforeMount");const _=(!c||c&&!c.pendingBranch)&&b&&!b.persisted;_&&b.beforeEnter(d),n(d,e,i),((g=y&&y.onVnodeMounted)||_||E)&&Sn(()=>{g&&Cn(g,a,t),_&&b.enter(d),E&&wn(t,null,a,"mounted")},c)},I=(t,e,n,r,i)=>{if(n&&d(t,n),r)for(let o=0;o<r.length;o++)d(t,r[o]);if(i){let n=i.subTree;if(e===n){const e=i.vnode;I(t,e,e.scopeId,e.slotScopeIds,i.parent)}}},A=(t,e,n,r,i,o,s,a,c=0)=>{for(let u=c;u<t.length;u++){const c=t[u]=a?cr(t[u]):ar(t[u]);m(null,c,e,n,r,i,o,s,a)}},C=(t,e,n,i,s,a,c)=>{const u=e.el=t.el;let{patchFlag:h,dynamicChildren:f,dirs:d}=e;h|=16&t.patchFlag;const p=t.props||r["b"],g=e.props||r["b"];let m;(m=g.onVnodeBeforeUpdate)&&Cn(m,n,e,t),d&&wn(e,t,n,"beforeUpdate");const y=s&&"foreignObject"!==e.type;if(f?x(t.dynamicChildren,f,u,n,i,y,a):c||F(t,e,u,null,n,i,y,a,!1),h>0){if(16&h)k(u,e,p,g,n,i,s);else if(2&h&&p.class!==g.class&&o(u,"class",null,g.class,s),4&h&&o(u,"style",p.style,g.style,s),8&h){const r=e.dynamicProps;for(let e=0;e<r.length;e++){const a=r[e],c=p[a],l=g[a];l===c&&"value"!==a||o(u,a,c,l,s,t.children,n,i,K)}}1&h&&t.children!==e.children&&l(u,e.children)}else c||null!=f||k(u,e,p,g,n,i,s);((m=g.onVnodeUpdated)||d)&&Sn(()=>{m&&Cn(m,n,e,t),d&&wn(e,t,n,"updated")},i)},x=(t,e,n,r,i,o,s)=>{for(let a=0;a<e.length;a++){const c=t[a],u=e[a],l=c.el&&(c.type===Fn||!Yn(c,u)||70&c.shapeFlag)?h(c.el):n;m(c,u,l,null,r,i,o,s,!0)}},k=(t,e,n,i,s,a,c)=>{if(n!==i){for(const u in i){if(Object(r["y"])(u))continue;const l=i[u],h=n[u];l!==h&&"value"!==u&&o(t,u,h,l,c,e.children,s,a,K)}if(n!==r["b"])for(const u in n)Object(r["y"])(u)||u in i||o(t,u,n[u],null,c,e.children,s,a,K);"value"in i&&o(t,"value",n.value,i.value)}},N=(t,e,r,i,o,s,c,u,l)=>{const h=e.el=t?t.el:a(""),f=e.anchor=t?t.anchor:a("");let{patchFlag:d,dynamicChildren:p,slotScopeIds:g}=e;g&&(u=u?u.concat(g):g),null==t?(n(h,r,i),n(f,r,i),A(e.children,r,f,o,s,c,u,l)):d>0&&64&d&&p&&t.dynamicChildren?(x(t.dynamicChildren,p,r,o,s,c,u),(null!=e.key||o&&e===o.subTree)&&xn(t,e,!0)):F(t,e,r,f,o,s,c,u,l)},D=(t,e,n,r,i,o,s,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?i.ctx.activate(e,n,r,s,c):L(e,n,r,i,o,s,c):P(t,e,c)},L=(t,e,n,r,i,o,s)=>{const a=t.component=mr(t,r,i);if(_e(t)&&(a.ctx.renderer=Q),Sr(a),a.asyncDep){if(i&&i.registerDep(a,R),!t.el){const t=a.subTree=nr(Un);v(null,t,e,n)}}else R(a,t,e,n,i,o,s)},P=(t,e,n)=>{const r=e.component=t.component;if(re(t,e,n)){if(r.asyncDep&&!r.asyncResolved)return void M(r,e,n);r.next=e,ei(r.update),r.update()}else e.component=t.component,e.el=t.el,r.vnode=e},R=(t,e,n,i,o,s,a)=>{const c=()=>{if(t.isMounted){let e,{next:n,bu:i,u:c,parent:l,vnode:f}=t,d=n;0,u.allowRecurse=!1,n?(n.el=f.el,M(t,n,a)):n=f,i&&Object(r["m"])(i),(e=n.props&&n.props.onVnodeBeforeUpdate)&&Cn(e,l,n,f),u.allowRecurse=!0;const p=te(t);0;const g=t.subTree;t.subTree=p,m(g,p,h(g.el),H(g),t,o,s),n.el=p.el,null===d&&oe(t,p.el),c&&Sn(c,o),(e=n.props&&n.props.onVnodeUpdated)&&Sn(()=>Cn(e,l,n,f),o)}else{let a;const{el:c,props:l}=e,{bm:h,m:f,parent:d}=t,p=Ee(e);if(u.allowRecurse=!1,h&&Object(r["m"])(h),!p&&(a=l&&l.onVnodeBeforeMount)&&Cn(a,d,e),u.allowRecurse=!0,c&&Y){const n=()=>{t.subTree=te(t),Y(c,t.subTree,t,o,null)};p?e.type.__asyncLoader().then(()=>!t.isUnmounted&&n()):n()}else{0;const r=t.subTree=te(t);0,m(null,r,n,i,t,o,s),e.el=r.el}if(f&&Sn(f,o),!p&&(a=l&&l.onVnodeMounted)){const t=e;Sn(()=>Cn(a,d,t),o)}256&e.shapeFlag&&t.a&&Sn(t.a,o),t.isMounted=!0,e=n=i=null}},u=new E(c,()=>Zr(t.update),t.scope),l=t.update=u.run.bind(u);l.id=t.uid,u.allowRecurse=l.allowRecurse=!0,l()},M=(t,e,n)=>{e.component=t;const r=t.vnode.props;t.vnode=e,t.next=null,rn(t,e.props,r,n),vn(t,e.children,n),S(),oi(void 0,t.update),j()},F=(t,e,n,r,i,o,s,a,c=!1)=>{const u=t&&t.children,h=t?t.shapeFlag:0,f=e.children,{patchFlag:d,shapeFlag:p}=e;if(d>0){if(128&d)return void U(u,f,n,r,i,o,s,a,c);if(256&d)return void V(u,f,n,r,i,o,s,a,c)}8&p?(16&h&&K(u,i,o),f!==u&&l(n,f)):16&h?16&p?U(u,f,n,r,i,o,s,a,c):K(u,i,o,!0):(8&h&&l(n,""),16&p&&A(f,n,r,i,o,s,a,c))},V=(t,e,n,i,o,s,a,c,u)=>{t=t||r["a"],e=e||r["a"];const l=t.length,h=e.length,f=Math.min(l,h);let d;for(d=0;d<f;d++){const r=e[d]=u?cr(e[d]):ar(e[d]);m(t[d],r,n,null,o,s,a,c,u)}l>h?K(t,o,s,!0,!1,f):A(e,n,i,o,s,a,c,u,f)},U=(t,e,n,i,o,s,a,c,u)=>{let l=0;const h=e.length;let f=t.length-1,d=h-1;while(l<=f&&l<=d){const r=t[l],i=e[l]=u?cr(e[l]):ar(e[l]);if(!Yn(r,i))break;m(r,i,n,null,o,s,a,c,u),l++}while(l<=f&&l<=d){const r=t[f],i=e[d]=u?cr(e[d]):ar(e[d]);if(!Yn(r,i))break;m(r,i,n,null,o,s,a,c,u),f--,d--}if(l>f){if(l<=d){const t=d+1,r=t<h?e[t].el:i;while(l<=d)m(null,e[l]=u?cr(e[l]):ar(e[l]),n,r,o,s,a,c,u),l++}}else if(l>d)while(l<=f)q(t[l],o,s,!0),l++;else{const p=l,g=l,y=new Map;for(l=g;l<=d;l++){const t=e[l]=u?cr(e[l]):ar(e[l]);null!=t.key&&y.set(t.key,l)}let v,b=0;const w=d-g+1;let E=!1,_=0;const O=new Array(w);for(l=0;l<w;l++)O[l]=0;for(l=p;l<=f;l++){const r=t[l];if(b>=w){q(r,o,s,!0);continue}let i;if(null!=r.key)i=y.get(r.key);else for(v=g;v<=d;v++)if(0===O[v-g]&&Yn(r,e[v])){i=v;break}void 0===i?q(r,o,s,!0):(O[i-g]=l+1,i>=_?_=i:E=!0,m(r,e[i],n,null,o,s,a,c,u),b++)}const T=E?kn(O):r["a"];for(v=T.length-1,l=w-1;l>=0;l--){const t=g+l,r=e[t],f=t+1<h?e[t+1].el:i;0===O[l]?m(null,r,n,f,o,s,a,c,u):E&&(v<0||l!==T[v]?B(r,n,f,2):v--)}}},B=(t,e,r,i,o=null)=>{const{el:s,type:a,transition:c,children:u,shapeFlag:l}=t;if(6&l)return void B(t.component.subTree,e,r,i);if(128&l)return void t.suspense.move(e,r,i);if(64&l)return void a.move(t,e,r,Q);if(a===Fn){n(s,e,r);for(let t=0;t<u.length;t++)B(u[t],e,r,i);return void n(t.anchor,e,r)}if(a===Bn)return void w(t,e,r);const h=2!==i&&1&l&&c;if(h)if(0===i)c.beforeEnter(s),n(s,e,r),Sn(()=>c.enter(s),o);else{const{leave:t,delayLeave:i,afterLeave:o}=c,a=()=>n(s,e,r),u=()=>{t(s,()=>{a(),o&&o()})};i?i(s,a,u):u()}else n(s,e,r)},q=(t,e,n,r=!1,i=!1)=>{const{type:o,props:s,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:f}=t;if(null!=a&&An(a,null,n,t,!0),256&l)return void e.ctx.deactivate(t);const d=1&l&&f,p=!Ee(t);let g;if(p&&(g=s&&s.onVnodeBeforeUnmount)&&Cn(g,e,t),6&l)G(t.component,n,r);else{if(128&l)return void t.suspense.unmount(n,r);d&&wn(t,null,e,"beforeUnmount"),64&l?t.type.remove(t,e,n,i,Q,r):u&&(o!==Fn||h>0&&64&h)?K(u,e,n,!1,!0):(o===Fn&&384&h||!i&&16&l)&&K(c,e,n),r&&$(t)}(p&&(g=s&&s.onVnodeUnmounted)||d)&&Sn(()=>{g&&Cn(g,e,t),d&&wn(t,null,e,"unmounted")},n)},$=t=>{const{type:e,el:n,anchor:r,transition:o}=t;if(e===Fn)return void z(n,r);if(e===Bn)return void _(t);const s=()=>{i(n),o&&!o.persisted&&o.afterLeave&&o.afterLeave()};if(1&t.shapeFlag&&o&&!o.persisted){const{leave:e,delayLeave:r}=o,i=()=>e(n,s);r?r(t.el,s,i):i()}else s()},z=(t,e)=>{let n;while(t!==e)n=f(t),i(t),t=n;i(e)},G=(t,e,n)=>{const{bum:i,scope:o,update:s,subTree:a,um:c}=t;i&&Object(r["m"])(i),o.stop(),s&&(s.active=!1,q(a,t,e,n)),c&&Sn(c,e),Sn(()=>{t.isUnmounted=!0},e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},K=(t,e,n,r=!1,i=!1,o=0)=>{for(let s=o;s<t.length;s++)q(t[s],e,n,r,i)},H=t=>6&t.shapeFlag?H(t.component.subTree):128&t.shapeFlag?t.suspense.next():f(t.anchor||t.el),W=(t,e,n)=>{null==t?e._vnode&&q(e._vnode,null,null,!0):m(e._vnode||null,t,e,null,null,null,n),si(),e._vnode=t},Q={p:m,um:q,m:B,r:$,mt:L,mc:A,pc:F,pbc:x,n:H,o:t};let X,Y;return e&&([X,Y]=e(Q)),{render:W,hydrate:X,createApp:On(W,X)}}function An(t,e,n,i,o=!1){if(Object(r["n"])(t))return void t.forEach((t,s)=>An(t,e&&(Object(r["n"])(e)?e[s]:e),n,i,o));if(Ee(i)&&!o)return;const s=4&i.shapeFlag?kr(i.component)||i.component.proxy:i.el,a=o?null:s,{i:c,r:u}=t;const l=e&&e.r,h=c.refs===r["b"]?c.refs={}:c.refs,f=c.setupState;if(null!=l&&l!==u&&(Object(r["C"])(l)?(h[l]=null,Object(r["j"])(f,l)&&(f[l]=null)):Mt(l)&&(l.value=null)),Object(r["C"])(u)){const t=()=>{h[u]=a,Object(r["j"])(f,u)&&(f[u]=a)};a?(t.id=-1,Sn(t,n)):t()}else if(Mt(u)){const t=()=>{u.value=a};a?(t.id=-1,Sn(t,n)):t()}else Object(r["o"])(u)&&Lr(u,c,12,[a,h])}function Cn(t,e,n,r=null){Pr(t,e,7,[n,r])}function xn(t,e,n=!1){const i=t.children,o=e.children;if(Object(r["n"])(i)&&Object(r["n"])(o))for(let r=0;r<i.length;r++){const t=i[r];let e=o[r];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=o[r]=cr(o[r]),e.el=t.el),n||xn(t,e))}}function kn(t){const e=t.slice(),n=[0];let r,i,o,s,a;const c=t.length;for(r=0;r<c;r++){const c=t[r];if(0!==c){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}o=0,s=n.length-1;while(o<s)a=o+s>>1,t[n[a]]<c?o=a+1:s=a;c<t[n[o]]&&(o>0&&(e[r]=n[o-1]),n[o]=r)}}o=n.length,s=n[o-1];while(o-- >0)n[o]=s,s=e[s];return n}const Nn=t=>t.__isTeleport;const Dn="components";function Ln(t,e){return Rn(Dn,t,!0,e)||t}const Pn=Symbol();function Rn(t,e,n=!0,i=!1){const o=Xt||yr;if(o){const n=o.type;if(t===Dn){const t=Nr(n);if(t&&(t===e||t===Object(r["e"])(e)||t===Object(r["f"])(Object(r["e"])(e))))return n}const s=Mn(o[t]||n[t],e)||Mn(o.appContext[t],e);return!s&&i?n:s}}function Mn(t,e){return t&&(t[e]||t[Object(r["e"])(e)]||t[Object(r["f"])(Object(r["e"])(e))])}const Fn=Symbol(void 0),Vn=Symbol(void 0),Un=Symbol(void 0),Bn=Symbol(void 0),qn=[];let $n=null;function zn(t=!1){qn.push($n=t?null:[])}function Gn(){qn.pop(),$n=qn[qn.length-1]||null}let Kn=1;function Hn(t){Kn+=t}function Wn(t){return t.dynamicChildren=Kn>0?$n||r["a"]:null,Gn(),Kn>0&&$n&&$n.push(t),t}function Qn(t,e,n,r,i,o){return Wn(er(t,e,n,r,i,o,!0))}function Xn(t){return!!t&&!0===t.__v_isVNode}function Yn(t,e){return t.type===e.type&&t.key===e.key}const Jn="__vInternal",Zn=({key:t})=>null!=t?t:null,tr=({ref:t})=>null!=t?Object(r["C"])(t)||Mt(t)||Object(r["o"])(t)?{i:Xt,r:t}:t:null;function er(t,e=null,n=null,i=0,o=null,s=(t===Fn?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Zn(e),ref:e&&tr(e),scopeId:Yt,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:o,dynamicChildren:null,appContext:null};return c?(ur(u,n),128&s&&t.normalize(u)):n&&(u.shapeFlag|=Object(r["C"])(n)?8:16),Kn>0&&!a&&$n&&(u.patchFlag>0||6&s)&&32!==u.patchFlag&&$n.push(u),u}const nr=rr;function rr(t,e=null,n=null,i=0,o=null,s=!1){if(t&&t!==Pn||(t=Un),Xn(t)){const r=or(t,e,!0);return n&&ur(r,n),r}if(Dr(t)&&(t=t.__vccOpts),e){e=ir(e);let{class:t,style:n}=e;t&&!Object(r["C"])(t)&&(e.class=Object(r["H"])(t)),Object(r["u"])(n)&&(kt(n)&&!Object(r["n"])(n)&&(n=Object(r["h"])({},n)),e.style=Object(r["I"])(n))}const a=Object(r["C"])(t)?1:se(t)?128:Nn(t)?64:Object(r["u"])(t)?4:Object(r["o"])(t)?2:0;return er(t,e,n,i,o,a,s,!0)}function ir(t){return t?kt(t)||Jn in t?Object(r["h"])({},t):t:null}function or(t,e,n=!1){const{props:i,ref:o,patchFlag:s,children:a}=t,c=e?lr(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Zn(c),ref:e&&e.ref?n&&o?Object(r["n"])(o)?o.concat(tr(e)):[o,tr(e)]:tr(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Fn?-1===s?16:16|s:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&or(t.ssContent),ssFallback:t.ssFallback&&or(t.ssFallback),el:t.el,anchor:t.anchor};return u}function sr(t=" ",e=0){return nr(Vn,null,t,e)}function ar(t){return null==t||"boolean"===typeof t?nr(Un):Object(r["n"])(t)?nr(Fn,null,t.slice()):"object"===typeof t?cr(t):nr(Vn,null,String(t))}function cr(t){return null===t.el||t.memo?t:or(t)}function ur(t,e){let n=0;const{shapeFlag:i}=t;if(null==e)e=null;else if(Object(r["n"])(e))n=16;else if("object"===typeof e){if(65&i){const n=e.default;return void(n&&(n._c&&(n._d=!1),ur(t,n()),n._c&&(n._d=!0)))}{n=32;const r=e._;r||Jn in e?3===r&&Xt&&(1===Xt.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=Xt}}else Object(r["o"])(e)?(e={default:e,_ctx:Xt},n=32):(e=String(e),64&i?(n=16,e=[sr(e)]):n=8);t.children=e,t.shapeFlag|=n}function lr(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const t in i)if("class"===t)e.class!==i.class&&(e.class=Object(r["H"])([e.class,i.class]));else if("style"===t)e.style=Object(r["I"])([e.style,i.style]);else if(Object(r["v"])(t)){const n=e[t],r=i[t];n!==r&&(e[t]=n?[].concat(n,r):r)}else""!==t&&(e[t]=i[t])}return e}const hr=t=>t?Er(t)?kr(t)||t.proxy:hr(t.parent):null,fr=Object(r["h"])(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>hr(t.parent),$root:t=>hr(t.root),$emit:t=>t.emit,$options:t=>He(t),$forceUpdate:t=>()=>Zr(t.update),$nextTick:t=>Yr.bind(t.proxy),$watch:t=>fi.bind(t)}),dr={get({_:t},e){const{ctx:n,setupState:i,data:o,props:s,accessCache:a,type:c,appContext:u}=t;let l;if("$"!==e[0]){const c=a[e];if(void 0!==c)switch(c){case 0:return i[e];case 1:return o[e];case 3:return n[e];case 2:return s[e]}else{if(i!==r["b"]&&Object(r["j"])(i,e))return a[e]=0,i[e];if(o!==r["b"]&&Object(r["j"])(o,e))return a[e]=1,o[e];if((l=t.propsOptions[0])&&Object(r["j"])(l,e))return a[e]=2,s[e];if(n!==r["b"]&&Object(r["j"])(n,e))return a[e]=3,n[e];qe&&(a[e]=4)}}const h=fr[e];let f,d;return h?("$attrs"===e&&A(t,"get",e),h(t)):(f=c.__cssModules)&&(f=f[e])?f:n!==r["b"]&&Object(r["j"])(n,e)?(a[e]=3,n[e]):(d=u.config.globalProperties,Object(r["j"])(d,e)?d[e]:void 0)},set({_:t},e,n){const{data:i,setupState:o,ctx:s}=t;if(o!==r["b"]&&Object(r["j"])(o,e))o[e]=n;else if(i!==r["b"]&&Object(r["j"])(i,e))i[e]=n;else if(Object(r["j"])(t.props,e))return!1;return("$"!==e[0]||!(e.slice(1)in t))&&(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:o,propsOptions:s}},a){let c;return void 0!==n[a]||t!==r["b"]&&Object(r["j"])(t,a)||e!==r["b"]&&Object(r["j"])(e,a)||(c=s[0])&&Object(r["j"])(c,a)||Object(r["j"])(i,a)||Object(r["j"])(fr,a)||Object(r["j"])(o.config.globalProperties,a)}};const pr=En();let gr=0;function mr(t,e,n){const i=t.type,o=(e?e.appContext:t.appContext)||pr,a={uid:gr++,vnode:t,type:i,parent:e,appContext:o,root:null,next:null,subTree:null,update:null,scope:new s(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:an(i,o),emitsOptions:Wt(i,o),emit:null,emitted:null,propsDefaults:r["b"],inheritAttrs:i.inheritAttrs,ctx:r["b"],data:r["b"],props:r["b"],attrs:r["b"],slots:r["b"],refs:r["b"],setupState:r["b"],setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=Ht.bind(null,a),t.ce&&t.ce(a),a}let yr=null;const vr=()=>yr||Xt,br=t=>{yr=t,t.scope.on()},wr=()=>{yr&&yr.scope.off(),yr=null};function Er(t){return 4&t.vnode.shapeFlag}let _r,Or,Tr=!1;function Sr(t,e=!1){Tr=e;const{props:n,children:r}=t.vnode,i=Er(t);nn(t,n,i,e),yn(t,r);const o=i?Ir(t,e):void 0;return Tr=!1,o}function Ir(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Dt(new Proxy(t.ctx,dr));const{setup:i}=n;if(i){const n=t.setupContext=i.length>1?xr(t):null;br(t),S();const o=Lr(i,t,0,[t.props,n]);if(j(),wr(),Object(r["x"])(o)){if(o.then(wr,wr),e)return o.then(n=>{jr(t,n,e)}).catch(e=>{Rr(e,t,0)});t.asyncDep=o}else jr(t,o,e)}else Ar(t,e)}function jr(t,e,n){Object(r["o"])(e)?t.render=e:Object(r["u"])(e)&&(t.setupState=zt(e)),Ar(t,n)}function Ar(t,e,n){const i=t.type;if(!t.render){if(_r&&!i.render){const e=i.template;if(e){0;const{isCustomElement:n,compilerOptions:o}=t.appContext.config,{delimiters:s,compilerOptions:a}=i,c=Object(r["h"])(Object(r["h"])({isCustomElement:n,delimiters:s},o),a);i.render=_r(e,c)}}t.render=i.render||r["d"],Or&&Or(t)}br(t),S(),$e(t),j(),wr()}function Cr(t){return new Proxy(t.attrs,{get(e,n){return A(t,"get","$attrs"),e[n]}})}function xr(t){const e=e=>{t.exposed=e||{}};let n;return{get attrs(){return n||(n=Cr(t))},slots:t.slots,emit:t.emit,expose:e}}function kr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(zt(Dt(t.exposed)),{get(e,n){return n in e?e[n]:n in fr?fr[n](t):void 0}}))}function Nr(t){return Object(r["o"])(t)&&t.displayName||t.name}function Dr(t){return Object(r["o"])(t)&&"__vccOpts"in t}function Lr(t,e,n,r){let i;try{i=r?t(...r):t()}catch(o){Rr(o,e,n)}return i}function Pr(t,e,n,i){if(Object(r["o"])(t)){const o=Lr(t,e,n,i);return o&&Object(r["x"])(o)&&o.catch(t=>{Rr(t,e,n)}),o}const o=[];for(let r=0;r<t.length;r++)o.push(Pr(t[r],e,n,i));return o}function Rr(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const i=e.proxy,o=n;while(r){const e=r.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,i,o))return;r=r.parent}const s=e.appContext.config.errorHandler;if(s)return void Lr(s,null,10,[t,i,o])}Mr(t,n,i,r)}function Mr(t,e,n,r=!0){console.error(t)}let Fr=!1,Vr=!1;const Ur=[];let Br=0;const qr=[];let $r=null,zr=0;const Gr=[];let Kr=null,Hr=0;const Wr=Promise.resolve();let Qr=null,Xr=null;function Yr(t){const e=Qr||Wr;return t?e.then(this?t.bind(this):t):e}function Jr(t){let e=Br+1,n=Ur.length;while(e<n){const r=e+n>>>1,i=ai(Ur[r]);i<t?e=r+1:n=r}return e}function Zr(t){Ur.length&&Ur.includes(t,Fr&&t.allowRecurse?Br+1:Br)||t===Xr||(null==t.id?Ur.push(t):Ur.splice(Jr(t.id),0,t),ti())}function ti(){Fr||Vr||(Vr=!0,Qr=Wr.then(ci))}function ei(t){const e=Ur.indexOf(t);e>Br&&Ur.splice(e,1)}function ni(t,e,n,i){Object(r["n"])(t)?n.push(...t):e&&e.includes(t,t.allowRecurse?i+1:i)||n.push(t),ti()}function ri(t){ni(t,$r,qr,zr)}function ii(t){ni(t,Kr,Gr,Hr)}function oi(t,e=null){if(qr.length){for(Xr=e,$r=[...new Set(qr)],qr.length=0,zr=0;zr<$r.length;zr++)$r[zr]();$r=null,zr=0,Xr=null,oi(t,e)}}function si(t){if(Gr.length){const t=[...new Set(Gr)];if(Gr.length=0,Kr)return void Kr.push(...t);for(Kr=t,Kr.sort((t,e)=>ai(t)-ai(e)),Hr=0;Hr<Kr.length;Hr++)Kr[Hr]();Kr=null,Hr=0}}const ai=t=>null==t.id?1/0:t.id;function ci(t){Vr=!1,Fr=!0,oi(t),Ur.sort((t,e)=>ai(t)-ai(e));try{for(Br=0;Br<Ur.length;Br++){const t=Ur[Br];t&&!1!==t.active&&Lr(t,null,14)}}finally{Br=0,Ur.length=0,si(t),Fr=!1,Qr=null,(Ur.length||qr.length||Gr.length)&&ci(t)}}const ui={};function li(t,e,n){return hi(t,e,n)}function hi(t,e,{immediate:n,deep:i,flush:o,onTrack:s,onTrigger:a}=r["b"]){const c=yr;let u,l,h=!1,f=!1;if(Mt(t)?(u=()=>t.value,h=!!t._shallow):Ct(t)?(u=()=>t,i=!0):Object(r["n"])(t)?(f=!0,h=t.some(Ct),u=()=>t.map(t=>Mt(t)?t.value:Ct(t)?pi(t):Object(r["o"])(t)?Lr(t,c,2):void 0)):u=Object(r["o"])(t)?e?()=>Lr(t,c,2):()=>{if(!c||!c.isUnmounted)return l&&l(),Pr(t,c,3,[d])}:r["d"],e&&i){const t=u;u=()=>pi(t())}let d=t=>{l=y.onStop=()=>{Lr(t,c,4)}},p=f?[]:ui;const g=()=>{if(y.active)if(e){const t=y.run();(i||h||(f?t.some((t,e)=>Object(r["i"])(t,p[e])):Object(r["i"])(t,p)))&&(l&&l(),Pr(e,c,3,[t,p===ui?void 0:p,d]),p=t)}else y.run()};let m;g.allowRecurse=!!e,m="sync"===o?g:"post"===o?()=>Sn(g,c&&c.suspense):()=>{!c||c.isMounted?ri(g):g()};const y=new E(u,m);return e?n?g():p=y.run():"post"===o?Sn(y.run.bind(y),c&&c.suspense):y.run(),()=>{y.stop(),c&&c.scope&&Object(r["J"])(c.scope.effects,y)}}function fi(t,e,n){const i=this.proxy,o=Object(r["C"])(t)?t.includes(".")?di(i,t):()=>i[t]:t.bind(i,i);let s;Object(r["o"])(e)?s=e:(s=e.handler,n=e);const a=yr;br(this);const c=hi(o,s.bind(i),n);return a?br(a):wr(),c}function di(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}function pi(t,e=new Set){if(!Object(r["u"])(t)||t["__v_skip"])return t;if(e=e||new Set,e.has(t))return t;if(e.add(t),Mt(t))pi(t.value,e);else if(Object(r["n"])(t))for(let n=0;n<t.length;n++)pi(t[n],e);else if(Object(r["A"])(t)||Object(r["s"])(t))t.forEach(t=>{pi(t,e)});else if(Object(r["w"])(t))for(const n in t)pi(t[n],e);return t}function gi(t,e,n){const i=arguments.length;return 2===i?Object(r["u"])(e)&&!Object(r["n"])(e)?Xn(e)?nr(t,null,[e]):nr(t,e):nr(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):3===i&&Xn(n)&&(n=[n]),nr(t,e,n))}Symbol("");const mi="3.2.11",yi="http://www.w3.org/2000/svg",vi="undefined"!==typeof document?document:null,bi=new Map,wi={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?vi.createElementNS(yi,t):vi.createElement(t,n?{is:n}:void 0);return"select"===t&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:t=>vi.createTextNode(t),createComment:t=>vi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>vi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r){const i=n?n.previousSibling:e.lastChild;let o=bi.get(t);if(!o){const e=vi.createElement("template");if(e.innerHTML=r?`<svg>${t}</svg>`:t,o=e.content,r){const t=o.firstChild;while(t.firstChild)o.appendChild(t.firstChild);o.removeChild(t)}bi.set(t,o)}return e.insertBefore(o.cloneNode(!0),n),[i?i.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Ei(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function _i(t,e,n){const i=t.style,o=i.display;if(n)if(Object(r["C"])(n))e!==n&&(i.cssText=n);else{for(const t in n)Ti(i,t,n[t]);if(e&&!Object(r["C"])(e))for(const t in e)null==n[t]&&Ti(i,t,"")}else t.removeAttribute("style");"_vod"in t&&(i.display=o)}const Oi=/\s*!important$/;function Ti(t,e,n){if(Object(r["n"])(n))n.forEach(n=>Ti(t,e,n));else if(e.startsWith("--"))t.setProperty(e,n);else{const i=ji(t,e);Oi.test(n)?t.setProperty(Object(r["k"])(i),n.replace(Oi,""),"important"):t[i]=n}}const Si=["Webkit","Moz","ms"],Ii={};function ji(t,e){const n=Ii[e];if(n)return n;let i=Object(r["e"])(e);if("filter"!==i&&i in t)return Ii[e]=i;i=Object(r["f"])(i);for(let r=0;r<Si.length;r++){const n=Si[r]+i;if(n in t)return Ii[e]=n}return e}const Ai="http://www.w3.org/1999/xlink";function Ci(t,e,n,i,o){if(i&&e.startsWith("xlink:"))null==n?t.removeAttributeNS(Ai,e.slice(6,e.length)):t.setAttributeNS(Ai,e,n);else{const i=Object(r["B"])(e);null==n||i&&!Object(r["l"])(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function xi(t,e,n,i,o,s,a){if("innerHTML"===e||"textContent"===e)return i&&a(i,o,s),void(t[e]=null==n?"":n);if("value"===e&&"PROGRESS"!==t.tagName){t._value=n;const r=null==n?"":n;return t.value!==r&&(t.value=r),void(null==n&&t.removeAttribute(e))}if(""===n||null==n){const i=typeof t[e];if("boolean"===i)return void(t[e]=Object(r["l"])(n));if(null==n&&"string"===i)return t[e]="",void t.removeAttribute(e);if("number"===i){try{t[e]=0}catch(c){}return void t.removeAttribute(e)}}try{t[e]=n}catch(u){0}}let ki=Date.now,Ni=!1;if("undefined"!==typeof window){ki()>document.createEvent("Event").timeStamp&&(ki=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);Ni=!!(t&&Number(t[1])<=53)}let Di=0;const Li=Promise.resolve(),Pi=()=>{Di=0},Ri=()=>Di||(Li.then(Pi),Di=ki());function Mi(t,e,n,r){t.addEventListener(e,n,r)}function Fi(t,e,n,r){t.removeEventListener(e,n,r)}function Vi(t,e,n,r,i=null){const o=t._vei||(t._vei={}),s=o[e];if(r&&s)s.value=r;else{const[n,a]=Bi(e);if(r){const s=o[e]=qi(r,i);Mi(t,n,s,a)}else s&&(Fi(t,n,s,a),o[e]=void 0)}}const Ui=/(?:Once|Passive|Capture)$/;function Bi(t){let e;if(Ui.test(t)){let n;e={};while(n=t.match(Ui))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Object(r["k"])(t.slice(2)),e]}function qi(t,e){const n=t=>{const r=t.timeStamp||ki();(Ni||r>=n.attached-1)&&Pr($i(t,n.value),e,5,[t])};return n.value=t,n.attached=Ri(),n}function $i(t,e){if(Object(r["n"])(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(t=>e=>!e._stopped&&t(e))}return e}const zi=/^on[a-z]/,Gi=(t,e,n,i,o=!1,s,a,c,u)=>{"class"===e?Ei(t,i,o):"style"===e?_i(t,n,i):Object(r["v"])(e)?Object(r["t"])(e)||Vi(t,e,n,i,a):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):Ki(t,e,i,o))?xi(t,e,i,s,a,c,u):("true-value"===e?t._trueValue=i:"false-value"===e&&(t._falseValue=i),Ci(t,e,i,o))};function Ki(t,e,n,i){return i?"innerHTML"===e||"textContent"===e||!!(e in t&&zi.test(e)&&Object(r["o"])(n)):"spellcheck"!==e&&"draggable"!==e&&("form"!==e&&(("list"!==e||"INPUT"!==t.tagName)&&(("type"!==e||"TEXTAREA"!==t.tagName)&&((!zi.test(e)||!Object(r["C"])(n))&&e in t))))}"undefined"!==typeof HTMLElement&&HTMLElement;const Hi="transition",Wi="animation",Qi=(t,{slots:e})=>gi(de,Zi(t),e);Qi.displayName="Transition";const Xi={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Yi=(Qi.props=Object(r["h"])({},de.props,Xi),(t,e=[])=>{Object(r["n"])(t)?t.forEach(t=>t(...e)):t&&t(...e)}),Ji=t=>!!t&&(Object(r["n"])(t)?t.some(t=>t.length>1):t.length>1);function Zi(t){const e={};for(const r in t)r in Xi||(e[r]=t[r]);if(!1===t.css)return e;const{name:n="v",type:i,duration:o,enterFromClass:s=n+"-enter-from",enterActiveClass:a=n+"-enter-active",enterToClass:c=n+"-enter-to",appearFromClass:u=s,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:f=n+"-leave-from",leaveActiveClass:d=n+"-leave-active",leaveToClass:p=n+"-leave-to"}=t,g=to(o),m=g&&g[0],y=g&&g[1],{onBeforeEnter:v,onEnter:b,onEnterCancelled:w,onLeave:E,onLeaveCancelled:_,onBeforeAppear:O=v,onAppear:T=b,onAppearCancelled:S=w}=e,I=(t,e,n)=>{ro(t,e?h:c),ro(t,e?l:a),n&&n()},j=(t,e)=>{ro(t,p),ro(t,d),e&&e()},A=t=>(e,n)=>{const r=t?T:b,o=()=>I(e,t,n);Yi(r,[e,o]),io(()=>{ro(e,t?u:s),no(e,t?h:c),Ji(r)||so(e,i,m,o)})};return Object(r["h"])(e,{onBeforeEnter(t){Yi(v,[t]),no(t,s),no(t,a)},onBeforeAppear(t){Yi(O,[t]),no(t,u),no(t,l)},onEnter:A(!1),onAppear:A(!0),onLeave(t,e){const n=()=>j(t,e);no(t,f),lo(),no(t,d),io(()=>{ro(t,f),no(t,p),Ji(E)||so(t,i,y,n)}),Yi(E,[t,n])},onEnterCancelled(t){I(t,!1),Yi(w,[t])},onAppearCancelled(t){I(t,!0),Yi(S,[t])},onLeaveCancelled(t){j(t),Yi(_,[t])}})}function to(t){if(null==t)return null;if(Object(r["u"])(t))return[eo(t.enter),eo(t.leave)];{const e=eo(t);return[e,e]}}function eo(t){const e=Object(r["L"])(t);return e}function no(t,e){e.split(/\s+/).forEach(e=>e&&t.classList.add(e)),(t._vtc||(t._vtc=new Set)).add(e)}function ro(t,e){e.split(/\s+/).forEach(e=>e&&t.classList.remove(e));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function io(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let oo=0;function so(t,e,n,r){const i=t._endId=++oo,o=()=>{i===t._endId&&r()};if(n)return setTimeout(o,n);const{type:s,timeout:a,propCount:c}=ao(t,e);if(!s)return r();const u=s+"end";let l=0;const h=()=>{t.removeEventListener(u,f),o()},f=e=>{e.target===t&&++l>=c&&h()};setTimeout(()=>{l<c&&h()},a+1),t.addEventListener(u,f)}function ao(t,e){const n=window.getComputedStyle(t),r=t=>(n[t]||"").split(", "),i=r(Hi+"Delay"),o=r(Hi+"Duration"),s=co(i,o),a=r(Wi+"Delay"),c=r(Wi+"Duration"),u=co(a,c);let l=null,h=0,f=0;e===Hi?s>0&&(l=Hi,h=s,f=o.length):e===Wi?u>0&&(l=Wi,h=u,f=c.length):(h=Math.max(s,u),l=h>0?s>u?Hi:Wi:null,f=l?l===Hi?o.length:c.length:0);const d=l===Hi&&/\b(transform|all)(,|$)/.test(n[Hi+"Property"]);return{type:l,timeout:h,propCount:f,hasTransform:d}}function co(t,e){while(t.length<e.length)t=t.concat(t);return Math.max(...e.map((e,n)=>uo(e)+uo(t[n])))}function uo(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function lo(){return document.body.offsetHeight}new WeakMap,new WeakMap;const ho=t=>{const e=t.props["onUpdate:modelValue"];return Object(r["n"])(e)?t=>Object(r["m"])(e,t):e};function fo(t){t.target.composing=!0}function po(t){const e=t.target;e.composing&&(e.composing=!1,go(e,"input"))}function go(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const mo={created(t,{modifiers:{lazy:e,trim:n,number:i}},o){t._assign=ho(o);const s=i||o.props&&"number"===o.props.type;Mi(t,e?"change":"input",e=>{if(e.target.composing)return;let i=t.value;n?i=i.trim():s&&(i=Object(r["L"])(i)),t._assign(i)}),n&&Mi(t,"change",()=>{t.value=t.value.trim()}),e||(Mi(t,"compositionstart",fo),Mi(t,"compositionend",po),Mi(t,"change",po))},mounted(t,{value:e}){t.value=null==e?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:o}},s){if(t._assign=ho(s),t.composing)return;if(document.activeElement===t){if(n)return;if(i&&t.value.trim()===e)return;if((o||"number"===t.type)&&Object(r["L"])(t.value)===e)return}const a=null==e?"":e;t.value!==a&&(t.value=a)}};const yo=["ctrl","shift","alt","meta"],vo={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&0!==t.button,middle:t=>"button"in t&&1!==t.button,right:t=>"button"in t&&2!==t.button,exact:(t,e)=>yo.some(n=>t[n+"Key"]&&!e.includes(n))},bo=(t,e)=>(n,...r)=>{for(let t=0;t<e.length;t++){const r=vo[e[t]];if(r&&r(n,e))return}return t(n,...r)};const wo=Object(r["h"])({patchProp:Gi},wi);let Eo;function _o(){return Eo||(Eo=In(wo))}const Oo=(...t)=>{const e=_o().createApp(...t);const{mount:n}=e;return e.mount=t=>{const i=To(t);if(!i)return;const o=e._component;Object(r["o"])(o)||o.render||o.template||(o.template=i.innerHTML),i.innerHTML="";const s=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},e};function To(t){if(Object(r["C"])(t)){const e=document.querySelector(t);return e}return t}},"7b0b":function(t,e,n){var r=n("1d80");t.exports=function(t){return Object(r(t))}},"7c73":function(t,e,n){var r,i=n("825a"),o=n("37e8"),s=n("7839"),a=n("d012"),c=n("1be4"),u=n("cc12"),l=n("f772"),h=">",f="<",d="prototype",p="script",g=l("IE_PROTO"),m=function(){},y=function(t){return f+p+h+t+f+"/"+p+h},v=function(t){t.write(y("")),t.close();var e=t.parentWindow.Object;return t=null,e},b=function(){var t,e=u("iframe"),n="java"+p+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(y("document.F=Object")),t.close(),t.F},w=function(){try{r=new ActiveXObject("htmlfile")}catch(e){}w="undefined"!=typeof document?document.domain&&r?v(r):b():v(r);var t=s.length;while(t--)delete w[d][s[t]];return w()};a[g]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(m[d]=i(t),n=new m,m[d]=null,n[g]=t):n=w(),void 0===e?n:o(n,e)}},"7dd0":function(t,e,n){"use strict";var r=n("23e7"),i=n("9ed3"),o=n("e163"),s=n("d2bb"),a=n("d44e"),c=n("9112"),u=n("6eeb"),l=n("b622"),h=n("c430"),f=n("3f8c"),d=n("ae93"),p=d.IteratorPrototype,g=d.BUGGY_SAFARI_ITERATORS,m=l("iterator"),y="keys",v="values",b="entries",w=function(){return this};t.exports=function(t,e,n,l,d,E,_){i(n,e,l);var O,T,S,I=function(t){if(t===d&&k)return k;if(!g&&t in C)return C[t];switch(t){case y:return function(){return new n(this,t)};case v:return function(){return new n(this,t)};case b:return function(){return new n(this,t)}}return function(){return new n(this)}},j=e+" Iterator",A=!1,C=t.prototype,x=C[m]||C["@@iterator"]||d&&C[d],k=!g&&x||I(d),N="Array"==e&&C.entries||x;if(N&&(O=o(N.call(new t)),O!==Object.prototype&&O.next&&(h||o(O)===p||(s?s(O,p):"function"!=typeof O[m]&&c(O,m,w)),a(O,j,!0,!0),h&&(f[j]=w))),d==v&&x&&x.name!==v&&(A=!0,k=function(){return x.call(this)}),h&&!_||C[m]===k||c(C,m,k),f[e]=k,d)if(T={values:I(v),keys:E?k:I(y),entries:I(b)},_)for(S in T)(g||A||!(S in C))&&u(C,S,T[S]);else r({target:e,proto:!0,forced:g||A},T);return T}},"7f9a":function(t,e,n){var r=n("da84"),i=n("8925"),o=r.WeakMap;t.exports="function"===typeof o&&/native code/.test(i(o))},"825a":function(t,e,n){var r=n("861d");t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},"83ab":function(t,e,n){var r=n("d039");t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},8418:function(t,e,n){"use strict";var r=n("a04b"),i=n("9bf2"),o=n("5c6c");t.exports=function(t,e,n){var s=r(e);s in t?i.f(t,s,o(0,n)):t[s]=n}},"861d":function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},8925:function(t,e,n){var r=n("c6cd"),i=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return i.call(t)}),t.exports=r.inspectSource},"90e3":function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},9112:function(t,e,n){var r=n("83ab"),i=n("9bf2"),o=n("5c6c");t.exports=r?function(t,e,n){return i.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},"94ca":function(t,e,n){var r=n("d039"),i=/#|\.prototype\./,o=function(t,e){var n=a[s(t)];return n==u||n!=c&&("function"==typeof e?r(e):!!e)},s=o.normalize=function(t){return String(t).replace(i,".").toLowerCase()},a=o.data={},c=o.NATIVE="N",u=o.POLYFILL="P";t.exports=o},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(N){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var i=e&&e.prototype instanceof m?e:m,o=Object.create(i.prototype),s=new C(r||[]);return o._invoke=S(t,n,s),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(N){return{type:"throw",arg:N}}}t.wrap=u;var h="suspendedStart",f="suspendedYield",d="executing",p="completed",g={};function m(){}function y(){}function v(){}var b={};c(b,o,(function(){return this}));var w=Object.getPrototypeOf,E=w&&w(w(x([])));E&&E!==n&&r.call(E,o)&&(b=E);var _=v.prototype=m.prototype=Object.create(b);function O(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function T(t,e){function n(i,o,s,a){var c=l(t[i],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"===typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,s,a)}),(function(t){n("throw",t,s,a)})):e.resolve(h).then((function(t){u.value=t,s(u)}),(function(t){return n("throw",t,s,a)}))}a(c.arg)}var i;function o(t,r){function o(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(o,o):o()}this._invoke=o}function S(t,e,n){var r=h;return function(i,o){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return k()}n.method=i,n.arg=o;while(1){var s=n.delegate;if(s){var a=I(s,n);if(a){if(a===g)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var c=l(t,e,n);if("normal"===c.type){if(r=n.done?p:f,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}function I(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,I(t,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=l(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,g):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function x(t){if(t){var n=t[o];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,s=function n(){while(++i<t.length)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return s.next=s}}return{next:k}}function k(){return{value:e,done:!0}}return y.prototype=v,c(_,"constructor",v),c(v,"constructor",y),y.displayName=c(v,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c(t,a,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},O(T.prototype),c(T.prototype,s,(function(){return this})),t.AsyncIterator=T,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var s=new T(u(e,n,r,i),o);return t.isGeneratorFunction(n)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},O(_),c(_,a,"Generator"),c(_,o,(function(){return this})),c(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=x,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(A),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return a.type="throw",a.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o],a=s.completion;if("root"===s.tryLoc)return i("end");if(s.tryLoc<=this.prev){var c=r.call(s,"catchLoc"),u=r.call(s,"finallyLoc");if(c&&u){if(this.prev<s.catchLoc)return i(s.catchLoc,!0);if(this.prev<s.finallyLoc)return i(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return i(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return i(s.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=t,s.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),A(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;A(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:x(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),g}},t}(t.exports);try{regeneratorRuntime=r}catch(i){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},"9a1f":function(t,e,n){var r=n("825a"),i=n("35a1");t.exports=function(t,e){var n=arguments.length<2?i(t):e;if("function"!=typeof n)throw TypeError(String(t)+" is not iterable");return r(n.call(t))}},"9ab4":function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return s})),n.d(e,"d",(function(){return a})),n.d(e,"g",(function(){return c})),n.d(e,"e",(function(){return u})),n.d(e,"f",(function(){return l}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)};function i(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var o=function(){return o=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n],e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},o.apply(this,arguments)};function s(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function s(t){try{c(r.next(t))}catch(e){o(e)}}function a(t){try{c(r["throw"](t))}catch(e){o(e)}}function c(t){t.done?n(t.value):i(t.value).then(s,a)}c((r=r.apply(t,e||[])).next())}))}function a(t,e){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(t){return function(e){return c([t,e])}}function c(o){if(n)throw new TypeError("Generator is already executing.");while(s)try{if(n=1,r&&(i=2&o[0]?r["return"]:o[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(i=s.trys,!(i=i.length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(a){o=[6,a],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}}Object.create;function c(t){var e="function"===typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"===typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function u(t,e){var n="function"===typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,o=n.call(t),s=[];try{while((void 0===e||e-- >0)&&!(r=o.next()).done)s.push(r.value)}catch(a){i={error:a}}finally{try{r&&!r.done&&(n=o["return"])&&n.call(o)}finally{if(i)throw i.error}}return s}function l(t,e,n){if(n||2===arguments.length)for(var r,i=0,o=e.length;i<o;i++)!r&&i in e||(r||(r=Array.prototype.slice.call(e,0,i)),r[i]=e[i]);return t.concat(r||Array.prototype.slice.call(e))}Object.create},"9bf2":function(t,e,n){var r=n("83ab"),i=n("0cfb"),o=n("825a"),s=n("a04b"),a=Object.defineProperty;e.f=r?a:function(t,e,n){if(o(t),e=s(e),o(n),i)try{return a(t,e,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},"9dbb":function(t,e,n){(function(t,n){n(e)})(0,(function(t){"use strict";function e(t){return Array.prototype.slice.call(t)}function n(t){return new Promise((function(e,n){t.onsuccess=function(){e(t.result)},t.onerror=function(){n(t.error)}}))}function r(t,e,r){var i,o=new Promise((function(o,s){i=t[e].apply(t,r),n(i).then(o,s)}));return o.request=i,o}function i(t,e,n){var i=r(t,e,n);return i.then((function(t){if(t)return new l(t,i.request)}))}function o(t,e,n){n.forEach((function(n){Object.defineProperty(t.prototype,n,{get:function(){return this[e][n]},set:function(t){this[e][n]=t}})}))}function s(t,e,n,i){i.forEach((function(i){i in n.prototype&&(t.prototype[i]=function(){return r(this[e],i,arguments)})}))}function a(t,e,n,r){r.forEach((function(r){r in n.prototype&&(t.prototype[r]=function(){return this[e][r].apply(this[e],arguments)})}))}function c(t,e,n,r){r.forEach((function(r){r in n.prototype&&(t.prototype[r]=function(){return i(this[e],r,arguments)})}))}function u(t){this._index=t}function l(t,e){this._cursor=t,this._request=e}function h(t){this._store=t}function f(t){this._tx=t,this.complete=new Promise((function(e,n){t.oncomplete=function(){e()},t.onerror=function(){n(t.error)},t.onabort=function(){n(t.error)}}))}function d(t,e,n){this._db=t,this.oldVersion=e,this.transaction=new f(n)}function p(t){this._db=t}function g(t,e,n){var i=r(indexedDB,"open",[t,e]),o=i.request;return o&&(o.onupgradeneeded=function(t){n&&n(new d(o.result,t.oldVersion,o.transaction))}),i.then((function(t){return new p(t)}))}function m(t){return r(indexedDB,"deleteDatabase",[t])}o(u,"_index",["name","keyPath","multiEntry","unique"]),s(u,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),c(u,"_index",IDBIndex,["openCursor","openKeyCursor"]),o(l,"_cursor",["direction","key","primaryKey","value"]),s(l,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(t){t in IDBCursor.prototype&&(l.prototype[t]=function(){var e=this,r=arguments;return Promise.resolve().then((function(){return e._cursor[t].apply(e._cursor,r),n(e._request).then((function(t){if(t)return new l(t,e._request)}))}))})})),h.prototype.createIndex=function(){return new u(this._store.createIndex.apply(this._store,arguments))},h.prototype.index=function(){return new u(this._store.index.apply(this._store,arguments))},o(h,"_store",["name","keyPath","indexNames","autoIncrement"]),s(h,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),c(h,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),a(h,"_store",IDBObjectStore,["deleteIndex"]),f.prototype.objectStore=function(){return new h(this._tx.objectStore.apply(this._tx,arguments))},o(f,"_tx",["objectStoreNames","mode"]),a(f,"_tx",IDBTransaction,["abort"]),d.prototype.createObjectStore=function(){return new h(this._db.createObjectStore.apply(this._db,arguments))},o(d,"_db",["name","version","objectStoreNames"]),a(d,"_db",IDBDatabase,["deleteObjectStore","close"]),p.prototype.transaction=function(){return new f(this._db.transaction.apply(this._db,arguments))},o(p,"_db",["name","version","objectStoreNames"]),a(p,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(t){[h,u].forEach((function(n){t in n.prototype&&(n.prototype[t.replace("open","iterate")]=function(){var n=e(arguments),r=n[n.length-1],i=this._store||this._index,o=i[t].apply(i,n.slice(0,-1));o.onsuccess=function(){r(o.result)}})}))})),[u,h].forEach((function(t){t.prototype.getAll||(t.prototype.getAll=function(t,e){var n=this,r=[];return new Promise((function(i){n.iterateCursor(t,(function(t){t?(r.push(t.value),void 0===e||r.length!=e?t.continue():i(r)):i(r)}))}))})})),t.openDb=g,t.deleteDb=m,Object.defineProperty(t,"__esModule",{value:!0})}))},"9ed3":function(t,e,n){"use strict";var r=n("ae93").IteratorPrototype,i=n("7c73"),o=n("5c6c"),s=n("d44e"),a=n("3f8c"),c=function(){return this};t.exports=function(t,e,n){var u=e+" Iterator";return t.prototype=i(r,{next:o(1,n)}),s(t,u,!1,!0),a[u]=c,t}},"9ff4":function(t,e,n){"use strict";(function(t){function r(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?t=>!!n[t.toLowerCase()]:t=>!!n[t]}n.d(e,"a",(function(){return _})),n.d(e,"b",(function(){return E})),n.d(e,"c",(function(){return T})),n.d(e,"d",(function(){return O})),n.d(e,"e",(function(){return Q})),n.d(e,"f",(function(){return J})),n.d(e,"g",(function(){return nt})),n.d(e,"h",(function(){return A})),n.d(e,"i",(function(){return tt})),n.d(e,"j",(function(){return k})),n.d(e,"k",(function(){return Y})),n.d(e,"l",(function(){return c})),n.d(e,"m",(function(){return et})),n.d(e,"n",(function(){return N})),n.d(e,"o",(function(){return R})),n.d(e,"p",(function(){return o})),n.d(e,"q",(function(){return m})),n.d(e,"r",(function(){return G})),n.d(e,"s",(function(){return D})),n.d(e,"t",(function(){return j})),n.d(e,"u",(function(){return V})),n.d(e,"v",(function(){return I})),n.d(e,"w",(function(){return z})),n.d(e,"x",(function(){return U})),n.d(e,"y",(function(){return K})),n.d(e,"z",(function(){return y})),n.d(e,"A",(function(){return L})),n.d(e,"B",(function(){return a})),n.d(e,"C",(function(){return M})),n.d(e,"D",(function(){return F})),n.d(e,"E",(function(){return b})),n.d(e,"F",(function(){return w})),n.d(e,"G",(function(){return r})),n.d(e,"H",(function(){return d})),n.d(e,"I",(function(){return u})),n.d(e,"J",(function(){return C})),n.d(e,"K",(function(){return Z})),n.d(e,"L",(function(){return rt})),n.d(e,"M",(function(){return $}));const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",o=r(i);const s="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(s);function c(t){return!!t||""===t}function u(t){if(N(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=M(r)?f(r):u(r);if(i)for(const t in i)e[t]=i[t]}return e}return M(t)||V(t)?t:void 0}const l=/;(?![^(]*\))/g,h=/:(.+)/;function f(t){const e={};return t.split(l).forEach(t=>{if(t){const n=t.split(h);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function d(t){let e="";if(M(t))e=t;else if(N(t))for(let n=0;n<t.length;n++){const r=d(t[n]);r&&(e+=r+" ")}else if(V(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const p="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",g="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",m=r(p),y=r(g);function v(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=b(t[r],e[r]);return n}function b(t,e){if(t===e)return!0;let n=P(t),r=P(e);if(n||r)return!(!n||!r)&&t.getTime()===e.getTime();if(n=N(t),r=N(e),n||r)return!(!n||!r)&&v(t,e);if(n=V(t),r=V(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,o=Object.keys(e).length;if(i!==o)return!1;for(const n in t){const r=t.hasOwnProperty(n),i=e.hasOwnProperty(n);if(r&&!i||!r&&i||!b(t[n],e[n]))return!1}}return String(t)===String(e)}function w(t,e){return t.findIndex(t=>b(t,e))}const E={},_=[],O=()=>{},T=()=>!1,S=/^on[^a-z]/,I=t=>S.test(t),j=t=>t.startsWith("onUpdate:"),A=Object.assign,C=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},x=Object.prototype.hasOwnProperty,k=(t,e)=>x.call(t,e),N=Array.isArray,D=t=>"[object Map]"===q(t),L=t=>"[object Set]"===q(t),P=t=>t instanceof Date,R=t=>"function"===typeof t,M=t=>"string"===typeof t,F=t=>"symbol"===typeof t,V=t=>null!==t&&"object"===typeof t,U=t=>V(t)&&R(t.then)&&R(t.catch),B=Object.prototype.toString,q=t=>B.call(t),$=t=>q(t).slice(8,-1),z=t=>"[object Object]"===q(t),G=t=>M(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,K=r(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),H=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},W=/-(\w)/g,Q=H(t=>t.replace(W,(t,e)=>e?e.toUpperCase():"")),X=/\B([A-Z])/g,Y=H(t=>t.replace(X,"-$1").toLowerCase()),J=H(t=>t.charAt(0).toUpperCase()+t.slice(1)),Z=H(t=>t?"on"+J(t):""),tt=(t,e)=>!Object.is(t,e),et=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},nt=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},rt=t=>{const e=parseFloat(t);return isNaN(e)?t:e}}).call(this,n("c8ba"))},a04b:function(t,e,n){var r=n("c04e"),i=n("d9b5");t.exports=function(t){var e=r(t,"string");return i(e)?e:String(e)}},a4b4:function(t,e,n){var r=n("342f");t.exports=/web0s(?!.*chrome)/i.test(r)},a4d3:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("d066"),s=n("c430"),a=n("83ab"),c=n("4930"),u=n("d039"),l=n("5135"),h=n("e8b5"),f=n("861d"),d=n("d9b5"),p=n("825a"),g=n("7b0b"),m=n("fc6a"),y=n("a04b"),v=n("577e"),b=n("5c6c"),w=n("7c73"),E=n("df75"),_=n("241c"),O=n("057f"),T=n("7418"),S=n("06cf"),I=n("9bf2"),j=n("d1e7"),A=n("9112"),C=n("6eeb"),x=n("5692"),k=n("f772"),N=n("d012"),D=n("90e3"),L=n("b622"),P=n("e538"),R=n("746f"),M=n("d44e"),F=n("69f3"),V=n("b727").forEach,U=k("hidden"),B="Symbol",q="prototype",$=L("toPrimitive"),z=F.set,G=F.getterFor(B),K=Object[q],H=i.Symbol,W=o("JSON","stringify"),Q=S.f,X=I.f,Y=O.f,J=j.f,Z=x("symbols"),tt=x("op-symbols"),et=x("string-to-symbol-registry"),nt=x("symbol-to-string-registry"),rt=x("wks"),it=i.QObject,ot=!it||!it[q]||!it[q].findChild,st=a&&u((function(){return 7!=w(X({},"a",{get:function(){return X(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=Q(K,e);r&&delete K[e],X(t,e,n),r&&t!==K&&X(K,e,r)}:X,at=function(t,e){var n=Z[t]=w(H[q]);return z(n,{type:B,tag:t,description:e}),a||(n.description=e),n},ct=function(t,e,n){t===K&&ct(tt,e,n),p(t);var r=y(e);return p(n),l(Z,r)?(n.enumerable?(l(t,U)&&t[U][r]&&(t[U][r]=!1),n=w(n,{enumerable:b(0,!1)})):(l(t,U)||X(t,U,b(1,{})),t[U][r]=!0),st(t,r,n)):X(t,r,n)},ut=function(t,e){p(t);var n=m(e),r=E(n).concat(pt(n));return V(r,(function(e){a&&!ht.call(n,e)||ct(t,e,n[e])})),t},lt=function(t,e){return void 0===e?w(t):ut(w(t),e)},ht=function(t){var e=y(t),n=J.call(this,e);return!(this===K&&l(Z,e)&&!l(tt,e))&&(!(n||!l(this,e)||!l(Z,e)||l(this,U)&&this[U][e])||n)},ft=function(t,e){var n=m(t),r=y(e);if(n!==K||!l(Z,r)||l(tt,r)){var i=Q(n,r);return!i||!l(Z,r)||l(n,U)&&n[U][r]||(i.enumerable=!0),i}},dt=function(t){var e=Y(m(t)),n=[];return V(e,(function(t){l(Z,t)||l(N,t)||n.push(t)})),n},pt=function(t){var e=t===K,n=Y(e?tt:m(t)),r=[];return V(n,(function(t){!l(Z,t)||e&&!l(K,t)||r.push(Z[t])})),r};if(c||(H=function(){if(this instanceof H)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?v(arguments[0]):void 0,e=D(t),n=function(t){this===K&&n.call(tt,t),l(this,U)&&l(this[U],e)&&(this[U][e]=!1),st(this,e,b(1,t))};return a&&ot&&st(K,e,{configurable:!0,set:n}),at(e,t)},C(H[q],"toString",(function(){return G(this).tag})),C(H,"withoutSetter",(function(t){return at(D(t),t)})),j.f=ht,I.f=ct,S.f=ft,_.f=O.f=dt,T.f=pt,P.f=function(t){return at(L(t),t)},a&&(X(H[q],"description",{configurable:!0,get:function(){return G(this).description}}),s||C(K,"propertyIsEnumerable",ht,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:H}),V(E(rt),(function(t){R(t)})),r({target:B,stat:!0,forced:!c},{for:function(t){var e=v(t);if(l(et,e))return et[e];var n=H(e);return et[e]=n,nt[n]=e,n},keyFor:function(t){if(!d(t))throw TypeError(t+" is not a symbol");if(l(nt,t))return nt[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!a},{create:lt,defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:ft}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:dt,getOwnPropertySymbols:pt}),r({target:"Object",stat:!0,forced:u((function(){T.f(1)}))},{getOwnPropertySymbols:function(t){return T.f(g(t))}}),W){var gt=!c||u((function(){var t=H();return"[null]"!=W([t])||"{}"!=W({a:t})||"{}"!=W(Object(t))}));r({target:"JSON",stat:!0,forced:gt},{stringify:function(t,e,n){var r,i=[t],o=1;while(arguments.length>o)i.push(arguments[o++]);if(r=e,(f(e)||void 0!==t)&&!d(t))return h(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!d(e))return e}),i[1]=e,W.apply(null,i)}})}H[q][$]||A(H[q],$,H[q].valueOf),M(H,B),N[U]=!0},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},a691:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},a79d:function(t,e,n){"use strict";var r=n("23e7"),i=n("c430"),o=n("fea9"),s=n("d039"),a=n("d066"),c=n("4840"),u=n("cdf9"),l=n("6eeb"),h=!!o&&s((function(){o.prototype["finally"].call({then:function(){}},(function(){}))}));if(r({target:"Promise",proto:!0,real:!0,forced:h},{finally:function(t){var e=c(this,a("Promise")),n="function"==typeof t;return this.then(n?function(n){return u(e,t()).then((function(){return n}))}:t,n?function(n){return u(e,t()).then((function(){throw n}))}:t)}}),!i&&"function"==typeof o){var f=a("Promise").prototype["finally"];o.prototype["finally"]!==f&&l(o.prototype,"finally",f,{unsafe:!0})}},a8e9:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return S})),n.d(e,"c",(function(){return T})),n.d(e,"d",(function(){return _})),n.d(e,"e",(function(){return R})),n.d(e,"f",(function(){return l})),n.d(e,"g",(function(){return A})),n.d(e,"h",(function(){return M})),n.d(e,"i",(function(){return h})),n.d(e,"j",(function(){return p})),n.d(e,"k",(function(){return m})),n.d(e,"l",(function(){return y})),n.d(e,"m",(function(){return w})),n.d(e,"n",(function(){return f})),n.d(e,"o",(function(){return g})),n.d(e,"p",(function(){return b})),n.d(e,"q",(function(){return v})),n.d(e,"r",(function(){return E}));var r=n("9ab4"),i=function(t){for(var e=[],n=0,r=0;r<t.length;r++){var i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},o=function(t){var e=[],n=0,r=0;while(n<t.length){var i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){var o=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){o=t[n++];var s=t[n++],a=t[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{o=t[n++],s=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return e.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray:function(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<t.length;i+=3){var o=t[i],s=i+1<t.length,a=s?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,l=o>>2,h=(3&o)<<4|a>>4,f=(15&a)<<2|u>>6,d=63&u;c||(d=64,s||(f=64)),r.push(n[l],n[h],n[f],n[d])}return r.join("")},encodeString:function(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(i(t),e)},decodeString:function(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):o(this.decodeStringToByteArray(t,e))},decodeStringToByteArray:function(t,e){this.init_();for(var n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<t.length;){var o=n[t.charAt(i++)],s=i<t.length,a=s?n[t.charAt(i)]:0;++i;var c=i<t.length,u=c?n[t.charAt(i)]:64;++i;var l=i<t.length,h=l?n[t.charAt(i)]:64;if(++i,null==o||null==a||null==u||null==h)throw Error();var f=o<<2|a>>4;if(r.push(f),64!==u){var d=a<<4&240|u>>2;if(r.push(d),64!==h){var p=u<<6&192|h;r.push(p)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},a=function(t){var e=i(t);return s.encodeByteArray(e,!0)},c=function(t){return a(t).replace(/\./g,"")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var u=function(){function t(){var t=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,n){t.resolve=e,t.reject=n}))}return t.prototype.wrapCallback=function(t){var e=this;return function(n,r){n?e.reject(n):e.resolve(r),"function"===typeof t&&(e.promise.catch((function(){})),1===t.length?t(n):t(n,r))}},t}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');var n={alg:"none",type:"JWT"},i=e||"demo-project",o=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");var a=Object(r["a"])({iss:"https://securetoken.google.com/"+i,aud:i,iat:o,exp:o+3600,auth_time:o,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),u="";return[c(JSON.stringify(n)),c(JSON.stringify(a)),u].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function f(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(h())}function d(){try{return"[object process]"===Object.prototype.toString.call(t.process)}catch(e){return!1}}function p(){var t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function g(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function m(){return h().indexOf("Electron/")>=0}function y(){var t=h();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function v(){return h().indexOf("MSAppHost/")>=0}function b(){return!d()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function w(){return"indexedDB"in self&&null!=indexedDB}function E(){return new Promise((function(t,e){try{var n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=function(){i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=function(){n=!1},i.onerror=function(){var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(o){e(o)}}))}function _(){return!(!navigator||!navigator.cookieEnabled)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var O="FirebaseError",T=function(t){function e(n,r,i){var o=t.call(this,r)||this;return o.code=n,o.customData=i,o.name=O,Object.setPrototypeOf(o,e.prototype),Error.captureStackTrace&&Error.captureStackTrace(o,S.prototype.create),o}return Object(r["c"])(e,t),e}(Error),S=function(){function t(t,e,n){this.service=t,this.serviceName=e,this.errors=n}return t.prototype.create=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=e[0]||{},i=this.service+"/"+t,o=this.errors[t],s=o?I(o,r):"Error",a=this.serviceName+": "+s+" ("+i+").",c=new T(i,a,r);return c},t}();function I(t,e){return t.replace(j,(function(t,n){var r=e[n];return null!=r?String(r):"<"+n+"?>"}))}var j=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(t,e){if(t===e)return!0;for(var n=Object.keys(t),r=Object.keys(e),i=0,o=n;i<o.length;i++){var s=o[i];if(!r.includes(s))return!1;var a=t[s],c=e[s];if(C(a)&&C(c)){if(!A(a,c))return!1}else if(a!==c)return!1}for(var u=0,l=r;u<l.length;u++){s=l[u];if(!n.includes(s))return!1}return!0}function C(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(function(){function t(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}t.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},t.prototype.compress_=function(t,e){e||(e=0);var n=this.W_;if("string"===typeof t)for(var r=0;r<16;r++)n[r]=t.charCodeAt(e)<<24|t.charCodeAt(e+1)<<16|t.charCodeAt(e+2)<<8|t.charCodeAt(e+3),e+=4;else for(r=0;r<16;r++)n[r]=t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3],e+=4;for(r=16;r<80;r++){var i=n[r-3]^n[r-8]^n[r-14]^n[r-16];n[r]=4294967295&(i<<1|i>>>31)}var o,s,a=this.chain_[0],c=this.chain_[1],u=this.chain_[2],l=this.chain_[3],h=this.chain_[4];for(r=0;r<80;r++){r<40?r<20?(o=l^c&(u^l),s=1518500249):(o=c^u^l,s=1859775393):r<60?(o=c&u|l&(c|u),s=2400959708):(o=c^u^l,s=3395469782);i=(a<<5|a>>>27)+o+h+s+n[r]&4294967295;h=l,l=u,u=4294967295&(c<<30|c>>>2),c=a,a=i}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295},t.prototype.update=function(t,e){if(null!=t){void 0===e&&(e=t.length);var n=e-this.blockSize,r=0,i=this.buf_,o=this.inbuf_;while(r<e){if(0===o)while(r<=n)this.compress_(t,r),r+=this.blockSize;if("string"===typeof t){while(r<e)if(i[o]=t.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else while(r<e)if(i[o]=t[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=e}},t.prototype.digest=function(){var t=[],e=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&e,e/=256;this.compress_(this.buf_);var r=0;for(n=0;n<5;n++)for(var i=24;i>=0;i-=8)t[r]=this.chain_[n]>>i&255,++r;return t}})();(function(){function t(t,e){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((function(){t(n)})).catch((function(t){n.error(t)}))}t.prototype.next=function(t){this.forEachObserver((function(e){e.next(t)}))},t.prototype.error=function(t){this.forEachObserver((function(e){e.error(t)})),this.close(t)},t.prototype.complete=function(){this.forEachObserver((function(t){t.complete()})),this.close()},t.prototype.subscribe=function(t,e,n){var r,i=this;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=x(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=k),void 0===r.error&&(r.error=k),void 0===r.complete&&(r.complete=k);var o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(t){}})),this.observers.push(r),o},t.prototype.unsubscribeOne=function(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},t.prototype.forEachObserver=function(t){if(!this.finalized)for(var e=0;e<this.observers.length;e++)this.sendOne(e,t)},t.prototype.sendOne=function(t,e){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[t])try{e(n.observers[t])}catch(r){"undefined"!==typeof console&&console.error&&console.error(r)}}))},t.prototype.close=function(t){var e=this;this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((function(){e.observers=void 0,e.onNoObservers=void 0})))}})();function x(t,e){if("object"!==typeof t||null===t)return!1;for(var n=0,r=e;n<r.length;n++){var i=r[n];if(i in t&&"function"===typeof t[i])return!0}return!1}function k(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var N=1e3,D=2,L=144e5,P=.5;function R(t,e,n){void 0===e&&(e=N),void 0===n&&(n=D);var r=e*Math.pow(n,t),i=Math.round(P*r*(Math.random()-.5)*2);return Math.min(L,r+i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function M(t){return t&&t._delegate?t._delegate:t}}).call(this,n("c8ba"))},abc5:function(t,e,n){"use strict";(function(t){function r(){return i().__VUE_DEVTOOLS_GLOBAL_HOOK__}function i(){return"undefined"!==typeof navigator?window:"undefined"!==typeof t?t:{}}n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i}))}).call(this,n("c8ba"))},abfd:function(t,e,n){"use strict";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function r(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),i=0;for(e=0;e<n;e++)for(var o=arguments[e],s=0,a=o.length;s<a;s++,i++)r[i]=o[s];return r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var i;n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return h})),n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return d}));var o,s=[];(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(o||(o={}));var a={debug:o.DEBUG,verbose:o.VERBOSE,info:o.INFO,warn:o.WARN,error:o.ERROR,silent:o.SILENT},c=o.INFO,u=(i={},i[o.DEBUG]="log",i[o.VERBOSE]="log",i[o.INFO]="info",i[o.WARN]="warn",i[o.ERROR]="error",i),l=function(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];if(!(e<t.logLevel)){var o=(new Date).toISOString(),s=u[e];if(!s)throw new Error("Attempted to log a message with an invalid logType (value: "+e+")");console[s].apply(console,r(["["+o+"]  "+t.name+":"],n))}},h=function(){function t(t){this.name=t,this._logLevel=c,this._logHandler=l,this._userLogHandler=null,s.push(this)}return Object.defineProperty(t.prototype,"logLevel",{get:function(){return this._logLevel},set:function(t){if(!(t in o))throw new TypeError('Invalid value "'+t+'" assigned to `logLevel`');this._logLevel=t},enumerable:!1,configurable:!0}),t.prototype.setLogLevel=function(t){this._logLevel="string"===typeof t?a[t]:t},Object.defineProperty(t.prototype,"logHandler",{get:function(){return this._logHandler},set:function(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(t){this._userLogHandler=t},enumerable:!1,configurable:!0}),t.prototype.debug=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,r([this,o.DEBUG],t)),this._logHandler.apply(this,r([this,o.DEBUG],t))},t.prototype.log=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,r([this,o.VERBOSE],t)),this._logHandler.apply(this,r([this,o.VERBOSE],t))},t.prototype.info=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,r([this,o.INFO],t)),this._logHandler.apply(this,r([this,o.INFO],t))},t.prototype.warn=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,r([this,o.WARN],t)),this._logHandler.apply(this,r([this,o.WARN],t))},t.prototype.error=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,r([this,o.ERROR],t)),this._logHandler.apply(this,r([this,o.ERROR],t))},t}();function f(t){s.forEach((function(e){e.setLogLevel(t)}))}function d(t,e){for(var n=function(n){var r=null;e&&e.level&&(r=a[e.level]),n.userLogHandler=null===t?null:function(e,n){for(var i=[],s=2;s<arguments.length;s++)i[s-2]=arguments[s];var a=i.map((function(t){if(null==t)return null;if("string"===typeof t)return t;if("number"===typeof t||"boolean"===typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(e){return null}})).filter((function(t){return t})).join(" ");n>=(null!==r&&void 0!==r?r:e.logLevel)&&t({level:o[n].toLowerCase(),message:a,args:i,type:e.name})}},r=0,i=s;r<i.length;r++){var c=i[r];n(c)}}},ae93:function(t,e,n){"use strict";var r,i,o,s=n("d039"),a=n("7c73"),c=n("e163"),u=n("9112"),l=n("b622"),h=n("c430"),f=l("iterator"),d=!1;[].keys&&(o=[].keys(),"next"in o?(i=c(c(o)),i!==Object.prototype&&(r=i)):d=!0);var p=void 0==r||s((function(){var t={};return r[f].call(t)!==t}));p?r={}:h&&(r=a(r)),"function"!==typeof r[f]&&u(r,f,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:d}},b041:function(t,e,n){"use strict";var r=n("00ee"),i=n("f5df");t.exports=r?{}.toString:function(){return"[object "+i(this)+"]"}},b575:function(t,e,n){var r,i,o,s,a,c,u,l,h=n("da84"),f=n("06cf").f,d=n("2cf4").set,p=n("1cdc"),g=n("d4c3"),m=n("a4b4"),y=n("605d"),v=h.MutationObserver||h.WebKitMutationObserver,b=h.document,w=h.process,E=h.Promise,_=f(h,"queueMicrotask"),O=_&&_.value;O||(r=function(){var t,e;y&&(t=w.domain)&&t.exit();while(i){e=i.fn,i=i.next;try{e()}catch(n){throw i?s():o=void 0,n}}o=void 0,t&&t.enter()},p||y||m||!v||!b?!g&&E&&E.resolve?(u=E.resolve(void 0),u.constructor=E,l=u.then,s=function(){l.call(u,r)}):s=y?function(){w.nextTick(r)}:function(){d.call(h,r)}:(a=!0,c=b.createTextNode(""),new v(r).observe(c,{characterData:!0}),s=function(){c.data=a=!a})),t.exports=O||function(t){var e={fn:t,next:void 0};o&&(o.next=e),i||(i=e,s()),o=e}},b622:function(t,e,n){var r=n("da84"),i=n("5692"),o=n("5135"),s=n("90e3"),a=n("4930"),c=n("fdbf"),u=i("wks"),l=r.Symbol,h=c?l:l&&l.withoutSetter||s;t.exports=function(t){return o(u,t)&&(a||"string"==typeof u[t])||(a&&o(l,t)?u[t]=l[t]:u[t]=h("Symbol."+t)),u[t]}},b64b:function(t,e,n){var r=n("23e7"),i=n("7b0b"),o=n("df75"),s=n("d039"),a=s((function(){o(1)}));r({target:"Object",stat:!0,forced:a},{keys:function(t){return o(i(t))}})},b727:function(t,e,n){var r=n("0366"),i=n("44ad"),o=n("7b0b"),s=n("50c4"),a=n("65f0"),c=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,l=4==t,h=6==t,f=7==t,d=5==t||h;return function(p,g,m,y){for(var v,b,w=o(p),E=i(w),_=r(g,m,3),O=s(E.length),T=0,S=y||a,I=e?S(p,O):n||f?S(p,0):void 0;O>T;T++)if((d||T in E)&&(v=E[T],b=_(v,T,w),t))if(e)I[T]=b;else if(b)switch(t){case 3:return!0;case 5:return v;case 6:return T;case 2:c.call(I,v)}else switch(t){case 4:return!1;case 7:c.call(I,v)}return h?-1:u||l?l:I}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterReject:u(7)}},b774:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const r="devtools-plugin:setup"},c04e:function(t,e,n){var r=n("861d"),i=n("d9b5"),o=n("485a"),s=n("b622"),a=s("toPrimitive");t.exports=function(t,e){if(!r(t)||i(t))return t;var n,s=t[a];if(void 0!==s){if(void 0===e&&(e="default"),n=s.call(t,e),!r(n)||i(n))return n;throw TypeError("Can't convert object to primitive value")}return void 0===e&&(e="number"),o(t,e)}},c430:function(t,e){t.exports=!1},c6b6:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},c6cd:function(t,e,n){var r=n("da84"),i=n("ce4e"),o="__core-js_shared__",s=r[o]||i(o,{});t.exports=s},c7b2:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return xr})),n.d(e,"b",(function(){return Nr})),n.d(e,"c",(function(){return kr})),n.d(e,"d",(function(){return Lr})),n.d(e,"e",(function(){return Dr})),n.d(e,"f",(function(){return Pr})),n.d(e,"g",(function(){return Rr})),n.d(e,"h",(function(){return Ar})),n.d(e,"i",(function(){return Cr}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)};function i(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}function o(t){var e="function"===typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"===typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}var s,a="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t?t:"undefined"!==typeof self?self:{},c=c||{},u=a||self;function l(){}function h(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function f(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function d(t){return Object.prototype.hasOwnProperty.call(t,p)&&t[p]||(t[p]=++g)}var p="closure_uid_"+(1e9*Math.random()>>>0),g=0;function m(t,e,n){return t.call.apply(t.bind,arguments)}function y(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function v(t,e,n){return v=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?m:y,v.apply(null,arguments)}function b(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function w(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o];return e.prototype[n].apply(t,i)}}function E(){this.s=this.s,this.o=this.o}var _=0,O={};E.prototype.s=!1,E.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=_)){var t=d(this);delete O[t]}},E.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};var T=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(var n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},S=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){for(var r=t.length,i="string"===typeof t?t.split(""):t,o=0;o<r;o++)o in i&&e.call(n,i[o],o,t)};function I(t){t:{for(var e=zn,n=t.length,r="string"===typeof t?t.split(""):t,i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function j(t){return Array.prototype.concat.apply([],arguments)}function A(t){var e=t.length;if(0<e){for(var n=Array(e),r=0;r<e;r++)n[r]=t[r];return n}return[]}function C(t){return/^[\s\xa0]*$/.test(t)}var x,k=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function N(t,e){return-1!=t.indexOf(e)}function D(t,e){return t<e?-1:t>e?1:0}t:{var L=u.navigator;if(L){var P=L.userAgent;if(P){x=P;break t}}x=""}function R(t,e,n){for(var r in t)e.call(n,t[r],r,t)}function M(t){var e={};for(var n in t)e[n]=t[n];return e}var F="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function V(t,e){for(var n,r,i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(var o=0;o<F.length;o++)n=F[o],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function U(t){return U[" "](t),t}function B(t){var e=tt;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}U[" "]=l;var q,$=N(x,"Opera"),z=N(x,"Trident")||N(x,"MSIE"),G=N(x,"Edge"),K=G||z,H=N(x,"Gecko")&&!(N(x.toLowerCase(),"webkit")&&!N(x,"Edge"))&&!(N(x,"Trident")||N(x,"MSIE"))&&!N(x,"Edge"),W=N(x.toLowerCase(),"webkit")&&!N(x,"Edge");function Q(){var t=u.document;return t?t.documentMode:void 0}t:{var X="",Y=function(){var t=x;return H?/rv:([^\);]+)(\)|;)/.exec(t):G?/Edge\/([\d\.]+)/.exec(t):z?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):W?/WebKit\/(\S+)/.exec(t):$?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(Y&&(X=Y?Y[1]:""),z){var J=Q();if(null!=J&&J>parseFloat(X)){q=String(J);break t}}q=X}var Z,tt={};function et(){return B((function(){for(var t=0,e=k(String(q)).split("."),n=k("9").split("."),r=Math.max(e.length,n.length),i=0;0==t&&i<r;i++){var o=e[i]||"",s=n[i]||"";do{if(o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==o[0].length&&0==s[0].length)break;t=D(0==o[1].length?0:parseInt(o[1],10),0==s[1].length?0:parseInt(s[1],10))||D(0==o[2].length,0==s[2].length)||D(o[2],s[2]),o=o[3],s=s[3]}while(0==t)}return 0<=t}))}if(u.document&&z){var nt=Q();Z=nt||(parseInt(q,10)||void 0)}else Z=void 0;var rt=Z,it=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{u.addEventListener("test",l,e),u.removeEventListener("test",l,e)}catch(n){}return t}();function ot(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function st(t,e){if(ot.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(H){t:{try{U(e.nodeName);var i=!0;break t}catch(o){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:at[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&st.Z.h.call(this)}}ot.prototype.h=function(){this.defaultPrevented=!0},w(st,ot);var at={2:"touch",3:"pen",4:"mouse"};st.prototype.h=function(){st.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ct="closure_listenable_"+(1e6*Math.random()|0),ut=0;function lt(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++ut,this.ca=this.fa=!1}function ht(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function ft(t){this.src=t,this.g={},this.h=0}function dt(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],o=T(i,e);(r=0<=o)&&Array.prototype.splice.call(i,o,1),r&&(ht(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function pt(t,e,n,r){for(var i=0;i<t.length;++i){var o=t[i];if(!o.ca&&o.listener==e&&o.capture==!!n&&o.ia==r)return i}return-1}ft.prototype.add=function(t,e,n,r,i){var o=t.toString();t=this.g[o],t||(t=this.g[o]=[],this.h++);var s=pt(t,e,r,i);return-1<s?(e=t[s],n||(e.fa=!1)):(e=new lt(e,this.src,o,!!r,i),e.fa=n,t.push(e)),e};var gt="closure_lm_"+(1e6*Math.random()|0),mt={};function yt(t,e,n,r,i){if(r&&r.once)return wt(t,e,n,r,i);if(Array.isArray(e)){for(var o=0;o<e.length;o++)yt(t,e[o],n,r,i);return null}return n=jt(n),t&&t[ct]?t.N(e,n,f(r)?!!r.capture:!!r,i):vt(t,e,n,!1,r,i)}function vt(t,e,n,r,i,o){if(!e)throw Error("Invalid event type");var s=f(i)?!!i.capture:!!i,a=St(t);if(a||(t[gt]=a=new ft(t)),n=a.add(e,n,r,s,o),n.proxy)return n;if(r=bt(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)it||(i=s),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Ot(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function bt(){function t(n){return e.call(t.src,t.listener,n)}var e=Tt;return t}function wt(t,e,n,r,i){if(Array.isArray(e)){for(var o=0;o<e.length;o++)wt(t,e[o],n,r,i);return null}return n=jt(n),t&&t[ct]?t.O(e,n,f(r)?!!r.capture:!!r,i):vt(t,e,n,!0,r,i)}function Et(t,e,n,r,i){if(Array.isArray(e))for(var o=0;o<e.length;o++)Et(t,e[o],n,r,i);else r=f(r)?!!r.capture:!!r,n=jt(n),t&&t[ct]?(t=t.i,e=String(e).toString(),e in t.g&&(o=t.g[e],n=pt(o,n,r,i),-1<n&&(ht(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete t.g[e],t.h--)))):t&&(t=St(t))&&(e=t.g[e.toString()],t=-1,e&&(t=pt(e,n,r,i)),(n=-1<t?e[t]:null)&&_t(n))}function _t(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[ct])dt(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Ot(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=St(e))?(dt(n,t),0==n.h&&(n.src=null,e[gt]=null)):ht(t)}}}function Ot(t){return t in mt?mt[t]:mt[t]="on"+t}function Tt(t,e){if(t.ca)t=!0;else{e=new st(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&_t(t),t=n.call(r,e)}return t}function St(t){return t=t[gt],t instanceof ft?t:null}var It="__closure_events_fn_"+(1e9*Math.random()>>>0);function jt(t){return"function"===typeof t?t:(t[It]||(t[It]=function(e){return t.handleEvent(e)}),t[It])}function At(){E.call(this),this.i=new ft(this),this.P=this,this.I=null}function Ct(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"===typeof e)e=new ot(e,t);else if(e instanceof ot)e.target=e.target||t;else{var i=e;e=new ot(r,t),V(e,i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=e.g=n[o];i=xt(s,r,!0,e)&&i}if(s=e.g=t,i=xt(s,r,!0,e)&&i,i=xt(s,r,!1,e)&&i,n)for(o=0;o<n.length;o++)s=e.g=n[o],i=xt(s,r,!1,e)&&i}function xt(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,o=0;o<e.length;++o){var s=e[o];if(s&&!s.ca&&s.capture==n){var a=s.listener,c=s.ia||s.src;s.fa&&dt(t.i,s),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}w(At,E),At.prototype[ct]=!0,At.prototype.removeEventListener=function(t,e,n,r){Et(this,t,e,n,r)},At.prototype.M=function(){if(At.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)ht(n[r]);delete e.g[t],e.h--}}this.I=null},At.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},At.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var kt=u.JSON.stringify;function Nt(){var t=Bt,e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var Dt,Lt=function(){function t(){this.h=this.g=null}return t.prototype.add=function(t,e){var n=Pt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n},t}(),Pt=new(function(){function t(t,e){this.i=t,this.j=e,this.h=0,this.g=null}return t.prototype.get=function(){var t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t},t}())((function(){return new Rt}),(function(t){return t.reset()})),Rt=function(){function t(){this.next=this.g=this.h=null}return t.prototype.set=function(t,e){this.h=t,this.g=e,this.next=null},t.prototype.reset=function(){this.next=this.g=this.h=null},t}();function Mt(t){u.setTimeout((function(){throw t}),0)}function Ft(t,e){Dt||Vt(),Ut||(Dt(),Ut=!0),Bt.add(t,e)}function Vt(){var t=u.Promise.resolve(void 0);Dt=function(){t.then(qt)}}var Ut=!1,Bt=new Lt;function qt(){for(var t;t=Nt();){try{t.h.call(t.g)}catch(n){Mt(n)}var e=Pt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ut=!1}function $t(t,e){At.call(this),this.h=t||1,this.g=e||u,this.j=v(this.kb,this),this.l=Date.now()}function zt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Gt(t,e,n){if("function"===typeof t)n&&(t=v(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=v(t.handleEvent,t)}return 2147483647<Number(e)?-1:u.setTimeout(t,e||0)}function Kt(t){t.g=Gt((function(){t.g=null,t.i&&(t.i=!1,Kt(t))}),t.j);var e=t.h;t.h=null,t.m.apply(null,e)}w($t,At),s=$t.prototype,s.da=!1,s.S=null,s.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ct(this,"tick"),this.da&&(zt(this),this.start()))}},s.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},s.M=function(){$t.Z.M.call(this),zt(this),delete this.g};var Ht=function(t){function e(e,n){var r=t.call(this)||this;return r.m=e,r.j=n,r.h=null,r.i=!1,r.g=null,r}return i(e,t),e.prototype.l=function(t){this.h=arguments,this.g?this.i=!0:Kt(this)},e.prototype.M=function(){t.prototype.M.call(this),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)},e}(E);function Wt(t){E.call(this),this.h=t,this.g={}}w(Wt,E);var Qt=[];function Xt(t,e,n,r){Array.isArray(n)||(n&&(Qt[0]=n.toString()),n=Qt);for(var i=0;i<n.length;i++){var o=yt(e,n[i],r||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}}function Yt(t){R(t.g,(function(t,e){this.g.hasOwnProperty(e)&&_t(t)}),t),t.g={}}function Jt(){this.g=!0}function Zt(t,e,n,r,i,o){t.info((function(){if(t.g)if(o)for(var s="",a=o.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");s=2<=h.length&&"type"==h[1]?s+(l+"=")+u+"&":s+(l+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+s}))}function te(t,e,n,r,i,o,s){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+o+" "+s}))}function ee(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+re(t,n)+(r?" "+r:"")}))}function ne(t,e){t.info((function(){return"TIMEOUT: "+e}))}function re(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if("noop"!=o&&"stop"!=o&&"close"!=o)for(var s=1;s<i.length;s++)i[s]=""}}}return kt(n)}catch(a){return e}}Wt.prototype.M=function(){Wt.Z.M.call(this),Yt(this)},Wt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Jt.prototype.Aa=function(){this.g=!1},Jt.prototype.info=function(){};var ie={},oe=null;function se(){return oe=oe||new At}function ae(t){ot.call(this,ie.Ma,t)}function ce(t){var e=se();Ct(e,new ae(e,t))}function ue(t,e){ot.call(this,ie.STAT_EVENT,t),this.stat=e}function le(t){var e=se();Ct(e,new ue(e,t))}function he(t,e){ot.call(this,ie.Na,t),this.size=e}function fe(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return u.setTimeout((function(){t()}),e)}ie.Ma="serverreachability",w(ae,ot),ie.STAT_EVENT="statevent",w(ue,ot),ie.Na="timingevent",w(he,ot);var de={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},pe={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ge(){}function me(t){return t.h||(t.h=t.i())}function ye(){}ge.prototype.h=null;var ve,be={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function we(){ot.call(this,"d")}function Ee(){ot.call(this,"c")}function _e(){}function Oe(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Wt(this),this.P=Se,t=K?125:void 0,this.W=new $t(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Te}function Te(){this.i=null,this.g="",this.h=!1}w(we,ot),w(Ee,ot),w(_e,ge),_e.prototype.g=function(){return new XMLHttpRequest},_e.prototype.i=function(){return{}},ve=new _e;var Se=45e3,Ie={},je={};function Ae(t,e,n){t.K=1,t.v=Ze(He(e)),t.s=n,t.U=!0,Ce(t,null)}function Ce(t,e){t.F=Date.now(),De(t),t.A=He(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),gn(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Te,t.g=Er(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Ht(v(t.Ia,t,t.g),t.O)),Xt(t.V,t.g,"readystatechange",t.gb),e=t.H?M(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),ce(1),Zt(t.j,t.u,t.A,t.m,t.X,t.s)}function xe(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function ke(t,e,n){for(var r,i=!0;!t.I&&t.C<n.length;){if(r=Ne(t,n),r==je){4==e&&(t.o=4,le(14),i=!1),ee(t.j,t.m,null,"[Incomplete Response]");break}if(r==Ie){t.o=4,le(15),ee(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}ee(t.j,t.m,r,null),Fe(t,r)}xe(t)&&r!=je&&r!=Ie&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,le(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),dr(e),e.L=!0,le(11))):(ee(t.j,t.m,n,"[Invalid Chunked Response]"),Me(t),Re(t))}function Ne(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?je:(n=Number(e.substring(n,r)),isNaN(n)?Ie:(r+=1,r+n>e.length?je:(e=e.substr(r,n),t.C=r+n,e)))}function De(t){t.Y=Date.now()+t.P,Le(t,t.P)}function Le(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=fe(v(t.eb,t),e)}function Pe(t){t.B&&(u.clearTimeout(t.B),t.B=null)}function Re(t){0==t.l.G||t.I||mr(t.l,t)}function Me(t){Pe(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,zt(t.W),Yt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Fe(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||On(n.i,t)))if(n.I=t.N,!t.J&&On(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(o){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;gr(n),rr(n)}fr(n),le(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=fe(v(n.ab,n),6e3));if(1>=_n(n.i)&&n.ka){try{n.ka()}catch(o){}n.ka=void 0}}else vr(n,11)}else if((t.J||n.g==t)&&gr(n),!C(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){var o=i[e];if(n.U=o[0],o=o[1],2==n.G)if("c"==o[0]){n.J=o[1],n.la=o[2];var s=o[3];null!=s&&(n.ma=s,n.h.info("VER="+n.ma));var a=o[4];null!=a&&(n.za=a,n.h.info("SVER="+n.za));var c=o[5];null!=c&&"number"===typeof c&&0<c&&(r=1.5*c,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;var u=t.g;if(u){var l=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(l){var h=r.i;!h.g&&(N(l,"spdy")||N(l,"quic")||N(l,"h2"))&&(h.j=h.l,h.g=new Set,h.h&&(Tn(h,h.h),h.h=null))}if(r.D){var f=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;f&&(r.sa=f,Je(r.F,r.D,f))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var d=t;if(r.oa=wr(r,r.H?r.la:null,r.W),d.J){Sn(r.i,d);var p=d,g=r.K;g&&p.setTimeout(g),p.B&&(Pe(p),De(p)),r.g=d}else hr(r);0<n.l.length&&sr(n)}else"stop"!=o[0]&&"close"!=o[0]||vr(n,7);else 3==n.G&&("stop"==o[0]||"close"==o[0]?"stop"==o[0]?vr(n,7):nr(n):"noop"!=o[0]&&n.j&&n.j.wa(o),n.A=0)}ce(4)}catch(o){}}function Ve(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(h(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Ue(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(h(t)||"string"===typeof t)S(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(h(t)||"string"===typeof t){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=Ve(t),i=r.length;for(var o=0;o<i;o++)e.call(void 0,r[o],n&&n[o],t)}}function Be(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Be)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function qe(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];$e(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],$e(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}function $e(t,e){return Object.prototype.hasOwnProperty.call(t,e)}s=Oe.prototype,s.setTimeout=function(t){this.P=t},s.gb=function(t){t=t.target;var e=this.L;e&&3==Xn(t)?e.l():this.Ia(t)},s.Ia=function(t){try{if(t==this.g)t:{var e=Xn(this.g),n=this.g.Da(),r=this.g.ba();if(!(3>e)&&(3!=e||K||this.g&&(this.h.h||this.g.ga()||Yn(this.g)))){this.I||4!=e||7==n||ce(8==n||0>=r?3:2),Pe(this);var i=this.g.ba();this.N=i;e:if(xe(this)){var o=Yn(this.g);t="";var s=o.length,a=4==Xn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Me(this),Re(this);var c="";break e}this.h.i=new u.TextDecoder}for(n=0;n<s;n++)this.h.h=!0,t+=this.h.i.decode(o[n],{stream:a&&n==s-1});o.splice(0,s),this.h.g+=t,this.C=0,c=this.h.g}else c=this.g.ga();if(this.i=200==i,te(this.j,this.u,this.A,this.m,this.X,e,i),this.i){if(this.$&&!this.J){e:{if(this.g){var l,h=this.g;if((l=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(l)){var f=l;break e}}f=null}if(!(i=f)){this.i=!1,this.o=3,le(12),Me(this),Re(this);break t}ee(this.j,this.m,i,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Fe(this,i)}this.U?(ke(this,e,c),K&&this.i&&3==e&&(Xt(this.V,this.W,"tick",this.fb),this.W.start())):(ee(this.j,this.m,c,null),Fe(this,c)),4==e&&Me(this),this.i&&!this.I&&(4==e?mr(this.l,this):(this.i=!1,De(this)))}else 400==i&&0<c.indexOf("Unknown SID")?(this.o=3,le(12)):(this.o=0,le(13)),Me(this),Re(this)}}}catch(e){}},s.fb=function(){if(this.g){var t=Xn(this.g),e=this.g.ga();this.C<e.length&&(Pe(this),ke(this,t,e),this.i&&4!=t&&De(this))}},s.cancel=function(){this.I=!0,Me(this)},s.eb=function(){this.B=null;var t=Date.now();0<=t-this.Y?(ne(this.j,this.A),2!=this.K&&(ce(3),le(17)),Me(this),this.o=2,Re(this)):Le(this,this.Y-t)},s=Be.prototype,s.R=function(){qe(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},s.T=function(){return qe(this),this.g.concat()},s.get=function(t,e){return $e(this.h,t)?this.h[t]:e},s.set=function(t,e){$e(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},s.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],o=this.get(i);t.call(e,o,i,this)}};var ze=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ge(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var o=t[n].substring(0,r);i=t[n].substring(r+1)}else o=t[n];e(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ke(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Ke){this.g=void 0!==e?e:t.g,We(this,t.j),this.s=t.s,Qe(this,t.i),Xe(this,t.m),this.l=t.l,e=t.h;var n=new hn;n.i=e.i,e.g&&(n.g=new Be(e.g),n.h=e.h),Ye(this,n),this.o=t.o}else t&&(n=String(t).match(ze))?(this.g=!!e,We(this,n[1]||"",!0),this.s=nn(n[2]||""),Qe(this,n[3]||"",!0),Xe(this,n[4]),this.l=nn(n[5]||"",!0),Ye(this,n[6]||"",!0),this.o=nn(n[7]||"")):(this.g=!!e,this.h=new hn(null,this.g))}function He(t){return new Ke(t)}function We(t,e,n){t.j=n?nn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Qe(t,e,n){t.i=n?nn(e,!0):e}function Xe(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ye(t,e,n){e instanceof hn?(t.h=e,yn(t.h,t.g)):(n||(e=rn(e,un)),t.h=new hn(e,t.g))}function Je(t,e,n){t.h.set(e,n)}function Ze(t){return Je(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function tn(t){return t instanceof Ke?He(t):new Ke(t,void 0)}function en(t,e,n,r){var i=new Ke(null,void 0);return t&&We(i,t),e&&Qe(i,e),n&&Xe(i,n),r&&(i.l=r),i}function nn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function rn(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,on),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function on(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Ke.prototype.toString=function(){var t=[],e=this.j;e&&t.push(rn(e,sn,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(rn(e,sn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(rn(n,"/"==n.charAt(0)?cn:an,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",rn(n,ln)),t.join("")};var sn=/[#\/\?@]/g,an=/[#\?:]/g,cn=/[#\?]/g,un=/[#\?@]/g,ln=/#/g;function hn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function fn(t){t.g||(t.g=new Be,t.h=0,t.i&&Ge(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function dn(t,e){fn(t),e=mn(t,e),$e(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,$e(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&qe(t)))}function pn(t,e){return fn(t),e=mn(t,e),$e(t.g.h,e)}function gn(t,e,n){dn(t,e),0<n.length&&(t.i=null,t.g.set(mn(t,e),A(n)),t.h+=n.length)}function mn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function yn(t,e){e&&!t.j&&(fn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(dn(this,e),gn(this,n,t))}),t)),t.j=e}s=hn.prototype,s.add=function(t,e){fn(this),this.i=null,t=mn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},s.forEach=function(t,e){fn(this),this.g.forEach((function(n,r){S(n,(function(n){t.call(e,n,r,this)}),this)}),this)},s.T=function(){fn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],o=0;o<i.length;o++)n.push(e[r]);return n},s.R=function(t){fn(this);var e=[];if("string"===typeof t)pn(this,t)&&(e=j(e,this.g.get(mn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=j(e,t[n])}return e},s.set=function(t,e){return fn(this),this.i=null,t=mn(this,t),pn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},s.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},s.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var o=0;o<r.length;o++){var s=i;""!==r[o]&&(s+="="+encodeURIComponent(String(r[o]))),t.push(s)}}return this.i=t.join("&")};var vn=function(){function t(t,e){this.h=t,this.g=e}return t}();function bn(t){this.l=t||wn,u.PerformanceNavigationTiming?(t=u.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(u.g&&u.g.Ea&&u.g.Ea()&&u.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var wn=10;function En(t){return!!t.h||!!t.g&&t.g.size>=t.j}function _n(t){return t.h?1:t.g?t.g.size:0}function On(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Tn(t,e){t.g?t.g.add(e):t.h=e}function Sn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function In(t){var e,n;if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){var r=t.i;try{for(var i=o(t.g.values()),s=i.next();!s.done;s=i.next()){var a=s.value;r=r.concat(a.D)}}catch(c){e={error:c}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}return r}return A(t.i)}function jn(){}function An(){this.g=new jn}function Cn(t,e,n){var r=n||"";try{Ue(t,(function(t,n){var i=t;f(t)&&(i=kt(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function xn(t,e){var n=new Jt;if(u.Image){var r=new Image;r.onload=b(kn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=b(kn,n,r,"TestLoadImage: error",!1,e),r.onabort=b(kn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=b(kn,n,r,"TestLoadImage: timeout",!1,e),u.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function kn(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(o){}}function Nn(t){this.l=t.$b||null,this.j=t.ib||!1}function Dn(t,e){At.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Ln,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}bn.prototype.cancel=function(){var t,e;if(this.i=In(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){try{for(var n=o(this.g.values()),r=n.next();!r.done;r=n.next()){var i=r.value;i.cancel()}}catch(s){t={error:s}}finally{try{r&&!r.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}this.g.clear()}},jn.prototype.stringify=function(t){return u.JSON.stringify(t,void 0)},jn.prototype.parse=function(t){return u.JSON.parse(t,void 0)},w(Nn,ge),Nn.prototype.g=function(){return new Dn(this.l,this.j)},Nn.prototype.i=function(t){return function(){return t}}({}),w(Dn,At);var Ln=0;function Pn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Rn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Mn(t)}function Mn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}s=Dn.prototype,s.open=function(t,e){if(this.readyState!=Ln)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Mn(this)},s.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;var e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||u).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},s.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Rn(this)),this.readyState=Ln},s.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Mn(this)),this.g&&(this.readyState=3,Mn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof u.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Pn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},s.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Rn(this):Mn(this),3==this.readyState&&Pn(this)}},s.Ua=function(t){this.g&&(this.response=this.responseText=t,Rn(this))},s.Ta=function(t){this.g&&(this.response=t,Rn(this))},s.ha=function(){this.g&&Rn(this)},s.setRequestHeader=function(t,e){this.v.append(t,e)},s.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";for(var t=[],e=this.h.entries(),n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Dn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Fn=u.JSON.parse;function Vn(t){At.call(this),this.headers=new Be,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Un,this.K=this.L=!1}w(Vn,At);var Un="",Bn=/^https?$/i,qn=["POST","PUT"];function $n(t){return z&&et()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function zn(t){return"content-type"==t.toLowerCase()}function Gn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Kn(t),Wn(t)}function Kn(t){t.D||(t.D=!0,Ct(t,"complete"),Ct(t,"error"))}function Hn(t){if(t.h&&"undefined"!=typeof c&&(!t.C[1]||4!=Xn(t)||2!=t.ba()))if(t.v&&4==Xn(t))Gt(t.Fa,0,t);else if(Ct(t,"readystatechange"),4==Xn(t)){t.h=!1;try{var e,n=t.ba();t:switch(n){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break t;default:r=!1}if(!(e=r)){var i;if(i=0===n){var o=String(t.H).match(ze)[1]||null;if(!o&&u.self&&u.self.location){var s=u.self.location.protocol;o=s.substr(0,s.length-1)}i=!Bn.test(o?o.toLowerCase():"")}e=i}if(e)Ct(t,"complete"),Ct(t,"success");else{t.m=6;try{var a=2<Xn(t)?t.g.statusText:""}catch(l){a=""}t.j=a+" ["+t.ba()+"]",Kn(t)}}finally{Wn(t)}}}function Wn(t,e){if(t.g){Qn(t);var n=t.g,r=t.C[0]?l:null;t.g=null,t.C=null,e||Ct(t,"ready");try{n.onreadystatechange=r}catch(i){}}}function Qn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(u.clearTimeout(t.A),t.A=null)}function Xn(t){return t.g?t.g.readyState:0}function Yn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Un:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Jn(t){var e="";return R(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Zn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Jn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Je(t,e,n))}function tr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function er(t){this.za=0,this.l=[],this.h=new Jt,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=tr("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=tr("baseRetryDelayMs",5e3,t),this.$a=tr("retryDelaySeedMs",1e4,t),this.Ya=tr("forwardChannelMaxRetries",2,t),this.ra=tr("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new bn(t&&t.concurrentRequestLimit),this.Ca=new An,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function nr(t){if(ir(t),3==t.G){var e=t.V++,n=He(t.F);Je(n,"SID",t.J),Je(n,"RID",e),Je(n,"TYPE","terminate"),ur(t,n),e=new Oe(t,t.h,e,void 0),e.K=2,e.v=Ze(He(n)),n=!1,u.navigator&&u.navigator.sendBeacon&&(n=u.navigator.sendBeacon(e.v.toString(),"")),!n&&u.Image&&((new Image).src=e.v,n=!0),n||(e.g=Er(e.l,null),e.g.ea(e.v)),e.F=Date.now(),De(e)}br(t)}function rr(t){t.g&&(dr(t),t.g.cancel(),t.g=null)}function ir(t){rr(t),t.u&&(u.clearTimeout(t.u),t.u=null),gr(t),t.i.cancel(),t.m&&("number"===typeof t.m&&u.clearTimeout(t.m),t.m=null)}function or(t,e){t.l.push(new vn(t.Za++,e)),3==t.G&&sr(t)}function sr(t){En(t.i)||t.m||(t.m=!0,Ft(t.Ha,t),t.C=0)}function ar(t,e){return!(_n(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=fe(v(t.Ha,t,e),yr(t,t.C)),t.C++,!0))}function cr(t,e){var n;n=e?e.m:t.V++;var r=He(t.F);Je(r,"SID",t.J),Je(r,"RID",n),Je(r,"AID",t.U),ur(t,r),t.o&&t.s&&Zn(r,t.o,t.s),n=new Oe(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=lr(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Tn(t.i,n),Ae(n,r,e)}function ur(t,e){t.j&&Ue({},(function(t,n){Je(e,n,t)}))}function lr(t,e,n){n=Math.min(t.l.length,n);var r=t.j?v(t.j.Oa,t.j,t):null;t:for(var i=t.l,o=-1;;){var s=["count="+n];-1==o?0<n?(o=i[0].h,s.push("ofs="+o)):o=0:s.push("ofs="+o);for(var a=!0,c=0;c<n;c++){var u=i[c].h,l=i[c].g;if(u-=o,0>u)o=Math.max(0,i[c].h-100),a=!1;else try{Cn(l,s,"req"+u+"_")}catch(h){r&&r(l)}}if(a){r=s.join("&");break t}}return t=t.l.splice(0,n),e.D=t,r}function hr(t){t.g||t.u||(t.Y=1,Ft(t.Ga,t),t.A=0)}function fr(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=fe(v(t.Ga,t),yr(t,t.A)),t.A++,!0)}function dr(t){null!=t.B&&(u.clearTimeout(t.B),t.B=null)}function pr(t){t.g=new Oe(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=He(t.oa);Je(e,"RID","rpc"),Je(e,"SID",t.J),Je(e,"CI",t.N?"0":"1"),Je(e,"AID",t.U),ur(t,e),Je(e,"TYPE","xmlhttp"),t.o&&t.s&&Zn(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Ze(He(e)),n.s=null,n.U=!0,Ce(n,t)}function gr(t){null!=t.v&&(u.clearTimeout(t.v),t.v=null)}function mr(t,e){var n=null;if(t.g==e){gr(t),dr(t),t.g=null;var r=2}else{if(!On(t.i,e))return;n=e.D,Sn(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=se(),Ct(r,new he(r,n,e,i)),sr(t)}else hr(t);else if(i=e.o,3==i||0==i&&0<t.I||!(1==r&&ar(t,e)||2==r&&fr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:vr(t,5);break;case 4:vr(t,10);break;case 3:vr(t,6);break;default:vr(t,2)}}function yr(t,e){var n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function vr(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=v(t.jb,t);n||(n=new Ke("//www.google.com/images/cleardot.gif"),u.location&&"http"==u.location.protocol||We(n,"https"),Ze(n)),xn(n.toString(),r)}else le(2);t.G=0,t.j&&t.j.va(e),br(t),ir(t)}function br(t){t.G=0,t.I=-1,t.j&&(0==In(t.i).length&&0==t.l.length||(t.i.i.length=0,A(t.l),t.l.length=0),t.j.ua())}function wr(t,e,n){var r=tn(n);if(""!=r.i)e&&Qe(r,e+"."+r.i),Xe(r,r.m);else{var i=u.location;r=en(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&R(t.aa,(function(t,e){Je(r,e,t)})),e=t.D,n=t.sa,e&&n&&Je(r,e,n),Je(r,"VER",t.ma),ur(t,r),r}function Er(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Vn(new Nn({ib:!0})):new Vn(t.qa),e.L=t.H,e}function _r(){}function Or(){if(z&&!(10<=Number(rt)))throw Error("Environmental error: no available transport.")}function Tr(t,e){At.call(this),this.g=new er(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!C(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!C(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new jr(this)}function Sr(t){we.call(this);var e=t.__sm__;if(e){t:{for(var n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Ir(){Ee.call(this),this.status=1}function jr(t){this.g=t}s=Vn.prototype,s.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ve.g(),this.C=this.u?me(this.u):me(ve),this.g.onreadystatechange=v(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(o){return void Gn(this,o)}t=n||"";var i=new Be(this.headers);r&&Ue(r,(function(t,e){i.set(e,t)})),r=I(i.T()),n=u.FormData&&t instanceof u.FormData,!(0<=T(qn,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Qn(this),0<this.B&&((this.K=$n(this.g))?(this.g.timeout=this.B,this.g.ontimeout=v(this.pa,this)):this.A=Gt(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(o){Gn(this,o)}},s.pa=function(){"undefined"!=typeof c&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ct(this,"timeout"),this.abort(8))},s.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ct(this,"complete"),Ct(this,"abort"),Wn(this))},s.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Wn(this,!0)),Vn.Z.M.call(this)},s.Fa=function(){this.s||(this.F||this.v||this.l?Hn(this):this.cb())},s.cb=function(){Hn(this)},s.ba=function(){try{return 2<Xn(this)?this.g.status:-1}catch(t){return-1}},s.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},s.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Fn(e)}},s.Da=function(){return this.m},s.La=function(){return"string"===typeof this.j?this.j:String(this.j)},s=er.prototype,s.ma=8,s.G=1,s.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},s.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;var e=new Oe(this,this.h,t,void 0),n=this.s;if(this.P&&(n?(n=M(n),V(n,this.P)):n=this.P),null===this.o&&(e.H=n),this.ja)t:{for(var r=0,i=0;i<this.l.length;i++){var o=this.l[i];if(o="__data__"in o.g&&(o=o.g.__data__,"string"===typeof o)?o.length:void 0,void 0===o)break;if(r+=o,4096<r){r=i;break t}if(4096===r||i===this.l.length-1){r=i+1;break t}}r=1e3}else r=1e3;r=lr(this,e,r),i=He(this.F),Je(i,"RID",t),Je(i,"CVER",22),this.D&&Je(i,"X-HTTP-Session-Id",this.D),ur(this,i),this.o&&n&&Zn(i,this.o,n),Tn(this.i,e),this.Ra&&Je(i,"TYPE","init"),this.ja?(Je(i,"$req",r),Je(i,"SID","null"),e.$=!0,Ae(e,i,null)):Ae(e,i,r),this.G=2}}else 3==this.G&&(t?cr(this,t):0==this.l.length||En(this.i)||cr(this))},s.Ga=function(){if(this.u=null,pr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=fe(v(this.bb,this),t)}},s.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,le(10),rr(this),pr(this))},s.ab=function(){null!=this.v&&(this.v=null,rr(this),fr(this),le(19))},s.jb=function(t){t?(this.h.info("Successfully pinged google.com"),le(2)):(this.h.info("Failed to ping google.com"),le(1))},s=_r.prototype,s.xa=function(){},s.wa=function(){},s.va=function(){},s.ua=function(){},s.Oa=function(){},Or.prototype.g=function(t,e){return new Tr(t,e)},w(Tr,At),Tr.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Ft(v(t.hb,t,e))),le(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=wr(t,null,t.W),sr(t)},Tr.prototype.close=function(){nr(this.g)},Tr.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,or(this.g,e)}else this.v?(e={},e.__data__=kt(t),or(this.g,e)):or(this.g,t)},Tr.prototype.M=function(){this.g.j=null,delete this.j,nr(this.g),delete this.g,Tr.Z.M.call(this)},w(Sr,we),w(Ir,Ee),w(jr,_r),jr.prototype.xa=function(){Ct(this.g,"a")},jr.prototype.wa=function(t){Ct(this.g,new Sr(t))},jr.prototype.va=function(t){Ct(this.g,new Ir(t))},jr.prototype.ua=function(){Ct(this.g,"b")},Or.prototype.createWebChannel=Or.prototype.g,Tr.prototype.send=Tr.prototype.u,Tr.prototype.open=Tr.prototype.m,Tr.prototype.close=Tr.prototype.close,de.NO_ERROR=0,de.TIMEOUT=8,de.HTTP_ERROR=6,pe.COMPLETE="complete",ye.EventType=be,be.OPEN="a",be.CLOSE="b",be.ERROR="c",be.MESSAGE="d",At.prototype.listen=At.prototype.N,Vn.prototype.listenOnce=Vn.prototype.O,Vn.prototype.getLastError=Vn.prototype.La,Vn.prototype.getLastErrorCode=Vn.prototype.Da,Vn.prototype.getStatus=Vn.prototype.ba,Vn.prototype.getResponseJson=Vn.prototype.Qa,Vn.prototype.getResponseText=Vn.prototype.ga,Vn.prototype.send=Vn.prototype.ea;var Ar=function(){return new Or},Cr=function(){return se()},xr=de,kr=pe,Nr=ie,Dr={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Lr=Nn,Pr=ye,Rr=Vn}).call(this,n("c8ba"))},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},ca84:function(t,e,n){var r=n("5135"),i=n("fc6a"),o=n("4d64").indexOf,s=n("d012");t.exports=function(t,e){var n,a=i(t),c=0,u=[];for(n in a)!r(s,n)&&r(a,n)&&u.push(n);while(e.length>c)r(a,n=e[c++])&&(~o(u,n)||u.push(n));return u}},cc12:function(t,e,n){var r=n("da84"),i=n("861d"),o=r.document,s=i(o)&&i(o.createElement);t.exports=function(t){return s?o.createElement(t):{}}},cca6:function(t,e,n){var r=n("23e7"),i=n("60da");r({target:"Object",stat:!0,forced:Object.assign!==i},{assign:i})},cdf9:function(t,e,n){var r=n("825a"),i=n("861d"),o=n("f069");t.exports=function(t,e){if(r(t),i(e)&&e.constructor===t)return e;var n=o.f(t),s=n.resolve;return s(e),n.promise}},ce4e:function(t,e,n){var r=n("da84");t.exports=function(t,e){try{Object.defineProperty(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},d012:function(t,e){t.exports={}},d039:function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},d066:function(t,e,n){var r=n("da84"),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t]):r[t]&&r[t][e]}},d1e7:function(t,e,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!r.call({1:2},1);e.f=o?function(t){var e=i(this,t);return!!e&&e.enumerable}:r},d2bb:function(t,e,n){var r=n("825a"),i=n("3bbe");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,t.call(n,[]),e=n instanceof Array}catch(o){}return function(n,o){return r(n),i(o),e?t.call(n,o):n.__proto__=o,n}}():void 0)},d3b7:function(t,e,n){var r=n("00ee"),i=n("6eeb"),o=n("b041");r||i(Object.prototype,"toString",o,{unsafe:!0})},d44e:function(t,e,n){var r=n("9bf2").f,i=n("5135"),o=n("b622"),s=o("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,s)&&r(t,s,{configurable:!0,value:e})}},d4c3:function(t,e,n){var r=n("342f"),i=n("da84");t.exports=/ipad|iphone|ipod/i.test(r)&&void 0!==i.Pebble},d9b5:function(t,e,n){var r=n("d066"),i=n("fdbf");t.exports=i?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return"function"==typeof e&&Object(t)instanceof e}},da84:function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},dbb4:function(t,e,n){var r=n("23e7"),i=n("83ab"),o=n("56ef"),s=n("fc6a"),a=n("06cf"),c=n("8418");r({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,n,r=s(t),i=a.f,u=o(r),l={},h=0;while(u.length>h)n=i(r,e=u[h++]),void 0!==n&&c(l,e,n);return l}})},df75:function(t,e,n){var r=n("ca84"),i=n("7839");t.exports=Object.keys||function(t){return r(t,i)}},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var i=t[r];"."===i?t.splice(r,1):".."===i?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function r(t){"string"!==typeof t&&(t+="");var e,n=0,r=-1,i=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!i){n=e+1;break}}else-1===r&&(i=!1,r=e+1);return-1===r?"":t.slice(n,r)}function i(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",r=!1,o=arguments.length-1;o>=-1&&!r;o--){var s=o>=0?arguments[o]:t.cwd();if("string"!==typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(e=s+"/"+e,r="/"===s.charAt(0))}return e=n(i(e.split("/"),(function(t){return!!t})),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(t){var r=e.isAbsolute(t),s="/"===o(t,-1);return t=n(i(t.split("/"),(function(t){return!!t})),!r).join("/"),t||r||(t="."),t&&s&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(i(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var i=r(t.split("/")),o=r(n.split("/")),s=Math.min(i.length,o.length),a=s,c=0;c<s;c++)if(i[c]!==o[c]){a=c;break}var u=[];for(c=a;c<i.length;c++)u.push("..");return u=u.concat(o.slice(a)),u.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,r=-1,i=!0,o=t.length-1;o>=1;--o)if(e=t.charCodeAt(o),47===e){if(!i){r=o;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":t.slice(0,r)},e.basename=function(t,e){var n=r(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,n=0,r=-1,i=!0,o=0,s=t.length-1;s>=0;--s){var a=t.charCodeAt(s);if(47!==a)-1===r&&(i=!1,r=s+1),46===a?-1===e?e=s:1!==o&&(o=1):-1!==e&&(o=-1);else if(!i){n=s+1;break}}return-1===e||-1===r||0===o||1===o&&e===r-1&&e===n+1?"":t.slice(e,r)};var o="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},e163:function(t,e,n){var r=n("5135"),i=n("7b0b"),o=n("f772"),s=n("e177"),a=o("IE_PROTO"),c=Object.prototype;t.exports=s?Object.getPrototypeOf:function(t){return t=i(t),r(t,a)?t[a]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},e177:function(t,e,n){var r=n("d039");t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},e260:function(t,e,n){"use strict";var r=n("fc6a"),i=n("44d2"),o=n("3f8c"),s=n("69f3"),a=n("7dd0"),c="Array Iterator",u=s.set,l=s.getterFor(c);t.exports=a(Array,"Array",(function(t,e){u(this,{type:c,target:r(t),index:0,kind:e})}),(function(){var t=l(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values"),o.Arguments=o.Array,i("keys"),i("values"),i("entries")},e2cc:function(t,e,n){var r=n("6eeb");t.exports=function(t,e,n){for(var i in e)r(t,i,e[i],n);return t}},e439:function(t,e,n){var r=n("23e7"),i=n("d039"),o=n("fc6a"),s=n("06cf").f,a=n("83ab"),c=i((function(){s(1)})),u=!a||c;r({target:"Object",stat:!0,forced:u,sham:!a},{getOwnPropertyDescriptor:function(t,e){return s(o(t),e)}})},e538:function(t,e,n){var r=n("b622");e.f=r},e667:function(t,e){t.exports=function(t){try{return{error:!1,value:t()}}catch(e){return{error:!0,value:e}}}},e6cf:function(t,e,n){"use strict";var r,i,o,s,a=n("23e7"),c=n("c430"),u=n("da84"),l=n("d066"),h=n("fea9"),f=n("6eeb"),d=n("e2cc"),p=n("d2bb"),g=n("d44e"),m=n("2626"),y=n("861d"),v=n("1c0b"),b=n("19aa"),w=n("8925"),E=n("2266"),_=n("1c7e"),O=n("4840"),T=n("2cf4").set,S=n("b575"),I=n("cdf9"),j=n("44de"),A=n("f069"),C=n("e667"),x=n("69f3"),k=n("94ca"),N=n("b622"),D=n("6069"),L=n("605d"),P=n("2d00"),R=N("species"),M="Promise",F=x.get,V=x.set,U=x.getterFor(M),B=h&&h.prototype,q=h,$=B,z=u.TypeError,G=u.document,K=u.process,H=A.f,W=H,Q=!!(G&&G.createEvent&&u.dispatchEvent),X="function"==typeof PromiseRejectionEvent,Y="unhandledrejection",J="rejectionhandled",Z=0,tt=1,et=2,nt=1,rt=2,it=!1,ot=k(M,(function(){var t=w(q),e=t!==String(q);if(!e&&66===P)return!0;if(c&&!$["finally"])return!0;if(P>=51&&/native code/.test(t))return!1;var n=new q((function(t){t(1)})),r=function(t){t((function(){}),(function(){}))},i=n.constructor={};return i[R]=r,it=n.then((function(){}))instanceof r,!it||!e&&D&&!X})),st=ot||!_((function(t){q.all(t)["catch"]((function(){}))})),at=function(t){var e;return!(!y(t)||"function"!=typeof(e=t.then))&&e},ct=function(t,e){if(!t.notified){t.notified=!0;var n=t.reactions;S((function(){var r=t.value,i=t.state==tt,o=0;while(n.length>o){var s,a,c,u=n[o++],l=i?u.ok:u.fail,h=u.resolve,f=u.reject,d=u.domain;try{l?(i||(t.rejection===rt&&ft(t),t.rejection=nt),!0===l?s=r:(d&&d.enter(),s=l(r),d&&(d.exit(),c=!0)),s===u.promise?f(z("Promise-chain cycle")):(a=at(s))?a.call(s,h,f):h(s)):f(r)}catch(p){d&&!c&&d.exit(),f(p)}}t.reactions=[],t.notified=!1,e&&!t.rejection&&lt(t)}))}},ut=function(t,e,n){var r,i;Q?(r=G.createEvent("Event"),r.promise=e,r.reason=n,r.initEvent(t,!1,!0),u.dispatchEvent(r)):r={promise:e,reason:n},!X&&(i=u["on"+t])?i(r):t===Y&&j("Unhandled promise rejection",n)},lt=function(t){T.call(u,(function(){var e,n=t.facade,r=t.value,i=ht(t);if(i&&(e=C((function(){L?K.emit("unhandledRejection",r,n):ut(Y,n,r)})),t.rejection=L||ht(t)?rt:nt,e.error))throw e.value}))},ht=function(t){return t.rejection!==nt&&!t.parent},ft=function(t){T.call(u,(function(){var e=t.facade;L?K.emit("rejectionHandled",e):ut(J,e,t.value)}))},dt=function(t,e,n){return function(r){t(e,r,n)}},pt=function(t,e,n){t.done||(t.done=!0,n&&(t=n),t.value=e,t.state=et,ct(t,!0))},gt=function(t,e,n){if(!t.done){t.done=!0,n&&(t=n);try{if(t.facade===e)throw z("Promise can't be resolved itself");var r=at(e);r?S((function(){var n={done:!1};try{r.call(e,dt(gt,n,t),dt(pt,n,t))}catch(i){pt(n,i,t)}})):(t.value=e,t.state=tt,ct(t,!1))}catch(i){pt({done:!1},i,t)}}};if(ot&&(q=function(t){b(this,q,M),v(t),r.call(this);var e=F(this);try{t(dt(gt,e),dt(pt,e))}catch(n){pt(e,n)}},$=q.prototype,r=function(t){V(this,{type:M,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:Z,value:void 0})},r.prototype=d($,{then:function(t,e){var n=U(this),r=H(O(this,q));return r.ok="function"!=typeof t||t,r.fail="function"==typeof e&&e,r.domain=L?K.domain:void 0,n.parent=!0,n.reactions.push(r),n.state!=Z&&ct(n,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r,e=F(t);this.promise=t,this.resolve=dt(gt,e),this.reject=dt(pt,e)},A.f=H=function(t){return t===q||t===o?new i(t):W(t)},!c&&"function"==typeof h&&B!==Object.prototype)){s=B.then,it||(f(B,"then",(function(t,e){var n=this;return new q((function(t,e){s.call(n,t,e)})).then(t,e)}),{unsafe:!0}),f(B,"catch",$["catch"],{unsafe:!0}));try{delete B.constructor}catch(mt){}p&&p(B,$)}a({global:!0,wrap:!0,forced:ot},{Promise:q}),g(q,M,!1,!0),m(M),o=l(M),a({target:M,stat:!0,forced:ot},{reject:function(t){var e=H(this);return e.reject.call(void 0,t),e.promise}}),a({target:M,stat:!0,forced:c||ot},{resolve:function(t){return I(c&&this===o?q:this,t)}}),a({target:M,stat:!0,forced:st},{all:function(t){var e=this,n=H(e),r=n.resolve,i=n.reject,o=C((function(){var n=v(e.resolve),o=[],s=0,a=1;E(t,(function(t){var c=s++,u=!1;o.push(void 0),a++,n.call(e,t).then((function(t){u||(u=!0,o[c]=t,--a||r(o))}),i)})),--a||r(o)}));return o.error&&i(o.value),n.promise},race:function(t){var e=this,n=H(e),r=n.reject,i=C((function(){var i=v(e.resolve);E(t,(function(t){i.call(e,t).then(n.resolve,r)}))}));return i.error&&r(i.value),n.promise}})},e71f:function(t,e,n){"use strict";var r=n("0829");n.d(e,"a",(function(){return r["a"]})),n.d(e,"b",(function(){return r["b"]})),n.d(e,"c",(function(){return r["c"]})),n.d(e,"d",(function(){return r["d"]}))},e893:function(t,e,n){var r=n("5135"),i=n("56ef"),o=n("06cf"),s=n("9bf2");t.exports=function(t,e){for(var n=i(e),a=s.f,c=o.f,u=0;u<n.length;u++){var l=n[u];r(t,l)||a(t,l,c(e,l))}}},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},e95a:function(t,e,n){var r=n("b622"),i=n("3f8c"),o=r("iterator"),s=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||s[o]===t)}},f069:function(t,e,n){"use strict";var r=n("1c0b"),i=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)};t.exports.f=function(t){return new i(t)}},f5df:function(t,e,n){var r=n("00ee"),i=n("c6b6"),o=n("b622"),s=o("toStringTag"),a="Arguments"==i(function(){return arguments}()),c=function(t,e){try{return t[e]}catch(n){}};t.exports=r?i:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=c(e=Object(t),s))?n:a?i(e):"Object"==(r=i(e))&&"function"==typeof e.callee?"Arguments":r}},f772:function(t,e,n){var r=n("5692"),i=n("90e3"),o=r("keys");t.exports=function(t){return o[t]||(o[t]=i(t))}},fc6a:function(t,e,n){var r=n("44ad"),i=n("1d80");t.exports=function(t){return r(i(t))}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(t,e,n){var r=n("4930");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fea9:function(t,e,n){var r=n("da84");t.exports=r.Promise},ffa6:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return l}));var r=n("9ab4"),i=n("a8e9"),o=function(){function t(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(t){return this.instantiationMode=t,this},t.prototype.setMultipleInstances=function(t){return this.multipleInstances=t,this},t.prototype.setServiceProps=function(t){return this.serviceProps=t,this},t.prototype.setInstanceCreatedCallback=function(t){return this.onInstanceCreated=t,this},t}(),s="[DEFAULT]",a=function(){function t(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t.prototype.get=function(t){var e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){var n=new i["a"];if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:e});r&&n.resolve(r)}catch(o){}}return this.instancesDeferred.get(e).promise},t.prototype.getImmediate=function(t){var e,n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(t){var e,n;if(t.name!==this.name)throw Error("Mismatching Component "+t.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=t,this.shouldAutoInitialize()){if(u(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(d){}try{for(var i=Object(r["g"])(this.instancesDeferred.entries()),o=i.next();!o.done;o=i.next()){var a=Object(r["e"])(o.value,2),c=a[0],l=a[1],h=this.normalizeInstanceIdentifier(c);try{var f=this.getOrInitializeService({instanceIdentifier:h});l.resolve(f)}catch(d){}}}catch(p){e={error:p}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}}},t.prototype.clearInstance=function(t){void 0===t&&(t=s),this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)},t.prototype.delete=function(){return Object(r["b"])(this,void 0,void 0,(function(){var t;return Object(r["d"])(this,(function(e){switch(e.label){case 0:return t=Array.from(this.instances.values()),[4,Promise.all(Object(r["f"])(Object(r["f"])([],Object(r["e"])(t.filter((function(t){return"INTERNAL"in t})).map((function(t){return t.INTERNAL.delete()})))),Object(r["e"])(t.filter((function(t){return"_delete"in t})).map((function(t){return t._delete()})))))];case 1:return e.sent(),[2]}}))}))},t.prototype.isComponentSet=function(){return null!=this.component},t.prototype.isInitialized=function(t){return void 0===t&&(t=s),this.instances.has(t)},t.prototype.getOptions=function(t){return void 0===t&&(t=s),this.instancesOptions.get(t)||{}},t.prototype.initialize=function(t){var e,n;void 0===t&&(t={});var i=t.options,o=void 0===i?{}:i,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(this.name+"("+s+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var a=this.getOrInitializeService({instanceIdentifier:s,options:o});try{for(var c=Object(r["g"])(this.instancesDeferred.entries()),u=c.next();!u.done;u=c.next()){var l=Object(r["e"])(u.value,2),h=l[0],f=l[1],d=this.normalizeInstanceIdentifier(h);s===d&&f.resolve(a)}}catch(p){e={error:p}}finally{try{u&&!u.done&&(n=c.return)&&n.call(c)}finally{if(e)throw e.error}}return a},t.prototype.onInit=function(t,e){var n,r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);var o=this.instances.get(r);return o&&t(o,r),function(){i.delete(t)}},t.prototype.invokeOnInitCallbacks=function(t,e){var n,i,o=this.onInitCallbacks.get(e);if(o)try{for(var s=Object(r["g"])(o),a=s.next();!a.done;a=s.next()){var c=a.value;try{c(t,e)}catch(u){}}}catch(l){n={error:l}}finally{try{a&&!a.done&&(i=s.return)&&i.call(s)}finally{if(n)throw n.error}}},t.prototype.getOrInitializeService=function(t){var e=t.instanceIdentifier,n=t.options,r=void 0===n?{}:n,i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:c(e),options:r}),this.instances.set(e,i),this.instancesOptions.set(e,r),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch(o){}return i||null},t.prototype.normalizeInstanceIdentifier=function(t){return void 0===t&&(t=s),this.component?this.component.multipleInstances?t:s:t},t.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},t}();function c(t){return t===s?void 0:t}function u(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var l=function(){function t(t){this.name=t,this.providers=new Map}return t.prototype.addComponent=function(t){var e=this.getProvider(t.name);if(e.isComponentSet())throw new Error("Component "+t.name+" has already been registered with "+this.name);e.setComponent(t)},t.prototype.addOrOverwriteComponent=function(t){var e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)},t.prototype.getProvider=function(t){if(this.providers.has(t))return this.providers.get(t);var e=new a(t,this);return this.providers.set(t,e),e},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}()}}]);
//# sourceMappingURL=chunk-vendors.d6317a9b.js.map