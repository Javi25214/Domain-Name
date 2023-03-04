import "bootstrap";
import "./style.css";

const domainName = (window.onload = function() {
  let domainName = [];
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domain = [".com"];

  pronoun.forEach(i => {
    adj.forEach(j => {
      noun.forEach(k => {
        domain.forEach(l => {
          domainName.push("  " + pronoun + adj + noun + domain);
        });
      });
    });
  });

  console.log(domainName);
  document.getElementById("domain.results").innerHTML = domainName;
});
