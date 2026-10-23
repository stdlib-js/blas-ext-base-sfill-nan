"use strict";var u=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var n=u(function(w,f){
var y=require('@stdlib/math-base-assert-is-nanf/dist');function j(i,r,e,a,p){var s,t;if(i<=0)return e;for(s=p,t=0;t<i;t++)y(e[s])&&(e[s]=r),s+=a;return e}f.exports=j
});var q=u(function(z,o){
var m=require('@stdlib/strided-base-stride2offset/dist'),x=n();function R(i,r,e,a){return x(i,r,e,a,m(i,a))}o.exports=R
});var N=u(function(A,c){
var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=q(),E=n();_(l,"ndarray",E);c.exports=l
});var O=require("path").join,b=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),h=N(),v,d=b(O(__dirname,"./native.js"));g(d)?v=h:v=d;module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
