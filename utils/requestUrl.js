module.exports = (code) => {
  var regionList = {
    B: "sen",
    C: "pen",
    D: "dge",
    E: "ice",
    F: "gen",
    G: "dje",
    H: "use",
    I: "sje",
    J: "goe",
    K: "kwe",
    M: "cbe",
    N: "cne",
    P: "jbe",
    Q: "jne",
    R: "gbe",
    S: "gne",
    T: "jje"
  };

  var region = code.substring(0, 1);
  return regionList[region] + "hcs.eduro.go.kr";
};
