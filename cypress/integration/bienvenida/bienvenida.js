/* eslint-disable no-undef */
import { When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('estoy en la pagina de inicio', () => {
    cy.visit('/');
})

Then('deberia ver {string}', (mensaje) => {
    cy.contains(mensaje);
})