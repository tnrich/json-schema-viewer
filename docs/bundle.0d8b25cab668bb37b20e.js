(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_qore"],{

/***/ "./node_modules/refractor/lang/qore.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/qore.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";


module.exports = qore
qore.displayName = 'qore'
qore.aliases = []
function qore(Prism) {
  Prism.languages.qore = Prism.languages.extend('clike', {
    comment: {
      pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:\/\/|#).*)/,
      lookbehind: true
    },
    // Overridden to allow unescaped multi-line strings
    string: {
      pattern: /("|')(\\[\s\S]|(?!\1)[^\\])*\1/,
      greedy: true
    },
    variable: /\$(?!\d)\w+\b/,
    keyword: /\b(?:abstract|any|assert|binary|bool|boolean|break|byte|case|catch|char|class|code|const|continue|data|default|do|double|else|enum|extends|final|finally|float|for|goto|hash|if|implements|import|inherits|instanceof|int|interface|long|my|native|new|nothing|null|object|our|own|private|reference|rethrow|return|short|soft(?:int|float|number|bool|string|date|list)|static|strictfp|string|sub|super|switch|synchronized|this|throw|throws|transient|try|void|volatile|while)\b/,
    number: /\b(?:0b[01]+|0x[\da-f]*\.?[\da-fp\-]+|\d*\.?\d+e?\d*[df]|\d*\.?\d+)\b/i,
    boolean: /\b(?:true|false)\b/i,
    operator: {
      pattern: /(^|[^.])(?:\+[+=]?|-[-=]?|[!=](?:==?|~)?|>>?=?|<(?:=>?|<=?)?|&[&=]?|\|[|=]?|[*\/%^]=?|[~?])/,
      lookbehind: true
    },
    function: /\$?\b(?!\d)\w+(?=\()/
  })
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvcW9yZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIIiwiZmlsZSI6ImJ1bmRsZS4wZDhiMjVjYWI2NjhiYjM3YjIwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHFvcmVcbnFvcmUuZGlzcGxheU5hbWUgPSAncW9yZSdcbnFvcmUuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBxb3JlKFByaXNtKSB7XG4gIFByaXNtLmxhbmd1YWdlcy5xb3JlID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgnY2xpa2UnLCB7XG4gICAgY29tbWVudDoge1xuICAgICAgcGF0dGVybjogLyhefFteXFxcXF0pKD86XFwvXFwqW1xcc1xcU10qP1xcKlxcL3woPzpcXC9cXC98IykuKikvLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgIH0sXG4gICAgLy8gT3ZlcnJpZGRlbiB0byBhbGxvdyB1bmVzY2FwZWQgbXVsdGktbGluZSBzdHJpbmdzXG4gICAgc3RyaW5nOiB7XG4gICAgICBwYXR0ZXJuOiAvKFwifCcpKFxcXFxbXFxzXFxTXXwoPyFcXDEpW15cXFxcXSkqXFwxLyxcbiAgICAgIGdyZWVkeTogdHJ1ZVxuICAgIH0sXG4gICAgdmFyaWFibGU6IC9cXCQoPyFcXGQpXFx3K1xcYi8sXG4gICAga2V5d29yZDogL1xcYig/OmFic3RyYWN0fGFueXxhc3NlcnR8YmluYXJ5fGJvb2x8Ym9vbGVhbnxicmVha3xieXRlfGNhc2V8Y2F0Y2h8Y2hhcnxjbGFzc3xjb2RlfGNvbnN0fGNvbnRpbnVlfGRhdGF8ZGVmYXVsdHxkb3xkb3VibGV8ZWxzZXxlbnVtfGV4dGVuZHN8ZmluYWx8ZmluYWxseXxmbG9hdHxmb3J8Z290b3xoYXNofGlmfGltcGxlbWVudHN8aW1wb3J0fGluaGVyaXRzfGluc3RhbmNlb2Z8aW50fGludGVyZmFjZXxsb25nfG15fG5hdGl2ZXxuZXd8bm90aGluZ3xudWxsfG9iamVjdHxvdXJ8b3dufHByaXZhdGV8cmVmZXJlbmNlfHJldGhyb3d8cmV0dXJufHNob3J0fHNvZnQoPzppbnR8ZmxvYXR8bnVtYmVyfGJvb2x8c3RyaW5nfGRhdGV8bGlzdCl8c3RhdGljfHN0cmljdGZwfHN0cmluZ3xzdWJ8c3VwZXJ8c3dpdGNofHN5bmNocm9uaXplZHx0aGlzfHRocm93fHRocm93c3x0cmFuc2llbnR8dHJ5fHZvaWR8dm9sYXRpbGV8d2hpbGUpXFxiLyxcbiAgICBudW1iZXI6IC9cXGIoPzowYlswMV0rfDB4W1xcZGEtZl0qXFwuP1tcXGRhLWZwXFwtXSt8XFxkKlxcLj9cXGQrZT9cXGQqW2RmXXxcXGQqXFwuP1xcZCspXFxiL2ksXG4gICAgYm9vbGVhbjogL1xcYig/OnRydWV8ZmFsc2UpXFxiL2ksXG4gICAgb3BlcmF0b3I6IHtcbiAgICAgIHBhdHRlcm46IC8oXnxbXi5dKSg/OlxcK1srPV0/fC1bLT1dP3xbIT1dKD86PT0/fH4pP3w+Pj89P3w8KD86PT4/fDw9Pyk/fCZbJj1dP3xcXHxbfD1dP3xbKlxcLyVeXT0/fFt+P10pLyxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICB9LFxuICAgIGZ1bmN0aW9uOiAvXFwkP1xcYig/IVxcZClcXHcrKD89XFwoKS9cbiAgfSlcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=