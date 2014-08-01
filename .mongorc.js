function findData() {
    print( '\nRecords:' );
    db.testData.find().forEach( printjson );
    print( '\nCount: ' + db.testData.count() );
}