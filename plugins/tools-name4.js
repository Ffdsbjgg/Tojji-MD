let getNicknames = () => {
    return global.db.data.nicknames || {};
};

let saveNickname = (jid, nickname) => {
    let nicknames = getNicknames();
    nicknames[jid] = nickname;
    global.db.data.nicknames = nicknames;
};

let handlerSetNickname = async (m, { conn }) => {
    let mentioned = m.mentionedJid && m.mentionedJid[0];
    if (!mentioned) {
        await conn.sendMessage(m.chat, { text: "*📧╎اعمل منشن لـ العضو*" });
        return;
    }

    let nickname = m.text.split(" ").slice(2).join(" ");
    if (!nickname) {
        await conn.sendMessage(m.chat, { text: "*❗╎اكتب اللقب بعد منشن العضو*" });
        return;
    }

    saveNickname(mentioned, nickname);

    await conn.sendMessage(m.chat, { text: `🗂️╎تم تسجيل اللقب *[ ${nickname} ]* للعضو المحدد.` });
};
handlerSetNickname.owner = true;
handlerSetNickname.command = /^لقب$/i;
export default handlerSetNickname;
