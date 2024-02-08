function updateTimes(prevState, nextState){
    return  {...prevState, ...nextState};
  }

  test('Testing if the same value is provided in the state', () => {
    const prevState = {time: "17:00"}
    const nextState = {time: "18:00"}
    expect(updateTimes(prevState, nextState)).toEqual(prevState, nextState)
    expect(updateTimes(prevState, nextState)).not.otBe(prevState, nextState)
  });