file with 31 additions and 0 deletions.
 31 changes: 31 additions & 0 deletions31  
plugins/tools-name4.js
@@ -0,0 +1,31 @@
let deleteNickname = (jid) => {
    let nicknames = global.db.data.nicknames || {};
    if (jid in nicknames) {
        delete nicknames[jid];
        global.db.data.nicknames = nicknames;
        return true;
    }
    return false;
};

let handlerDeleteNickname = async (m, { conn }) => {
    let name = m.text.split(" ").slice(1).join(" ").trim();
    if (!name) {
        return await m.reply("📌╎اكـتـب لـقـب الـعـضــو لـحـذفــه");
    }

    let jid = Object.keys(global.db.data.nicknames || {}).find(key => global.db.data.nicknames[key] === name);
    if (!jid) {
       return await m.reply("‼╎لـقـب غـيـر صـحـيـح");
    }

    let success = deleteNickname(jid);
    if (success) {
        return await m.reply(📂╎تـم حـذف لـقـب *[ ${name} ]* مـن الالـقـاب);
    } else {
        return await m.reply("❌╎لـقـب غـيـر صـحـيـح");
    }
};
handlerDeleteNickname.owner = true;
handlerDeleteNickname.command = /^حذف-لقب$/i;
export default handlerDeleteNickname;
