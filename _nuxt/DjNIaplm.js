import{d as c,y as p,c as _,i as d,t as u,U as g,I as i,n as l,j as m}from"./CgR7JWbH.js";const f={class:"absolute text-sm font-medium py-0.5 group-hover:border-primary-500 -top-3 border border-300 rounded-full bg-white px-3.5 text-gray-600 dark:bg-gray-800 dark:border-gray-500 dark:text-white"},b=c({__name:"Tag",setup(o){const t=p();return(n,a)=>{var e,r,s;return d(),_("span",f,u((s=(r=(e=g(t))==null?void 0:e.directory)==null?void 0:r.featured)==null?void 0:s.labelForCard),1)}}}),y=c({__name:"Tag",props:["tag"],setup(o){const t=p().directory.tags,n=o,a=t==null?void 0:t.find(r=>r.name===n.tag),e=i(()=>a!=null&&a.color?`${a.color}-tag`:"gray-tag");return(r,s)=>(d(),_("span",{class:l(g(e))},u(o.tag),3))}}),h=m(y,[["__scopeId","data-v-024f4efd"]]);export{b as _,h as a};
