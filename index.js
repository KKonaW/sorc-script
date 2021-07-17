/* SCRIPT BY YOUR MOM*/
'use strict'
const JOB_SORC =4;

// Sorc Skills
const SKILL_ARCANE_PULSE =41200;
const SKILL_ARCANE_PULSE_1 =41210;
const SKILL_ARCANE_PULSE_2 =41211;
const SKILL_ARCANE_PULSE_3 =41212;
const SKILL_ARCANE_PULSE_4 =330110;
const SKILL_ARCANE_PULSE_5 =330111;
const SKILL_ARCANE_PULSE_6 =330112;
const APCHECK = [41200]
//const SKILL_ARCANE_PULSE_DURATION =1100;
const SKILL_ARCANE_PULSE_DELAY_1 = 880;//920;
const SKILL_ARCANE_PULSE_DELAY_2 = 880;//920;

const SKILL_VOID_PULSE =120900;
const SKILL_VOID_PULSE_DURATION = 1000; //1050;
const SKILL_LIGHTNING_STRIKE =111100;
const SKILL_LIGHTNING_STRIKE_DURATION = 880; //900; 
const SKILL_METEOR_STRIKE =61000;
const SKILL_METEOR_STRIKE_BOOST =320150;
const SKILL_METEOR_STRIKE_DURATION = 2060; //3230;
const SKILL_METEOR_SHOWER =320100;
const SKILL_METEOR_SHOWER_DURATION = 3125; //5700;
const SKILL_NOVA =300900;
const SKILL_NOVA_DURATION = 2440; //2440;
const SKILL_HAILSTORM =270900;
const SKILL_HAILSTORM_DURATION = 1025; //1050;
const SKILL_FLAMING_BARRAGE =200500;
const SKILL_FLAMING_BARRAGE_2 =200510;
const SKILL_FLAMING_BARRAGE_DURATION = 1050; //1200;
const SKILL_FROST_SPHERE =21000;
//const SKILL_FROST_SPHERE_DURATION = 1100; //1150;
const SKILL_MANA_BOOST =340200;
const SKILL_MANA_BOOST_DURATION =24000;
const SKILL_MANA_BOOST_DURATION_2 = 850; //750;
const SKILL_PAINFUL_TRAP =170400;
const SKILL_PAINFUL_TRAP_DURATION = 1180; //1215;
const SKILL_LIGHTNING_TRAP =30100;
const SKILL_LIGHTNING_TRAP_DURATION =1440;
const SKILL_WARP_BARRIER =310110;
const SKILL_WARP_BARRIER_2 =310120;
const SKILL_WARP_BARRIER_DURATION = 580; //530; //575;
const SKILL_MANA_BARRIER =100300;
const SKILL_MANA_BARRIER_DURATION = 680; //710;
const SKILL_PILLAR =80700;
const SKILL_PILLAR_DURATION = 1320; //1350;

const SKILL_MINDBLAST =130300;
//const SKILL_MINDBLAST_DURATION =2710;

const SKILL_BACKSTEP =70100;
const SKILL_BACKSTEP_DURATION = 700; //720;
const SKILL_BACKSTEP_DISTANCE = 100; //200;
const SKILL_BACKSTEP_CANCEL_DURATION =20;
const SKILL_TELEPORT_JAUNT =260100;
const SKILL_TELEPORT_JAUNT_DURATION = 230; //280;
const SKILL_TELEPORT_JAUNT_DURATION_2 = 230; //280;
const SKILL_TELEPORT_JAUNT_DISTANCE =333;
const SKILL_ESCAPE =180600;
const SKILL_ESCAPE_DURATION = 1210; //1230;
const SKILL_ESCAPE_DISTANCE = 100; //200;

const SKILL_TIME_GYRE =250400;
const SKILL_TIME_GYRE_2 =250410;
const SKILL_TIME_GYRE_DURATION =700;
const SKILL_MANA_VOLLEY =230200;
const SKILL_MANA_VOLLEY_2 =230210;
const SKILL_MANA_VOLLEY_DURATION =1200;
const SKILL_MANA_VOLLEY_DURATION_STAGE =325;
const SKILL_BURNING_BREATH =220700;
const SKILL_BURNING_BREATH_2 =220710;
const SKILL_BURNING_BREATH_DURATION =1500;
const SKILL_BURNING_BREATH_DURATION_STAGE =300;
const SKILL_NERVE_EXHAUST =210100;
const SKILL_NERVE_EXHAUST_2 =210110;
const SKILL_NERVE_EXHAUST_DURATION =1500;
const SKILL_NERVE_EXHAUST_DURATION_STAGE =300;

const SKILL_RETALIATE =141000;
const SKILL_RETALIATE_DURATION =1820;

const BLAST_LOL =11200;
const BLAST_LOL_DURATION =800;

const SKILL_FIREICE = 360200; //+30
const SKILL_FIREICE_D =1015;

const SKILL_FIREZAP =360300;
const SKILL_FIREZAP_D =1745;

const SKILL_ICEZAP =360400;
const SKILL_ICEZAP_D =1745;

const SKILL_TRINITY =360600;
const SKILL_TRINITY_D =2900;

const SKILL_BLACKHOLE =390100;
const SKILL_BLACKHOLE_D1 =4150;
const SKILL_BLACKHOLE_D2 =4150;
const SKILL_BLACKHOLE_D3 =2745;

const BLACKLIST = [110100, 111110, 111111, 111112, 111113, 111114, 111115, 111116, 111117, 111118, 111119, 111120, 111121, 111122, 111124, 111125,
	111126, 111127, 111128, 111129, 111130, 111131, 111134, 111135, 111139, 111140, 111143, 111144, 111145, 111190, 111191, 111193,
	111194, 111195, 111197, 111199, 111202, 111203, 116001, 116002, 116003, 116004, 117002, 117003, 140100, 460100, 480100, 900001,
	111136, 111137, 111138, 111141, 111142, 111147, 111149, 111150, 111151, 111152, 111153, 111154, 111155, 111156, 111157, 111158,
	211141, 211150, 111123, 111132, 111133, 111146, 111148, 111192, 111196, 111198, 211145, 111159, 111160, 111161, 111162, 111163,
	111164, 111165, 111166, 111168, 111169, 111170, 111171, 111172, 111173, 111174, 111175, 111176, 111177, 111178, 111179, 111180,
	111204, 111205, 111206, 111207, 111208, 111209, 111210, 111211, 111212, 111214, 111215, 111216, 111217, 111218, 111219, 111220,
	111221, 111222, 111223, 111224, 111225, 111226, 111227, 111228, 111229, 111230, 111231, 111232, 111233, 111234, 111235, 111236,
	111237, 111238, 111239, 111241, 111242, 111243, 111244, 111245, 111246, 111247, 111248, 111249, 111250, 111251, 111252, 111253,
	111254, 111255, 111256, 111257, 111258, 111259, 111260, 111261, 111262, 111263, 111264, 111265, 111266, 111267, 111268, 111269,
	111270, 111271, 111272, 111273, 111274, 111275, 111276, 111277, 111278, 111279, 111280, 111281, 111282, 111283, 111284, 111285,
	111286, 111287, 111288, 111289, 111290, 111291, 111292, 111293, 111294, 111295, 111296, 111297, 111298, 111299, 111301, 111302, 111310, 111320, 111319, 111324, 111325, 111330, 111220];
