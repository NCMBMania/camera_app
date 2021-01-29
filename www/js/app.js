const applicationKey = 'YOUR_APPLICATION_KEY';
const clientKey = 'YOUR_CLIENT_KEY';
const ncmb = new NCMB(applicationKey, clientKey);

// 写真をFileReaderで読み込む処理をPromise化
async function loadPhoto(photo) {
  return new Promise(res => {
    const reader = new FileReader();
    reader.onload = function(e) {
      res(e.target.result);
    }
    reader.readAsDataURL(photo);
  })
}
