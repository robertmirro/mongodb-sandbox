function printData( collection ) {
    if ( !collection ) {
        return print( 'Specify a collection name...\n' );
    }

    print( '\nRecords:' );
    db[ collection ].find().forEach( printjson );
    print( '\nCount: ' + db[ collection ].count() );
}