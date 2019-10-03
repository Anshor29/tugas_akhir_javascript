function buat_login(){
  var elem = document.getElementById('x');
  elem.parentElement.removeChild(elem);
  var p = document.createElement('p');
  p.className = 'tulisan_login';
  p.innerHTML = 'SILAHKAN MENDAFTAR';
  var element = document.getElementsByTagName('div')[0];
  element.appendChild(p)
  var form = document.createElement('form');
  element.appendChild(form);
  var label = document.createElement('label');
  label.innerHTML = "Nama User";
  form.appendChild(label);
  var input_namauser = document.createElement('input');
  input_namauser.type = "text";
  input_namauser.name = "Username";
  input_namauser.value = "Nama User..";
  input_namauser.className = "form_login";
  form.appendChild(input_namauser);
  var label2 = document.createElement('label');
  label2.innerHTML = "Nomor Handphone";
  form.appendChild(label2);
  var input_hp = document.createElement('input');
  input_hp.type = "text";
  input_hp.name = "phone";
  input_hp.value = "Nomor Handphone..";
  input_hp.className = "form_login";
  form.appendChild(input_hp);

  var label3 = document.createElement('label');
  label3.innerHTML = "Username";
  form.appendChild(label3);
  var input_username = document.createElement('input');
  input_username.type = "text";
  input_username.name = "username";
  input_username.value = "Username atau email..";
  input_username.className = "form_login";
  form.appendChild(input_username);

  var label3 = document.createElement('label');
  label3.innerHTML = "Password";
  form.appendChild(label3);
  var input_password = document.createElement('input');
  input_password.type = "text";
  input_password.name = "password";
  input_password.value = "Password..";
  input_password.className = "form_login";
  form.appendChild(input_password);

  var tombol = document.createElement('input');
  tombol.type = "Submit";
  tombol.className = "tombol_login"
  form.appendChild(tombol);



}
