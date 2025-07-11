
// This file contains the JavaScript code to fetch and display KPIs on the dashboard.

function atualizarKPIs() {

    $.ajax({
        url: 'http://localhost:8888/api/kpis',
        method: 'GET',
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

$(document).ready(function () {
    atualizarKPIs();
    setInterval(atualizarKPIs, 30000);
});
      
    