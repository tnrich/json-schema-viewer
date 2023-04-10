(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_visualBasic"],{

/***/ "./node_modules/refractor/lang/visual-basic.js":
/*!*****************************************************!*\
  !*** ./node_modules/refractor/lang/visual-basic.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


module.exports = visualBasic
visualBasic.displayName = 'visualBasic'
visualBasic.aliases = []
function visualBasic(Prism) {
  Prism.languages['visual-basic'] = {
    comment: {
      pattern: /(?:['‘’]|REM\b).*/i,
      inside: {
        keyword: /^REM/i
      }
    },
    directive: {
      pattern: /#(?:Const|Else|ElseIf|End|ExternalChecksum|ExternalSource|If|Region)(?:[^\S\r\n]_[^\S\r\n]*(?:\r\n?|\n)|.)+/i,
      alias: 'comment',
      greedy: true
    },
    string: {
      pattern: /\$?["“”](?:["“”]{2}|[^"“”])*["“”]C?/i,
      greedy: true
    },
    date: {
      pattern: /#[^\S\r\n]*(?:\d+([/-])\d+\1\d+(?:[^\S\r\n]+(?:\d+[^\S\r\n]*(?:AM|PM)|\d+:\d+(?::\d+)?(?:[^\S\r\n]*(?:AM|PM))?))?|(?:\d+[^\S\r\n]*(?:AM|PM)|\d+:\d+(?::\d+)?(?:[^\S\r\n]*(?:AM|PM))?))[^\S\r\n]*#/i,
      alias: 'builtin'
    },
    number: /(?:(?:\b\d+(?:\.\d+)?|\.\d+)(?:E[+-]?\d+)?|&[HO][\dA-F]+)(?:U?[ILS]|[FRD])?/i,
    boolean: /\b(?:True|False|Nothing)\b/i,
    keyword: /\b(?:AddHandler|AddressOf|Alias|And(?:Also)?|As|Boolean|ByRef|Byte|ByVal|Call|Case|Catch|C(?:Bool|Byte|Char|Date|Dbl|Dec|Int|Lng|Obj|SByte|Short|Sng|Str|Type|UInt|ULng|UShort)|Char|Class|Const|Continue|Date|Decimal|Declare|Default|Delegate|Dim|DirectCast|Do|Double|Each|Else(?:If)?|End(?:If)?|Enum|Erase|Error|Event|Exit|Finally|For|Friend|Function|Get(?:Type|XMLNamespace)?|Global|GoSub|GoTo|Handles|If|Implements|Imports|In|Inherits|Integer|Interface|Is|IsNot|Let|Lib|Like|Long|Loop|Me|Mod|Module|Must(?:Inherit|Override)|My(?:Base|Class)|Namespace|Narrowing|New|Next|Not(?:Inheritable|Overridable)?|Object|Of|On|Operator|Option(?:al)?|Or(?:Else)?|Out|Overloads|Overridable|Overrides|ParamArray|Partial|Private|Property|Protected|Public|RaiseEvent|ReadOnly|ReDim|RemoveHandler|Resume|Return|SByte|Select|Set|Shadows|Shared|short|Single|Static|Step|Stop|String|Structure|Sub|SyncLock|Then|Throw|To|Try|TryCast|TypeOf|U(?:Integer|Long|Short)|Using|Variant|Wend|When|While|Widening|With(?:Events)?|WriteOnly|Xor)\b/i,
    operator: [
      /[+\-*/\\^<=>&#@$%!]/,
      {
        pattern: /([^\S\r\n])_(?=[^\S\r\n]*[\r\n])/,
        lookbehind: true
      }
    ],
    punctuation: /[{}().,:?]/
  }
  Prism.languages.vb = Prism.languages['visual-basic']
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvdmlzdWFsLWJhc2ljLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsaUNBQWlDLEVBQUU7QUFDbkM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuMDFjMjlkMTEzNTgyMmU1MGYyMTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB2aXN1YWxCYXNpY1xudmlzdWFsQmFzaWMuZGlzcGxheU5hbWUgPSAndmlzdWFsQmFzaWMnXG52aXN1YWxCYXNpYy5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIHZpc3VhbEJhc2ljKFByaXNtKSB7XG4gIFByaXNtLmxhbmd1YWdlc1sndmlzdWFsLWJhc2ljJ10gPSB7XG4gICAgY29tbWVudDoge1xuICAgICAgcGF0dGVybjogLyg/Olsn4oCY4oCZXXxSRU1cXGIpLiovaSxcbiAgICAgIGluc2lkZToge1xuICAgICAgICBrZXl3b3JkOiAvXlJFTS9pXG4gICAgICB9XG4gICAgfSxcbiAgICBkaXJlY3RpdmU6IHtcbiAgICAgIHBhdHRlcm46IC8jKD86Q29uc3R8RWxzZXxFbHNlSWZ8RW5kfEV4dGVybmFsQ2hlY2tzdW18RXh0ZXJuYWxTb3VyY2V8SWZ8UmVnaW9uKSg/OlteXFxTXFxyXFxuXV9bXlxcU1xcclxcbl0qKD86XFxyXFxuP3xcXG4pfC4pKy9pLFxuICAgICAgYWxpYXM6ICdjb21tZW50JyxcbiAgICAgIGdyZWVkeTogdHJ1ZVxuICAgIH0sXG4gICAgc3RyaW5nOiB7XG4gICAgICBwYXR0ZXJuOiAvXFwkP1tcIuKAnOKAnV0oPzpbXCLigJzigJ1dezJ9fFteXCLigJzigJ1dKSpbXCLigJzigJ1dQz8vaSxcbiAgICAgIGdyZWVkeTogdHJ1ZVxuICAgIH0sXG4gICAgZGF0ZToge1xuICAgICAgcGF0dGVybjogLyNbXlxcU1xcclxcbl0qKD86XFxkKyhbLy1dKVxcZCtcXDFcXGQrKD86W15cXFNcXHJcXG5dKyg/OlxcZCtbXlxcU1xcclxcbl0qKD86QU18UE0pfFxcZCs6XFxkKyg/OjpcXGQrKT8oPzpbXlxcU1xcclxcbl0qKD86QU18UE0pKT8pKT98KD86XFxkK1teXFxTXFxyXFxuXSooPzpBTXxQTSl8XFxkKzpcXGQrKD86OlxcZCspPyg/OlteXFxTXFxyXFxuXSooPzpBTXxQTSkpPykpW15cXFNcXHJcXG5dKiMvaSxcbiAgICAgIGFsaWFzOiAnYnVpbHRpbidcbiAgICB9LFxuICAgIG51bWJlcjogLyg/Oig/OlxcYlxcZCsoPzpcXC5cXGQrKT98XFwuXFxkKykoPzpFWystXT9cXGQrKT98JltIT11bXFxkQS1GXSspKD86VT9bSUxTXXxbRlJEXSk/L2ksXG4gICAgYm9vbGVhbjogL1xcYig/OlRydWV8RmFsc2V8Tm90aGluZylcXGIvaSxcbiAgICBrZXl3b3JkOiAvXFxiKD86QWRkSGFuZGxlcnxBZGRyZXNzT2Z8QWxpYXN8QW5kKD86QWxzbyk/fEFzfEJvb2xlYW58QnlSZWZ8Qnl0ZXxCeVZhbHxDYWxsfENhc2V8Q2F0Y2h8Qyg/OkJvb2x8Qnl0ZXxDaGFyfERhdGV8RGJsfERlY3xJbnR8TG5nfE9ianxTQnl0ZXxTaG9ydHxTbmd8U3RyfFR5cGV8VUludHxVTG5nfFVTaG9ydCl8Q2hhcnxDbGFzc3xDb25zdHxDb250aW51ZXxEYXRlfERlY2ltYWx8RGVjbGFyZXxEZWZhdWx0fERlbGVnYXRlfERpbXxEaXJlY3RDYXN0fERvfERvdWJsZXxFYWNofEVsc2UoPzpJZik/fEVuZCg/OklmKT98RW51bXxFcmFzZXxFcnJvcnxFdmVudHxFeGl0fEZpbmFsbHl8Rm9yfEZyaWVuZHxGdW5jdGlvbnxHZXQoPzpUeXBlfFhNTE5hbWVzcGFjZSk/fEdsb2JhbHxHb1N1YnxHb1RvfEhhbmRsZXN8SWZ8SW1wbGVtZW50c3xJbXBvcnRzfElufEluaGVyaXRzfEludGVnZXJ8SW50ZXJmYWNlfElzfElzTm90fExldHxMaWJ8TGlrZXxMb25nfExvb3B8TWV8TW9kfE1vZHVsZXxNdXN0KD86SW5oZXJpdHxPdmVycmlkZSl8TXkoPzpCYXNlfENsYXNzKXxOYW1lc3BhY2V8TmFycm93aW5nfE5ld3xOZXh0fE5vdCg/OkluaGVyaXRhYmxlfE92ZXJyaWRhYmxlKT98T2JqZWN0fE9mfE9ufE9wZXJhdG9yfE9wdGlvbig/OmFsKT98T3IoPzpFbHNlKT98T3V0fE92ZXJsb2Fkc3xPdmVycmlkYWJsZXxPdmVycmlkZXN8UGFyYW1BcnJheXxQYXJ0aWFsfFByaXZhdGV8UHJvcGVydHl8UHJvdGVjdGVkfFB1YmxpY3xSYWlzZUV2ZW50fFJlYWRPbmx5fFJlRGltfFJlbW92ZUhhbmRsZXJ8UmVzdW1lfFJldHVybnxTQnl0ZXxTZWxlY3R8U2V0fFNoYWRvd3N8U2hhcmVkfHNob3J0fFNpbmdsZXxTdGF0aWN8U3RlcHxTdG9wfFN0cmluZ3xTdHJ1Y3R1cmV8U3VifFN5bmNMb2NrfFRoZW58VGhyb3d8VG98VHJ5fFRyeUNhc3R8VHlwZU9mfFUoPzpJbnRlZ2VyfExvbmd8U2hvcnQpfFVzaW5nfFZhcmlhbnR8V2VuZHxXaGVufFdoaWxlfFdpZGVuaW5nfFdpdGgoPzpFdmVudHMpP3xXcml0ZU9ubHl8WG9yKVxcYi9pLFxuICAgIG9wZXJhdG9yOiBbXG4gICAgICAvWytcXC0qL1xcXFxePD0+JiNAJCUhXS8sXG4gICAgICB7XG4gICAgICAgIHBhdHRlcm46IC8oW15cXFNcXHJcXG5dKV8oPz1bXlxcU1xcclxcbl0qW1xcclxcbl0pLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgfVxuICAgIF0sXG4gICAgcHVuY3R1YXRpb246IC9be30oKS4sOj9dL1xuICB9XG4gIFByaXNtLmxhbmd1YWdlcy52YiA9IFByaXNtLmxhbmd1YWdlc1sndmlzdWFsLWJhc2ljJ11cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=