const applicationKey = '40706ed00ef83b9d2d107c90ebb20581341a9cbc3aae545b15df91925c1b20d8';
const clientKey = '7c521c4005bea3a644c5bb94a17f2ea16afeff5349e29cb9b367584912ae0d9e';
const ncmb = new NCMB(applicationKey, clientKey);

async function loadPhoto(photo) {
  return new Promise(res => {
    const reader = new FileReader();
    reader.onload = function(e) {
      res(e.target.result);
    }
    reader.readAsDataURL(photo);
  })
}
