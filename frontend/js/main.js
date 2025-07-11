
// This file contains the JavaScript code to fetch and display KPIs on the dashboard.

function atualizarKPIs() {

    $.ajax({
        url: 'http://localhost:8888/api/kpis',
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        success: function (data) {        
    $('#kpi-cards .col-lg-3.col-6').not('#kpi-modelo').remove();
    const kpiModelo = $('#kpi-modelo');
    data.sort(() => Math.random() - 0.5);
    data.forEach(function (kpi) {
        const newCard = kpiModelo.clone();
        newCard.removeAttr('id').removeAttr('hidden');
        newCard.find('.inner h3').text(kpi.valor);
        newCard.find('.inner p').text(kpi.titulo);
        newCard.find('.inner h4').text(kpi.variacao_percentual + '%');
        if (kpi.variacao_percentual > 0) {
        newCard.find('.icon-up').show();
        newCard.find('.icon-down').hide();
        newCard.find('.inner h4').css('color', '#009921');
        } else if (kpi.variacao_percentual < 0) {
        newCard.find('.icon-up').hide();
        newCard.find('.icon-down').show();
        newCard.find('.inner h4').css('color', '#ff0000');
        } else {
        newCard.find('.icon-up, .icon-down').hide();
        newCard.find('.inner h4').css('color', '#333');
        }
        $('#kpi-cards').append(newCard);
    });
        },
        error: function (error) {
            console.error('Erro ao buscar os KPIs:', error);
        }
    });
}
function carregarUsuario() {
    const token = localStorage.getItem('token');
    if (!token) {
        window.location.href = 'login.html'; 
    }
    $.ajax({
        url: 'http://localhost:8888/api/user',
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        },
        success: function (data) {            
            $('#user-name').text(data.name);

        },
        error: function (error) {
            console.error('Erro ao buscar os dados do usuário:', error);
        }
    });
}

function logout() {
    localStorage.removeItem('token');
    window.location.href = 'login.html'; 
}
$(document).on('click', '[data-lte-toggle="logout"]', function (e) {
    console.log('Logout clicked');
    e.preventDefault();
    logout();
});

$(document).ready(function () {

    const token = localStorage.getItem('token');
    if (!token) {
        window.location.href = 'login.html'; 
    }
    carregarUsuario();
    atualizarKPIs();
    setInterval(atualizarKPIs, 30000);

});
      
    