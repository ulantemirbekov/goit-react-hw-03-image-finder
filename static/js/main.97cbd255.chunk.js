(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1ImJC",ImageGalleryItem_image:"ImageGalleryItem_ImageGalleryItem_image__7TGQW"}},12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__3KjXQ",Modal:"Modal_Modal__3tyFy"}},24:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__xPpyA"}},25:function(e,t,a){e.exports={Button:"Button_Button__2kdaR"}},28:function(e,t,a){e.exports={App:"App_App__3gyuT"}},58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n,r=a(1),o=a.n(r),c=a(8),l=a.n(c),s=a(13),i=a(3),u=a(4),h=a(6),m=a(5),d=a(23),g=a.n(d),p=function(e){var t=e.searchQuery,a=void 0===t?"":t,n=e.currentPage,r=void 0===n?1:n,o=e.perPage,c=void 0===o?12:o;return g.a.get("".concat("https://pixabay.com/api","/?key=").concat("19541580-1bdd8df51d74162905bdf8d23","&q=").concat(a,"&page=").concat(r,"&image_type=photo&orientation=horizontal&per_page=").concat(c)).then((function(e){return e.data.hits}))},b=a(7),j=a.n(b),y=a(0),f=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(u.a)(a,[{key:"render",value:function(){return Object(y.jsx)("header",{className:j.a.Searchbar,children:Object(y.jsxs)("form",{className:j.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(y.jsx)("button",{type:"submit",className:j.a.SearchForm_button,children:Object(y.jsx)("span",{className:j.a.SearchForm_button_label,children:"Search"})}),Object(y.jsx)("input",{className:j.a.SearchForm_input,value:this.state.query,onChange:this.handleChange,type:"text",placeholder:"Search images and photos"})]})})}}]),a}(r.Component),_=a(11),O=a.n(_),S=function(e){var t=e.photo,a=e.onClick,n=t.webformatURL,r=t.tags,o=t.largeImageURL;return Object(y.jsx)("li",{className:O.a.ImageGalleryItem,children:Object(y.jsx)("img",{className:O.a.ImageGalleryItem_image,src:n,alt:r,onClick:function(){return a(o)}})})},v=a(24),x=a.n(v),I=function(e){var t=e.photos,a=e.onClick;return Object(y.jsx)("ul",{className:x.a.ImageGallery,children:t.map((function(e){return Object(y.jsx)(S,{photo:e,onClick:a},e.id)}))})},k=a(25),w=a.n(k),C=function(e){var t=e.onClick;return Object(y.jsx)("button",{type:"button",className:w.a.Button,onClick:t,children:"Load more"})},M=a(12),L=a.n(M),P=document.querySelector("#modal-root"),F=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.closeModal()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.closeModal()},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(c.createPortal)(Object(y.jsx)("div",{className:L.a.Overlay,onClick:this.handleBackdropClick,children:Object(y.jsx)("div",{className:L.a.Modal,children:Object(y.jsx)("img",{src:this.props.largeImageURL,alt:""})})}),P)}}]),a}(r.Component),G=a(26),N=a(10),Q=a(27),U=a.n(Q),q=Object(N.css)(n||(n=Object(G.a)(["\n  display: block;\n  margin: 0 auto;\n"]))),A=function(){return Object(y.jsx)(U.a,{color:"#3f51b5",loading:"true",css:q,size:20,margin:"10px"})},B=a(28),R=a.n(B),D=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={photos:[],currentPage:1,searchQuery:"",isLoading:!1,error:null,largeImageURL:"",showModal:!1},e.onChangeQuery=function(t){e.setState({searchQuery:t,currentPage:1,photos:[],error:null})},e.fetchPhotos=function(){var t=e.state,a=t.currentPage,n={searchQuery:t.searchQuery,currentPage:a};e.setState({isLoading:!0}),p(n).then((function(t){e.setState((function(e){return{photos:[].concat(Object(s.a)(e.photos),Object(s.a)(t)),currentPage:e.currentPage+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){e.setState({isLoading:!1}),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))},e.toggleModal=function(t){e.setState((function(e){return{showModal:!e.showModal,largeImageURL:t}}))},e}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchPhotos()}},{key:"render",value:function(){var e=this.state,t=e.photos,a=e.isLoading,n=e.error,r=e.largeImageURL,o=e.showModal;return Object(y.jsxs)("div",{className:R.a.App,children:[n&&Object(y.jsx)("h2",{children:"Something went wrong. Please try again later."}),Object(y.jsx)(f,{onSubmit:this.onChangeQuery}),a&&Object(y.jsx)(A,{}),Object(y.jsx)(I,{photos:t,onClick:this.toggleModal}),t.length>0&&Object(y.jsx)(C,{onClick:this.fetchPhotos}),o&&Object(y.jsx)(F,{largeImageURL:r,closeModal:this.toggleModal})]})}}]),a}(r.Component);a(57),a(58);l.a.render(Object(y.jsx)(o.a.StrictMode,{children:Object(y.jsx)(D,{})}),document.getElementById("root"))},7:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__3Xnfn",SearchForm:"Searchbar_SearchForm__14xXV",SearchForm_button:"Searchbar_SearchForm_button__2BpqD",SearchForm_button_label:"Searchbar_SearchForm_button_label__w1Umx",SearchForm_input:"Searchbar_SearchForm_input__21QS5"}}},[[59,1,2]]]);
//# sourceMappingURL=main.97cbd255.chunk.js.map