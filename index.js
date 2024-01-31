const mahasiswaNim = '20220040229';
const updateData ={
    nama: 'Naufa Nuryanto',
    gender: 'l',
    prodi: 'TI',
    alamat: 'Desa Sukajaya'
};

fetch('http://localhost:3000/mahasiswa/${mahasiswaNim}', {
    method: 'PUT',
    header: {
        'Content-Type': 'application/json'
    },
    body: json.stringyfy(updatedData)
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('error', error));