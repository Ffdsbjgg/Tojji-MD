let handler = async (m, { command, text }) => m.reply(`┆ مملكـة ســينـز  🍂 ترحب بك┆
✦━━━━━ •『🍂』• ━━━━━✦

❒↵┆اختر لقب:「」
     ملاحضة:
             لقب شخصية من الانمي

❒↵┆اسم الانـمي 「」

❒↵┆طرف من:「」

❒↵┆صورة 「↑」

✦━━━━━ •『🪐』• ━━━━━✦
*`.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['الاوامر <teks>?']
handler.tags = ['الاوامر', 'fun']
handler.command = /^(الاستماره|55|استماره\استمارة)$/i

export default handler
