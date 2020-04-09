$(document).ready(function(){
    $("#clear").click(function(){
        $("#clear2").trigger('click');
    });
    $("#submit1").click(function(){
        $("#form1").submit();

    });

    //表单校验

    $("#form1").validate({
        rules: {
            // 不需要使用 "" 括起来
            name: {
                required: true,
                rangelength: [6, 10]
    },
            talk: {
                required: true,
                rangelength: [6, 16]
            },
            reTalk: {
                required: true,
                rangelength: [6, 16],
                equalTo: "#talk"//密码对应框的id
            },
            trueName: {
                required: true,
            },
            sex: {
                required: true,
            },
            personalNumber: {
                required: true,
                isIdCardNo: true,
            },
            Tel: {
                required: true,
                isMobile: true
            },
            QQ: {
                required: true,
            },
            year: {
                required: true,
            },
            month: {
                required: true,
            },
            day: {
                required: true,
            },
        }
    });
    $("#form2").validate({
        rules: {
            // 不需要使用 "" 括起来
            province: {
                required: true,
            },
            job: {
                required: true,
            },
            hobby: {
                required: true,
            },
            money: {
                required: true,
            },
            marry: {
                required: true,
            },
            eduction: {
                required: true,
            },
            personalWeb: {
                required: true,
                url: true,
            },
            postalCode: {
                required: true,
                isZipCode: true,
            },




        }
    });

    //

    //pdf文件
    $("#book_01").click(function () {
        var url = "未婚妻.pdf";
        window.open("build/generic/web/viewer.html?file=" + url);
    });
    $("#book_02").click(function () {
        var url = "平面狗.pdf";
        window.open("build/generic/web/viewer.html?file=" + url);
    });
    $("#book_03").click(function () {
            var url = "小偷抓住的手.pdf";
            window.open("build/generic/web/viewer.html?file=" + url);
    });
    $("#book_04").click(function () {
        var url = "未来预报.pdf";
        window.open("build/generic/web/viewer.html?file=" + url);
    });
    $("#book_05").click(function () {
        var url = "只有你听到.pdf";
        window.open("build/generic/web/viewer.html?file=" + url);
    });
    $("#book_06").click(function () {
        var url = "伤KIZ-KIDS.pdf";
        window.open("build/generic/web/viewer.html?file=" + url);
    });
    $("#book_07").click(function () {
        var url = "暗黑童话.pdf";
        window.open("build/generic/web/viewer.html?file=" + url);
    });
    $("#book_08").click(function () {
        var url = "The Book.pdf";
        window.open("build/generic/web/viewer.html?file=" + url);
    });
});


$(function(){
    $("#submit1").click(function (){
        var name = $("#name").val();
        window.open("user.html","_blank");
        localStorage.setItem('name', name);
    })
});



function myCheck1()
{
    for(var i=0;i<document.form1.elements.length-1;i++)
    {
        if(document.form1.elements[i].value==="")
        {
            alert("当前表单不能有空项");
            document.form1.elements[i].focus();
            return false;
        }
    }
    return true;

}





