(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_inform7"],{

/***/ "./node_modules/refractor/lang/inform7.js":
/*!************************************************!*\
  !*** ./node_modules/refractor/lang/inform7.js ***!
  \************************************************/
/***/ ((module) => {

"use strict";


module.exports = inform7
inform7.displayName = 'inform7'
inform7.aliases = []
function inform7(Prism) {
  Prism.languages.inform7 = {
    string: {
      pattern: /"[^"]*"/,
      inside: {
        substitution: {
          pattern: /\[[^\]]+\]/,
          inside: {
            delimiter: {
              pattern: /\[|\]/,
              alias: 'punctuation'
            } // See rest below
          }
        }
      }
    },
    comment: {
      pattern: /\[[^\]]+\]/,
      greedy: true
    },
    title: {
      pattern: /^[ \t]*(?:volume|book|part(?! of)|chapter|section|table)\b.+/im,
      alias: 'important'
    },
    number: {
      pattern: /(^|[^-])(?:\b\d+(?:\.\d+)?(?:\^\d+)?\w*|\b(?:one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve))\b(?!-)/i,
      lookbehind: true
    },
    verb: {
      pattern: /(^|[^-])\b(?:applying to|are|attacking|answering|asking|be(?:ing)?|burning|buying|called|carries|carry(?! out)|carrying|climbing|closing|conceal(?:s|ing)?|consulting|contain(?:s|ing)?|cutting|drinking|dropping|eating|enclos(?:es?|ing)|entering|examining|exiting|getting|giving|going|ha(?:ve|s|ving)|hold(?:s|ing)?|impl(?:y|ies)|incorporat(?:es?|ing)|inserting|is|jumping|kissing|listening|locking|looking|mean(?:s|ing)?|opening|provid(?:es?|ing)|pulling|pushing|putting|relat(?:es?|ing)|removing|searching|see(?:s|ing)?|setting|showing|singing|sleeping|smelling|squeezing|switching|support(?:s|ing)?|swearing|taking|tasting|telling|thinking|throwing|touching|turning|tying|unlock(?:s|ing)?|var(?:y|ies|ying)|waiting|waking|waving|wear(?:s|ing)?)\b(?!-)/i,
      lookbehind: true,
      alias: 'operator'
    },
    keyword: {
      pattern: /(^|[^-])\b(?:after|before|carry out|check|continue the action|definition(?= *:)|do nothing|else|end (?:if|unless|the story)|every turn|if|include|instead(?: of)?|let|move|no|now|otherwise|repeat|report|resume the story|rule for|running through|say(?:ing)?|stop the action|test|try(?:ing)?|understand|unless|use|when|while|yes)\b(?!-)/i,
      lookbehind: true
    },
    property: {
      pattern: /(^|[^-])\b(?:adjacent(?! to)|carried|closed|concealed|contained|dark|described|edible|empty|enclosed|enterable|even|female|fixed in place|full|handled|held|improper-named|incorporated|inedible|invisible|lighted|lit|lock(?:able|ed)|male|marked for listing|mentioned|negative|neuter|non-(?:empty|full|recurring)|odd|opaque|open(?:able)?|plural-named|portable|positive|privately-named|proper-named|provided|publically-named|pushable between rooms|recurring|related|rubbing|scenery|seen|singular-named|supported|swinging|switch(?:able|ed(?: on| off)?)|touch(?:able|ed)|transparent|unconcealed|undescribed|unlit|unlocked|unmarked for listing|unmentioned|unopenable|untouchable|unvisited|variable|visible|visited|wearable|worn)\b(?!-)/i,
      lookbehind: true,
      alias: 'symbol'
    },
    position: {
      pattern: /(^|[^-])\b(?:above|adjacent to|back side of|below|between|down|east|everywhere|front side|here|in|inside(?: from)?|north(?:east|west)?|nowhere|on(?: top of)?|other side|outside(?: from)?|parts? of|regionally in|south(?:east|west)?|through|up|west|within)\b(?!-)/i,
      lookbehind: true,
      alias: 'keyword'
    },
    type: {
      pattern: /(^|[^-])\b(?:actions?|activit(?:y|ies)|actors?|animals?|backdrops?|containers?|devices?|directions?|doors?|holders?|kinds?|lists?|m[ae]n|nobody|nothing|nouns?|numbers?|objects?|people|persons?|player(?:'s holdall)?|regions?|relations?|rooms?|rule(?:book)?s?|scenes?|someone|something|supporters?|tables?|texts?|things?|time|vehicles?|wom[ae]n)\b(?!-)/i,
      lookbehind: true,
      alias: 'variable'
    },
    punctuation: /[.,:;(){}]/
  }
  Prism.languages.inform7['string'].inside['substitution'].inside.rest =
    Prism.languages.inform7 // We don't want the remaining text in the substitution to be highlighted as the string.
  Prism.languages.inform7['string'].inside['substitution'].inside.rest.text = {
    pattern: /\S(?:\s*\S)*/,
    alias: 'comment'
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvaW5mb3JtNy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsdUJBQXVCLElBQUk7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuYmRjNWQwODQ5M2E1YTRmNGJiNGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBpbmZvcm03XG5pbmZvcm03LmRpc3BsYXlOYW1lID0gJ2luZm9ybTcnXG5pbmZvcm03LmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gaW5mb3JtNyhQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMuaW5mb3JtNyA9IHtcbiAgICBzdHJpbmc6IHtcbiAgICAgIHBhdHRlcm46IC9cIlteXCJdKlwiLyxcbiAgICAgIGluc2lkZToge1xuICAgICAgICBzdWJzdGl0dXRpb246IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvXFxbW15cXF1dK1xcXS8sXG4gICAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgICBkZWxpbWl0ZXI6IHtcbiAgICAgICAgICAgICAgcGF0dGVybjogL1xcW3xcXF0vLFxuICAgICAgICAgICAgICBhbGlhczogJ3B1bmN0dWF0aW9uJ1xuICAgICAgICAgICAgfSAvLyBTZWUgcmVzdCBiZWxvd1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgY29tbWVudDoge1xuICAgICAgcGF0dGVybjogL1xcW1teXFxdXStcXF0vLFxuICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgcGF0dGVybjogL15bIFxcdF0qKD86dm9sdW1lfGJvb2t8cGFydCg/ISBvZil8Y2hhcHRlcnxzZWN0aW9ufHRhYmxlKVxcYi4rL2ltLFxuICAgICAgYWxpYXM6ICdpbXBvcnRhbnQnXG4gICAgfSxcbiAgICBudW1iZXI6IHtcbiAgICAgIHBhdHRlcm46IC8oXnxbXi1dKSg/OlxcYlxcZCsoPzpcXC5cXGQrKT8oPzpcXF5cXGQrKT9cXHcqfFxcYig/Om9uZXx0d298dGhyZWV8Zm91cnxmaXZlfHNpeHxzZXZlbnxlaWdodHxuaW5lfHRlbnxlbGV2ZW58dHdlbHZlKSlcXGIoPyEtKS9pLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgIH0sXG4gICAgdmVyYjoge1xuICAgICAgcGF0dGVybjogLyhefFteLV0pXFxiKD86YXBwbHlpbmcgdG98YXJlfGF0dGFja2luZ3xhbnN3ZXJpbmd8YXNraW5nfGJlKD86aW5nKT98YnVybmluZ3xidXlpbmd8Y2FsbGVkfGNhcnJpZXN8Y2FycnkoPyEgb3V0KXxjYXJyeWluZ3xjbGltYmluZ3xjbG9zaW5nfGNvbmNlYWwoPzpzfGluZyk/fGNvbnN1bHRpbmd8Y29udGFpbig/OnN8aW5nKT98Y3V0dGluZ3xkcmlua2luZ3xkcm9wcGluZ3xlYXRpbmd8ZW5jbG9zKD86ZXM/fGluZyl8ZW50ZXJpbmd8ZXhhbWluaW5nfGV4aXRpbmd8Z2V0dGluZ3xnaXZpbmd8Z29pbmd8aGEoPzp2ZXxzfHZpbmcpfGhvbGQoPzpzfGluZyk/fGltcGwoPzp5fGllcyl8aW5jb3Jwb3JhdCg/OmVzP3xpbmcpfGluc2VydGluZ3xpc3xqdW1waW5nfGtpc3Npbmd8bGlzdGVuaW5nfGxvY2tpbmd8bG9va2luZ3xtZWFuKD86c3xpbmcpP3xvcGVuaW5nfHByb3ZpZCg/OmVzP3xpbmcpfHB1bGxpbmd8cHVzaGluZ3xwdXR0aW5nfHJlbGF0KD86ZXM/fGluZyl8cmVtb3Zpbmd8c2VhcmNoaW5nfHNlZSg/OnN8aW5nKT98c2V0dGluZ3xzaG93aW5nfHNpbmdpbmd8c2xlZXBpbmd8c21lbGxpbmd8c3F1ZWV6aW5nfHN3aXRjaGluZ3xzdXBwb3J0KD86c3xpbmcpP3xzd2VhcmluZ3x0YWtpbmd8dGFzdGluZ3x0ZWxsaW5nfHRoaW5raW5nfHRocm93aW5nfHRvdWNoaW5nfHR1cm5pbmd8dHlpbmd8dW5sb2NrKD86c3xpbmcpP3x2YXIoPzp5fGllc3x5aW5nKXx3YWl0aW5nfHdha2luZ3x3YXZpbmd8d2Vhcig/OnN8aW5nKT8pXFxiKD8hLSkvaSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBhbGlhczogJ29wZXJhdG9yJ1xuICAgIH0sXG4gICAga2V5d29yZDoge1xuICAgICAgcGF0dGVybjogLyhefFteLV0pXFxiKD86YWZ0ZXJ8YmVmb3JlfGNhcnJ5IG91dHxjaGVja3xjb250aW51ZSB0aGUgYWN0aW9ufGRlZmluaXRpb24oPz0gKjopfGRvIG5vdGhpbmd8ZWxzZXxlbmQgKD86aWZ8dW5sZXNzfHRoZSBzdG9yeSl8ZXZlcnkgdHVybnxpZnxpbmNsdWRlfGluc3RlYWQoPzogb2YpP3xsZXR8bW92ZXxub3xub3d8b3RoZXJ3aXNlfHJlcGVhdHxyZXBvcnR8cmVzdW1lIHRoZSBzdG9yeXxydWxlIGZvcnxydW5uaW5nIHRocm91Z2h8c2F5KD86aW5nKT98c3RvcCB0aGUgYWN0aW9ufHRlc3R8dHJ5KD86aW5nKT98dW5kZXJzdGFuZHx1bmxlc3N8dXNlfHdoZW58d2hpbGV8eWVzKVxcYig/IS0pL2ksXG4gICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgfSxcbiAgICBwcm9wZXJ0eToge1xuICAgICAgcGF0dGVybjogLyhefFteLV0pXFxiKD86YWRqYWNlbnQoPyEgdG8pfGNhcnJpZWR8Y2xvc2VkfGNvbmNlYWxlZHxjb250YWluZWR8ZGFya3xkZXNjcmliZWR8ZWRpYmxlfGVtcHR5fGVuY2xvc2VkfGVudGVyYWJsZXxldmVufGZlbWFsZXxmaXhlZCBpbiBwbGFjZXxmdWxsfGhhbmRsZWR8aGVsZHxpbXByb3Blci1uYW1lZHxpbmNvcnBvcmF0ZWR8aW5lZGlibGV8aW52aXNpYmxlfGxpZ2h0ZWR8bGl0fGxvY2soPzphYmxlfGVkKXxtYWxlfG1hcmtlZCBmb3IgbGlzdGluZ3xtZW50aW9uZWR8bmVnYXRpdmV8bmV1dGVyfG5vbi0oPzplbXB0eXxmdWxsfHJlY3VycmluZyl8b2RkfG9wYXF1ZXxvcGVuKD86YWJsZSk/fHBsdXJhbC1uYW1lZHxwb3J0YWJsZXxwb3NpdGl2ZXxwcml2YXRlbHktbmFtZWR8cHJvcGVyLW5hbWVkfHByb3ZpZGVkfHB1YmxpY2FsbHktbmFtZWR8cHVzaGFibGUgYmV0d2VlbiByb29tc3xyZWN1cnJpbmd8cmVsYXRlZHxydWJiaW5nfHNjZW5lcnl8c2VlbnxzaW5ndWxhci1uYW1lZHxzdXBwb3J0ZWR8c3dpbmdpbmd8c3dpdGNoKD86YWJsZXxlZCg/OiBvbnwgb2ZmKT8pfHRvdWNoKD86YWJsZXxlZCl8dHJhbnNwYXJlbnR8dW5jb25jZWFsZWR8dW5kZXNjcmliZWR8dW5saXR8dW5sb2NrZWR8dW5tYXJrZWQgZm9yIGxpc3Rpbmd8dW5tZW50aW9uZWR8dW5vcGVuYWJsZXx1bnRvdWNoYWJsZXx1bnZpc2l0ZWR8dmFyaWFibGV8dmlzaWJsZXx2aXNpdGVkfHdlYXJhYmxlfHdvcm4pXFxiKD8hLSkvaSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBhbGlhczogJ3N5bWJvbCdcbiAgICB9LFxuICAgIHBvc2l0aW9uOiB7XG4gICAgICBwYXR0ZXJuOiAvKF58W14tXSlcXGIoPzphYm92ZXxhZGphY2VudCB0b3xiYWNrIHNpZGUgb2Z8YmVsb3d8YmV0d2Vlbnxkb3dufGVhc3R8ZXZlcnl3aGVyZXxmcm9udCBzaWRlfGhlcmV8aW58aW5zaWRlKD86IGZyb20pP3xub3J0aCg/OmVhc3R8d2VzdCk/fG5vd2hlcmV8b24oPzogdG9wIG9mKT98b3RoZXIgc2lkZXxvdXRzaWRlKD86IGZyb20pP3xwYXJ0cz8gb2Z8cmVnaW9uYWxseSBpbnxzb3V0aCg/OmVhc3R8d2VzdCk/fHRocm91Z2h8dXB8d2VzdHx3aXRoaW4pXFxiKD8hLSkvaSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBhbGlhczogJ2tleXdvcmQnXG4gICAgfSxcbiAgICB0eXBlOiB7XG4gICAgICBwYXR0ZXJuOiAvKF58W14tXSlcXGIoPzphY3Rpb25zP3xhY3Rpdml0KD86eXxpZXMpfGFjdG9ycz98YW5pbWFscz98YmFja2Ryb3BzP3xjb250YWluZXJzP3xkZXZpY2VzP3xkaXJlY3Rpb25zP3xkb29ycz98aG9sZGVycz98a2luZHM/fGxpc3RzP3xtW2FlXW58bm9ib2R5fG5vdGhpbmd8bm91bnM/fG51bWJlcnM/fG9iamVjdHM/fHBlb3BsZXxwZXJzb25zP3xwbGF5ZXIoPzoncyBob2xkYWxsKT98cmVnaW9ucz98cmVsYXRpb25zP3xyb29tcz98cnVsZSg/OmJvb2spP3M/fHNjZW5lcz98c29tZW9uZXxzb21ldGhpbmd8c3VwcG9ydGVycz98dGFibGVzP3x0ZXh0cz98dGhpbmdzP3x0aW1lfHZlaGljbGVzP3x3b21bYWVdbilcXGIoPyEtKS9pLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGFsaWFzOiAndmFyaWFibGUnXG4gICAgfSxcbiAgICBwdW5jdHVhdGlvbjogL1suLDo7KCl7fV0vXG4gIH1cbiAgUHJpc20ubGFuZ3VhZ2VzLmluZm9ybTdbJ3N0cmluZyddLmluc2lkZVsnc3Vic3RpdHV0aW9uJ10uaW5zaWRlLnJlc3QgPVxuICAgIFByaXNtLmxhbmd1YWdlcy5pbmZvcm03IC8vIFdlIGRvbid0IHdhbnQgdGhlIHJlbWFpbmluZyB0ZXh0IGluIHRoZSBzdWJzdGl0dXRpb24gdG8gYmUgaGlnaGxpZ2h0ZWQgYXMgdGhlIHN0cmluZy5cbiAgUHJpc20ubGFuZ3VhZ2VzLmluZm9ybTdbJ3N0cmluZyddLmluc2lkZVsnc3Vic3RpdHV0aW9uJ10uaW5zaWRlLnJlc3QudGV4dCA9IHtcbiAgICBwYXR0ZXJuOiAvXFxTKD86XFxzKlxcUykqLyxcbiAgICBhbGlhczogJ2NvbW1lbnQnXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=