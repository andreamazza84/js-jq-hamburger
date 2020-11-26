// Hamburger menu:
// mostrare / nascondere il menu principale
// (ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).
// Partite come base del vostro esercizio scaricando questa repo:
// https://bitbucket.org/booleancareers/ex-hamburger-menu-base/downloads
// Ricordate di scrivere solo il codice JavaScript con jQuery e non modificare HTML e CSS
// Consiglio del giorno:
// Partite dal comprendere bene come è fatto il DOM e il CSS, potete usarli a nostro vantaggio!
// Ecco il link alla documentazione di jQuery:
// https://jquery.com/
// Vi ho messo anche gli screenshots  che abbiamo visto a lezione.
// Buon Lavoro e Divertitevi con jQuery

//**************************************************************************************//
//Cliccando l'hamburger deve apparire il menu; cliccando sulla "x" deve scomparire.

//Seleziono gli elementi da cliccare.
var hamburger = $('.header-right > a');
var close = $('.hamburger-menu > a');

//Al click dell'hamburger faccio apparire il menù (inizialmente "display:none") utilizzando la action .fadeIn
hamburger.click(function(){
  $('.hamburger-menu').fadeIn(300);
});

//Al click dell'elemento .clore ("x"), faccio sparire il menu precedentemente aperto con .fadeOut
close.click(function(){
  $('.hamburger-menu').fadeOut(100);
});
