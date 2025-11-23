import{a as J,b as ee,c as he,d as Ke}from"./chunk-GWV6MYTR.js";import{a as me}from"./chunk-GIA2RNN3.js";import{a as ge,c as _e}from"./chunk-7YL3MX6X.js";import{c as Qe,d as ve,f as be,h as fe}from"./chunk-4O3FVBGX.js";import{b as He,c as Re,f as Le}from"./chunk-465KRAIB.js";import{a as je}from"./chunk-NKC3PGVX.js";import{a as qe}from"./chunk-YELIAYGU.js";import{a as ze,c as $e}from"./chunk-5VFQE77Z.js";import{Aa as Ee,Ba as L,Ca as w,Da as Oe,G as de,I as Y,W as R,X,Y as Fe,Z as Ne,i as Ge,j as re,k as H,l as se,m as j,ma as pe,n as ce,na as De,qa as Me,r as N,wa as Pe,xa as ue}from"./chunk-X3FME7H6.js";import{$ as p,Ab as q,Bb as f,Ca as Te,Cb as _,Da as c,Fb as ke,Ia as k,Ib as Ve,Jb as m,Kb as ae,Lb as le,Oa as B,R as K,S as xe,Ta as A,U as we,Ua as Se,Ub as F,Vb as U,W as y,Wa as D,Wb as Z,Xa as $,Xb as oe,Ya as d,_b as E,aa as u,ba as V,cb as S,gc as W,ic as Be,jb as l,kb as h,lb as g,lc as Ae,ma as ie,mb as b,oa as ye,pc as v,qb as M,qc as O,rb as P,sb as Ce,tb as x,vb as I,wb as r,za as ne,zb as T}from"./chunk-DUQHADTG.js";var Ue=`
    .p-galleria {
        overflow: hidden;
        border-style: solid;
        border-width: dt('galleria.border.width');
        border-color: dt('galleria.border.color');
        border-radius: dt('galleria.border.radius');
    }

    .p-galleria-content {
        display: flex;
        flex-direction: column;
    }

    .p-galleria-items-container {
        display: flex;
        flex-direction: column;
        position: relative;
    }

    .p-galleria-items {
        position: relative;
        display: flex;
        height: 100%;
    }

    .p-galleria-nav-button {
        position: absolute !important;
        top: 50%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        background: dt('galleria.nav.button.background');
        color: dt('galleria.nav.button.color');
        width: dt('galleria.nav.button.size');
        height: dt('galleria.nav.button.size');
        transition:
            background dt('galleria.transition.duration'),
            color dt('galleria.transition.duration'),
            outline-color dt('galleria.transition.duration'),
            box-shadow dt('galleria.transition.duration');
        margin: calc(-1 * calc(dt('galleria.nav.button.size')) / 2) dt('galleria.nav.button.gutter') 0 dt('galleria.nav.button.gutter');
        padding: 0;
        user-select: none;
        border: 0 none;
        cursor: pointer;
        outline-color: transparent;
    }

    .p-galleria-nav-button:not(.p-disabled):hover {
        background: dt('galleria.nav.button.hover.background');
        color: dt('galleria.nav.button.hover.color');
    }

    .p-galleria-nav-button:not(.p-disabled):focus-visible {
        box-shadow: dt('galleria.nav.button.focus.ring.shadow');
        outline: dt('galleria.nav.button.focus.ring.width') dt('galleria.nav.button.focus.ring.style') dt('galleria.nav.button.focus.ring.color');
        outline-offset: dt('galleria.nav.button.focus.ring.offset');
    }

    .p-galleria-next-icon,
    .p-galleria-prev-icon {
        font-size: dt('galleria.nav.icon.size');
        width: dt('galleria.nav.icon.size');
        height: dt('galleria.nav.icon.size');
    }

    .p-galleria-prev-button {
        border-radius: dt('galleria.nav.button.prev.border.radius');
        left: 0;
    }

    .p-galleria-next-button {
        border-radius: dt('galleria.nav.button.next.border.radius');
        right: 0;
    }

    .p-galleria-prev-button:dir(rtl) {
        left: auto;
        right: 0;
        transform: rotate(180deg);
    }

    .p-galleria-next-button:dir(rtl) {
        right: auto;
        left: 0;
        transform: rotate(180deg);
    }

    .p-galleria-item {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
    }

    .p-galleria-hover-navigators .p-galleria-nav-button {
        pointer-events: none;
        opacity: 0;
        transition: opacity dt('galleria.transition.duration') ease-in-out;
    }

    .p-galleria-hover-navigators .p-galleria-items-container:hover .p-galleria-nav-button {
        pointer-events: all;
        opacity: 1;
    }

    .p-galleria-hover-navigators .p-galleria-items-container:hover .p-galleria-nav-button.p-disabled {
        pointer-events: none;
    }

    .p-galleria-caption {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background: dt('galleria.caption.background');
        color: dt('galleria.caption.color');
        padding: dt('galleria.caption.padding');
    }

    .p-galleria-thumbnails {
        display: flex;
        flex-direction: column;
        overflow: auto;
        flex-shrink: 0;
    }

    .p-galleria-thumbnail-nav-button {
        align-self: center;
        flex: 0 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        position: relative;
        margin: 0 dt('galleria.thumbnail.nav.button.gutter');
        padding: 0;
        border: none;
        user-select: none;
        cursor: pointer;
        background: transparent;
        color: dt('galleria.thumbnail.nav.button.color');
        width: dt('galleria.thumbnail.nav.button.size');
        height: dt('galleria.thumbnail.nav.button.size');
        transition:
            background dt('galleria.transition.duration'),
            color dt('galleria.transition.duration'),
            outline-color dt('galleria.transition.duration');
        outline-color: transparent;
        border-radius: dt('galleria.thumbnail.nav.button.border.radius');
    }

    .p-galleria-thumbnail-nav-button:hover {
        background: dt('galleria.thumbnail.nav.button.hover.background');
        color: dt('galleria.thumbnail.nav.button.hover.color');
    }

    .p-galleria-thumbnail-nav-button:focus-visible {
        box-shadow: dt('galleria.thumbnail.nav.button.focus.ring.shadow');
        outline: dt('galleria.thumbnail.nav.button.focus.ring.width') dt('galleria.thumbnail.nav.button.focus.ring.style') dt('galleria.thumbnail.nav.button.focus.ring.color');
        outline-offset: dt('galleria.thumbnail.nav.button.focus.ring.offset');
    }

    .p-galleria-thumbnail-nav-button .p-galleria-thumbnail-next-icon,
    .p-galleria-thumbnail-nav-button .p-galleria-thumbnail-prev-icon {
        font-size: dt('galleria.thumbnail.nav.button.icon.size');
        width: dt('galleria.thumbnail.nav.button.icon.size');
        height: dt('galleria.thumbnail.nav.button.icon.size');
    }

    .p-galleria-thumbnails-content {
        display: flex;
        flex-direction: row;
        background: dt('galleria.thumbnails.content.background');
        padding: dt('galleria.thumbnails.content.padding');
    }

    .p-galleria-thumbnails-viewport {
        overflow: hidden;
        width: 100%;
    }

    .p-galleria:not(.p-galleria-thumbnails-right):not(.p-galleria-thumbnails-left) .p-galleria-thumbnail-prev-button:dir(rtl),
    .p-galleria:not(.p-galleria-thumbnails-right):not(.p-galleria-thumbnails-left) .p-galleria-thumbnail-next-button:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-galleria-thumbnail-items {
        display: flex;
    }

    .p-galleria-thumbnail-items:dir(rtl) {
        flex-direction: row-reverse;
    }

    .p-galleria-thumbnail-item {
        overflow: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        opacity: 0.5;
    }

    .p-galleria-thumbnail {
        outline-color: transparent;
    }

    .p-galleria-thumbnail-item:hover {
        opacity: 1;
        transition: opacity 0.3s;
    }

    .p-galleria-thumbnail-item-current {
        opacity: 1;
    }

    .p-galleria-thumbnails-left .p-galleria-content,
    .p-galleria-thumbnails-right .p-galleria-content {
        flex-direction: row;
    }

    .p-galleria-thumbnails-left .p-galleria-items-container,
    .p-galleria-thumbnails-right .p-galleria-items-container {
        flex-direction: row;
    }

    .p-galleria-thumbnails-left .p-galleria-items-container,
    .p-galleria-thumbnails-top .p-galleria-items-container {
        order: 2;
    }

    .p-galleria-thumbnails-left .p-galleria-thumbnails,
    .p-galleria-thumbnails-top .p-galleria-thumbnails {
        order: 1;
    }

    .p-galleria-thumbnails-left .p-galleria-thumbnails-content,
    .p-galleria-thumbnails-right .p-galleria-thumbnails-content {
        flex-direction: column;
        flex-grow: 1;
    }

    .p-galleria-thumbnails-left .p-galleria-thumbnail-items,
    .p-galleria-thumbnails-right .p-galleria-thumbnail-items {
        flex-direction: column;
        height: 100%;
    }

    .p-galleria-indicator-list {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: dt('galleria.indicator.list.padding');
        gap: dt('galleria.indicator.list.gap');
        margin: 0;
        list-style: none;
    }

    .p-galleria-indicator-button {
        display: inline-flex;
        align-items: center;
        background: dt('galleria.indicator.button.background');
        width: dt('galleria.indicator.button.width');
        height: dt('galleria.indicator.button.height');
        transition:
            background dt('galleria.transition.duration'),
            color dt('galleria.transition.duration'),
            outline-color dt('galleria.transition.duration'),
            box-shadow dt('galleria.transition.duration');
        outline-color: transparent;
        border-radius: dt('galleria.indicator.button.border.radius');
        margin: 0;
        padding: 0;
        border: none;
        user-select: none;
        cursor: pointer;
    }

    .p-galleria-indicator-button:hover {
        background: dt('galleria.indicator.button.hover.background');
    }

    .p-galleria-indicator-button:focus-visible {
        box-shadow: dt('galleria.indicator.button.focus.ring.shadow');
        outline: dt('galleria.indicator.button.focus.ring.width') dt('galleria.indicator.button.focus.ring.style') dt('galleria.indicator.button.focus.ring.color');
        outline-offset: dt('galleria.indicator.button.focus.ring.offset');
    }

    .p-galleria-indicator-active .p-galleria-indicator-button {
        background: dt('galleria.indicator.button.active.background');
    }

    .p-galleria-indicators-left .p-galleria-items-container,
    .p-galleria-indicators-right .p-galleria-items-container {
        flex-direction: row;
        align-items: center;
    }

    .p-galleria-indicators-left .p-galleria-items,
    .p-galleria-indicators-top .p-galleria-items {
        order: 2;
    }

    .p-galleria-indicators-left .p-galleria-indicator-list,
    .p-galleria-indicators-top .p-galleria-indicator-list {
        order: 1;
    }

    .p-galleria-indicators-left .p-galleria-indicator-list,
    .p-galleria-indicators-right .p-galleria-indicator-list {
        flex-direction: column;
    }

    .p-galleria-inset-indicators .p-galleria-indicator-list {
        position: absolute;
        display: flex;
        z-index: 1;
        background: dt('galleria.inset.indicator.list.background');
    }

    .p-galleria-inset-indicators .p-galleria-indicator-button {
        background: dt('galleria.inset.indicator.button.background');
    }

    .p-galleria-inset-indicators .p-galleria-indicator-button:hover {
        background: dt('galleria.inset.indicator.button.hover.background');
    }

    .p-galleria-inset-indicators .p-galleria-indicator-active .p-galleria-indicator-button {
        background: dt('galleria.inset.indicator.button.active.background');
    }

    .p-galleria-inset-indicators.p-galleria-indicators-top .p-galleria-indicator-list {
        top: 0;
        left: 0;
        width: 100%;
        align-items: flex-start;
    }

    .p-galleria-inset-indicators.p-galleria-indicators-right .p-galleria-indicator-list {
        right: 0;
        top: 0;
        height: 100%;
        align-items: flex-end;
    }

    .p-galleria-inset-indicators.p-galleria-indicators-bottom .p-galleria-indicator-list {
        bottom: 0;
        left: 0;
        width: 100%;
        align-items: flex-end;
    }

    .p-galleria-inset-indicators.p-galleria-indicators-left .p-galleria-indicator-list {
        left: 0;
        top: 0;
        height: 100%;
        align-items: flex-start;
    }

    .p-galleria-mask {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .p-galleria-close-button {
        position: absolute !important;
        top: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        margin: dt('galleria.close.button.gutter');
        background: dt('galleria.close.button.background');
        color: dt('galleria.close.button.color');
        width: dt('galleria.close.button.size');
        height: dt('galleria.close.button.size');
        padding: 0;
        border: none;
        user-select: none;
        cursor: pointer;
        border-radius: dt('galleria.close.button.border.radius');
        outline-color: transparent;
        transition:
            background dt('galleria.transition.duration'),
            color dt('galleria.transition.duration'),
            outline-color dt('galleria.transition.duration');
    }

    .p-galleria-close-icon {
        font-size: dt('galleria.close.button.icon.size');
        width: dt('galleria.close.button.icon.size');
        height: dt('galleria.close.button.icon.size');
    }

    .p-galleria-close-button:hover {
        background: dt('galleria.close.button.hover.background');
        color: dt('galleria.close.button.hover.color');
    }

    .p-galleria-close-button:focus-visible {
        box-shadow: dt('galleria.close.button.focus.ring.shadow');
        outline: dt('galleria.close.button.focus.ring.width') dt('galleria.close.button.focus.ring.style') dt('galleria.close.button.focus.ring.color');
        outline-offset: dt('galleria.close.button.focus.ring.offset');
    }

    .p-galleria-mask .p-galleria-nav-button {
        position: fixed;
        top: 50%;
    }

    .p-galleria-enter-active {
        transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
    }

    .p-galleria-leave-active {
        transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .p-galleria-enter-from,
    .p-galleria-leave-to {
        opacity: 0;
        transform: scale(0.7);
    }

    .p-galleria-enter-active .p-galleria-nav-button {
        opacity: 0;
    }

    .p-items-hidden .p-galleria-thumbnail-item {
        visibility: hidden;
    }

    .p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active {
        visibility: visible;
    }
`;var Xe=["header"],Je=["footer"],et=["indicator"],tt=["caption"],it=["closeicon"],nt=["previousthumbnailicon"],at=["nextthumbnailicon"],lt=["itempreviousicon"],ot=["itemnexticon"],rt=["item"],st=["thumbnail"],ct=["mask"],dt=["container"],pt=(t,o)=>({showTransitionParams:t,hideTransitionParams:o}),ut=t=>({value:"visible",params:t});function mt(t,o){if(t&1){let e=x();h(0,"div",7),I("@animation.start",function(n){p(e);let a=r(3);return u(a.onAnimationStart(n))})("@animation.done",function(n){p(e);let a=r(3);return u(a.onAnimationEnd(n))})("maskHide",function(){p(e);let n=r(3);return u(n.onMaskHide())})("activeItemChange",function(n){p(e);let a=r(3);return u(a.onActiveItemChange(n))}),g()}if(t&2){let e=r(3);l("@animation",Z(11,ut,oe(8,pt,e.showTransitionOptions,e.hideTransitionOptions)))("value",e.value)("activeIndex",e.activeIndex)("numVisible",e.numVisibleLimit||e.numVisible)("ngStyle",e.containerStyle)("fullScreen",e.fullScreen)("pt",e.pt())("pFocusTrapDisabled",!e.fullScreen)}}function ht(t,o){if(t&1){let e=x();h(0,"div",5,2),I("click",function(n){p(e);let a=r(2);return u(a.onMaskHide(n))}),d(2,mt,1,13,"div",6),g()}if(t&2){let e=r(2);m(e.maskClass),l("pBind",e.ptm("mask"))("ngClass",e.cx("mask")),S("role",e.fullScreen?"dialog":"region")("aria-modal",e.fullScreen?"true":void 0),c(2),l("ngIf",e.visible)}}function gt(t,o){if(t&1&&(h(0,"div",null,1),d(2,ht,3,7,"div",4),g()),t&2){let e=r();c(2),l("ngIf",e.maskVisible)}}function vt(t,o){if(t&1){let e=x();h(0,"div",8),I("activeItemChange",function(n){p(e);let a=r();return u(a.onActiveItemChange(n))}),g()}if(t&2){let e=r();l("pt",e.pt())("value",e.value)("activeIndex",e.activeIndex)("numVisible",e.numVisibleLimit||e.numVisible)}}var bt=["closeButton"],ft=()=>({}),_t=["pGalleriaContent",""];function It(t,o){if(t&1&&(V(),b(0,"svg",10)),t&2){let e=r(3);m(e.cx("closeIcon")),l("pBind",e.ptm("closeIcon"))}}function xt(t,o){}function wt(t,o){t&1&&d(0,xt,0,0,"ng-template")}function yt(t,o){if(t&1){let e=x();h(0,"button",7),I("click",function(){p(e);let n=r(2);return u(n.maskHide.emit())}),d(1,It,1,3,"svg",8)(2,wt,1,0,null,9),g()}if(t&2){let e=r(2);m(e.cx("closeButton")),l("pBind",e.ptm("closeButton")),S("aria-label",e.closeAriaLabel()),c(),l("ngIf",!e.galleria.closeIconTemplate&&!e.galleria._closeIconTemplate),c(),l("ngTemplateOutlet",e.galleria.closeIconTemplate||e.galleria._closeIconTemplate)}}function Tt(t,o){if(t&1&&b(0,"div",11),t&2){let e=r(2);m(e.cx("header")),l("templates",e.galleria.templates)("pBind",e.ptm("header"))}}function St(t,o){if(t&1){let e=x();h(0,"div",12),I("onActiveIndexChange",function(n){p(e);let a=r(2);return u(a.onActiveIndexChange(n))})("stopSlideShow",function(){p(e);let n=r(2);return u(n.stopSlideShow())}),g()}if(t&2){let e=r(2);l("containerId",e.id)("value",e.value)("activeIndex",e.activeIndex)("templates",e.galleria.templates)("numVisible",e.numVisible)("responsiveOptions",e.galleria.responsiveOptions)("circular",e.galleria.circular)("isVertical",e.isVertical())("contentHeight",e.galleria.verticalThumbnailViewPortHeight)("showThumbnailNavigators",e.galleria.showThumbnailNavigators)("slideShowActive",e.slideShowActive)("pt",e.pt())}}function Ct(t,o){if(t&1&&b(0,"div",13),t&2){let e=r(2);m(e.cx("footer")),l("pBind",e.ptm("footer"))("templates",e.galleria.templates)}}function kt(t,o){if(t&1){let e=x();M(0),d(1,yt,3,6,"button",1)(2,Tt,1,4,"div",2),h(3,"div",3)(4,"div",4),I("onActiveIndexChange",function(n){p(e);let a=r();return u(a.onActiveIndexChange(n))})("startSlideShow",function(){p(e);let n=r();return u(n.startSlideShow())})("stopSlideShow",function(){p(e);let n=r();return u(n.stopSlideShow())}),g(),d(5,St,1,12,"div",5),g(),d(6,Ct,1,4,"div",6),P()}if(t&2){let e=r();c(),l("ngIf",e.galleria.fullScreen),c(),l("ngIf",e.galleria.templates&&(e.galleria.headerFacet||e.galleria.headerTemplate)),c(),m(e.cx("content")),l("pBind",e.ptm("content")),S("aria-live",e.galleria.autoPlay?"polite":"off"),c(),m(e.cx("itemsContainer")),l("id",e.id)("value",e.value)("activeIndex",e.activeIndex)("circular",e.galleria.circular)("templates",e.galleria.templates)("showIndicators",e.galleria.showIndicators)("changeItemOnIndicatorHover",e.galleria.changeItemOnIndicatorHover)("indicatorFacet",e.galleria.indicatorFacet)("captionFacet",e.galleria.captionFacet)("showItemNavigators",e.galleria.showItemNavigators)("autoPlay",e.galleria.autoPlay)("slideShowActive",e.slideShowActive)("pt",e.pt()),c(),l("ngIf",e.galleria.showThumbnails),c(),l("ngIf",e.shouldRenderFooter())}}var Vt=["pGalleriaItemSlot",""];function Bt(t,o){t&1&&Ce(0)}function At(t,o){if(t&1&&(M(0),d(1,Bt,1,0,"ng-container",1),P()),t&2){let e=r();c(),l("ngTemplateOutlet",e.contentTemplate)("ngTemplateOutletContext",e.context)}}var Gt=["pGalleriaItem",""],Ft=t=>({index:t});function Nt(t,o){if(t&1&&(V(),b(0,"svg",8)),t&2){let e=r(2);m(e.cx("prevIcon")),l("pBind",e.ptm("prevIcon"))}}function Dt(t,o){}function Mt(t,o){t&1&&d(0,Dt,0,0,"ng-template")}function Pt(t,o){if(t&1){let e=x();h(0,"button",5),I("click",function(n){p(e);let a=r();return u(a.navBackward(n))})("focus",function(){p(e);let n=r();return u(n.onButtonFocus("left"))})("blur",function(){p(e);let n=r();return u(n.onButtonBlur("left"))}),d(1,Nt,1,3,"svg",6)(2,Mt,1,0,null,7),g()}if(t&2){let e=r();m(e.cx("prevButton")),l("pBind",e.ptm("prevButton")),c(),l("ngIf",!e.galleria.itemPreviousIconTemplate&&!e.galleria._itemPreviousIconTemplate),c(),l("ngTemplateOutlet",e.galleria.itemPreviousIconTemplate||e.galleria._itemPreviousIconTemplate)}}function Et(t,o){if(t&1&&(V(),b(0,"svg",10)),t&2){let e=r(2);m(e.cx("nextIcon")),l("pBind",e.ptm("nextIcon"))}}function Ot(t,o){}function Ht(t,o){t&1&&d(0,Ot,0,0,"ng-template")}function Rt(t,o){if(t&1){let e=x();h(0,"button",5),I("click",function(n){p(e);let a=r();return u(a.navForward(n))})("focus",function(){p(e);let n=r();return u(n.onButtonFocus("right"))})("blur",function(){p(e);let n=r();return u(n.onButtonBlur("right"))}),d(1,Et,1,3,"svg",9)(2,Ht,1,0,null,7),g()}if(t&2){let e=r();m(e.cx("nextButton")),l("pBind",e.ptm("nextButton")),c(),l("ngIf",!e.galleria.itemNextIconTemplate&&!e.galleria._itemNextIconTemplate),c(),l("ngTemplateOutlet",e.galleria.itemNextIconTemplate||e.galleria._itemNextIconTemplate)}}function Lt(t,o){if(t&1&&b(0,"div",11),t&2){let e=r();m(e.cx("caption")),l("pBind",e.ptm("caption"))("item",e.activeItem)("templates",e.templates)}}function Qt(t,o){if(t&1&&b(0,"button",16),t&2){let e=r().index,i=r(2);m(i.cx("indicatorButton")),l("pBind",i.ptm("indicatorButton",i.getIndicatorPTOptions(e)))}}function zt(t,o){if(t&1&&(M(0),b(1,"div",17),P()),t&2){let e=r().index,i=r(2);c(),l("index",e)("templates",i.templates)("pBind",i.ptm("item"))}}function $t(t,o){if(t&1){let e=x();h(0,"li",13),I("click",function(){let n=p(e).index,a=r(2);return u(a.onIndicatorClick(n))})("mouseenter",function(){let n=p(e).index,a=r(2);return u(a.onIndicatorMouseEnter(n))})("keydown",function(n){let a=p(e).index,s=r(2);return u(s.onIndicatorKeyDown(n,a))}),d(1,Qt,1,3,"button",14)(2,zt,2,3,"ng-container",15),g()}if(t&2){let e=o.index,i=r(2);m(i.cx("indicator",Z(9,Ft,e))),l("pBind",i.getIndicatorPTOptions(e))("pBind",i.ptm("indicator",i.getIndicatorPTOptions(e))),S("aria-label",i.ariaPageLabel(e+1))("aria-selected",i.activeIndex===e)("aria-controls",i.id+"_item_"+e),c(),l("ngIf",!i.indicatorFacet&&!i.galleria.indicatorTemplate),c(),l("ngIf",i.indicatorFacet||i.galleria.indicatorTemplate)}}function qt(t,o){if(t&1&&(h(0,"ul",0),d(1,$t,3,11,"li",12),g()),t&2){let e=r();m(e.cx("indicatorList")),l("pBind",e.ptm("indicatorList")),c(),l("ngForOf",e.value)}}var jt=["itemsContainer"],Kt=["pGalleriaThumbnails",""],Ut=t=>({height:t}),Zt=(t,o)=>({index:t,activeIndex:o});function Wt(t,o){if(t&1&&(V(),b(0,"svg",11)),t&2){let e=r(3);m(e.cx("thumbnailPrevIcon")),l("pBind",e.ptm("thumbnailPrevIcon"))}}function Yt(t,o){if(t&1&&(V(),b(0,"svg",12)),t&2){let e=r(3);m(e.cx("thumbnailPrevIcon")),l("pBind",e.ptm("thumbnailPrevIcon"))}}function Xt(t,o){if(t&1&&(M(0),d(1,Wt,1,3,"svg",9)(2,Yt,1,3,"svg",10),P()),t&2){let e=r(2);c(),l("ngIf",!e.isVertical),c(),l("ngIf",e.isVertical)}}function Jt(t,o){}function ei(t,o){t&1&&d(0,Jt,0,0,"ng-template")}function ti(t,o){if(t&1){let e=x();h(0,"button",6),I("click",function(n){p(e);let a=r();return u(a.navBackward(n))}),d(1,Xt,3,2,"ng-container",7)(2,ei,1,0,null,8),g()}if(t&2){let e=r();m(e.cx("thumbnailPrevButton")),l("pBind",e.ptm("thumbnailPrevButton")),S("aria-label",e.ariaPrevButtonLabel()),c(),l("ngIf",!e.galleria.previousThumbnailIconTemplate&&!e.galleria._previousThumbnailIconTemplate),c(),l("ngTemplateOutlet",e.galleria.previousThumbnailIconTemplate||e.galleria._previousThumbnailIconTemplate)}}function ii(t,o){if(t&1){let e=x();h(0,"div",13),I("keydown",function(n){let a=p(e).index,s=r();return u(s.onThumbnailKeydown(n,a))}),h(1,"div",14),I("click",function(){let n=p(e).index,a=r();return u(a.onItemClick(n))})("touchend",function(){let n=p(e).index,a=r();return u(a.onItemClick(n))})("keydown.enter",function(){let n=p(e).index,a=r();return u(a.onItemClick(n))}),b(2,"div",15),g()()}if(t&2){let e=o.$implicit,i=o.index,n=r();m(n.cx("thumbnailItem",oe(14,Zt,i,n.activeIndex))),l("pBind",n.ptm("thumbnailItem")),S("aria-selected",n.activeIndex===i)("aria-controls",n.containerId+"_item_"+i),c(),m(n.cx("thumbnail")),l("pBind",n.ptm("thumbnail")),S("tabindex",n.activeIndex===i?0:-1)("aria-current",n.activeIndex===i?"page":void 0)("aria-label",n.ariaPageLabel(i+1)),c(),l("pBind",n.ptm("thumbnailItem"))("item",e)("templates",n.templates)}}function ni(t,o){if(t&1&&(V(),b(0,"svg",18)),t&2){let e=r(3);m(e.cx("thumbnailNextIcon")),l("pBind",e.ptm("thumbnailNextIcon"))}}function ai(t,o){if(t&1&&(V(),b(0,"svg",19)),t&2){let e=r(3);m(e.cx("thumbnailNextIcon")),l("pBind",e.ptm("thumbnailNextIcon"))}}function li(t,o){if(t&1&&(M(0),d(1,ni,1,3,"svg",16)(2,ai,1,3,"svg",17),P()),t&2){let e=r(2);c(),l("ngIf",!e.isVertical),c(),l("ngIf",e.isVertical)}}function oi(t,o){}function ri(t,o){t&1&&d(0,oi,0,0,"ng-template")}function si(t,o){if(t&1){let e=x();h(0,"button",6),I("click",function(n){p(e);let a=r();return u(a.navForward(n))}),d(1,li,3,2,"ng-container",7)(2,ri,1,0,null,8),g()}if(t&2){let e=r();m(e.cx("thumbnailNextButton")),l("pBind",e.ptm("thumbnailNextButton")),S("aria-label",e.ariaNextButtonLabel()),c(),l("ngIf",!e.galleria.nextThumbnailIconTemplate&&!e.galleria._nextThumbnailIconTemplate),c(),l("ngTemplateOutlet",e.galleria.nextThumbnailIconTemplate||e.galleria._nextThumbnailIconTemplate)}}var ci={mask:"p-galleria-mask p-overlay-mask p-overlay-mask-enter",root:({instance:t})=>{let o=t.galleria.showThumbnails&&t.getPositionClass("p-galleria-thumbnails",t.galleria.thumbnailsPosition),e=t.galleria.showIndicators&&t.getPositionClass("p-galleria-indicators",t.galleria.indicatorsPosition);return["p-galleria p-component",{"p-galleria-fullscreen":t.galleria.fullScreen,"p-galleria-inset-indicators":t.galleria.showIndicatorsOnItem,"p-galleria-hover-navigators":t.galleria.showItemNavigatorsOnHover&&!t.galleria.fullScreen},o,e]},closeButton:"p-galleria-close-button",closeIcon:"p-galleria-close-icon",header:"p-galleria-header",content:"p-galleria-content",footer:"p-galleria-footer",itemsContainer:"p-galleria-items-container",items:"p-galleria-items",prevButton:({instance:t})=>["p-galleria-prev-button p-galleria-nav-button",{"p-disabled":t.isNavBackwardDisabled()}],prevIcon:"p-galleria-prev-icon",item:"p-galleria-item",nextButton:({instance:t})=>["p-galleria-next-button p-galleria-nav-button",{"p-disabled":t.isNavForwardDisabled()}],nextIcon:"p-galleria-next-icon",caption:"p-galleria-caption",indicatorList:"p-galleria-indicator-list",indicator:({instance:t,index:o})=>["p-galleria-indicator",{"p-galleria-indicator-active":t.isIndicatorItemActive(o)}],indicatorButton:"p-galleria-indicator-button",thumbnails:"p-galleria-thumbnails",thumbnailContent:"p-galleria-thumbnails-content",thumbnailPrevButton:({instance:t})=>["p-galleria-thumbnail-prev-button p-galleria-thumbnail-nav-button",{"p-disabled":t.isNavBackwardDisabled()}],thumbnailPrevIcon:"p-galleria-thumbnail-prev-icon",thumbnailsViewport:"p-galleria-thumbnails-viewport",thumbnailItems:"p-galleria-thumbnail-items",thumbnailItem:({instance:t,index:o,activeIndex:e})=>["p-galleria-thumbnail-item",{"p-galleria-thumbnail-item-current":e===o,"p-galleria-thumbnail-item-active":t.isItemActive(o),"p-galleria-thumbnail-item-start":t.firstItemAciveIndex()===o,"p-galleria-thumbnail-item-end":t.lastItemActiveIndex()===o}],thumbnail:"p-galleria-thumbnail",thumbnailNextButton:({instance:t})=>["p-galleria-thumbnail-next-button  p-galleria-thumbnail-nav-button",{"p-disabled":t.isNavForwardDisabled()}],thumbnailNextIcon:"p-galleria-thumbnail-next-icon"},G=(()=>{class t extends Me{name="galleria";style=Ue;classes=ci;static \u0275fac=(()=>{let e;return function(n){return(e||(e=ie(t)))(n||t)}})();static \u0275prov=K({token:t,factory:t.\u0275fac})}return t})();var te=new we("GALLERIA_INSTANCE"),Q=(()=>{class t extends L{element;bindDirectiveInstance=y(w,{self:!0});$pcGalleria=y(te,{optional:!0,skipSelf:!0})??void 0;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}get activeIndex(){return this._activeIndex}set activeIndex(e){this._activeIndex=e}fullScreen=!1;id;value;numVisible=3;responsiveOptions;showItemNavigators=!1;showThumbnailNavigators=!0;showItemNavigatorsOnHover=!1;changeItemOnIndicatorHover=!1;circular=!1;autoPlay=!1;shouldStopAutoplayByClick=!0;transitionInterval=4e3;showThumbnails=!0;thumbnailsPosition="bottom";verticalThumbnailViewPortHeight="300px";showIndicators=!1;showIndicatorsOnItem=!1;indicatorsPosition="bottom";baseZIndex=0;maskClass;containerClass;containerStyle;showTransitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";get visible(){return this._visible}set visible(e){this._visible=e,this._visible&&!this.maskVisible&&(this.maskVisible=!0)}activeIndexChange=new k;visibleChange=new k;mask;container;_visible=!1;_activeIndex=0;headerTemplate;headerFacet;footerTemplate;footerFacet;indicatorTemplate;indicatorFacet;captionTemplate;captionFacet;_closeIconTemplate;closeIconTemplate;_previousThumbnailIconTemplate;previousThumbnailIconTemplate;_nextThumbnailIconTemplate;nextThumbnailIconTemplate;_itemPreviousIconTemplate;itemPreviousIconTemplate;_itemNextIconTemplate;itemNextIconTemplate;_itemTemplate;itemTemplate;_thumbnailTemplate;thumbnailTemplate;maskVisible=!1;numVisibleLimit=0;_componentStyle=y(G);templates;constructor(e){super(),this.element=e}onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"header":this.headerFacet=e.template;break;case"footer":this.footerFacet=e.template;break;case"indicator":this.indicatorFacet=e.template;break;case"closeicon":this.closeIconTemplate=e.template;break;case"itemnexticon":this.itemNextIconTemplate=e.template;break;case"itempreviousicon":this.itemPreviousIconTemplate=e.template;break;case"previousthumbnailicon":this.previousThumbnailIconTemplate=e.template;break;case"nextthumbnailicon":this.nextThumbnailIconTemplate=e.template;break;case"caption":this.captionFacet=e.template;break;case"item":this.itemTemplate=e.template;break;case"thumbnail":this.thumbnailTemplate=e.template;break}})}onChanges(e){e.value&&e.value.currentValue?.length<this.numVisible?this.numVisibleLimit=e.value.currentValue.length:this.numVisibleLimit=0}onMaskHide(e){(!e||e.target===e.currentTarget)&&(this.visible=!1,this.visibleChange.emit(!1))}onActiveItemChange(e){this.activeIndex!==e&&(this.activeIndex=e,this.activeIndexChange.emit(e))}onAnimationStart(e){switch(e.toState){case"visible":this.enableModality(),setTimeout(()=>{let i=X(this.container?.nativeElement,'[data-pc-section="closebutton"]');i&&Fe(i)},25);break;case"void":de(this.mask?.nativeElement,"p-overlay-mask-leave");break}}onAnimationEnd(e){switch(e.toState){case"void":this.disableModality();break}}enableModality(){He(),this.cd.markForCheck(),this.mask&&_e.set("modal",this.mask.nativeElement,this.baseZIndex||this.config.zIndex.modal)}disableModality(){Re(),this.maskVisible=!1,this.cd.markForCheck(),this.mask&&_e.clear(this.mask.nativeElement)}onDestroy(){this.fullScreen&&Y(this.document.body,"p-overflow-hidden"),this.mask&&this.disableModality()}static \u0275fac=function(i){return new(i||t)(B(ye))};static \u0275cmp=A({type:t,selectors:[["p-galleria"]],contentQueries:function(i,n,a){if(i&1&&(T(a,Xe,4),T(a,Je,4),T(a,et,4),T(a,tt,4),T(a,it,4),T(a,nt,4),T(a,at,4),T(a,lt,4),T(a,ot,4),T(a,rt,4),T(a,st,4),T(a,Pe,4)),i&2){let s;f(s=_())&&(n.headerTemplate=s.first),f(s=_())&&(n.footerTemplate=s.first),f(s=_())&&(n.indicatorTemplate=s.first),f(s=_())&&(n.captionTemplate=s.first),f(s=_())&&(n._closeIconTemplate=s.first),f(s=_())&&(n._previousThumbnailIconTemplate=s.first),f(s=_())&&(n._nextThumbnailIconTemplate=s.first),f(s=_())&&(n._itemPreviousIconTemplate=s.first),f(s=_())&&(n._itemNextIconTemplate=s.first),f(s=_())&&(n._itemTemplate=s.first),f(s=_())&&(n._thumbnailTemplate=s.first),f(s=_())&&(n.templates=s)}},viewQuery:function(i,n){if(i&1&&(q(ct,5),q(dt,5)),i&2){let a;f(a=_())&&(n.mask=a.first),f(a=_())&&(n.container=a.first)}},inputs:{activeIndex:"activeIndex",fullScreen:[2,"fullScreen","fullScreen",v],id:"id",value:"value",numVisible:[2,"numVisible","numVisible",O],responsiveOptions:"responsiveOptions",showItemNavigators:[2,"showItemNavigators","showItemNavigators",v],showThumbnailNavigators:[2,"showThumbnailNavigators","showThumbnailNavigators",v],showItemNavigatorsOnHover:[2,"showItemNavigatorsOnHover","showItemNavigatorsOnHover",v],changeItemOnIndicatorHover:[2,"changeItemOnIndicatorHover","changeItemOnIndicatorHover",v],circular:[2,"circular","circular",v],autoPlay:[2,"autoPlay","autoPlay",v],shouldStopAutoplayByClick:[2,"shouldStopAutoplayByClick","shouldStopAutoplayByClick",v],transitionInterval:[2,"transitionInterval","transitionInterval",O],showThumbnails:[2,"showThumbnails","showThumbnails",v],thumbnailsPosition:"thumbnailsPosition",verticalThumbnailViewPortHeight:"verticalThumbnailViewPortHeight",showIndicators:[2,"showIndicators","showIndicators",v],showIndicatorsOnItem:[2,"showIndicatorsOnItem","showIndicatorsOnItem",v],indicatorsPosition:"indicatorsPosition",baseZIndex:[2,"baseZIndex","baseZIndex",O],maskClass:"maskClass",containerClass:"containerClass",containerStyle:"containerStyle",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",visible:"visible"},outputs:{activeIndexChange:"activeIndexChange",visibleChange:"visibleChange"},standalone:!1,features:[F([G,{provide:te,useExisting:t},{provide:Ee,useExisting:t}]),$([w]),D],decls:3,vars:2,consts:[["windowed",""],["container",""],["mask",""],[4,"ngIf","ngIfElse"],[3,"pBind","ngClass","class","click",4,"ngIf"],[3,"click","pBind","ngClass"],["pGalleriaContent","","pFocusTrap","",3,"value","activeIndex","numVisible","ngStyle","fullScreen","pt","pFocusTrapDisabled","maskHide","activeItemChange",4,"ngIf"],["pGalleriaContent","","pFocusTrap","",3,"maskHide","activeItemChange","value","activeIndex","numVisible","ngStyle","fullScreen","pt","pFocusTrapDisabled"],["pGalleriaContent","",3,"activeItemChange","pt","value","activeIndex","numVisible"]],template:function(i,n){if(i&1&&d(0,gt,3,1,"div",3)(1,vt,1,4,"ng-template",null,0,E),i&2){let a=ke(2);l("ngIf",n.fullScreen)("ngIfElse",a)}},dependencies:()=>[Ge,H,se,Ke,w,di],encapsulation:2,data:{animation:[Qe("animation",[fe("void => visible",[be({transform:"scale(0.7)",opacity:0}),ve("{{showTransitionParams}}")]),fe("visible => void",[ve("{{hideTransitionParams}}",be({transform:"scale(0.7)",opacity:0}))])])]},changeDetection:0})}return t})(),di=(()=>{class t extends L{galleria;differs;hostName="Galleria";bindDirectiveInstance=y(w,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}get activeIndex(){return this._activeIndex}set activeIndex(e){this._activeIndex=e}value=[];numVisible;fullScreen;maskHide=new k;activeItemChange=new k;closeButton;_componentStyle=y(G);$pcGalleria=y(te,{optional:!0,skipSelf:!0})??void 0;id;_activeIndex=0;slideShowActive=!0;interval;styleClass;differ;constructor(e,i){super(),this.galleria=e,this.differs=i,this.id=this.galleria.id||De("pn_id_"),this.differ=this.differs.find(this.galleria).create()}handleFullscreenChange(e){document?.fullscreenElement===this.el.nativeElement?.children[0]?this.fullScreen=!0:this.fullScreen=!1}onDoCheck(){if(N(this.galleria.platformId)){let e=this.differ.diff(this.galleria);e&&e.forEachItem.length>0&&this.cd.markForCheck()}}shouldRenderFooter(){return this.galleria.footerFacet&&this.galleria.templates&&this.galleria.templates.toArray().length>0||this.galleria.footerTemplate}startSlideShow(){N(this.galleria.platformId)&&(this.interval=setInterval(()=>{let e=this.galleria.circular&&this.value.length-1===this.activeIndex?0:this.activeIndex+1;this.onActiveIndexChange(e),this.activeIndex=e},this.galleria.transitionInterval),this.slideShowActive=!0)}stopSlideShow(){this.galleria.autoPlay&&!this.galleria.shouldStopAutoplayByClick||(this.interval&&clearInterval(this.interval),this.slideShowActive=!1)}getPositionClass(e,i){let a=["top","left","bottom","right"].find(s=>s===i);return a?`${e}-${a}`:""}isVertical(){return this.galleria.thumbnailsPosition==="left"||this.galleria.thumbnailsPosition==="right"}onActiveIndexChange(e){this.activeIndex!==e&&(this.activeIndex=e,this.activeItemChange.emit(this.activeIndex))}closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}static \u0275fac=function(i){return new(i||t)(B(Q),B(Ae))};static \u0275cmp=A({type:t,selectors:[["div","pGalleriaContent",""]],viewQuery:function(i,n){if(i&1&&q(bt,5),i&2){let a;f(a=_())&&(n.closeButton=a.first)}},hostVars:7,hostBindings:function(i,n){i&1&&I("fullscreenchange",function(s){return n.handleFullscreenChange(s)},Te),i&2&&(S("id",n.id)("role","region"),Ve(n.galleria.fullScreen?U(6,ft):n.galleria.containerStyle),m(n.cn(n.cx("root"),n.galleria==null?null:n.galleria.contentClass)))},inputs:{activeIndex:"activeIndex",value:"value",numVisible:[2,"numVisible","numVisible",O],fullScreen:[2,"fullScreen","fullScreen",v]},outputs:{maskHide:"maskHide",activeItemChange:"activeItemChange"},standalone:!1,features:[F([G]),$([w]),D],attrs:_t,decls:1,vars:1,consts:[[4,"ngIf"],["type","button",3,"pBind","class","click",4,"ngIf"],["pGalleriaItemSlot","","type","header",3,"templates","pBind","class",4,"ngIf"],[3,"pBind"],["pGalleriaItem","",3,"onActiveIndexChange","startSlideShow","stopSlideShow","id","value","activeIndex","circular","templates","showIndicators","changeItemOnIndicatorHover","indicatorFacet","captionFacet","showItemNavigators","autoPlay","slideShowActive","pt"],["pGalleriaThumbnails","",3,"containerId","value","activeIndex","templates","numVisible","responsiveOptions","circular","isVertical","contentHeight","showThumbnailNavigators","slideShowActive","pt","onActiveIndexChange","stopSlideShow",4,"ngIf"],["pGalleriaItemSlot","","type","footer",3,"pBind","class","templates",4,"ngIf"],["type","button",3,"click","pBind"],["data-p-icon","times",3,"pBind","class",4,"ngIf"],[4,"ngTemplateOutlet"],["data-p-icon","times",3,"pBind"],["pGalleriaItemSlot","","type","header",3,"templates","pBind"],["pGalleriaThumbnails","",3,"onActiveIndexChange","stopSlideShow","containerId","value","activeIndex","templates","numVisible","responsiveOptions","circular","isVertical","contentHeight","showThumbnailNavigators","slideShowActive","pt"],["pGalleriaItemSlot","","type","footer",3,"pBind","templates"]],template:function(i,n){i&1&&d(0,kt,7,23,"ng-container",0),i&2&&l("ngIf",n.value&&n.value.length>0)},dependencies:()=>[H,j,ge,w,Ie,pi,ui],encapsulation:2,changeDetection:0})}return t})(),Ie=(()=>{class t extends L{hostName="Galleria";templates;index;get item(){return this._item}shouldRender(){return this.contentTemplate||this.galleria._itemTemplate||this.galleria.itemTemplate||this.galleria.captionTemplate||this.galleria.captionTemplate||this.galleria.captionFacet||this.galleria.thumbnailTemplate||this.galleria._thumbnailTemplate||this.galleria.footerTemplate}galleria=y(Q);$pcGalleria=y(te,{optional:!0,skipSelf:!0})??void 0;set item(e){this._item=e,this.templates&&this.templates?.toArray().length>0?this.templates.forEach(i=>{if(i.getType()===this.type)switch(this.type){case"item":case"caption":case"thumbnail":this.context={$implicit:this.item},this.contentTemplate=i.template;break;case"footer":this.context={$implicit:this.item},this.contentTemplate=i.template;break}}):this.getContentTemplate()}getContentTemplate(){switch(this.type){case"item":this.context={$implicit:this.item},this.contentTemplate=this.galleria._itemTemplate||this.galleria.itemTemplate;break;case"caption":this.context={$implicit:this.item},this.contentTemplate=this.galleria.captionTemplate||this.galleria.captionFacet;break;case"thumbnail":this.context={$implicit:this.item},this.contentTemplate=this.galleria.thumbnailTemplate||this.galleria._thumbnailTemplate;break;case"indicator":this.context={$implicit:this.index},this.contentTemplate=this.galleria.indicatorTemplate||this.galleria.indicatorFacet;break;case"footer":this.context={$implicit:this.item},this.contentTemplate=this.galleria.footerTemplate||this.galleria.footerFacet;break;default:this.context={$implicit:this.item},this.contentTemplate=this.galleria._itemTemplate||this.galleria.itemTemplate}}type;contentTemplate;context;_item;onAfterContentInit(){this.templates&&this.templates.toArray().length>0?this.templates?.forEach(e=>{if(e.getType()===this.type)switch(this.type){case"item":case"caption":case"thumbnail":this.context={$implicit:this.item},this.contentTemplate=e.template;break;case"indicator":this.context={$implicit:this.index},this.contentTemplate=e.template;break;case"footer":this.context={$implicit:this.item},this.contentTemplate=e.template;break;default:this.context={$implicit:this.item},this.contentTemplate=e.template;break}}):this.getContentTemplate()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=ie(t)))(n||t)}})();static \u0275cmp=A({type:t,selectors:[["div","pGalleriaItemSlot",""]],inputs:{templates:"templates",index:[2,"index","index",O],item:"item",type:"type"},standalone:!1,features:[D],attrs:Vt,decls:1,vars:1,consts:[[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,n){i&1&&d(0,At,2,2,"ng-container",0),i&2&&l("ngIf",n.shouldRender())},dependencies:[H,j],encapsulation:2,changeDetection:0})}return t})(),pi=(()=>{class t extends L{galleria;hostName="Galleria";bindDirectiveInstance=y(w,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("itemsContainer"))}id;circular=!1;value;showItemNavigators=!1;showIndicators=!0;slideShowActive=!0;changeItemOnIndicatorHover=!0;autoPlay=!1;templates;indicatorFacet;captionFacet;startSlideShow=new k;stopSlideShow=new k;onActiveIndexChange=new k;_componentStyle=y(G);get activeIndex(){return this._activeIndex}set activeIndex(e){this._activeIndex=e}get activeItem(){return this.value&&this.value[this._activeIndex]}_activeIndex=0;leftButtonFocused=!1;rightButtonFocused=!1;constructor(e){super(),this.galleria=e}getIndicatorPTOptions(e){return this.ptm("indicator",{context:{highlighted:this.activeIndex===e}})}onChanges({autoPlay:e}){e?.currentValue&&this.startSlideShow.emit(),e&&e.currentValue===!1&&this.stopTheSlideShow()}next(){let e=this.activeIndex+1,i=this.circular&&this.value.length-1===this.activeIndex?0:e;this.onActiveIndexChange.emit(i)}prev(){let e=this.activeIndex!==0?this.activeIndex-1:0,i=this.circular&&this.activeIndex===0?this.value.length-1:e;this.onActiveIndexChange.emit(i)}onButtonFocus(e){e==="left"?this.leftButtonFocused=!0:this.rightButtonFocused=!0}onButtonBlur(e){e==="left"?this.leftButtonFocused=!1:this.rightButtonFocused=!1}stopTheSlideShow(){this.slideShowActive&&this.stopSlideShow&&this.stopSlideShow.emit()}navForward(e){this.stopTheSlideShow(),this.next(),e&&e.cancelable&&(e.stopPropagation(),e.preventDefault())}navBackward(e){this.stopTheSlideShow(),this.prev(),e&&e.cancelable&&(e.stopPropagation(),e.preventDefault())}onIndicatorClick(e){this.stopTheSlideShow(),this.onActiveIndexChange.emit(e)}onIndicatorMouseEnter(e){this.changeItemOnIndicatorHover&&(this.stopTheSlideShow(),this.onActiveIndexChange.emit(e))}onIndicatorKeyDown(e,i){switch(e.code){case"Enter":case"Space":this.stopTheSlideShow(),this.onActiveIndexChange.emit(i),e.preventDefault();break;case"ArrowDown":case"ArrowUp":e.preventDefault();break;default:break}}isNavForwardDisabled(){return!this.circular&&this.activeIndex===this.value.length-1}isNavBackwardDisabled(){return!this.circular&&this.activeIndex===0}isIndicatorItemActive(e){return this.activeIndex===e}ariaSlideLabel(){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.slide:void 0}ariaSlideNumber(e){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.slideNumber?.replace(/{slideNumber}/g,e):void 0}ariaPageLabel(e){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.pageLabel?.replace(/{page}/g,e):void 0}static \u0275fac=function(i){return new(i||t)(B(Q))};static \u0275cmp=A({type:t,selectors:[["div","pGalleriaItem",""]],inputs:{id:"id",circular:[2,"circular","circular",v],value:"value",showItemNavigators:[2,"showItemNavigators","showItemNavigators",v],showIndicators:[2,"showIndicators","showIndicators",v],slideShowActive:[2,"slideShowActive","slideShowActive",v],changeItemOnIndicatorHover:[2,"changeItemOnIndicatorHover","changeItemOnIndicatorHover",v],autoPlay:[2,"autoPlay","autoPlay",v],templates:"templates",indicatorFacet:"indicatorFacet",captionFacet:"captionFacet",activeIndex:"activeIndex"},outputs:{startSlideShow:"startSlideShow",stopSlideShow:"stopSlideShow",onActiveIndexChange:"onActiveIndexChange"},standalone:!1,features:[F([G]),$([w]),D],attrs:Gt,decls:6,vars:15,consts:[[3,"pBind"],["type","button","role","navigation","data-pc-group-section","itemnavigator",3,"pBind","class","click","focus","blur",4,"ngIf"],["pGalleriaItemSlot","","role","group",3,"pBind","item","templates","id"],["pGalleriaItemSlot","","type","caption",3,"pBind","class","item","templates",4,"ngIf"],[3,"pBind","class",4,"ngIf"],["type","button","role","navigation","data-pc-group-section","itemnavigator",3,"click","focus","blur","pBind"],["data-p-icon","chevron-left",3,"pBind","class",4,"ngIf"],[4,"ngTemplateOutlet"],["data-p-icon","chevron-left",3,"pBind"],["data-p-icon","chevron-right",3,"pBind","class",4,"ngIf"],["data-p-icon","chevron-right",3,"pBind"],["pGalleriaItemSlot","","type","caption",3,"pBind","item","templates"],["tabindex","0",3,"pBind","class","click","mouseenter","keydown",4,"ngFor","ngForOf"],["tabindex","0",3,"click","mouseenter","keydown","pBind"],["type","button","tabIndex","-1",3,"pBind","class",4,"ngIf"],[4,"ngIf"],["type","button","tabIndex","-1",3,"pBind"],["pGalleriaItemSlot","","type","indicator",3,"index","templates","pBind"]],template:function(i,n){i&1&&(h(0,"div",0),d(1,Pt,3,5,"button",1),b(2,"div",2),d(3,Rt,3,5,"button",1)(4,Lt,1,5,"div",3),g(),d(5,qt,2,4,"ul",4)),i&2&&(m(n.cx("items")),l("pBind",n.ptm("items")),c(),l("ngIf",n.showItemNavigators),c(),m(n.cx("item")),l("pBind",n.ptm("item"))("item",n.activeItem)("templates",n.templates)("id",n.id+"_item_"+n.activeIndex),S("aria-label",n.ariaSlideNumber(n.activeIndex+1))("aria-roledescription",n.ariaSlideLabel()),c(),l("ngIf",n.showItemNavigators),c(),l("ngIf",n.captionFacet||n.galleria.captionTemplate),c(),l("ngIf",n.showIndicators))},dependencies:()=>[re,H,j,ee,J,w,Ie],encapsulation:2,changeDetection:0})}return t})(),ui=(()=>{class t extends L{galleria;hostName="Galleria";bindDirectiveInstance=y(w,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("thumbnails"))}containerId;value;isVertical=!1;slideShowActive=!1;circular=!1;responsiveOptions;contentHeight="300px";showThumbnailNavigators=!0;templates;onActiveIndexChange=new k;stopSlideShow=new k;itemsContainer;get numVisible(){return this._numVisible}set numVisible(e){this._numVisible=e,this._oldNumVisible=this.d_numVisible,this.d_numVisible=e}get activeIndex(){return this._activeIndex}set activeIndex(e){this._oldactiveIndex=this._activeIndex,this._activeIndex=e}index;startPos=null;thumbnailsStyle=null;sortedResponsiveOptions=null;totalShiftedItems=0;page=0;documentResizeListener;_numVisible=0;d_numVisible=0;_oldNumVisible=0;_activeIndex=0;_oldactiveIndex=0;_componentStyle=y(G);constructor(e){super(),this.galleria=e}onInit(){N(this.platformId)&&(this.createStyle(),this.responsiveOptions&&this.bindDocumentListeners())}onAfterContentChecked(){let e=this.totalShiftedItems;(this._oldNumVisible!==this.d_numVisible||this._oldactiveIndex!==this._activeIndex)&&this.itemsContainer&&(this._activeIndex<=this.getMedianItemIndex()?e=0:this.value.length-this.d_numVisible+this.getMedianItemIndex()<this._activeIndex?e=this.d_numVisible-this.value.length:this.value.length-this.d_numVisible<this._activeIndex&&this.d_numVisible%2===0?e=this._activeIndex*-1+this.getMedianItemIndex()+1:e=this._activeIndex*-1+this.getMedianItemIndex(),e!==this.totalShiftedItems&&(this.totalShiftedItems=e),this.itemsContainer&&this.itemsContainer.nativeElement&&(this.itemsContainer.nativeElement.style.transform=this.isVertical?`translate3d(0, ${e*(100/this.d_numVisible)}%, 0)`:`translate3d(${e*(100/this.d_numVisible)}%, 0, 0)`),this._oldactiveIndex!==this._activeIndex&&(Y(this.itemsContainer.nativeElement,"p-items-hidden"),this.itemsContainer.nativeElement.style.transition="transform 500ms ease 0s"),this._oldactiveIndex=this._activeIndex,this._oldNumVisible=this.d_numVisible)}onAfterViewInit(){N(this.platformId)&&this.calculatePosition()}createStyle(){this.thumbnailsStyle||(this.thumbnailsStyle=this.document.createElement("style"),pe(this.thumbnailsStyle,"nonce",this.galleria.config?.csp()?.nonce),this.document.body.appendChild(this.thumbnailsStyle));let e=`
            #${this.containerId} .p-galleria-thumbnail-item {
                flex: 1 0 ${100/this.d_numVisible}%
            }
        `;if(this.responsiveOptions){this.sortedResponsiveOptions=[...this.responsiveOptions],this.sortedResponsiveOptions.sort((i,n)=>{let a=i.breakpoint,s=n.breakpoint,C;return a==null&&s!=null?C=-1:a!=null&&s==null?C=1:a==null&&s==null?C=0:typeof a=="string"&&typeof s=="string"?C=a.localeCompare(s,void 0,{numeric:!0}):C=a<s?-1:a>s?1:0,-1*C});for(let i=0;i<this.sortedResponsiveOptions.length;i++){let n=this.sortedResponsiveOptions[i];e+=`
                    @media screen and (max-width: ${n.breakpoint}) {
                        #${this.containerId} .p-galleria-thumbnail-item {
                            flex: 1 0 ${100/n.numVisible}%
                        }
                    }
                `}}this.thumbnailsStyle.innerHTML=e,pe(this.thumbnailsStyle,"nonce",this.galleria.config?.csp()?.nonce)}calculatePosition(){if(N(this.platformId)&&this.itemsContainer&&this.sortedResponsiveOptions){let e=window.innerWidth,i={numVisible:this._numVisible};for(let n=0;n<this.sortedResponsiveOptions.length;n++){let a=this.sortedResponsiveOptions[n];parseInt(a.breakpoint,10)>=e&&(i=a)}this.d_numVisible!==i.numVisible&&(this.d_numVisible=i.numVisible,this.cd.markForCheck())}}getTabIndex(e){return this.isItemActive(e)?0:null}navForward(e){this.stopTheSlideShow();let i=this._activeIndex+1;i+this.totalShiftedItems>this.getMedianItemIndex()&&(-1*this.totalShiftedItems<this.getTotalPageNumber()-1||this.circular)&&this.step(-1);let n=this.circular&&this.value.length-1===this._activeIndex?0:i;this.onActiveIndexChange.emit(n),e.cancelable&&e.preventDefault()}navBackward(e){this.stopTheSlideShow();let i=this._activeIndex!==0?this._activeIndex-1:0,n=i+this.totalShiftedItems;this.d_numVisible-n-1>this.getMedianItemIndex()&&(-1*this.totalShiftedItems!==0||this.circular)&&this.step(1);let a=this.circular&&this._activeIndex===0?this.value.length-1:i;this.onActiveIndexChange.emit(a),e.cancelable&&e.preventDefault()}onItemClick(e){this.stopTheSlideShow();let i=e;if(i!==this._activeIndex){let n=i+this.totalShiftedItems,a=0;i<this._activeIndex?(a=this.d_numVisible-n-1-this.getMedianItemIndex(),a>0&&-1*this.totalShiftedItems!==0&&this.step(a)):(a=this.getMedianItemIndex()-n,a<0&&-1*this.totalShiftedItems<this.getTotalPageNumber()-1&&this.step(a)),this.activeIndex=i,this.onActiveIndexChange.emit(this.activeIndex)}}onThumbnailKeydown(e,i){switch((e.code==="Enter"||e.code==="Space")&&(this.onItemClick(i),e.preventDefault()),e.code){case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break;case"Home":this.onHomeKey(),e.preventDefault();break;case"End":this.onEndKey(),e.preventDefault();break;case"ArrowUp":case"ArrowDown":e.preventDefault();break;case"Tab":this.onTabKey();break;default:break}}onRightKey(){let e=R(this.itemsContainer?.nativeElement,'[data-pc-section="thumbnailitem"]'),i=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(i,i+1===e.length?e.length-1:i+1)}onLeftKey(){let e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,e-1<=0?0:e-1)}onHomeKey(){let e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,0)}onEndKey(){let e=R(this.itemsContainer?.nativeElement,'[data-pc-section="thumbnailitem"]'),i=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(i,e.length-1)}onTabKey(){let e=[...R(this.itemsContainer?.nativeElement,'[data-pc-section="thumbnailitem"]')],i=e.findIndex(s=>Ne(s,"data-p-active")===!0),n=X(this.itemsContainer?.nativeElement,'[tabindex="0"]'),a=e.findIndex(s=>s===n?.parentElement);e[a].children[0].tabIndex="-1",e[i].children[0].tabIndex="0"}findFocusedIndicatorIndex(){let e=[...R(this.itemsContainer?.nativeElement,'[data-pc-section="thumbnailitem"]')],i=X(this.itemsContainer?.nativeElement,'[data-pc-section="thumbnailitem"] > [tabindex="0"]');return e.findIndex(n=>n===i?.parentElement)}changedFocusedIndicator(e,i){let n=R(this.itemsContainer?.nativeElement,'[data-pc-section="thumbnailitem"]');n[e].children[0].tabIndex="-1",n[i].children[0].tabIndex="0",n[i].children[0].focus()}step(e){let i=this.totalShiftedItems+e;e<0&&-1*i+this.d_numVisible>this.value.length-1?i=this.d_numVisible-this.value.length:e>0&&i>0&&(i=0),this.circular&&(e<0&&this.value.length-1===this._activeIndex?i=0:e>0&&this._activeIndex===0&&(i=this.d_numVisible-this.value.length)),this.itemsContainer&&(Y(this.itemsContainer.nativeElement,"p-items-hidden"),this.itemsContainer.nativeElement.style.transform=this.isVertical?`translate3d(0, ${i*(100/this.d_numVisible)}%, 0)`:`translate3d(${i*(100/this.d_numVisible)}%, 0, 0)`,this.itemsContainer.nativeElement.style.transition="transform 500ms ease 0s"),this.totalShiftedItems=i}stopTheSlideShow(){this.slideShowActive&&this.stopSlideShow&&this.stopSlideShow.emit()}changePageOnTouch(e,i){i<0?this.navForward(e):this.navBackward(e)}getTotalPageNumber(){return this.value.length>this.d_numVisible?this.value.length-this.d_numVisible+1:0}getMedianItemIndex(){let e=Math.floor(this.d_numVisible/2);return this.d_numVisible%2?e:e-1}onTransitionEnd(){this.itemsContainer&&this.itemsContainer.nativeElement&&(de(this.itemsContainer.nativeElement,"p-items-hidden"),this.itemsContainer.nativeElement.style.transition="")}onTouchEnd(e){let i=e.changedTouches[0];this.isVertical?this.changePageOnTouch(e,i.pageY-this.startPos.y):this.changePageOnTouch(e,i.pageX-this.startPos.x)}onTouchMove(e){e.cancelable&&e.preventDefault()}onTouchStart(e){let i=e.changedTouches[0];this.startPos={x:i.pageX,y:i.pageY}}isNavBackwardDisabled(){return!this.circular&&this._activeIndex===0||this.value.length<=this.d_numVisible}isNavForwardDisabled(){return!this.circular&&this._activeIndex===this.value.length-1||this.value.length<=this.d_numVisible}firstItemAciveIndex(){return this.totalShiftedItems*-1}lastItemActiveIndex(){return this.firstItemAciveIndex()+this.d_numVisible-1}isItemActive(e){return this.firstItemAciveIndex()<=e&&this.lastItemActiveIndex()>=e}bindDocumentListeners(){if(N(this.platformId)){let e=this.document.defaultView||"window";this.documentResizeListener=this.renderer.listen(e,"resize",()=>{this.calculatePosition()})}}unbindDocumentListeners(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}onDestroy(){this.responsiveOptions&&this.unbindDocumentListeners(),this.thumbnailsStyle&&this.thumbnailsStyle.parentNode?.removeChild(this.thumbnailsStyle)}ariaPrevButtonLabel(){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.prevPageLabel:void 0}ariaNextButtonLabel(){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.nextPageLabel:void 0}ariaPageLabel(e){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.pageLabel?.replace(/{page}/g,e):void 0}static \u0275fac=function(i){return new(i||t)(B(Q))};static \u0275cmp=A({type:t,selectors:[["div","pGalleriaThumbnails",""]],viewQuery:function(i,n){if(i&1&&q(jt,5),i&2){let a;f(a=_())&&(n.itemsContainer=a.first)}},hostVars:2,hostBindings:function(i,n){i&2&&m(n.cx("thumbnails"))},inputs:{containerId:"containerId",value:"value",isVertical:[2,"isVertical","isVertical",v],slideShowActive:[2,"slideShowActive","slideShowActive",v],circular:[2,"circular","circular",v],responsiveOptions:"responsiveOptions",contentHeight:"contentHeight",showThumbnailNavigators:"showThumbnailNavigators",templates:"templates",numVisible:"numVisible",activeIndex:"activeIndex"},outputs:{onActiveIndexChange:"onActiveIndexChange",stopSlideShow:"stopSlideShow"},standalone:!1,features:[F([G]),$([w]),D],attrs:Kt,decls:7,vars:15,consts:[["itemsContainer",""],[3,"pBind"],["type","button","pRipple","","data-pc-group-section","thumbnailnavigator",3,"pBind","class","click",4,"ngIf"],[3,"pBind","ngStyle"],["role","tablist",3,"transitionend","touchstart","touchmove","pBind"],[3,"pBind","class","keydown",4,"ngFor","ngForOf"],["type","button","pRipple","","data-pc-group-section","thumbnailnavigator",3,"click","pBind"],[4,"ngIf"],[4,"ngTemplateOutlet"],["data-p-icon","chevron-left",3,"pBind","class",4,"ngIf"],["data-p-icon","chevron-up",3,"pBind","class",4,"ngIf"],["data-p-icon","chevron-left",3,"pBind"],["data-p-icon","chevron-up",3,"pBind"],[3,"keydown","pBind"],[3,"click","touchend","keydown.enter","pBind"],["pGalleriaItemSlot","","type","thumbnail",3,"pBind","item","templates"],["data-p-icon","chevron-right",3,"pBind","class",4,"ngIf"],["data-p-icon","chevron-down",3,"pBind","class",4,"ngIf"],["data-p-icon","chevron-right",3,"pBind"],["data-p-icon","chevron-down",3,"pBind"]],template:function(i,n){if(i&1){let a=x();h(0,"div",1),d(1,ti,3,6,"button",2),h(2,"div",3)(3,"div",4,0),I("transitionend",function(){return p(a),u(n.onTransitionEnd())})("touchstart",function(C){return p(a),u(n.onTouchStart(C))})("touchmove",function(C){return p(a),u(n.onTouchMove(C))}),d(5,ii,3,17,"div",5),g()(),d(6,si,3,6,"button",2),g()}i&2&&(m(n.cx("thumbnailContent")),l("pBind",n.ptm("thumbnailContent")),c(),l("ngIf",n.showThumbnailNavigators),c(),m(n.cx("thumbnailsViewport")),l("pBind",n.ptm("thumbnailsViewport"))("ngStyle",Z(13,Ut,n.isVertical?n.contentHeight:"")),c(),m(n.cx("thumbnailItems")),l("pBind",n.ptm("thumbnailItems")),c(2),l("ngForOf",n.value),c(),l("ngIf",n.showThumbnailNavigators))},dependencies:()=>[re,H,j,se,Le,ee,he,me,J,w,Ie],encapsulation:2,changeDetection:0})}return t})(),We=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Se({type:t});static \u0275inj=xe({imports:[ce,ue,ge,ee,he,me,J,Oe,ce,ue]})}return t})();var z=class t{getImages(){return Promise.resolve([{itemImageSrc:"https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",thumbnailImageSrc:"https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",alt:"Angular project development on a laptop screen",title:"Modern Web Development Showcase"},{itemImageSrc:"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",thumbnailImageSrc:"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",alt:"Responsive web design and Angular components",title:"Responsive Angular UI Components"},{itemImageSrc:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",thumbnailImageSrc:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",alt:"Coding and debugging Angular applications",title:"Angular Code Debugging Session"},{itemImageSrc:"https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",thumbnailImageSrc:"https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",alt:"Building scalable Angular web apps",title:"Scalable Angular Application Architecture"},{itemImageSrc:"https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",thumbnailImageSrc:"https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",alt:"Modern dashboard built with Angular",title:"Angular Dashboard and Analytics"},{itemImageSrc:"https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",thumbnailImageSrc:"https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",alt:"Angular mobile-responsive design",title:"Mobile-First Angular Design"}])}static \u0275fac=function(e){return new(e||t)};static \u0275prov=K({token:t,factory:t.\u0275fac,providedIn:"root"})};var gi=()=>({"max-width":"850px"});function vi(t,o){if(t&1&&b(0,"img",7),t&2){let e=o.$implicit;l("src",e.itemImageSrc,ne)}}function bi(t,o){if(t&1&&b(0,"img",8),t&2){let e=o.$implicit;l("src",e.thumbnailImageSrc,ne)}}function fi(t,o){if(t&1&&(h(0,"div",9)(1,"h4"),ae(2),g(),h(3,"p"),ae(4),g()()),t&2){let e=o.$implicit;c(2),le(e.title),c(2),le(e.description)}}function _i(t,o){if(t&1&&(b(0,"app-section-header",5),h(1,"p-galleria",6),d(2,vi,1,1,"ng-template",null,0,E)(4,bi,1,1,"ng-template",null,1,E)(6,fi,5,2,"ng-template",null,2,E),g()),t&2){let e=r();l("title",e.title())("icon",e.icon())("description",e.description()),c(),l("value",e.images())("responsiveOptions",e.responsiveOptions)("containerStyle",U(10,gi))("circular",!0)("showItemNavigators",!0)("showThumbnails",!0)("numVisible",7)}}var Ye=class t{constructor(o){this.galleryService=o}description=W("Gallery of my projects and works showcasing my skills and expertise.");icon=W("pi pi-image");title=W("Gallery");input={title:this.title,icon:this.icon,description:this.description};displayCustom;activeIndex=0;images=Be([]);responsiveOptions=[{breakpoint:"1024px",numVisible:5},{breakpoint:"768px",numVisible:3},{breakpoint:"560px",numVisible:1}];ngOnInit(){this.galleryService.getImages().then(o=>this.images.set(o))}imageClick(o){this.activeIndex=o,this.displayCustom=!0}static \u0275fac=function(e){return new(e||t)(B(z))};static \u0275cmp=A({type:t,selectors:[["app-gallery"]],inputs:{description:[1,"description"],icon:[1,"icon"],title:[1,"title"],images:[1,"images"]},outputs:{images:"imagesChange"},features:[F([z])],decls:2,vars:3,consts:[["item",""],["thumbnail",""],["caption",""],[3,"px","py","direction"],["containerTemplate","center"],[3,"title","icon","description"],[3,"value","responsiveOptions","containerStyle","circular","showItemNavigators","showThumbnails","numVisible"],[2,"width","100%","display","block",3,"src"],[3,"src"],[1,"text-center","p-2"]],template:function(e,i){e&1&&(h(0,"ap-container",3),d(1,_i,8,11,"ng-template",4),g()),e&2&&l("px",6)("py",20)("direction","column")},dependencies:[je,$e,ze,qe,We,Q],encapsulation:2})};export{Ye as Gallery};
