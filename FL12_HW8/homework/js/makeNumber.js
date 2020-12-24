let makeNumber = ( String ) => String.split('')
                                     .filter(x => !isNaN(parseInt(x, 10)))
                                     .join('');
makeNumber('erer384jjjfd123');
makeNumber('123098h76gfdd');
makeNumber('ijifjgdj');
