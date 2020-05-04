describe("Sample test 101", () => {
  it("works as expected", () => {
    expect(1).toEqual(1);
  });

  it('handles ranges just fine', () =>{
    const age = 200;
    expect(age).toBeGreaterThan(100);
  })

  it('Makes a list of dog names', () => {
    const dogs = ['snickers', 'buddy'];
    expect(dogs).toEqual(dogs);
    expect(dogs).toContain('snickers');
  })
});
