$.support.cors = true;

$(document).ready(
    function () {
        GETUsers();
    }
)
function GETUsers() {
    $.ajax({
        type: 'GET',
        url: 'http://177.38.236.137:9000/users',
        success: function (data) {
            $.each(data, function (i, user) {
                $('#tabela_user').append(
                    '<tr>' +
                        '<td>'+i+'</td>' +
                        '<td>'+user.guuid+'</td>' +
                        '<td>'+user.name+'</td>' +
                        '<td>'+user.cpf+'</td> ' +
                        '<td>'+user.occupation+'</td>' +
                    '</tr>'

                )
                console.log(i);
                console.log(user.name);
            })
        },
        error: function (data) {
            console.log(data);
        }
    })
}