var myTemplateConfig = {
    colors: [ "#66f", "#660000", "#00BB00" ], // branches colors, 1 per column
    branch: {
      lineWidth: 8,
      spacingX: 50,
      showLabel: false,                  // display branch names on graph
    },
    commit: {
      spacingY: -80,
      dot: {
        size: 12
      },
      message: {
        displayAuthor: true,
        displayBranch: true,
        displayHash: true,
        font: "normal 12pt Arial"
      },
      shouldDisplayTooltipsInCompactMode: false, // default = true
      tooltipHTMLFormatter: function ( commit ) {
        return "" + commit.sha1 + "" + ": " + commit.message;
      }
    }
  };

var myTemplate = new GitGraph.Template( myTemplateConfig );

var gitgraph = new GitGraph({
    template: "metro",
    orientation: "vertical-reverse",
    mode: "compact"
  });

  var master = gitgraph.branch("master");

gitgraph.commit("First commit")         // 3 commits upon HEAD
var develop = gitgraph.branch("Professional");    // New branch from HEAD
var myfeature = develop.branch("myfeature"); // New branch from develop

// Well, if you need to go deeper…

var hotfix = gitgraph.branch({
  parentBranch: develop,
  name: "hotfix",
  column: 2             // which column index it should be displayed in
});

develop.commit({
    dotColor: "white",
    dotSize: 10,
    dotStrokeWidth: 10,
    sha1: "666",
    message: "Pimp dat commit",
    author: "Jacky <prince@dutunning.com>",
    tag: "a-super-tag",
    onClick: function(commit) {
      console.log("Oh, you clicked my commit?!", commit);
    }
  });

  master.merge(develop); // Merge master into develop
