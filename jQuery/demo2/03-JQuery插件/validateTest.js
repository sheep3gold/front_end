$.validator.addMethod('pwdFormat',
    function (value, element, params) {
        var reg = new RegExp('^[a-zA-Z0-9]{' + params[0] + ',' + params[1] + '}$');
        if (reg.test(value)) {
            return true;
        } else {
            return false;
        }

    }, '密码必须是{0}-{1}位的字符或者数字');
$.validator.addMethod('cardFormat', function (value, element, params) {
    if (params) {
        if (value.length == 15) {
            var reg = /^\d{15}$/;
            return reg.test(value);
        } else if (value.length == 18) {
            var reg = /^\d{18}|\d{17}[X|x]$/;
            return reg.test(value);
        }
        return false;
    }
    return true;
});

$("#empForm").validate({
    rules:{
        realname:{
            required:true
        },
        username:{
            required:true,
            rangelength:[5,8]
        },
        password:{
            required:true,
            pwdFormat:[6,12]
        },
        repassword:{
            equalTo:'#password'
        },
        gender:{
            required:true
        },
        age:{
            required:true,
            min:26,
            max:50
        },
        education:{
            required:true
        },
        birthday:{
            required:true,
            date:true
        },
        hobby:{
            required:true
        },
        email:{
            required:true,
            email:true
        },
        card:{
            required:true,
            cardFormat:true
        }
    },
    messages: {
        realname: {
            required: '真实姓名必填'
        },
        username: {
            required: '登录名必填',
            rangelength: '登录名长度5-8'
        },
        password: {
            required: '密码必填'
        },
        repassword: {
            equalTo: '两次密码输入不一致'
        },
        gender: {
            required: '性别必选'
        },
        age: {
            required: '年龄必填',
            min: '年龄最小值是{0}',
            max: '年龄最大值是{0}'
        },
        education: {
            required: '学历信息是必填项'
        },
        birthday: {
            required: '出生日期是必填项',
            date: '出生日期格式不正确'
        },
        hobby: {
            required: '兴趣爱好是必填项'
        },
        email: {
            required: '邮箱是必填项',
            email: '邮箱格式不正确'
        },
        card: {
            required: '身份证是必填项',
            cardFormat: '身份证格式不正确'
        }
    },
    errorPlacement: function(error, element) {
        if ( element.is(":radio") )
            error.appendTo ( element.parent() );
        else if ( element.is(":checkbox") )
            error.appendTo ( element.parent() );
        //else if ( element.is("input[name=captcha]") )
        // error.appendTo ( element.parent() );
        else
            error.insertAfter(element);
    }
});