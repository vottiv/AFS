// функция для приведения строки к camelCase
var toCamelCase = function (str) {
    var words = str.split(' ')
    var camelString = ''
    words.forEach(function(item, i, words) {

        if(i == 0) {

            camelString += item.toLowerCase()

        } else {

            camelString += item.charAt(0).toUpperCase() + item.substr(1).toLowerCase();

        }

    });

    return camelString

}

var tableToObject = function (table) {

// итоговый объект, который будем выводить в console.table
    var data = {}
// выбираем все строки
    var rows = table.getElementsByTagName('tr')
// объект с типами ячеек
    var attributeCol = {}

// собираем объект, который будет содержать названия столбцов
    for (var i = 0; i < 1; ++i)
    {
        head = rows[i].getElementsByTagName("th")

        var colHead = {}

        var colAttr = {}

        for (var j = 0; j < head.length; j++) {
            colHead[j] = toCamelCase(head[j].textContent)
            colAttr[j] = head[j].getAttribute('data-type')
        }

        // шапка
        head = colHead
        // атрибуты
        attributeCol = colAttr
    }

// выводим все строки таблицы
    for (var i = 1; i < rows.length; ++i)
    {
        var col = rows[i].getElementsByTagName("td")

        var colObj = {}

        // получаем каждую ячейку
        for(var j = 0; j < col.length; j++) {

            // делаем проверку на тип ячейки
            if(attributeCol[j] == 'int') {

                colObj[head[j]] = parseInt(col[j].textContent)

            } else if(attributeCol[j] == 'float') {

                colObj[head[j]] = parseFloat(col[j].textContent)

            } else if(attributeCol[j] == 'date') {

                colObj[head[j]] = new Date(col[j].textContent)

            } else {

                colObj[head[j]] = col[j].textContent

            }


        }

        data[i - 1] = colObj

    }

    console.table(data)
}

tableToObject(document.getElementsByTagName('table')[0])
