
var prompt = function() { 
    return '\n[' + db + ( db.serverStatus().ok == '1' ? '@' + db.serverStatus().host : '' ) + '] ' + pwd() + '\n>'; 
}

function prettyPrintData( collection , criteria , projection ) {
    if ( !collection ) {
        return print( 'Specify a collection name...\n' );
    }
    criteria = criteria || {};
    projection = projection || {};

    print( '\nRecords:' );
    db[ collection ].find( criteria , projection ).forEach( printjson );
    print( '\nRecords Returned: ' + db[ collection ].find( criteria , projection ).count() );
    print( '\nTotal Count: ' + db[ collection ].count() );
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

function printAllKeys( collection ) {
    if ( !collection ) {
        return print( 'Specify a collection name...\n' );
    }

    var c = db[ collection ].find().toArray();
    if ( c ) {
        for ( var key in c ) {
            print( Object.keys( c[ key ] ).sort() );
        }
    }
}

function prettyObjsLeftInBatch( collection , criteria , projection ) {
    if ( !collection ) {
        return print( 'Specify a collection name...\n' );
    }
    criteria = criteria || {};
    projection = projection || {};

    var c = db[ collection ].find( criteria , projection );
    if ( c ) {
        while ( c.hasNext() ) {
            printjson( c.next() )
            print( 'ObjsLeftInBatch: ' + c.objsLeftInBatch() );
        }        
    }
}

