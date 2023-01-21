/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    background-color: black;\n}\n\nh1{\n    text-align: center;\n    color: white;\n}\n\n.grid{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.row{\n    display: flex;\n}\n\n.cell{\n    background-color: rgba(190, 190, 190, 0.829);\n    color: white;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-size: 24px;\n    font-weight: bold;\n    display: flex;\n    border: solid rgb(201, 201, 201) 2px;\n    width: 50px;\n    height: 50px;\n    justify-content: center;\n    align-items: center;\n}\n\n#letter{\n    background-color: rgba(240, 188, 46, 0.842);\n}\n\n#pos{\n    background-color: rgb(130, 190, 39);\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,4CAA4C;IAC5C,YAAY;IACZ,gDAAgD;IAChD,eAAe;IACf,iBAAiB;IACjB,aAAa;IACb,oCAAoC;IACpC,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,2CAA2C;AAC/C;;AAEA;IACI,mCAAmC;AACvC","sourcesContent":["body{\n    background-color: black;\n}\n\nh1{\n    text-align: center;\n    color: white;\n}\n\n.grid{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.row{\n    display: flex;\n}\n\n.cell{\n    background-color: rgba(190, 190, 190, 0.829);\n    color: white;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-size: 24px;\n    font-weight: bold;\n    display: flex;\n    border: solid rgb(201, 201, 201) 2px;\n    width: 50px;\n    height: 50px;\n    justify-content: center;\n    align-items: center;\n}\n\n#letter{\n    background-color: rgba(240, 188, 46, 0.842);\n}\n\n#pos{\n    background-color: rgb(130, 190, 39);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/modules/data/words.txt":
/*!************************************!*\
  !*** ./src/modules/data/words.txt ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("which\nthere\ntheir\nabout\nwould\nthese\nother\nwords\ncould\nwrite\nfirst\nwater\nafter\nwhere\nright\nthink\nthree\nyears\nplace\nsound\ngreat\nagain\nstill\nevery\nsmall\nfound\nthose\nnever\nunder\nmight\nwhile\nhouse\nworld\nbelow\nasked\ngoing\nlarge\nuntil\nalong\nshall\nbeing\noften\nearth\nbegan\nsince\nstudy\nnight\nlight\nabove\npaper\nparts\nyoung\nstory\npoint\ntimes\nheard\nwhole\nwhite\ngiven\nmeans\nmusic\nmiles\nthing\ntoday\nlater\nusing\nmoney\nlines\norder\ngroup\namong\nlearn\nknown\nspace\ntable\nearly\ntrees\nshort\nhands\nstate\nblack\nshown\nstood\nfront\nvoice\nkinds\nmakes\ncomes\nclose\npower\nlived\nvowel\ntaken\nbuilt\nheart\nready\nquite\nclass\nbring\nround\nhorse\nshows\npiece\ngreen\nstand\nbirds\nstart\nriver\ntried\nleast\nfield\nwhose\ngirls\nleave\nadded\ncolor\nthird\nhours\nmoved\nplant\ndoing\nnames\nforms\nheavy\nideas\ncried\ncheck\nfloor\nbegin\nwoman\nalone\nplane\nspell\nwatch\ncarry\nwrote\nclear\nnamed\nbooks\nchild\nglass\nhuman\ntakes\nparty\nbuild\nseems\nblood\nsides\nseven\nmouth\nsolve\nnorth\nvalue\ndeath\nmaybe\nhappy\ntells\ngives\nlooks\nshape\nlives\nsteps\nareas\nsense\nspeak\nforce\nocean\nspeed\nwomen\nmetal\nsouth\ngrass\nscale\ncells\nlower\nsleep\nwrong\npages\nships\nneeds\nrocks\neight\nmajor\nlevel\ntotal\nahead\nreach\nstars\nstore\nsight\nterms\ncatch\nworks\nboard\ncover\nsongs\nequal\nstone\nwaves\nguess\ndance\nspoke\nbreak\ncause\nradio\nweeks\nlands\nbasic\nliked\ntrade\nfresh\nfinal\nfight\nmeant\ndrive\nspent\nlocal\nwaxes\nknows\ntrain\nbread\nhomes\nteeth\ncoast\nthick\nbrown\nclean\nquiet\nsugar\nfacts\nsteel\nforth\nrules\nnotes\nunits\npeace\nmonth\nverbs\nseeds\nhelps\nsharp\nvisit\nwoods\nchief\nwalls\ncross\nwings\ngrown\ncases\nfoods\ncrops\nfruit\nstick\nwants\nstage\nsheep\nnouns\nplain\ndrink\nbones\napart\nturns\nmoves\ntouch\nangle\nbased\nrange\nmarks\ntired\nolder\nfarms\nspend\nshoes\ngoods\nchair\ntwice\ncents\nempty\nalike\nstyle\nbroke\npairs\ncount\nenjoy\nscore\nshore\nroots\npaint\nheads\nshook\nserve\nangry\ncrowd\nwheel\nquick\ndress\nshare\nalive\nnoise\nsolid\ncloth\nsigns\nhills\ntypes\ndrawn\nworth\ntruck\npiano\nupper\nloved\nusual\nfaces\ndrove\ncabin\nboats\ntowns\nproud\ncourt\nmodel\nprime\nfifty\nplans\nyards\nprove\ntools\nprice\nsheet\nsmell\nboxes\nraise\nmatch\ntruth\nroads\nthrew\nenemy\nlunch\nchart\nscene\ngraph\ndoubt\nguide\nwinds\nblock\ngrain\nsmoke\nmixed\ngames\nwagon\nsweet\ntopic\nextra\nplate\ntitle\nknife\nfence\nfalls\ncloud\nwheat\nplays\nenter\nbroad\nsteam\natoms\npress\nlying\nbasis\nclock\ntaste\ngrows\nthank\nstorm\nagree\nbrain\ntrack\nsmile\nfunny\nbeach\nstock\nhurry\nsaved\nsorry\ngiant\ntrail\noffer\nought\nrough\ndaily\navoid\nkeeps\nthrow\nallow\ncream\nlaugh\nedges\nteach\nframe\nbells\ndream\nmagic\noccur\nended\nchord\nfalse\nskill\nholes\ndozen\nbrave\napple\nclimb\nouter\npitch\nruler\nholds\nfixed\ncosts\ncalls\nblank\nstaff\nlabor\neaten\nyouth\ntones\nhonor\nglobe\ngases\ndoors\npoles\nloose\napply\ntears\nexact\nbrush\nchest\nlayer\nwhale\nminor\nfaith\ntests\njudge\nitems\nworry\nwaste\nhoped\nstrip\nbegun\naside\nlakes\nbound\ndepth\ncandy\nevent\nworse\naware\nshell\nrooms\nranch\nimage\nsnake\naloud\ndried\nlikes\nmotor\npound\nknees\nrefer\nfully\nchain\nshirt\nflour\ndrops\nspite\norbit\nbanks\nshoot\ncurve\ntribe\ntight\nblind\nslept\nshade\nclaim\nflies\ntheme\nqueen\nfifth\nunion\nhence\nstraw\nentry\nissue\nbirth\nfeels\nanger\nbrief\nrhyme\nglory\nguard\nflows\nflesh\nowned\ntrick\nyours\nsizes\nnoted\nwidth\nburst\nroute\nlungs\nuncle\nbears\nroyal\nkings\nforty\ntrial\ncards\nbrass\nopera\nchose\nowner\nvapor\nbeats\nmouse\ntough\nwires\nmeter\ntower\nfinds\ninner\nstuck\narrow\npoems\nlabel\nswing\nsolar\ntruly\ntense\nbeans\nsplit\nrises\nweigh\nhotel\nstems\npride\nswung\ngrade\ndigit\nbadly\nboots\npilot\nsales\nswept\nlucky\nprize\nstove\ntubes\nacres\nwound\nsteep\nslide\ntrunk\nerror\nporch\nslave\nexist\nfaced\nmines\nmarry\njuice\nraced\nwaved\ngoose\ntrust\nfewer\nfavor\nmills\nviews\njoint\neager\nspots\nblend\nrings\nadult\nindex\nnails\nhorns\nballs\nflame\nrates\ndrill\ntrace\nskins\nwaxed\nseats\nstuff\nratio\nminds\ndirty\nsilly\ncoins\nhello\ntrips\nleads\nrifle\nhopes\nbases\nshine\nbench\nmoral\nfires\nmeals\nshake\nshops\ncycle\nmovie\nslope\ncanoe\nteams\nfolks\nfired\nbands\nthumb\nshout\ncanal\nhabit\nreply\nruled\nfever\ncrust\nshelf\nwalks\nmidst\ncrack\nprint\ntales\ncoach\nstiff\nflood\nverse\nawake\nrocky\nmarch\nfault\nswift\nfaint\ncivil\nghost\nfeast\nblade\nlimit\ngerms\nreads\nducks\ndairy\nworst\ngifts\nlists\nstops\nrapid\nbrick\nclaws\nbeads\nbeast\nskirt\ncakes\nlions\nfrogs\ntries\nnerve\ngrand\narmed\ntreat\nhoney\nmoist\nlegal\npenny\ncrown\nshock\ntaxes\nsixty\naltar\npulls\nsport\ndrums\ntalks\ndying\ndates\ndrank\nblows\nlever\nwages\nproof\ndrugs\ntanks\nsings\ntails\npause\nherds\narose\nhated\nclues\nnovel\nshame\nburnt\nraces\nflash\nweary\nheels\ntoken\ncoats\nspare\nshiny\nalarm\ndimes\nsixth\nclerk\nmercy\nsunny\nguest\nfloat\nshone\npipes\nworms\nbills\nsweat\nsuits\nsmart\nupset\nrains\nsandy\nrainy\nparks\nsadly\nfancy\nrider\nunity\nbunch\nrolls\ncrash\ncraft\nnewly\ngates\nhatch\npaths\nfunds\nwider\ngrace\ngrave\ntides\nadmit\nshift\nsails\npupil\ntiger\nangel\ncruel\nagent\ndrama\nurged\npatch\nnests\nvital\nsword\nblame\nweeds\nscrew\nvocal\nbacon\nchalk\ncargo\ncrazy\nacted\ngoats\narise\nwitch\nloves\nqueer\ndwell\nbacks\nropes\nshots\nmerry\nphone\ncheek\npeaks\nideal\nbeard\neagle\ncreek\ncries\nashes\nstall\nyield\nmayor\nopens\ninput\nfleet\ntooth\ncubic\nwives\nburns\npoets\napron\nspear\norgan\ncliff\nstamp\npaste\nrural\nbaked\nchase\nslice\nslant\nknock\nnoisy\nsorts\nstays\nwiped\nblown\npiled\nclubs\ncheer\nwidow\ntwist\ntenth\nhides\ncomma\nsweep\nspoon\nstern\ncrept\nmaple\ndeeds\nrides\nmuddy\ncrime\njelly\nridge\ndrift\ndusty\ndevil\ntempo\nhumor\nsends\nsteal\ntents\nwaist\nroses\nreign\nnoble\ncheap\ndense\nlinen\ngeese\nwoven\nposts\nhired\nwrath\nsalad\nbowed\ntires\nshark\nbelts\ngrasp\nblast\npolar\nfungi\ntends\npearl\nloads\njokes\nveins\nfrost\nhears\nloses\nhosts\ndiver\nphase\ntoads\nalert\ntasks\nseams\ncoral\nfocus\nnaked\npuppy\njumps\nspoil\nquart\nmacro\nfears\nflung\nspark\nvivid\nbrook\nsteer\nspray\ndecay\nports\nsocks\nurban\ngoals\ngrant\nminus\nfilms\ntunes\nshaft\nfirms\nskies\nbride\nwreck\nflock\nstare\nhobby\nbonds\ndared\nfaded\nthief\ncrude\npants\nflute\nvotes\ntonal\nradar\nwells\nskull\nhairs\nargue\nwears\ndolls\nvoted\ncaves\ncared\nbroom\nscent\npanel\nfairy\nolive\nbends\nprism\nlamps\ncable\npeach\nruins\nrally\nschwa\nlambs\nsells\ncools\ndraft\ncharm\nlimbs\nbrake\ngazed\ncubes\ndelay\nbeams\nfetch\nranks\narray\nharsh\ncamel\nvines\npicks\nnaval\npurse\nrigid\ncrawl\ntoast\nsoils\nsauce\nbasin\nponds\ntwins\nwrist\nfluid\npools\nbrand\nstalk\nrobot\nreeds\nhoofs\nbuses\nsheer\ngrief\nbloom\ndwelt\nmelts\nrisen\nflags\nknelt\nfiber\nroofs\nfreed\narmor\npiles\naimed\nalgae\ntwigs\nlemon\nditch\ndrunk\nrests\nchill\nslain\npanic\ncords\ntuned\ncrisp\nledge\ndived\nswamp\nclung\nstole\nmolds\nyarns\nliver\ngauge\nbreed\nstool\ngulls\nawoke\ngross\ndiary\nrails\nbelly\ntrend\nflask\nstake\nfried\ndraws\nactor\nhandy\nbowls\nhaste\nscope\ndeals\nknots\nmoons\nessay\nthump\nhangs\nbliss\ndealt\ngains\nbombs\nclown\npalms\ncones\nroast\ntidal\nbored\nchant\nacids\ndough\ncamps\nswore\nlover\nhooks\nmales\ncocoa\npunch\naward\nreins\nninth\nnoses\nlinks\ndrain\nfills\nnylon\nlunar\npulse\nflown\nelbow\nfatal\nsites\nmoths\nmeats\nfoxes\nmined\nattic\nfiery\nmount\nusage\nswear\nsnowy\nrusty\nscare\ntraps\nrelax\nreact\nvalid\nrobin\ncease\ngills\nprior\nsafer\npolio\nloyal\nswell\nsalty\nmarsh\nvague\nweave\nmound\nseals\nmules\nvirus\nscout\nacute\nwindy\nstout\nfolds\nseize\nhilly\njoins\npluck\nstack\nlords\ndunes\nburro\nhawks\ntrout\nfeeds\nscarf\nhalls\ncoals\ntowel\nsouls\nelect\nbuggy\npumps\nloans\nspins\nfiles\noxide\npains\nphoto\nrival\nflats\nsyrup\nrodeo\nsands\nmoose\npints\ncurly\ncomic\ncloak\nonion\nclams\nscrap\ndidst\ncouch\ncodes\nfails\nounce\nlodge\ngreet\ngypsy\nutter\npaved\nzones\nfours\nalley\ntiles\nbless\ncrest\nelder\nkills\nyeast\nerect\nbugle\nmedal\nroles\nhound\nsnail\nalter\nankle\nrelay\nloops\nzeros\nbites\nmodes\ndebts\nrealm\nglove\nrayon\nswims\npoked\nstray\nlifts\nmaker\nlumps\ngraze\ndread\nbarns\ndocks\nmasts\npours\nwharf\ncurse\nplump\nrobes\nseeks\ncedar\ncurls\njolly\nmyths\ncages\ngloom\nlocks\npedal\nbeets\ncrows\nanode\nslash\ncreep\nrowed\nchips\nfists\nwines\ncares\nvalve\nnewer\nmotel\nivory\nnecks\nclamp\nbarge\nblues\nalien\nfrown\nstrap\ncrews\nshack\ngonna\nsaves\nstump\nferry\nidols\ncooks\njuicy\nglare\ncarts\nalloy\nbulbs\nlawns\nlasts\nfuels\noddly\ncrane\nfiled\nweird\nshawl\nslips\ntroop\nbolts\nsuite\nsleek\nquilt\ntramp\nblaze\natlas\nodors\nscrub\ncrabs\nprobe\nlogic\nadobe\nexile\nrebel\ngrind\nsting\nspine\ncling\ndesks\ngrove\nleaps\nprose\nlofty\nagony\nsnare\ntusks\nbulls\nmoods\nhumid\nfiner\ndimly\nplank\nchina\npines\nguilt\nsacks\nbrace\nquote\nlathe\ngaily\nfonts\nscalp\nadopt\nfoggy\nferns\ngrams\nclump\nperch\ntumor\nteens\ncrank\nfable\nhedge\ngenes\nsober\nboast\ntract\ncigar\nunite\nowing\nthigh\nhaiku\nswish\ndikes\nwedge\nbooth\neased\nfrail\ncough\ntombs\ndarts\nforts\nchoir\npouch\npinch\nhairy\nbuyer\ntorch\nvigor\nwaltz\nheats\nherbs\nusers\nflint\nclick\nmadam\nbleak\nblunt\naided\nlacks\nmasks\nwaded\nrisks\nnurse\nchaos\nsewed\ncured\nample\nlease\nsteak\nsinks\nmerit\nbluff\nbathe\ngleam\nbonus\ncolts\nshear\ngland\nsilky\nskate\nbirch\nanvil\nsleds\ngroan\nmaids\nmeets\nspeck\nhymns\nhints\ndrown\nbosom\nslick\nquest\ncoils\nspied\nsnows\nstead\nsnack\nplows\nblond\ntamed\nthorn\nwaits\nglued\nbanjo\ntease\narena\nbulky\ncarve\nstunt\nwarms\nshady\nrazor\nfolly\nleafy\nnotch\nfools\notter\npears\nflush\ngenus\nached\nfives\nflaps\nspout\nsmote\nfumes\nadapt\ncuffs\ntasty\nstoop\nclips\ndisks\nsniff\nlanes\nbrisk\nimply\ndemon\nsuper\nfurry\nraged\ngrowl\ntexts\nhardy\nstung\ntyped\nhates\nwiser\ntimid\nserum\nbeaks\nrotor\ncasts\nbaths\nglide\nplots\ntrait\nresin\nslums\nlyric\npuffs\ndecks\nbrood\nmourn\naloft\nabuse\nwhirl\nedged\novary\nquack\nheaps\nslang\nawait\ncivic\nsaint\nbevel\nsonar\naunts\npacks\nfroze\ntonic\ncorps\nswarm\nfrank\nrepay\ngaunt\nwired\nniece\ncello\nneedy\nchuck\nstony\nmedia\nsurge\nhurts\nrepel\nhusky\ndated\nhunts\nmists\nexert\ndries\nmates\nsworn\nbaker\nspice\noasis\nboils\nspurs\ndoves\nsneak\npaces\ncolon\nsiege\nstrum\ndrier\ncacao\nhumus\nbales\npiped\nnasty\nrinse\nboxer\nshrub\namuse\ntacks\ncited\nslung\ndelta\nladen\nlarva\nrents\nyells\nspool\nspill\ncrush\njewel\nsnaps\nstain\nkicks\ntying\nslits\nrated\neerie\nsmash\nplums\nzebra\nearns\nbushy\nscary\nsquad\ntutor\nsilks\nslabs\nbumps\nevils\nfangs\nsnout\nperil\npivot\nyacht\nlobby\njeans\ngrins\nviola\nliner\ncomet\nscars\nchops\nraids\neater\nslate\nskips\nsoles\nmisty\nurine\nknobs\nsleet\nholly\npests\nforks\ngrill\ntrays\npails\nborne\ntenor\nwares\ncarol\nwoody\ncanon\nwakes\nkitty\nminer\npolls\nshaky\nnasal\nscorn\nchess\ntaxis\ncrate\nshyly\ntulip\nforge\nnymph\nbudge\nlowly\nabide\ndepot\noases\nasses\nsheds\nfudge\npills\nrivet\nthine\ngroom\nlanky\nboost\nbroth\nheave\ngravy\nbeech\ntimed\nquail\ninert\ngears\nchick\nhinge\ntrash\nclash\nsighs\nrenew\nbough\ndwarf\nslows\nquill\nshave\nspore\nsixes\nchunk\nmadly\npaced\nbraid\nfuzzy\nmotto\nspies\nslack\nmucus\nmagma\nawful\ndiscs\nerase\nposed\nasset\ncider\ntaper\ntheft\nchurn\nsatin\nslots\ntaxed\nbully\nsloth\nshale\ntread\nraked\ncurds\nmanor\naisle\nbulge\nloins\nstair\ntapes\nleans\nbunks\nsquat\ntowed\nlance\npanes\nsakes\nheirs\ncaste\ndummy\npores\nfauna\ncrook\npoise\nepoch\nrisky\nwarns\nfling\nberry\ngrape\nflank\ndrags\nsquid\npelts\nicing\nirony\nirons\nbarks\nwhoop\nchoke\ndiets\nwhips\ntally\ndozed\ntwine\nkites\nbikes\nticks\nriots\nroars\nvault\nlooms\nscold\nblink\ndandy\npupae\nsieve\nspike\nducts\nlends\npizza\nbrink\nwiden\nplumb\npagan\nfeats\nbison\nsoggy\nscoop\nargon\nnudge\nskiff\namber\nsexes\nrouse\nsalts\nhitch\nexalt\nleash\ndined\nchute\nsnort\ngusts\nmelon\ncheat\nreefs\nllama\nlasso\ndebut\nquota\noaths\nprone\nmixes\nrafts\ndives\nstale\ninlet\nflick\npinto\nbrows\nuntie\nbatch\ngreed\nchore\nstirs\nblush\nonset\nbarbs\nvolts\nbeige\nswoop\npaddy\nlaced\nshove\njerky\npoppy\nleaks\nfares\ndodge\ngodly\nsquaw\naffix\nbrute\nnicer\nundue\nsnarl\nmerge\ndoses\nshowy\ndaddy\nroost\nvases\nswirl\npetty\ncolds\ncurry\ncobra\ngenie\nflare\nmessy\ncores\nsoaks\nripen\nwhine\namino\nplaid\nspiny\nmowed\nbaton\npeers\nvowed\npious\nswans\nexits\nafoot\nplugs\nidiom\nchili\nrites\nserfs\ncleft\nberth\ngrubs\nannex\ndizzy\nhasty\nlatch\nwasps\nmirth\nbaron\nplead\naloof\naging\npixel\nbared\nmummy\nhotly\nauger\nbuddy\nchaps\nbadge\nstark\nfairs\ngully\nmumps\nemery\nfilly\novens\ndrone\ngauze\nidiot\nfussy\nannoy\nshank\ngouge\nbleed\nelves\nroped\nunfit\nbaggy\nmower\nscant\ngrabs\nfleas\nlousy\nalbum\nsawed\ncooky\nmurky\ninfer\nburly\nwaged\ndingy\nbrine\nkneel\ncreak\nvanes\nsmoky\nspurt\ncombs\neasel\nlaces\nhumps\nrumor\naroma\nhorde\nswiss\nleapt\nopium\nslime\nafire\npansy\nmares\nsoaps\nhusks\nsnips\nhazel\nlined\ncafes\nnaive\nwraps\nsized\npiers\nbeset\nagile\ntongs\nsteed\nfraud\nbooty\nvalor\ndowny\nwitty\nmossy\npsalm\nscuba\ntours\npolka\nmilky\ngaudy\nshrug\ntufts\nwilds\nlaser\ntruss\nhares\ncreed\nlilac\nsiren\ntarry\nbribe\nswine\nmuted\nflips\ncures\nsinew\nboxed\nhoops\ngasps\nhoods\nniche\nyucca\nglows\nsewer\nwhack\nfuses\ngowns\ndroop\nbucks\npangs\nmails\nwhisk\nhaven\nclasp\nsling\nstint\nurges\nchamp\npiety\nchirp\npleat\nposse\nsunup\nmenus\nhowls\nquake\nknack\nplaza\nfiend\ncaked\nbangs\nerupt\npoker\nolden\ncramp\nvoter\nposes\nmanly\nslump\nfined\ngrips\ngaped\npurge\nhiked\nmaize\nfluff\nstrut\nsloop\nprowl\nroach\ncocks\nbland\ndials\nplume\nslaps\nsoups\ndully\nwills\nfoams\nsolos\nskier\neaves\ntotem\nfused\nlatex\nveils\nmused\nmains\nmyrrh\nracks\ngalls\ngnats\nbouts\nsisal\nshuts\nhoses\ndryly\nhover\ngloss\nseeps\ndenim\nputty\nguppy\nleaky\ndusky\nfilth\noboes\nspans\nfowls\nadorn\nglaze\nhaunt\ndares\nobeys\nbakes\nabyss\nsmelt\ngangs\naches\ntrawl\nclaps\nundid\nspicy\nhoist\nfades\nvicar\nacorn\npussy\ngruff\nmusty\ntarts\nsnuff\nhunch\ntruce\ntweed\ndryer\nloser\nsheaf\nmoles\nlapse\ntawny\nvexed\nautos\nwager\ndomes\nsheen\nclang\nspade\nsowed\nbroil\nslyly\nstuds\ngrunt\ndonor\nslugs\naspen\nhomer\ncroak\ntithe\nhalts\navert\nhavoc\nhogan\nglint\nruddy\njeeps\nflaky\nladle\ntaunt\nsnore\nfines\nprops\nprune\npesos\nradii\npokes\ntiled\ndaisy\nheron\nvilla\nfarce\nbinds\ncites\nfixes\njerks\nlivid\nwaked\ninked\nbooms\nchews\nlicks\nhyena\nscoff\nlusty\nsonic\nsmith\nusher\ntucks\nvigil\nmolts\nsects\nspars\ndumps\nscaly\nwisps\nsores\nmince\npanda\nflier\naxles\nplied\nbooby\npatio\nrabbi\npetal\npolyp\ntints\ngrate\ntroll\ntolls\nrelic\nphony\nbleat\nflaws\nflake\nsnags\naptly\ndrawl\nulcer\nsoapy\nbossy\nmonks\ncrags\ncaged\ntwang\ndiner\ntaped\ncadet\ngrids\nspawn\nguile\nnoose\nmores\ngirth\nslimy\naides\nspasm\nburrs\nalibi\nlymph\nsaucy\nmuggy\nliter\njoked\ngoofy\nexams\nenact\nstork\nlured\ntoxic\nomens\nnears\ncovet\nwrung\nforum\nvenom\nmoody\nalder\nsassy\nflair\nguild\nprays\nwrens\nhauls\nstave\ntilts\npecks\nstomp\ngales\ntempt\ncapes\nmesas\nomits\ntepee\nharry\nwring\nevoke\nlimes\ncluck\nlunge\nhighs\ncanes\ngiddy\nlithe\nverge\nkhaki\nqueue\nloath\nfoyer\noutdo\nfared\ndeter\ncrumb\nastir\nspire\njumpy\nextol\nbuoys\nstubs\nlucid\nthong\nafore\nwhiff\nmaxim\nhulls\nclogs\nslats\njiffy\narbor\ncinch\nigloo\ngoody\ngazes\ndowel\ncalms\nbitch\nscowl\ngulps\ncoded\nwaver\nmason\nlobes\nebony\nflail\nisles\nclods\ndazed\nadept\noozed\nsedan\nclays\nwarts\nketch\nskunk\nmanes\nadore\nsneer\nmango\nfiord\nflora\nroomy\nminks\nthaws\nwatts\nfreer\nexult\nplush\npaled\ntwain\nclink\nscamp\npawed\ngrope\nbravo\ngable\nstink\nsever\nwaned\nrarer\nregal\nwards\nfawns\nbabes\nunify\namend\noaken\nglade\nvisor\nhefty\nnines\nthrob\npecan\nbutts\npence\nsills\njails\nflyer\nsaber\nnomad\nmiter\nbeeps\ndomed\ngulfs\ncurbs\nheath\nmoors\naorta\nlarks\ntangy\nwryly\ncheep\nrages\nevade\nlures\nfreak\nvogue\ntunic\nslams\nknits\ndumpy\nmania\nspits\nfirth\nhikes\ntrots\nnosed\nclank\ndogma\nbloat\nbalsa\ngraft\nmiddy\nstile\nkeyed\nfinch\nsperm\nchaff\nwiles\namigo\ncopra\namiss\neying\ntwirl\nlurch\npopes\nchins\nsmock\ntines\nguise\ngrits\njunks\nshoal\ncache\ntapir\natoll\ndeity\ntoils\nspree\nmocks\nscans\nshorn\nrevel\nraven\nhoary\nreels\nscuff\nmimic\nweedy\ncorny\ntruer\nrouge\nember\nfloes\ntorso\nwipes\nedict\nsulky\nrecur\ngroin\nbaste\nkinks\nsurer\npiggy\nmoldy\nfranc\nliars\ninept\ngusty\nfacet\njetty\nequip\nleper\nslink\nsoars\ncater\ndowry\nsided\nyearn\ndecoy\ntaboo\novals\nheals\npleas\nberet\nspilt\ngayly\nrover\nendow\npygmy\ncarat\nabbey\nvents\nwaken\nchimp\nfumed\nsodas\nvinyl\nclout\nwades\nmites\nsmirk\nbores\nbunny\nsurly\nfrock\nforay\npurer\nmilks\nquery\nmired\nblare\nfroth\ngruel\nnavel\npaler\npuffy\ncasks\ngrime\nderby\nmamma\ngavel\nteddy\nvomit\nmoans\nallot\ndefer\nwield\nviper\nlouse\nerred\nhewed\nabhor\nwrest\nwaxen\nadage\nardor\nstabs\npored\nrondo\nloped\nfishy\nbible\nhires\nfoals\nfeuds\njambs\nthuds\njeers\nknead\nquirk\nrugby\nexpel\ngreys\nrigor\nester\nlyres\naback\nglues\nlotus\nlurid\nrungs\nhutch\nthyme\nvalet\ntommy\nyokes\nepics\ntrill\npikes\nozone\ncaper\nchime\nfrees\nfamed\nleech\nsmite\nneigh\nerode\nrobed\nhoard\nsalve\nconic\ngawky\ncraze\njacks\ngloat\nmushy\nrumps\nfetus\nwince\npinks\nshalt\ntoots\nglens\ncooed\nrusts\nstews\nshred\nparka\nchugs\nwinks\nclots\nshrew\nbooed\nfilmy\njuror\ndents\ngummy\ngrays\nhooky\nbutte\ndogie\npoled\nreams\nfifes\nspank\ngayer\ntepid\nspook\ntaint\nflirt\nrogue\nspiky\nopals\nmiser\ncocky\ncoyly\nbalmy\nslosh\nbrawl\naphid\nfaked\nhydra\nbrags\nchide\nyanks\nallay\nvideo\naltos\neases\nmeted\nchasm\nlongs\nexcel\ntaffy\nimpel\nsavor\nkoala\nquays\ndawns\nproxy\nclove\nduets\ndregs\ntardy\nbriar\ngrimy\nultra\nmeaty\nhalve\nwails\nsuede\nmauve\nenvoy\narson\ncoves\ngooey\nbrews\nsofas\nchums\namaze\nzooms\nabbot\nhalos\nscour\nsuing\ncribs\nsagas\nenema\nwordy\nharps\ncoupe\nmolar\nflops\nweeps\nmints\nashen\nfelts\naskew\nmunch\nmewed\ndivan\nvices\njumbo\nblobs\nblots\nspunk\nacrid\ntopaz\ncubed\nclans\nflees\nslurs\ngnaws\nwelds\nfords\nemits\nagate\npumas\nmends\ndarks\ndukes\nplies\ncanny\nhoots\noozes\nlamed\nfouls\nclefs\nnicks\nmated\nskims\nbrunt\ntuber\ntinge\nfates\nditty\nthins\nfrets\neider\nbayou\nmulch\nfasts\namass\ndamps\nmorns\nfriar\npalsy\nvista\ncroon\nconch\nudder\ntacos\nskits\nmikes\nquits\npreen\naster\nadder\nelegy\npulpy\nscows\nbaled\nhovel\nlavas\ncrave\noptic\nwelts\nbusts\nknave\nrazed\nshins\ntotes\nscoot\ndears\ncrock\nmutes\ntrims\nskein\ndoted\nshuns\nveers\nfakes\nyoked\nwooed\nhacks\nsprig\nwands\nlulls\nseers\nsnobs\nnooks\npined\nperky\nmooed\nfrill\ndines\nbooze\ntripe\nprong\ndrips\nodder\nlevee\nantic\nsidle\npithy\ncorks\nyelps\njoker\nfleck\nbuffs\nscram\ntiers\nbogey\ndoled\nirate\nvales\ncoped\nhails\nelude\nbulks\naired\nvying\nstags\nstrew\ncocci\npacts\nscabs\nsilos\ndusts\nyodel\nterse\njaded\nbaser\njibes\nfoils\nsways\nforgo\nslays\npreys\ntreks\nquell\npeeks\nassay\nlurks\neject\nboars\ntrite\nbelch\ngnash\nwanes\nlutes\nwhims\ndosed\nchewy\nsnipe\numbra\nteems\ndozes\nkelps\nupped\nbrawn\ndoped\nshush\nrinds\nslush\nmoron\nvoile\nwoken\nfjord\nsheik\njests\nkayak\nslews\ntoted\nsaner\ndrape\npatty\nraves\nsulfa\ngrist\nskied\nvixen\ncivet\nvouch\ntiara\nhomey\nmoped\nrunts\nserge\nkinky\nrills\ncorns\nbrats\npries\namble\nfries\nloons\ntsars\ndatum\nmusky\npigmy\ngnome\nravel\novule\nicily\nliken\nlemur\nfrays\nsilts\nsifts\nplods\nramps\ntress\nearls\ndudes\nwaive\nkarat\njolts\npeons\nbeers\nhorny\npales\nwreak\nlairs\nlynch\nstank\nswoon\nidler\nabort\nblitz\nensue\natone\nbingo\nroves\nkilts\nscald\nadios\ncynic\ndulls\nmemos\nelfin\ndales\npeels\npeals\nbares\nsinus\ncrone\nsable\nhinds\nshirk\nenrol\nwilts\nroams\nduped\ncysts\nmitts\nsafes\nspats\ncoops\nfilet\nknell\nrefit\ncovey\npunks\nkilns\nfitly\nabate\ntalcs\nheeds\nduels\nwanly\nruffs\ngauss\nlapel\njaunt\nwhelp\ncleat\ngauzy\ndirge\nedits\nwormy\nmoats\nsmear\nprods\nbowel\nfrisk\nvests\nbayed\nrasps\ntames\ndelve\nembed\nbefit\nwafer\nceded\nnovas\nfeign\nspews\nlarch\nhuffs\ndoles\nmamas\nhulks\npried\nbrims\nirked\naspic\nswipe\nmealy\nskimp\nbluer\nslake\ndowdy\npenis\nbrays\npupas\negret\nflunk\nphlox\ngripe\npeony\ndouse\nblurs\ndarns\nslunk\nlefts\nchats\ninane\nvials\nstilt\nrinks\nwoofs\nwowed\nbongs\nfrond\ningot\nevict\nsinge\nshyer\nflied\nslops\ndolts\ndrool\ndells\nwhelk\nhippy\nfeted\nether\ncocos\nhives\njibed\nmazes\ntrios\nsirup\nsquab\nlaths\nleers\npasta\nrifts\nlopes\nalias\nwhirs\ndiced\nslags\nlodes\nfoxed\nidled\nprows\nplait\nmalts\nchafe\ncower\ntoyed\nchefs\nkeels\nsties\nracer\netude\nsucks\nsulks\nmicas\nczars\ncopse\nailed\nabler\nrabid\ngolds\ncroup\nsnaky\nvisas\npalls\nmopes\nboned\nwispy\nraved\nswaps\njunky\ndoily\npawns\ntamer\npoach\nbaits\ndamns\ngumbo\ndaunt\nprank\nhunks\nbuxom\nheres\nhonks\nstows\nunbar\nidles\nrouts\nsages\ngoads\nremit\ncopes\ndeign\nculls\ngirds\nhaves\nlucks\nstunk\ndodos\nshams\nsnubs\nicons\nusurp\ndooms\nhells\nsoled\ncomas\npaves\nmaths\nperks\nlimps\nwombs\nblurb\ndaubs\ncokes\nsours\nstuns\ncased\nmusts\ncoeds\ncowed\naping\nzoned\nrummy\nfetes\nskulk\nquaff\nrajah\ndeans\nreaps\ngalas\ntills\nroved\nkudos\ntoned\npared\nscull\nvexes\npunts\nsnoop\nbails\ndames\nhazes\nlores\nmarts\nvoids\nameba\nrakes\nadzes\nharms\nrears\nsatyr\nswill\nhexes\ncolic\nleeks\nhurls\nyowls\nivies\nplops\nmusks\npapaw\njells\nbused\ncruet\nbided\nfilch\nzests\nrooks\nlaxly\nrends\nloams\nbasks\nsires\ncarps\npokey\nflits\nmuses\nbawls\nshuck\nviler\nlisps\npeeps\nsorer\nlolls\nprude\ndiked\nfloss\nflogs\nscums\ndopes\nbogie\npinky\nleafs\ntubas\nscads\nlowed\nyeses\nbiked\nqualm\nevens\ncaned\ngawks\nwhits\nwooly\ngluts\nromps\nbests\ndunce\ncrony\njoist\ntunas\nboner\nmalls\nparch\navers\ncrams\npares\ndally\nbigot\nkales\nflays\nleach\ngushy\npooch\nhuger\nslyer\ngolfs\nmires\nflues\nloafs\narced\nacnes\nneons\nfiefs\ndints\ndazes\npouts\ncored\nyules\nlilts\nbeefs\nmutts\nfells\ncowls\nspuds\nlames\njawed\ndupes\ndeads\nbylaw\nnoons\nnifty\nclued\nvireo\ngapes\nmetes\ncuter\nmaims\ndroll\ncupid\nmauls\nsedge\npapas\nwheys\neking\nloots\nhilts\nmeows\nbeaus\ndices\npeppy\nriper\nfogey\ngists\nyogas\ngilts\nskews\ncedes\nzeals\nalums\nokays\nelope\ngrump\nwafts\nsoots\nblimp\nhefts\nmulls\nhosed\ncress\ndoffs\nruder\npixie\nwaifs\nousts\npucks\nbiers\ngulch\nsuets\nhobos\nlints\nbrans\nteals\ngarbs\npewee\nhelms\nturfs\nquips\nwends\nbanes\nnapes\nicier\nswats\nbagel\nhexed\nogres\ngoner\ngilds\npyres\nlards\nbides\npaged\ntalon\nflout\nmedic\nveals\nputts\ndirks\ndotes\ntippy\nblurt\npiths\nacing\nbarer\nwhets\ngaits\nwools\ndunks\nheros\nswabs\ndirts\njutes\nhemps\nsurfs\nokapi\nchows\nshoos\ndusks\nparry\ndecal\nfurls\ncilia\nsears\nnovae\nmurks\nwarps\nslues\nlamer\nsaris\nweans\npurrs\ndills\ntogas\nnewts\nmeany\nbunts\nrazes\ngoons\nwicks\nruses\nvends\ngeode\ndrake\njudos\nlofts\npulps\nlauds\nmucks\nvises\nmocha\noiled\nroman\nethyl\ngotta\nfugue\nsmack\ngourd\nbumpy\nradix\nfatty\nborax\ncubit\ncacti\ngamma\nfocal\navail\npapal\ngolly\nelite\nversa\nbilly\nadieu\nannum\nhowdy\nrhino\nnorms\nbobby\naxiom\nsetup\nyolks\nterns\nmixer\ngenre\nknoll\nabode\njunta\ngorge\ncombo\nalpha\novert\nkinda\nspelt\nprick\nnobly\nephod\naudio\nmodal\nveldt\nwarty\nfluke\nbonny\nbream\nrosin\nbolls\ndoers\ndowns\nbeady\nmotif\nhumph\nfella\nmould\ncrepe\nkerns\naloha\nglyph\nazure\nriser\nblest\nlocus\nlumpy\nberyl\nwanna\nbrier\ntuner\nrowdy\nmural\ntimer\ncanst\nkrill\nquoth\nlemme\ntriad\ntenon\namply\ndeeps\npadre\nleant\npacer\noctal\ndolly\ntrans\nsumac\nfoamy\nlolly\ngiver\nquipu\ncodex\nmanna\nunwed\nvodka\nferny\nsalon\nduple\nboron\nrevue\ncrier\nalack\ninter\ndilly\nwhist\ncults\nspake\nreset\nloess\ndecor\nmover\nverve\nethic\ngamut\nlingo\ndunno\nalign\nsissy\nincur\nreedy\navant\npiper\nwaxer\ncalyx\nbasil\ncoons\nseine\npiney\nlemma\ntrams\nwinch\nwhirr\nsaith\nionic\nheady\nharem\ntummy\nsally\nshied\ndross\nfarad\nsaver\ntilde\njingo\nbower\nserif\nfacto\nbelle\ninset\nbogus\ncaved\nforte\nsooty\nbongo\ntoves\ncredo\nbasal\nyella\naglow\nglean\ngusto\nhymen\nethos\nterra\nbrash\nscrip\nswash\naleph\ntinny\nitchy\nwanta\ntrice\njowls\ngongs\ngarde\nboric\ntwill\nsower\nhenry\nawash\nlibel\nspurn\nsabre\nrebut\npenal\nobese\nsonny\nquirt\nmebbe\ntacit\ngreek\nxenon\nhullo\npique\nroger\nnegro\nhadst\ngecko\nbeget\nuncut\naloes\nlouis\nquint\nclunk\nraped\nsalvo\ndiode\nmatey\nhertz\nxylem\nkiosk\napace\ncawed\npeter\nwench\ncohos\nsorta\ngamba\nbytes\ntango\nnutty\naxial\naleck\nnatal\nclomp\ngored\nsiree\nbandy\ngunny\nrunic\nwhizz\nrupee\nfated\nwiper\nbards\nbriny\nstaid\nhocks\nochre\nyummy\ngents\nsoupy\nroper\nswath\ncameo\nedger\nspate\ngimme\nebbed\nbreve\ntheta\ndeems\ndykes\nservo\ntelly\ntabby\ntares\nblocs\nwelch\nghoul\nvitae\ncumin\ndinky\nbronc\ntabor\nteeny\ncomer\nborer\nsired\nprivy\nmammy\ndeary\ngyros\nsprit\nconga\nquire\nthugs\nfuror\nbloke\nrunes\nbawdy\ncadre\ntoxin\nannul\negged\nanion\nnodes\npicky\nstein\njello\naudit\nechos\nfagot\nletup\neyrie\nfount\ncaped\naxons\namuck\nbanal\nriled\npetit\number\nmiler\nfibre\nagave\nbated\nbilge\nvitro\nfeint\npudgy\nmater\nmanic\numped\npesky\nstrep\nslurp\npylon\npuree\ncaret\ntemps\nnewel\nyawns\nseedy\ntreed\ncoups\nrangy\nbrads\nmangy\nloner\ncirca\ntibia\nafoul\nmommy\ntiter\ncarne\nkooky\nmotes\namity\nsuave\nhippo\ncurvy\nsamba\nnewsy\nanise\nimams\ntulle\naways\nliven\nhallo\nwales\nopted\ncanto\nidyll\nbodes\ncurio\nwrack\nhiker\nchive\nyokel\ndotty\ndemur\ncusps\nspecs\nquads\nlaity\ntoner\ndecry\nwrits\nsaute\nclack\naught\nlogos\ntipsy\nnatty\nducal\nbidet\nbulgy\nmetre\nlusts\nunary\ngoeth\nbaler\nsited\nshies\nhasps\nbrung\nholed\nswank\nlooky\nmelee\nhuffy\nloamy\npimps\ntitan\nbinge\nshunt\nfemur\nlibra\nseder\nhoned\nannas\ncoypu\nshims\nzowie\njihad\nsavvy\nnadir\nbasso\nmonic\nmaned\nmousy\nomega\nlaver\nprima\npicas\nfolio\nmecca\nreals\ntroth\ntesty\nbalky\ncrimp\nchink\nabets\nsplat\nabaci\nvaunt\ncutie\npasty\nmoray\nlevis\nratty\nislet\njoust\nmotet\nviral\nnukes\ngrads\ncomfy\nvoila\nwoozy\nblued\nwhomp\nsward\nmetro\nskeet\nchine\naerie\nbowie\ntubby\nemirs\ncoati\nunzip\nslobs\ntrike\nfunky\nducat\ndewey\nskoal\nwadis\noomph\ntaker\nminim\ngetup\nstoic\nsynod\nrunty\nflyby\nbraze\ninlay\nvenue\nlouts\npeaty\norlon\nhumpy\nradon\nbeaut\nraspy\nunfed\ncrick\nnappy\nvizor\nyipes\nrebus\ndivot\nkiwis\nvetch\nsquib\nsitar\nkiddo\ndyers\ncotta\nmatzo\nlager\nzebus\ncrass\ndacha\nkneed\ndicta\nfakir\nknurl\nrunny\nunpin\njulep\nglobs\nnudes\nsushi\ntacky\nstoke\nkaput\nbutch\nhulas\ncroft\nachoo\ngenii\nnodal\noutgo\nspiel\nviols\nfetid\ncagey\nfudgy\nepoxy\nleggy\nhanky\nlapis\nfelon\nbeefy\ncoots\nmelba\ncaddy\nsegue\nbetel\nfrizz\ndrear\nkooks\nturbo\nhoagy\nmoult\nhelix\nzonal\narias\nnosey\npaean\nlacey\nbanns\nswain\nfryer\nretch\ntenet\ngigas\nwhiny\nogled\nrumen\nbegot\ncruse\nabuts\nriven\nbalks\nsines\nsigma\nabase\nennui\ngores\nunset\naugur\nsated\nodium\nlatin\ndings\nmoire\nscion\nhenna\nkraut\ndicks\nlifer\nprigs\nbebop\ngages\ngazer\nfanny\ngibes\naural\ntempi\nhooch\nrapes\nsnuck\nharts\ntechs\nemend\nninny\nguava\nscarp\nliege\ntufty\nsepia\ntomes\ncarob\nemcee\nprams\nposer\nverso\nhubba\njoule\nbaize\nblips\nscrim\ncubby\nclave\nwinos\nrearm\nliens\nlumen\nchump\nnanny\ntrump\nfichu\nchomp\nhomos\npurty\nmaser\nwoosh\npatsy\nshill\nrusks\navast\nswami\nboded\nahhhh\nlobed\nnatch\nshish\ntansy\nsnoot\npayer\naltho\nsappy\nlaxer\nhubby\naegis\nriles\nditto\njazzy\ndingo\nquasi\nsepta\npeaky\nlorry\nheerd\nbitty\npayee\nseamy\napses\nimbue\nbelie\nchary\nspoof\nphyla\nclime\nbabel\nwacky\nsumps\nskids\nkhans\ncrypt\ninure\nnonce\nouten\nfaire\nhooey\nanole\nkazoo\ncalve\nlimbo\nargot\nducky\nfaker\nvibes\ngassy\nunlit\nnervy\nfemme\nbiter\nfiche\nboors\ngaffe\nsaxes\nrecap\nsynch\nfacie\ndicey\nouija\nhewer\nlegit\ngurus\nedify\ntweak\ncaron\ntypos\nrerun\npolly\nsurds\nhamza\nnulls\nhater\nlefty\nmogul\nmafia\ndebug\npates\nblabs\nsplay\ntalus\nporno\nmoola\nnixed\nkilos\nsnide\nhorsy\ngesso\njaggy\ntrove\nnixes\ncreel\npater\niotas\ncadge\nskyed\nhokum\nfurze\nankhs\ncurie\nnutsy\nhilum\nremix\nangst\nburls\njimmy\nveiny\ntryst\ncodon\nbefog\ngamed\nflume\naxman\ndoozy\nlubes\nrheas\nbozos\nbutyl\nkelly\nmynah\njocks\ndonut\navian\nwurst\nchock\nquash\nquals\nhayed\nbombe\ncushy\nspacy\npuked\nleery\nthews\nprink\namens\ntesla\nintro\nfiver\nfrump\ncapos\nopine\ncoder\nnamer\njowly\npukes\nhaled\nchard\nduffs\nbruin\nreuse\nwhang\ntoons\nfrats\nsilty\ntelex\ncutup\nnisei\nneato\ndecaf\nsofty\nbimbo\nadlib\nloony\nshoed\nagues\npeeve\nnoway\ngamey\nsarge\nreran\nepact\npotty\nconed\nupend\nnarco\nikats\nwhorl\njinks\ntizzy\nweepy\nposit\nmarge\nvegan\nclops\nnumbs\nreeks\nrubes\nrower\nbiped\ntiffs\nhocus\nhammy\nbunco\nfixit\ntykes\nchaws\nyucky\nhokey\nresew\nmaven\nadman\nscuzz\nslogs\nsouse\nnacho\nmimed\nmelds\nboffo\ndebit\npinup\nvagus\ngulag\nrandy\nbosun\neduce\nfaxes\nauras\npesto\nantsy\nbetas\nfizzy\ndorky\nsnits\nmoxie\nthane\nmylar\nnobby\ngamin\ngouty\nesses\ngoyim\npaned\ndruid\njades\nrehab\ngofer\ntzars\noctet\nhomed\nsocko\ndorks\neared\nanted\nelide\nfazes\noxbow\ndowse\nsitus\nmacaw\nscone\ndrily\nhyper\nsalsa\nmooch\ngated\nunjam\nlipid\nmitre\nvenal\nknish\nritzy\ndivas\ntorus\nmange\ndimer\nrecut\nmeson\nwined\nfends\nphage\nfiats\ncaulk\ncavil\npanty\nroans\nbilks\nhones\nbotch\nestop\nsully\nsooth\ngelds\nahold\nraper\npager\nfixer\ninfix\nhicks\ntuxes\nplebe\ntwits\nabash\ntwixt\nwacko\nprimp\nnabla\ngirts\nmiffs\nemote\nxerox\nrebid\nshahs\nrutty\ngrout\ngrift\ndeify\nbiddy\nkopek\nsemis\nbries\nacmes\npiton\nhussy\ntorts\ndisco\nwhore\nboozy\ngibed\nvamps\namour\nsoppy\ngonzo\ndurst\nwader\ntutus\nperms\ncatty\nglitz\nbrigs\nnerds\nbarmy\ngizmo\nowlet\nsayer\nmolls\nshard\nwhops\ncomps\ncorer\ncolas\nmatte\ndroid\nploys\nvapid\ncairn\ndeism\nmixup\nyikes\nprosy\nraker\nflubs\nwhish\nreify\ncraps\nshags\nclone\nhazed\nmacho\nrecto\nrefix\ndrams\nbiker\naquas\nporky\ndoyen\nexude\ngoofs\ndivvy\nnoels\njived\nhulky\ncager\nharpy\noldie\nvivas\nadmix\ncodas\nzilch\ndeist\norcas\nretro\npilaf\nparse\nrants\nzingy\ntoddy\nchiff\nmicro\nveeps\ngirly\nnexus\ndemos\nbibbs\nantes\nlulus\ngnarl\nzippy\nivied\nepees\nwimps\ntromp\ngrail\nyoyos\npoufs\nhales\nroust\ncabal\nrawer\npampa\nmosey\nkefir\nburgs\nunmet\ncuspy\nboobs\nboons\nhypes\ndynes\nnards\nlanai\nyogis\nsepal\nquark\ntoked\nprate\nayins\nhawed\nswigs\nvitas\ntoker\ndoper\nbossa\nlinty\nfoist\nmondo\nstash\nkayos\ntwerp\nzesty\ncapon\nwimpy\nrewed\nfungo\ntarot\nfrosh\nkabob\npinko\nredid\nmimeo\nheist\ntarps\nlamas\nsutra\ndinar\nwhams\nbusty\nspays\nmambo\nnabob\npreps\nodour\ncabby\nconks\nsluff\ndados\nhouri\nswart\nbalms\ngutsy\nfaxed\negads\npushy\nretry\nagora\ndrubs\ndaffy\nchits\nmufti\nkarma\nlotto\ntoffs\nburps\ndeuce\nzings\nkappa\nclads\ndoggy\nduper\nscams\nogler\nmimes\nthroe\nzetas\nwaled\npromo\nblats\nmuffs\noinks\nviand\ncoset\nfinks\nfaddy\nminis\nsnafu\nsauna\nusury\nmuxes\ncraws\nstats\ncondo\ncoxes\nloopy\ndorms\nascot\ndippy\nexecs\ndopey\nenvoi\numpty\ngismo\nfazed\nstrop\njives\nslims\nbatik\npings\nsonly\nleggo\npekoe\nprawn\nluaus\ncampy\noodle\nprexy\nproms\ntouts\nogles\ntweet\ntoady\nnaiad\nhider\nnuked\nfatso\nsluts\nobits\nnarcs\ntyros\ndelis\nwooer\nhyped\nposet\nbyway\ntexas\nscrod\navows\nfuton\ntorte\ntuple\ncarom\nkebab\ntamps\njilts\nduals\nartsy\nrepro\nmodem\ntoped\npsych\nsicko\nklutz\ntarns\ncoxed\ndrays\ncloys\nanded\npiker\naimer\nsuras\nlimos\nflack\nhapax\ndutch\nmucky\nshire\nklieg\nstaph\nlayup\ntokes\naxing\ntoper\nduvet\ncowry\nprofs\nblahs\naddle\nsudsy\nbatty\ncoifs\nsuety\ngabby\nhafta\npitas\ngouda\ndeice\ntaupe\ntopes\nduchy\nnitro\ncarny\nlimey\norals\nhirer\ntaxer\nroils\nruble\nelate\ndolor\nwryer\nsnots\nquais\ncoked\ngimel\ngorse\nminas\ngoest\nagape\nmanta\njings\niliac\nadmen\noffen\ncills\noffal\nlotta\nbolas\nthwap\nalway\nboggy\ndonna\nlocos\nbelay\ngluey\nbitsy\nmimsy\nhilar\noutta\nvroom\nfetal\nraths\nrenal\ndyads\ncrocs\nvires\nculpa\nkivas\nfeist\nteats\nthats\nyawls\nwhens\nabaca\nohhhh\naphis\nfusty\neclat\nperdu\nmayst\nexeat\nmolly\nsupra\nwetly\nplasm\nbuffa\nsemen\npukka\ntagua\nparas\nstoat\nsecco\ncarte\nhaute\nmolal\nshads\nforma\novoid\npions\nmodus\nbueno\nrheum\nscurf\nparer\nephah\ndoest\nsprue\nflams\nmolto\ndieth\nchoos\nmiked\nbronx\ngoopy\nbally\nplumy\nmoony\nmorts\nyourn\nbipod\nspume\nalgal\nambit\nmucho\nspued\ndozer\nharum\ngroat\nskint\nlaude\nthrum\npappy\noncet\nrimed\ngigue\nlimed\nplein\nredly\nhumpf\nlites\nseest\ngrebe\nabsit\nthanx\npshaw\nyawps\nplats\npayed\nareal\ntilth\nyouse\ngwine\nthees\nwatsa\nlento\nspitz\nyawed\ngipsy\nsprat\ncornu\namahs\nblowy\nwahoo\nlubra\nmecum\nwhooo\ncoqui\nsabra\nedema\nmrads\ndicot\nastro\nkited\nouzel\ndidos\ngrata\nbonne\naxmen\nklunk\nsumma\nlaves\npurls\nyawny\nteary\nmasse\nlargo\nbazar\npssst\nsylph\nlulab\ntoque\nfugit\nplunk\northo\nlucre\ncooch\nwhipt\nfolky\ntyres\nwheee\ncorky\ninjun\nsolon\ndidot\nkerfs\nrayed\nwassa\nchile\nbegat\nnippy\nlitre\nmagna\nrebox\nhydro\nmilch\nbrent\ngyves\nlazed\nfeued\nmavis\ninapt\nbaulk\ncasus\nscrum\nwised\nfossa\ndower\nkyrie\nbhoys\nscuse\nfeuar\nohmic\njuste\nukase\nbeaux\ntusky\norate\nmusta\nlardy\nintra\nquiff\nepsom\nneath\nocher\ntared\nhomme\nmezzo\ncorms\npsoas\nbeaky\nterry\ninfra\nspivs\ntuans\nbelli\nbergs\nanima\nweirs\nmahua\nscops\nmanse\ntitre\ncuria\nkebob\ncycad\ntalky\nfucks\ntapis\namide\ndolce\nsloes\njakes\nrusse\nblash\ntutti\npruta\npanga\nblebs\ntench\nswarf\nherem\nmissy\nmerse\npawky\nlimen\nvivre\nchert\nunsee\ntiros\nbrack\nfoots\nwelsh\nfosse\nknops\nileum\nnoire\nfirma\npodgy\nlaird\nthunk\nshute\nrowan\nshoji\npoesy\nuncap\nfames\nglees\ncosta\nturps\nfores\nsolum\nimago\nbyres\nfondu\nconey\npolis\ndictu\nkraal\nsherd\nmumbo\nwroth\nchars\nunbox\nvacuo\nslued\nweest\nhades\nwiled\nsyncs\nmuser\nexcon\nhoars\nsibyl\npasse\njoeys\nlotsa\nlepta\nshays\nbocks\nendue\ndarer\nnones\nileus\nplash\nbusby\nwheal\nbuffo\nyobbo\nbiles\npoxes\nrooty\nlicit\nterce\nbromo\nhayey\ndweeb\nimbed\nsaran\nbruit\npunky\nsofts\nbiffs\nloppy\nagars\naquae\nlivre\nbiome\nbunds\nshews\ndiems\nginny\ndegum\npolos\ndesex\nunman\ndungy\nvitam\nwedgy\nglebe\napers\nridgy\nroids\nwifey\nvapes\nwhoas\nbunko\nyolky\nulnas\nreeky\nbodge\nbrant\ndavit\ndeque\nliker\njenny\ntacts\nfulls\ntreap\nligne\nacked\nrefry\nvower\naargh\nchurl\nmomma\ngaols\nwhump\narras\nmarls\ntiler\ngrogs\nmemes\nmidis\ntided\nhaler\nduces\ntwiny\nposte\nunrig\nprise\ndrabs\nquids\nfacer\nspier\nbaric\ngeoid\nremap\ntrier\ngunks\nsteno\nstoma\nairer\novate\ntorah\napian\nsmuts\npocks\nyurts\nexurb\ndefog\nnuder\nbosky\nnimbi\nmothy\njoyed\nlabia\npards\njammy\nbigly\nfaxer\nhoppy\nnurbs\ncotes\ndishy\nvised\nceleb\npismo\ncasas\nwiths\ndodgy\nscudi\nmungs\nmuons\nureas\nioctl\nunhip\nkrone\nsager\nverst\nexpat\ngronk\nuvula\nshawm\nbilgy\nbraes\ncento\nwebby\nlippy\ngamic\nlordy\nmazed\ntings\nshoat\nfaery\nwirer\ndiazo\ncarer\nrater\ngreps\nrente\nzloty\nviers\nunapt\npoops\nfecal\nkepis\ntaxon\neyers\nwonts\nspina\nstoae\nyenta\npooey\nburet\njapan\nbedew\nhafts\nselfs\noared\nherby\npryer\noakum\ndinks\ntitty\nsepoy\npenes\nfusee\nwiney\ngimps\nnihil\nrille\ngiber\nousel\numiak\ncuppy\nhames\nshits\nazine\nglads\ntacet\nbumph\ncoyer\nhonky\ngamer\ngooky\nwaspy\nsedgy\nbents\nvaria\ndjinn\njunco\npubic\nwilco\nlazes\nidyls\nlupus\nrives\nsnood\nschmo\nspazz\nfinis\nnoter\npavan\norbed\nbates\npipet\nbaddy\ngoers\nshako\nstets\nsebum\nseeth\nlobar\nraver\najuga\nriced\nvelds\ndribs\nville\ndhows\nunsew\nhalma\nkrona\nlimby\njiffs\ntreys\nbauds\npffft\nmimer\nplebs\ncaner\njiber\ncuppa\nwashy\nchuff\nunarm\nyukky\nstyes\nwaker\nflaks\nmaces\nrimes\ngimpy\nguano\nliras\nkapok\nscuds\nbwana\noring\naider\nprier\nklugy\nmonte\ngolem\nvelar\nfirer\npieta\numbel\ncampo\nunpeg\nfovea\nabeam\nboson\nasker\ngoths\nvocab\nvined\ntrows\ntikis\nloper\nindie\nboffs\nspang\ngrapy\ntater\nichor\nkilty\nlochs\nsupes\ndegas\nflics\ntorsi\nbeths\nweber\nresaw\nlawny\ncoven\nmujik\nrelet\ntherm\nheigh\nshnor\ntrued\nzayin\nliest\nbarfs\nbassi\nqophs\nroily\nflabs\npunny\nokras\nhanks\ndipso\nnerfs\nfauns\ncalla\npseud\nlurer\nmagus\nobeah\natria\ntwink\npalmy\npocky\npends\nrecta\nplonk\nslaws\nkeens\nnicad\npones\ninker\nwhews\ngroks\nmosts\ntrews\nulnar\ngyppy\ncocas\nexpos\neruct\noiler\nvacua\ndreck\ndater\narums\ntubal\nvoxel\ndixit\nbeery\nassai\nlades\nactin\nghoti\nbuzzy\nmeads\ngrody\nribby\nclews\ncreme\nemail\npyxie\nkulak\nbocci\nrived\nduddy\nhoper\nlapin\nwonks\npetri\nphial\nfugal\nholon\nboomy\nduomo\nmusos\nshier\nhayer\nporgy\nhived\nlitho\nfisty\nstagy\nluvya\nmaria\nsmogs\nasana\nyogic\nslomo\nfawny\namine\nwefts\ngonad\ntwirp\nbrava\nplyer\nfermi\nloges\nniter\nrevet\nunate\ngyved\ntotty\nzappy\nhoner\ngiros\ndicer\ncalks\nluxes\nmonad\ncruft\nquoin\nfumer\namped\nshlep\nvinca\nyahoo\nvulva\nzooey\ndryad\nnixie\nmoper\niambs\nlunes\nnudie\nlimns\nweals\nnohow\nmiaow\ngouts\nmynas\nmazer\nkikes\noxeye\nstoup\njujus\ndebar\npubes\ntaels\ndefun\nrands\nblear\npaver\ngoosy\nsprog\noleos\ntoffy\npawer\nmaced\ncrits\nkluge\ntubed\nsahib\nganef\nscats\nsputa\nvaned\nacned\ntaxol\nplink\noweth\ntribs\nresay\nboule\nthous\nhaply\nglans\nmaxis\nbezel\nantis\nporks\nquoit\nalkyd\nglary\nbeamy\nhexad\nbonks\ntecum\nkerbs\nfilar\nfrier\nredux\nabuzz\nfader\nshoer\ncouth\ntrues\nguyed\ngoony\nbooky\nfuzes\nhurly\ngenet\nhodad\ncalix\nfiler\npawls\niodic\nutero\nhenge\nunsay\nliers\npiing\nweald\nsexed\nfolic\npoxed\ncunts\nanile\nkiths\nbecks\ntatty\nplena\nrebar\nabled\ntoyer\nattar\nteaks\naioli\nawing\nanent\nfeces\nredip\nwists\nprats\nmesne\nmuter\nsmurf\nowest\nbahts\nlossy\nftped\nhunky\nhoers\nslier\nsicks\nfatly\ndelft\nhiver\nhimbo\npengo\nbusks\nloxes\nzonks\nilium\naport\nikons\nmulct\nreeve\ncivvy\ncanna\nbarfy\nkaiak\nscudo\nknout\ngaper\nbhang\npease\nuteri\nlases\npaten\nrasae\naxels\nstoas\nombre\nstyli\ngunky\nhazer\nkenaf\nahoys\nammos\nweeny\nurger\nkudzu\nparen\nbolos\nfetor\nnitty\ntechy\nlieth\nsomas\ndarky\nvilli\ngluon\njanes\ncants\nfarts\nsocle\njinns\nruing\nslily\nricer\nhadda\nwowee\nrices\nnerts\ncauls\nswive\nlilty\nmicks\narity\npasha\nfinif\noinky\ngutty\ntetra\nwises\nwolds\nbalds\npicot\nwhats\nshiki\nbungs\nsnarf\nlegos\ndungs\nstogy\nberms\ntangs\nvails\nroods\nmorel\nsware\nelans\nlatus\ngules\nrazer\ndoxie\nbuena\novers\ngutta\nzincs\nnates\nkirks\ntikes\ndonee\njerry\nmohel\nceder\ndoges\nunmap\nfolia\nrawly\nsnark\ntopoi\nceils\nimmix\nyores\ndiest\nbubba\npomps\nforky\nturdy\nlawzy\npoohs\nworts\ngloms\nbeano\nmuley\nbarky\ntunny\nauric\nfunks\ngaffs\ncordy\ncurdy\nlisle\ntoric\nsoyas\nreman\nmungy\ncarpy\napish\noaten\ngappy\naurae\nbract\nrooky\naxled\nburry\nsizer\nproem\nturfy\nimpro\nmashy\nmiens\nnonny\nolios\ngrook\nsates\nagley\ncorgi\ndashy\ndoser\ndildo\napsos\nxored\nlaker\nplaya\nselah\nmalty\ndulse\nfrigs\ndemit\nwhoso\nrials\nsawer\nspics\nbedim\nsnugs\nfanin\nazoic\nicers\nsuers\nwizen\nkoine\ntopos\nshirr\nrifer\nferal\nladed\nlased\nturds\nswede\neasts\ncozen\nunhit\npally\naitch\nsedum\ncoper\nruche\ngeeks\nswags\netext\nalgin\noffed\nninja\nholer\ndoter\ntoter\nbesot\ndicut\nmacer\npeens\npewit\nredox\npoler\nyecch\nfluky\ndoeth\ntwats\ncruds\nbebug\nbider\nstele\nhexer\nwests\ngluer\npilau\nabaft\nwhelm\nlacer\ninode\ntabus\ngator\ncuing\nrefly\nluted\ncukes\nbairn\nbight\narses\ncrump\nloggy\nblini\nspoor\ntoyon\nharks\nwazoo\nfenny\nnaves\nkeyer\ntufas\nmorph\nrajas\ntypal\nspiff\noxlip\nunban\nmussy\nfinny\nrimer\nlogin\nmolas\ncirri\nhuzza\nagone\nunsex\nunwon\npeats\ntoile\nzombi\ndewed\nnooky\nalkyl\nixnay\ndovey\nholey\ncuber\namyls\npodia\nchino\napnea\nprims\nlycra\njohns\nprimo\nfatwa\negger\nhempy\nsnook\nhying\nfuzed\nbarms\ncrink\nmoots\nyerba\nrhumb\nunarc\ndirer\nmunge\neland\nnares\nwrier\nnoddy\natilt\njukes\nender\nthens\nunfix\ndoggo\nzooks\ndiddy\nshmoo\nbrusk\nprest\ncurer\npasts\nkelpy\nbocce\nkicky\ntaros\nlings\ndicky\nnerdy\nabend\nstela\nbiggy\nlaved\nbaldy\npubis\ngooks\nwonky\nstied\nhypos\nassed\nspumy\nosier\nroble\nrumba\nbiffy\npupal");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/Grid.js":
/*!*****************************!*\
  !*** ./src/modules/Grid.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Grid)
/* harmony export */ });
/* harmony import */ var _data_words_txt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/words.txt */ "./src/modules/data/words.txt");


