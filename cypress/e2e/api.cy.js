const { id, username, firstName, lastName, email, password, phone, userStatus } = require('../fixtures/user.json')

describe('api', () => {
  it('should create new user', () => {
    cy.createUser( id[0], username, firstName, lastName, email, password, phone, userStatus).then((response) => {
      expect(response.status).to.eql(200)
    })
  });
  it("Should update id", () => {
    cy.createUser(id[0], username, firstName, lastName, email, password, phone, userStatus);
    cy.update(id[1], username, firstName, lastName, email, password, phone, userStatus).then((response) => {
      expect(response.status).to.be.eql(200);
    })
  })
  it("Should delete user", () => {
    cy.createUser(id[0], username, firstName, lastName, email, password, phone, userStatus);
    cy.delete(username).then((response) => {
      expect(response.status).to.be.eql(200);
      expect(response.body.firstName).to.not.equal("Anton");
    });
  });
});