module.exports = function sorc(dispatch) {
	let config = {};
	let settingTimeout = null;
	let settingLock = false;

	const path = require('path');
	const fs = require('fs');

	try { config = require('./config.json'); }
	catch (e) {
		config = {};
		settingUpdate();
	}

	function settingUpdate() {
		clearTimeout(settingTimeout);
		settingTimeout = setTimeout(settingSave,1000);
	}

	function settingSave() {
		if (settingLock) {
			settingUpdate();
			return;
		}

		settingLock = false;
		fs.writeFile(path.join(__dirname, 'config.json'), JSON.stringify(config, undefined, '\t'), err => {
			settingLock = false;
		});
	}


	//change GLOBAL_LATENCY to your lowest usual ping
	let GLOBAL_LATENCY =0;
	if (("GLOBAL_LATENCY" in config)) {
		GLOBAL_LATENCY = config.GLOBAL_LATENCY;
	}
	if (!("GLOBAL_LATENCY" in config)) {
		config.GLOBAL_LATENCY =0;
		config.GLOBAL_LATENCY_DESCRIPTION = "change GLOBAL_LATENCY to your lowest usual ping";
		settingUpdate();
	}

	let DISABLE_CHARGE = false;
	if (("DISABLE_CHARGE" in config)) {
		DISABLE_CHARGE = config.DISABLE_CHARGE;
	}
	if (!("DISABLE_CHARGE" in config)) {
		config.DISABLE_CHARGE = false;
		config.DISABLE_CHARGE_DESCRIPTION = "this will disable charge bar emulation, useful for people who have unstable net and prone to get stuck or server lagging badly";
		config.DISABLE_CHARGE_DESCRIPTION_2 = "disabling charge actually does not significantly impact ping tax, because charge skills are actually not ping taxed if you simply release the skill early";
		settingUpdate();
	}
	let SPOOF_GRANT = true;
	if (("SPOOF_GRANT" in config)) {
		SPOOF_GRANT = config.SPOOF_GRANT;
	}
	if (!("SPOOF_GRANT" in config)) {
		config.SPOOF_GRANT = true;
		config.SPOOF_GRANT_DESCRIPTION = "greatly speeds up charging skills, however may cause asynchronization with high jitter";
		settingUpdate();
	}
	let AUTOBARRAGE = false;
	if (("AUTOBARRAGE" in config)) {
		AUTOBARRAGE = config.AUTOBARRAGE;
	}
	if (!("AUTOBARRAGE" in config)) {
		config.AUTOBARRAGE = false;
		config.AUTOBARRAGE_DESCRIPTION = "Instantly FB when locked on - REQUIRES ROBOTJS";
		settingUpdate();
	}
	let AUTOBARRAGE_DELAY =1;
	if (("AUTOBARRAGE_DELAY" in config)) {
		AUTOBARRAGE_DELAY = config.AUTOBARRAGE_DELAY;
	}
	if (!("AUTOBARRAGE_DELAY" in config)) {
		config.AUTOBARRAGE_DELAY =1;
		config.AUTOBARRAGE_DELAY_DESCRIPTION = "Auto-barrage is tied to FPS, with bad FPS it can fail. Default setting is 1, but increase it (i.e. 2, 3, 4, 5...) if the lockon is failing.";
		settingUpdate();
	}
	let BARRAGEKEY = "6";
	if (("BARRAGEKEY" in config)) {
		BARRAGEKEY = config.BARRAGEKEY;
	}
	if (!("BARRAGEKEY" in config)) {
		config.BARRAGEKEY = "6";
		config.BARRAGEKEY_DESCRIPTION = "Key for Flame Barrage, find keyboard syntax list here http://robotjs.io/docs/syntax";
		settingUpdate();
	}
	let FLAME_BARRAGE_SYNC = true;
	if (("FLAME_BARRAGE_SYNC" in config)) {
		FLAME_BARRAGE_SYNC = config.FLAME_BARRAGE_SYNC;
	}
	if (!("FLAME_BARRAGE_SYNC" in config)) {
		config.FLAME_BARRAGE_SYNC = true;
		config.FLAME_BARRAGE_SYNC_DESCRIPTION = "Slows arcane pulse after flame barrage for better sync. Disabling it is faster, but may cause issues with arcane pulse.";
		settingUpdate();
	}
	let SYNC_MARGIN =100;
	if (("SYNC_MARGIN" in config)) {
		SYNC_MARGIN = config.SYNC_MARGIN;
	}
	if (!("SYNC_MARGIN" in config)) {
		config.SYNC_MARGIN =100;
		config.SYNC_MARGIN_DESCRIPTION = "Flame barrage sync margin. This is deactivated unless FLAME_BARRAGE_SYNC is set to true. Default is 100. Higher = more stable but slower.";
		settingUpdate();
	}

	let AP_AUTO_RELEASE = false;
	if (("AP_AUTO_RELEASE" in config)) {
		AP_AUTO_RELEASE = config.AP_AUTO_RELEASE;
	}
	if (!("AP_AUTO_RELEASE" in config)) {
		config.AP_AUTO_RELEASE = false;
		config.AP_AUTO_RELEASE_DESCRIPTION = "Auto release AP when fully charged. Cannot use without ROBOTJS.";
		settingUpdate();
	}

	let AP_KEY = "7";
	if (("AP_KEY" in config)) {
		AP_KEY = config.AP_KEY;
	}
	if (!("AP_KEY" in config)) {
		config.AP_KEY = "7";
		config.AP_KEY_DESCRIPTION = "Key for AP, find keyboard syntax list here http://robotjs.io/docs/syntax";
		settingUpdate();
	}
	
	let AUTONERVE = false;
	if (("AUTONERVE" in config)) {
		AUTONERVE = config.AUTONERVE;
	}
	if (!("AUTONERVE" in config)) {
		config.AUTONERVE = false;
		config.AUTONERVE_DESCRIPTION = "Instantly Nerve exhaustion when locked on - REQUIRES ROBOTJS";
		settingUpdate();
	}
	
	let NERVE_KEY = "0";
	if (("NERVE_KEY" in config)) {
		NERVE_KEY = config.NERVE_KEY;
	}
	if (!("NERVE_KEY" in config)) {
		config.NERVE_KEY = "0";
		config.NERVE_KEY_DESCRIPTION = "Key for Nerve exhaustion, find keyboard syntax list here http://robotjs.io/docs/syntax";
		settingUpdate();
	}
	
	let AUTOFIREBALL_AFTER_FUSION = false;
	if (("AUTOFIREBALL_AFTER_FUSION" in config)) {
		AUTOFIREBALL_AFTER_FUSION = config.AUTOFIREBALL_AFTER_FUSION;
	}
	if (!("AUTOFIREBALL_AFTER_FUSION" in config)) {
		config.AUTOFIREBALL_AFTER_FUSION = false;
		config.AUTOFIREBALL_AFTER_FUSION_DESCRIPTION = "Instantly fireball after elemental fusion - REQUIRES ROBOTJS";
		settingUpdate();
	}
	
	let FIREBALL_KEY = "9";
	if (("FIREBALL_KEY" in config)) {
		FIREBALL_KEY = config.FIREBALL_KEY;
	}
	if (!("FIREBALL_KEY" in config)) {
		config.FIREBALL_KEY = "9";
		config.FIREBALL_KEY_DESCRIPTION = "Key for Fireball, find keyboard syntax list here http://robotjs.io/docs/syntax";
		settingUpdate();
	}
	
	let MANABOOST_X	= false;
	if (("MANABOOST_X" in config)) {
		MANABOOST_X = config.MANABOOST_X;
	}
	if (!("MANABOOST_X" in config)) {
		config.MANABOOST_X = false;
		config.MANABOOST_X_DESCRIPTION = "Auto use X_KEY when Manaboost is used. X_KEY must be set. This macro does not work without ROBOTJS.";
		settingUpdate();
	}
	
	let X_KEY = "3";
	if (("X_KEY" in config)) {
		X_KEY = config.X_KEY;
	}
	if (!("X_KEY" in config)) {
		config.X_KEY = "3";
		config.X_KEY_DESCRIPTION = "X Key. Find keyboard syntax list here http://robotjs.io/docs/syntax";
		settingUpdate();
	}
	
	let Y_KEY = X_KEY;
	if (("Y_KEY" in config)) {
		Y_KEY = config.Y_KEY;
	}
	if (!("Y_KEY" in config)) {
		config.Y_KEY = X_KEY;
		config.Y_KEY_DESCRIPTION = "Y Key (keep the same as X_KEY if you don't want a second skill to activate). Find keyboard syntax list here http://robotjs.io/docs/syntax";
		settingUpdate();
	}
	
	let Z_KEY = X_KEY;
	if (("Z_KEY" in config)) {
		Z_KEY = config.Z_KEY;
	}
	if (!("Z_KEY" in config)) {
		config.Z_KEY = X_KEY;
		config.Z_KEY_DESCRIPTION = "Z Key (keep the same as X_KEY if you don't want a second skill to activate). Find keyboard syntax list here http://robotjs.io/docs/syntax";
		settingUpdate();
	}
	
	let VOID_FROST = false;
	if (("VOID_FROST" in config)) {
		VOID_FROST = config.VOID_FROST;
	}
	if (!("VOID_FROST" in config)) {
		config.VOID_FROST = false;
		config.VOID_FROST_DESCRIPTION = "Auto use Frost Sphere when Void Pulse is used. FROSTSPHERE_KEY must be set. This macro does not work without ROBOTJS.";
		settingUpdate();
	}
	
	let FROSTSPHERE_KEY = "3";
	if (("FROSTSPHERE_KEY" in config)) {
		FROSTSPHERE_KEY = config.FROSTSPHERE_KEY;
	}
	if (!("FROSTSPHERE_KEY" in config)) {
		config.FROSTSPHERE_KEY = "3";
		config.FROSTSPHERE_KEY_DESCRIPTION = "Frost Sphere Key. Find keyboard syntax list here http://robotjs.io/docs/syntax";
		settingUpdate();
	}
	
	let NOVA_ICE = false;
	if (("NOVA_ICE" in config)) {
		NOVA_ICE = config.NOVA_ICE;
	}
	if (!("NOVA_ICE" in config)) {
		config.NOVA_ICE = false;
		config.NOVA_ICE_DESCRIPTION = "Auto use Ice Lance when Nova is used. ICELANCE_KEY must be set. This macro does not work without ROBOTJS.";
		settingUpdate();
	}
	
	let METEOR_ICE = false;
	if (("METEOR_ICE" in config)) {
		METEOR_ICE = config.METEOR_ICE;
	}
	if (!("METEOR_ICE" in config)) {
		config.METEOR_ICE = false;
		config.METEOR_ICE_DESCRIPTION = "Auto use Ice Lance when Meteor Strike is used. ICELANCE_KEY must be set. This macro does not work without ROBOTJS.";
		settingUpdate();
	}
	
	let ICELANCE_KEY = "3";
	if (("ICELANCE_KEY" in config)) {
		ICELANCE_KEY = config.ICELANCE_KEY;
	}
	if (!("ICELANCE_KEY" in config)) {
		config.ICELANCE_KEY = "3";
		config.ICELANCE_KEY_DESCRIPTION = "Ice Lance Key. Find keyboard syntax list here http://robotjs.io/docs/syntax";
		settingUpdate();
	}
	
	let NOVA_LIGHTNING = false;
	if (("NOVA_LIGHTNING" in config)) {
		NOVA_LIGHTNING = config.NOVA_LIGHTNING;
	}
	if (!("NOVA_LIGHTNING" in config)) {
		config.NOVA_LIGHTNING = false;
		config.NOVA_LIGHTNING_DESCRIPTION = "Auto use Lightning Strike when Nova is used. LIGHTNING_KEY must be set. This macro does not work without ROBOTJS.";
		settingUpdate();
	}
	
	let ICELANCE_LIGHTNING = false;
	if (("ICELANCE_LIGHTNING" in config)) {
		ICELANCE_LIGHTNING = config.ICELANCE_LIGHTNING;
	}
	if (!("ICELANCE_LIGHTNING" in config)) {
		config.ICELANCE_LIGHTNING = false;
		config.ICELANCE_LIGHTNING_DESCRIPTION = "Auto use Lightning Strike when Ice lance is used. LIGHTNING_KEY must be set. This macro does not work without ROBOTJS.";
		settingUpdate();
	}
	
	let LIGHTNING_LIGHTNING = false;
	if (("LIGHTNING_LIGHTNING" in config)) {
		LIGHTNING_LIGHTNING = config.LIGHTNING_LIGHTNING;
	}
	if (!("LIGHTNING_LIGHTNING" in config)) {
		config.LIGHTNING_LIGHTNING = false;
		config.LIGHTNING_LIGHTNING_DESCRIPTION = "Auto use Lightning Strike when Lightning Strike is used. LIGHTNING_KEY must be set. This macro does not work without ROBOTJS.";
		settingUpdate();
	}
	
	let LIGHTNING_KEY = "3";
	if (("LIGHTNING_KEY" in config)) {
		LIGHTNING_KEY = config.LIGHTNING_KEY;
	}
	if (!("LIGHTNING_KEY" in config)) {
		config.LIGHTNING_KEY = "3";
		config.LIGHTNING_KEY_DESCRIPTION = "Lightning Strike Key. Find keyboard syntax list here http://robotjs.io/docs/syntax";
		settingUpdate();
	}
	
	let AP_VP = false;
	if (("AP_VP" in config)) {
		AP_VP = config.AP_VP;
	}
	if (!("AP_VP" in config)) {
		config.AP_VP = false;
		config.AP_VP_DESCRIPTION = "Auto use void pulse when arcane pulse full charge is used. VP_KEY must be set. This macro does not work without ROBOTJS.";
		settingUpdate();
	}
	
	let VP_KEY = "3";
	if (("VP_KEY" in config)) {
		VP_KEY = config.VP_KEY;
	}
	if (!("VP_KEY" in config)) {
		config.VP_KEY = "3";
		config.VP_KEY_DESCRIPTION = "Void Pulse Key. Find keyboard syntax list here http://robotjs.io/docs/syntax";
		settingUpdate();
	}
	
	let METEOR_NOVA = false;
	if (("METEOR_NOVA" in config)) {
		METEOR_NOVA = config.METEOR_NOVA;
	}
	if (!("METEOR_NOVA" in config)) {
		config.METEOR_NOVA = false;
		config.METEOR_NOVA_DESCRIPTION = "Auto use Nova after Meteor. NOVA_KEY must be set. This macro does not work without ROBOTJS.";
		settingUpdate();
	}
	
	let NOVA_KEY = "3";
	if (("NOVA_KEY" in config)) {
		NOVA_KEY = config.NOVA_KEY;
	}
	if (!("NOVA_KEY" in config)) {
		config.NOVA_KEY = "3";
		config.VP_KEY_DESCRIPTION = "Void Pulse Key. Find keyboard syntax list here http://robotjs.io/docs/syntax";
		settingUpdate();
	}


	let cid;
	let job;
	let model;
	let enabled = false;
	let aspd;

	let atkid = [];
	let atkid_base = 0xFEFEFFEE;

	let disabSkill = [];
	let startTime = [];
	let timer = [];

	let stallSorc =0;
	let lastSkill = false;
	let lastLastSkill;
	let lastEvent = false;
	let manaBoostActive = false;
	let arcanePulseActive = false;
	let novaActive = false;
	let novaCheck;
	let GLOBAL_LOCK_DELAY =250;
	let warpActive = false;
	let cancelTimer;
	let LSreset;
	let traplord = false;
	let mindlord = false;

	let chargeSkillFix = [];
	let chargeSkillFix2;
	let chargeSkillIDx =0;

	let flameN =0;
	let flamezCheck =0;

	let firelord;

	let blockGrant = false;
	let blockGrant2;
	let zoc1;
	let zoc2;

	let SKILL_FROST_SPHERE_DURATION =880;
	let SKILL_ARCANE_PULSE_DURATION =1100;
	let SKILL_MINDBLAST_DURATION =2710;

	let APActive = false;
	let APState =0;
	let APSpeed =0; 
	let GlacialTimer;
	let lastspoof;

	let noct1 = false;
	let noct2 = false;
	let noct3 = false;
	let noct4 = false;
	let noct5 = false;
	let noct6 = false;
	let noct7 = false;
	let noct8 = false;
	let noct9 = false;
	let noct10 = false;
	let noct11 = false;
	let noct12 = false;
	let noct13 = false;
	let elements = false;
	let bap = false;
	
	let lastedge;
	let laststat = false;
	let lastlastedge;

	let Ignore1 = false;
	let Ignore2;

	let FBActive = false;

	let xloc;
	let yloc;
	let zloc;
	let wloc;
	let timeloc;
	
	let icelanceblock = false;
	
	let failsafe =0;

	let glyphState = [];

	let lastSkillTime = [];
	let lastSkillDelay;
	let lastLastSkillDelay;
	let lastSkillStart;
	let lastSkillEvent;
	let RecheckTimer;

	let v1;
	let v2;
	let v3;
	let v4;
	let v5;
	let v6;
	let v7;
	let v8;
	
	let manaf = false;
	let manaf2;

	let drak;
	let reverselock;

	let novaEvent;

	let backStepStart;

	var atkArr;

	let talentState = [];
	dispatch.hook('S_LOAD_EP_INFO', dispatch.majorPatchVersion >= 105 ? 3 : 2, (event) => {
		if (!enabled) { return };
		talentState = [];
		event.perks.forEach(function (element) {
			talentState[element.id] = element.level;
		});
	});

	dispatch.hook('S_LEARN_EP_PERK', 1, (event) => {
		if (!enabled) { return };
		talentState = [];
		event.perks.forEach(function (element) {
			talentState[element.id] = element.level;
		});
	});
	
	dispatch.hook('TTB_S_LOAD_EP_PAGE', 1, (event) => {
		if (!enabled) { return };
		talentState = [];
		event.perks.forEach(function (element) {
			talentState[element.id] = element.level;
		});
	});

	dispatch.hook('S_LOAD_TOPO', 3, (event) => {
		if (event.zone ==118) {
			enabled = false;
		}
		else {
			enabled = [JOB_SORC].includes(job);
		}
	});

	dispatch.hook('S_LOGIN', dispatch.majorPatchVersion >= 86 ? 14 : 13, (event) => {
		cid = event.gameId;
		model = event.templateId;

		job = (model -10101) %100;
		enabled = [JOB_SORC].includes(job);
		var race = Math.floor((model -10101) /100);
		if (race ==4) {
			SKILL_FROST_SPHERE_DURATION =1375;
		}
		if (race ==9) {
			SKILL_FROST_SPHERE_DURATION =1100;
			SKILL_MINDBLAST_DURATION =2550;
		}
		if (race ==10) {
			SKILL_FROST_SPHERE_DURATION =990;
		}
		if (race !=9) {
			SKILL_ARCANE_PULSE_DURATION =1420;
		}
	});

	dispatch.hook('C_CHAT', 1, (event) => {
		if (event.message.includes("disable4")) {
			enabled = false;
			console.log("Sorc script disabled");
			return false;
		}
		if (event.message.includes("enable4")) {
			enabled = [JOB_SORC].includes(job);
			console.log("Sorc script enabled if you are currently logged into sorc");
			return false;
		}
	});

	function fakeEnd_sorc(event, duration) {
		if (lastSkill == SKILL_WARP_BARRIER || lastSkill == SKILL_WARP_BARRIER_2) {
			if (lastSkill == SKILL_WARP_BARRIER +50) {
				return false;
			}
			lastSkill = SKILL_WARP_BARRIER +50;
			setTimeout(function (event, duration) {
				dispatch.toServer('C_START_SKILL', 7, event);
				lastSkill = SKILL_WARP_BARRIER +22;
				fakeEnd_sorc(event, duration);
			}, 150, event, duration);
			return;
		}
		var zzz =1;
		var d = new Date();
		lastSkillStart = d.getTime();
		lastLastSkillDelay = lastSkillDelay;
		if (event.skill.id == SKILL_METEOR_STRIKE) {
			if (manaBoostActive && !warpActive) {
				event.skill.id = SKILL_METEOR_SHOWER;
			}
			if (manaBoostActive && warpActive) {
				event.skill.id = SKILL_METEOR_STRIKE_BOOST;
				//event.skill.id = SKILL_METEOR_SHOWER;
			}
			if (!manaBoostActive && warpActive) {
				event.skill.id = SKILL_METEOR_STRIKE;
			}
			if (glyphState[25069] ==1) {
				zzz = 1.25;
			}
			if (glyphState[25003] ==1) {
				zzz = 1.17;
			}
			if (glyphState[25003] != 1 && glyphState[25069] !=1) {
				duration = duration * 1.25;
			}
		}
		if (event.skill.id == SKILL_NOVA) {
			if (glyphState[25092] ==1) {
				zzz = 1.30;
			}
			if (glyphState[25092] ==0) {
				duration = duration * 1.3;
			}
		}
		if (event.skill.id == SKILL_FLAMING_BARRAGE_2) {
			if (glyphState[25096] ==1) {
				zzz = 1.40;
			}
			if (glyphState[25001] ==1) {
				zzz = 1.3;
			}
			if (glyphState[25001] != 1 && glyphState[25096] !=1) {
				duration = duration * 1.5;
			}
		}

		if (event.skill.id == SKILL_LIGHTNING_TRAP) {
			if (traplord) {
				zzz = 1.4;
				duration = duration / 1.4;
			}
		}

		if (event.skill.id == SKILL_MINDBLAST) {
			if (mindlord) {
				zzz = zzz * 1.4;
				duration = duration / 1.4;
			}
			if (glyphState[25048] ==1) {
				zzz = zzz * 1.3;
				duration = duration / 1.3;
			}
		}

		if (event.skill.id == SKILL_HAILSTORM && (noct1 || noct2 || noct3 || noct4)) {
			zzz = 1.225;
		}
		if (event.skill.id == SKILL_HAILSTORM && (noct5 || noct6 || noct7 || noct8 || noct9 || noct10 || noct11 || noct12 || noct13)) {
			zzz = 1.15;
		}

		if (event.skill.id == SKILL_NOVA && talentState[853020]) {
			zzz = zzz + (talentState[853020] * 0.00714 + 0.043);
			duration = duration / zzz * (zzz - (talentState[853020] * 0.00714 + 0.043));
		}

		if (event.skill.id == SKILL_TIME_GYRE_2 || event.skill.id == SKILL_BURNING_BREATH_2 || event.skill.id == SKILL_MANA_VOLLEY_2 || event.skill.id == SKILL_NERVE_EXHAUST_2) {
			zzz = 1.1 / aspd;
			duration = duration * aspd;
		}

		if (event.skill.id == SKILL_FLAMING_BARRAGE_2) {
			FBActive = true;
			setTimeout(function () { FBActive = false; }, (duration + SYNC_MARGIN) / aspd);
		}
		
		atkid[event.skill.id] = atkid_base;
		atkid_base--;

		dispatch.toClient('S_ACTION_STAGE', 9, {
			gameId: cid,
			loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
			w: event.w,
			templateId: model,
			skill: event.skill.id,
			stage: 0,
			speed: aspd / 1.1 * zzz,
			projectileSpeed: aspd / 1.1 * zzz,
			id: atkid[event.skill.id],
			effectScale: 1.0,
			moving: false,
			dest: { x: 0, y: 0, Z: 0 },
			target: 0n,
			animSeq: [],
		});

		lastSkillDelay = duration / aspd;
		setTimeout(function () {
			lastSkillEvent = {
				gameId: cid,
				loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
				w: event.w,
				templateId: model,
				skill: event.skill.id,
				type: 0,
				id: atkid[event.skill.id],
			};
		}, duration / aspd, event);
		cancelTimer = setTimeout(function (event) {
			if (lastSkill ==1) { return; }
			if (lastSkill == SKILL_BACKSTEP || lastSkill == SKILL_ESCAPE) { return false; }
			if (job == JOB_SORC && event.skill.id == SKILL_NOVA && novaActive == false) return false;
			dispatch.toClient('S_ACTION_END', 5, {
				gameId: cid,
				loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
				w: event.w,
				templateId: model,
				skill: event.skill.id,
				type: 0,
				id: atkid[event.skill.id],
			});
		}, duration / aspd, event);
	}

	function fakeEnd_AP(event, stage, xy, yy) {
		atkid[event.skill.id] = atkid_base;
		atkid_base--;
		dispatch.toClient('S_ACTION_STAGE', 9, {
			gameId: cid,
			loc: { x: xy, y: yy, z: event.loc.z },
			w: event.w,
			templateId: model,
			skill: event.skill.id,
			stage: stage,
			speed: aspd / 1.1,
			projectileSpeed: aspd,
			id: atkid[event.skill.id],
			effectScale: 1.0,
			moving: false,
			dest: { x: 0, y: 0, Z: 0 },
			target: 0n,
			animSeq: [],
		});
	}

	function fakeEnd_AP2(event, skillx, duration) {
		atkid[skillx] = atkid_base;
		atkid_base--;
		dispatch.toClient('S_ACTION_STAGE', 9, {
			gameId: cid,
			loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
			w: event.w,
			templateId: model,
			skill: skillx,
			stage: 0,
			speed: aspd / 1.1,
			projectileSpeed: aspd / 1.1,
			id: atkid[skillx],
			effectScale: 1.0,
			moving: false,
			dest: { x: 0, y: 0, Z: 0 },
			target: 0n,
			animSeq: [],
		});

		const timer = setTimeout(function (event) {
			if (lastSkill ==1) { return; }
			dispatch.toClient('S_ACTION_END', 5, {
				gameId: cid,
				loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
				w: event.w,
				templateId: model,
				skill: skillx,
				type: 0,
				id: atkid[skillx],
			});
		}, duration / aspd, event);
	}


	function force_end(event) {
		dispatch.toClient('S_ACTION_END', 5, {
			gameId: cid,
			loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
			w: event.w,
			templateId: model,
			skill: event.skill.id,
			type: 0x02,
			id: atkid[event.skill.id],
		});
	}



	function fakeEnd_sorc_dist(event, duration, dist) {
		if (lastSkill == SKILL_WARP_BARRIER || lastSkill == SKILL_WARP_BARRIER_2) {
			if (lastSkill == SKILL_WARP_BARRIER +50) {
				return false;
			}
			lastSkill = SKILL_WARP_BARRIER +50;
			setTimeout(function (event, duration, dist) {
				dispatch.toServer('C_START_SKILL', 7, event);
				lastSkill = SKILL_WARP_BARRIER +22;
				fakeEnd_sorc_dist(event, duration, dist);
			}, 150, event, duration, dist);
			return;
		}
		atkid[event.skill.id] = atkid_base;
		atkid_base--;
		var d = new Date();
		lastSkillStart = d.getTime();
		lastLastSkillDelay = lastSkillDelay;
		dispatch.toClient('S_ACTION_STAGE', 9, {
			gameId: cid,
			loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
			w: event.w,
			templateId: model,
			skill: event.skill.id,
			stage: 0,
			speed: aspd / 1.1,
			projectileSpeed: aspd / 1.1,
			id: atkid[event.skill.id],
			effectScale: 1.0,
			moving: false,
			dest: { x: 0, y: 0, Z: 0 },
			target: 0n,
			animSeq: [],
		});

		var newX;
		var newY;
		var angle = parseFloat(event.w);

		var vvv =0;

		newX = Math.cos(angle) * dist;
		newY = Math.sin(angle) * dist;

		lastSkillDelay = duration / aspd;
		setTimeout(function () {
			lastSkillEvent = {
				gameId: cid,
				loc: { x: event.loc.x + newX, y: event.loc.y + newY, z: event.loc.z + 2 },
				w: event.w,
				templateId: model,
				skill: event.skill.id,
				type: 0,
				id: atkid[event.skill.id],
			};
		}, duration / aspd, event);

		cancelTimer = setTimeout(function (event) {
			if ((lastSkill == SKILL_BACKSTEP || lastSkill == SKILL_ESCAPE) && event.skill.id != SKILL_BACKSTEP && event.skill.id != SKILL_ESCAPE) { return false; }
			if (event.skill.id == SKILL_BLACKHOLE && lastSkill != SKILL_BLACKHOLE) { return; }
			if (lastSkill ==1) { return; }
			dispatch.toClient('S_ACTION_END', 5, {
				gameId: cid,
				loc: { x: event.loc.x + newX, y: event.loc.y + newY, z: event.loc.z + 2 },
				w: event.w,
				templateId: model,
				skill: event.skill.id,
				type: 0,
				id: atkid[event.skill.id],
			});
			xloc = event.loc.x + newX;
			yloc = event.loc.y + newY;
			zloc = event.loc.z +2;
			wloc = event.w;
		}, duration / aspd, event);
	}

	dispatch.hook('C_CAN_LOCKON_TARGET', 3, function (event) {
		dispatch.toClient('S_CAN_LOCKON_TARGET', 3, Object.assign({ success: true }, event));
		/*if(AUTOBARRAGE && lastSkill == SKILL_FLAMING_BARRAGE){
		setTimeout(function(){
		var robot33 = require("robotjs");
		robot33.keyTap(BARRAGEKEY);
		},20);
		setTimeout(function(){
		var robot34 = require("robotjs");
		robot34.keyTap(BARRAGEKEY);
		},60);
		setTimeout(function(){
		var robot35 = require("robotjs");
		robot35.keyTap(BARRAGEKEY);
		},100);
		}*/
	});

	dispatch.hook('S_CAN_LOCKON_TARGET', 3, { order: 99999, filter: { fake: true } }, (event) => {
		if (AUTOBARRAGE && lastSkill == SKILL_FLAMING_BARRAGE && flameN ==0) {
			flameN++;
			setTimeout(function () { flameN = 0; },500);
			setTimeout(function () {
				var robot33 = require("robotjs");
				robot33.keyTap(BARRAGEKEY);
			}, (20 * AUTOBARRAGE_DELAY));
			setTimeout(function () {
				var robot34 = require("robotjs");
				robot34.keyTap(BARRAGEKEY);
			}, (60 * AUTOBARRAGE_DELAY));
			setTimeout(function () {
				var robot35 = require("robotjs");
				robot35.keyTap(BARRAGEKEY);
			}, (100 * AUTOBARRAGE_DELAY));
		}
		
		if (AUTONERVE && lastSkill == SKILL_NERVE_EXHAUST) {
			setTimeout(function () {
				var robot33 = require("robotjs");
				robot33.keyTap(NERVE_KEY);
			}, (20 * AUTOBARRAGE_DELAY));
			setTimeout(function () {
				var robot34 = require("robotjs");
				robot34.keyTap(NERVE_KEY);
			}, (60 * AUTOBARRAGE_DELAY));
			setTimeout(function () {
				var robot35 = require("robotjs");
				robot35.keyTap(NERVE_KEY);
			}, (100 * AUTOBARRAGE_DELAY));
		}
		
	});

	dispatch.hook('S_EACH_SKILL_RESULT', dispatch.majorPatchVersion >= 86 ? 14 : 13, (event) => {
		if(event.target === cid) {
			if (event.reaction.enable == true) {
				disabSkill[SKILL_TELEPORT_JAUNT] = false;
				lastSkill =1;
				APActive = false;
			}
		}
	});

	dispatch.hook('S_CANNOT_START_SKILL', 4, (event) => {
		if (!enabled) { return };
		/*if (event.skill.id == (SKILL_ARCANE_PULSE && chargeSkillFix2 != SKILL_ARCANE_PULSE && APActive == true)) {
			dispatch.toClient('S_ACTION_END', 5, {
				gameId: cid,
				loc: { x: lastEvent.loc.x, y: lastEvent.loc.y, z: lastEvent.loc.z },
				w: lastEvent.w,
				templateId: model,
				skill: SKILL_ARCANE_PULSE,
				type: 0,
				id: atkid[SKILL_ARCANE_PULSE],
			});
			clearTimeout(zoc1);
			clearTimeout(zoc2);
			fakeEnd_AP(lastEvent, 0, lastEvent.loc.x, lastEvent.loc.y);
			APState =1;
			stallSorc =0;
			zoc1 = setTimeout(function () {
				if (job == JOB_SORC && lastEvent.skill.id == SKILL_ARCANE_PULSE && APActive == true && APState ==1) {
					fakeEnd_AP(lastEvent, 1, xloc, yloc);
					APState =2;
					zoc2 = setTimeout(function () {
						if (job == JOB_SORC && lastEvent.skill.id == SKILL_ARCANE_PULSE && APActive == true && APState ==2) {
							fakeEnd_AP(lastEvent, 2, xloc, yloc);
							APState =3;
							if (AP_AUTO_RELEASE) {
								if (!disabSkill[555]) {
									setTimeout(function () {
										var robot52 = require("robotjs");
										robot52.keyTap(AP_KEY);
									},100);
								}
								if (disabSkill[555]) {
									setTimeout(function () {
										var robot52 = require("robotjs");
										robot52.keyTap(AP_KEY);
									},200);
								}
							}
						}
					}, SKILL_ARCANE_PULSE_DELAY_2 / (aspd + 0.33 * APSpeed));
				}
			}, SKILL_ARCANE_PULSE_DELAY_1 / (aspd + 0.33 * APSpeed));
		}*/
	});

	dispatch.hook('S_ABNORMALITY_BEGIN', 5, (event) => {
		if (!enabled) return;
		if (event.target !== cid) {
			return;
		}
		if (event.id ==502052) {
			elements = true;
		}
		if(event.id ==920){
			noct1 = true;
		}
		if(event.id ==921){
			noct2 = true;
		}
		if(event.id ==922){
			noct3 = true;
		}
		if(event.id ==929){
			noct4 = true;
		}
		if(event.id ==902){
			noct5 = true;
		}
		if(event.id ==910){
			noct6 = true;
		}
		if(event.id ==911){
			noct7 = true;
		}
		if(event.id ==912){
			noct8 = true;
		}
		if(event.id ==913){
			noct9 = true;
		}
		if(event.id ==916){
			noct10 = true;
		}
		if(event.id ==917){
			noct11 = true;
		}
		if(event.id ==5010009){
			noct12 = true;
		}
		if(event.id ==999010000){
			noct13 = true;
		}
		if (event.id ==25090) {
			traplord = true;
		}
		if (event.id ==25110) {
			mindlord = true;
		}
		if (event.id ==500150) {
			manaBoostActive = true;
		}
	});

	dispatch.hook('S_ABNORMALITY_END', 1, (event) => {
		if (!enabled) return;
		if (event.target !== cid) {
			return;
		}
		if (event.id ==502052) {
			elements = false;
		}
		if(event.id ==920){
			noct1 = false;
		}
		if(event.id ==921){
			noct2 = false;
		}
		if(event.id ==922){
			noct3 = false;
		}
		if(event.id ==929){
			noct4 = false;
		}
		if(event.id ==902){
			noct5 = false;
		}
		if(event.id ==910){
			noct6 = false;
		}
		if(event.id ==911){
			noct7 = false;
		}
		if(event.id ==912){
			noct8 = false;
		}
		if(event.id ==913){
			noct9 = false;
		}
		if(event.id ==916){
			noct10 = false;
		}
		if(event.id ==917){
			noct11 = false;
		}
		if(event.id ==5010009){
			noct12 = false;
		}
		if(event.id ==999010000){
			noct13 = false;
		}
		if (event.id ==25090) {
			traplord = false;
		}
		if (event.id ==25110) {
			mindlord = false;
		}
		if (event.id ==500150) {
			manaBoostActive = false;
		}
	});

	function grantskill(xskill) {
		if (!SPOOF_GRANT) {
			return;
		}
		clearTimeout(blockGrant2);
		blockGrant = true;
		blockGrant2 = setTimeout(function () { blockGrant = false; },500);
		dispatch.toClient('S_GRANT_SKILL', 3, {
			skill: xskill,
		});
		lastspoof = xskill;
	}

	dispatch.hook('S_GRANT_SKILL', 3, (event) => {
		if (!enabled) { return };
		if (blockGrant && (lastspoof == event.skill.id  || manaBoostActive)) {
			return false;
		}
	});

	function pressSkillspoof(event) {
		if (FBActive && FLAME_BARRAGE_SYNC) {
			setTimeout(function (event) { pressSkillspoof(event); }, 20, event);
			return false;
		}
		if (!disabSkill[event.skill.id]) {
			dispatch.toServer('C_PRESS_SKILL', 4, event);
			lastSkillDelay =999999;
			if (job == JOB_SORC && event.skill.id == SKILL_ARCANE_PULSE) {
				APActive = event.press;
			}
			if (job == JOB_SORC && event.skill.id == SKILL_ARCANE_PULSE && event.press == false) {
				if (!reverselock) {
					grantskill((event.skill.id + 9 + APState));
				}
				if (stallSorc >10) {
					//console.log('attempt unstuck');
					dispatch.toClient('S_ACTION_END', 5, {
						gameId: cid,
						loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
						w: event.w,
						templateId: model,
						skill: SKILL_ARCANE_PULSE,
						type: 0,
						id: atkid[SKILL_ARCANE_PULSE],
					});
				}
				stallSorc = stallSorc +1;
			}
			if (blockGrant && SPOOF_GRANT) {
				return;
			}
			if (job == JOB_SORC && event.skill.id == SKILL_ARCANE_PULSE && APActive == true) {
				setTimeout(function (event) { if(lastSkill == SKILL_ARCANE_PULSE){dispatch.toServer('C_PRESS_SKILL', 4, event); }}, 50, event);
				setTimeout(function (event) { if(lastSkill == SKILL_ARCANE_PULSE){dispatch.toServer('C_PRESS_SKILL', 4, event); }}, 100, event);
				setTimeout(function (event) { if(lastSkill == SKILL_ARCANE_PULSE){dispatch.toServer('C_PRESS_SKILL', 4, event); }}, 150, event);
				setTimeout(function (event) { if(lastSkill == SKILL_ARCANE_PULSE){dispatch.toServer('C_PRESS_SKILL', 4, event); }}, 200, event);
				chargeSkillFix[chargeSkillIDx] = setInterval(function (event, nnn) {
					if ((event.skill.id == SKILL_ARCANE_PULSE) && lastSkill == event.skill.id && event.press == true && chargeSkillFix2 != lastSkill) {
						dispatch.toServer('C_PRESS_SKILL', 4, event);
					}
					if (chargeSkillFix2 == lastSkill) {
						clearInterval(chargeSkillFix[nnn]);
					}
					if (event.skill.id == SKILL_ARCANE_PULSE && APActive == false) {
						clearInterval(chargeSkillFix[nnn]);
					}
				}, 100, event, chargeSkillIDx);
				chargeSkillIDx++;
				if (DISABLE_CHARGE) { lastSkill = SKILL_ARCANE_PULSE; return; }
				fakeEnd_AP(event, 0, event.loc.x, event.loc.y);
				APState =1;
				stallSorc =0;
				zoc1 = setTimeout(function () {
					if (job == JOB_SORC && event.skill.id == SKILL_ARCANE_PULSE && APActive == true && APState ==1) {
						fakeEnd_AP(event, 1, xloc, yloc);
						APState =2;
						zoc2 = setTimeout(function () {
							if (job == JOB_SORC && event.skill.id == SKILL_ARCANE_PULSE && APActive == true && APState ==2) {
								fakeEnd_AP(event, 2, xloc, yloc);
								APState =3;
								if (AP_AUTO_RELEASE) {
									if (!disabSkill[555]) {
										setTimeout(function () {
											var robot52 = require("robotjs");
											robot52.keyTap(AP_KEY);
										},100);
									}
									if (disabSkill[555]) {
										setTimeout(function () {
											var robot52 = require("robotjs");
											robot52.keyTap(AP_KEY);
										},200);
									}
								}
							}
						}, SKILL_ARCANE_PULSE_DELAY_2 / (aspd + 0.33 * APSpeed));
					}
				}, SKILL_ARCANE_PULSE_DELAY_1 / (aspd + 0.33 * APSpeed));
			}
			if (event.press == true && event.skill.id !=350100) {
				lastLastSkill = lastSkill;
				lastSkill = event.skill.id;
				lastEvent = event;
				clearTimeout(blockGrant2);
				blockGrant = false;
			}
		}
	}

	dispatch.hook('C_PRESS_SKILL', 4, (event) => {
		if (!enabled) return;
		if (APCHECK.indexOf(event.skill.id) !== -1 && manaBoostActive && bap && SPOOF_GRANT) {
			return;
		}
		if (FBActive && FLAME_BARRAGE_SYNC) {
			setTimeout(function (event) { pressSkillspoof(event); }, 20, event);
			return false;
		}
		if(event.skill.id == SKILL_ARCANE_PULSE){
			icelanceblock = true;
			setTimeout(function(){icelanceblock = false;},100);
		}
		if (!disabSkill[event.skill.id]) {
			lastSkillDelay =999999;
			if (job == JOB_SORC && event.skill.id == SKILL_ARCANE_PULSE) {
				APActive = event.press;
			}
			if (job == JOB_SORC && event.skill.id == SKILL_ARCANE_PULSE && event.press == false) {
				if (!reverselock && lastSkill == SKILL_ARCANE_PULSE) {
					grantskill((event.skill.id + 9 + APState));
				}
				if (stallSorc >10) {
					//console.log('attempt unstuck');
					dispatch.toClient('S_ACTION_END', 5, {
						gameId: cid,
						loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
						w: event.w,
						templateId: model,
						skill: SKILL_ARCANE_PULSE,
						type: 0,
						id: atkid[SKILL_ARCANE_PULSE],
					});
				}
				stallSorc = stallSorc +1;
			}
			if (blockGrant && SPOOF_GRANT) {
				return;
			}
			if (job == JOB_SORC && event.skill.id == SKILL_ARCANE_PULSE && APActive == true) {
				setTimeout(function (event) { if(lastSkill == SKILL_ARCANE_PULSE){dispatch.toServer('C_PRESS_SKILL', 4, event); }}, 50, event);
				setTimeout(function (event) { if(lastSkill == SKILL_ARCANE_PULSE){dispatch.toServer('C_PRESS_SKILL', 4, event); }}, 100, event);
				setTimeout(function (event) { if(lastSkill == SKILL_ARCANE_PULSE){dispatch.toServer('C_PRESS_SKILL', 4, event); }}, 150, event);
				setTimeout(function (event) { if(lastSkill == SKILL_ARCANE_PULSE){dispatch.toServer('C_PRESS_SKILL', 4, event); }}, 200, event);
				chargeSkillFix[chargeSkillIDx] = setInterval(function (event, nnn) {
					if ((event.skill.id == SKILL_ARCANE_PULSE) && lastSkill == event.skill.id && event.press == true && chargeSkillFix2 != lastSkill) {
						dispatch.toServer('C_PRESS_SKILL', 4, event);
					}
					if (chargeSkillFix2 == lastSkill) {
						clearInterval(chargeSkillFix[nnn]);
					}
					if (event.skill.id == SKILL_ARCANE_PULSE && APActive == false) {
						clearInterval(chargeSkillFix[nnn]);
					}
				}, 100, event, chargeSkillIDx);
				chargeSkillIDx++;
				if (DISABLE_CHARGE) { lastSkill = SKILL_ARCANE_PULSE; return; }
				fakeEnd_AP(event, 0, event.loc.x, event.loc.y);
				APState =1;
				stallSorc =0;
				zoc1 = setTimeout(function () {
					if (job == JOB_SORC && event.skill.id == SKILL_ARCANE_PULSE && APActive == true && APState ==1) {
						fakeEnd_AP(event, 1, xloc, yloc);
						APState =2;
						zoc2 = setTimeout(function () {
							if (job == JOB_SORC && event.skill.id == SKILL_ARCANE_PULSE && APActive == true && APState ==2) {
								fakeEnd_AP(event, 2, xloc, yloc);
								APState =3;
								if (AP_AUTO_RELEASE) {
									if (!disabSkill[555]) {
										setTimeout(function () {
											var robot52 = require("robotjs");
											robot52.keyTap(AP_KEY);
										},100);
									}
									if (disabSkill[555]) {
										setTimeout(function () {
											var robot52 = require("robotjs");
											robot52.keyTap(AP_KEY);
										},200);
									}
								}
							}
						}, SKILL_ARCANE_PULSE_DELAY_2 / (aspd + 0.33 * APSpeed));
					}
				}, SKILL_ARCANE_PULSE_DELAY_1 / (aspd + 0.33 * APSpeed));
			}
			if (event.press == true && event.skill.id !=350100) {
				lastLastSkill = lastSkill;
				lastSkill = event.skill.id;
				lastEvent = event;
				clearTimeout(blockGrant2);
				blockGrant = false;
			}
		}
	});

	dispatch.hook('S_CREST_MESSAGE', 2, { order: -99999 }, (event) => {
		if (!enabled) { return };
		if (event.type ==6) {
			disabSkill[SKILL_LIGHTNING_STRIKE] = false;
		}
	});
	
	dispatch.hook('C_HIT_USER_PROJECTILE', 4, (event) => {
		if (!enabled) return;
		if(lastSkill == SKILL_ARCANE_PULSE_1 || lastSkill == SKILL_ARCANE_PULSE_2 || lastSkill == SKILL_ARCANE_PULSE_3 || lastSkill == SKILL_ARCANE_PULSE_4 || lastSkill == SKILL_ARCANE_PULSE_5 || lastSkill == SKILL_ARCANE_PULSE_6){
			disabSkill[SKILL_FIREICE] = true;
			setTimeout(function () { disabSkill[SKILL_FIREICE] = false; },500);
		}			
	});

	dispatch.hook('S_CREST_INFO', 2, (event) => {
		if (!enabled) { return };
		event.crests.forEach(function (element) {
			glyphState[element.id] = element.enable;
		});
	});

	dispatch.hook('S_CREST_APPLY', 2, (event) => {
		if (!enabled) { return };
		glyphState[event.id] = event.enable;
	});

	function startSkillzx(event) {
		if (FBActive && FLAME_BARRAGE_SYNC) {
			clearTimeout(drak);
			drak = setTimeout(function (event) { startSkillzx(event); }, 20, event);
			return false;
		}
		if(disabSkill[SKILL_FIREICE] && event.skill.id == SKILL_FIREICE && (lastSkill == SKILL_ARCANE_PULSE_1 || lastSkill == SKILL_ARCANE_PULSE_2 || lastSkill == SKILL_ARCANE_PULSE_3)){
			return false;
		}
		if(event.skill.id == (SKILL_MANA_BOOST +30) && manaf){
			return false;
		}
		if (disabSkill[event.skill.id] == 'undefined') disabSkill[event.skill.id] = false;
		lastSkillDelay =999999;
		dispatch.toServer('C_START_SKILL', 7, event)
		if (!disabSkill[event.skill.id]) {
			if (APCHECK.indexOf(event.skill.id) !== -1 && manaBoostActive && bap && SPOOF_GRANT) {
				return;
			}
			var xzzy = event.skill.type === 1 && event.skill.id <= 999999 && BLACKLIST.indexOf(event.skill.id) === -1;
			if (xzzy && event.skill.id != SKILL_FLAMING_BARRAGE && event.skill.id != SKILL_FLAMING_BARRAGE_2 && event.skill.id != SKILL_RETALIATE && event.skill.id != SKILL_TIME_GYRE && event.skill.id != SKILL_MANA_VOLLEY && event.skill.id != SKILL_BURNING_BREATH && event.skill.id != SKILL_NERVE_EXHAUST) {
				clearTimeout(v1);
				clearTimeout(v2);
				clearTimeout(v3);
				clearTimeout(v4);
				clearTimeout(v5);
				clearTimeout(v6);
				clearTimeout(v7);
				clearTimeout(v8);
				v1 = setTimeout(function () { dispatch.toServer('C_START_SKILL', 7, event); },25);
				v2 = setTimeout(function () { dispatch.toServer('C_START_SKILL', 7, event); },50);
				v3 = setTimeout(function () { dispatch.toServer('C_START_SKILL', 7, event); },75);
				v4 = setTimeout(function () { dispatch.toServer('C_START_SKILL', 7, event); },100);
				if (event.skill.id != SKILL_TELEPORT_JAUNT && event.skill.id != SKILL_FLAMING_BARRAGE_2) {
					v5 = setTimeout(function () { dispatch.toServer('C_START_SKILL', 7, event); },125);
					v6 = setTimeout(function () { dispatch.toServer('C_START_SKILL', 7, event); },150);
					v7 = setTimeout(function () { dispatch.toServer('C_START_SKILL', 7, event); },200);
					v8 = setTimeout(function () { dispatch.toServer('C_START_SKILL', 7, event); },250);
					
				}
			}

			if (job == JOB_SORC && event.skill.id == BLAST_LOL) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[BLAST_LOL] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc(event, BLAST_LOL_DURATION);
			}

			if (job == JOB_SORC && event.skill.id == SKILL_FIREICE) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_FIREICE] = false; }, GLOBAL_LOCK_DELAY *5);
				fakeEnd_sorc(event, SKILL_FIREICE_D);
			}

			if (job == JOB_SORC && event.skill.id == (SKILL_FIREICE +30)) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[(SKILL_FIREICE +30)] = false; }, GLOBAL_LOCK_DELAY *5);
				fakeEnd_sorc(event, SKILL_FIREICE_D);
			}

			if (job == JOB_SORC && event.skill.id == SKILL_FIREZAP) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_FIREZAP] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc(event, SKILL_FIREZAP_D);
			}

			if (job == JOB_SORC && event.skill.id == SKILL_ICEZAP) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_ICEZAP] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc(event, SKILL_ICEZAP_D);
			}

			if (job == JOB_SORC && event.skill.id == SKILL_TRINITY) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_TRINITY] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc(event, SKILL_TRINITY_D);
			}
			if (job == JOB_SORC && event.skill.id == SKILL_BLACKHOLE && elements) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_BLACKHOLE] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc_dist(event, (SKILL_BLACKHOLE_D1 + SKILL_BLACKHOLE_D2 + SKILL_BLACKHOLE_D3),200);
				setTimeout(function (event) {
					if (lastSkill != SKILL_BLACKHOLE) { return; }
					dispatch.toClient('S_ACTION_STAGE', 9, {
						gameId: cid,
						loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
						w: event.w,
						templateId: model,
						skill: event.skill.id,
						stage: 1,
						speed: aspd / 1.1,
						projectileSpeed: aspd / 1.1,
						id: atkid[event.skill.id],
						effectScale: 1.0,
						moving: false,
						dest: { x: 0, y: 0, Z: 0 },
						target: 0n,
						animSeq: [],
					});

				}, SKILL_BLACKHOLE_D1 / aspd, event);
				setTimeout(function (event) {
					if (lastSkill != SKILL_BLACKHOLE) { return; }
					dispatch.toClient('S_ACTION_STAGE', 9, {
						gameId: cid,
						loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
						w: event.w,
						templateId: model,
						skill: event.skill.id,
						stage: 2,
						speed: aspd / 1.1,
						projectileSpeed: aspd / 1.1,
						id: atkid[event.skill.id],
						effectScale: 1.0,
						moving: false,
						dest: { x: 0, y: 0, Z: 0 },
						target: 0n,
						animSeq: [],
					});

				}, (SKILL_BLACKHOLE_D1 + SKILL_BLACKHOLE_D2) / aspd, event);
			}

			if (job == JOB_SORC && event.skill.id == SKILL_VOID_PULSE) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_VOID_PULSE] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc(event, SKILL_VOID_PULSE_DURATION);
			}

			if (job == JOB_SORC && event.skill.id == SKILL_RETALIATE) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_RETALIATE] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc(event, SKILL_RETALIATE_DURATION);
			}

			if (job == JOB_SORC && event.skill.id == SKILL_PILLAR) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_PILLAR] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc(event, SKILL_PILLAR_DURATION);
			}

			if (job == JOB_SORC && event.skill.id == SKILL_MANA_BARRIER) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_MANA_BARRIER] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc(event, SKILL_MANA_BARRIER_DURATION);
			}

			if (job == JOB_SORC && (event.skill.id == SKILL_WARP_BARRIER || event.skill.id == SKILL_WARP_BARRIER_2)) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function (event) { disabSkill[event.skill.id] = false; }, GLOBAL_LOCK_DELAY, event);
				setTimeout(function () { dispatch.toServer('C_START_SKILL', 7, event); },150);
				fakeEnd_sorc(event, SKILL_WARP_BARRIER_DURATION);
				warpActive = true;
				if (glyphState[25095] ==0) {
					setTimeout(function () { warpActive = false; },1000);
				}
				if (glyphState[25095] ==1) {
					setTimeout(function () { warpActive = false; },2000);
				}
			}

			if (job == JOB_SORC && event.skill.id == SKILL_ARCANE_PULSE_1 /*&& lastSkill == SKILL_ARCANE_PULSE*/) {
				disabSkill[SKILL_METEOR_STRIKE] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_METEOR_STRIKE] = false; }, SKILL_ARCANE_PULSE_DURATION / aspd);
