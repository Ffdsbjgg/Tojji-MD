let handlerGetNicknames = async (m, { conn }) => {
    let nicknames = global.db.data.nicknames || {};
    let nicknamesText = Object.keys(nicknames).map((jid) => @${jid.replace(/@.+/, '')}: ${nicknames[jid]}).join("\n");
    if (nicknamesText) {
        m.reply(🗃╎قـائـمـة الالـقـاب :↓\n${nicknamesText}, null, {
            mentions: Object.keys(nicknames)
        });
    } else {
        m.reply("❌╎لا توجد ألقاب مسجلة حالياً!");
    }
};

handlerGetNicknames.command = /^الالقاب|الألقاب$/i;
handlerGetNicknames.owner = true;

export default handlerGetNicknames;
