var quizApp = angular.module('quizApp', []);

quizApp.factory('Quizzes', function() {
  return [
    {
        name: 'Akzidenz Grotesk',
        publisher: 'Berthold',
        year: 1896,
        designer: 'Günter Gerhard Lange',
        style: 'Std Regular',
        answer: 'akz'
    },
    {

        name: 'American Typewriter',
        publisher: 'ITC',
        year: 1974,
        designer: 'Joel Kaden and Tony Stan',
        style: 'Std Medium',
        answer: 'ame'
    },
    {
        name: 'Avant Garde Gothic',
        publisher: 'ITC',
        year: 1974,
        designer: 'Herb Lubalin and Tom Carnase',
        style: 'Std Book',
        answer: 'ava'
    },
    {
        name: 'Antique Olive',
        publisher: 'Linotype',
        year: 1962,
        designer: 'Roger Excoffon',
        style: 'Roman',
        answer: 'ant'
    },
    {
        name: 'Arial',
        publisher: 'Monotype',
        year: 1982,
        designer: 'Robin Nicholas and Patricia Saunders',
        style: 'Std Regular',
        answer: 'ari'
    },
    {
        name: 'Archer',
        publisher: 'Hoefler & Frere-Jones',
        year: 2007,
        designer: 'Jonathan Hoefler and Tobias Frere-Jones',
        style: 'Book',
        answer: 'arc'
    },
    {
        name: 'Avenir',
        publisher: 'Linotype',
        year: 1988,
        designer: 'Adrian Frutiger',
        style: '55 Roman',
        answer: 'ave'
    },
    {
        name: 'Bank Gothic',
        publisher: 'Bitstream',
        year: 1930,
        designer: 'Morris Fuller Benton',
        style: '55 Roman',
        answer: 'ban'
    },
    {
        name: 'Baskerville',
        publisher: 'Bitstream',
        year: 1757,
        designer: 'John Baskerville',
        style: 'Roman',
        answer: 'bas'
    },
    {
        name: 'Bodoni',
        publisher: 'Linotype',
        year: 1767,
        designer: 'Giambattista Bodoni',
        style: 'Roman',
        answer: 'bod'
    },
    {
        name: 'Brandon Grotesque',
        publisher: 'HVD Fonts',
        year: 2009,
        designer: 'Hannes von Döhren',
        style: 'Regular',
        answer: 'bra'
    },
    {
        name: 'Caslon',
        publisher: 'Linotype',
        year: 1725,
        designer: 'William Caslon',
        style: 'Regular',
        answer: 'cas'
    },
    {
        name: 'Century Gothic',
        publisher: 'Monotype',
        year: 1959,
        designer: 'Sol Hess',
        // NOTE: Sol Hess created 20th century in 1959
        // but Morris Fuller Benton adapted to Century Gothic in 1990
        style: 'Std Regular',
        answer: 'cen'
    },
    {
        name: 'Clarendon',
        publisher: 'Bitstream',
        year: 1845,
        designer: 'Edouard Hoffmann and Hermann Eidenbenz',
        style: '',
        answer: 'cla'
    },
    {
        name: 'Comic Sans',
        publisher: 'Ascender',
        year: 1995,
        designer: 'Vincent Connare',
        style: '',
        answer: 'com'
    },
    {
        name: 'Cooper Black',
        publisher: 'Linotype',
        year: 1922,
        designer: 'Oswald Bruce Cooper',
        style: '',
        answer: 'coo'
    },
    {
        name: 'Copperplate Gothic',
        publisher: 'Bitstream',
        year: 1905,
        designer: 'Frederic W. Goudy',
        style: '',
        answer: 'cop'
    },
    {
        name: 'Dax',
        publisher: 'FontFont',
        year: 1995,
        designer: 'Hans Reichel',
        style: 'FF Dax Pro Regular',
        answer: 'dax'
    },
    {
        name: 'Didot',
        publisher: 'Adobe',
        year: 1783,
        designer: 'Firmin Didot',
        style: 'LT Std Roman',
        answer: 'did'
    },
    {
        name: 'Din',
        publisher: 'FontFont',
        year: 1995,
        designer: 'Albert-Jan Pool',
        style: 'FF Din Pro',
        answer: 'din'
    },
    {
        name: 'Eurostile',
        publisher: 'Linotype',
        year: 1962,
        designer: 'Aldo Novarese',
        style: '',
        answer: 'eur'
    },
    {
        name: 'Franklin Gothic',
        publisher: 'ITC',
        year: 1902,
        designer: 'Morris Fuller Benton',
        style: 'Std Book',
        answer: 'fra'
    },
    {
        name: 'Frutiger',
        publisher: 'URW++',
        year: 1968,
        designer: 'Adrian Frutiger',
        style: '55 Roman',
        answer: 'fru'
    },
    {
        name: 'Futura',
        publisher: 'Linotype',
        year: 1932,
        designer: 'Paul Renner',
        style: 'Medium',
        answer: 'fut'
    },
    {
        name: 'Garamond',
        publisher: 'Linotype',
        year: 1495,
        designer: 'Claude Garamond',
        style: 'Adobe Garamond Regular',
        answer: 'gar'
    },
    {
        name: 'Georgia',
        publisher: 'Ascender',
        year: 1996,
        designer: 'Matthew Carter',
        style: '',
        answer: 'geo'
    },
    {
        name: 'Gill Sans',
        publisher: 'Monotype',
        year: 1928,
        designer: 'Eric Gill',
        style: '',
        answer: 'gil'
    },
    {
        name: 'Gotham',
        publisher: 'Hoefler & Frere-Jones',
        year: 2000,
        designer: 'Jonathan Hoefler and Tobias Frere-Jones',
        style: 'Book',
        answer: 'got'
    },
    {
        name: 'Helvetica',
        publisher: 'Adobe',
        year: 1957,
        designer: 'Max Miedinger',
        style: 'Roman',
        answer: 'hel'
    },
    {
        name: 'Interstate',
        publisher: 'Font Bureau',
        year: 1993,
        designer: 'Tobias Frere-Jones',
        style: 'Regular',
        answer: 'int'
    },
    {
        name: 'Johnston',
        publisher: 'P22',
        year: 1916,
        designer: 'Edward Johnston',
        style: 'P22 Johnston Underground',
        answer: 'joh'
    },
    {
        name: 'Kabel',
        publisher: 'Linotype',
        year: 1928,
        designer: 'Rudolf Koch',
        style: 'Book',
        answer: 'kab'
    },
    {
        name: 'Lucida Sans',
        publisher: 'Adobe',
        year: 1985,
        designer: 'Charles Bigelow and Kris Holmes',
        style: 'Roman',
        answer: 'luc'
    },
    {
        name: 'Minion',
        publisher: 'Adobe',
        year: 1990,
        designer: 'Robert Slimbach',
        style: 'Pro Regular',
        answer: 'min'
    },
    {
        name: 'Mistral',
        publisher: 'Adobe',
        year: 1953,
        designer: 'Roger Excoffon',
        style: 'Std',
        answer: 'mis'
    },
    {
        name: 'Museo',
        publisher: 'exljbris',
        year: 2008,
        designer: 'Jos Buivenga',
        style: '300',
        answer: 'mus'
    },
    {
        name: 'Myriad',
        publisher: 'Adobe',
        year: 1992,
        designer: 'Robert Slimbach',
        style: 'Pro Regular',
        answer: 'myr'
    },
    {
        name: 'News Gothic',
        publisher: 'Adobe',
        year: 1908,
        designer: 'Morris Fuller Benton',
        style: 'Pro Regular',
        answer: 'new'
    },
    {
        name: 'Optima',
        publisher: 'Linotype',
        year: 1958,
        designer: 'Hermann Zapf',
        style: '',
        answer: 'opt'
    },
    {
        name: 'Palatino',
        publisher: 'Linotype',
        year: 1986,
        designer: 'Hermann Zapf',
        style: 'Roman',
        answer: 'pal'
    },
    {
        name: 'Proxima Nova',
        publisher: 'Mark Simonson',
        year: 2005,
        designer: 'Mark Simonson',
        style: 'Regular',
        answer: 'pro'
    },
    {
        name: 'Rockwell',
        publisher: 'Monotype',
        year: 1934,
        designer: 'Frank Hinman Pierpont',
        style: 'Std',
        answer: 'roc'
    },
    {
        name: 'Rotis',
        publisher: 'Monotype',
        year: 1988,
        designer: 'Otl Aicher',
        style: 'Sans Serif',
        answer: 'rot'
    },
    {
        name: 'Times New Roman',
        publisher: 'Monotype',
        year: 1931,
        designer: 'Victor Lardent',
        style: 'Std Regular',
        answer: 'tim'
    },
    {
        name: 'Trade Gothic',
        publisher: 'Linotype',
        year: 1948,
        designer: 'Jackson Burke',
        style: '',
        answer: 'tra'
    },
    {
        name: 'Univers',
        publisher: 'Linotype',
        year: 1957,
        designer: 'Adrian Frutiger',
        style: '55 Roman',
        answer: 'uni'
    },
    {
        name: 'Verdana',
        publisher: 'Ascender',
        year: 1996,
        designer: 'Matthew Carter',
        style: '',
        answer: 'ver'
    }
    // TO ADD (after name conflicts) with Frankfurter and VAG Rounded
    // {
    //   name: 'Trajan',
    //   publisher: 'Adobe',
    //   year: 1989,
    //   designer: 'Carol Twombly',
    //   style: 'Pro',
    //   answer: 'tra',
    // },
  ];
});

