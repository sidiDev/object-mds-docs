(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[32],{62:function(e,t,n){!function(e){"use strict";function t(e){for(var t={},n=e.split(" "),r=0;r<n.length;++r)t[n[r]]=!0;return t}e.defineMode("asn.1",(function(e,t){var n,r=e.indentUnit,i=t.keywords||{},a=t.cmipVerbs||{},s=t.compareTypes||{},E=t.status||{},o=t.tags||{},I=t.storage||{},T=t.modifier||{},S=t.accessTypes||{},u=t.multiLineStrings,l=!1!==t.indentStatements,p=/[\|\^]/;function c(e,t){var r,l=e.next();if('"'==l||"'"==l)return t.tokenize=(r=l,function(e,t){for(var n,i=!1,a=!1;null!=(n=e.next());){if(n==r&&!i){var s=e.peek();s&&("b"!=(s=s.toLowerCase())&&"h"!=s&&"o"!=s||e.next()),a=!0;break}i=!i&&"\\"==n}return(a||!i&&!u)&&(t.tokenize=null),"string"}),t.tokenize(e,t);if(/[\[\]\(\){}:=,;]/.test(l))return n=l,"punctuation";if("-"==l&&e.eat("-"))return e.skipToEnd(),"comment";if(/\d/.test(l))return e.eatWhile(/[\w\.]/),"number";if(p.test(l))return e.eatWhile(p),"operator";e.eatWhile(/[\w\-]/);var c=e.current();return i.propertyIsEnumerable(c)?"keyword":a.propertyIsEnumerable(c)?"variable cmipVerbs":s.propertyIsEnumerable(c)?"atom compareTypes":E.propertyIsEnumerable(c)?"comment status":o.propertyIsEnumerable(c)?"variable-3 tags":I.propertyIsEnumerable(c)?"builtin storage":T.propertyIsEnumerable(c)?"string-2 modifier":S.propertyIsEnumerable(c)?"atom accessTypes":"variable"}function A(e,t,n,r,i){this.indented=e,this.column=t,this.type=n,this.align=r,this.prev=i}function N(e,t,n){var r=e.indented;return e.context&&"statement"==e.context.type&&(r=e.context.indented),e.context=new A(r,t,n,null,e.context)}function O(e){var t=e.context.type;return")"!=t&&"]"!=t&&"}"!=t||(e.indented=e.context.indented),e.context=e.context.prev}return{startState:function(e){return{tokenize:null,context:new A((e||0)-r,0,"top",!1),indented:0,startOfLine:!0}},token:function(e,t){var r=t.context;if(e.sol()&&(null==r.align&&(r.align=!1),t.indented=e.indentation(),t.startOfLine=!0),e.eatSpace())return null;n=null;var i=(t.tokenize||c)(e,t);if("comment"==i)return i;if(null==r.align&&(r.align=!0),";"!=n&&":"!=n&&","!=n||"statement"!=r.type)if("{"==n)N(t,e.column(),"}");else if("["==n)N(t,e.column(),"]");else if("("==n)N(t,e.column(),")");else if("}"==n){for(;"statement"==r.type;)r=O(t);for("}"==r.type&&(r=O(t));"statement"==r.type;)r=O(t)}else n==r.type?O(t):l&&(("}"==r.type||"top"==r.type)&&";"!=n||"statement"==r.type&&"newstatement"==n)&&N(t,e.column(),"statement");else O(t);return t.startOfLine=!1,i},electricChars:"{}",lineComment:"--",fold:"brace"}})),e.defineMIME("text/x-ttcn-asn",{name:"asn.1",keywords:t("DEFINITIONS OBJECTS IF DERIVED INFORMATION ACTION REPLY ANY NAMED CHARACTERIZED BEHAVIOUR REGISTERED WITH AS IDENTIFIED CONSTRAINED BY PRESENT BEGIN IMPORTS FROM UNITS SYNTAX MIN-ACCESS MAX-ACCESS MINACCESS MAXACCESS REVISION STATUS DESCRIPTION SEQUENCE SET COMPONENTS OF CHOICE DistinguishedName ENUMERATED SIZE MODULE END INDEX AUGMENTS EXTENSIBILITY IMPLIED EXPORTS"),cmipVerbs:t("ACTIONS ADD GET NOTIFICATIONS REPLACE REMOVE"),compareTypes:t("OPTIONAL DEFAULT MANAGED MODULE-TYPE MODULE_IDENTITY MODULE-COMPLIANCE OBJECT-TYPE OBJECT-IDENTITY OBJECT-COMPLIANCE MODE CONFIRMED CONDITIONAL SUBORDINATE SUPERIOR CLASS TRUE FALSE NULL TEXTUAL-CONVENTION"),status:t("current deprecated mandatory obsolete"),tags:t("APPLICATION AUTOMATIC EXPLICIT IMPLICIT PRIVATE TAGS UNIVERSAL"),storage:t("BOOLEAN INTEGER OBJECT IDENTIFIER BIT OCTET STRING UTCTime InterfaceIndex IANAifType CMIP-Attribute REAL PACKAGE PACKAGES IpAddress PhysAddress NetworkAddress BITS BMPString TimeStamp TimeTicks TruthValue RowStatus DisplayString GeneralString GraphicString IA5String NumericString PrintableString SnmpAdminAtring TeletexString UTF8String VideotexString VisibleString StringStore ISO646String T61String UniversalString Unsigned32 Integer32 Gauge Gauge32 Counter Counter32 Counter64"),modifier:t("ATTRIBUTE ATTRIBUTES MANDATORY-GROUP MANDATORY-GROUPS GROUP GROUPS ELEMENTS EQUALITY ORDERING SUBSTRINGS DEFINED"),accessTypes:t("not-accessible accessible-for-notify read-only read-create read-write"),multiLineStrings:!0})}(n(12))}}]);
//# sourceMappingURL=32.1b841b04.chunk.js.map