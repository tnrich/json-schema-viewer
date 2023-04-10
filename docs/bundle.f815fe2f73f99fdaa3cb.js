(self["webpackChunkjson_schema_viewer"] = self["webpackChunkjson_schema_viewer"] || []).push([["react-syntax-highlighter_languages_refractor_bash"],{

/***/ "./node_modules/refractor/lang/bash.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/bash.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";


module.exports = bash
bash.displayName = 'bash'
bash.aliases = ['shell']
function bash(Prism) {
  ;(function(Prism) {
    // $ set | grep '^[A-Z][^[:space:]]*=' | cut -d= -f1 | tr '\n' '|'
    // + LC_ALL, RANDOM, REPLY, SECONDS.
    // + make sure PS1..4 are here as they are not always set,
    // - some useless things.
    var envVars =
      '\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b'
    var insideString = {
      environment: {
        pattern: RegExp('\\$' + envVars),
        alias: 'constant'
      },
      variable: [
        // [0]: Arithmetic Environment
        {
          pattern: /\$?\(\([\s\S]+?\)\)/,
          greedy: true,
          inside: {
            // If there is a $ sign at the beginning highlight $(( and )) as variable
            variable: [
              {
                pattern: /(^\$\(\([\s\S]+)\)\)/,
                lookbehind: true
              },
              /^\$\(\(/
            ],
            number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/,
            // Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic
            operator: /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
            // If there is no $ sign at the beginning highlight (( and )) as punctuation
            punctuation: /\(\(?|\)\)?|,|;/
          }
        }, // [1]: Command Substitution
        {
          pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
          greedy: true,
          inside: {
            variable: /^\$\(|^`|\)$|`$/
          }
        }, // [2]: Brace expansion
        {
          pattern: /\$\{[^}]+\}/,
          greedy: true,
          inside: {
            operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
            punctuation: /[\[\]]/,
            environment: {
              pattern: RegExp('(\\{)' + envVars),
              lookbehind: true,
              alias: 'constant'
            }
          }
        },
        /\$(?:\w+|[#?*!@$])/
      ],
      // Escape sequences from echo and printf's manuals, and escaped quotes.
      entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/
    }
    Prism.languages.bash = {
      shebang: {
        pattern: /^#!\s*\/.*/,
        alias: 'important'
      },
      comment: {
        pattern: /(^|[^"{\\$])#.*/,
        lookbehind: true
      },
      'function-name': [
        // a) function foo {
        // b) foo() {
        // c) function foo() {
        // but not “foo {”
        {
          // a) and c)
          pattern: /(\bfunction\s+)\w+(?=(?:\s*\(?:\s*\))?\s*\{)/,
          lookbehind: true,
          alias: 'function'
        },
        {
          // b)
          pattern: /\b\w+(?=\s*\(\s*\)\s*\{)/,
          alias: 'function'
        }
      ],
      // Highlight variable names as variables in for and select beginnings.
      'for-or-select': {
        pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
        alias: 'variable',
        lookbehind: true
      },
      // Highlight variable names as variables in the left-hand part
      // of assignments (“=” and “+=”).
      'assign-left': {
        pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
        inside: {
          environment: {
            pattern: RegExp('(^|[\\s;|&]|[<>]\\()' + envVars),
            lookbehind: true,
            alias: 'constant'
          }
        },
        alias: 'variable',
        lookbehind: true
      },
      string: [
        // Support for Here-documents https://en.wikipedia.org/wiki/Here_document
        {
          pattern: /((?:^|[^<])<<-?\s*)(\w+?)\s*(?:\r?\n|\r)(?:[\s\S])*?(?:\r?\n|\r)\2/,
          lookbehind: true,
          greedy: true,
          inside: insideString
        }, // Here-document with quotes around the tag
        // → No expansion (so no “inside”).
        {
          pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s*(?:\r?\n|\r)(?:[\s\S])*?(?:\r?\n|\r)\3/,
          lookbehind: true,
          greedy: true
        }, // “Normal” string
        {
          pattern: /(["'])(?:\\[\s\S]|\$\([^)]+\)|`[^`]+`|(?!\1)[^\\])*\1/,
          greedy: true,
          inside: insideString
        }
      ],
      environment: {
        pattern: RegExp('\\$?' + envVars),
        alias: 'constant'
      },
      variable: insideString.variable,
      function: {
        pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
        lookbehind: true
      },
      keyword: {
        pattern: /(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,
        lookbehind: true
      },
      // https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
      builtin: {
        pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,
        lookbehind: true,
        // Alias added to make those easier to distinguish from strings.
        alias: 'class-name'
      },
      boolean: {
        pattern: /(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,
        lookbehind: true
      },
      'file-descriptor': {
        pattern: /\B&\d\b/,
        alias: 'important'
      },
      operator: {
        // Lots of redirections here, but not just that.
        pattern: /\d?<>|>\||\+=|==?|!=?|=~|<<[<-]?|[&\d]?>>|\d?[<>]&?|&[>&]?|\|[&|]?|<=?|>=?/,
        inside: {
          'file-descriptor': {
            pattern: /^\d/,
            alias: 'important'
          }
        }
      },
      punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
      number: {
        pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
        lookbehind: true
      }
    }
    /* Patterns in command substitution. */
    var toBeCopied = [
      'comment',
      'function-name',
      'for-or-select',
      'assign-left',
      'string',
      'environment',
      'function',
      'keyword',
      'builtin',
      'boolean',
      'file-descriptor',
      'operator',
      'punctuation',
      'number'
    ]
    var inside = insideString.variable[1].inside
    for (var i = 0; i < toBeCopied.length; i++) {
      inside[toBeCopied[i]] = Prism.languages.bash[toBeCopied[i]]
    }
    Prism.languages.shell = Prism.languages.bash
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNjaGVtYS12aWV3ZXIvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvYmFzaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSx3QkFBd0IsR0FBRyxJQUFJO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLElBQUksY0FBYyxJQUFJLGNBQWMsRUFBRSxjQUFjLEVBQUU7QUFDbEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EsK0RBQStEO0FBQy9EO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSx5QkFBeUIsNitDQUE2K0M7QUFDdGdEO0FBQ0EsT0FBTztBQUNQO0FBQ0EseUJBQXlCLGtHQUFrRztBQUMzSDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EseUJBQXlCLCtSQUErUjtBQUN4VDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSx5QkFBeUIsbUNBQW1DO0FBQzVEO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsMkNBQTJDLElBQUk7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix1QkFBdUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIIiwiZmlsZSI6ImJ1bmRsZS5mODE1ZmUyZjczZjk5ZmRhYTNjYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2hcbmJhc2guZGlzcGxheU5hbWUgPSAnYmFzaCdcbmJhc2guYWxpYXNlcyA9IFsnc2hlbGwnXVxuZnVuY3Rpb24gYmFzaChQcmlzbSkge1xuICA7KGZ1bmN0aW9uKFByaXNtKSB7XG4gICAgLy8gJCBzZXQgfCBncmVwICdeW0EtWl1bXls6c3BhY2U6XV0qPScgfCBjdXQgLWQ9IC1mMSB8IHRyICdcXG4nICd8J1xuICAgIC8vICsgTENfQUxMLCBSQU5ET00sIFJFUExZLCBTRUNPTkRTLlxuICAgIC8vICsgbWFrZSBzdXJlIFBTMS4uNCBhcmUgaGVyZSBhcyB0aGV5IGFyZSBub3QgYWx3YXlzIHNldCxcbiAgICAvLyAtIHNvbWUgdXNlbGVzcyB0aGluZ3MuXG4gICAgdmFyIGVudlZhcnMgPVxuICAgICAgJ1xcXFxiKD86QkFTSHxCQVNIT1BUU3xCQVNIX0FMSUFTRVN8QkFTSF9BUkdDfEJBU0hfQVJHVnxCQVNIX0NNRFN8QkFTSF9DT01QTEVUSU9OX0NPTVBBVF9ESVJ8QkFTSF9MSU5FTk98QkFTSF9SRU1BVENIfEJBU0hfU09VUkNFfEJBU0hfVkVSU0lORk98QkFTSF9WRVJTSU9OfENPTE9SVEVSTXxDT0xVTU5TfENPTVBfV09SREJSRUFLU3xEQlVTX1NFU1NJT05fQlVTX0FERFJFU1N8REVGQVVMVFNfUEFUSHxERVNLVE9QX1NFU1NJT058RElSU1RBQ0t8RElTUExBWXxFVUlEfEdETVNFU1NJT058R0RNX0xBTkd8R05PTUVfS0VZUklOR19DT05UUk9MfEdOT01FX0tFWVJJTkdfUElEfEdQR19BR0VOVF9JTkZPfEdST1VQU3xISVNUQ09OVFJPTHxISVNURklMRXxISVNURklMRVNJWkV8SElTVFNJWkV8SE9NRXxIT1NUTkFNRXxIT1NUVFlQRXxJRlN8SU5TVEFOQ0V8Sk9CfExBTkd8TEFOR1VBR0V8TENfQUREUkVTU3xMQ19BTEx8TENfSURFTlRJRklDQVRJT058TENfTUVBU1VSRU1FTlR8TENfTU9ORVRBUll8TENfTkFNRXxMQ19OVU1FUklDfExDX1BBUEVSfExDX1RFTEVQSE9ORXxMQ19USU1FfExFU1NDTE9TRXxMRVNTT1BFTnxMSU5FU3xMT0dOQU1FfExTX0NPTE9SU3xNQUNIVFlQRXxNQUlMQ0hFQ0t8TUFOREFUT1JZX1BBVEh8Tk9fQVRfQlJJREdFfE9MRFBXRHxPUFRFUlJ8T1BUSU5EfE9SQklUX1NPQ0tFVERJUnxPU1RZUEV8UEFQRVJTSVpFfFBBVEh8UElQRVNUQVRVU3xQUElEfFBTMXxQUzJ8UFMzfFBTNHxQV0R8UkFORE9NfFJFUExZfFNFQ09ORFN8U0VMSU5VWF9JTklUfFNFU1NJT058U0VTU0lPTlRZUEV8U0VTU0lPTl9NQU5BR0VSfFNIRUxMfFNIRUxMT1BUU3xTSExWTHxTU0hfQVVUSF9TT0NLfFRFUk18VUlEfFVQU1RBUlRfRVZFTlRTfFVQU1RBUlRfSU5TVEFOQ0V8VVBTVEFSVF9KT0J8VVBTVEFSVF9TRVNTSU9OfFVTRVJ8V0lORE9XSUR8WEFVVEhPUklUWXxYREdfQ09ORklHX0RJUlN8WERHX0NVUlJFTlRfREVTS1RPUHxYREdfREFUQV9ESVJTfFhER19HUkVFVEVSX0RBVEFfRElSfFhER19NRU5VX1BSRUZJWHxYREdfUlVOVElNRV9ESVJ8WERHX1NFQVR8WERHX1NFQVRfUEFUSHxYREdfU0VTU0lPTl9ERVNLVE9QfFhER19TRVNTSU9OX0lEfFhER19TRVNTSU9OX1BBVEh8WERHX1NFU1NJT05fVFlQRXxYREdfVlROUnxYTU9ESUZJRVJTKVxcXFxiJ1xuICAgIHZhciBpbnNpZGVTdHJpbmcgPSB7XG4gICAgICBlbnZpcm9ubWVudDoge1xuICAgICAgICBwYXR0ZXJuOiBSZWdFeHAoJ1xcXFwkJyArIGVudlZhcnMpLFxuICAgICAgICBhbGlhczogJ2NvbnN0YW50J1xuICAgICAgfSxcbiAgICAgIHZhcmlhYmxlOiBbXG4gICAgICAgIC8vIFswXTogQXJpdGhtZXRpYyBFbnZpcm9ubWVudFxuICAgICAgICB7XG4gICAgICAgICAgcGF0dGVybjogL1xcJD9cXChcXChbXFxzXFxTXSs/XFwpXFwpLyxcbiAgICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgICAvLyBJZiB0aGVyZSBpcyBhICQgc2lnbiBhdCB0aGUgYmVnaW5uaW5nIGhpZ2hsaWdodCAkKCggYW5kICkpIGFzIHZhcmlhYmxlXG4gICAgICAgICAgICB2YXJpYWJsZTogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0dGVybjogLyheXFwkXFwoXFwoW1xcc1xcU10rKVxcKVxcKS8sXG4gICAgICAgICAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAvXlxcJFxcKFxcKC9cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBudW1iZXI6IC9cXGIweFtcXGRBLUZhLWZdK1xcYnwoPzpcXGJcXGQrXFwuP1xcZCp8XFxCXFwuXFxkKykoPzpbRWVdLT9cXGQrKT8vLFxuICAgICAgICAgICAgLy8gT3BlcmF0b3JzIGFjY29yZGluZyB0byBodHRwczovL3d3dy5nbnUub3JnL3NvZnR3YXJlL2Jhc2gvbWFudWFsL2Jhc2hyZWYuaHRtbCNTaGVsbC1Bcml0aG1ldGljXG4gICAgICAgICAgICBvcGVyYXRvcjogLy0tP3wtPXxcXCtcXCs/fFxcKz18IT0/fH58XFwqXFwqP3xcXCo9fFxcLz0/fCU9P3w8PD0/fD4+PT98PD0/fD49P3w9PT98JiY/fCY9fFxcXj0/fFxcfFxcfD98XFx8PXxcXD98Oi8sXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSBpcyBubyAkIHNpZ24gYXQgdGhlIGJlZ2lubmluZyBoaWdobGlnaHQgKCggYW5kICkpIGFzIHB1bmN0dWF0aW9uXG4gICAgICAgICAgICBwdW5jdHVhdGlvbjogL1xcKFxcKD98XFwpXFwpP3wsfDsvXG4gICAgICAgICAgfVxuICAgICAgICB9LCAvLyBbMV06IENvbW1hbmQgU3Vic3RpdHV0aW9uXG4gICAgICAgIHtcbiAgICAgICAgICBwYXR0ZXJuOiAvXFwkXFwoKD86XFwoW14pXStcXCl8W14oKV0pK1xcKXxgW15gXStgLyxcbiAgICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgICB2YXJpYWJsZTogL15cXCRcXCh8XmB8XFwpJHxgJC9cbiAgICAgICAgICB9XG4gICAgICAgIH0sIC8vIFsyXTogQnJhY2UgZXhwYW5zaW9uXG4gICAgICAgIHtcbiAgICAgICAgICBwYXR0ZXJuOiAvXFwkXFx7W159XStcXH0vLFxuICAgICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICAgIG9wZXJhdG9yOiAvOlstPT8rXT98WyFcXC9dfCMjP3wlJT98XFxeXFxeP3wsLD8vLFxuICAgICAgICAgICAgcHVuY3R1YXRpb246IC9bXFxbXFxdXS8sXG4gICAgICAgICAgICBlbnZpcm9ubWVudDoge1xuICAgICAgICAgICAgICBwYXR0ZXJuOiBSZWdFeHAoJyhcXFxceyknICsgZW52VmFycyksXG4gICAgICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgICAgIGFsaWFzOiAnY29uc3RhbnQnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvXFwkKD86XFx3K3xbIz8qIUAkXSkvXG4gICAgICBdLFxuICAgICAgLy8gRXNjYXBlIHNlcXVlbmNlcyBmcm9tIGVjaG8gYW5kIHByaW50ZidzIG1hbnVhbHMsIGFuZCBlc2NhcGVkIHF1b3Rlcy5cbiAgICAgIGVudGl0eTogL1xcXFwoPzpbYWJjZUVmbnJ0dlxcXFxcIl18Tz9bMC03XXsxLDN9fHhbMC05YS1mQS1GXXsxLDJ9fHVbMC05YS1mQS1GXXs0fXxVWzAtOWEtZkEtRl17OH0pL1xuICAgIH1cbiAgICBQcmlzbS5sYW5ndWFnZXMuYmFzaCA9IHtcbiAgICAgIHNoZWJhbmc6IHtcbiAgICAgICAgcGF0dGVybjogL14jIVxccypcXC8uKi8sXG4gICAgICAgIGFsaWFzOiAnaW1wb3J0YW50J1xuICAgICAgfSxcbiAgICAgIGNvbW1lbnQ6IHtcbiAgICAgICAgcGF0dGVybjogLyhefFteXCJ7XFxcXCRdKSMuKi8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgIH0sXG4gICAgICAnZnVuY3Rpb24tbmFtZSc6IFtcbiAgICAgICAgLy8gYSkgZnVuY3Rpb24gZm9vIHtcbiAgICAgICAgLy8gYikgZm9vKCkge1xuICAgICAgICAvLyBjKSBmdW5jdGlvbiBmb28oKSB7XG4gICAgICAgIC8vIGJ1dCBub3Qg4oCcZm9vIHvigJ1cbiAgICAgICAge1xuICAgICAgICAgIC8vIGEpIGFuZCBjKVxuICAgICAgICAgIHBhdHRlcm46IC8oXFxiZnVuY3Rpb25cXHMrKVxcdysoPz0oPzpcXHMqXFwoPzpcXHMqXFwpKT9cXHMqXFx7KS8sXG4gICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICBhbGlhczogJ2Z1bmN0aW9uJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgLy8gYilcbiAgICAgICAgICBwYXR0ZXJuOiAvXFxiXFx3Kyg/PVxccypcXChcXHMqXFwpXFxzKlxceykvLFxuICAgICAgICAgIGFsaWFzOiAnZnVuY3Rpb24nXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICAvLyBIaWdobGlnaHQgdmFyaWFibGUgbmFtZXMgYXMgdmFyaWFibGVzIGluIGZvciBhbmQgc2VsZWN0IGJlZ2lubmluZ3MuXG4gICAgICAnZm9yLW9yLXNlbGVjdCc6IHtcbiAgICAgICAgcGF0dGVybjogLyhcXGIoPzpmb3J8c2VsZWN0KVxccyspXFx3Kyg/PVxccytpblxccykvLFxuICAgICAgICBhbGlhczogJ3ZhcmlhYmxlJyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIC8vIEhpZ2hsaWdodCB2YXJpYWJsZSBuYW1lcyBhcyB2YXJpYWJsZXMgaW4gdGhlIGxlZnQtaGFuZCBwYXJ0XG4gICAgICAvLyBvZiBhc3NpZ25tZW50cyAo4oCcPeKAnSBhbmQg4oCcKz3igJ0pLlxuICAgICAgJ2Fzc2lnbi1sZWZ0Jzoge1xuICAgICAgICBwYXR0ZXJuOiAvKF58W1xcczt8Jl18Wzw+XVxcKClcXHcrKD89XFwrPz0pLyxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgZW52aXJvbm1lbnQ6IHtcbiAgICAgICAgICAgIHBhdHRlcm46IFJlZ0V4cCgnKF58W1xcXFxzO3wmXXxbPD5dXFxcXCgpJyArIGVudlZhcnMpLFxuICAgICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICAgIGFsaWFzOiAnY29uc3RhbnQnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBhbGlhczogJ3ZhcmlhYmxlJyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHN0cmluZzogW1xuICAgICAgICAvLyBTdXBwb3J0IGZvciBIZXJlLWRvY3VtZW50cyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9IZXJlX2RvY3VtZW50XG4gICAgICAgIHtcbiAgICAgICAgICBwYXR0ZXJuOiAvKCg/Ol58W148XSk8PC0/XFxzKikoXFx3Kz8pXFxzKig/Olxccj9cXG58XFxyKSg/OltcXHNcXFNdKSo/KD86XFxyP1xcbnxcXHIpXFwyLyxcbiAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgICBpbnNpZGU6IGluc2lkZVN0cmluZ1xuICAgICAgICB9LCAvLyBIZXJlLWRvY3VtZW50IHdpdGggcXVvdGVzIGFyb3VuZCB0aGUgdGFnXG4gICAgICAgIC8vIOKGkiBObyBleHBhbnNpb24gKHNvIG5vIOKAnGluc2lkZeKAnSkuXG4gICAgICAgIHtcbiAgICAgICAgICBwYXR0ZXJuOiAvKCg/Ol58W148XSk8PC0/XFxzKikoW1wiJ10pKFxcdyspXFwyXFxzKig/Olxccj9cXG58XFxyKSg/OltcXHNcXFNdKSo/KD86XFxyP1xcbnxcXHIpXFwzLyxcbiAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgIGdyZWVkeTogdHJ1ZVxuICAgICAgICB9LCAvLyDigJxOb3JtYWzigJ0gc3RyaW5nXG4gICAgICAgIHtcbiAgICAgICAgICBwYXR0ZXJuOiAvKFtcIiddKSg/OlxcXFxbXFxzXFxTXXxcXCRcXChbXildK1xcKXxgW15gXStgfCg/IVxcMSlbXlxcXFxdKSpcXDEvLFxuICAgICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgICBpbnNpZGU6IGluc2lkZVN0cmluZ1xuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgZW52aXJvbm1lbnQ6IHtcbiAgICAgICAgcGF0dGVybjogUmVnRXhwKCdcXFxcJD8nICsgZW52VmFycyksXG4gICAgICAgIGFsaWFzOiAnY29uc3RhbnQnXG4gICAgICB9LFxuICAgICAgdmFyaWFibGU6IGluc2lkZVN0cmluZy52YXJpYWJsZSxcbiAgICAgIGZ1bmN0aW9uOiB7XG4gICAgICAgIHBhdHRlcm46IC8oXnxbXFxzO3wmXXxbPD5dXFwoKSg/OmFkZHxhcHJvcG9zfGFwdHxhcHRpdHVkZXxhcHQtY2FjaGV8YXB0LWdldHxhc3BlbGx8YXV0b215c3FsYmFja3VwfGF3a3xiYXNlbmFtZXxiYXNofGJjfGJjb25zb2xlfGJnfGJ6aXAyfGNhbHxjYXR8Y2ZkaXNrfGNoZ3JwfGNoa2NvbmZpZ3xjaG1vZHxjaG93bnxjaHJvb3R8Y2tzdW18Y2xlYXJ8Y21wfGNvbHVtbnxjb21tfGNwfGNyb258Y3JvbnRhYnxjc3BsaXR8Y3VybHxjdXR8ZGF0ZXxkY3xkZHxkZHJlc2N1ZXxkZWJvb3RzdHJhcHxkZnxkaWZmfGRpZmYzfGRpZ3xkaXJ8ZGlyY29sb3JzfGRpcm5hbWV8ZGlyc3xkbWVzZ3xkdXxlZ3JlcHxlamVjdHxlbnZ8ZXRodG9vbHxleHBhbmR8ZXhwZWN0fGV4cHJ8ZmRmb3JtYXR8ZmRpc2t8Zmd8ZmdyZXB8ZmlsZXxmaW5kfGZtdHxmb2xkfGZvcm1hdHxmcmVlfGZzY2t8ZnRwfGZ1c2VyfGdhd2t8Z2l0fGdwYXJ0ZWR8Z3JlcHxncm91cGFkZHxncm91cGRlbHxncm91cG1vZHxncm91cHN8Z3J1Yi1ta2NvbmZpZ3xnemlwfGhhbHR8aGVhZHxoZ3xoaXN0b3J5fGhvc3R8aG9zdG5hbWV8aHRvcHxpY29udnxpZHxpZmNvbmZpZ3xpZmRvd258aWZ1cHxpbXBvcnR8aW5zdGFsbHxpcHxqb2JzfGpvaW58a2lsbHxraWxsYWxsfGxlc3N8bGlua3xsbnxsb2NhdGV8bG9nbmFtZXxsb2dyb3RhdGV8bG9va3xscGN8bHByfGxwcmludHxscHJpbnRkfGxwcmludHF8bHBybXxsc3xsc29mfGx5bnh8bWFrZXxtYW58bWN8bWRhZG18bWtjb25maWd8bWtkaXJ8bWtlMmZzfG1rZmlmb3xta2ZzfG1raXNvZnN8bWtub2R8bWtzd2FwfG1tdnxtb3JlfG1vc3R8bW91bnR8bXRvb2xzfG10cnxtdXR0fG12fG5hbm98bmN8bmV0c3RhdHxuaWNlfG5sfG5vaHVwfG5vdGlmeS1zZW5kfG5wbXxuc2xvb2t1cHxvcHxvcGVufHBhcnRlZHxwYXNzd2R8cGFzdGV8cGF0aGNoa3xwaW5nfHBraWxsfHBucG18cG9wZHxwcnxwcmludGNhcHxwcmludGVudnxwc3xwdXNoZHxwdnxxdW90YXxxdW90YWNoZWNrfHF1b3RhY3RsfHJhbXxyYXJ8cmNwfHJlYm9vdHxyZW1zeW5jfHJlbmFtZXxyZW5pY2V8cmV2fHJtfHJtZGlyfHJwbXxyc3luY3xzY3B8c2NyZWVufHNkaWZmfHNlZHxzZW5kbWFpbHxzZXF8c2VydmljZXxzZnRwfHNofHNoZWxsY2hlY2t8c2h1ZnxzaHV0ZG93bnxzbGVlcHxzbG9jYXRlfHNvcnR8c3BsaXR8c3NofHN0YXR8c3RyYWNlfHN1fHN1ZG98c3VtfHN1c3BlbmR8c3dhcG9ufHN5bmN8dGFjfHRhaWx8dGFyfHRlZXx0aW1lfHRpbWVvdXR8dG9wfHRvdWNofHRyfHRyYWNlcm91dGV8dHNvcnR8dHR5fHVtb3VudHx1bmFtZXx1bmV4cGFuZHx1bmlxfHVuaXRzfHVucmFyfHVuc2hhcnx1bnppcHx1cGRhdGUtZ3J1Ynx1cHRpbWV8dXNlcmFkZHx1c2VyZGVsfHVzZXJtb2R8dXNlcnN8dXVkZWNvZGV8dXVlbmNvZGV8dnx2ZGlyfHZpfHZpbXx2aXJzaHx2bXN0YXR8d2FpdHx3YXRjaHx3Y3x3Z2V0fHdoZXJlaXN8d2hpY2h8d2hvfHdob2FtaXx3cml0ZXx4YXJnc3x4ZGctb3Blbnx5YXJufHllc3x6ZW5pdHl8emlwfHpzaHx6eXBwZXIpKD89JHxbKVxcczt8Jl0pLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGtleXdvcmQ6IHtcbiAgICAgICAgcGF0dGVybjogLyhefFtcXHM7fCZdfFs8Pl1cXCgpKD86aWZ8dGhlbnxlbHNlfGVsaWZ8Zml8Zm9yfHdoaWxlfGlufGNhc2V8ZXNhY3xmdW5jdGlvbnxzZWxlY3R8ZG98ZG9uZXx1bnRpbCkoPz0kfFspXFxzO3wmXSkvLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICB9LFxuICAgICAgLy8gaHR0cHM6Ly93d3cuZ251Lm9yZy9zb2Z0d2FyZS9iYXNoL21hbnVhbC9odG1sX25vZGUvU2hlbGwtQnVpbHRpbi1Db21tYW5kcy5odG1sXG4gICAgICBidWlsdGluOiB7XG4gICAgICAgIHBhdHRlcm46IC8oXnxbXFxzO3wmXXxbPD5dXFwoKSg/OlxcLnw6fGJyZWFrfGNkfGNvbnRpbnVlfGV2YWx8ZXhlY3xleGl0fGV4cG9ydHxnZXRvcHRzfGhhc2h8cHdkfHJlYWRvbmx5fHJldHVybnxzaGlmdHx0ZXN0fHRpbWVzfHRyYXB8dW1hc2t8dW5zZXR8YWxpYXN8YmluZHxidWlsdGlufGNhbGxlcnxjb21tYW5kfGRlY2xhcmV8ZWNob3xlbmFibGV8aGVscHxsZXR8bG9jYWx8bG9nb3V0fG1hcGZpbGV8cHJpbnRmfHJlYWR8cmVhZGFycmF5fHNvdXJjZXx0eXBlfHR5cGVzZXR8dWxpbWl0fHVuYWxpYXN8c2V0fHNob3B0KSg/PSR8WylcXHM7fCZdKS8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgIC8vIEFsaWFzIGFkZGVkIHRvIG1ha2UgdGhvc2UgZWFzaWVyIHRvIGRpc3Rpbmd1aXNoIGZyb20gc3RyaW5ncy5cbiAgICAgICAgYWxpYXM6ICdjbGFzcy1uYW1lJ1xuICAgICAgfSxcbiAgICAgIGJvb2xlYW46IHtcbiAgICAgICAgcGF0dGVybjogLyhefFtcXHM7fCZdfFs8Pl1cXCgpKD86dHJ1ZXxmYWxzZSkoPz0kfFspXFxzO3wmXSkvLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICB9LFxuICAgICAgJ2ZpbGUtZGVzY3JpcHRvcic6IHtcbiAgICAgICAgcGF0dGVybjogL1xcQiZcXGRcXGIvLFxuICAgICAgICBhbGlhczogJ2ltcG9ydGFudCdcbiAgICAgIH0sXG4gICAgICBvcGVyYXRvcjoge1xuICAgICAgICAvLyBMb3RzIG9mIHJlZGlyZWN0aW9ucyBoZXJlLCBidXQgbm90IGp1c3QgdGhhdC5cbiAgICAgICAgcGF0dGVybjogL1xcZD88Pnw+XFx8fFxcKz18PT0/fCE9P3w9fnw8PFs8LV0/fFsmXFxkXT8+PnxcXGQ/Wzw+XSY/fCZbPiZdP3xcXHxbJnxdP3w8PT98Pj0/LyxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgJ2ZpbGUtZGVzY3JpcHRvcic6IHtcbiAgICAgICAgICAgIHBhdHRlcm46IC9eXFxkLyxcbiAgICAgICAgICAgIGFsaWFzOiAnaW1wb3J0YW50J1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHB1bmN0dWF0aW9uOiAvXFwkP1xcKFxcKD98XFwpXFwpP3xcXC5cXC58W3t9W1xcXTtcXFxcXS8sXG4gICAgICBudW1iZXI6IHtcbiAgICAgICAgcGF0dGVybjogLyhefFxccykoPzpbMS05XVxcZCp8MCkoPzpbLixdXFxkKyk/XFxiLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgICAvKiBQYXR0ZXJucyBpbiBjb21tYW5kIHN1YnN0aXR1dGlvbi4gKi9cbiAgICB2YXIgdG9CZUNvcGllZCA9IFtcbiAgICAgICdjb21tZW50JyxcbiAgICAgICdmdW5jdGlvbi1uYW1lJyxcbiAgICAgICdmb3Itb3Itc2VsZWN0JyxcbiAgICAgICdhc3NpZ24tbGVmdCcsXG4gICAgICAnc3RyaW5nJyxcbiAgICAgICdlbnZpcm9ubWVudCcsXG4gICAgICAnZnVuY3Rpb24nLFxuICAgICAgJ2tleXdvcmQnLFxuICAgICAgJ2J1aWx0aW4nLFxuICAgICAgJ2Jvb2xlYW4nLFxuICAgICAgJ2ZpbGUtZGVzY3JpcHRvcicsXG4gICAgICAnb3BlcmF0b3InLFxuICAgICAgJ3B1bmN0dWF0aW9uJyxcbiAgICAgICdudW1iZXInXG4gICAgXVxuICAgIHZhciBpbnNpZGUgPSBpbnNpZGVTdHJpbmcudmFyaWFibGVbMV0uaW5zaWRlXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b0JlQ29waWVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpbnNpZGVbdG9CZUNvcGllZFtpXV0gPSBQcmlzbS5sYW5ndWFnZXMuYmFzaFt0b0JlQ29waWVkW2ldXVxuICAgIH1cbiAgICBQcmlzbS5sYW5ndWFnZXMuc2hlbGwgPSBQcmlzbS5sYW5ndWFnZXMuYmFzaFxuICB9KShQcmlzbSlcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=