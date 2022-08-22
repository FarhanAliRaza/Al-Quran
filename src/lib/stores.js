import { writable } from "svelte/store";


let links = [{'id': '001', 'name': 'AlFatiha', 'src': 'https://159.65.236.102/media/001AlFatiha.mp3'}, {'id': '002', 'name': 'AlBaqara', 'src': 'https://159.65.236.102/surah/002AlBaqara.mp3'}, {'id': '003', 'name': 'AalImran', 'src': 'https://159.65.236.102/surah/003AalImran.mp3'}, {'id': '004', 'name': 'AnNisa', 'src': 'https://159.65.236.102/surah/004AnNisa.mp3'}, {'id': '005', 'name': 'AlMaeda', 'src': 'https://159.65.236.102/surah/005AlMaeda.mp3'}, {'id': '006', 'name': 'AlAnaam', 'src': 'https://159.65.236.102/surah/006AlAnaam.mp3'}, {'id': '007', 'name': 'AlAaraf', 'src': 'https://159.65.236.102/surah/007AlAaraf.mp3'}, {'id': '008', 'name': 'AlAnfaal', 'src': 'https://159.65.236.102/surah/008AlAnfaal.mp3'}, {'id': '009', 'name': 'AtTauba', 'src': 'https://159.65.236.102/surah/009AtTauba.mp3'}, {'id': '010', 'name': 'Younus', 'src': 'https://159.65.236.102/surah/010Younus.mp3'}, {'id': '011', 'name': 'Hud', 'src': 'https://159.65.236.102/surah/011Hud.mp3'}, {'id': '012', 'name': 'Yousef', 'src': 'https://159.65.236.102/surah/012Yousef.mp3'}, {'id': '013', 'name': 'ArRaad', 'src': 'https://159.65.236.102/surah/013ArRaad.mp3'}, {'id': '014', 'name': 'Ibrahim', 'src': 'https://159.65.236.102/surah/014Ibrahim.mp3'}, {'id': '015', 'name': 'AlHijr', 'src': 'https://159.65.236.102/surah/015AlHijr.mp3'}, {'id': '016', 'name': 'AnNahl', 'src': 'https://159.65.236.102/surah/016AnNahl.mp3'}, {'id': '017', 'name': 'AlIsra', 'src': 'https://159.65.236.102/surah/017AlIsra.mp3'}, {'id': '018', 'name': 'AlKahaf', 'src': 'https://159.65.236.102/surah/018AlKahaf.mp3'}, {'id': '019', 'name': 'Maryam', 'src': 'https://159.65.236.102/surah/019Maryam.mp3'}, {'id': '020', 'name': 'Taaha', 'src': 'https://159.65.236.102/surah/020Taaha.mp3'}, {'id': '021', 'name': 'AlAnbia', 'src': 'https://159.65.236.102/surah/021AlAnbia.mp3'}, {'id': '022', 'name': 'AlHajj', 'src': 'https://159.65.236.102/surah/022AlHajj.mp3'}, {'id': '023', 'name': 'AlMominoon', 'src': 'https://159.65.236.102/surah/023AlMominoon.mp3'}, {'id': '024', 'name': 'AnNoor', 'src': 'https://159.65.236.102/surah/024AnNoor.mp3'}, {'id': '025', 'name': 'AlFurqan', 'src': 'https://159.65.236.102/surah/025AlFurqan.mp3'}, {'id': '026', 'name': 'AshShuara', 'src': 'https://159.65.236.102/surah/026AshShuara.mp3'}, {'id': '027', 'name': 'AnNamal', 'src': 'https://159.65.236.102/surah/027AnNamal.mp3'}, {'id': '028', 'name': 'AlQasas', 'src': 'https://159.65.236.102/surah/028AlQasas.mp3'}, {'id': '029', 'name': 'AlAnkaboot', 'src': 'https://159.65.236.102/surah/029AlAnkaboot.mp3'}, {'id': '030', 'name': 'AlAnkaboot', 'src': 'https://159.65.236.102/surah/030AlAnkaboot.mp3'}, {'id': '031', 'name': 'Luqman', 'src': 'https://159.65.236.102/surah/031Luqman.mp3'}, {'id': '032', 'name': 'AsSajda', 'src': 'https://159.65.236.102/surah/032AsSajda.mp3'}, {'id': '033', 'name': 'AlAhzab', 'src': 'https://159.65.236.102/surah/033AlAhzab.mp3'}, {'id': '034', 'name': 'Saba', 'src': 'https://159.65.236.102/surah/034Saba.mp3'}, {'id': '035', 'name': 'Faatir', 'src': 'https://159.65.236.102/surah/035Faatir.mp3'}, {'id': '036', 'name': 'Yaseen', 'src': 'https://159.65.236.102/surah/036Yaseen.mp3'}, {'id': '037', 'name': 'AsSaffat', 'src': 'https://159.65.236.102/surah/037AsSaffat.mp3'}, {'id': '038', 'name': 'Saad', 'src': 'https://159.65.236.102/surah/038Saad.mp3'}, {'id': '039', 'name': 'AzZumur', 'src': 'https://159.65.236.102/surah/039AzZumur.mp3'}, {'id': '040', 'name': 'AlMomin', 'src': 'https://159.65.236.102/surah/040AlMomin.mp3'}, {'id': '041', 'name': 'HaMimSajda', 'src': 'https://159.65.236.102/surah/041HaMimSajda.mp3'}, {'id': '042', 'name': 'AshShura', 'src': 'https://159.65.236.102/surah/042AshShura.mp3'}, {'id': '043', 'name': 'AzZukhruf', 'src': 'https://159.65.236.102/surah/043AzZukhruf.mp3'}, {'id': '044', 'name': 'AdDukhan', 'src': 'https://159.65.236.102/surah/044AdDukhan.mp3'}, {'id': '045', 'name': 'AlJasia', 'src': 'https://159.65.236.102/surah/045AlJasia.mp3'}, {'id': '046', 'name': 'AlAhqaf', 'src': 'https://159.65.236.102/surah/046AlAhqaf.mp3'}, {'id': '047', 'name': 'Muhammad', 'src': 'https://159.65.236.102/surah/047Muhammad.mp3'}, {'id': '048', 'name': 'AlFath', 'src': 'https://159.65.236.102/surah/048AlFath.mp3'}, {'id': '049', 'name': 'AlHujrat', 'src': 'https://159.65.236.102/surah/049AlHujrat.mp3'}, {'id': '050', 'name': 'Qaf', 'src': 'https://159.65.236.102/surah/050Qaf.mp3'}, {'id': '051', 'name': 'AzZariate', 'src': 'https://159.65.236.102/surah/051AzZariate.mp3'}, {'id': '052', 'name': 'AtToor', 'src': 'https://159.65.236.102/surah/052AtToor.mp3'}, {'id': '053', 'name': 'AnNajm', 'src': 'https://159.65.236.102/surah/053AnNajm.mp3'}, {'id': '054', 'name': 'AlQamar', 'src': 'https://159.65.236.102/surah/054AlQamar.mp3'}, {'id': '055', 'name': 'ArRahman', 'src': 'https://159.65.236.102/surah/055ArRahman.mp3'}, {'id': '056', 'name': 'AlWaqiah', 'src': 'https://159.65.236.102/surah/056AlWaqiah.mp3'}, {'id': '057', 'name': 'AlHadid', 'src': 'https://159.65.236.102/surah/057AlHadid.mp3'}, {'id': '058', 'name': 'AlMujadilah', 'src': 'https://159.65.236.102/surah/058AlMujadilah.mp3'}, {'id': '059', 'name': 'AlHashr', 'src': 'https://159.65.236.102/surah/059AlHashr.mp3'}, {'id': '060', 'name': 'AlMumtahina', 'src': 'https://159.65.236.102/surah/060AlMumtahina.mp3'}, {'id': '061', 'name': 'AsSaff', 'src': 'https://159.65.236.102/surah/061AsSaff.mp3'}, {'id': '062', 'name': 'AlJuma', 'src': 'https://159.65.236.102/surah/062AlJuma.mp3'}, {'id': '063', 'name': 'AlMunafiqoon', 'src': 'https://159.65.236.102/surah/063AlMunafiqoon.mp3'}, {'id': '064', 'name': 'AtTaghabun', 'src': 'https://159.65.236.102/surah/064AtTaghabun.mp3'}, {'id': '065', 'name': 'AtTalaq', 'src': 'https://159.65.236.102/surah/065AtTalaq.mp3'}, {'id': '066', 'name': 'AtTahrim', 'src': 'https://159.65.236.102/surah/066AtTahrim.mp3'}, {'id': '067', 'name': 'AlMulk', 'src': 'https://159.65.236.102/surah/067AlMulk.mp3'}, {'id': '068', 'name': 'AlQalam', 'src': 'https://159.65.236.102/surah/068AlQalam.mp3'}, {'id': '069', 'name': 'AlHaqqa', 'src': 'https://159.65.236.102/surah/069AlHaqqa.mp3'}, {'id': '070', 'name': 'AlMaarij', 'src': 'https://159.65.236.102/surah/070AlMaarij.mp3'}, {'id': '071', 'name': 'Nooh', 'src': 'https://159.65.236.102/surah/071Nooh.mp3'}, {'id': '072', 'name': 'AlJin', 'src': 'https://159.65.236.102/surah/072AlJin.mp3'}, {'id': '073', 'name': 'AlMuzammil', 'src': 'https://159.65.236.102/surah/073AlMuzammil.mp3'}, {'id': '074', 'name': 'AlMudassir', 'src': 'https://159.65.236.102/surah/074AlMudassir.mp3'}, {'id': '075', 'name': 'AlQiamah', 'src': 'https://159.65.236.102/surah/075AlQiamah.mp3'}, {'id': '076', 'name': 'AdDahr', 'src': 'https://159.65.236.102/surah/076AdDahr.mp3'}, {'id': '077', 'name': 'AlMursalat', 'src': 'https://159.65.236.102/surah/077AlMursalat.mp3'}, {'id': '078', 'name': 'AnNaba', 'src': 'https://159.65.236.102/surah/078AnNaba.mp3'}, {'id': '079', 'name': 'AnNaziat', 'src': 'https://159.65.236.102/surah/079AnNaziat.mp3'}, {'id': '080', 'name': 'Abasa', 'src': 'https://159.65.236.102/surah/080Abasa.mp3'}, {'id': '081', 'name': 'AtTakweer', 'src': 'https://159.65.236.102/surah/081AtTakweer.mp3'}, {'id': '082', 'name': 'AlInfitar', 'src': 'https://159.65.236.102/surah/082AlInfitar.mp3'}, {'id': '083', 'name': 'AlMutaffifin', 'src': 'https://159.65.236.102/surah/083AlMutaffifin.mp3'}, {'id': '084', 'name': 'AlInshiqaq', 'src': 'https://159.65.236.102/surah/084AlInshiqaq.mp3'}, {'id': '085', 'name': 'AlBurooj', 'src': 'https://159.65.236.102/surah/085AlBurooj.mp3'}, {'id': '086', 'name': 'AtTariq', 'src': 'https://159.65.236.102/surah/086AtTariq.mp3'}, {'id': '087', 'name': 'AlAala', 'src': 'https://159.65.236.102/surah/087AlAala.mp3'}, {'id': '088', 'name': 'AlGhashia', 'src': 'https://159.65.236.102/surah/088AlGhashia.mp3'}, {'id': '089', 'name': 'AlFajr', 'src': 'https://159.65.236.102/surah/089AlFajr.mp3'}, {'id': '090', 'name': 'AlBalad', 'src': 'https://159.65.236.102/surah/090AlBalad.mp3'}, {'id': '091', 'name': 'AshShams', 'src': 'https://159.65.236.102/surah/091AshShams.mp3'}, {'id': '092', 'name': 'AlLail', 'src': 'https://159.65.236.102/surah/092AlLail.mp3'}, {'id': '093', 'name': 'AdDuha', 'src': 'https://159.65.236.102/surah/093AdDuha.mp3'}, {'id': '094', 'name': 'AlAnsharah', 'src': 'https://159.65.236.102/surah/094AlAnsharah.mp3'}, {'id': '095', 'name': 'AtTeen', 'src': 'https://159.65.236.102/surah/095AtTeen.mp3'}, {'id': '096', 'name': 'AlAlaq', 'src': 'https://159.65.236.102/surah/096AlAlaq.mp3'}, {'id': '097', 'name': 'AlQadar', 'src': 'https://159.65.236.102/surah/097AlQadar.mp3'}, {'id': '098', 'name': 'AlBayyanah', 'src': 'https://159.65.236.102/surah/098AlBayyanah.mp3'}, {'id': '099', 'name': 'AlZalzalah', 'src': 'https://159.65.236.102/surah/099AlZalzalah.mp3'}, {'id': '100', 'name': 'AlAdiat', 'src': 'https://159.65.236.102/surah/100AlAdiat.mp3'}, {'id': '101', 'name': 'AlQariah', 'src': 'https://159.65.236.102/surah/101AlQariah.mp3'}, {'id': '102', 'name': 'AtTakasur', 'src': 'https://159.65.236.102/surah/102AtTakasur.mp3'}, {'id': '103', 'name': 'AlAsr', 'src': 'https://159.65.236.102/surah/103AlAsr.mp3'}, {'id': '104', 'name': 'AlHumazah', 'src': 'https://159.65.236.102/surah/104AlHumazah.mp3'}, {'id': '105', 'name': 'AlFeel', 'src': 'https://159.65.236.102/surah/105AlFeel.mp3'}, {'id': '106', 'name': 'Quresh', 'src': 'https://159.65.236.102/surah/106Quresh.mp3'}, {'id': '107', 'name': 'AlMaoon', 'src': 'https://159.65.236.102/surah/107AlMaoon.mp3'}, {'id': '108', 'name': 'AlKausar', 'src': 'https://159.65.236.102/surah/108AlKausar.mp3'}, {'id': '109', 'name': 'Alkafiroon', 'src': 'https://159.65.236.102/surah/109Alkafiroon.mp3'}, {'id': '110', 'name': 'AnNasr', 'src': 'https://159.65.236.102/surah/110AnNasr.mp3'}, {'id': '111', 'name': 'AlLahab', 'src': 'https://159.65.236.102/surah/111AlLahab.mp3'}, {'id': '112', 'name': 'AlIkhlas', 'src': 'https://159.65.236.102/surah/112AlIkhlas.mp3'}, {'id': '113', 'name': 'AlFalaq', 'src': 'https://159.65.236.102/surah/113AlFalaq.mp3'}, {'id': '114', 'name': 'AnNaas', 'src': 'https://159.65.236.102/surah/114AnNaas.mp3'}]


export const surahs = writable(links);

// @ts-ignore
export const surah = writable(links[0]);

export const action = writable('');
export const  player = writable(null);
export const  playing = writable(false);