disabSkill[SKILL_FIREICE] = true;
				var timer22 = setTimeout(function () { disabSkill[SKILL_FIREICE] = false; }, SKILL_ARCANE_PULSE_DURATION / aspd);
				if (manaBoostActive) {
					fakeEnd_AP2(event, SKILL_ARCANE_PULSE_4, SKILL_ARCANE_PULSE_DURATION);
				}
				if (!manaBoostActive) {
					fakeEnd_AP2(event, SKILL_ARCANE_PULSE_1, SKILL_ARCANE_PULSE_DURATION);
				}
				APSpeed =0;
			}

			if (job == JOB_SORC && event.skill.id == SKILL_ARCANE_PULSE_2 /*&& lastSkill == SKILL_ARCANE_PULSE*/) {
				disabSkill[SKILL_METEOR_STRIKE] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_METEOR_STRIKE] = false; }, SKILL_ARCANE_PULSE_DURATION / aspd);
disabSkill[SKILL_FIREICE] = true;
				var timer22 = setTimeout(function () { disabSkill[SKILL_FIREICE] = false; }, SKILL_ARCANE_PULSE_DURATION / aspd);
				if (manaBoostActive) {
					fakeEnd_AP2(event, SKILL_ARCANE_PULSE_5, SKILL_ARCANE_PULSE_DURATION);
				}
				if (!manaBoostActive) {
					fakeEnd_AP2(event, SKILL_ARCANE_PULSE_2, SKILL_ARCANE_PULSE_DURATION);
				}
				APSpeed =0;
			}

			if (job == JOB_SORC && event.skill.id == SKILL_ARCANE_PULSE_3 /*&& lastSkill == SKILL_ARCANE_PULSE*/) {
				disabSkill[SKILL_METEOR_STRIKE] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_METEOR_STRIKE] = false; }, SKILL_ARCANE_PULSE_DURATION / aspd);
