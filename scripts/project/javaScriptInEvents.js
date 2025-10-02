

const scriptsInEvents = {

	async SaveGame_Event1_Act1(runtime, localVars)
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
		});
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
