export const testFunction = (param?: boolean) => {
  console.log('test');
  !param && testFunction(true);
};

export default testFunction;