disabSkill[SKILL_FIREICE] = true;
				var timer22 = setTimeout(function () { disabSkill[SKILL_FIREICE] = false; }, SKILL_ARCANE_PULSE_DURATION / aspd);
				if (manaBoostActive) {
					fakeEnd_AP2(event, SKILL_ARCANE_PULSE_6, SKILL_ARCANE_PULSE_DURATION);
				}
				if (!manaBoostActive) {
					fakeEnd_AP2(event, SKILL_ARCANE_PULSE_3, SKILL_ARCANE_PULSE_DURATION);
				}
				APSpeed =0;
			}

			if (job == JOB_SORC && event.skill.id == SKILL_LIGHTNING_STRIKE) {
				disabSkill[event.skill.id] = true;
				clearTimeout(LSreset);
				LSreset = setTimeout(function () { disabSkill[SKILL_LIGHTNING_STRIKE] = false; },1000);
				fakeEnd_sorc(event, SKILL_LIGHTNING_STRIKE_DURATION);
			}

			if (job == JOB_SORC && event.skill.id == SKILL_METEOR_STRIKE) {
				clearTimeout(firelord);
				disabSkill[event.skill.id] = true;
				firelord = setTimeout(function () { disabSkill[SKILL_METEOR_STRIKE] = false; },500);
				if (manaBoostActive && warpActive == false) {
					fakeEnd_sorc(event, SKILL_METEOR_SHOWER_DURATION);
					disabSkill[SKILL_NOVA] = true;
					var timer = setTimeout(function () { disabSkill[SKILL_NOVA] = false; }, SKILL_METEOR_SHOWER_DURATION / aspd);
					//disabSkill[SKILL_FIREICE] = true;
				//disabSkill[SKILL_FIREZAP] = true;
				//disabSkill[SKILL_ICEZAP] = true;
				//setTimeout(function () { disabSkill[SKILL_FIREICE] = false; }, SKILL_METEOR_SHOWER_DURATION / aspd);
				//setTimeout(function () { disabSkill[SKILL_FIREZAP] = false; }, SKILL_METEOR_SHOWER_DURATION / aspd);
				//setTimeout(function () { disabSkill[SKILL_ICEZAP] = false; }, SKILL_METEOR_SHOWER_DURATION / aspd);
				} else {
					fakeEnd_sorc(event, SKILL_METEOR_STRIKE_DURATION);
					disabSkill[SKILL_NOVA] = true;
					var timer = setTimeout(function () { disabSkill[SKILL_NOVA] = false; }, SKILL_METEOR_STRIKE_DURATION / aspd);
					//disabSkill[SKILL_FIREICE] = true;
				//disabSkill[SKILL_FIREZAP] = true;
				//disabSkill[SKILL_ICEZAP] = true;
				//setTimeout(function () { disabSkill[SKILL_FIREICE] = false; }, SKILL_METEOR_STRIKE_DURATION / aspd);
				//setTimeout(function () { disabSkill[SKILL_FIREZAP] = false; }, SKILL_METEOR_STRIKE_DURATION / aspd);
				//setTimeout(function () { disabSkill[SKILL_ICEZAP] = false; }, SKILL_METEOR_STRIKE_DURATION / aspd);
				}
			}

			if (job == JOB_SORC && event.skill.id == SKILL_NOVA) {
				novaActive = true;
				clearTimeout(novaCheck);
				novaEvent = event;
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_NOVA] = false; }, GLOBAL_LOCK_DELAY);
				//disabSkill[SKILL_FIREICE] = true;
				//disabSkill[SKILL_FIREZAP] = true;
				//disabSkill[SKILL_ICEZAP] = true;
				//setTimeout(function () { disabSkill[SKILL_FIREICE] = false; }, SKILL_NOVA_DURATION / aspd);
				//setTimeout(function () { disabSkill[SKILL_FIREZAP] = false; }, SKILL_NOVA_DURATION / aspd);
				//setTimeout(function () { disabSkill[SKILL_ICEZAP] = false; }, SKILL_NOVA_DURATION / aspd);
				fakeEnd_sorc(event, SKILL_NOVA_DURATION);
				setTimeout(function () { dispatch.toServer('C_START_SKILL', 7, event); },150);
				novaCheck = setTimeout(function () {
					novaActive = false;
				}, SKILL_NOVA_DURATION);
			}

			if (job == JOB_SORC && event.skill.id == SKILL_PAINFUL_TRAP) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_PAINFUL_TRAP] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc(event, SKILL_PAINFUL_TRAP_DURATION);
			}

			if (job == JOB_SORC && event.skill.id == SKILL_LIGHTNING_TRAP) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_LIGHTNING_TRAP] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc(event, SKILL_LIGHTNING_TRAP_DURATION);
			}

			if (job == JOB_SORC && event.skill.id == SKILL_MINDBLAST) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_MINDBLAST] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc(event, SKILL_MINDBLAST_DURATION);
			}

			if (job == JOB_SORC && event.skill.id == SKILL_HAILSTORM) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_HAILSTORM] = false; }, GLOBAL_LOCK_DELAY);
				setTimeout(function () { dispatch.toServer('C_START_SKILL', 7, event); },200);
				fakeEnd_sorc(event, SKILL_HAILSTORM_DURATION);
			}

			if (job == JOB_SORC && event.skill.id == SKILL_FLAMING_BARRAGE) {
				if (cancelTimer && lastSkill != SKILL_LIGHTNING_STRIKE && lastSkill != SKILL_VOID_PULSE) {
					setTimeout(function (event) { if (lastSkill == SKILL_FLAMING_BARRAGE) { dispatch.toServer('C_START_SKILL', 7, event); } }, (50 * aspd), event);
					flamezCheck =1;
				}
				if (cancelTimer && (lastSkill == SKILL_LIGHTNING_STRIKE || lastSkill == SKILL_VOID_PULSE)) {
					setTimeout(function (event) { if (lastSkill == SKILL_FLAMING_BARRAGE) { dispatch.toServer('C_START_SKILL', 7, event); } }, (50 * aspd), event);
					flamezCheck =1;
				}
				if (flamezCheck ==0) {
					atkid[event.skill.id] = atkid_base;
					atkid_base--;
					dispatch.toClient('S_ACTION_STAGE', 9, {
						gameId: cid,
						loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
						w: event.w,
						templateId: model,
						skill: event.skill.id,
						stage: 0,
						speed: 1,
						projectileSpeed: 1,
						id: atkid[event.skill.id],
						effectScale: 1.0,
						moving: false,
						dest: { x: 0, y: 0, Z: 0 },
						target: 0n,
						animSeq: [],
					});
				}
				if (flamezCheck == 1 && lastSkill != SKILL_LIGHTNING_STRIKE && lastSkill != SKILL_VOID_PULSE) {
					setTimeout(function (event) {
						atkid[event.skill.id] = atkid_base;
						atkid_base--;
						dispatch.toClient('S_ACTION_STAGE', 9, {
							gameId: cid,
							loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
							w: event.w,
							templateId: model,
							skill: event.skill.id,
							stage: 0,
							speed: 1,
							projectileSpeed: 1,
							id: atkid[event.skill.id],
							effectScale: 1.0,
							moving: false,
							dest: { x: 0, y: 0, Z: 0 },
							target: 0n,
							animSeq: [],
						});
					}, (50 * aspd), event);
				}
				if (flamezCheck == 1 && (lastSkill == SKILL_LIGHTNING_STRIKE || lastSkill == SKILL_VOID_PULSE)) {
					setTimeout(function (event) {
						atkid[event.skill.id] = atkid_base;
						atkid_base--;
						dispatch.toClient('S_ACTION_STAGE', 9, {
							gameId: cid,
							loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
							w: event.w,
							templateId: model,
							skill: event.skill.id,
							stage: 0,
							speed: 1,
							projectileSpeed: 1,
							id: atkid[event.skill.id],
							effectScale: 1.0,
							moving: false,
							dest: { x: 0, y: 0, Z: 0 },
							target: 0n,
							animSeq: [],
						});
					}, (50 * aspd), event);
				}
			}

			if (job == JOB_SORC && event.skill.id == SKILL_FLAMING_BARRAGE_2) {
				disabSkill[event.skill.id] = false;
				disabSkill[SKILL_FROST_SPHERE] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_FROST_SPHERE] = false; }, SKILL_FLAMING_BARRAGE_DURATION / aspd);
				disabSkill[SKILL_METEOR_STRIKE] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_METEOR_STRIKE] = false; }, SKILL_FLAMING_BARRAGE_DURATION / aspd);
				fakeEnd_sorc(event, SKILL_FLAMING_BARRAGE_DURATION);
			}

			if (job == JOB_SORC && event.skill.id == SKILL_TIME_GYRE) {
				atkid[event.skill.id] = atkid_base;
				atkid_base--;
				dispatch.toClient('S_ACTION_STAGE', 9, {
					gameId: cid,
					loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
					w: event.w,
					templateId: model,
					skill: event.skill.id,
					stage: 0,
					speed: 1,
					projectileSpeed: 1,
					id: atkid[event.skill.id],
					effectScale: 1.0,
					moving: false,
					dest: { x: 0, y: 0, Z: 0 },
					target: 0n,
					animSeq: [],
				});
			}

			if (job == JOB_SORC && event.skill.id == SKILL_TIME_GYRE_2) {
				disabSkill[event.skill.id] = false;
				disabSkill[SKILL_FROST_SPHERE] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_FROST_SPHERE] = false; }, SKILL_TIME_GYRE_DURATION);
				disabSkill[SKILL_METEOR_STRIKE] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_METEOR_STRIKE] = false; }, SKILL_TIME_GYRE_DURATION);
				fakeEnd_sorc(event, SKILL_TIME_GYRE_DURATION);
			}

			if (job == JOB_SORC && event.skill.id == SKILL_NERVE_EXHAUST) {
				atkid[event.skill.id] = atkid_base;
				atkid_base--;
				dispatch.toClient('S_ACTION_STAGE', 9, {
					gameId: cid,
					loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
					w: event.w,
					templateId: model,
					skill: event.skill.id,
					stage: 0,
					speed: 1,
					projectileSpeed: 1,
					id: atkid[event.skill.id],
					effectScale: 1.0,
					moving: false,
					dest: { x: 0, y: 0, Z: 0 },
					target: 0n,
					animSeq: [],
				});
			}

			if (job == JOB_SORC && event.skill.id == SKILL_NERVE_EXHAUST_2) {
				disabSkill[event.skill.id] = false;
				disabSkill[SKILL_FROST_SPHERE] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_FROST_SPHERE] = false; }, SKILL_NERVE_EXHAUST_DURATION);
				disabSkill[SKILL_METEOR_STRIKE] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_METEOR_STRIKE] = false; }, SKILL_NERVE_EXHAUST_DURATION);
				fakeEnd_sorc(event, SKILL_NERVE_EXHAUST_DURATION);
				setTimeout(function (event) {
					if (lastSkill == SKILL_NERVE_EXHAUST_2) {
						dispatch.toClient('S_ACTION_STAGE', 9, {
							gameId: cid,
							loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
							w: event.w,
							templateId: model,
							skill: event.skill.id,
							stage: 1,
							speed: 1,
							projectileSpeed: 1,
							id: atkid[event.skill.id],
							effectScale: 1.0,
							moving: false,
							dest: { x: 0, y: 0, Z: 0 },
							target: 0n,
							animSeq: [],
						});
					}
				}, SKILL_NERVE_EXHAUST_DURATION_STAGE, event);
			}

			if (job == JOB_SORC && event.skill.id == SKILL_BURNING_BREATH) {
				atkid[event.skill.id] = atkid_base;
				atkid_base--;
				dispatch.toClient('S_ACTION_STAGE', 9, {
					gameId: cid,
					loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
					w: event.w,
					templateId: model,
					skill: event.skill.id,
					stage: 0,
					speed: 1,
					projectileSpeed: 1,
					id: atkid[event.skill.id],
					effectScale: 1.0,
					moving: false,
					dest: { x: 0, y: 0, Z: 0 },
					target: 0n,
					animSeq: [],
				});
			}

			if (job == JOB_SORC && event.skill.id == SKILL_BURNING_BREATH_2) {
				disabSkill[event.skill.id] = false;
				disabSkill[SKILL_FROST_SPHERE] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_FROST_SPHERE] = false; }, SKILL_BURNING_BREATH_DURATION);
				disabSkill[SKILL_METEOR_STRIKE] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_METEOR_STRIKE] = false; }, SKILL_BURNING_BREATH_DURATION);
				fakeEnd_sorc(event, SKILL_BURNING_BREATH_DURATION);
				setTimeout(function (event) {
					if (lastSkill == SKILL_BURNING_BREATH_2) {
						dispatch.toClient('S_ACTION_STAGE', 9, {
							gameId: cid,
							loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
							w: event.w,
							templateId: model,
							skill: event.skill.id,
							stage: 1,
							speed: 1,
							projectileSpeed: 1,
							id: atkid[event.skill.id],
							effectScale: 1.0,
							moving: false,
							dest: { x: 0, y: 0, Z: 0 },
							target: 0n,
							animSeq: [],
						});
					}
				}, SKILL_BURNING_BREATH_DURATION_STAGE, event);
			}

			if (job == JOB_SORC && event.skill.id == SKILL_MANA_VOLLEY) {
				atkid[event.skill.id] = atkid_base;
				atkid_base--;
				dispatch.toClient('S_ACTION_STAGE', 9, {
					gameId: cid,
					loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
					w: event.w,
					templateId: model,
					skill: event.skill.id,
					stage: 0,
					speed: 1,
					projectileSpeed: 1,
					id: atkid[event.skill.id],
					effectScale: 1.0,
					moving: false,
					dest: { x: 0, y: 0, Z: 0 },
					target: 0n,
					animSeq: [],
				});
			}

			if (job == JOB_SORC && event.skill.id == SKILL_MANA_VOLLEY_2) {
				disabSkill[event.skill.id] = false;
				disabSkill[SKILL_FROST_SPHERE] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_FROST_SPHERE] = false; }, SKILL_MANA_VOLLEY_DURATION);
				disabSkill[SKILL_METEOR_STRIKE] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_METEOR_STRIKE] = false; }, SKILL_MANA_VOLLEY_DURATION);
				fakeEnd_sorc(event, SKILL_MANA_VOLLEY_DURATION);
				setTimeout(function (event) {
					if (lastSkill == SKILL_MANA_VOLLEY_2) {
						dispatch.toClient('S_ACTION_STAGE', 9, {
							gameId: cid,
							loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
							w: event.w,
							templateId: model,
							skill: event.skill.id,
							stage: 1,
							speed: 1,
							projectileSpeed: 1,
							id: atkid[event.skill.id],
							effectScale: 1.0,
							moving: false,
							dest: { x: 0, y: 0, Z: 0 },
							target: 0n,
							animSeq: [],
						});
					}
				}, SKILL_MANA_VOLLEY_DURATION_STAGE, event);
			}


			if (job == JOB_SORC && event.skill.id == SKILL_FROST_SPHERE) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_FROST_SPHERE] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc(event, SKILL_FROST_SPHERE_DURATION);
			}

			if (job == JOB_SORC && event.skill.id == SKILL_ESCAPE) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_ESCAPE] = false; }, GLOBAL_LOCK_DELAY *2);
				setTimeout(fakeEnd_sorc_dist, 0, event, SKILL_ESCAPE_DURATION, -SKILL_ESCAPE_DISTANCE);
				if (glyphState[25102] ==1) {
					clearTimeout(GlacialTimer);
					APSpeed =1;
					GlacialTimer = setTimeout(function () { APSpeed = 0; },6000);
				}
			}

			if (job == JOB_SORC && (event.skill.id == SKILL_MANA_BOOST || event.skill.id == (SKILL_MANA_BOOST +30))) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function (event) { disabSkill[event.skill.id] = false; }, GLOBAL_LOCK_DELAY, event);
				if (glyphState[25103] == 1 || glyphState[25068] ==1) {
					manaBoostActive = true;
					if(event.skill.id == SKILL_MANA_BOOST){
					setTimeout(function () {
						manaBoostActive = false;
					}, SKILL_MANA_BOOST_DURATION);
					}
					if(event.skill.id == (SKILL_MANA_BOOST +30)){
					setTimeout(function () {
						manaBoostActive = false;
					}, SKILL_MANA_BOOST_DURATION * 1.2);
					}
				}
				if (glyphState[25103] == 0 && glyphState[25068] ==0) {
					manaBoostActive = true;
					if(event.skill.id == SKILL_MANA_BOOST){
					setTimeout(function () {
						manaBoostActive = false;
					}, SKILL_MANA_BOOST_DURATION / 1.2);
					}
					if(event.skill.id == (SKILL_MANA_BOOST +30)){
					setTimeout(function () {
						manaBoostActive = false;
					}, SKILL_MANA_BOOST_DURATION);
					}
				}
				warpActive = false;
				fakeEnd_sorc(event, SKILL_MANA_BOOST_DURATION_2);
				if (MANABOOST_X) {
					var robot19 = require("robotjs");
					robot19.keyTap(X_KEY);
					robot19.keyTap(Y_KEY);
					robot19.keyTap(Z_KEY);
				}
			}

			if (job == JOB_SORC && event.skill.id == SKILL_BACKSTEP) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_BACKSTEP] = false; }, GLOBAL_LOCK_DELAY *2);
				var backStepDelay =0;
				APActive = false;
				APState =0;
				if (novaActive) {
					force_end(novaEvent);
					backStepDelay = SKILL_BACKSTEP_CANCEL_DURATION;
				}
				novaActive = false;
				setTimeout(fakeEnd_sorc_dist, backStepDelay, event, SKILL_BACKSTEP_DURATION, -SKILL_BACKSTEP_DISTANCE);
				disabSkill[SKILL_FIREICE] = false;
				disabSkill[SKILL_FIREZAP] = false;
				disabSkill[SKILL_ICEZAP] = false;
			}

			if (job == JOB_SORC && (event.skill.id == SKILL_TELEPORT_JAUNT)) {
				if (novaActive) force_end(novaEvent);
				if (lastEvent != false) {
					force_end(lastEvent);
				}
				novaActive = false;
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_TELEPORT_JAUNT] = false; }, GLOBAL_LOCK_DELAY);
				APActive = false;
				APState =0;
				xloc = event.dest.x;
				yloc = event.dest.y;
				zloc = event.dest.z;
				wloc = event.w;
				atkid[event.skill.id] = atkid_base;
				atkid_base--;
				dispatch.toClient('S_START_COOLTIME_SKILL', 3, {
					skill: event.skill.id,
					cooldown: 1000,
				});
				dispatch.toClient('S_ACTION_STAGE', 9, {
					gameId: cid,
					loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
					w: event.w,
					templateId: model,
					skill: event.skill.id,
					stage: 0,
					speed: aspd / 1.1,
					projectileSpeed: aspd / 1.1,
					id: atkid[event.skill.id],
					effectScale: 1.0,
					moving: false,
					dest: { x: 0, y: 0, Z: 0 },
					target: 0n,
					animSeq: [],
				});
				setTimeout(function (event) {
					if (lastSkill != SKILL_TELEPORT_JAUNT) {
						disabSkill[SKILL_TELEPORT_JAUNT] = false; return;
					}
					dispatch.toClient('S_ACTION_STAGE', 9, {
						gameId: cid,
						loc: { x: event.dest.x, y: event.dest.y, z: event.dest.z },
						w: event.w,
						templateId: model,
						skill: event.skill.id,
						stage: 1,
						speed: aspd / 1.1,
						projectileSpeed: aspd / 1.1,
						id: atkid[event.skill.id],
						effectScale: 1.0,
						moving: false,
						dest: { x: 0, y: 0, Z: 0 },
						target: 0n,
						animSeq: [],
					});
				}, SKILL_TELEPORT_JAUNT_DURATION / aspd, event);

				setTimeout(function (event) {
					if (lastSkill != SKILL_TELEPORT_JAUNT) {
						disabSkill[SKILL_TELEPORT_JAUNT] = false; return;
					}
					dispatch.toClient('S_ACTION_END', 5, {
						gameId: cid,
						loc: { x: event.dest.x, y: event.dest.y, z: event.dest.z },
						w: event.w,
						templateId: model,
						skill: event.skill.id,
						type: 0,
						id: atkid[event.skill.id],
					});
				}, (SKILL_TELEPORT_JAUNT_DURATION + SKILL_TELEPORT_JAUNT_DURATION_2) / aspd, event);
			}
		}
		if (event.skill.id !=350100) {
			lastLastSkill = lastSkill;
			lastSkill = event.skill.id;
			lastEvent = event;
		}
		if (lastSkill == SKILL_VOID_PULSE && VOID_FROST) {
			  setTimeout(function () {
				failsafe =0;
				repeater(FROSTSPHERE_KEY, SKILL_VOID_PULSE);
			  },0);
			}
		if (lastSkill == SKILL_METEOR_STRIKE && METEOR_ICE) {
			  setTimeout(function () {
				failsafe =0;
				repeater(ICELANCE_KEY, SKILL_METEOR_STRIKE);
			  },0);
			}
		if (lastSkill == SKILL_METEOR_SHOWER && METEOR_ICE) {
			  setTimeout(function () {
				failsafe =0;
				repeater(ICELANCE_KEY, SKILL_METEOR_SHOWER);
			  },0);
			}
		if (lastSkill == SKILL_NOVA && NOVA_ICE) {
			  setTimeout(function () {
				failsafe =0;
				repeater(ICELANCE_KEY, SKILL_NOVA);
			  },0);
			}
		if (lastSkill == SKILL_LIGHTNING_STRIKE && LIGHTNING_LIGHTNING) {
			  setTimeout(function () {
				failsafe =0;
				repeater(LIGHTNING_KEY, SKILL_LIGHTNING_STRIKE);
			  },0);
			}
		if (lastSkill == SKILL_NOVA && NOVA_LIGHTNING) {
			  setTimeout(function () {
				failsafe =0;
				repeater(LIGHTNING_KEY, SKILL_NOVA);
			  },0);
			}
		if (lastSkill == SKILL_ARCANE_PULSE_3 && AP_VP) {
			  setTimeout(function () {
				failsafe =0;
				repeater(VP_KEY, SKILL_ARCANE_PULSE_3);
			  },0);
			}
		if (lastSkill == SKILL_METEOR_STRIKE && METEOR_NOVA) {
			  setTimeout(function () {
				failsafe =0;
				repeater(NOVA_KEY, SKILL_METEOR_STRIKE);
			  },0);
			}
		if (lastSkill == SKILL_METEOR_SHOWER && METEOR_NOVA) {
			  setTimeout(function () {
				failsafe =0;
				repeater(NOVA_KEY, SKILL_METEOR_SHOWER);
			  },0);
			}
		if (lastSkill == SKILL_TRINITY && AUTOFIREBALL_AFTER_FUSION) {
			  setTimeout(function () {
				failsafe =0;
				repeater(FIREBALL_KEY, SKILL_TRINITY);
			  }, 100 / aspd);
			}
		if (flamezCheck ==1) {
			flamezCheck =0;
			return false;
		}
	}


	dispatch.hook('C_START_SKILL', 7, (event) => {
		if (!enabled) return;
		//if (event.skill.id == 350100 && icelanceblock) return false;
		if (event.skill.id ==350100) {
			if (ICELANCE_LIGHTNING) {
			  setTimeout(function () {
				failsafe =0;
				repeater(LIGHTNING_KEY, lastSkill);
			  },0);
			}
			return;
		}
		xloc = event.loc.x;
		yloc = event.loc.y;
		zloc = event.loc.z;
		if (job == JOB_SORC && event.skill.id == SKILL_BLACKHOLE && !elements) {
			return false;
		}
		if (FBActive && FLAME_BARRAGE_SYNC) {
			clearTimeout(drak);
			drak = setTimeout(function (event) { startSkillzx(event); }, 20, event);
			return false;
		}
		if(disabSkill[SKILL_FIREICE] && event.skill.id == SKILL_FIREICE && (lastSkill == SKILL_ARCANE_PULSE_1 || lastSkill == SKILL_ARCANE_PULSE_2 || lastSkill == SKILL_ARCANE_PULSE_3)){
			return false;
		}
		if(event.skill.id == (SKILL_MANA_BOOST +30) && manaf){
			return false;
		}
		if (disabSkill[event.skill.id] == 'undefined') disabSkill[event.skill.id] = false;
		lastSkillDelay =999999;
		if (!disabSkill[event.skill.id]) {
			if (APCHECK.indexOf(event.skill.id) !== -1 && manaBoostActive && bap && SPOOF_GRANT) {
				return;
			}
			var xzzy = event.skill.type === 1 && event.skill.id <= 999999 && BLACKLIST.indexOf(event.skill.id) === -1;
			if (xzzy && event.skill.id != 111135 && event.skill.id != SKILL_FLAMING_BARRAGE && event.skill.id != SKILL_FLAMING_BARRAGE_2 && event.skill.id != SKILL_RETALIATE && event.skill.id != SKILL_TIME_GYRE && event.skill.id != SKILL_MANA_VOLLEY && event.skill.id != SKILL_BURNING_BREATH && event.skill.id != SKILL_NERVE_EXHAUST) {
				clearTimeout(v1);
				clearTimeout(v2);
				clearTimeout(v3);
				clearTimeout(v4);
				clearTimeout(v5);
				clearTimeout(v6);
				clearTimeout(v7);
				clearTimeout(v8);
				v1 = setTimeout(function () { dispatch.toServer('C_START_SKILL', 7, event); },25);
				v2 = setTimeout(function () { dispatch.toServer('C_START_SKILL', 7, event); },50);
				v3 = setTimeout(function () { dispatch.toServer('C_START_SKILL', 7, event); },75);
				v4 = setTimeout(function () { dispatch.toServer('C_START_SKILL', 7, event); },100);
				if (event.skill != SKILL_TELEPORT_JAUNT && event.skill.id != SKILL_FLAMING_BARRAGE_2) {
					v5 = setTimeout(function () { dispatch.toServer('C_START_SKILL', 7, event); },125);
					v6 = setTimeout(function () { dispatch.toServer('C_START_SKILL', 7, event); },150);
					v7 = setTimeout(function () { dispatch.toServer('C_START_SKILL', 7, event); },200);
					v8 = setTimeout(function () { dispatch.toServer('C_START_SKILL', 7, event); },250);
				}
			}

			if (job == JOB_SORC && event.skill.id == BLAST_LOL) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[BLAST_LOL] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc(event, BLAST_LOL_DURATION);
			}

			if (job == JOB_SORC && event.skill.id == SKILL_FIREICE) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_FIREICE] = false; }, GLOBAL_LOCK_DELAY *5);
				fakeEnd_sorc(event, SKILL_FIREICE_D);
			}

			if (job == JOB_SORC && event.skill.id == (SKILL_FIREICE +30)) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[(SKILL_FIREICE +30)] = false; }, GLOBAL_LOCK_DELAY *5);
				fakeEnd_sorc(event, SKILL_FIREICE_D);
			}

			if (job == JOB_SORC && event.skill.id == SKILL_FIREZAP) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_FIREZAP] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc(event, SKILL_FIREZAP_D);
			}

			if (job == JOB_SORC && event.skill.id == SKILL_ICEZAP) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_ICEZAP] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc(event, SKILL_ICEZAP_D);
			}

			if (job == JOB_SORC && event.skill.id == SKILL_TRINITY) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_TRINITY] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc(event, SKILL_TRINITY_D);
			}

			if (job == JOB_SORC && event.skill.id == SKILL_BLACKHOLE && elements) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_BLACKHOLE] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc_dist(event, (SKILL_BLACKHOLE_D1 + SKILL_BLACKHOLE_D2 + SKILL_BLACKHOLE_D3),200);
				setTimeout(function (event) {
					if (lastSkill != SKILL_BLACKHOLE) { return; }
					dispatch.toClient('S_ACTION_STAGE', 9, {
						gameId: cid,
						loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
						w: event.w,
						templateId: model,
						skill: event.skill.id,
						stage: 1,
						speed: aspd / 1.1,
						projectileSpeed: aspd / 1.1,
						id: atkid[event.skill.id],
						effectScale: 1.0,
						moving: false,
						dest: { x: 0, y: 0, Z: 0 },
						target: 0n,
						animSeq: [],
					});

				}, SKILL_BLACKHOLE_D1 / aspd, event);
				setTimeout(function (event) {
					if (lastSkill != SKILL_BLACKHOLE) { return; }
					dispatch.toClient('S_ACTION_STAGE', 9, {
						gameId: cid,
						loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
						w: event.w,
						templateId: model,
						skill: event.skill.id,
						stage: 2,
						speed: aspd / 1.1,
						projectileSpeed: aspd / 1.1,
						id: atkid[event.skill.id],
						effectScale: 1.0,
						moving: false,
						dest: { x: 0, y: 0, Z: 0 },
						target: 0n,
						animSeq: [],
					});

				}, (SKILL_BLACKHOLE_D1 + SKILL_BLACKHOLE_D2) / aspd, event);
			}

			if (job == JOB_SORC && event.skill.id == SKILL_VOID_PULSE) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_VOID_PULSE] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc(event, SKILL_VOID_PULSE_DURATION);
			}

			if (job == JOB_SORC && event.skill.id == SKILL_RETALIATE) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_RETALIATE] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc(event, SKILL_RETALIATE_DURATION);
			}

			if (job == JOB_SORC && event.skill.id == SKILL_PILLAR) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_PILLAR] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc(event, SKILL_PILLAR_DURATION);
			}

			if (job == JOB_SORC && event.skill.id == SKILL_MANA_BARRIER) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_MANA_BARRIER] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc(event, SKILL_MANA_BARRIER_DURATION);
			}

			if (job == JOB_SORC && (event.skill.id == SKILL_WARP_BARRIER || event.skill.id == SKILL_WARP_BARRIER_2)) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function (event) { disabSkill[event.skill.id] = false; }, GLOBAL_LOCK_DELAY, event);
				setTimeout(function () { dispatch.toServer('C_START_SKILL', 7, event); },150);
				fakeEnd_sorc(event, SKILL_WARP_BARRIER_DURATION);
				warpActive = true;
				if (glyphState[25095] ==0) {
					setTimeout(function () { warpActive = false; },1000);
				}
				if (glyphState[25095] ==1) {
					setTimeout(function () { warpActive = false; },2000);
				}
			}

			if (job == JOB_SORC && event.skill.id == SKILL_ARCANE_PULSE_1 /*&& lastSkill == SKILL_ARCANE_PULSE*/) {
				disabSkill[SKILL_METEOR_STRIKE] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_METEOR_STRIKE] = false; }, SKILL_ARCANE_PULSE_DURATION / aspd);
