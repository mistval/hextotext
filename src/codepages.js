export const categories = {
  Basic: [
    { name: 'ASCII', alias: 'ascii' },
  ],
  Unicode: [
    { name: 'UTF-8', alias: 'utf8' },
    { name: 'UTF-16 Little Endian', alias: 'utf16le' },
    { name: 'UTF-16 Big Endian', alias: 'UTF-16BE' },
    { name: 'UTF-16 Auto', alias: 'UTF-16' },
    { name: 'UTF-32 Little Endian', alias: 'UTF-32BE' },
    { name: 'UTF-32 Big Endian', alias: 'UTF-32LE' },
    { name: 'UTF-32 Auto', alias: 'UTF-32' },
  ],
  'Windows Codepages': [
    { name: 'CP874 - Thai', alias: 'win874' },
    { name: 'CP1250 - Latin-2 / Central European', alias: 'win1250' },
    { name: 'CP1251 - Cyrillic', alias: 'win1251' },
    { name: 'CP1252 - Latin-1 / Western European', alias: 'win1252' },
    { name: 'CP1253 - Greek', alias: 'win1253' },
    { name: 'CP1254 - Turkish', alias: 'win1254' },
    { name: 'CP1255 - Hebrew', alias: 'win1255' },
    { name: 'CP1256 - Arabic', alias: 'win1256' },
    { name: 'CP1257 - Baltic', alias: 'win1257' },
    { name: 'CP1258 - Vietnamese', alias: 'win1258' },
  ],
  'ISO Codepages': [
    { name: 'ISO-8859-1 - Latin-1 / Western European', alias: 'ISO-8859-1' },
    { name: 'ISO-8859-16 - Latin-10 / South-Eastern European', alias: 'ISO-8859-16' },
  ],
  'IBM Codepages': [
    { name: 'CP437 - Latin-1 (PC) ASCII', alias: 'ibm437' },
    { name: 'CP737', alias: 'ibm737' },
    { name: 'CP775', alias: 'ibm775' },
    { name: 'CP808', alias: 'ibm808' },
    { name: 'CP850 - Latin-1 ASCII', alias: 'ibm850' },
    { name: 'CP852 - Latin-2 ASCII', alias: 'ibm852' },
    { name: 'CP855 - Cyrillic ASCII', alias: 'ibm855' },
    { name: 'CP856 - Hebrew ASCII', alias: 'ibm856' },
    { name: 'CP857 - Turkey ASCII', alias: 'ibm857' },
    { name: 'CP858', alias: 'ibm858' },
    { name: 'CP860', alias: 'ibm860' },
    { name: 'CP861', alias: 'ibm861' },
    { name: 'CP862', alias: 'ibm862' },
    { name: 'CP863', alias: 'ibm863' },
    { name: 'CP864 - Arabic ASCII', alias: 'ibm864' },
    { name: 'CP865', alias: 'ibm865' },
    { name: 'CP866 - Cyrillic ASCII', alias: 'ibm866' },
    { name: 'CP869 - Greek ASCII', alias: 'ibm869' },
    { name: 'CP922', alias: 'ibm922' },
    { name: 'CP1046', alias: 'ibm1046' },
    { name: 'CP1124', alias: 'ibm1124' },
    { name: 'CP1125', alias: 'ibm1125' },
    { name: 'CP1129', alias: 'ibm1129' },
    { name: 'CP1133', alias: 'ibm1133' },
    { name: 'CP1161', alias: 'ibm1161' },
    { name: 'CP1162', alias: 'ibm1162' },
    { name: 'CP1163', alias: 'ibm1163' },
  ],
  'Mac Codepages': [
    { name: 'maccroatian' },
    { name: 'maccyrillic' },
    { name: 'macgreek' },
    { name: 'maciceland' },
    { name: 'macroman' },
    { name: 'macromania' },
    { name: 'macthai' },
    { name: 'macturkish' },
    { name: 'macukraine' },
    { name: 'maccenteuro' },
    { name: 'macintosh' },
  ],
  'KOI8 Codepages': [
    { name: 'koi8-r' },
    { name: 'koi8-u' },
    { name: 'koi8-ru' },
    { name: 'koi8-t' },
  ],
  'Other': [
    { name: 'Japanese Shift-JIS (CP 932)', alias: 'Shift_JIS' },
    { name: 'Japanese EUC-JP', alias: 'EUC-JP' },
    { name: 'Chinese (simplified) GBK (CP936)', alias: 'GBK' },
    { name: 'Chinese (simplified) GB2312', alias: 'GB2312' },
    { name: 'Chinese (simplified) GB18030', alias: 'GB18030' },
    { name: 'Chinese (simplified) EUC-CN', alias: 'EUC-CN' },
    { name: 'Chinese (traditional) Big5 (CP950)', alias: 'Big5' },
    { name: 'Chinese (traditional) Big5-HKSCS', alias: 'Big5-HKSCS' },
    { name: 'Korean EUC-KR (CP949)', alias: 'EUC-KR' },
    { name: 'armscii8' },
    { name: 'rk1048' },
    { name: 'tcvn' },
    { name: 'georgianacademy' },
    { name: 'georgianps' },
    { name: 'pt154' },
    { name: 'viscii' },
    { name: 'iso646cn' },
    { name: 'iso646jp' },
    { name: 'hproman8' },
    { name: 'tis620' },
  ],
};

export const aliasForName = {};
Object.values(categories).flat().forEach(def => {
  aliasForName[def.name] = def.alias || def.name;
});
