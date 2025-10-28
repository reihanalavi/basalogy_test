

const scriptsInEvents = {

	async SaveGame_Event1_Act1(runtime, localVars)
<<<<<<< HEAD
	{
		const savedgame = JSON.parse(localStorage.getItem('user'));
		console.log(savedgame);
		if(savedgame) {
		    runtime.globalVars.isLoggedIn = true;
		    runtime.globalVars.SUPABASE_ID = savedgame.data.id;
		    runtime.globalVars.SUPABASE_USERNAME = savedgame.data.username;
		    runtime.globalVars.SUPABASE_SUCCESS = savedgame.success;
		} else {
		    runtime.globalVars.isLoggedIn = false;
		    runtime.globalVars.SUPABASE_ID = '';
		    runtime.globalVars.SUPABASE_USERNAME = '';
		    runtime.globalVars.SUPABASE_SUCCESS = false;
		}
	},

	async Menu_Event77_Act1(runtime, localVars)
	{
		const res = globalThis.loginOrRegister(runtime.globalVars.USERNAME).then((value) => {
		    runtime.globalVars.SUPABASE_ID = value.data.id;
		    runtime.globalVars.SUPABASE_USERNAME = value.data.username;
		    runtime.globalVars.SUPABASE_SUCCESS = value.success;
		
		    runtime.globalVars.isLoggedIn = value.success;
		
		    localStorage.setItem('user', JSON.stringify(value));
=======
	{
		const savedgame = JSON.parse(localStorage.getItem('user_basalogy'));
		console.log(savedgame);
		if(savedgame) {
		    const res = globalThis.loginOrRegister(savedgame.data.username).then((value) => {
		    // runtime.globalVars.SUPABASE_ID = value.data.id;
		    // runtime.globalVars.SUPABASE_USERNAME = value.data.username;
		    runtime.globalVars.SUPABASE_STORY = value.data.story_unlocked;
		    // runtime.globalVars.SUPABASE_SUCCESS = value.success;
		
		    // runtime.globalVars.isLoggedIn = value.success;
		
		    localStorage.setItem('user_basalogy', JSON.stringify(value));
		
		    // localStorage.getItem('user_basalogy')
		});
		    runtime.globalVars.isLoggedIn = true;
		    runtime.globalVars.SUPABASE_ID = savedgame.data.id;
		    runtime.globalVars.SUPABASE_USERNAME = savedgame.data.username;
		    runtime.globalVars.SUPABASE_STORY = savedgame.data.story_unlocked;
		    runtime.globalVars.SUPABASE_SUCCESS = savedgame.success;
		} else {
		    runtime.globalVars.isLoggedIn = false;
		    runtime.globalVars.SUPABASE_ID = '';
		    runtime.globalVars.SUPABASE_USERNAME = '';
		    runtime.globalVars.SUPABASE_SUCCESS = false;
		}
	},

	async ["Tes-SkillMenulis_Event45_Act6"](runtime, localVars)
	{
		const res = globalThis.storeScore('skill_menulis_tests', runtime.globalVars.jawaban_benar * 10).then((value) => {
		    console.log(value)
		});
	},

	async ["CobaTulis-SkillMenulis_Event27_Act3"](runtime, localVars)
	{
		console.log("Brushed", runtime.globalVars.brushed);
		const score = Math.floor(
		  (runtime.globalVars.brushed / runtime.globalVars.totalBrush) * 100
		);
		console.log("Score: ", score);
		const res = globalThis.storeScore('skill_menulis_coba_tulises', score).then((value) => {
		    console.log(value)
		});
	},

	async Menu_Event113_Act2(runtime, localVars)
	{
		const res = globalThis.loginOrRegister(runtime.globalVars.USERNAME).then((value) => {
		    runtime.globalVars.SUPABASE_ID = value.data.id;
		    runtime.globalVars.SUPABASE_USERNAME = value.data.username;
		    runtime.globalVars.SUPABASE_SUCCESS = value.success;
		
		    runtime.globalVars.isLoggedIn = value.success;
		
		    localStorage.setItem('user_basalogy', JSON.stringify(value));
		
		    localStorage.getItem('user_basalogy')
		});
	},

	async Menu_Event120_Act9(runtime, localVars)
	{
const res = globalThis.getRanks().then((value) => {
    console.log(value);

    runtime.globalVars.rankName = `${value.ranks[0].nama_lengkap}|${value.ranks[1].nama_lengkap}|${value.ranks[2].nama_lengkap}`

    runtime.globalVars.rankScore = `${value.ranks[0].total_score.toLocaleString("en-US")}|${value.ranks[1].total_score.toLocaleString("en-US")}|${value.ranks[2].total_score.toLocaleString("en-US")}`

    runtime.globalVars.rank_user = value.this_user_rank;

});
	},

	async SkillKomunikasi_Event27_Act1(runtime, localVars)
	{
		const res = globalThis.updateStoryUnlocked(runtime.globalVars.komunikasi_level + 1).then((value) => {
		    console.log(value)
>>>>>>> origin
		});
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
