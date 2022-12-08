export default function addRow() {
  const name = $('#name').val();
  const cpf = $('#cpf').val();
  const email = $('#email').val();
  const phone = $('#phone').val();
  const cep = $('#cep').val();
  const andress = $('#andress').val();
  const number = $('#number').val();
  const complement = $('#complement').val();
  const district = $('#district').val();
  const city = $('#city').val();
  const state = $('#state').val();

  const line = $('.table-content tr').length;

  const row =
    '<tr id="l-' +
    line +
    '"><td class="name">' +
    name +
    '</td><td class="cpf">' +
    cpf +
    '</td><td class="email">' +
    email +
    '</td><td class="phone">' +
    phone +
    '</td><td class="cep">' +
    cep +
    '</td><td class="andress">' +
    andress +
    '</td><td class="number">' +
    number +
    '</td><td class="complement">' +
    complement +
    '</td><td class="district">' +
    district +
    '</td><td class="city">' +
    city +
    '</td><td class="state">' +
    state +
    '</td><td>' +
    '<img id="' +
    line +
    '" src="./img/edit.png" width="30" class="editar" " />' +
    '<img id="' +
    line +
    '" src="./img/remove.png" width="30" class="remover" " />' +
    '</td></tr>';

  $('.table-content').append(row);
  $('#form input').val('');
}
