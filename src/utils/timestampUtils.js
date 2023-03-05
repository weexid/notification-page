// timestamp di bawah berformat unix timestamp
export function konversiTanggal(timestamp) {
    const satuanWaktu = {
      year: 31536000,
      month: 2592000,
      week: 604800,
      day: 86400,
      h: 3600,
      m: 60,
      s: 1
    };
  
    const waktuSekarang = Math.floor(Date.now() / 1000);
    const selisihDetik = waktuSekarang - timestamp;
  
    if (selisihDetik < 5) {
      return "baru saja";
    }
  
    let selisihWaktu = selisihDetik;
    let satuan = "";
    let jumlahSatuan = 0;
  
    for (let key in satuanWaktu) {
      jumlahSatuan = Math.floor(selisihWaktu / satuanWaktu[key]);
      if (jumlahSatuan >= 1) {
        satuan = key;
        break;
      }
    }
    const formatSatuan = ['s', 'm', 'h']
    if (jumlahSatuan > 1 && !formatSatuan.includes(satuan)) {
      satuan = satuan + "s";
    }
  
    return `${jumlahSatuan}${satuan} ago`;
  }
  
  
  // parameter timestamp str
  export function konversiTimestamp(timestampStr) {
    const timestampUnix = Math.floor(new Date(timestampStr).getTime() / 1000);
    return timestampUnix;
  }
  
  export function generateRandomDate() {
    const start = new Date(2010, 0, 1); // Tanggal awal (1 Januari 2010)
    const end = new Date(); // Tanggal saat ini
    const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return randomDate;
  }