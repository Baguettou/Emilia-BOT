/* eslint-disable quotes */
const { prefix } = require('../../../config.json')

exports.wait = () => {
    return `Por favor espera un momento 😄`
}

exports.ok = () => {
    return `Listo ^ - ^`
}

exports.wrongFormat = () => {
    return `Formato incorrecto, revisa como usar este comando en: *${prefix}menu*.`
}

exports.emptyMess = () => {
    return `Necesitas adjuntar multimedia para usar este comando.`
}

exports.cmdNotFound = (cmd) => {
    return `El comando *${prefix}${cmd}* no existe.`
}

exports.blocked = (ownerNumber) => {
    return `No recibo llamadas. Revisa las reglas. Por el momento te que bloqueado.!\n\nSi crees que fue un error escribe a este número: wa.me/${ownerNumber.replace('@c.us', '')}`
}

exports.ownerOnly = () => {
    return `Este comando es exclusivo para el owner.`
}

exports.doneOwner = () => {
    return `Listo 😃`
}

exports.groupOnly = () => {
    return `Command ini hanya bisa digunakan di dalam grup!`
}

exports.adminOnly = () => {
    return `Este comando solo puede ser usado por admins.`
}

exports.notNsfw = () => {
    return `NSFW no ha sido activado. \n\n (Usa !NSFW enable si tienes los permisos correspondientes)`
}

exports.nsfwOn = () => {
    return `Los comandos NSFW han sido *activados*!`
}

exports.nsfwOff = () => {
    return `Los comandos NSFW han sido *desactivados*!`
}

exports.nsfwAlready = () => {
    return `NSFW ya ha sido activado.`
}

exports.addedGroup = (chat) => {
    return `Hola miembros de *${chat.contact.name}*!\n\nSoy un bot, para usar comandos antes deben registrarse usando:\n*${prefix}register* nombre | edad`
}

exports.nhFalse = () => {
    return `Codigo incorrecto!`
}

exports.listBlock = (blockNumber) => {
    return `------[ USUARIOS BLOQUEADOS ]------\n\nTOTAL: *${blockNumber.length}* usuario/s\n`
}

exports.notPremium = () => {
    return `Lo siento, este comando es solo para usuarios premium.`
}

exports.notAdmin = () => {
    return `Este miembro no es administrador del grupo.`
}

exports.adminAlready = () => {
    return `No puedo promover a un miembro que ya es administrador en este grupo.`
}

exports.botNotPremium = () => {
    return `Este bot no permite comandos premium.`
}

exports.botNotAdmin = () => {
    return `Lo siento, no soy administrador en este grupo.`
}

exports.ytFound = (res) => {
    return `*Video encontrador*\n\n➸ *Título*: ${res.title}\n\n➸ *Descripción*:\n\n${res.desc}\n➸ *Duración*: ${res.duration}\n\n...`
}

exports.notRegistered = () => {
    return `Para usar comandos antes debes registrarte\n\nPara registrarte usa este formato:\n*${prefix}register* nombre | edad`
}

exports.registered = (name, age, userId, time, serial) => {
    return `*「 REGISTRATION 」*\n\nTu cuenta ha sido registrada:\n\n➸ *Nombre*: ${name}\n➸ *Edad*: ${age}\n➸ *ID*: ${userId}\n➸ *Hora de registro*: ${time}\n➸ *Serial*: ${serial}\n\nNOTA:\n*NO* compartas tu *serial*\n\nRecuerda leer las reglas usando: *${prefix}rules* para empezar.`
}

exports.registeredAlready = () => {
    return `Ya te has registrado anteriormente.`
}

exports.received = (pushname) => {
    return `Hola ${pushname}!\nGracias por tu resporte, ya lo hemos recibido y lo revisaremos lo más pronto posible.`
}

exports.daily = (time) => {
    return `Lo siento pero ya has usado demasiados comandos.\nPor favor espera *${time.hours}* hora(s) *${time.minutes}* minuto(s) *${time.seconds}* segundo(s) antes de seguir usando comandos.`
}

exports.videoLimit = () => {
    return `El gif, video o archivo es demasiado pesado.`
}


exports.ytResult = (urlyt, title, channel, duration, views) => {
    return `➸ *Judul*: ${title}\n➸ *Channel*: ${channel}\n➸ *Durasi*: ${duration}\n➸ *Views*: ${views}\n➸ *Link*: ${urlyt}`
}

exports.profile = (username, status, premi, benet, adm, level, requiredXp, xp) => {
    return `-----[ *INFORMACIÓN* ]-----\n\n➸ *Nombre*: ${username}\n➸ *Status*: ${status}\n➸ *Premium*: ${premi}\n➸ *Baneado*: ${benet}\n➸ *Administrador*: ${adm}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=\n\nTu progreso:\n➸ *Nivel*: ${level}\n➸ *XP*: ${xp} / ${requiredXp}`
}

exports.detectorOn = (name, formattedTitle) => {
    return `*「 ANTI GROUP LINK 」*\n\nAnuncio para todos los miembros de ${(name || formattedTitle)}\nSi alguien envía un link para un grupo será expulsado.\nGracias.\n\n- Admins de ${(name || formattedTitle)}`
}

