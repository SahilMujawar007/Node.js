const { getMaxListeners, setMaxListeners, EventEmitter } = require('node:events');

{
  const ee = new EventEmitter();
  console.log('The defult maximum number of event listners are: ', getMaxListeners(ee)); 
  setMaxListeners(5, ee);
  console.log('The updated maximum number of event listners are: ', getMaxListeners(ee)); 
}
