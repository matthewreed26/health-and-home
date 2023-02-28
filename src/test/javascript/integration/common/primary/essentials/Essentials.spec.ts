import { dataTestSelector } from '@/utils/DataTestSelector';

describe('Essentials', () => {
  it('display basic essentials', () => {
    cy.visit('/essentials');
    cy.contains(dataTestSelector('essential-conditioner'), 'Conditioner');
    cy.contains(dataTestSelector('essential-mouthwash'), 'Mouthwash');
  });
});
