$(loaded);
function loaded() {
    if (window.localStorage) {
        showText();
        // ボタンをクリックしたときに実行するイベントを設定
        $("#formButton").click(
            function() {
                saveText();
                showText();
            }
        );
    }else {
        alert("本アプリ未対応のため、対応ブラウザを使用してください")
    }
}

// 全クリアボタン挙動
$("#clearButton").click(
    function() {
        localStorage.clear();
        showText();
    }
);

// 入力された内容をローカルストレージに保存する
function saveText() {
    // 時刻をキーにして入力されたテキストを保存する
    var name = $("#formName");
    var text = $("#formText");
    var time = new Date();
    // 投稿日時
    var postdate = time.getFullYear() + "/" + ("0"+( time.getMonth()+1)).slice(-2)+ "/" +
    ("0"+time.getDate()).slice(-2) + " " +
    ("0"+time.getHours()).slice(-2)+ ":" +
    ("0"+time.getMinutes()).slice(-2)+ ":" +
    ("0"+time.getSeconds()).slice(-2);

    var val = postdate +"  " + name.val() +"  " + text.val();

    // 入力チェックをしてからローカルストレージに保存
    if(checkText(val)) {
        localStorage.setItem(time, val);
        // テキストボックスを空に
        name.val("");
        text.val("");
    }
}

// ローカルストレージに保存した値を再描画
function showText() {
    // すでにある要素を削除
    var list = $("list");
    list.children().remove();
    // ローカルストレージに保存された値すべてを要素に追加
    var key, value, html = [];
    for(var i=localStorage.length-1; i>=0; i--) {
        key = localStorage.key(i);
        value = localStorage.getItem(key);
        // 表示する前にエスケープ
        html.push($("").html(escapeText(value)));
    }
    $("list").append("html")
}

// 文字をエスケープ
function escapeText(text) {
    var TABLE_FOR_ESCAPE_HTML = {
        "&": "&",
        "\"": "\"",
        "<": "<",
        ">": ">",
    };
    return text.replace(/[&"<>]/g, function(match) {
        return TABLE_FOR_ESCAPE_HTML[match];
    });
}

// 入力チェックを行う
function checkText(text) {
    // 文字数が0または101以上は不可
    if(0 === text.length || 101 < text.length) {
        alert("文字数は100字以内で記入してください");
        return false;
    }

    // すでに入力された値があれば不可
    var length = localStorage.length;
    for (var i =0; i<length; i++) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);

        // 内容が一致するものがあるか比較
        if(text === value) {
            alert("同じ内容は止めてください");
            return false;
        }
    }

    // すべてのチェックを通過すればOK
    return true;
}