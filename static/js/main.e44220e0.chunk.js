(this["webpackJsonpepi-react-app"]=this["webpackJsonpepi-react-app"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(2),r=a.n(o),i=a(3),u=a(4),d=a(6),l=a(5),c=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleClick=function(){n.setState((function(e){return{flipCard:!e.flipCard,buttonText:n.state.flipCard?"See Answer":"Next Card",questionIndex:n.state.flipCard?n.state.questionIndex+1:n.state.questionIndex}}))},n.state={flipCard:!1,questionIndex:0,buttonText:"See Answer"},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.questions[this.state.questionIndex].question,t=this.props.questions[this.state.questionIndex].answer,a=null;return a=this.state.flipCard?s.a.createElement(s.a.Fragment,null," ",s.a.createElement("h1",null,"Answer: ",t),s.a.createElement("h3",null,"Question: ",e),s.a.createElement("br",null)," "):s.a.createElement("h1",null,e),s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{style:{paddingBottom:"20px",textAlign:"center",alignItems:"center"}},s.a.createElement("div",{style:{border:"1px solid lightblue",padding:"30px",borderRadius:"20px",backgroundColor:"powderblue",boxShadow:"2px 2px 5px #0066AA",minWidth:"500px",minHeight:"175px"}},a),s.a.createElement("button",{style:{border:"2px solid rgb(0, 95, 139)",backgroundColor:"rgb(135, 217, 250)",height:"50px",width:"150px",borderRadius:"10px",marginTop:"10px"},onClick:this.handleClick},this.state.buttonText)))}}]),a}(n.Component),p=(a(12),[{question:"What sounds does a bat make?",answer:"screech"},{question:"What sounds does a crow make?",answer:"caw"},{question:"What sounds do geese make?",answer:"honk"},{question:"What sounds do peacocks make?",answer:"scream"},{question:"What sounds does a pigeon make?",answer:"coo"},{question:"What sounds does a quail make?",answer:"call"},{question:"What sounds does a raven make?",answer:"caw"},{question:"What sounds do seals make?",answer:"bark"},{question:"What sounds do vultures make?",answer:"scream"},{question:"What sounds does a sparrow make?",answer:"chirp"},{question:"What sounds does a starling make?",answer:"chirp"},{question:"What sounds does a goldfinch make?",answer:"warble"},{question:"What sounds does a crane make?",answer:"whoop"},{question:"What sounds does a lark make?",answer:"trill"},{question:"What sounds does a dove make?",answer:"coo"}]);var m=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",{className:"apptitle"},s.a.createElement("center",null,"Bird Sounds Quiz")),s.a.createElement("div",{className:"appgrid"},s.a.createElement("div",{className:"carddiv"},s.a.createElement(c,{questions:p}))))};r.a.render(s.a.createElement(m,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.e44220e0.chunk.js.map