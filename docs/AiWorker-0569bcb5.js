var P=Object.defineProperty;var A=(p,c,d)=>c in p?P(p,c,{enumerable:!0,configurable:!0,writable:!0,value:d}):p[c]=d;var u=(p,c,d)=>(A(p,typeof c!="symbol"?c+"":c,d),d);(function(){"use strict";var p=(a=>(a.TOP="TOP",a.BOTTOM="BOTTOM",a))(p||{});const c=a=>a==="TOP"?"BOTTOM":"TOP";class d{constructor(e){u(this,"boardLength");u(this,"totalStones");this.boardLength=e.length,this.totalStones=e.reduce((t,s)=>t+s,0)}getSideStorePocketIndex(e){return e===p.TOP?this.boardLength/2-1:this.boardLength-1}getOppositeSideStorePocketIndex(e){return this.boardLength-2-e}isPocketStore(e){return e===this.boardLength/2-1||e===this.boardLength-1}checkPocketOwnership(e,t){return e===p.TOP&&t<this.boardLength/2||e===p.BOTTOM&&t>=this.boardLength/2}getNextPocketId(e){return(e+1)%this.boardLength}}class M{constructor(e){u(this,"playerSide");this.playerSide=e}checkCurrentPlayerScore(e){return e[new d(e).getSideStorePocketIndex(this.playerSide)]}getAvailableMovesForPlayer(e){const t=new d(e);return e.reduce((s,r,n)=>(t.checkPocketOwnership(this.playerSide,n)&&!t.isPocketStore(n)&&r>0&&s.push(n),s),[])}getAvailableMovesForOpponentPlayer(e){const t=new d(e);return e.reduce((s,r,n)=>(t.checkPocketOwnership(c(this.playerSide),n)&&!t.isPocketStore(n)&&r>0&&s.push(n),s),[])}}class y extends Error{constructor(e){super(e)}}class S{constructor(e,t){u(this,"staticBoardAnalyser");u(this,"engineSettings");this.staticBoardAnalyser=new d(e),this.engineSettings=t||{}}makeMove(e,t){this.validateMove(e,t);const{redistributionMovesRecord:s,currentPocketId:r,boardAfterRedistribution:n}=this.redistributeStones(e,t),i=e.player,{captureMovesRecord:o,boardAfterCapture:l}=this.checkCapture(i,r,n),h=this.checkGameOver(i,l);return h.gameOver?{winningPlayer:h.winningPlayer,nextTurnPlayer:i,boardConfig:h.boardConfig,gameOver:!0,movesRecord:this.engineSettings.recordMoves?s.concat(o).concat(h.gameOverMovesRecord):void 0}:{nextTurnPlayer:this.checkNextPlayerTurn(i,r),boardConfig:l,gameOver:!1,movesRecord:this.engineSettings.recordMoves?s.concat(o):void 0}}redistributeStones(e,t){const s=[...t];let r=e.pocketId,n=s[e.pocketId];s[r]=0;const i=[{index:r,newStonesAmouns:0}];for(;n>0;)r=this.staticBoardAnalyser.getNextPocketId(r),!(this.staticBoardAnalyser.isPocketStore(r)&&!this.staticBoardAnalyser.checkPocketOwnership(e.player,r))&&(++s[r],i.push({index:r,newStonesAmouns:s[r]}),--n);return{redistributionMovesRecord:i,currentPocketId:r,boardAfterRedistribution:s}}checkNextPlayerTurn(e,t){return this.staticBoardAnalyser.checkPocketOwnership(e,t)&&this.staticBoardAnalyser.isPocketStore(t)?e:c(e)}checkCapture(e,t,s){const r=[...s],n=[];if(this.staticBoardAnalyser.checkPocketOwnership(e,t)&&!this.staticBoardAnalyser.isPocketStore(t)&&r[t]===1){const i=this.staticBoardAnalyser.getOppositeSideStorePocketIndex(t);if(r[i]>0){const o=this.staticBoardAnalyser.getSideStorePocketIndex(e),l=r[i];r[i]=0,n.push({index:i,newStonesAmouns:0}),r[o]+=l,n.push({index:o,newStonesAmouns:r[o]});const h=r[t];r[t]=0,n.push({index:t,newStonesAmouns:0}),r[o]+=h,n.push({index:o,newStonesAmouns:r[o]})}}return{captureMovesRecord:n,boardAfterCapture:r}}validateMove(e,t){if(!this.staticBoardAnalyser.checkPocketOwnership(e.player,e.pocketId))throw new y(`Player '${e.player}' cannot select an opponent's pocket (${e.pocketId})`);if(this.staticBoardAnalyser.isPocketStore(e.pocketId))throw new y(`Player '${e.player}' cannot select a store (${e.pocketId})`);if(t[e.pocketId]===0)throw new y(`Player '${e.player}' cannot select an empty pocket (${e.pocketId})`)}checkGameOver(e,t){const s=new M(e);if(s.getAvailableMovesForPlayer(t).length!==0&&s.getAvailableMovesForOpponentPlayer(t).length!==0)return{boardConfig:t,winningPlayer:void 0,gameOverMovesRecord:[],gameOver:!1};const r=c(e),n=this.staticBoardAnalyser.getSideStorePocketIndex(e),i=this.staticBoardAnalyser.getSideStorePocketIndex(r),o=this.getGameOverMovesRecord(t,e);let l;return t[n]>t[i]?l=e:t[n]<t[i]&&(l=r),{gameOver:!0,boardConfig:t,gameOverMovesRecord:o,winningPlayer:l}}getGameOverMovesRecord(e,t){const s=[];if(this.engineSettings.gameOverCaptureVariation){const r=this.staticBoardAnalyser.getSideStorePocketIndex(t);e.forEach(o=>{this.staticBoardAnalyser.checkPocketOwnership(t,o)&&o!==r&&(s.push({index:o,newStonesAmouns:0}),s.push({index:r,newStonesAmouns:e[r]+e[o]}),e[r]+=e[o],e[o]=0)});const n=c(t),i=this.staticBoardAnalyser.getSideStorePocketIndex(n);e.forEach(o=>{this.staticBoardAnalyser.checkPocketOwnership(n,o)&&o!==i&&(s.push({index:o,newStonesAmouns:0}),s.push({index:i,newStonesAmouns:e[i]+e[o]}),e[i]+=e[o],e[o]=0)})}return s}}var v=(a=>(a[a.BEGINNER=0]="BEGINNER",a[a.MEDIUM=1]="MEDIUM",a[a.HARD=2]="HARD",a[a.HARDCORE=3]="HARDCORE",a))(v||{});class k{constructor(e,t,s){u(this,"maxDepth");u(this,"playerSide");u(this,"engine");u(this,"playerMovesDetector");u(this,"movesAnalysed");u(this,"aborted");switch(this.aborted=!1,this.movesAnalysed=0,this.playerMovesDetector=new M(t),this.engine=new S(s),this.playerSide=t,this.maxDepth=0,e){case v.BEGINNER:this.maxDepth=0;break;case v.MEDIUM:this.maxDepth=5;break;case v.HARD:this.maxDepth=9;break;case v.HARDCORE:this.maxDepth=50;break}}abort(){this.aborted=!0}async selectBestMove(e){this.movesAnalysed=0,console.log("thinking");const t=this.playerMovesDetector.getAvailableMovesForPlayer(e);let s=t[t.length-1];return console.log("done thinking",this.maxDepth,t,s,this.movesAnalysed),[s]}evaluate(e,t,s){++this.movesAnalysed;const r=this.playerMovesDetector.getAvailableMovesForPlayer(e).length===0||this.playerMovesDetector.getAvailableMovesForOpponentPlayer(e).length===0;return t<=0||r||s===void 0?this.playerMovesDetector.checkCurrentPlayerScore(e):s===this.playerSide?this.playerMovesDetector.getAvailableMovesForPlayer(e).reduce((o,l)=>{const h=this.engine.makeMove({player:s,pocketId:l},e);return Math.max(o,this.evaluate(h.boardConfig,t-1,h.nextTurnPlayer))},1/0):this.playerMovesDetector.getAvailableMovesForOpponentPlayer(e).reduce((o,l)=>{const h=this.engine.makeMove({player:s,pocketId:l},e);return Math.min(o,this.evaluate(h.boardConfig,t-1,h.nextTurnPlayer))},1/0)}}let g;self.onmessage=async a=>{if(a.data.abort)g.abort();else{const e=a.data,t=JSON.parse(e.boardConfig);g=new k(e.brainLevel,e.playingPlayer,t);const s=await g.selectBestMove(t);self.postMessage({bestPocketIdToPlay:s})}}})();