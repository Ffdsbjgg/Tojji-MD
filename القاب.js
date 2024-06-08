let handlerMyNickname = async (m, { conn }) => {
    let mentioned = m.quoted ? m.quoted.sender : m.sender;
    let nicknames = global.db.data.nicknames || {};
    let nickname = nicknames[mentioned] ||  "لست مسجلا في قاعدة بياناتي";
 let venomN = "🍡╎لـقـبـك هـو : " + nickname
    conn.reply(m.chat, venomN, m)
};
handlerMyNickname.command = /^لقبي$/i;
export default handlerMyNickname;
