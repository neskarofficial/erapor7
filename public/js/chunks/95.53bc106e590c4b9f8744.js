(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{"Nq/A":function(t,e,a){"use strict";a.r(e);a("rB9j"),a("hByQ");var s=a("IF94"),r=a("LvDl"),n=a.n(r),o=a("oVt+"),i=a("sove"),l=a("R5cT"),c=a("KaE5"),d=a("AeMN"),m=a("JtJI"),u=a("GUe+"),p=a("mwM1"),b=a("Snq/"),h=a.n(b),_={components:{BRow:o.a,BCol:i.a,BFormInput:l.a,BTable:c.a,BSpinner:d.a,BPagination:m.a,BButton:u.a,BOverlay:p.a,vSelect:h.a},props:{items:{type:Array,required:!0},fields:{type:Array,required:!0},meta:{required:!0},isBusy:{type:Boolean,default:function(){return!0}},loading:{type:Boolean,default:function(){return!1}}},data:function(){return{sortBy:null,sortDesc:!1}},watch:{sortBy:function(t){this.$emit("sort",{sortBy:this.sortBy,sortDesc:this.sortDesc})},sortDesc:function(t){this.$emit("sort",{sortBy:this.sortBy,sortDesc:this.sortDesc})}},methods:{loadPerPage:function(t){this.$emit("per_page",this.meta.per_page)},changePage:function(t){this.$emit("pagination",t)},search:n.a.debounce((function(t){this.$emit("search",t)}),500),changeRombel:function(t){this.$emit("rombel",t)}}},g=a("KHd+"),f=Object(g.a)(_,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-row",[a("b-col",{staticClass:"mb-2",attrs:{md:"4"}},[a("v-select",{attrs:{options:[10,25,50,100],searchable:!1,clearable:!1},on:{input:t.loadPerPage},model:{value:t.meta.per_page,callback:function(e){t.$set(t.meta,"per_page",e)},expression:"meta.per_page"}})],1),t._v(" "),a("b-col",{staticClass:"mb-2",attrs:{md:"4"}},[a("v-select",{attrs:{reduce:function(t){return t.rombongan_belajar},label:"nama",options:t.meta.rombongan_belajar,placeholder:"== Filter Rombongan Belajar =="},on:{input:t.changeRombel},scopedSlots:t._u([{key:"no-options",fn:function(e){e.search,e.searching,e.loading;return[t._v("\n          Tidak ada data untuk ditampilkan\n        ")]}}]),model:{value:t.meta.rombongan_belajar_id,callback:function(e){t.$set(t.meta,"rombongan_belajar_id",e)},expression:"meta.rombongan_belajar_id"}})],1),t._v(" "),a("b-col",{staticClass:"mb-2",attrs:{md:"4"}},[a("b-form-input",{attrs:{placeholder:"Cari data..."},on:{input:t.search}})],1)],1),t._v(" "),a("b-overlay",{attrs:{show:t.loading,rounded:"",opacity:"0.6",size:"lg","spinner-variant":"warning"}},[a("b-table",{attrs:{responsive:"",bordered:"",striped:"",items:t.items,fields:t.fields,"sort-by":t.sortBy,"sort-desc":t.sortDesc,"show-empty":"",busy:t.isBusy},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e}},scopedSlots:t._u([{key:"table-busy",fn:function(){return[a("div",{staticClass:"text-center text-danger my-2"},[a("b-spinner",{staticClass:"align-middle"}),t._v(" "),a("strong",[t._v("Loading...")])],1)]},proxy:!0},{key:"cell(kelas)",fn:function(e){return[t._v("\n        "+t._s(e.item.kelas.nama)+"\n      ")]}},{key:"cell(ttl)",fn:function(e){return[t._v("\n        "+t._s(e.item.tempat_lahir)+", "+t._s(e.item.tanggal_lahir_indo)+"\n      ")]}},{key:"cell(actions)",fn:function(e){return[a("b-button",{attrs:{variant:"success",href:"/cetak/buku-induk/"+e.item.peserta_didik_id+"/"+t.meta.semester_id,target:"_blank",size:"sm"}},[t._v("Cetak")])]}}])})],1),t._v(" "),a("b-row",{staticClass:"mt-2"},[a("b-col",{attrs:{md:"6"}},[a("p",[t._v("Menampilkan "+t._s(t.meta.from?t.meta.from:0)+" sampai "+t._s(t.meta.to)+" dari "+t._s(t.meta.total)+" entri")])]),t._v(" "),a("b-col",{attrs:{md:"6"}},[a("b-pagination",{attrs:{"total-rows":t.meta.total,"per-page":t.meta.per_page,align:"right","aria-controls":"dw-datatable"},on:{change:t.changePage},model:{value:t.meta.current_page,callback:function(e){t.$set(t.meta,"current_page",e)},expression:"meta.current_page"}})],1)],1)],1)}),[],!1,null,null,null).exports,y={components:{BCard:s.a,Datatable:f},data:function(){return{loading:!0,isBusy:!0,fields:[{key:"nama",label:"Nama Peserta Didik",sortable:!0,thClass:"text-center"},{key:"kelas",label:"Kelas",sortable:!0,thClass:"text-center",tdClass:"text-center"},{key:"nisn",label:"NISN",sortable:!0,thClass:"text-center",tdClass:"text-center"},{key:"ttl",label:"Tempat, Tanggal Lahir",sortable:!1,thClass:"text-center"},{key:"actions",label:"Cetak",sortable:!1,thClass:"text-center",tdClass:"text-center"}],items:[],meta:{},current_page:1,per_page:10,rombongan_belajar_id:"",search:"",sortBy:"nama",sortByDesc:!1}},created:function(){this.loadPostsData()},methods:{loadPostsData:function(){var t=this;this.loading=!0;var e=this.current_page;this.$http.get("/progress/peserta-didik",{params:{sekolah_id:this.user.sekolah_id,semester_id:this.user.semester.semester_id,rombongan_belajar_id:this.rombongan_belajar_id,page:e,per_page:this.per_page,q:this.search,sortby:this.sortBy,sortbydesc:this.sortByDesc?"DESC":"ASC"}}).then((function(e){var a=e.data;t.isBusy=!1,t.loading=!1,t.items=a.data.data,t.meta={total:a.data.total,current_page:a.data.current_page,per_page:a.data.per_page,from:a.data.from,to:a.data.to,rombongan_belajar_id:t.rombongan_belajar_id,rombongan_belajar:a.rombongan_belajar,semester_id:t.user.semester.semester_id}}))},handlePerPage:function(t){this.per_page=t,this.loadPostsData()},handlePagination:function(t){this.current_page=t,this.loadPostsData()},handleSearch:function(t){this.search=t,this.loadPostsData()},handleSort:function(t){t.sortBy&&(this.sortBy=t.sortBy,this.sortByDesc=t.sortDesc,this.loadPostsData())},handleRombel:function(t){this.rombongan_belajar_id=t,this.loadPostsData()}}},B=Object(g.a)(y,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",[a("datatable",{attrs:{loading:t.loading,isBusy:t.isBusy,items:t.items,fields:t.fields,meta:t.meta},on:{per_page:t.handlePerPage,pagination:t.handlePagination,search:t.handleSearch,sort:t.handleSort,rombel:t.handleRombel}})],1)}),[],!1,null,null,null);e.default=B.exports}}]);