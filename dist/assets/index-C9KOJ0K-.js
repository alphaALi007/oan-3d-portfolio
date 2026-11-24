(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const gr=document.createElement("dialog");gr.className="capture-view";gr.setAttribute("aria-labelledby","capture-caption");gr.innerHTML='<img alt=""><footer><span id="capture-caption"></span><button type="button">Close</button></footer>';document.body.append(gr);for(const s of document.querySelectorAll(".capture"))s.addEventListener("click",e=>{if(e.ctrlKey||e.metaKey||e.shiftKey)return;e.preventDefault();const t=gr.querySelector("img");t.src=s.href,t.alt=s.querySelector("img").alt,gr.querySelector("span").textContent=t.alt,gr.showModal()});gr.querySelector("button").onclick=()=>gr.close();const Bh="181",Z0=0,Of=1,J0=2,zp=1,Vp=2,ur=3,br=0,qn=1,fn=2,xr=0,ua=1,Bf=2,kf=3,zf=4,Q0=5,ps=100,e_=101,t_=102,n_=103,i_=104,r_=200,s_=201,a_=202,o_=203,Su=204,Tu=205,c_=206,l_=207,u_=208,h_=209,f_=210,d_=211,p_=212,m_=213,__=214,Eu=0,Au=1,wu=2,ya=3,Ru=4,Cu=5,Pu=6,Iu=7,Gp=0,g_=1,x_=2,Hr=0,v_=1,y_=2,b_=3,Hp=4,M_=5,S_=6,T_=7,Vf="attached",E_="detached",Wp=300,ba=301,Ma=302,Du=303,Lu=304,gl=306,ws=1e3,Wi=1001,jc=1002,On=1003,Xp=1004,Qa=1005,mn=1006,Nc=1007,pr=1008,Zi=1009,qp=1010,Yp=1011,To=1012,kh=1013,Rs=1014,Li=1015,Na=1016,zh=1017,Vh=1018,Eo=1020,Kp=35902,jp=35899,$p=1021,Zp=1022,bi=1023,Ao=1026,wo=1027,Gh=1028,Hh=1029,Wh=1030,Xh=1031,qh=1033,Uc=33776,Fc=33777,Oc=33778,Bc=33779,Nu=35840,Uu=35841,Fu=35842,Ou=35843,Bu=36196,ku=37492,zu=37496,Vu=37808,Gu=37809,Hu=37810,Wu=37811,Xu=37812,qu=37813,Yu=37814,Ku=37815,ju=37816,$u=37817,Zu=37818,Ju=37819,Qu=37820,eh=37821,th=36492,nh=36494,ih=36495,rh=36283,sh=36284,ah=36285,oh=36286,Jp=2200,A_=2201,w_=2202,Ro=2300,Co=2301,Al=2302,ra=2400,sa=2401,$c=2402,Yh=2500,R_=2501,C_=0,Qp=1,ch=2,P_=3200,I_=3201,em=0,D_=1,Fr="",Lt="srgb",Bn="srgb-linear",Zc="linear",At="srgb",Fs=7680,Gf=519,L_=512,N_=513,U_=514,tm=515,F_=516,O_=517,B_=518,k_=519,lh=35044,Hf="300 es",Xi=2e3,Jc=2001;function nm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Po(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function z_(){const s=Po("canvas");return s.style.display="block",s}const Wf={};function Qc(...s){const e="THREE."+s.shift();console.log(e,...s)}function qe(...s){const e="THREE."+s.shift();console.warn(e,...s)}function lt(...s){const e="THREE."+s.shift();console.error(e,...s)}function Io(...s){const e=s.join(" ");e in Wf||(Wf[e]=!0,qe(...s))}function V_(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}class Ls{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xf=1234567;const co=Math.PI/180,Sa=180/Math.PI;function Ui(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xn[s&255]+xn[s>>8&255]+xn[s>>16&255]+xn[s>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[t&63|128]+xn[t>>8&255]+"-"+xn[t>>16&255]+xn[t>>24&255]+xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]).toLowerCase()}function ut(s,e,t){return Math.max(e,Math.min(t,s))}function Kh(s,e){return(s%e+e)%e}function G_(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function H_(s,e,t){return s!==e?(t-s)/(e-s):0}function lo(s,e,t){return(1-t)*s+t*e}function W_(s,e,t,n){return lo(s,e,1-Math.exp(-t*n))}function X_(s,e=1){return e-Math.abs(Kh(s,e*2)-e)}function q_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Y_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function K_(s,e){return s+Math.floor(Math.random()*(e-s+1))}function j_(s,e){return s+Math.random()*(e-s)}function $_(s){return s*(.5-Math.random())}function Z_(s){s!==void 0&&(Xf=s);let e=Xf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function J_(s){return s*co}function Q_(s){return s*Sa}function eg(s){return(s&s-1)===0&&s!==0}function tg(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ng(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ig(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),f=a((e-n)/2),d=r((n-e)/2),p=a((n-e)/2);switch(i){case"XYX":s.set(o*u,c*h,c*f,o*l);break;case"YZY":s.set(c*f,o*u,c*h,o*l);break;case"ZXZ":s.set(c*h,c*f,o*u,o*l);break;case"XZX":s.set(o*u,c*p,c*d,o*l);break;case"YXY":s.set(c*d,o*u,c*p,o*l);break;case"ZYZ":s.set(c*p,c*d,o*u,o*l);break;default:qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ii(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function St(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Pi={DEG2RAD:co,RAD2DEG:Sa,generateUUID:Ui,clamp:ut,euclideanModulo:Kh,mapLinear:G_,inverseLerp:H_,lerp:lo,damp:W_,pingpong:X_,smoothstep:q_,smootherstep:Y_,randInt:K_,randFloat:j_,randFloatSpread:$_,seededRandom:Z_,degToRad:J_,radToDeg:Q_,isPowerOfTwo:eg,ceilPowerOfTwo:tg,floorPowerOfTwo:ng,setQuaternionFromProperEuler:ig,normalize:St,denormalize:Ii};class it{constructor(e=0,t=0){it.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3],f=r[a+0],d=r[a+1],p=r[a+2],g=r[a+3];if(o<=0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o>=1){e[t+0]=f,e[t+1]=d,e[t+2]=p,e[t+3]=g;return}if(h!==g||c!==f||l!==d||u!==p){let _=c*f+l*d+u*p+h*g;_<0&&(f=-f,d=-d,p=-p,g=-g,_=-_);let m=1-o;if(_<.9995){const x=Math.acos(_),y=Math.sin(x);m=Math.sin(m*x)/y,o=Math.sin(o*x)/y,c=c*m+f*o,l=l*m+d*o,u=u*m+p*o,h=h*m+g*o}else{c=c*m+f*o,l=l*m+d*o,u=u*m+p*o,h=h*m+g*o;const x=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=x,l*=x,u*=x,h*=x}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[a],f=r[a+1],d=r[a+2],p=r[a+3];return e[t]=o*p+u*h+c*d-l*f,e[t+1]=c*p+u*f+l*h-o*d,e[t+2]=l*p+u*d+o*f-c*h,e[t+3]=u*p-o*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(i/2),h=o(r/2),f=c(n/2),d=c(i/2),p=c(r/2);switch(a){case"XYZ":this._x=f*u*h+l*d*p,this._y=l*d*h-f*u*p,this._z=l*u*p+f*d*h,this._w=l*u*h-f*d*p;break;case"YXZ":this._x=f*u*h+l*d*p,this._y=l*d*h-f*u*p,this._z=l*u*p-f*d*h,this._w=l*u*h+f*d*p;break;case"ZXY":this._x=f*u*h-l*d*p,this._y=l*d*h+f*u*p,this._z=l*u*p+f*d*h,this._w=l*u*h-f*d*p;break;case"ZYX":this._x=f*u*h-l*d*p,this._y=l*d*h+f*u*p,this._z=l*u*p-f*d*h,this._w=l*u*h+f*d*p;break;case"YZX":this._x=f*u*h+l*d*p,this._y=l*d*h+f*u*p,this._z=l*u*p-f*d*h,this._w=l*u*h-f*d*p;break;case"XZY":this._x=f*u*h-l*d*p,this._y=l*d*h-f*u*p,this._z=l*u*p+f*d*h,this._w=l*u*h+f*d*p;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(a-i)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-c)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+l)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(r-l)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-i)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+i*l-r*c,this._y=i*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-i*o,this._w=a*u-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),u=2*(o*t-r*i),h=2*(r*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=i+c*h+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wl.copy(this).projectOnVector(e),this.sub(wl)}reflect(e){return this.sub(wl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wl=new B,qf=new Fi;class et{constructor(e,t,n,i,r,a,o,c,l){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],p=n[8],g=i[0],_=i[3],m=i[6],x=i[1],y=i[4],M=i[7],S=i[2],A=i[5],R=i[8];return r[0]=a*g+o*x+c*S,r[3]=a*_+o*y+c*A,r[6]=a*m+o*M+c*R,r[1]=l*g+u*x+h*S,r[4]=l*_+u*y+h*A,r[7]=l*m+u*M+h*R,r[2]=f*g+d*x+p*S,r[5]=f*_+d*y+p*A,r[8]=f*m+d*M+p*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+i*r*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,f=o*c-u*r,d=l*r-a*c,p=t*h+n*f+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/p;return e[0]=h*g,e[1]=(i*l-u*n)*g,e[2]=(o*n-i*a)*g,e[3]=f*g,e[4]=(u*t-i*c)*g,e[5]=(i*r-o*t)*g,e[6]=d*g,e[7]=(n*c-l*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Rl.makeScale(e,t)),this}rotate(e){return this.premultiply(Rl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Rl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Rl=new et,Yf=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kf=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rg(){const s={enabled:!0,workingColorSpace:Bn,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===At&&(i.r=vr(i.r),i.g=vr(i.g),i.b=vr(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===At&&(i.r=ha(i.r),i.g=ha(i.g),i.b=ha(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Fr?Zc:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Io("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Io("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Bn]:{primaries:e,whitePoint:n,transfer:Zc,toXYZ:Yf,fromXYZ:Kf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Lt},outputColorSpaceConfig:{drawingBufferColorSpace:Lt}},[Lt]:{primaries:e,whitePoint:n,transfer:At,toXYZ:Yf,fromXYZ:Kf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Lt}}}),s}const mt=rg();function vr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ha(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Os;class sg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Os===void 0&&(Os=Po("canvas")),Os.width=e.width,Os.height=e.height;const i=Os.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Os}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Po("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=vr(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vr(t[n]/255)*255):t[n]=vr(t[n]);return{data:t,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ag=0;class jh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ag++}),this.uuid=Ui(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Cl(i[a].image)):r.push(Cl(i[a]))}else r=Cl(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Cl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?sg.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}let og=0;const Pl=new B;class Qt extends Ls{constructor(e=Qt.DEFAULT_IMAGE,t=Qt.DEFAULT_MAPPING,n=Wi,i=Wi,r=mn,a=pr,o=bi,c=Zi,l=Qt.DEFAULT_ANISOTROPY,u=Fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:og++}),this.uuid=Ui(),this.name="",this.source=new jh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Pl).x}get height(){return this.source.getSize(Pl).y}get depth(){return this.source.getSize(Pl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){qe(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ws:e.x=e.x-Math.floor(e.x);break;case Wi:e.x=e.x<0?0:1;break;case jc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ws:e.y=e.y-Math.floor(e.y);break;case Wi:e.y=e.y<0?0:1;break;case jc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=Wp;Qt.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,n=0,i=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],p=c[9],g=c[2],_=c[6],m=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(p-_)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(p+_)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,M=(d+1)/2,S=(m+1)/2,A=(u+f)/4,R=(h+g)/4,P=(p+_)/4;return y>M&&y>S?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=A/n,r=R/n):M>S?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=A/i,r=P/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=R/r,i=P/r),this.set(n,i,r,t),this}let x=Math.sqrt((_-p)*(_-p)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(_-p)/x,this.y=(h-g)/x,this.z=(f-u)/x,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cg extends Ls{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new Qt(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new jh(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cs extends cg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class im extends Qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=On,this.minFilter=On,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lg extends Qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=On,this.minFilter=On,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Er{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ai):Ai.fromBufferAttribute(r,a),Ai.applyMatrix4(e.matrixWorld),this.expandByPoint(Ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),jo.copy(n.boundingBox)),jo.applyMatrix4(e.matrixWorld),this.union(jo)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ai),Ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(za),$o.subVectors(this.max,za),Bs.subVectors(e.a,za),ks.subVectors(e.b,za),zs.subVectors(e.c,za),wr.subVectors(ks,Bs),Rr.subVectors(zs,ks),ts.subVectors(Bs,zs);let t=[0,-wr.z,wr.y,0,-Rr.z,Rr.y,0,-ts.z,ts.y,wr.z,0,-wr.x,Rr.z,0,-Rr.x,ts.z,0,-ts.x,-wr.y,wr.x,0,-Rr.y,Rr.x,0,-ts.y,ts.x,0];return!Il(t,Bs,ks,zs,$o)||(t=[1,0,0,0,1,0,0,0,1],!Il(t,Bs,ks,zs,$o))?!1:(Zo.crossVectors(wr,Rr),t=[Zo.x,Zo.y,Zo.z],Il(t,Bs,ks,zs,$o))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ir[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ir[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ir[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ir[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ir[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ir[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ir[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ir[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ir),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ir=[new B,new B,new B,new B,new B,new B,new B,new B],Ai=new B,jo=new Er,Bs=new B,ks=new B,zs=new B,wr=new B,Rr=new B,ts=new B,za=new B,$o=new B,Zo=new B,ns=new B;function Il(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ns.fromArray(s,r);const o=i.x*Math.abs(ns.x)+i.y*Math.abs(ns.y)+i.z*Math.abs(ns.z),c=e.dot(ns),l=t.dot(ns),u=n.dot(ns);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const ug=new Er,Va=new B,Dl=new B;class er{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ug.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Va.subVectors(e,this.center);const t=Va.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Va,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Va.copy(e.center).add(Dl)),this.expandByPoint(Va.copy(e.center).sub(Dl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const rr=new B,Ll=new B,Jo=new B,Cr=new B,Nl=new B,Qo=new B,Ul=new B;class qo{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=rr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(rr.copy(this.origin).addScaledVector(this.direction,t),rr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ll.copy(e).add(t).multiplyScalar(.5),Jo.copy(t).sub(e).normalize(),Cr.copy(this.origin).sub(Ll);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Jo),o=Cr.dot(this.direction),c=-Cr.dot(Jo),l=Cr.lengthSq(),u=Math.abs(1-a*a);let h,f,d,p;if(u>0)if(h=a*c-o,f=a*o-c,p=r*u,h>=0)if(f>=-p)if(f<=p){const g=1/u;h*=g,f*=g,d=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f<=-p?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l):f<=p?(h=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Ll).addScaledVector(Jo,f),d}intersectSphere(e,t){rr.subVectors(e.center,this.origin);const n=rr.dot(this.direction),i=rr.dot(rr)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,rr)!==null}intersectTriangle(e,t,n,i,r){Nl.subVectors(t,e),Qo.subVectors(n,e),Ul.crossVectors(Nl,Qo);let a=this.direction.dot(Ul),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Cr.subVectors(this.origin,e);const c=o*this.direction.dot(Qo.crossVectors(Cr,Qo));if(c<0)return null;const l=o*this.direction.dot(Nl.cross(Cr));if(l<0||c+l>a)return null;const u=-o*Cr.dot(Ul);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(e,t,n,i,r,a,o,c,l,u,h,f,d,p,g,_){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,u,h,f,d,p,g,_)}set(e,t,n,i,r,a,o,c,l,u,h,f,d,p,g,_){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=p,m[11]=g,m[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Vs.setFromMatrixColumn(e,0).length(),r=1/Vs.setFromMatrixColumn(e,1).length(),a=1/Vs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*u,d=a*h,p=o*u,g=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+p*l,t[5]=f-g*l,t[9]=-o*c,t[2]=g-f*l,t[6]=p+d*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*u,d=c*h,p=l*u,g=l*h;t[0]=f+g*o,t[4]=p*o-d,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-p,t[6]=g+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*u,d=c*h,p=l*u,g=l*h;t[0]=f-g*o,t[4]=-a*h,t[8]=p+d*o,t[1]=d+p*o,t[5]=a*u,t[9]=g-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*u,d=a*h,p=o*u,g=o*h;t[0]=c*u,t[4]=p*l-d,t[8]=f*l+g,t[1]=c*h,t[5]=g*l+f,t[9]=d*l-p,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,d=a*l,p=o*c,g=o*l;t[0]=c*u,t[4]=g-f*h,t[8]=p*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=d*h+p,t[10]=f-g*h}else if(e.order==="XZY"){const f=a*c,d=a*l,p=o*c,g=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+g,t[5]=a*u,t[9]=d*h-p,t[2]=p*h-d,t[6]=o*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hg,e,fg)}lookAt(e,t,n){const i=this.elements;return ei.subVectors(e,t),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Pr.crossVectors(n,ei),Pr.lengthSq()===0&&(Math.abs(n.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Pr.crossVectors(n,ei)),Pr.normalize(),ec.crossVectors(ei,Pr),i[0]=Pr.x,i[4]=ec.x,i[8]=ei.x,i[1]=Pr.y,i[5]=ec.y,i[9]=ei.y,i[2]=Pr.z,i[6]=ec.z,i[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],p=n[2],g=n[6],_=n[10],m=n[14],x=n[3],y=n[7],M=n[11],S=n[15],A=i[0],R=i[4],P=i[8],b=i[12],v=i[1],L=i[5],N=i[9],k=i[13],O=i[2],W=i[6],X=i[10],K=i[14],q=i[3],D=i[7],w=i[11],$=i[15];return r[0]=a*A+o*v+c*O+l*q,r[4]=a*R+o*L+c*W+l*D,r[8]=a*P+o*N+c*X+l*w,r[12]=a*b+o*k+c*K+l*$,r[1]=u*A+h*v+f*O+d*q,r[5]=u*R+h*L+f*W+d*D,r[9]=u*P+h*N+f*X+d*w,r[13]=u*b+h*k+f*K+d*$,r[2]=p*A+g*v+_*O+m*q,r[6]=p*R+g*L+_*W+m*D,r[10]=p*P+g*N+_*X+m*w,r[14]=p*b+g*k+_*K+m*$,r[3]=x*A+y*v+M*O+S*q,r[7]=x*R+y*L+M*W+S*D,r[11]=x*P+y*N+M*X+S*w,r[15]=x*b+y*k+M*K+S*$,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],p=e[3],g=e[7],_=e[11],m=e[15];return p*(+r*c*h-i*l*h-r*o*f+n*l*f+i*o*d-n*c*d)+g*(+t*c*d-t*l*f+r*a*f-i*a*d+i*l*u-r*c*u)+_*(+t*l*h-t*o*d-r*a*h+n*a*d+r*o*u-n*l*u)+m*(-i*o*u-t*c*h+t*o*f+i*a*h-n*a*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],p=e[12],g=e[13],_=e[14],m=e[15],x=h*_*l-g*f*l+g*c*d-o*_*d-h*c*m+o*f*m,y=p*f*l-u*_*l-p*c*d+a*_*d+u*c*m-a*f*m,M=u*g*l-p*h*l+p*o*d-a*g*d-u*o*m+a*h*m,S=p*h*c-u*g*c-p*o*f+a*g*f+u*o*_-a*h*_,A=t*x+n*y+i*M+r*S;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=x*R,e[1]=(g*f*r-h*_*r-g*i*d+n*_*d+h*i*m-n*f*m)*R,e[2]=(o*_*r-g*c*r+g*i*l-n*_*l-o*i*m+n*c*m)*R,e[3]=(h*c*r-o*f*r-h*i*l+n*f*l+o*i*d-n*c*d)*R,e[4]=y*R,e[5]=(u*_*r-p*f*r+p*i*d-t*_*d-u*i*m+t*f*m)*R,e[6]=(p*c*r-a*_*r-p*i*l+t*_*l+a*i*m-t*c*m)*R,e[7]=(a*f*r-u*c*r+u*i*l-t*f*l-a*i*d+t*c*d)*R,e[8]=M*R,e[9]=(p*h*r-u*g*r-p*n*d+t*g*d+u*n*m-t*h*m)*R,e[10]=(a*g*r-p*o*r+p*n*l-t*g*l-a*n*m+t*o*m)*R,e[11]=(u*o*r-a*h*r-u*n*l+t*h*l+a*n*d-t*o*d)*R,e[12]=S*R,e[13]=(u*g*i-p*h*i+p*n*f-t*g*f-u*n*_+t*h*_)*R,e[14]=(p*o*i-a*g*i-p*n*c+t*g*c+a*n*_-t*o*_)*R,e[15]=(a*h*i-u*o*i+u*n*c-t*h*c-a*n*f+t*o*f)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,u*o+n,u*c-i*a,0,l*c-i*o,u*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,h=o+o,f=r*l,d=r*u,p=r*h,g=a*u,_=a*h,m=o*h,x=c*l,y=c*u,M=c*h,S=n.x,A=n.y,R=n.z;return i[0]=(1-(g+m))*S,i[1]=(d+M)*S,i[2]=(p-y)*S,i[3]=0,i[4]=(d-M)*A,i[5]=(1-(f+m))*A,i[6]=(_+x)*A,i[7]=0,i[8]=(p+y)*R,i[9]=(_-x)*R,i[10]=(1-(f+g))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Vs.set(i[0],i[1],i[2]).length();const a=Vs.set(i[4],i[5],i[6]).length(),o=Vs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],wi.copy(this);const l=1/r,u=1/a,h=1/o;return wi.elements[0]*=l,wi.elements[1]*=l,wi.elements[2]*=l,wi.elements[4]*=u,wi.elements[5]*=u,wi.elements[6]*=u,wi.elements[8]*=h,wi.elements[9]*=h,wi.elements[10]*=h,t.setFromRotationMatrix(wi),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Xi,c=!1){const l=this.elements,u=2*r/(t-e),h=2*r/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let p,g;if(c)p=r/(a-r),g=a*r/(a-r);else if(o===Xi)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Jc)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Xi,c=!1){const l=this.elements,u=2/(t-e),h=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i);let p,g;if(c)p=1/(a-r),g=a/(a-r);else if(o===Xi)p=-2/(a-r),g=-(a+r)/(a-r);else if(o===Jc)p=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Vs=new B,wi=new tt,hg=new B(0,0,0),fg=new B(1,1,1),Pr=new B,ec=new B,ei=new B,jf=new tt,$f=new Fi;class Ji{constructor(e=0,t=0,n=0,i=Ji.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ut(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ut(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ut(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return jf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $f.setFromEuler(this),this.setFromQuaternion($f,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ji.DEFAULT_ORDER="XYZ";class $h{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dg=0;const Zf=new B,Gs=new Fi,sr=new tt,tc=new B,Ga=new B,pg=new B,mg=new Fi,Jf=new B(1,0,0),Qf=new B(0,1,0),ed=new B(0,0,1),td={type:"added"},_g={type:"removed"},Hs={type:"childadded",child:null},Fl={type:"childremoved",child:null};class Rt extends Ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dg++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new B,t=new Ji,n=new Fi,i=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new tt},normalMatrix:{value:new et}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $h,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.premultiply(Gs),this}rotateX(e){return this.rotateOnAxis(Jf,e)}rotateY(e){return this.rotateOnAxis(Qf,e)}rotateZ(e){return this.rotateOnAxis(ed,e)}translateOnAxis(e,t){return Zf.copy(e).applyQuaternion(this.quaternion),this.position.add(Zf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jf,e)}translateY(e){return this.translateOnAxis(Qf,e)}translateZ(e){return this.translateOnAxis(ed,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?tc.copy(e):tc.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sr.lookAt(Ga,tc,this.up):sr.lookAt(tc,Ga,this.up),this.quaternion.setFromRotationMatrix(sr),i&&(sr.extractRotation(i.matrixWorld),Gs.setFromRotationMatrix(sr),this.quaternion.premultiply(Gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(td),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null):lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_g),Fl.child=e,this.dispatchEvent(Fl),Fl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sr.multiply(e.parent.matrixWorld)),e.applyMatrix4(sr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(td),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,e,pg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,mg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Rt.DEFAULT_UP=new B(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ri=new B,ar=new B,Ol=new B,or=new B,Ws=new B,Xs=new B,nd=new B,Bl=new B,kl=new B,zl=new B,Vl=new gt,Gl=new gt,Hl=new gt;class Di{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ri.subVectors(e,t),i.cross(Ri);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Ri.subVectors(i,t),ar.subVectors(n,t),Ol.subVectors(e,t);const a=Ri.dot(Ri),o=Ri.dot(ar),c=Ri.dot(Ol),l=ar.dot(ar),u=ar.dot(Ol),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(l*c-o*u)*f,p=(a*u-o*c)*f;return r.set(1-d-p,p,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,or)===null?!1:or.x>=0&&or.y>=0&&or.x+or.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,or)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,or.x),c.addScaledVector(a,or.y),c.addScaledVector(o,or.z),c)}static getInterpolatedAttribute(e,t,n,i,r,a){return Vl.setScalar(0),Gl.setScalar(0),Hl.setScalar(0),Vl.fromBufferAttribute(e,t),Gl.fromBufferAttribute(e,n),Hl.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Vl,r.x),a.addScaledVector(Gl,r.y),a.addScaledVector(Hl,r.z),a}static isFrontFacing(e,t,n,i){return Ri.subVectors(n,t),ar.subVectors(e,t),Ri.cross(ar).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ri.subVectors(this.c,this.b),ar.subVectors(this.a,this.b),Ri.cross(ar).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Di.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Di.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Ws.subVectors(i,n),Xs.subVectors(r,n),Bl.subVectors(e,n);const c=Ws.dot(Bl),l=Xs.dot(Bl);if(c<=0&&l<=0)return t.copy(n);kl.subVectors(e,i);const u=Ws.dot(kl),h=Xs.dot(kl);if(u>=0&&h<=u)return t.copy(i);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Ws,a);zl.subVectors(e,r);const d=Ws.dot(zl),p=Xs.dot(zl);if(p>=0&&d<=p)return t.copy(r);const g=d*l-c*p;if(g<=0&&l>=0&&p<=0)return o=l/(l-p),t.copy(n).addScaledVector(Xs,o);const _=u*p-d*h;if(_<=0&&h-u>=0&&d-p>=0)return nd.subVectors(r,i),o=(h-u)/(h-u+(d-p)),t.copy(i).addScaledVector(nd,o);const m=1/(_+g+f);return a=g*m,o=f*m,t.copy(n).addScaledVector(Ws,a).addScaledVector(Xs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const rm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ir={h:0,s:0,l:0},nc={h:0,s:0,l:0};function Wl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,mt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=mt.workingColorSpace){if(e=Kh(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Wl(a,r,e+1/3),this.g=Wl(a,r,e),this.b=Wl(a,r,e-1/3)}return mt.colorSpaceToWorking(this,i),this}setStyle(e,t=Lt){function n(r){r!==void 0&&parseFloat(r)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:qe("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){const n=rm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}copyLinearToSRGB(e){return this.r=ha(e.r),this.g=ha(e.g),this.b=ha(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return mt.workingToColorSpace(vn.copy(this),e),Math.round(ut(vn.r*255,0,255))*65536+Math.round(ut(vn.g*255,0,255))*256+Math.round(ut(vn.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.workingToColorSpace(vn.copy(this),t);const n=vn.r,i=vn.g,r=vn.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=mt.workingColorSpace){return mt.workingToColorSpace(vn.copy(this),t),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=Lt){mt.workingToColorSpace(vn.copy(this),e);const t=vn.r,n=vn.g,i=vn.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ir),this.setHSL(Ir.h+e,Ir.s+t,Ir.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ir),e.getHSL(nc);const n=lo(Ir.h,nc.h,t),i=lo(Ir.s,nc.s,t),r=lo(Ir.l,nc.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new ze;ze.NAMES=rm;let gg=0;class ji extends Ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gg++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=ua,this.side=br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Su,this.blendDst=Tu,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=ya,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fs,this.stencilZFail=Fs,this.stencilZPass=Fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){qe(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ua&&(n.blending=this.blending),this.side!==br&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Su&&(n.blendSrc=this.blendSrc),this.blendDst!==Tu&&(n.blendDst=this.blendDst),this.blendEquation!==ps&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ya&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class oi extends ji{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.combine=Gp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new B,ic=new it;let xg=0;class Tn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=lh,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ic.fromBufferAttribute(this,t),ic.applyMatrix3(e),this.setXY(t,ic.x,ic.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ii(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),i=St(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),i=St(i,this.array),r=St(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lh&&(e.usage=this.usage),e}}class sm extends Tn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class am extends Tn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Nt extends Tn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let vg=0;const _i=new tt,Xl=new Rt,qs=new B,ti=new Er,Ha=new Er,cn=new B;class Xt extends Ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vg++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nm(e)?am:sm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new et().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _i.makeRotationFromQuaternion(e),this.applyMatrix4(_i),this}rotateX(e){return _i.makeRotationX(e),this.applyMatrix4(_i),this}rotateY(e){return _i.makeRotationY(e),this.applyMatrix4(_i),this}rotateZ(e){return _i.makeRotationZ(e),this.applyMatrix4(_i),this}translate(e,t,n){return _i.makeTranslation(e,t,n),this.applyMatrix4(_i),this}scale(e,t,n){return _i.makeScale(e,t,n),this.applyMatrix4(_i),this}lookAt(e){return Xl.lookAt(e),Xl.updateMatrix(),this.applyMatrix4(Xl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Nt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Er);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];ti.setFromBufferAttribute(r),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new er);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ha.setFromBufferAttribute(o),this.morphTargetsRelative?(cn.addVectors(ti.min,Ha.min),ti.expandByPoint(cn),cn.addVectors(ti.max,Ha.max),ti.expandByPoint(cn)):(ti.expandByPoint(Ha.min),ti.expandByPoint(Ha.max))}ti.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)cn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(cn));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)cn.fromBufferAttribute(o,l),c&&(qs.fromBufferAttribute(e,l),cn.add(qs)),i=Math.max(i,n.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<n.count;P++)o[P]=new B,c[P]=new B;const l=new B,u=new B,h=new B,f=new it,d=new it,p=new it,g=new B,_=new B;function m(P,b,v){l.fromBufferAttribute(n,P),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,v),f.fromBufferAttribute(r,P),d.fromBufferAttribute(r,b),p.fromBufferAttribute(r,v),u.sub(l),h.sub(l),d.sub(f),p.sub(f);const L=1/(d.x*p.y-p.x*d.y);isFinite(L)&&(g.copy(u).multiplyScalar(p.y).addScaledVector(h,-d.y).multiplyScalar(L),_.copy(h).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(L),o[P].add(g),o[b].add(g),o[v].add(g),c[P].add(_),c[b].add(_),c[v].add(_))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let P=0,b=x.length;P<b;++P){const v=x[P],L=v.start,N=v.count;for(let k=L,O=L+N;k<O;k+=3)m(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const y=new B,M=new B,S=new B,A=new B;function R(P){S.fromBufferAttribute(i,P),A.copy(S);const b=o[P];y.copy(b),y.sub(S.multiplyScalar(S.dot(b))).normalize(),M.crossVectors(A,b);const L=M.dot(c[P])<0?-1:1;a.setXYZW(P,y.x,y.y,y.z,L)}for(let P=0,b=x.length;P<b;++P){const v=x[P],L=v.start,N=v.count;for(let k=L,O=L+N;k<O;k+=3)R(e.getX(k+0)),R(e.getX(k+1)),R(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Tn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new B,r=new B,a=new B,o=new B,c=new B,l=new B,u=new B,h=new B;if(e)for(let f=0,d=e.count;f<d;f+=3){const p=e.getX(f+0),g=e.getX(f+1),_=e.getX(f+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,_),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,p),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),o.add(u),c.add(u),l.add(u),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(_,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u);let d=0,p=0;for(let g=0,_=c.length;g<_;g++){o.isInterleavedBufferAttribute?d=c[g]*o.data.stride+o.offset:d=c[g]*u;for(let m=0;m<u;m++)f[p++]=l[d++]}return new Tn(f,u,h)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xt,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=e(f,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const id=new tt,is=new qo,rc=new er,rd=new B,sc=new B,ac=new B,oc=new B,ql=new B,cc=new B,sd=new B,lc=new B;class Tt extends Rt{constructor(e=new Xt,t=new oi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){cc.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],h=r[c];u!==0&&(ql.fromBufferAttribute(h,e),a?cc.addScaledVector(ql,u):cc.addScaledVector(ql.sub(t),u))}t.add(cc)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),rc.copy(n.boundingSphere),rc.applyMatrix4(r),is.copy(e.ray).recast(e.near),!(rc.containsPoint(is.origin)===!1&&(is.intersectSphere(rc,rd)===null||is.origin.distanceToSquared(rd)>(e.far-e.near)**2))&&(id.copy(r).invert(),is.copy(e.ray).applyMatrix4(id),!(n.boundingBox!==null&&is.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,is)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,g=f.length;p<g;p++){const _=f[p],m=a[_.materialIndex],x=Math.max(_.start,d.start),y=Math.min(o.count,Math.min(_.start+_.count,d.start+d.count));for(let M=x,S=y;M<S;M+=3){const A=o.getX(M),R=o.getX(M+1),P=o.getX(M+2);i=uc(this,m,e,n,l,u,h,A,R,P),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=_.materialIndex,t.push(i))}}else{const p=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let _=p,m=g;_<m;_+=3){const x=o.getX(_),y=o.getX(_+1),M=o.getX(_+2);i=uc(this,a,e,n,l,u,h,x,y,M),i&&(i.faceIndex=Math.floor(_/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let p=0,g=f.length;p<g;p++){const _=f[p],m=a[_.materialIndex],x=Math.max(_.start,d.start),y=Math.min(c.count,Math.min(_.start+_.count,d.start+d.count));for(let M=x,S=y;M<S;M+=3){const A=M,R=M+1,P=M+2;i=uc(this,m,e,n,l,u,h,A,R,P),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=_.materialIndex,t.push(i))}}else{const p=Math.max(0,d.start),g=Math.min(c.count,d.start+d.count);for(let _=p,m=g;_<m;_+=3){const x=_,y=_+1,M=_+2;i=uc(this,a,e,n,l,u,h,x,y,M),i&&(i.faceIndex=Math.floor(_/3),t.push(i))}}}}function yg(s,e,t,n,i,r,a,o){let c;if(e.side===qn?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===br,o),c===null)return null;lc.copy(o),lc.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(lc);return l<t.near||l>t.far?null:{distance:l,point:lc.clone(),object:s}}function uc(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,sc),s.getVertexPosition(c,ac),s.getVertexPosition(l,oc);const u=yg(s,e,t,n,sc,ac,oc,sd);if(u){const h=new B;Di.getBarycoord(sd,sc,ac,oc,h),i&&(u.uv=Di.getInterpolatedAttribute(i,o,c,l,h,new it)),r&&(u.uv1=Di.getInterpolatedAttribute(r,o,c,l,h,new it)),a&&(u.normal=Di.getInterpolatedAttribute(a,o,c,l,h,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new B,materialIndex:0};Di.getNormal(sc,ac,oc,f.normal),u.face=f,u.barycoord=h}return u}class pn extends Xt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],h=[];let f=0,d=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,i,a,2),p("x","z","y",1,-1,e,n,-t,i,a,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Nt(l,3)),this.setAttribute("normal",new Nt(u,3)),this.setAttribute("uv",new Nt(h,2));function p(g,_,m,x,y,M,S,A,R,P,b){const v=M/R,L=S/P,N=M/2,k=S/2,O=A/2,W=R+1,X=P+1;let K=0,q=0;const D=new B;for(let w=0;w<X;w++){const $=w*L-k;for(let oe=0;oe<W;oe++){const fe=oe*v-N;D[g]=fe*x,D[_]=$*y,D[m]=O,l.push(D.x,D.y,D.z),D[g]=0,D[_]=0,D[m]=A>0?1:-1,u.push(D.x,D.y,D.z),h.push(oe/R),h.push(1-w/P),K+=1}}for(let w=0;w<P;w++)for(let $=0;$<R;$++){const oe=f+$+W*w,fe=f+$+W*(w+1),he=f+($+1)+W*(w+1),be=f+($+1)+W*w;c.push(oe,fe,be),c.push(fe,he,be),q+=6}o.addGroup(d,q,b),d+=q,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ta(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function In(s){const e={};for(let t=0;t<s.length;t++){const n=Ta(s[t]);for(const i in n)e[i]=n[i]}return e}function bg(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function om(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}const Mg={clone:Ta,merge:In};var Sg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mr extends ji{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sg,this.fragmentShader=Tg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ta(e.uniforms),this.uniformsGroups=bg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class cm extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=Xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Dr=new B,ad=new it,od=new it;class Un extends cm{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Sa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(co*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sa*2*Math.atan(Math.tan(co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z),Dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z)}getViewSize(e,t){return this.getViewBounds(e,ad,od),t.subVectors(od,ad)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(co*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ys=-90,Ks=1;class Eg extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Un(Ys,Ks,e,t);i.layers=this.layers,this.add(i);const r=new Un(Ys,Ks,e,t);r.layers=this.layers,this.add(r);const a=new Un(Ys,Ks,e,t);a.layers=this.layers,this.add(a);const o=new Un(Ys,Ks,e,t);o.layers=this.layers,this.add(o);const c=new Un(Ys,Ks,e,t);c.layers=this.layers,this.add(c);const l=new Un(Ys,Ks,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===Xi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Jc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class lm extends Qt{constructor(e=[],t=ba,n,i,r,a,o,c,l,u){super(e,t,n,i,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ag extends Cs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new lm(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new pn(5,5,5),r=new Mr({name:"CubemapFromEquirect",uniforms:Ta(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qn,blending:xr});r.uniforms.tEquirect.value=t;const a=new Tt(i,r),o=t.minFilter;return t.minFilter===pr&&(t.minFilter=mn),new Eg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}class hn extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wg={type:"move"};class Yl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const g of e.hand.values()){const _=t.getJointPose(g,n),m=this._getHandJoint(l,g);_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius),m.visible=_!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,p=.005;l.inputState.pinching&&f>d+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wg)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new hn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Zh{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ze(e),this.density=t}clone(){return new Zh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Rg extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ji,this.environmentIntensity=1,this.environmentRotation=new Ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Cg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=lh,this.updateRanges=[],this.version=0,this.uuid=Ui()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Rn=new B;class Jh{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyMatrix4(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyNormalMatrix(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.transformDirection(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ii(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ii(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ii(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ii(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ii(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),i=St(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),i=St(i,this.array),r=St(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Qc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Tn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Jh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Qc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const cd=new B,ld=new gt,ud=new gt,Pg=new B,hd=new tt,hc=new B,Kl=new er,fd=new tt,jl=new qo;class Ig extends Tt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Vf,this.bindMatrix=new tt,this.bindMatrixInverse=new tt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Er),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,hc),this.boundingBox.expandByPoint(hc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new er),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,hc),this.boundingSphere.expandByPoint(hc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Kl.copy(this.boundingSphere),Kl.applyMatrix4(i),e.ray.intersectsSphere(Kl)!==!1&&(fd.copy(i).invert(),jl.copy(e.ray).applyMatrix4(fd),!(this.boundingBox!==null&&jl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,jl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new gt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Vf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===E_?this.bindMatrixInverse.copy(this.bindMatrix).invert():qe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;ld.fromBufferAttribute(i.attributes.skinIndex,e),ud.fromBufferAttribute(i.attributes.skinWeight,e),cd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=ud.getComponent(r);if(a!==0){const o=ld.getComponent(r);hd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Pg.copy(cd).applyMatrix4(hd),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class um extends Rt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Qh extends Qt{constructor(e=null,t=1,n=1,i,r,a,o,c,l=On,u=On,h,f){super(null,a,o,c,l,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const dd=new tt,Dg=new tt;class ef{constructor(e=[],t=[]){this.uuid=Ui(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){qe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new tt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new tt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Dg;dd.multiplyMatrices(o,t[r]),dd.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ef(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Qh(t,e,e,bi,Li);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(qe("Skeleton: No bone found with UUID:",r),a=new um),this.bones.push(a),this.boneInverses.push(new tt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class uh extends Tn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const js=new tt,pd=new tt,fc=[],md=new Er,Lg=new tt,Wa=new Tt,Xa=new er;class Ni extends Tt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new uh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Lg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Er),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,js),md.copy(e.boundingBox).applyMatrix4(js),this.boundingBox.union(md)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new er),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,js),Xa.copy(e.boundingSphere).applyMatrix4(js),this.boundingSphere.union(Xa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Wa.geometry=this.geometry,Wa.material=this.material,Wa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xa.copy(this.boundingSphere),Xa.applyMatrix4(n),e.ray.intersectsSphere(Xa)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,js),pd.multiplyMatrices(n,js),Wa.matrixWorld=pd,Wa.raycast(e,fc);for(let a=0,o=fc.length;a<o;a++){const c=fc[a];c.instanceId=r,c.object=this,t.push(c)}fc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new uh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Qh(new Float32Array(i*this.count),i,this.count,Gh,Li));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const $l=new B,Ng=new B,Ug=new et;class us{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=$l.subVectors(n,t).cross(Ng.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta($l),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ug.getNormalMatrix(e),i=this.coplanarPoint($l).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rs=new er,Fg=new it(.5,.5),dc=new B;class tf{constructor(e=new us,t=new us,n=new us,i=new us,r=new us,a=new us){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Xi,n=!1){const i=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],h=r[5],f=r[6],d=r[7],p=r[8],g=r[9],_=r[10],m=r[11],x=r[12],y=r[13],M=r[14],S=r[15];if(i[0].setComponents(l-a,d-u,m-p,S-x).normalize(),i[1].setComponents(l+a,d+u,m+p,S+x).normalize(),i[2].setComponents(l+o,d+h,m+g,S+y).normalize(),i[3].setComponents(l-o,d-h,m-g,S-y).normalize(),n)i[4].setComponents(c,f,_,M).normalize(),i[5].setComponents(l-c,d-f,m-_,S-M).normalize();else if(i[4].setComponents(l-c,d-f,m-_,S-M).normalize(),t===Xi)i[5].setComponents(l+c,d+f,m+_,S+M).normalize();else if(t===Jc)i[5].setComponents(c,f,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(e){rs.center.set(0,0,0);const t=Fg.distanceTo(e.center);return rs.radius=.7071067811865476+t,rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(dc.x=i.normal.x>0?e.max.x:e.min.x,dc.y=i.normal.y>0?e.max.y:e.min.y,dc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(dc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class uo extends ji{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const el=new B,tl=new B,_d=new tt,qa=new qo,pc=new er,Zl=new B,gd=new B;class _s extends Rt{constructor(e=new Xt,t=new uo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)el.fromBufferAttribute(t,i-1),tl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=el.distanceTo(tl);e.setAttribute("lineDistance",new Nt(n,1))}else qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pc.copy(n.boundingSphere),pc.applyMatrix4(i),pc.radius+=r,e.ray.intersectsSphere(pc)===!1)return;_d.copy(i).invert(),qa.copy(e.ray).applyMatrix4(_d);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=d,_=p-1;g<_;g+=l){const m=u.getX(g),x=u.getX(g+1),y=mc(this,e,qa,c,m,x,g);y&&t.push(y)}if(this.isLineLoop){const g=u.getX(p-1),_=u.getX(d),m=mc(this,e,qa,c,g,_,p-1);m&&t.push(m)}}else{const d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let g=d,_=p-1;g<_;g+=l){const m=mc(this,e,qa,c,g,g+1,g);m&&t.push(m)}if(this.isLineLoop){const g=mc(this,e,qa,c,p-1,d,p-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function mc(s,e,t,n,i,r,a){const o=s.geometry.attributes.position;if(el.fromBufferAttribute(o,i),tl.fromBufferAttribute(o,r),t.distanceSqToSegment(el,tl,Zl,gd)>n)return;Zl.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Zl);if(!(l<e.near||l>e.far))return{distance:l,point:gd.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const xd=new B,vd=new B;class Og extends _s{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)xd.fromBufferAttribute(t,i),vd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+xd.distanceTo(vd);e.setAttribute("lineDistance",new Nt(n,1))}else qe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Bg extends _s{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class hm extends ji{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const yd=new tt,hh=new qo,_c=new er,gc=new B;class kg extends Rt{constructor(e=new Xt,t=new hm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_c.copy(n.boundingSphere),_c.applyMatrix4(i),_c.radius+=r,e.ray.intersectsSphere(_c)===!1)return;yd.copy(i).invert(),hh.copy(e.ray).applyMatrix4(yd);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let p=f,g=d;p<g;p++){const _=l.getX(p);gc.fromBufferAttribute(h,_),bd(gc,_,c,i,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let p=f,g=d;p<g;p++)gc.fromBufferAttribute(h,p),bd(gc,p,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function bd(s,e,t,n,i,r,a){const o=hh.distanceSqToPoint(s);if(o<t){const c=new B;hh.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class zg extends Qt{constructor(e,t,n,i,r=mn,a=mn,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const u=this;function h(){u.needsUpdate=!0,u._requestVideoFrameCallbackId=e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(h))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class aa extends Qt{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fm extends Qt{constructor(e,t,n=Rs,i,r,a,o=On,c=On,l,u=Ao,h=1){if(u!==Ao&&u!==wo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,i,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new jh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class dm extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Do extends Xt{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));const a=[],o=[],c=[],l=[],u=t/2,h=Math.PI/2*e,f=t,d=2*h+f,p=n*2+r,g=i+1,_=new B,m=new B;for(let x=0;x<=p;x++){let y=0,M=0,S=0,A=0;if(x<=n){const b=x/n,v=b*Math.PI/2;M=-u-e*Math.cos(v),S=e*Math.sin(v),A=-e*Math.cos(v),y=b*h}else if(x<=n+r){const b=(x-n)/r;M=-u+b*t,S=e,A=0,y=h+b*f}else{const b=(x-n-r)/n,v=b*Math.PI/2;M=u+e*Math.sin(v),S=e*Math.cos(v),A=e*Math.sin(v),y=h+f+b*h}const R=Math.max(0,Math.min(1,y/d));let P=0;x===0?P=.5/i:x===p&&(P=-.5/i);for(let b=0;b<=i;b++){const v=b/i,L=v*Math.PI*2,N=Math.sin(L),k=Math.cos(L);m.x=-S*k,m.y=M,m.z=S*N,o.push(m.x,m.y,m.z),_.set(-S*k,A,S*N),_.normalize(),c.push(_.x,_.y,_.z),l.push(v+P,R)}if(x>0){const b=(x-1)*g;for(let v=0;v<i;v++){const L=b+v,N=b+v+1,k=x*g+v,O=x*g+v+1;a.push(L,N,k),a.push(N,O,k)}}}this.setIndex(a),this.setAttribute("position",new Nt(o,3)),this.setAttribute("normal",new Nt(c,3)),this.setAttribute("uv",new Nt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Do(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class qi extends Xt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],f=[],d=[];let p=0;const g=[],_=n/2;let m=0;x(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Nt(h,3)),this.setAttribute("normal",new Nt(f,3)),this.setAttribute("uv",new Nt(d,2));function x(){const M=new B,S=new B;let A=0;const R=(t-e)/n;for(let P=0;P<=r;P++){const b=[],v=P/r,L=v*(t-e)+e;for(let N=0;N<=i;N++){const k=N/i,O=k*c+o,W=Math.sin(O),X=Math.cos(O);S.x=L*W,S.y=-v*n+_,S.z=L*X,h.push(S.x,S.y,S.z),M.set(W,R,X).normalize(),f.push(M.x,M.y,M.z),d.push(k,1-v),b.push(p++)}g.push(b)}for(let P=0;P<i;P++)for(let b=0;b<r;b++){const v=g[b][P],L=g[b+1][P],N=g[b+1][P+1],k=g[b][P+1];(e>0||b!==0)&&(u.push(v,L,k),A+=3),(t>0||b!==r-1)&&(u.push(L,N,k),A+=3)}l.addGroup(m,A,0),m+=A}function y(M){const S=p,A=new it,R=new B;let P=0;const b=M===!0?e:t,v=M===!0?1:-1;for(let N=1;N<=i;N++)h.push(0,_*v,0),f.push(0,v,0),d.push(.5,.5),p++;const L=p;for(let N=0;N<=i;N++){const O=N/i*c+o,W=Math.cos(O),X=Math.sin(O);R.x=b*X,R.y=_*v,R.z=b*W,h.push(R.x,R.y,R.z),f.push(0,v,0),A.x=W*.5+.5,A.y=X*.5*v+.5,d.push(A.x,A.y),p++}for(let N=0;N<i;N++){const k=S+N,O=L+N;M===!0?u.push(O,O+1,k):u.push(O+1,O,k),P+=3}l.addGroup(m,P,M===!0?1:2),m+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class nf extends Xt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),l(n),u(),this.setAttribute("position",new Nt(r,3)),this.setAttribute("normal",new Nt(r.slice(),3)),this.setAttribute("uv",new Nt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const y=new B,M=new B,S=new B;for(let A=0;A<t.length;A+=3)d(t[A+0],y),d(t[A+1],M),d(t[A+2],S),c(y,M,S,x)}function c(x,y,M,S){const A=S+1,R=[];for(let P=0;P<=A;P++){R[P]=[];const b=x.clone().lerp(M,P/A),v=y.clone().lerp(M,P/A),L=A-P;for(let N=0;N<=L;N++)N===0&&P===A?R[P][N]=b:R[P][N]=b.clone().lerp(v,N/L)}for(let P=0;P<A;P++)for(let b=0;b<2*(A-P)-1;b++){const v=Math.floor(b/2);b%2===0?(f(R[P][v+1]),f(R[P+1][v]),f(R[P][v])):(f(R[P][v+1]),f(R[P+1][v+1]),f(R[P+1][v]))}}function l(x){const y=new B;for(let M=0;M<r.length;M+=3)y.x=r[M+0],y.y=r[M+1],y.z=r[M+2],y.normalize().multiplyScalar(x),r[M+0]=y.x,r[M+1]=y.y,r[M+2]=y.z}function u(){const x=new B;for(let y=0;y<r.length;y+=3){x.x=r[y+0],x.y=r[y+1],x.z=r[y+2];const M=_(x)/2/Math.PI+.5,S=m(x)/Math.PI+.5;a.push(M,1-S)}p(),h()}function h(){for(let x=0;x<a.length;x+=6){const y=a[x+0],M=a[x+2],S=a[x+4],A=Math.max(y,M,S),R=Math.min(y,M,S);A>.9&&R<.1&&(y<.2&&(a[x+0]+=1),M<.2&&(a[x+2]+=1),S<.2&&(a[x+4]+=1))}}function f(x){r.push(x.x,x.y,x.z)}function d(x,y){const M=x*3;y.x=e[M+0],y.y=e[M+1],y.z=e[M+2]}function p(){const x=new B,y=new B,M=new B,S=new B,A=new it,R=new it,P=new it;for(let b=0,v=0;b<r.length;b+=9,v+=6){x.set(r[b+0],r[b+1],r[b+2]),y.set(r[b+3],r[b+4],r[b+5]),M.set(r[b+6],r[b+7],r[b+8]),A.set(a[v+0],a[v+1]),R.set(a[v+2],a[v+3]),P.set(a[v+4],a[v+5]),S.copy(x).add(y).add(M).divideScalar(3);const L=_(S);g(A,v+0,x,L),g(R,v+2,y,L),g(P,v+4,M,L)}}function g(x,y,M,S){S<0&&x.x===1&&(a[y]=x.x-1),M.x===0&&M.z===0&&(a[y]=S/2/Math.PI+.5)}function _(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nf(e.vertices,e.indices,e.radius,e.details)}}class Lo extends nf{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Lo(e.radius,e.detail)}}class Hn extends Xt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,u=c+1,h=e/o,f=t/c,d=[],p=[],g=[],_=[];for(let m=0;m<u;m++){const x=m*f-a;for(let y=0;y<l;y++){const M=y*h-r;p.push(M,-x,0),g.push(0,0,1),_.push(y/o),_.push(1-m/c)}}for(let m=0;m<c;m++)for(let x=0;x<o;x++){const y=x+l*m,M=x+l*(m+1),S=x+1+l*(m+1),A=x+1+l*m;d.push(y,M,A),d.push(M,S,A)}this.setIndex(d),this.setAttribute("position",new Nt(p,3)),this.setAttribute("normal",new Nt(g,3)),this.setAttribute("uv",new Nt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Wr extends Xt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],h=new B,f=new B,d=[],p=[],g=[],_=[];for(let m=0;m<=n;m++){const x=[],y=m/n;let M=0;m===0&&a===0?M=.5/t:m===n&&c===Math.PI&&(M=-.5/t);for(let S=0;S<=t;S++){const A=S/t;h.x=-e*Math.cos(i+A*r)*Math.sin(a+y*o),h.y=e*Math.cos(a+y*o),h.z=e*Math.sin(i+A*r)*Math.sin(a+y*o),p.push(h.x,h.y,h.z),f.copy(h).normalize(),g.push(f.x,f.y,f.z),_.push(A+M,1-y),x.push(l++)}u.push(x)}for(let m=0;m<n;m++)for(let x=0;x<t;x++){const y=u[m][x+1],M=u[m][x],S=u[m+1][x],A=u[m+1][x+1];(m!==0||a>0)&&d.push(y,M,A),(m!==n-1||c<Math.PI)&&d.push(M,S,A)}this.setIndex(d),this.setAttribute("position",new Nt(p,3)),this.setAttribute("normal",new Nt(g,3)),this.setAttribute("uv",new Nt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class rf extends Xt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],l=[],u=new B,h=new B,f=new B;for(let d=0;d<=n;d++)for(let p=0;p<=i;p++){const g=p/i*r,_=d/n*Math.PI*2;h.x=(e+t*Math.cos(_))*Math.cos(g),h.y=(e+t*Math.cos(_))*Math.sin(g),h.z=t*Math.sin(_),o.push(h.x,h.y,h.z),u.x=e*Math.cos(g),u.y=e*Math.sin(g),f.subVectors(h,u).normalize(),c.push(f.x,f.y,f.z),l.push(p/i),l.push(d/n)}for(let d=1;d<=n;d++)for(let p=1;p<=i;p++){const g=(i+1)*d+p-1,_=(i+1)*(d-1)+p-1,m=(i+1)*(d-1)+p,x=(i+1)*d+p;a.push(g,_,x),a.push(_,m,x)}this.setIndex(a),this.setAttribute("position",new Nt(o,3)),this.setAttribute("normal",new Nt(c,3)),this.setAttribute("uv",new Nt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rf(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ti extends ji{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=em,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tr extends Ti{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new it(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Vg extends ji{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=P_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Gg extends ji{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function xc(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Hg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Wg(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Md(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function pm(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class Yo{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Xg extends Yo{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ra,endingEnd:ra}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case sa:r=e,o=2*t-n;break;case $c:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case sa:a=e,c=2*n-t;break;case $c:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-t)/(i-t),g=p*p,_=g*p,m=-f*_+2*f*g-f*p,x=(1+f)*_+(-1.5-2*f)*g+(-.5+f)*p+1,y=(-1-d)*_+(1.5+d)*g+.5*p,M=d*_-d*g;for(let S=0;S!==o;++S)r[S]=m*a[u+S]+x*a[l+S]+y*a[c+S]+M*a[h+S];return r}}class mm extends Yo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==o;++f)r[f]=a[l+f]*h+a[c+f]*u;return r}}class qg extends Yo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Oi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=xc(t,this.TimeBufferType),this.values=xc(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:xc(e.times,Array),values:xc(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new qg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new mm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Xg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ro:t=this.InterpolantFactoryMethodDiscrete;break;case Co:t=this.InterpolantFactoryMethodLinear;break;case Al:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return qe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ro;case this.InterpolantFactoryMethodLinear:return Co;case this.InterpolantFactoryMethodSmooth:return Al}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(lt("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(lt("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){lt("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){lt("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&Hg(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){lt("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Al,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(i)c=!0;else{const h=o*n,f=h-n,d=h+n;for(let p=0;p!==n;++p){const g=t[h+p];if(g!==t[f+p]||g!==t[d+p]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const h=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Oi.prototype.ValueTypeName="";Oi.prototype.TimeBufferType=Float32Array;Oi.prototype.ValueBufferType=Float32Array;Oi.prototype.DefaultInterpolation=Co;class Ua extends Oi{constructor(e,t,n){super(e,t,n)}}Ua.prototype.ValueTypeName="bool";Ua.prototype.ValueBufferType=Array;Ua.prototype.DefaultInterpolation=Ro;Ua.prototype.InterpolantFactoryMethodLinear=void 0;Ua.prototype.InterpolantFactoryMethodSmooth=void 0;class _m extends Oi{constructor(e,t,n,i){super(e,t,n,i)}}_m.prototype.ValueTypeName="color";class Ea extends Oi{constructor(e,t,n,i){super(e,t,n,i)}}Ea.prototype.ValueTypeName="number";class Yg extends Yo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let u=l+o;l!==u;l+=4)Fi.slerpFlat(r,0,a,l-o,a,l,c);return r}}class Aa extends Oi{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Yg(this.times,this.values,this.getValueSize(),e)}}Aa.prototype.ValueTypeName="quaternion";Aa.prototype.InterpolantFactoryMethodSmooth=void 0;class Fa extends Oi{constructor(e,t,n){super(e,t,n)}}Fa.prototype.ValueTypeName="string";Fa.prototype.ValueBufferType=Array;Fa.prototype.DefaultInterpolation=Ro;Fa.prototype.InterpolantFactoryMethodLinear=void 0;Fa.prototype.InterpolantFactoryMethodSmooth=void 0;class wa extends Oi{constructor(e,t,n,i){super(e,t,n,i)}}wa.prototype.ValueTypeName="vector";class nl{constructor(e="",t=-1,n=[],i=Yh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ui(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(jg(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Oi.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const u=Wg(c);c=Md(c,1,u),l=Md(l,1,u),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Ea(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(qe("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return lt("AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,p,g){if(d.length!==0){const _=[],m=[];pm(d,_,m,p),_.length!==0&&g.push(new h(f,_,m))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const f=l[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let p;for(p=0;p<f.length;p++)if(f[p].morphTargets)for(let g=0;g<f[p].morphTargets.length;g++)d[f[p].morphTargets[g]]=-1;for(const g in d){const _=[],m=[];for(let x=0;x!==f[p].morphTargets.length;++x){const y=f[p];_.push(y.time),m.push(y.morphTarget===g?1:0)}i.push(new Ea(".morphTargetInfluence["+g+"]",_,m))}c=d.length*a}else{const d=".bones["+t[h].name+"]";n(wa,d+".position",f,"pos",i),n(Aa,d+".quaternion",f,"rot",i),n(wa,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Kg(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ea;case"vector":case"vector2":case"vector3":case"vector4":return wa;case"color":return _m;case"quaternion":return Aa;case"bool":case"boolean":return Ua;case"string":return Fa}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function jg(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Kg(s.type);if(s.times===void 0){const t=[],n=[];pm(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const mr={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class $g{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const d=l[h],p=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Zg=new $g;class Oa{constructor(e){this.manager=e!==void 0?e:Zg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Oa.DEFAULT_MATERIAL_NAME="__DEFAULT";const cr={};class Jg extends Error{constructor(e,t){super(e),this.response=t}}class gm extends Oa{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=mr.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(cr[e]!==void 0){cr[e].push({onLoad:t,onProgress:n,onError:i});return}cr[e]=[],cr[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&qe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=cr[e],h=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,p=d!==0;let g=0;const _=new ReadableStream({start(m){x();function x(){h.read().then(({done:y,value:M})=>{if(y)m.close();else{g+=M.byteLength;const S=new ProgressEvent("progress",{lengthComputable:p,loaded:g,total:d});for(let A=0,R=u.length;A<R;A++){const P=u[A];P.onProgress&&P.onProgress(S)}m.enqueue(M),x()}},y=>{m.error(y)})}}});return new Response(_)}else throw new Jg(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(p=>d.decode(p))}}}).then(l=>{mr.add(`file:${e}`,l);const u=cr[e];delete cr[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(l)}}).catch(l=>{const u=cr[e];if(u===void 0)throw this.manager.itemError(e),l;delete cr[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const $s=new WeakMap;class Qg extends Oa{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=mr.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let h=$s.get(a);h===void 0&&(h=[],$s.set(a,h)),h.push({onLoad:t,onError:i})}return a}const o=Po("img");function c(){u(),t&&t(this);const h=$s.get(this)||[];for(let f=0;f<h.length;f++){const d=h[f];d.onLoad&&d.onLoad(this)}$s.delete(this),r.manager.itemEnd(e)}function l(h){u(),i&&i(h),mr.remove(`image:${e}`);const f=$s.get(this)||[];for(let d=0;d<f.length;d++){const p=f[d];p.onError&&p.onError(h)}$s.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),mr.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class ex extends Oa{constructor(e){super(e)}load(e,t,n,i){const r=new Qt,a=new Qg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class xl extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class tx extends xl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Jl=new tt,Sd=new B,Td=new B;class sf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.mapType=Zi,this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tf,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Sd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Sd),Td.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Td),t.updateMatrixWorld(),Jl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Jl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class nx extends sf{constructor(){super(new Un(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Sa*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class xm extends xl{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new nx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Ed=new tt,Ya=new B,Ql=new B;class ix extends sf{constructor(){super(new Un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new it(4,2),this._viewportCount=6,this._viewports=[new gt(2,1,1,1),new gt(0,1,1,1),new gt(3,1,1,1),new gt(1,1,1,1),new gt(3,0,1,1),new gt(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ya.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ya),Ql.copy(n.position),Ql.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ql),n.updateMatrixWorld(),i.makeTranslation(-Ya.x,-Ya.y,-Ya.z),Ed.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ed,n.coordinateSystem,n.reversedDepth)}}class vm extends xl{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ix}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class af extends cm{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class rx extends sf{constructor(){super(new af(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ym extends xl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new rx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ho{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const eu=new WeakMap;class sx extends Oa{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&qe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&qe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=mr.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{if(eu.has(a)===!0)i&&i(eu.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return mr.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),eu.set(c,l),mr.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});mr.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class ax extends Un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class ox{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class cx{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Fi.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const a=this._workIndex*r;Fi.multiplyQuaternionsFlat(e,a,e,t,e,n),Fi.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const c=t+o;e[c]=e[c]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const of="\\[\\]\\.:\\/",lx=new RegExp("["+of+"]","g"),cf="[^"+of+"]",ux="[^"+of.replace("\\.","")+"]",hx=/((?:WC+[\/:])*)/.source.replace("WC",cf),fx=/(WCOD+)?/.source.replace("WCOD",ux),dx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cf),px=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cf),mx=new RegExp("^"+hx+fx+dx+px+"$"),_x=["material","materials","bones","map"];class gx{constructor(e,t,n){const i=n||yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class yt{constructor(e,t,n){this.path=t,this.parsedPath=n||yt.parseTrackName(t),this.node=yt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new yt.Composite(e,t,n):new yt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(lx,"")}static parseTrackName(e){const t=mx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);_x.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=yt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){lt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){lt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){lt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){lt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){lt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){lt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){lt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[i];if(a===void 0){const l=t.nodeName;lt("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){lt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){lt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}yt.Composite=gx;yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray];yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class xx{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,a=r.length,o=new Array(a),c={endingStart:ra,endingEnd:ra};for(let l=0;l!==a;++l){const u=r[l].createInterpolant(null);o[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=A_,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case R_:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(a),l[u].accumulateAdditive(o);break;case Yh:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(a),l[u].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const a=n===w_;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===Jp){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=sa,i.endingEnd=sa):(e?i.endingStart=this.zeroSlopeAtStart?sa:ra:i.endingStart=$c,t?i.endingEnd=this.zeroSlopeAtEnd?sa:ra:i.endingEnd=$c)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=n,this}}const vx=new Float32Array(1);class yx extends Ls{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==r;++h){const f=i[h],d=f.name;let p=u[d];if(p!==void 0)++p.referenceCount,a[h]=p;else{if(p=a[h],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,c,d));continue}const g=t&&t._propertyBindings[h].binding.parsedPath;p=new cx(yt.create(n,d,g),f.ValueTypeName,f.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,c,d),a[h]=p}o[h].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;const h=o.actionByRoot,f=(e._localRoot||this._root).uuid;delete h[f],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new mm(new Float32Array(2),new Float32Array(2),1,vx),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let a=typeof e=="string"?nl.findByName(i,e):e;const o=a!==null?a.uuid:e,c=this._actionsByClip[o];let l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Yh),c!==void 0){const h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;const u=new xx(this,a,t,n);return this._bindAction(u,l),this._addInactiveAction(u,o,r),u}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?nl.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,a);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){const l=a[o];this._deactivateAction(l);const u=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const Ad=new tt;class bx{constructor(e,t,n=0,i=1/0){this.ray=new qo(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new $h,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):lt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ad.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ad),this}intersectObject(e,t=!0,n=[]){return fh(e,this,n,t),n.sort(wd),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)fh(e[i],this,n,t);return n.sort(wd),n}}function wd(s,e){return s.distance-e.distance}function fh(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)fh(r[a],e,t,!0)}}function Rd(s,e,t,n){const i=Mx(n);switch(t){case $p:return s*e;case Gh:return s*e/i.components*i.byteLength;case Hh:return s*e/i.components*i.byteLength;case Wh:return s*e*2/i.components*i.byteLength;case Xh:return s*e*2/i.components*i.byteLength;case Zp:return s*e*3/i.components*i.byteLength;case bi:return s*e*4/i.components*i.byteLength;case qh:return s*e*4/i.components*i.byteLength;case Uc:case Fc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Oc:case Bc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Uu:case Ou:return Math.max(s,16)*Math.max(e,8)/4;case Nu:case Fu:return Math.max(s,8)*Math.max(e,8)/2;case Bu:case ku:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case zu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Vu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Gu:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Hu:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Wu:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Xu:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case qu:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Yu:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ku:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ju:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case $u:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Zu:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ju:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Qu:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case eh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case th:case nh:case ih:return Math.ceil(s/4)*Math.ceil(e/4)*16;case rh:case sh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ah:case oh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Mx(s){switch(s){case Zi:case qp:return{byteLength:1,components:1};case To:case Yp:case Na:return{byteLength:2,components:1};case zh:case Vh:return{byteLength:2,components:4};case Rs:case kh:case Li:return{byteLength:4,components:1};case Kp:case jp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bh}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bh);function bm(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Sx(s){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,u),o.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const u=c.array,h=c.updateRanges;if(s.bindBuffer(l,o),h.length===0)s.bufferSubData(l,0,u);else{h.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<h.length;d++){const p=h[f],g=h[d];g.start<=p.start+p.count+1?p.count=Math.max(p.count,g.start+g.count-p.start):(++f,h[f]=g)}h.length=f+1;for(let d=0,p=h.length;d<p;d++){const g=h[d];s.bufferSubData(l,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}var Tx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ex=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ax=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Px=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ix=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Lx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ux=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ox=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Bx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,zx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Yx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Kx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,jx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$x=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ev="gl_FragColor = linearToOutputTexel( gl_FragColor );",tv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,iv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,rv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,av=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ov=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,fv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_v=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,gv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Mv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Sv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Tv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ev=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Av=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Iv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Lv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Uv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ov=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,zv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Gv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Yv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$v=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Qv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ey=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ty=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ny=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ry=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ay=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,oy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ly=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,py=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,my=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_y=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,by=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,My=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ty=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ay=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ry=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Py=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Iy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Dy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ny=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Oy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,By=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ky=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Gy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Wy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Xy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ky=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$y=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Jy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nt={alphahash_fragment:Tx,alphahash_pars_fragment:Ex,alphamap_fragment:Ax,alphamap_pars_fragment:wx,alphatest_fragment:Rx,alphatest_pars_fragment:Cx,aomap_fragment:Px,aomap_pars_fragment:Ix,batching_pars_vertex:Dx,batching_vertex:Lx,begin_vertex:Nx,beginnormal_vertex:Ux,bsdfs:Fx,iridescence_fragment:Ox,bumpmap_pars_fragment:Bx,clipping_planes_fragment:kx,clipping_planes_pars_fragment:zx,clipping_planes_pars_vertex:Vx,clipping_planes_vertex:Gx,color_fragment:Hx,color_pars_fragment:Wx,color_pars_vertex:Xx,color_vertex:qx,common:Yx,cube_uv_reflection_fragment:Kx,defaultnormal_vertex:jx,displacementmap_pars_vertex:$x,displacementmap_vertex:Zx,emissivemap_fragment:Jx,emissivemap_pars_fragment:Qx,colorspace_fragment:ev,colorspace_pars_fragment:tv,envmap_fragment:nv,envmap_common_pars_fragment:iv,envmap_pars_fragment:rv,envmap_pars_vertex:sv,envmap_physical_pars_fragment:_v,envmap_vertex:av,fog_vertex:ov,fog_pars_vertex:cv,fog_fragment:lv,fog_pars_fragment:uv,gradientmap_pars_fragment:hv,lightmap_pars_fragment:fv,lights_lambert_fragment:dv,lights_lambert_pars_fragment:pv,lights_pars_begin:mv,lights_toon_fragment:gv,lights_toon_pars_fragment:xv,lights_phong_fragment:vv,lights_phong_pars_fragment:yv,lights_physical_fragment:bv,lights_physical_pars_fragment:Mv,lights_fragment_begin:Sv,lights_fragment_maps:Tv,lights_fragment_end:Ev,logdepthbuf_fragment:Av,logdepthbuf_pars_fragment:wv,logdepthbuf_pars_vertex:Rv,logdepthbuf_vertex:Cv,map_fragment:Pv,map_pars_fragment:Iv,map_particle_fragment:Dv,map_particle_pars_fragment:Lv,metalnessmap_fragment:Nv,metalnessmap_pars_fragment:Uv,morphinstance_vertex:Fv,morphcolor_vertex:Ov,morphnormal_vertex:Bv,morphtarget_pars_vertex:kv,morphtarget_vertex:zv,normal_fragment_begin:Vv,normal_fragment_maps:Gv,normal_pars_fragment:Hv,normal_pars_vertex:Wv,normal_vertex:Xv,normalmap_pars_fragment:qv,clearcoat_normal_fragment_begin:Yv,clearcoat_normal_fragment_maps:Kv,clearcoat_pars_fragment:jv,iridescence_pars_fragment:$v,opaque_fragment:Zv,packing:Jv,premultiplied_alpha_fragment:Qv,project_vertex:ey,dithering_fragment:ty,dithering_pars_fragment:ny,roughnessmap_fragment:iy,roughnessmap_pars_fragment:ry,shadowmap_pars_fragment:sy,shadowmap_pars_vertex:ay,shadowmap_vertex:oy,shadowmask_pars_fragment:cy,skinbase_vertex:ly,skinning_pars_vertex:uy,skinning_vertex:hy,skinnormal_vertex:fy,specularmap_fragment:dy,specularmap_pars_fragment:py,tonemapping_fragment:my,tonemapping_pars_fragment:_y,transmission_fragment:gy,transmission_pars_fragment:xy,uv_pars_fragment:vy,uv_pars_vertex:yy,uv_vertex:by,worldpos_vertex:My,background_vert:Sy,background_frag:Ty,backgroundCube_vert:Ey,backgroundCube_frag:Ay,cube_vert:wy,cube_frag:Ry,depth_vert:Cy,depth_frag:Py,distanceRGBA_vert:Iy,distanceRGBA_frag:Dy,equirect_vert:Ly,equirect_frag:Ny,linedashed_vert:Uy,linedashed_frag:Fy,meshbasic_vert:Oy,meshbasic_frag:By,meshlambert_vert:ky,meshlambert_frag:zy,meshmatcap_vert:Vy,meshmatcap_frag:Gy,meshnormal_vert:Hy,meshnormal_frag:Wy,meshphong_vert:Xy,meshphong_frag:qy,meshphysical_vert:Yy,meshphysical_frag:Ky,meshtoon_vert:jy,meshtoon_frag:$y,points_vert:Zy,points_frag:Jy,shadow_vert:Qy,shadow_frag:eb,sprite_vert:tb,sprite_frag:nb},Te={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},Gi={basic:{uniforms:In([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:In([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new ze(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:In([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:In([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:In([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new ze(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:In([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:In([Te.points,Te.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:In([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:In([Te.common,Te.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:In([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:In([Te.sprite,Te.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:In([Te.common,Te.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:In([Te.lights,Te.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Gi.physical={uniforms:In([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const vc={r:0,b:0,g:0},ss=new Ji,ib=new tt;function rb(s,e,t,n,i,r,a){const o=new ze(0);let c=r===!0?0:1,l,u,h=null,f=0,d=null;function p(y){let M=y.isScene===!0?y.background:null;return M&&M.isTexture&&(M=(y.backgroundBlurriness>0?t:e).get(M)),M}function g(y){let M=!1;const S=p(y);S===null?m(o,c):S&&S.isColor&&(m(S,1),M=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(y,M){const S=p(M);S&&(S.isCubeTexture||S.mapping===gl)?(u===void 0&&(u=new Tt(new pn(1,1,1),new Mr({name:"BackgroundCubeMaterial",uniforms:Ta(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),ss.copy(M.backgroundRotation),ss.x*=-1,ss.y*=-1,ss.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ib.makeRotationFromEuler(ss)),u.material.toneMapped=mt.getTransfer(S.colorSpace)!==At,(h!==S||f!==S.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=S,f=S.version,d=s.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Tt(new Hn(2,2),new Mr({name:"BackgroundMaterial",uniforms:Ta(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:br,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=mt.getTransfer(S.colorSpace)!==At,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=S,f=S.version,d=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,M){y.getRGB(vc,om(s)),n.buffers.color.setClear(vc.r,vc.g,vc.b,M,a)}function x(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,M=1){o.set(y),c=M,m(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,m(o,c)},render:g,addToRenderList:_,dispose:x}}function sb(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,a=!1;function o(v,L,N,k,O){let W=!1;const X=h(k,N,L);r!==X&&(r=X,l(r.object)),W=d(v,k,N,O),W&&p(v,k,N,O),O!==null&&e.update(O,s.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,M(v,L,N,k),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function c(){return s.createVertexArray()}function l(v){return s.bindVertexArray(v)}function u(v){return s.deleteVertexArray(v)}function h(v,L,N){const k=N.wireframe===!0;let O=n[v.id];O===void 0&&(O={},n[v.id]=O);let W=O[L.id];W===void 0&&(W={},O[L.id]=W);let X=W[k];return X===void 0&&(X=f(c()),W[k]=X),X}function f(v){const L=[],N=[],k=[];for(let O=0;O<t;O++)L[O]=0,N[O]=0,k[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:N,attributeDivisors:k,object:v,attributes:{},index:null}}function d(v,L,N,k){const O=r.attributes,W=L.attributes;let X=0;const K=N.getAttributes();for(const q in K)if(K[q].location>=0){const w=O[q];let $=W[q];if($===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&($=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&($=v.instanceColor)),w===void 0||w.attribute!==$||$&&w.data!==$.data)return!0;X++}return r.attributesNum!==X||r.index!==k}function p(v,L,N,k){const O={},W=L.attributes;let X=0;const K=N.getAttributes();for(const q in K)if(K[q].location>=0){let w=W[q];w===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&(w=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&(w=v.instanceColor));const $={};$.attribute=w,w&&w.data&&($.data=w.data),O[q]=$,X++}r.attributes=O,r.attributesNum=X,r.index=k}function g(){const v=r.newAttributes;for(let L=0,N=v.length;L<N;L++)v[L]=0}function _(v){m(v,0)}function m(v,L){const N=r.newAttributes,k=r.enabledAttributes,O=r.attributeDivisors;N[v]=1,k[v]===0&&(s.enableVertexAttribArray(v),k[v]=1),O[v]!==L&&(s.vertexAttribDivisor(v,L),O[v]=L)}function x(){const v=r.newAttributes,L=r.enabledAttributes;for(let N=0,k=L.length;N<k;N++)L[N]!==v[N]&&(s.disableVertexAttribArray(N),L[N]=0)}function y(v,L,N,k,O,W,X){X===!0?s.vertexAttribIPointer(v,L,N,O,W):s.vertexAttribPointer(v,L,N,k,O,W)}function M(v,L,N,k){g();const O=k.attributes,W=N.getAttributes(),X=L.defaultAttributeValues;for(const K in W){const q=W[K];if(q.location>=0){let D=O[K];if(D===void 0&&(K==="instanceMatrix"&&v.instanceMatrix&&(D=v.instanceMatrix),K==="instanceColor"&&v.instanceColor&&(D=v.instanceColor)),D!==void 0){const w=D.normalized,$=D.itemSize,oe=e.get(D);if(oe===void 0)continue;const fe=oe.buffer,he=oe.type,be=oe.bytesPerElement,Q=he===s.INT||he===s.UNSIGNED_INT||D.gpuType===kh;if(D.isInterleavedBufferAttribute){const ee=D.data,le=ee.stride,Ae=D.offset;if(ee.isInstancedInterleavedBuffer){for(let ue=0;ue<q.locationSize;ue++)m(q.location+ue,ee.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ue=0;ue<q.locationSize;ue++)_(q.location+ue);s.bindBuffer(s.ARRAY_BUFFER,fe);for(let ue=0;ue<q.locationSize;ue++)y(q.location+ue,$/q.locationSize,he,w,le*be,(Ae+$/q.locationSize*ue)*be,Q)}else{if(D.isInstancedBufferAttribute){for(let ee=0;ee<q.locationSize;ee++)m(q.location+ee,D.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let ee=0;ee<q.locationSize;ee++)_(q.location+ee);s.bindBuffer(s.ARRAY_BUFFER,fe);for(let ee=0;ee<q.locationSize;ee++)y(q.location+ee,$/q.locationSize,he,w,$*be,$/q.locationSize*ee*be,Q)}}else if(X!==void 0){const w=X[K];if(w!==void 0)switch(w.length){case 2:s.vertexAttrib2fv(q.location,w);break;case 3:s.vertexAttrib3fv(q.location,w);break;case 4:s.vertexAttrib4fv(q.location,w);break;default:s.vertexAttrib1fv(q.location,w)}}}}x()}function S(){P();for(const v in n){const L=n[v];for(const N in L){const k=L[N];for(const O in k)u(k[O].object),delete k[O];delete L[N]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;const L=n[v.id];for(const N in L){const k=L[N];for(const O in k)u(k[O].object),delete k[O];delete L[N]}delete n[v.id]}function R(v){for(const L in n){const N=n[L];if(N[v.id]===void 0)continue;const k=N[v.id];for(const O in k)u(k[O].object),delete k[O];delete N[v.id]}}function P(){b(),a=!0,r!==i&&(r=i,l(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:b,dispose:S,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:g,enableAttribute:_,disableUnusedAttributes:x}}function ab(s,e,t){let n;function i(l){n=l}function r(l,u){s.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,h){h!==0&&(s.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let d=0;for(let p=0;p<h;p++)d+=u[p];t.update(d,n,1)}function c(l,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<l.length;p++)a(l[p],u[p],f[p]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g]*f[g];t.update(p,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function ob(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){return!(R!==bi&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const P=R===Na&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Zi&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Li&&!P)}function c(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(qe("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=p>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:M,vertexTextures:S,maxSamples:A}}function cb(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new us,o=new et,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const p=h.clippingPlanes,g=h.clipIntersection,_=h.clipShadows,m=s.get(h);if(!i||p===null||p.length===0||r&&!_)r?u(null):l();else{const x=r?0:n,y=x*4;let M=m.clippingState||null;c.value=M,M=u(p,f,y,d);for(let S=0;S!==y;++S)M[S]=t[S];m.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,p){const g=h!==null?h.length:0;let _=null;if(g!==0){if(_=c.value,p!==!0||_===null){const m=d+g*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(_===null||_.length<m)&&(_=new Float32Array(m));for(let y=0,M=d;y!==g;++y,M+=4)a.copy(h[y]).applyMatrix4(x,o),a.normal.toArray(_,M),_[M+3]=a.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,_}}function lb(s){let e=new WeakMap;function t(a,o){return o===Du?a.mapping=ba:o===Lu&&(a.mapping=Ma),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Du||o===Lu)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Ag(c.height);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Or=4,Cd=[.125,.215,.35,.446,.526,.582],ms=20,ub=256,Ka=new af,Pd=new ze;let tu=null,nu=0,iu=0,ru=!1;const hb=new B;class Id{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=hb}=r;tu=this._renderer.getRenderTarget(),nu=this._renderer.getActiveCubeFace(),iu=this._renderer.getActiveMipmapLevel(),ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ld(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(tu,nu,iu),this._renderer.xr.enabled=ru,e.scissorTest=!1,Zs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ba||e.mapping===Ma?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tu=this._renderer.getRenderTarget(),nu=this._renderer.getActiveCubeFace(),iu=this._renderer.getActiveMipmapLevel(),ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:Na,format:bi,colorSpace:Bn,depthBuffer:!1},i=Dd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dd(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=fb(r)),this._blurMaterial=pb(r,e,t),this._ggxMaterial=db(r,e,t)}return i}_compileMaterial(e){const t=new Tt(new Xt,e);this._renderer.compile(t,Ka)}_sceneToCubeUV(e,t,n,i,r){const c=new Un(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Pd),h.toneMapping=Hr,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Tt(new pn,new oi({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,_=g.material;let m=!1;const x=e.background;x?x.isColor&&(_.color.copy(x),e.background=null,m=!0):(_.color.copy(Pd),m=!0);for(let y=0;y<6;y++){const M=y%3;M===0?(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[y],r.y,r.z)):M===1?(c.up.set(0,0,l[y]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[y],r.z)):(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[y]));const S=this._cubeSize;Zs(i,M*S,y>2?S:0,S,S),h.setRenderTarget(i),m&&h.render(g,c),h.render(e,c)}h.toneMapping=d,h.autoClear=f,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ba||e.mapping===Ma;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ld());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Zs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Ka)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),f=.05+l*.95,d=h*f,{_lodMax:p}=this,g=this._sizeLods[n],_=3*g*(n>p-Or?n-p+Or:0),m=4*(this._cubeSize-g);c.envMap.value=e.texture,c.roughness.value=d,c.mipInt.value=p-t,Zs(r,_,m,3*g,2*g),i.setRenderTarget(r),i.render(o,Ka),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=p-n,Zs(e,_,m,3*g,2*g),i.setRenderTarget(e),i.render(o,Ka)}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&lt("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[i];h.material=l;const f=l.uniforms,d=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ms-1),g=r/p,_=isFinite(r)?1+Math.floor(u*g):ms;_>ms&&qe(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${ms}`);const m=[];let x=0;for(let R=0;R<ms;++R){const P=R/g,b=Math.exp(-P*P/2);m.push(b),R===0?x+=b:R<_&&(x+=2*b)}for(let R=0;R<m.length;R++)m[R]=m[R]/x;f.envMap.value=e.texture,f.samples.value=_,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=p,f.mipInt.value=y-n;const M=this._sizeLods[i],S=3*M*(i>y-Or?i-y+Or:0),A=4*(this._cubeSize-M);Zs(t,S,A,3*M,2*M),c.setRenderTarget(t),c.render(h,Ka)}}function fb(s){const e=[],t=[],n=[];let i=s;const r=s-Or+1+Cd.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let c=1/o;a>s-Or?c=Cd[a-s+Or-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,p=6,g=3,_=2,m=1,x=new Float32Array(g*p*d),y=new Float32Array(_*p*d),M=new Float32Array(m*p*d);for(let A=0;A<d;A++){const R=A%3*2/3-1,P=A>2?0:-1,b=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];x.set(b,g*p*A),y.set(f,_*p*A);const v=[A,A,A,A,A,A];M.set(v,m*p*A)}const S=new Xt;S.setAttribute("position",new Tn(x,g)),S.setAttribute("uv",new Tn(y,_)),S.setAttribute("faceIndex",new Tn(M,m)),n.push(new Tt(S,null)),i>Or&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Dd(s,e,t){const n=new Cs(s,e,t);return n.texture.mapping=gl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zs(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function db(s,e,t){return new Mr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ub,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:vl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function pb(s,e,t){const n=new Float32Array(ms),i=new B(0,1,0);return new Mr({name:"SphericalGaussianBlur",defines:{n:ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function Ld(){return new Mr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function Nd(){return new Mr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function vl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function mb(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Du||c===Lu,u=c===ba||c===Ma;if(l||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Id(s)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return l&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new Id(s)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function i(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function _b(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Io("WebGLRenderer: "+n+" extension not supported."),i}}}function gb(s,e,t,n){const i={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",a),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const d in f)e.update(f[d],s.ARRAY_BUFFER)}function l(h){const f=[],d=h.index,p=h.attributes.position;let g=0;if(d!==null){const x=d.array;g=d.version;for(let y=0,M=x.length;y<M;y+=3){const S=x[y+0],A=x[y+1],R=x[y+2];f.push(S,A,A,R,R,S)}}else if(p!==void 0){const x=p.array;g=p.version;for(let y=0,M=x.length/3-1;y<M;y+=3){const S=y+0,A=y+1,R=y+2;f.push(S,A,A,R,R,S)}}else return;const _=new(nm(f)?am:sm)(f,1);_.version=g;const m=r.get(h);m&&e.remove(m),r.set(h,_)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function xb(s,e,t){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,d){s.drawElements(n,d,r,f*a),t.update(d,n,1)}function l(f,d,p){p!==0&&(s.drawElementsInstanced(n,d,r,f*a,p),t.update(d,n,p))}function u(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,p);let _=0;for(let m=0;m<p;m++)_+=d[m];t.update(_,n,1)}function h(f,d,p,g){if(p===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<f.length;m++)l(f[m]/a,d[m],g[m]);else{_.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,g,0,p);let m=0;for(let x=0;x<p;x++)m+=d[x]*g[x];t.update(m,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function vb(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:lt("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function yb(s,e,t){const n=new WeakMap,i=new gt;function r(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let v=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var d=v;f!==void 0&&f.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let M=0;p===!0&&(M=1),g===!0&&(M=2),_===!0&&(M=3);let S=o.attributes.position.count*M,A=1;S>e.maxTextureSize&&(A=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const R=new Float32Array(S*A*4*h),P=new im(R,S,A,h);P.type=Li,P.needsUpdate=!0;const b=M*4;for(let L=0;L<h;L++){const N=m[L],k=x[L],O=y[L],W=S*A*4*L;for(let X=0;X<N.count;X++){const K=X*b;p===!0&&(i.fromBufferAttribute(N,X),R[W+K+0]=i.x,R[W+K+1]=i.y,R[W+K+2]=i.z,R[W+K+3]=0),g===!0&&(i.fromBufferAttribute(k,X),R[W+K+4]=i.x,R[W+K+5]=i.y,R[W+K+6]=i.z,R[W+K+7]=0),_===!0&&(i.fromBufferAttribute(O,X),R[W+K+8]=i.x,R[W+K+9]=i.y,R[W+K+10]=i.z,R[W+K+11]=O.itemSize===4?i.w:1)}}f={count:h,texture:P,size:new it(S,A)},n.set(o,f),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let p=0;for(let _=0;_<l.length;_++)p+=l[_];const g=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function bb(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return h}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const Mm=new Qt,Ud=new fm(1,1),Sm=new im,Tm=new lg,Em=new lm,Fd=[],Od=[],Bd=new Float32Array(16),kd=new Float32Array(9),zd=new Float32Array(4);function Ba(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Fd[i];if(r===void 0&&(r=new Float32Array(i),Fd[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function sn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function an(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function yl(s,e){let t=Od[e];t===void 0&&(t=new Int32Array(e),Od[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Mb(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Sb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;s.uniform2fv(this.addr,e),an(t,e)}}function Tb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;s.uniform3fv(this.addr,e),an(t,e)}}function Eb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;s.uniform4fv(this.addr,e),an(t,e)}}function Ab(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(sn(t,n))return;zd.set(n),s.uniformMatrix2fv(this.addr,!1,zd),an(t,n)}}function wb(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(sn(t,n))return;kd.set(n),s.uniformMatrix3fv(this.addr,!1,kd),an(t,n)}}function Rb(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(sn(t,n))return;Bd.set(n),s.uniformMatrix4fv(this.addr,!1,Bd),an(t,n)}}function Cb(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Pb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;s.uniform2iv(this.addr,e),an(t,e)}}function Ib(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;s.uniform3iv(this.addr,e),an(t,e)}}function Db(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;s.uniform4iv(this.addr,e),an(t,e)}}function Lb(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Nb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;s.uniform2uiv(this.addr,e),an(t,e)}}function Ub(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;s.uniform3uiv(this.addr,e),an(t,e)}}function Fb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;s.uniform4uiv(this.addr,e),an(t,e)}}function Ob(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Ud.compareFunction=tm,r=Ud):r=Mm,t.setTexture2D(e||r,i)}function Bb(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Tm,i)}function kb(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Em,i)}function zb(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Sm,i)}function Vb(s){switch(s){case 5126:return Mb;case 35664:return Sb;case 35665:return Tb;case 35666:return Eb;case 35674:return Ab;case 35675:return wb;case 35676:return Rb;case 5124:case 35670:return Cb;case 35667:case 35671:return Pb;case 35668:case 35672:return Ib;case 35669:case 35673:return Db;case 5125:return Lb;case 36294:return Nb;case 36295:return Ub;case 36296:return Fb;case 35678:case 36198:case 36298:case 36306:case 35682:return Ob;case 35679:case 36299:case 36307:return Bb;case 35680:case 36300:case 36308:case 36293:return kb;case 36289:case 36303:case 36311:case 36292:return zb}}function Gb(s,e){s.uniform1fv(this.addr,e)}function Hb(s,e){const t=Ba(e,this.size,2);s.uniform2fv(this.addr,t)}function Wb(s,e){const t=Ba(e,this.size,3);s.uniform3fv(this.addr,t)}function Xb(s,e){const t=Ba(e,this.size,4);s.uniform4fv(this.addr,t)}function qb(s,e){const t=Ba(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Yb(s,e){const t=Ba(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Kb(s,e){const t=Ba(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function jb(s,e){s.uniform1iv(this.addr,e)}function $b(s,e){s.uniform2iv(this.addr,e)}function Zb(s,e){s.uniform3iv(this.addr,e)}function Jb(s,e){s.uniform4iv(this.addr,e)}function Qb(s,e){s.uniform1uiv(this.addr,e)}function eM(s,e){s.uniform2uiv(this.addr,e)}function tM(s,e){s.uniform3uiv(this.addr,e)}function nM(s,e){s.uniform4uiv(this.addr,e)}function iM(s,e,t){const n=this.cache,i=e.length,r=yl(t,i);sn(n,r)||(s.uniform1iv(this.addr,r),an(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Mm,r[a])}function rM(s,e,t){const n=this.cache,i=e.length,r=yl(t,i);sn(n,r)||(s.uniform1iv(this.addr,r),an(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Tm,r[a])}function sM(s,e,t){const n=this.cache,i=e.length,r=yl(t,i);sn(n,r)||(s.uniform1iv(this.addr,r),an(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Em,r[a])}function aM(s,e,t){const n=this.cache,i=e.length,r=yl(t,i);sn(n,r)||(s.uniform1iv(this.addr,r),an(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Sm,r[a])}function oM(s){switch(s){case 5126:return Gb;case 35664:return Hb;case 35665:return Wb;case 35666:return Xb;case 35674:return qb;case 35675:return Yb;case 35676:return Kb;case 5124:case 35670:return jb;case 35667:case 35671:return $b;case 35668:case 35672:return Zb;case 35669:case 35673:return Jb;case 5125:return Qb;case 36294:return eM;case 36295:return tM;case 36296:return nM;case 35678:case 36198:case 36298:case 36306:case 35682:return iM;case 35679:case 36299:case 36307:return rM;case 35680:case 36300:case 36308:case 36293:return sM;case 36289:case 36303:case 36311:case 36292:return aM}}class cM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Vb(t.type)}}class lM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=oM(t.type)}}class uM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const su=/(\w+)(\])?(\[|\.)?/g;function Vd(s,e){s.seq.push(e),s.map[e.id]=e}function hM(s,e,t){const n=s.name,i=n.length;for(su.lastIndex=0;;){const r=su.exec(n),a=su.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Vd(t,l===void 0?new cM(o,s,e):new lM(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new uM(o),Vd(t,h)),t=h}}}class kc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);hM(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Gd(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const fM=37297;let dM=0;function pM(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Hd=new et;function mM(s){mt._getMatrix(Hd,mt.workingColorSpace,s);const e=`mat3( ${Hd.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(s)){case Zc:return[e,"LinearTransferOETF"];case At:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Wd(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+pM(s.getShaderSource(e),o)}else return r}function _M(s,e){const t=mM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function gM(s,e){let t;switch(e){case v_:t="Linear";break;case y_:t="Reinhard";break;case b_:t="Cineon";break;case Hp:t="ACESFilmic";break;case S_:t="AgX";break;case T_:t="Neutral";break;case M_:t="Custom";break;default:qe("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const yc=new B;function xM(){mt.getLuminanceCoefficients(yc);const s=yc.x.toFixed(4),e=yc.y.toFixed(4),t=yc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(eo).join(`
`)}function yM(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function bM(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function eo(s){return s!==""}function Xd(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qd(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const MM=/^[ \t]*#include +<([\w\d./]+)>/gm;function dh(s){return s.replace(MM,TM)}const SM=new Map;function TM(s,e){let t=nt[e];if(t===void 0){const n=SM.get(e);if(n!==void 0)t=nt[n],qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return dh(t)}const EM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yd(s){return s.replace(EM,AM)}function AM(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Kd(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function wM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===zp?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Vp?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ur&&(e="SHADOWMAP_TYPE_VSM"),e}function RM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ba:case Ma:e="ENVMAP_TYPE_CUBE";break;case gl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function CM(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Ma&&(e="ENVMAP_MODE_REFRACTION"),e}function PM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Gp:e="ENVMAP_BLENDING_MULTIPLY";break;case g_:e="ENVMAP_BLENDING_MIX";break;case x_:e="ENVMAP_BLENDING_ADD";break}return e}function IM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function DM(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=wM(t),l=RM(t),u=CM(t),h=PM(t),f=IM(t),d=vM(t),p=yM(r),g=i.createProgram();let _,m,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(eo).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(eo).join(`
`),m.length>0&&(m+=`
`)):(_=[Kd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(eo).join(`
`),m=[Kd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hr?"#define TONE_MAPPING":"",t.toneMapping!==Hr?nt.tonemapping_pars_fragment:"",t.toneMapping!==Hr?gM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,_M("linearToOutputTexel",t.outputColorSpace),xM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(eo).join(`
`)),a=dh(a),a=Xd(a,t),a=qd(a,t),o=dh(o),o=Xd(o,t),o=qd(o,t),a=Yd(a),o=Yd(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",t.glslVersion===Hf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=x+_+a,M=x+m+o,S=Gd(i,i.VERTEX_SHADER,y),A=Gd(i,i.FRAGMENT_SHADER,M);i.attachShader(g,S),i.attachShader(g,A),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function R(L){if(s.debug.checkShaderErrors){const N=i.getProgramInfoLog(g)||"",k=i.getShaderInfoLog(S)||"",O=i.getShaderInfoLog(A)||"",W=N.trim(),X=k.trim(),K=O.trim();let q=!0,D=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,S,A);else{const w=Wd(i,S,"vertex"),$=Wd(i,A,"fragment");lt("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+W+`
`+w+`
`+$)}else W!==""?qe("WebGLProgram: Program Info Log:",W):(X===""||K==="")&&(D=!1);D&&(L.diagnostics={runnable:q,programLog:W,vertexShader:{log:X,prefix:_},fragmentShader:{log:K,prefix:m}})}i.deleteShader(S),i.deleteShader(A),P=new kc(i,g),b=bM(i,g)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(g,fM)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dM++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=A,this}let LM=0;class NM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new UM(e),t.set(e,n)),n}}class UM{constructor(e){this.id=LM++,this.code=e,this.usedTimes=0}}function FM(s,e,t,n,i,r,a){const o=new $h,c=new NM,l=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return l.add(b),b===0?"uv":`uv${b}`}function _(b,v,L,N,k){const O=N.fog,W=k.geometry,X=b.isMeshStandardMaterial?N.environment:null,K=(b.isMeshStandardMaterial?t:e).get(b.envMap||X),q=K&&K.mapping===gl?K.image.height:null,D=p[b.type];b.precision!==null&&(d=i.getMaxPrecision(b.precision),d!==b.precision&&qe("WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const w=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,$=w!==void 0?w.length:0;let oe=0;W.morphAttributes.position!==void 0&&(oe=1),W.morphAttributes.normal!==void 0&&(oe=2),W.morphAttributes.color!==void 0&&(oe=3);let fe,he,be,Q;if(D){const Ee=Gi[D];fe=Ee.vertexShader,he=Ee.fragmentShader}else fe=b.vertexShader,he=b.fragmentShader,c.update(b),be=c.getVertexShaderID(b),Q=c.getFragmentShaderID(b);const ee=s.getRenderTarget(),le=s.state.buffers.depth.getReversed(),Ae=k.isInstancedMesh===!0,ue=k.isBatchedMesh===!0,Ce=!!b.map,Ke=!!b.matcap,xe=!!K,Ve=!!b.aoMap,U=!!b.lightMap,Be=!!b.bumpMap,F=!!b.normalMap,He=!!b.displacementMap,_e=!!b.emissiveMap,Qe=!!b.metalnessMap,de=!!b.roughnessMap,Pe=b.anisotropy>0,I=b.clearcoat>0,E=b.dispersion>0,z=b.iridescence>0,Z=b.sheen>0,re=b.transmission>0,te=Pe&&!!b.anisotropyMap,we=I&&!!b.clearcoatMap,pe=I&&!!b.clearcoatNormalMap,Ue=I&&!!b.clearcoatRoughnessMap,ve=z&&!!b.iridescenceMap,ae=z&&!!b.iridescenceThicknessMap,ce=Z&&!!b.sheenColorMap,ke=Z&&!!b.sheenRoughnessMap,Fe=!!b.specularMap,ye=!!b.specularColorMap,Ge=!!b.specularIntensityMap,T=re&&!!b.transmissionMap,H=re&&!!b.thicknessMap,J=!!b.gradientMap,ne=!!b.alphaMap,se=b.alphaTest>0,ie=!!b.alphaHash,ge=!!b.extensions;let Ie=Hr;b.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Ie=s.toneMapping);const rt={shaderID:D,shaderType:b.type,shaderName:b.name,vertexShader:fe,fragmentShader:he,defines:b.defines,customVertexShaderID:be,customFragmentShaderID:Q,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:ue,batchingColor:ue&&k._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&k.instanceColor!==null,instancingMorph:Ae&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ee===null?s.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Bn,alphaToCoverage:!!b.alphaToCoverage,map:Ce,matcap:Ke,envMap:xe,envMapMode:xe&&K.mapping,envMapCubeUVHeight:q,aoMap:Ve,lightMap:U,bumpMap:Be,normalMap:F,displacementMap:f&&He,emissiveMap:_e,normalMapObjectSpace:F&&b.normalMapType===D_,normalMapTangentSpace:F&&b.normalMapType===em,metalnessMap:Qe,roughnessMap:de,anisotropy:Pe,anisotropyMap:te,clearcoat:I,clearcoatMap:we,clearcoatNormalMap:pe,clearcoatRoughnessMap:Ue,dispersion:E,iridescence:z,iridescenceMap:ve,iridescenceThicknessMap:ae,sheen:Z,sheenColorMap:ce,sheenRoughnessMap:ke,specularMap:Fe,specularColorMap:ye,specularIntensityMap:Ge,transmission:re,transmissionMap:T,thicknessMap:H,gradientMap:J,opaque:b.transparent===!1&&b.blending===ua&&b.alphaToCoverage===!1,alphaMap:ne,alphaTest:se,alphaHash:ie,combine:b.combine,mapUv:Ce&&g(b.map.channel),aoMapUv:Ve&&g(b.aoMap.channel),lightMapUv:U&&g(b.lightMap.channel),bumpMapUv:Be&&g(b.bumpMap.channel),normalMapUv:F&&g(b.normalMap.channel),displacementMapUv:He&&g(b.displacementMap.channel),emissiveMapUv:_e&&g(b.emissiveMap.channel),metalnessMapUv:Qe&&g(b.metalnessMap.channel),roughnessMapUv:de&&g(b.roughnessMap.channel),anisotropyMapUv:te&&g(b.anisotropyMap.channel),clearcoatMapUv:we&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:pe&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:ke&&g(b.sheenRoughnessMap.channel),specularMapUv:Fe&&g(b.specularMap.channel),specularColorMapUv:ye&&g(b.specularColorMap.channel),specularIntensityMapUv:Ge&&g(b.specularIntensityMap.channel),transmissionMapUv:T&&g(b.transmissionMap.channel),thicknessMapUv:H&&g(b.thicknessMap.channel),alphaMapUv:ne&&g(b.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(F||Pe),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!W.attributes.uv&&(Ce||ne),fog:!!O,useFog:b.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:le,skinning:k.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:oe,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ie,decodeVideoTexture:Ce&&b.map.isVideoTexture===!0&&mt.getTransfer(b.map.colorSpace)===At,decodeVideoTextureEmissive:_e&&b.emissiveMap.isVideoTexture===!0&&mt.getTransfer(b.emissiveMap.colorSpace)===At,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===fn,flipSided:b.side===qn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ge&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&b.extensions.multiDraw===!0||ue)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return rt.vertexUv1s=l.has(1),rt.vertexUv2s=l.has(2),rt.vertexUv3s=l.has(3),l.clear(),rt}function m(b){const v=[];if(b.shaderID?v.push(b.shaderID):(v.push(b.customVertexShaderID),v.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)v.push(L),v.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(x(v,b),y(v,b),v.push(s.outputColorSpace)),v.push(b.customProgramCacheKey),v.join()}function x(b,v){b.push(v.precision),b.push(v.outputColorSpace),b.push(v.envMapMode),b.push(v.envMapCubeUVHeight),b.push(v.mapUv),b.push(v.alphaMapUv),b.push(v.lightMapUv),b.push(v.aoMapUv),b.push(v.bumpMapUv),b.push(v.normalMapUv),b.push(v.displacementMapUv),b.push(v.emissiveMapUv),b.push(v.metalnessMapUv),b.push(v.roughnessMapUv),b.push(v.anisotropyMapUv),b.push(v.clearcoatMapUv),b.push(v.clearcoatNormalMapUv),b.push(v.clearcoatRoughnessMapUv),b.push(v.iridescenceMapUv),b.push(v.iridescenceThicknessMapUv),b.push(v.sheenColorMapUv),b.push(v.sheenRoughnessMapUv),b.push(v.specularMapUv),b.push(v.specularColorMapUv),b.push(v.specularIntensityMapUv),b.push(v.transmissionMapUv),b.push(v.thicknessMapUv),b.push(v.combine),b.push(v.fogExp2),b.push(v.sizeAttenuation),b.push(v.morphTargetsCount),b.push(v.morphAttributeCount),b.push(v.numDirLights),b.push(v.numPointLights),b.push(v.numSpotLights),b.push(v.numSpotLightMaps),b.push(v.numHemiLights),b.push(v.numRectAreaLights),b.push(v.numDirLightShadows),b.push(v.numPointLightShadows),b.push(v.numSpotLightShadows),b.push(v.numSpotLightShadowsWithMaps),b.push(v.numLightProbes),b.push(v.shadowMapType),b.push(v.toneMapping),b.push(v.numClippingPlanes),b.push(v.numClipIntersection),b.push(v.depthPacking)}function y(b,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),v.gradientMap&&o.enable(22),b.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reversedDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),b.push(o.mask)}function M(b){const v=p[b.type];let L;if(v){const N=Gi[v];L=Mg.clone(N.uniforms)}else L=b.uniforms;return L}function S(b,v){let L;for(let N=0,k=u.length;N<k;N++){const O=u[N];if(O.cacheKey===v){L=O,++L.usedTimes;break}}return L===void 0&&(L=new DM(s,v,b,r),u.push(L)),L}function A(b){if(--b.usedTimes===0){const v=u.indexOf(b);u[v]=u[u.length-1],u.pop(),b.destroy()}}function R(b){c.remove(b)}function P(){c.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:M,acquireProgram:S,releaseProgram:A,releaseShaderCache:R,programs:u,dispose:P}}function OM(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function BM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function jd(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function $d(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,f,d,p,g,_){let m=s[e];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:p,renderOrder:h.renderOrder,z:g,group:_},s[e]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=p,m.renderOrder=h.renderOrder,m.z=g,m.group=_),e++,m}function o(h,f,d,p,g,_){const m=a(h,f,d,p,g,_);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):t.push(m)}function c(h,f,d,p,g,_){const m=a(h,f,d,p,g,_);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):t.unshift(m)}function l(h,f){t.length>1&&t.sort(h||BM),n.length>1&&n.sort(f||jd),i.length>1&&i.sort(f||jd)}function u(){for(let h=e,f=s.length;h<f;h++){const d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:u,sort:l}}function kM(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new $d,s.set(n,[a])):i>=r.length?(a=new $d,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function zM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new ze};break;case"SpotLight":t={position:new B,direction:new B,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new B,halfWidth:new B,halfHeight:new B};break}return s[e.id]=t,t}}}function VM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let GM=0;function HM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function WM(s){const e=new zM,t=VM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new B);const i=new B,r=new tt,a=new tt;function o(l){let u=0,h=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,p=0,g=0,_=0,m=0,x=0,y=0,M=0,S=0,A=0,R=0;l.sort(HM);for(let b=0,v=l.length;b<v;b++){const L=l[b],N=L.color,k=L.intensity,O=L.distance,W=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=N.r*k,h+=N.g*k,f+=N.b*k;else if(L.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(L.sh.coefficients[X],k);R++}else if(L.isDirectionalLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const K=L.shadow,q=t.get(L);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,n.directionalShadow[d]=q,n.directionalShadowMap[d]=W,n.directionalShadowMatrix[d]=L.shadow.matrix,x++}n.directional[d]=X,d++}else if(L.isSpotLight){const X=e.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(N).multiplyScalar(k),X.distance=O,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,n.spot[g]=X;const K=L.shadow;if(L.map&&(n.spotLightMap[S]=L.map,S++,K.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[g]=K.matrix,L.castShadow){const q=t.get(L);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,n.spotShadow[g]=q,n.spotShadowMap[g]=W,M++}g++}else if(L.isRectAreaLight){const X=e.get(L);X.color.copy(N).multiplyScalar(k),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),n.rectArea[_]=X,_++}else if(L.isPointLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){const K=L.shadow,q=t.get(L);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,q.shadowCameraNear=K.camera.near,q.shadowCameraFar=K.camera.far,n.pointShadow[p]=q,n.pointShadowMap[p]=W,n.pointShadowMatrix[p]=L.shadow.matrix,y++}n.point[p]=X,p++}else if(L.isHemisphereLight){const X=e.get(L);X.skyColor.copy(L.color).multiplyScalar(k),X.groundColor.copy(L.groundColor).multiplyScalar(k),n.hemi[m]=X,m++}}_>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==d||P.pointLength!==p||P.spotLength!==g||P.rectAreaLength!==_||P.hemiLength!==m||P.numDirectionalShadows!==x||P.numPointShadows!==y||P.numSpotShadows!==M||P.numSpotMaps!==S||P.numLightProbes!==R)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=_,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=M+S-A,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,P.directionalLength=d,P.pointLength=p,P.spotLength=g,P.rectAreaLength=_,P.hemiLength=m,P.numDirectionalShadows=x,P.numPointShadows=y,P.numSpotShadows=M,P.numSpotMaps=S,P.numLightProbes=R,n.version=GM++)}function c(l,u){let h=0,f=0,d=0,p=0,g=0;const _=u.matrixWorldInverse;for(let m=0,x=l.length;m<x;m++){const y=l[m];if(y.isDirectionalLight){const M=n.directional[h];M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(_),h++}else if(y.isSpotLight){const M=n.spot[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(_),d++}else if(y.isRectAreaLight){const M=n.rectArea[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(_),a.identity(),r.copy(y.matrixWorld),r.premultiply(_),a.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),p++}else if(y.isPointLight){const M=n.point[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(_),f++}else if(y.isHemisphereLight){const M=n.hemi[g];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(_),g++}}}return{setup:o,setupView:c,state:n}}function Zd(s){const e=new WM(s),t=[],n=[];function i(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function XM(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new Zd(s),e.set(i,[o])):r>=a.length?(o=new Zd(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const qM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function KM(s,e,t){let n=new tf;const i=new it,r=new it,a=new gt,o=new Vg({depthPacking:I_}),c=new Gg,l={},u=t.maxTextureSize,h={[br]:qn,[qn]:br,[fn]:fn},f=new Mr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:qM,fragmentShader:YM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const p=new Xt;p.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Tt(p,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zp;let m=this.type;this.render=function(A,R,P){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||A.length===0)return;const b=s.getRenderTarget(),v=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),N=s.state;N.setBlending(xr),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const k=m!==ur&&this.type===ur,O=m===ur&&this.type!==ur;for(let W=0,X=A.length;W<X;W++){const K=A[W],q=K.shadow;if(q===void 0){qe("WebGLShadowMap:",K,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const D=q.getFrameExtents();if(i.multiply(D),r.copy(q.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/D.x),i.x=r.x*D.x,q.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/D.y),i.y=r.y*D.y,q.mapSize.y=r.y)),q.map===null||k===!0||O===!0){const $=this.type!==ur?{minFilter:On,magFilter:On}:{};q.map!==null&&q.map.dispose(),q.map=new Cs(i.x,i.y,$),q.map.texture.name=K.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();const w=q.getViewportCount();for(let $=0;$<w;$++){const oe=q.getViewport($);a.set(r.x*oe.x,r.y*oe.y,r.x*oe.z,r.y*oe.w),N.viewport(a),q.updateMatrices(K,$),n=q.getFrustum(),M(R,P,q.camera,K,this.type)}q.isPointLightShadow!==!0&&this.type===ur&&x(q,P),q.needsUpdate=!1}m=this.type,_.needsUpdate=!1,s.setRenderTarget(b,v,L)};function x(A,R){const P=e.update(g);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Cs(i.x,i.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(R,null,P,f,g,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(R,null,P,d,g,null)}function y(A,R,P,b){let v=null;const L=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)v=L;else if(v=P.isPointLight===!0?c:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const N=v.uuid,k=R.uuid;let O=l[N];O===void 0&&(O={},l[N]=O);let W=O[k];W===void 0&&(W=v.clone(),O[k]=W,R.addEventListener("dispose",S)),v=W}if(v.visible=R.visible,v.wireframe=R.wireframe,b===ur?v.side=R.shadowSide!==null?R.shadowSide:R.side:v.side=R.shadowSide!==null?R.shadowSide:h[R.side],v.alphaMap=R.alphaMap,v.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,v.map=R.map,v.clipShadows=R.clipShadows,v.clippingPlanes=R.clippingPlanes,v.clipIntersection=R.clipIntersection,v.displacementMap=R.displacementMap,v.displacementScale=R.displacementScale,v.displacementBias=R.displacementBias,v.wireframeLinewidth=R.wireframeLinewidth,v.linewidth=R.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const N=s.properties.get(v);N.light=P}return v}function M(A,R,P,b,v){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===ur)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const k=e.update(A),O=A.material;if(Array.isArray(O)){const W=k.groups;for(let X=0,K=W.length;X<K;X++){const q=W[X],D=O[q.materialIndex];if(D&&D.visible){const w=y(A,D,b,v);A.onBeforeShadow(s,A,R,P,k,w,q),s.renderBufferDirect(P,null,k,w,A,q),A.onAfterShadow(s,A,R,P,k,w,q)}}}else if(O.visible){const W=y(A,O,b,v);A.onBeforeShadow(s,A,R,P,k,W,null),s.renderBufferDirect(P,null,k,W,A,null),A.onAfterShadow(s,A,R,P,k,W,null)}}const N=A.children;for(let k=0,O=N.length;k<O;k++)M(N[k],R,P,b,v)}function S(A){A.target.removeEventListener("dispose",S);for(const P in l){const b=l[P],v=A.target.uuid;v in b&&(b[v].dispose(),delete b[v])}}}const jM={[Eu]:Au,[wu]:Pu,[Ru]:Iu,[ya]:Cu,[Au]:Eu,[Pu]:wu,[Iu]:Ru,[Cu]:ya};function $M(s,e){function t(){let T=!1;const H=new gt;let J=null;const ne=new gt(0,0,0,0);return{setMask:function(se){J!==se&&!T&&(s.colorMask(se,se,se,se),J=se)},setLocked:function(se){T=se},setClear:function(se,ie,ge,Ie,rt){rt===!0&&(se*=Ie,ie*=Ie,ge*=Ie),H.set(se,ie,ge,Ie),ne.equals(H)===!1&&(s.clearColor(se,ie,ge,Ie),ne.copy(H))},reset:function(){T=!1,J=null,ne.set(-1,0,0,0)}}}function n(){let T=!1,H=!1,J=null,ne=null,se=null;return{setReversed:function(ie){if(H!==ie){const ge=e.get("EXT_clip_control");ie?ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.ZERO_TO_ONE_EXT):ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.NEGATIVE_ONE_TO_ONE_EXT),H=ie;const Ie=se;se=null,this.setClear(Ie)}},getReversed:function(){return H},setTest:function(ie){ie?ee(s.DEPTH_TEST):le(s.DEPTH_TEST)},setMask:function(ie){J!==ie&&!T&&(s.depthMask(ie),J=ie)},setFunc:function(ie){if(H&&(ie=jM[ie]),ne!==ie){switch(ie){case Eu:s.depthFunc(s.NEVER);break;case Au:s.depthFunc(s.ALWAYS);break;case wu:s.depthFunc(s.LESS);break;case ya:s.depthFunc(s.LEQUAL);break;case Ru:s.depthFunc(s.EQUAL);break;case Cu:s.depthFunc(s.GEQUAL);break;case Pu:s.depthFunc(s.GREATER);break;case Iu:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ne=ie}},setLocked:function(ie){T=ie},setClear:function(ie){se!==ie&&(H&&(ie=1-ie),s.clearDepth(ie),se=ie)},reset:function(){T=!1,J=null,ne=null,se=null,H=!1}}}function i(){let T=!1,H=null,J=null,ne=null,se=null,ie=null,ge=null,Ie=null,rt=null;return{setTest:function(Ee){T||(Ee?ee(s.STENCIL_TEST):le(s.STENCIL_TEST))},setMask:function(Ee){H!==Ee&&!T&&(s.stencilMask(Ee),H=Ee)},setFunc:function(Ee,Oe,Je){(J!==Ee||ne!==Oe||se!==Je)&&(s.stencilFunc(Ee,Oe,Je),J=Ee,ne=Oe,se=Je)},setOp:function(Ee,Oe,Je){(ie!==Ee||ge!==Oe||Ie!==Je)&&(s.stencilOp(Ee,Oe,Je),ie=Ee,ge=Oe,Ie=Je)},setLocked:function(Ee){T=Ee},setClear:function(Ee){rt!==Ee&&(s.clearStencil(Ee),rt=Ee)},reset:function(){T=!1,H=null,J=null,ne=null,se=null,ie=null,ge=null,Ie=null,rt=null}}}const r=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,d=[],p=null,g=!1,_=null,m=null,x=null,y=null,M=null,S=null,A=null,R=new ze(0,0,0),P=0,b=!1,v=null,L=null,N=null,k=null,O=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,K=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(q)[1]),X=K>=1):q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),X=K>=2);let D=null,w={};const $=s.getParameter(s.SCISSOR_BOX),oe=s.getParameter(s.VIEWPORT),fe=new gt().fromArray($),he=new gt().fromArray(oe);function be(T,H,J,ne){const se=new Uint8Array(4),ie=s.createTexture();s.bindTexture(T,ie),s.texParameteri(T,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(T,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ge=0;ge<J;ge++)T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY?s.texImage3D(H,0,s.RGBA,1,1,ne,0,s.RGBA,s.UNSIGNED_BYTE,se):s.texImage2D(H+ge,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,se);return ie}const Q={};Q[s.TEXTURE_2D]=be(s.TEXTURE_2D,s.TEXTURE_2D,1),Q[s.TEXTURE_CUBE_MAP]=be(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[s.TEXTURE_2D_ARRAY]=be(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Q[s.TEXTURE_3D]=be(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(s.DEPTH_TEST),a.setFunc(ya),Be(!1),F(Of),ee(s.CULL_FACE),Ve(xr);function ee(T){u[T]!==!0&&(s.enable(T),u[T]=!0)}function le(T){u[T]!==!1&&(s.disable(T),u[T]=!1)}function Ae(T,H){return h[T]!==H?(s.bindFramebuffer(T,H),h[T]=H,T===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=H),T===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=H),!0):!1}function ue(T,H){let J=d,ne=!1;if(T){J=f.get(H),J===void 0&&(J=[],f.set(H,J));const se=T.textures;if(J.length!==se.length||J[0]!==s.COLOR_ATTACHMENT0){for(let ie=0,ge=se.length;ie<ge;ie++)J[ie]=s.COLOR_ATTACHMENT0+ie;J.length=se.length,ne=!0}}else J[0]!==s.BACK&&(J[0]=s.BACK,ne=!0);ne&&s.drawBuffers(J)}function Ce(T){return p!==T?(s.useProgram(T),p=T,!0):!1}const Ke={[ps]:s.FUNC_ADD,[e_]:s.FUNC_SUBTRACT,[t_]:s.FUNC_REVERSE_SUBTRACT};Ke[n_]=s.MIN,Ke[i_]=s.MAX;const xe={[r_]:s.ZERO,[s_]:s.ONE,[a_]:s.SRC_COLOR,[Su]:s.SRC_ALPHA,[f_]:s.SRC_ALPHA_SATURATE,[u_]:s.DST_COLOR,[c_]:s.DST_ALPHA,[o_]:s.ONE_MINUS_SRC_COLOR,[Tu]:s.ONE_MINUS_SRC_ALPHA,[h_]:s.ONE_MINUS_DST_COLOR,[l_]:s.ONE_MINUS_DST_ALPHA,[d_]:s.CONSTANT_COLOR,[p_]:s.ONE_MINUS_CONSTANT_COLOR,[m_]:s.CONSTANT_ALPHA,[__]:s.ONE_MINUS_CONSTANT_ALPHA};function Ve(T,H,J,ne,se,ie,ge,Ie,rt,Ee){if(T===xr){g===!0&&(le(s.BLEND),g=!1);return}if(g===!1&&(ee(s.BLEND),g=!0),T!==Q0){if(T!==_||Ee!==b){if((m!==ps||M!==ps)&&(s.blendEquation(s.FUNC_ADD),m=ps,M=ps),Ee)switch(T){case ua:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bf:s.blendFunc(s.ONE,s.ONE);break;case kf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case zf:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:lt("WebGLState: Invalid blending: ",T);break}else switch(T){case ua:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bf:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case kf:lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zf:lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:lt("WebGLState: Invalid blending: ",T);break}x=null,y=null,S=null,A=null,R.set(0,0,0),P=0,_=T,b=Ee}return}se=se||H,ie=ie||J,ge=ge||ne,(H!==m||se!==M)&&(s.blendEquationSeparate(Ke[H],Ke[se]),m=H,M=se),(J!==x||ne!==y||ie!==S||ge!==A)&&(s.blendFuncSeparate(xe[J],xe[ne],xe[ie],xe[ge]),x=J,y=ne,S=ie,A=ge),(Ie.equals(R)===!1||rt!==P)&&(s.blendColor(Ie.r,Ie.g,Ie.b,rt),R.copy(Ie),P=rt),_=T,b=!1}function U(T,H){T.side===fn?le(s.CULL_FACE):ee(s.CULL_FACE);let J=T.side===qn;H&&(J=!J),Be(J),T.blending===ua&&T.transparent===!1?Ve(xr):Ve(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),a.setFunc(T.depthFunc),a.setTest(T.depthTest),a.setMask(T.depthWrite),r.setMask(T.colorWrite);const ne=T.stencilWrite;o.setTest(ne),ne&&(o.setMask(T.stencilWriteMask),o.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),o.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),_e(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?ee(s.SAMPLE_ALPHA_TO_COVERAGE):le(s.SAMPLE_ALPHA_TO_COVERAGE)}function Be(T){v!==T&&(T?s.frontFace(s.CW):s.frontFace(s.CCW),v=T)}function F(T){T!==Z0?(ee(s.CULL_FACE),T!==L&&(T===Of?s.cullFace(s.BACK):T===J0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):le(s.CULL_FACE),L=T}function He(T){T!==N&&(X&&s.lineWidth(T),N=T)}function _e(T,H,J){T?(ee(s.POLYGON_OFFSET_FILL),(k!==H||O!==J)&&(s.polygonOffset(H,J),k=H,O=J)):le(s.POLYGON_OFFSET_FILL)}function Qe(T){T?ee(s.SCISSOR_TEST):le(s.SCISSOR_TEST)}function de(T){T===void 0&&(T=s.TEXTURE0+W-1),D!==T&&(s.activeTexture(T),D=T)}function Pe(T,H,J){J===void 0&&(D===null?J=s.TEXTURE0+W-1:J=D);let ne=w[J];ne===void 0&&(ne={type:void 0,texture:void 0},w[J]=ne),(ne.type!==T||ne.texture!==H)&&(D!==J&&(s.activeTexture(J),D=J),s.bindTexture(T,H||Q[T]),ne.type=T,ne.texture=H)}function I(){const T=w[D];T!==void 0&&T.type!==void 0&&(s.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(T){T("WebGLState:",T)}}function z(){try{s.compressedTexImage3D(...arguments)}catch(T){T("WebGLState:",T)}}function Z(){try{s.texSubImage2D(...arguments)}catch(T){T("WebGLState:",T)}}function re(){try{s.texSubImage3D(...arguments)}catch(T){T("WebGLState:",T)}}function te(){try{s.compressedTexSubImage2D(...arguments)}catch(T){T("WebGLState:",T)}}function we(){try{s.compressedTexSubImage3D(...arguments)}catch(T){T("WebGLState:",T)}}function pe(){try{s.texStorage2D(...arguments)}catch(T){T("WebGLState:",T)}}function Ue(){try{s.texStorage3D(...arguments)}catch(T){T("WebGLState:",T)}}function ve(){try{s.texImage2D(...arguments)}catch(T){T("WebGLState:",T)}}function ae(){try{s.texImage3D(...arguments)}catch(T){T("WebGLState:",T)}}function ce(T){fe.equals(T)===!1&&(s.scissor(T.x,T.y,T.z,T.w),fe.copy(T))}function ke(T){he.equals(T)===!1&&(s.viewport(T.x,T.y,T.z,T.w),he.copy(T))}function Fe(T,H){let J=l.get(H);J===void 0&&(J=new WeakMap,l.set(H,J));let ne=J.get(T);ne===void 0&&(ne=s.getUniformBlockIndex(H,T.name),J.set(T,ne))}function ye(T,H){const ne=l.get(H).get(T);c.get(H)!==ne&&(s.uniformBlockBinding(H,ne,T.__bindingPointIndex),c.set(H,ne))}function Ge(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},D=null,w={},h={},f=new WeakMap,d=[],p=null,g=!1,_=null,m=null,x=null,y=null,M=null,S=null,A=null,R=new ze(0,0,0),P=0,b=!1,v=null,L=null,N=null,k=null,O=null,fe.set(0,0,s.canvas.width,s.canvas.height),he.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ee,disable:le,bindFramebuffer:Ae,drawBuffers:ue,useProgram:Ce,setBlending:Ve,setMaterial:U,setFlipSided:Be,setCullFace:F,setLineWidth:He,setPolygonOffset:_e,setScissorTest:Qe,activeTexture:de,bindTexture:Pe,unbindTexture:I,compressedTexImage2D:E,compressedTexImage3D:z,texImage2D:ve,texImage3D:ae,updateUBOMapping:Fe,uniformBlockBinding:ye,texStorage2D:pe,texStorage3D:Ue,texSubImage2D:Z,texSubImage3D:re,compressedTexSubImage2D:te,compressedTexSubImage3D:we,scissor:ce,viewport:ke,reset:Ge}}function ZM(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new it,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(I,E){return d?new OffscreenCanvas(I,E):Po("canvas")}function g(I,E,z){let Z=1;const re=Pe(I);if((re.width>z||re.height>z)&&(Z=z/Math.max(re.width,re.height)),Z<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const te=Math.floor(Z*re.width),we=Math.floor(Z*re.height);h===void 0&&(h=p(te,we));const pe=E?p(te,we):h;return pe.width=te,pe.height=we,pe.getContext("2d").drawImage(I,0,0,te,we),qe("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+te+"x"+we+")."),pe}else return"data"in I&&qe("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),I;return I}function _(I){return I.generateMipmaps}function m(I){s.generateMipmap(I)}function x(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(I,E,z,Z,re=!1){if(I!==null){if(s[I]!==void 0)return s[I];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let te=E;if(E===s.RED&&(z===s.FLOAT&&(te=s.R32F),z===s.HALF_FLOAT&&(te=s.R16F),z===s.UNSIGNED_BYTE&&(te=s.R8)),E===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(te=s.R8UI),z===s.UNSIGNED_SHORT&&(te=s.R16UI),z===s.UNSIGNED_INT&&(te=s.R32UI),z===s.BYTE&&(te=s.R8I),z===s.SHORT&&(te=s.R16I),z===s.INT&&(te=s.R32I)),E===s.RG&&(z===s.FLOAT&&(te=s.RG32F),z===s.HALF_FLOAT&&(te=s.RG16F),z===s.UNSIGNED_BYTE&&(te=s.RG8)),E===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(te=s.RG8UI),z===s.UNSIGNED_SHORT&&(te=s.RG16UI),z===s.UNSIGNED_INT&&(te=s.RG32UI),z===s.BYTE&&(te=s.RG8I),z===s.SHORT&&(te=s.RG16I),z===s.INT&&(te=s.RG32I)),E===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&(te=s.RGB8UI),z===s.UNSIGNED_SHORT&&(te=s.RGB16UI),z===s.UNSIGNED_INT&&(te=s.RGB32UI),z===s.BYTE&&(te=s.RGB8I),z===s.SHORT&&(te=s.RGB16I),z===s.INT&&(te=s.RGB32I)),E===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&(te=s.RGBA8UI),z===s.UNSIGNED_SHORT&&(te=s.RGBA16UI),z===s.UNSIGNED_INT&&(te=s.RGBA32UI),z===s.BYTE&&(te=s.RGBA8I),z===s.SHORT&&(te=s.RGBA16I),z===s.INT&&(te=s.RGBA32I)),E===s.RGB&&(z===s.UNSIGNED_INT_5_9_9_9_REV&&(te=s.RGB9_E5),z===s.UNSIGNED_INT_10F_11F_11F_REV&&(te=s.R11F_G11F_B10F)),E===s.RGBA){const we=re?Zc:mt.getTransfer(Z);z===s.FLOAT&&(te=s.RGBA32F),z===s.HALF_FLOAT&&(te=s.RGBA16F),z===s.UNSIGNED_BYTE&&(te=we===At?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&(te=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(te=s.RGB5_A1)}return(te===s.R16F||te===s.R32F||te===s.RG16F||te===s.RG32F||te===s.RGBA16F||te===s.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function M(I,E){let z;return I?E===null||E===Rs||E===Eo?z=s.DEPTH24_STENCIL8:E===Li?z=s.DEPTH32F_STENCIL8:E===To&&(z=s.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Rs||E===Eo?z=s.DEPTH_COMPONENT24:E===Li?z=s.DEPTH_COMPONENT32F:E===To&&(z=s.DEPTH_COMPONENT16),z}function S(I,E){return _(I)===!0||I.isFramebufferTexture&&I.minFilter!==On&&I.minFilter!==mn?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function A(I){const E=I.target;E.removeEventListener("dispose",A),P(E),E.isVideoTexture&&u.delete(E)}function R(I){const E=I.target;E.removeEventListener("dispose",R),v(E)}function P(I){const E=n.get(I);if(E.__webglInit===void 0)return;const z=I.source,Z=f.get(z);if(Z){const re=Z[E.__cacheKey];re.usedTimes--,re.usedTimes===0&&b(I),Object.keys(Z).length===0&&f.delete(z)}n.remove(I)}function b(I){const E=n.get(I);s.deleteTexture(E.__webglTexture);const z=I.source,Z=f.get(z);delete Z[E.__cacheKey],a.memory.textures--}function v(I){const E=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(E.__webglFramebuffer[Z]))for(let re=0;re<E.__webglFramebuffer[Z].length;re++)s.deleteFramebuffer(E.__webglFramebuffer[Z][re]);else s.deleteFramebuffer(E.__webglFramebuffer[Z]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[Z])}else{if(Array.isArray(E.__webglFramebuffer))for(let Z=0;Z<E.__webglFramebuffer.length;Z++)s.deleteFramebuffer(E.__webglFramebuffer[Z]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Z=0;Z<E.__webglColorRenderbuffer.length;Z++)E.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[Z]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const z=I.textures;for(let Z=0,re=z.length;Z<re;Z++){const te=n.get(z[Z]);te.__webglTexture&&(s.deleteTexture(te.__webglTexture),a.memory.textures--),n.remove(z[Z])}n.remove(I)}let L=0;function N(){L=0}function k(){const I=L;return I>=i.maxTextures&&qe("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),L+=1,I}function O(I){const E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function W(I,E){const z=n.get(I);if(I.isVideoTexture&&Qe(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&z.__version!==I.version){const Z=I.image;if(Z===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{Q(z,I,E);return}}else I.isExternalTexture&&(z.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+E)}function X(I,E){const z=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&z.__version!==I.version){Q(z,I,E);return}else I.isExternalTexture&&(z.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+E)}function K(I,E){const z=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&z.__version!==I.version){Q(z,I,E);return}t.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+E)}function q(I,E){const z=n.get(I);if(I.version>0&&z.__version!==I.version){ee(z,I,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+E)}const D={[ws]:s.REPEAT,[Wi]:s.CLAMP_TO_EDGE,[jc]:s.MIRRORED_REPEAT},w={[On]:s.NEAREST,[Xp]:s.NEAREST_MIPMAP_NEAREST,[Qa]:s.NEAREST_MIPMAP_LINEAR,[mn]:s.LINEAR,[Nc]:s.LINEAR_MIPMAP_NEAREST,[pr]:s.LINEAR_MIPMAP_LINEAR},$={[L_]:s.NEVER,[k_]:s.ALWAYS,[N_]:s.LESS,[tm]:s.LEQUAL,[U_]:s.EQUAL,[B_]:s.GEQUAL,[F_]:s.GREATER,[O_]:s.NOTEQUAL};function oe(I,E){if(E.type===Li&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===mn||E.magFilter===Nc||E.magFilter===Qa||E.magFilter===pr||E.minFilter===mn||E.minFilter===Nc||E.minFilter===Qa||E.minFilter===pr)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,D[E.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,D[E.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,D[E.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,w[E.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,w[E.minFilter]),E.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,$[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===On||E.minFilter!==Qa&&E.minFilter!==pr||E.type===Li&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function fe(I,E){let z=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",A));const Z=E.source;let re=f.get(Z);re===void 0&&(re={},f.set(Z,re));const te=O(E);if(te!==I.__cacheKey){re[te]===void 0&&(re[te]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,z=!0),re[te].usedTimes++;const we=re[I.__cacheKey];we!==void 0&&(re[I.__cacheKey].usedTimes--,we.usedTimes===0&&b(E)),I.__cacheKey=te,I.__webglTexture=re[te].texture}return z}function he(I,E,z){return Math.floor(Math.floor(I/z)/E)}function be(I,E,z,Z){const te=I.updateRanges;if(te.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,z,Z,E.data);else{te.sort((ae,ce)=>ae.start-ce.start);let we=0;for(let ae=1;ae<te.length;ae++){const ce=te[we],ke=te[ae],Fe=ce.start+ce.count,ye=he(ke.start,E.width,4),Ge=he(ce.start,E.width,4);ke.start<=Fe+1&&ye===Ge&&he(ke.start+ke.count-1,E.width,4)===ye?ce.count=Math.max(ce.count,ke.start+ke.count-ce.start):(++we,te[we]=ke)}te.length=we+1;const pe=s.getParameter(s.UNPACK_ROW_LENGTH),Ue=s.getParameter(s.UNPACK_SKIP_PIXELS),ve=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let ae=0,ce=te.length;ae<ce;ae++){const ke=te[ae],Fe=Math.floor(ke.start/4),ye=Math.ceil(ke.count/4),Ge=Fe%E.width,T=Math.floor(Fe/E.width),H=ye,J=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ge),s.pixelStorei(s.UNPACK_SKIP_ROWS,T),t.texSubImage2D(s.TEXTURE_2D,0,Ge,T,H,J,z,Z,E.data)}I.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,pe),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ue),s.pixelStorei(s.UNPACK_SKIP_ROWS,ve)}}function Q(I,E,z){let Z=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Z=s.TEXTURE_3D);const re=fe(I,E),te=E.source;t.bindTexture(Z,I.__webglTexture,s.TEXTURE0+z);const we=n.get(te);if(te.version!==we.__version||re===!0){t.activeTexture(s.TEXTURE0+z);const pe=mt.getPrimaries(mt.workingColorSpace),Ue=E.colorSpace===Fr?null:mt.getPrimaries(E.colorSpace),ve=E.colorSpace===Fr||pe===Ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let ae=g(E.image,!1,i.maxTextureSize);ae=de(E,ae);const ce=r.convert(E.format,E.colorSpace),ke=r.convert(E.type);let Fe=y(E.internalFormat,ce,ke,E.colorSpace,E.isVideoTexture);oe(Z,E);let ye;const Ge=E.mipmaps,T=E.isVideoTexture!==!0,H=we.__version===void 0||re===!0,J=te.dataReady,ne=S(E,ae);if(E.isDepthTexture)Fe=M(E.format===wo,E.type),H&&(T?t.texStorage2D(s.TEXTURE_2D,1,Fe,ae.width,ae.height):t.texImage2D(s.TEXTURE_2D,0,Fe,ae.width,ae.height,0,ce,ke,null));else if(E.isDataTexture)if(Ge.length>0){T&&H&&t.texStorage2D(s.TEXTURE_2D,ne,Fe,Ge[0].width,Ge[0].height);for(let se=0,ie=Ge.length;se<ie;se++)ye=Ge[se],T?J&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,ye.width,ye.height,ce,ke,ye.data):t.texImage2D(s.TEXTURE_2D,se,Fe,ye.width,ye.height,0,ce,ke,ye.data);E.generateMipmaps=!1}else T?(H&&t.texStorage2D(s.TEXTURE_2D,ne,Fe,ae.width,ae.height),J&&be(E,ae,ce,ke)):t.texImage2D(s.TEXTURE_2D,0,Fe,ae.width,ae.height,0,ce,ke,ae.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){T&&H&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ne,Fe,Ge[0].width,Ge[0].height,ae.depth);for(let se=0,ie=Ge.length;se<ie;se++)if(ye=Ge[se],E.format!==bi)if(ce!==null)if(T){if(J)if(E.layerUpdates.size>0){const ge=Rd(ye.width,ye.height,E.format,E.type);for(const Ie of E.layerUpdates){const rt=ye.data.subarray(Ie*ge/ye.data.BYTES_PER_ELEMENT,(Ie+1)*ge/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,Ie,ye.width,ye.height,1,ce,rt)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,ye.width,ye.height,ae.depth,ce,ye.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,se,Fe,ye.width,ye.height,ae.depth,0,ye.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else T?J&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,ye.width,ye.height,ae.depth,ce,ke,ye.data):t.texImage3D(s.TEXTURE_2D_ARRAY,se,Fe,ye.width,ye.height,ae.depth,0,ce,ke,ye.data)}else{T&&H&&t.texStorage2D(s.TEXTURE_2D,ne,Fe,Ge[0].width,Ge[0].height);for(let se=0,ie=Ge.length;se<ie;se++)ye=Ge[se],E.format!==bi?ce!==null?T?J&&t.compressedTexSubImage2D(s.TEXTURE_2D,se,0,0,ye.width,ye.height,ce,ye.data):t.compressedTexImage2D(s.TEXTURE_2D,se,Fe,ye.width,ye.height,0,ye.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):T?J&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,ye.width,ye.height,ce,ke,ye.data):t.texImage2D(s.TEXTURE_2D,se,Fe,ye.width,ye.height,0,ce,ke,ye.data)}else if(E.isDataArrayTexture)if(T){if(H&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ne,Fe,ae.width,ae.height,ae.depth),J)if(E.layerUpdates.size>0){const se=Rd(ae.width,ae.height,E.format,E.type);for(const ie of E.layerUpdates){const ge=ae.data.subarray(ie*se/ae.data.BYTES_PER_ELEMENT,(ie+1)*se/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ie,ae.width,ae.height,1,ce,ke,ge)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,ce,ke,ae.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Fe,ae.width,ae.height,ae.depth,0,ce,ke,ae.data);else if(E.isData3DTexture)T?(H&&t.texStorage3D(s.TEXTURE_3D,ne,Fe,ae.width,ae.height,ae.depth),J&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,ce,ke,ae.data)):t.texImage3D(s.TEXTURE_3D,0,Fe,ae.width,ae.height,ae.depth,0,ce,ke,ae.data);else if(E.isFramebufferTexture){if(H)if(T)t.texStorage2D(s.TEXTURE_2D,ne,Fe,ae.width,ae.height);else{let se=ae.width,ie=ae.height;for(let ge=0;ge<ne;ge++)t.texImage2D(s.TEXTURE_2D,ge,Fe,se,ie,0,ce,ke,null),se>>=1,ie>>=1}}else if(Ge.length>0){if(T&&H){const se=Pe(Ge[0]);t.texStorage2D(s.TEXTURE_2D,ne,Fe,se.width,se.height)}for(let se=0,ie=Ge.length;se<ie;se++)ye=Ge[se],T?J&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,ce,ke,ye):t.texImage2D(s.TEXTURE_2D,se,Fe,ce,ke,ye);E.generateMipmaps=!1}else if(T){if(H){const se=Pe(ae);t.texStorage2D(s.TEXTURE_2D,ne,Fe,se.width,se.height)}J&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ce,ke,ae)}else t.texImage2D(s.TEXTURE_2D,0,Fe,ce,ke,ae);_(E)&&m(Z),we.__version=te.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function ee(I,E,z){if(E.image.length!==6)return;const Z=fe(I,E),re=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+z);const te=n.get(re);if(re.version!==te.__version||Z===!0){t.activeTexture(s.TEXTURE0+z);const we=mt.getPrimaries(mt.workingColorSpace),pe=E.colorSpace===Fr?null:mt.getPrimaries(E.colorSpace),Ue=E.colorSpace===Fr||we===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const ve=E.isCompressedTexture||E.image[0].isCompressedTexture,ae=E.image[0]&&E.image[0].isDataTexture,ce=[];for(let ie=0;ie<6;ie++)!ve&&!ae?ce[ie]=g(E.image[ie],!0,i.maxCubemapSize):ce[ie]=ae?E.image[ie].image:E.image[ie],ce[ie]=de(E,ce[ie]);const ke=ce[0],Fe=r.convert(E.format,E.colorSpace),ye=r.convert(E.type),Ge=y(E.internalFormat,Fe,ye,E.colorSpace),T=E.isVideoTexture!==!0,H=te.__version===void 0||Z===!0,J=re.dataReady;let ne=S(E,ke);oe(s.TEXTURE_CUBE_MAP,E);let se;if(ve){T&&H&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ne,Ge,ke.width,ke.height);for(let ie=0;ie<6;ie++){se=ce[ie].mipmaps;for(let ge=0;ge<se.length;ge++){const Ie=se[ge];E.format!==bi?Fe!==null?T?J&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge,0,0,Ie.width,Ie.height,Fe,Ie.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge,Ge,Ie.width,Ie.height,0,Ie.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):T?J&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge,0,0,Ie.width,Ie.height,Fe,ye,Ie.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge,Ge,Ie.width,Ie.height,0,Fe,ye,Ie.data)}}}else{if(se=E.mipmaps,T&&H){se.length>0&&ne++;const ie=Pe(ce[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ne,Ge,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(ae){T?J&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ce[ie].width,ce[ie].height,Fe,ye,ce[ie].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ge,ce[ie].width,ce[ie].height,0,Fe,ye,ce[ie].data);for(let ge=0;ge<se.length;ge++){const rt=se[ge].image[ie].image;T?J&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge+1,0,0,rt.width,rt.height,Fe,ye,rt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge+1,Ge,rt.width,rt.height,0,Fe,ye,rt.data)}}else{T?J&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Fe,ye,ce[ie]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ge,Fe,ye,ce[ie]);for(let ge=0;ge<se.length;ge++){const Ie=se[ge];T?J&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge+1,0,0,Fe,ye,Ie.image[ie]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge+1,Ge,Fe,ye,Ie.image[ie])}}}_(E)&&m(s.TEXTURE_CUBE_MAP),te.__version=re.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function le(I,E,z,Z,re,te){const we=r.convert(z.format,z.colorSpace),pe=r.convert(z.type),Ue=y(z.internalFormat,we,pe,z.colorSpace),ve=n.get(E),ae=n.get(z);if(ae.__renderTarget=E,!ve.__hasExternalTextures){const ce=Math.max(1,E.width>>te),ke=Math.max(1,E.height>>te);re===s.TEXTURE_3D||re===s.TEXTURE_2D_ARRAY?t.texImage3D(re,te,Ue,ce,ke,E.depth,0,we,pe,null):t.texImage2D(re,te,Ue,ce,ke,0,we,pe,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),_e(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,re,ae.__webglTexture,0,He(E)):(re===s.TEXTURE_2D||re>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,re,ae.__webglTexture,te),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ae(I,E,z){if(s.bindRenderbuffer(s.RENDERBUFFER,I),E.depthBuffer){const Z=E.depthTexture,re=Z&&Z.isDepthTexture?Z.type:null,te=M(E.stencilBuffer,re),we=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pe=He(E);_e(E)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pe,te,E.width,E.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,pe,te,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,te,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,we,s.RENDERBUFFER,I)}else{const Z=E.textures;for(let re=0;re<Z.length;re++){const te=Z[re],we=r.convert(te.format,te.colorSpace),pe=r.convert(te.type),Ue=y(te.internalFormat,we,pe,te.colorSpace),ve=He(E);z&&_e(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ve,Ue,E.width,E.height):_e(E)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ve,Ue,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Ue,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ue(I,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(E.depthTexture);Z.__renderTarget=E,(!Z.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),W(E.depthTexture,0);const re=Z.__webglTexture,te=He(E);if(E.depthTexture.format===Ao)_e(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,re,0,te):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,re,0);else if(E.depthTexture.format===wo)_e(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,re,0,te):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Ce(I){const E=n.get(I),z=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){const Z=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Z){const re=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Z.removeEventListener("dispose",re)};Z.addEventListener("dispose",re),E.__depthDisposeCallback=re}E.__boundDepthTexture=Z}if(I.depthTexture&&!E.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const Z=I.texture.mipmaps;Z&&Z.length>0?ue(E.__webglFramebuffer[0],I):ue(E.__webglFramebuffer,I)}else if(z){E.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[Z]),E.__webglDepthbuffer[Z]===void 0)E.__webglDepthbuffer[Z]=s.createRenderbuffer(),Ae(E.__webglDepthbuffer[Z],I,!1);else{const re=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,te=E.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,te),s.framebufferRenderbuffer(s.FRAMEBUFFER,re,s.RENDERBUFFER,te)}}else{const Z=I.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Ae(E.__webglDepthbuffer,I,!1);else{const re=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,te=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,te),s.framebufferRenderbuffer(s.FRAMEBUFFER,re,s.RENDERBUFFER,te)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ke(I,E,z){const Z=n.get(I);E!==void 0&&le(Z.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&Ce(I)}function xe(I){const E=I.texture,z=n.get(I),Z=n.get(E);I.addEventListener("dispose",R);const re=I.textures,te=I.isWebGLCubeRenderTarget===!0,we=re.length>1;if(we||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=E.version,a.memory.textures++),te){z.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer[pe]=[];for(let Ue=0;Ue<E.mipmaps.length;Ue++)z.__webglFramebuffer[pe][Ue]=s.createFramebuffer()}else z.__webglFramebuffer[pe]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer=[];for(let pe=0;pe<E.mipmaps.length;pe++)z.__webglFramebuffer[pe]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(we)for(let pe=0,Ue=re.length;pe<Ue;pe++){const ve=n.get(re[pe]);ve.__webglTexture===void 0&&(ve.__webglTexture=s.createTexture(),a.memory.textures++)}if(I.samples>0&&_e(I)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let pe=0;pe<re.length;pe++){const Ue=re[pe];z.__webglColorRenderbuffer[pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[pe]);const ve=r.convert(Ue.format,Ue.colorSpace),ae=r.convert(Ue.type),ce=y(Ue.internalFormat,ve,ae,Ue.colorSpace,I.isXRRenderTarget===!0),ke=He(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,ke,ce,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,z.__webglColorRenderbuffer[pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),Ae(z.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(te){t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),oe(s.TEXTURE_CUBE_MAP,E);for(let pe=0;pe<6;pe++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ue=0;Ue<E.mipmaps.length;Ue++)le(z.__webglFramebuffer[pe][Ue],I,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue);else le(z.__webglFramebuffer[pe],I,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);_(E)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let pe=0,Ue=re.length;pe<Ue;pe++){const ve=re[pe],ae=n.get(ve);let ce=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ce=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ce,ae.__webglTexture),oe(ce,ve),le(z.__webglFramebuffer,I,ve,s.COLOR_ATTACHMENT0+pe,ce,0),_(ve)&&m(ce)}t.unbindTexture()}else{let pe=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(pe=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(pe,Z.__webglTexture),oe(pe,E),E.mipmaps&&E.mipmaps.length>0)for(let Ue=0;Ue<E.mipmaps.length;Ue++)le(z.__webglFramebuffer[Ue],I,E,s.COLOR_ATTACHMENT0,pe,Ue);else le(z.__webglFramebuffer,I,E,s.COLOR_ATTACHMENT0,pe,0);_(E)&&m(pe),t.unbindTexture()}I.depthBuffer&&Ce(I)}function Ve(I){const E=I.textures;for(let z=0,Z=E.length;z<Z;z++){const re=E[z];if(_(re)){const te=x(I),we=n.get(re).__webglTexture;t.bindTexture(te,we),m(te),t.unbindTexture()}}}const U=[],Be=[];function F(I){if(I.samples>0){if(_e(I)===!1){const E=I.textures,z=I.width,Z=I.height;let re=s.COLOR_BUFFER_BIT;const te=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=n.get(I),pe=E.length>1;if(pe)for(let ve=0;ve<E.length;ve++)t.bindFramebuffer(s.FRAMEBUFFER,we.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,we.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);const Ue=I.texture.mipmaps;Ue&&Ue.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let ve=0;ve<E.length;ve++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(re|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(re|=s.STENCIL_BUFFER_BIT)),pe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,we.__webglColorRenderbuffer[ve]);const ae=n.get(E[ve]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ae,0)}s.blitFramebuffer(0,0,z,Z,0,0,z,Z,re,s.NEAREST),c===!0&&(U.length=0,Be.length=0,U.push(s.COLOR_ATTACHMENT0+ve),I.depthBuffer&&I.resolveDepthBuffer===!1&&(U.push(te),Be.push(te),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Be)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,U))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pe)for(let ve=0;ve<E.length;ve++){t.bindFramebuffer(s.FRAMEBUFFER,we.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,we.__webglColorRenderbuffer[ve]);const ae=n.get(E[ve]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,we.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.TEXTURE_2D,ae,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){const E=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function He(I){return Math.min(i.maxSamples,I.samples)}function _e(I){const E=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Qe(I){const E=a.render.frame;u.get(I)!==E&&(u.set(I,E),I.update())}function de(I,E){const z=I.colorSpace,Z=I.format,re=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||z!==Bn&&z!==Fr&&(mt.getTransfer(z)===At?(Z!==bi||re!==Zi)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):lt("WebGLTextures: Unsupported texture color space:",z)),E}function Pe(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=N,this.setTexture2D=W,this.setTexture2DArray=X,this.setTexture3D=K,this.setTextureCube=q,this.rebindTextures=Ke,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=F,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=le,this.useMultisampledRTT=_e}function JM(s,e){function t(n,i=Fr){let r;const a=mt.getTransfer(i);if(n===Zi)return s.UNSIGNED_BYTE;if(n===zh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Vh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Kp)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===jp)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===qp)return s.BYTE;if(n===Yp)return s.SHORT;if(n===To)return s.UNSIGNED_SHORT;if(n===kh)return s.INT;if(n===Rs)return s.UNSIGNED_INT;if(n===Li)return s.FLOAT;if(n===Na)return s.HALF_FLOAT;if(n===$p)return s.ALPHA;if(n===Zp)return s.RGB;if(n===bi)return s.RGBA;if(n===Ao)return s.DEPTH_COMPONENT;if(n===wo)return s.DEPTH_STENCIL;if(n===Gh)return s.RED;if(n===Hh)return s.RED_INTEGER;if(n===Wh)return s.RG;if(n===Xh)return s.RG_INTEGER;if(n===qh)return s.RGBA_INTEGER;if(n===Uc||n===Fc||n===Oc||n===Bc)if(a===At)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Uc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Oc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Bc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Uc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Oc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Bc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Nu||n===Uu||n===Fu||n===Ou)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Nu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Uu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ou)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Bu||n===ku||n===zu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Bu||n===ku)return a===At?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===zu)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Vu||n===Gu||n===Hu||n===Wu||n===Xu||n===qu||n===Yu||n===Ku||n===ju||n===$u||n===Zu||n===Ju||n===Qu||n===eh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Vu)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Gu)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Hu)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wu)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xu)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===qu)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Yu)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ku)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ju)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$u)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zu)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ju)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Qu)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===eh)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===th||n===nh||n===ih)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===th)return a===At?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===nh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ih)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rh||n===sh||n===ah||n===oh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===rh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===sh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ah)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===oh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Eo?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const QM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,e1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class t1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new dm(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Mr({vertexShader:QM,fragmentShader:e1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tt(new Hn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class n1 extends Ls{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,p=null;const g=typeof XRWebGLBinding<"u",_=new t1,m={},x=t.getContextAttributes();let y=null,M=null;const S=[],A=[],R=new it;let P=null;const b=new Un;b.viewport=new gt;const v=new Un;v.viewport=new gt;const L=[b,v],N=new ax;let k=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ee=S[Q];return ee===void 0&&(ee=new Yl,S[Q]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Q){let ee=S[Q];return ee===void 0&&(ee=new Yl,S[Q]=ee),ee.getGripSpace()},this.getHand=function(Q){let ee=S[Q];return ee===void 0&&(ee=new Yl,S[Q]=ee),ee.getHandSpace()};function W(Q){const ee=A.indexOf(Q.inputSource);if(ee===-1)return;const le=S[ee];le!==void 0&&(le.update(Q.inputSource,Q.frame,l||a),le.dispatchEvent({type:Q.type,data:Q.inputSource}))}function X(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",K);for(let Q=0;Q<S.length;Q++){const ee=A[Q];ee!==null&&(A[Q]=null,S[Q].disconnect(ee))}k=null,O=null,_.reset();for(const Q in m)delete m[Q];e.setRenderTarget(y),d=null,f=null,h=null,i=null,M=null,be.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&g&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(Q){if(i=Q,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",X),i.addEventListener("inputsourceschange",K),x.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(R),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,Ae=null,ue=null;x.depth&&(ue=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=x.stencil?wo:Ao,Ae=x.stencil?Eo:Rs);const Ce={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(Ce),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new Cs(f.textureWidth,f.textureHeight,{format:bi,type:Zi,depthTexture:new fm(f.textureWidth,f.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const le={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,le),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Cs(d.framebufferWidth,d.framebufferHeight,{format:bi,type:Zi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),be.setContext(i),be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(Q){for(let ee=0;ee<Q.removed.length;ee++){const le=Q.removed[ee],Ae=A.indexOf(le);Ae>=0&&(A[Ae]=null,S[Ae].disconnect(le))}for(let ee=0;ee<Q.added.length;ee++){const le=Q.added[ee];let Ae=A.indexOf(le);if(Ae===-1){for(let Ce=0;Ce<S.length;Ce++)if(Ce>=A.length){A.push(le),Ae=Ce;break}else if(A[Ce]===null){A[Ce]=le,Ae=Ce;break}if(Ae===-1)break}const ue=S[Ae];ue&&ue.connect(le)}}const q=new B,D=new B;function w(Q,ee,le){q.setFromMatrixPosition(ee.matrixWorld),D.setFromMatrixPosition(le.matrixWorld);const Ae=q.distanceTo(D),ue=ee.projectionMatrix.elements,Ce=le.projectionMatrix.elements,Ke=ue[14]/(ue[10]-1),xe=ue[14]/(ue[10]+1),Ve=(ue[9]+1)/ue[5],U=(ue[9]-1)/ue[5],Be=(ue[8]-1)/ue[0],F=(Ce[8]+1)/Ce[0],He=Ke*Be,_e=Ke*F,Qe=Ae/(-Be+F),de=Qe*-Be;if(ee.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(de),Q.translateZ(Qe),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),ue[10]===-1)Q.projectionMatrix.copy(ee.projectionMatrix),Q.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const Pe=Ke+Qe,I=xe+Qe,E=He-de,z=_e+(Ae-de),Z=Ve*xe/I*Pe,re=U*xe/I*Pe;Q.projectionMatrix.makePerspective(E,z,Z,re,Pe,I),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function $(Q,ee){ee===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ee.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(i===null)return;let ee=Q.near,le=Q.far;_.texture!==null&&(_.depthNear>0&&(ee=_.depthNear),_.depthFar>0&&(le=_.depthFar)),N.near=v.near=b.near=ee,N.far=v.far=b.far=le,(k!==N.near||O!==N.far)&&(i.updateRenderState({depthNear:N.near,depthFar:N.far}),k=N.near,O=N.far),N.layers.mask=Q.layers.mask|6,b.layers.mask=N.layers.mask&3,v.layers.mask=N.layers.mask&5;const Ae=Q.parent,ue=N.cameras;$(N,Ae);for(let Ce=0;Ce<ue.length;Ce++)$(ue[Ce],Ae);ue.length===2?w(N,b,v):N.projectionMatrix.copy(b.projectionMatrix),oe(Q,N,Ae)};function oe(Q,ee,le){le===null?Q.matrix.copy(ee.matrixWorld):(Q.matrix.copy(le.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ee.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ee.projectionMatrix),Q.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Sa*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(Q){c=Q,f!==null&&(f.fixedFoveation=Q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(N)},this.getCameraTexture=function(Q){return m[Q]};let fe=null;function he(Q,ee){if(u=ee.getViewerPose(l||a),p=ee,u!==null){const le=u.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let Ae=!1;le.length!==N.cameras.length&&(N.cameras.length=0,Ae=!0);for(let xe=0;xe<le.length;xe++){const Ve=le[xe];let U=null;if(d!==null)U=d.getViewport(Ve);else{const F=h.getViewSubImage(f,Ve);U=F.viewport,xe===0&&(e.setRenderTargetTextures(M,F.colorTexture,F.depthStencilTexture),e.setRenderTarget(M))}let Be=L[xe];Be===void 0&&(Be=new Un,Be.layers.enable(xe),Be.viewport=new gt,L[xe]=Be),Be.matrix.fromArray(Ve.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Ve.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(U.x,U.y,U.width,U.height),xe===0&&(N.matrix.copy(Be.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Ae===!0&&N.cameras.push(Be)}const ue=i.enabledFeatures;if(ue&&ue.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){h=n.getBinding();const xe=h.getDepthInformation(le[0]);xe&&xe.isValid&&xe.texture&&_.init(xe,i.renderState)}if(ue&&ue.includes("camera-access")&&g){e.state.unbindTexture(),h=n.getBinding();for(let xe=0;xe<le.length;xe++){const Ve=le[xe].camera;if(Ve){let U=m[Ve];U||(U=new dm,m[Ve]=U);const Be=h.getCameraImage(Ve);U.sourceTexture=Be}}}}for(let le=0;le<S.length;le++){const Ae=A[le],ue=S[le];Ae!==null&&ue!==void 0&&ue.update(Ae,ee,l||a)}fe&&fe(Q,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),p=null}const be=new bm;be.setAnimationLoop(he),this.setAnimationLoop=function(Q){fe=Q},this.dispose=function(){}}}const as=new Ji,i1=new tt;function r1(s,e){function t(_,m){_.matrixAutoUpdate===!0&&_.updateMatrix(),m.value.copy(_.matrix)}function n(_,m){m.color.getRGB(_.fogColor.value,om(s)),m.isFog?(_.fogNear.value=m.near,_.fogFar.value=m.far):m.isFogExp2&&(_.fogDensity.value=m.density)}function i(_,m,x,y,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(_,m):m.isMeshToonMaterial?(r(_,m),h(_,m)):m.isMeshPhongMaterial?(r(_,m),u(_,m)):m.isMeshStandardMaterial?(r(_,m),f(_,m),m.isMeshPhysicalMaterial&&d(_,m,M)):m.isMeshMatcapMaterial?(r(_,m),p(_,m)):m.isMeshDepthMaterial?r(_,m):m.isMeshDistanceMaterial?(r(_,m),g(_,m)):m.isMeshNormalMaterial?r(_,m):m.isLineBasicMaterial?(a(_,m),m.isLineDashedMaterial&&o(_,m)):m.isPointsMaterial?c(_,m,x,y):m.isSpriteMaterial?l(_,m):m.isShadowMaterial?(_.color.value.copy(m.color),_.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(_,m){_.opacity.value=m.opacity,m.color&&_.diffuse.value.copy(m.color),m.emissive&&_.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(_.map.value=m.map,t(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.bumpMap&&(_.bumpMap.value=m.bumpMap,t(m.bumpMap,_.bumpMapTransform),_.bumpScale.value=m.bumpScale,m.side===qn&&(_.bumpScale.value*=-1)),m.normalMap&&(_.normalMap.value=m.normalMap,t(m.normalMap,_.normalMapTransform),_.normalScale.value.copy(m.normalScale),m.side===qn&&_.normalScale.value.negate()),m.displacementMap&&(_.displacementMap.value=m.displacementMap,t(m.displacementMap,_.displacementMapTransform),_.displacementScale.value=m.displacementScale,_.displacementBias.value=m.displacementBias),m.emissiveMap&&(_.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,_.emissiveMapTransform)),m.specularMap&&(_.specularMap.value=m.specularMap,t(m.specularMap,_.specularMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);const x=e.get(m),y=x.envMap,M=x.envMapRotation;y&&(_.envMap.value=y,as.copy(M),as.x*=-1,as.y*=-1,as.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),_.envMapRotation.value.setFromMatrix4(i1.makeRotationFromEuler(as)),_.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=m.reflectivity,_.ior.value=m.ior,_.refractionRatio.value=m.refractionRatio),m.lightMap&&(_.lightMap.value=m.lightMap,_.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,_.lightMapTransform)),m.aoMap&&(_.aoMap.value=m.aoMap,_.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,_.aoMapTransform))}function a(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,m.map&&(_.map.value=m.map,t(m.map,_.mapTransform))}function o(_,m){_.dashSize.value=m.dashSize,_.totalSize.value=m.dashSize+m.gapSize,_.scale.value=m.scale}function c(_,m,x,y){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.size.value=m.size*x,_.scale.value=y*.5,m.map&&(_.map.value=m.map,t(m.map,_.uvTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function l(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.rotation.value=m.rotation,m.map&&(_.map.value=m.map,t(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function u(_,m){_.specular.value.copy(m.specular),_.shininess.value=Math.max(m.shininess,1e-4)}function h(_,m){m.gradientMap&&(_.gradientMap.value=m.gradientMap)}function f(_,m){_.metalness.value=m.metalness,m.metalnessMap&&(_.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,_.metalnessMapTransform)),_.roughness.value=m.roughness,m.roughnessMap&&(_.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,_.roughnessMapTransform)),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)}function d(_,m,x){_.ior.value=m.ior,m.sheen>0&&(_.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),_.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(_.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,_.sheenColorMapTransform)),m.sheenRoughnessMap&&(_.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,_.sheenRoughnessMapTransform))),m.clearcoat>0&&(_.clearcoat.value=m.clearcoat,_.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(_.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,_.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(_.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===qn&&_.clearcoatNormalScale.value.negate())),m.dispersion>0&&(_.dispersion.value=m.dispersion),m.iridescence>0&&(_.iridescence.value=m.iridescence,_.iridescenceIOR.value=m.iridescenceIOR,_.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(_.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,_.iridescenceMapTransform)),m.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),m.transmission>0&&(_.transmission.value=m.transmission,_.transmissionSamplerMap.value=x.texture,_.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(_.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,_.transmissionMapTransform)),_.thickness.value=m.thickness,m.thicknessMap&&(_.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=m.attenuationDistance,_.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(_.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(_.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=m.specularIntensity,_.specularColor.value.copy(m.specularColor),m.specularColorMap&&(_.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,_.specularColorMapTransform)),m.specularIntensityMap&&(_.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,_.specularIntensityMapTransform))}function p(_,m){m.matcap&&(_.matcap.value=m.matcap)}function g(_,m){const x=e.get(m).light;_.referencePosition.value.setFromMatrixPosition(x.matrixWorld),_.nearDistance.value=x.shadow.camera.near,_.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function s1(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,y){const M=y.program;n.uniformBlockBinding(x,M)}function l(x,y){let M=i[x.id];M===void 0&&(p(x),M=u(x),i[x.id]=M,x.addEventListener("dispose",_));const S=y.program;n.updateUBOMapping(x,S);const A=e.render.frame;r[x.id]!==A&&(f(x),r[x.id]=A)}function u(x){const y=h();x.__bindingPointIndex=y;const M=s.createBuffer(),S=x.__size,A=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,S,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,M),M}function h(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const y=i[x.id],M=x.uniforms,S=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let A=0,R=M.length;A<R;A++){const P=Array.isArray(M[A])?M[A]:[M[A]];for(let b=0,v=P.length;b<v;b++){const L=P[b];if(d(L,A,b,S)===!0){const N=L.__offset,k=Array.isArray(L.value)?L.value:[L.value];let O=0;for(let W=0;W<k.length;W++){const X=k[W],K=g(X);typeof X=="number"||typeof X=="boolean"?(L.__data[0]=X,s.bufferSubData(s.UNIFORM_BUFFER,N+O,L.__data)):X.isMatrix3?(L.__data[0]=X.elements[0],L.__data[1]=X.elements[1],L.__data[2]=X.elements[2],L.__data[3]=0,L.__data[4]=X.elements[3],L.__data[5]=X.elements[4],L.__data[6]=X.elements[5],L.__data[7]=0,L.__data[8]=X.elements[6],L.__data[9]=X.elements[7],L.__data[10]=X.elements[8],L.__data[11]=0):(X.toArray(L.__data,O),O+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(x,y,M,S){const A=x.value,R=y+"_"+M;if(S[R]===void 0)return typeof A=="number"||typeof A=="boolean"?S[R]=A:S[R]=A.clone(),!0;{const P=S[R];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return S[R]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function p(x){const y=x.uniforms;let M=0;const S=16;for(let R=0,P=y.length;R<P;R++){const b=Array.isArray(y[R])?y[R]:[y[R]];for(let v=0,L=b.length;v<L;v++){const N=b[v],k=Array.isArray(N.value)?N.value:[N.value];for(let O=0,W=k.length;O<W;O++){const X=k[O],K=g(X),q=M%S,D=q%K.boundary,w=q+D;M+=D,w!==0&&S-w<K.storage&&(M+=S-w),N.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=M,M+=K.storage}}}const A=M%S;return A>0&&(M+=S-A),x.__size=M,x.__cache={},this}function g(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):qe("WebGLRenderer: Unsupported uniform value type.",x),y}function _(x){const y=x.target;y.removeEventListener("dispose",_);const M=a.indexOf(y.__bindingPointIndex);a.splice(M,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function m(){for(const x in i)s.deleteBuffer(i[x]);a=[],i={},r={}}return{bind:c,update:l,dispose:m}}const a1=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let lr=null;function o1(){return lr===null&&(lr=new Qh(a1,32,32,Wh,Na),lr.minFilter=mn,lr.magFilter=mn,lr.wrapS=Wi,lr.wrapT=Wi,lr.generateMipmaps=!1,lr.needsUpdate=!0),lr}class c1{constructor(e={}){const{canvas:t=z_(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const p=new Set([qh,Xh,Hh]),g=new Set([Zi,Rs,To,Eo,zh,Vh]),_=new Uint32Array(4),m=new Int32Array(4);let x=null,y=null;const M=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let R=!1;this._outputColorSpace=Lt;let P=0,b=0,v=null,L=-1,N=null;const k=new gt,O=new gt;let W=null;const X=new ze(0);let K=0,q=t.width,D=t.height,w=1,$=null,oe=null;const fe=new gt(0,0,q,D),he=new gt(0,0,q,D);let be=!1;const Q=new tf;let ee=!1,le=!1;const Ae=new tt,ue=new B,Ce=new gt,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xe=!1;function Ve(){return v===null?w:1}let U=n;function Be(C,G){return t.getContext(C,G)}try{const C={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bh}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",ie,!1),t.addEventListener("webglcontextcreationerror",ge,!1),U===null){const G="webgl2";if(U=Be(G,C),U===null)throw Be(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw C("WebGLRenderer: "+C.message),C}let F,He,_e,Qe,de,Pe,I,E,z,Z,re,te,we,pe,Ue,ve,ae,ce,ke,Fe,ye,Ge,T,H;function J(){F=new _b(U),F.init(),Ge=new JM(U,F),He=new ob(U,F,e,Ge),_e=new $M(U,F),He.reversedDepthBuffer&&f&&_e.buffers.depth.setReversed(!0),Qe=new vb(U),de=new OM,Pe=new ZM(U,F,_e,de,He,Ge,Qe),I=new lb(A),E=new mb(A),z=new Sx(U),T=new sb(U,z),Z=new gb(U,z,Qe,T),re=new bb(U,Z,z,Qe),ke=new yb(U,He,Pe),ve=new cb(de),te=new FM(A,I,E,F,He,T,ve),we=new r1(A,de),pe=new kM,Ue=new XM(F),ce=new rb(A,I,E,_e,re,d,c),ae=new KM(A,re,He),H=new s1(U,Qe,He,_e),Fe=new ab(U,F,Qe),ye=new xb(U,F,Qe),Qe.programs=te.programs,A.capabilities=He,A.extensions=F,A.properties=de,A.renderLists=pe,A.shadowMap=ae,A.state=_e,A.info=Qe}J();const ne=new n1(A,U);this.xr=ne,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const C=F.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=F.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return w},this.setPixelRatio=function(C){C!==void 0&&(w=C,this.setSize(q,D,!1))},this.getSize=function(C){return C.set(q,D)},this.setSize=function(C,G,j=!0){if(ne.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}q=C,D=G,t.width=Math.floor(C*w),t.height=Math.floor(G*w),j===!0&&(t.style.width=C+"px",t.style.height=G+"px"),this.setViewport(0,0,C,G)},this.getDrawingBufferSize=function(C){return C.set(q*w,D*w).floor()},this.setDrawingBufferSize=function(C,G,j){q=C,D=G,w=j,t.width=Math.floor(C*j),t.height=Math.floor(G*j),this.setViewport(0,0,C,G)},this.getCurrentViewport=function(C){return C.copy(k)},this.getViewport=function(C){return C.copy(fe)},this.setViewport=function(C,G,j,Y){C.isVector4?fe.set(C.x,C.y,C.z,C.w):fe.set(C,G,j,Y),_e.viewport(k.copy(fe).multiplyScalar(w).round())},this.getScissor=function(C){return C.copy(he)},this.setScissor=function(C,G,j,Y){C.isVector4?he.set(C.x,C.y,C.z,C.w):he.set(C,G,j,Y),_e.scissor(O.copy(he).multiplyScalar(w).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(C){_e.setScissorTest(be=C)},this.setOpaqueSort=function(C){$=C},this.setTransparentSort=function(C){oe=C},this.getClearColor=function(C){return C.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor(...arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha(...arguments)},this.clear=function(C=!0,G=!0,j=!0){let Y=0;if(C){let V=!1;if(v!==null){const me=v.texture.format;V=p.has(me)}if(V){const me=v.texture.type,Re=g.has(me),De=ce.getClearColor(),Me=ce.getClearAlpha(),Xe=De.r,Ye=De.g,Ne=De.b;Re?(_[0]=Xe,_[1]=Ye,_[2]=Ne,_[3]=Me,U.clearBufferuiv(U.COLOR,0,_)):(m[0]=Xe,m[1]=Ye,m[2]=Ne,m[3]=Me,U.clearBufferiv(U.COLOR,0,m))}else Y|=U.COLOR_BUFFER_BIT}G&&(Y|=U.DEPTH_BUFFER_BIT),j&&(Y|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",ie,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),ce.dispose(),pe.dispose(),Ue.dispose(),de.dispose(),I.dispose(),E.dispose(),re.dispose(),T.dispose(),H.dispose(),te.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",Ze),ne.removeEventListener("sessionend",We),je.stop()};function se(C){C.preventDefault(),Qc("WebGLRenderer: Context Lost."),R=!0}function ie(){Qc("WebGLRenderer: Context Restored."),R=!1;const C=Qe.autoReset,G=ae.enabled,j=ae.autoUpdate,Y=ae.needsUpdate,V=ae.type;J(),Qe.autoReset=C,ae.enabled=G,ae.autoUpdate=j,ae.needsUpdate=Y,ae.type=V}function ge(C){lt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ie(C){const G=C.target;G.removeEventListener("dispose",Ie),rt(G)}function rt(C){Ee(C),de.remove(C)}function Ee(C){const G=de.get(C).programs;G!==void 0&&(G.forEach(function(j){te.releaseProgram(j)}),C.isShaderMaterial&&te.releaseShaderCache(C))}this.renderBufferDirect=function(C,G,j,Y,V,me){G===null&&(G=Ke);const Re=V.isMesh&&V.matrixWorld.determinant()<0,De=Dt(C,G,j,Y,V);_e.setMaterial(Y,Re);let Me=j.index,Xe=1;if(Y.wireframe===!0){if(Me=Z.getWireframeAttribute(j),Me===void 0)return;Xe=2}const Ye=j.drawRange,Ne=j.attributes.position;let dt=Ye.start*Xe,Et=(Ye.start+Ye.count)*Xe;me!==null&&(dt=Math.max(dt,me.start*Xe),Et=Math.min(Et,(me.start+me.count)*Xe)),Me!==null?(dt=Math.max(dt,0),Et=Math.min(Et,Me.count)):Ne!=null&&(dt=Math.max(dt,0),Et=Math.min(Et,Ne.count));const Ht=Et-dt;if(Ht<0||Ht===1/0)return;T.setup(V,Y,De,j,Me);let Wt,Ct=Fe;if(Me!==null&&(Wt=z.get(Me),Ct=ye,Ct.setIndex(Wt)),V.isMesh)Y.wireframe===!0?(_e.setLineWidth(Y.wireframeLinewidth*Ve()),Ct.setMode(U.LINES)):Ct.setMode(U.TRIANGLES);else if(V.isLine){let $e=Y.linewidth;$e===void 0&&($e=1),_e.setLineWidth($e*Ve()),V.isLineSegments?Ct.setMode(U.LINES):V.isLineLoop?Ct.setMode(U.LINE_LOOP):Ct.setMode(U.LINE_STRIP)}else V.isPoints?Ct.setMode(U.POINTS):V.isSprite&&Ct.setMode(U.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Io("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ct.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(F.get("WEBGL_multi_draw"))Ct.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const $e=V._multiDrawStarts,Ot=V._multiDrawCounts,_t=V._multiDrawCount,Jn=Me?z.get(Me).bytesPerElement:1,Us=de.get(Y).currentProgram.getUniforms();for(let Qn=0;Qn<_t;Qn++)Us.setValue(U,"_gl_DrawID",Qn),Ct.render($e[Qn]/Jn,Ot[Qn])}else if(V.isInstancedMesh)Ct.renderInstances(dt,Ht,V.count);else if(j.isInstancedBufferGeometry){const $e=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Ot=Math.min(j.instanceCount,$e);Ct.renderInstances(dt,Ht,Ot)}else Ct.render(dt,Ht)};function Oe(C,G,j){C.transparent===!0&&C.side===fn&&C.forceSinglePass===!1?(C.side=qn,C.needsUpdate=!0,bt(C,G,j),C.side=br,C.needsUpdate=!0,bt(C,G,j),C.side=fn):bt(C,G,j)}this.compile=function(C,G,j=null){j===null&&(j=C),y=Ue.get(j),y.init(G),S.push(y),j.traverseVisible(function(V){V.isLight&&V.layers.test(G.layers)&&(y.pushLight(V),V.castShadow&&y.pushShadow(V))}),C!==j&&C.traverseVisible(function(V){V.isLight&&V.layers.test(G.layers)&&(y.pushLight(V),V.castShadow&&y.pushShadow(V))}),y.setupLights();const Y=new Set;return C.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const me=V.material;if(me)if(Array.isArray(me))for(let Re=0;Re<me.length;Re++){const De=me[Re];Oe(De,j,V),Y.add(De)}else Oe(me,j,V),Y.add(me)}),y=S.pop(),Y},this.compileAsync=function(C,G,j=null){const Y=this.compile(C,G,j);return new Promise(V=>{function me(){if(Y.forEach(function(Re){de.get(Re).currentProgram.isReady()&&Y.delete(Re)}),Y.size===0){V(C);return}setTimeout(me,10)}F.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Je=null;function Se(C){Je&&Je(C)}function Ze(){je.stop()}function We(){je.start()}const je=new bm;je.setAnimationLoop(Se),typeof self<"u"&&je.setContext(self),this.setAnimationLoop=function(C){Je=C,ne.setAnimationLoop(C),C===null?je.stop():je.start()},ne.addEventListener("sessionstart",Ze),ne.addEventListener("sessionend",We),this.render=function(C,G){if(G!==void 0&&G.isCamera!==!0){lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(G),G=ne.getCamera()),C.isScene===!0&&C.onBeforeRender(A,C,G,v),y=Ue.get(C,S.length),y.init(G),S.push(y),Ae.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Q.setFromProjectionMatrix(Ae,Xi,G.reversedDepth),le=this.localClippingEnabled,ee=ve.init(this.clippingPlanes,le),x=pe.get(C,M.length),x.init(),M.push(x),ne.enabled===!0&&ne.isPresenting===!0){const me=A.xr.getDepthSensingMesh();me!==null&&Gt(me,G,-1/0,A.sortObjects)}Gt(C,G,0,A.sortObjects),x.finish(),A.sortObjects===!0&&x.sort($,oe),xe=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,xe&&ce.addToRenderList(x,C),this.info.render.frame++,ee===!0&&ve.beginShadows();const j=y.state.shadowsArray;ae.render(j,C,G),ee===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=x.opaque,V=x.transmissive;if(y.setupLights(),G.isArrayCamera){const me=G.cameras;if(V.length>0)for(let Re=0,De=me.length;Re<De;Re++){const Me=me[Re];Ut(Y,V,C,Me)}xe&&ce.render(C);for(let Re=0,De=me.length;Re<De;Re++){const Me=me[Re];ct(x,C,Me,Me.viewport)}}else V.length>0&&Ut(Y,V,C,G),xe&&ce.render(C),ct(x,C,G);v!==null&&b===0&&(Pe.updateMultisampleRenderTarget(v),Pe.updateRenderTargetMipmap(v)),C.isScene===!0&&C.onAfterRender(A,C,G),T.resetDefaultState(),L=-1,N=null,S.pop(),S.length>0?(y=S[S.length-1],ee===!0&&ve.setGlobalState(A.clippingPlanes,y.state.camera)):y=null,M.pop(),M.length>0?x=M[M.length-1]:x=null};function Gt(C,G,j,Y){if(C.visible===!1)return;if(C.layers.test(G.layers)){if(C.isGroup)j=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(G);else if(C.isLight)y.pushLight(C),C.castShadow&&y.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Q.intersectsSprite(C)){Y&&Ce.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ae);const Re=re.update(C),De=C.material;De.visible&&x.push(C,Re,De,j,Ce.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Q.intersectsObject(C))){const Re=re.update(C),De=C.material;if(Y&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ce.copy(C.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Ce.copy(Re.boundingSphere.center)),Ce.applyMatrix4(C.matrixWorld).applyMatrix4(Ae)),Array.isArray(De)){const Me=Re.groups;for(let Xe=0,Ye=Me.length;Xe<Ye;Xe++){const Ne=Me[Xe],dt=De[Ne.materialIndex];dt&&dt.visible&&x.push(C,Re,dt,j,Ce.z,Ne)}}else De.visible&&x.push(C,Re,De,j,Ce.z,null)}}const me=C.children;for(let Re=0,De=me.length;Re<De;Re++)Gt(me[Re],G,j,Y)}function ct(C,G,j,Y){const{opaque:V,transmissive:me,transparent:Re}=C;y.setupLightsView(j),ee===!0&&ve.setGlobalState(A.clippingPlanes,j),Y&&_e.viewport(k.copy(Y)),V.length>0&&Yt(V,G,j),me.length>0&&Yt(me,G,j),Re.length>0&&Yt(Re,G,j),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Ut(C,G,j,Y){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[Y.id]===void 0&&(y.state.transmissionRenderTarget[Y.id]=new Cs(1,1,{generateMipmaps:!0,type:F.has("EXT_color_buffer_half_float")||F.has("EXT_color_buffer_float")?Na:Zi,minFilter:pr,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace}));const me=y.state.transmissionRenderTarget[Y.id],Re=Y.viewport||k;me.setSize(Re.z*A.transmissionResolutionScale,Re.w*A.transmissionResolutionScale);const De=A.getRenderTarget(),Me=A.getActiveCubeFace(),Xe=A.getActiveMipmapLevel();A.setRenderTarget(me),A.getClearColor(X),K=A.getClearAlpha(),K<1&&A.setClearColor(16777215,.5),A.clear(),xe&&ce.render(j);const Ye=A.toneMapping;A.toneMapping=Hr;const Ne=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),y.setupLightsView(Y),ee===!0&&ve.setGlobalState(A.clippingPlanes,Y),Yt(C,j,Y),Pe.updateMultisampleRenderTarget(me),Pe.updateRenderTargetMipmap(me),F.has("WEBGL_multisampled_render_to_texture")===!1){let dt=!1;for(let Et=0,Ht=G.length;Et<Ht;Et++){const Wt=G[Et],{object:Ct,geometry:$e,material:Ot,group:_t}=Wt;if(Ot.side===fn&&Ct.layers.test(Y.layers)){const Jn=Ot.side;Ot.side=qn,Ot.needsUpdate=!0,It(Ct,j,Y,$e,Ot,_t),Ot.side=Jn,Ot.needsUpdate=!0,dt=!0}}dt===!0&&(Pe.updateMultisampleRenderTarget(me),Pe.updateRenderTargetMipmap(me))}A.setRenderTarget(De,Me,Xe),A.setClearColor(X,K),Ne!==void 0&&(Y.viewport=Ne),A.toneMapping=Ye}function Yt(C,G,j){const Y=G.isScene===!0?G.overrideMaterial:null;for(let V=0,me=C.length;V<me;V++){const Re=C[V],{object:De,geometry:Me,group:Xe}=Re;let Ye=Re.material;Ye.allowOverride===!0&&Y!==null&&(Ye=Y),De.layers.test(j.layers)&&It(De,G,j,Me,Ye,Xe)}}function It(C,G,j,Y,V,me){C.onBeforeRender(A,G,j,Y,V,me),C.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),V.onBeforeRender(A,G,j,Y,C,me),V.transparent===!0&&V.side===fn&&V.forceSinglePass===!1?(V.side=qn,V.needsUpdate=!0,A.renderBufferDirect(j,G,Y,V,C,me),V.side=br,V.needsUpdate=!0,A.renderBufferDirect(j,G,Y,V,C,me),V.side=fn):A.renderBufferDirect(j,G,Y,V,C,me),C.onAfterRender(A,G,j,Y,V,me)}function bt(C,G,j){G.isScene!==!0&&(G=Ke);const Y=de.get(C),V=y.state.lights,me=y.state.shadowsArray,Re=V.state.version,De=te.getParameters(C,V.state,me,G,j),Me=te.getProgramCacheKey(De);let Xe=Y.programs;Y.environment=C.isMeshStandardMaterial?G.environment:null,Y.fog=G.fog,Y.envMap=(C.isMeshStandardMaterial?E:I).get(C.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&C.envMap===null?G.environmentRotation:C.envMapRotation,Xe===void 0&&(C.addEventListener("dispose",Ie),Xe=new Map,Y.programs=Xe);let Ye=Xe.get(Me);if(Ye!==void 0){if(Y.currentProgram===Ye&&Y.lightsStateVersion===Re)return kn(C,De),Ye}else De.uniforms=te.getUniforms(C),C.onBeforeCompile(De,A),Ye=te.acquireProgram(De,Me),Xe.set(Me,Ye),Y.uniforms=De.uniforms;const Ne=Y.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ne.clippingPlanes=ve.uniform),kn(C,De),Y.needsLights=pi(C),Y.lightsStateVersion=Re,Y.needsLights&&(Ne.ambientLightColor.value=V.state.ambient,Ne.lightProbe.value=V.state.probe,Ne.directionalLights.value=V.state.directional,Ne.directionalLightShadows.value=V.state.directionalShadow,Ne.spotLights.value=V.state.spot,Ne.spotLightShadows.value=V.state.spotShadow,Ne.rectAreaLights.value=V.state.rectArea,Ne.ltc_1.value=V.state.rectAreaLTC1,Ne.ltc_2.value=V.state.rectAreaLTC2,Ne.pointLights.value=V.state.point,Ne.pointLightShadows.value=V.state.pointShadow,Ne.hemisphereLights.value=V.state.hemi,Ne.directionalShadowMap.value=V.state.directionalShadowMap,Ne.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ne.spotShadowMap.value=V.state.spotShadowMap,Ne.spotLightMatrix.value=V.state.spotLightMatrix,Ne.spotLightMap.value=V.state.spotLightMap,Ne.pointShadowMap.value=V.state.pointShadowMap,Ne.pointShadowMatrix.value=V.state.pointShadowMatrix),Y.currentProgram=Ye,Y.uniformsList=null,Ye}function xt(C){if(C.uniformsList===null){const G=C.currentProgram.getUniforms();C.uniformsList=kc.seqWithValue(G.seq,C.uniforms)}return C.uniformsList}function kn(C,G){const j=de.get(C);j.outputColorSpace=G.outputColorSpace,j.batching=G.batching,j.batchingColor=G.batchingColor,j.instancing=G.instancing,j.instancingColor=G.instancingColor,j.instancingMorph=G.instancingMorph,j.skinning=G.skinning,j.morphTargets=G.morphTargets,j.morphNormals=G.morphNormals,j.morphColors=G.morphColors,j.morphTargetsCount=G.morphTargetsCount,j.numClippingPlanes=G.numClippingPlanes,j.numIntersection=G.numClipIntersection,j.vertexAlphas=G.vertexAlphas,j.vertexTangents=G.vertexTangents,j.toneMapping=G.toneMapping}function Dt(C,G,j,Y,V){G.isScene!==!0&&(G=Ke),Pe.resetTextureUnits();const me=G.fog,Re=Y.isMeshStandardMaterial?G.environment:null,De=v===null?A.outputColorSpace:v.isXRRenderTarget===!0?v.texture.colorSpace:Bn,Me=(Y.isMeshStandardMaterial?E:I).get(Y.envMap||Re),Xe=Y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ye=!!j.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ne=!!j.morphAttributes.position,dt=!!j.morphAttributes.normal,Et=!!j.morphAttributes.color;let Ht=Hr;Y.toneMapped&&(v===null||v.isXRRenderTarget===!0)&&(Ht=A.toneMapping);const Wt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Ct=Wt!==void 0?Wt.length:0,$e=de.get(Y),Ot=y.state.lights;if(ee===!0&&(le===!0||C!==N)){const wn=C===N&&Y.id===L;ve.setState(Y,C,wn)}let _t=!1;Y.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Ot.state.version||$e.outputColorSpace!==De||V.isBatchedMesh&&$e.batching===!1||!V.isBatchedMesh&&$e.batching===!0||V.isBatchedMesh&&$e.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&$e.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&$e.instancing===!1||!V.isInstancedMesh&&$e.instancing===!0||V.isSkinnedMesh&&$e.skinning===!1||!V.isSkinnedMesh&&$e.skinning===!0||V.isInstancedMesh&&$e.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&$e.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&$e.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&$e.instancingMorph===!1&&V.morphTexture!==null||$e.envMap!==Me||Y.fog===!0&&$e.fog!==me||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==ve.numPlanes||$e.numIntersection!==ve.numIntersection)||$e.vertexAlphas!==Xe||$e.vertexTangents!==Ye||$e.morphTargets!==Ne||$e.morphNormals!==dt||$e.morphColors!==Et||$e.toneMapping!==Ht||$e.morphTargetsCount!==Ct)&&(_t=!0):(_t=!0,$e.__version=Y.version);let Jn=$e.currentProgram;_t===!0&&(Jn=bt(Y,G,V));let Us=!1,Qn=!1,ka=!1;const Bt=Jn.getUniforms(),zn=$e.uniforms;if(_e.useProgram(Jn.program)&&(Us=!0,Qn=!0,ka=!0),Y.id!==L&&(L=Y.id,Qn=!0),Us||N!==C){_e.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Bt.setValue(U,"projectionMatrix",C.projectionMatrix),Bt.setValue(U,"viewMatrix",C.matrixWorldInverse);const Vn=Bt.map.cameraPosition;Vn!==void 0&&Vn.setValue(U,ue.setFromMatrixPosition(C.matrixWorld)),He.logarithmicDepthBuffer&&Bt.setValue(U,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Bt.setValue(U,"isOrthographic",C.isOrthographicCamera===!0),N!==C&&(N=C,Qn=!0,ka=!0)}if(V.isSkinnedMesh){Bt.setOptional(U,V,"bindMatrix"),Bt.setOptional(U,V,"bindMatrixInverse");const wn=V.skeleton;wn&&(wn.boneTexture===null&&wn.computeBoneTexture(),Bt.setValue(U,"boneTexture",wn.boneTexture,Pe))}V.isBatchedMesh&&(Bt.setOptional(U,V,"batchingTexture"),Bt.setValue(U,"batchingTexture",V._matricesTexture,Pe),Bt.setOptional(U,V,"batchingIdTexture"),Bt.setValue(U,"batchingIdTexture",V._indirectTexture,Pe),Bt.setOptional(U,V,"batchingColorTexture"),V._colorsTexture!==null&&Bt.setValue(U,"batchingColorTexture",V._colorsTexture,Pe));const mi=j.morphAttributes;if((mi.position!==void 0||mi.normal!==void 0||mi.color!==void 0)&&ke.update(V,j,Jn),(Qn||$e.receiveShadow!==V.receiveShadow)&&($e.receiveShadow=V.receiveShadow,Bt.setValue(U,"receiveShadow",V.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(zn.envMap.value=Me,zn.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&G.environment!==null&&(zn.envMapIntensity.value=G.environmentIntensity),zn.dfgLUT!==void 0&&(zn.dfgLUT.value=o1()),Qn&&(Bt.setValue(U,"toneMappingExposure",A.toneMappingExposure),$e.needsLights&&An(zn,ka),me&&Y.fog===!0&&we.refreshFogUniforms(zn,me),we.refreshMaterialUniforms(zn,Y,w,D,y.state.transmissionRenderTarget[C.id]),kc.upload(U,xt($e),zn,Pe)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(kc.upload(U,xt($e),zn,Pe),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Bt.setValue(U,"center",V.center),Bt.setValue(U,"modelViewMatrix",V.modelViewMatrix),Bt.setValue(U,"normalMatrix",V.normalMatrix),Bt.setValue(U,"modelMatrix",V.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const wn=Y.uniformsGroups;for(let Vn=0,El=wn.length;Vn<El;Vn++){const es=wn[Vn];H.update(es,Jn),H.bind(es,Jn)}}return Jn}function An(C,G){C.ambientLightColor.needsUpdate=G,C.lightProbe.needsUpdate=G,C.directionalLights.needsUpdate=G,C.directionalLightShadows.needsUpdate=G,C.pointLights.needsUpdate=G,C.pointLightShadows.needsUpdate=G,C.spotLights.needsUpdate=G,C.spotLightShadows.needsUpdate=G,C.rectAreaLights.needsUpdate=G,C.hemisphereLights.needsUpdate=G}function pi(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(C,G,j){const Y=de.get(C);Y.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),de.get(C.texture).__webglTexture=G,de.get(C.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:j,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,G){const j=de.get(C);j.__webglFramebuffer=G,j.__useDefaultFramebuffer=G===void 0};const en=U.createFramebuffer();this.setRenderTarget=function(C,G=0,j=0){v=C,P=G,b=j;let Y=!0,V=null,me=!1,Re=!1;if(C){const Me=de.get(C);if(Me.__useDefaultFramebuffer!==void 0)_e.bindFramebuffer(U.FRAMEBUFFER,null),Y=!1;else if(Me.__webglFramebuffer===void 0)Pe.setupRenderTarget(C);else if(Me.__hasExternalTextures)Pe.rebindTextures(C,de.get(C.texture).__webglTexture,de.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ne=C.depthTexture;if(Me.__boundDepthTexture!==Ne){if(Ne!==null&&de.has(Ne)&&(C.width!==Ne.image.width||C.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Pe.setupDepthRenderbuffer(C)}}const Xe=C.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Re=!0);const Ye=de.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ye[G])?V=Ye[G][j]:V=Ye[G],me=!0):C.samples>0&&Pe.useMultisampledRTT(C)===!1?V=de.get(C).__webglMultisampledFramebuffer:Array.isArray(Ye)?V=Ye[j]:V=Ye,k.copy(C.viewport),O.copy(C.scissor),W=C.scissorTest}else k.copy(fe).multiplyScalar(w).floor(),O.copy(he).multiplyScalar(w).floor(),W=be;if(j!==0&&(V=en),_e.bindFramebuffer(U.FRAMEBUFFER,V)&&Y&&_e.drawBuffers(C,V),_e.viewport(k),_e.scissor(O),_e.setScissorTest(W),me){const Me=de.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+G,Me.__webglTexture,j)}else if(Re){const Me=G;for(let Xe=0;Xe<C.textures.length;Xe++){const Ye=de.get(C.textures[Xe]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Xe,Ye.__webglTexture,j,Me)}}else if(C!==null&&j!==0){const Me=de.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Me.__webglTexture,j)}L=-1},this.readRenderTargetPixels=function(C,G,j,Y,V,me,Re,De=0){if(!(C&&C.isWebGLRenderTarget)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=de.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Re!==void 0&&(Me=Me[Re]),Me){_e.bindFramebuffer(U.FRAMEBUFFER,Me);try{const Xe=C.textures[De],Ye=Xe.format,Ne=Xe.type;if(!He.textureFormatReadable(Ye)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(Ne)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=C.width-Y&&j>=0&&j<=C.height-V&&(C.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+De),U.readPixels(G,j,Y,V,Ge.convert(Ye),Ge.convert(Ne),me))}finally{const Xe=v!==null?de.get(v).__webglFramebuffer:null;_e.bindFramebuffer(U.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(C,G,j,Y,V,me,Re,De=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=de.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Re!==void 0&&(Me=Me[Re]),Me)if(G>=0&&G<=C.width-Y&&j>=0&&j<=C.height-V){_e.bindFramebuffer(U.FRAMEBUFFER,Me);const Xe=C.textures[De],Ye=Xe.format,Ne=Xe.type;if(!He.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const dt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,dt),U.bufferData(U.PIXEL_PACK_BUFFER,me.byteLength,U.STREAM_READ),C.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+De),U.readPixels(G,j,Y,V,Ge.convert(Ye),Ge.convert(Ne),0);const Et=v!==null?de.get(v).__webglFramebuffer:null;_e.bindFramebuffer(U.FRAMEBUFFER,Et);const Ht=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await V_(U,Ht,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,dt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,me),U.deleteBuffer(dt),U.deleteSync(Ht),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,G=null,j=0){const Y=Math.pow(2,-j),V=Math.floor(C.image.width*Y),me=Math.floor(C.image.height*Y),Re=G!==null?G.x:0,De=G!==null?G.y:0;Pe.setTexture2D(C,0),U.copyTexSubImage2D(U.TEXTURE_2D,j,0,0,Re,De,V,me),_e.unbindTexture()};const tn=U.createFramebuffer(),on=U.createFramebuffer();this.copyTextureToTexture=function(C,G,j=null,Y=null,V=0,me=null){me===null&&(V!==0?(Io("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),me=V,V=0):me=0);let Re,De,Me,Xe,Ye,Ne,dt,Et,Ht;const Wt=C.isCompressedTexture?C.mipmaps[me]:C.image;if(j!==null)Re=j.max.x-j.min.x,De=j.max.y-j.min.y,Me=j.isBox3?j.max.z-j.min.z:1,Xe=j.min.x,Ye=j.min.y,Ne=j.isBox3?j.min.z:0;else{const mi=Math.pow(2,-V);Re=Math.floor(Wt.width*mi),De=Math.floor(Wt.height*mi),C.isDataArrayTexture?Me=Wt.depth:C.isData3DTexture?Me=Math.floor(Wt.depth*mi):Me=1,Xe=0,Ye=0,Ne=0}Y!==null?(dt=Y.x,Et=Y.y,Ht=Y.z):(dt=0,Et=0,Ht=0);const Ct=Ge.convert(G.format),$e=Ge.convert(G.type);let Ot;G.isData3DTexture?(Pe.setTexture3D(G,0),Ot=U.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(Pe.setTexture2DArray(G,0),Ot=U.TEXTURE_2D_ARRAY):(Pe.setTexture2D(G,0),Ot=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,G.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,G.unpackAlignment);const _t=U.getParameter(U.UNPACK_ROW_LENGTH),Jn=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Us=U.getParameter(U.UNPACK_SKIP_PIXELS),Qn=U.getParameter(U.UNPACK_SKIP_ROWS),ka=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Wt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Wt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Xe),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ye),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ne);const Bt=C.isDataArrayTexture||C.isData3DTexture,zn=G.isDataArrayTexture||G.isData3DTexture;if(C.isDepthTexture){const mi=de.get(C),wn=de.get(G),Vn=de.get(mi.__renderTarget),El=de.get(wn.__renderTarget);_e.bindFramebuffer(U.READ_FRAMEBUFFER,Vn.__webglFramebuffer),_e.bindFramebuffer(U.DRAW_FRAMEBUFFER,El.__webglFramebuffer);for(let es=0;es<Me;es++)Bt&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,de.get(C).__webglTexture,V,Ne+es),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,de.get(G).__webglTexture,me,Ht+es)),U.blitFramebuffer(Xe,Ye,Re,De,dt,Et,Re,De,U.DEPTH_BUFFER_BIT,U.NEAREST);_e.bindFramebuffer(U.READ_FRAMEBUFFER,null),_e.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(V!==0||C.isRenderTargetTexture||de.has(C)){const mi=de.get(C),wn=de.get(G);_e.bindFramebuffer(U.READ_FRAMEBUFFER,tn),_e.bindFramebuffer(U.DRAW_FRAMEBUFFER,on);for(let Vn=0;Vn<Me;Vn++)Bt?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,mi.__webglTexture,V,Ne+Vn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,mi.__webglTexture,V),zn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,wn.__webglTexture,me,Ht+Vn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,wn.__webglTexture,me),V!==0?U.blitFramebuffer(Xe,Ye,Re,De,dt,Et,Re,De,U.COLOR_BUFFER_BIT,U.NEAREST):zn?U.copyTexSubImage3D(Ot,me,dt,Et,Ht+Vn,Xe,Ye,Re,De):U.copyTexSubImage2D(Ot,me,dt,Et,Xe,Ye,Re,De);_e.bindFramebuffer(U.READ_FRAMEBUFFER,null),_e.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else zn?C.isDataTexture||C.isData3DTexture?U.texSubImage3D(Ot,me,dt,Et,Ht,Re,De,Me,Ct,$e,Wt.data):G.isCompressedArrayTexture?U.compressedTexSubImage3D(Ot,me,dt,Et,Ht,Re,De,Me,Ct,Wt.data):U.texSubImage3D(Ot,me,dt,Et,Ht,Re,De,Me,Ct,$e,Wt):C.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,me,dt,Et,Re,De,Ct,$e,Wt.data):C.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,me,dt,Et,Wt.width,Wt.height,Ct,Wt.data):U.texSubImage2D(U.TEXTURE_2D,me,dt,Et,Re,De,Ct,$e,Wt);U.pixelStorei(U.UNPACK_ROW_LENGTH,_t),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Jn),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Us),U.pixelStorei(U.UNPACK_SKIP_ROWS,Qn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ka),me===0&&G.generateMipmaps&&U.generateMipmap(Ot),_e.unbindTexture()},this.initRenderTarget=function(C){de.get(C).__webglFramebuffer===void 0&&Pe.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Pe.setTextureCube(C,0):C.isData3DTexture?Pe.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Pe.setTexture2DArray(C,0):Pe.setTexture2D(C,0),_e.unbindTexture()},this.resetState=function(){P=0,b=0,v=null,_e.reset(),T.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}}function l1(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,c=new Xt;let l=0;for(let u=0;u<s.length;++u){const h=s[u];let f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in h.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(h.morphAttributes[d])}if(e){let d;if(t)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,u),l+=d}}if(t){let u=0;const h=[];for(let f=0;f<s.length;++f){const d=s[f].index;for(let p=0;p<d.count;++p)h.push(d.getX(p)+u);u+=s[f].attributes.position.count}c.setIndex(h)}for(const u in r){const h=Jd(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(const u in a){const h=a[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let f=0;f<h;++f){const d=[];for(let g=0;g<a[u].length;++g)d.push(a[u][g][f]);const p=Jd(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(p)}}return c}function Jd(s){let e,t,n,i=-1,r=0;for(let l=0;l<s.length;++l){const u=s[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const a=new e(r),o=new Tn(a,t,n);let c=0;for(let l=0;l<s.length;++l){const u=s[l];if(u.isInterleavedBufferAttribute){const h=c/t;for(let f=0,d=u.count;f<d;f++)for(let p=0;p<t;p++){const g=u.getComponent(f,p);o.setComponent(f+h,p,g)}}else a.set(u.array,c);c+=u.count*t}return i!==void 0&&(o.gpuType=i),o}function Qd(s,e){if(e===C_)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===ch||e===Qp){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===ch)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function Am(s){const e=new Map;for(const t of s.children){if(t.geometry?.type!=="BoxGeometry"||t.isInstancedMesh)continue;const n=e.get(t.material)||[];n.push(t),e.set(t.material,n)}for(const[t,n]of e){if(n.length<4)continue;const i=n.map(o=>(o.updateMatrix(),o.geometry.clone().applyMatrix4(o.matrix))),r=l1(i);if(i.forEach(o=>o.dispose()),!r)continue;const a=new Tt(r,t);a.receiveShadow=!0,s.add(a);for(const o of n)s.remove(o),o.geometry.dispose()}}const Nr=document.createElement("dialog");document.body.append(Nr);for(const s of document.querySelectorAll("[data-panel]"))s.onclick=()=>{const e=s.dataset.panel==="chat";Nr.innerHTML='<button aria-label="Close">×</button><h2 style="font-size:30px">'+(e?"Ask about Oan":"Contact Oan")+"</h2><form>"+(e?'<label>What would you like to know about Oan?<input name="question" required maxlength="500"></label>':'<label>Name<input name="name" autocomplete="name" maxlength="100" required></label><label>Email<input name="email" type="email" autocomplete="email" maxlength="254" required></label><label>Subject<input name="subject" maxlength="150" required></label><label>Message<textarea name="message" required minlength="5" maxlength="4000"></textarea></label><input name="website" tabindex="-1" autocomplete="off">')+'<button>Send</button></form><output aria-live="polite"></output>',Nr.querySelector("button").onclick=()=>Nr.close(),Nr.setAttribute("aria-label",e?"Ask about Oan":"Contact Oan"),Nr.showModal();const t=Nr.querySelector("form"),n=Nr.querySelector("output"),i=t.querySelector("button");t.addEventListener("input",r=>r.target.setCustomValidity("")),t.addEventListener("submit",async r=>{r.preventDefault();const a=Object.fromEntries(new FormData(t));for(const o of t.querySelectorAll("[required]"))if(a[o.name]=o.value.trim(),a[o.name].length<Math.max(1,o.minLength)){o.setCustomValidity("Please enter more detail."),o.reportValidity();return}i.disabled=!0,n.textContent="Sending…";try{const o=await fetch(e?"/api/chat":"/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}),c=await o.json();if(o.ok){if(e||t.reset(),n.textContent=c.text,e&&c.sources?.length){const l=document.createElement("small");l.style.display="block",l.style.marginTop="12px",l.textContent="Knowledge retrieved: "+c.sources.join(" · "),n.append(l)}}else n.textContent=typeof c.detail=="string"?c.detail:"Please check the form."}catch{n.textContent="The portfolio server is unavailable. Please try again."}finally{i.disabled=!1}})};const vs=document.querySelector(".chapter-menu");vs.querySelector("nav").addEventListener("click",()=>{vs.open=!1});document.addEventListener("pointerdown",s=>{vs.contains(s.target)||(vs.open=!1)});document.addEventListener("keydown",s=>{s.key==="Escape"&&vs.open&&(vs.open=!1,vs.querySelector("summary").focus())});const ki={x:19.95,y:9.72,z:50.65,scale:1.08,facing:Math.PI-.27},u1=[20.88,11.02,46.99,19.95,10.13,50.56];function wm(s,e,t=!1){const n={value:0},i=new Rt,r=new Ni(new qi(.045,.048,1,6),new Ti({color:"#c7c0af"}),e.length),a=t?5:2.8;e.forEach(([o,c,l],u)=>{i.position.set(o,c+a/2,l),i.scale.set(1,a,1),i.updateMatrix(),r.setMatrixAt(u,i.matrix)}),s.add(r);for(const o of[!0,!1]){const c=document.createElement("canvas");c.width=512,c.height=256;const l=c.getContext("2d");if(l.fillStyle=o?"#153885":"#fffcf0",l.fillRect(0,0,512,256),l.fillStyle=o?"#a21b46":"#7761ae",o)for(let _=0;_<512;_+=128)l.fillRect(_,0,64,256);else l.beginPath(),l.moveTo(0,200),l.lineTo(430,0),l.lineTo(512,0),l.lineTo(512,40),l.lineTo(50,256),l.lineTo(0,256),l.fill();l.fillStyle=o?"#132759":"#fff9e9",l.fillRect(38,85,436,88),l.textAlign="center",l.fillStyle=o?"#ffcf6b":"#352a58",l.font="bold 63px Arial",l.fillText(o?"BARÇA":"MADRID",256,151);const u=new aa(c);u.colorSpace=Lt;const h=new Ti({map:u,side:fn,roughness:.94});h.onBeforeCompile=_=>{_.uniforms.windTime=n,_.vertexShader=`uniform float windTime;
`+_.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 float wave=windTime*3.4 + instanceMatrix[3].x*.38 + uv.x*7.0; transformed.z += uv.x*(.29*sin(wave)+.10*sin(wave*1.9+uv.y)); transformed.y += uv.x*(.09*cos(wave)-.16*uv.x);`)};const f=e.filter(([_])=>_<0===o),d=t?5.8:2.35,p=d*.54,g=new Ni(new Hn(d,p,15,5).translate(d/2,-p/2,0),h,f.length);f.forEach(([_,m,x,y],M)=>{i.position.set(_,m+a,x),i.rotation.set(0,y+.25*Math.sin(M*7),.07*Math.cos(M)),i.scale.setScalar(1),i.updateMatrix(),g.setMatrixAt(M,i.matrix)}),s.add(g)}return o=>{n.value=o}}function h1(s){const e=new hn;s.add(e);const t=(T,H=0)=>new Ti({color:T,roughness:.78,metalness:.08,emissive:T,emissiveIntensity:H}),n=t("#101a31"),i=t("#23304a"),r=t("#39445e"),a=t("#53657e",.02),o=t("#173577"),c=t("#284f9a"),l=t("#183f4c"),u=t("#087642"),h=t("#11874b"),f=t("#eaf6f5",.25),d=t("#478ff9",1.4),p=t("#9ac7ff",1.9),g=t("#f5c773",1.5),_=document.createElement("canvas");_.width=_.height=512;const m=_.getContext("2d");m.fillStyle="#187844",m.fillRect(0,0,512,512);let x=741;for(let T=0;T<18e3;T++){x=x*16807%2147483647;const H=x%512;x=x*16807%2147483647;const J=x%512;m.fillStyle=x%2?"rgba(183,220,139,.10)":"rgba(2,38,25,.12)",m.fillRect(H,J,1+x%3,1)}const y=new aa(_);y.colorSpace=Lt,y.wrapS=y.wrapT=ws,y.repeat.set(12,8),y.anisotropy=4;const M=new Ti({map:y,color:"#b5d4ad",roughness:.96});function S(T,H,J,ne,se,ie,ge,Ie=e){const rt=new Tt(new pn(T,H,J),ge);return rt.position.set(ne,se,ie),rt.receiveShadow=!0,Ie.add(rt),rt}S(209,3.1,172,0,-1.75,0,n),S(191,1,155,0,.1,0,i),S(119,.35,78,0,.95,0,u);const A=new Tt(new Hn(119,78),M);A.rotation.x=-Math.PI/2,A.position.y=1.129,A.receiveShadow=!0,e.add(A);for(let T=0;T<10;T++)T%2===0&&S(11.8,.018,77,-53.1+T*11.8,1.14,0,h);const R=1.168;function P(T,H,J,ne,se=f){const ie=[new B(T,R,H),new B(J,R,ne)];e.add(new _s(new Xt().setFromPoints(ie),new uo({color:se.color})))}P(-54,-34,54,-34),P(54,-34,54,34),P(54,34,-54,34),P(-54,34,-54,-34),P(0,-34,0,34);function b(T,H,J,ne){P(T,J,H,J),P(H,J,H,ne),P(H,ne,T,ne),P(T,ne,T,J)}for(const T of[-1,1])b(Math.min(T*54,T*38),Math.max(T*54,T*38),-20,20),b(Math.min(T*54,T*49),Math.max(T*54,T*49),-9,9);const v=[];for(let T=0;T<=96;T++){const H=T/96*Math.PI*2;v.push(new B(Math.cos(H)*9.15,R,Math.sin(H)*9.15))}e.add(new _s(new Xt().setFromPoints(v),new uo({color:"#e5f4e9"})));const L=new uo({color:"#a9bfd9",transparent:!0,opacity:.3});for(const T of[-1,1]){const H=T*54,J=H+T*4;S(.18,2.65,.18,H,2.5,-3.66,f),S(.18,2.65,.18,H,2.5,3.66,f),S(.18,.17,7.5,H,3.82,0,f),S(.11,.13,7.5,J,3.82,0,a);for(let ne=-3.65;ne<=3.66;ne+=.32){const se=[new B(H,3.8,ne),new B(J,3.8,ne),new B(J,1.2,ne)];e.add(new _s(new Xt().setFromPoints(se),L))}for(let ne=1.2;ne<3.8;ne+=.32)e.add(new _s(new Xt().setFromPoints([new B(J,ne,-3.66),new B(J,ne,3.66)]),L))}const N=14,k=[];for(let T=0;T<N;T++){const H=1.45+T*1.43,J=40+T*2.13,ne=62+T*2.23,se=T%3===0?c:T%3===1?o:n;for(const ie of[-1,1]){S(ne*2,1.32,2.12,0,H,ie*J,se),S(2.13,1.32,J*2,ie*ne,H,0,se);for(let ge=-ne+4;ge<ne-4;ge+=1.35)[-42,0,42].some(Ie=>Math.abs(Ie-ge)<2.6)||k.push([ge,H+1.18,ie*J,ie>0?Math.PI:0]);for(let ge=-J+4;ge<J-4;ge+=1.4)Math.abs(ge)<2.8||k.push([ie*ne,H+1.18,ge,ie>0?-Math.PI/2:Math.PI/2])}if(T===4||T===10)for(const ie of[-1,1])S(ne*2,1,1.25,0,H+1.4,ie*(J+1.1),d),S(1.25,1,J*2,ie*(ne+1.1),H+1.4,d)}for(const T of[-1,1])S(207,21,3.8,0,8.5,T*83,i),S(3.8,21,164,T*101,8.5,0,i),S(211,1.5,4.5,0,20,T*84,a),S(4.5,1.5,168,T*102,20,0,a),S(207,.72,.35,0,15.8,T*85,d),S(.35,.72,164,T*103,15.8,0,d),S(207,.27,.45,0,4,T*85,p),S(.45,.27,164,T*103,4,0,p);const O=t("#79848b"),W=t("#dcdacb");W.side=fn;const X=96,K=[],q=[],D=[],w=(T,H,J=0)=>new B((H?128:96)*Math.sign(Math.cos(T))*Math.pow(Math.abs(Math.cos(T)),.57),30+6*Math.cos(2*T)+(H?4:0)-J,(H?102:72)*Math.sign(Math.sin(T))*Math.pow(Math.abs(Math.sin(T)),.57));for(let T=0;T<=X;T++){const H=T*2*Math.PI/X,J=w(H,!1),ne=w(H,!0);if(K.push(...J.toArray(),...ne.toArray()),T===X)break;const se=T*2,ie=(T+1)*2*Math.PI/X;q.push(se,se+1,se+2,se+1,se+3,se+2),D.push(J,ne,w(H,!1,2),ne,J,w(ie,!1),w(H,!1,2),w(ie,!1,2),w(H,!1,2),w(ie,!1)),T%3===0&&D.push(ne,new B(ne.x*.84,0,ne.z*.84))}const $=new Xt;$.setAttribute("position",new Nt(K,3)),$.setIndex(q),$.computeVertexNormals();const oe=new Tt($,W);oe.castShadow=!0,e.add(oe);const fe=new B(0,1,0),he=new Rt,be=new Ni(new qi(.22,.22,1,8),O,D.length/2);for(let T=0;T<D.length;T+=2){const H=D[T],J=D[T+1],ne=J.clone().sub(H);he.position.copy(H).lerp(J,.5),he.scale.set(1,ne.length(),1),he.quaternion.setFromUnitVectors(fe,ne.normalize()),he.updateMatrix(),be.setMatrixAt(T/2,he.matrix)}e.add(be);const ee=k.filter(T=>Math.abs(T[2]-ki.z)<.1).reduce((T,H)=>Math.abs(H[0]-ki.x)<Math.abs(T[0]-ki.x)?H:T);k.splice(k.indexOf(ee),1);const le=new Ni(new pn(.95,.55,.2),o,k.length);k.forEach(([T,H,J,ne],se)=>{he.position.set(T-Math.sin(ne)*.32,H+.1,J-Math.cos(ne)*.32),he.rotation.set(-.12,ne,0),he.scale.setScalar(1),he.updateMatrix(),le.setMatrixAt(se,he.matrix)}),e.add(le);for(const T of[-54,54])for(const H of[-34,34]){S(.065,1.55,.065,T,1.93,H,f);const J=new Tt(new Hn(.53,.35),g);g.side=fn,J.position.set(T+.265,2.55,H),e.add(J)}for(const T of[-13,13]){S(10,.15,2.5,T,1.22,37,i),S(10,.12,2.6,T,3.65,37,a);for(const H of[-1,1])S(.12,2.4,2.5,T+H*5,2.43,37,a);for(let H=-4;H<=4;H++)S(.83,.15,.8,T+H,1.85,37,o),S(.83,.75,.12,T+H,2.15,37.4,c)}for(let T=-85;T<=85;T+=11.5)S(5.7,6.2,.18,T,9.7,-85.12,l);for(let T=-69;T<=69;T+=13)S(.18,5.5,6.1,-103.1,9.7,T,l),S(.18,5.5,6.1,103.1,9.7,T,l);const Ae=k.length,ue=new Ni(new Do(.25,.43,3,7),new Ti({roughness:.92}),Ae),Ce=new Ni(new Wr(.205,9,7),t("#c99a79"),Ae);ue.frustumCulled=!1,Ce.frustumCulled=!1;const Ke=new Rt;k.forEach(([T,H,J,ne],se)=>{Ke.position.set(T,H+.35,J),Ke.rotation.set(0,ne,0),Ke.scale.set(.95,.82,.78),Ke.updateMatrix(),ue.setMatrixAt(se,Ke.matrix),ue.setColorAt(se,new ze((T<0?["#99204a","#263c94","#622b53","#153173"]:["#fff5db","#ede8ea","#cfc3e0","#8672ae"])[se%4])),Ke.position.set(T,H+.91,J),Ke.scale.set(.88,.95,.88),Ke.updateMatrix(),Ce.setMatrixAt(se,Ke.matrix)}),ue.instanceMatrix.needsUpdate=!0,Ce.instanceMatrix.needsUpdate=!0,e.add(ue,Ce);const xe=30,Ve=xe*9/16,U=.18;S(xe+2*U,Ve+2*U,2,0,41,-66,n);const Be=document.createElement("canvas");Be.width=1024,Be.height=512;const F=Be.getContext("2d");F.fillStyle="#081834",F.fillRect(0,0,1024,512),F.fillStyle="#325fb2",F.fillRect(22,22,980,468),F.fillStyle="#06172e",F.fillRect(40,40,944,430),F.textAlign="center",F.fillStyle="#d7e8ff",F.font="900 94px Arial",F.fillText("EL CLÁSICO",512,220),F.font="900 83px Arial",F.fillText("BARÇA  :  MADRID",512,333),F.font="bold 27px Arial",F.letterSpacing="8px",F.fillStyle="#91baf6",F.fillText("THE FINAL • 2026",512,410);const He=new aa(Be);He.colorSpace=Lt;const _e=new Tt(new Hn(xe,Ve),new oi({map:He}));_e.position.set(0,41,-64.98),e.add(_e);for(const T of[-12.5,12.5])S(.9,12,.9,T,32,-67,a);for(const T of[-91,91])for(const H of[-71,71]){S(2.8,12,2.8,T,32,H,a),S(18,3.8,3.5,T,38.7,H,a);for(let ne=-7;ne<=7;ne+=2.35)S(1.7,2.2,.5,T+ne,38.6,H+(H>0?-2:2),p);const J=new xm("#e0f2ff",650,240,Math.PI/3.6,.9,1.2);J.position.set(T,42,H),J.target.position.set(0,0,0),e.add(J,J.target)}function Qe(T,H,J,ne,se=69,ie=9){const ge=document.createElement("canvas");ge.width=1200,ge.height=180;const Ie=ge.getContext("2d");Ie.fillStyle="#09183b",Ie.fillRect(0,0,1200,180),Ie.fillStyle="#a6ccff",Ie.fillRect(0,0,1200,8),Ie.fillStyle="#ffffff",Ie.textAlign="center",Ie.textBaseline="middle",Ie.font="900 82px Arial",Ie.fillText(T,600,97);const rt=new aa(ge);rt.colorSpace=Lt;const Ee=new Tt(new Hn(se,ie),new oi({map:rt,side:fn}));Ee.position.set(H,J,ne),e.add(Ee)}Qe("OAN  /  CREATOR’S LEAGUE",0,10,85.48),S(105,1.5,19,0,5.5,93,n),S(108,.45,21,0,7,93,d);for(let T=-45;T<=45;T+=10)S(1.4,8,1.6,T,.9,97,a),S(2.2,.5,1.8,T,5.4,97,p);for(let T=-44;T<=44;T+=8)S(3.8,3.1,.4,T,-.05,85.3,l);S(105,.5,16,0,-.6,96,r);for(const T of[-20,20])S(.45,.06,29,T,-.22,111,d);const de=t("#345665",.12),Pe=t("#8c969e");for(const T of[-1,1])for(let H=-96;H<=96;H+=4){S(3.72,5,.22,H,10,T*85.15,de);const J=S(.27,14,1.7,H,11,T*85.7,Pe);J.rotation.z=.14}const I=k.filter((T,H)=>H%67===0&&Math.abs(T[0])>5).map(([T,H,J,ne])=>[T+.3,H+.35,J,ne]),E=wm(e,I,!0),z=document.createElement("canvas");z.width=2048,z.height=128;const Z=z.getContext("2d"),re=new aa(z);re.colorSpace=Lt;const te=new oi({map:re,side:fn});for(const T of[-1,1]){const H=new Tt(new Hn(205,1.05),te);H.position.set(0,16,T*85.24),T<0&&(H.rotation.y=Math.PI),e.add(H)}for(const T of[-1,1]){const H=new Tt(new Hn(114,1.65),te);H.position.set(0,2.02,T*38.6),H.rotation.y=T>0?Math.PI:0,e.add(H)}const we="OAN ALI  ·  NED GAMING & ANIMATION  ·  UNITY  ·  UNREAL ENGINE  ·  C#  ·  C++  ·  THREE.JS  ·  BLENDER  ·  REACT NATIVE  ·  PYTHON  ·  TECHFEST GAME JAM WINNER  ·  ";let pe=0,Ue=0;function ve(T){if(E(T),T-Ue<1/24)return;Ue=T,pe=T*110,Z.fillStyle="#07101f",Z.fillRect(0,0,2048,128),Z.fillStyle="#efbd5b",Z.fillRect(0,0,2048,7),Z.fillRect(0,121,2048,7),Z.font="bold 52px Arial",Z.textBaseline="middle";const H=we+we;Z.fillStyle="#f6f4ed";for(let J=-(pe%Z.measureText(we).width);J<2048;J+=Z.measureText(we).width)Z.fillText(H,J,67);re.needsUpdate=!0}let ae="";const ce=document.createElement("video");ce.muted=!0,ce.playsInline=!0,ce.loop=!0,ce.preload="metadata",ce.src="/media/Oan-Ali-Jumbotron.mp4";const ke=new zg(ce);ke.colorSpace=Lt;let Fe=!1;function ye(){ce.play().catch(T=>{T.name==="NotAllowedError"&&window.addEventListener("pointerdown",ye,{once:!0})})}ce.addEventListener("playing",()=>{_e.material.map=ke,_e.material.toneMapped=!1,_e.material.needsUpdate=!0},{once:!0});function Ge(T){if(T>2&&!Fe&&(Fe=!0,ye()),_e.material.map===ke)return;const H=T>9.35?"LET’S TALK":T>=9?"GOAL!":T>=8?"TECHFEST":T>=7?"UNREAL RACING":T>=6?"VR RAGE ROOM":T>=5?"2D PLATFORMER":T>=4?"KICK-OFF":(T>=2.5,"OAN ALI");if(ae===H)return;ae=H;const J={"LET’S TALK":"CONTACT OAN BELOW","GOAL!":"BARÇA   1 — 0   MADRID",TECHFEST:"GAME JAM WINNER","UNREAL RACING":"UNREAL ENGINE  /  TEAM PROJECT","VR RAGE ROOM":"UNITY XR  /  SOLO BUILD","2D PLATFORMER":"UNITY  /  FOURTEEN DAYS","KICK-OFF":"UNITY  /  UNREAL  /  THREE.JS","OAN ALI":"GAME DEVELOPER  •  KARACHI","EL CLÁSICO":"BARÇA   0 — 0   MADRID"};F.fillStyle="#101b32",F.fillRect(0,0,1024,512),F.fillStyle="#a7274a",F.fillRect(0,0,1024,20),F.fillStyle="#f4c970",F.fillRect(0,492,1024,20),F.textAlign="center",F.letterSpacing="2px",F.font="bold 38px Arial",F.fillText("CREATOR’S LEAGUE",512,103),F.font="900 110px Arial",F.fillStyle="#ffffff",F.fillText(H,512,290,950),F.font="bold 38px Arial",F.fillStyle="#bad3ff",F.fillText(J[H],512,405,960),He.needsUpdate=!0}return{root:e,update:ve,display:Ge}}function f1(s){const e=new hn;s.add(e);const t=(D,w=0)=>new Ti({color:D,roughness:.85,metalness:.04,emissive:D,emissiveIntensity:w}),n=t("#111d2c"),i=t("#121b2a"),r=t("#3b4659"),a=t("#778396"),o=t("#e6e5dc"),c=t("#eac777",.2),l=t("#121c31"),u=t("#142740"),h=t("#d9e9ff",1.3),f=t("#ffd69c",1.6),d=t("#173f45");function p(D,w,$,oe,fe,he,be,Q=e){const ee=new Tt(new pn(D,w,$),be);return ee.position.set(oe,fe,he),ee.receiveShadow=!0,Q.add(ee),ee}p(900,1,900,0,-5.2,0,n);for(const D of[-147,147]){p(900,.16,27,0,-4.59,D,i);for(let w=-430;w<430;w+=18)p(8,.035,.35,w,-4.48,D,c);for(const w of[-1,1])p(900,.45,7,0,-4.13,D+w*18,r),p(900,.22,.5,0,-4.32,D+w*14,a)}for(const D of[-143,143]){p(27,.16,900,D,-4.59,0,i);for(let w=-430;w<430;w+=18)p(.35,.035,8,D,-4.48,w,c);for(const w of[-1,1])p(7,.45,900,D+w*18,-4.13,0,r),p(.5,.22,900,D+w*14,-4.32,0,a)}p(215,.35,54,0,-2.8,118,r),p(155,.3,11,0,-2.4,139,r);for(let D=-100;D<=100;D+=10)p(.1,.045,53,D,-2.59,117,a);for(let D=97;D<137;D+=9)p(195,.04,.1,0,-2.57,D,a);for(const D of[-47,47])p(.35,.09,44,D,-2.54,114,h);for(let D=-48;D<=48;D+=5.4)p(2.8,.05,23,D,-4.45,147,o);for(const D of[-140,140])for(const w of[-147,147])for(let $=-8;$<=8;$+=5)p(2.6,.05,7,D+$,-4.42,w+21,o);let g=76432;function _(){return g=g*16807%2147483647,(g-1)/2147483646}const m=(D,w)=>D+(w-D)*_(),x=[];for(let D=0;D<1200;D++){let w,$;D<850?(w=-75+Math.floor(_()*8)*21+m(-8,8),$=m(103,133)):D<1020?(w=m(-98,-58),$=m(96,137)):(w=m(58,100),$=m(96,137)),Math.abs(w)<10&&$>108&&(w+=(w>=0?1:-1)*13),x.push({x:w,z:$,offset:m(0,Math.PI*2),height:m(1.2,1.8),team:Math.floor(_()*6)})}const y=new Ni(new Do(.28,.43,3,7),new Ti({roughness:.94}),x.length),M=new Ni(new Wr(.21,9,7),t("#c99273"),x.length);y.frustumCulled=!1,M.frustumCulled=!1;const S=new Rt;x.forEach((D,w)=>{y.setColorAt(w,new ze((D.x<0?["#ad244c","#213d91","#50284c"]:["#fff6e2","#ddd6e8","#8674ab"])[w%3]))}),e.add(y,M);const A=x.filter((D,w)=>w%23===0),R=wm(e,A.map(D=>[D.x+.27,-1.45,D.z,D.offset*.28])),P=new Ni(new Do(.115,.48,2,6),t("#2b3040"),x.length*2);e.add(P);function b(D){x.forEach((w,$)=>{const oe=$%23!==0&&$%3!==0,fe=oe?Math.sin(D*.24+w.offset)*2.4:0,he=oe?Math.sin(D*3.8+w.offset):0,be=w.z+fe;for(let ee=0;ee<2;ee++)S.position.set(w.x+(ee-.5)*.25,-2.25,be),S.rotation.set(he*(ee-.5)*.62,0,0),S.scale.setScalar(1),S.updateMatrix(),P.setMatrixAt($*2+ee,S.matrix);const Q=.06*Math.abs(Math.sin(D*2.6+w.offset));S.position.set(w.x,-1.53+Q,be),S.rotation.set(0,w.offset,0),S.scale.set(.95,w.height/1.75,.8),S.updateMatrix(),y.setMatrixAt($,S.matrix),S.position.set(w.x,-.78+Q+(w.height-1.5)*.3,be),S.scale.set(.9,.96,.9),S.updateMatrix(),M.setMatrixAt($,S.matrix)}),R(D),P.instanceMatrix.needsUpdate=!0,y.instanceMatrix.needsUpdate=!0,M.instanceMatrix.needsUpdate=!0}b(0);for(const[D,w]of[[-80,112],[-54,119],[57,119],[82,112],[-68,98],[68,98]]){p(.32,15,.32,D,4,w,a);const $=new Tt(new Hn(7,3.5),new Ti({color:"#3b82d7",side:fn,emissive:"#123c84",emissiveIntensity:.2}));$.position.set(D+3.4,10.1,w),e.add($),p(7.2,.3,.3,D+3.4,12,w,h)}for(const D of[-93,93])p(9,3.4,6,D,-.6,121,l),p(10,1,7,D,1.5,121,t("#315fae",.45)),p(6,1.4,.2,D,-.2,124.1,f);for(const D of[101,115,130])for(const w of[-108,108]){p(4,1,4,w,-2.2,D,a),p(.6,4,.6,w,.2,D,t("#66594b"));const $=new Tt(new Lo(2.9,1),d);$.position.set(w,3.4,D),e.add($)}for(const D of[-166,166])for(let w=-380;w<=380;w+=43)p(.4,10,.4,w,.8,D,r),p(3,.3,.4,w+1.3,5.9,D,r),p(1.4,.2,.9,w+2.45,5.7,D,f);for(const D of[-162,162])for(let w=-380;w<=380;w+=50)p(.4,10,.4,D,.8,w,r),p(.4,.3,3,D,5.9,w+1.2,r),p(.85,.2,1.3,D,5.7,w+2.4,f);for(const D of[-71,0,71]){const w=new vm("#9dc6ff",23,48,2);w.position.set(D,8,128),e.add(w),p(.75,13,.75,D,3.4,133,a),p(5,.7,2,D,10,133,h)}const v=["#14233d","#192943","#203149","#26334d","#1a3450"].map(D=>t(D)),L=[t("#6384b7",.22),t("#d7c28d",.65),t("#0f203b"),t("#92b8eb",.4)];function N(D,w,$,oe,fe,he){p($,fe,oe,D,-4.2+fe/2,w,v[he%v.length]),p($+1.1,.8,oe+1.1,D,-4.2+fe,w,r);const be=Math.max(2,Math.floor(fe/5.4)),Q=Math.max(2,Math.floor($/4)),ee=be*Q,le=new Ni(new Hn(1.3,2.1),new oi({side:fn}),ee);let Ae=0;for(let ue=0;ue<be;ue++)for(let Ce=0;Ce<Q;Ce++){S.position.set(D-$/2+(Ce+.5)*$/Q,-1+ue*5.1,w+oe/2+.07),S.rotation.set(0,0,0),S.scale.set(1,1,1),S.updateMatrix(),le.setMatrixAt(Ae,S.matrix);const Ke=L[Math.floor(_()*10)===0?1:(Ce+ue+he)%4];le.setColorAt(Ae,new ze(Ke.color)),Ae++}le.instanceMatrix.needsUpdate=!0,le.instanceColor.needsUpdate=!0,e.add(le),he%3===0&&p($*.36,3,oe*.3,D,-2.5+fe,w,a)}for(let D=-360;D<=360;D+=38)for(let w=-340;w<=340;w+=40){if(Math.abs(D)<195&&Math.abs(w)<195||Math.abs(Math.abs(D)-143)<35||Math.abs(Math.abs(w)-147)<35||_()<.16)continue;const $=m(20,29),oe=m(22,30),fe=m(20,68);N(D+m(-2,2),w+m(-2,2),$,oe,fe,Math.floor(_()*100))}const k=[];for(const D of[-123,123])for(const w of[-125,125]){p(.4,10,.4,D,.5,w,a),p(1.75,5,.85,D,6,w,l);const $=[];for(let oe=0;oe<3;oe++){const fe=new Tt(new Wr(.41,10,8),new oi({color:"#202c3d"}));fe.position.set(D,7.45-oe*1.5,w+.5),e.add(fe),$.push(fe)}k.push($)}for(const[D,w]of[[-48,"WEST  /  BARÇA"],[48,"EAST  /  MADRID"]]){const $=document.createElement("canvas");$.width=512,$.height=96;const oe=$.getContext("2d");oe.fillStyle=D<0?"#761738":"#362b58",oe.fillRect(0,0,512,96),oe.fillStyle="#fff4d8",oe.font="bold 50px Arial",oe.textAlign="center",oe.fillText(w,256,65);const fe=new aa($);fe.colorSpace=Lt;const he=new Tt(new Hn(17,3.2),new oi({map:fe,side:fn}));he.position.set(D,4.8,117),e.add(he);for(const be of[-8,8])p(.22,9,.22,D+be,1.5,117,a);for(let be=-6;be<=6;be+=4){p(.12,.12,11,D+be,-1.45,110,a);for(const Q of[105,110,115])p(.12,1.3,.12,D+be,-2,Q,a)}}const O=[],W=["#d75064","#e8effa","#3276d1","#e6b655","#708da9","#1d3f66"].map(D=>t(D));function X(D,w,$,oe){const fe=new hn;e.add(fe),p(5.6,1.3,2.6,0,0,0,W[Math.floor(_()*W.length)],fe),p(2.9,1.05,2.25,-.35,1.1,0,u,fe);for(const he of[-1.8,1.8])for(const be of[-1.25,1.25]){const Q=new Tt(new qi(.47,.47,.35,10),t("#090d15"));Q.rotation.x=Math.PI/2,Q.position.set(he,-.55,be),fe.add(Q)}for(const he of[-.9,.9])p(.13,.37,.42,2.84,.15,he,h,fe);fe.position.set(D==="x"?oe:w,-3.37,D==="z"?oe:w),fe.rotation.y=D==="x"?$?0:Math.PI:$?-Math.PI/2:Math.PI/2,O.push({g:fe,ax:D,forward:$?1:-1,speed:m(9,18)})}for(let D=0;D<42;D++){const w=D%2===0?"x":"z",$=D%4<2?1:-1;X(w,$*(w==="x"?141:137)+(D%3===0?3:-3),D%4===0||D%4===2,m(-410,410))}for(const D of[-106,106]){const w=new hn;e.add(w),p(6.2,5,15,0,0,0,t("#173f81"),w),p(6.35,1.6,14,0,1.25,0,u,w),p(6.5,.5,15,0,2.8,0,h,w);for(const $ of[-5.2,5.2])for(const oe of[-1,1]){const fe=new Tt(new qi(.92,.92,.35,12),t("#0b121f"));fe.rotation.z=Math.PI/2,fe.position.set(oe*3.1,-2.1,$),w.add(fe)}w.position.set(D,-1,169),w.rotation.y=Math.PI/2}let K=0;function q(D){const w=Math.min(Math.max(D-K,0),.07);K=D;for(const{g:$,ax:oe,forward:fe,speed:he}of O)$.position[oe]+=fe*he*w,$.position[oe]>430&&($.position[oe]=-430),$.position[oe]<-430&&($.position[oe]=430);k.forEach(($,oe)=>$.forEach((fe,he)=>fe.material.color.set(he===Math.floor((D+oe*3)/6)%3?["#f54e52","#ffc24c","#60f2a1"][he]:"#1d293b"))),b(D)}return{root:e,update:q}}class d1 extends Oa{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new x1(t)}),this.register(function(t){return new v1(t)}),this.register(function(t){return new R1(t)}),this.register(function(t){return new C1(t)}),this.register(function(t){return new P1(t)}),this.register(function(t){return new b1(t)}),this.register(function(t){return new M1(t)}),this.register(function(t){return new S1(t)}),this.register(function(t){return new T1(t)}),this.register(function(t){return new g1(t)}),this.register(function(t){return new E1(t)}),this.register(function(t){return new y1(t)}),this.register(function(t){return new w1(t)}),this.register(function(t){return new A1(t)}),this.register(function(t){return new m1(t)}),this.register(function(t){return new I1(t)}),this.register(function(t){return new D1(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=ho.extractUrlBase(e);a=ho.resolveURL(l,this.path)}else a=ho.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new gm(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Rm){try{a[ht.KHR_BINARY_GLTF]=new L1(e)}catch(h){i&&i(h);return}r=JSON.parse(a[ht.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new q1(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case ht.KHR_MATERIALS_UNLIT:a[h]=new _1;break;case ht.KHR_DRACO_MESH_COMPRESSION:a[h]=new N1(r,this.dracoLoader);break;case ht.KHR_TEXTURE_TRANSFORM:a[h]=new U1;break;case ht.KHR_MESH_QUANTIZATION:a[h]=new F1;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function p1(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const ht={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class m1{constructor(e){this.parser=e,this.name=ht.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new ze(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Bn);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new ym(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new vm(u),l.distance=h;break;case"spot":l=new xm(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Bi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class _1{constructor(){this.name=ht.KHR_MATERIALS_UNLIT}getMaterialType(){return oi}extendParams(e,t,n){const i=[];e.color=new ze(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Bn),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Lt))}return Promise.all(i)}}class g1{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class x1{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new it(o,o)}return Promise.all(r)}}class v1{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tr}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class y1{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class b1{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new ze(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Bn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Lt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class M1{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class S1{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new ze().setRGB(o[0],o[1],o[2],Bn),Promise.all(r)}}class T1{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tr}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class E1{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new ze().setRGB(o[0],o[1],o[2],Bn),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Lt)),Promise.all(r)}}class A1{constructor(e){this.parser=e,this.name=ht.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class w1{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class R1{constructor(e){this.parser=e,this.name=ht.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class C1{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class P1{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class I1{constructor(e){this.name=ht.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class D1{constructor(e){this.name=ht.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==xi.TRIANGLES&&l.mode!==xi.TRIANGLE_STRIP&&l.mode!==xi.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],f=l[0].count,d=[];for(const p of h){const g=new tt,_=new B,m=new Fi,x=new B(1,1,1),y=new Ni(p.geometry,p.material,f);for(let M=0;M<f;M++)c.TRANSLATION&&_.fromBufferAttribute(c.TRANSLATION,M),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,M),c.SCALE&&x.fromBufferAttribute(c.SCALE,M),y.setMatrixAt(M,g.compose(_,m,x));for(const M in c)if(M==="_COLOR_0"){const S=c[M];y.instanceColor=new uh(S.array,S.itemSize,S.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&p.geometry.setAttribute(M,c[M]);Rt.prototype.copy.call(y,p),this.parser.assignFinalMaterial(y),d.push(y)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const Rm="glTF",ja=12,ep={JSON:1313821514,BIN:5130562};class L1{constructor(e){this.name=ht.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ja),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Rm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ja,r=new DataView(e,ja);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===ep.JSON){const l=new Uint8Array(e,ja+a,o);this.content=n.decode(l)}else if(c===ep.BIN){const l=ja+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class N1{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ht.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const u in a){const h=ph[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=ph[u]||u.toLowerCase();if(a[u]!==void 0){const f=n.accessors[e.attributes[u]],d=fa[f.componentType];l[h]=d.name,c[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(const p in d.attributes){const g=d.attributes[p],_=c[p];_!==void 0&&(g.normalized=_)}h(d)},o,l,Bn,f)})})}}class U1{constructor(){this.name=ht.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class F1{constructor(){this.name=ht.KHR_MESH_QUANTIZATION}}class Cm extends Yo{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,p=e*l,g=p-l,_=-2*d+3*f,m=d-f,x=1-_,y=m-f+h;for(let M=0;M!==o;M++){const S=a[g+M+o],A=a[g+M+c]*u,R=a[p+M+o],P=a[p+M]*u;r[M]=x*S+y*A+_*R+m*P}return r}}const O1=new Fi;class B1 extends Cm{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return O1.fromArray(r).normalize().toArray(r),r}}const xi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},fa={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},tp={9728:On,9729:mn,9984:Xp,9985:Nc,9986:Qa,9987:pr},np={33071:Wi,33648:jc,10497:ws},au={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ph={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Lr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},k1={CUBICSPLINE:void 0,LINEAR:Co,STEP:Ro},ou={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function z1(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Ti({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:br})),s.DefaultMaterial}function os(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Bi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function V1(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;a.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;o.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;c.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],f=l[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function G1(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function H1(s){let e;const t=s.extensions&&s.extensions[ht.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+cu(t.attributes):e=s.indices+":"+cu(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+cu(s.targets[n]);return e}function cu(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function mh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function W1(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const X1=new tt;class q1{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new p1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new ex(this.options.manager):this.textureLoader=new sx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new gm(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return os(r,o,i),Bi(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,u]of a.children.entries())r(u,o.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ht.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(ho.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=au[i.type],o=fa[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new Tn(l,a,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=au[i.type],l=fa[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0;let g,_;if(d&&d!==h){const m=Math.floor(f/d),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let y=t.cache.get(x);y||(g=new l(o,m*d,i.count*d/u),y=new Cg(g,d/u),t.cache.add(x,y)),_=new Jh(y,c,f%d/u,p)}else o===null?g=new l(i.count*c):g=new l(o,f,i.count*c),_=new Tn(g,c,p);if(i.sparse!==void 0){const m=au.SCALAR,x=fa[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,S=new x(a[1],y,i.sparse.count*m),A=new l(a[2],M,i.sparse.count*c);o!==null&&(_=new Tn(_.array.slice(),_.itemSize,_.normalized)),_.normalized=!1;for(let R=0,P=S.length;R<P;R++){const b=S[R];if(_.setX(b,A[R*c]),c>=2&&_.setY(b,A[R*c+1]),c>=3&&_.setZ(b,A[R*c+2]),c>=4&&_.setW(b,A[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}_.normalized=p}return _})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const f=(r.samplers||{})[a.sampler]||{};return u.magFilter=tp[f.magFilter]||mn,u.minFilter=tp[f.minFilter]||pr,u.wrapS=np[f.wrapS]||ws,u.wrapT=np[f.wrapT]||ws,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==On&&u.minFilter!==mn,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=i.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){l=!0;const f=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(f,d){let p=f;t.isImageBitmapLoader===!0&&(p=function(g){const _=new Qt(g);_.needsUpdate=!0,f(_)}),t.load(ho.resolveURL(h,r.path),p,void 0,d)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),Bi(h,a),h.userData.mimeType=a.mimeType||W1(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[ht.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[ht.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[ht.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new hm,ji.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new uo,ji.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Ti}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},c=r.extensions||{},l=[];if(c[ht.KHR_MATERIALS_UNLIT]){const h=i[ht.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new ze(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],Bn),o.opacity=f[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,Lt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=fn);const u=r.alphaMode||ou.OPAQUE;if(u===ou.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===ou.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==oi&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new it(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==oi&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==oi){const h=r.emissiveFactor;o.emissive=new ze().setRGB(h[0],h[1],h[2],Bn)}return r.emissiveTexture!==void 0&&a!==oi&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Lt)),Promise.all(l).then(function(){const h=new a(o);return r.name&&(h.name=r.name),Bi(h,r),t.associations.set(h,{materials:e}),r.extensions&&os(i,h,r),h})}createUniqueName(e){const t=yt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[ht.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return ip(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],u=H1(l),h=i[u];if(h)a.push(h.promise);else{let f;l.extensions&&l.extensions[ht.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=ip(new Xt,l,t),i[u]={primitive:l,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const u=a[c].material===void 0?z1(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let d=0,p=u.length;d<p;d++){const g=u[d],_=a[d];let m;const x=l[d];if(_.mode===xi.TRIANGLES||_.mode===xi.TRIANGLE_STRIP||_.mode===xi.TRIANGLE_FAN||_.mode===void 0)m=r.isSkinnedMesh===!0?new Ig(g,x):new Tt(g,x),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),_.mode===xi.TRIANGLE_STRIP?m.geometry=Qd(m.geometry,Qp):_.mode===xi.TRIANGLE_FAN&&(m.geometry=Qd(m.geometry,ch));else if(_.mode===xi.LINES)m=new Og(g,x);else if(_.mode===xi.LINE_STRIP)m=new _s(g,x);else if(_.mode===xi.LINE_LOOP)m=new Bg(g,x);else if(_.mode===xi.POINTS)m=new kg(g,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+_.mode);Object.keys(m.geometry.morphAttributes).length>0&&G1(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Bi(m,r),_.extensions&&os(i,m,_),t.assignFinalMaterial(m),h.push(m)}for(let d=0,p=h.length;d<p;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&os(i,h[0],r),h[0];const f=new hn;r.extensions&&os(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,p=h.length;d<p;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Un(Pi.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new af(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Bi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],c=[];for(let l=0,u=a.length;l<u;l++){const h=a[l];if(h){o.push(h);const f=new tt;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ef(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const d=i.channels[h],p=i.samplers[d.sampler],g=d.target,_=g.node,m=i.parameters!==void 0?i.parameters[p.input]:p.input,x=i.parameters!==void 0?i.parameters[p.output]:p.output;g.node!==void 0&&(a.push(this.getDependency("node",_)),o.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",x)),l.push(p),u.push(g))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],p=h[2],g=h[3],_=h[4],m=[];for(let y=0,M=f.length;y<M;y++){const S=f[y],A=d[y],R=p[y],P=g[y],b=_[y];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const v=n._createAnimationTracks(S,A,R,P,b);if(v)for(let L=0;L<v.length;L++)m.push(v[L])}const x=new nl(r,void 0,m);return Bi(x,i),x})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const u=l[0],h=l[1],f=l[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,X1)});for(let d=0,p=h.length;d<p;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(r.isBone===!0?u=new um:l.length>1?u=new hn:l.length===1?u=l[0]:u=new Rt,u!==l[0])for(let h=0,f=l.length;h<f;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=a),Bi(u,r),r.extensions&&os(n,u,r),r.matrix!==void 0){const h=new tt;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new hn;n.name&&(r.name=i.createUniqueName(n.name)),Bi(r,n),n.extensions&&os(t,r,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);const l=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof ji||f instanceof Qt)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,c=[];Lr[r.path]===Lr.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(o);let l;switch(Lr[r.path]){case Lr.weights:l=Ea;break;case Lr.rotation:l=Aa;break;case Lr.translation:case Lr.scale:l=wa;break;default:n.itemSize===1?l=Ea:l=wa;break}const u=i.interpolation!==void 0?k1[i.interpolation]:Co,h=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){const p=new l(c[f]+"."+Lr[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),a.push(p)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=mh(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Aa?B1:Cm;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Y1(s,e,t){const n=e.attributes,i=new Er;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new B(c[0],c[1],c[2]),new B(l[0],l[1],l[2])),o.normalized){const u=mh(fa[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new B,c=new B;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,p=f.max;if(d!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(p[2]))),f.normalized){const g=mh(fa[f.componentType]);c.multiplyScalar(g)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new er;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function ip(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(const a in n){const o=ph[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return mt.workingColorSpace!==Bn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${mt.workingColorSpace}" not supported.`),Bi(s,e),Y1(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?V1(s,e.targets,t):s})}function K1(s,e,t){const n=new hn;s.add(n);const i=[],r=[],a={skin:16040334,hair:1644835,home:10297676,away:16119279,shorts:1518434,shoe:1119005,popcorn:16772013},o=(D,w=.47,$=0)=>new Ti({color:D,roughness:w,metalness:$}),c={head:new qi(.43,.43,.72,12),torso:new pn(.97,1.08,.56),leg:new pn(.34,.83,.4),arm:new qi(.2,.22,.84,10),hand:new Wr(.23,10,7),eye:new Wr(.055,8,6),hair:new qi(.45,.46,.22,12)};function l(D,w,$,oe=0,fe=0,he=0){const be=new Tt(D,w);return be.position.set(oe,fe,he),be.castShadow=!0,$.add(be),be}function u({shirt:D=a.home,pants:w=a.shorts,skin:$=a.skin,glasses:oe=!1,popcorn:fe=!1,seated:he=!1,x:be=0,y:Q=0,z:ee=0,scale:le=1,rotate:Ae=0}={}){const ue=new hn;ue.position.set(be,Q,ee),ue.rotation.y=Ae,ue.scale.setScalar(le),n.add(ue);const Ce=o(D),Ke=o(w),xe=o($),Ve=o(a.hair),U=o(a.shoe),Be=l(c.torso,Ce,ue,0,1.62,0),F=l(c.head,xe,ue,0,2.66,0);l(c.hair,Ve,ue,0,3.11,0);const He=[];for(const Pe of[-1,1]){l(c.eye,U,ue,Pe*.18,2.71,.42);const I=l(c.leg,Ke,ue,Pe*.245,he?.77:.47,he?.28:0);if(he)I.rotation.x=-Math.PI/2,I.position.y=.86,I.position.z=.43;else{const E=new hn;E.position.set(Pe*.245,.91,0),ue.add(E),E.add(I),I.position.set(0,-.44,0),l(new pn(.35,.17,.54),U,E,0,-.81,.1),He.push(E)}}const _e=new hn;_e.position.set(-.68,1.94,0),ue.add(_e);const Qe=new hn;Qe.position.set(.68,1.94,0),ue.add(Qe);for(const[Pe,I]of[[_e,-1],[Qe,1]]){const E=l(c.arm,Ce,Pe,0,-.39,0);E.rotation.z=I*.08,l(c.hand,xe,Pe,0,-.83,0)}if(oe){const Pe=o("#111827");for(const I of[-1,1]){const E=l(new rf(.225,.045,7,14),Pe,ue,I*.235,2.72,.445);E.rotation.x=0}l(new pn(.14,.045,.06),Pe,ue,0,2.72,.46)}let de;if(fe){de=new hn,ue.add(de),de.position.set(-.78,1.12,.49);const Pe=o("#da3551"),I=o("#fbeccf");l(new qi(.39,.28,.66,12),Pe,de,0,0,0);for(let E=-1;E<=1;E++)l(new pn(.065,.52,.015),I,de,E*.18,0,.33);for(let E=0;E<13;E++){const z=E*2.399,Z=E%3*.1;l(new Lo(.115,0),o(a.popcorn),de,Math.cos(z)*Z,.39+E%4*.03,Math.sin(z)*Z)}_e.rotation.x=-.48}return{pivot:ue,head:F,torso:Be,leftArm:_e,rightArm:Qe,bucket:de,hips:He}}const h=u({shirt:1847646,pants:1120295,glasses:!0,popcorn:!0,seated:!0,x:ki.x,y:ki.y-.45,z:ki.z,scale:.52,rotate:ki.facing}),f=o(1321831),{x:d,y:p,z:g}=ki;l(new pn(.78,.1,.66),f,n,d,p-.05,g);const _=l(new pn(.78,.57,.09),f,n,d,p+.24,g+.31);_.rotation.x=.1,l(new pn(.24,.43,.24),f,n,d,p-.28,g);const m=[];h.pivot.traverse(D=>{D.isMesh&&m.push(D)}),r.push(...m);let x,y,M;const S=document.querySelector("#greet-oan");function A(){y&&y.reset().play()}S.addEventListener("click",A),new d1().load("/models/Oan-Matchday.glb",D=>{const w=D.scene;w.position.set(d,p,g),w.rotation.y=ki.facing,w.scale.setScalar(ki.scale),n.add(w),h.pivot.visible=!1,r.length=0,w.traverse(oe=>{oe.isMesh&&(oe.castShadow=!0,r.push(oe))}),x=new yx(w);const $=nl.findByName(D.animations,"Wave");$&&(y=x.clipAction($),y.setLoop(Jp,1),S.hidden=!1)},void 0,D=>console.warn("Spectator model could not load.",D)),[[-33,-9,0],[-20,13,0],[-8,-4,0],[10,8,0],[24,-12,0],[36,5,0],[-35,15,1],[-18,-14,1],[0,16,1],[22,12,1],[39,-6,1]].forEach(([D,w,$],oe)=>{const fe=u({shirt:$?a.away:a.home,pants:$?4213081:a.shorts,x:D,y:1.25,z:w,scale:1.05,rotate:$?Math.PI/2:-Math.PI/2});l(new pn(.56,.12,.035),o($?4614332:16184560),fe.pivot,0,1.76,.301),i.push({player:fe,baseX:D,baseZ:w,phase:oe*1.1,team:$})});const P=new hn;n.add(P),P.position.set(-6,1.51,-3),l(new Wr(.58,16,12),o(16448250),P);for(let D=0;D<6;D++)l(new Lo(.16,0),o(1516091),P,Math.cos(D*Math.PI/3)*.52,Math.sin(D*2.1)*.18,Math.sin(D*Math.PI/3)*.52).lookAt(0,0,0);const b=new bx,v=new it;let L=!1,N=!1;const k=document.getElementById("avatar-hint");function O(D){return!N||!y||D.target?.closest?.("button, a, nav, dialog, summary")?!1:(v.set(D.clientX/innerWidth*2-1,1-D.clientY/innerHeight*2),b.setFromCamera(v,t),b.intersectObjects(r,!1).length>0)}function W(D){D!==L&&(L=D,document.body.classList.toggle("avatar-hover",L),k?.classList.toggle("visible",L))}function X(D){D.pointerType!=="touch"&&W(O(D))}function K(D){O(D)&&A()}window.addEventListener("pointermove",X,{passive:!0}),window.addEventListener("click",K);function q(D,w=0){N=Math.abs(w-2)<.5,N||W(!1),x?.update(M===void 0?0:Math.min(.1,D-M)),M=D;const $=L?-2.4+Math.sin(D*9)*.27:-.08+Math.sin(D*1.4)*.06;h.rightArm.rotation.z=Pi.lerp(h.rightArm.rotation.z,$,.12),h.head.rotation.y=Pi.lerp(h.head.rotation.y,L?-.55:0,.08),h.bucket.rotation.z=Math.sin(D*1.3)*.025;const oe=[0,2,3,4,5],fe=Math.min(4,Math.max(0,Math.floor(w-4))),he=i[oe[fe]],be=i[oe[fe+1]],Q=be?.baseX??56,ee=be?.baseZ??0,le=Math.atan2(Q-he.baseX,ee-he.baseZ),Ae=Math.sin(le),ue=Math.cos(le),Ce=w>=9?1:D%4/4,Ke=.43,xe=.83,Ve=Pi.smoothstep(Ce,Ke,xe),U=he.baseX+Ae*.92,Be=he.baseZ+ue*.92;P.position.set(Pi.lerp(U,Q-Ae*.85,Ve),1.75+Math.sin(Ve*Math.PI)*(be?.55:1.6),Pi.lerp(Be,ee-ue*.85,Ve)),P.rotation.x=-Ve*16;for(const F of i){const{player:He,baseX:_e,baseZ:Qe,phase:de}=F;let Pe=_e,I=Qe,E=le,z=Math.sin(D*8+de);if(F===he){const Z=1-Pi.smoothstep(Ce,0,Ke);Pe-=Ae*4*Z,I-=ue*4*Z,z*=Z}else if(F===be){const Z=1-Pi.smoothstep(Ce,.15,xe);Pe+=Ae*3*Z,I+=ue*3*Z,E=le+Math.PI,z*=Z}else{const Z=D*.68+de;Pe+=2.8*Math.sin(Z),I+=1.8*Math.cos(Z),E=Math.atan2(2.8*Math.cos(Z),-1.8*Math.sin(Z))}if(He.pivot.position.set(Pe,1.2+.095*Math.abs(z),I),He.pivot.rotation.y=E,He.hips[0].rotation.x=z*.72,He.hips[1].rotation.x=-z*.72,He.leftArm.rotation.x=-z*.55,He.rightArm.rotation.x=z*.55,F===he){const Z=Math.exp(-((Ce-.355)**2)/.0015),re=Math.exp(-((Ce-Ke)**2)/.0013);He.hips[1].rotation.x+=.72*Z-1.05*re}}}return q(0),{root:n,avatar:h,football:P,update:q,dispose(){window.removeEventListener("pointermove",X),window.removeEventListener("click",K),S.removeEventListener("click",A)}}}function hr(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Pm(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}var ui={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},No={duration:.5,overwrite:!1,delay:0},lf,gn,Ft,Mi=1e8,wt=1/Mi,_h=Math.PI*2,j1=_h/4,$1=0,Im=Math.sqrt,Z1=Math.cos,J1=Math.sin,dn=function(e){return typeof e=="string"},qt=function(e){return typeof e=="function"},Sr=function(e){return typeof e=="number"},uf=function(e){return typeof e>"u"},Qi=function(e){return typeof e=="object"},Yn=function(e){return e!==!1},hf=function(){return typeof window<"u"},bc=function(e){return qt(e)||dn(e)},Dm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},En=Array.isArray,Q1=/random\([^)]+\)/g,eS=/,\s*/g,rp=/(?:-?\.?\d|\.)+/gi,Lm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,oa=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,lu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Nm=/[+-]=-?[.\d]+/,tS=/[^,'"\[\]\s]+/gi,nS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,zt,zi,gh,ff,hi={},il={},Um,Fm=function(e){return(il=Ra(e,hi))&&Zn},df=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Uo=function(e,t){return!t&&console.warn(e)},Om=function(e,t){return e&&(hi[e]=t)&&il&&(il[e]=t)||hi},Fo=function(){return 0},iS={suppressEvents:!0,isStart:!0,kill:!1},zc={suppressEvents:!0,kill:!1},rS={suppressEvents:!0},pf={},Xr=[],xh={},Bm,ri={},uu={},sp=30,Vc=[],mf="",_f=function(e){var t=e[0],n,i;if(Qi(t)||qt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Vc.length;i--&&!Vc[i].targetTest(t););n=Vc[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new a0(e[i],n)))||e.splice(i,1);return e},ys=function(e){return e._gsap||_f(Si(e))[0]._gsap},km=function(e,t,n){return(n=e[t])&&qt(n)?e[t]():uf(n)&&e.getAttribute&&e.getAttribute(t)||n},Kn=function(e,t){return(e=e.split(",")).forEach(t)||e},Kt=function(e){return Math.round(e*1e5)/1e5||0},kt=function(e){return Math.round(e*1e7)/1e7||0},da=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},sS=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},rl=function(){var e=Xr.length,t=Xr.slice(0),n,i;for(xh={},Xr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},gf=function(e){return!!(e._initted||e._startAt||e.add)},zm=function(e,t,n,i){Xr.length&&!gn&&rl(),e.render(t,n,!!(gn&&t<0&&gf(e))),Xr.length&&!gn&&rl()},Vm=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(tS).length<2?t:dn(e)?e.trim():e},Gm=function(e){return e},fi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},aS=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ra=function(e,t){for(var n in t)e[n]=t[n];return e},ap=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Qi(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},sl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},fo=function(e){var t=e.parent||zt,n=e.keyframes?aS(En(e.keyframes)):fi;if(Yn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},oS=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Hm=function(e,t,n,i,r){var a=e[i],o;if(r)for(o=t[r];a&&a[r]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},bl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},jr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},bs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},cS=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},vh=function(e,t,n,i){return e._startAt&&(gn?e._startAt.revert(zc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},lS=function s(e){return!e||e._ts&&s(e.parent)},op=function(e){return e._repeat?Ca(e._tTime,e=e.duration()+e._rDelay)*e:0},Ca=function(e,t){var n=Math.floor(e=kt(e/t));return e&&n===e?n-1:n},al=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ml=function(e){return e._end=kt(e._start+(e._tDur/Math.abs(e._ts||e._rts||wt)||0))},Sl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=kt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ml(e),n._dirty||bs(n,e)),e},Wm=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=al(e.rawTime(),t),(!t._dur||Ko(0,t.totalDuration(),n)-t._tTime>wt)&&t.render(n,!0)),bs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-wt}},Hi=function(e,t,n,i){return t.parent&&jr(t),t._start=kt((Sr(n)?n:!n&&ol(t)&&(!e._last||e._last._start>=e._time)?e._last?e._last._start:e._time:n||e!==zt?gi(e,n,t):e._time)+t._delay),t._end=kt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Hm(e,t,"_first","_last",e._sort?"_start":0),ol(t)||(e._recent=t),i||Wm(e,t),e._ts<0&&Sl(e,e._tTime),e},Xm=function(e,t){return(hi.ScrollTrigger||df("scrollTrigger",t))&&hi.ScrollTrigger.create(t,e)},qm=function(e,t,n,i,r){if(vf(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!gn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Bm!==ai.frame)return Xr.push(e),e._lazy=[r,i],1},uS=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},ol=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},hS=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&(!e._start&&uS(e)&&!(!e._initted&&ol(e))||(e._ts<0||e._dp._ts<0)&&!ol(e))?0:1,o=e._rDelay,c=0,l,u,h;if(o&&e._repeat&&(c=Ko(0,e._tDur,t),u=Ca(c,o),e._yoyo&&u&1&&(a=1-a),u!==Ca(e._tTime,o)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||gn||i||e._zTime===wt||!t&&e._zTime){if(!e._initted&&qm(e,t,i,n,c))return;for(h=e._zTime,e._zTime=t||(n?wt:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=c,l=e._pt;l;)l.r(a,l.d),l=l._next;t<0&&vh(e,t,n,!0),e._onUpdate&&!n&&ci(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&ci(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&jr(e,1),!n&&!gn&&(ci(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},fS=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Pa=function(e,t,n,i){var r=e._repeat,a=kt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:kt(a*(r+1)+e._rDelay*r):a,o>0&&!i&&Sl(e,e._tTime=e._tDur*o),e.parent&&Ml(e),n||bs(e.parent,e),e},cp=function(e){return e instanceof Wn?bs(e):Pa(e,e._dur)},dS={_start:0,endTime:Fo,totalDuration:Fo},gi=function s(e,t,n){var i=e.labels,r=e._recent||dS,a=e.duration()>=Mi?r.endTime(!1):e._dur,o,c,l;return dn(t)&&(isNaN(t)||t in i)?(c=t.charAt(0),l=t.substr(-1)==="%",o=t.indexOf("="),c==="<"||c===">"?(o>=0&&(t=t.replace(/=/,"")),(c==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(o<0?r:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(c=parseFloat(t.charAt(o-1)+t.substr(o+1)),l&&n&&(c=c/100*(En(n)?n[0]:n).totalDuration()),o>1?s(e,t.substr(0,o-1),n)+c:a+c)):t==null?a:+t},po=function(e,t,n){var i=Sr(t[1]),r=(i?2:1)+(e<2?0:1),a=t[r],o,c;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,c=n;c&&!("immediateRender"in o);)o=c.vars.defaults||{},c=Yn(c.vars.inherit)&&c.parent;a.immediateRender=Yn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new Jt(t[0],a,t[r+1])},Qr=function(e,t){return e||e===0?t(e):t},Ko=function(e,t,n){return n<e?e:n>t?t:n},Mn=function(e,t){return!dn(e)||!(t=nS.exec(e))?"":t[1]},pS=function(e,t,n){return Qr(n,function(i){return Ko(e,t,i)})},yh=[].slice,Ym=function(e,t){return e&&Qi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Qi(e[0]))&&!e.nodeType&&e!==zi},mS=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return dn(i)&&!t||Ym(i,1)?(r=n).push.apply(r,Si(i)):n.push(i)})||n},Si=function(e,t,n){return Ft&&!t&&Ft.selector?Ft.selector(e):dn(e)&&!n&&(gh||!Ia())?yh.call((t||ff).querySelectorAll(e),0):En(e)?mS(e,n):Ym(e)?yh.call(e,0):e?[e]:[]},bh=function(e){return e=Si(e)[0]||Uo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Si(t,n.querySelectorAll?n:n===e?Uo("Invalid scope")||ff.createElement("div"):e)}},Km=function(e){return e.sort(function(){return .5-Math.random()})},jm=function(e){if(qt(e))return e;var t=Qi(e)?e:{each:e},n=Ms(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},o=i>0&&i<1,c=isNaN(i)||o,l=t.axis,u=i,h=i;return dn(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&c&&(u=i[0],h=i[1]),function(f,d,p){var g=(p||t).length,_=a[g],m,x,y,M,S,A,R,P,b;if(!_){if(b=t.grid==="auto"?0:(t.grid||[1,Mi])[1],!b){for(R=-Mi;R<(R=p[b++].getBoundingClientRect().left)&&b<g;);b<g&&b--}for(_=a[g]=[],m=c?Math.min(b,g)*u-.5:i%b,x=b===Mi?0:c?g*h/b-.5:i/b|0,R=0,P=Mi,A=0;A<g;A++)y=A%b-m,M=x-(A/b|0),_[A]=S=l?Math.abs(l==="y"?M:y):Im(y*y+M*M),S>R&&(R=S),S<P&&(P=S);i==="random"&&Km(_),_.max=R-P,_.min=P,_.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(b>g?g-1:l?l==="y"?g/b:b:Math.max(b,g/b))||0)*(i==="edges"?-1:1),_.b=g<0?r-g:r,_.u=Mn(t.amount||t.each)||0,n=n&&g<0?RS(n):n}return g=(_[f]-_.min)/_.max||0,kt(_.b+(n?n(g):g)*_.v)+_.u}},Mh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=kt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Sr(n)?0:Mn(n))}},$m=function(e,t){var n=En(e),i,r;return!n&&Qi(e)&&(i=n=e.radius||Mi,e.values?(e=Si(e.values),(r=!Sr(e[0]))&&(i*=i)):e=Mh(e.increment)),Qr(t,n?qt(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),c=parseFloat(r?a.y:0),l=Mi,u=0,h=e.length,f,d;h--;)r?(f=e[h].x-o,d=e[h].y-c,f=f*f+d*d):f=Math.abs(e[h]-o),f<l&&(l=f,u=h);return u=!i||l<=i?e[u]:a,r||u===a||Sr(a)?u:u+Mn(a)}:Mh(e))},Zm=function(e,t,n,i){return Qr(En(e)?!t:n===!0?!!(n=0):!i,function(){return En(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},_S=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},gS=function(e,t){return function(n){return e(parseFloat(n))+(t||Mn(n))}},xS=function(e,t,n){return Qm(e,t,0,1,n)},Jm=function(e,t,n){return Qr(n,function(i){return e[~~t(i)]})},vS=function s(e,t,n){var i=t-e;return En(e)?Jm(e,s(0,e.length),t):Qr(n,function(r){return(i+(r-e)%i)%i+e})},yS=function s(e,t,n){var i=t-e,r=i*2;return En(e)?Jm(e,s(0,e.length-1),t):Qr(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},Oo=function(e){return e.replace(Q1,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(eS);return Zm(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Qm=function(e,t,n,i,r){var a=t-e,o=i-n;return Qr(r,function(c){return n+((c-e)/a*o||0)})},bS=function s(e,t,n,i){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var a=dn(e),o={},c,l,u,h,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(En(e)&&!En(t)){for(u=[],h=e.length,f=h-2,l=1;l<h;l++)u.push(s(e[l-1],e[l]));h--,r=function(p){p*=h;var g=Math.min(f,~~p);return u[g](p-g)},n=t}else i||(e=Ra(En(e)?[]:{},e));if(!u){for(c in t)xf.call(o,e,c,"get",t[c]);r=function(p){return Mf(p,o)||(a?e.p:e)}}}return Qr(n,r)},lp=function(e,t,n){var i=e.labels,r=Mi,a,o,c;for(a in i)o=i[a]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(c=a,r=o);return c},ci=function(e,t,n){var i=e.vars,r=i[t],a=Ft,o=e._ctx,c,l,u;if(r)return c=i[t+"Params"],l=i.callbackScope||e,n&&Xr.length&&rl(),o&&(Ft=o),u=c?r.apply(l,c):r.call(l),Ft=a,u},to=function(e){return jr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!gn),e.progress()<1&&ci(e,"onInterrupt"),e},ca,e0=[],t0=function(e){if(e)if(e=!e.name&&e.default||e,hf()||e.headless){var t=e.name,n=qt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Fo,render:Mf,add:xf,kill:BS,modifier:OS,rawVars:0},a={targetTest:0,get:0,getSetter:bf,aliases:{},register:0};if(Ia(),e!==i){if(ri[t])return;fi(i,fi(sl(e,r),a)),Ra(i.prototype,Ra(r,sl(e,a))),ri[i.prop=t]=i,e.targetTest&&(Vc.push(i),pf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Om(t,i),e.register&&e.register(Zn,i,jn)}else e0.push(e)},Pt=255,no={aqua:[0,Pt,Pt],lime:[0,Pt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Pt],navy:[0,0,128],white:[Pt,Pt,Pt],olive:[128,128,0],yellow:[Pt,Pt,0],orange:[Pt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Pt,0,0],pink:[Pt,192,203],cyan:[0,Pt,Pt],transparent:[Pt,Pt,Pt,0]},hu=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Pt+.5|0},n0=function(e,t,n){var i=e?Sr(e)?[e>>16,e>>8&Pt,e&Pt]:0:no.black,r,a,o,c,l,u,h,f,d,p;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),no[e])i=no[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+r+r+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Pt,i&Pt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Pt,e&Pt]}else if(e.substr(0,3)==="hsl"){if(i=p=e.match(rp),!t)c=+i[0]%360/360,l=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(l+1):u+l-u*l,r=u*2-a,i.length>3&&(i[3]*=1),i[0]=hu(c+1/3,r,a),i[1]=hu(c,r,a),i[2]=hu(c-1/3,r,a);else if(~e.indexOf("="))return i=e.match(Lm),n&&i.length<4&&(i[3]=1),i}else i=e.match(rp)||no.transparent;i=i.map(Number)}return t&&!p&&(r=i[0]/Pt,a=i[1]/Pt,o=i[2]/Pt,h=Math.max(r,a,o),f=Math.min(r,a,o),u=(h+f)/2,h===f?c=l=0:(d=h-f,l=u>.5?d/(2-h-f):d/(h+f),c=h===r?(a-o)/d+(a<o?6:0):h===a?(o-r)/d+2:(r-a)/d+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},i0=function(e){var t=[],n=[],i=-1;return e.split(qr).forEach(function(r){var a=r.match(oa)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},up=function(e,t,n){var i="",r=(e+i).match(qr),a=t?"hsla(":"rgba(",o=0,c,l,u,h;if(!r)return e;if(r=r.map(function(f){return(f=n0(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=i0(e),c=n.c,c.join(i)!==u.c.join(i)))for(l=e.replace(qr,"1").split(oa),h=l.length-1;o<h;o++)i+=l[o]+(~c.indexOf(o)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!l)for(l=e.split(qr),h=l.length-1;o<h;o++)i+=l[o]+r[o];return i+l[h]},qr=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in no)s+="|"+e+"\\b";return new RegExp(s+")","gi")})(),MS=/hsl[a]?\(/,r0=function(e){var t=e.join(" "),n;if(qr.lastIndex=0,qr.test(t))return n=MS.test(t),e[1]=up(e[1],n),e[0]=up(e[0],n,i0(e[1])),!0},Bo,ai=(function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,a=r,o=[],c,l,u,h,f,d,p=function g(_){var m=s()-i,x=_===!0,y,M,S,A;if((m>e||m<0)&&(n+=m-t),i+=m,S=i-n,y=S-a,(y>0||x)&&(A=++h.frame,f=S-h.time*1e3,h.time=S=S/1e3,a+=y+(y>=r?0:r-y),M=1),x||(c=l(g)),M)for(d=0;d<o.length;d++)o[d](S,f,A,_)};return h={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(_){return f/(1e3/(_||60))},wake:function(){Um&&(!gh&&hf()&&(zi=gh=window,ff=zi.document||{},hi.gsap=Zn,(zi.gsapVersions||(zi.gsapVersions=[])).push(Zn.version),Fm(il||zi.GreenSockGlobals||!zi.gsap&&zi||{}),e0.forEach(t0)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&h.sleep(),l=u||function(_){return setTimeout(_,a-h.time*1e3+1|0)},Bo=1,p(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),Bo=0,l=Fo},lagSmoothing:function(_,m){e=_||1/0,t=Math.min(m||33,e)},fps:function(_){r=1e3/(_||240),a=h.time*1e3+r},add:function(_,m,x){var y=m?function(M,S,A,R){_(M,S,A,R),h.remove(y)}:_;return h.remove(_),o[x?"unshift":"push"](y),Ia(),y},remove:function(_,m){~(m=o.indexOf(_))&&o.splice(m,1)&&d>=m&&d--},_listeners:o},h})(),Ia=function(){return!Bo&&ai.wake()},pt={},SS=/^[\d.\-M][\d.\-,\s]/,TS=/["']/g,ES=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,o,c,l;r<a;r++)c=n[r],o=r!==a-1?c.lastIndexOf(","):c.length,l=c.substr(0,o),t[i]=isNaN(l)?l.replace(TS,"").trim():+l,i=c.substr(o+1).trim();return t},AS=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},wS=function(e){var t=(e+"").split("("),n=pt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[ES(t[1])]:AS(e).split(",").map(Vm)):pt._CE&&SS.test(e)?pt._CE("",e):n},RS=function(e){return function(t){return 1-e(1-t)}},Ms=function(e,t){return e&&(qt(e)?e:pt[e]||wS(e))||t},Ns=function(e,t,n,i){n===void 0&&(n=function(c){return 1-t(1-c)}),i===void 0&&(i=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return Kn(e,function(o){pt[o]=hi[o]=r,pt[a=o.toLowerCase()]=n;for(var c in r)pt[a+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=pt[o+"."+c]=r[c]}),r},s0=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},fu=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/_h*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*J1((u-a)*r)+1},c=e==="out"?o:e==="in"?function(l){return 1-o(1-l)}:s0(o);return r=_h/r,c.config=function(l,u){return s(e,l,u)},c},du=function s(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:s0(n);return i.config=function(r){return s(e,r)},i};Kn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;Ns(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});pt.Linear.easeNone=pt.none=pt.Linear.easeIn;Ns("Elastic",fu("in"),fu("out"),fu());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(o){return o<t?s*o*o:o<n?s*Math.pow(o-1.5/e,2)+.75:o<i?s*(o-=2.25/e)*o+.9375:s*Math.pow(o-2.625/e,2)+.984375};Ns("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);Ns("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Ns("Circ",function(s){return-(Im(1-s*s)-1)});Ns("Sine",function(s){return s===1?1:-Z1(s*j1)+1});Ns("Back",du("in"),du("out"),du());pt.SteppedEase=pt.steps=hi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-wt;return function(o){return((i*Ko(0,a,o)|0)+r)*n}}};No.ease=pt["quad.out"];Kn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return mf+=s+","+s+"Params,"});var a0=function(e,t){this.id=$1++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:km,this.set=t?t.getSetter:bf},ko=(function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Pa(this,+t.duration,1,1),this.data=t.data,Ft&&(this._ctx=Ft,Ft.data.push(this)),Bo||ai.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Pa(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ia(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Sl(this,n),!r._dp||r.parent||Wm(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Hi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===wt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),zm(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+op(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+op(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Ca(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-wt?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?al(this.parent._time,this):this._tTime,a=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-wt?0:this._rts;var o=this.totalDuration();return(a!==this._rts<0||r>0&&r<o)&&this.totalTime(Ko(-Math.abs(this._delay),o,r),i!==!1),Ml(this),cS(this)},e.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{Ia(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,r=this.progress()===1&&Math.abs(this._zTime)!==wt,a;if(r)for(this._tTime-=wt,a=this._first;a;){if(!a._dur&&a._zTime<0&&a._ts&&a._start<=i+wt){r=!1;break}a=a._next}this.totalTime(i,r)}return this},e.startTime=function(n){if(arguments.length){this._start=kt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Hi(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Yn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?al(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=rS);var i=gn;return gn=n,gf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),gn=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,cp(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,cp(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(gi(this,n),Yn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Yn(i)),this._dur||(this._zTime=-wt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-wt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-wt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-wt)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,r=i._prom;return new Promise(function(a){var o=qt(n)?n:Gm,c=function(){var u=i.then;i.then=null,r&&r(),qt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?c():i._prom=c})},e.kill=function(){to(this)},s})();fi(ko.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-wt,_prom:0,_ps:!1,_rts:1});var Wn=(function(s){Pm(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Yn(n.sortChildren),zt&&Hi(n.parent||zt,hr(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Xm(hr(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return po(0,arguments,this),this},t.from=function(i,r,a){return po(1,arguments,this),this},t.fromTo=function(i,r,a,o){return po(2,arguments,this),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,fo(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Jt(i,r,gi(this,a),1),this},t.call=function(i,r,a){return Hi(this,Jt.delayedCall(0,i,r),a)},t.staggerTo=function(i,r,a,o,c,l,u){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=l,a.onCompleteParams=u,a.parent=this,new Jt(i,a,gi(this,c)),this},t.staggerFrom=function(i,r,a,o,c,l,u){return a.runBackwards=1,fo(a).immediateRender=Yn(a.immediateRender),this.staggerTo(i,r,a,o,c,l,u)},t.staggerFromTo=function(i,r,a,o,c,l,u,h){return o.startAt=a,fo(o).immediateRender=Yn(o.immediateRender),this.staggerTo(i,r,o,c,l,u,h)},t.render=function(i,r,a){var o=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,u=i<=0?0:kt(i),h=this._zTime<0!=i<0&&(this._initted||!l),f,d,p,g,_,m,x,y,M,S,A,R;if(this!==zt&&u>c&&i>=0&&(u=c),u!==this._tTime||a||h){if(o!==this._time&&l&&(u+=this._time-o,i+=this._time-o),f=u,M=this._start,y=this._ts,m=!y,h&&(l||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,_=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(_*100+i,r,a);if(f=kt(u%_),u===c?(g=this._repeat,f=l):(S=kt(u/_),g=~~S,g&&g===S&&(f=l,g--),f>l&&(f=l)),S=Ca(this._tTime,_),!o&&this._tTime&&S!==g&&this._tTime-S*_-this._dur<=0&&(S=g),A&&g&1&&(f=l-f,R=1),g!==S&&!this._lock){var P=A&&S&1,b=P===(A&&g&1);if(g<S&&(P=!P),o=P?0:u%l?l:u,this._lock=1,this.render(o||(R?0:kt(g*_)),r,!l)._lock=0,this._tTime=u,!r&&this.parent&&ci(this,"onRepeat"),this.vars.repeatRefresh&&!R&&(this.invalidate()._lock=1,S=g),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,b&&(this._lock=2,o=P?l:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!R&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=fS(this,kt(o),kt(f)),x&&(u-=f-(f=x._start))),this._tTime=u,this._time=f,this._act=!!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&l&&!r&&!S&&(ci(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(d=this._first;d;){if(p=d._next,(d._act||f>=d._start)&&d._ts&&x!==d){if(d.parent!==this)return this.render(i,r,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,a),f!==this._time||!this._ts&&!m){x=0,p&&(u+=this._zTime=-wt);break}}d=p}else{d=this._last;for(var v=i<0?i:f;d;){if(p=d._prev,(d._act||v<=d._end)&&d._ts&&x!==d){if(d.parent!==this)return this.render(i,r,a);if(d.render(d._ts>0?(v-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(v-d._start)*d._ts,r,a||gn&&gf(d)),f!==this._time||!this._ts&&!m){x=0,p&&(u+=this._zTime=v?-wt:wt);break}}d=p}}if(x&&!r&&(this.pause(),x.render(f>=o?0:-wt)._zTime=f>=o?1:-1,this._ts))return this._start=M,Ml(this),this.render(i,r,a);this._onUpdate&&!r&&ci(this,"onUpdate",!0),(u===c&&this._tTime>=this.totalDuration()||!u&&o)&&(M===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(u===c&&this._ts>0||!u&&this._ts<0)&&jr(this,1),!r&&!(i<0&&!o)&&(u||o||!c)&&(ci(this,u===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(Sr(r)||(r=gi(this,r,i)),!(i instanceof ko)){if(En(i))return i.forEach(function(o){return a.add(o,r)}),this;if(dn(i))return this.addLabel(i,r);if(qt(i))i=Jt.delayedCall(0,i);else return this}return this!==i?Hi(this,i,r):this},t.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-Mi);for(var c=[],l=this._first;l;)l._start>=o&&(l instanceof Jt?r&&c.push(l):(a&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,r,a)))),l=l._next;return c},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return dn(i)?this.removeLabel(i):qt(i)?this.killTweensOf(i):(i.parent===this&&bl(this,i),i===this._recent&&(this._recent=this._last),bs(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=kt(ai.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=gi(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var o=Jt.delayedCall(0,r||Fo,a);return o.data="isPause",this._hasPause=1,Hi(this,o,gi(this,i))},t.removePause=function(i){var r=this._first;for(i=gi(this,i);r;)r._start===i&&r.data==="isPause"&&jr(r),r=r._next},t.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),c=o.length;c--;)Br!==o[c]&&o[c].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],o=Si(i),c=this._first,l=Sr(r),u;c;)c instanceof Jt?sS(c._targets,o)&&(l?(!Br||c._initted&&c._ts)&&c.globalTime(0)<=r&&c.globalTime(c.totalDuration())>r:!r||c.isActive())&&a.push(c):(u=c.getTweensOf(o,r)).length&&a.push.apply(a,u),c=c._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,o=gi(a,i),c=r,l=c.startAt,u=c.onStart,h=c.onStartParams,f=c.immediateRender,d,p=Jt.to(a,fi({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale())||wt,onStart:function(){if(a.pause(),!d){var _=r.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale());p._dur!==_&&Pa(p,_,0,1).render(p._time,!0,!0),d=1}u&&u.apply(p,h||[])}},r));return f?p.render(0):p},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,fi({startAt:{time:gi(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),lp(this,gi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),lp(this,gi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+wt)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);var o=this._first,c=this.labels,l;for(i=kt(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(l in c)c[l]>=a&&(c[l]+=i);return bs(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),bs(this)},t.totalDuration=function(i){var r=0,a=this,o=a._last,c=Mi,l,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)l=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>c&&a._sort&&o._ts&&!a._lock?(a._lock=1,Hi(a,o,u-o._delay,1)._lock=0):c=u,u<0&&o._ts&&(r-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=kt(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),c=0),o._end>r&&o._ts&&(r=o._end),o=l;Pa(a,a===zt&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(zt._ts&&(zm(zt,al(i,zt)),Bm=ai.frame),ai.frame>=sp){sp+=ui.autoSleep||120;var r=zt._first;if((!r||!r._ts)&&ui.autoSleep&&ai._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||ai.sleep()}}},e})(ko);fi(Wn.prototype,{_lock:0,_hasPause:0,_forcing:0});var CS=function(e,t,n,i,r,a,o){var c=new jn(this._pt,e,t,0,1,h0,null,r),l=0,u=0,h,f,d,p,g,_,m,x;for(c.b=n,c.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Oo(i)),a&&(x=[n,i],a(x,e,t),n=x[0],i=x[1]),f=n.match(lu)||[];h=lu.exec(i);)p=h[0],g=i.substring(l,h.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),p!==f[u++]&&(_=parseFloat(f[u-1])||0,c._pt={_next:c._pt,p:g||u===1?g:",",s:_,c:p.charAt(1)==="="?da(_,p)-_:parseFloat(p)-_,m:d&&d<4?Math.round:0},l=lu.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=o,(Nm.test(i)||m)&&(c.e=0),this._pt=c,c},xf=function(e,t,n,i,r,a,o,c,l,u){qt(i)&&(i=i(r||0,e,a));var h=e[t],f=n!=="get"?n:qt(h)?l?e[t.indexOf("set")||!qt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():h,d=qt(h)?l?NS:l0:yf,p;if(dn(i)&&(~i.indexOf("random(")&&(i=Oo(i)),i.charAt(1)==="="&&(p=da(f,i)+(Mn(f)||0),(p||p===0)&&(i=p))),!u||f!==i||Sh)return!isNaN(f*i)&&i!==""?(p=new jn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?FS:u0,0,d),l&&(p.fp=l),o&&p.modifier(o,this,e),this._pt=p):(!h&&!(t in e)&&df(t,i),CS.call(this,e,t,f,i,d,c||ui.stringFilter,l))},PS=function(e,t,n,i,r){if(qt(e)&&(e=mo(e,r,t,n,i)),!Qi(e)||e.style&&e.nodeType||En(e)||Dm(e))return dn(e)?mo(e,r,t,n,i):e;var a={},o;for(o in e)a[o]=mo(e[o],r,t,n,i);return a},o0=function(e,t,n,i,r,a){var o,c,l,u;if(ri[e]&&(o=new ri[e]).init(r,o.rawVars?t[e]:PS(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=c=new jn(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==ca))for(l=n._ptLookup[n._targets.indexOf(r)],u=o._props.length;u--;)l[o._props[u]]=c;return o},Br,Sh,vf=function s(e,t,n){var i=e.vars,r=i.ease,a=i.startAt,o=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,p=e._dur,g=e._startAt,_=e._targets,m=e.parent,x=m&&m.data==="nested"?m.vars.targets:_,y=e._overwrite==="auto"&&!lf,M=e.timeline,S=i.easeReverse||h,A,R,P,b,v,L,N,k,O,W,X,K,q;if(M&&(!f||!r)&&(r="none"),e._ease=Ms(r,No.ease),e._rEase=S&&(Ms(S)||e._ease),e._from=!M&&!!i.runBackwards,e._from&&(e.ratio=1),!M||f&&!i.stagger){if(k=_[0]?ys(_[0]).harness:0,K=k&&i[k.prop],A=sl(i,pf),g&&(g._zTime<0&&g.progress(1),t<0&&u&&o&&!d?g.render(-1,!0):g.revert(u&&p?zc:iS),g._lazy=0),a){if(jr(e._startAt=Jt.set(_,fi({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&Yn(c),startAt:null,delay:0,onUpdate:l&&function(){return ci(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(gn||!o&&!d)&&e._startAt.revert(zc),o&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&p&&!g){if(t&&(o=!1),P=fi({overwrite:!1,data:"isFromStart",lazy:o&&!g&&Yn(c),immediateRender:o,stagger:0,parent:m},A),K&&(P[k.prop]=K),jr(e._startAt=Jt.set(_,P)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(gn?e._startAt.revert(zc):e._startAt.render(-1,!0)),e._zTime=t,!o)s(e._startAt,wt,wt);else if(!t)return}for(e._pt=e._ptCache=0,c=p&&Yn(c)||c&&!p,R=0;R<_.length;R++){if(v=_[R],N=v._gsap||_f(_)[R]._gsap,e._ptLookup[R]=W={},xh[N.id]&&Xr.length&&rl(),X=x===_?R:x.indexOf(v),k&&(O=new k).init(v,K||A,e,X,x)!==!1&&(e._pt=b=new jn(e._pt,v,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(D){W[D]=b}),O.priority&&(L=1)),!k||K)for(P in A)ri[P]&&(O=o0(P,A,e,X,v,x))?O.priority&&(L=1):W[P]=b=xf.call(e,v,P,"get",A[P],X,x,0,i.stringFilter);e._op&&e._op[R]&&e.kill(v,e._op[R]),y&&e._pt&&(Br=e,zt.killTweensOf(v,W,e.globalTime(t)),q=!e.parent,Br=0),e._pt&&c&&(xh[N.id]=1)}L&&f0(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!q,f&&t<=0&&M.render(Mi,!0,!0)},IS=function(e,t,n,i,r,a,o,c){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!l)for(l=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Sh=1,e.vars[t]="+=0",vf(e,o),Sh=0,c?Uo(t+" not eligible for reset. Try splitting into individual properties"):1;l.push(u)}for(d=l.length;d--;)h=l[d],u=h._pt||h,u.s=(i||i===0)&&!r?i:u.s+(i||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=Kt(n)+Mn(h.e)),h.b&&(h.b=u.s+Mn(h.b))},DS=function(e,t){var n=e[0]?ys(e[0]).harness:0,i=n&&n.aliases,r,a,o,c;if(!i)return t;r=Ra({},t);for(a in i)if(a in r)for(c=i[a].split(","),o=c.length;o--;)r[c[o]]=r[a];return r},LS=function(e,t,n,i){var r=t.ease||i||"power1.inOut",a,o;if(En(t))o=n[e]||(n[e]=[]),t.forEach(function(c,l){return o.push({t:l/(t.length-1)*100,v:c,e:r})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:r})},mo=function(e,t,n,i,r){return qt(e)?e.call(t,n,i,r):dn(e)&&~e.indexOf("random(")?Oo(e):e},cl=mf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",c0={};Kn(cl+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return c0[s]=1});cl=cl.split(",");var Jt=(function(s){Pm(e,s);function e(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:fo(i))||this;var c=o.vars,l=c.duration,u=c.delay,h=c.immediateRender,f=c.stagger,d=c.overwrite,p=c.keyframes,g=c.defaults,_=c.scrollTrigger,m=i.parent||zt,x=(En(n)||Dm(n)?Sr(n[0]):"length"in i)?[n]:Si(n),y,M,S,A,R,P,b,v;if(o._targets=x.length?_f(x):Uo("GSAP target "+n+" not found. https://gsap.com",!ui.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,p||f||bc(l)||bc(u)){i=o.vars;var L=i.easeReverse||i.yoyoEase;if(y=o.timeline=new Wn({data:"nested",defaults:g||{},targets:m&&m.data==="nested"?m.vars.targets:x}),y.kill(),y.parent=y._dp=hr(o),y._start=0,f||bc(l)||bc(u)){if(A=x.length,b=f&&jm(f),Qi(f))for(R in f)~cl.indexOf(R)&&(v||(v={}),v[R]=f[R]);for(M=0;M<A;M++)S=sl(i,c0),S.stagger=0,L&&(S.easeReverse=L),v&&Ra(S,v),P=x[M],S.duration=+mo(l,hr(o),M,P,x),S.delay=(+mo(u,hr(o),M,P,x)||0)-o._delay,!f&&A===1&&S.delay&&(o._delay=u=S.delay,o._start+=u,S.delay=0),y.to(P,S,b?b(M,P,x):0),y._ease=pt.none;y.duration()?l=u=0:o.timeline=0}else if(p){fo(fi(y.vars.defaults,{ease:"none"})),y._ease=Ms(p.ease||i.ease||"none");var N=0,k,O,W;if(En(p))p.forEach(function(X){return y.to(x,X,">")}),y.duration();else{S={};for(R in p)R==="ease"||R==="easeEach"||LS(R,p[R],S,p.easeEach);for(R in S)for(k=S[R].sort(function(X,K){return X.t-K.t}),N=0,M=0;M<k.length;M++)O=k[M],W={ease:O.e,duration:(O.t-(M?k[M-1].t:0))/100*l},W[R]=O.v,y.to(x,W,N),N+=W.duration;y.duration()<l&&y.to({},{duration:l-y.duration()})}}l||o.duration(l=y.duration())}else o.timeline=0;return d===!0&&!lf&&(Br=hr(o),zt.killTweensOf(x),Br=0),Hi(m,hr(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!l&&!p&&o._start===kt(m._time)&&Yn(h)&&lS(hr(o))&&m.data!=="nested")&&(o._tTime=-wt,o.render(Math.max(0,-u)||0)),_&&Xm(hr(o),_),o}var t=e.prototype;return t.render=function(i,r,a){var o=this._time,c=this._tDur,l=this._dur,u=i<0,h=i>c-wt&&!u?c:i<wt?0:i,f,d,p,g,_,m,x,y;if(!l)hS(this,i,r,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,y=this.timeline,this._repeat){if(g=l+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,r,a);if(f=kt(h%g),h===c?(p=this._repeat,f=l):(_=kt(h/g),p=~~_,p&&p===_?(f=l,p--):f>l&&(f=l)),m=this._yoyo&&p&1,m&&(f=l-f),_=Ca(this._tTime,g),f===o&&!a&&this._initted&&p===_)return this._tTime=h,this;p!==_&&this.vars.repeatRefresh&&!m&&!this._lock&&f!==g&&this._initted&&(this._lock=a=1,this.render(kt(g*p),!0).invalidate()._lock=0)}if(!this._initted){if(qm(this,u?i:f,a,r,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&p!==_))return this;if(l!==this._dur)return this.render(i,r,a)}if(this._rEase){var M=f<o;if(M!==this._inv){var S=M?o:l-o;this._inv=M,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=S?(M?-1:1)/S:0,this._invScale=M?-this.ratio:1-this.ratio,this._invEase=M?this._rEase:this._ease}this.ratio=x=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=x=this._ease(f/l);if(this._from&&(this.ratio=x=1-x),this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&h&&!r&&!_&&(ci(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(x,d.d),d=d._next;y&&y.render(i<0?i:y._dur*y._ease(f/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&vh(this,i,r,a),ci(this,"onUpdate")),this._repeat&&p!==_&&this.vars.onRepeat&&!r&&this.parent&&ci(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&vh(this,i,!0,!0),(i||!l)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&jr(this,1),!r&&!(u&&!o)&&(h||o||m)&&(ci(this,h===c?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,a,o,c){Bo||ai.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||vf(this,l),u=this._ease(l/this._dur),IS(this,i,r,a,o,u,l,c)?this.resetTo(i,r,a,o,1):(Sl(this,0),this.parent||Hm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?to(this):this.scrollTrigger&&this.scrollTrigger.kill(!!gn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Br&&Br.vars.overwrite!==!0)._first||to(this),this.parent&&a!==this.timeline.totalDuration()&&Pa(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,c=i?Si(i):o,l=this._ptLookup,u=this._pt,h,f,d,p,g,_,m;if((!r||r==="all")&&oS(o,c))return r==="all"&&(this._pt=0),to(this);for(h=this._op=this._op||[],r!=="all"&&(dn(r)&&(g={},Kn(r,function(x){return g[x]=1}),r=g),r=DS(o,r)),m=o.length;m--;)if(~c.indexOf(o[m])){f=l[m],r==="all"?(h[m]=r,p=f,d={}):(d=h[m]=h[m]||{},p=r);for(g in p)_=f&&f[g],_&&((!("kill"in _.d)||_.d.kill(g)===!0)&&bl(this,_,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&to(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return po(1,arguments)},e.delayedCall=function(i,r,a,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,r,a){return po(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return zt.killTweensOf(i,r,a)},e})(ko);fi(Jt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Kn("staggerTo,staggerFrom,staggerFromTo",function(s){Jt[s]=function(){var e=new Wn,t=yh.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var yf=function(e,t,n){return e[t]=n},l0=function(e,t,n){return e[t](n)},NS=function(e,t,n,i){return e[t](i.fp,n)},US=function(e,t,n){return e.setAttribute(t,n)},bf=function(e,t){return qt(e[t])?l0:uf(e[t])&&e.setAttribute?US:yf},u0=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},FS=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},h0=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Mf=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},OS=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},BS=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?bl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},kS=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},f0=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},jn=(function(){function s(t,n,i,r,a,o,c,l,u){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||u0,this.d=c||this,this.set=l||yf,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=kS,this.m=n,this.mt=r,this.tween=i},s})();Kn(mf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return pf[s]=1});hi.TweenMax=hi.TweenLite=Jt;hi.TimelineLite=hi.TimelineMax=Wn;zt=new Wn({sortChildren:!1,defaults:No,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ui.stringFilter=r0;var Ss=[],Gc={},zS=[],hp=0,VS=0,pu=function(e){return(Gc[e]||zS).map(function(t){return t()})},zo=function(){var e=Date.now(),t=[];e-hp>2&&(pu("matchMediaInit"),Ss.forEach(function(n){var i=n.queries,r=n.conditions,a,o,c,l;for(o in i)a=zi.matchMedia(i[o]).matches,a&&(c=1),a!==r[o]&&(r[o]=a,l=1);l&&(n.revert(),c&&t.push(n))}),pu("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),hp=e,pu("matchMedia"))},d0=(function(){function s(t,n){this.selector=n&&bh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=VS++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){qt(n)&&(r=i,i=n,n=qt);var a=this,o=function(){var l=Ft,u=a.selector,h;return l&&l!==a&&l.data.push(a),r&&(a.selector=bh(r)),Ft=a,h=i.apply(a,arguments),qt(h)&&a._r.push(h),Ft=l,a.selector=u,a.isReverted=!1,h};return a.last=o,n===qt?o(a,function(c){return a.add(null,c)}):n?a[n]=o:o},e.ignore=function(n){var i=Ft;Ft=null,n(this),Ft=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Jt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?(function(){for(var o=r.getTweens(),c=r.data.length,l;c--;)l=r.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),c=r.data.length;c--;)l=r.data[c],l instanceof Wn?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof Jt)&&l.revert&&l.revert(n);r._r.forEach(function(u){return u(n,r)}),r.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i){for(var a=Ss.length;a--;)Ss[a].id===this.id&&Ss.splice(a,1);this._mqs&&this._mqs.forEach(function(o){return o.removeListener?o.removeListener(zo):o.removeEventListener("change",zo)}),this._mqs=null}},e.revert=function(n){this.kill(n||{})},s})(),GS=(function(){function s(t){this.contexts=[],this.scope=t,Ft&&Ft.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){Qi(n)||(n={matches:n});var a=new d0(0,r||this.scope),o=a.conditions={},c,l,u;Ft&&!a.selector&&(a.selector=Ft.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(l in n)l==="all"?u=1:(c=zi.matchMedia(n[l]),c&&(Ss.indexOf(a)<0&&Ss.push(a),(o[l]=c.matches)&&(u=1),c.addListener?c.addListener(zo):c.addEventListener("change",zo),(a._mqs||(a._mqs=[])).push(c)));return u&&i(a,function(h){return a.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),ll={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return t0(i)})},timeline:function(e){return new Wn(e)},getTweensOf:function(e,t){return zt.getTweensOf(e,t)},getProperty:function(e,t,n,i){dn(e)&&(e=Si(e)[0]);var r=ys(e||{}).get,a=n?Gm:Vm;return n==="native"&&(n=""),e&&(t?a((ri[t]&&ri[t].get||r)(e,t,n,i)):function(o,c,l){return a((ri[o]&&ri[o].get||r)(e,o,c,l))})},quickSetter:function(e,t,n){if(e=Si(e),e.length>1){var i=e.map(function(u){return Zn.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var a=ri[t],o=ys(e),c=o.harness&&(o.harness.aliases||{})[t]||t,l=a?function(u){var h=new a;ca._pt=0,h.init(e,n?u+n:u,ca,0,[e]),h.render(1,h),ca._pt&&Mf(1,ca)}:o.set(e,c);return a?l:function(u){return l(e,c,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,r=Zn.to(e,fi((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(c,l,u){return r.resetTo(t,c,l,u)};return a.tween=r,a},isTweening:function(e){return zt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ms(e.ease,No.ease)),ap(No,e||{})},config:function(e){return ap(ui,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!ri[o]&&!hi[o]&&Uo(t+" effect requires "+o+" plugin.")}),uu[t]=function(o,c,l){return n(Si(o),fi(c||{},r),l)},a&&(Wn.prototype[t]=function(o,c,l){return this.add(uu[t](o,Qi(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){pt[e]=Ms(t)},parseEase:function(e,t){return arguments.length?Ms(e,t):pt},getById:function(e){return zt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Wn(e),i,r;for(n.smoothChildTiming=Yn(e.smoothChildTiming),zt.remove(n),n._dp=0,n._time=n._tTime=zt._time,i=zt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof Jt&&i.vars.onComplete===i._targets[0]))&&Hi(n,i,i._start-i._delay),i=r;return Hi(zt,n,0),n},context:function(e,t){return e?new d0(e,t):Ft},matchMedia:function(e){return new GS(e)},matchMediaRefresh:function(){return Ss.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||zo()},addEventListener:function(e,t){var n=Gc[e]||(Gc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Gc[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:vS,wrapYoyo:yS,distribute:jm,random:Zm,snap:$m,normalize:xS,getUnit:Mn,clamp:pS,splitColor:n0,toArray:Si,selector:bh,mapRange:Qm,pipe:_S,unitize:gS,interpolate:bS,shuffle:Km},install:Fm,effects:uu,ticker:ai,updateRoot:Wn.updateRoot,plugins:ri,globalTimeline:zt,core:{PropTween:jn,globals:Om,Tween:Jt,Timeline:Wn,Animation:ko,getCache:ys,_removeLinkedListItem:bl,reverting:function(){return gn},context:function(e){return e&&Ft&&(Ft.data.push(e),e._ctx=Ft),Ft},suppressOverwrites:function(e){return lf=e}}};Kn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return ll[s]=Jt[s]});ai.add(Wn.updateRoot);ca=ll.to({},{duration:0});var HS=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},WS=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=HS(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},mu=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,r,a){a._onInit=function(o){var c,l;if(dn(r)&&(c={},Kn(r,function(u){return c[u]=1}),r=c),t){c={};for(l in r)c[l]=t(r[l]);r=c}WS(o,r)}}}},Zn=ll.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,o,c;this.tween=n;for(a in t)c=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(c||0)+"",t[a],i,r,0,0,a),o.op=a,o.b=c,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)gn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},mu("roundProps",Mh),mu("modifiers"),mu("snap",$m))||ll;Jt.version=Wn.version=Zn.version="3.15.1";Um=1;hf()&&Ia();pt.Power0;pt.Power1;pt.Power2;pt.Power3;pt.Power4;pt.Linear;pt.Quad;pt.Cubic;pt.Quart;pt.Quint;pt.Strong;pt.Elastic;pt.Back;pt.SteppedEase;pt.Bounce;pt.Sine;pt.Expo;pt.Circ;var fp,kr,pa,Sf,gs,dp,Tf,XS=function(){return typeof window<"u"},Tr={},hs=180/Math.PI,ma=Math.PI/180,Js=Math.atan2,pp=1e8,Ef=/([A-Z])/g,qS=/(left|right|width|margin|padding|x)/i,YS=/[\s,\(]\S/,Yi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Th=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},KS=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},jS=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},$S=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ZS=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},p0=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},m0=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},JS=function(e,t,n){return e.style[t]=n},QS=function(e,t,n){return e.style.setProperty(t,n)},eT=function(e,t,n){return e._gsap[t]=n},tT=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},nT=function(e,t,n,i,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},iT=function(e,t,n,i,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},Vt="transform",$n=Vt+"Origin",rT=function s(e,t){var n=this,i=this.target,r=i.style,a=i._gsap;if(e in Tr&&r){if(this.tfm=this.tfm||{},e!=="transform")e=Yi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=fr(i,o)}):this.tfm[e]=a.x?a[e]:fr(i,e),e===$n&&(this.tfm.zOrigin=a.zOrigin);else return Yi.transform.split(",").forEach(function(o){return s.call(n,o,t)});if(this.props.indexOf(Vt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push($n,t,"")),e=Vt}(r||t)&&this.props.push(e,t,r[e])},_0=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},sT=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Ef,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Tf(),(!r||!r.isStart)&&!n[Vt]&&(_0(n),i.zOrigin&&n[$n]&&(n[$n]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},g0=function(e,t){var n={target:e,props:[],revert:sT,save:rT};return e._gsap||Zn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},x0,Eh=function(e,t){var n=kr.createElementNS?kr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):kr.createElement(e);return n&&n.style?n:kr.createElement(e)},li=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Ef,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,Da(t)||t,1)||""},mp="O,Moz,ms,Ms,Webkit".split(","),Da=function(e,t,n){var i=t||gs,r=i.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(mp[a]+e in r););return a<0?null:(a===3?"ms":a>=0?mp[a]:"")+e},Ah=function(){XS()&&window.document&&(fp=window,kr=fp.document,pa=kr.documentElement,gs=Eh("div")||{style:{}},Eh("div"),Vt=Da(Vt),$n=Vt+"Origin",gs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",x0=!!Da("perspective"),Tf=Zn.core.reverting,Sf=1)},_p=function(e){var t=e.ownerSVGElement,n=Eh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),r;i.style.display="block",n.appendChild(i),pa.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),pa.removeChild(n),r},gp=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},v0=function(e){var t,n;try{t=e.getBBox()}catch{t=_p(e),n=1}return t&&(t.width||t.height)||n||(t=_p(e)),t&&!t.width&&!t.x&&!t.y?{x:+gp(e,["x","cx","x1"])||0,y:+gp(e,["y","cy","y1"])||0,width:0,height:0}:t},y0=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&v0(e))},$r=function(e,t){if(t){var n=e.style,i;t in Tr&&t!==$n&&(t=Vt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Ef,"-$1").toLowerCase())):n.removeAttribute(t)}},zr=function(e,t,n,i,r,a){var o=new jn(e._pt,t,n,0,1,a?m0:p0);return e._pt=o,o.b=i,o.e=r,e._props.push(n),o},xp={deg:1,rad:1,turn:1},aT={grid:1,flex:1},Zr=function s(e,t,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=gs.style,c=qS.test(t),l=e.tagName.toLowerCase()==="svg",u=(l?"client":"offset")+(c?"Width":"Height"),h=100,f=i==="px",d=i==="%",p,g,_,m;if(i===a||!r||xp[i]||xp[a])return r;if(a!=="px"&&!f&&(r=s(e,t,n,"px")),m=e.getCTM&&y0(e),(d||a==="%")&&(Tr[t]||~t.indexOf("adius")))return p=m?e.getBBox()[c?"width":"height"]:e[u],Kt(d?r/p*h:r/100*p);if(o[c?"width":"height"]=h+(f?a:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!l?e:e.parentNode,m&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===kr||!g.appendChild)&&(g=kr.body),_=g._gsap,_&&d&&_.width&&c&&_.time===ai.time&&!_.uncache)return Kt(r/_.width*h);if(d&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=h+i,p=e[u],x?e.style[t]=x:$r(e,t)}else(d||a==="%")&&!aT[li(g,"display")]&&(o.position=li(e,"position")),g===e&&(o.position="static"),g.appendChild(gs),p=gs[u],g.removeChild(gs),o.position="absolute";return c&&d&&(_=ys(g),_.time=ai.time,_.width=g[u]),Kt(f?p*r/h:p&&r?h/p*r:0)},fr=function(e,t,n,i){var r;return Sf||Ah(),t in Yi&&t!=="transform"&&(t=Yi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Tr[t]&&t!=="transform"?(r=Go(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:hl(li(e,$n))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=ul[t]&&ul[t](e,t,n)||li(e,t)||km(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Zr(e,t,r,n)+n:r},oT=function(e,t,n,i){if(!n||n==="none"){var r=Da(t,e,1),a=r&&li(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=li(e,"borderTopColor"))}var o=new jn(this._pt,e.style,t,0,1,h0),c=0,l=0,u,h,f,d,p,g,_,m,x,y,M,S;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=li(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=li(e,t)||i,g?e.style[t]=g:$r(e,t)),u=[n,i],r0(u),n=u[0],i=u[1],f=n.match(oa)||[],S=i.match(oa)||[],S.length){for(;h=oa.exec(i);)_=h[0],x=i.substring(c,h.index),p?p=(p+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(p=1),_!==(g=f[l++]||"")&&(d=parseFloat(g)||0,M=g.substr((d+"").length),_.charAt(1)==="="&&(_=da(d,_)+M),m=parseFloat(_),y=_.substr((m+"").length),c=oa.lastIndex-y.length,y||(y=y||ui.units[t]||M,c===i.length&&(i+=y,o.e+=y)),M!==y&&(d=Zr(e,t,g,y)||0),o._pt={_next:o._pt,p:x||l===1?x:",",s:d,c:m-d,m:p&&p<4||t==="zIndex"?Math.round:0});o.c=c<i.length?i.substring(c,i.length):""}else o.r=t==="display"&&i==="none"?m0:p0;return Nm.test(i)&&(o.e=0),this._pt=o,o},vp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},cT=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=vp[n]||n,t[1]=vp[i]||i,t.join(" ")},lT=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,a=n._gsap,o,c,l;if(r==="all"||r===!0)i.cssText="",c=1;else for(r=r.split(","),l=r.length;--l>-1;)o=r[l],Tr[o]&&(c=1,o=o==="transformOrigin"?$n:Vt),$r(n,o);c&&($r(n,Vt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Go(n,1),a.uncache=1,_0(i)))}},ul={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var a=e._pt=new jn(e._pt,t,n,0,0,lT);return a.u=i,a.pr=-10,a.tween=r,e._props.push(n),1}}},Vo=[1,0,0,1,0,0],b0={},M0=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},yp=function(e){var t=li(e,Vt);return M0(t)?Vo:t.substr(7).match(Lm).map(Kt)},Af=function(e,t){var n=e._gsap||ys(e),i=e.style,r=yp(e),a,o,c,l;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,r=[c.a,c.b,c.c,c.d,c.e,c.f],r.join(",")==="1,0,0,1,0,0"?Vo:r):(r===Vo&&!e.offsetParent&&e!==pa&&!n.svg&&(c=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(l=1,o=e.nextElementSibling,pa.appendChild(e)),r=yp(e),c?i.display=c:$r(e,"display"),l&&(o?a.insertBefore(e,o):a?a.appendChild(e):pa.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},wh=function(e,t,n,i,r,a){var o=e._gsap,c=r||Af(e,!0),l=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,d=c[0],p=c[1],g=c[2],_=c[3],m=c[4],x=c[5],y=t.split(" "),M=parseFloat(y[0])||0,S=parseFloat(y[1])||0,A,R,P,b;n?c!==Vo&&(R=d*_-p*g)&&(P=M*(_/R)+S*(-g/R)+(g*x-_*m)/R,b=M*(-p/R)+S*(d/R)-(d*x-p*m)/R,M=P,S=b):(A=v0(e),M=A.x+(~y[0].indexOf("%")?M/100*A.width:M),S=A.y+(~(y[1]||y[0]).indexOf("%")?S/100*A.height:S)),i||i!==!1&&o.smooth?(m=M-l,x=S-u,o.xOffset=h+(m*d+x*g)-m,o.yOffset=f+(m*p+x*_)-x):o.xOffset=o.yOffset=0,o.xOrigin=M,o.yOrigin=S,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[$n]="0px 0px",a&&(zr(a,o,"xOrigin",l,M),zr(a,o,"yOrigin",u,S),zr(a,o,"xOffset",h,o.xOffset),zr(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",M+" "+S)},Go=function(e,t){var n=e._gsap||new a0(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,a="px",o="deg",c=getComputedStyle(e),l=li(e,$n)||"0",u,h,f,d,p,g,_,m,x,y,M,S,A,R,P,b,v,L,N,k,O,W,X,K,q,D,w,$,oe,fe,he,be;return u=h=f=g=_=m=x=y=M=0,d=p=1,n.svg=!!(e.getCTM&&y0(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[Vt]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[Vt]!=="none"?c[Vt]:"")),i.scale=i.rotate=i.translate="none"),R=Af(e,n.svg),n.svg&&(n.uncache?(q=e.getBBox(),l=n.xOrigin-q.x+"px "+(n.yOrigin-q.y)+"px",K=""):K=!t&&e.getAttribute("data-svg-origin"),wh(e,K||l,!!K||n.originIsAbsolute,n.smooth!==!1,R)),S=n.xOrigin||0,A=n.yOrigin||0,R!==Vo&&(L=R[0],N=R[1],k=R[2],O=R[3],u=W=R[4],h=X=R[5],R.length===6?(d=Math.sqrt(L*L+N*N),p=Math.sqrt(O*O+k*k),g=L||N?Js(N,L)*hs:0,x=k||O?Js(k,O)*hs+g:0,x&&(p*=Math.abs(Math.cos(x*ma))),n.svg&&(u-=S-(S*L+A*k),h-=A-(S*N+A*O))):(be=R[6],fe=R[7],w=R[8],$=R[9],oe=R[10],he=R[11],u=R[12],h=R[13],f=R[14],P=Js(be,oe),_=P*hs,P&&(b=Math.cos(-P),v=Math.sin(-P),K=W*b+w*v,q=X*b+$*v,D=be*b+oe*v,w=W*-v+w*b,$=X*-v+$*b,oe=be*-v+oe*b,he=fe*-v+he*b,W=K,X=q,be=D),P=Js(-k,oe),m=P*hs,P&&(b=Math.cos(-P),v=Math.sin(-P),K=L*b-w*v,q=N*b-$*v,D=k*b-oe*v,he=O*v+he*b,L=K,N=q,k=D),P=Js(N,L),g=P*hs,P&&(b=Math.cos(P),v=Math.sin(P),K=L*b+N*v,q=W*b+X*v,N=N*b-L*v,X=X*b-W*v,L=K,W=q),_&&Math.abs(_)+Math.abs(g)>359.9&&(_=g=0,m=180-m),d=Kt(Math.sqrt(L*L+N*N+k*k)),p=Kt(Math.sqrt(X*X+be*be)),P=Js(W,X),x=Math.abs(P)>2e-4?P*hs:0,M=he?1/(he<0?-he:he):0),n.svg&&(K=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!M0(li(e,Vt)),K&&e.setAttribute("transform",K))),Math.abs(x)>90&&Math.abs(x)<270&&(r?(d*=-1,x+=g<=0?180:-180,g+=g<=0?180:-180):(p*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=Kt(d),n.scaleY=Kt(p),n.rotation=Kt(g)+o,n.rotationX=Kt(_)+o,n.rotationY=Kt(m)+o,n.skewX=x+o,n.skewY=y+o,n.transformPerspective=M+a,(n.zOrigin=parseFloat(l.split(" ")[2])||!t&&n.zOrigin||0)&&(i[$n]=hl(l)),n.xOffset=n.yOffset=0,n.force3D=ui.force3D,n.renderTransform=n.svg?hT:x0?S0:uT,n.uncache=0,n},hl=function(e){return(e=e.split(" "))[0]+" "+e[1]},_u=function(e,t,n){var i=Mn(t);return Kt(parseFloat(t)+parseFloat(Zr(e,"x",n+"px",i)))+i},uT=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,S0(e,t)},cs="0deg",$a="0px",ls=") ",S0=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,c=n.z,l=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,p=n.scaleX,g=n.scaleY,_=n.transformPerspective,m=n.force3D,x=n.target,y=n.zOrigin,M="",S=m==="auto"&&e&&e!==1||m===!0;if(y&&(h!==cs||u!==cs)){var A=parseFloat(u)*ma,R=Math.sin(A),P=Math.cos(A),b;A=parseFloat(h)*ma,b=Math.cos(A),a=_u(x,a,R*b*-y),o=_u(x,o,-Math.sin(A)*-y),c=_u(x,c,P*b*-y+y)}_!==$a&&(M+="perspective("+_+ls),(i||r)&&(M+="translate("+i+"%, "+r+"%) "),(S||a!==$a||o!==$a||c!==$a)&&(M+=c!==$a||S?"translate3d("+a+", "+o+", "+c+") ":"translate("+a+", "+o+ls),l!==cs&&(M+="rotate("+l+ls),u!==cs&&(M+="rotateY("+u+ls),h!==cs&&(M+="rotateX("+h+ls),(f!==cs||d!==cs)&&(M+="skew("+f+", "+d+ls),(p!==1||g!==1)&&(M+="scale("+p+", "+g+ls),x.style[Vt]=M||"translate(0, 0)"},hT=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,c=n.rotation,l=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,p=n.xOrigin,g=n.yOrigin,_=n.xOffset,m=n.yOffset,x=n.forceCSS,y=parseFloat(a),M=parseFloat(o),S,A,R,P,b;c=parseFloat(c),l=parseFloat(l),u=parseFloat(u),u&&(u=parseFloat(u),l+=u,c+=u),c||l?(c*=ma,l*=ma,S=Math.cos(c)*h,A=Math.sin(c)*h,R=Math.sin(c-l)*-f,P=Math.cos(c-l)*f,l&&(u*=ma,b=Math.tan(l-u),b=Math.sqrt(1+b*b),R*=b,P*=b,u&&(b=Math.tan(u),b=Math.sqrt(1+b*b),S*=b,A*=b)),S=Kt(S),A=Kt(A),R=Kt(R),P=Kt(P)):(S=h,P=f,A=R=0),(y&&!~(a+"").indexOf("px")||M&&!~(o+"").indexOf("px"))&&(y=Zr(d,"x",a,"px"),M=Zr(d,"y",o,"px")),(p||g||_||m)&&(y=Kt(y+p-(p*S+g*R)+_),M=Kt(M+g-(p*A+g*P)+m)),(i||r)&&(b=d.getBBox(),y=Kt(y+i/100*b.width),M=Kt(M+r/100*b.height)),b="matrix("+S+","+A+","+R+","+P+","+y+","+M+")",d.setAttribute("transform",b),x&&(d.style[Vt]=b)},fT=function(e,t,n,i,r){var a=360,o=dn(r),c=parseFloat(r)*(o&&~r.indexOf("rad")?hs:1),l=c-i,u=i+l+"deg",h,f;return o&&(h=r.split("_")[1],h==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-a)),h==="cw"&&l<0?l=(l+a*pp)%a-~~(l/a)*a:h==="ccw"&&l>0&&(l=(l-a*pp)%a-~~(l/a)*a)),e._pt=f=new jn(e._pt,t,n,i,l,KS),f.e=u,f.u="deg",e._props.push(n),f},bp=function(e,t){for(var n in t)e[n]=t[n];return e},dT=function(e,t,n){var i=bp({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,c,l,u,h,f,d,p;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),a[Vt]=t,o=Go(n,1),$r(n,Vt),n.setAttribute("transform",l)):(l=getComputedStyle(n)[Vt],a[Vt]=t,o=Go(n,1),a[Vt]=l);for(c in Tr)l=i[c],u=o[c],l!==u&&r.indexOf(c)<0&&(d=Mn(l),p=Mn(u),h=d!==p?Zr(n,c,l,p):parseFloat(l),f=parseFloat(u),e._pt=new jn(e._pt,o,c,h,f-h,Th),e._pt.u=p||0,e._props.push(c));bp(o,i)};Kn("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",a=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(o){return e<2?s+o:"border"+o+s});ul[e>1?"border"+s:s]=function(o,c,l,u,h){var f,d;if(arguments.length<4)return f=a.map(function(p){return fr(o,p,l)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},a.forEach(function(p,g){return d[p]=f[g]=f[g]||f[(g-1)/2|0]}),o.init(c,d,h)}});var T0={name:"css",register:Ah,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var a=this._props,o=e.style,c=n.vars.startAt,l,u,h,f,d,p,g,_,m,x,y,M,S,A,R,P,b;Sf||Ah(),this.styles=this.styles||g0(e),P=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(ri[g]&&o0(g,t,n,i,e,r)))){if(d=typeof u,p=ul[g],d==="function"&&(u=u.call(n,i,e,r),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Oo(u)),p)p(this,e,g,u,n)&&(R=1);else if(g.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",qr.lastIndex=0,qr.test(l)||(_=Mn(l),m=Mn(u),m?_!==m&&(l=Zr(e,g,l,m)+m):_&&(u+=_)),this.add(o,"setProperty",l,u,i,r,0,0,g),a.push(g),P.push(g,0,o[g]);else if(d!=="undefined"){if(c&&g in c?(l=typeof c[g]=="function"?c[g].call(n,i,e,r):c[g],dn(l)&&~l.indexOf("random(")&&(l=Oo(l)),Mn(l+"")||l==="auto"||(l+=ui.units[g]||Mn(fr(e,g))||""),(l+"").charAt(1)==="="&&(l=fr(e,g))):l=fr(e,g),f=parseFloat(l),x=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),h=parseFloat(u),g in Yi&&(g==="autoAlpha"&&(f===1&&fr(e,"visibility")==="hidden"&&h&&(f=0),P.push("visibility",0,o.visibility),zr(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=Yi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),y=g in Tr,y){if(this.styles.save(g),b=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=li(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var v=e.style.perspective;e.style.perspective=u,u=li(e,"perspective"),v?e.style.perspective=v:$r(e,"perspective")}h=parseFloat(u)}if(M||(S=e._gsap,S.renderTransform&&!t.parseTransform||Go(e,t.parseTransform),A=t.smoothOrigin!==!1&&S.smooth,M=this._pt=new jn(this._pt,o,Vt,0,1,S.renderTransform,S,0,-1),M.dep=1),g==="scale")this._pt=new jn(this._pt,S,"scaleY",S.scaleY,(x?da(S.scaleY,x+h):h)-S.scaleY||0,Th),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){P.push($n,0,o[$n]),u=cT(u),S.svg?wh(e,u,0,A,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==S.zOrigin&&zr(this,S,"zOrigin",S.zOrigin,m),zr(this,o,g,hl(l),hl(u)));continue}else if(g==="svgOrigin"){wh(e,u,1,A,0,this);continue}else if(g in b0){fT(this,S,g,f,x?da(f,x+u):u);continue}else if(g==="smoothOrigin"){zr(this,S,"smooth",S.smooth,u);continue}else if(g==="force3D"){S[g]=u;continue}else if(g==="transform"){dT(this,u,e);continue}}else g in o||(g=Da(g)||g);if(y||(h||h===0)&&(f||f===0)&&!YS.test(u)&&g in o)_=(l+"").substr((f+"").length),h||(h=0),m=Mn(u)||(g in ui.units?ui.units[g]:_),_!==m&&(f=Zr(e,g,l,m)),this._pt=new jn(this._pt,y?S:o,g,f,(x?da(f,x+h):h)-f,!y&&(m==="px"||g==="zIndex")&&t.autoRound!==!1?ZS:Th),this._pt.u=m||0,y&&b!==u?(this._pt.b=l,this._pt.e=b,this._pt.r=$S):_!==m&&m!=="%"&&(this._pt.b=l,this._pt.r=jS);else if(g in o)oT.call(this,e,g,l,x?x+u:u);else if(g in e)this.add(e,g,l||e[g],x?x+u:u,i,r);else if(g!=="parseTransform"){df(g,u);continue}y||(g in o?P.push(g,0,o[g]):typeof e[g]=="function"?P.push(g,2,e[g]()):P.push(g,1,l||e[g])),a.push(g)}}R&&f0(this)},render:function(e,t){if(t.tween._time||!Tf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:fr,aliases:Yi,getSetter:function(e,t,n){var i=Yi[t];return i&&i.indexOf(",")<0&&(t=i),t in Tr&&t!==$n&&(e._gsap.x||fr(e,"x"))?n&&dp===n?t==="scale"?tT:eT:(dp=n||{})&&(t==="scale"?nT:iT):e.style&&!uf(e.style[t])?JS:~t.indexOf("-")?QS:bf(e,t)},core:{_removeProperty:$r,_getMatrix:Af}};Zn.utils.checkPrefix=Da;Zn.core.getStyleSaver=g0;(function(s,e,t,n){var i=Kn(s+","+e+","+t,function(r){Tr[r]=1});Kn(e,function(r){ui.units[r]="deg",b0[r]=1}),Yi[i[13]]=s+","+e,Kn(n,function(r){var a=r.split(":");Yi[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Kn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){ui.units[s]="px"});Zn.registerPlugin(T0);var wf=Zn.registerPlugin(T0)||Zn;wf.core.Tween;function pT(s,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function mT(s,e,t){return e&&pT(s.prototype,e),s}var _n,Hc,Xn,Vr,Gr,_a,E0,fs,ga,A0,_r,Ci,w0,R0=function(){return _n||typeof window<"u"&&(_n=window.gsap)&&_n.registerPlugin&&_n},C0=1,la=[],ot=[],$i=[],_o=Date.now,Rh=function(e,t){return t},_T=function(){var e=ga.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,ot),i.push.apply(i,$i),ot=n,$i=i,Rh=function(a,o){return t[a](o)}},Yr=function(e,t){return~$i.indexOf(e)&&$i[$i.indexOf(e)+1][t]},go=function(e){return!!~A0.indexOf(e)},Pn=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:i!==!1,capture:!!r})},Cn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Mc="scrollLeft",Sc="scrollTop",Ch=function(){return _r&&_r.isPressed||ot.cache++},fl=function(e,t){var n=function i(r){if(r||r===0){C0&&Xn.history.scrollRestoration!=="manual"&&(Xn.history.scrollRestoration="manual");var a=_r&&_r.isPressed;r=i.v=Math.round(r)||(_r&&_r.iOS?1:0),e(r),i.cacheID=ot.cache,a&&Rh("ss",r)}else(t||ot.cache!==i.cacheID||Rh("ref"))&&(i.cacheID=ot.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Fn={s:Mc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:fl(function(s){return arguments.length?Xn.scrollTo(s,rn.sc()):Xn.pageXOffset||Vr[Mc]||Gr[Mc]||_a[Mc]||0})},rn={s:Sc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Fn,sc:fl(function(s){return arguments.length?Xn.scrollTo(Fn.sc(),s):Xn.pageYOffset||Vr[Sc]||Gr[Sc]||_a[Sc]||0})},Gn=function(e,t){return(t&&t._ctx&&t._ctx.selector||_n.utils.toArray)(e)[0]||(typeof e=="string"&&_n.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},gT=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Jr=function(e,t){var n=t.s,i=t.sc;go(e)&&(e=Vr.scrollingElement||Gr);var r=ot.indexOf(e),a=i===rn.sc?1:2;!~r&&(r=ot.push(e)-1),ot[r+a]||Pn(e,"scroll",Ch);var o=ot[r+a],c=o||(ot[r+a]=fl(Yr(e,n),!0)||(go(e)?i:fl(function(l){return arguments.length?e[n]=l:e[n]})));return c.target=e,o||(c.smooth=_n.getProperty(e,"scrollBehavior")==="smooth"),c},Ph=function(e,t,n){var i=e,r=e,a=_o(),o=a,c=t||50,l=Math.max(500,c*3),u=function(p,g){var _=_o();g||_-a>c?(r=i,i=p,o=a,a=_):n?i+=p:i=r+(p-r)/(_-o)*(a-o)},h=function(){r=i=n?0:i,o=a=0},f=function(p){var g=o,_=r,m=_o();return(p||p===0)&&p!==i&&u(p),a===o||m-o>l?0:(i+(n?_:-_))/((n?m:a)-g)*1e3};return{update:u,reset:h,getVelocity:f}},Za=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Mp=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},P0=function(){ga=_n.core.globals().ScrollTrigger,ga&&ga.core&&_T()},I0=function(e){return _n=e||R0(),!Hc&&_n&&typeof document<"u"&&document.body&&(Xn=window,Vr=document,Gr=Vr.documentElement,_a=Vr.body,A0=[Xn,Vr,Gr,_a],_n.utils.clamp,w0=_n.core.context||function(){},fs="onpointerenter"in _a?"pointer":"mouse",E0=jt.isTouch=Xn.matchMedia&&Xn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Xn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ci=jt.eventTypes=("ontouchstart"in Gr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Gr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return C0=0},500),Hc=1),ga||P0(),Hc};Fn.op=rn;ot.cache=0;var jt=(function(){function s(t){this.init(t)}var e=s.prototype;return e.init=function(n){Hc||I0(_n)||console.warn("Please gsap.registerPlugin(Observer)"),ga||P0();var i=n.tolerance,r=n.dragMinimum,a=n.type,o=n.target,c=n.lineHeight,l=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,p=n.wheelSpeed,g=n.event,_=n.onDragStart,m=n.onDragEnd,x=n.onDrag,y=n.onPress,M=n.onRelease,S=n.onRight,A=n.onLeft,R=n.onUp,P=n.onDown,b=n.onChangeX,v=n.onChangeY,L=n.onChange,N=n.onToggleX,k=n.onToggleY,O=n.onHover,W=n.onHoverEnd,X=n.onMove,K=n.ignoreCheck,q=n.isNormalizer,D=n.onGestureStart,w=n.onGestureEnd,$=n.onWheel,oe=n.onEnable,fe=n.onDisable,he=n.onClick,be=n.scrollSpeed,Q=n.capture,ee=n.allowClicks,le=n.lockAxis,Ae=n.onLockAxis;this.target=o=Gn(o)||Gr,this.vars=n,d&&(d=_n.utils.toArray(d)),i=i||1e-9,r=r||0,p=p||1,be=be||1,a=a||"wheel,touch,pointer",l=l!==!1,c||(c=parseFloat(Xn.getComputedStyle(_a).lineHeight)||22);var ue,Ce,Ke,xe,Ve,U,Be,F=this,He=0,_e=0,Qe=n.passive||!u&&n.passive!==!1,de=Jr(o,Fn),Pe=Jr(o,rn),I=de(),E=Pe(),z=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Ci[0]==="pointerdown",Z=go(o),re=o.ownerDocument||Vr,te=[0,0,0],we=[0,0,0],pe=0,Ue=function(){return pe=_o()},ve=function(Oe,Je){return(F.event=Oe)&&d&&gT(Oe.target,d)||Je&&z&&Oe.pointerType!=="touch"||K&&K(Oe,Je)},ae=function(){F._vx.reset(),F._vy.reset(),Ce.pause(),h&&h(F)},ce=function(){var Oe=F.deltaX=Mp(te),Je=F.deltaY=Mp(we),Se=Math.abs(Oe)>=i,Ze=Math.abs(Je)>=i;L&&(Se||Ze)&&L(F,Oe,Je,te,we),Se&&(S&&F.deltaX>0&&S(F),A&&F.deltaX<0&&A(F),b&&b(F),N&&F.deltaX<0!=He<0&&N(F),He=F.deltaX,te[0]=te[1]=te[2]=0),Ze&&(P&&F.deltaY>0&&P(F),R&&F.deltaY<0&&R(F),v&&v(F),k&&F.deltaY<0!=_e<0&&k(F),_e=F.deltaY,we[0]=we[1]=we[2]=0),(xe||Ke)&&(X&&X(F),Ke&&(_&&Ke===1&&_(F),x&&x(F),Ke=0),xe=!1),U&&!(U=!1)&&Ae&&Ae(F),Ve&&($(F),Ve=!1),ue=0},ke=function(Oe,Je,Se){te[Se]+=Oe,we[Se]+=Je,F._vx.update(Oe),F._vy.update(Je),l?ue||(ue=requestAnimationFrame(ce)):ce()},Fe=function(Oe,Je){le&&!Be&&(F.axis=Be=Math.abs(Oe)>Math.abs(Je)?"x":"y",U=!0),Be!=="y"&&(te[2]+=Oe,F._vx.update(Oe,!0)),Be!=="x"&&(we[2]+=Je,F._vy.update(Je,!0)),l?ue||(ue=requestAnimationFrame(ce)):ce()},ye=function(Oe){if(!ve(Oe,1)){Oe=Za(Oe,u);var Je=Oe.clientX,Se=Oe.clientY,Ze=Je-F.x,We=Se-F.y,je=F.isDragging;F.x=Je,F.y=Se,(je||(Ze||We)&&(Math.abs(F.startX-Je)>=r||Math.abs(F.startY-Se)>=r))&&(Ke||(Ke=je?2:1),je||(F.isDragging=!0),Fe(Ze,We))}},Ge=F.onPress=function(Ee){ve(Ee,1)||Ee&&Ee.button||(F.axis=Be=null,Ce.pause(),F.isPressed=!0,Ee=Za(Ee),He=_e=0,F.startX=F.x=Ee.clientX,F.startY=F.y=Ee.clientY,F._vx.reset(),F._vy.reset(),Pn(q?o:re,Ci[1],ye,Qe,!0),F.deltaX=F.deltaY=0,y&&y(F))},T=F.onRelease=function(Ee){if(!ve(Ee,1)){Cn(q?o:re,Ci[1],ye,!0);var Oe=!isNaN(F.y-F.startY),Je=F.isDragging,Se=Je&&(Math.abs(F.x-F.startX)>3||Math.abs(F.y-F.startY)>3),Ze=Za(Ee);!Se&&Oe&&(F._vx.reset(),F._vy.reset(),u&&ee&&_n.delayedCall(.08,function(){if(_o()-pe>300&&!Ee.defaultPrevented){if(Ee.target.click)Ee.target.click();else if(re.createEvent){var We=re.createEvent("MouseEvents");We.initMouseEvent("click",!0,!0,Xn,1,Ze.screenX,Ze.screenY,Ze.clientX,Ze.clientY,!1,!1,!1,!1,0,null),Ee.target.dispatchEvent(We)}}})),F.isDragging=F.isGesturing=F.isPressed=!1,h&&Je&&!q&&Ce.restart(!0),Ke&&ce(),m&&Je&&m(F),M&&M(F,Se)}},H=function(Oe){return Oe.touches&&Oe.touches.length>1&&(F.isGesturing=!0)&&D(Oe,F.isDragging)},J=function(){return(F.isGesturing=!1)||w(F)},ne=function(Oe){if(!ve(Oe)){var Je=de(),Se=Pe();ke((Je-I)*be,(Se-E)*be,1),I=Je,E=Se,h&&Ce.restart(!0)}},se=function(Oe){if(!ve(Oe)){Oe=Za(Oe,u),$&&(Ve=!0);var Je=(Oe.deltaMode===1?c:Oe.deltaMode===2?Xn.innerHeight:1)*p;ke(Oe.deltaX*Je,Oe.deltaY*Je,0),h&&!q&&Ce.restart(!0)}},ie=function(Oe){if(!ve(Oe)){var Je=Oe.clientX,Se=Oe.clientY,Ze=Je-F.x,We=Se-F.y;F.x=Je,F.y=Se,xe=!0,h&&Ce.restart(!0),(Ze||We)&&Fe(Ze,We)}},ge=function(Oe){F.event=Oe,O(F)},Ie=function(Oe){F.event=Oe,W(F)},rt=function(Oe){return ve(Oe)||Za(Oe,u)&&he(F)};Ce=F._dc=_n.delayedCall(f||.25,ae).pause(),F.deltaX=F.deltaY=0,F._vx=Ph(0,50,!0),F._vy=Ph(0,50,!0),F.scrollX=de,F.scrollY=Pe,F.isDragging=F.isGesturing=F.isPressed=!1,w0(this),F.enable=function(Ee){return F.isEnabled||(Pn(Z?re:o,"scroll",Ch),a.indexOf("scroll")>=0&&Pn(Z?re:o,"scroll",ne,Qe,Q),a.indexOf("wheel")>=0&&Pn(o,"wheel",se,Qe,Q),(a.indexOf("touch")>=0&&E0||a.indexOf("pointer")>=0)&&(Pn(o,Ci[0],Ge,Qe,Q),Pn(re,Ci[2],T),Pn(re,Ci[3],T),ee&&Pn(o,"click",Ue,!0,!0),he&&Pn(o,"click",rt),D&&Pn(re,"gesturestart",H),w&&Pn(re,"gestureend",J),O&&Pn(o,fs+"enter",ge),W&&Pn(o,fs+"leave",Ie),X&&Pn(o,fs+"move",ie)),F.isEnabled=!0,F.isDragging=F.isGesturing=F.isPressed=xe=Ke=!1,F._vx.reset(),F._vy.reset(),I=de(),E=Pe(),Ee&&Ee.type&&Ge(Ee),oe&&oe(F)),F},F.disable=function(){F.isEnabled&&(la.filter(function(Ee){return Ee!==F&&go(Ee.target)}).length||Cn(Z?re:o,"scroll",Ch),F.isPressed&&(F._vx.reset(),F._vy.reset(),Cn(q?o:re,Ci[1],ye,!0)),Cn(Z?re:o,"scroll",ne,Q),Cn(o,"wheel",se,Q),Cn(o,Ci[0],Ge,Q),Cn(re,Ci[2],T),Cn(re,Ci[3],T),Cn(o,"click",Ue,!0),Cn(o,"click",rt),Cn(re,"gesturestart",H),Cn(re,"gestureend",J),Cn(o,fs+"enter",ge),Cn(o,fs+"leave",Ie),Cn(o,fs+"move",ie),F.isEnabled=F.isPressed=F.isDragging=!1,fe&&fe(F))},F.kill=F.revert=function(){F.disable();var Ee=la.indexOf(F);Ee>=0&&la.splice(Ee,1),_r===F&&(_r=0)},la.push(F),q&&go(o)&&(_r=F),F.enable(g)},mT(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();jt.version="3.15.1";jt.create=function(s){return new jt(s)};jt.register=I0;jt.getAll=function(){return la.slice()};jt.getById=function(s){return la.filter(function(e){return e.vars.id===s})[0]};R0()&&_n.registerPlugin(jt);var Le,na,at,Mt,si,vt,Rf,dl,Ho,xo,io,Tc,yn,Tl,Ih,Ln,Sp,Tp,ia,D0,gu,L0,Dn,Dh,N0,U0,Ur,Lh,Cf,xa,Pf,Kr,Nh,xu,Ec=1,bn=Date.now,vu=bn(),Ei=0,ro=0,Ep=function(e,t,n){var i=ii(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Ap=function(e,t){return t&&(!ii(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},xT=function s(){return ro&&requestAnimationFrame(s)},wp=function(){return Tl=1},Rp=function(){return Tl=0},Vi=function(e){return e},so=function(e){return Math.round(e*1e5)/1e5||0},F0=function(){return typeof window<"u"},O0=function(){return Le||F0()&&(Le=window.gsap)&&Le.registerPlugin&&Le},Ps=function(e){return!!~Rf.indexOf(e)},B0=function(e){return(e==="Height"?Pf:at["inner"+e])||si["client"+e]||vt["client"+e]},k0=function(e){return Yr(e,"getBoundingClientRect")||(Ps(e)?function(){return Kc.width=at.innerWidth,Kc.height=Pf,Kc}:function(){return dr(e)})},vT=function(e,t,n){var i=n.d,r=n.d2,a=n.a;return(a=Yr(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?B0(r):e["client"+r])||0}},yT=function(e,t){return!t||~$i.indexOf(e)?k0(e):function(){return Kc}},Ki=function(e,t){var n=t.s,i=t.d2,r=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=Yr(e,n))?a()-k0(e)()[r]:Ps(e)?(si[n]||vt[n])-B0(i):e[n]-e["offset"+i])},Ac=function(e,t){for(var n=0;n<ia.length;n+=3)(!t||~t.indexOf(ia[n+1]))&&e(ia[n],ia[n+1],ia[n+2])},ii=function(e){return typeof e=="string"},Sn=function(e){return typeof e=="function"},ao=function(e){return typeof e=="number"},ds=function(e){return typeof e=="object"},Ja=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Qs=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},ea=Math.abs,z0="left",V0="top",If="right",Df="bottom",Ts="width",Es="height",vo="Right",yo="Left",bo="Top",Mo="Bottom",Zt="padding",vi="margin",La="Width",Lf="Height",nn="px",yi=function(e){return at.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},bT=function(e){var t=yi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Cp=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},dr=function(e,t){var n=t&&yi(e)[Ih]!=="matrix(1, 0, 0, 1, 0, 0)"&&Le.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},pl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},G0=function(e){var t=[],n=e.labels,i=e.duration(),r;for(r in n)t.push(n[r]/i);return t},MT=function(e){return function(t){return Le.utils.snap(G0(e),t)}},Nf=function(e){var t=Le.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,r){return i-r});return n?function(i,r,a){a===void 0&&(a=.001);var o;if(!r)return t(i);if(r>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,r,a){a===void 0&&(a=.001);var o=t(i);return!r||Math.abs(o-i)<a||o-i<0==r<0?o:t(r<0?i-e:i+e)}},ST=function(e){return function(t,n){return Nf(G0(e))(t,n.direction)}},wc=function(e,t,n,i){return n.split(",").forEach(function(r){return e(t,r,i)})},un=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},ln=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Rc=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Pp={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Cc={toggleActions:"play",anticipatePin:0},ml={top:0,left:0,center:.5,bottom:1,right:1},Wc=function(e,t){if(ii(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in ml?ml[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Pc=function(e,t,n,i,r,a,o,c){var l=r.startColor,u=r.endColor,h=r.fontSize,f=r.indent,d=r.fontWeight,p=Mt.createElement("div"),g=Ps(n)||Yr(n,"pinType")==="fixed",_=e.indexOf("scroller")!==-1,m=g?vt:n.tagName==="IFRAME"?n.contentDocument.body:n,x=e.indexOf("start")!==-1,y=x?l:u,M="border-color:"+y+";font-size:"+h+";color:"+y+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return M+="position:"+((_||c)&&g?"fixed;":"absolute;"),(_||c||!g)&&(M+=(i===rn?If:Df)+":"+(a+parseFloat(f))+"px;"),o&&(M+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),p._isStart=x,p.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),p.style.cssText=M,p.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(p,m.children[0]):m.appendChild(p),p._offset=p["offset"+i.op.d2],Xc(p,0,i,x),p},Xc=function(e,t,n,i){var r={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+a+La]=1,r["border"+o+La]=0,r[n.p]=t+"px",Le.set(e,r)},st=[],Uh={},Wo,Ip=function(){return bn()-Ei>34&&(Wo||(Wo=requestAnimationFrame(yr)))},ta=function(){(!Dn||!Dn.isPressed||Dn.startX>vt.clientWidth)&&(ot.cache++,Dn?Wo||(Wo=requestAnimationFrame(yr)):yr(),Ei||Ds("scrollStart"),Ei=bn())},yu=function(){U0=at.innerWidth,N0=at.innerHeight},oo=function(e){ot.cache++,(e===!0||!yn&&!L0&&!Mt.fullscreenElement&&!Mt.webkitFullscreenElement&&(!Dh||U0!==at.innerWidth||Math.abs(at.innerHeight-N0)>at.innerHeight*.25))&&dl.restart(!0)},Is={},TT=[],H0=function s(){return ln(ft,"scrollEnd",s)||xs(!0)},Ds=function(e){return Is[e]&&Is[e].map(function(t){return t()})||TT},ni=[],W0=function(e){for(var t=0;t<ni.length;t+=5)(!e||ni[t+4]&&ni[t+4].query===e)&&(ni[t].style.cssText=ni[t+1],ni[t].getBBox&&ni[t].setAttribute("transform",ni[t+2]||""),ni[t+3].uncache=1)},X0=function(){ot.cache++,ot.forEach(function(e){return Sn(e)&&(e.rec=e())})},Uf=function(e,t){var n;for(Ln=0;Ln<st.length;Ln++)n=st[Ln],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Kr=!0,t&&W0(t),t||Ds("revert")},q0=function(e,t){ot.cache++,(t||!Nn)&&ot.forEach(function(n){return Sn(n)&&n.cacheID++&&(n.rec=0)}),ii(e)&&(Cf=e,at.history.scrollRestoration!==e&&(at.history.scrollRestoration=e))},Nn,As=0,Dp,ET=function(){if(Dp!==As){var e=Dp=As;requestAnimationFrame(function(){return e===As&&xs(!0)})}},Y0=function(){vt.appendChild(xa),Pf=!Dn&&xa.offsetHeight||at.innerHeight,vt.removeChild(xa)},Lp=function(e){return Ho(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},xs=function(e,t){if(si=Mt.documentElement,vt=Mt.body,Rf=[at,Mt,si,vt],Ei&&!e&&!Kr){un(ft,"scrollEnd",H0);return}Y0(),Nn=ft.isRefreshing=!0,Kr||X0();var n=Ds("refreshInit");D0&&ft.sort(),t||Uf(),ot.forEach(function(i){Sn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),st.slice(0).forEach(function(i){return i.refresh()}),Kr=!1,st.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-a),i.refresh()}}),Nh=1,Lp(!0),st.forEach(function(i){var r=Ki(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>r,o=i._startClamp&&i.start>=r;(a||o)&&i.setPositions(o?r-1:i.start,a?Math.max(o?r:i.start+1,r):i.end,!0)}),Lp(!1),Nh=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ot.forEach(function(i){Sn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),q0(Cf,1),dl.pause(),As++,Nn=2,yr(2),st.forEach(function(i){return Sn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Nn=ft.isRefreshing=!1,Ds("refresh")},Fh=0,qc=1,So,yr=function(e){if(e===2||!Nn&&!Kr){ft.isUpdating=!0,So&&So.update(0);var t=st.length,n=bn(),i=n-vu>=50,r=t&&st[0].scroll();if(qc=Fh>r?-1:1,Nn||(Fh=r),i&&(Ei&&!Tl&&n-Ei>200&&(Ei=0,Ds("scrollEnd")),io=vu,vu=n),qc<0){for(Ln=t;Ln-- >0;)st[Ln]&&st[Ln].update(0,i);qc=1}else for(Ln=0;Ln<t;Ln++)st[Ln]&&st[Ln].update(0,i);ft.isUpdating=!1}Wo=0},Oh=[z0,V0,Df,If,vi+Mo,vi+vo,vi+bo,vi+yo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Yc=Oh.concat([Ts,Es,"boxSizing","max"+La,"max"+Lf,"position",vi,Zt,Zt+bo,Zt+vo,Zt+Mo,Zt+yo]),AT=function(e,t,n){va(n);var i=e._gsap;if(i.spacerIsNative)va(i.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},bu=function(e,t,n,i){if(!e._gsap.swappedIn){for(var r=Oh.length,a=t.style,o=e.style,c;r--;)c=Oh[r],a[c]=n[c];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Df]=o[If]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Ts]=pl(e,Fn)+nn,a[Es]=pl(e,rn)+nn,a[Zt]=o[vi]=o[V0]=o[z0]="0",va(i),o[Ts]=o["max"+La]=n[Ts],o[Es]=o["max"+Lf]=n[Es],o[Zt]=n[Zt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},wT=/([A-Z])/g,va=function(e){if(e){var t=e.t.style,n=e.length,i=0,r,a;for((e.t._gsap||Le.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],r=e[i],a?t[r]=a:t[r]&&t.removeProperty(r.replace(wT,"-$1").toLowerCase())}},Ic=function(e){for(var t=Yc.length,n=e.style,i=[],r=0;r<t;r++)i.push(Yc[r],n[Yc[r]]);return i.t=e,i},RT=function(e,t,n){for(var i=[],r=e.length,a=n?8:0,o;a<r;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},Kc={left:0,top:0},Np=function(e,t,n,i,r,a,o,c,l,u,h,f,d,p){Sn(e)&&(e=e(c)),ii(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Wc("0"+e.substr(3),n):0));var g=d?d.time():0,_,m,x;if(d&&d.seek(0),isNaN(e)||(e=+e),ao(e))d&&(e=Le.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),o&&Xc(o,n,i,!0);else{Sn(t)&&(t=t(c));var y=(e||"0").split(" "),M,S,A,R;x=Gn(t,c)||vt,M=dr(x)||{},(!M||!M.left&&!M.top)&&yi(x).display==="none"&&(R=x.style.display,x.style.display="block",M=dr(x),R?x.style.display=R:x.style.removeProperty("display")),S=Wc(y[0],M[i.d]),A=Wc(y[1]||"0",n),e=M[i.p]-l[i.p]-u+S+r-A,o&&Xc(o,A,i,n-A<20||o._isStart&&A>20),n-=n-A}if(p&&(c[p]=e||-.001,e<0&&(e=0)),a){var P=e+n,b=a._isStart;_="scroll"+i.d2,Xc(a,P,i,b&&P>20||!b&&(h?Math.max(vt[_],si[_]):a.parentNode[_])<=P+1),h&&(l=dr(o),h&&(a.style[i.op.p]=l[i.op.p]-i.op.m-a._offset+nn))}return d&&x&&(_=dr(x),d.seek(f),m=dr(x),d._caScrollDist=_[i.p]-m[i.p],e=e/d._caScrollDist*f),d&&d.seek(g),d?e:Math.round(e)},CT=/(webkit|moz|length|cssText|inset)/i,Up=function(e,t,n,i){if(e.parentNode!==t){var r=e.style,a,o;if(t===vt){e._stOrig=r.cssText,o=yi(e);for(a in o)!+a&&!CT.test(a)&&o[a]&&typeof r[a]=="string"&&a!=="0"&&(r[a]=o[a]);r.top=n,r.left=i}else r.cssText=e._stOrig;Le.core.getCache(e).uncache=1,t.appendChild(e)}},K0=function(e,t,n){var i=t,r=i;return function(a){var o=Math.round(e());return o!==i&&o!==r&&Math.abs(o-i)>3&&Math.abs(o-r)>3&&(a=o,n&&n()),r=i,i=Math.round(a),i}},Dc=function(e,t,n){var i={};i[t.p]="+="+n,Le.set(e,i)},Fp=function(e,t){var n=Jr(e,t),i="_scroll"+t.p2,r=function a(o,c,l,u,h){var f=a.tween,d=c.onComplete,p={};l=l||n();var g=K0(n,l,function(){f.kill(),a.tween=0});return h=u&&h||0,u=u||o-l,f&&f.kill(),c[i]=o,c.inherit=!1,c.modifiers=p,p[i]=function(){return g(l+u*f.ratio+h*f.ratio*f.ratio)},c.onUpdate=function(){ot.cache++,a.tween&&yr()},c.onComplete=function(){a.tween=0,d&&d.call(f)},f=a.tween=Le.to(e,c),f};return e[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},un(e,"wheel",n.wheelHandler),ft.isTouch&&un(e,"touchmove",n.wheelHandler),r},ft=(function(){function s(t,n){na||s.register(Le)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Lh(this),this.init(t,n)}var e=s.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ro){this.update=this.refresh=this.kill=Vi;return}n=Cp(ii(n)||ao(n)||n.nodeType?{trigger:n}:n,Cc);var r=n,a=r.onUpdate,o=r.toggleClass,c=r.id,l=r.onToggle,u=r.onRefresh,h=r.scrub,f=r.trigger,d=r.pin,p=r.pinSpacing,g=r.invalidateOnRefresh,_=r.anticipatePin,m=r.onScrubComplete,x=r.onSnapComplete,y=r.once,M=r.snap,S=r.pinReparent,A=r.pinSpacer,R=r.containerAnimation,P=r.fastScrollEnd,b=r.preventOverlaps,v=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Fn:rn,L=!h&&h!==0,N=Gn(n.scroller||at),k=Le.core.getCache(N),O=Ps(N),W=("pinType"in n?n.pinType:Yr(N,"pinType")||O&&"fixed")==="fixed",X=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],K=L&&n.toggleActions.split(" "),q="markers"in n?n.markers:Cc.markers,D=O?0:parseFloat(yi(N)["border"+v.p2+La])||0,w=this,$=n.onRefreshInit&&function(){return n.onRefreshInit(w)},oe=vT(N,O,v),fe=yT(N,O),he=0,be=0,Q=0,ee=Jr(N,v),le,Ae,ue,Ce,Ke,xe,Ve,U,Be,F,He,_e,Qe,de,Pe,I,E,z,Z,re,te,we,pe,Ue,ve,ae,ce,ke,Fe,ye,Ge,T,H,J,ne,se,ie,ge,Ie;if(w._startClamp=w._endClamp=!1,w._dir=v,_*=45,w.scroller=N,w.scroll=R?R.time.bind(R):ee,Ce=ee(),Kr&&ee.rec==null&&(ee.rec=Ce),w.vars=n,i=i||n.animation,"refreshPriority"in n&&(D0=1,n.refreshPriority===-9999&&(So=w)),k.tweenScroll=k.tweenScroll||{top:Fp(N,rn),left:Fp(N,Fn)},w.tweenTo=le=k.tweenScroll[v.p],w.scrubDuration=function(Se){H=ao(Se)&&Se,H?T?T.duration(Se):T=Le.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:H,paused:!0,onComplete:function(){return m&&m(w)}}):(T&&T.progress(1).kill(),T=0)},i&&(i.vars.lazy=!1,i._initted&&!w.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),w.animation=i.pause(),i.scrollTrigger=w,w.scrubDuration(h),ye=0,c||(c=i.vars.id)),M&&((!ds(M)||M.push)&&(M={snapTo:M}),"scrollBehavior"in vt.style&&Le.set(O?[vt,si]:N,{scrollBehavior:"auto"}),ot.forEach(function(Se){return Sn(Se)&&Se.target===(O?Mt.scrollingElement||si:N)&&(Se.smooth=!1)}),ue=Sn(M.snapTo)?M.snapTo:M.snapTo==="labels"?MT(i):M.snapTo==="labelsDirectional"?ST(i):M.directional!==!1?function(Se,Ze){return Nf(M.snapTo)(Se,bn()-be<500?0:Ze.direction)}:Le.utils.snap(M.snapTo),J=M.duration||{min:.1,max:2},J=ds(J)?xo(J.min,J.max):xo(J,J),ne=Le.delayedCall(M.delay||H/2||.1,function(){var Se=ee(),Ze=bn()-be<500,We=le.tween;if((Ze||Math.abs(w.getVelocity())<10)&&!We&&!Tl&&he!==Se){var je=(Se-xe)/de,Gt=i&&!L?i.totalProgress():je,ct=Ze?0:(Gt-Ge)/(bn()-io)*1e3||0,Ut=Le.utils.clamp(-je,1-je,ea(ct/2)*ct/.185),Yt=je+(M.inertia===!1?0:Ut),It,bt,xt=M,kn=xt.onStart,Dt=xt.onInterrupt,An=xt.onComplete;if(It=ue(Yt,w),ao(It)||(It=Yt),bt=Math.max(0,Math.round(xe+It*de)),Se<=Ve&&Se>=xe&&bt!==Se){if(We&&!We._initted&&We.data<=ea(bt-Se))return;M.inertia===!1&&(Ut=It-je),le(bt,{duration:J(ea(Math.max(ea(Yt-Gt),ea(It-Gt))*.185/ct/.05||0)),ease:M.ease||"power3",data:ea(bt-Se),onInterrupt:function(){return ne.restart(!0)&&Dt&&Qs(w,Dt)},onComplete:function(){w.update(),he=ee(),i&&!L&&(T?T.resetTo("totalProgress",It,i._tTime/i._tDur):i.progress(It)),ye=Ge=i&&!L?i.totalProgress():w.progress,x&&x(w),An&&Qs(w,An)}},Se,Ut*de,bt-Se-Ut*de),kn&&Qs(w,kn,le.tween)}}else w.isActive&&he!==Se&&ne.restart(!0)}).pause()),c&&(Uh[c]=w),f=w.trigger=Gn(f||d!==!0&&d),Ie=f&&f._gsap&&f._gsap.stRevert,Ie&&(Ie=Ie(w)),d=d===!0?f:Gn(d),ii(o)&&(o={targets:f,className:o}),d&&(p===!1||p===vi||(p=!p&&d.parentNode&&d.parentNode.style&&yi(d.parentNode).display==="flex"?!1:Zt),w.pin=d,Ae=Le.core.getCache(d),Ae.spacer?Pe=Ae.pinState:(A&&(A=Gn(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),Ae.spacerIsNative=!!A,A&&(Ae.spacerState=Ic(A))),Ae.spacer=z=A||Mt.createElement("div"),z.classList.add("pin-spacer"),c&&z.classList.add("pin-spacer-"+c),Ae.pinState=Pe=Ic(d)),n.force3D!==!1&&Le.set(d,{force3D:!0}),w.spacer=z=Ae.spacer,Fe=yi(d),Ue=Fe[p+v.os2],re=Le.getProperty(d),te=Le.quickSetter(d,v.a,nn),bu(d,z,Fe),E=Ic(d)),q){_e=ds(q)?Cp(q,Pp):Pp,F=Pc("scroller-start",c,N,v,_e,0),He=Pc("scroller-end",c,N,v,_e,0,F),Z=F["offset"+v.op.d2];var rt=Gn(Yr(N,"content")||N);U=this.markerStart=Pc("start",c,rt,v,_e,Z,0,R),Be=this.markerEnd=Pc("end",c,rt,v,_e,Z,0,R),R&&(ge=Le.quickSetter([U,Be],v.a,nn)),!W&&!($i.length&&Yr(N,"fixedMarkers")===!0)&&(bT(O?vt:N),Le.set([F,He],{force3D:!0}),ae=Le.quickSetter(F,v.a,nn),ke=Le.quickSetter(He,v.a,nn))}if(R){var Ee=R.vars.onUpdate,Oe=R.vars.onUpdateParams;R.eventCallback("onUpdate",function(){w.update(0,0,1),Ee&&Ee.apply(R,Oe||[])})}if(w.previous=function(){return st[st.indexOf(w)-1]},w.next=function(){return st[st.indexOf(w)+1]},w.revert=function(Se,Ze){if(!Ze)return w.kill(!0);var We=Se!==!1||!w.enabled,je=yn;We!==w.isReverted&&(We&&(se=Math.max(ee(),w.scroll.rec||0),Q=w.progress,ie=i&&i.progress()),U&&[U,Be,F,He].forEach(function(Gt){return Gt.style.display=We?"none":"block"}),We&&(yn=w,w.update(We)),d&&(!S||!w.isActive)&&(We?AT(d,z,Pe):bu(d,z,yi(d),ve)),We||w.update(We),yn=je,w.isReverted=We)},w.refresh=function(Se,Ze,We,je){if(!((yn||!w.enabled)&&!Ze)){if(d&&Se&&Ei){un(s,"scrollEnd",H0);return}!Nn&&$&&$(w),yn=w,le.tween&&!We&&(le.tween.kill(),le.tween=0),T&&T.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Ne){return Ne.vars.immediateRender&&Ne.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),w.isReverted||w.revert(!0,!0),w._subPinOffset=!1;var Gt=oe(),ct=fe(),Ut=R?R.duration():Ki(N,v),Yt=de<=.01||!de,It=0,bt=je||0,xt=ds(We)?We.end:n.end,kn=n.endTrigger||f,Dt=ds(We)?We.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),An=w.pinnedContainer=n.pinnedContainer&&Gn(n.pinnedContainer,w),pi=f&&Math.max(0,st.indexOf(w))||0,en=pi,tn,on,C,G,j,Y,V,me,Re,De,Me,Xe,Ye;for(q&&ds(We)&&(Xe=Le.getProperty(F,v.p),Ye=Le.getProperty(He,v.p));en-- >0;)Y=st[en],Y.end||Y.refresh(0,1)||(yn=w),V=Y.pin,V&&(V===f||V===d||V===An)&&!Y.isReverted&&(De||(De=[]),De.unshift(Y),Y.revert(!0,!0)),Y!==st[en]&&(pi--,en--);for(Sn(Dt)&&(Dt=Dt(w)),Dt=Ep(Dt,"start",w),xe=Np(Dt,f,Gt,v,ee(),U,F,w,ct,D,W,Ut,R,w._startClamp&&"_startClamp")||(d?-.001:0),Sn(xt)&&(xt=xt(w)),ii(xt)&&!xt.indexOf("+=")&&(~xt.indexOf(" ")?xt=(ii(Dt)?Dt.split(" ")[0]:"")+xt:(It=Wc(xt.substr(2),Gt),xt=ii(Dt)?Dt:(R?Le.utils.mapRange(0,R.duration(),R.scrollTrigger.start,R.scrollTrigger.end,xe):xe)+It,kn=f)),xt=Ep(xt,"end",w),Ve=Math.max(xe,Np(xt||(kn?"100% 0":Ut),kn,Gt,v,ee()+It,Be,He,w,ct,D,W,Ut,R,w._endClamp&&"_endClamp"))||-.001,It=0,en=pi;en--;)Y=st[en]||{},V=Y.pin,V&&Y.start-Y._pinPush<=xe&&!R&&Y.end>0&&(tn=Y.end-(w._startClamp?Math.max(0,Y.start):Y.start),(V===f&&Y.start-Y._pinPush<xe||V===An)&&isNaN(Dt)&&(It+=tn*(1-Y.progress)),V===d&&(bt+=tn));if(xe+=It,Ve+=It,w._startClamp&&(w._startClamp+=It),w._endClamp&&!Nn&&(w._endClamp=Ve||-.001,Ve=Math.min(Ve,Ki(N,v))),de=Ve-xe||(xe-=.01)&&.001,Yt&&(Q=Le.utils.clamp(0,1,Le.utils.normalize(xe,Ve,se))),w._pinPush=bt,U&&It&&(tn={},tn[v.a]="+="+It,An&&(tn[v.p]="-="+ee()),Le.set([U,Be],tn)),d&&!(Nh&&w.end>=Ki(N,v)))tn=yi(d),G=v===rn,C=ee(),we=parseFloat(re(v.a))+bt,!Ut&&Ve>1&&(Me=(O?Mt.scrollingElement||si:N).style,Me={style:Me,value:Me["overflow"+v.a.toUpperCase()]},O&&yi(vt)["overflow"+v.a.toUpperCase()]!=="scroll"&&(Me.style["overflow"+v.a.toUpperCase()]="scroll")),bu(d,z,tn),E=Ic(d),on=dr(d,!0),me=W&&Jr(N,G?Fn:rn)(),p?(ve=[p+v.os2,de+bt+nn],ve.t=z,en=p===Zt?pl(d,v)+de+bt:0,en&&(ve.push(v.d,en+nn),z.style.flexBasis!=="auto"&&(z.style.flexBasis=en+nn)),va(ve),An&&st.forEach(function(Ne){Ne.pin===An&&Ne.vars.pinSpacing!==!1&&(Ne._subPinOffset=!0)}),W&&ee(se)):(en=pl(d,v),en&&z.style.flexBasis!=="auto"&&(z.style.flexBasis=en+nn)),W&&(j={top:on.top+(G?C-xe:me)+nn,left:on.left+(G?me:C-xe)+nn,boxSizing:"border-box",position:"fixed"},j[Ts]=j["max"+La]=Math.ceil(on.width)+nn,j[Es]=j["max"+Lf]=Math.ceil(on.height)+nn,j[vi]=j[vi+bo]=j[vi+vo]=j[vi+Mo]=j[vi+yo]="0",j[Zt]=tn[Zt],j[Zt+bo]=tn[Zt+bo],j[Zt+vo]=tn[Zt+vo],j[Zt+Mo]=tn[Zt+Mo],j[Zt+yo]=tn[Zt+yo],I=RT(Pe,j,S),Nn&&ee(0)),i?(Re=i._initted,gu(1),i.render(i.duration(),!0,!0),pe=re(v.a)-we+de+bt,ce=Math.abs(de-pe)>1,W&&ce&&I.splice(I.length-2,2),i.render(0,!0,!0),Re||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),gu(0)):pe=de,Me&&(Me.value?Me.style["overflow"+v.a.toUpperCase()]=Me.value:Me.style.removeProperty("overflow-"+v.a));else if(f&&ee()&&!R)for(on=f.parentNode;on&&on!==vt;)on._pinOffset&&(xe-=on._pinOffset,Ve-=on._pinOffset),on=on.parentNode;De&&De.forEach(function(Ne){return Ne.revert(!1,!0)}),w.start=xe,w.end=Ve,Ce=Ke=Nn?se:ee(),!R&&!Nn&&!Kr&&(Ce<se&&ee(se),w.scroll.rec=0),w.revert(!1,!0),be=bn(),ne&&(he=-1,ne.restart(!0)),yn=0,i&&L&&(i._initted||ie)&&i.progress()!==ie&&i.progress(ie||0,!0).render(i.time(),!0,!0),(Yt||Q!==w.progress||R||g||i&&!i._initted)&&(i&&!L&&(i._initted||Q||i.vars.immediateRender!==!1)&&i.totalProgress(R&&xe<-.001&&!Q?Le.utils.normalize(xe,Ve,0):Q,!0),w.progress=Yt||(Ce-xe)/de===Q?0:Q),d&&p&&(z._pinOffset=Math.round(w.progress*pe)),T&&T.invalidate(),isNaN(Xe)||(Xe-=Le.getProperty(F,v.p),Ye-=Le.getProperty(He,v.p),Dc(F,v,Xe),Dc(U,v,Xe-(je||0)),Dc(He,v,Ye),Dc(Be,v,Ye-(je||0))),Yt&&!Nn&&w.update(),u&&!Nn&&!Qe&&(Qe=!0,u(w),Qe=!1)}},w.getVelocity=function(){return(ee()-Ke)/(bn()-io)*1e3||0},w.endAnimation=function(){Ja(w.callbackAnimation),i&&(T?T.progress(1):i.paused()?L||Ja(i,w.direction<0,1):Ja(i,i.reversed()))},w.labelToScroll=function(Se){return i&&i.labels&&(xe||w.refresh()||xe)+i.labels[Se]/i.duration()*de||0},w.getTrailing=function(Se){var Ze=st.indexOf(w),We=w.direction>0?st.slice(0,Ze).reverse():st.slice(Ze+1);return(ii(Se)?We.filter(function(je){return je.vars.preventOverlaps===Se}):We).filter(function(je){return w.direction>0?je.end<=xe:je.start>=Ve})},w.update=function(Se,Ze,We){if(!(R&&!We&&!Se)){var je=Nn===!0?se:w.scroll(),Gt=Se?0:(je-xe)/de,ct=Gt<0?0:Gt>1?1:Gt||0,Ut=w.progress,Yt,It,bt,xt,kn,Dt,An,pi;if(Ze&&(Ke=Ce,Ce=R?ee():je,M&&(Ge=ye,ye=i&&!L?i.totalProgress():ct)),_&&d&&!yn&&!Ec&&Ei&&(!ct&&xe<je+(je-Ke)/(bn()-io)*_?ct=1e-4:ct===1&&Ve>je+(je-Ke)/(bn()-io)*_&&(ct=.9999)),ct!==Ut&&w.enabled){if(Yt=w.isActive=!!ct&&ct<1,It=!!Ut&&Ut<1,Dt=Yt!==It,kn=Dt||!!ct!=!!Ut,w.direction=ct>Ut?1:-1,w.progress=ct,kn&&!yn&&(bt=ct&&!Ut?0:ct===1?1:Ut===1?2:3,L&&(xt=!Dt&&K[bt+1]!=="none"&&K[bt+1]||K[bt],pi=i&&(xt==="complete"||xt==="reset"||xt in i))),b&&(Dt||pi)&&(pi||h||!i)&&(Sn(b)?b(w):w.getTrailing(b).forEach(function(C){return C.endAnimation()})),L||(T&&!yn&&!Ec?(T._dp._time-T._start!==T._time&&T.render(T._dp._time-T._start),T.resetTo?T.resetTo("totalProgress",ct,i._tTime/i._tDur):(T.vars.totalProgress=ct,T.invalidate().restart())):i&&i.totalProgress(ct,!!(yn&&(be||Se)))),d){if(Se&&p&&(z.style[p+v.os2]=Ue),!W)te(so(we+pe*ct));else if(kn){if(An=!Se&&ct>Ut&&Ve+1>je&&je+1>=Ki(N,v),S)if(!Se&&(Yt||An)){var en=dr(d,!0),tn=je-xe;Up(d,vt,en.top+(v===rn?tn:0)+nn,en.left+(v===rn?0:tn)+nn)}else Up(d,z);va(Yt||An?I:E),ce&&ct<1&&Yt||te(we+(ct===1&&!An?pe:0))}}M&&!le.tween&&!yn&&!Ec&&ne.restart(!0),o&&(Dt||y&&ct&&(ct<1||!xu))&&Ho(o.targets).forEach(function(C){return C.classList[Yt||y?"add":"remove"](o.className)}),a&&!L&&!Se&&a(w),kn&&!yn?(L&&(pi&&(xt==="complete"?i.pause().totalProgress(1):xt==="reset"?i.restart(!0).pause():xt==="restart"?i.restart(!0):i[xt]()),a&&a(w)),(Dt||!xu)&&(l&&Dt&&Qs(w,l),X[bt]&&Qs(w,X[bt]),y&&(ct===1?w.kill(!1,1):X[bt]=0),Dt||(bt=ct===1?1:3,X[bt]&&Qs(w,X[bt]))),P&&!Yt&&Math.abs(w.getVelocity())>(ao(P)?P:2500)&&(Ja(w.callbackAnimation),T?T.progress(1):Ja(i,xt==="reverse"?1:!ct,1))):L&&a&&!yn&&a(w)}if(ke){var on=R?je/R.duration()*(R._caScrollDist||0):je;ae(on+(F._isFlipped?1:0)),ke(on)}ge&&ge(-je/R.duration()*(R._caScrollDist||0))}},w.enable=function(Se,Ze){w.enabled||(w.enabled=!0,un(N,"resize",oo),O||un(N,"scroll",ta),$&&un(s,"refreshInit",$),Se!==!1&&(w.progress=Q=0,Ce=Ke=he=ee()),Ze!==!1&&w.refresh())},w.getTween=function(Se){return Se&&le?le.tween:T},w.setPositions=function(Se,Ze,We,je){if(R){var Gt=R.scrollTrigger,ct=R.duration(),Ut=Gt.end-Gt.start;Se=Gt.start+Ut*Se/ct,Ze=Gt.start+Ut*Ze/ct}w.refresh(!1,!1,{start:Ap(Se,We&&!!w._startClamp),end:Ap(Ze,We&&!!w._endClamp)},je),w.update()},w.adjustPinSpacing=function(Se){if(ve&&Se){var Ze=ve.indexOf(v.d)+1;ve[Ze]=parseFloat(ve[Ze])+Se+nn,ve[1]=parseFloat(ve[1])+Se+nn,va(ve)}},w.disable=function(Se,Ze){if(Se!==!1&&w.revert(!0,!0),w.enabled&&(w.enabled=w.isActive=!1,Ze||T&&T.pause(),se=0,Ae&&(Ae.uncache=1),$&&ln(s,"refreshInit",$),ne&&(ne.pause(),le.tween&&le.tween.kill()&&(le.tween=0)),!O)){for(var We=st.length;We--;)if(st[We].scroller===N&&st[We]!==w)return;ln(N,"resize",oo),O||ln(N,"scroll",ta)}},w.kill=function(Se,Ze){w.disable(Se,Ze),T&&!Ze&&T.kill(),c&&delete Uh[c];var We=st.indexOf(w);We>=0&&st.splice(We,1),We===Ln&&qc>0&&Ln--,We=0,st.forEach(function(je){return je.scroller===w.scroller&&(We=1)}),We||Nn||Kr||(w.scroll.rec=0),i&&(i.scrollTrigger=null,Se&&i.revert({kill:!1}),Ze||i.kill()),U&&[U,Be,F,He].forEach(function(je){return je.parentNode&&je.parentNode.removeChild(je)}),So===w&&(So=0),d&&(Ae&&(Ae.uncache=1),We=0,st.forEach(function(je){return je.pin===d&&We++}),We||(Ae.spacer=0)),n.onKill&&n.onKill(w)},st.push(w),w.enable(!1,!1),Ie&&Ie(w),i&&i.add&&!de){var Je=w.update;w.update=function(){w.update=Je,ot.cache++,xe||Ve||w.refresh()},Le.delayedCall(.01,w.update),de=.01,xe=Ve=0}else w.refresh();d&&ET()},s.register=function(n){return na||(Le=n||O0(),F0()&&window.document&&s.enable(),na=ro),na},s.defaults=function(n){if(n)for(var i in n)Cc[i]=n[i];return Cc},s.disable=function(n,i){ro=0,st.forEach(function(a){return a[i?"kill":"disable"](n)}),ln(at,"wheel",ta),ln(Mt,"scroll",ta),clearInterval(Tc),ln(Mt,"touchcancel",Vi),ln(vt,"touchstart",Vi),wc(ln,Mt,"pointerdown,touchstart,mousedown",wp),wc(ln,Mt,"pointerup,touchend,mouseup",Rp),dl.kill(),Ac(ln);for(var r=0;r<ot.length;r+=3)Rc(ln,ot[r],ot[r+1]),Rc(ln,ot[r],ot[r+2])},s.enable=function(){if(at=window,Mt=document,si=Mt.documentElement,vt=Mt.body,Le){if(Ho=Le.utils.toArray,xo=Le.utils.clamp,Lh=Le.core.context||Vi,gu=Le.core.suppressOverwrites||Vi,Cf=at.history.scrollRestoration||"auto",Fh=at.pageYOffset||0,Le.core.globals("ScrollTrigger",s),vt){ro=1,xa=document.createElement("div"),xa.style.height="100vh",xa.style.position="absolute",Y0(),xT(),jt.register(Le),s.isTouch=jt.isTouch,Ur=jt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Dh=jt.isTouch===1,un(at,"wheel",ta),Rf=[at,Mt,si,vt],Le.matchMedia?(s.matchMedia=function(u){var h=Le.matchMedia(),f;for(f in u)h.add(f,u[f]);return h},Le.addEventListener("matchMediaInit",function(){X0(),Uf()}),Le.addEventListener("matchMediaRevert",function(){return W0()}),Le.addEventListener("matchMedia",function(){xs(0,1),Ds("matchMedia")}),Le.matchMedia().add("(orientation: portrait)",function(){return yu(),yu})):console.warn("Requires GSAP 3.11.0 or later"),yu(),un(Mt,"scroll",ta);var n=vt.hasAttribute("style"),i=vt.style,r=i.borderTopStyle,a=Le.core.Animation.prototype,o,c;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=dr(vt),rn.m=Math.round(o.top+rn.sc())||0,Fn.m=Math.round(o.left+Fn.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),n||(vt.setAttribute("style",""),vt.removeAttribute("style")),Tc=setInterval(Ip,250),Le.delayedCall(.5,function(){return Ec=0}),un(Mt,"touchcancel",Vi),un(vt,"touchstart",Vi),wc(un,Mt,"pointerdown,touchstart,mousedown",wp),wc(un,Mt,"pointerup,touchend,mouseup",Rp),Ih=Le.utils.checkPrefix("transform"),Yc.push(Ih),na=bn(),dl=Le.delayedCall(.2,xs).pause(),ia=[Mt,"visibilitychange",function(){var u=at.innerWidth,h=at.innerHeight;Mt.hidden?(Sp=u,Tp=h):(Sp!==u||Tp!==h)&&oo()},Mt,"DOMContentLoaded",xs,at,"load",xs,at,"resize",oo],Ac(un),st.forEach(function(u){return u.enable(0,1)}),c=0;c<ot.length;c+=3)Rc(ln,ot[c],ot[c+1]),Rc(ln,ot[c],ot[c+2])}else if(Mt){var l=function u(){s.enable(),Mt.removeEventListener("DOMContentLoaded",u)};Mt.addEventListener("DOMContentLoaded",l)}}},s.config=function(n){"limitCallbacks"in n&&(xu=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Tc)||(Tc=i)&&setInterval(Ip,i),"ignoreMobileResize"in n&&(Dh=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Ac(ln)||Ac(un,n.autoRefreshEvents||"none"),L0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=Gn(n),a=ot.indexOf(r),o=Ps(r);~a&&ot.splice(a,o?6:2),i&&(o?$i.unshift(at,i,vt,i,si,i):$i.unshift(r,i))},s.clearMatchMedia=function(n){st.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var a=(ii(n)?Gn(n):n).getBoundingClientRect(),o=a[r?Ts:Es]*i||0;return r?a.right-o>0&&a.left+o<at.innerWidth:a.bottom-o>0&&a.top+o<at.innerHeight},s.positionInViewport=function(n,i,r){ii(n)&&(n=Gn(n));var a=n.getBoundingClientRect(),o=a[r?Ts:Es],c=i==null?o/2:i in ml?ml[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return r?(a.left+c)/at.innerWidth:(a.top+c)/at.innerHeight},s.killAll=function(n){if(st.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=Is.killAll||[];Is={},i.forEach(function(r){return r()})}},s})();ft.version="3.15.1";ft.saveStyles=function(s){return s?Ho(s).forEach(function(e){if(e&&e.style){var t=ni.indexOf(e);t>=0&&ni.splice(t,5),ni.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Le.core.getCache(e),Lh())}}):ni};ft.revert=function(s,e){return Uf(!s,e)};ft.create=function(s,e){return new ft(s,e)};ft.refresh=function(s){return s?oo(!0):(na||ft.register())&&xs(!0)};ft.update=function(s){return++ot.cache&&yr(s===!0?2:0)};ft.clearScrollMemory=q0;ft.maxScroll=function(s,e){return Ki(s,e?Fn:rn)};ft.getScrollFunc=function(s,e){return Jr(Gn(s),e?Fn:rn)};ft.getById=function(s){return Uh[s]};ft.getAll=function(){return st.filter(function(s){return s.vars.id!=="ScrollSmoother"})};ft.isScrolling=function(){return!!Ei};ft.snapDirectional=Nf;ft.addEventListener=function(s,e){var t=Is[s]||(Is[s]=[]);~t.indexOf(e)||t.push(e)};ft.removeEventListener=function(s,e){var t=Is[s],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};ft.batch=function(s,e){var t=[],n={},i=e.interval||.016,r=e.batchMax||1e9,a=function(l,u){var h=[],f=[],d=Le.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(p){h.length||d.restart(!0),h.push(p.trigger),f.push(p),r<=h.length&&d.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&Sn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return Sn(r)&&(r=r(),un(ft,"refresh",function(){return r=e.batchMax()})),Ho(s).forEach(function(c){var l={};for(o in n)l[o]=n[o];l.trigger=c,t.push(ft.create(l))}),t};var Op=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Mu=function s(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(jt.isTouch?" pinch-zoom":""):"none",e===si&&s(vt,t)},Lc={auto:1,scroll:1},PT=function(e){var t=e.event,n=e.target,i=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,a=r._gsap||Le.core.getCache(r),o=bn(),c;if(!a._isScrollT||o-a._isScrollT>2e3){for(;r&&r!==vt&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(Lc[(c=yi(r)).overflowY]||Lc[c.overflowX]));)r=r.parentNode;a._isScroll=r&&r!==n&&!Ps(r)&&(Lc[(c=yi(r)).overflowY]||Lc[c.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},j0=function(e,t,n,i){return jt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&PT,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&un(Mt,jt.eventTypes[0],kp,!1,!0)},onDisable:function(){return ln(Mt,jt.eventTypes[0],kp,!0)}})},IT=/(input|label|select|textarea)/i,Bp,kp=function(e){var t=IT.test(e.target.tagName);(t||Bp)&&(e._gsapAllow=!0,Bp=t)},DT=function(e){ds(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,r=t.allowNestedScroll,a=t.onRelease,o,c,l=Gn(e.target)||si,u=Le.core.globals().ScrollSmoother,h=u&&u.get(),f=Ur&&(e.content&&Gn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=Jr(l,rn),p=Jr(l,Fn),g=1,_=(jt.isTouch&&at.visualViewport?at.visualViewport.scale*at.visualViewport.width:at.outerWidth)/at.innerWidth,m=0,x=Sn(i)?function(){return i(o)}:function(){return i||2.8},y,M,S=j0(l,e.type,!0,r),A=function(){return M=!1},R=Vi,P=Vi,b=function(){c=Ki(l,rn),P=xo(Ur?1:0,c),n&&(R=xo(0,Ki(l,Fn))),y=As},v=function(){f._gsap.y=so(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},L=function(){if(M){requestAnimationFrame(A);var q=so(o.deltaY/2),D=P(d.v-q);if(f&&D!==d.v+d.offset){d.offset=D-d.v;var w=so((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+w+", 0, 1)",f._gsap.y=w+"px",d.cacheID=ot.cache,yr()}return!0}d.offset&&v(),M=!0},N,k,O,W,X=function(){b(),N.isActive()&&N.vars.scrollY>c&&(d()>c?N.progress(1)&&d(c):N.resetTo("scrollY",c))};return f&&Le.set(f,{y:"+=0"}),e.ignoreCheck=function(K){return Ur&&K.type==="touchmove"&&L()||g>1.05&&K.type!=="touchstart"||o.isGesturing||K.touches&&K.touches.length>1},e.onPress=function(){M=!1;var K=g;g=so((at.visualViewport&&at.visualViewport.scale||1)/_),N.pause(),K!==g&&Mu(l,g>1.01?!0:n?!1:"x"),k=p(),O=d(),b(),y=As},e.onRelease=e.onGestureStart=function(K,q){if(d.offset&&v(),!q)W.restart(!0);else{ot.cache++;var D=x(),w,$;n&&(w=p(),$=w+D*.05*-K.velocityX/.227,D*=Op(p,w,$,Ki(l,Fn)),N.vars.scrollX=R($)),w=d(),$=w+D*.05*-K.velocityY/.227,D*=Op(d,w,$,Ki(l,rn)),N.vars.scrollY=P($),N.invalidate().duration(D).play(.01),(Ur&&N.vars.scrollY>=c||w>=c-1)&&Le.to({},{onUpdate:X,duration:D})}a&&a(K)},e.onWheel=function(){N._ts&&N.pause(),bn()-m>1e3&&(y=0,m=bn())},e.onChange=function(K,q,D,w,$){if(As!==y&&b(),q&&n&&p(R(w[2]===q?k+(K.startX-K.x):p()+q-w[1])),D){d.offset&&v();var oe=$[2]===D,fe=oe?O+K.startY-K.y:d()+D-$[1],he=P(fe);oe&&fe!==he&&(O+=he-fe),d(he)}(D||q)&&yr()},e.onEnable=function(){Mu(l,n?!1:"x"),ft.addEventListener("refresh",X),un(at,"resize",X),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=p.smooth=!1),S.enable()},e.onDisable=function(){Mu(l,!0),ln(at,"resize",X),ft.removeEventListener("refresh",X),S.kill()},e.lockAxis=e.lockAxis!==!1,o=new jt(e),o.iOS=Ur,Ur&&!d()&&d(1),Ur&&Le.ticker.add(Vi),W=o._dc,N=Le.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:K0(d,d(),function(){return N.pause()})},onUpdate:yr,onComplete:W.vars.onComplete}),o};ft.sort=function(s){if(Sn(s))return st.sort(s);var e=at.pageYOffset||0;return ft.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+at.innerHeight}),st.sort(s||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};ft.observe=function(s){return new jt(s)};ft.normalizeScroll=function(s){if(typeof s>"u")return Dn;if(s===!0&&Dn)return Dn.enable();if(s===!1){Dn&&Dn.kill(),Dn=s;return}var e=s instanceof jt?s:DT(s);return Dn&&Dn.target===e.target&&Dn.kill(),Ps(e.target)&&(Dn=e),e};ft.core={_getVelocityProp:Ph,_inputObserver:j0,_scrollers:ot,_proxies:$i,bridge:{ss:function(){Ei||Ds("scrollStart"),Ei=bn()},ref:function(){return yn}}};O0()&&Le.registerPlugin(ft);wf.registerPlugin(ft);function LT(s){const e=[[155,100,200,0,12,15],[32,9,139,-45,4,108],u1,[5,39,-26,0,41,-65],[2,95,7,0,1,0],[-22,11,18,-8,2,-4],[0,12,28,10,2,8],[17,13,17,24,2,-12],[28,12,24,40,2,3],[39,7,16,54,2,0],[30,22,12,0,41,-65]],t=[...document.querySelectorAll(".chapter")],n={p:0},i=matchMedia("(prefers-reduced-motion: reduce)").matches;return wf.to(n,{p:e.length-1,ease:"none",scrollTrigger:{trigger:"#story",start:"top top",end:"bottom bottom",scrub:i?!0:.55}}),()=>{const r=n.p,a=Math.min(Math.floor(r),e.length-2),o=i?Math.round(r-a):Pi.smoothstep(r-a,0,1),c=e[a].map((u,h)=>Pi.lerp(u,e[a+1][h],o));s.position.set(...c.slice(0,3)),s.lookAt(...c.slice(3));const l=Math.round(r*10);return document.querySelector("#progress-fill").style.width=l+"%",document.querySelector("#progress-number").textContent=l+"%",document.querySelector("#chapter-indicator").textContent=t[Math.round(r)].dataset.title,r}}function NT({scene:s,renderer:e,stadium:t,city:n,moon:i}){const r={sky:"#080e20",fog:"#080e20",exposure:1.45,hemiSky:"#b6d9ff",hemiGround:"#263446",hemi:1,sun:"#d2e4ff",sunIntensity:1,sunPosition:[-100,150,80]},a={sky:"#8dbde8",fog:"#b6d5eb",exposure:1.12,hemiSky:"#fff4de",hemiGround:"#798c72",hemi:1.8,sun:"#fff1d5",sunIntensity:5.1,sunPosition:[130,220,-110],pointFactor:.03,emissiveFactor:.12},o=s.children.find(O=>O.isHemisphereLight),c=[],l=[],u=new Map,h=new Set;s.traverse(O=>{if(O.isSpotLight&&c.push({light:O,intensity:O.intensity}),O.isPointLight&&l.push({light:O,intensity:O.intensity}),!(!O.isMesh&&!O.isInstancedMesh))for(const W of Array.isArray(O.material)?O.material:[O.material])!W||h.has(W)||(h.add(W),W.emissive&&W.emissiveIntensity>0&&u.set(W,W.emissiveIntensity))});const f=document.querySelector("#theme-toggle"),d=document.querySelector("#theme-text"),p=document.querySelector("#theme-icon"),g=document.querySelector("#match-label"),_=document.querySelector('meta[name="theme-color"]'),m=new ze,x=new ze,y=new ze,M=new ze,S=new ze,A=new B;let R="night";try{R=localStorage.getItem("oan-match-theme")==="day"?"day":"night"}catch{}let P=R==="day"?1:0,b=P;function v(){const O=b===1;document.body.classList.toggle("day-match",O),f.setAttribute("aria-pressed",String(O)),f.setAttribute("aria-label",O?"Switch to night match":"Switch to daytime match"),d.textContent=O?"NIGHT MATCH":"DAY MATCH",p.textContent=O?"☾":"☀",g.textContent=O?"MATCH DAY":"MATCH NIGHT",_&&(_.content=O?"#a6cce9":"#05091a")}function L(O){b=O==="day"?1:0,v();try{localStorage.setItem("oan-match-theme",O)}catch{}}f.addEventListener("click",()=>L(b?"night":"day"));let N=performance.now();function k(){const O=performance.now(),W=Math.min((O-N)/1e3,.06);N=O,P+=(b-P)*(1-Math.exp(-W*4.5)),Math.abs(b-P)<5e-4&&(P=b);const X=P,K=Pi.lerp;s.background.copy(m.set(r.sky).lerp(new ze(a.sky),X)),s.fog&&s.fog.color.copy(x.set(r.fog).lerp(new ze(a.fog),X)),e.toneMappingExposure=K(r.exposure,a.exposure,X),o&&(o.color.copy(y.set(r.hemiSky).lerp(new ze(a.hemiSky),X)),o.groundColor.copy(M.set(r.hemiGround).lerp(new ze(a.hemiGround),X)),o.intensity=K(r.hemi,a.hemi,X)),i.color.copy(S.set(r.sun).lerp(new ze(a.sun),X)),i.intensity=K(r.sunIntensity,a.sunIntensity,X),A.set(...r.sunPosition).lerp(new B(...a.sunPosition),X),i.position.copy(A);for(const{light:q,intensity:D}of c)q.intensity=D*(1-X);for(const{light:q,intensity:D}of l)q.intensity=D*K(1,a.pointFactor,X);for(const[q,D]of u)q.emissiveIntensity=D*K(1,a.emissiveFactor,X);document.documentElement.style.setProperty("--day-blend",X.toFixed(3))}return v(),k(),{update:k,setTheme:L}}const Ar=new Rg;Ar.background=new ze("#080e20");Ar.fog=new Zh("#080e20",.00155);const Xo=new Un(48,innerWidth/innerHeight,.1,1400),di=new c1({antialias:!0,powerPreference:"high-performance"});di.setSize(innerWidth,innerHeight);di.setPixelRatio(Math.min(devicePixelRatio,1.7));di.outputColorSpace=Lt;di.toneMapping=Hp;di.toneMappingExposure=1.25;di.shadowMap.enabled=!0;di.shadowMap.type=Vp;document.getElementById("experience").appendChild(di.domElement);Ar.add(new tx("#b6d9ff","#263446",3.25));const nr=new ym("#d2e4ff",3.5);nr.position.set(-100,150,80);nr.castShadow=!0;nr.shadow.mapSize.set(2048,2048);nr.shadow.camera.left=-150;nr.shadow.camera.right=150;nr.shadow.camera.top=150;nr.shadow.camera.bottom=-150;nr.shadow.bias=-15e-5;Ar.add(nr);const _l=h1(Ar),Ff=f1(Ar);Am(Ff.root);Am(_l.root);const UT=K1(Ar,di,Xo),FT=LT(Xo),OT=NT({scene:Ar,renderer:di,stadium:_l,city:Ff,moon:nr}),BT=new ox;function $0(){requestAnimationFrame($0);const s=BT.getElapsedTime();Ff.update(s),_l.update(s);const e=FT();UT.update(s,e),OT.update(),_l.display(e),di.render(Ar,Xo)}$0();window.addEventListener("resize",()=>{Xo.aspect=innerWidth/innerHeight,Xo.updateProjectionMatrix(),di.setSize(innerWidth,innerHeight),di.setPixelRatio(Math.min(devicePixelRatio,1.7))});if(new URLSearchParams(location.search).has("promo")){let e=function(t){const n=Math.min(1,(t-s)/45e3);window.scrollTo({top:n*(document.documentElement.scrollHeight-innerHeight),behavior:"instant"}),n<1&&requestAnimationFrame(e)};var kT=e;const s=performance.now();requestAnimationFrame(e)}