exports.detectorOff = () => {
    return `Anti-group link ha sido *desactivado*!`
}

exports.detectorOnAlready = () => {
    return `Anti-group link ya ha sido activado.`
}

exports.antiNsfwOn = (name, formattedTitle) => {
    return `*「 ANTI NSFW LINK 」*\n\nMiembros del grupo ${(name || formattedTitle)}\nTodo aquel que mande links +18/NSFW será expulsado.\n\nMuchas gracias.\n- Admins de ${(name || formattedTitle)}`
}

exports.antiNsfwOff = () => {
    return `El filtro anti-NSFW link ha sido *desactivado*!`
}

exports.antiNsfwOnAlready = () => {
    return `El filtro anti-NSFW link ya ha sido *activado*!`
}

exports.linkDetected = () => {
    return `*「 ANTI GROUP LINK 」*\n\nEnviaste un link a un grupo!\nLo siento, pero debes irte...\nCuidate~ 😃`
}

exports.levelingOn = () => {
    return `Leveling ha sido *activado*!`
}

exports.levelingOff = () => {
    return `Leveling ha sido *desactivado*!`
}

exports.levelingOnAlready = () => {
    return `Leveling ya ha sido activado.`
}

exports.levelingNotOn = () => {
    return `Leveling no ha sido activado.`
}

exports.levelNull = () => {
    return `Aún no subes de nivel!`
}

