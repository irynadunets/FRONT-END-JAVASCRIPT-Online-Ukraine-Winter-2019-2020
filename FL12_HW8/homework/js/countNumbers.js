let makeNumber = (String) => String.split('')
                                   .filter(x => !isNaN(parseInt(x, 10)))
                                   .join('');

let countNumbers = ( String ) => makeNumber(String).split('')
                                                   .reduce( function( count , v ) {
                                                          ! count[v] ? count[ v ] = 1 : count[ v ] = count[ v ] + 1 ;
                                                          return count ;
  }, {} );

countNumbers('erer384jj4444666888jfd123');
countNumbers('jdjjka000466588kkkfs662555');
countNumbers('');
