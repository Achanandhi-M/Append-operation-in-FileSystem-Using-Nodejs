var fs=require('fs')
fs.appendFile('file.txt','The data is appended',function(err){
    if(err){
        console.log(err);//if file is not present it will create file
    }
    console.log('Appended successfully')
    console.log('After Append:',fs.readFileSync('file.txt','utf8'))
})