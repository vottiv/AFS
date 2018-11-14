var deleteSpace = function(fileName){

    console.time('TIMER')

    // модуль fs для работы с файлами
    var fs = require("fs")

    // читаем файл
    fs.readFile(fileName, "utf8", function(error,data){

        console.log('Файл "' + fileName +'" прочитан, вот его текст: \n' + data)

        // убираем пробелы
        newString = data.replace(/\s+/g,' ').trim()

        // записываем новый файл
        fs.writeFile("converted_" + fileName, newString, function(error){

            if(error){

                // произошла ошибка
                throw error;

            } else {

                // всё успешно
                console.log('Создан новый файл и убраны пробелы')

            }
        });

    });

    console.timeEnd('TIMER')

}

deleteSpace("text.txt");
