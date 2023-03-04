import "bootstrap";
import "./style.css";

const domainName = (window.onload = function() {
  let domainName = [];
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domain = [".com"];

  pronoun.forEach(pronoun => {
    adj.forEach(adj => {
      noun.forEach(noun => {
        domain.forEach(domain => {
          domainName.push("  " + pronoun + adj + noun + domain);
        });
      });
    });
  });

  console.log(domainName);
  document.getElementById("domain.results").innerHTML = domainName;
});
