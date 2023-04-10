(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_scss"],{

/***/ "./node_modules/refractor/lang/scss.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/scss.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";


module.exports = scss
scss.displayName = 'scss'
scss.aliases = []
function scss(Prism) {
  Prism.languages.scss = Prism.languages.extend('css', {
    comment: {
      pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
      lookbehind: true
    },
    atrule: {
      pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,
      inside: {
        rule: /@[\w-]+/ // See rest below
      }
    },
    // url, compassified
    url: /(?:[-a-z]+-)?url(?=\()/i,
    // CSS selector regex is not appropriate for Sass
    // since there can be lot more things (var, @ directive, nesting..)
    // a selector must start at the end of a property or after a brace (end of other rules or nesting)
    // it can contain some characters that aren't used for defining rules or end of selector, & (parent selector), or interpolated variable
    // the end of a selector is found when there is no rules in it ( {} or {\s}) or if there is a property (because an interpolated var
    // can "pass" as a selector- e.g: proper#{$erty})
    // this one was hard to do, so please be careful if you edit this one :)
    selector: {
      // Initial look-ahead is used to prevent matching of blank selectors
      pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()]|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,
      inside: {
        parent: {
          pattern: /&/,
          alias: 'important'
        },
        placeholder: /%[-\w]+/,
        variable: /\$[-\w]+|#\{\$[-\w]+\}/
      }
    },
    property: {
      pattern: /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/,
      inside: {
        variable: /\$[-\w]+|#\{\$[-\w]+\}/
      }
    }
  })
  Prism.languages.insertBefore('scss', 'atrule', {
    keyword: [
      /@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i,
      {
        pattern: /( +)(?:from|through)(?= )/,
        lookbehind: true
      }
    ]
  })
  Prism.languages.insertBefore('scss', 'important', {
    // var and interpolated vars
    variable: /\$[-\w]+|#\{\$[-\w]+\}/
  })
  Prism.languages.insertBefore('scss', 'function', {
    placeholder: {
      pattern: /%[-\w]+/,
      alias: 'selector'
    },
    statement: {
      pattern: /\B!(?:default|optional)\b/i,
      alias: 'keyword'
    },
    boolean: /\b(?:true|false)\b/,
    null: {
      pattern: /\bnull\b/,
      alias: 'keyword'
    },
    operator: {
      pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
      lookbehind: true
    }
  })
  Prism.languages.scss['atrule'].inside.rest = Prism.languages.scss
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvc2Nzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RUFBdUUsS0FBSyxHQUFHO0FBQy9FLDhDQUE4QyxNQUFNO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixhQUFhLE9BQU8sVUFBVSxVQUFVLEtBQUssT0FBTyxLQUFLLElBQUk7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSwrQkFBK0IsVUFBVTtBQUN6QztBQUNBLEtBQUs7QUFDTDtBQUNBLHFDQUFxQyxVQUFVO0FBQy9DO0FBQ0EsK0JBQStCLFVBQVU7QUFDekM7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSwyQkFBMkIsVUFBVTtBQUNyQyxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLjAyYzkwNmI3NjE1Y2Q1OTFlYjA1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gc2Nzc1xuc2Nzcy5kaXNwbGF5TmFtZSA9ICdzY3NzJ1xuc2Nzcy5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIHNjc3MoUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLnNjc3MgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdjc3MnLCB7XG4gICAgY29tbWVudDoge1xuICAgICAgcGF0dGVybjogLyhefFteXFxcXF0pKD86XFwvXFwqW1xcc1xcU10qP1xcKlxcL3xcXC9cXC8uKikvLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgIH0sXG4gICAgYXRydWxlOiB7XG4gICAgICBwYXR0ZXJuOiAvQFtcXHctXSsoPzpcXChbXigpXStcXCl8W14oXSkqPyg/PVxccytbeztdKS8sXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgcnVsZTogL0BbXFx3LV0rLyAvLyBTZWUgcmVzdCBiZWxvd1xuICAgICAgfVxuICAgIH0sXG4gICAgLy8gdXJsLCBjb21wYXNzaWZpZWRcbiAgICB1cmw6IC8oPzpbLWEtel0rLSk/dXJsKD89XFwoKS9pLFxuICAgIC8vIENTUyBzZWxlY3RvciByZWdleCBpcyBub3QgYXBwcm9wcmlhdGUgZm9yIFNhc3NcbiAgICAvLyBzaW5jZSB0aGVyZSBjYW4gYmUgbG90IG1vcmUgdGhpbmdzICh2YXIsIEAgZGlyZWN0aXZlLCBuZXN0aW5nLi4pXG4gICAgLy8gYSBzZWxlY3RvciBtdXN0IHN0YXJ0IGF0IHRoZSBlbmQgb2YgYSBwcm9wZXJ0eSBvciBhZnRlciBhIGJyYWNlIChlbmQgb2Ygb3RoZXIgcnVsZXMgb3IgbmVzdGluZylcbiAgICAvLyBpdCBjYW4gY29udGFpbiBzb21lIGNoYXJhY3RlcnMgdGhhdCBhcmVuJ3QgdXNlZCBmb3IgZGVmaW5pbmcgcnVsZXMgb3IgZW5kIG9mIHNlbGVjdG9yLCAmIChwYXJlbnQgc2VsZWN0b3IpLCBvciBpbnRlcnBvbGF0ZWQgdmFyaWFibGVcbiAgICAvLyB0aGUgZW5kIG9mIGEgc2VsZWN0b3IgaXMgZm91bmQgd2hlbiB0aGVyZSBpcyBubyBydWxlcyBpbiBpdCAoIHt9IG9yIHtcXHN9KSBvciBpZiB0aGVyZSBpcyBhIHByb3BlcnR5IChiZWNhdXNlIGFuIGludGVycG9sYXRlZCB2YXJcbiAgICAvLyBjYW4gXCJwYXNzXCIgYXMgYSBzZWxlY3Rvci0gZS5nOiBwcm9wZXIjeyRlcnR5fSlcbiAgICAvLyB0aGlzIG9uZSB3YXMgaGFyZCB0byBkbywgc28gcGxlYXNlIGJlIGNhcmVmdWwgaWYgeW91IGVkaXQgdGhpcyBvbmUgOilcbiAgICBzZWxlY3Rvcjoge1xuICAgICAgLy8gSW5pdGlhbCBsb29rLWFoZWFkIGlzIHVzZWQgdG8gcHJldmVudCBtYXRjaGluZyBvZiBibGFuayBzZWxlY3RvcnNcbiAgICAgIHBhdHRlcm46IC8oPz1cXFMpW15AO3t9KCldPyg/OlteQDt7fSgpXXwjXFx7XFwkWy1cXHddK1xcfSkrKD89XFxzKlxceyg/OlxcfXxcXHN8W159XStbOntdW159XSspKS9tLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgIHBhcmVudDoge1xuICAgICAgICAgIHBhdHRlcm46IC8mLyxcbiAgICAgICAgICBhbGlhczogJ2ltcG9ydGFudCdcbiAgICAgICAgfSxcbiAgICAgICAgcGxhY2Vob2xkZXI6IC8lWy1cXHddKy8sXG4gICAgICAgIHZhcmlhYmxlOiAvXFwkWy1cXHddK3wjXFx7XFwkWy1cXHddK1xcfS9cbiAgICAgIH1cbiAgICB9LFxuICAgIHByb3BlcnR5OiB7XG4gICAgICBwYXR0ZXJuOiAvKD86W1xcdy1dfFxcJFstXFx3XSt8I1xce1xcJFstXFx3XStcXH0pKyg/PVxccyo6KS8sXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgdmFyaWFibGU6IC9cXCRbLVxcd10rfCNcXHtcXCRbLVxcd10rXFx9L1xuICAgICAgfVxuICAgIH1cbiAgfSlcbiAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnc2NzcycsICdhdHJ1bGUnLCB7XG4gICAga2V5d29yZDogW1xuICAgICAgL0AoPzppZnxlbHNlKD86IGlmKT98Zm9yfGVhY2h8d2hpbGV8aW1wb3J0fGV4dGVuZHxkZWJ1Z3x3YXJufG1peGlufGluY2x1ZGV8ZnVuY3Rpb258cmV0dXJufGNvbnRlbnQpL2ksXG4gICAgICB7XG4gICAgICAgIHBhdHRlcm46IC8oICspKD86ZnJvbXx0aHJvdWdoKSg/PSApLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgfVxuICAgIF1cbiAgfSlcbiAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnc2NzcycsICdpbXBvcnRhbnQnLCB7XG4gICAgLy8gdmFyIGFuZCBpbnRlcnBvbGF0ZWQgdmFyc1xuICAgIHZhcmlhYmxlOiAvXFwkWy1cXHddK3wjXFx7XFwkWy1cXHddK1xcfS9cbiAgfSlcbiAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnc2NzcycsICdmdW5jdGlvbicsIHtcbiAgICBwbGFjZWhvbGRlcjoge1xuICAgICAgcGF0dGVybjogLyVbLVxcd10rLyxcbiAgICAgIGFsaWFzOiAnc2VsZWN0b3InXG4gICAgfSxcbiAgICBzdGF0ZW1lbnQ6IHtcbiAgICAgIHBhdHRlcm46IC9cXEIhKD86ZGVmYXVsdHxvcHRpb25hbClcXGIvaSxcbiAgICAgIGFsaWFzOiAna2V5d29yZCdcbiAgICB9LFxuICAgIGJvb2xlYW46IC9cXGIoPzp0cnVlfGZhbHNlKVxcYi8sXG4gICAgbnVsbDoge1xuICAgICAgcGF0dGVybjogL1xcYm51bGxcXGIvLFxuICAgICAgYWxpYXM6ICdrZXl3b3JkJ1xuICAgIH0sXG4gICAgb3BlcmF0b3I6IHtcbiAgICAgIHBhdHRlcm46IC8oXFxzKSg/OlstKypcXC8lXXxbPSFdPXw8PT98Pj0/fGFuZHxvcnxub3QpKD89XFxzKS8sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgfVxuICB9KVxuICBQcmlzbS5sYW5ndWFnZXMuc2Nzc1snYXRydWxlJ10uaW5zaWRlLnJlc3QgPSBQcmlzbS5sYW5ndWFnZXMuc2Nzc1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==