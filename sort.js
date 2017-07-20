"use strict"
function collection_sort(collection)
{
    var collection_sort=[];
    var min=0;
    do{
        for (let col of collection)
        {
            if(col<=min)
            {
                min=col;
            }
            else
            {
                min;
            }
        }
        collection_sort.push(min);
        var i=collection.toString().indexOf(min,0);
        collection.remove(i);
    }while (collection.length==0);
}
let collection=[1,4,2,3,4,8,5,9];
collection_sort(collection);