class Grid{

    constructor(){
        this.gridData = [[],[],[],[],[]]
        this.colourData = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
        this.row = 0;
        this.cell = 0;
        this.word = this.setWord();
    }

    setWord(){
        let wordsList = _data_words_txt__WEBPACK_IMPORTED_MODULE_0__["default"].split('\n')
        const word = wordsList[Math.floor(Math.random() * wordsList.length)];
        return word.toUpperCase();
    }

    getGridData(){
        return this.gridData;
    }

    getRow(){
        return this.row;
    }

    getCell(){
        return this.cell;
    }

    getCurrentWord(){
        return this.gridData[this.row].join('').toLowerCase()
    }

    nextRow(){
        this.row ++;
    }

    nextCell(){
        this.cell ++;
    }

    addLetter(letter){
        if(this.cell<5){
            this.gridData[this.row][this.cell] = letter;
            this.nextCell();
        }
    }

    removeLetter(){
        this.gridData[this.row][this.cell -1] = "";
        if(this.cell>0){
            this.cell --;
        }
    }

    submitWord(){
        let colourData = []
        for(let i = 0; i < 5; i++){
            if(this.checkLetter(this.gridData[this.row][i]) && this.checkPosition(i)){
                colourData.push(2);
            }
            else if (this.checkLetter(this.gridData[this.row][i])){
                colourData.push(1);
            }
            else{
                colourData.push(0);
            }

        }
        this.nextRow();
        this.cell = 0;
        return colourData;
    }

