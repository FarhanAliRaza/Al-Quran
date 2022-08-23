import { writable } from "svelte/store";


let links = [{'id': '001', 'name': 'AlFatiha', 'src': 'https://app.alquranlisten.live/media/001AlFatiha.mp3'}, {'id': '002', 'name': 'AlBaqara', 'src': 'https://app.alquranlisten.live/media/002AlBaqara.mp3'}, {'id': '003', 'name': 'AalImran', 'src': 'https://app.alquranlisten.live/media/003AalImran.mp3'}, {'id': '004', 'name': 'AnNisa', 'src': 'https://app.alquranlisten.live/media/004AnNisa.mp3'}, {'id': '005', 'name': 'AlMaeda', 'src': 'https://app.alquranlisten.live/media/005AlMaeda.mp3'}, {'id': '006', 'name': 'AlAnaam', 'src': 'https://app.alquranlisten.live/media/006AlAnaam.mp3'}, {'id': '007', 'name': 'AlAaraf', 'src': 'https://app.alquranlisten.live/media/007AlAaraf.mp3'}, {'id': '008', 'name': 'AlAnfaal', 'src': 'https://app.alquranlisten.live/media/008AlAnfaal.mp3'}, {'id': '009', 'name': 'AtTauba', 'src': 'https://app.alquranlisten.live/media/009AtTauba.mp3'}, {'id': '010', 'name': 'Younus', 'src': 'https://app.alquranlisten.live/media/010Younus.mp3'}, {'id': '011', 'name': 'Hud', 'src': 'https://app.alquranlisten.live/media/011Hud.mp3'}, {'id': '012', 'name': 'Yousef', 'src': 'https://app.alquranlisten.live/media/012Yousef.mp3'}, {'id': '013', 'name': 'ArRaad', 'src': 'https://app.alquranlisten.live/media/013ArRaad.mp3'}, {'id': '014', 'name': 'Ibrahim', 'src': 'https://app.alquranlisten.live/media/014Ibrahim.mp3'}, {'id': '015', 'name': 'AlHijr', 'src': 'https://app.alquranlisten.live/media/015AlHijr.mp3'}, {'id': '016', 'name': 'AnNahl', 'src': 'https://app.alquranlisten.live/media/016AnNahl.mp3'}, {'id': '017', 'name': 'AlIsra', 'src': 'https://app.alquranlisten.live/media/017AlIsra.mp3'}, {'id': '018', 'name': 'AlKahaf', 'src': 'https://app.alquranlisten.live/media/018AlKahaf.mp3'}, {'id': '019', 'name': 'Maryam', 'src': 'https://app.alquranlisten.live/media/019Maryam.mp3'}, {'id': '020', 'name': 'Taaha', 'src': 'https://app.alquranlisten.live/media/020Taaha.mp3'}, {'id': '021', 'name': 'AlAnbia', 'src': 'https://app.alquranlisten.live/media/021AlAnbia.mp3'}, {'id': '022', 'name': 'AlHajj', 'src': 'https://app.alquranlisten.live/media/022AlHajj.mp3'}, {'id': '023', 'name': 'AlMominoon', 'src': 'https://app.alquranlisten.live/media/023AlMominoon.mp3'}, {'id': '024', 'name': 'AnNoor', 'src': 'https://app.alquranlisten.live/media/024AnNoor.mp3'}, {'id': '025', 'name': 'AlFurqan', 'src': 'https://app.alquranlisten.live/media/025AlFurqan.mp3'}, {'id': '026', 'name': 'AshShuara', 'src': 'https://app.alquranlisten.live/media/026AshShuara.mp3'}, {'id': '027', 'name': 'AnNamal', 'src': 'https://app.alquranlisten.live/media/027AnNamal.mp3'}, {'id': '028', 'name': 'AlQasas', 'src': 'https://app.alquranlisten.live/media/028AlQasas.mp3'}, {'id': '029', 'name': 'AlAnkaboot', 'src': 'https://app.alquranlisten.live/media/029AlAnkaboot.mp3'}, {'id': '030', 'name': 'AlAnkaboot', 'src': 'https://app.alquranlisten.live/media/030AlAnkaboot.mp3'}, {'id': '031', 'name': 'Luqman', 'src': 'https://app.alquranlisten.live/media/031Luqman.mp3'}, {'id': '032', 'name': 'AsSajda', 'src': 'https://app.alquranlisten.live/media/032AsSajda.mp3'}, {'id': '033', 'name': 'AlAhzab', 'src': 'https://app.alquranlisten.live/media/033AlAhzab.mp3'}, {'id': '034', 'name': 'Saba', 'src': 'https://app.alquranlisten.live/media/034Saba.mp3'}, {'id': '035', 'name': 'Faatir', 'src': 'https://app.alquranlisten.live/media/035Faatir.mp3'}, {'id': '036', 'name': 'Yaseen', 'src': 'https://app.alquranlisten.live/media/036Yaseen.mp3'}, {'id': '037', 'name': 'AsSaffat', 'src': 'https://app.alquranlisten.live/media/037AsSaffat.mp3'}, {'id': '038', 'name': 'Saad', 'src': 'https://app.alquranlisten.live/media/038Saad.mp3'}, {'id': '039', 'name': 'AzZumur', 'src': 'https://app.alquranlisten.live/media/039AzZumur.mp3'}, {'id': '040', 'name': 'AlMomin', 'src': 'https://app.alquranlisten.live/media/040AlMomin.mp3'}, {'id': '041', 'name': 'HaMimSajda', 'src': 'https://app.alquranlisten.live/media/041HaMimSajda.mp3'}, {'id': '042', 'name': 'AshShura', 'src': 'https://app.alquranlisten.live/media/042AshShura.mp3'}, {'id': '043', 'name': 'AzZukhruf', 'src': 'https://app.alquranlisten.live/media/043AzZukhruf.mp3'}, {'id': '044', 'name': 'AdDukhan', 'src': 'https://app.alquranlisten.live/media/044AdDukhan.mp3'}, {'id': '045', 'name': 'AlJasia', 'src': 'https://app.alquranlisten.live/media/045AlJasia.mp3'}, {'id': '046', 'name': 'AlAhqaf', 'src': 'https://app.alquranlisten.live/media/046AlAhqaf.mp3'}, {'id': '047', 'name': 'Muhammad', 'src': 'https://app.alquranlisten.live/media/047Muhammad.mp3'}, {'id': '048', 'name': 'AlFath', 'src': 'https://app.alquranlisten.live/media/048AlFath.mp3'}, {'id': '049', 'name': 'AlHujrat', 'src': 'https://app.alquranlisten.live/media/049AlHujrat.mp3'}, {'id': '050', 'name': 'Qaf', 'src': 'https://app.alquranlisten.live/media/050Qaf.mp3'}, {'id': '051', 'name': 'AzZariate', 'src': 'https://app.alquranlisten.live/media/051AzZariate.mp3'}, {'id': '052', 'name': 'AtToor', 'src': 'https://app.alquranlisten.live/media/052AtToor.mp3'}, {'id': '053', 'name': 'AnNajm', 'src': 'https://app.alquranlisten.live/media/053AnNajm.mp3'}, {'id': '054', 'name': 'AlQamar', 'src': 'https://app.alquranlisten.live/media/054AlQamar.mp3'}, {'id': '055', 'name': 'ArRahman', 'src': 'https://app.alquranlisten.live/media/055ArRahman.mp3'}, {'id': '056', 'name': 'AlWaqiah', 'src': 'https://app.alquranlisten.live/media/056AlWaqiah.mp3'}, {'id': '057', 'name': 'AlHadid', 'src': 'https://app.alquranlisten.live/media/057AlHadid.mp3'}, {'id': '058', 'name': 'AlMujadilah', 'src': 'https://app.alquranlisten.live/media/058AlMujadilah.mp3'}, {'id': '059', 'name': 'AlHashr', 'src': 'https://app.alquranlisten.live/media/059AlHashr.mp3'}, {'id': '060', 'name': 'AlMumtahina', 'src': 'https://app.alquranlisten.live/media/060AlMumtahina.mp3'}, {'id': '061', 'name': 'AsSaff', 'src': 'https://app.alquranlisten.live/media/061AsSaff.mp3'}, {'id': '062', 'name': 'AlJuma', 'src': 'https://app.alquranlisten.live/media/062AlJuma.mp3'}, {'id': '063', 'name': 'AlMunafiqoon', 'src': 'https://app.alquranlisten.live/media/063AlMunafiqoon.mp3'}, {'id': '064', 'name': 'AtTaghabun', 'src': 'https://app.alquranlisten.live/media/064AtTaghabun.mp3'}, {'id': '065', 'name': 'AtTalaq', 'src': 'https://app.alquranlisten.live/media/065AtTalaq.mp3'}, {'id': '066', 'name': 'AtTahrim', 'src': 'https://app.alquranlisten.live/media/066AtTahrim.mp3'}, {'id': '067', 'name': 'AlMulk', 'src': 'https://app.alquranlisten.live/media/067AlMulk.mp3'}, {'id': '068', 'name': 'AlQalam', 'src': 'https://app.alquranlisten.live/media/068AlQalam.mp3'}, {'id': '069', 'name': 'AlHaqqa', 'src': 'https://app.alquranlisten.live/media/069AlHaqqa.mp3'}, {'id': '070', 'name': 'AlMaarij', 'src': 'https://app.alquranlisten.live/media/070AlMaarij.mp3'}, {'id': '071', 'name': 'Nooh', 'src': 'https://app.alquranlisten.live/media/071Nooh.mp3'}, {'id': '072', 'name': 'AlJin', 'src': 'https://app.alquranlisten.live/media/072AlJin.mp3'}, {'id': '073', 'name': 'AlMuzammil', 'src': 'https://app.alquranlisten.live/media/073AlMuzammil.mp3'}, {'id': '074', 'name': 'AlMudassir', 'src': 'https://app.alquranlisten.live/media/074AlMudassir.mp3'}, {'id': '075', 'name': 'AlQiamah', 'src': 'https://app.alquranlisten.live/media/075AlQiamah.mp3'}, {'id': '076', 'name': 'AdDahr', 'src': 'https://app.alquranlisten.live/media/076AdDahr.mp3'}, {'id': '077', 'name': 'AlMursalat', 'src': 'https://app.alquranlisten.live/media/077AlMursalat.mp3'}, {'id': '078', 'name': 'AnNaba', 'src': 'https://app.alquranlisten.live/media/078AnNaba.mp3'}, {'id': '079', 'name': 'AnNaziat', 'src': 'https://app.alquranlisten.live/media/079AnNaziat.mp3'}, {'id': '080', 'name': 'Abasa', 'src': 'https://app.alquranlisten.live/media/080Abasa.mp3'}, {'id': '081', 'name': 'AtTakweer', 'src': 'https://app.alquranlisten.live/media/081AtTakweer.mp3'}, {'id': '082', 'name': 'AlInfitar', 'src': 'https://app.alquranlisten.live/media/082AlInfitar.mp3'}, {'id': '083', 'name': 'AlMutaffifin', 'src': 'https://app.alquranlisten.live/media/083AlMutaffifin.mp3'}, {'id': '084', 'name': 'AlInshiqaq', 'src': 'https://app.alquranlisten.live/media/084AlInshiqaq.mp3'}, {'id': '085', 'name': 'AlBurooj', 'src': 'https://app.alquranlisten.live/media/085AlBurooj.mp3'}, {'id': '086', 'name': 'AtTariq', 'src': 'https://app.alquranlisten.live/media/086AtTariq.mp3'}, {'id': '087', 'name': 'AlAala', 'src': 'https://app.alquranlisten.live/media/087AlAala.mp3'}, {'id': '088', 'name': 'AlGhashia', 'src': 'https://app.alquranlisten.live/media/088AlGhashia.mp3'}, {'id': '089', 'name': 'AlFajr', 'src': 'https://app.alquranlisten.live/media/089AlFajr.mp3'}, {'id': '090', 'name': 'AlBalad', 'src': 'https://app.alquranlisten.live/media/090AlBalad.mp3'}, {'id': '091', 'name': 'AshShams', 'src': 'https://app.alquranlisten.live/media/091AshShams.mp3'}, {'id': '092', 'name': 'AlLail', 'src': 'https://app.alquranlisten.live/media/092AlLail.mp3'}, {'id': '093', 'name': 'AdDuha', 'src': 'https://app.alquranlisten.live/media/093AdDuha.mp3'}, {'id': '094', 'name': 'AlAnsharah', 'src': 'https://app.alquranlisten.live/media/094AlAnsharah.mp3'}, {'id': '095', 'name': 'AtTeen', 'src': 'https://app.alquranlisten.live/media/095AtTeen.mp3'}, {'id': '096', 'name': 'AlAlaq', 'src': 'https://app.alquranlisten.live/media/096AlAlaq.mp3'}, {'id': '097', 'name': 'AlQadar', 'src': 'https://app.alquranlisten.live/media/097AlQadar.mp3'}, {'id': '098', 'name': 'AlBayyanah', 'src': 'https://app.alquranlisten.live/media/098AlBayyanah.mp3'}, {'id': '099', 'name': 'AlZalzalah', 'src': 'https://app.alquranlisten.live/media/099AlZalzalah.mp3'}, {'id': '100', 'name': 'AlAdiat', 'src': 'https://app.alquranlisten.live/media/100AlAdiat.mp3'}, {'id': '101', 'name': 'AlQariah', 'src': 'https://app.alquranlisten.live/media/101AlQariah.mp3'}, {'id': '102', 'name': 'AtTakasur', 'src': 'https://app.alquranlisten.live/media/102AtTakasur.mp3'}, {'id': '103', 'name': 'AlAsr', 'src': 'https://app.alquranlisten.live/media/103AlAsr.mp3'}, {'id': '104', 'name': 'AlHumazah', 'src': 'https://app.alquranlisten.live/media/104AlHumazah.mp3'}, {'id': '105', 'name': 'AlFeel', 'src': 'https://app.alquranlisten.live/media/105AlFeel.mp3'}, {'id': '106', 'name': 'Quresh', 'src': 'https://app.alquranlisten.live/media/106Quresh.mp3'}, {'id': '107', 'name': 'AlMaoon', 'src': 'https://app.alquranlisten.live/media/107AlMaoon.mp3'}, {'id': '108', 'name': 'AlKausar', 'src': 'https://app.alquranlisten.live/media/108AlKausar.mp3'}, {'id': '109', 'name': 'Alkafiroon', 'src': 'https://app.alquranlisten.live/media/109Alkafiroon.mp3'}, {'id': '110', 'name': 'AnNasr', 'src': 'https://app.alquranlisten.live/media/110AnNasr.mp3'}, {'id': '111', 'name': 'AlLahab', 'src': 'https://app.alquranlisten.live/media/111AlLahab.mp3'}, {'id': '112', 'name': 'AlIkhlas', 'src': 'https://app.alquranlisten.live/media/112AlIkhlas.mp3'}, {'id': '113', 'name': 'AlFalaq', 'src': 'https://app.alquranlisten.live/media/113AlFalaq.mp3'}, {'id': '114', 'name': 'AnNaas', 'src': 'https://app.alquranlisten.live/media/114AnNaas.mp3'}]


export const surahs = writable(links);

// @ts-ignore
export const surah = writable(links[0]);

export const action = writable('');
export const  player = writable(null);
export const  playing = writable(false);