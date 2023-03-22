+ function($) {
    $('.palceholder').click(function() {
      $(this).siblings('input').focus();
    });
  
    $('.form-control').focus(function() {
      $(this).parent().addClass("focused");
    });
  
    $('.form-control').blur(function() {
      var $this = $(this);
      if ($this.val().length == 0)
        $(this).parent().removeClass("focused");
    });
    $('.form-control').blur();
  
    // validetion
    $.validator.setDefaults({
      errorElement: 'span',
      errorClass: 'validate-tooltip'
    });
  
    $("#formvalidate").validate({
      rules: {
        userName: {
          required: true,
          minlength: 6
        },
        userPassword: {
          required: true,
          minlength: 6
        },
        Email:{
            required:true,
            minlength : 10,

        },
        MobileNo: {
            required: true,
            length: 10,
        },
        Name: {
            required: true,
        },
        ConnfirmPassword: {
            required: true,
            minlength: 6,
        }
         

      },
      messages: {
        userName: {
          required: "Please enter your username.",
          minlength: "Please provide valid username."
        },
        userPassword: {
          required: "Enter your password to Login.",
          minlength: "Incorrect login or password."
        },
        Email: {
            required: "Enter valid email.",
            minlength: "Invalid email."
          },
        MobileNo: {
            required: "Enter valid Mobile No.",
            minlength: "Please provide 10 digit Mobile No"
        },
        Name: {
            required: "Enter valid Name ",
        },
        ConfirmPassword: {
            requuired: "Enter the valid password ",
            minlength: "Incorrect Password"
        }

        
      }
    });
  
  }(jQuery);