    checkLetter(letter){
        return this.word.indexOf(letter) > -1;
    }

    checkPosition(pos){
        return (this.word[pos]==this.gridData[this.row][pos])
    }

}

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UI)
/* harmony export */ });
class UI{

    static resetGrid(){
        const content = document.querySelector('.content');
        const grid = document.querySelector('.grid');
        content.removeChild(grid);
    }

    static displayGrid(data, colourData){
        const content = document.querySelector('.content');
        const grid = document.createElement('div');
        grid.classList.add('grid');
        for(let i = 0; i < 5; i ++){
            const row = document.createElement('div');
            row.classList.add('row')
            for(let j = 0; j < 5; j ++){
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.textContent = data[i][j];
                row.appendChild(cell);
            }
            grid.appendChild(row);
        }
        content.appendChild(grid);
        this.addColour(colourData)
    }

    static addColour(colourData){
        const cells = document.querySelectorAll('.cell');
        for(let i = 0; i < 5; i++){
            for(let j = 0; j < 5; j++){
                const cell = cells[(i*5)+j];
                if(colourData[i][j]==2){
                    cell.setAttribute('id', 'pos')
                }
                else if(colourData[i][j]==1){
                    cell.setAttribute('id', 'letter')
                }
            }
        }
    }
}

/***/ }),

/***/ "./src/modules/controller.js":
/*!***********************************!*\
  !*** ./src/modules/controller.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ controller)
/* harmony export */ });
/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI.js */ "./src/modules/UI.js");
/* harmony import */ var _Grid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Grid.js */ "./src/modules/Grid.js");
/* harmony import */ var _data_words_txt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/words.txt */ "./src/modules/data/words.txt");




class controller{

    static initLoad(){
        let grid = new _Grid_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
        _UI_js__WEBPACK_IMPORTED_MODULE_0__["default"].displayGrid(grid.getGridData(), grid.colourData);
        this.addKeyboardListener(grid);
    }

    static addKeyboardListener(grid){
        document.addEventListener('keydown', (event) => {
            if(this.isLetter(event.key)){
                this.addLetter(grid, event.key);
            }
            else if(event.key == 'Backspace'){
                grid.removeLetter();
                this.refreshGrid(grid)
            }
            else if (event.key == 'Enter'){
                if(grid.cell==5){
                    if(this.isWord(grid.getCurrentWord())){
                        let rowColours = grid.submitWord();
                        grid.colourData[grid.row-1] = rowColours;
                        this.refreshGrid(grid)
                    }
                    else{
                        alert('Invalid word...')
                    }
                }
                else{
                    // animation
                }
            }
        })
    }

    static addLetter(grid, letter){
        grid.addLetter(letter.toUpperCase());
        this.refreshGrid(grid)
    }

    static refreshGrid(grid){
        _UI_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetGrid();
        _UI_js__WEBPACK_IMPORTED_MODULE_0__["default"].displayGrid(grid.getGridData(), grid.colourData);
    }

    static isLetter(c){
        return c.length === 1 && c.match(/[a-z]/i);
    }

    static isWord(word){
        let wordsList = _data_words_txt__WEBPACK_IMPORTED_MODULE_2__["default"].split('\n')
        for(let i = 0; i < wordsList.length; i++){
            if(word==wordsList[i]){
                return true
            }
        }
        return false
    }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _modules_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/controller.js */ "./src/modules/controller.js");



