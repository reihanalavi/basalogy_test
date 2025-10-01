const SUPABASE_URL = "https://ujkoembpwijtrwnqnxxg.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqa29lbWJwd2lqdHJ3bnFueHhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkzMzI3MDEsImV4cCI6MjA3NDkwODcwMX0.lrKv88pLBjTJ36h3naEvJSX1elRsYMck69nGuS5bcMA";

const headers = {
  "Content-Type": "application/json",
  "apikey": SUPABASE_KEY,
  "Authorization": `Bearer ${SUPABASE_KEY}`
};

globalThis.test = function() {
  return 'test';
}

// global functions for Construct
globalThis.loginOrRegister = async function (nama_lengkap) {
  const now = new Date().toISOString();

  try {
    // 1. Cek user dengan nama_lengkap
    const checkRes = await fetch(
      `${SUPABASE_URL}/rest/v1/users?nama_lengkap=eq.${encodeURIComponent(nama_lengkap)}`,
      {
        method: "GET",
        headers
      }
    );

    if (!checkRes.ok) {
      const err = await checkRes.text();
      console.error("❌ getUser error:", err);
      return({
        success: false,
        data: {
          id: null,
          username: null
        }
      });
    }

    const existing = await checkRes.json();

    // 2. Kalau ada → return user pertama
    if (existing.length > 0) {
      const user = { id: existing[0].id, nama_lengkap: existing[0].nama_lengkap };
      console.log("✅ User exists:", user);
      return({
        success: true,
        data: {
          id: user.id,
          username: user.nama_lengkap
        }
      });
    }

    // 3. Kalau ga ada → create user baru
    const body = {
      nama_lengkap,
      created_at: now,
      updated_at: now
    };

    const createRes = await fetch(`${SUPABASE_URL}/rest/v1/users`, {
      method: "POST",
      headers: {
        ...headers,
        Prefer: "return=representation"
      },
      body: JSON.stringify(body)
    });

    if (!createRes.ok) {
      const err = await createRes.text();
      console.error("❌ createUser error:", err);
      return({
        success: false,
        data: {
          id: null,
          username: null
        }
      });
    }

    const created = await createRes.json();
    const newUser = { id: created[0].id, nama_lengkap: created[0].nama_lengkap };
    console.log("✅ User created:", newUser);
    return({
        success: true,
        data: {
          id: newUser.id,
          username: newUser.nama_lengkap
        }
      });

  } catch (err) {
    console.error("❌ loginOrRegister exception:", err.message);
    return({
      success: false,
      data: {
        id: null,
        username: null
      }
    });
  }
};


globalThis.getUsers = async function () {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/users`,
      {
        method: "GET",
        headers
      }
    );

    if (!res.ok) {
      const err = await res.text();
      console.error("❌ getUser error:", err);
      return [];
    }

    const data = await res.json();
    console.log("✅ User(s) found:", data);
    return data;
  } catch (err) {
    console.error("❌ getUser exception:", err.message);
    return [];
  }
};

globalThis.getUser = async function (nama_lengkap) {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/users?nama_lengkap=eq.${encodeURIComponent(nama_lengkap)}`,
      {
        method: "GET",
        headers
      }
    );

    if (!res.ok) {
      const err = await res.text();
      console.error("❌ getUser error:", err);
      return [];
    }

    const data = await res.json();
    console.log("✅ User(s) found:", data);
    return data;
  } catch (err) {
    console.error("❌ getUser exception:", err.message);
    return [];
  }
};
