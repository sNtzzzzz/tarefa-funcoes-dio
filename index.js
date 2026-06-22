let quantVitorias = 90
let elo

function seuElo() {
    if (quantVitorias <= 10) {
        elo = "Ferro"
    } else if (quantVitorias <= 20) {
        elo = "Bronze"
    } else if (quantVitorias <= 50) {
        elo = "Prata"
    } else if (quantVitorias <= 80) {
        elo = "Ouro"
    } else if (quantVitorias <= 90) {
        elo = "Diamante"
    } else if (quantVitorias <= 100) {
        elo = "Lendário"
    } else if (quantVitorias > 100) {
        elo = "Imortal"
    }
    console.log("O Herói tem de saldo de " + quantVitorias + " vitórias, e está no nível de " + elo)
}
seuElo()