exports.welcome = (event) => {
    return `Bienvenid@ @${event.who.replace('@c.us', '')} 😃
}

exports.welcomeOn = () => {
    return `Las bienvenidas han sido *activadas*!`
}

exports.welcomeOff = () => {
    return `Las bienvenidas han sido *desactivadas*!`
}

exports.welcomeOnAlready = () => {
    return `Las bienvenidas ya han sido activadas 😃.`
}

exports.minimalDb = () => {
    return `Se necesitan al menos *10* usuarios con algún nivel en la base de datos!`
}

exports.autoStikOn = () => {
    return `Auto-sticker ha sido *activado*!`
}

exports.autoStikOff = () => {
    return `Auto-sticker ha sido *desactivado*!`
}

exports.autoStikOnAlready = () => {
    return `Auto-sticker ya ha sido activado.`
}

exports.afkOn = (pushname, reason) => {
    return `AFK ha sido *activado*!\n\n➸ *Nombre*: ${pushname}\n➸ *Razón*: ${reason}`
}

exports.afkOnAlready = () => {
    return `AFK ya ha sido activado.`
}

exports.afkMentioned = (getReason, getTime) => {
    return `*「 AFK 」*\n\nSsshh! Esta persona está AFK\n➸ *Razón*: ${getReason}\n➸ *Desde*: ${getTime}`
}

exports.afkDone = (pushname) => {
    return `*${pushname}* ya no está AFK, bienvenid@ de vuelta~`
}

exports.gcMute = () => {
    return `*「 Silenciado 」*\n\nAhora solo administradores pueden enviar mensajes.`
}

exports.gcUnmute = () => {
    return `*「 Des-Silenciado 」*\n\nAhora todos los miembros del grupo pueden enviar mensajes.`
}

exports.notNum = (q) => {
    return `"${q}", no son números!`
}

exports.playstore = (app_id, title, developer, description, price, free) => {
    return `➸ *Nama*: ${title}\n➸ *ID*: ${app_id}\n➸ *Developer*: ${developer}\n➸ *Gratis*: ${free}\n➸ *Harga*: ${price}\n➸ *Deskripsi*: ${description}`
}

exports.shopee = (nama, harga, terjual, shop_location, description, link_product) => {
    return `➸ *Nama*: ${nama}\n➸ *Harga*: ${harga}\n➸ *Terjual*: ${terjual}\n➸ *Lokasi*: ${shop_location}\n➸ *Link produk*: ${link_product}\n➸ *Deskripsi*: ${description}`
}

exports.pc = (pushname) => {
    return `*「 REGISTRO 」*\n\nAkun kamu berhasil terdaftar! Silakan cek pesan ku di private chat mu ya ${pushname}~ :3\n\nNote:\nJika kamu tidak menerima pesan, artinya kamu belum save nomor bot.`
}

exports.registeredFound = (name, age, time, serial, userId) => {
    return `*「 REGISTERED 」*\n\nAkun ditemukan!\n\n➸ *Nama*: ${name}\n➸ *Umur*: ${age}\n➸ *ID*: ${userId}\n➸ *Waktu pendaftaran*: ${time}\n➸ *Serial*: ${serial}`
}

exports.registeredNotFound = (serial) => {
    return `Akun dengan serial: *${serial}* tidak ditemukan!`
}

exports.ytPlay = (result) => {
    return `*「 PLAY 」*\n\n➸ *Judul*: ${result.title}\n➸ *Durasi*: ${result.duration}\n➸ *Link*: ${result.url}\n\nMedia sedang dikirim, mohon tunggu...`
}
exports.pcOnly = () => {
    return `Command ini hanya bisa digunakan di dalam private chat saja!`
}

exports.linkNsfw = () => {
    return `*「 ANTI NSFW LINK 」*\n\nKamu telah mengirim link NSFW!\nMaaf, tapi aku harus mengeluarkan mu...`
}

exports.ageOld = () => {
    return `Kamu terlalu tua untuk menggunakan fitur ini! Mohon kembali ke masa muda anda agar bisa menggunakannya.`
}

exports.menuText = () => {
    return `
╔══❉ *𝐓𝐞𝐱𝐭 𝐌𝐚𝐤𝐞𝐫 (VF)* ❉═══
║
║ Untuk Spasi Teks menggunakan *+*
║ contoh : ${prefix}text1 neon kael+bot
║
╟⊱ *${prefix}text1 burnpaper* _teks_
╟⊱ *${prefix}text1 candlemug* _teks_
╟⊱ *${prefix}text1 lovemsg* _teks_
╟⊱ *${prefix}text1 mugflower* _teks_
╟⊱ *${prefix}text1 narutobanner* _teks_
╟⊱ *${prefix}text1 paperonglass* _teks_
╟⊱ *${prefix}text1 romancetext* _teks_
╟⊱ *${prefix}text1 shadowtext* _teks_
╟⊱ *${prefix}text1 tiktokeffect* _teks_
║
╚══❉ *BocchiBot* ❉════
    `
}

exports.fakeLink = () => {
    return `Ups, link ini terlihat mencurigakan. Demi keamanan grup, aku harus mengeluarkan mu...\n`
}

exports.muteChatOn = () => {
    return `Berhasil *mute* bot pada grup ini!`
}

exports.muteChatOff = () => {
    return `Berhasil *unmute* bot pada grup ini!`
}

exports.muteChatOnAlready = () => {
    return `Mute telah diaktifkan di grup ini sebelumnya!`
}

exports.randomQuran = (ranquran) => {
    return `
    بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
*Nama surah*: ${ranquran.data.result.nama} / ${ranquran.data.result.asma}
*Arti*: ${ranquran.data.result.arti}
*Surat ke*: ${ranquran.data.result.nomor}
*Keterangan*: ${ranquran.data.result.keterangan}
*Link audio*: ${ranquran.data.result.audio}
    `
}

exports.hadis = () => {
    return `
_*Assalamu'alaikum wr. wb.*_

*Daftar hadis*:
1. Hadis Bukhari ada 6638 hadis
    _Usa_: ${prefix}hadis bukhari 1
2. Hadis Muslim ada 4930 hadis
    _Usa_: ${prefix}hadis muslim 25
3. Hadis Tirmidzi ada 3625 hadis
    _Usa_: ${prefix}hadis tirmidzi 10
4. Hadis nasai ada 5364 hadis
    _Usa_: ${prefix}hadis nasai 6
5. Hadis Ahmad ada 4305 hadis
    _Usa_: ${prefix}hadis ahmad 5
6. Hadis Abu Daud ada 4419 hadis
    _Usa_: ${prefix}hadis abudaud 45
7. Hadis Malik ada 1587 hadis
    _Usa_: ${prefix}hadis malik 45
8. Hadis Ibnu Majah ada 4285 hadis
    _Usa_: ${prefix}hadis ibnumajah 8
9. Hadis Darimi ada 2949 hadis
    _Usa_: ${prefix}hadis darimi 3

*Semoga bermanfaat*
_*Wassalam*_
    `
}

exports.limit = () => {
    return `
*── 「 LIMIT 」 ──*

Limit penggunaan kamu telah habis! Silakan lakukan hal berikut:
❏ *_Tunggu hingga jam 00:00 WIB_*
    `
}

exports.asmaulHusna = (assna) => {
    return `
───❉ 𝐀𝐬𝐦𝐚𝐮𝐥 𝐇𝐮𝐬𝐧𝐚 ❉──

*${assna.name}*
❏ *Asmaul husna ke*: ${assna.number}
❏ *Pelafalan*: ${assna.transliteration}
❏ *Inggris*: ${assna.en.meaning}
    `
}

exports.menu = (jumlahUser, level, xp, role, pushname, requiredXp, premium) => {
    return `
------[ Bienvenido ]------

======================
➸ *Nombre*: ${pushname}
➸ *Nivel*: ${level}
➸ *XP*: ${xp} / ${requiredXp}
➸ *Rango*: ${role}
➸ *Premium*: ${premium}
======================

Registros totales: *${jumlahUser}*

Menús disponibles:

*[1]* DESCARGAR
*[2]* BOT
*[3]* VARIADO
*[4]* STICKER
*[5]* ANIME
*[6]* DIVERSIÓN
*[7]* ADMINISTRACIÓN
*[8]* NSFW
*[9]* OWNER
*[10]* Nivel	

Para usar un menú escribe *${prefix}menu* número 
Por ejemplo *${prefix}menu* *2*
    `
}

exports.menuDownloader = () => {
    return `
-----[ DESCARGAR ]-----

1. *${prefix}facebook*
Descarga un video de Facebook.
Abreviado: *fb*
Usa: *${prefix}facebook* link_video

2. *${prefix}ytmp3*
Descargar el audio de un video de YT.
Abreviado: -
Usa: *${prefix}ytmp3* link

3. *${prefix}ytmp4*
Descarga un video de YT.
Abreviado: -
Usa: *${prefix}ytmp4* link

4. *${prefix}tiktok*
Descarga un video de TikTok.
Abreviado: -
Usa: *${prefix}tiktok* link_video

5. *${prefix}twitter*
Descarga multimedia de Twitter.
Abreviado: *twt*
Usa: *${prefix}twiter* link

6. *${prefix}tiktokpic*
Descarga una foto de perfil de TikTok
Abreviado: -
Usa: *${prefix}tiktokpic* username

7. *${prefix}tiktoknowm*
Descarga un video de TikTok sin marca de agua.
Abreviado: *tktnowm*
Usa: *${prefix}tiktoknowm* link_video

8. *${prefix}moddroid*
Descarga un apk de moddroid.
Abreviado: -
Usa: *${prefix}moddroid* nombre

9. *${prefix}happymod*
Descarga un apk de happymod.
Abreviado: -
Usa: *${prefix}happymod* nombre

10. *${prefix}linedl*
Descarga stickers de Line.
Abreviado: -
Usa: *${prefix}linedl* nombre

_Menu [1]_
    `
}

exports.menuBot = () => {
    return `
-----[ BOT ]-----

1. *${prefix}rules*
Muestra las reglas de uso del bot.
Abreviado: *rule*
Usa: *${prefix}rules*

2. *${prefix}menu*
Muestra los menús.
Abreviado: *help*
Usa: *${prefix}menu* número

3. *${prefix}status*
Menampilkan status bot.
Abreviado: *stats*
Usa: *${prefix}status*

4. *${prefix}listblock*
Muestra la lista de usuarios bloqueados.
Abreviado: -
Usa: *${prefix}listblock*

5. *${prefix}ping*
Mira la velocidad de conexión del bot.
Abreviado: *p*
Usa: *${prefix}ping*

6. *${prefix}delete*
El bot elimina su mensaje seleccionado.
Abreviado: *del*
Usa: Menciona o selecciona el mensaje que el bot mandó y escribe *${prefix}delete*.

7. *${prefix}report*
Reporta errores.
Abreviado: -
Usa: *${prefix}report* texto

8. *${prefix}tos*
Terminos de servicios y condiciones. (TOS)
Abreviado: -
Usa: *${prefix}tos*

9. *${prefix}join*
El bot se une via link.
Abreviado: -
Usa: *${prefix}join* link_grupo

10. *${prefix}ownerbot*
Envía el contacto del bot.
Abreviado: -
Usa: *${prefix}ownerbot*

11. *${prefix}getpic*
Manda la foto de perfil de la persona mencionada.
Abreviado: -
Usa: *${prefix}getpic* @nombre/62812xxxxxxxx

12. *${prefix}premiumcheck*
Revisa tu tiempo de premium restante.
Abreviado: *cekpremium*
Usa: *${prefix}premiumcheck*

13. *${prefix}premiumlist*
Manda una lista de todos los usuarios premium.
Abreviado: *listpremium*
Usa: *${prefix}premiumlist*

_Index of [2]_
    `
}

exports.menuMisc = () => {
    return `
-----[ MISC ]-----

1. *${prefix}say*
Bot akan mengulang pesan mu.
Abreviado: -
Usa: *${prefix}say* teks

2. *${prefix}lirik*
Mencari lirik lagu.
Abreviado: -
Usa: *${prefix}lirik* judul_lagu

3. *${prefix}shortlink*
Membuat shortlink.
Abreviado: -
Usa: *${prefix}shortlink* link

4. *${prefix}wikipedia*
Mengirim Wikipedia dari teks yang diberikan.
Abreviado: *wiki*
Usa: *${prefix}wikipedia* teks

6. *${prefix}igstalk*
Stalk akun Instagram.
Abreviado: -
Usa: *${prefix}igstalk* username

9. *${prefix}ytsearch*
Mengirim hasil pencarian di YouTube.
Abreviado: *yts*
Usa: *${prefix}ytsearch* query

10. *${prefix}tts*
Membuat Text to Speech. Kalian perlu kode bahasa setiap menggunakan, cek di sini https://id.wikipedia.org/wiki/Daftar_bahasa_menurut_ISO_639-2
Abreviado: -
Usa: *${prefix}tts* kode_bahasa | teks

11. *${prefix}afk*
Set akun kamu ke mode AFK, aku akan mengirim pesan ke orang yang me-mention kamu.
Abreviado: -
Usa: *${prefix}afk* alasan. Kirim pesan ke grup untuk menonaktifkan mode AFK.

13. *${prefix}findsticker*
Untuk mencari sticker yang kamu cari
Abreviado: *findstiker*
Usa: *${prefix}findsticker* teks

14. *${prefix}math*
Kalkulator.
* = Perkalian
+ = Pertambahan
- = Pengurangan
/ = Pembagian
Abreviado: -
Usa: *${prefix}math* 12*12

19. *${prefix}whois*
IP look-up.
Abreviado: -
Usa: *${prefix}whois* ip_address

20. *${prefix}play*
Play audio dari YouTube.
Abreviado: - 
Usa: *${prefix}play* judul_video

21. *${prefix}sms*
Mengirim SMS secara anonymous. (SMS gateway)
Abreviado: -
Usa: *${prefix}sms* pesan | nomor_penerima

22. *${prefix}toxic*
Random toxic.
Abreviado: -
Usa: *${prefix}toxic*

23. *${prefix}tafsir*
Tafsir ayat surah Al-Qur'an.
Abreviado: -
Usa: *${prefix}tafsir* nama_surah  ayat

24. *${prefix}motivasi*
Kata-kata motivasi.
Abreviado: -
Usa: *${prefix}motivasi*

25. *${prefix}linesticker*
Sticker Line terbaru.
Abreviado: *linestiker*
Usa: *${prefix}linesticker*

26. *${prefix}alkitab*
Al-Kitab search.
Abreviado: -
Usa: *${prefix}* nama_injil

27. *${prefix}cekongkir*
Cek ongkos kirim.
Abreviado: -
Usa: *${prefix}ongkir* kurir | asal | tujuan

28. *${prefix}movie*
Cari film.
Abreviado: -
Usa: *${prefix}movie* judul

28. *${prefix}reminder*
Pengingat. 
*s* - detik
*m* - menit
*h* - jam
*d* - hari
Abreviado: -
Usa: *${prefix}reminder* 10s | pesan_pengingat

29. *${prefix}imagetourl*
Image uploader.
Abreviado: *imgtourl*
Usa: Kirim gambar dengan caption *${prefix}imagetourl* atau reply gambar dengan caption *${prefix}imagetourl*.

30. *${prefix}infohoax*
Cek update info hoax.
Abreviado: -
Usa: *${prefix}infohoax*

31. *${prefix}trending*
Cek trending di Twitter.
Abreviado: -
Usa: *${prefix}trending*

32. *${prefix}jobseek*
Mencari info lowongan kerja.
Abreviado: -
Usa: *${prefix}jobseek*

33. *${prefix}spamcall*
Spam call.
Abreviado: -
Usa: *${prefix}spamcall* 812xxxxxxxx

34. *${prefix}spamsms*
Spam SMS.
Abreviado: -
Usa: *${prefix}spamsms* 0812xxxxxxxx jumlah_pesan

35. *${prefix}email*
Mengirim email secara anonymous.
Abreviado: -
Usa: *${prefix}email* email_target | subjek | pesan_email

36. *${prefix}quotes*
Random quotes bahasa indonesia.
Abreviado: -
Usa: *${prefix}quotes*

37. *${prefix}genshininfo*
Kirim info karakter Genshin Impact.
Abreviado: *genshin*
Usa: *${prefix}genshininfo* nama_karakter

38. *${prefix}translate*
Terjemahkan teks.
Abreviado: *trans*
Usa: *${prefix}translate* teks | kode_bahasa

39. *${prefix}hadis*
Info hadis.
Abreviado: -
Usa: *${prefix}hadis* kitab_hadis | nomor_hadis

40. *${prefix}asmaulhusna*
Asmaul husna.
Abreviado: -
Usa: *${prefix}asmaulhusna* nomor_asmaulhusna

41. *${prefix}randomquran*
Kirim surah Al-Qur'an secara random.
Abreviado: -
Usa: *${prefix}randomquran*

42. *${prefix}coronavirus*
Cek kasus COVID-19.
Abreviado: *corona*
Usa: *${prefix}coronavirus* negara

43. *${prefix}tomp3*
Format video ke MP3.
Abreviado: -
Usa: Kirim video dengan caption *${prefix}tomp3* atau reply video dengan caption *${prefix}tomp3*.

44. *${prefix}ttp*
Buat teks menjadi stiker.
Abreviado: -
Usa: *${prefix}ttp* teks

45. *${prefix}bass*
Bass boost, bikin telinga sakit.
Abreviado: -
Usa: *${prefix}bass* tingkat_dB

_Index of [3]_
    `
}

exports.menuSticker = () => {
    return `
-----[ STICKER ]-----

1. *${prefix}sticker*
Membuat stiker dari gambar yang dikirim atau di-reply.
Abreviado: *stiker*
Usa: Kirim gambar dengan caption *${prefix}sticker* atau reply gambar dengan caption *${prefix}sticker*.

2. *${prefix}stickergif*
Membuat stiker dari video MP4 atau GIF yang dikirim atau di-reply.
Abreviado: *stikergif*
Usa: Kirim video/GIF dengan caption *${prefix}stickergif* atau reply video/GIF dengan caption *${prefix}stickergif*.

3. *${prefix}ttg*
Membuat stiker text to GIF.
Abreviado: -
Usa: *${prefix}ttg* teks

4. *${prefix}stickertoimg*
Konversi stiker ke foto.
Abreviado: *stikertoimg toimg*
Usa: Reply sticker dengan caption *${prefix}stickertoimg*.

5. *${prefix}emojisticker*
Konversi emoji ke stiker.
Abreviado: *emojistiker*
Usa: *${prefix}emojisticker* emoji

6. *${prefix}stickerwm*
Buat stiker dengan WM.
Abreviado: *stcwm*
Usa: Kirim gambar dengan caption *${prefix}stickerwm* pack_name | author_name atau reply gambar dengan caption *${prefix}stickerwm* pack_name | author_name.

7. *${prefix}stickermeme*
Buat sticker meme.
Abreviado: *stcmeme*
Usa: Kirim gambar dengan caption *${prefix}stickermeme* teks_atas | teks_bawah atau reply gambar dengan caption *${prefix}stickermeme* teks_atas | teks_bawah.

8. *${prefix}takestick*
Merubah watermark sticker.
Abreviado: -
Usa: Reply stiker dengan caption *${prefix}takestick* pack_name | author_name

_Index of [4]_
    `
}

exports.menuWeeaboo = () => {
    return `
-----[ WEEABOO ]-----

1. *${prefix}neko*
Mengirim foto neko girl.
Abreviado: -
Usa: *${prefix}neko*

2. *${prefix}wallpaper*
Mengirim wallpaper anime.
Abreviado: *wp*
Usa: *${prefix}wallpaper*

3. *${prefix}kemono*
Mengirim foto kemonomimi girl.
Abreviado: -
Usa: *${prefix}kemono*

4. *${prefix}kusonime*
Mencari info anime dan link download batch di Kusonime.
Abreviado: -
Usa: *${prefix}kusonime* judul_anime

5. *${prefix}komiku*
Mencari info manga dan link download di Komiku.
Abreviado: -
Usa: *${prefix}komiku* judul_manga

6. *${prefix}wait*
Mencari source anime dari screenshot scene.
Abreviado: -
Usa: Kirim screenshot dengan caption *${prefix}wait* atau reply screenshot dengan caption *${prefix}wait*.

7. *${prefix}source*
Mencari source dari panel doujin, ilustrasi, dan gambar yang berhubungan dengan anime.
Abreviado: *sauce*
Usa: Kirim gambar dengan caption *${prefix}source* atau reply gambar dengan caption *${prefix}source*.

8. *${prefix}waifu*
Mengirim random foto waifu.
Abreviado: -
Usa: *${prefix}waifu*

9. *${prefix}anitoki*
Cek update terbaru Anitoki.
Abreviado: -
Usa: *${prefix}anitoki*

10. *${prefix}neonime*
Cek update terbaru Neonime.
Abreviado: -
Usa: *${prefix}neonime*

11. *${prefix}anoboy*
Cek on-going anime dari Anoboy.
Abreviado: -
Usa: *${prefix}anoboy*

12. *${prefix}character*
Find Character from anime.
Alias: -
Usa: *{prefix}character* name_character

_Index of [5]_
    `
}

exports.menuFun = () => {
    return `
-----[ FUN ]-----

1. *${prefix}hartatahta*
Membuat gambar Harta Tahta Nama.
Abreviado: -
Usa: *${prefix}hartatahta* nama

2. *${prefix}partner*
Weton jodoh.
Abreviado: *pasangan*
Usa: *${prefix}partner* nama | pasangan

3. *${prefix}zodiac*
Ramalan zodiak Mingguan.
Abreviado: *zodiak*
Usa: *${prefix}zodiac* zodiak

4. *${prefix}write*
Membuat catatan tulisan di buku.
Abreviado: *nulis*
Usa: *${prefix}write* teks

5. *${prefix}glitchtext*
Membuat gambar teks glitch.
Abreviado: *glitext*
Usa: *${prefix}glitchtext* teks1 | teks2

6. *${prefix}simi*
Chat SimiSimi.
Abreviado: -
Usa: *${prefix}simi* teks

7. *${prefix}blackpink*
Membuat teks dengan style logo Blackpink.
Abreviado: -
Usa: *${prefix}blackpink* teks

8. *${prefix}phmaker*
Membuat teks dengan style logo Pornhub.
Abreviado: -
Usa: *${prefix}phmaker* teks_kiri | teks_kanan

9. *${prefix}galaxy*
Membuat gambar teks galaxy.
Abreviado: -
Usa: *${prefix}galaxy* teks

10. *${prefix}tod*
Bermain truth or dare.
Abreviado: -
Usa: *${prefix}tod*

11. *${prefix}weton*
Kirim ramalan weton.
Abreviado: -
Usa: *${prefix}weton* tanggal | bulan | tahun

12. *${prefix}triggered*
Membuat efek triggered.
Abreviado: -
Usa: Kirim gambar dengan caption *${prefix}triggered* atau reply pesan orang dengan *${prefix}triggered*.

13. *${prefix}kiss*
Kiss someone ( ͡° ͜ʖ ͡°).
Abreviado: -
Usa: Kirim gambar dengan caption *${prefix}kiss* atau reply gambar dengan *${prefix}kiss*.

14. *${prefix}asupan*
Asupan video cewek-cewek.
Abreviado: -
Usa: *${prefix}asupan*

15. *${prefix}citacita*
Meme cita-cita.
Abreviado: -
Usa: *${prefix}citacita*

16. *${prefix}phcomment*
Membuat capton ala PH comment.
Abreviado: -
Usa: *${prefix}phcomment* username | teks

17. *${prefix}ffbanner*
Membuat banner Free Fire.
Abreviado: -
Usa: *${prefix}ffbanner* teks1 | teks2

18. *${prefix}fflogo*
Membuat logo karakter Free Fire.
Abreviado: -
Usa: *${prefix}fflogo* teks1 | teks2

19. *${prefix}neontext*
Membuat gambar neon teks.
Abreviado: *neon*
Usa: *${prefix}neontext* teks_atas | teks_tengah | teks_bawah

20. *${prefix}firemaker*
Membuat gambar teks fire.
Abreviado: -
Usa: *${prefix}firemaker* teks

21. *${prefix}mlmaker*
Membuat gambar karakter hero ML dengan teks.
Abreviado: -
Usa: *${prefix}mlmaker* nama_hero | teks

22. *${prefix}balloonmaker*
Membuat gambar couple balloon.
Abreviado: *blmaker*
Usa: *${prefix}balloonmaker* nama1 | nama2

23. *${prefix}sliding*
Membuat GIF sliding text.
Abreviado: -
Usa: *${prefix}sliding* teks

24. *${prefix}wasted*
Membuat gambar wasted.
Abreviado: -
Usa: Upload foto dengan caption *${prefix}wasted*

25. *${prefix}caklontong*
Bermain kuis caklontong.
Abreviado: -
Usa: *${prefix}caklontong*

26. *${prefix}hilih*
Replace beberapa huruf menjadi i.
Abreviado: -
Usa: *${prefix}hilih* teks

27. *${prefix}tebakgambar*
Bermain kuis tebak gambar.
Abreviado: -
Usa: *${prefix}tebakgambar*

_Index of [6]_
    `
}

exports.menuModeration = () => {
    return `
-----[ MODERATION ]-----

1. *${prefix}add*
Menambah user ke dalam group.
Abreviado: -
Usa: *${prefix}add* 628xxxxxxxxxx

2. *${prefix}kick*
Mengeluarkan member dari grup.
Abreviado: -
Usa: *${prefix}kick* @member1

3. *${prefix}promote*
Promote member menjadi admin.
Abreviado: -
Usa: *${prefix}promote* @member1

4. *${prefix}demote*
Demote member dari admin.
Abreviado: -
Usa: *${prefix}demote* @member1

5. *${prefix}leave*
Bot akan meninggalkan grup.
Abreviado: -
Usa: *${prefix}leave*

6. *${prefix}everyone*
Mention semua member group.
Abreviado: -
Usa: *${prefix}everyone*

7. *${prefix}nsfw*
Mematikan/menyalakan mode NSFW.
Abreviado: -
Usa: *${prefix}nsfw* enable/disable

8. *${prefix}groupicon*
Mengganti icon grup.
Abreviado: -
Usa: Kirim gambar dengan caption *${prefix}groupicon* atau reply gambar dengan caption *${prefix}groupicon*.

9. *${prefix}antilink*
Mematikan/menyalakan fitur anti-group link.
Abreviado: -
Usa: *${prefix}antilink* enable/disable

10. *${prefix}welcome*
Mematikan/menyalakan fitur welcome di grup agar menyambut setiap kedatangan member.
Abreviado: -
Usa: *${prefix}welcome* enable/disable

11. *${prefix}autosticker*
Mematikan/menyalakan fitur auto-stiker. Setiap foto yang dikirim akan selalu diubah ke stiker.
Abreviado: *autostiker autostik*
Usa: *${prefix}autostiker* enable/disable

12. *${prefix}antinsfw*
Mematikan/menyalakan fitur anti-NSFW link.
Abreviado: -
Usa: *${prefix}antinsfw* enable/disable

13. *${prefix}mutegc*
Set group hanya admin yang bisa mengirim pesan.
Abreviado: -
Usa: *${prefix}mutegc* enabled/disable

_Index of [7]_
    `
}

exports.menuNsfw = () => {
    return `
-----[ NSFW ]-----

1. *${prefix}lewds*
Mengirim pict anime lewd.
Abreviado: *lewd*
Usa: *${prefix}lewds*

2. *${prefix}multilewds*
Mengirim up to 5 anime lewd pics. (PREMIUM ONLY)
Abreviado: *multilewds multilewd mlewd mlewds*
Usa: *${prefix}multilewds*

3. *${prefix}nhentai*
Mengirim info doujinshi dari nHentai.
Abreviado: *nh*
Usa: *${prefix}nhentai* kode

4. *${prefix}nhdl*
Mendownload doujin dari nHentai sebagai file PDF. (PREMIUM ONLY)
Abreviado: -
Usa: *${prefix}nhdl* kode

5. *${prefix}nekopoi*
Mengirim video link Nekopoi terbaru.
Abreviado: -
Usa: *${prefix}nekopoi*

6. *${prefix}multifetish*
Mengirim up to 5 fetish pics. (PREMIUM ONLY)
Abreviado: *mfetish*
Usa: *${prefix}multifetish* <armpits/feets/thighs/ass/boobs/belly/sideboobs/ahegao>

7. *${prefix}waifu18*
Mengirim random foto waifu NSFW.
Abreviado: -
Usa: *${prefix}waifu18*

8. *${prefix}fetish*
Mengirim fetish pics.
Abreviado: -
Usa: *${prefix}fetish* armpits/feets/thighs/ass/boobs/belly/sideboobs/ahegao

9. *${prefix}phdl*
Download video dari Pornhub.
Abreviado: -
Usa *${prefix}phdl* link

10. *${prefix}yuri*
Mengirim random foto lewd yuri.
Abreviado: -
Usa: *${prefix}yuri*

11. *${prefix}lewdavatar*
Mengirim random avatar lewd.
Abreviado: -
Usa: *${prefix}lewdavatar*

12. *${prefix}femdom*
Mengirim random foto ero femdom.
Abreviado: -
Usa: *${prefix}femdom*

13. *${prefix}nhsearch*
nHentai search.
Abreviado: -
Usa: *${prefix}nhsearch* query

14. *${prefix}nekosearch*
Nekopoi search.
Abreviado: -
Usa: *${prefix}nekosearch* query

15. *${prefix}cersex*
Random cerita sex.
Abreviado: -
Usa: *${prefix}cersex*

_Index of [8]_
    `
}

exports.menuOwner = () => {
    return `
-----[ OWNER ]-----
Halo Owner-sama ヽ(・∀・)ﾉ!

1. *${prefix}bc*
Membuat broadcast.
Abreviado: -
Usa: *${prefix}bc* <teks> 

2. *${prefix}clearall*
Menghapus semua chat di akun bot.
Abreviado: -
Usa: *${prefix}clearall*

3. *${prefix}getses*
Mengambil screenshot sesi dari akun bot.
Abreviado: -
Usa: *${prefix}getses*

4. *${prefix}ban*
Menambah/menghapus user yang diban.
Abreviado: -
Usa: *${prefix}ban* add/del @user/62812xxxxxxxx

5. *${prefix}leaveall*
Keluar dari semua grup.
Abreviado: -
Usa: *${prefix}leaveall*

6. *${prefix}eval*
Evaluate kode JavaScript.
Abreviado: *ev*
Usa: *${prefix}eval*

7. *${prefix}shutdown*
Men-shutdown bot.
Abreviado: -
Usa: *${prefix}shutdown*

8. *${prefix}premium*
Menambah/menghapus user premium.
*s* - detik
*m* - menit
*h* - jam
*d* - hari
Abreviado: -
Usa: *${prefix}premium* add/del @user/62812xxxxxxxx 30d

9. *${prefix}setstatus*
Mengganti status about me.
Abreviado: *setstats setstat*
Usa: *${prefix}status* teks

10. *${prefix}serial*
Cek pendaftaran akun via serial.
Abreviado: -
Usa: *${prefix}serial* serial_user

11. *${prefix}exif*
Atur WM stiker bot.
Abreviado: -
Usa: *${prefix}exif* pack_name | author_name

12. *${prefix}mute*
Mute semua user.
Abreviado: -
Usa: Gunakan *${prefix}mute* untuk mute dan gunakan *${prefix}mute* kembali untuk unmute.

13. *${prefix}setname*
Mengganti username bot. Maksimal 25 huruf.
Abreviado: -
Usa: *${prefix}name* username_baru

_Index of [9]_
    `
}

exports.menuLeveling = () => {
    return `
-----[ LEVELING ]-----

1. *${prefix}level*
Untuk melihat level kamu.
Abreviado: -
Usa: *${prefix}level*

2. *${prefix}leaderboard*
Untuk melihat leaderboard.
Aliaases: -
Usa: *${prefix}leaderboard*

_Index of [10]_
    `
}

exports.rules = () => {
    return `
-----[ RULES ]-----

1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan mengeksploitasi bot.
Sanksi: *PERMANENT BLOCK*

Jika sudah dipahami rules-nya, silakan ketik *${prefix}menu* untuk memulai!

Source code oleh:
wa.me/6281294958473 (Kal a.k.a. Slavyan)
    `
}

// Dimohon untuk owner/hoster jangan mengedit ini, terima kasih.
exports.tos = (ownerNumber) => {
    return `
-----[ TERMS OF SERVICE ]-----

Bot ini merupakan open-source bot dengan nama asli BocchiBot yang tersedia di GitHub secara gratis.
Owner/hoster dari bot ini terlepas dari tanggung jawab dan pengawasan developer (Slavyan).
Owner/hoster boleh menjiplak, menambahkan, menghapus, mengganti source code dengan catatan *tidak memperjualbelikannya* dalam bentuk apapun.
Apabila terjadi sebuah error, orang yang pertama yang harus kalian hubungi ialah owner/hoster.

Jika kalian ingin berkontribusi dalam projek ini, silakan kunjungi:
https://github.com/SlavyanDesu/BocchiBot

Contact person:
wa.me/${ownerNumber.replace('@c.us', '')} (Owner/hoster)
wa.me/6281294958473 (Developer)

Kalian juga bisa mendukung saya agar bot ini tetap up to date dengan:
081294958473 (OVO/Telkomsel/GoPay)

Terima kasih!

Slavyan.
    `
}
