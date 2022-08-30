'use strict'

window.onload = () => {

    const inserirZero = time => time < 10 ? `0${time}` : time;

    const getSemana = function(time) {
        switch(time) {
            case 0:
                return 'Domingo';

            case 1:
                return 'Segunda-feira';

            case 2:
                return 'Terça-feira';

            case 3:
                return 'Quarta-feira';

            case 4:
                return 'Quinta-feira';

            case 5:
                return 'Sexta-feira';

            case 6:
                return 'Sábado';

            default:
                return 'Erro ao capturar o dia da semana';
                break;
        }
    };

    const getMes = function(time) {
        const meses = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro');
        return meses[time];
    };

    const message = function(time) {
        time = Number.parseInt(time);

        if(time < 6) {
            return 'Boa madrugada!'
        }

        if(time < 12) {
            return 'Bom dia!';
        }

        if(time < 18) {
            return 'Boa tarde!';
        }

        if(time < 23) {
            return 'Boa noite!'
        }
    };

    setInterval(function() {
        const hora = window.document.getElementById('hora');
        const minuto = window.document.getElementById('minuto');
        const segundo = window.document.getElementById('segundo');
        const msg = window.document.getElementById('msg');
        const dataText = window.document.getElementById('data');

        const dataTime = new Date();
        const getHora = inserirZero(dataTime.getHours());
        const getMinuto = inserirZero(dataTime.getMinutes());
        const getSegundo = inserirZero(dataTime.getSeconds());
        const capSemana = dataTime.getDay();
        const getDia = dataTime.getDate();
        const capMes = dataTime.getMonth();
        const getAno = dataTime.getFullYear();

        const semana = getSemana(capSemana);
        const mes = getMes(capMes);
        const com = message(dataTime.getHours());

        msg.textContent = com;

        hora.textContent = getHora;
        minuto.textContent = getMinuto;
        segundo.textContent = getSegundo;

        dataText.textContent = `${semana} - ${getDia} de ${mes} de ${getAno}`;
    },1000);

};