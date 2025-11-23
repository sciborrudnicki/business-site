import './polyfills.server.mjs';
import{a as be,b as I}from"./chunk-JUBHMPIM.mjs";import{a as H,b as C}from"./chunk-VFWCV6MM.mjs";import{a as ye}from"./chunk-RABATLYD.mjs";import{f as E}from"./chunk-UM7MSU7A.mjs";import"./chunk-ABYDEO7L.mjs";import"./chunk-VBS3JSEF.mjs";import{a as J}from"./chunk-GX7SBTWC.mjs";import{a as b}from"./chunk-2SQRUL3X.mjs";import{a as w,c as M}from"./chunk-YN3WC7YL.mjs";import{Ca as xe,Ea as _e,Fa as he,Ga as A,l as de,m as ue,o as fe,p as ve,xa as ge,ya as Q}from"./chunk-5OMCRGOY.mjs";import{$b as _,Ab as B,Ca as o,Cb as F,Db as N,Gb as ce,Jb as me,Kb as f,Lb as m,Mb as x,N as y,Na as S,Nb as $,O as Z,Q as ee,S as j,Sa as g,Ta as ne,Va as ie,Vb as se,Wa as oe,Xa as u,Xb as T,ea as v,eb as O,fb as P,ib as re,ja as K,jb as ae,kb as r,lb as i,mb as a,nb as c,rb as le,sb as pe,tb as R,xb as d,ya as te}from"./chunk-VRNWQWKZ.mjs";import"./chunk-5R5OPJSI.mjs";var ke=`
    .p-timeline {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        direction: ltr;
    }

    .p-timeline-left .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-left .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event {
        flex-direction: row-reverse;
    }

    .p-timeline-right .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: row-reverse;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-vertical .p-timeline-event-opposite,
    .p-timeline-vertical .p-timeline-event-content {
        padding: dt('timeline.vertical.event.content.padding');
    }

    .p-timeline-vertical .p-timeline-event-connector {
        width: dt('timeline.event.connector.size');
    }

    .p-timeline-event {
        display: flex;
        position: relative;
        min-height: dt('timeline.event.min.height');
    }

    .p-timeline-event:last-child {
        min-height: 0;
    }

    .p-timeline-event-opposite {
        flex: 1;
    }

    .p-timeline-event-content {
        flex: 1;
    }

    .p-timeline-event-separator {
        flex: 0;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .p-timeline-event-marker {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        align-self: baseline;
        border-width: dt('timeline.event.marker.border.width');
        border-style: solid;
        border-color: dt('timeline.event.marker.border.color');
        border-radius: dt('timeline.event.marker.border.radius');
        width: dt('timeline.event.marker.size');
        height: dt('timeline.event.marker.size');
        background: dt('timeline.event.marker.background');
    }

    .p-timeline-event-marker::before {
        content: ' ';
        border-radius: dt('timeline.event.marker.content.border.radius');
        width: dt('timeline.event.marker.content.size');
        height: dt('timeline.event.marker.content.size');
        background: dt('timeline.event.marker.content.background');
    }

    .p-timeline-event-marker::after {
        content: ' ';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: dt('timeline.event.marker.border.radius');
        box-shadow: dt('timeline.event.marker.content.inset.shadow');
    }

    .p-timeline-event-connector {
        flex-grow: 1;
        background: dt('timeline.event.connector.color');
    }

    .p-timeline-horizontal {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event {
        flex-direction: column;
        flex: 1;
    }

    .p-timeline-horizontal .p-timeline-event:last-child {
        flex: 0;
    }

    .p-timeline-horizontal .p-timeline-event-separator {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event-connector {
        width: 100%;
        height: dt('timeline.event.connector.size');
    }

    .p-timeline-horizontal .p-timeline-event-opposite,
    .p-timeline-horizontal .p-timeline-event-content {
        padding: dt('timeline.horizontal.event.content.padding');
    }

    .p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: column-reverse;
    }

    .p-timeline-bottom .p-timeline-event {
        flex-direction: column-reverse;
    }
`;var we=["content"],Me=["opposite"],Ie=["marker"],X=e=>({$implicit:e});function De(e,n){e&1&&R(0)}function Be(e,n){e&1&&R(0)}function Fe(e,n){if(e&1&&(le(0),u(1,Be,1,0,"ng-container",3),pe()),e&2){let t=d().$implicit,l=d();o(),r("ngTemplateOutlet",l.markerTemplate||l._markerTemplate)("ngTemplateOutletContext",T(2,X,t))}}function Ne(e,n){if(e&1&&c(0,"div",2),e&2){let t=d(2);f(t.cx("eventMarker")),r("pBind",t.ptm("eventMarker"))}}function Ae(e,n){if(e&1&&c(0,"div",2),e&2){let t=d(2);f(t.cx("eventConnector")),r("pBind",t.ptm("eventConnector"))}}function ze(e,n){e&1&&R(0)}function je(e,n){if(e&1&&(i(0,"div",2)(1,"div",2),u(2,De,1,0,"ng-container",3),a(),i(3,"div",2),u(4,Fe,2,4,"ng-container",4)(5,Ne,1,3,"ng-template",null,0,_)(7,Ae,1,3,"div",5),a(),i(8,"div",2),u(9,ze,1,0,"ng-container",3),a()()),e&2){let t=n.$implicit,l=n.last,s=ce(6),p=d();f(p.cx("event")),r("pBind",p.ptm("event")),o(),f(p.cx("eventOpposite")),r("pBind",p.ptm("eventOpposite")),o(),r("ngTemplateOutlet",p.oppositeTemplate||p._oppositeTemplate)("ngTemplateOutletContext",T(19,X,t)),o(),f(p.cx("eventSeparator")),r("pBind",p.ptm("eventSeparator")),o(),r("ngIf",p.markerTemplate||p._markerTemplate)("ngIfElse",s),o(3),r("ngIf",!l),o(),f(p.cx("eventContent")),r("pBind",p.ptm("eventContent")),o(),r("ngTemplateOutlet",p.contentTemplate||p._contentTemplate)("ngTemplateOutletContext",T(21,X,t))}}var Oe={root:({instance:e})=>["p-timeline p-component","p-timeline-"+e.align,"p-timeline-"+e.layout],event:"p-timeline-event",eventOpposite:"p-timeline-event-opposite",eventSeparator:"p-timeline-event-separator",eventMarker:"p-timeline-event-marker",eventConnector:"p-timeline-event-connector",eventContent:"p-timeline-event-content"},Se=(()=>{class e extends xe{name="timeline";style=ke;classes=Oe;static \u0275fac=(()=>{let t;return function(s){return(t||(t=K(e)))(s||e)}})();static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})();var Te=new ee("TIMELINE_INSTANCE"),z=(()=>{class e extends he{bindDirectiveInstance=j(A,{self:!0});$pcTimeline=j(Te,{optional:!0,skipSelf:!0})??void 0;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}value;styleClass;align="left";layout="vertical";contentTemplate;oppositeTemplate;markerTemplate;templates;_contentTemplate;_oppositeTemplate;_markerTemplate;_componentStyle=j(Se);getBlockableElement(){return this.el.nativeElement.children[0]}onAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"opposite":this._oppositeTemplate=t.template;break;case"marker":this._markerTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(s){return(t||(t=K(e)))(s||e)}})();static \u0275cmp=g({type:e,selectors:[["p-timeline"]],contentQueries:function(l,s,p){if(l&1&&(B(p,we,4),B(p,Me,4),B(p,Ie,4),B(p,ge,4)),l&2){let h;F(h=N())&&(s.contentTemplate=h.first),F(h=N())&&(s.oppositeTemplate=h.first),F(h=N())&&(s.markerTemplate=h.first),F(h=N())&&(s.templates=h)}},hostVars:2,hostBindings:function(l,s){l&2&&f(s.cn(s.cx("root"),s.styleClass))},inputs:{value:"value",styleClass:"styleClass",align:"align",layout:"layout"},features:[se([Se,{provide:Te,useExisting:e},{provide:_e,useExisting:e}]),oe([A]),ie],decls:1,vars:1,consts:[["marker",""],[3,"pBind","class",4,"ngFor","ngForOf"],[3,"pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf","ngIfElse"],[3,"pBind","class",4,"ngIf"]],template:function(l,s){l&1&&u(0,je,10,23,"div",1),l&2&&r("ngForOf",s.value)},dependencies:[ve,de,ue,fe,Q,A],encapsulation:2,changeDetection:0})}return e})(),D=(()=>{class e{static \u0275fac=function(l){return new(l||e)};static \u0275mod=ne({type:e});static \u0275inj=Z({imports:[z,Q,Q]})}return e})();var V=class e{#e=[{status:"Senior Angular Consultant",date:"2020 - Present",icon:"pi pi-briefcase",color:"#22c55e",description:"Leading Angular training programs and consulting for enterprise clients."},{status:"Angular Developer",date:"2018 - 2020",icon:"pi pi-code",color:"#3b82f6",description:"Developed scalable Angular applications for various industries."},{status:"Frontend Developer",date:"2016 - 2018",icon:"pi pi-desktop",color:"#f59e0b",description:"Built responsive web applications using modern frameworks."}];getExperiences(){return this.#e}static \u0275fac=function(t){return new(t||e)};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})};var He=e=>({"background-color":e});function Je(e,n){}function Ve(e,n){if(e&1&&(i(0,"span",7),c(1,"i",8),a()),e&2){let t=n.$implicit;me(T(4,He,t.color)),o(),f(t.icon)}}function We(e,n){if(e&1&&c(0,"img",10),e&2){let t=d().$implicit;r("src","https://primefaces.org/cdn/primeng/images/demo/product/"+t.image,te)("alt",t.name)}}function Le(e,n){if(e&1&&(i(0,"p-card",9),O(1,We,1,2,"img",10),i(2,"p"),m(3),a()()),e&2){let t=n.$implicit;r("header",t.status)("subheader",t.date),o(),P(t.image?1:-1),o(2),x(t.description)}}function qe(e,n){if(e&1&&(c(0,"app-section-header",5),i(1,"p-timeline",6),u(2,Je,0,0,"ng-template",null,0,_)(4,Ve,2,6,"ng-template",null,1,_)(6,Le,4,4,"ng-template",null,2,_),a()),e&2){let t=d();o(),r("value",t.experiencesService.getExperiences())}}var W=class e{constructor(n){this.experiencesService=n}title=v("Experiences");static \u0275fac=function(t){return new(t||e)(S(V))};static \u0275cmp=g({type:e,selectors:[["app-experiences"]],decls:2,vars:1,consts:[["opposite",""],["marker",""],["content",""],[3,"pt"],["containerTemplate","center"],["title","Experiences","icon","pi pi-briefcase","size","small"],["align","left",1,"customized-timeline",3,"value"],[1,"flex","p-2","items-center","justify-center","text-white","rounded-full","z-10","shadow-sm"],[1,"text-xl"],[1,"mb-6",3,"header","subheader"],["width","200",1,"shadow",3,"src","alt"]],template:function(t,l){t&1&&(i(0,"ap-container",3),u(1,qe,8,1,"ng-template",4),a()),t&2&&r("pt",20)},dependencies:[b,E,C,H,I,D,z,J,M,w],encapsulation:2})};var L=class e{getSkills(){return[{name:"Angular",description:"A platform for building mobile and desktop web applications",value:95,icon:"pi pi-google"},{name:"TypeScript",description:"A typed superset of JavaScript that compiles to plain JavaScript",value:90,icon:"pi pi-bolt"},{name:"RxJS",description:"A library for reactive programming using Observables",value:85,icon:"pi pi-refresh"},{name:"HTML/CSS",description:"The standard markup language and style sheet language for creating web pages",value:90,icon:"pi pi-code"},{name:"Node.js",description:"A JavaScript runtime built on Chrome's V8 JavaScript engine",value:80,icon:"pi pi-server"},{name:"Testing (Jasmine/Karma)",description:"Tools for testing JavaScript code",value:85,icon:"pi pi-check-circle"}]}static \u0275fac=function(t){return new(t||e)};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})};var Ge=(e,n)=>n.name;function Ke(e,n){if(e&1&&(i(0,"div",3)(1,"div",5),c(2,"i",6),i(3,"div",7)(4,"div",8)(5,"span",9),m(6),a(),i(7,"span",10),m(8),a()(),c(9,"p-progressBar",11),i(10,"p",12),m(11),a()()()()),e&2){let t=n.$implicit;o(2),f(t.icon),o(4),x(t.name),o(2),$("",t.value,"%"),o(),r("value",t.value)("showValue",!1),o(2),x(t.description)}}function Xe(e,n){e&1&&(i(0,"p",4),m(1,"No skills available."),a())}function Ye(e,n){if(e&1&&re(0,Ke,12,7,"div",3,Ge,!1,Xe,2,0,"p",4),e&2){let t=d();ae(t.skillsService.getSkills())}}var q=class e{constructor(n){this.skillsService=n}title=v("Skills");static \u0275fac=function(t){return new(t||e)(S(L))};static \u0275cmp=g({type:e,selectors:[["app-skills"]],decls:4,vars:3,consts:[[1,"mt-12"],[3,"title","icon"],[1,"grid","grid-cols-1","md:grid-cols-2","lg:grid-cols-2","gap-6"],[1,"p-6","bg-surface-50","dark:bg-surface-800","rounded-lg","dark:border-surface-700"],[1,"text-center","text-surface-500"],[1,"flex","items-start","gap-4"],[1,"text-3xl","text-primary-500","mt-1"],[1,"flex-1"],[1,"flex","justify-between","items-center","mb-2"],[1,"font-semibold","text-lg","text-surface-900","dark:text-surface-0"],[1,"text-sm","font-medium","text-primary-600"],[3,"value","showValue"],[1,"text-surface-600","dark:text-surface-300","leading-relaxed","mt-3"]],template:function(t,l){t&1&&(i(0,"div",0),c(1,"app-section-header",1),i(2,"div",2),O(3,Ye,3,1),a()()),t&2&&(o(),r("title","Skills")("icon","pi pi-crown"),o(2),P(l.skillsService.getSkills().length>0?3:-1))},dependencies:[b,I,be],encapsulation:2})};var U=class e{#e=[{institution:"University of Example",degree:"Bachelor of Science in Computer Science",year:"2015 - 2019",location:"Berlin, Germany",details:"Graduated with honors, specialized in software development and algorithms."},{institution:"Example Tech Bootcamp",degree:"Full Stack Web Development",year:"2020",location:"Warsaw, Poland",details:"Intensive 12-week program covering modern web technologies and frameworks."},{institution:"Example Tech Bootcamp",degree:"Full Stack Web Development",year:"2020",location:"Warsaw, Poland",details:"Intensive 12-week program covering modern web technologies and frameworks."},{institution:"Example Tech Bootcamp",degree:"Full Stack Web Development",year:"2020",location:"Warsaw, Poland",details:"Intensive 12-week program covering modern web technologies and frameworks."}];getEducation(){return this.#e}static \u0275fac=function(t){return new(t||e)};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})};function et(e,n){if(e&1&&(i(0,"small",6),m(1),a(),c(2,"br"),i(3,"small",6),m(4),a()),e&2){let t=n.$implicit;o(),x(t.year),o(3),x(t.location)}}function tt(e,n){if(e&1&&(i(0,"span",7),m(1),a(),m(2),i(3,"p"),m(4),a()),e&2){let t=n.$implicit;o(),x(t.institution),o(),$(" ",t.degree," "),o(2),x(t.details)}}function nt(e,n){if(e&1&&(c(0,"app-section-header",4),i(1,"p-timeline",5),u(2,et,5,2,"ng-template",null,0,_)(4,tt,5,3,"ng-template",null,1,_),a()),e&2){let t=d();o(),r("value",t.educationService.getEducation())}}var G=class e{constructor(n){this.educationService=n}title=v("Education");static \u0275fac=function(t){return new(t||e)(S(U))};static \u0275cmp=g({type:e,selectors:[["app-education"]],decls:2,vars:1,consts:[["opposite",""],["content",""],[3,"py"],["containerTemplate","center"],["title","Education","icon","pi pi-graduation-cap","size","small"],[1,"w-full","md:w-80","mb-12",3,"value"],[1,"text-surface-500","dark:text-surface-400"],[1,"font-bold"]],template:function(t,l){t&1&&(i(0,"ap-container",2),u(1,nt,6,1,"ng-template",3),a()),t&2&&r("py",20)},dependencies:[J,M,w,b,E,C,D,z],styles:[".p-timeline-event-opposite{flex:none!important}"]})};function it(e,n){if(e&1&&(c(0,"app-section-header",2),i(1,"p-card",3)(2,"div",4),c(3,"img",5),i(4,"div",6)(5,"div",7)(6,"h3",8),m(7,"Angular Trainer & Consultant"),a(),i(8,"p",9),m(9,"Specializing in Angular development and training"),a()(),i(10,"p",10),m(11," As a certified Angular expert with over 10 years of experience, I offer comprehensive services to help developers and teams excel in Angular development. From hands-on workshops and code reviews to custom development and migration support, my goal is to empower you with the skills and knowledge to build robust, scalable applications. "),a()()()(),c(12,"app-education")(13,"app-experiences")(14,"app-skills")),e&2){let t=d();r("title",t.title())("icon",t.icon())("description",t.description())}}var Ce=class e{title=v("About Me");icon=v("pi pi-user");description=v("Learn more about my background, experiences, and skills in the world of Angular development.");static \u0275fac=function(t){return new(t||e)};static \u0275cmp=g({type:e,selectors:[["app-about"]],decls:2,vars:2,consts:[[3,"px","py"],["containerTemplate","center"],[3,"title","icon","description"],[1,"mb-12"],[1,"flex","items-center","gap-8","max-w-4xl","mx-auto"],["src","https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png","alt","Angular Trainer",1,"w-32","h-32","rounded-full","object-cover"],[1,"text-left"],[1,"mb-4"],[1,"text-2xl","font-semibold"],[1,"text-surface-600"],[1,"text-surface-700","leading-relaxed"]],template:function(t,l){t&1&&(i(0,"ap-container",0),u(1,it,15,3,"ng-template",1),a()),t&2&&r("px",6)("py",20)},dependencies:[M,b,G,W,q,ye,E,C,H,I,D,w],styles:["[_nghost-%COMP%]{display:block}"]})};export{Ce as About};