disabSkill[SKILL_FIREICE] = true;
				var timer22 = setTimeout(function () { disabSkill[SKILL_FIREICE] = false; }, SKILL_ARCANE_PULSE_DURATION / aspd);
				if (manaBoostActive) {
					fakeEnd_AP2(event, SKILL_ARCANE_PULSE_4, SKILL_ARCANE_PULSE_DURATION);
				}
				if (!manaBoostActive) {
					fakeEnd_AP2(event, SKILL_ARCANE_PULSE_1, SKILL_ARCANE_PULSE_DURATION);
				}
				APSpeed =0;
			}

			if (job == JOB_SORC && event.skill.id == SKILL_ARCANE_PULSE_2 /*&& lastSkill == SKILL_ARCANE_PULSE*/) {
				disabSkill[SKILL_METEOR_STRIKE] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_METEOR_STRIKE] = false; }, SKILL_ARCANE_PULSE_DURATION / aspd);
disabSkill[SKILL_FIREICE] = true;
				var timer22 = setTimeout(function () { disabSkill[SKILL_FIREICE] = false; }, SKILL_ARCANE_PULSE_DURATION / aspd);
				if (manaBoostActive) {
					fakeEnd_AP2(event, SKILL_ARCANE_PULSE_5, SKILL_ARCANE_PULSE_DURATION);
				}
				if (!manaBoostActive) {
					fakeEnd_AP2(event, SKILL_ARCANE_PULSE_2, SKILL_ARCANE_PULSE_DURATION);
				}
				APSpeed =0;
			}

			if (job == JOB_SORC && event.skill.id == SKILL_ARCANE_PULSE_3 /*&& lastSkill == SKILL_ARCANE_PULSE*/) {
				disabSkill[SKILL_METEOR_STRIKE] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_METEOR_STRIKE] = false; }, SKILL_ARCANE_PULSE_DURATION / aspd);