_modules_controller_js__WEBPACK_IMPORTED_MODULE_1__["default"].initLoad();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsK0NBQStDLDhCQUE4QixHQUFHLE9BQU8seUJBQXlCLG1CQUFtQixHQUFHLFVBQVUsb0JBQW9CLDZCQUE2QiwwQkFBMEIsR0FBRyxTQUFTLG9CQUFvQixHQUFHLFVBQVUsbURBQW1ELG1CQUFtQix1REFBdUQsc0JBQXNCLHdCQUF3QixvQkFBb0IsMkNBQTJDLGtCQUFrQixtQkFBbUIsOEJBQThCLDBCQUEwQixHQUFHLFlBQVksa0RBQWtELEdBQUcsU0FBUywwQ0FBMEMsR0FBRyxPQUFPLGlGQUFpRixZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksK0JBQStCLDhCQUE4QixHQUFHLE9BQU8seUJBQXlCLG1CQUFtQixHQUFHLFVBQVUsb0JBQW9CLDZCQUE2QiwwQkFBMEIsR0FBRyxTQUFTLG9CQUFvQixHQUFHLFVBQVUsbURBQW1ELG1CQUFtQix1REFBdUQsc0JBQXNCLHdCQUF3QixvQkFBb0IsMkNBQTJDLGtCQUFrQixtQkFBbUIsOEJBQThCLDBCQUEwQixHQUFHLFlBQVksa0RBQWtELEdBQUcsU0FBUywwQ0FBMEMsR0FBRyxtQkFBbUI7QUFDNXhEO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDZkEsaUVBQWUsMjJ1Q0FBMjJ1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0MxM3VDLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW9HO0FBQ3BHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsdUZBQU87Ozs7QUFJOEM7QUFDdEUsT0FBTyxpRUFBZSx1RkFBTyxJQUFJLDhGQUFjLEdBQUcsOEZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNmb0M7O0FBRXJCOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLDZEQUFXO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ25GZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUI7QUFDQTtBQUNBLDJCQUEyQixPQUFPO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTztBQUM5QiwyQkFBMkIsT0FBTztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDeUI7QUFDSTtBQUNPOztBQUVyQjs7QUFFZjtBQUNBLHVCQUF1QixnREFBSTtBQUMzQixRQUFRLDBEQUFjO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSx3REFBWTtBQUNwQixRQUFRLDBEQUFjO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3Qiw2REFBVztBQUNuQyx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUM5REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDMkI7O0FBRWhELHVFQUFtQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd29yZGxlLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vd29yZGxlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93b3JkbGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93b3JkbGUvLi9zcmMvbW9kdWxlcy9kYXRhL3dvcmRzLnR4dCIsIndlYnBhY2s6Ly93b3JkbGUvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3dvcmRsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93b3JkbGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dvcmRsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93b3JkbGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd29yZGxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd29yZGxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd29yZGxlLy4vc3JjL21vZHVsZXMvR3JpZC5qcyIsIndlYnBhY2s6Ly93b3JkbGUvLi9zcmMvbW9kdWxlcy9VSS5qcyIsIndlYnBhY2s6Ly93b3JkbGUvLi9zcmMvbW9kdWxlcy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL3dvcmRsZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93b3JkbGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd29yZGxlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93b3JkbGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93b3JkbGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93b3JkbGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dvcmRsZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5oMXtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5ncmlke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucm93e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uY2VsbHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTAsIDE5MCwgMTkwLCAwLjgyOSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXI6IHNvbGlkIHJnYigyMDEsIDIwMSwgMjAxKSAycHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbGV0dGVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTg4LCA0NiwgMC44NDIpO1xcbn1cXG5cXG4jcG9ze1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMwLCAxOTAsIDM5KTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDRDQUE0QztJQUM1QyxZQUFZO0lBQ1osZ0RBQWdEO0lBQ2hELGVBQWU7SUFDZixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbmgxe1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmdyaWR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yb3d7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5jZWxse1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5MCwgMTkwLCAxOTAsIDAuODI5KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlcjogc29saWQgcmdiKDIwMSwgMjAxLCAyMDEpIDJweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNsZXR0ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxODgsIDQ2LCAwLjg0Mik7XFxufVxcblxcbiNwb3N7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzAsIDE5MCwgMzkpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IFwid2hpY2hcXG50aGVyZVxcbnRoZWlyXFxuYWJvdXRcXG53b3VsZFxcbnRoZXNlXFxub3RoZXJcXG53b3Jkc1xcbmNvdWxkXFxud3JpdGVcXG5maXJzdFxcbndhdGVyXFxuYWZ0ZXJcXG53aGVyZVxcbnJpZ2h0XFxudGhpbmtcXG50aHJlZVxcbnllYXJzXFxucGxhY2VcXG5zb3VuZFxcbmdyZWF0XFxuYWdhaW5cXG5zdGlsbFxcbmV2ZXJ5XFxuc21hbGxcXG5mb3VuZFxcbnRob3NlXFxubmV2ZXJcXG51bmRlclxcbm1pZ2h0XFxud2hpbGVcXG5ob3VzZVxcbndvcmxkXFxuYmVsb3dcXG5hc2tlZFxcbmdvaW5nXFxubGFyZ2VcXG51bnRpbFxcbmFsb25nXFxuc2hhbGxcXG5iZWluZ1xcbm9mdGVuXFxuZWFydGhcXG5iZWdhblxcbnNpbmNlXFxuc3R1ZHlcXG5uaWdodFxcbmxpZ2h0XFxuYWJvdmVcXG5wYXBlclxcbnBhcnRzXFxueW91bmdcXG5zdG9yeVxcbnBvaW50XFxudGltZXNcXG5oZWFyZFxcbndob2xlXFxud2hpdGVcXG5naXZlblxcbm1lYW5zXFxubXVzaWNcXG5taWxlc1xcbnRoaW5nXFxudG9kYXlcXG5sYXRlclxcbnVzaW5nXFxubW9uZXlcXG5saW5lc1xcbm9yZGVyXFxuZ3JvdXBcXG5hbW9uZ1xcbmxlYXJuXFxua25vd25cXG5zcGFjZVxcbnRhYmxlXFxuZWFybHlcXG50cmVlc1xcbnNob3J0XFxuaGFuZHNcXG5zdGF0ZVxcbmJsYWNrXFxuc2hvd25cXG5zdG9vZFxcbmZyb250XFxudm9pY2VcXG5raW5kc1xcbm1ha2VzXFxuY29tZXNcXG5jbG9zZVxcbnBvd2VyXFxubGl2ZWRcXG52b3dlbFxcbnRha2VuXFxuYnVpbHRcXG5oZWFydFxcbnJlYWR5XFxucXVpdGVcXG5jbGFzc1xcbmJyaW5nXFxucm91bmRcXG5ob3JzZVxcbnNob3dzXFxucGllY2VcXG5ncmVlblxcbnN0YW5kXFxuYmlyZHNcXG5zdGFydFxcbnJpdmVyXFxudHJpZWRcXG5sZWFzdFxcbmZpZWxkXFxud2hvc2VcXG5naXJsc1xcbmxlYXZlXFxuYWRkZWRcXG5jb2xvclxcbnRoaXJkXFxuaG91cnNcXG5tb3ZlZFxcbnBsYW50XFxuZG9pbmdcXG5uYW1lc1xcbmZvcm1zXFxuaGVhdnlcXG5pZGVhc1xcbmNyaWVkXFxuY2hlY2tcXG5mbG9vclxcbmJlZ2luXFxud29tYW5cXG5hbG9uZVxcbnBsYW5lXFxuc3BlbGxcXG53YXRjaFxcbmNhcnJ5XFxud3JvdGVcXG5jbGVhclxcbm5hbWVkXFxuYm9va3NcXG5jaGlsZFxcbmdsYXNzXFxuaHVtYW5cXG50YWtlc1xcbnBhcnR5XFxuYnVpbGRcXG5zZWVtc1xcbmJsb29kXFxuc2lkZXNcXG5zZXZlblxcbm1vdXRoXFxuc29sdmVcXG5ub3J0aFxcbnZhbHVlXFxuZGVhdGhcXG5tYXliZVxcbmhhcHB5XFxudGVsbHNcXG5naXZlc1xcbmxvb2tzXFxuc2hhcGVcXG5saXZlc1xcbnN0ZXBzXFxuYXJlYXNcXG5zZW5zZVxcbnNwZWFrXFxuZm9yY2VcXG5vY2VhblxcbnNwZWVkXFxud29tZW5cXG5tZXRhbFxcbnNvdXRoXFxuZ3Jhc3NcXG5zY2FsZVxcbmNlbGxzXFxubG93ZXJcXG5zbGVlcFxcbndyb25nXFxucGFnZXNcXG5zaGlwc1xcbm5lZWRzXFxucm9ja3NcXG5laWdodFxcbm1ham9yXFxubGV2ZWxcXG50b3RhbFxcbmFoZWFkXFxucmVhY2hcXG5zdGFyc1xcbnN0b3JlXFxuc2lnaHRcXG50ZXJtc1xcbmNhdGNoXFxud29ya3NcXG5ib2FyZFxcbmNvdmVyXFxuc29uZ3NcXG5lcXVhbFxcbnN0b25lXFxud2F2ZXNcXG5ndWVzc1xcbmRhbmNlXFxuc3Bva2VcXG5icmVha1xcbmNhdXNlXFxucmFkaW9cXG53ZWVrc1xcbmxhbmRzXFxuYmFzaWNcXG5saWtlZFxcbnRyYWRlXFxuZnJlc2hcXG5maW5hbFxcbmZpZ2h0XFxubWVhbnRcXG5kcml2ZVxcbnNwZW50XFxubG9jYWxcXG53YXhlc1xcbmtub3dzXFxudHJhaW5cXG5icmVhZFxcbmhvbWVzXFxudGVldGhcXG5jb2FzdFxcbnRoaWNrXFxuYnJvd25cXG5jbGVhblxcbnF1aWV0XFxuc3VnYXJcXG5mYWN0c1xcbnN0ZWVsXFxuZm9ydGhcXG5ydWxlc1xcbm5vdGVzXFxudW5pdHNcXG5wZWFjZVxcbm1vbnRoXFxudmVyYnNcXG5zZWVkc1xcbmhlbHBzXFxuc2hhcnBcXG52aXNpdFxcbndvb2RzXFxuY2hpZWZcXG53YWxsc1xcbmNyb3NzXFxud2luZ3NcXG5ncm93blxcbmNhc2VzXFxuZm9vZHNcXG5jcm9wc1xcbmZydWl0XFxuc3RpY2tcXG53YW50c1xcbnN0YWdlXFxuc2hlZXBcXG5ub3Vuc1xcbnBsYWluXFxuZHJpbmtcXG5ib25lc1xcbmFwYXJ0XFxudHVybnNcXG5tb3Zlc1xcbnRvdWNoXFxuYW5nbGVcXG5iYXNlZFxcbnJhbmdlXFxubWFya3NcXG50aXJlZFxcbm9sZGVyXFxuZmFybXNcXG5zcGVuZFxcbnNob2VzXFxuZ29vZHNcXG5jaGFpclxcbnR3aWNlXFxuY2VudHNcXG5lbXB0eVxcbmFsaWtlXFxuc3R5bGVcXG5icm9rZVxcbnBhaXJzXFxuY291bnRcXG5lbmpveVxcbnNjb3JlXFxuc2hvcmVcXG5yb290c1xcbnBhaW50XFxuaGVhZHNcXG5zaG9va1xcbnNlcnZlXFxuYW5ncnlcXG5jcm93ZFxcbndoZWVsXFxucXVpY2tcXG5kcmVzc1xcbnNoYXJlXFxuYWxpdmVcXG5ub2lzZVxcbnNvbGlkXFxuY2xvdGhcXG5zaWduc1xcbmhpbGxzXFxudHlwZXNcXG5kcmF3blxcbndvcnRoXFxudHJ1Y2tcXG5waWFub1xcbnVwcGVyXFxubG92ZWRcXG51c3VhbFxcbmZhY2VzXFxuZHJvdmVcXG5jYWJpblxcbmJvYXRzXFxudG93bnNcXG5wcm91ZFxcbmNvdXJ0XFxubW9kZWxcXG5wcmltZVxcbmZpZnR5XFxucGxhbnNcXG55YXJkc1xcbnByb3ZlXFxudG9vbHNcXG5wcmljZVxcbnNoZWV0XFxuc21lbGxcXG5ib3hlc1xcbnJhaXNlXFxubWF0Y2hcXG50cnV0aFxcbnJvYWRzXFxudGhyZXdcXG5lbmVteVxcbmx1bmNoXFxuY2hhcnRcXG5zY2VuZVxcbmdyYXBoXFxuZG91YnRcXG5ndWlkZVxcbndpbmRzXFxuYmxvY2tcXG5ncmFpblxcbnNtb2tlXFxubWl4ZWRcXG5nYW1lc1xcbndhZ29uXFxuc3dlZXRcXG50b3BpY1xcbmV4dHJhXFxucGxhdGVcXG50aXRsZVxcbmtuaWZlXFxuZmVuY2VcXG5mYWxsc1xcbmNsb3VkXFxud2hlYXRcXG5wbGF5c1xcbmVudGVyXFxuYnJvYWRcXG5zdGVhbVxcbmF0b21zXFxucHJlc3NcXG5seWluZ1xcbmJhc2lzXFxuY2xvY2tcXG50YXN0ZVxcbmdyb3dzXFxudGhhbmtcXG5zdG9ybVxcbmFncmVlXFxuYnJhaW5cXG50cmFja1xcbnNtaWxlXFxuZnVubnlcXG5iZWFjaFxcbnN0b2NrXFxuaHVycnlcXG5zYXZlZFxcbnNvcnJ5XFxuZ2lhbnRcXG50cmFpbFxcbm9mZmVyXFxub3VnaHRcXG5yb3VnaFxcbmRhaWx5XFxuYXZvaWRcXG5rZWVwc1xcbnRocm93XFxuYWxsb3dcXG5jcmVhbVxcbmxhdWdoXFxuZWRnZXNcXG50ZWFjaFxcbmZyYW1lXFxuYmVsbHNcXG5kcmVhbVxcbm1hZ2ljXFxub2NjdXJcXG5lbmRlZFxcbmNob3JkXFxuZmFsc2VcXG5za2lsbFxcbmhvbGVzXFxuZG96ZW5cXG5icmF2ZVxcbmFwcGxlXFxuY2xpbWJcXG5vdXRlclxcbnBpdGNoXFxucnVsZXJcXG5ob2xkc1xcbmZpeGVkXFxuY29zdHNcXG5jYWxsc1xcbmJsYW5rXFxuc3RhZmZcXG5sYWJvclxcbmVhdGVuXFxueW91dGhcXG50b25lc1xcbmhvbm9yXFxuZ2xvYmVcXG5nYXNlc1xcbmRvb3JzXFxucG9sZXNcXG5sb29zZVxcbmFwcGx5XFxudGVhcnNcXG5leGFjdFxcbmJydXNoXFxuY2hlc3RcXG5sYXllclxcbndoYWxlXFxubWlub3JcXG5mYWl0aFxcbnRlc3RzXFxuanVkZ2VcXG5pdGVtc1xcbndvcnJ5XFxud2FzdGVcXG5ob3BlZFxcbnN0cmlwXFxuYmVndW5cXG5hc2lkZVxcbmxha2VzXFxuYm91bmRcXG5kZXB0aFxcbmNhbmR5XFxuZXZlbnRcXG53b3JzZVxcbmF3YXJlXFxuc2hlbGxcXG5yb29tc1xcbnJhbmNoXFxuaW1hZ2VcXG5zbmFrZVxcbmFsb3VkXFxuZHJpZWRcXG5saWtlc1xcbm1vdG9yXFxucG91bmRcXG5rbmVlc1xcbnJlZmVyXFxuZnVsbHlcXG5jaGFpblxcbnNoaXJ0XFxuZmxvdXJcXG5kcm9wc1xcbnNwaXRlXFxub3JiaXRcXG5iYW5rc1xcbnNob290XFxuY3VydmVcXG50cmliZVxcbnRpZ2h0XFxuYmxpbmRcXG5zbGVwdFxcbnNoYWRlXFxuY2xhaW1cXG5mbGllc1xcbnRoZW1lXFxucXVlZW5cXG5maWZ0aFxcbnVuaW9uXFxuaGVuY2VcXG5zdHJhd1xcbmVudHJ5XFxuaXNzdWVcXG5iaXJ0aFxcbmZlZWxzXFxuYW5nZXJcXG5icmllZlxcbnJoeW1lXFxuZ2xvcnlcXG5ndWFyZFxcbmZsb3dzXFxuZmxlc2hcXG5vd25lZFxcbnRyaWNrXFxueW91cnNcXG5zaXplc1xcbm5vdGVkXFxud2lkdGhcXG5idXJzdFxcbnJvdXRlXFxubHVuZ3NcXG51bmNsZVxcbmJlYXJzXFxucm95YWxcXG5raW5nc1xcbmZvcnR5XFxudHJpYWxcXG5jYXJkc1xcbmJyYXNzXFxub3BlcmFcXG5jaG9zZVxcbm93bmVyXFxudmFwb3JcXG5iZWF0c1xcbm1vdXNlXFxudG91Z2hcXG53aXJlc1xcbm1ldGVyXFxudG93ZXJcXG5maW5kc1xcbmlubmVyXFxuc3R1Y2tcXG5hcnJvd1xcbnBvZW1zXFxubGFiZWxcXG5zd2luZ1xcbnNvbGFyXFxudHJ1bHlcXG50ZW5zZVxcbmJlYW5zXFxuc3BsaXRcXG5yaXNlc1xcbndlaWdoXFxuaG90ZWxcXG5zdGVtc1xcbnByaWRlXFxuc3d1bmdcXG5ncmFkZVxcbmRpZ2l0XFxuYmFkbHlcXG5ib290c1xcbnBpbG90XFxuc2FsZXNcXG5zd2VwdFxcbmx1Y2t5XFxucHJpemVcXG5zdG92ZVxcbnR1YmVzXFxuYWNyZXNcXG53b3VuZFxcbnN0ZWVwXFxuc2xpZGVcXG50cnVua1xcbmVycm9yXFxucG9yY2hcXG5zbGF2ZVxcbmV4aXN0XFxuZmFjZWRcXG5taW5lc1xcbm1hcnJ5XFxuanVpY2VcXG5yYWNlZFxcbndhdmVkXFxuZ29vc2VcXG50cnVzdFxcbmZld2VyXFxuZmF2b3JcXG5taWxsc1xcbnZpZXdzXFxuam9pbnRcXG5lYWdlclxcbnNwb3RzXFxuYmxlbmRcXG5yaW5nc1xcbmFkdWx0XFxuaW5kZXhcXG5uYWlsc1xcbmhvcm5zXFxuYmFsbHNcXG5mbGFtZVxcbnJhdGVzXFxuZHJpbGxcXG50cmFjZVxcbnNraW5zXFxud2F4ZWRcXG5zZWF0c1xcbnN0dWZmXFxucmF0aW9cXG5taW5kc1xcbmRpcnR5XFxuc2lsbHlcXG5jb2luc1xcbmhlbGxvXFxudHJpcHNcXG5sZWFkc1xcbnJpZmxlXFxuaG9wZXNcXG5iYXNlc1xcbnNoaW5lXFxuYmVuY2hcXG5tb3JhbFxcbmZpcmVzXFxubWVhbHNcXG5zaGFrZVxcbnNob3BzXFxuY3ljbGVcXG5tb3ZpZVxcbnNsb3BlXFxuY2Fub2VcXG50ZWFtc1xcbmZvbGtzXFxuZmlyZWRcXG5iYW5kc1xcbnRodW1iXFxuc2hvdXRcXG5jYW5hbFxcbmhhYml0XFxucmVwbHlcXG5ydWxlZFxcbmZldmVyXFxuY3J1c3RcXG5zaGVsZlxcbndhbGtzXFxubWlkc3RcXG5jcmFja1xcbnByaW50XFxudGFsZXNcXG5jb2FjaFxcbnN0aWZmXFxuZmxvb2RcXG52ZXJzZVxcbmF3YWtlXFxucm9ja3lcXG5tYXJjaFxcbmZhdWx0XFxuc3dpZnRcXG5mYWludFxcbmNpdmlsXFxuZ2hvc3RcXG5mZWFzdFxcbmJsYWRlXFxubGltaXRcXG5nZXJtc1xcbnJlYWRzXFxuZHVja3NcXG5kYWlyeVxcbndvcnN0XFxuZ2lmdHNcXG5saXN0c1xcbnN0b3BzXFxucmFwaWRcXG5icmlja1xcbmNsYXdzXFxuYmVhZHNcXG5iZWFzdFxcbnNraXJ0XFxuY2FrZXNcXG5saW9uc1xcbmZyb2dzXFxudHJpZXNcXG5uZXJ2ZVxcbmdyYW5kXFxuYXJtZWRcXG50cmVhdFxcbmhvbmV5XFxubW9pc3RcXG5sZWdhbFxcbnBlbm55XFxuY3Jvd25cXG5zaG9ja1xcbnRheGVzXFxuc2l4dHlcXG5hbHRhclxcbnB1bGxzXFxuc3BvcnRcXG5kcnVtc1xcbnRhbGtzXFxuZHlpbmdcXG5kYXRlc1xcbmRyYW5rXFxuYmxvd3NcXG5sZXZlclxcbndhZ2VzXFxucHJvb2ZcXG5kcnVnc1xcbnRhbmtzXFxuc2luZ3NcXG50YWlsc1xcbnBhdXNlXFxuaGVyZHNcXG5hcm9zZVxcbmhhdGVkXFxuY2x1ZXNcXG5ub3ZlbFxcbnNoYW1lXFxuYnVybnRcXG5yYWNlc1xcbmZsYXNoXFxud2VhcnlcXG5oZWVsc1xcbnRva2VuXFxuY29hdHNcXG5zcGFyZVxcbnNoaW55XFxuYWxhcm1cXG5kaW1lc1xcbnNpeHRoXFxuY2xlcmtcXG5tZXJjeVxcbnN1bm55XFxuZ3Vlc3RcXG5mbG9hdFxcbnNob25lXFxucGlwZXNcXG53b3Jtc1xcbmJpbGxzXFxuc3dlYXRcXG5zdWl0c1xcbnNtYXJ0XFxudXBzZXRcXG5yYWluc1xcbnNhbmR5XFxucmFpbnlcXG5wYXJrc1xcbnNhZGx5XFxuZmFuY3lcXG5yaWRlclxcbnVuaXR5XFxuYnVuY2hcXG5yb2xsc1xcbmNyYXNoXFxuY3JhZnRcXG5uZXdseVxcbmdhdGVzXFxuaGF0Y2hcXG5wYXRoc1xcbmZ1bmRzXFxud2lkZXJcXG5ncmFjZVxcbmdyYXZlXFxudGlkZXNcXG5hZG1pdFxcbnNoaWZ0XFxuc2FpbHNcXG5wdXBpbFxcbnRpZ2VyXFxuYW5nZWxcXG5jcnVlbFxcbmFnZW50XFxuZHJhbWFcXG51cmdlZFxcbnBhdGNoXFxubmVzdHNcXG52aXRhbFxcbnN3b3JkXFxuYmxhbWVcXG53ZWVkc1xcbnNjcmV3XFxudm9jYWxcXG5iYWNvblxcbmNoYWxrXFxuY2FyZ29cXG5jcmF6eVxcbmFjdGVkXFxuZ29hdHNcXG5hcmlzZVxcbndpdGNoXFxubG92ZXNcXG5xdWVlclxcbmR3ZWxsXFxuYmFja3NcXG5yb3Blc1xcbnNob3RzXFxubWVycnlcXG5waG9uZVxcbmNoZWVrXFxucGVha3NcXG5pZGVhbFxcbmJlYXJkXFxuZWFnbGVcXG5jcmVla1xcbmNyaWVzXFxuYXNoZXNcXG5zdGFsbFxcbnlpZWxkXFxubWF5b3JcXG5vcGVuc1xcbmlucHV0XFxuZmxlZXRcXG50b290aFxcbmN1YmljXFxud2l2ZXNcXG5idXJuc1xcbnBvZXRzXFxuYXByb25cXG5zcGVhclxcbm9yZ2FuXFxuY2xpZmZcXG5zdGFtcFxcbnBhc3RlXFxucnVyYWxcXG5iYWtlZFxcbmNoYXNlXFxuc2xpY2VcXG5zbGFudFxcbmtub2NrXFxubm9pc3lcXG5zb3J0c1xcbnN0YXlzXFxud2lwZWRcXG5ibG93blxcbnBpbGVkXFxuY2x1YnNcXG5jaGVlclxcbndpZG93XFxudHdpc3RcXG50ZW50aFxcbmhpZGVzXFxuY29tbWFcXG5zd2VlcFxcbnNwb29uXFxuc3Rlcm5cXG5jcmVwdFxcbm1hcGxlXFxuZGVlZHNcXG5yaWRlc1xcbm11ZGR5XFxuY3JpbWVcXG5qZWxseVxcbnJpZGdlXFxuZHJpZnRcXG5kdXN0eVxcbmRldmlsXFxudGVtcG9cXG5odW1vclxcbnNlbmRzXFxuc3RlYWxcXG50ZW50c1xcbndhaXN0XFxucm9zZXNcXG5yZWlnblxcbm5vYmxlXFxuY2hlYXBcXG5kZW5zZVxcbmxpbmVuXFxuZ2Vlc2VcXG53b3ZlblxcbnBvc3RzXFxuaGlyZWRcXG53cmF0aFxcbnNhbGFkXFxuYm93ZWRcXG50aXJlc1xcbnNoYXJrXFxuYmVsdHNcXG5ncmFzcFxcbmJsYXN0XFxucG9sYXJcXG5mdW5naVxcbnRlbmRzXFxucGVhcmxcXG5sb2Fkc1xcbmpva2VzXFxudmVpbnNcXG5mcm9zdFxcbmhlYXJzXFxubG9zZXNcXG5ob3N0c1xcbmRpdmVyXFxucGhhc2VcXG50b2Fkc1xcbmFsZXJ0XFxudGFza3NcXG5zZWFtc1xcbmNvcmFsXFxuZm9jdXNcXG5uYWtlZFxcbnB1cHB5XFxuanVtcHNcXG5zcG9pbFxcbnF1YXJ0XFxubWFjcm9cXG5mZWFyc1xcbmZsdW5nXFxuc3BhcmtcXG52aXZpZFxcbmJyb29rXFxuc3RlZXJcXG5zcHJheVxcbmRlY2F5XFxucG9ydHNcXG5zb2Nrc1xcbnVyYmFuXFxuZ29hbHNcXG5ncmFudFxcbm1pbnVzXFxuZmlsbXNcXG50dW5lc1xcbnNoYWZ0XFxuZmlybXNcXG5za2llc1xcbmJyaWRlXFxud3JlY2tcXG5mbG9ja1xcbnN0YXJlXFxuaG9iYnlcXG5ib25kc1xcbmRhcmVkXFxuZmFkZWRcXG50aGllZlxcbmNydWRlXFxucGFudHNcXG5mbHV0ZVxcbnZvdGVzXFxudG9uYWxcXG5yYWRhclxcbndlbGxzXFxuc2t1bGxcXG5oYWlyc1xcbmFyZ3VlXFxud2VhcnNcXG5kb2xsc1xcbnZvdGVkXFxuY2F2ZXNcXG5jYXJlZFxcbmJyb29tXFxuc2NlbnRcXG5wYW5lbFxcbmZhaXJ5XFxub2xpdmVcXG5iZW5kc1xcbnByaXNtXFxubGFtcHNcXG5jYWJsZVxcbnBlYWNoXFxucnVpbnNcXG5yYWxseVxcbnNjaHdhXFxubGFtYnNcXG5zZWxsc1xcbmNvb2xzXFxuZHJhZnRcXG5jaGFybVxcbmxpbWJzXFxuYnJha2VcXG5nYXplZFxcbmN1YmVzXFxuZGVsYXlcXG5iZWFtc1xcbmZldGNoXFxucmFua3NcXG5hcnJheVxcbmhhcnNoXFxuY2FtZWxcXG52aW5lc1xcbnBpY2tzXFxubmF2YWxcXG5wdXJzZVxcbnJpZ2lkXFxuY3Jhd2xcXG50b2FzdFxcbnNvaWxzXFxuc2F1Y2VcXG5iYXNpblxcbnBvbmRzXFxudHdpbnNcXG53cmlzdFxcbmZsdWlkXFxucG9vbHNcXG5icmFuZFxcbnN0YWxrXFxucm9ib3RcXG5yZWVkc1xcbmhvb2ZzXFxuYnVzZXNcXG5zaGVlclxcbmdyaWVmXFxuYmxvb21cXG5kd2VsdFxcbm1lbHRzXFxucmlzZW5cXG5mbGFnc1xcbmtuZWx0XFxuZmliZXJcXG5yb29mc1xcbmZyZWVkXFxuYXJtb3JcXG5waWxlc1xcbmFpbWVkXFxuYWxnYWVcXG50d2lnc1xcbmxlbW9uXFxuZGl0Y2hcXG5kcnVua1xcbnJlc3RzXFxuY2hpbGxcXG5zbGFpblxcbnBhbmljXFxuY29yZHNcXG50dW5lZFxcbmNyaXNwXFxubGVkZ2VcXG5kaXZlZFxcbnN3YW1wXFxuY2x1bmdcXG5zdG9sZVxcbm1vbGRzXFxueWFybnNcXG5saXZlclxcbmdhdWdlXFxuYnJlZWRcXG5zdG9vbFxcbmd1bGxzXFxuYXdva2VcXG5ncm9zc1xcbmRpYXJ5XFxucmFpbHNcXG5iZWxseVxcbnRyZW5kXFxuZmxhc2tcXG5zdGFrZVxcbmZyaWVkXFxuZHJhd3NcXG5hY3RvclxcbmhhbmR5XFxuYm93bHNcXG5oYXN0ZVxcbnNjb3BlXFxuZGVhbHNcXG5rbm90c1xcbm1vb25zXFxuZXNzYXlcXG50aHVtcFxcbmhhbmdzXFxuYmxpc3NcXG5kZWFsdFxcbmdhaW5zXFxuYm9tYnNcXG5jbG93blxcbnBhbG1zXFxuY29uZXNcXG5yb2FzdFxcbnRpZGFsXFxuYm9yZWRcXG5jaGFudFxcbmFjaWRzXFxuZG91Z2hcXG5jYW1wc1xcbnN3b3JlXFxubG92ZXJcXG5ob29rc1xcbm1hbGVzXFxuY29jb2FcXG5wdW5jaFxcbmF3YXJkXFxucmVpbnNcXG5uaW50aFxcbm5vc2VzXFxubGlua3NcXG5kcmFpblxcbmZpbGxzXFxubnlsb25cXG5sdW5hclxcbnB1bHNlXFxuZmxvd25cXG5lbGJvd1xcbmZhdGFsXFxuc2l0ZXNcXG5tb3Roc1xcbm1lYXRzXFxuZm94ZXNcXG5taW5lZFxcbmF0dGljXFxuZmllcnlcXG5tb3VudFxcbnVzYWdlXFxuc3dlYXJcXG5zbm93eVxcbnJ1c3R5XFxuc2NhcmVcXG50cmFwc1xcbnJlbGF4XFxucmVhY3RcXG52YWxpZFxcbnJvYmluXFxuY2Vhc2VcXG5naWxsc1xcbnByaW9yXFxuc2FmZXJcXG5wb2xpb1xcbmxveWFsXFxuc3dlbGxcXG5zYWx0eVxcbm1hcnNoXFxudmFndWVcXG53ZWF2ZVxcbm1vdW5kXFxuc2VhbHNcXG5tdWxlc1xcbnZpcnVzXFxuc2NvdXRcXG5hY3V0ZVxcbndpbmR5XFxuc3RvdXRcXG5mb2xkc1xcbnNlaXplXFxuaGlsbHlcXG5qb2luc1xcbnBsdWNrXFxuc3RhY2tcXG5sb3Jkc1xcbmR1bmVzXFxuYnVycm9cXG5oYXdrc1xcbnRyb3V0XFxuZmVlZHNcXG5zY2FyZlxcbmhhbGxzXFxuY29hbHNcXG50b3dlbFxcbnNvdWxzXFxuZWxlY3RcXG5idWdneVxcbnB1bXBzXFxubG9hbnNcXG5zcGluc1xcbmZpbGVzXFxub3hpZGVcXG5wYWluc1xcbnBob3RvXFxucml2YWxcXG5mbGF0c1xcbnN5cnVwXFxucm9kZW9cXG5zYW5kc1xcbm1vb3NlXFxucGludHNcXG5jdXJseVxcbmNvbWljXFxuY2xvYWtcXG5vbmlvblxcbmNsYW1zXFxuc2NyYXBcXG5kaWRzdFxcbmNvdWNoXFxuY29kZXNcXG5mYWlsc1xcbm91bmNlXFxubG9kZ2VcXG5ncmVldFxcbmd5cHN5XFxudXR0ZXJcXG5wYXZlZFxcbnpvbmVzXFxuZm91cnNcXG5hbGxleVxcbnRpbGVzXFxuYmxlc3NcXG5jcmVzdFxcbmVsZGVyXFxua2lsbHNcXG55ZWFzdFxcbmVyZWN0XFxuYnVnbGVcXG5tZWRhbFxcbnJvbGVzXFxuaG91bmRcXG5zbmFpbFxcbmFsdGVyXFxuYW5rbGVcXG5yZWxheVxcbmxvb3BzXFxuemVyb3NcXG5iaXRlc1xcbm1vZGVzXFxuZGVidHNcXG5yZWFsbVxcbmdsb3ZlXFxucmF5b25cXG5zd2ltc1xcbnBva2VkXFxuc3RyYXlcXG5saWZ0c1xcbm1ha2VyXFxubHVtcHNcXG5ncmF6ZVxcbmRyZWFkXFxuYmFybnNcXG5kb2Nrc1xcbm1hc3RzXFxucG91cnNcXG53aGFyZlxcbmN1cnNlXFxucGx1bXBcXG5yb2Jlc1xcbnNlZWtzXFxuY2VkYXJcXG5jdXJsc1xcbmpvbGx5XFxubXl0aHNcXG5jYWdlc1xcbmdsb29tXFxubG9ja3NcXG5wZWRhbFxcbmJlZXRzXFxuY3Jvd3NcXG5hbm9kZVxcbnNsYXNoXFxuY3JlZXBcXG5yb3dlZFxcbmNoaXBzXFxuZmlzdHNcXG53aW5lc1xcbmNhcmVzXFxudmFsdmVcXG5uZXdlclxcbm1vdGVsXFxuaXZvcnlcXG5uZWNrc1xcbmNsYW1wXFxuYmFyZ2VcXG5ibHVlc1xcbmFsaWVuXFxuZnJvd25cXG5zdHJhcFxcbmNyZXdzXFxuc2hhY2tcXG5nb25uYVxcbnNhdmVzXFxuc3R1bXBcXG5mZXJyeVxcbmlkb2xzXFxuY29va3NcXG5qdWljeVxcbmdsYXJlXFxuY2FydHNcXG5hbGxveVxcbmJ1bGJzXFxubGF3bnNcXG5sYXN0c1xcbmZ1ZWxzXFxub2RkbHlcXG5jcmFuZVxcbmZpbGVkXFxud2VpcmRcXG5zaGF3bFxcbnNsaXBzXFxudHJvb3BcXG5ib2x0c1xcbnN1aXRlXFxuc2xlZWtcXG5xdWlsdFxcbnRyYW1wXFxuYmxhemVcXG5hdGxhc1xcbm9kb3JzXFxuc2NydWJcXG5jcmFic1xcbnByb2JlXFxubG9naWNcXG5hZG9iZVxcbmV4aWxlXFxucmViZWxcXG5ncmluZFxcbnN0aW5nXFxuc3BpbmVcXG5jbGluZ1xcbmRlc2tzXFxuZ3JvdmVcXG5sZWFwc1xcbnByb3NlXFxubG9mdHlcXG5hZ29ueVxcbnNuYXJlXFxudHVza3NcXG5idWxsc1xcbm1vb2RzXFxuaHVtaWRcXG5maW5lclxcbmRpbWx5XFxucGxhbmtcXG5jaGluYVxcbnBpbmVzXFxuZ3VpbHRcXG5zYWNrc1xcbmJyYWNlXFxucXVvdGVcXG5sYXRoZVxcbmdhaWx5XFxuZm9udHNcXG5zY2FscFxcbmFkb3B0XFxuZm9nZ3lcXG5mZXJuc1xcbmdyYW1zXFxuY2x1bXBcXG5wZXJjaFxcbnR1bW9yXFxudGVlbnNcXG5jcmFua1xcbmZhYmxlXFxuaGVkZ2VcXG5nZW5lc1xcbnNvYmVyXFxuYm9hc3RcXG50cmFjdFxcbmNpZ2FyXFxudW5pdGVcXG5vd2luZ1xcbnRoaWdoXFxuaGFpa3VcXG5zd2lzaFxcbmRpa2VzXFxud2VkZ2VcXG5ib290aFxcbmVhc2VkXFxuZnJhaWxcXG5jb3VnaFxcbnRvbWJzXFxuZGFydHNcXG5mb3J0c1xcbmNob2lyXFxucG91Y2hcXG5waW5jaFxcbmhhaXJ5XFxuYnV5ZXJcXG50b3JjaFxcbnZpZ29yXFxud2FsdHpcXG5oZWF0c1xcbmhlcmJzXFxudXNlcnNcXG5mbGludFxcbmNsaWNrXFxubWFkYW1cXG5ibGVha1xcbmJsdW50XFxuYWlkZWRcXG5sYWNrc1xcbm1hc2tzXFxud2FkZWRcXG5yaXNrc1xcbm51cnNlXFxuY2hhb3NcXG5zZXdlZFxcbmN1cmVkXFxuYW1wbGVcXG5sZWFzZVxcbnN0ZWFrXFxuc2lua3NcXG5tZXJpdFxcbmJsdWZmXFxuYmF0aGVcXG5nbGVhbVxcbmJvbnVzXFxuY29sdHNcXG5zaGVhclxcbmdsYW5kXFxuc2lsa3lcXG5za2F0ZVxcbmJpcmNoXFxuYW52aWxcXG5zbGVkc1xcbmdyb2FuXFxubWFpZHNcXG5tZWV0c1xcbnNwZWNrXFxuaHltbnNcXG5oaW50c1xcbmRyb3duXFxuYm9zb21cXG5zbGlja1xcbnF1ZXN0XFxuY29pbHNcXG5zcGllZFxcbnNub3dzXFxuc3RlYWRcXG5zbmFja1xcbnBsb3dzXFxuYmxvbmRcXG50YW1lZFxcbnRob3JuXFxud2FpdHNcXG5nbHVlZFxcbmJhbmpvXFxudGVhc2VcXG5hcmVuYVxcbmJ1bGt5XFxuY2FydmVcXG5zdHVudFxcbndhcm1zXFxuc2hhZHlcXG5yYXpvclxcbmZvbGx5XFxubGVhZnlcXG5ub3RjaFxcbmZvb2xzXFxub3R0ZXJcXG5wZWFyc1xcbmZsdXNoXFxuZ2VudXNcXG5hY2hlZFxcbmZpdmVzXFxuZmxhcHNcXG5zcG91dFxcbnNtb3RlXFxuZnVtZXNcXG5hZGFwdFxcbmN1ZmZzXFxudGFzdHlcXG5zdG9vcFxcbmNsaXBzXFxuZGlza3NcXG5zbmlmZlxcbmxhbmVzXFxuYnJpc2tcXG5pbXBseVxcbmRlbW9uXFxuc3VwZXJcXG5mdXJyeVxcbnJhZ2VkXFxuZ3Jvd2xcXG50ZXh0c1xcbmhhcmR5XFxuc3R1bmdcXG50eXBlZFxcbmhhdGVzXFxud2lzZXJcXG50aW1pZFxcbnNlcnVtXFxuYmVha3NcXG5yb3RvclxcbmNhc3RzXFxuYmF0aHNcXG5nbGlkZVxcbnBsb3RzXFxudHJhaXRcXG5yZXNpblxcbnNsdW1zXFxubHlyaWNcXG5wdWZmc1xcbmRlY2tzXFxuYnJvb2RcXG5tb3VyblxcbmFsb2Z0XFxuYWJ1c2VcXG53aGlybFxcbmVkZ2VkXFxub3ZhcnlcXG5xdWFja1xcbmhlYXBzXFxuc2xhbmdcXG5hd2FpdFxcbmNpdmljXFxuc2FpbnRcXG5iZXZlbFxcbnNvbmFyXFxuYXVudHNcXG5wYWNrc1xcbmZyb3plXFxudG9uaWNcXG5jb3Jwc1xcbnN3YXJtXFxuZnJhbmtcXG5yZXBheVxcbmdhdW50XFxud2lyZWRcXG5uaWVjZVxcbmNlbGxvXFxubmVlZHlcXG5jaHVja1xcbnN0b255XFxubWVkaWFcXG5zdXJnZVxcbmh1cnRzXFxucmVwZWxcXG5odXNreVxcbmRhdGVkXFxuaHVudHNcXG5taXN0c1xcbmV4ZXJ0XFxuZHJpZXNcXG5tYXRlc1xcbnN3b3JuXFxuYmFrZXJcXG5zcGljZVxcbm9hc2lzXFxuYm9pbHNcXG5zcHVyc1xcbmRvdmVzXFxuc25lYWtcXG5wYWNlc1xcbmNvbG9uXFxuc2llZ2VcXG5zdHJ1bVxcbmRyaWVyXFxuY2FjYW9cXG5odW11c1xcbmJhbGVzXFxucGlwZWRcXG5uYXN0eVxcbnJpbnNlXFxuYm94ZXJcXG5zaHJ1YlxcbmFtdXNlXFxudGFja3NcXG5jaXRlZFxcbnNsdW5nXFxuZGVsdGFcXG5sYWRlblxcbmxhcnZhXFxucmVudHNcXG55ZWxsc1xcbnNwb29sXFxuc3BpbGxcXG5jcnVzaFxcbmpld2VsXFxuc25hcHNcXG5zdGFpblxcbmtpY2tzXFxudHlpbmdcXG5zbGl0c1xcbnJhdGVkXFxuZWVyaWVcXG5zbWFzaFxcbnBsdW1zXFxuemVicmFcXG5lYXJuc1xcbmJ1c2h5XFxuc2NhcnlcXG5zcXVhZFxcbnR1dG9yXFxuc2lsa3NcXG5zbGFic1xcbmJ1bXBzXFxuZXZpbHNcXG5mYW5nc1xcbnNub3V0XFxucGVyaWxcXG5waXZvdFxcbnlhY2h0XFxubG9iYnlcXG5qZWFuc1xcbmdyaW5zXFxudmlvbGFcXG5saW5lclxcbmNvbWV0XFxuc2NhcnNcXG5jaG9wc1xcbnJhaWRzXFxuZWF0ZXJcXG5zbGF0ZVxcbnNraXBzXFxuc29sZXNcXG5taXN0eVxcbnVyaW5lXFxua25vYnNcXG5zbGVldFxcbmhvbGx5XFxucGVzdHNcXG5mb3Jrc1xcbmdyaWxsXFxudHJheXNcXG5wYWlsc1xcbmJvcm5lXFxudGVub3JcXG53YXJlc1xcbmNhcm9sXFxud29vZHlcXG5jYW5vblxcbndha2VzXFxua2l0dHlcXG5taW5lclxcbnBvbGxzXFxuc2hha3lcXG5uYXNhbFxcbnNjb3JuXFxuY2hlc3NcXG50YXhpc1xcbmNyYXRlXFxuc2h5bHlcXG50dWxpcFxcbmZvcmdlXFxubnltcGhcXG5idWRnZVxcbmxvd2x5XFxuYWJpZGVcXG5kZXBvdFxcbm9hc2VzXFxuYXNzZXNcXG5zaGVkc1xcbmZ1ZGdlXFxucGlsbHNcXG5yaXZldFxcbnRoaW5lXFxuZ3Jvb21cXG5sYW5reVxcbmJvb3N0XFxuYnJvdGhcXG5oZWF2ZVxcbmdyYXZ5XFxuYmVlY2hcXG50aW1lZFxcbnF1YWlsXFxuaW5lcnRcXG5nZWFyc1xcbmNoaWNrXFxuaGluZ2VcXG50cmFzaFxcbmNsYXNoXFxuc2lnaHNcXG5yZW5ld1xcbmJvdWdoXFxuZHdhcmZcXG5zbG93c1xcbnF1aWxsXFxuc2hhdmVcXG5zcG9yZVxcbnNpeGVzXFxuY2h1bmtcXG5tYWRseVxcbnBhY2VkXFxuYnJhaWRcXG5mdXp6eVxcbm1vdHRvXFxuc3BpZXNcXG5zbGFja1xcbm11Y3VzXFxubWFnbWFcXG5hd2Z1bFxcbmRpc2NzXFxuZXJhc2VcXG5wb3NlZFxcbmFzc2V0XFxuY2lkZXJcXG50YXBlclxcbnRoZWZ0XFxuY2h1cm5cXG5zYXRpblxcbnNsb3RzXFxudGF4ZWRcXG5idWxseVxcbnNsb3RoXFxuc2hhbGVcXG50cmVhZFxcbnJha2VkXFxuY3VyZHNcXG5tYW5vclxcbmFpc2xlXFxuYnVsZ2VcXG5sb2luc1xcbnN0YWlyXFxudGFwZXNcXG5sZWFuc1xcbmJ1bmtzXFxuc3F1YXRcXG50b3dlZFxcbmxhbmNlXFxucGFuZXNcXG5zYWtlc1xcbmhlaXJzXFxuY2FzdGVcXG5kdW1teVxcbnBvcmVzXFxuZmF1bmFcXG5jcm9va1xcbnBvaXNlXFxuZXBvY2hcXG5yaXNreVxcbndhcm5zXFxuZmxpbmdcXG5iZXJyeVxcbmdyYXBlXFxuZmxhbmtcXG5kcmFnc1xcbnNxdWlkXFxucGVsdHNcXG5pY2luZ1xcbmlyb255XFxuaXJvbnNcXG5iYXJrc1xcbndob29wXFxuY2hva2VcXG5kaWV0c1xcbndoaXBzXFxudGFsbHlcXG5kb3plZFxcbnR3aW5lXFxua2l0ZXNcXG5iaWtlc1xcbnRpY2tzXFxucmlvdHNcXG5yb2Fyc1xcbnZhdWx0XFxubG9vbXNcXG5zY29sZFxcbmJsaW5rXFxuZGFuZHlcXG5wdXBhZVxcbnNpZXZlXFxuc3Bpa2VcXG5kdWN0c1xcbmxlbmRzXFxucGl6emFcXG5icmlua1xcbndpZGVuXFxucGx1bWJcXG5wYWdhblxcbmZlYXRzXFxuYmlzb25cXG5zb2dneVxcbnNjb29wXFxuYXJnb25cXG5udWRnZVxcbnNraWZmXFxuYW1iZXJcXG5zZXhlc1xcbnJvdXNlXFxuc2FsdHNcXG5oaXRjaFxcbmV4YWx0XFxubGVhc2hcXG5kaW5lZFxcbmNodXRlXFxuc25vcnRcXG5ndXN0c1xcbm1lbG9uXFxuY2hlYXRcXG5yZWVmc1xcbmxsYW1hXFxubGFzc29cXG5kZWJ1dFxcbnF1b3RhXFxub2F0aHNcXG5wcm9uZVxcbm1peGVzXFxucmFmdHNcXG5kaXZlc1xcbnN0YWxlXFxuaW5sZXRcXG5mbGlja1xcbnBpbnRvXFxuYnJvd3NcXG51bnRpZVxcbmJhdGNoXFxuZ3JlZWRcXG5jaG9yZVxcbnN0aXJzXFxuYmx1c2hcXG5vbnNldFxcbmJhcmJzXFxudm9sdHNcXG5iZWlnZVxcbnN3b29wXFxucGFkZHlcXG5sYWNlZFxcbnNob3ZlXFxuamVya3lcXG5wb3BweVxcbmxlYWtzXFxuZmFyZXNcXG5kb2RnZVxcbmdvZGx5XFxuc3F1YXdcXG5hZmZpeFxcbmJydXRlXFxubmljZXJcXG51bmR1ZVxcbnNuYXJsXFxubWVyZ2VcXG5kb3Nlc1xcbnNob3d5XFxuZGFkZHlcXG5yb29zdFxcbnZhc2VzXFxuc3dpcmxcXG5wZXR0eVxcbmNvbGRzXFxuY3VycnlcXG5jb2JyYVxcbmdlbmllXFxuZmxhcmVcXG5tZXNzeVxcbmNvcmVzXFxuc29ha3NcXG5yaXBlblxcbndoaW5lXFxuYW1pbm9cXG5wbGFpZFxcbnNwaW55XFxubW93ZWRcXG5iYXRvblxcbnBlZXJzXFxudm93ZWRcXG5waW91c1xcbnN3YW5zXFxuZXhpdHNcXG5hZm9vdFxcbnBsdWdzXFxuaWRpb21cXG5jaGlsaVxcbnJpdGVzXFxuc2VyZnNcXG5jbGVmdFxcbmJlcnRoXFxuZ3J1YnNcXG5hbm5leFxcbmRpenp5XFxuaGFzdHlcXG5sYXRjaFxcbndhc3BzXFxubWlydGhcXG5iYXJvblxcbnBsZWFkXFxuYWxvb2ZcXG5hZ2luZ1xcbnBpeGVsXFxuYmFyZWRcXG5tdW1teVxcbmhvdGx5XFxuYXVnZXJcXG5idWRkeVxcbmNoYXBzXFxuYmFkZ2VcXG5zdGFya1xcbmZhaXJzXFxuZ3VsbHlcXG5tdW1wc1xcbmVtZXJ5XFxuZmlsbHlcXG5vdmVuc1xcbmRyb25lXFxuZ2F1emVcXG5pZGlvdFxcbmZ1c3N5XFxuYW5ub3lcXG5zaGFua1xcbmdvdWdlXFxuYmxlZWRcXG5lbHZlc1xcbnJvcGVkXFxudW5maXRcXG5iYWdneVxcbm1vd2VyXFxuc2NhbnRcXG5ncmFic1xcbmZsZWFzXFxubG91c3lcXG5hbGJ1bVxcbnNhd2VkXFxuY29va3lcXG5tdXJreVxcbmluZmVyXFxuYnVybHlcXG53YWdlZFxcbmRpbmd5XFxuYnJpbmVcXG5rbmVlbFxcbmNyZWFrXFxudmFuZXNcXG5zbW9reVxcbnNwdXJ0XFxuY29tYnNcXG5lYXNlbFxcbmxhY2VzXFxuaHVtcHNcXG5ydW1vclxcbmFyb21hXFxuaG9yZGVcXG5zd2lzc1xcbmxlYXB0XFxub3BpdW1cXG5zbGltZVxcbmFmaXJlXFxucGFuc3lcXG5tYXJlc1xcbnNvYXBzXFxuaHVza3NcXG5zbmlwc1xcbmhhemVsXFxubGluZWRcXG5jYWZlc1xcbm5haXZlXFxud3JhcHNcXG5zaXplZFxcbnBpZXJzXFxuYmVzZXRcXG5hZ2lsZVxcbnRvbmdzXFxuc3RlZWRcXG5mcmF1ZFxcbmJvb3R5XFxudmFsb3JcXG5kb3dueVxcbndpdHR5XFxubW9zc3lcXG5wc2FsbVxcbnNjdWJhXFxudG91cnNcXG5wb2xrYVxcbm1pbGt5XFxuZ2F1ZHlcXG5zaHJ1Z1xcbnR1ZnRzXFxud2lsZHNcXG5sYXNlclxcbnRydXNzXFxuaGFyZXNcXG5jcmVlZFxcbmxpbGFjXFxuc2lyZW5cXG50YXJyeVxcbmJyaWJlXFxuc3dpbmVcXG5tdXRlZFxcbmZsaXBzXFxuY3VyZXNcXG5zaW5ld1xcbmJveGVkXFxuaG9vcHNcXG5nYXNwc1xcbmhvb2RzXFxubmljaGVcXG55dWNjYVxcbmdsb3dzXFxuc2V3ZXJcXG53aGFja1xcbmZ1c2VzXFxuZ293bnNcXG5kcm9vcFxcbmJ1Y2tzXFxucGFuZ3NcXG5tYWlsc1xcbndoaXNrXFxuaGF2ZW5cXG5jbGFzcFxcbnNsaW5nXFxuc3RpbnRcXG51cmdlc1xcbmNoYW1wXFxucGlldHlcXG5jaGlycFxcbnBsZWF0XFxucG9zc2VcXG5zdW51cFxcbm1lbnVzXFxuaG93bHNcXG5xdWFrZVxcbmtuYWNrXFxucGxhemFcXG5maWVuZFxcbmNha2VkXFxuYmFuZ3NcXG5lcnVwdFxcbnBva2VyXFxub2xkZW5cXG5jcmFtcFxcbnZvdGVyXFxucG9zZXNcXG5tYW5seVxcbnNsdW1wXFxuZmluZWRcXG5ncmlwc1xcbmdhcGVkXFxucHVyZ2VcXG5oaWtlZFxcbm1haXplXFxuZmx1ZmZcXG5zdHJ1dFxcbnNsb29wXFxucHJvd2xcXG5yb2FjaFxcbmNvY2tzXFxuYmxhbmRcXG5kaWFsc1xcbnBsdW1lXFxuc2xhcHNcXG5zb3Vwc1xcbmR1bGx5XFxud2lsbHNcXG5mb2Ftc1xcbnNvbG9zXFxuc2tpZXJcXG5lYXZlc1xcbnRvdGVtXFxuZnVzZWRcXG5sYXRleFxcbnZlaWxzXFxubXVzZWRcXG5tYWluc1xcbm15cnJoXFxucmFja3NcXG5nYWxsc1xcbmduYXRzXFxuYm91dHNcXG5zaXNhbFxcbnNodXRzXFxuaG9zZXNcXG5kcnlseVxcbmhvdmVyXFxuZ2xvc3NcXG5zZWVwc1xcbmRlbmltXFxucHV0dHlcXG5ndXBweVxcbmxlYWt5XFxuZHVza3lcXG5maWx0aFxcbm9ib2VzXFxuc3BhbnNcXG5mb3dsc1xcbmFkb3JuXFxuZ2xhemVcXG5oYXVudFxcbmRhcmVzXFxub2JleXNcXG5iYWtlc1xcbmFieXNzXFxuc21lbHRcXG5nYW5nc1xcbmFjaGVzXFxudHJhd2xcXG5jbGFwc1xcbnVuZGlkXFxuc3BpY3lcXG5ob2lzdFxcbmZhZGVzXFxudmljYXJcXG5hY29yblxcbnB1c3N5XFxuZ3J1ZmZcXG5tdXN0eVxcbnRhcnRzXFxuc251ZmZcXG5odW5jaFxcbnRydWNlXFxudHdlZWRcXG5kcnllclxcbmxvc2VyXFxuc2hlYWZcXG5tb2xlc1xcbmxhcHNlXFxudGF3bnlcXG52ZXhlZFxcbmF1dG9zXFxud2FnZXJcXG5kb21lc1xcbnNoZWVuXFxuY2xhbmdcXG5zcGFkZVxcbnNvd2VkXFxuYnJvaWxcXG5zbHlseVxcbnN0dWRzXFxuZ3J1bnRcXG5kb25vclxcbnNsdWdzXFxuYXNwZW5cXG5ob21lclxcbmNyb2FrXFxudGl0aGVcXG5oYWx0c1xcbmF2ZXJ0XFxuaGF2b2NcXG5ob2dhblxcbmdsaW50XFxucnVkZHlcXG5qZWVwc1xcbmZsYWt5XFxubGFkbGVcXG50YXVudFxcbnNub3JlXFxuZmluZXNcXG5wcm9wc1xcbnBydW5lXFxucGVzb3NcXG5yYWRpaVxcbnBva2VzXFxudGlsZWRcXG5kYWlzeVxcbmhlcm9uXFxudmlsbGFcXG5mYXJjZVxcbmJpbmRzXFxuY2l0ZXNcXG5maXhlc1xcbmplcmtzXFxubGl2aWRcXG53YWtlZFxcbmlua2VkXFxuYm9vbXNcXG5jaGV3c1xcbmxpY2tzXFxuaHllbmFcXG5zY29mZlxcbmx1c3R5XFxuc29uaWNcXG5zbWl0aFxcbnVzaGVyXFxudHVja3NcXG52aWdpbFxcbm1vbHRzXFxuc2VjdHNcXG5zcGFyc1xcbmR1bXBzXFxuc2NhbHlcXG53aXNwc1xcbnNvcmVzXFxubWluY2VcXG5wYW5kYVxcbmZsaWVyXFxuYXhsZXNcXG5wbGllZFxcbmJvb2J5XFxucGF0aW9cXG5yYWJiaVxcbnBldGFsXFxucG9seXBcXG50aW50c1xcbmdyYXRlXFxudHJvbGxcXG50b2xsc1xcbnJlbGljXFxucGhvbnlcXG5ibGVhdFxcbmZsYXdzXFxuZmxha2VcXG5zbmFnc1xcbmFwdGx5XFxuZHJhd2xcXG51bGNlclxcbnNvYXB5XFxuYm9zc3lcXG5tb25rc1xcbmNyYWdzXFxuY2FnZWRcXG50d2FuZ1xcbmRpbmVyXFxudGFwZWRcXG5jYWRldFxcbmdyaWRzXFxuc3Bhd25cXG5ndWlsZVxcbm5vb3NlXFxubW9yZXNcXG5naXJ0aFxcbnNsaW15XFxuYWlkZXNcXG5zcGFzbVxcbmJ1cnJzXFxuYWxpYmlcXG5seW1waFxcbnNhdWN5XFxubXVnZ3lcXG5saXRlclxcbmpva2VkXFxuZ29vZnlcXG5leGFtc1xcbmVuYWN0XFxuc3RvcmtcXG5sdXJlZFxcbnRveGljXFxub21lbnNcXG5uZWFyc1xcbmNvdmV0XFxud3J1bmdcXG5mb3J1bVxcbnZlbm9tXFxubW9vZHlcXG5hbGRlclxcbnNhc3N5XFxuZmxhaXJcXG5ndWlsZFxcbnByYXlzXFxud3JlbnNcXG5oYXVsc1xcbnN0YXZlXFxudGlsdHNcXG5wZWNrc1xcbnN0b21wXFxuZ2FsZXNcXG50ZW1wdFxcbmNhcGVzXFxubWVzYXNcXG5vbWl0c1xcbnRlcGVlXFxuaGFycnlcXG53cmluZ1xcbmV2b2tlXFxubGltZXNcXG5jbHVja1xcbmx1bmdlXFxuaGlnaHNcXG5jYW5lc1xcbmdpZGR5XFxubGl0aGVcXG52ZXJnZVxcbmtoYWtpXFxucXVldWVcXG5sb2F0aFxcbmZveWVyXFxub3V0ZG9cXG5mYXJlZFxcbmRldGVyXFxuY3J1bWJcXG5hc3RpclxcbnNwaXJlXFxuanVtcHlcXG5leHRvbFxcbmJ1b3lzXFxuc3R1YnNcXG5sdWNpZFxcbnRob25nXFxuYWZvcmVcXG53aGlmZlxcbm1heGltXFxuaHVsbHNcXG5jbG9nc1xcbnNsYXRzXFxuamlmZnlcXG5hcmJvclxcbmNpbmNoXFxuaWdsb29cXG5nb29keVxcbmdhemVzXFxuZG93ZWxcXG5jYWxtc1xcbmJpdGNoXFxuc2Nvd2xcXG5ndWxwc1xcbmNvZGVkXFxud2F2ZXJcXG5tYXNvblxcbmxvYmVzXFxuZWJvbnlcXG5mbGFpbFxcbmlzbGVzXFxuY2xvZHNcXG5kYXplZFxcbmFkZXB0XFxub296ZWRcXG5zZWRhblxcbmNsYXlzXFxud2FydHNcXG5rZXRjaFxcbnNrdW5rXFxubWFuZXNcXG5hZG9yZVxcbnNuZWVyXFxubWFuZ29cXG5maW9yZFxcbmZsb3JhXFxucm9vbXlcXG5taW5rc1xcbnRoYXdzXFxud2F0dHNcXG5mcmVlclxcbmV4dWx0XFxucGx1c2hcXG5wYWxlZFxcbnR3YWluXFxuY2xpbmtcXG5zY2FtcFxcbnBhd2VkXFxuZ3JvcGVcXG5icmF2b1xcbmdhYmxlXFxuc3RpbmtcXG5zZXZlclxcbndhbmVkXFxucmFyZXJcXG5yZWdhbFxcbndhcmRzXFxuZmF3bnNcXG5iYWJlc1xcbnVuaWZ5XFxuYW1lbmRcXG5vYWtlblxcbmdsYWRlXFxudmlzb3JcXG5oZWZ0eVxcbm5pbmVzXFxudGhyb2JcXG5wZWNhblxcbmJ1dHRzXFxucGVuY2VcXG5zaWxsc1xcbmphaWxzXFxuZmx5ZXJcXG5zYWJlclxcbm5vbWFkXFxubWl0ZXJcXG5iZWVwc1xcbmRvbWVkXFxuZ3VsZnNcXG5jdXJic1xcbmhlYXRoXFxubW9vcnNcXG5hb3J0YVxcbmxhcmtzXFxudGFuZ3lcXG53cnlseVxcbmNoZWVwXFxucmFnZXNcXG5ldmFkZVxcbmx1cmVzXFxuZnJlYWtcXG52b2d1ZVxcbnR1bmljXFxuc2xhbXNcXG5rbml0c1xcbmR1bXB5XFxubWFuaWFcXG5zcGl0c1xcbmZpcnRoXFxuaGlrZXNcXG50cm90c1xcbm5vc2VkXFxuY2xhbmtcXG5kb2dtYVxcbmJsb2F0XFxuYmFsc2FcXG5ncmFmdFxcbm1pZGR5XFxuc3RpbGVcXG5rZXllZFxcbmZpbmNoXFxuc3Blcm1cXG5jaGFmZlxcbndpbGVzXFxuYW1pZ29cXG5jb3ByYVxcbmFtaXNzXFxuZXlpbmdcXG50d2lybFxcbmx1cmNoXFxucG9wZXNcXG5jaGluc1xcbnNtb2NrXFxudGluZXNcXG5ndWlzZVxcbmdyaXRzXFxuanVua3NcXG5zaG9hbFxcbmNhY2hlXFxudGFwaXJcXG5hdG9sbFxcbmRlaXR5XFxudG9pbHNcXG5zcHJlZVxcbm1vY2tzXFxuc2NhbnNcXG5zaG9yblxcbnJldmVsXFxucmF2ZW5cXG5ob2FyeVxcbnJlZWxzXFxuc2N1ZmZcXG5taW1pY1xcbndlZWR5XFxuY29ybnlcXG50cnVlclxcbnJvdWdlXFxuZW1iZXJcXG5mbG9lc1xcbnRvcnNvXFxud2lwZXNcXG5lZGljdFxcbnN1bGt5XFxucmVjdXJcXG5ncm9pblxcbmJhc3RlXFxua2lua3NcXG5zdXJlclxcbnBpZ2d5XFxubW9sZHlcXG5mcmFuY1xcbmxpYXJzXFxuaW5lcHRcXG5ndXN0eVxcbmZhY2V0XFxuamV0dHlcXG5lcXVpcFxcbmxlcGVyXFxuc2xpbmtcXG5zb2Fyc1xcbmNhdGVyXFxuZG93cnlcXG5zaWRlZFxcbnllYXJuXFxuZGVjb3lcXG50YWJvb1xcbm92YWxzXFxuaGVhbHNcXG5wbGVhc1xcbmJlcmV0XFxuc3BpbHRcXG5nYXlseVxcbnJvdmVyXFxuZW5kb3dcXG5weWdteVxcbmNhcmF0XFxuYWJiZXlcXG52ZW50c1xcbndha2VuXFxuY2hpbXBcXG5mdW1lZFxcbnNvZGFzXFxudmlueWxcXG5jbG91dFxcbndhZGVzXFxubWl0ZXNcXG5zbWlya1xcbmJvcmVzXFxuYnVubnlcXG5zdXJseVxcbmZyb2NrXFxuZm9yYXlcXG5wdXJlclxcbm1pbGtzXFxucXVlcnlcXG5taXJlZFxcbmJsYXJlXFxuZnJvdGhcXG5ncnVlbFxcbm5hdmVsXFxucGFsZXJcXG5wdWZmeVxcbmNhc2tzXFxuZ3JpbWVcXG5kZXJieVxcbm1hbW1hXFxuZ2F2ZWxcXG50ZWRkeVxcbnZvbWl0XFxubW9hbnNcXG5hbGxvdFxcbmRlZmVyXFxud2llbGRcXG52aXBlclxcbmxvdXNlXFxuZXJyZWRcXG5oZXdlZFxcbmFiaG9yXFxud3Jlc3RcXG53YXhlblxcbmFkYWdlXFxuYXJkb3JcXG5zdGFic1xcbnBvcmVkXFxucm9uZG9cXG5sb3BlZFxcbmZpc2h5XFxuYmlibGVcXG5oaXJlc1xcbmZvYWxzXFxuZmV1ZHNcXG5qYW1ic1xcbnRodWRzXFxuamVlcnNcXG5rbmVhZFxcbnF1aXJrXFxucnVnYnlcXG5leHBlbFxcbmdyZXlzXFxucmlnb3JcXG5lc3Rlclxcbmx5cmVzXFxuYWJhY2tcXG5nbHVlc1xcbmxvdHVzXFxubHVyaWRcXG5ydW5nc1xcbmh1dGNoXFxudGh5bWVcXG52YWxldFxcbnRvbW15XFxueW9rZXNcXG5lcGljc1xcbnRyaWxsXFxucGlrZXNcXG5vem9uZVxcbmNhcGVyXFxuY2hpbWVcXG5mcmVlc1xcbmZhbWVkXFxubGVlY2hcXG5zbWl0ZVxcbm5laWdoXFxuZXJvZGVcXG5yb2JlZFxcbmhvYXJkXFxuc2FsdmVcXG5jb25pY1xcbmdhd2t5XFxuY3JhemVcXG5qYWNrc1xcbmdsb2F0XFxubXVzaHlcXG5ydW1wc1xcbmZldHVzXFxud2luY2VcXG5waW5rc1xcbnNoYWx0XFxudG9vdHNcXG5nbGVuc1xcbmNvb2VkXFxucnVzdHNcXG5zdGV3c1xcbnNocmVkXFxucGFya2FcXG5jaHVnc1xcbndpbmtzXFxuY2xvdHNcXG5zaHJld1xcbmJvb2VkXFxuZmlsbXlcXG5qdXJvclxcbmRlbnRzXFxuZ3VtbXlcXG5ncmF5c1xcbmhvb2t5XFxuYnV0dGVcXG5kb2dpZVxcbnBvbGVkXFxucmVhbXNcXG5maWZlc1xcbnNwYW5rXFxuZ2F5ZXJcXG50ZXBpZFxcbnNwb29rXFxudGFpbnRcXG5mbGlydFxcbnJvZ3VlXFxuc3Bpa3lcXG5vcGFsc1xcbm1pc2VyXFxuY29ja3lcXG5jb3lseVxcbmJhbG15XFxuc2xvc2hcXG5icmF3bFxcbmFwaGlkXFxuZmFrZWRcXG5oeWRyYVxcbmJyYWdzXFxuY2hpZGVcXG55YW5rc1xcbmFsbGF5XFxudmlkZW9cXG5hbHRvc1xcbmVhc2VzXFxubWV0ZWRcXG5jaGFzbVxcbmxvbmdzXFxuZXhjZWxcXG50YWZmeVxcbmltcGVsXFxuc2F2b3JcXG5rb2FsYVxcbnF1YXlzXFxuZGF3bnNcXG5wcm94eVxcbmNsb3ZlXFxuZHVldHNcXG5kcmVnc1xcbnRhcmR5XFxuYnJpYXJcXG5ncmlteVxcbnVsdHJhXFxubWVhdHlcXG5oYWx2ZVxcbndhaWxzXFxuc3VlZGVcXG5tYXV2ZVxcbmVudm95XFxuYXJzb25cXG5jb3Zlc1xcbmdvb2V5XFxuYnJld3NcXG5zb2Zhc1xcbmNodW1zXFxuYW1hemVcXG56b29tc1xcbmFiYm90XFxuaGFsb3NcXG5zY291clxcbnN1aW5nXFxuY3JpYnNcXG5zYWdhc1xcbmVuZW1hXFxud29yZHlcXG5oYXJwc1xcbmNvdXBlXFxubW9sYXJcXG5mbG9wc1xcbndlZXBzXFxubWludHNcXG5hc2hlblxcbmZlbHRzXFxuYXNrZXdcXG5tdW5jaFxcbm1ld2VkXFxuZGl2YW5cXG52aWNlc1xcbmp1bWJvXFxuYmxvYnNcXG5ibG90c1xcbnNwdW5rXFxuYWNyaWRcXG50b3BhelxcbmN1YmVkXFxuY2xhbnNcXG5mbGVlc1xcbnNsdXJzXFxuZ25hd3NcXG53ZWxkc1xcbmZvcmRzXFxuZW1pdHNcXG5hZ2F0ZVxcbnB1bWFzXFxubWVuZHNcXG5kYXJrc1xcbmR1a2VzXFxucGxpZXNcXG5jYW5ueVxcbmhvb3RzXFxub296ZXNcXG5sYW1lZFxcbmZvdWxzXFxuY2xlZnNcXG5uaWNrc1xcbm1hdGVkXFxuc2tpbXNcXG5icnVudFxcbnR1YmVyXFxudGluZ2VcXG5mYXRlc1xcbmRpdHR5XFxudGhpbnNcXG5mcmV0c1xcbmVpZGVyXFxuYmF5b3VcXG5tdWxjaFxcbmZhc3RzXFxuYW1hc3NcXG5kYW1wc1xcbm1vcm5zXFxuZnJpYXJcXG5wYWxzeVxcbnZpc3RhXFxuY3Jvb25cXG5jb25jaFxcbnVkZGVyXFxudGFjb3NcXG5za2l0c1xcbm1pa2VzXFxucXVpdHNcXG5wcmVlblxcbmFzdGVyXFxuYWRkZXJcXG5lbGVneVxcbnB1bHB5XFxuc2Nvd3NcXG5iYWxlZFxcbmhvdmVsXFxubGF2YXNcXG5jcmF2ZVxcbm9wdGljXFxud2VsdHNcXG5idXN0c1xcbmtuYXZlXFxucmF6ZWRcXG5zaGluc1xcbnRvdGVzXFxuc2Nvb3RcXG5kZWFyc1xcbmNyb2NrXFxubXV0ZXNcXG50cmltc1xcbnNrZWluXFxuZG90ZWRcXG5zaHVuc1xcbnZlZXJzXFxuZmFrZXNcXG55b2tlZFxcbndvb2VkXFxuaGFja3NcXG5zcHJpZ1xcbndhbmRzXFxubHVsbHNcXG5zZWVyc1xcbnNub2JzXFxubm9va3NcXG5waW5lZFxcbnBlcmt5XFxubW9vZWRcXG5mcmlsbFxcbmRpbmVzXFxuYm9vemVcXG50cmlwZVxcbnByb25nXFxuZHJpcHNcXG5vZGRlclxcbmxldmVlXFxuYW50aWNcXG5zaWRsZVxcbnBpdGh5XFxuY29ya3NcXG55ZWxwc1xcbmpva2VyXFxuZmxlY2tcXG5idWZmc1xcbnNjcmFtXFxudGllcnNcXG5ib2dleVxcbmRvbGVkXFxuaXJhdGVcXG52YWxlc1xcbmNvcGVkXFxuaGFpbHNcXG5lbHVkZVxcbmJ1bGtzXFxuYWlyZWRcXG52eWluZ1xcbnN0YWdzXFxuc3RyZXdcXG5jb2NjaVxcbnBhY3RzXFxuc2NhYnNcXG5zaWxvc1xcbmR1c3RzXFxueW9kZWxcXG50ZXJzZVxcbmphZGVkXFxuYmFzZXJcXG5qaWJlc1xcbmZvaWxzXFxuc3dheXNcXG5mb3Jnb1xcbnNsYXlzXFxucHJleXNcXG50cmVrc1xcbnF1ZWxsXFxucGVla3NcXG5hc3NheVxcbmx1cmtzXFxuZWplY3RcXG5ib2Fyc1xcbnRyaXRlXFxuYmVsY2hcXG5nbmFzaFxcbndhbmVzXFxubHV0ZXNcXG53aGltc1xcbmRvc2VkXFxuY2hld3lcXG5zbmlwZVxcbnVtYnJhXFxudGVlbXNcXG5kb3plc1xcbmtlbHBzXFxudXBwZWRcXG5icmF3blxcbmRvcGVkXFxuc2h1c2hcXG5yaW5kc1xcbnNsdXNoXFxubW9yb25cXG52b2lsZVxcbndva2VuXFxuZmpvcmRcXG5zaGVpa1xcbmplc3RzXFxua2F5YWtcXG5zbGV3c1xcbnRvdGVkXFxuc2FuZXJcXG5kcmFwZVxcbnBhdHR5XFxucmF2ZXNcXG5zdWxmYVxcbmdyaXN0XFxuc2tpZWRcXG52aXhlblxcbmNpdmV0XFxudm91Y2hcXG50aWFyYVxcbmhvbWV5XFxubW9wZWRcXG5ydW50c1xcbnNlcmdlXFxua2lua3lcXG5yaWxsc1xcbmNvcm5zXFxuYnJhdHNcXG5wcmllc1xcbmFtYmxlXFxuZnJpZXNcXG5sb29uc1xcbnRzYXJzXFxuZGF0dW1cXG5tdXNreVxcbnBpZ215XFxuZ25vbWVcXG5yYXZlbFxcbm92dWxlXFxuaWNpbHlcXG5saWtlblxcbmxlbXVyXFxuZnJheXNcXG5zaWx0c1xcbnNpZnRzXFxucGxvZHNcXG5yYW1wc1xcbnRyZXNzXFxuZWFybHNcXG5kdWRlc1xcbndhaXZlXFxua2FyYXRcXG5qb2x0c1xcbnBlb25zXFxuYmVlcnNcXG5ob3JueVxcbnBhbGVzXFxud3JlYWtcXG5sYWlyc1xcbmx5bmNoXFxuc3RhbmtcXG5zd29vblxcbmlkbGVyXFxuYWJvcnRcXG5ibGl0elxcbmVuc3VlXFxuYXRvbmVcXG5iaW5nb1xcbnJvdmVzXFxua2lsdHNcXG5zY2FsZFxcbmFkaW9zXFxuY3luaWNcXG5kdWxsc1xcbm1lbW9zXFxuZWxmaW5cXG5kYWxlc1xcbnBlZWxzXFxucGVhbHNcXG5iYXJlc1xcbnNpbnVzXFxuY3JvbmVcXG5zYWJsZVxcbmhpbmRzXFxuc2hpcmtcXG5lbnJvbFxcbndpbHRzXFxucm9hbXNcXG5kdXBlZFxcbmN5c3RzXFxubWl0dHNcXG5zYWZlc1xcbnNwYXRzXFxuY29vcHNcXG5maWxldFxcbmtuZWxsXFxucmVmaXRcXG5jb3ZleVxcbnB1bmtzXFxua2lsbnNcXG5maXRseVxcbmFiYXRlXFxudGFsY3NcXG5oZWVkc1xcbmR1ZWxzXFxud2FubHlcXG5ydWZmc1xcbmdhdXNzXFxubGFwZWxcXG5qYXVudFxcbndoZWxwXFxuY2xlYXRcXG5nYXV6eVxcbmRpcmdlXFxuZWRpdHNcXG53b3JteVxcbm1vYXRzXFxuc21lYXJcXG5wcm9kc1xcbmJvd2VsXFxuZnJpc2tcXG52ZXN0c1xcbmJheWVkXFxucmFzcHNcXG50YW1lc1xcbmRlbHZlXFxuZW1iZWRcXG5iZWZpdFxcbndhZmVyXFxuY2VkZWRcXG5ub3Zhc1xcbmZlaWduXFxuc3Bld3NcXG5sYXJjaFxcbmh1ZmZzXFxuZG9sZXNcXG5tYW1hc1xcbmh1bGtzXFxucHJpZWRcXG5icmltc1xcbmlya2VkXFxuYXNwaWNcXG5zd2lwZVxcbm1lYWx5XFxuc2tpbXBcXG5ibHVlclxcbnNsYWtlXFxuZG93ZHlcXG5wZW5pc1xcbmJyYXlzXFxucHVwYXNcXG5lZ3JldFxcbmZsdW5rXFxucGhsb3hcXG5ncmlwZVxcbnBlb255XFxuZG91c2VcXG5ibHVyc1xcbmRhcm5zXFxuc2x1bmtcXG5sZWZ0c1xcbmNoYXRzXFxuaW5hbmVcXG52aWFsc1xcbnN0aWx0XFxucmlua3NcXG53b29mc1xcbndvd2VkXFxuYm9uZ3NcXG5mcm9uZFxcbmluZ290XFxuZXZpY3RcXG5zaW5nZVxcbnNoeWVyXFxuZmxpZWRcXG5zbG9wc1xcbmRvbHRzXFxuZHJvb2xcXG5kZWxsc1xcbndoZWxrXFxuaGlwcHlcXG5mZXRlZFxcbmV0aGVyXFxuY29jb3NcXG5oaXZlc1xcbmppYmVkXFxubWF6ZXNcXG50cmlvc1xcbnNpcnVwXFxuc3F1YWJcXG5sYXRoc1xcbmxlZXJzXFxucGFzdGFcXG5yaWZ0c1xcbmxvcGVzXFxuYWxpYXNcXG53aGlyc1xcbmRpY2VkXFxuc2xhZ3NcXG5sb2Rlc1xcbmZveGVkXFxuaWRsZWRcXG5wcm93c1xcbnBsYWl0XFxubWFsdHNcXG5jaGFmZVxcbmNvd2VyXFxudG95ZWRcXG5jaGVmc1xcbmtlZWxzXFxuc3RpZXNcXG5yYWNlclxcbmV0dWRlXFxuc3Vja3NcXG5zdWxrc1xcbm1pY2FzXFxuY3phcnNcXG5jb3BzZVxcbmFpbGVkXFxuYWJsZXJcXG5yYWJpZFxcbmdvbGRzXFxuY3JvdXBcXG5zbmFreVxcbnZpc2FzXFxucGFsbHNcXG5tb3Blc1xcbmJvbmVkXFxud2lzcHlcXG5yYXZlZFxcbnN3YXBzXFxuanVua3lcXG5kb2lseVxcbnBhd25zXFxudGFtZXJcXG5wb2FjaFxcbmJhaXRzXFxuZGFtbnNcXG5ndW1ib1xcbmRhdW50XFxucHJhbmtcXG5odW5rc1xcbmJ1eG9tXFxuaGVyZXNcXG5ob25rc1xcbnN0b3dzXFxudW5iYXJcXG5pZGxlc1xcbnJvdXRzXFxuc2FnZXNcXG5nb2Fkc1xcbnJlbWl0XFxuY29wZXNcXG5kZWlnblxcbmN1bGxzXFxuZ2lyZHNcXG5oYXZlc1xcbmx1Y2tzXFxuc3R1bmtcXG5kb2Rvc1xcbnNoYW1zXFxuc251YnNcXG5pY29uc1xcbnVzdXJwXFxuZG9vbXNcXG5oZWxsc1xcbnNvbGVkXFxuY29tYXNcXG5wYXZlc1xcbm1hdGhzXFxucGVya3NcXG5saW1wc1xcbndvbWJzXFxuYmx1cmJcXG5kYXVic1xcbmNva2VzXFxuc291cnNcXG5zdHVuc1xcbmNhc2VkXFxubXVzdHNcXG5jb2Vkc1xcbmNvd2VkXFxuYXBpbmdcXG56b25lZFxcbnJ1bW15XFxuZmV0ZXNcXG5za3Vsa1xcbnF1YWZmXFxucmFqYWhcXG5kZWFuc1xcbnJlYXBzXFxuZ2FsYXNcXG50aWxsc1xcbnJvdmVkXFxua3Vkb3NcXG50b25lZFxcbnBhcmVkXFxuc2N1bGxcXG52ZXhlc1xcbnB1bnRzXFxuc25vb3BcXG5iYWlsc1xcbmRhbWVzXFxuaGF6ZXNcXG5sb3Jlc1xcbm1hcnRzXFxudm9pZHNcXG5hbWViYVxcbnJha2VzXFxuYWR6ZXNcXG5oYXJtc1xcbnJlYXJzXFxuc2F0eXJcXG5zd2lsbFxcbmhleGVzXFxuY29saWNcXG5sZWVrc1xcbmh1cmxzXFxueW93bHNcXG5pdmllc1xcbnBsb3BzXFxubXVza3NcXG5wYXBhd1xcbmplbGxzXFxuYnVzZWRcXG5jcnVldFxcbmJpZGVkXFxuZmlsY2hcXG56ZXN0c1xcbnJvb2tzXFxubGF4bHlcXG5yZW5kc1xcbmxvYW1zXFxuYmFza3NcXG5zaXJlc1xcbmNhcnBzXFxucG9rZXlcXG5mbGl0c1xcbm11c2VzXFxuYmF3bHNcXG5zaHVja1xcbnZpbGVyXFxubGlzcHNcXG5wZWVwc1xcbnNvcmVyXFxubG9sbHNcXG5wcnVkZVxcbmRpa2VkXFxuZmxvc3NcXG5mbG9nc1xcbnNjdW1zXFxuZG9wZXNcXG5ib2dpZVxcbnBpbmt5XFxubGVhZnNcXG50dWJhc1xcbnNjYWRzXFxubG93ZWRcXG55ZXNlc1xcbmJpa2VkXFxucXVhbG1cXG5ldmVuc1xcbmNhbmVkXFxuZ2F3a3NcXG53aGl0c1xcbndvb2x5XFxuZ2x1dHNcXG5yb21wc1xcbmJlc3RzXFxuZHVuY2VcXG5jcm9ueVxcbmpvaXN0XFxudHVuYXNcXG5ib25lclxcbm1hbGxzXFxucGFyY2hcXG5hdmVyc1xcbmNyYW1zXFxucGFyZXNcXG5kYWxseVxcbmJpZ290XFxua2FsZXNcXG5mbGF5c1xcbmxlYWNoXFxuZ3VzaHlcXG5wb29jaFxcbmh1Z2VyXFxuc2x5ZXJcXG5nb2xmc1xcbm1pcmVzXFxuZmx1ZXNcXG5sb2Fmc1xcbmFyY2VkXFxuYWNuZXNcXG5uZW9uc1xcbmZpZWZzXFxuZGludHNcXG5kYXplc1xcbnBvdXRzXFxuY29yZWRcXG55dWxlc1xcbmxpbHRzXFxuYmVlZnNcXG5tdXR0c1xcbmZlbGxzXFxuY293bHNcXG5zcHVkc1xcbmxhbWVzXFxuamF3ZWRcXG5kdXBlc1xcbmRlYWRzXFxuYnlsYXdcXG5ub29uc1xcbm5pZnR5XFxuY2x1ZWRcXG52aXJlb1xcbmdhcGVzXFxubWV0ZXNcXG5jdXRlclxcbm1haW1zXFxuZHJvbGxcXG5jdXBpZFxcbm1hdWxzXFxuc2VkZ2VcXG5wYXBhc1xcbndoZXlzXFxuZWtpbmdcXG5sb290c1xcbmhpbHRzXFxubWVvd3NcXG5iZWF1c1xcbmRpY2VzXFxucGVwcHlcXG5yaXBlclxcbmZvZ2V5XFxuZ2lzdHNcXG55b2dhc1xcbmdpbHRzXFxuc2tld3NcXG5jZWRlc1xcbnplYWxzXFxuYWx1bXNcXG5va2F5c1xcbmVsb3BlXFxuZ3J1bXBcXG53YWZ0c1xcbnNvb3RzXFxuYmxpbXBcXG5oZWZ0c1xcbm11bGxzXFxuaG9zZWRcXG5jcmVzc1xcbmRvZmZzXFxucnVkZXJcXG5waXhpZVxcbndhaWZzXFxub3VzdHNcXG5wdWNrc1xcbmJpZXJzXFxuZ3VsY2hcXG5zdWV0c1xcbmhvYm9zXFxubGludHNcXG5icmFuc1xcbnRlYWxzXFxuZ2FyYnNcXG5wZXdlZVxcbmhlbG1zXFxudHVyZnNcXG5xdWlwc1xcbndlbmRzXFxuYmFuZXNcXG5uYXBlc1xcbmljaWVyXFxuc3dhdHNcXG5iYWdlbFxcbmhleGVkXFxub2dyZXNcXG5nb25lclxcbmdpbGRzXFxucHlyZXNcXG5sYXJkc1xcbmJpZGVzXFxucGFnZWRcXG50YWxvblxcbmZsb3V0XFxubWVkaWNcXG52ZWFsc1xcbnB1dHRzXFxuZGlya3NcXG5kb3Rlc1xcbnRpcHB5XFxuYmx1cnRcXG5waXRoc1xcbmFjaW5nXFxuYmFyZXJcXG53aGV0c1xcbmdhaXRzXFxud29vbHNcXG5kdW5rc1xcbmhlcm9zXFxuc3dhYnNcXG5kaXJ0c1xcbmp1dGVzXFxuaGVtcHNcXG5zdXJmc1xcbm9rYXBpXFxuY2hvd3NcXG5zaG9vc1xcbmR1c2tzXFxucGFycnlcXG5kZWNhbFxcbmZ1cmxzXFxuY2lsaWFcXG5zZWFyc1xcbm5vdmFlXFxubXVya3NcXG53YXJwc1xcbnNsdWVzXFxubGFtZXJcXG5zYXJpc1xcbndlYW5zXFxucHVycnNcXG5kaWxsc1xcbnRvZ2FzXFxubmV3dHNcXG5tZWFueVxcbmJ1bnRzXFxucmF6ZXNcXG5nb29uc1xcbndpY2tzXFxucnVzZXNcXG52ZW5kc1xcbmdlb2RlXFxuZHJha2VcXG5qdWRvc1xcbmxvZnRzXFxucHVscHNcXG5sYXVkc1xcbm11Y2tzXFxudmlzZXNcXG5tb2NoYVxcbm9pbGVkXFxucm9tYW5cXG5ldGh5bFxcbmdvdHRhXFxuZnVndWVcXG5zbWFja1xcbmdvdXJkXFxuYnVtcHlcXG5yYWRpeFxcbmZhdHR5XFxuYm9yYXhcXG5jdWJpdFxcbmNhY3RpXFxuZ2FtbWFcXG5mb2NhbFxcbmF2YWlsXFxucGFwYWxcXG5nb2xseVxcbmVsaXRlXFxudmVyc2FcXG5iaWxseVxcbmFkaWV1XFxuYW5udW1cXG5ob3dkeVxcbnJoaW5vXFxubm9ybXNcXG5ib2JieVxcbmF4aW9tXFxuc2V0dXBcXG55b2xrc1xcbnRlcm5zXFxubWl4ZXJcXG5nZW5yZVxcbmtub2xsXFxuYWJvZGVcXG5qdW50YVxcbmdvcmdlXFxuY29tYm9cXG5hbHBoYVxcbm92ZXJ0XFxua2luZGFcXG5zcGVsdFxcbnByaWNrXFxubm9ibHlcXG5lcGhvZFxcbmF1ZGlvXFxubW9kYWxcXG52ZWxkdFxcbndhcnR5XFxuZmx1a2VcXG5ib25ueVxcbmJyZWFtXFxucm9zaW5cXG5ib2xsc1xcbmRvZXJzXFxuZG93bnNcXG5iZWFkeVxcbm1vdGlmXFxuaHVtcGhcXG5mZWxsYVxcbm1vdWxkXFxuY3JlcGVcXG5rZXJuc1xcbmFsb2hhXFxuZ2x5cGhcXG5henVyZVxcbnJpc2VyXFxuYmxlc3RcXG5sb2N1c1xcbmx1bXB5XFxuYmVyeWxcXG53YW5uYVxcbmJyaWVyXFxudHVuZXJcXG5yb3dkeVxcbm11cmFsXFxudGltZXJcXG5jYW5zdFxcbmtyaWxsXFxucXVvdGhcXG5sZW1tZVxcbnRyaWFkXFxudGVub25cXG5hbXBseVxcbmRlZXBzXFxucGFkcmVcXG5sZWFudFxcbnBhY2VyXFxub2N0YWxcXG5kb2xseVxcbnRyYW5zXFxuc3VtYWNcXG5mb2FteVxcbmxvbGx5XFxuZ2l2ZXJcXG5xdWlwdVxcbmNvZGV4XFxubWFubmFcXG51bndlZFxcbnZvZGthXFxuZmVybnlcXG5zYWxvblxcbmR1cGxlXFxuYm9yb25cXG5yZXZ1ZVxcbmNyaWVyXFxuYWxhY2tcXG5pbnRlclxcbmRpbGx5XFxud2hpc3RcXG5jdWx0c1xcbnNwYWtlXFxucmVzZXRcXG5sb2Vzc1xcbmRlY29yXFxubW92ZXJcXG52ZXJ2ZVxcbmV0aGljXFxuZ2FtdXRcXG5saW5nb1xcbmR1bm5vXFxuYWxpZ25cXG5zaXNzeVxcbmluY3VyXFxucmVlZHlcXG5hdmFudFxcbnBpcGVyXFxud2F4ZXJcXG5jYWx5eFxcbmJhc2lsXFxuY29vbnNcXG5zZWluZVxcbnBpbmV5XFxubGVtbWFcXG50cmFtc1xcbndpbmNoXFxud2hpcnJcXG5zYWl0aFxcbmlvbmljXFxuaGVhZHlcXG5oYXJlbVxcbnR1bW15XFxuc2FsbHlcXG5zaGllZFxcbmRyb3NzXFxuZmFyYWRcXG5zYXZlclxcbnRpbGRlXFxuamluZ29cXG5ib3dlclxcbnNlcmlmXFxuZmFjdG9cXG5iZWxsZVxcbmluc2V0XFxuYm9ndXNcXG5jYXZlZFxcbmZvcnRlXFxuc29vdHlcXG5ib25nb1xcbnRvdmVzXFxuY3JlZG9cXG5iYXNhbFxcbnllbGxhXFxuYWdsb3dcXG5nbGVhblxcbmd1c3RvXFxuaHltZW5cXG5ldGhvc1xcbnRlcnJhXFxuYnJhc2hcXG5zY3JpcFxcbnN3YXNoXFxuYWxlcGhcXG50aW5ueVxcbml0Y2h5XFxud2FudGFcXG50cmljZVxcbmpvd2xzXFxuZ29uZ3NcXG5nYXJkZVxcbmJvcmljXFxudHdpbGxcXG5zb3dlclxcbmhlbnJ5XFxuYXdhc2hcXG5saWJlbFxcbnNwdXJuXFxuc2FicmVcXG5yZWJ1dFxcbnBlbmFsXFxub2Jlc2VcXG5zb25ueVxcbnF1aXJ0XFxubWViYmVcXG50YWNpdFxcbmdyZWVrXFxueGVub25cXG5odWxsb1xcbnBpcXVlXFxucm9nZXJcXG5uZWdyb1xcbmhhZHN0XFxuZ2Vja29cXG5iZWdldFxcbnVuY3V0XFxuYWxvZXNcXG5sb3Vpc1xcbnF1aW50XFxuY2x1bmtcXG5yYXBlZFxcbnNhbHZvXFxuZGlvZGVcXG5tYXRleVxcbmhlcnR6XFxueHlsZW1cXG5raW9za1xcbmFwYWNlXFxuY2F3ZWRcXG5wZXRlclxcbndlbmNoXFxuY29ob3NcXG5zb3J0YVxcbmdhbWJhXFxuYnl0ZXNcXG50YW5nb1xcbm51dHR5XFxuYXhpYWxcXG5hbGVja1xcbm5hdGFsXFxuY2xvbXBcXG5nb3JlZFxcbnNpcmVlXFxuYmFuZHlcXG5ndW5ueVxcbnJ1bmljXFxud2hpenpcXG5ydXBlZVxcbmZhdGVkXFxud2lwZXJcXG5iYXJkc1xcbmJyaW55XFxuc3RhaWRcXG5ob2Nrc1xcbm9jaHJlXFxueXVtbXlcXG5nZW50c1xcbnNvdXB5XFxucm9wZXJcXG5zd2F0aFxcbmNhbWVvXFxuZWRnZXJcXG5zcGF0ZVxcbmdpbW1lXFxuZWJiZWRcXG5icmV2ZVxcbnRoZXRhXFxuZGVlbXNcXG5keWtlc1xcbnNlcnZvXFxudGVsbHlcXG50YWJieVxcbnRhcmVzXFxuYmxvY3NcXG53ZWxjaFxcbmdob3VsXFxudml0YWVcXG5jdW1pblxcbmRpbmt5XFxuYnJvbmNcXG50YWJvclxcbnRlZW55XFxuY29tZXJcXG5ib3JlclxcbnNpcmVkXFxucHJpdnlcXG5tYW1teVxcbmRlYXJ5XFxuZ3lyb3NcXG5zcHJpdFxcbmNvbmdhXFxucXVpcmVcXG50aHVnc1xcbmZ1cm9yXFxuYmxva2VcXG5ydW5lc1xcbmJhd2R5XFxuY2FkcmVcXG50b3hpblxcbmFubnVsXFxuZWdnZWRcXG5hbmlvblxcbm5vZGVzXFxucGlja3lcXG5zdGVpblxcbmplbGxvXFxuYXVkaXRcXG5lY2hvc1xcbmZhZ290XFxubGV0dXBcXG5leXJpZVxcbmZvdW50XFxuY2FwZWRcXG5heG9uc1xcbmFtdWNrXFxuYmFuYWxcXG5yaWxlZFxcbnBldGl0XFxudW1iZXJcXG5taWxlclxcbmZpYnJlXFxuYWdhdmVcXG5iYXRlZFxcbmJpbGdlXFxudml0cm9cXG5mZWludFxcbnB1ZGd5XFxubWF0ZXJcXG5tYW5pY1xcbnVtcGVkXFxucGVza3lcXG5zdHJlcFxcbnNsdXJwXFxucHlsb25cXG5wdXJlZVxcbmNhcmV0XFxudGVtcHNcXG5uZXdlbFxcbnlhd25zXFxuc2VlZHlcXG50cmVlZFxcbmNvdXBzXFxucmFuZ3lcXG5icmFkc1xcbm1hbmd5XFxubG9uZXJcXG5jaXJjYVxcbnRpYmlhXFxuYWZvdWxcXG5tb21teVxcbnRpdGVyXFxuY2FybmVcXG5rb29reVxcbm1vdGVzXFxuYW1pdHlcXG5zdWF2ZVxcbmhpcHBvXFxuY3VydnlcXG5zYW1iYVxcbm5ld3N5XFxuYW5pc2VcXG5pbWFtc1xcbnR1bGxlXFxuYXdheXNcXG5saXZlblxcbmhhbGxvXFxud2FsZXNcXG5vcHRlZFxcbmNhbnRvXFxuaWR5bGxcXG5ib2Rlc1xcbmN1cmlvXFxud3JhY2tcXG5oaWtlclxcbmNoaXZlXFxueW9rZWxcXG5kb3R0eVxcbmRlbXVyXFxuY3VzcHNcXG5zcGVjc1xcbnF1YWRzXFxubGFpdHlcXG50b25lclxcbmRlY3J5XFxud3JpdHNcXG5zYXV0ZVxcbmNsYWNrXFxuYXVnaHRcXG5sb2dvc1xcbnRpcHN5XFxubmF0dHlcXG5kdWNhbFxcbmJpZGV0XFxuYnVsZ3lcXG5tZXRyZVxcbmx1c3RzXFxudW5hcnlcXG5nb2V0aFxcbmJhbGVyXFxuc2l0ZWRcXG5zaGllc1xcbmhhc3BzXFxuYnJ1bmdcXG5ob2xlZFxcbnN3YW5rXFxubG9va3lcXG5tZWxlZVxcbmh1ZmZ5XFxubG9hbXlcXG5waW1wc1xcbnRpdGFuXFxuYmluZ2VcXG5zaHVudFxcbmZlbXVyXFxubGlicmFcXG5zZWRlclxcbmhvbmVkXFxuYW5uYXNcXG5jb3lwdVxcbnNoaW1zXFxuem93aWVcXG5qaWhhZFxcbnNhdnZ5XFxubmFkaXJcXG5iYXNzb1xcbm1vbmljXFxubWFuZWRcXG5tb3VzeVxcbm9tZWdhXFxubGF2ZXJcXG5wcmltYVxcbnBpY2FzXFxuZm9saW9cXG5tZWNjYVxcbnJlYWxzXFxudHJvdGhcXG50ZXN0eVxcbmJhbGt5XFxuY3JpbXBcXG5jaGlua1xcbmFiZXRzXFxuc3BsYXRcXG5hYmFjaVxcbnZhdW50XFxuY3V0aWVcXG5wYXN0eVxcbm1vcmF5XFxubGV2aXNcXG5yYXR0eVxcbmlzbGV0XFxuam91c3RcXG5tb3RldFxcbnZpcmFsXFxubnVrZXNcXG5ncmFkc1xcbmNvbWZ5XFxudm9pbGFcXG53b296eVxcbmJsdWVkXFxud2hvbXBcXG5zd2FyZFxcbm1ldHJvXFxuc2tlZXRcXG5jaGluZVxcbmFlcmllXFxuYm93aWVcXG50dWJieVxcbmVtaXJzXFxuY29hdGlcXG51bnppcFxcbnNsb2JzXFxudHJpa2VcXG5mdW5reVxcbmR1Y2F0XFxuZGV3ZXlcXG5za29hbFxcbndhZGlzXFxub29tcGhcXG50YWtlclxcbm1pbmltXFxuZ2V0dXBcXG5zdG9pY1xcbnN5bm9kXFxucnVudHlcXG5mbHlieVxcbmJyYXplXFxuaW5sYXlcXG52ZW51ZVxcbmxvdXRzXFxucGVhdHlcXG5vcmxvblxcbmh1bXB5XFxucmFkb25cXG5iZWF1dFxcbnJhc3B5XFxudW5mZWRcXG5jcmlja1xcbm5hcHB5XFxudml6b3JcXG55aXBlc1xcbnJlYnVzXFxuZGl2b3RcXG5raXdpc1xcbnZldGNoXFxuc3F1aWJcXG5zaXRhclxcbmtpZGRvXFxuZHllcnNcXG5jb3R0YVxcbm1hdHpvXFxubGFnZXJcXG56ZWJ1c1xcbmNyYXNzXFxuZGFjaGFcXG5rbmVlZFxcbmRpY3RhXFxuZmFraXJcXG5rbnVybFxcbnJ1bm55XFxudW5waW5cXG5qdWxlcFxcbmdsb2JzXFxubnVkZXNcXG5zdXNoaVxcbnRhY2t5XFxuc3Rva2VcXG5rYXB1dFxcbmJ1dGNoXFxuaHVsYXNcXG5jcm9mdFxcbmFjaG9vXFxuZ2VuaWlcXG5ub2RhbFxcbm91dGdvXFxuc3BpZWxcXG52aW9sc1xcbmZldGlkXFxuY2FnZXlcXG5mdWRneVxcbmVwb3h5XFxubGVnZ3lcXG5oYW5reVxcbmxhcGlzXFxuZmVsb25cXG5iZWVmeVxcbmNvb3RzXFxubWVsYmFcXG5jYWRkeVxcbnNlZ3VlXFxuYmV0ZWxcXG5mcml6elxcbmRyZWFyXFxua29va3NcXG50dXJib1xcbmhvYWd5XFxubW91bHRcXG5oZWxpeFxcbnpvbmFsXFxuYXJpYXNcXG5ub3NleVxcbnBhZWFuXFxubGFjZXlcXG5iYW5uc1xcbnN3YWluXFxuZnJ5ZXJcXG5yZXRjaFxcbnRlbmV0XFxuZ2lnYXNcXG53aGlueVxcbm9nbGVkXFxucnVtZW5cXG5iZWdvdFxcbmNydXNlXFxuYWJ1dHNcXG5yaXZlblxcbmJhbGtzXFxuc2luZXNcXG5zaWdtYVxcbmFiYXNlXFxuZW5udWlcXG5nb3Jlc1xcbnVuc2V0XFxuYXVndXJcXG5zYXRlZFxcbm9kaXVtXFxubGF0aW5cXG5kaW5nc1xcbm1vaXJlXFxuc2Npb25cXG5oZW5uYVxcbmtyYXV0XFxuZGlja3NcXG5saWZlclxcbnByaWdzXFxuYmVib3BcXG5nYWdlc1xcbmdhemVyXFxuZmFubnlcXG5naWJlc1xcbmF1cmFsXFxudGVtcGlcXG5ob29jaFxcbnJhcGVzXFxuc251Y2tcXG5oYXJ0c1xcbnRlY2hzXFxuZW1lbmRcXG5uaW5ueVxcbmd1YXZhXFxuc2NhcnBcXG5saWVnZVxcbnR1ZnR5XFxuc2VwaWFcXG50b21lc1xcbmNhcm9iXFxuZW1jZWVcXG5wcmFtc1xcbnBvc2VyXFxudmVyc29cXG5odWJiYVxcbmpvdWxlXFxuYmFpemVcXG5ibGlwc1xcbnNjcmltXFxuY3ViYnlcXG5jbGF2ZVxcbndpbm9zXFxucmVhcm1cXG5saWVuc1xcbmx1bWVuXFxuY2h1bXBcXG5uYW5ueVxcbnRydW1wXFxuZmljaHVcXG5jaG9tcFxcbmhvbW9zXFxucHVydHlcXG5tYXNlclxcbndvb3NoXFxucGF0c3lcXG5zaGlsbFxcbnJ1c2tzXFxuYXZhc3RcXG5zd2FtaVxcbmJvZGVkXFxuYWhoaGhcXG5sb2JlZFxcbm5hdGNoXFxuc2hpc2hcXG50YW5zeVxcbnNub290XFxucGF5ZXJcXG5hbHRob1xcbnNhcHB5XFxubGF4ZXJcXG5odWJieVxcbmFlZ2lzXFxucmlsZXNcXG5kaXR0b1xcbmphenp5XFxuZGluZ29cXG5xdWFzaVxcbnNlcHRhXFxucGVha3lcXG5sb3JyeVxcbmhlZXJkXFxuYml0dHlcXG5wYXllZVxcbnNlYW15XFxuYXBzZXNcXG5pbWJ1ZVxcbmJlbGllXFxuY2hhcnlcXG5zcG9vZlxcbnBoeWxhXFxuY2xpbWVcXG5iYWJlbFxcbndhY2t5XFxuc3VtcHNcXG5za2lkc1xcbmtoYW5zXFxuY3J5cHRcXG5pbnVyZVxcbm5vbmNlXFxub3V0ZW5cXG5mYWlyZVxcbmhvb2V5XFxuYW5vbGVcXG5rYXpvb1xcbmNhbHZlXFxubGltYm9cXG5hcmdvdFxcbmR1Y2t5XFxuZmFrZXJcXG52aWJlc1xcbmdhc3N5XFxudW5saXRcXG5uZXJ2eVxcbmZlbW1lXFxuYml0ZXJcXG5maWNoZVxcbmJvb3JzXFxuZ2FmZmVcXG5zYXhlc1xcbnJlY2FwXFxuc3luY2hcXG5mYWNpZVxcbmRpY2V5XFxub3VpamFcXG5oZXdlclxcbmxlZ2l0XFxuZ3VydXNcXG5lZGlmeVxcbnR3ZWFrXFxuY2Fyb25cXG50eXBvc1xcbnJlcnVuXFxucG9sbHlcXG5zdXJkc1xcbmhhbXphXFxubnVsbHNcXG5oYXRlclxcbmxlZnR5XFxubW9ndWxcXG5tYWZpYVxcbmRlYnVnXFxucGF0ZXNcXG5ibGFic1xcbnNwbGF5XFxudGFsdXNcXG5wb3Jub1xcbm1vb2xhXFxubml4ZWRcXG5raWxvc1xcbnNuaWRlXFxuaG9yc3lcXG5nZXNzb1xcbmphZ2d5XFxudHJvdmVcXG5uaXhlc1xcbmNyZWVsXFxucGF0ZXJcXG5pb3Rhc1xcbmNhZGdlXFxuc2t5ZWRcXG5ob2t1bVxcbmZ1cnplXFxuYW5raHNcXG5jdXJpZVxcbm51dHN5XFxuaGlsdW1cXG5yZW1peFxcbmFuZ3N0XFxuYnVybHNcXG5qaW1teVxcbnZlaW55XFxudHJ5c3RcXG5jb2RvblxcbmJlZm9nXFxuZ2FtZWRcXG5mbHVtZVxcbmF4bWFuXFxuZG9venlcXG5sdWJlc1xcbnJoZWFzXFxuYm96b3NcXG5idXR5bFxcbmtlbGx5XFxubXluYWhcXG5qb2Nrc1xcbmRvbnV0XFxuYXZpYW5cXG53dXJzdFxcbmNob2NrXFxucXVhc2hcXG5xdWFsc1xcbmhheWVkXFxuYm9tYmVcXG5jdXNoeVxcbnNwYWN5XFxucHVrZWRcXG5sZWVyeVxcbnRoZXdzXFxucHJpbmtcXG5hbWVuc1xcbnRlc2xhXFxuaW50cm9cXG5maXZlclxcbmZydW1wXFxuY2Fwb3NcXG5vcGluZVxcbmNvZGVyXFxubmFtZXJcXG5qb3dseVxcbnB1a2VzXFxuaGFsZWRcXG5jaGFyZFxcbmR1ZmZzXFxuYnJ1aW5cXG5yZXVzZVxcbndoYW5nXFxudG9vbnNcXG5mcmF0c1xcbnNpbHR5XFxudGVsZXhcXG5jdXR1cFxcbm5pc2VpXFxubmVhdG9cXG5kZWNhZlxcbnNvZnR5XFxuYmltYm9cXG5hZGxpYlxcbmxvb255XFxuc2hvZWRcXG5hZ3Vlc1xcbnBlZXZlXFxubm93YXlcXG5nYW1leVxcbnNhcmdlXFxucmVyYW5cXG5lcGFjdFxcbnBvdHR5XFxuY29uZWRcXG51cGVuZFxcbm5hcmNvXFxuaWthdHNcXG53aG9ybFxcbmppbmtzXFxudGl6enlcXG53ZWVweVxcbnBvc2l0XFxubWFyZ2VcXG52ZWdhblxcbmNsb3BzXFxubnVtYnNcXG5yZWVrc1xcbnJ1YmVzXFxucm93ZXJcXG5iaXBlZFxcbnRpZmZzXFxuaG9jdXNcXG5oYW1teVxcbmJ1bmNvXFxuZml4aXRcXG50eWtlc1xcbmNoYXdzXFxueXVja3lcXG5ob2tleVxcbnJlc2V3XFxubWF2ZW5cXG5hZG1hblxcbnNjdXp6XFxuc2xvZ3NcXG5zb3VzZVxcbm5hY2hvXFxubWltZWRcXG5tZWxkc1xcbmJvZmZvXFxuZGViaXRcXG5waW51cFxcbnZhZ3VzXFxuZ3VsYWdcXG5yYW5keVxcbmJvc3VuXFxuZWR1Y2VcXG5mYXhlc1xcbmF1cmFzXFxucGVzdG9cXG5hbnRzeVxcbmJldGFzXFxuZml6enlcXG5kb3JreVxcbnNuaXRzXFxubW94aWVcXG50aGFuZVxcbm15bGFyXFxubm9iYnlcXG5nYW1pblxcbmdvdXR5XFxuZXNzZXNcXG5nb3lpbVxcbnBhbmVkXFxuZHJ1aWRcXG5qYWRlc1xcbnJlaGFiXFxuZ29mZXJcXG50emFyc1xcbm9jdGV0XFxuaG9tZWRcXG5zb2Nrb1xcbmRvcmtzXFxuZWFyZWRcXG5hbnRlZFxcbmVsaWRlXFxuZmF6ZXNcXG5veGJvd1xcbmRvd3NlXFxuc2l0dXNcXG5tYWNhd1xcbnNjb25lXFxuZHJpbHlcXG5oeXBlclxcbnNhbHNhXFxubW9vY2hcXG5nYXRlZFxcbnVuamFtXFxubGlwaWRcXG5taXRyZVxcbnZlbmFsXFxua25pc2hcXG5yaXR6eVxcbmRpdmFzXFxudG9ydXNcXG5tYW5nZVxcbmRpbWVyXFxucmVjdXRcXG5tZXNvblxcbndpbmVkXFxuZmVuZHNcXG5waGFnZVxcbmZpYXRzXFxuY2F1bGtcXG5jYXZpbFxcbnBhbnR5XFxucm9hbnNcXG5iaWxrc1xcbmhvbmVzXFxuYm90Y2hcXG5lc3RvcFxcbnN1bGx5XFxuc29vdGhcXG5nZWxkc1xcbmFob2xkXFxucmFwZXJcXG5wYWdlclxcbmZpeGVyXFxuaW5maXhcXG5oaWNrc1xcbnR1eGVzXFxucGxlYmVcXG50d2l0c1xcbmFiYXNoXFxudHdpeHRcXG53YWNrb1xcbnByaW1wXFxubmFibGFcXG5naXJ0c1xcbm1pZmZzXFxuZW1vdGVcXG54ZXJveFxcbnJlYmlkXFxuc2hhaHNcXG5ydXR0eVxcbmdyb3V0XFxuZ3JpZnRcXG5kZWlmeVxcbmJpZGR5XFxua29wZWtcXG5zZW1pc1xcbmJyaWVzXFxuYWNtZXNcXG5waXRvblxcbmh1c3N5XFxudG9ydHNcXG5kaXNjb1xcbndob3JlXFxuYm9venlcXG5naWJlZFxcbnZhbXBzXFxuYW1vdXJcXG5zb3BweVxcbmdvbnpvXFxuZHVyc3RcXG53YWRlclxcbnR1dHVzXFxucGVybXNcXG5jYXR0eVxcbmdsaXR6XFxuYnJpZ3NcXG5uZXJkc1xcbmJhcm15XFxuZ2l6bW9cXG5vd2xldFxcbnNheWVyXFxubW9sbHNcXG5zaGFyZFxcbndob3BzXFxuY29tcHNcXG5jb3JlclxcbmNvbGFzXFxubWF0dGVcXG5kcm9pZFxcbnBsb3lzXFxudmFwaWRcXG5jYWlyblxcbmRlaXNtXFxubWl4dXBcXG55aWtlc1xcbnByb3N5XFxucmFrZXJcXG5mbHVic1xcbndoaXNoXFxucmVpZnlcXG5jcmFwc1xcbnNoYWdzXFxuY2xvbmVcXG5oYXplZFxcbm1hY2hvXFxucmVjdG9cXG5yZWZpeFxcbmRyYW1zXFxuYmlrZXJcXG5hcXVhc1xcbnBvcmt5XFxuZG95ZW5cXG5leHVkZVxcbmdvb2ZzXFxuZGl2dnlcXG5ub2Vsc1xcbmppdmVkXFxuaHVsa3lcXG5jYWdlclxcbmhhcnB5XFxub2xkaWVcXG52aXZhc1xcbmFkbWl4XFxuY29kYXNcXG56aWxjaFxcbmRlaXN0XFxub3JjYXNcXG5yZXRyb1xcbnBpbGFmXFxucGFyc2VcXG5yYW50c1xcbnppbmd5XFxudG9kZHlcXG5jaGlmZlxcbm1pY3JvXFxudmVlcHNcXG5naXJseVxcbm5leHVzXFxuZGVtb3NcXG5iaWJic1xcbmFudGVzXFxubHVsdXNcXG5nbmFybFxcbnppcHB5XFxuaXZpZWRcXG5lcGVlc1xcbndpbXBzXFxudHJvbXBcXG5ncmFpbFxcbnlveW9zXFxucG91ZnNcXG5oYWxlc1xcbnJvdXN0XFxuY2FiYWxcXG5yYXdlclxcbnBhbXBhXFxubW9zZXlcXG5rZWZpclxcbmJ1cmdzXFxudW5tZXRcXG5jdXNweVxcbmJvb2JzXFxuYm9vbnNcXG5oeXBlc1xcbmR5bmVzXFxubmFyZHNcXG5sYW5haVxcbnlvZ2lzXFxuc2VwYWxcXG5xdWFya1xcbnRva2VkXFxucHJhdGVcXG5heWluc1xcbmhhd2VkXFxuc3dpZ3NcXG52aXRhc1xcbnRva2VyXFxuZG9wZXJcXG5ib3NzYVxcbmxpbnR5XFxuZm9pc3RcXG5tb25kb1xcbnN0YXNoXFxua2F5b3NcXG50d2VycFxcbnplc3R5XFxuY2Fwb25cXG53aW1weVxcbnJld2VkXFxuZnVuZ29cXG50YXJvdFxcbmZyb3NoXFxua2Fib2JcXG5waW5rb1xcbnJlZGlkXFxubWltZW9cXG5oZWlzdFxcbnRhcnBzXFxubGFtYXNcXG5zdXRyYVxcbmRpbmFyXFxud2hhbXNcXG5idXN0eVxcbnNwYXlzXFxubWFtYm9cXG5uYWJvYlxcbnByZXBzXFxub2RvdXJcXG5jYWJieVxcbmNvbmtzXFxuc2x1ZmZcXG5kYWRvc1xcbmhvdXJpXFxuc3dhcnRcXG5iYWxtc1xcbmd1dHN5XFxuZmF4ZWRcXG5lZ2Fkc1xcbnB1c2h5XFxucmV0cnlcXG5hZ29yYVxcbmRydWJzXFxuZGFmZnlcXG5jaGl0c1xcbm11ZnRpXFxua2FybWFcXG5sb3R0b1xcbnRvZmZzXFxuYnVycHNcXG5kZXVjZVxcbnppbmdzXFxua2FwcGFcXG5jbGFkc1xcbmRvZ2d5XFxuZHVwZXJcXG5zY2Ftc1xcbm9nbGVyXFxubWltZXNcXG50aHJvZVxcbnpldGFzXFxud2FsZWRcXG5wcm9tb1xcbmJsYXRzXFxubXVmZnNcXG5vaW5rc1xcbnZpYW5kXFxuY29zZXRcXG5maW5rc1xcbmZhZGR5XFxubWluaXNcXG5zbmFmdVxcbnNhdW5hXFxudXN1cnlcXG5tdXhlc1xcbmNyYXdzXFxuc3RhdHNcXG5jb25kb1xcbmNveGVzXFxubG9vcHlcXG5kb3Jtc1xcbmFzY290XFxuZGlwcHlcXG5leGVjc1xcbmRvcGV5XFxuZW52b2lcXG51bXB0eVxcbmdpc21vXFxuZmF6ZWRcXG5zdHJvcFxcbmppdmVzXFxuc2xpbXNcXG5iYXRpa1xcbnBpbmdzXFxuc29ubHlcXG5sZWdnb1xcbnBla29lXFxucHJhd25cXG5sdWF1c1xcbmNhbXB5XFxub29kbGVcXG5wcmV4eVxcbnByb21zXFxudG91dHNcXG5vZ2xlc1xcbnR3ZWV0XFxudG9hZHlcXG5uYWlhZFxcbmhpZGVyXFxubnVrZWRcXG5mYXRzb1xcbnNsdXRzXFxub2JpdHNcXG5uYXJjc1xcbnR5cm9zXFxuZGVsaXNcXG53b29lclxcbmh5cGVkXFxucG9zZXRcXG5ieXdheVxcbnRleGFzXFxuc2Nyb2RcXG5hdm93c1xcbmZ1dG9uXFxudG9ydGVcXG50dXBsZVxcbmNhcm9tXFxua2ViYWJcXG50YW1wc1xcbmppbHRzXFxuZHVhbHNcXG5hcnRzeVxcbnJlcHJvXFxubW9kZW1cXG50b3BlZFxcbnBzeWNoXFxuc2lja29cXG5rbHV0elxcbnRhcm5zXFxuY294ZWRcXG5kcmF5c1xcbmNsb3lzXFxuYW5kZWRcXG5waWtlclxcbmFpbWVyXFxuc3VyYXNcXG5saW1vc1xcbmZsYWNrXFxuaGFwYXhcXG5kdXRjaFxcbm11Y2t5XFxuc2hpcmVcXG5rbGllZ1xcbnN0YXBoXFxubGF5dXBcXG50b2tlc1xcbmF4aW5nXFxudG9wZXJcXG5kdXZldFxcbmNvd3J5XFxucHJvZnNcXG5ibGFoc1xcbmFkZGxlXFxuc3Vkc3lcXG5iYXR0eVxcbmNvaWZzXFxuc3VldHlcXG5nYWJieVxcbmhhZnRhXFxucGl0YXNcXG5nb3VkYVxcbmRlaWNlXFxudGF1cGVcXG50b3Blc1xcbmR1Y2h5XFxubml0cm9cXG5jYXJueVxcbmxpbWV5XFxub3JhbHNcXG5oaXJlclxcbnRheGVyXFxucm9pbHNcXG5ydWJsZVxcbmVsYXRlXFxuZG9sb3JcXG53cnllclxcbnNub3RzXFxucXVhaXNcXG5jb2tlZFxcbmdpbWVsXFxuZ29yc2VcXG5taW5hc1xcbmdvZXN0XFxuYWdhcGVcXG5tYW50YVxcbmppbmdzXFxuaWxpYWNcXG5hZG1lblxcbm9mZmVuXFxuY2lsbHNcXG5vZmZhbFxcbmxvdHRhXFxuYm9sYXNcXG50aHdhcFxcbmFsd2F5XFxuYm9nZ3lcXG5kb25uYVxcbmxvY29zXFxuYmVsYXlcXG5nbHVleVxcbmJpdHN5XFxubWltc3lcXG5oaWxhclxcbm91dHRhXFxudnJvb21cXG5mZXRhbFxcbnJhdGhzXFxucmVuYWxcXG5keWFkc1xcbmNyb2NzXFxudmlyZXNcXG5jdWxwYVxcbmtpdmFzXFxuZmVpc3RcXG50ZWF0c1xcbnRoYXRzXFxueWF3bHNcXG53aGVuc1xcbmFiYWNhXFxub2hoaGhcXG5hcGhpc1xcbmZ1c3R5XFxuZWNsYXRcXG5wZXJkdVxcbm1heXN0XFxuZXhlYXRcXG5tb2xseVxcbnN1cHJhXFxud2V0bHlcXG5wbGFzbVxcbmJ1ZmZhXFxuc2VtZW5cXG5wdWtrYVxcbnRhZ3VhXFxucGFyYXNcXG5zdG9hdFxcbnNlY2NvXFxuY2FydGVcXG5oYXV0ZVxcbm1vbGFsXFxuc2hhZHNcXG5mb3JtYVxcbm92b2lkXFxucGlvbnNcXG5tb2R1c1xcbmJ1ZW5vXFxucmhldW1cXG5zY3VyZlxcbnBhcmVyXFxuZXBoYWhcXG5kb2VzdFxcbnNwcnVlXFxuZmxhbXNcXG5tb2x0b1xcbmRpZXRoXFxuY2hvb3NcXG5taWtlZFxcbmJyb254XFxuZ29vcHlcXG5iYWxseVxcbnBsdW15XFxubW9vbnlcXG5tb3J0c1xcbnlvdXJuXFxuYmlwb2RcXG5zcHVtZVxcbmFsZ2FsXFxuYW1iaXRcXG5tdWNob1xcbnNwdWVkXFxuZG96ZXJcXG5oYXJ1bVxcbmdyb2F0XFxuc2tpbnRcXG5sYXVkZVxcbnRocnVtXFxucGFwcHlcXG5vbmNldFxcbnJpbWVkXFxuZ2lndWVcXG5saW1lZFxcbnBsZWluXFxucmVkbHlcXG5odW1wZlxcbmxpdGVzXFxuc2Vlc3RcXG5ncmViZVxcbmFic2l0XFxudGhhbnhcXG5wc2hhd1xcbnlhd3BzXFxucGxhdHNcXG5wYXllZFxcbmFyZWFsXFxudGlsdGhcXG55b3VzZVxcbmd3aW5lXFxudGhlZXNcXG53YXRzYVxcbmxlbnRvXFxuc3BpdHpcXG55YXdlZFxcbmdpcHN5XFxuc3ByYXRcXG5jb3JudVxcbmFtYWhzXFxuYmxvd3lcXG53YWhvb1xcbmx1YnJhXFxubWVjdW1cXG53aG9vb1xcbmNvcXVpXFxuc2FicmFcXG5lZGVtYVxcbm1yYWRzXFxuZGljb3RcXG5hc3Ryb1xcbmtpdGVkXFxub3V6ZWxcXG5kaWRvc1xcbmdyYXRhXFxuYm9ubmVcXG5heG1lblxcbmtsdW5rXFxuc3VtbWFcXG5sYXZlc1xcbnB1cmxzXFxueWF3bnlcXG50ZWFyeVxcbm1hc3NlXFxubGFyZ29cXG5iYXphclxcbnBzc3N0XFxuc3lscGhcXG5sdWxhYlxcbnRvcXVlXFxuZnVnaXRcXG5wbHVua1xcbm9ydGhvXFxubHVjcmVcXG5jb29jaFxcbndoaXB0XFxuZm9sa3lcXG50eXJlc1xcbndoZWVlXFxuY29ya3lcXG5pbmp1blxcbnNvbG9uXFxuZGlkb3RcXG5rZXJmc1xcbnJheWVkXFxud2Fzc2FcXG5jaGlsZVxcbmJlZ2F0XFxubmlwcHlcXG5saXRyZVxcbm1hZ25hXFxucmVib3hcXG5oeWRyb1xcbm1pbGNoXFxuYnJlbnRcXG5neXZlc1xcbmxhemVkXFxuZmV1ZWRcXG5tYXZpc1xcbmluYXB0XFxuYmF1bGtcXG5jYXN1c1xcbnNjcnVtXFxud2lzZWRcXG5mb3NzYVxcbmRvd2VyXFxua3lyaWVcXG5iaG95c1xcbnNjdXNlXFxuZmV1YXJcXG5vaG1pY1xcbmp1c3RlXFxudWthc2VcXG5iZWF1eFxcbnR1c2t5XFxub3JhdGVcXG5tdXN0YVxcbmxhcmR5XFxuaW50cmFcXG5xdWlmZlxcbmVwc29tXFxubmVhdGhcXG5vY2hlclxcbnRhcmVkXFxuaG9tbWVcXG5tZXp6b1xcbmNvcm1zXFxucHNvYXNcXG5iZWFreVxcbnRlcnJ5XFxuaW5mcmFcXG5zcGl2c1xcbnR1YW5zXFxuYmVsbGlcXG5iZXJnc1xcbmFuaW1hXFxud2VpcnNcXG5tYWh1YVxcbnNjb3BzXFxubWFuc2VcXG50aXRyZVxcbmN1cmlhXFxua2Vib2JcXG5jeWNhZFxcbnRhbGt5XFxuZnVja3NcXG50YXBpc1xcbmFtaWRlXFxuZG9sY2VcXG5zbG9lc1xcbmpha2VzXFxucnVzc2VcXG5ibGFzaFxcbnR1dHRpXFxucHJ1dGFcXG5wYW5nYVxcbmJsZWJzXFxudGVuY2hcXG5zd2FyZlxcbmhlcmVtXFxubWlzc3lcXG5tZXJzZVxcbnBhd2t5XFxubGltZW5cXG52aXZyZVxcbmNoZXJ0XFxudW5zZWVcXG50aXJvc1xcbmJyYWNrXFxuZm9vdHNcXG53ZWxzaFxcbmZvc3NlXFxua25vcHNcXG5pbGV1bVxcbm5vaXJlXFxuZmlybWFcXG5wb2RneVxcbmxhaXJkXFxudGh1bmtcXG5zaHV0ZVxcbnJvd2FuXFxuc2hvamlcXG5wb2VzeVxcbnVuY2FwXFxuZmFtZXNcXG5nbGVlc1xcbmNvc3RhXFxudHVycHNcXG5mb3Jlc1xcbnNvbHVtXFxuaW1hZ29cXG5ieXJlc1xcbmZvbmR1XFxuY29uZXlcXG5wb2xpc1xcbmRpY3R1XFxua3JhYWxcXG5zaGVyZFxcbm11bWJvXFxud3JvdGhcXG5jaGFyc1xcbnVuYm94XFxudmFjdW9cXG5zbHVlZFxcbndlZXN0XFxuaGFkZXNcXG53aWxlZFxcbnN5bmNzXFxubXVzZXJcXG5leGNvblxcbmhvYXJzXFxuc2lieWxcXG5wYXNzZVxcbmpvZXlzXFxubG90c2FcXG5sZXB0YVxcbnNoYXlzXFxuYm9ja3NcXG5lbmR1ZVxcbmRhcmVyXFxubm9uZXNcXG5pbGV1c1xcbnBsYXNoXFxuYnVzYnlcXG53aGVhbFxcbmJ1ZmZvXFxueW9iYm9cXG5iaWxlc1xcbnBveGVzXFxucm9vdHlcXG5saWNpdFxcbnRlcmNlXFxuYnJvbW9cXG5oYXlleVxcbmR3ZWViXFxuaW1iZWRcXG5zYXJhblxcbmJydWl0XFxucHVua3lcXG5zb2Z0c1xcbmJpZmZzXFxubG9wcHlcXG5hZ2Fyc1xcbmFxdWFlXFxubGl2cmVcXG5iaW9tZVxcbmJ1bmRzXFxuc2hld3NcXG5kaWVtc1xcbmdpbm55XFxuZGVndW1cXG5wb2xvc1xcbmRlc2V4XFxudW5tYW5cXG5kdW5neVxcbnZpdGFtXFxud2VkZ3lcXG5nbGViZVxcbmFwZXJzXFxucmlkZ3lcXG5yb2lkc1xcbndpZmV5XFxudmFwZXNcXG53aG9hc1xcbmJ1bmtvXFxueW9sa3lcXG51bG5hc1xcbnJlZWt5XFxuYm9kZ2VcXG5icmFudFxcbmRhdml0XFxuZGVxdWVcXG5saWtlclxcbmplbm55XFxudGFjdHNcXG5mdWxsc1xcbnRyZWFwXFxubGlnbmVcXG5hY2tlZFxcbnJlZnJ5XFxudm93ZXJcXG5hYXJnaFxcbmNodXJsXFxubW9tbWFcXG5nYW9sc1xcbndodW1wXFxuYXJyYXNcXG5tYXJsc1xcbnRpbGVyXFxuZ3JvZ3NcXG5tZW1lc1xcbm1pZGlzXFxudGlkZWRcXG5oYWxlclxcbmR1Y2VzXFxudHdpbnlcXG5wb3N0ZVxcbnVucmlnXFxucHJpc2VcXG5kcmFic1xcbnF1aWRzXFxuZmFjZXJcXG5zcGllclxcbmJhcmljXFxuZ2VvaWRcXG5yZW1hcFxcbnRyaWVyXFxuZ3Vua3NcXG5zdGVub1xcbnN0b21hXFxuYWlyZXJcXG5vdmF0ZVxcbnRvcmFoXFxuYXBpYW5cXG5zbXV0c1xcbnBvY2tzXFxueXVydHNcXG5leHVyYlxcbmRlZm9nXFxubnVkZXJcXG5ib3NreVxcbm5pbWJpXFxubW90aHlcXG5qb3llZFxcbmxhYmlhXFxucGFyZHNcXG5qYW1teVxcbmJpZ2x5XFxuZmF4ZXJcXG5ob3BweVxcbm51cmJzXFxuY290ZXNcXG5kaXNoeVxcbnZpc2VkXFxuY2VsZWJcXG5waXNtb1xcbmNhc2FzXFxud2l0aHNcXG5kb2RneVxcbnNjdWRpXFxubXVuZ3NcXG5tdW9uc1xcbnVyZWFzXFxuaW9jdGxcXG51bmhpcFxcbmtyb25lXFxuc2FnZXJcXG52ZXJzdFxcbmV4cGF0XFxuZ3JvbmtcXG51dnVsYVxcbnNoYXdtXFxuYmlsZ3lcXG5icmFlc1xcbmNlbnRvXFxud2ViYnlcXG5saXBweVxcbmdhbWljXFxubG9yZHlcXG5tYXplZFxcbnRpbmdzXFxuc2hvYXRcXG5mYWVyeVxcbndpcmVyXFxuZGlhem9cXG5jYXJlclxcbnJhdGVyXFxuZ3JlcHNcXG5yZW50ZVxcbnpsb3R5XFxudmllcnNcXG51bmFwdFxcbnBvb3BzXFxuZmVjYWxcXG5rZXBpc1xcbnRheG9uXFxuZXllcnNcXG53b250c1xcbnNwaW5hXFxuc3RvYWVcXG55ZW50YVxcbnBvb2V5XFxuYnVyZXRcXG5qYXBhblxcbmJlZGV3XFxuaGFmdHNcXG5zZWxmc1xcbm9hcmVkXFxuaGVyYnlcXG5wcnllclxcbm9ha3VtXFxuZGlua3NcXG50aXR0eVxcbnNlcG95XFxucGVuZXNcXG5mdXNlZVxcbndpbmV5XFxuZ2ltcHNcXG5uaWhpbFxcbnJpbGxlXFxuZ2liZXJcXG5vdXNlbFxcbnVtaWFrXFxuY3VwcHlcXG5oYW1lc1xcbnNoaXRzXFxuYXppbmVcXG5nbGFkc1xcbnRhY2V0XFxuYnVtcGhcXG5jb3llclxcbmhvbmt5XFxuZ2FtZXJcXG5nb29reVxcbndhc3B5XFxuc2VkZ3lcXG5iZW50c1xcbnZhcmlhXFxuZGppbm5cXG5qdW5jb1xcbnB1YmljXFxud2lsY29cXG5sYXplc1xcbmlkeWxzXFxubHVwdXNcXG5yaXZlc1xcbnNub29kXFxuc2NobW9cXG5zcGF6elxcbmZpbmlzXFxubm90ZXJcXG5wYXZhblxcbm9yYmVkXFxuYmF0ZXNcXG5waXBldFxcbmJhZGR5XFxuZ29lcnNcXG5zaGFrb1xcbnN0ZXRzXFxuc2VidW1cXG5zZWV0aFxcbmxvYmFyXFxucmF2ZXJcXG5hanVnYVxcbnJpY2VkXFxudmVsZHNcXG5kcmlic1xcbnZpbGxlXFxuZGhvd3NcXG51bnNld1xcbmhhbG1hXFxua3JvbmFcXG5saW1ieVxcbmppZmZzXFxudHJleXNcXG5iYXVkc1xcbnBmZmZ0XFxubWltZXJcXG5wbGVic1xcbmNhbmVyXFxuamliZXJcXG5jdXBwYVxcbndhc2h5XFxuY2h1ZmZcXG51bmFybVxcbnl1a2t5XFxuc3R5ZXNcXG53YWtlclxcbmZsYWtzXFxubWFjZXNcXG5yaW1lc1xcbmdpbXB5XFxuZ3Vhbm9cXG5saXJhc1xcbmthcG9rXFxuc2N1ZHNcXG5id2FuYVxcbm9yaW5nXFxuYWlkZXJcXG5wcmllclxcbmtsdWd5XFxubW9udGVcXG5nb2xlbVxcbnZlbGFyXFxuZmlyZXJcXG5waWV0YVxcbnVtYmVsXFxuY2FtcG9cXG51bnBlZ1xcbmZvdmVhXFxuYWJlYW1cXG5ib3NvblxcbmFza2VyXFxuZ290aHNcXG52b2NhYlxcbnZpbmVkXFxudHJvd3NcXG50aWtpc1xcbmxvcGVyXFxuaW5kaWVcXG5ib2Zmc1xcbnNwYW5nXFxuZ3JhcHlcXG50YXRlclxcbmljaG9yXFxua2lsdHlcXG5sb2Noc1xcbnN1cGVzXFxuZGVnYXNcXG5mbGljc1xcbnRvcnNpXFxuYmV0aHNcXG53ZWJlclxcbnJlc2F3XFxubGF3bnlcXG5jb3Zlblxcbm11amlrXFxucmVsZXRcXG50aGVybVxcbmhlaWdoXFxuc2hub3JcXG50cnVlZFxcbnpheWluXFxubGllc3RcXG5iYXJmc1xcbmJhc3NpXFxucW9waHNcXG5yb2lseVxcbmZsYWJzXFxucHVubnlcXG5va3Jhc1xcbmhhbmtzXFxuZGlwc29cXG5uZXJmc1xcbmZhdW5zXFxuY2FsbGFcXG5wc2V1ZFxcbmx1cmVyXFxubWFndXNcXG5vYmVhaFxcbmF0cmlhXFxudHdpbmtcXG5wYWxteVxcbnBvY2t5XFxucGVuZHNcXG5yZWN0YVxcbnBsb25rXFxuc2xhd3NcXG5rZWVuc1xcbm5pY2FkXFxucG9uZXNcXG5pbmtlclxcbndoZXdzXFxuZ3Jva3NcXG5tb3N0c1xcbnRyZXdzXFxudWxuYXJcXG5neXBweVxcbmNvY2FzXFxuZXhwb3NcXG5lcnVjdFxcbm9pbGVyXFxudmFjdWFcXG5kcmVja1xcbmRhdGVyXFxuYXJ1bXNcXG50dWJhbFxcbnZveGVsXFxuZGl4aXRcXG5iZWVyeVxcbmFzc2FpXFxubGFkZXNcXG5hY3Rpblxcbmdob3RpXFxuYnV6enlcXG5tZWFkc1xcbmdyb2R5XFxucmliYnlcXG5jbGV3c1xcbmNyZW1lXFxuZW1haWxcXG5weXhpZVxcbmt1bGFrXFxuYm9jY2lcXG5yaXZlZFxcbmR1ZGR5XFxuaG9wZXJcXG5sYXBpblxcbndvbmtzXFxucGV0cmlcXG5waGlhbFxcbmZ1Z2FsXFxuaG9sb25cXG5ib29teVxcbmR1b21vXFxubXVzb3NcXG5zaGllclxcbmhheWVyXFxucG9yZ3lcXG5oaXZlZFxcbmxpdGhvXFxuZmlzdHlcXG5zdGFneVxcbmx1dnlhXFxubWFyaWFcXG5zbW9nc1xcbmFzYW5hXFxueW9naWNcXG5zbG9tb1xcbmZhd255XFxuYW1pbmVcXG53ZWZ0c1xcbmdvbmFkXFxudHdpcnBcXG5icmF2YVxcbnBseWVyXFxuZmVybWlcXG5sb2dlc1xcbm5pdGVyXFxucmV2ZXRcXG51bmF0ZVxcbmd5dmVkXFxudG90dHlcXG56YXBweVxcbmhvbmVyXFxuZ2lyb3NcXG5kaWNlclxcbmNhbGtzXFxubHV4ZXNcXG5tb25hZFxcbmNydWZ0XFxucXVvaW5cXG5mdW1lclxcbmFtcGVkXFxuc2hsZXBcXG52aW5jYVxcbnlhaG9vXFxudnVsdmFcXG56b29leVxcbmRyeWFkXFxubml4aWVcXG5tb3BlclxcbmlhbWJzXFxubHVuZXNcXG5udWRpZVxcbmxpbW5zXFxud2VhbHNcXG5ub2hvd1xcbm1pYW93XFxuZ291dHNcXG5teW5hc1xcbm1hemVyXFxua2lrZXNcXG5veGV5ZVxcbnN0b3VwXFxuanVqdXNcXG5kZWJhclxcbnB1YmVzXFxudGFlbHNcXG5kZWZ1blxcbnJhbmRzXFxuYmxlYXJcXG5wYXZlclxcbmdvb3N5XFxuc3Byb2dcXG5vbGVvc1xcbnRvZmZ5XFxucGF3ZXJcXG5tYWNlZFxcbmNyaXRzXFxua2x1Z2VcXG50dWJlZFxcbnNhaGliXFxuZ2FuZWZcXG5zY2F0c1xcbnNwdXRhXFxudmFuZWRcXG5hY25lZFxcbnRheG9sXFxucGxpbmtcXG5vd2V0aFxcbnRyaWJzXFxucmVzYXlcXG5ib3VsZVxcbnRob3VzXFxuaGFwbHlcXG5nbGFuc1xcbm1heGlzXFxuYmV6ZWxcXG5hbnRpc1xcbnBvcmtzXFxucXVvaXRcXG5hbGt5ZFxcbmdsYXJ5XFxuYmVhbXlcXG5oZXhhZFxcbmJvbmtzXFxudGVjdW1cXG5rZXJic1xcbmZpbGFyXFxuZnJpZXJcXG5yZWR1eFxcbmFidXp6XFxuZmFkZXJcXG5zaG9lclxcbmNvdXRoXFxudHJ1ZXNcXG5ndXllZFxcbmdvb255XFxuYm9va3lcXG5mdXplc1xcbmh1cmx5XFxuZ2VuZXRcXG5ob2RhZFxcbmNhbGl4XFxuZmlsZXJcXG5wYXdsc1xcbmlvZGljXFxudXRlcm9cXG5oZW5nZVxcbnVuc2F5XFxubGllcnNcXG5waWluZ1xcbndlYWxkXFxuc2V4ZWRcXG5mb2xpY1xcbnBveGVkXFxuY3VudHNcXG5hbmlsZVxcbmtpdGhzXFxuYmVja3NcXG50YXR0eVxcbnBsZW5hXFxucmViYXJcXG5hYmxlZFxcbnRveWVyXFxuYXR0YXJcXG50ZWFrc1xcbmFpb2xpXFxuYXdpbmdcXG5hbmVudFxcbmZlY2VzXFxucmVkaXBcXG53aXN0c1xcbnByYXRzXFxubWVzbmVcXG5tdXRlclxcbnNtdXJmXFxub3dlc3RcXG5iYWh0c1xcbmxvc3N5XFxuZnRwZWRcXG5odW5reVxcbmhvZXJzXFxuc2xpZXJcXG5zaWNrc1xcbmZhdGx5XFxuZGVsZnRcXG5oaXZlclxcbmhpbWJvXFxucGVuZ29cXG5idXNrc1xcbmxveGVzXFxuem9ua3NcXG5pbGl1bVxcbmFwb3J0XFxuaWtvbnNcXG5tdWxjdFxcbnJlZXZlXFxuY2l2dnlcXG5jYW5uYVxcbmJhcmZ5XFxua2FpYWtcXG5zY3Vkb1xcbmtub3V0XFxuZ2FwZXJcXG5iaGFuZ1xcbnBlYXNlXFxudXRlcmlcXG5sYXNlc1xcbnBhdGVuXFxucmFzYWVcXG5heGVsc1xcbnN0b2FzXFxub21icmVcXG5zdHlsaVxcbmd1bmt5XFxuaGF6ZXJcXG5rZW5hZlxcbmFob3lzXFxuYW1tb3NcXG53ZWVueVxcbnVyZ2VyXFxua3VkenVcXG5wYXJlblxcbmJvbG9zXFxuZmV0b3JcXG5uaXR0eVxcbnRlY2h5XFxubGlldGhcXG5zb21hc1xcbmRhcmt5XFxudmlsbGlcXG5nbHVvblxcbmphbmVzXFxuY2FudHNcXG5mYXJ0c1xcbnNvY2xlXFxuamlubnNcXG5ydWluZ1xcbnNsaWx5XFxucmljZXJcXG5oYWRkYVxcbndvd2VlXFxucmljZXNcXG5uZXJ0c1xcbmNhdWxzXFxuc3dpdmVcXG5saWx0eVxcbm1pY2tzXFxuYXJpdHlcXG5wYXNoYVxcbmZpbmlmXFxub2lua3lcXG5ndXR0eVxcbnRldHJhXFxud2lzZXNcXG53b2xkc1xcbmJhbGRzXFxucGljb3RcXG53aGF0c1xcbnNoaWtpXFxuYnVuZ3NcXG5zbmFyZlxcbmxlZ29zXFxuZHVuZ3NcXG5zdG9neVxcbmJlcm1zXFxudGFuZ3NcXG52YWlsc1xcbnJvb2RzXFxubW9yZWxcXG5zd2FyZVxcbmVsYW5zXFxubGF0dXNcXG5ndWxlc1xcbnJhemVyXFxuZG94aWVcXG5idWVuYVxcbm92ZXJzXFxuZ3V0dGFcXG56aW5jc1xcbm5hdGVzXFxua2lya3NcXG50aWtlc1xcbmRvbmVlXFxuamVycnlcXG5tb2hlbFxcbmNlZGVyXFxuZG9nZXNcXG51bm1hcFxcbmZvbGlhXFxucmF3bHlcXG5zbmFya1xcbnRvcG9pXFxuY2VpbHNcXG5pbW1peFxcbnlvcmVzXFxuZGllc3RcXG5idWJiYVxcbnBvbXBzXFxuZm9ya3lcXG50dXJkeVxcbmxhd3p5XFxucG9vaHNcXG53b3J0c1xcbmdsb21zXFxuYmVhbm9cXG5tdWxleVxcbmJhcmt5XFxudHVubnlcXG5hdXJpY1xcbmZ1bmtzXFxuZ2FmZnNcXG5jb3JkeVxcbmN1cmR5XFxubGlzbGVcXG50b3JpY1xcbnNveWFzXFxucmVtYW5cXG5tdW5neVxcbmNhcnB5XFxuYXBpc2hcXG5vYXRlblxcbmdhcHB5XFxuYXVyYWVcXG5icmFjdFxcbnJvb2t5XFxuYXhsZWRcXG5idXJyeVxcbnNpemVyXFxucHJvZW1cXG50dXJmeVxcbmltcHJvXFxubWFzaHlcXG5taWVuc1xcbm5vbm55XFxub2xpb3NcXG5ncm9va1xcbnNhdGVzXFxuYWdsZXlcXG5jb3JnaVxcbmRhc2h5XFxuZG9zZXJcXG5kaWxkb1xcbmFwc29zXFxueG9yZWRcXG5sYWtlclxcbnBsYXlhXFxuc2VsYWhcXG5tYWx0eVxcbmR1bHNlXFxuZnJpZ3NcXG5kZW1pdFxcbndob3NvXFxucmlhbHNcXG5zYXdlclxcbnNwaWNzXFxuYmVkaW1cXG5zbnVnc1xcbmZhbmluXFxuYXpvaWNcXG5pY2Vyc1xcbnN1ZXJzXFxud2l6ZW5cXG5rb2luZVxcbnRvcG9zXFxuc2hpcnJcXG5yaWZlclxcbmZlcmFsXFxubGFkZWRcXG5sYXNlZFxcbnR1cmRzXFxuc3dlZGVcXG5lYXN0c1xcbmNvemVuXFxudW5oaXRcXG5wYWxseVxcbmFpdGNoXFxuc2VkdW1cXG5jb3BlclxcbnJ1Y2hlXFxuZ2Vla3NcXG5zd2Fnc1xcbmV0ZXh0XFxuYWxnaW5cXG5vZmZlZFxcbm5pbmphXFxuaG9sZXJcXG5kb3RlclxcbnRvdGVyXFxuYmVzb3RcXG5kaWN1dFxcbm1hY2VyXFxucGVlbnNcXG5wZXdpdFxcbnJlZG94XFxucG9sZXJcXG55ZWNjaFxcbmZsdWt5XFxuZG9ldGhcXG50d2F0c1xcbmNydWRzXFxuYmVidWdcXG5iaWRlclxcbnN0ZWxlXFxuaGV4ZXJcXG53ZXN0c1xcbmdsdWVyXFxucGlsYXVcXG5hYmFmdFxcbndoZWxtXFxubGFjZXJcXG5pbm9kZVxcbnRhYnVzXFxuZ2F0b3JcXG5jdWluZ1xcbnJlZmx5XFxubHV0ZWRcXG5jdWtlc1xcbmJhaXJuXFxuYmlnaHRcXG5hcnNlc1xcbmNydW1wXFxubG9nZ3lcXG5ibGluaVxcbnNwb29yXFxudG95b25cXG5oYXJrc1xcbndhem9vXFxuZmVubnlcXG5uYXZlc1xcbmtleWVyXFxudHVmYXNcXG5tb3JwaFxcbnJhamFzXFxudHlwYWxcXG5zcGlmZlxcbm94bGlwXFxudW5iYW5cXG5tdXNzeVxcbmZpbm55XFxucmltZXJcXG5sb2dpblxcbm1vbGFzXFxuY2lycmlcXG5odXp6YVxcbmFnb25lXFxudW5zZXhcXG51bndvblxcbnBlYXRzXFxudG9pbGVcXG56b21iaVxcbmRld2VkXFxubm9va3lcXG5hbGt5bFxcbml4bmF5XFxuZG92ZXlcXG5ob2xleVxcbmN1YmVyXFxuYW15bHNcXG5wb2RpYVxcbmNoaW5vXFxuYXBuZWFcXG5wcmltc1xcbmx5Y3JhXFxuam9obnNcXG5wcmltb1xcbmZhdHdhXFxuZWdnZXJcXG5oZW1weVxcbnNub29rXFxuaHlpbmdcXG5mdXplZFxcbmJhcm1zXFxuY3JpbmtcXG5tb290c1xcbnllcmJhXFxucmh1bWJcXG51bmFyY1xcbmRpcmVyXFxubXVuZ2VcXG5lbGFuZFxcbm5hcmVzXFxud3JpZXJcXG5ub2RkeVxcbmF0aWx0XFxuanVrZXNcXG5lbmRlclxcbnRoZW5zXFxudW5maXhcXG5kb2dnb1xcbnpvb2tzXFxuZGlkZHlcXG5zaG1vb1xcbmJydXNrXFxucHJlc3RcXG5jdXJlclxcbnBhc3RzXFxua2VscHlcXG5ib2NjZVxcbmtpY2t5XFxudGFyb3NcXG5saW5nc1xcbmRpY2t5XFxubmVyZHlcXG5hYmVuZFxcbnN0ZWxhXFxuYmlnZ3lcXG5sYXZlZFxcbmJhbGR5XFxucHViaXNcXG5nb29rc1xcbndvbmt5XFxuc3RpZWRcXG5oeXBvc1xcbmFzc2VkXFxuc3B1bXlcXG5vc2llclxcbnJvYmxlXFxucnVtYmFcXG5iaWZmeVxcbnB1cGFsXCI7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHdvcmRzIGZyb20gJy4vZGF0YS93b3Jkcy50eHQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyaWR7XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLmdyaWREYXRhID0gW1tdLFtdLFtdLFtdLFtdXVxuICAgICAgICB0aGlzLmNvbG91ckRhdGEgPSBbWzAsMCwwLDAsMF0sWzAsMCwwLDAsMF0sWzAsMCwwLDAsMF0sWzAsMCwwLDAsMF0sWzAsMCwwLDAsMF1dXG4gICAgICAgIHRoaXMucm93ID0gMDtcbiAgICAgICAgdGhpcy5jZWxsID0gMDtcbiAgICAgICAgdGhpcy53b3JkID0gdGhpcy5zZXRXb3JkKCk7XG4gICAgfVxuXG4gICAgc2V0V29yZCgpe1xuICAgICAgICBsZXQgd29yZHNMaXN0ID0gd29yZHMuc3BsaXQoJ1xcbicpXG4gICAgICAgIGNvbnN0IHdvcmQgPSB3b3Jkc0xpc3RbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogd29yZHNMaXN0Lmxlbmd0aCldO1xuICAgICAgICByZXR1cm4gd29yZC50b1VwcGVyQ2FzZSgpO1xuICAgIH1cblxuICAgIGdldEdyaWREYXRhKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWREYXRhO1xuICAgIH1cblxuICAgIGdldFJvdygpe1xuICAgICAgICByZXR1cm4gdGhpcy5yb3c7XG4gICAgfVxuXG4gICAgZ2V0Q2VsbCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5jZWxsO1xuICAgIH1cblxuICAgIGdldEN1cnJlbnRXb3JkKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWREYXRhW3RoaXMucm93XS5qb2luKCcnKS50b0xvd2VyQ2FzZSgpXG4gICAgfVxuXG4gICAgbmV4dFJvdygpe1xuICAgICAgICB0aGlzLnJvdyArKztcbiAgICB9XG5cbiAgICBuZXh0Q2VsbCgpe1xuICAgICAgICB0aGlzLmNlbGwgKys7XG4gICAgfVxuXG4gICAgYWRkTGV0dGVyKGxldHRlcil7XG4gICAgICAgIGlmKHRoaXMuY2VsbDw1KXtcbiAgICAgICAgICAgIHRoaXMuZ3JpZERhdGFbdGhpcy5yb3ddW3RoaXMuY2VsbF0gPSBsZXR0ZXI7XG4gICAgICAgICAgICB0aGlzLm5leHRDZWxsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVMZXR0ZXIoKXtcbiAgICAgICAgdGhpcy5ncmlkRGF0YVt0aGlzLnJvd11bdGhpcy5jZWxsIC0xXSA9IFwiXCI7XG4gICAgICAgIGlmKHRoaXMuY2VsbD4wKXtcbiAgICAgICAgICAgIHRoaXMuY2VsbCAtLTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN1Ym1pdFdvcmQoKXtcbiAgICAgICAgbGV0IGNvbG91ckRhdGEgPSBbXVxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgICAgICAgICAgIGlmKHRoaXMuY2hlY2tMZXR0ZXIodGhpcy5ncmlkRGF0YVt0aGlzLnJvd11baV0pICYmIHRoaXMuY2hlY2tQb3NpdGlvbihpKSl7XG4gICAgICAgICAgICAgICAgY29sb3VyRGF0YS5wdXNoKDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5jaGVja0xldHRlcih0aGlzLmdyaWREYXRhW3RoaXMucm93XVtpXSkpe1xuICAgICAgICAgICAgICAgIGNvbG91ckRhdGEucHVzaCgxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgY29sb3VyRGF0YS5wdXNoKDApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5uZXh0Um93KCk7XG4gICAgICAgIHRoaXMuY2VsbCA9IDA7XG4gICAgICAgIHJldHVybiBjb2xvdXJEYXRhO1xuICAgIH1cblxuICAgIGNoZWNrTGV0dGVyKGxldHRlcil7XG4gICAgICAgIHJldHVybiB0aGlzLndvcmQuaW5kZXhPZihsZXR0ZXIpID4gLTE7XG4gICAgfVxuXG4gICAgY2hlY2tQb3NpdGlvbihwb3Mpe1xuICAgICAgICByZXR1cm4gKHRoaXMud29yZFtwb3NdPT10aGlzLmdyaWREYXRhW3RoaXMucm93XVtwb3NdKVxuICAgIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJe1xuXG4gICAgc3RhdGljIHJlc2V0R3JpZCgpe1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICAgICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkJyk7XG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoZ3JpZCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGRpc3BsYXlHcmlkKGRhdGEsIGNvbG91ckRhdGEpe1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICAgICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2dyaWQnKTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDU7IGkgKyspe1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICByb3cuY2xhc3NMaXN0LmFkZCgncm93JylcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCA1OyBqICsrKXtcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGRhdGFbaV1bal07XG4gICAgICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ3JpZC5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZ3JpZCk7XG4gICAgICAgIHRoaXMuYWRkQ29sb3VyKGNvbG91ckRhdGEpXG4gICAgfVxuXG4gICAgc3RhdGljIGFkZENvbG91cihjb2xvdXJEYXRhKXtcbiAgICAgICAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCA1OyBqKyspe1xuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBjZWxsc1soaSo1KStqXTtcbiAgICAgICAgICAgICAgICBpZihjb2xvdXJEYXRhW2ldW2pdPT0yKXtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3BvcycpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYoY29sb3VyRGF0YVtpXVtqXT09MSl7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdpZCcsICdsZXR0ZXInKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgVUkgZnJvbSAnLi9VSS5qcyc7XG5pbXBvcnQgR3JpZCBmcm9tICcuL0dyaWQuanMnO1xuaW1wb3J0IHdvcmRzIGZyb20gJy4vZGF0YS93b3Jkcy50eHQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNvbnRyb2xsZXJ7XG5cbiAgICBzdGF0aWMgaW5pdExvYWQoKXtcbiAgICAgICAgbGV0IGdyaWQgPSBuZXcgR3JpZCgpO1xuICAgICAgICBVSS5kaXNwbGF5R3JpZChncmlkLmdldEdyaWREYXRhKCksIGdyaWQuY29sb3VyRGF0YSk7XG4gICAgICAgIHRoaXMuYWRkS2V5Ym9hcmRMaXN0ZW5lcihncmlkKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkS2V5Ym9hcmRMaXN0ZW5lcihncmlkKXtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYodGhpcy5pc0xldHRlcihldmVudC5rZXkpKXtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZExldHRlcihncmlkLCBldmVudC5rZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihldmVudC5rZXkgPT0gJ0JhY2tzcGFjZScpe1xuICAgICAgICAgICAgICAgIGdyaWQucmVtb3ZlTGV0dGVyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoR3JpZChncmlkKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZXZlbnQua2V5ID09ICdFbnRlcicpe1xuICAgICAgICAgICAgICAgIGlmKGdyaWQuY2VsbD09NSl7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuaXNXb3JkKGdyaWQuZ2V0Q3VycmVudFdvcmQoKSkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJvd0NvbG91cnMgPSBncmlkLnN1Ym1pdFdvcmQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQuY29sb3VyRGF0YVtncmlkLnJvdy0xXSA9IHJvd0NvbG91cnM7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hHcmlkKGdyaWQpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdJbnZhbGlkIHdvcmQuLi4nKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIC8vIGFuaW1hdGlvblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkTGV0dGVyKGdyaWQsIGxldHRlcil7XG4gICAgICAgIGdyaWQuYWRkTGV0dGVyKGxldHRlci50b1VwcGVyQ2FzZSgpKTtcbiAgICAgICAgdGhpcy5yZWZyZXNoR3JpZChncmlkKVxuICAgIH1cblxuICAgIHN0YXRpYyByZWZyZXNoR3JpZChncmlkKXtcbiAgICAgICAgVUkucmVzZXRHcmlkKCk7XG4gICAgICAgIFVJLmRpc3BsYXlHcmlkKGdyaWQuZ2V0R3JpZERhdGEoKSwgZ3JpZC5jb2xvdXJEYXRhKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNMZXR0ZXIoYyl7XG4gICAgICAgIHJldHVybiBjLmxlbmd0aCA9PT0gMSAmJiBjLm1hdGNoKC9bYS16XS9pKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNXb3JkKHdvcmQpe1xuICAgICAgICBsZXQgd29yZHNMaXN0ID0gd29yZHMuc3BsaXQoJ1xcbicpXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB3b3Jkc0xpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYod29yZD09d29yZHNMaXN0W2ldKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcydcbmltcG9ydCBjb250cm9sbGVyIGZyb20gJy4vbW9kdWxlcy9jb250cm9sbGVyLmpzJ1xuXG5jb250cm9sbGVyLmluaXRMb2FkKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9