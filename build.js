var sass = require('node-sass'),
    fs = require('fs');

var sass_dir = 'scss/vox.scss',
    output_dir = 'css/',
    output_css = output_dir + 'vox.css';

if (!fs.existsSync(output_dir)){
    fs.mkdirSync(output_dir);
}

sass.render({
    file: sass_dir,
    outFile: output_css,
    outputStyle: 'expanded'
}, function(error, result) {
    if(error){
        console.log('\x1b[31m%s\x1b[0m', error);
    }

    if(!error){
      // No errors during the compilation, write this result on the disk 
        fs.writeFile(output_css, result.css, function(err){
            if(err){
            console.log('\x1b[31m%s\x1b[0m', err);
            }
            else{
                console.log('\x1b[32m%s\x1b[0m', 'sass writed');
            }
      });
    }
});
