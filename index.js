function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }

  let mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
  };

  function wrapAdjective(symbol) {
    return function(adjective) {
      return `You are ${symbol}${adjective}${symbol}!`;
    };
  }
  
  console.log(wrapAdjective('*')('a hard worker'));
  console.log(wrapAdjective('||')('a hard worker'));

 