quizApp.factory('Hints', function() {
  return ['Aa', 'Bb', 'Cc', 'Dd', 'Ee', 'Ff', 'Gg', 'Hh', 'Ii', 'Jj', 'Kk', 'Ll', 'Mm', 'Nn', 'Oo', 'Pp',
  'Qq', 'Rr', 'Ss', 'Tt', 'Uu', 'Vv', 'Ww', 'Xx', 'Yy', 'Zz', '12', '34', '56', '78', '90'];
});

function QuizCtrl($scope, $interval, Quizzes, Hints) {
  function shuffle(array){
    for(var j, x, i = array.length; i; j = Math.floor(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
    return array;
  };

  $scope.quizzes = shuffle(Quizzes);
  var quizIndex = 0;
  var tickCount = $scope.quizzes.length;
  var timer = $interval();

  $scope.ticks = function() {
    return new Array(tickCount);
  };

  $scope.$watch('guess', function(value) {
    if($scope.guess.length == $scope.quiz.answer.length) {
      setOutcome()
    }
  });

  $scope.selectHint = function(hint) {
    $scope.quiz.hint = hint;
  };

  function setOutcome() {
    $interval.cancel(timer);
    $scope.quiz.outcome = ($scope.guess == $scope.quiz.answer);
    mixpanel.track("Guess", {
      "guess": $scope.guess,
      "answer": $scope.quiz.answer,
      "outcome": $scope.quiz.outcome,
      "index": quizIndex
    });
  };

  function hintsFor(quiz) {
    return shuffle(Hints).slice(0, 10).map( function(hint) {
      return "hints/" + quiz.answer + "/" + hint + ".gif";
    })
  };

  $scope.isGuessed = function(quiz) {
    return typeof(quiz.outcome) != 'undefined'
  };

  $scope.isRight = function(quiz) {
    return quiz.outcome == true
  };

  $scope.isWrong = function(quiz) {
    return quiz.outcome == false
  };

  $scope.quizzes.over = function() {
    return quizIndex >= $scope.quizzes.length;
  };

  $scope.quizzes.next = function() {
    $scope.quiz = $scope.quizzes[quizIndex++];
    $scope.hints = hintsFor($scope.quiz);
    $scope.quiz.hint = $scope.hints[Math.floor(Math.random() * $scope.hints.length)];
    $scope.guess = '';

    $scope.tick = 0;
    timer = $interval(function () {$scope.tick++}, 15000/tickCount, tickCount)
    timer.then(setOutcome);
  };

  $scope.quizzes.next();
}