disabSkill[SKILL_FIREICE] = true;
				var timer22 = setTimeout(function () { disabSkill[SKILL_FIREICE] = false; }, SKILL_ARCANE_PULSE_DURATION / aspd);
				if (manaBoostActive) {
					fakeEnd_AP2(event, SKILL_ARCANE_PULSE_6, SKILL_ARCANE_PULSE_DURATION);
				}
				if (!manaBoostActive) {
					fakeEnd_AP2(event, SKILL_ARCANE_PULSE_3, SKILL_ARCANE_PULSE_DURATION);
				}
				APSpeed =0;
			}

			if (job == JOB_SORC && event.skill.id == SKILL_LIGHTNING_STRIKE) {
				disabSkill[event.skill.id] = true;
				clearTimeout(LSreset);
				LSreset = setTimeout(function () { disabSkill[SKILL_LIGHTNING_STRIKE] = false; },1000);
				fakeEnd_sorc(event, SKILL_LIGHTNING_STRIKE_DURATION);
			}

			if (job == JOB_SORC && event.skill.id == SKILL_METEOR_STRIKE) {
				clearTimeout(firelord);
				disabSkill[event.skill.id] = true;
				firelord = setTimeout(function () { disabSkill[SKILL_METEOR_STRIKE] = false; },500);
				if (manaBoostActive && warpActive == false) {
					fakeEnd_sorc(event, SKILL_METEOR_SHOWER_DURATION);
					disabSkill[SKILL_NOVA] = true;
					var timer = setTimeout(function () { disabSkill[SKILL_NOVA] = false; }, SKILL_METEOR_SHOWER_DURATION / aspd);
					//disabSkill[SKILL_FIREICE] = true;
				//disabSkill[SKILL_FIREZAP] = true;
				//disabSkill[SKILL_ICEZAP] = true;
				//setTimeout(function () { disabSkill[SKILL_FIREICE] = false; }, SKILL_METEOR_SHOWER_DURATION / aspd);
				//setTimeout(function () { disabSkill[SKILL_FIREZAP] = false; }, SKILL_METEOR_SHOWER_DURATION / aspd);
				//setTimeout(function () { disabSkill[SKILL_ICEZAP] = false; }, SKILL_METEOR_SHOWER_DURATION / aspd);
				} else {
					fakeEnd_sorc(event, SKILL_METEOR_STRIKE_DURATION);
					disabSkill[SKILL_NOVA] = true;
					var timer = setTimeout(function () { disabSkill[SKILL_NOVA] = false; }, SKILL_METEOR_STRIKE_DURATION / aspd);
					//disabSkill[SKILL_FIREICE] = true;
				//disabSkill[SKILL_FIREZAP] = true;
				//disabSkill[SKILL_ICEZAP] = true;
				//setTimeout(function () { disabSkill[SKILL_FIREICE] = false; }, SKILL_METEOR_STRIKE_DURATION / aspd);
				//setTimeout(function () { disabSkill[SKILL_FIREZAP] = false; }, SKILL_METEOR_STRIKE_DURATION / aspd);
				//setTimeout(function () { disabSkill[SKILL_ICEZAP] = false; }, SKILL_METEOR_STRIKE_DURATION / aspd);
				}
			}

			if (job == JOB_SORC && event.skill.id == SKILL_NOVA) {
				novaActive = true;
				clearTimeout(novaCheck);
				novaEvent = event;
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_NOVA] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc(event, SKILL_NOVA_DURATION);
				//disabSkill[SKILL_FIREICE] = true;
				//disabSkill[SKILL_FIREZAP] = true;
				//disabSkill[SKILL_ICEZAP] = true;
				//setTimeout(function () { disabSkill[SKILL_FIREICE] = false; }, SKILL_NOVA_DURATION / aspd);
				//setTimeout(function () { disabSkill[SKILL_FIREZAP] = false; }, SKILL_NOVA_DURATION / aspd);
				//setTimeout(function () { disabSkill[SKILL_ICEZAP] = false; }, SKILL_NOVA_DURATION / aspd);
				setTimeout(function () { dispatch.toServer('C_START_SKILL', 7, event); },150);
				novaCheck = setTimeout(function () {
					novaActive = false;
				}, SKILL_NOVA_DURATION);
			}

			if (job == JOB_SORC && event.skill.id == SKILL_PAINFUL_TRAP) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_PAINFUL_TRAP] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc(event, SKILL_PAINFUL_TRAP_DURATION);
			}

			if (job == JOB_SORC && event.skill.id == SKILL_LIGHTNING_TRAP) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_LIGHTNING_TRAP] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc(event, SKILL_LIGHTNING_TRAP_DURATION);
			}

			if (job == JOB_SORC && event.skill.id == SKILL_MINDBLAST) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_MINDBLAST] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc(event, SKILL_MINDBLAST_DURATION);
			}

			if (job == JOB_SORC && event.skill.id == SKILL_HAILSTORM) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_HAILSTORM] = false; }, GLOBAL_LOCK_DELAY);
				setTimeout(function () { dispatch.toServer('C_START_SKILL', 7, event); },200);
				fakeEnd_sorc(event, SKILL_HAILSTORM_DURATION);
			}

			if (job == JOB_SORC && event.skill.id == SKILL_FLAMING_BARRAGE) {
				if (cancelTimer && lastSkill != SKILL_LIGHTNING_STRIKE && lastSkill != SKILL_VOID_PULSE) {
					setTimeout(function (event) { if (lastSkill == SKILL_FLAMING_BARRAGE) { dispatch.toServer('C_START_SKILL', 7, event); } }, (50 * aspd), event);
					flamezCheck =1;
				}
				if (cancelTimer && (lastSkill == SKILL_LIGHTNING_STRIKE || lastSkill == SKILL_VOID_PULSE)) {
					setTimeout(function (event) { if (lastSkill == SKILL_FLAMING_BARRAGE) { dispatch.toServer('C_START_SKILL', 7, event); } }, (50 * aspd), event);
					flamezCheck =1;
				}
				if (flamezCheck ==0) {
					atkid[event.skill.id] = atkid_base;
					atkid_base--;
					dispatch.toClient('S_ACTION_STAGE', 9, {
						gameId: cid,
						loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
						w: event.w,
						templateId: model,
						skill: event.skill.id,
						stage: 0,
						speed: 1,
						projectileSpeed: 1,
						id: atkid[event.skill.id],
						effectScale: 1.0,
						moving: false,
						dest: { x: 0, y: 0, Z: 0 },
						target: 0n,
						animSeq: [],
					});
				}
				if (flamezCheck == 1 && lastSkill != SKILL_LIGHTNING_STRIKE && lastSkill != SKILL_VOID_PULSE) {
					setTimeout(function (event) {
						atkid[event.skill.id] = atkid_base;
						atkid_base--;
						dispatch.toClient('S_ACTION_STAGE', 9, {
							gameId: cid,
							loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
							w: event.w,
							templateId: model,
							skill: event.skill.id,
							stage: 0,
							speed: 1,
							projectileSpeed: 1,
							id: atkid[event.skill.id],
							effectScale: 1.0,
							moving: false,
							dest: { x: 0, y: 0, Z: 0 },
							target: 0n,
							animSeq: [],
						});
					}, (50 * aspd), event);
				}
				if (flamezCheck == 1 && (lastSkill == SKILL_LIGHTNING_STRIKE || lastSkill == SKILL_VOID_PULSE)) {
					setTimeout(function (event) {
						atkid[event.skill.id] = atkid_base;
						atkid_base--;
						dispatch.toClient('S_ACTION_STAGE', 9, {
							gameId: cid,
							loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
							w: event.w,
							templateId: model,
							skill: event.skill.id,
							stage: 0,
							speed: 1,
							projectileSpeed: 1,
							id: atkid[event.skill.id],
							effectScale: 1.0,
							moving: false,
							dest: { x: 0, y: 0, Z: 0 },
							target: 0n,
							animSeq: [],
						});
					}, (50 * aspd), event);
				}
			}

			if (job == JOB_SORC && event.skill.id == SKILL_FLAMING_BARRAGE_2) {
				disabSkill[event.skill.id] = false;
				disabSkill[SKILL_FROST_SPHERE] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_FROST_SPHERE] = false; }, SKILL_FLAMING_BARRAGE_DURATION / aspd);
				disabSkill[SKILL_METEOR_STRIKE] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_METEOR_STRIKE] = false; }, SKILL_FLAMING_BARRAGE_DURATION / aspd);
				fakeEnd_sorc(event, SKILL_FLAMING_BARRAGE_DURATION);
			}

			if (job == JOB_SORC && event.skill.id == SKILL_TIME_GYRE) {
				atkid[event.skill.id] = atkid_base;
				atkid_base--;
				dispatch.toClient('S_ACTION_STAGE', 9, {
					gameId: cid,
					loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
					w: event.w,
					templateId: model,
					skill: event.skill.id,
					stage: 0,
					speed: 1,
					projectileSpeed: 1,
					id: atkid[event.skill.id],
					effectScale: 1.0,
					moving: false,
					dest: { x: 0, y: 0, Z: 0 },
					target: 0n,
					animSeq: [],
				});
			}

			if (job == JOB_SORC && event.skill.id == SKILL_TIME_GYRE_2) {
				disabSkill[event.skill.id] = false;
				disabSkill[SKILL_FROST_SPHERE] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_FROST_SPHERE] = false; }, SKILL_TIME_GYRE_DURATION);
				disabSkill[SKILL_METEOR_STRIKE] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_METEOR_STRIKE] = false; }, SKILL_TIME_GYRE_DURATION);
				fakeEnd_sorc(event, SKILL_TIME_GYRE_DURATION);
			}

			if (job == JOB_SORC && event.skill.id == SKILL_NERVE_EXHAUST) {
				atkid[event.skill.id] = atkid_base;
				atkid_base--;
				dispatch.toClient('S_ACTION_STAGE', 9, {
					gameId: cid,
					loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
					w: event.w,
					templateId: model,
					skill: event.skill.id,
					stage: 0,
					speed: 1,
					projectileSpeed: 1,
					id: atkid[event.skill.id],
					effectScale: 1.0,
					moving: false,
					dest: { x: 0, y: 0, Z: 0 },
					target: 0n,
					animSeq: [],
				});
			}

			if (job == JOB_SORC && event.skill.id == SKILL_NERVE_EXHAUST_2) {
				disabSkill[event.skill.id] = false;
				disabSkill[SKILL_FROST_SPHERE] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_FROST_SPHERE] = false; }, SKILL_NERVE_EXHAUST_DURATION);
				disabSkill[SKILL_METEOR_STRIKE] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_METEOR_STRIKE] = false; }, SKILL_NERVE_EXHAUST_DURATION);
				fakeEnd_sorc(event, SKILL_NERVE_EXHAUST_DURATION);
				setTimeout(function (event) {
					if (lastSkill == SKILL_NERVE_EXHAUST_2) {
						dispatch.toClient('S_ACTION_STAGE', 9, {
							gameId: cid,
							loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
							w: event.w,
							templateId: model,
							skill: event.skill.id,
							stage: 1,
							speed: 1,
							projectileSpeed: 1,
							id: atkid[event.skill.id],
							effectScale: 1.0,
							moving: false,
							dest: { x: 0, y: 0, Z: 0 },
							target: 0n,
							animSeq: [],
						});
					}
				}, SKILL_NERVE_EXHAUST_DURATION_STAGE, event);
			}

			if (job == JOB_SORC && event.skill.id == SKILL_BURNING_BREATH) {
				atkid[event.skill.id] = atkid_base;
				atkid_base--;
				dispatch.toClient('S_ACTION_STAGE', 9, {
					gameId: cid,
					loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
					w: event.w,
					templateId: model,
					skill: event.skill.id,
					stage: 0,
					speed: 1,
					projectileSpeed: 1,
					id: atkid[event.skill.id],
					effectScale: 1.0,
					moving: false,
					dest: { x: 0, y: 0, Z: 0 },
					target: 0n,
					animSeq: [],
				});
			}

			if (job == JOB_SORC && event.skill.id == SKILL_BURNING_BREATH_2) {
				disabSkill[event.skill.id] = false;
				disabSkill[SKILL_FROST_SPHERE] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_FROST_SPHERE] = false; }, SKILL_BURNING_BREATH_DURATION);
				disabSkill[SKILL_METEOR_STRIKE] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_METEOR_STRIKE] = false; }, SKILL_BURNING_BREATH_DURATION);
				fakeEnd_sorc(event, SKILL_BURNING_BREATH_DURATION);
				setTimeout(function (event) {
					if (lastSkill == SKILL_BURNING_BREATH_2) {
						dispatch.toClient('S_ACTION_STAGE', 9, {
							gameId: cid,
							loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
							w: event.w,
							templateId: model,
							skill: event.skill.id,
							stage: 1,
							speed: 1,
							projectileSpeed: 1,
							id: atkid[event.skill.id],
							effectScale: 1.0,
							moving: false,
							dest: { x: 0, y: 0, Z: 0 },
							target: 0n,
							animSeq: [],
						});
					}
				}, SKILL_BURNING_BREATH_DURATION_STAGE, event);
			}

			if (job == JOB_SORC && event.skill.id == SKILL_MANA_VOLLEY) {
				atkid[event.skill.id] = atkid_base;
				atkid_base--;
				dispatch.toClient('S_ACTION_STAGE', 9, {
					gameId: cid,
					loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
					w: event.w,
					templateId: model,
					skill: event.skill.id,
					stage: 0,
					speed: 1,
					projectileSpeed: 1,
					id: atkid[event.skill.id],
					effectScale: 1.0,
					moving: false,
					dest: { x: 0, y: 0, Z: 0 },
					target: 0n,
					animSeq: [],
				});
			}

			if (job == JOB_SORC && event.skill.id == SKILL_MANA_VOLLEY_2) {
				disabSkill[event.skill.id] = false;
				disabSkill[SKILL_FROST_SPHERE] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_FROST_SPHERE] = false; }, SKILL_MANA_VOLLEY_DURATION);
				disabSkill[SKILL_METEOR_STRIKE] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_METEOR_STRIKE] = false; }, SKILL_MANA_VOLLEY_DURATION);
				fakeEnd_sorc(event, SKILL_MANA_VOLLEY_DURATION);
				setTimeout(function (event) {
					if (lastSkill == SKILL_MANA_VOLLEY_2) {
						dispatch.toClient('S_ACTION_STAGE', 9, {
							gameId: cid,
							loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
							w: event.w,
							templateId: model,
							skill: event.skill.id,
							stage: 1,
							speed: 1,
							projectileSpeed: 1,
							id: atkid[event.skill.id],
							effectScale: 1.0,
							moving: false,
							dest: { x: 0, y: 0, Z: 0 },
							target: 0n,
							animSeq: [],
						});
					}
				}, SKILL_MANA_VOLLEY_DURATION_STAGE, event);
			}

			if (job == JOB_SORC && event.skill.id == SKILL_FROST_SPHERE) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_FROST_SPHERE] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc(event, SKILL_FROST_SPHERE_DURATION);
			}

			if (job == JOB_SORC && event.skill.id == SKILL_ESCAPE) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_ESCAPE] = false; }, GLOBAL_LOCK_DELAY *2);
				setTimeout(fakeEnd_sorc_dist, 0, event, SKILL_ESCAPE_DURATION, -SKILL_ESCAPE_DISTANCE);
				if (glyphState[25102] ==1) {
					clearTimeout(GlacialTimer);
					APSpeed =1;
					GlacialTimer = setTimeout(function () { APSpeed = 0; },6000);
				}
			}

			if (job == JOB_SORC && (event.skill.id == SKILL_MANA_BOOST || event.skill.id == (SKILL_MANA_BOOST +30))) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function (event) { disabSkill[event.skill.id] = false; }, GLOBAL_LOCK_DELAY, event);
				if (glyphState[25103] == 1 || glyphState[25068] ==1) {
					manaBoostActive = true;
					if(event.skill.id == SKILL_MANA_BOOST){
					setTimeout(function () {
						manaBoostActive = false;
					}, SKILL_MANA_BOOST_DURATION);
					}
					if(event.skill.id == (SKILL_MANA_BOOST +30)){
					setTimeout(function () {
						manaBoostActive = false;
					}, SKILL_MANA_BOOST_DURATION * 1.2);
					}
				}
				if (glyphState[25103] == 0 && glyphState[25068] ==0) {
					manaBoostActive = true;
					if(event.skill.id == SKILL_MANA_BOOST){
					setTimeout(function () {
						manaBoostActive = false;
					}, SKILL_MANA_BOOST_DURATION / 1.2);
					}
					if(event.skill.id == (SKILL_MANA_BOOST +30)){
					setTimeout(function () {
						manaBoostActive = false;
					}, SKILL_MANA_BOOST_DURATION);
					}
				}
				warpActive = false;
				fakeEnd_sorc(event, SKILL_MANA_BOOST_DURATION_2);
				if (MANABOOST_X) {
					var robot19 = require("robotjs");
					robot19.keyTap(X_KEY);
					robot19.keyTap(Y_KEY);
					robot19.keyTap(Z_KEY);
				}
			}

			if (job == JOB_SORC && event.skill.id == SKILL_BACKSTEP) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_BACKSTEP] = false; }, GLOBAL_LOCK_DELAY *2);
				disabSkill[555] = true;
				setTimeout(function () { disabSkill[555] = false; }, (SKILL_BACKSTEP_DURATION + SKILL_ARCANE_PULSE_DELAY_1 + SKILL_ARCANE_PULSE_DELAY_2 +800) / aspd);
				var backStepDelay =0;
				APActive = false;
				APState =0;
				if (novaActive) {
					force_end(novaEvent);
					backStepDelay = SKILL_BACKSTEP_CANCEL_DURATION;
				}
				novaActive = false;
				setTimeout(fakeEnd_sorc_dist, backStepDelay, event, SKILL_BACKSTEP_DURATION, -SKILL_BACKSTEP_DISTANCE);
				disabSkill[SKILL_FIREICE] = false;
				disabSkill[SKILL_FIREZAP] = false;
				disabSkill[SKILL_ICEZAP] = false;
			}

			if (job == JOB_SORC && (event.skill.id == SKILL_TELEPORT_JAUNT)) {
				if (novaActive) force_end(novaEvent);
				if (lastEvent != false) {
					force_end(lastEvent);
				}
				novaActive = false;
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_TELEPORT_JAUNT] = false; }, GLOBAL_LOCK_DELAY);
				APActive = false;
				APState =0;
				xloc = event.dest.x;
				yloc = event.dest.y;
				zloc = event.dest.z;
				wloc = event.w;
				atkid[event.skill.id] = atkid_base;
				atkid_base--;
				dispatch.toClient('S_START_COOLTIME_SKILL', 3, {
					skill: event.skill.id,
					cooldown: 1000,
				});
				dispatch.toClient('S_ACTION_STAGE', 9, {
					gameId: cid,
					loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
					w: event.w,
					templateId: model,
					skill: event.skill.id,
					stage: 0,
					speed: aspd / 1.1,
					projectileSpeed: aspd / 1.1,
					id: atkid[event.skill.id],
					effectScale: 1.0,
					moving: false,
					dest: { x: 0, y: 0, Z: 0 },
					target: 0n,
					animSeq: [],
				});
				setTimeout(function (event) {
					if (lastSkill != SKILL_TELEPORT_JAUNT) {
						disabSkill[SKILL_TELEPORT_JAUNT] = false; return;
					}
					dispatch.toClient('S_ACTION_STAGE', 9, {
						gameId: cid,
						loc: { x: event.dest.x, y: event.dest.y, z: event.dest.z },
						w: event.w,
						templateId: model,
						skill: event.skill.id,
						stage: 1,
						speed: aspd / 1.1,
						projectileSpeed: aspd / 1.1,
						id: atkid[event.skill.id],
						effectScale: 1.0,
						moving: false,
						dest: { x: 0, y: 0, Z: 0 },
						target: 0n,
						animSeq: [],
					});
				}, SKILL_TELEPORT_JAUNT_DURATION / aspd, event);

				setTimeout(function (event) {
					if (lastSkill != SKILL_TELEPORT_JAUNT) {
						disabSkill[SKILL_TELEPORT_JAUNT] = false; return;
					}
					dispatch.toClient('S_ACTION_END', 5, {
						gameId: cid,
						loc: { x: event.dest.x, y: event.dest.y, z: event.dest.z },
						w: event.w,
						templateId: model,
						skill: event.skill.id,
						type: 0,
						id: atkid[event.skill.id],
					});
				}, (SKILL_TELEPORT_JAUNT_DURATION + SKILL_TELEPORT_JAUNT_DURATION_2) / aspd, event);
			}
		}
		if (event.skill.id !=350100) {
			lastLastSkill = lastSkill;
			lastSkill = event.skill.id;
			lastEvent = event;
		}
		if (lastSkill == SKILL_VOID_PULSE && VOID_FROST) {
			  setTimeout(function () {
				failsafe =0;
				repeater(FROSTSPHERE_KEY, SKILL_VOID_PULSE);
			  },0);
			}
		if (lastSkill == SKILL_METEOR_STRIKE && METEOR_ICE) {
			  setTimeout(function () {
				failsafe =0;
				repeater(ICELANCE_KEY, SKILL_METEOR_STRIKE);
			  },0);
			}
		if (lastSkill == SKILL_METEOR_SHOWER && METEOR_ICE) {
			  setTimeout(function () {
				failsafe =0;
				repeater(ICELANCE_KEY, SKILL_METEOR_SHOWER);
			  },0);
			}
		if (lastSkill == SKILL_NOVA && NOVA_ICE) {
			  setTimeout(function () {
				failsafe =0;
				repeater(ICELANCE_KEY, SKILL_NOVA);
			  },0);
			}
		if (lastSkill == SKILL_LIGHTNING_STRIKE && LIGHTNING_LIGHTNING) {
			  setTimeout(function () {
				failsafe =0;
				repeater(LIGHTNING_KEY, SKILL_LIGHTNING_STRIKE);
			  },0);
			}
		if (lastSkill == SKILL_NOVA && NOVA_LIGHTNING) {
			  setTimeout(function () {
				failsafe =0;
				repeater(LIGHTNING_KEY, SKILL_NOVA);
			  },0);
			}
		if (lastSkill == SKILL_ARCANE_PULSE_3 && AP_VP) {
			  setTimeout(function () {
				failsafe =0;
				repeater(VP_KEY, SKILL_ARCANE_PULSE_3);
			  },0);
			}
		if (lastSkill == SKILL_METEOR_STRIKE && METEOR_NOVA) {
			  setTimeout(function () {
				failsafe =0;
				repeater(NOVA_KEY, SKILL_METEOR_STRIKE);
			  },0);
			}
		if (lastSkill == SKILL_METEOR_SHOWER && METEOR_NOVA) {
			  setTimeout(function () {
				failsafe =0;
				repeater(NOVA_KEY, SKILL_METEOR_SHOWER);
			  },0);
			}
		if (lastSkill == SKILL_TRINITY && AUTOFIREBALL_AFTER_FUSION) {
			  setTimeout(function () {
				failsafe =0;
				repeater(FIREBALL_KEY, SKILL_TRINITY);
			  }, 100 / aspd);
			}
		if (flamezCheck ==1) {
			flamezCheck =0;
			return false;
		}
	});
	
	function repeater(key, trigger) {
    if (lastSkill == trigger && failsafe <20) { 
      failsafe++;
      var robot17 = require("robotjs");
      robot17.keyTap(key);
      setTimeout(function (key, trigger) { repeater(key, trigger); }, 50, key, trigger);
    }
  }

	dispatch.hook('S_ACTION_STAGE', 9, (event) => {
	  //console.log("test: " + event.skill == 67119608);
		if (!enabled) return;
		if(event.gameId === cid) {
			chargeSkillFix2 = event.skill.id;
			var d = new Date();
			lastSkillTime[1] = d.getTime();
			lastSkillTime[3] = event.skill.id;
			var xzzy = event.skill.type ===1;

			if (!xzzy) {
				lastSkill =1;
				APActive = false;
			}

			if (event.skill.id == SKILL_ARCANE_PULSE_4 || event.skill.id == SKILL_ARCANE_PULSE_5 || event.skill.id == SKILL_ARCANE_PULSE_6) {
				reverselock = true;
				setTimeout(function () { reverselock = false; },1000);
			}

			if (job == JOB_SORC && event.skill.id == SKILL_FIREICE) {
				return false;
			}

			if (job == JOB_SORC && event.skill.id == (SKILL_FIREICE +30)) {
				return false;
			}

			if (job == JOB_SORC && event.skill.id == SKILL_FIREZAP) {
				return false;
			}

			if (job == JOB_SORC && event.skill.id == SKILL_ICEZAP) {
				return false;
			}

			if (job == JOB_SORC && event.skill.id == SKILL_TRINITY) {
				return false;
			}

			if (job == JOB_SORC && event.skill.id == SKILL_BLACKHOLE) {
				return false;
			}

			if (job == JOB_SORC && (event.skill.id == SKILL_VOID_PULSE)) {
				return false;
			}

			if (job == JOB_SORC && (event.skill.id == SKILL_RETALIATE)) {
				if (Ignore1) {
					fakeEnd_sorc(event, SKILL_RETALIATE_DURATION);
					lastSkill = SKILL_RETALIATE;
				}
				return false;
			}

			if (job == JOB_SORC && (event.skill.id == SKILL_PILLAR)) {
				return false;
			}

			if (job == JOB_SORC && (event.skill.id == SKILL_MANA_BARRIER)) {
				return false;
			}

			if (job == JOB_SORC && (event.skill.id == SKILL_WARP_BARRIER || event.skill.id == SKILL_WARP_BARRIER_2)) {
				return false;
			}

			if (job == JOB_SORC && (event.skill.id == SKILL_LIGHTNING_STRIKE)) {
				return false;
			}

			if (job == JOB_SORC && (event.skill.id == SKILL_METEOR_STRIKE || event.skill.id == SKILL_METEOR_STRIKE_BOOST || event.skill.id == SKILL_METEOR_SHOWER)) {
				return false;
			}

			if (job == JOB_SORC && (event.skill.id == SKILL_NOVA)) {
				return false;
			}

			if (job == JOB_SORC && (event.skill.id == SKILL_PAINFUL_TRAP)) {
				return false;
			}

			if (job == JOB_SORC && (event.skill.id == SKILL_LIGHTNING_TRAP)) {
				return false;
			}

			if (job == JOB_SORC && (event.skill.id == SKILL_MINDBLAST)) {
				return false;
			}

			if (job == JOB_SORC && (event.skill.id == SKILL_HAILSTORM)) {
				return false;
			}

			if (job == JOB_SORC && (event.skill.id == SKILL_FLAMING_BARRAGE || event.skill.id == SKILL_FLAMING_BARRAGE_2)) {
				return false;
			}

			if (job == JOB_SORC && (event.skill.id == SKILL_TIME_GYRE || event.skill.id == SKILL_TIME_GYRE_2)) {
				return false;
			}

			if (job == JOB_SORC && (event.skill.id == SKILL_MANA_VOLLEY || event.skill.id == SKILL_MANA_VOLLEY_2)) {
				return false;
			}

			if (job == JOB_SORC && (event.skill.id == SKILL_NERVE_EXHAUST || event.skill.id == SKILL_NERVE_EXHAUST_2)) {
				return false;
			}

			if (job == JOB_SORC && (event.skill.id == SKILL_BURNING_BREATH || event.skill.id == SKILL_BURNING_BREATH_2)) {
				return false;
			}

			if (job == JOB_SORC && (event.skill.id == SKILL_FROST_SPHERE)) {
				return false;
			}

			if (job == JOB_SORC && (event.skill.id == SKILL_ESCAPE)) {
				return false;
			}

			if (job == JOB_SORC && (event.skill.id == SKILL_MANA_BOOST || event.skill.id == (SKILL_MANA_BOOST +30))) {
				return false;
			}

			if (job == JOB_SORC && event.skill.id == SKILL_BACKSTEP) {
				return false;
			}

			if (job == JOB_SORC && event.skill.id == SKILL_TELEPORT_JAUNT) {
				return false;
			}
			if (job == JOB_SORC && event.skill.id == SKILL_ARCANE_PULSE && DISABLE_CHARGE) {
				return;
			}

			if (job == JOB_SORC && (event.skill.id == SKILL_ARCANE_PULSE || event.skill.id == SKILL_ARCANE_PULSE_1 || event.skill.id == SKILL_ARCANE_PULSE_2 || event.skill.id == SKILL_ARCANE_PULSE_3)) {
				return false;
			}

			if (job == JOB_SORC && (event.skill.id == SKILL_ARCANE_PULSE || event.skill.id == SKILL_ARCANE_PULSE_4 || event.skill.id == SKILL_ARCANE_PULSE_5 || event.skill.id == SKILL_ARCANE_PULSE_6)) {
				return false;
			}
		}
	});

	dispatch.hook('S_ACTION_END', 5, (event) => {
	  if(event.skill == 67108232) console.log("error");
		if (!enabled) return;
		if(event.gameId === cid) {
			var d = new Date();
			lastSkillTime[2] = d.getTime();
			if (lastLastSkill != SKILL_FLAMING_BARRAGE && lastSkill != SKILL_FLAMING_BARRAGE && ((lastSkillTime[2] - lastSkillTime[1]) > lastLastSkillDelay) && (event.skill.id == lastLastSkill || event.skill.id == lastLastSkill +30) && (lastLastSkill == lastSkillTime[3] || lastLastSkill == (lastSkillTime[3] -30))) {
				if (lastSkill != SKILL_BACKSTEP && lastSkill != SKILL_ESCAPE && lastSkill != SKILL_TELEPORT_JAUNT) {
					clearTimeout(cancelTimer);
				}
				RecheckTimer = setTimeout(function () {
					if (lastSkill == SKILL_BACKSTEP || lastSkill == SKILL_ESCAPE || lastSkill == SKILL_TELEPORT_JAUNT) { return; }
					/*dispatch.toClient('S_ACTION_END', 5, lastSkillEvent);*/
				}, (lastSkillDelay + lastSkillStart - lastSkillTime[1] - lastLastSkillDelay));
			}


			if (job == JOB_SORC && (event.skill.id == SKILL_VOID_PULSE)) {
				return false;
			}

			if (job == JOB_SORC && event.skill.id == SKILL_FIREICE) {
				return false;
			}

			if (job == JOB_SORC && event.skill.id == (SKILL_FIREICE +30)) {
				return false;
			}

			if (job == JOB_SORC && event.skill.id == SKILL_FIREZAP) {
				return false;
			}

			if (job == JOB_SORC && event.skill.id == SKILL_ICEZAP) {
				return false;
			}

			if (job == JOB_SORC && event.skill.id == SKILL_TRINITY) {
				return false;
			}

			if (job == JOB_SORC && event.skill.id == SKILL_BLACKHOLE) {
				return false;
			}

			if (job == JOB_SORC && (event.skill.id == SKILL_RETALIATE)) {
				return false;
			}

			if (job == JOB_SORC && (event.skill.id == SKILL_PILLAR)) {
				return false;
			}

			if (job == JOB_SORC && (event.skill.id == SKILL_MANA_BARRIER)) {
				return false;
			}

			if (job == JOB_SORC && (event.skill.id == SKILL_WARP_BARRIER || event.skill.id == SKILL_WARP_BARRIER_2)) {
				return false;
			}

			if (job == JOB_SORC && (event.skill.id == SKILL_LIGHTNING_STRIKE)) {
				return false;
			}

			if (job == JOB_SORC && (event.skill.id == SKILL_METEOR_STRIKE || event.skill.id == SKILL_METEOR_STRIKE_BOOST || event.skill.id == SKILL_METEOR_SHOWER)) {
				return false;
			}

			if (job == JOB_SORC && (event.skill.id == SKILL_PAINFUL_TRAP)) {
				return false;
			}

			if (job == JOB_SORC && (event.skill.id == SKILL_LIGHTNING_TRAP)) {
				return false;
			}

			if (job == JOB_SORC && (event.skill.id == SKILL_MINDBLAST)) {
				return false;
			}

			if (job == JOB_SORC && (event.skill.id == SKILL_NOVA)) {
				return false;
			}

			if (job == JOB_SORC && (event.skill.id == SKILL_HAILSTORM)) {
				return false;
			}

			if (job == JOB_SORC && (event.skill.id == SKILL_FLAMING_BARRAGE || event.skill.id == SKILL_FLAMING_BARRAGE_2)) {
				return false;
			}

			if (job == JOB_SORC && (event.skill.id == SKILL_TIME_GYRE || event.skill.id == SKILL_TIME_GYRE_2)) {
				return false;
			}

			if (job == JOB_SORC && (event.skill.id == SKILL_MANA_VOLLEY || event.skill.id == SKILL_MANA_VOLLEY_2)) {
				return false;
			}

			if (job == JOB_SORC && (event.skill.id == SKILL_NERVE_EXHAUST || event.skill.id == SKILL_NERVE_EXHAUST_2)) {
				return false;
			}

			if (job == JOB_SORC && (event.skill.id == SKILL_BURNING_BREATH || event.skill.id == SKILL_BURNING_BREATH_2)) {
				return false;
			}

			if (job == JOB_SORC && (event.skill.id == SKILL_FROST_SPHERE)) {
				return false;
			}

			if (job == JOB_SORC && (event.skill.id == SKILL_ESCAPE)) {
				return false;
			}

			if (job == JOB_SORC && (event.skill.id == SKILL_MANA_BOOST || event.skill.id == (SKILL_MANA_BOOST +30))) {
				return false;
			}

			if (job == JOB_SORC && event.skill.id == SKILL_BACKSTEP) {
				return false;
			}

			if (job == JOB_SORC && event.skill.id == SKILL_TELEPORT_JAUNT) {
				return false;
			}

			if (job == JOB_SORC && event.skill.id == SKILL_ARCANE_PULSE) {
				//APState =0;
				if (DISABLE_CHARGE) { return; }
				return false;
			}

			if (job == JOB_SORC && (event.skill.id == SKILL_ARCANE_PULSE_1 || event.skill.id == SKILL_ARCANE_PULSE_2 || event.skill.id == SKILL_ARCANE_PULSE_3)) {
				return false;
			}

			if (job == JOB_SORC && (event.skill.id == SKILL_ARCANE_PULSE_4 || event.skill.id == SKILL_ARCANE_PULSE_5 || event.skill.id == SKILL_ARCANE_PULSE_6)) {
				return false;
			}
		}
	});

	dispatch.hook('S_START_COOLTIME_SKILL', 3, (event) => {
		if (!enabled) return;
		event.cooldown -= GLOBAL_LATENCY;
		if (APCHECK.indexOf(event.skill.id) !== -1 && manaBoostActive) {
			bap = true;
			setTimeout(function () {
				bap = false;
			}, event.cooldown);
		}
		if(event.skill.id == (SKILL_MANA_BOOST +30)){
			clearTimeout(manaf2);
			manaf = true;
			manaf2 = setTimeout(function(){manaf = false;}, event.cooldown);
		}
		return true;
	});


	dispatch.hook('S_PLAYER_STAT_UPDATE', dispatch.majorPatchVersion >= 106 ? 16 : 15, (event) => {
		if (!enabled) return;
		aspd = (event.attackSpeed + event.attackSpeedBonus) /100;
		if (event.hp ==0) {
			manaBoostActive = false;
			APSpeed =0;
		}
		if(!laststat){
			laststat = event;
		}
		if(lastlastedge != lastedge){
			lastlastedge = lastedge;
		}
		if(laststat.fireEdge != event.fireEdge){
			lastedge =1;
		}
		if(laststat.iceEdge != event.iceEdge){
			lastedge =2;
		}
		if(laststat.lightningEdge != event.lightningEdge){
			lastedge =3;
		}
		laststat = event;
	});

	dispatch.hook('C_CANCEL_SKILL', 3, (event) => {
		if (!enabled) return;
		clearTimeout(v1);
		clearTimeout(v2);
		clearTimeout(v3);
		clearTimeout(v4);
		clearTimeout(v5);
		clearTimeout(v6);
		clearTimeout(v7);
		clearTimeout(v8);
		if (job == JOB_SORC && (event.skill.id == SKILL_FLAMING_BARRAGE_2 || event.skill.id == SKILL_FLAMING_BARRAGE) && event.type == 1 && lastSkill == SKILL_FLAMING_BARRAGE) {
			dispatch.toClient('S_ACTION_END', 5, {
				gameId: cid,
				loc: { x: xloc, y: yloc, z: zloc },
				w: wloc,
				templateId: model,
				skill: SKILL_FLAMING_BARRAGE,
				type: 1,
				id: atkid[SKILL_FLAMING_BARRAGE],
			});
		}
		if (job == JOB_SORC && (event.skill.id == SKILL_TIME_GYRE_2 || event.skill.id == SKILL_TIME_GYRE) && event.type == 1 && lastSkill == SKILL_TIME_GYRE) {
			dispatch.toClient('S_ACTION_END', 5, {
				gameId: cid,
				loc: { x: xloc, y: yloc, z: zloc },
				w: wloc,
				templateId: model,
				skill: SKILL_TIME_GYRE,
				type: 1,
				id: atkid[SKILL_TIME_GYRE],
			});
		}
		if (job == JOB_SORC && (event.skill.id == SKILL_BURNING_BREATH_2 || event.skill.id == SKILL_BURNING_BREATH) && event.type == 1 && lastSkill == SKILL_BURNING_BREATH) {
			dispatch.toClient('S_ACTION_END', 5, {
				gameId: cid,
				loc: { x: xloc, y: yloc, z: zloc },
				w: wloc,
				templateId: model,
				skill: SKILL_BURNING_BREATH,
				type: 1,
				id: atkid[SKILL_BURNING_BREATH],
			});
		}
		if (job == JOB_SORC && (event.skill.id == SKILL_NERVE_EXHAUST_2 || event.skill.id == SKILL_NERVE_EXHAUST) && event.type == 1 && lastSkill == SKILL_NERVE_EXHAUST) {
			dispatch.toClient('S_ACTION_END', 5, {
				gameId: cid,
				loc: { x: xloc, y: yloc, z: zloc },
				w: wloc,
				templateId: model,
				skill: SKILL_NERVE_EXHAUST,
				type: 1,
				id: atkid[SKILL_NERVE_EXHAUST],
			});
		}
		if (job == JOB_SORC && (event.skill.id == SKILL_MANA_VOLLEY_2 || event.skill.id == SKILL_MANA_VOLLEY) && event.type == 1 && lastSkill == SKILL_MANA_VOLLEY) {
			dispatch.toClient('S_ACTION_END', 5, {
				gameId: cid,
				loc: { x: xloc, y: yloc, z: zloc },
				w: wloc,
				templateId: model,
				skill: SKILL_MANA_VOLLEY,
				type: 1,
				id: atkid[SKILL_MANA_VOLLEY],
			});
		}
		if (job == JOB_SORC && event.skill.id == SKILL_METEOR_STRIKE && (lastSkill == SKILL_METEOR_STRIKE || lastSkill == SKILL_METEOR_STRIKE_BOOST || lastSkill == SKILL_METEOR_SHOWER)) {
			clearTimeout(firelord);
			disabSkill[SKILL_METEOR_STRIKE] = false;
			clearTimeout(cancelTimer);
			dispatch.toClient('S_ACTION_END', 5, {
				gameId: cid,
				loc: { x: xloc, y: yloc, z: zloc },
				w: wloc,
				templateId: model,
				skill: SKILL_METEOR_STRIKE,
				type: 2,
				id: atkid[SKILL_METEOR_STRIKE],
			});
		}
		if (job == JOB_SORC && event.skill.id == SKILL_METEOR_STRIKE_BOOST && (lastSkill == SKILL_METEOR_STRIKE || lastSkill == SKILL_METEOR_STRIKE_BOOST || lastSkill == SKILL_METEOR_SHOWER)) {
			clearTimeout(firelord);
			disabSkill[SKILL_METEOR_STRIKE] = false;
			clearTimeout(cancelTimer);
			dispatch.toClient('S_ACTION_END', 5, {
				gameId: cid,
				loc: { x: xloc, y: yloc, z: zloc },
				w: wloc,
				templateId: model,
				skill: SKILL_METEOR_STRIKE_BOOST,
				type: 2,
				id: atkid[SKILL_METEOR_STRIKE_BOOST],
			});
		}
		if (job == JOB_SORC && event.skill.id == SKILL_METEOR_SHOWER && (lastSkill == SKILL_METEOR_STRIKE || lastSkill == SKILL_METEOR_STRIKE_BOOST || lastSkill == SKILL_METEOR_SHOWER)) {
			clearTimeout(firelord);
			disabSkill[SKILL_METEOR_STRIKE] = false;
			clearTimeout(cancelTimer);
			dispatch.toClient('S_ACTION_END', 5, {
				gameId: cid,
				loc: { x: xloc, y: yloc, z: zloc },
				w: wloc,
				templateId: model,
				skill: SKILL_METEOR_SHOWER,
				type: 2,
				id: atkid[SKILL_METEOR_SHOWER],
			});
		}
		if (job == JOB_SORC && event.skill.id == SKILL_LIGHTNING_TRAP && lastSkill == SKILL_LIGHTNING_TRAP) {
			disabSkill[SKILL_LIGHTNING_TRAP] = false;
			clearTimeout(cancelTimer);
			dispatch.toClient('S_ACTION_END', 5, {
				gameId: cid,
				loc: { x: xloc, y: yloc, z: zloc },
				w: wloc,
				templateId: model,
				skill: SKILL_LIGHTNING_TRAP,
				type: 2,
				id: atkid[SKILL_LIGHTNING_TRAP],
			});
		}
		if (job == JOB_SORC && event.skill.id == SKILL_MINDBLAST && lastSkill == SKILL_MINDBLAST) {
			disabSkill[SKILL_MINDBLAST] = false;
			clearTimeout(cancelTimer);
			dispatch.toClient('S_ACTION_END', 5, {
				gameId: cid,
				loc: { x: xloc, y: yloc, z: zloc },
				w: wloc,
				templateId: model,
				skill: SKILL_MINDBLAST,
				type: 2,
				id: atkid[SKILL_MINDBLAST],
			});
		}
	});

	dispatch.hook('C_PLAYER_LOCATION', 5, (event) => {
		if (!enabled) return;
		xloc = event.dest.x;
		yloc = event.dest.y;
		zloc = event.dest.z;
		wloc = event.w;
		timeloc = event.time +1;
	});
	dispatch.hook('S_ACTION_STAGE', 9, (event) => {
	  //console.log("test: " + event.skill == 67119608);
		if (!enabled) return;
		if (event.gameId !== cid) {
			return;
		}
		if (event.skill.id ==1080101) {
			disabSkill[SKILL_RETALIATE] = true;
			Ignore1 = true;
		}
	});
	dispatch.hook('S_ACTION_END', 5, (event) => {
	  if(event.skill == 67108232) console.log("error");
		if (!enabled) return;
		if (event.gameId !== cid) {
			return;
		}
		if (event.skill.id ==1080101) {
			disabSkill[SKILL_RETALIATE] = false;
			clearTimeout(Ignore2);
			Ignore2 = setTimeout(function () { Ignore1 = false; },400);
		}
	});

};