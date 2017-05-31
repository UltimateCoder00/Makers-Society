var Society = artifacts.require("./Society.sol");

contract("Society", function(accounts) {
  it ("Should add member to society", function() {
    var society;
    var contract_owner = accounts[0];
    var account_two = accounts[1];
    var loggedEvent;

    return Society.deployed().then(function(instance) {
      society = instance;
      return society.addMember(account_two, "Steph")
    }).then(function(result){
      loggedEvent = result.logs[0].event;
      assert.equal(loggedEvent, "MembershipChanged", "Should return membership event");
    });
  });

  it("Should remove a member from society", function() {
    var society;
    var contract_owner = accounts[0];
    var account_two = accounts[1];
    var loggedEvent;

    return Society.deployed().then(function(instance) {
      society = instance;
      return society.addMember(account_two, "Steph")
    }).then(function(){
      return society.removeMember(account_two)
    }).then(function(result){
      loggedEvent = result.logs[0].event;
      assert.equal(loggedEvent, "MembershipChanged", "Should return membership event")
    });
  });
});

contract("Society", function(accounts) {
  it("Agrees to the manifesto", function() {
    var society;
    var contract_owner = accounts[0];
    var account_two = accounts[1];
    var loggedEvent;

    return Society.deployed().then(function(instance) {
      society = instance;
      return society.agreesToManifesto()
    }).then(function(result){
      loggedEvent = result.logs[0].event;
      assert.equal(loggedEvent, "AgreedToManifesto", "Should return membership event");
    });
  });
});
