

function selectEle(id){
    return function(color){
        document.getElementById(id).style.color=color

    }
}

const mainBtn = selectEle('main')

//logic
mainBtn('red')


mainBtn('green')