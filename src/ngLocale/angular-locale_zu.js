angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {"DATETIME_FORMATS":{"MONTH":["Januwari","Februwari","Mashi","Apreli","Meyi","Juni","Julayi","Agasti","Septhemba","Okthoba","Novemba","Disemba"],"SHORTMONTH":["Jan","Feb","Mas","Apr","Mey","Jun","Jul","Aga","Sep","Okt","Nov","Dis"],"DAY":["Sonto","Msombuluko","Lwesibili","Lwesithathu","uLwesine","Lwesihlanu","Mgqibelo"],"SHORTDAY":["Son","Mso","Bil","Tha","Sin","Hla","Mgq"],"AMPMS":["AM","PM"],"medium":"d MMM y h:mm:ss a","short":"yyyy-MM-dd h:mm a","fullDate":"EEEE dd MMMM y","longDate":"d MMMM y","mediumDate":"d MMM y","shortDate":"yyyy-MM-dd","mediumTime":"h:mm:ss a","shortTime":"h:mm a"},"NUMBER_FORMATS":{"DECIMAL_SEP":".","GROUP_SEP":",","PATTERNS":[{"minInt":1,"minFrac":0,"macFrac":0,"posPre":"","posSuf":"","negPre":"-","negSuf":"","gSize":3,"lgSize":3,"maxFrac":3},{"minInt":1,"minFrac":2,"macFrac":0,"posPre":"\u00A4","posSuf":"","negPre":"(\u00A4","negSuf":")","gSize":3,"lgSize":3,"maxFrac":2}],"CURRENCY_SYM":"R"},"pluralCat":function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;},"id":"zu"});
}]);