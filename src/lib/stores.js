import { writable } from "svelte/store";


let links = [{'id': '001', 'name': 'AlFatiha', 'src': 'https://github.com/FarhanAliRaza/AlQuran/blob/main/013ArRaad.mp3'}, {'id': '002', 'name': 'AlBaqara', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/002AlBaqara.mp3'}, {'id': '003', 'name': 'AalImran', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/003AalImran.mp3'}, {'id': '004', 'name': 'AnNisa', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/004AnNisa.mp3'}, {'id': '005', 'name': 'AlMaeda', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/005AlMaeda.mp3'}, {'id': '006', 'name': 'AlAnaam', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/006AlAnaam.mp3'}, {'id': '007', 'name': 'AlAaraf', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/007AlAaraf.mp3'}, {'id': '008', 'name': 'AlAnfaal', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/008AlAnfaal.mp3'}, {'id': '009', 'name': 'AtTauba', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/009AtTauba.mp3'}, {'id': '010', 'name': 'Younus', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/010Younus.mp3'}, {'id': '011', 'name': 'Hud', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/011Hud.mp3'}, {'id': '012', 'name': 'Yousef', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/012Yousef.mp3'}, {'id': '013', 'name': 'ArRaad', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/013ArRaad.mp3'}, {'id': '014', 'name': 'Ibrahim', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/014Ibrahim.mp3'}, {'id': '015', 'name': 'AlHijr', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/015AlHijr.mp3'}, {'id': '016', 'name': 'AnNahl', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/016AnNahl.mp3'}, {'id': '017', 'name': 'AlIsra', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/017AlIsra.mp3'}, {'id': '018', 'name': 'AlKahaf', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/018AlKahaf.mp3'}, {'id': '019', 'name': 'Maryam', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/019Maryam.mp3'}, {'id': '020', 'name': 'Taaha', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/020Taaha.mp3'}, {'id': '021', 'name': 'AlAnbia', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/021AlAnbia.mp3'}, {'id': '022', 'name': 'AlHajj', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/022AlHajj.mp3'}, {'id': '023', 'name': 'AlMominoon', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/023AlMominoon.mp3'}, {'id': '024', 'name': 'AnNoor', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/024AnNoor.mp3'}, {'id': '025', 'name': 'AlFurqan', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/025AlFurqan.mp3'}, {'id': '026', 'name': 'AshShuara', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/026AshShuara.mp3'}, {'id': '027', 'name': 'AnNamal', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/027AnNamal.mp3'}, {'id': '028', 'name': 'AlQasas', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/028AlQasas.mp3'}, {'id': '029', 'name': 'AlAnkaboot', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/029AlAnkaboot.mp3'}, {'id': '030', 'name': 'AlAnkaboot', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/030AlAnkaboot.mp3'}, {'id': '031', 'name': 'Luqman', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/031Luqman.mp3'}, {'id': '032', 'name': 'AsSajda', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/032AsSajda.mp3'}, {'id': '033', 'name': 'AlAhzab', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/033AlAhzab.mp3'}, {'id': '034', 'name': 'Saba', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/034Saba.mp3'}, {'id': '035', 'name': 'Faatir', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/035Faatir.mp3'}, {'id': '036', 'name': 'Yaseen', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/036Yaseen.mp3'}, {'id': '037', 'name': 'AsSaffat', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/037AsSaffat.mp3'}, {'id': '038', 'name': 'Saad', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/038Saad.mp3'}, {'id': '039', 'name': 'AzZumur', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/039AzZumur.mp3'}, {'id': '040', 'name': 'AlMomin', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/040AlMomin.mp3'}, {'id': '041', 'name': 'HaMimSajda', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/041HaMimSajda.mp3'}, {'id': '042', 'name': 'AshShura', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/042AshShura.mp3'}, {'id': '043', 'name': 'AzZukhruf', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/043AzZukhruf.mp3'}, {'id': '044', 'name': 'AdDukhan', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/044AdDukhan.mp3'}, {'id': '045', 'name': 'AlJasia', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/045AlJasia.mp3'}, {'id': '046', 'name': 'AlAhqaf', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/046AlAhqaf.mp3'}, {'id': '047', 'name': 'Muhammad', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/047Muhammad.mp3'}, {'id': '048', 'name': 'AlFath', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/048AlFath.mp3'}, {'id': '049', 'name': 'AlHujrat', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/049AlHujrat.mp3'}, {'id': '050', 'name': 'Qaf', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/050Qaf.mp3'}, {'id': '051', 'name': 'AzZariate', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/051AzZariate.mp3'}, {'id': '052', 'name': 'AtToor', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/052AtToor.mp3'}, {'id': '053', 'name': 'AnNajm', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/053AnNajm.mp3'}, {'id': '054', 'name': 'AlQamar', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/054AlQamar.mp3'}, {'id': '055', 'name': 'ArRahman', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/055ArRahman.mp3'}, {'id': '056', 'name': 'AlWaqiah', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/056AlWaqiah.mp3'}, {'id': '057', 'name': 'AlHadid', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/057AlHadid.mp3'}, {'id': '058', 'name': 'AlMujadilah', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/058AlMujadilah.mp3'}, {'id': '059', 'name': 'AlHashr', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/059AlHashr.mp3'}, {'id': '060', 'name': 'AlMumtahina', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/060AlMumtahina.mp3'}, {'id': '061', 'name': 'AsSaff', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/061AsSaff.mp3'}, {'id': '062', 'name': 'AlJuma', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/062AlJuma.mp3'}, {'id': '063', 'name': 'AlMunafiqoon', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/063AlMunafiqoon.mp3'}, {'id': '064', 'name': 'AtTaghabun', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/064AtTaghabun.mp3'}, {'id': '065', 'name': 'AtTalaq', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/065AtTalaq.mp3'}, {'id': '066', 'name': 'AtTahrim', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/066AtTahrim.mp3'}, {'id': '067', 'name': 'AlMulk', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/067AlMulk.mp3'}, {'id': '068', 'name': 'AlQalam', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/068AlQalam.mp3'}, {'id': '069', 'name': 'AlHaqqa', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/069AlHaqqa.mp3'}, {'id': '070', 'name': 'AlMaarij', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/070AlMaarij.mp3'}, {'id': '071', 'name': 'Nooh', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/071Nooh.mp3'}, {'id': '072', 'name': 'AlJin', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/072AlJin.mp3'}, {'id': '073', 'name': 'AlMuzammil', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/073AlMuzammil.mp3'}, {'id': '074', 'name': 'AlMudassir', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/074AlMudassir.mp3'}, {'id': '075', 'name': 'AlQiamah', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/075AlQiamah.mp3'}, {'id': '076', 'name': 'AdDahr', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/076AdDahr.mp3'}, {'id': '077', 'name': 'AlMursalat', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/077AlMursalat.mp3'}, {'id': '078', 'name': 'AnNaba', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/078AnNaba.mp3'}, {'id': '079', 'name': 'AnNaziat', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/079AnNaziat.mp3'}, {'id': '080', 'name': 'Abasa', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/080Abasa.mp3'}, {'id': '081', 'name': 'AtTakweer', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/081AtTakweer.mp3'}, {'id': '082', 'name': 'AlInfitar', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/082AlInfitar.mp3'}, {'id': '083', 'name': 'AlMutaffifin', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/083AlMutaffifin.mp3'}, {'id': '084', 'name': 'AlInshiqaq', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/084AlInshiqaq.mp3'}, {'id': '085', 'name': 'AlBurooj', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/085AlBurooj.mp3'}, {'id': '086', 'name': 'AtTariq', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/086AtTariq.mp3'}, {'id': '087', 'name': 'AlAala', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/087AlAala.mp3'}, {'id': '088', 'name': 'AlGhashia', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/088AlGhashia.mp3'}, {'id': '089', 'name': 'AlFajr', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/089AlFajr.mp3'}, {'id': '090', 'name': 'AlBalad', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/090AlBalad.mp3'}, {'id': '091', 'name': 'AshShams', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/091AshShams.mp3'}, {'id': '092', 'name': 'AlLail', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/092AlLail.mp3'}, {'id': '093', 'name': 'AdDuha', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/093AdDuha.mp3'}, {'id': '094', 'name': 'AlAnsharah', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/094AlAnsharah.mp3'}, {'id': '095', 'name': 'AtTeen', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/095AtTeen.mp3'}, {'id': '096', 'name': 'AlAlaq', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/096AlAlaq.mp3'}, {'id': '097', 'name': 'AlQadar', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/097AlQadar.mp3'}, {'id': '098', 'name': 'AlBayyanah', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/098AlBayyanah.mp3'}, {'id': '099', 'name': 'AlZalzalah', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/099AlZalzalah.mp3'}, {'id': '100', 'name': 'AlAdiat', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/100AlAdiat.mp3'}, {'id': '101', 'name': 'AlQariah', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/101AlQariah.mp3'}, {'id': '102', 'name': 'AtTakasur', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/102AtTakasur.mp3'}, {'id': '103', 'name': 'AlAsr', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/103AlAsr.mp3'}, {'id': '104', 'name': 'AlHumazah', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/104AlHumazah.mp3'}, {'id': '105', 'name': 'AlFeel', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/105AlFeel.mp3'}, {'id': '106', 'name': 'Quresh', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/106Quresh.mp3'}, {'id': '107', 'name': 'AlMaoon', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/107AlMaoon.mp3'}, {'id': '108', 'name': 'AlKausar', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/108AlKausar.mp3'}, {'id': '109', 'name': 'Alkafiroon', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/109Alkafiroon.mp3'}, {'id': '110', 'name': 'AnNasr', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/110AnNasr.mp3'}, {'id': '111', 'name': 'AlLahab', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/111AlLahab.mp3'}, {'id': '112', 'name': 'AlIkhlas', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/112AlIkhlas.mp3'}, {'id': '113', 'name': 'AlFalaq', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/113AlFalaq.mp3'}, {'id': '114', 'name': 'AnNaas', 'src': 'http://download1.quranurdu.com/Al_Quran_Basit _New/114AnNaas.mp3'}]


export const surahs = writable(links);

// @ts-ignore
export const surah = writable(links[0]);

export const action = writable('');
export const  player = writable(null);
export const  playing = writable(false);