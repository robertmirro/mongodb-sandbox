function prettyPrintData( collection , criteria , projection ) {
    if ( !collection ) {
        return print( 'Specify a collection name...\n' );
    }
    criteria = criteria || {};
    projection = projection || {};

    print( '\nRecords:' );
    db[ collection ].find( criteria , projection ).forEach( printjson );
    print( '\nCount: ' + db[ collection ].count() );
}

function printKeys( collection ) {
    if ( !collection ) {
        return print( 'Specify a collection name...\n' );
    }

    var c = db[ collection ].findOne();
    if ( c ) {
        for ( var key in c ) {
            print( key );
        }
    }
}

