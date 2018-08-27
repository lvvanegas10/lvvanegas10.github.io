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
    orientation: "horizontal",
    mode: "compact"
  });

  var master = gitgraph.branch("master");

gitgraph.commit("First commit")         // 3 commits upon HEAD
var develop = gitgraph.branch("Professional");    // New branch from HEAD

// Well, if you need to go deeper…
master.commit({
  sha1: "2012",
  message: "Began to play basketball"
});

master.commit({
  sha1: "Februar 2012",
  message: "Computing studies at school"
});

develop.commit({
    dotColor: "white",
    dotSize: 10,
    dotStrokeWidth: 10,
    sha1: " December",
    message: "Graduate from school"
  });

var uni = gitgraph.branch("University");
uni.commit({
  sha1: "2013 December",
  message: "Won Quiero Estudiar Scholarship"
});

uni.commit({
  dotColor: "white",
  dotSize: 10,
  dotStrokeWidth: 10,
  sha1: "Januar 2014",
  message: "Began to study Industrial engineering",
});

master.merge(uni)

var uni2 = gitgraph.branch("System");
uni2.commit({
  dotColor: "white",
  dotSize: 10,
  dotStrokeWidth: 10,
  sha1: "Januar 2016",
  message: "Began to study System and Computing engineering"
});

uni2.commit({
  sha1: "February 2017",
  message: "Teaching assistant OOP"
});


uni2.commit({
  sha1: "February 2018",
  message: "Join The Software Desing Lab"
});




